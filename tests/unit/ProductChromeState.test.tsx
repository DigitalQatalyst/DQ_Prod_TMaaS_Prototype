import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProductChromeState } from "@/components/foundation/ProductChromeState";

describe("ProductChromeState", () => {
  it("renders product-led TMaaS wordmark without the nav lockup image", () => {
    render(<ProductChromeState />);

    expect(screen.getByText("TMaaS")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.queryByAltText(/TMaaS by DigitalQatalyst/i)).not.toBeInTheDocument();
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
