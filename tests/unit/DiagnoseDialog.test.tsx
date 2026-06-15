import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import DiagnoseDialog from "@/components/features/dashboard/DiagnoseDialog";
import { mockedEscalation } from "@/data/butlerAI";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

describe("DiagnoseDialog", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(Math, "random").mockReturnValue(0);
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it("routes a hero breadcrumb click into the matching Q2 qualification flow", () => {
    render(
      <DiagnoseDialog
        isOpen={true}
        onClose={() => {}}
        initialProblem="Improve customer experience"
      />
    );

    act(() => {
      vi.runAllTimers();
    });

    expect(screen.getByRole("heading", { name: /TMaaS AI Butler/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("How can I assist you today?")).toBeInTheDocument();
  });

  it("uses the exact Anthony contact email in the escalation mock", () => {
    expect(mockedEscalation.contact.email).toBe("support@digitalqatalyst.com");
  });
});
