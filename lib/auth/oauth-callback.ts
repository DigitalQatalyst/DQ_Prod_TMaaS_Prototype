import { type NextRequest, NextResponse } from "next/server";
import { entraConfig, resolveRedirectUri } from "@/lib/auth/entra-config";
import { getMsalClient } from "@/lib/auth/entra-msal";
import { SESSION_COOKIE_NAME, signSessionToken } from "@/lib/auth/session";
import { extractIdentityFromAuthResult } from "@/lib/auth/extractIdentity";
import { upsertCustomerProfile } from "@/lib/requests/serviceRequestRepository";

const TEMP_COOKIES = [
  "entra_pkce_verifier",
  "entra_auth_state",
  "entra_nonce",
  "entra_return_to",
  "entra_redirect_uri",
];

function ciamQueryParameters(): Record<string, string> | undefined {
  if (!entraConfig.isCiam || !entraConfig.userFlowPolicy) return undefined;
  return { p: entraConfig.userFlowPolicy };
}

function safeRelativePath(value: string | undefined | null): string {
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

function clearTempCookies(res: NextResponse): void {
  for (const name of TEMP_COOKIES) {
    res.cookies.set(name, "", { httpOnly: true, path: "/", maxAge: 0 });
  }
}

export async function handleOAuthCallback(req: NextRequest): Promise<Response> {
  const origin = req.nextUrl.origin;
  const params = req.nextUrl.searchParams;

  if (params.get("error")) {
    return signInError(origin, "entra");
  }

  const state = params.get("state");
  const expectedState = req.cookies.get("entra_auth_state")?.value;
  if (!state || state !== expectedState) {
    return signInError(origin, "state");
  }

  const code = params.get("code");
  const verifier = req.cookies.get("entra_pkce_verifier")?.value;
  if (!code || !verifier) {
    return signInError(origin, "code");
  }

  const redirectUri =
    req.cookies.get("entra_redirect_uri")?.value ?? resolveRedirectUri(origin);

  const ciamParams = ciamQueryParameters();

  try {
    const result = await getMsalClient().acquireTokenByCode({
      code,
      scopes: entraConfig.scopes,
      redirectUri,
      codeVerifier: verifier,
      ...(ciamParams ? { extraQueryParameters: ciamParams } : {}),
    });
    const claims = (result.idTokenClaims ?? {}) as Record<string, unknown>;

    const expectedNonce = req.cookies.get("entra_nonce")?.value;
    if (expectedNonce && claims.nonce && claims.nonce !== expectedNonce) {
      return signInError(origin, "nonce");
    }

    const identity = await extractIdentityFromAuthResult(claims, {
      account: result.account,
      accessToken: result.accessToken,
      uniqueId: result.uniqueId,
    });

    if (!identity) {
      return signInError(origin, "identity");
    }

    const user = identity;

    await upsertCustomerProfile(user);

    const { token, maxAge } = await signSessionToken(user);
    const returnTo = safeRelativePath(req.cookies.get("entra_return_to")?.value);

    const res = NextResponse.redirect(new URL(returnTo, origin));
    res.cookies.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge,
    });
    res.cookies.set("entra_session", "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge,
    });
    clearTempCookies(res);
    return res;
  } catch (err) {
    console.error("[auth] callback error", err);
    return signInError(origin, "exchange");
  }
}
