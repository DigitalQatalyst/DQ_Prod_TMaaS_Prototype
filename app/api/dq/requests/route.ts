import { NextRequest, NextResponse } from "next/server";
import { getSessionUserFromRequest } from "@/lib/auth/session";
import { isAuthorisedForDqRequests } from "@/lib/auth/authorizeDq";
import { listServiceRequestsForDq } from "@/lib/requests/serviceRequestRepository";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const user = await getSessionUserFromRequest(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isAuthorisedForDqRequests(user)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const requests = await listServiceRequestsForDq();
  return NextResponse.json({ requests });
}

