import type { EntraAudience } from "@/lib/auth/entra-config";
import type { UserRole } from "@/contexts/AuthContext";

export type SessionAudience = EntraAudience;

const CUSTOMER_DASHBOARD_PREFIXES = ["/dashboard/overview", "/dashboard/requests"] as const;

export function isDqDashboardPath(pathname: string): boolean {
  return pathname === "/dashboard/dq" || pathname.startsWith("/dashboard/dq/");
}

export function isCustomerDashboardPath(pathname: string): boolean {
  return CUSTOMER_DASHBOARD_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function resolveRequiredAudience(pathname: string): SessionAudience | null {
  if (isDqDashboardPath(pathname)) return "internal";
  if (isCustomerDashboardPath(pathname)) return "customer";
  return null;
}

export function signInPathForAudience(audience: SessionAudience): string {
  return audience === "internal" ? "/dq/sign-in" : "/sign-in";
}

export function deriveRoleForAudience(audience: SessionAudience): UserRole {
  return audience === "internal" ? "dq_delivery_lead" : "client";
}

export function normaliseSessionAudience(value: unknown): SessionAudience {
  return value === "internal" ? "internal" : "customer";
}
