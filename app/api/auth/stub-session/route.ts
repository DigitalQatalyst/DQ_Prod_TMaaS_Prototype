import { NextResponse } from "next/server";
import { isDashboardEnabled } from "@/lib/featureFlags";
import type { SessionAudience } from "@/lib/auth/audience";
import { signSessionToken, SESSION_COOKIE_NAME } from "@/lib/auth/session";
import { STUB_SESSION_MAX_AGE_SECONDS } from "@/lib/auth/stubSession";

function stubUserForAudience(audience: SessionAudience) {
  if (audience === "internal") {
    return {
      id: "stub-dq-user",
      email: "dev@digitalqatalyst.com",
      displayName: "Dev Admin",
      audience: "internal" as const,
    };
  }

  return {
    id: "stub-demo-user",
    email: "demo@example.com",
    displayName: "Demo User",
    organisation: "Demo Organisation",
    audience: "customer" as const,
  };
}

/**
 * MVP stub sign-in — sets session_token for middleware until Microsoft Entra is wired.
 */
export async function POST(request: Request) {
  const allowStub =
    process.env.NODE_ENV !== "production" || isDashboardEnabled();
  if (!allowStub) {
    return NextResponse.json({ error: "Not available" }, { status: 403 });
  }

  const body = (await request.json().catch(() => ({}))) as { audience?: SessionAudience };
  const audience = body.audience === "internal" ? "internal" : "customer";
  const user = stubUserForAudience(audience);
  const { token, maxAge } = await signSessionToken(user);

  const response = NextResponse.json({ ok: true, audience });

  response.cookies.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: maxAge ?? STUB_SESSION_MAX_AGE_SECONDS,
  });

  return response;
}
