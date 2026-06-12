/** MVP indexable routes — keep in sync with featureFlags and App.tsx public routes. */
export const PUBLIC_EXACT_PATHS = new Set([
  "/",
  "/marketplace",
  "/contact",
  "/landing-v2",
]);

const SERVICE_DETAIL_PATH = /^\/service\/\d+$/;
const STATIC_FILE_PATH =
  /\.(?:ico|png|svg|xml|txt|js|css|map|woff2?|webmanifest)$/i;

export function isStaticAssetPath(pathname: string): boolean {
  return pathname.startsWith("/assets/") || STATIC_FILE_PATH.test(pathname);
}

export function isAllowedPublicPath(pathname: string): boolean {
  if (PUBLIC_EXACT_PATHS.has(pathname)) return true;
  return SERVICE_DETAIL_PATH.test(pathname);
}
