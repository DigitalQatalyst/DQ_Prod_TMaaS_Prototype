import { type NextRequest } from "next/server";
import { handleOAuthLogin } from "@/lib/auth/oauth-login";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest): Promise<Response> {
  return handleOAuthLogin(req);
}
