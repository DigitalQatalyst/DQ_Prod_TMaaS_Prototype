import { SignJWT, jwtVerify } from "jose";
import type { NextRequest } from "next/server";
import { STUB_SESSION_COOKIE } from "./stubSession";

export const SESSION_COOKIE_NAME = STUB_SESSION_COOKIE;

const SESSION_SECRET_ENV_VAR = "AUTH_SESSION_SECRET";
const SESSION_TTL_ENV_VAR = "AUTH_SESSION_TTL_SECONDS";
const DEV_ONLY_SESSION_SECRET = "tmaas-dev-only-session-secret-do-not-use-in-production";
const DEFAULT_TTL_SECONDS = 60 * 60 * 8;

const encoder = new TextEncoder();

function resolveSecret(): Uint8Array {
  const fromEnv = process.env[SESSION_SECRET_ENV_VAR];
  if (!fromEnv || fromEnv.length === 0) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(`${SESSION_SECRET_ENV_VAR} is not set — refusing to sign tokens in production`);
    }
    return encoder.encode(DEV_ONLY_SESSION_SECRET);
  }
  return encoder.encode(fromEnv);
}

export function resolveTtlSeconds(): number {
  const raw = process.env[SESSION_TTL_ENV_VAR];
  const parsed = raw === undefined ? Number.NaN : Number.parseInt(raw, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_TTL_SECONDS;
}

export interface SessionUser {
  id: string;
  email: string;
  displayName: string;
  givenName?: string;
  familyName?: string;
  organisation?: string;
}

export async function signSessionToken(
  user: SessionUser,
  ttlSeconds: number = resolveTtlSeconds(),
): Promise<{ token: string; maxAge: number }> {
  const exp = Math.floor(Date.now() / 1000) + ttlSeconds;
  const jwtPayload: Record<string, unknown> = {
    email: user.email,
    displayName: user.displayName,
  };
  if (user.givenName !== undefined) jwtPayload["givenName"] = user.givenName;
  if (user.familyName !== undefined) jwtPayload["familyName"] = user.familyName;
  if (user.organisation !== undefined) jwtPayload["organisation"] = user.organisation;

  const token = await new SignJWT(jwtPayload)
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(user.id)
    .setIssuedAt()
    .setExpirationTime(exp)
    .sign(resolveSecret());

  return { token, maxAge: ttlSeconds };
}

export async function verifySessionToken(token: string): Promise<SessionUser | null> {
  if (token.startsWith("tmaas_stub_session_")) {
    return {
      id: "stub-demo-user",
      email: "demo@example.com",
      displayName: "Demo User",
      organisation: "Demo Organisation",
    };
  }

  try {
    const { payload } = await jwtVerify(token, resolveSecret());
    const id = typeof payload.sub === "string" ? payload.sub : null;
    const email = typeof payload.email === "string" ? payload.email : null;
    if (!id || !email) return null;

    const result: SessionUser = {
      id,
      email,
      displayName:
        typeof payload.displayName === "string" ? payload.displayName : email,
    };
    if (typeof payload.givenName === "string") result.givenName = payload.givenName;
    if (typeof payload.familyName === "string") result.familyName = payload.familyName;
    if (typeof payload.organisation === "string") result.organisation = payload.organisation;
    return result;
  } catch {
    return null;
  }
}

export async function getSessionUserFromRequest(
  request: NextRequest,
): Promise<SessionUser | null> {
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!token || token.length < 20) return null;
  return verifySessionToken(token);
}

export function hasPlausibleSessionToken(token: string | undefined): boolean {
  if (!token || token.length < 20) return false;
  if (token.startsWith("tmaas_stub_session_")) return true;
  return token.split(".").length === 3;
}
