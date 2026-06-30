import { type NextRequest, NextResponse } from "next/server";
import {
  type EntraAudience,
  getEntraConfigForAudience,
  resolveRedirectUriForAudience,
} from "@/lib/auth/entra-config";
import { buildSignInErrorUrl } from "@/lib/auth/sign-in-redirect";
import { cryptoProvider, getMsalClient } from "@/lib/auth/entra-msal";

const TEMP_COOKIE_MAX_AGE = 600;

function ciamQueryParameters(userFlowPolicy: string | undefined): Record<string, string> | undefined {
  if (!userFlowPolicy) return undefined;
  return { p: userFlowPolicy };
}

function safeRelativePath(value: string | null, fallback: string): string {
  if (typeof value === "string" && value.startsWith("/") && !value.startsWith("//")) {
    return value;
  }
  return fallback;
}

function signInError(origin: string, code: string, audience: EntraAudience = "customer"): NextResponse {
  return NextResponse.redirect(buildSignInErrorUrl(origin, code, audience));
}

export async function handleOAuthLogin(
  req: NextRequest,
  options: { audience?: EntraAudience } = {},
): Promise<Response> {
  const origin = req.nextUrl.origin;
  const audience = options.audience ?? "customer";
  const entraConfig = getEntraConfigForAudience(audience, origin);

  if (!entraConfig.isConfigured) {
    return signInError(origin, "entra_not_configured", audience);
  }

  try {
    const redirectUri = resolveRedirectUriForAudience(audience, origin);

    if (process.env.NODE_ENV !== "production") {
      console.info("[auth] login", {
        clientId: entraConfig.clientId,
        tenantId: entraConfig.tenantId,
        redirectUri,
        authority: entraConfig.authority,
        userFlow: entraConfig.userFlowPolicy,
      });
    }

    const { verifier, challenge } = await cryptoProvider.generatePkceCodes();
    const state = cryptoProvider.createNewGuid();
    const nonce = cryptoProvider.createNewGuid();
    const returnToFallback = audience === "internal" ? "/dashboard/dq/queue" : "/dashboard/overview";
    const returnTo = safeRelativePath(
      req.nextUrl.searchParams.get("returnTo") ?? req.nextUrl.searchParams.get("redirect"),
      returnToFallback,
    );

    const ciamParams = entraConfig.isCiam ? ciamQueryParameters(entraConfig.userFlowPolicy) : undefined;

    const authUrl = await getMsalClient().getAuthCodeUrl({
      scopes: entraConfig.scopes,
      redirectUri,
      codeChallenge: challenge,
      codeChallengeMethod: "S256",
      state,
      nonce,
      ...(ciamParams ? { extraQueryParameters: ciamParams } : {}),
    });

    const res = NextResponse.redirect(authUrl);
    const cookieOptions = {
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: TEMP_COOKIE_MAX_AGE,
    };
    res.cookies.set("entra_pkce_verifier", verifier, cookieOptions);
    res.cookies.set("entra_auth_state", state, cookieOptions);
    res.cookies.set("entra_nonce", nonce, cookieOptions);
    res.cookies.set("entra_return_to", returnTo, cookieOptions);
    res.cookies.set("entra_redirect_uri", redirectUri, cookieOptions);
    res.cookies.set("entra_audience", audience, cookieOptions);
    return res;
  } catch (err) {
    console.error("[auth] login error", err);
    return signInError(origin, "entra", audience);
  }
}
