// @vitest-environment node

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import handler from "../../api/contact.js";

const ENV_KEYS = [
  "MSGRAPH_TENANT_ID",
  "MSGRAPH_CLIENT_ID",
  "MSGRAPH_CLIENT_SECRET",
  "MSGRAPH_SENDER_UPN",
  "MSGRAPH_RECIPIENT_EMAIL",
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

describe("contact API integration", () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({ access_token: "test-token" }),
        text: async () => "",
      })
    );
  });

  afterEach(() => {
    process.env = { ...originalEnv };
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
    for (const [key, value] of Object.entries({
      MSGRAPH_TENANT_ID: "tenant",
      MSGRAPH_CLIENT_ID: "client",
      MSGRAPH_CLIENT_SECRET: "secret",
      MSGRAPH_SENDER_UPN: "sender@example.com",
      MSGRAPH_RECIPIENT_EMAIL: "team@example.com",
    })) {
      process.env[key] = value;
    }

    const req = createMockReq("POST", { ...VALID_BODY, email: "not-an-email" });
    const res = createMockRes();

    await handler(req, res);

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ ok: false, error: "Invalid email" });
    expect(fetch).not.toHaveBeenCalled();
  });

  it("sends mail through Microsoft Graph for valid submissions", async () => {
    for (const [key, value] of Object.entries({
      MSGRAPH_TENANT_ID: "tenant",
      MSGRAPH_CLIENT_ID: "client",
      MSGRAPH_CLIENT_SECRET: "secret",
      MSGRAPH_SENDER_UPN: "sender@example.com",
      MSGRAPH_RECIPIENT_EMAIL: "team@example.com",
    })) {
      process.env[key] = value;
    }

    const req = createMockReq("POST", VALID_BODY);
    const res = createMockRes();

    await handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true });
    expect(fetch).toHaveBeenCalledTimes(2);

    const [tokenUrl, tokenInit] = vi.mocked(fetch).mock.calls[0];
    expect(String(tokenUrl)).toContain("login.microsoftonline.com/tenant/oauth2/v2.0/token");
    expect(tokenInit?.method).toBe("POST");

    const [sendUrl, sendInit] = vi.mocked(fetch).mock.calls[1];
    expect(String(sendUrl)).toBe(
      "https://graph.microsoft.com/v1.0/users/sender@example.com/sendMail"
    );
    expect(sendInit?.method).toBe("POST");
    expect(sendInit?.headers).toMatchObject({
      Authorization: "Bearer test-token",
      "Content-Type": "application/json",
    });

    const payload = JSON.parse(String(sendInit?.body));
    expect(payload.message.subject).toContain("Jane Doe");
    expect(payload.message.subject).toContain("Acme Corp");
    expect(payload.message.toRecipients[0].emailAddress.address).toBe("team@example.com");
    expect(payload.message.replyTo[0].emailAddress.address).toBe("jane@company.com");
    expect(payload.message.body.content).toContain("We need help launching a customer portal.");
  });

  it("returns 500 when Microsoft Graph sendMail fails", async () => {
    for (const [key, value] of Object.entries({
      MSGRAPH_TENANT_ID: "tenant",
      MSGRAPH_CLIENT_ID: "client",
      MSGRAPH_CLIENT_SECRET: "secret",
      MSGRAPH_SENDER_UPN: "sender@example.com",
      MSGRAPH_RECIPIENT_EMAIL: "team@example.com",
    })) {
      process.env[key] = value;
    }

    vi.mocked(fetch)
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => ({ access_token: "test-token" }),
        text: async () => "",
      } as Response)
      .mockResolvedValueOnce({
        ok: false,
        status: 502,
        text: async () => "Graph error",
      } as Response);

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
