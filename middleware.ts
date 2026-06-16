import { NextRequest, NextResponse } from "next/server";
import { featureFlags, isLegalHubPath } from "@/lib/featureFlags";

function hasSession(request: NextRequest): boolean {
  const token = request.cookies.get("session_token")?.value;
  // Require a non-empty, plausibly structured token (min 20 chars).
  // Full JWT verification belongs in the API layer; this is a lightweight
  // pre-render guard to prevent accidental data exposure.
  return typeof token === "string" && token.length >= 20;
}

const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "connect-src 'self' https://*.supabase.co https://login.microsoftonline.com https://graph.microsoft.com",
  "frame-ancestors 'none'",
].join("; ");

const SECURITY_HEADERS: Record<string, string> = {
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Content-Security-Policy": CSP,
};

const PROTECTED_PREFIXES = ["/dashboard", "/account", "/onboarding"];

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
    return NextResponse.redirect(new URL("/sign-in", request.url));
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
