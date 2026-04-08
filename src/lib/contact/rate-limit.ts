/**
 * Fixed-window rate limit per IP (in-memory, per serverless instance).
 * For strict global limits on Vercel, use Redis / Upstash Ratelimit.
 */

type Bucket = { windowStart: number; count: number };

const store = new Map<string, Bucket>();

export function checkContactRateLimit(
  ip: string,
  windowMs: number,
  max: number,
): boolean {
  const now = Date.now();
  let bucket = store.get(ip);

  if (!bucket || now - bucket.windowStart >= windowMs) {
    store.set(ip, { windowStart: now, count: 1 });
    return true;
  }

  if (bucket.count >= max) {
    return false;
  }

  bucket = { ...bucket, count: bucket.count + 1 };
  store.set(ip, bucket);
  return true;
}
