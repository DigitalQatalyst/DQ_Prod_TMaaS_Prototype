const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

/** @type {Map<string, { count: number; windowStart: number }>} */
const rateLimitHits = new Map();

export function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return String(forwarded).split(',')[0].trim();
  }
  return req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown';
}

export function checkRateLimit(ip) {
  const now = Date.now();
  let entry = rateLimitHits.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    entry = { count: 0, windowStart: now };
    rateLimitHits.set(ip, entry);
  }
  entry.count += 1;
  if (entry.count > RATE_LIMIT_MAX) {
    const retryAfterSec = Math.max(
      1,
      Math.ceil((entry.windowStart + RATE_LIMIT_WINDOW_MS - now) / 1000)
    );
    return { allowed: false, retryAfterSec };
  }
  return { allowed: true };
}

export function resetRateLimitStore() {
  rateLimitHits.clear();
}

export async function verifyTurnstile(token, remoteip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return { ok: false, error: 'Service configuration error' };
  }
  if (!token?.trim()) {
    return { ok: false, error: 'Bot verification required' };
  }

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret,
      response: token,
      remoteip: remoteip || '',
    }),
  });

  if (!res.ok) {
    return { ok: false, error: 'Bot verification failed' };
  }

  const data = await res.json();
  if (!data.success) {
    return { ok: false, error: 'Bot verification failed' };
  }

  return { ok: true };
}
