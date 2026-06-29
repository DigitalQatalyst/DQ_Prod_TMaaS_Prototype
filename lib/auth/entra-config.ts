// Server-only auth configuration — never import from client components.
//
// Supports both naming conventions:
//   AZURE_EXT_*  — Microsoft Entra External ID (CIAM) as provisioned for TMaaS
//   ENTRA_*      — legacy / DWS-style Entra OIDC fallback

function firstEnv(...keys: string[]): string {
  for (const key of keys) {
    const value = (process.env[key] ?? "").trim();
    if (value) return value;
  }
  return "";
}

function csv(value: string | undefined, fallback: string): string[] {
  return (value ?? fallback)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

const tenantId = firstEnv("AZURE_EXT_TENANT_ID", "ENTRA_TENANT_ID");
const clientId = firstEnv("AZURE_EXT_CLIENT_ID", "ENTRA_CLIENT_ID");
const clientSecret = firstEnv("AZURE_EXT_CLIENT_SECRET", "ENTRA_CLIENT_SECRET");
const ciamDomain = firstEnv("AZURE_EXT_DOMAIN");
const userFlow = firstEnv("AZURE_EXT_USER_FLOW");

const configuredRedirectUri = firstEnv("AZURE_EXT_REDIRECT_URI", "ENTRA_REDIRECT_URI");
const configuredLocalRedirectUri = firstEnv(
  "AZURE_EXT_REDIRECT_URI_LOCAL",
  "ENTRA_REDIRECT_URI_LOCAL",
);
const configuredPostLogoutRedirectUri = firstEnv(
  "AZURE_EXT_POST_LOGOUT_REDIRECT_URI",
  "ENTRA_POST_LOGOUT_REDIRECT_URI",
);

const DEFAULT_LOCAL_REDIRECT_URI = "http://localhost:3000/customer/auth/callback";

function isLocalDevOrigin(origin: string): boolean {
  return /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/i.test(origin);
}

/**
 * OAuth redirect URI — must exactly match a URI registered in the Entra app.
 * Local dev always uses AZURE_EXT_REDIRECT_URI_LOCAL (or the default localhost URI)
 * so the value matches Azure even if the browser uses 127.0.0.1 or [::1].
 */
export function resolveRedirectUri(requestOrigin?: string): string {
  const origin = requestOrigin?.replace(/\/$/, "") ?? "";

  if (origin && isLocalDevOrigin(origin)) {
    return configuredLocalRedirectUri || DEFAULT_LOCAL_REDIRECT_URI;
  }

  if (configuredRedirectUri) return configuredRedirectUri;

  if (origin) return `${origin}/customer/auth/callback`;

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim().replace(/\/$/, "");
  if (siteUrl) return `${siteUrl}/customer/auth/callback`;

  return DEFAULT_LOCAL_REDIRECT_URI;
}

/** Post-logout redirect — follows the same local vs deployed split as resolveRedirectUri. */
export function resolvePostLogoutRedirectUri(requestOrigin?: string): string {
  const origin = requestOrigin?.replace(/\/$/, "") ?? "";

  if (origin && isLocalDevOrigin(origin)) {
    return `${origin.replace(/\/\/\[::1\]/, "//localhost").replace(/127\.0\.0\.1/, "localhost")}/sign-in`;
  }

  if (configuredPostLogoutRedirectUri) return configuredPostLogoutRedirectUri;

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim().replace(/\/$/, "");
  if (siteUrl) return `${siteUrl}/sign-in`;

  return "http://localhost:3000/sign-in";
}

export const entraConfig = {
  tenantId,
  clientId,
  clientSecret,
  ciamDomain,
  userFlow,
  redirectUri: configuredRedirectUri || resolveRedirectUri(),
  localRedirectUri: configuredLocalRedirectUri || DEFAULT_LOCAL_REDIRECT_URI,
  postLogoutRedirectUri: resolvePostLogoutRedirectUri(),
  scopes: csv(process.env.AZURE_EXT_SCOPES ?? process.env.ENTRA_SCOPES, "openid,profile,email"),

  get isCiam(): boolean {
    return Boolean(ciamDomain && userFlow && tenantId);
  },

  get authority(): string {
    if (this.isCiam) {
      // CIAM OIDC metadata lives at tenant scope — not under the user-flow path.
      return `https://${ciamDomain}/${tenantId}`;
    }
    return `https://login.microsoftonline.com/${tenantId}`;
  },

  /** B2C/CIAM user-flow policy name — passed as the `p` authorize/token query param. */
  get userFlowPolicy(): string {
    return userFlow;
  },

  get knownAuthorities(): string[] {
    return ciamDomain ? [ciamDomain] : [];
  },

  get logoutUrl(): string {
    if (this.isCiam) {
      return `https://${ciamDomain}/${tenantId}/oauth2/v2.0/logout`;
    }
    return `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/logout`;
  },

  get isConfigured(): boolean {
    return Boolean(tenantId && clientId && clientSecret);
  },
} as const;
