import { NextResponse } from "next/server";
import { deriveRoleForAudience } from "@/lib/auth/audience";
import {
  getEntraConfigForAudience,
  resolvePostLogoutRedirectUriForAudience,
} from "@/lib/auth/entra-config";
import { getSessionUserFromRequest, SESSION_COOKIE_NAME } from "@/lib/auth/session";
import { getCustomerProfileOrganisation } from "@/lib/requests/serviceRequestRepository";

export const runtime = "nodejs";

const SESSION_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 0,
};

function clearSessionCookies(response: NextResponse): NextResponse {
  response.cookies.set(SESSION_COOKIE_NAME, "", SESSION_COOKIE_OPTIONS);
  response.cookies.set("entra_session", "", SESSION_COOKIE_OPTIONS);
  return response;
}

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

  let organization = user.organisation?.trim() ?? "";
  if (!organization && user.audience === "customer") {
    organization = (await getCustomerProfileOrganisation(user.id)) ?? "";
  }

  const role = deriveRoleForAudience(user.audience);
  const roleTitle = user.audience === "internal" ? "DQ Operator" : "Client";

  return NextResponse.json({
    user: {
      id: user.id,
      name: user.displayName,
      email: user.email,
      roleTitle,
      organization,
      avatar: initials || "U",
      role,
      audience: user.audience,
    },
  });
}

export async function DELETE(request: Request) {
  const origin = new URL(request.url).origin;
  const wantsJson = request.headers.get("accept")?.includes("application/json");
  const sessionUser = await getSessionUserFromRequest(request as import("next/server").NextRequest);
  const audience = sessionUser?.audience ?? "customer";
  const entraConfig = getEntraConfigForAudience(audience, origin);

  if (entraConfig.isConfigured) {
    const logoutUrl = new URL(entraConfig.logoutUrl);
    logoutUrl.searchParams.set(
      "post_logout_redirect_uri",
      resolvePostLogoutRedirectUriForAudience(audience, origin),
    );

    if (wantsJson) {
      return clearSessionCookies(NextResponse.json({ logoutUrl: logoutUrl.toString() }));
    }

    return clearSessionCookies(NextResponse.redirect(logoutUrl));
  }

  const fallbackSignIn = audience === "internal" ? "/dq/sign-in" : "/sign-in";

  if (wantsJson) {
    return clearSessionCookies(NextResponse.json({ logoutUrl: null }));
  }

  return clearSessionCookies(NextResponse.redirect(new URL(fallbackSignIn, origin)));
}
