import { type NextRequest, NextResponse } from "next/server";
import { handleOAuthLogin } from "@/lib/auth/oauth-login";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Internal (DQ) Entra login — separate tenant from customer CIAM. */
export async function GET(req: NextRequest): Promise<Response> {
  return handleOAuthLogin(req, { audience: "internal" });
}
