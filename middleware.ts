import { NextRequest, NextResponse } from "next/server";

function hasSession(request: NextRequest): boolean {
  return Boolean(request.cookies.get("session_token")?.value);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard") && !hasSession(request)) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
