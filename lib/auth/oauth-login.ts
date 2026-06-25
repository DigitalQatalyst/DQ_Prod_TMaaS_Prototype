import { type NextRequest, NextResponse } from "next/server";
import { entraConfig, resolveRedirectUri } from "@/lib/auth/entra-config";
import { cryptoProvider, getMsalClient } from "@/lib/auth/entra-msal";

const TEMP_COOKIE_MAX_AGE = 600;

function ciamQueryParameters(): Record<string, string> | undefined {
  if (!entraConfig.isCiam || !entraConfig.userFlowPolicy) return undefined;
  return { p: entraConfig.userFlowPolicy };
}

function safeRelativePath(value: string | null): string {
  if (typeof value === "string" && value.startsWith("/") && !value.startsWith("//")) {
    return value;
  }
  return "/dashboard/overview";
}

function signInError(origin: string, code: string): NextResponse {
  const url = new URL("/sign-in", origin);
  url.searchParams.set("error", code);
  return NextResponse.redirect(url);
}

export async function handleOAuthLogin(req: NextRequest): Promise<Response> {
  const origin = req.nextUrl.origin;

  if (!entraConfig.isConfigured) {
    return signInError(origin, "entra_not_configured");
  }

  try {
    const redirectUri = resolveRedirectUri(origin);

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
    const returnTo = safeRelativePath(
      req.nextUrl.searchParams.get("returnTo") ?? req.nextUrl.searchParams.get("redirect"),
    );

    const ciamParams = ciamQueryParameters();

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
    return res;
  } catch (err) {
    console.error("[auth] login error", err);
    return signInError(origin, "entra");
  }
}
