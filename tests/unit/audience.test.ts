import { describe, expect, it } from "vitest";
import {
  deriveRoleForAudience,
  isCustomerDashboardPath,
  isDqDashboardPath,
  resolveRequiredAudience,
  signInPathForAudience,
} from "@/lib/auth/audience";

describe("audience route helpers", () => {
  it("detects dq dashboard paths", () => {
    expect(isDqDashboardPath("/dashboard/dq/queue")).toBe(true);
    expect(isDqDashboardPath("/dashboard/overview")).toBe(false);
  });

  it("detects customer dashboard paths", () => {
    expect(isCustomerDashboardPath("/dashboard/requests")).toBe(true);
    expect(isCustomerDashboardPath("/dashboard/dq/overview")).toBe(false);
  });

  it("resolves required audience per route", () => {
    expect(resolveRequiredAudience("/dashboard/dq/queue")).toBe("internal");
    expect(resolveRequiredAudience("/dashboard/requests")).toBe("customer");
    expect(resolveRequiredAudience("/dashboard/settings")).toBeNull();
  });

  it("maps audience to sign-in path and role", () => {
    expect(signInPathForAudience("internal")).toBe("/dq/sign-in");
    expect(signInPathForAudience("customer")).toBe("/sign-in");
    expect(deriveRoleForAudience("internal")).toBe("dq_delivery_lead");
    expect(deriveRoleForAudience("customer")).toBe("client");
  });
});
