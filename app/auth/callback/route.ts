import { type NextRequest } from "next/server";
import { handleOAuthCallback } from "@/lib/auth/oauth-callback";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Internal (DQ) Entra callback — separate tenant from customer CIAM. */
export async function GET(req: NextRequest): Promise<Response> {
  return handleOAuthCallback(req);
}
