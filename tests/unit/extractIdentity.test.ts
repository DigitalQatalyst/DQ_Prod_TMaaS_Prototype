import { describe, expect, it } from "vitest";
import { extractIdentityFromAuthResult } from "@/lib/auth/extractIdentity";

describe("extractIdentityFromAuthResult", () => {
  it("reads email from preferred_username", async () => {
    const identity = await extractIdentityFromAuthResult({
      oid: "user-123",
      preferred_username: "Alex@Example.com",
      name: "Alex Example",
    });

    expect(identity).toEqual({
      id: "entra:user-123",
      email: "alex@example.com",
      displayName: "Alex Example",
    });
  });

  it("reads email from CIAM signInNames claim", async () => {
    const identity = await extractIdentityFromAuthResult({
      sub: "abc-def",
      signInNames: { emailAddress: "customer@company.com" },
    });

    expect(identity?.email).toBe("customer@company.com");
    expect(identity?.id).toBe("entra:abc-def");
  });

  it("falls back to synthetic email when oid exists but email is absent", async () => {
    const identity = await extractIdentityFromAuthResult({
      oid: "ed3dab4e-6ec2-4b1c-b99a-fab4f3cb2ac4",
      name: "Test User",
    });

    expect(identity).toEqual({
      id: "entra:ed3dab4e-6ec2-4b1c-b99a-fab4f3cb2ac4",
      email: "ed3dab4e-6ec2-4b1c-b99a-fab4f3cb2ac4@users.external.local",
      displayName: "Test User",
    });
  });
});
