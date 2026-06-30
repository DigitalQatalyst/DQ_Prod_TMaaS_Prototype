const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const ipTimestamps = new Map<string, number[]>();

export function isContactRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const timestamps = (ipTimestamps.get(ip) ?? []).filter((t) => t > windowStart);
  if (timestamps.length >= MAX_REQUESTS) return true;
  ipTimestamps.set(ip, [...timestamps, now]);
  return false;
}
