import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSessionUserFromRequest } from "@/lib/auth/session";
import { LAUNCH_ADVISORY_HEADLINE } from "@/lib/launchOffering";
import { createServiceRequest } from "@/lib/requests/serviceRequestRepository";

// In-memory rate limiter: 5 submissions per IP per 10 minutes
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const ipTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const timestamps = (ipTimestamps.get(ip) ?? []).filter((t) => t > windowStart);
  if (timestamps.length >= MAX_REQUESTS) return true;
  ipTimestamps.set(ip, [...timestamps, now]);
  return false;
}

// MS Graph access token cache
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

function buildEmailHtml(fields: {
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
}): string {
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

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email required"),
  organisation: z.string().min(1, "Organisation is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  phone: z.string().optional(),
  role: z.string().max(150).optional(),
  interest: z.string().optional(),
  need: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, "Consent is required"),
  // Service enquiry context (marketplace / launch advisory)
  serviceTitle: z.string().optional(),
  serviceType: z.string().optional(),
  variantId: z.number().int().positive().optional(),
  marketplaceSlug: z.string().optional(),
  offering: z.string().optional(),
  // Honeypot — bots fill this field
  website: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip =
      (forwarded ? forwarded.split(",")[0]?.trim() : undefined) ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = (await request.json()) as unknown;
    const validated = contactSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: validated.error.issues },
        { status: 400 }
      );
    }

    // Honeypot check — silently succeed to fool bots
    if (validated.data.website) {
      return NextResponse.json({ success: true });
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
      console.error("[contact] Missing MS Graph env vars");
      return NextResponse.json(
        {
          error:
            "Service configuration error. Please email us directly at info@digitalqatalyst.com.",
        },
        { status: 500 }
      );
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      organisation,
      role,
      interest,
      need,
      message,
      consent,
    } = validated.data;

    const token = await getAccessToken();

    const mailPayload = {
      message: {
        subject: `TMaaS Contact Request from ${firstName} ${lastName} - ${organisation}`,
        body: {
          contentType: "HTML",
          content: buildEmailHtml({
            firstName,
            lastName,
            email,
            phone: phone ?? undefined,
            organisation,
            role: role ?? undefined,
            interest: interest ?? undefined,
            need: need ?? undefined,
            message,
            consent,
          }),
        },
        toRecipients: [{ emailAddress: { address: MSGRAPH_RECIPIENT_EMAIL } }],
        replyTo: [{ emailAddress: { address: email, name: `${firstName} ${lastName}` } }],
      },
    };

    const sendRes = await fetch(
      `https://graph.microsoft.com/v1.0/users/${MSGRAPH_SENDER_UPN}/sendMail`,
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

    console.log("[contact] Email sent:", { name: `${firstName} ${lastName}`, email, organisation });

    const sessionUser = await getSessionUserFromRequest(request);
    const isLaunchAdvisory = validated.data.offering === "launch-advisory";
    const isServiceEnquiry = Boolean(validated.data.serviceTitle || isLaunchAdvisory);
    let requestId: string | undefined;

    if (isServiceEnquiry) {
      const title = isLaunchAdvisory
        ? LAUNCH_ADVISORY_HEADLINE
        : validated.data.serviceTitle!;

      const created = await createServiceRequest({
        title,
        description: message,
        submitterEmail: email,
        user: sessionUser,
        organisation,
        ...(isLaunchAdvisory
          ? { serviceType: "advisory" }
          : validated.data.serviceType
            ? { serviceType: validated.data.serviceType }
            : {}),
        ...(validated.data.variantId !== undefined ? { variantId: validated.data.variantId } : {}),
        ...(validated.data.marketplaceSlug !== undefined
          ? { marketplaceSlug: validated.data.marketplaceSlug }
          : {}),
      });

      requestId = created?.request.id;
    }

    return NextResponse.json({ success: true, ...(requestId ? { requestId } : {}) });
  } catch (err) {
    console.error("[contact] handler error:", err);
    return NextResponse.json(
      {
        error:
          "An unexpected error occurred. Please try again or email us at info@digitalqatalyst.com.",
      },
      { status: 500 }
    );
  }
}
