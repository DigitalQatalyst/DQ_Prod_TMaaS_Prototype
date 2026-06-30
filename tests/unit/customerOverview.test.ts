import { describe, expect, it } from "vitest";
import { mockCustomerRequests } from "@/data/mockCustomerRequests";
import {
  buildCustomerOverviewStats,
  buildCustomerRecentActivity,
} from "@/lib/requests/customerOverview";

describe("buildCustomerOverviewStats", () => {
  it("derives counts from the request list", () => {
    const owned = mockCustomerRequests.filter((r) => r.userId === "user-dewa-ahmed");
    const stats = buildCustomerOverviewStats(owned);

    expect(stats.submitted.value).toBe(owned.length);
    expect(stats.inProgress.value).toBe(
      owned.filter((r) => r.status === "in_progress").length
    );
    expect(stats.closed.value).toBe(owned.filter((r) => r.status === "closed").length);
  });
});

describe("buildCustomerRecentActivity", () => {
  it("returns timeline entries sorted newest first", () => {
    const owned = mockCustomerRequests.filter((r) => r.userId === "user-dewa-ahmed");
    const activity = buildCustomerRecentActivity(owned, 3);

    expect(activity).toHaveLength(3);
    expect(
      new Date(activity[0]!.entry.createdAt).getTime()
    ).toBeGreaterThanOrEqual(new Date(activity[1]!.entry.createdAt).getTime());
  });
});
