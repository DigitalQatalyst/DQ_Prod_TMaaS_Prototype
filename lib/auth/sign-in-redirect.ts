import type { EntraAudience } from "@/lib/auth/entra-config";
import { signInPathForAudience } from "@/lib/auth/audience";

export function buildSignInErrorUrl(origin: string, code: string, audience: EntraAudience = "customer") {
  const url = new URL(signInPathForAudience(audience), origin);
  url.searchParams.set("error", code);
  return url;
}
