import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { RequestsListToolbar } from "@/components/features/requests/RequestsListToolbar";
import { CUSTOMER_REQUEST_TABS } from "@/lib/requests/customerRequestTabs";

describe("RequestsListToolbar", () => {
  it("calls tab and search handlers", () => {
    const onTabChange = vi.fn();
    const onSearchChange = vi.fn();

    render(
      <RequestsListToolbar
        activeTab="all"
        onTabChange={onTabChange}
        tabCounts={{ all: 8, submitted: 1 }}
        tabs={CUSTOMER_REQUEST_TABS}
        search=""
        onSearchChange={onSearchChange}
        visibleCount={8}
        totalCount={8}
      />
    );

    fireEvent.click(screen.getByRole("radio", { name: /Submitted/i }));
    expect(onTabChange).toHaveBeenCalledWith("submitted");

    fireEvent.change(screen.getByPlaceholderText(/Search requests/i), {
      target: { value: "cloud" },
    });
    expect(onSearchChange).toHaveBeenCalledWith("cloud");
  });
});
