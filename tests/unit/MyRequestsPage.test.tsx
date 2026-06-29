import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { mockCustomerRequests } from "@/data/mockCustomerRequests";
import { MyRequestsPage } from "@/components/features/requests/MyRequestsPage";

vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams(),
}));

function tableBodyRows() {
  const table = screen.getByTestId("data-table");
  return within(table).getAllByRole("button");
}

describe("MyRequestsPage integration", () => {
  it("filters table rows when a status tab is selected", () => {
    render(<MyRequestsPage useMockData />);

    expect(screen.getByTestId("record-counter")).toHaveTextContent("8 OF 8 RECORDS");
    expect(tableBodyRows()).toHaveLength(8);

    fireEvent.click(screen.getByRole("radio", { name: /Submitted/i }));

    expect(screen.getByTestId("record-counter")).toHaveTextContent("1 OF 1 RECORDS");
    expect(tableBodyRows()).toHaveLength(1);
  });

  it("filters table rows when search query changes", () => {
    const referenceNo = mockCustomerRequests[0]!.referenceNo;
    render(<MyRequestsPage useMockData />);

    fireEvent.change(screen.getByPlaceholderText(/Search requests/i), {
      target: { value: referenceNo },
    });

    expect(screen.getByTestId("record-counter")).toHaveTextContent("1 OF 1 RECORDS");
    expect(tableBodyRows()).toHaveLength(1);
  });
});
