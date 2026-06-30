import type { SessionAudience } from "@/lib/auth/audience";

export function isAuthorisedForCustomerRequests(user: { audience: SessionAudience }): boolean {
  return user.audience === "customer";
}
