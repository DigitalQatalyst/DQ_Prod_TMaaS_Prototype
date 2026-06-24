import { NextResponse } from "next/server";
import { mockCustomerRequests } from "@/data/mockCustomerRequests";
import { DEMO_CUSTOMER_USER_ID } from "@/data/mockCustomerRequests";
import { toDwsRequestListRow } from "@/lib/dws-requests/mock-api";

export const runtime = "nodejs";

/** Mock GET /api/requests — returns DWS.01 RequestListRow[] for the demo customer. */
export async function GET(): Promise<Response> {
  const rows = mockCustomerRequests
    .filter((r) => r.userId === DEMO_CUSTOMER_USER_ID)
    .map(toDwsRequestListRow);

  return NextResponse.json({ rows });
}
