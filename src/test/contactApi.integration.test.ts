// @vitest-environment node

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import handler, { resetContactApiCacheForTests } from "../../api/contact.js";
import { resetRateLimitStore } from "../../api/contact-security.js";

const ENV_KEYS = [
  "MSGRAPH_TENANT_ID",
  "MSGRAPH_CLIENT_ID",
  "MSGRAPH_CLIENT_SECRET",
  "MSGRAPH_SENDER_UPN",
  "MSGRAPH_RECIPIENT_EMAIL",
  "TURNSTILE_SECRET_KEY",
] as const;

const VALID_BODY = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@company.com",
  phone: "+971 4 266 6169",
  organisation: "Acme Corp",
  role: "Director of Digital",
  interest: "General Enquiry",
  need: "General Enquiry",
  message: "We need help launching a customer portal.",
  consent: true,
  turnstileToken: "test-turnstile-token",
};

type MockResponse = {
  statusCode: number;
  headers: Record<string, string>;
  body: unknown;
  ended: boolean;
  setHeader: (key: string, value: string) => MockResponse;
  status: (code: number) => MockResponse;
  json: (data: unknown) => MockResponse;
  end: () => MockResponse;
};

function createMockRes(): MockResponse {
  const res: MockResponse = {
    statusCode: 200,
    headers: {},
    body: null,
    ended: false,
    setHeader(key, value) {
      this.headers[key] = value;
      return this;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(data) {
      this.body = data;
      return this;
    },
    end() {
      this.ended = true;
      return this;
    },
  };
  return res;
}

function createMockReq(
  method: string,
  body: Record<string, unknown> = {},
  headers: Record<string, string> = {}
) {
  return { method, body, headers };
}

function setEnv() {
  for (const [key, value] of Object.entries({
    MSGRAPH_TENANT_ID: "tenant",
    MSGRAPH_CLIENT_ID: "client",
    MSGRAPH_CLIENT_SECRET: "secret",
    MSGRAPH_SENDER_UPN: "sender@example.com",
    MSGRAPH_RECIPIENT_EMAIL: "team@example.com",
    TURNSTILE_SECRET_KEY: "turnstile-secret",
  })) {
    process.env[key] = value;
  }
}

function mockFetchSuccess() {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockImplementation((url: string | URL) => {
      const href = String(url);
      if (href.includes("challenges.cloudflare.com/turnstile")) {
        return Promise.resolve({
          ok: true,
          json: async () => ({ success: true }),
        });
      }
      if (href.includes("login.microsoftonline.com")) {
        return Promise.resolve({
          ok: true,
          json: async () => ({ access_token: "test-token", expires_in: 3600 }),
          text: async () => "",
        });
      }
      if (href.includes("graph.microsoft.com")) {
        return Promise.resolve({
          ok: true,
          status: 200,
          text: async () => "",
        });
      }
      return Promise.reject(new Error(`Unexpected fetch URL: ${href}`));
    })
  );
}

describe("contact API integration", () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    resetRateLimitStore();
    resetContactApiCacheForTests();
    mockFetchSuccess();
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    resetRateLimitStore();
    resetContactApiCacheForTests();
    vi.unstubAllGlobals();
  });

  it("responds to OPTIONS preflight for allowed origins", async () => {
    const req = createMockReq("OPTIONS", {}, { origin: "http://localhost:8080" });
    const res = createMockRes();

    await handler(req, res);

    expect(res.statusCode).toBe(204);
    expect(res.headers["Access-Control-Allow-Origin"]).toBe("http://localhost:8080");
    expect(res.ended).toBe(true);
  });

  it("rejects non-POST methods", async () => {
    const req = createMockReq("GET");
    const res = createMockRes();

    await handler(req, res);

    expect(res.statusCode).toBe(405);
    expect(res.body).toEqual({ ok: false, error: "Method not allowed" });
  });

  it("returns 500 when Microsoft Graph env vars are missing", async () => {
    for (const key of ENV_KEYS) {
      delete process.env[key];
    }

    const req = createMockReq("POST", VALID_BODY);
    const res = createMockRes();

    await handler(req, res);

    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({
      ok: false,
      error: "Service configuration error. Please email us directly at info@digitalqatalyst.com.",
    });
    expect(fetch).not.toHaveBeenCalled();
  });

  it("returns 400 for invalid payloads", async () => {
    setEnv();

    const req = createMockReq("POST", { ...VALID_BODY, email: "not-an-email" });
    const res = createMockRes();

    await handler(req, res);

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ ok: false, error: "Invalid email" });
    expect(fetch).not.toHaveBeenCalled();
  });

  it("returns 400 when role exceeds max length", async () => {
    setEnv();

    const req = createMockReq("POST", {
      ...VALID_BODY,
      role: "x".repeat(151),
    });
    const res = createMockRes();

    await handler(req, res);

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ ok: false, error: "Invalid role" });
    expect(fetch).not.toHaveBeenCalled();
  });

  it("returns 400 when turnstile verification fails", async () => {
    setEnv();
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ success: false }),
      })
    );

    const req = createMockReq("POST", VALID_BODY);
    const res = createMockRes();

    await handler(req, res);

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ ok: false, error: "Bot verification failed" });
  });

  it("returns 429 when rate limit is exceeded", async () => {
    setEnv();

    for (let i = 0; i < 5; i += 1) {
      const okRes = createMockRes();
      await handler(
        createMockReq("POST", VALID_BODY, { "x-forwarded-for": "203.0.113.10" }),
        okRes
      );
      expect(okRes.statusCode).toBe(200);
    }

    const blockedRes = createMockRes();
    await handler(
      createMockReq("POST", VALID_BODY, { "x-forwarded-for": "203.0.113.10" }),
      blockedRes
    );

    expect(blockedRes.statusCode).toBe(429);
    expect(blockedRes.body).toEqual({
      ok: false,
      error: "Too many requests. Please wait a few minutes and try again.",
    });
    expect(blockedRes.headers["Retry-After"]).toBeDefined();
  });

  it("returns 200 for honeypot submissions without sending mail", async () => {
    setEnv();

    const req = createMockReq("POST", {
      ...VALID_BODY,
      website: "https://spam.example",
    });
    const res = createMockRes();

    await handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true });
    expect(fetch).not.toHaveBeenCalled();
  });

  it("sends mail through Microsoft Graph for valid submissions", async () => {
    setEnv();

    const req = createMockReq("POST", VALID_BODY);
    const res = createMockRes();

    await handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true });
    expect(fetch).toHaveBeenCalledTimes(3);

    const calls = vi.mocked(fetch).mock.calls.map(([url]) => String(url));
    expect(calls[0]).toContain("challenges.cloudflare.com/turnstile");
    expect(calls[1]).toContain("login.microsoftonline.com/tenant/oauth2/v2.0/token");
    expect(calls[2]).toBe(
      "https://graph.microsoft.com/v1.0/users/sender@example.com/sendMail"
    );

    const [, sendInit] = vi.mocked(fetch).mock.calls[2];
    const payload = JSON.parse(String(sendInit?.body));
    expect(payload.message.subject).toContain("Jane Doe");
    expect(payload.message.subject).toContain("Acme Corp");
    expect(payload.message.toRecipients[0].emailAddress.address).toBe("team@example.com");
    expect(payload.message.replyTo[0].emailAddress.address).toBe("jane@company.com");
    expect(payload.message.body.content).toContain("We need help launching a customer portal.");
  });

  it("returns 500 when Microsoft Graph sendMail fails", async () => {
    setEnv();

    vi.stubGlobal(
      "fetch",
      vi.fn().mockImplementation((url: string | URL) => {
        const href = String(url);
        if (href.includes("challenges.cloudflare.com/turnstile")) {
          return Promise.resolve({
            ok: true,
            json: async () => ({ success: true }),
          });
        }
        if (href.includes("login.microsoftonline.com")) {
          return Promise.resolve({
            ok: true,
            json: async () => ({ access_token: "test-token", expires_in: 3600 }),
            text: async () => "",
          });
        }
        return Promise.resolve({
          ok: false,
          status: 502,
          text: async () => "Graph error",
        });
      })
    );

    const req = createMockReq("POST", VALID_BODY);
    const res = createMockRes();

    await handler(req, res);

    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({
      ok: false,
      error: "An unexpected error occurred. Please try again or email us at info@digitalqatalyst.com.",
    });
  });
});
