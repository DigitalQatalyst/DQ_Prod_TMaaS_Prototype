import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSessionUserFromRequest } from "@/lib/auth/session";
import { buildRequestServiceDescription } from "@/lib/requestService";
import { createServiceRequest, resolveSessionOrganisation } from "@/lib/requests/serviceRequestRepository";

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

const requestServiceSchema = z.object({
  organisation: z.string().trim().min(1).optional(),
  notes: z.string().optional(),
  consent: z.literal(true),
  website: z.string().optional(),
  serviceTitle: z.string().min(1),
  serviceType: z.string().optional(),
  variantId: z.number().int().positive().optional(),
  marketplaceSlug: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const sessionUser = await getSessionUserFromRequest(request);
  if (!sessionUser) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const body = (await request.json()) as unknown;
  const validated = requestServiceSchema.safeParse(body);
  if (!validated.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: validated.error.issues },
      { status: 400 },
    );
  }

  if (validated.data.website) {
    return NextResponse.json({ success: true });
  }

  const { organisation, notes, serviceTitle, serviceType, variantId, marketplaceSlug } =
    validated.data;

  try {
    const resolvedOrganisation = await resolveSessionOrganisation(sessionUser, organisation);
    const description = buildRequestServiceDescription(serviceTitle, notes);

    const created = await createServiceRequest({
      title: serviceTitle,
      description,
      submitterEmail: sessionUser.email,
      user: sessionUser,
      ...(resolvedOrganisation !== undefined ? { organisation: resolvedOrganisation } : {}),
      ...(serviceType !== undefined ? { serviceType } : {}),
      ...(variantId !== undefined ? { variantId } : {}),
      ...(marketplaceSlug !== undefined ? { marketplaceSlug } : {}),
    });

    if (!created) {
      return NextResponse.json({ error: "Could not create request" }, { status: 500 });
    }

    console.log("[request-service] Created:", {
      id: created.request.id,
      service: serviceTitle,
      email: sessionUser.email,
      organisation: resolvedOrganisation,
    });

    return NextResponse.json({ success: true, requestId: created.request.id });
  } catch (err) {
    console.error("[request-service] handler error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
