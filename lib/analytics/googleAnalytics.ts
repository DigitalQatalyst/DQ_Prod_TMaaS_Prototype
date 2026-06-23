/** TMaaS GA4 measurement ID (public; safe to commit). */
export const GA_MEASUREMENT_ID = "G-SWP6JJX3TP";

/** Load GA only on real production deploys — not local dev or Vercel previews. */
export function shouldLoadGoogleAnalytics(): boolean {
  if (process.env.NODE_ENV !== "production") {
    return false;
  }

  if (process.env.VERCEL_ENV) {
    return process.env.VERCEL_ENV === "production";
  }

  return process.env.NEXT_PUBLIC_ENV === "production";
}
