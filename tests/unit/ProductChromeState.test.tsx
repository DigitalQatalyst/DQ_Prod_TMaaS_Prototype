import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProductChromeState } from "@/components/foundation/ProductChromeState";

describe("ProductChromeState", () => {
  it("renders the official TMaaS lockup without a home link", () => {
    render(<ProductChromeState />);

    expect(screen.getByAltText("TMaaS by DigitalQatalyst")).toHaveAttribute(
      "src",
      "/brand/tmaas-logo.svg"
    );
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders optional child content below the brand stack", () => {
    render(
      <ProductChromeState>
        <p>Loading</p>
      </ProductChromeState>
    );

    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
});
