import { isAllowedPublicPath, isStaticAssetPath } from "./middleware/allowedRoutes";
import NOT_FOUND_HTML from "./middleware/notFoundHtml";

export const config = {
  matcher: ["/((?!api/).*)"],
};

export default function middleware(request: Request): Response | undefined {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/api/") || isStaticAssetPath(pathname)) {
    return undefined;
  }

  if (isAllowedPublicPath(pathname)) {
    return undefined;
  }

  return new Response(NOT_FOUND_HTML, {
    status: 404,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
