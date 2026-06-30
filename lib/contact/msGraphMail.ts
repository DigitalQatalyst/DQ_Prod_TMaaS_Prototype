let cachedAccessToken: string | null = null;
let tokenExpiresAt = 0;

async function getAccessToken(): Promise<string> {
  const now = Date.now();
  if (cachedAccessToken && now < tokenExpiresAt - 60_000) {
    return cachedAccessToken;
  }

  const params = new URLSearchParams({
    client_id: process.env.MSGRAPH_CLIENT_ID!,
    client_secret: process.env.MSGRAPH_CLIENT_SECRET!,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials",
  });

  const res = await fetch(
    `https://login.microsoftonline.com/${process.env.MSGRAPH_TENANT_ID}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`MS Graph token request failed: ${text}`);
  }

  const data = (await res.json()) as { access_token: string; expires_in?: number };
  cachedAccessToken = data.access_token;
  tokenExpiresAt = now + (data.expires_in ?? 3600) * 1000;
  return cachedAccessToken;
}

function escapeHtml(str: string | undefined | null): string {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export interface ContactEmailFields {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | undefined;
  organisation: string;
  role?: string | undefined;
  interest?: string | undefined;
  need?: string | undefined;
  message: string;
  consent: boolean;
}

export function buildContactEmailHtml(fields: ContactEmailFields): string {
  const row = (label: string, value: string | undefined) =>
    value
      ? `<tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#030F35;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#374151">${escapeHtml(value)}</td></tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;font-family:system-ui,sans-serif;background:#f9fafb">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px">
    <tr><td>
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden;margin:0 auto">
        <tr><td style="background:#030F35;padding:24px 32px">
          <span style="color:#ffffff;font-size:18px;font-weight:700;letter-spacing:-0.3px">TMaaS: New Contact Request</span>
        </td></tr>
        <tr><td style="padding:28px 32px">
          <table cellpadding="0" cellspacing="0" width="100%">
            ${row("Name", `${fields.firstName} ${fields.lastName}`)}
            ${row("Email", fields.email)}
            ${row("Phone", fields.phone)}
            ${row("Organisation", fields.organisation)}
            ${row("Role", fields.role)}
            ${row("Area of Interest", fields.interest)}
            ${row("Need", fields.need)}
            ${row("Consent Given", fields.consent ? "Yes" : "No")}
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">
          <p style="margin:0 0 6px;font-weight:600;color:#030F35">Message</p>
          <p style="margin:0;color:#374151;line-height:1.6;white-space:pre-wrap">${escapeHtml(fields.message)}</p>
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

export async function sendContactMail(
  fields: ContactEmailFields,
  recipientEmail: string,
  senderUpn: string
): Promise<void> {
  const token = await getAccessToken();
  const { firstName, lastName, email, organisation } = fields;

  const mailPayload = {
    message: {
      subject: `TMaaS Contact Request from ${firstName} ${lastName} - ${organisation}`,
      body: {
        contentType: "HTML",
        content: buildContactEmailHtml(fields),
      },
      toRecipients: [{ emailAddress: { address: recipientEmail } }],
      replyTo: [{ emailAddress: { address: email, name: `${firstName} ${lastName}` } }],
    },
  };

  const sendRes = await fetch(
    `https://graph.microsoft.com/v1.0/users/${senderUpn}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailPayload),
    }
  );

  if (!sendRes.ok) {
    const text = await sendRes.text();
    throw new Error(`sendMail failed: ${text}`);
  }
}
