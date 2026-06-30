import { NextRequest, NextResponse } from "next/server";
import { getSessionUserFromRequest } from "@/lib/auth/session";
import { isAuthorisedForDqRequests } from "@/lib/auth/authorizeDq";
import {
  getServiceRequestByIdForDq,
  updateServiceRequestForDq,
} from "@/lib/requests/serviceRequestRepository";
import type { RequestStatus } from "@/lib/types/requests";

export const runtime = "nodejs";

const VALID_STATUSES: RequestStatus[] = [
  "submitted",
  "under_review",
  "in_progress",
  "closed",
  "cancelled",
];

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const user = await getSessionUserFromRequest(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isAuthorisedForDqRequests(user)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { id } = await context.params;
  const serviceRequest = await getServiceRequestByIdForDq(id);
  if (!serviceRequest) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ request: serviceRequest });
}

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const user = await getSessionUserFromRequest(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isAuthorisedForDqRequests(user)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { id } = await context.params;
  const body = (await request.json().catch(() => null)) as {
    status?: RequestStatus;
    deliveryLead?: string | null;
    deliveryLeadEmail?: string | null;
  } | null;

  if (!body) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  if (body.status !== undefined && !VALID_STATUSES.includes(body.status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  if (
    body.status === undefined &&
    body.deliveryLead === undefined &&
    body.deliveryLeadEmail === undefined
  ) {
    return NextResponse.json({ error: "No updates provided" }, { status: 400 });
  }

  const updated = await updateServiceRequestForDq(id, {
    ...(body.status !== undefined ? { status: body.status } : {}),
    ...(body.deliveryLead !== undefined ? { deliveryLead: body.deliveryLead } : {}),
    ...(body.deliveryLeadEmail !== undefined ? { deliveryLeadEmail: body.deliveryLeadEmail } : {}),
    actorName: user.displayName,
    actorEmail: user.email,
  });

  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ request: updated });
}
