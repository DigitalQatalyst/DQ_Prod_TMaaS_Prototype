import { describe, expect, it } from "vitest";
import { mockCustomerRequests, DEMO_CUSTOMER_USER_ID } from "@/data/mockCustomerRequests";
import {
  filterCustomerRequestsByTab,
  getCustomerRequestTabCounts,
  matchesCustomerRequestSearch,
} from "@/lib/requests/customerRequestFilters";

const owned = mockCustomerRequests.filter((r) => r.userId === DEMO_CUSTOMER_USER_ID);

describe("customerRequestFilters", () => {
  it("counts all owned requests", () => {
    expect(getCustomerRequestTabCounts(owned).all).toBe(8);
  });

  it("filters by status tab", () => {
    const submitted = filterCustomerRequestsByTab(owned, "submitted");
    expect(submitted).toHaveLength(1);
    expect(submitted[0]?.status).toBe("submitted");

    const inProgress = filterCustomerRequestsByTab(owned, "in_progress");
    expect(inProgress).toHaveLength(2);
  });

  it("matches search by title, reference, and status label", () => {
    expect(matchesCustomerRequestSearch(owned[0]!, "tm-2026")).toBe(true);
    expect(matchesCustomerRequestSearch(owned[0]!, "under review")).toBe(
      owned[0]!.status === "under_review"
    );
    expect(matchesCustomerRequestSearch(owned[0]!, "zzzz-no-match")).toBe(false);
  });
});
