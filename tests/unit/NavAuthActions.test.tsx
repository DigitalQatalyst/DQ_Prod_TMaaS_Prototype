import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { AuthProvider } from "@/contexts/AuthContext";
import { NavAuthActions } from "@/components/foundation/navigation/NavAuthActions";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

describe("NavAuthActions", () => {
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

  it("shows Sign in when there is no session", async () => {
    render(
      <AuthProvider>
        <NavAuthActions layout="inline" />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "Sign in" })).toBeInTheDocument();
    });
  });

  it("shows account menu when session is present", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({
          user: {
            id: "user-1",
            name: "Ahmed Al Tayer",
            email: "ahmed@example.com",
            roleTitle: "Client",
            organization: "DEWA",
            avatar: "AA",
            role: "client",
          },
        }),
      })
    );

    render(
      <AuthProvider>
        <NavAuthActions layout="inline" />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Account menu" })).toBeInTheDocument();
      expect(screen.getByText("Ahmed Al Tayer")).toBeInTheDocument();
    });
    expect(screen.getByRole("button", { name: "Account menu" }).querySelector("svg")).toBeTruthy();
    expect(screen.queryByRole("link", { name: "Sign in" })).not.toBeInTheDocument();
  });
});
