import { type NextRequest, NextResponse } from "next/server";
import {
  type EntraAudience,
  getEntraConfigForAudience,
  resolveRedirectUriForAudience,
} from "@/lib/auth/entra-config";
import { isDqStaffEmail } from "@/lib/auth/authorizeDq";
import { buildSignInErrorUrl } from "@/lib/auth/sign-in-redirect";
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

function ciamQueryParameters(userFlowPolicy: string | undefined): Record<string, string> | undefined {
  if (!userFlowPolicy) return undefined;
  return { p: userFlowPolicy };
}

function safeRelativePath(value: string | undefined | null, fallback: string): string {
  if (typeof value === "string" && value.startsWith("/") && !value.startsWith("//")) {
    return value;
  }
  return fallback;
}

function signInError(origin: string, code: string, audience: EntraAudience = "customer"): NextResponse {
  return NextResponse.redirect(buildSignInErrorUrl(origin, code, audience));
}

function clearTempCookies(res: NextResponse): void {
  for (const name of TEMP_COOKIES) {
    res.cookies.set(name, "", { httpOnly: true, path: "/", maxAge: 0 });
  }
}

export async function handleOAuthCallback(req: NextRequest): Promise<Response> {
  const origin = req.nextUrl.origin;
  const params = req.nextUrl.searchParams;
  const audience = (req.cookies.get("entra_audience")?.value as EntraAudience | undefined) ?? "customer";
  const entraConfig = getEntraConfigForAudience(audience, origin);

  if (params.get("error")) {
    return signInError(origin, "entra", audience);
  }

  const state = params.get("state");
  const expectedState = req.cookies.get("entra_auth_state")?.value;
  if (!state || state !== expectedState) {
    return signInError(origin, "state", audience);
  }

  const code = params.get("code");
  const verifier = req.cookies.get("entra_pkce_verifier")?.value;
  if (!code || !verifier) {
    return signInError(origin, "code", audience);
  }

  const redirectUri =
    req.cookies.get("entra_redirect_uri")?.value ?? resolveRedirectUriForAudience(audience, origin);

  const ciamParams = entraConfig.isCiam ? ciamQueryParameters(entraConfig.userFlowPolicy) : undefined;

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
      return signInError(origin, "nonce", audience);
    }

    const identity = await extractIdentityFromAuthResult(claims, {
      account: result.account,
      accessToken: result.accessToken,
      uniqueId: result.uniqueId,
    });

    if (!identity) {
      return signInError(origin, "identity", audience);
    }

    if (audience === "internal" && !isDqStaffEmail(identity.email)) {
      const allowStub =
        process.env.ALLOW_DQ_STUB_SESSION === "true" &&
        identity.email.toLowerCase() === "demo@example.com";
      if (!allowStub) {
        return signInError(origin, "staff_only", audience);
      }
    }

    const user = {
      ...identity,
      audience,
    };

    if (audience === "customer") {
      await upsertCustomerProfile(user);
    }

    const { token, maxAge } = await signSessionToken(user);
    const returnToFallback = audience === "internal" ? "/dashboard/dq/queue" : "/dashboard/overview";
    const returnTo = safeRelativePath(req.cookies.get("entra_return_to")?.value, returnToFallback);

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
    // Clear audience selection cookie if present.
    res.cookies.set("entra_audience", "", { httpOnly: true, path: "/", maxAge: 0 });
    clearTempCookies(res);
    return res;
  } catch (err) {
    console.error("[auth] callback error", err);
    return signInError(origin, "exchange", audience);
  }
}
