import { NextRequest, NextResponse } from "next/server";
import {
  resolveRequiredAudience,
  signInPathForAudience,
  type SessionAudience,
} from "@/lib/auth/audience";
import { verifySessionToken } from "@/lib/auth/session";
import { featureFlags, isLegalHubPath } from "@/lib/featureFlags";

const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "connect-src 'self' https://*.supabase.co https://login.microsoftonline.com https://*.ciamlogin.com https://graph.microsoft.com https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net",
  "frame-ancestors 'none'",
].join("; ");

const SECURITY_HEADERS: Record<string, string> = {
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Content-Security-Policy": CSP,
};

const PROTECTED_PREFIXES = ["/dashboard", "/account", "/onboarding", "/request-service"];

function buildSignInRedirect(request: NextRequest, audience: SessionAudience): NextResponse {
  const signInUrl = new URL(signInPathForAudience(audience), request.url);
  const returnTo = `${request.nextUrl.pathname}${request.nextUrl.search}`;
  signInUrl.searchParams.set("returnTo", returnTo);
  return NextResponse.redirect(signInUrl);
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(key, value);
  }

  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
  const requiredAudience = resolveRequiredAudience(pathname);

  if (isProtected) {
    const token = request.cookies.get("session_token")?.value;
    const sessionUser = token ? await verifySessionToken(token) : null;

    if (!sessionUser) {
      const audience = requiredAudience ?? "customer";
      return buildSignInRedirect(request, audience);
    }

    if (requiredAudience && sessionUser.audience !== requiredAudience) {
      return buildSignInRedirect(request, requiredAudience);
    }
  }

  if (isLegalHubPath(pathname) && !featureFlags.isEnabled("legal")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/account/:path*",
    "/onboarding/:path*",
    "/request-service",
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
