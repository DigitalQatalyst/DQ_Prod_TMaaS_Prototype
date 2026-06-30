import type { AccountInfo } from "@azure/msal-node";

function asNonEmptyString(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function collectEmailCandidates(
  claims: Record<string, unknown>,
  account?: AccountInfo | null,
): string[] {
  const signInNames = claims.signInNames;
  const signInEmail =
    signInNames && typeof signInNames === "object" && !Array.isArray(signInNames)
      ? asNonEmptyString((signInNames as Record<string, unknown>).emailAddress)
      : undefined;

  const arrayClaims = [claims.emails, claims.otherMails]
    .flatMap((value) => (Array.isArray(value) ? value : []))
    .map(asNonEmptyString)
    .filter((value): value is string => Boolean(value));

  return [
    asNonEmptyString(claims.preferred_username),
    asNonEmptyString(claims.email),
    asNonEmptyString(claims.upn),
    signInEmail,
    ...arrayClaims,
    asNonEmptyString(account?.username),
  ].filter((value): value is string => Boolean(value));
}

function pickEmail(candidates: string[]): string {
  for (const candidate of candidates) {
    if (candidate.includes("@")) {
      return candidate.toLowerCase();
    }
  }
  return "";
}

async function fetchEmailFromUserInfo(accessToken: string): Promise<string> {
  try {
    const res = await fetch("https://graph.microsoft.com/oidc/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!res.ok) return "";

    const profile = (await res.json()) as Record<string, unknown>;
    return pickEmail(collectEmailCandidates(profile));
  } catch {
    return "";
  }
}

export interface ExtractedIdentity {
  id: string;
  email: string;
  displayName: string;
}

export async function extractIdentityFromAuthResult(
  claims: Record<string, unknown>,
  options: {
    account?: AccountInfo | null;
    accessToken?: string | null;
    uniqueId?: string | null;
  } = {},
): Promise<ExtractedIdentity | null> {
  const oid = asNonEmptyString(claims.oid) ?? asNonEmptyString(claims.sub) ?? options.uniqueId ?? "";

  let email = pickEmail(collectEmailCandidates(claims, options.account));
  if (!email && options.accessToken) {
    email = await fetchEmailFromUserInfo(options.accessToken);
  }

  const nameFromParts = [asNonEmptyString(claims.given_name), asNonEmptyString(claims.family_name)]
    .filter(Boolean)
    .join(" ")
    .trim();

  const displayName =
    asNonEmptyString(claims.name) ??
    (nameFromParts || undefined) ??
    asNonEmptyString(options.account?.name) ??
    email;

  if (!email && !oid) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[auth] identity claims missing email and oid:", Object.keys(claims));
    }
    return null;
  }

  // CIAM user flows may omit email in the ID token until application claims are configured.
  // Fall back to a stable synthetic address so sessions can still be minted locally.
  const resolvedEmail = email || `${oid || "unknown"}@users.external.local`;

  return {
    id: oid ? `entra:${oid}` : `entra:${resolvedEmail}`,
    email: resolvedEmail,
    displayName: displayName || resolvedEmail,
  };
}
