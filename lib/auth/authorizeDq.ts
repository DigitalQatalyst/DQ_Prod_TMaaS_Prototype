import type { SessionUser } from "@/lib/auth/session";

export function isDqStaffEmail(email: string): boolean {
  const normalised = email.trim().toLowerCase();
  return normalised.endsWith("@digitalqatalyst.com");
}

/**
 * Temporary DQ authorisation gate for internal dashboards.
 *
 * Today, our session token does not carry roles/claims, so we gate internal
 * endpoints by corporate email domain until Entra roles are wired end-to-end.
 */
export function isAuthorisedForDqRequests(user: SessionUser): boolean {
  if (user.audience !== "internal") return false;

  if (isDqStaffEmail(user.email)) return true;

  // Allow local dev testing with stub session when explicitly enabled.
  if (process.env.ALLOW_DQ_STUB_SESSION === "true" && user.email.toLowerCase() === "demo@example.com") {
    return true;
  }

  return false;
}

