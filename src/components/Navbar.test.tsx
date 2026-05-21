import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

import Navbar from "./Navbar";

describe("Navbar", () => {
  it("does not show the TMaaS AI Demo link", () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthProvider>
    );

    expect(screen.getByText("Explore")).toBeInTheDocument();
    expect(screen.queryByText("TMaaS AI Demo")).not.toBeInTheDocument();
  });
});
