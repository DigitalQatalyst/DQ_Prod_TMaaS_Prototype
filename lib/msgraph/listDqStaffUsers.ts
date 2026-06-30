import { getMsGraphAccessToken } from "@/lib/msgraph/accessToken";
import { isMsGraphConfigured } from "@/lib/msgraph/credentials";
import {
  listFallbackDqStaffUsers,
  shouldUseGraphStaffDirectory,
} from "@/lib/requests/dqStaffDirectory";
import type { SessionUser } from "@/lib/auth/session";
import {
  DQ_STAFF_EMAIL_DOMAIN,
  type DqStaffUser,
} from "@/lib/types/dqStaff";

type GraphUser = {
  id: string;
  displayName?: string | null;
  mail?: string | null;
  userPrincipalName?: string | null;
};

type GraphUsersResponse = {
  value?: GraphUser[];
};

export type DqStaffDirectorySource = "graph" | "fallback";

export interface DqStaffDirectoryResult {
  users: DqStaffUser[];
  source: DqStaffDirectorySource;
}

function normaliseStaffUser(user: GraphUser): DqStaffUser | null {
  const email = (user.mail ?? user.userPrincipalName ?? "").trim().toLowerCase();
  if (!email.endsWith(DQ_STAFF_EMAIL_DOMAIN)) return null;

  const displayName = (user.displayName ?? email).trim();
  if (!displayName) return null;

  return {
    id: user.id,
    displayName,
    email,
  };
}

async function listDqStaffUsersFromGraph(): Promise<DqStaffUser[]> {
  const token = await getMsGraphAccessToken();
  const filter = encodeURIComponent(
    "accountEnabled eq true and (endswith(mail,'@digitalqatalyst.com') or endswith(userPrincipalName,'@digitalqatalyst.com'))",
  );
  const select = encodeURIComponent("id,displayName,mail,userPrincipalName");
  const url =
    `https://graph.microsoft.com/v1.0/users?$filter=${filter}` +
    `&$select=${select}&$orderby=displayName&$top=200`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      ConsistencyLevel: "eventual",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`MS Graph user list failed: ${text}`);
  }

  const data = (await res.json()) as GraphUsersResponse;
  return (data.value ?? [])
    .map(normaliseStaffUser)
    .filter((user): user is DqStaffUser => user !== null)
    .sort((a, b) => a.displayName.localeCompare(b.displayName));
}

export async function listDqStaffUsers(
  sessionUser?: SessionUser,
): Promise<DqStaffDirectoryResult> {
  const useGraph = shouldUseGraphStaffDirectory() && isMsGraphConfigured();

  if (useGraph) {
    try {
      const users = await listDqStaffUsersFromGraph();
      if (users.length > 0) {
        return { users, source: "graph" };
      }
    } catch (err) {
      console.warn("[msgraph] falling back to temporary staff directory:", err);
    }
  }

  return {
    users: await listFallbackDqStaffUsers(sessionUser),
    source: "fallback",
  };
}
