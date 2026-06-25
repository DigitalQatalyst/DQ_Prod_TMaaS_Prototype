import { NextRequest, NextResponse } from "next/server";
import { hasPlausibleSessionToken } from "@/lib/auth/session";
import { featureFlags, isLegalHubPath } from "@/lib/featureFlags";

function hasSession(request: NextRequest): boolean {
  const token = request.cookies.get("session_token")?.value;
  return hasPlausibleSessionToken(token);
}

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

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  // Apply security headers on every response
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(key, value);
  }

  // Auth guard for all protected routes
  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
  if (isProtected && !hasSession(request)) {
    const signInUrl = new URL("/sign-in", request.url);
    const returnTo = `${pathname}${request.nextUrl.search}`;
    signInUrl.searchParams.set("returnTo", returnTo);
    return NextResponse.redirect(signInUrl);
  }

  // Legal hub + FAQ are post-MVP; privacy and terms remain public
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
    // Run on all non-static routes so security headers are applied everywhere
    "/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
