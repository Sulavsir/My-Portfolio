const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const MIN_MESSAGE = 15;
const MAX_MESSAGE = 10_000;
const MAX_NAME = 200;

export type ContactFields = {
  name: string;
  email: string;
  message: string;
};

export function parseContactJson(raw: unknown): ContactFields | null {
  if (raw === null || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  if (
    typeof o.name !== "string" ||
    typeof o.email !== "string" ||
    typeof o.message !== "string"
  ) {
    return null;
  }
  return { name: o.name, email: o.email, message: o.message };
}

export function validateContactFields(input: ContactFields): string | null {
  const name = input.name.trim();
  const email = input.email.trim().toLowerCase();
  const message = input.message.trim();

  if (!name) return "Name is required.";
  if (name.length > MAX_NAME) return "Name is too long.";
  if (!email) return "Email is required.";
  if (!EMAIL_RE.test(email)) return "Email is not valid.";
  if (!message) return "Message is required.";
  if (message.length < MIN_MESSAGE) {
    return `Message must be at least ${MIN_MESSAGE} characters.`;
  }
  if (message.length > MAX_MESSAGE) return "Message is too long.";

  return null;
}

export function normalizeContactFields(input: ContactFields): ContactFields {
  return {
    name: input.name.trim(),
    email: input.email.trim().toLowerCase(),
    message: input.message.trim(),
  };
}
