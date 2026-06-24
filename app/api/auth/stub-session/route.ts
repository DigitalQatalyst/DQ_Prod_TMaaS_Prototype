import { NextResponse } from "next/server";
import {
  createStubSessionToken,
  STUB_SESSION_COOKIE,
  STUB_SESSION_MAX_AGE_SECONDS,
} from "@/lib/auth/stubSession";

/**
 * MVP stub sign-in — sets session_token for middleware until Microsoft Entra is wired.
 * Only available outside production.
 */
export async function POST() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 });
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
