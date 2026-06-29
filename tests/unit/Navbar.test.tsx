import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { AuthProvider } from "@/contexts/AuthContext";

import Navbar from "@/components/foundation/navigation/Navbar";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

describe("Navbar", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 401,
        json: async () => ({ user: null }),
      })
    );
  });

  afterEach(() => {
    vi.stubGlobal("fetch", originalFetch);
    vi.restoreAllMocks();
  });

  it("does not show the TMaaS AI Demo link", async () => {
    render(
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Browse marketplace")).toBeInTheDocument();
    });
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.queryByText("Explore DigitalQatalyst")).not.toBeInTheDocument();
    expect(screen.queryByText("Contact")).not.toBeInTheDocument();
    expect(screen.queryByText("How it Works")).not.toBeInTheDocument();
    expect(screen.queryByText("Offerings")).not.toBeInTheDocument();
    expect(screen.queryByText("TMaaS AI Demo")).not.toBeInTheDocument();
  });
});
