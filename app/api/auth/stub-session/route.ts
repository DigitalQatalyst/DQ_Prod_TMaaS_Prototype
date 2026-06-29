import { NextResponse } from "next/server";
import { isDashboardEnabled } from "@/lib/featureFlags";
import {
  createStubSessionToken,
  STUB_SESSION_COOKIE,
  STUB_SESSION_MAX_AGE_SECONDS,
} from "@/lib/auth/stubSession";

/**
 * MVP stub sign-in — sets session_token for middleware until Microsoft Entra is wired.
 */
export async function POST() {
  const allowStub =
    process.env.NODE_ENV !== "production" || isDashboardEnabled();
  if (!allowStub) {
    return NextResponse.json({ error: "Not available" }, { status: 403 });
  }

  const token = createStubSessionToken();
  const response = NextResponse.json({ ok: true });

  response.cookies.set(STUB_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
    maxAge: STUB_SESSION_MAX_AGE_SECONDS,
  });

  return response;
}
