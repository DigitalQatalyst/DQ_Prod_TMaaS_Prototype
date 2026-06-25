import { type NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Back-compat redirect — TMaaS Azure app registers /customer/auth/callback. */
export async function GET(req: NextRequest): Promise<Response> {
  const url = new URL("/customer/auth/callback", req.nextUrl.origin);
  url.search = req.nextUrl.search;
  return NextResponse.redirect(url);
}
