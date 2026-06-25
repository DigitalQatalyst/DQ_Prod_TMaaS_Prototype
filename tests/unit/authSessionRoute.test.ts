import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/auth/entra-config", () => ({
  entraConfig: {
    isConfigured: true,
    logoutUrl: "https://example.ciamlogin.com/tenant/oauth2/v2.0/logout",
  },
  resolvePostLogoutRedirectUri: () => "http://localhost:3000/sign-in",
}));

describe("DELETE /api/auth/session", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("clears session cookies on JSON logout responses", async () => {
    const { DELETE } = await import("@/app/api/auth/session/route");

    const response = await DELETE(
      new Request("http://localhost:3000/api/auth/session", {
        method: "DELETE",
        headers: { Accept: "application/json" },
      })
    );

    expect(response.status).toBe(200);
    const body = (await response.json()) as { logoutUrl: string };
    expect(body.logoutUrl).toContain("oauth2/v2.0/logout");

    const setCookie = response.headers.getSetCookie?.() ?? [];
    expect(setCookie.some((cookie) => cookie.startsWith("session_token="))).toBe(true);
    expect(setCookie.some((cookie) => cookie.includes("Max-Age=0"))).toBe(true);
  });
});
