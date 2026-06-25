import { NextResponse } from "next/server";
import { entraConfig, resolvePostLogoutRedirectUri } from "@/lib/auth/entra-config";
import { getSessionUserFromRequest, SESSION_COOKIE_NAME } from "@/lib/auth/session";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const user = await getSessionUserFromRequest(request as import("next/server").NextRequest);
  if (!user) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const initials = user.displayName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return NextResponse.json({
    user: {
      id: user.id,
      name: user.displayName,
      email: user.email,
      roleTitle: "Client",
      organization: user.organisation ?? "",
      avatar: initials || "U",
      role: "client" as const,
    },
  });
}

export async function DELETE(request: Request) {
  const origin = new URL(request.url).origin;
  const res = NextResponse.redirect(new URL("/sign-in", origin));

  res.cookies.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  res.cookies.set("entra_session", "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  if (entraConfig.isConfigured && request.headers.get("accept")?.includes("application/json")) {
    const logoutUrl = new URL(entraConfig.logoutUrl);
    logoutUrl.searchParams.set("post_logout_redirect_uri", resolvePostLogoutRedirectUri(origin));
    return NextResponse.json({ logoutUrl: logoutUrl.toString() });
  }

  if (entraConfig.isConfigured) {
    const logoutUrl = new URL(entraConfig.logoutUrl);
    logoutUrl.searchParams.set("post_logout_redirect_uri", resolvePostLogoutRedirectUri(origin));
    return NextResponse.redirect(logoutUrl);
  }

  return res;
}
