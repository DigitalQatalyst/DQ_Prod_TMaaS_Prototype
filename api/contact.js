import { checkRateLimit, getClientIp, verifyTurnstile } from './contact-security.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s\-(). ]{7,20}$/;
const MAX_LEN = { name: 100, org: 200, role: 150, message: 5000, other: 100, phone: 30 };

let cachedAccessToken = null;
let tokenExpiresAt = 0;

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function validateBody(body) {
  const { firstName, lastName, email, phone, organisation, role, interest, need, message, consent } = body;
  if (!firstName?.trim() || firstName.length > MAX_LEN.name) return 'Invalid firstName';
  if (!lastName?.trim()  || lastName.length  > MAX_LEN.name) return 'Invalid lastName';
  if (!email?.trim() || !EMAIL_RE.test(email) || email.length > MAX_LEN.other) return 'Invalid email';
  if (phone?.trim() && (!PHONE_RE.test(phone.trim()) || phone.length > MAX_LEN.phone)) return 'Invalid phone';
  if (!organisation?.trim() || organisation.length > MAX_LEN.org) return 'Invalid organisation';
  if (role?.trim() && role.length > MAX_LEN.role) return 'Invalid role';
  if (!interest?.trim() || interest.length > MAX_LEN.other) return 'Invalid interest';
  if (!need?.trim()     || need.length     > MAX_LEN.other) return 'Invalid need';
  if (!message?.trim()  || message.length  > MAX_LEN.message) return 'Invalid message';
  if (!consent) return 'Consent required';
  return null;
}

async function getAccessToken() {
  const now = Date.now();
  if (cachedAccessToken && now < tokenExpiresAt - 60_000) {
    return cachedAccessToken;
  }

  const params = new URLSearchParams({
    client_id: process.env.MSGRAPH_CLIENT_ID,
    client_secret: process.env.MSGRAPH_CLIENT_SECRET,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials',
  });

  const res = await fetch(
    `https://login.microsoftonline.com/${process.env.MSGRAPH_TENANT_ID}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token request failed: ${text}`);
  }

  const data = await res.json();
  cachedAccessToken = data.access_token;
  tokenExpiresAt = now + (data.expires_in ?? 3600) * 1000;
  return cachedAccessToken;
}

function buildEmailHtml(fields) {
  const { firstName, lastName, email, phone, organisation, role, interest, need, message, consent } = fields;
  const row = (label, value) =>
    value
      ? `<tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#0d1b3e;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#374151">${escapeHtml(value)}</td></tr>`
      : '';

  return `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;font-family:system-ui,sans-serif;background:#f9fafb">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px">
    <tr><td>
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden;margin:0 auto">
        <tr><td style="background:#0d1b3e;padding:24px 32px">
          <span style="color:#ffffff;font-size:18px;font-weight:700;letter-spacing:-0.3px">TMaaS: New Contact Request</span>
        </td></tr>
        <tr><td style="padding:28px 32px">
          <table cellpadding="0" cellspacing="0" width="100%">
            ${row('Name', `${firstName} ${lastName}`)}
            ${row('Email', email)}
            ${row('Phone', phone || '')}
            ${row('Organisation', organisation)}
            ${row('Role', role || '')}
            ${row('Area of Interest', interest)}
            ${row('Need', need)}
            ${row('Consent Given', consent ? 'Yes' : 'No')}
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">
          <p style="margin:0 0 6px;font-weight:600;color:#0d1b3e">Context Message</p>
          <p style="margin:0;color:#374151;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</p>
        </td></tr>
        <tr><td style="background:#f9fafb;padding:16px 32px;font-size:12px;color:#9ca3af;border-top:1px solid #e5e7eb">
          Submitted via the TMaaS contact form. Reply directly to this email to reach the submitter.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:8080',
];

async function handler(req, res) {
  const origin = req.headers.origin ?? '';
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Vary', 'Origin');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const {
    MSGRAPH_TENANT_ID,
    MSGRAPH_CLIENT_ID,
    MSGRAPH_CLIENT_SECRET,
    MSGRAPH_SENDER_UPN,
    MSGRAPH_RECIPIENT_EMAIL,
  } = process.env;

  if (
    !MSGRAPH_TENANT_ID ||
    !MSGRAPH_CLIENT_ID ||
    !MSGRAPH_CLIENT_SECRET ||
    !MSGRAPH_SENDER_UPN ||
    !MSGRAPH_RECIPIENT_EMAIL
  ) {
    console.error('[contact] Missing env vars:', {
      MSGRAPH_TENANT_ID: !!MSGRAPH_TENANT_ID,
      MSGRAPH_CLIENT_ID: !!MSGRAPH_CLIENT_ID,
      MSGRAPH_CLIENT_SECRET: !!MSGRAPH_CLIENT_SECRET,
      MSGRAPH_SENDER_UPN: !!MSGRAPH_SENDER_UPN,
      MSGRAPH_RECIPIENT_EMAIL: !!MSGRAPH_RECIPIENT_EMAIL,
    });
    return res.status(500).json({ ok: false, error: 'Service configuration error. Please email us directly at info@digitalqatalyst.com.' });
  }

  const clientIp = getClientIp(req);

  if (req.body?.website?.trim()) {
    return res.status(200).json({ ok: true });
  }

  const rateLimit = checkRateLimit(clientIp);
  if (!rateLimit.allowed) {
    res.setHeader('Retry-After', String(rateLimit.retryAfterSec));
    return res.status(429).json({
      ok: false,
      error: 'Too many requests. Please wait a few minutes and try again.',
    });
  }

  const validationError = validateBody(req.body);
  if (validationError) {
    return res.status(400).json({ ok: false, error: validationError });
  }

  const turnstileResult = await verifyTurnstile(req.body?.turnstileToken, clientIp);
  if (!turnstileResult.ok) {
    return res.status(400).json({ ok: false, error: turnstileResult.error });
  }

  const { firstName, lastName, email, phone, organisation, role, interest, need, message, consent } = req.body;

  try {
    const token = await getAccessToken();

    const mailPayload = {
      message: {
        subject: `TMaaS Contact Request from ${firstName} ${lastName} - ${organisation}`,
        body: {
          contentType: 'HTML',
          content: buildEmailHtml({ firstName, lastName, email, phone, organisation, role, interest, need, message, consent }),
        },
        toRecipients: [
          { emailAddress: { address: MSGRAPH_RECIPIENT_EMAIL } },
        ],
        replyTo: [
          { emailAddress: { address: email, name: `${firstName} ${lastName}` } },
        ],
      },
    };

    const sendRes = await fetch(
      `https://graph.microsoft.com/v1.0/users/${MSGRAPH_SENDER_UPN}/sendMail`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailPayload),
      }
    );

    if (!sendRes.ok) {
      const text = await sendRes.text();
      throw new Error(`sendMail failed: ${text}`);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] handler error:', err);
    return res.status(500).json({ ok: false, error: 'An unexpected error occurred. Please try again or email us at info@digitalqatalyst.com.' });
  }
}

export function resetContactApiCacheForTests() {
  cachedAccessToken = null;
  tokenExpiresAt = 0;
}

export default handler;
