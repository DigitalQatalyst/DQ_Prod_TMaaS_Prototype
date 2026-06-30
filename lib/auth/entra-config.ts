// Server-only auth configuration — never import from client components.
//
// Supports multiple Entra tenants:
//   Customer (CIAM): AZURE_EXT_* (or ENTRA_* fallback)
//   Internal (DQ):   AZURE_AD_*  (or ENTRA_* fallback)

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

export type EntraAudience = "customer" | "internal";

type EntraConfig = {
  tenantId: string;
  clientId: string;
  clientSecret: string;
  ciamDomain: string;
  userFlow: string;
  redirectUri: string;
  localRedirectUri: string;
  postLogoutRedirectUri: string;
  scopes: string[];
  readonly isCiam: boolean;
  readonly authority: string;
  readonly userFlowPolicy: string;
  readonly knownAuthorities: string[];
  readonly logoutUrl: string;
  readonly isConfigured: boolean;
};

function envForAudience(audience: EntraAudience) {
  if (audience === "internal") {
    return {
      tenantId: ["AZURE_AD_TENANT_ID", "ENTRA_TENANT_ID"],
      clientId: ["AZURE_AD_CLIENT_ID", "ENTRA_CLIENT_ID"],
      clientSecret: ["AZURE_AD_CLIENT_SECRET", "ENTRA_CLIENT_SECRET"],
      redirectUri: ["AZURE_AD_REDIRECT_URI", "ENTRA_REDIRECT_URI"],
      redirectUriLocal: ["AZURE_AD_REDIRECT_URI_LOCAL", "ENTRA_REDIRECT_URI_LOCAL"],
      postLogoutRedirectUri: ["AZURE_AD_POST_LOGOUT_REDIRECT_URI", "ENTRA_POST_LOGOUT_REDIRECT_URI"],
      scopes: process.env.AZURE_AD_SCOPES ?? process.env.ENTRA_SCOPES,
      defaultCallbackPath: "/auth/callback",
      defaultLocalRedirectUri: "http://localhost:3000/auth/callback",
      defaultPostLogoutPath: "/dq/sign-in",
    } as const;
  }

  return {
    tenantId: ["AZURE_EXT_TENANT_ID", "ENTRA_TENANT_ID"],
    clientId: ["AZURE_EXT_CLIENT_ID", "ENTRA_CLIENT_ID"],
    clientSecret: ["AZURE_EXT_CLIENT_SECRET", "ENTRA_CLIENT_SECRET"],
    redirectUri: ["AZURE_EXT_REDIRECT_URI", "ENTRA_REDIRECT_URI"],
    redirectUriLocal: ["AZURE_EXT_REDIRECT_URI_LOCAL", "ENTRA_REDIRECT_URI_LOCAL"],
    postLogoutRedirectUri: ["AZURE_EXT_POST_LOGOUT_REDIRECT_URI", "ENTRA_POST_LOGOUT_REDIRECT_URI"],
    scopes: process.env.AZURE_EXT_SCOPES ?? process.env.ENTRA_SCOPES,
    defaultCallbackPath: "/customer/auth/callback",
    defaultLocalRedirectUri: "http://localhost:3000/customer/auth/callback",
    defaultPostLogoutPath: "/sign-in",
  } as const;
}

function resolveCiamDomainForAudience(audience: EntraAudience): string {
  // Only customer auth uses CIAM domain + user flow.
  if (audience !== "customer") return "";
  return firstEnv("AZURE_EXT_DOMAIN");
}

function resolveUserFlowForAudience(audience: EntraAudience): string {
  if (audience !== "customer") return "";
  return firstEnv("AZURE_EXT_USER_FLOW");
}

function isLocalDevOrigin(origin: string): boolean {
  return /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/i.test(origin);
}

/**
 * OAuth redirect URI — must exactly match a URI registered in the Entra app.
 * Local dev always uses AZURE_EXT_REDIRECT_URI_LOCAL (or the default localhost URI)
 * so the value matches Azure even if the browser uses 127.0.0.1 or [::1].
 */
export function resolveRedirectUri(requestOrigin?: string): string {
  return resolveRedirectUriForAudience("customer", requestOrigin);
}

export function resolveRedirectUriForAudience(
  audience: EntraAudience,
  requestOrigin?: string,
): string {
  const env = envForAudience(audience);
  const origin = requestOrigin?.replace(/\/$/, "") ?? "";
  const configuredRedirectUri = firstEnv(...env.redirectUri);
  const configuredLocalRedirectUri = firstEnv(...env.redirectUriLocal);

  if (origin && isLocalDevOrigin(origin)) {
    return configuredLocalRedirectUri || env.defaultLocalRedirectUri;
  }

  if (configuredRedirectUri) return configuredRedirectUri;

  if (origin) return `${origin}${env.defaultCallbackPath}`;

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim().replace(/\/$/, "");
  if (siteUrl) return `${siteUrl}${env.defaultCallbackPath}`;

  return env.defaultLocalRedirectUri;
}

/** Post-logout redirect — follows the same local vs deployed split as resolveRedirectUri. */
export function resolvePostLogoutRedirectUri(requestOrigin?: string): string {
  return resolvePostLogoutRedirectUriForAudience("customer", requestOrigin);
}

export function resolvePostLogoutRedirectUriForAudience(
  audience: EntraAudience,
  requestOrigin?: string,
): string {
  const env = envForAudience(audience);
  const origin = requestOrigin?.replace(/\/$/, "") ?? "";
  const configuredPostLogoutRedirectUri = firstEnv(...env.postLogoutRedirectUri);

  if (origin && isLocalDevOrigin(origin)) {
    return `${origin
      .replace(/\/\/\[::1\]/, "//localhost")
      .replace(/127\.0\.0\.1/, "localhost")}${env.defaultPostLogoutPath}`;
  }

  if (configuredPostLogoutRedirectUri) return configuredPostLogoutRedirectUri;

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim().replace(/\/$/, "");
  if (siteUrl) return `${siteUrl}${env.defaultPostLogoutPath}`;

  return `http://localhost:3000${env.defaultPostLogoutPath}`;
}

export function getEntraConfigForAudience(
  audience: EntraAudience,
  requestOrigin?: string,
): EntraConfig {
  const env = envForAudience(audience);

  const tenantId = firstEnv(...env.tenantId);
  const clientId = firstEnv(...env.clientId);
  const clientSecret = firstEnv(...env.clientSecret);
  const ciamDomain = resolveCiamDomainForAudience(audience);
  const userFlow = resolveUserFlowForAudience(audience);

  const redirectUri = resolveRedirectUriForAudience(audience, requestOrigin);
  const localRedirectUri = firstEnv(...env.redirectUriLocal) || env.defaultLocalRedirectUri;
  const postLogoutRedirectUri = resolvePostLogoutRedirectUriForAudience(audience, requestOrigin);
  const scopes = csv(env.scopes, "openid,profile,email");

  return {
    tenantId,
    clientId,
    clientSecret,
    ciamDomain,
    userFlow,
    redirectUri,
    localRedirectUri,
    postLogoutRedirectUri,
    scopes,

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
  } satisfies EntraConfig;
}

export const entraConfig = getEntraConfigForAudience("customer");
