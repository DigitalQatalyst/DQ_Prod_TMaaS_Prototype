import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSessionUserFromRequest } from "@/lib/auth/session";
import { isAuthorisedForCustomerRequests } from "@/lib/auth/authorizeCustomer";
import { createServiceRequest } from "@/lib/requests/serviceRequestRepository";

const createRequestSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  serviceType: z.string().optional(),
  variantId: z.number().int().positive().optional(),
  marketplaceSlug: z.string().optional(),
  organisation: z.string().optional(),
});

export async function GET(request: NextRequest) {
  const user = await getSessionUserFromRequest(request);
  if (!user || !isAuthorisedForCustomerRequests(user)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { listServiceRequestsForUser } = await import("@/lib/requests/serviceRequestRepository");
  const requests = await listServiceRequestsForUser(user);
  return NextResponse.json({ requests });
}

export async function POST(request: NextRequest) {
  const user = await getSessionUserFromRequest(request);
  if (!user || !isAuthorisedForCustomerRequests(user)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as unknown;
  const validated = createRequestSchema.safeParse(body);
  if (!validated.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: validated.error.issues },
      { status: 400 },
    );
  }

  const result = await createServiceRequest({
    title: validated.data.title,
    description: validated.data.description,
    submitterEmail: user.email,
    user,
    ...(validated.data.organisation !== undefined
      ? { organisation: validated.data.organisation }
      : user.organisation !== undefined
        ? { organisation: user.organisation }
        : {}),
    ...(validated.data.serviceType !== undefined
      ? { serviceType: validated.data.serviceType }
      : {}),
    ...(validated.data.variantId !== undefined ? { variantId: validated.data.variantId } : {}),
    ...(validated.data.marketplaceSlug !== undefined
      ? { marketplaceSlug: validated.data.marketplaceSlug }
      : {}),
  });

  if (!result) {
    return NextResponse.json({ error: "Could not create request" }, { status: 500 });
  }

  return NextResponse.json({ request: result.request }, { status: 201 });
}
