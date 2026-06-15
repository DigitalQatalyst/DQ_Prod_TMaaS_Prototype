import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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
  // Honeypot — if present and non-empty, silently reject
  website: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
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

    // Honeypot check — bots fill this field
    if (validated.data.website) {
      // Silently succeed to fool bots
      return NextResponse.json({ success: true });
    }

    // TODO: send email via email provider / store in Supabase
    // For now, log and return success
    console.log("[contact] Submission received:", {
      name: `${validated.data.firstName} ${validated.data.lastName}`,
      email: validated.data.email,
      organisation: validated.data.organisation,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
