/** Minimum length required by middleware session guard. */
export const STUB_SESSION_MIN_LENGTH = 20;

export function createStubSessionToken(): string {
  return `tmaas_stub_session_${crypto.randomUUID()}`;
}

export const STUB_SESSION_COOKIE = "session_token";

export const STUB_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days
