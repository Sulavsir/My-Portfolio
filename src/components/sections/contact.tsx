"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/data";

function hostLabel(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

const mapsQuery = encodeURIComponent(`${site.address}, Nepal`);

const links = [
  {
    icon: MapPin,
    label: "Location",
    href: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
    value: site.address,
  },
  {
    icon: Phone,
    label: "Phone",
    href: `tel:${site.phoneE164}`,
    value: site.phone,
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${site.email}`,
    value: site.email,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: site.whatsappHref,
    value: site.phone,
  },
  {
    icon: Github,
    label: "GitHub",
    href: site.github,
    value: hostLabel(site.github),
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: site.linkedin,
    value: hostLabel(site.linkedin),
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: site.instagram,
    value: hostLabel(site.instagram),
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: site.facebook,
    value: hostLabel(site.facebook),
  },
] as const;

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const message = String(fd.get("message") ?? "");

    setStatus("loading");
    setFeedback(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = (await res.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!res.ok || !data.success) {
        setStatus("error");
        setFeedback(
          data.message ?? "Something went wrong. Please try again.",
        );
        return;
      }

      setStatus("success");
      setFeedback(data.message ?? "Message sent.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Network error. Check your connection and try again.");
    }
  }

  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-28 border-t border-white/[0.06] py-16 pb-24 sm:py-24 sm:pb-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Get in touch
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-10">
          <Reveal delay={0.05}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {links.map((item) => (
                <motion.div key={item.label} whileHover={{ x: 2 }}>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex min-h-[4.5rem] items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3.5 backdrop-blur-xl transition hover:border-white/15 sm:gap-4 sm:p-4"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-zinc-300 ring-1 ring-white/10 sm:h-11 sm:w-11">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 sm:text-xs">
                        {item.label}
                      </p>
                      <p className="mt-0.5 break-words text-sm font-medium text-zinc-100">
                        {item.value}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 shadow-xl backdrop-blur-xl sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required disabled={status === "loading"} />
                </div>
                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={status === "loading"}
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    disabled={status === "loading"}
                    minLength={15}
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="gap-2"
                  disabled={status === "loading"}
                >
                  <Send className="h-4 w-4" />
                  {status === "loading" ? "Sending…" : "Send"}
                </Button>
                {feedback && (
                  <p
                    className={
                      status === "error"
                        ? "text-sm text-red-400"
                        : "text-sm text-emerald-400/90"
                    }
                    role="status"
                  >
                    {feedback}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
