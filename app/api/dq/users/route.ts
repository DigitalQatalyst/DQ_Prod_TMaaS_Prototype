import { NextRequest, NextResponse } from "next/server";
import { getSessionUserFromRequest } from "@/lib/auth/session";
import { isAuthorisedForDqRequests } from "@/lib/auth/authorizeDq";
import { listDqStaffUsers } from "@/lib/msgraph/listDqStaffUsers";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const user = await getSessionUserFromRequest(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isAuthorisedForDqRequests(user)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const { users, source } = await listDqStaffUsers(user);
    return NextResponse.json({ users, source });
  } catch (err) {
    console.error("[GET /api/dq/users]", err);
    return NextResponse.json({ error: "Could not load staff users." }, { status: 500 });
  }
}
