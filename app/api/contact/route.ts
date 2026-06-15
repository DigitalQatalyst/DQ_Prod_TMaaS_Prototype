import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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
