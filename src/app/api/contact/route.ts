import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

import { checkContactRateLimit } from "@/lib/contact/rate-limit";
import {
  normalizeContactFields,
  parseContactJson,
  validateContactFields,
} from "@/lib/contact/validate";

export const runtime = "nodejs";

type JsonBody = { success: boolean; message: string };

const RATE_WINDOW_MS = Number(
  process.env.CONTACT_RATE_LIMIT_WINDOW_MS ?? 900_000,
);
const RATE_MAX = Number(process.env.CONTACT_RATE_LIMIT_MAX ?? 5);

function json(data: JsonBody, status: number) {
  return NextResponse.json(data, { status });
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isMockMode(): boolean {
  const v = process.env.CONTACT_MOCK?.toLowerCase();
  return v === "1" || v === "true" || v === "yes";
}

function smtpConfigured(): boolean {
  return Boolean(
    process.env.EMAIL_USER?.trim() && process.env.EMAIL_PASS?.trim(),
  );
}

function getNotifyTo(): string {
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.EMAIL_USER?.trim();
  return to || from || "";
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (!checkContactRateLimit(ip, RATE_WINDOW_MS, RATE_MAX)) {
      return json(
        { success: false, message: "Too many requests. Try again later." },
        429,
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return json({ success: false, message: "Invalid JSON body." }, 400);
    }

    const parsed = parseContactJson(body);
    if (!parsed) {
      return json(
        { success: false, message: "Expected name, email, and message." },
        400,
      );
    }

    const fields = normalizeContactFields(parsed);
    const validationError = validateContactFields(fields);
    if (validationError) {
      return json({ success: false, message: validationError }, 400);
    }

    if (isMockMode()) {
      return json(
        {
          success: true,
          message: "Message recorded (mock mode — email not sent).",
        },
        200,
      );
    }

    if (!smtpConfigured()) {
      return json(
        {
          success: false,
          message: "Contact email is not configured.",
        },
        503,
      );
    }

    const notifyTo = getNotifyTo();
    if (!notifyTo) {
      return json(
        { success: false, message: "CONTACT_TO_EMAIL or EMAIL_USER is missing." },
        503,
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const siteName = process.env.CONTACT_SITE_NAME?.trim() || "Portfolio";

    const ownerText = [
      `New contact form submission (${siteName})`,
      "",
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      "",
      "Message:",
      fields.message,
    ].join("\n");

    await transporter.sendMail({
      from: `"${siteName} contact" <${process.env.EMAIL_USER}>`,
      to: notifyTo,
      replyTo: fields.email,
      subject: `[${siteName}] Message from ${fields.name}`,
      text: ownerText,
    });

    const autoReplyText = [
      `Hi ${fields.name},`,
      "",
      "Thanks for your message — it was received successfully. I'll get back to you when I can.",
      "",
      "— Sulav Karki",
    ].join("\n");

    try {
      await transporter.sendMail({
        from: `"Sulav Karki" <${process.env.EMAIL_USER}>`,
        to: fields.email,
        subject: "We received your message",
        text: autoReplyText,
      });
    } catch {
      /* Notification already delivered; auto-reply is best-effort. */
    }

    return json({ success: true, message: "Message sent successfully." }, 200);
  } catch {
    return json(
      { success: false, message: "Something went wrong. Please try again." },
      500,
    );
  }
}

export function GET() {
  return json({ success: false, message: "Method not allowed." }, 405);
}
