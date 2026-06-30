import type { SessionUser } from "@/lib/auth/session";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import type { DqStaffUser } from "@/lib/types/dqStaff";

function slugifyEmail(email: string): string {
  return email.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
}

function toStaffUser(
  displayName: string,
  email: string,
  idPrefix = "staff",
): DqStaffUser | null {
  const normalisedEmail = email.trim().toLowerCase();
  const name = displayName.trim();
  if (!normalisedEmail || !name) return null;

  return {
    id: `${idPrefix}-${slugifyEmail(normalisedEmail)}`,
    displayName: name,
    email: normalisedEmail,
  };
}

function mergeStaffUsers(...groups: DqStaffUser[][]): DqStaffUser[] {
  const byEmail = new Map<string, DqStaffUser>();
  for (const group of groups) {
    for (const user of group) {
      byEmail.set(user.email, user);
    }
  }
  return [...byEmail.values()].sort((a, b) => a.displayName.localeCompare(b.displayName));
}

export function parseDqStaffUsersFromEnv(): DqStaffUser[] {
  const raw = (process.env.DQ_STAFF_USERS ?? "").trim();
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw) as Array<{ displayName?: string; email?: string }>;
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((entry) => toStaffUser(entry.displayName ?? "", entry.email ?? "", "env"))
      .filter((user): user is DqStaffUser => user !== null);
  } catch {
    console.warn("[dqStaffDirectory] DQ_STAFF_USERS is not valid JSON.");
    return [];
  }
}

export function sessionUserToStaffUser(user: SessionUser): DqStaffUser | null {
  return toStaffUser(user.displayName, user.email, "session");
}

export async function listKnownAssigneesFromRequests(): Promise<DqStaffUser[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("service_requests")
    .select("delivery_lead, delivery_lead_email")
    .not("delivery_lead", "is", null);

  if (error || !data?.length) return [];

  return mergeStaffUsers(
    data
      .map((row) => {
        const email = row.delivery_lead_email?.trim().toLowerCase();
        const lead = row.delivery_lead?.trim();
        if (!lead) return null;

        const resolvedEmail =
          email ?? (lead.includes("@") ? lead.toLowerCase() : null);
        if (!resolvedEmail) return null;

        const displayName = lead.includes("@") ? resolvedEmail.split("@")[0] ?? lead : lead;
        return toStaffUser(displayName, resolvedEmail, "request");
      })
      .filter((user): user is DqStaffUser => user !== null),
  );
}

function getStubDqStaffUsers(): DqStaffUser[] {
  return [
    toStaffUser("Dev Admin", "dev@digitalqatalyst.com", "stub"),
    toStaffUser("Demo User", "demo@example.com", "stub"),
  ].filter((user): user is DqStaffUser => user !== null);
}

export function shouldUseGraphStaffDirectory(): boolean {
  if (process.env.DQ_USE_GRAPH_STAFF_DIRECTORY === "false") return false;
  return true;
}

/** Temporary directory used until Microsoft Graph User.Read.All is provisioned. */
export async function listFallbackDqStaffUsers(
  sessionUser?: SessionUser,
): Promise<DqStaffUser[]> {
  const envUsers = parseDqStaffUsersFromEnv();
  const requestUsers = await listKnownAssigneesFromRequests();
  const currentUser = sessionUser ? sessionUserToStaffUser(sessionUser) : null;

  const merged = mergeStaffUsers(
    envUsers,
    requestUsers,
    currentUser ? [currentUser] : [],
  );

  if (merged.length > 0) return merged;

  if (process.env.ALLOW_DQ_STUB_SESSION === "true") {
    return getStubDqStaffUsers();
  }

  return currentUser ? [currentUser] : [];
}

export function isUsingFallbackStaffDirectory(source: "graph" | "fallback"): boolean {
  return source === "fallback";
}
