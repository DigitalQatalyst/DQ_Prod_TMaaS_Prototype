import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSessionUserFromRequest } from "@/lib/auth/session";
import { isContactRateLimited } from "@/lib/contact/ipRateLimit";
import { sendContactMail } from "@/lib/contact/msGraphMail";
import { LAUNCH_ADVISORY_HEADLINE } from "@/lib/launchOffering";
import { createServiceRequest } from "@/lib/requests/serviceRequestRepository";

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

    if (isContactRateLimited(ip)) {
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

    await sendContactMail(
      {
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
      },
      MSGRAPH_RECIPIENT_EMAIL,
      MSGRAPH_SENDER_UPN
    );

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
