import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { mockCustomerRequests } from "@/data/mockCustomerRequests";
import { useCustomerRequests } from "@/lib/hooks/useCustomerRequests";

describe("useCustomerRequests", () => {
  it("filters table rows when a status tab is selected", () => {
    const { result } = renderHook(() => useCustomerRequests({ pageSize: 15, useMockData: true }));

    expect(result.current.totalCount).toBe(8);

    act(() => {
      result.current.setActiveTab("submitted");
    });

    expect(result.current.activeTab).toBe("submitted");
    expect(result.current.totalCount).toBe(1);
    expect(result.current.requests).toHaveLength(1);
    expect(result.current.requests[0]?.status).toBe("submitted");
  });

  it("filters table rows when search changes", () => {
    const referenceNo = mockCustomerRequests[0]!.referenceNo;
    const { result } = renderHook(() => useCustomerRequests({ pageSize: 15, useMockData: true }));

    act(() => {
      result.current.setSearchQuery(referenceNo);
    });

    expect(result.current.search).toBe(referenceNo);
    expect(result.current.totalCount).toBe(1);
    expect(result.current.requests[0]?.referenceNo).toBe(referenceNo);
  });
});
