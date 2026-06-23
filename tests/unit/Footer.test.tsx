import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Footer from "@/components/features/landing/Footer";
import {
  DQ_CORP_WEB_ABOUT_URL,
  DQ_CORP_WEB_URL,
  FOOTER_ABOUT_DQ_LABEL,
  FOOTER_EXPLORE_DQ_LABEL,
  NAV_BROWSE_MARKETPLACE_LABEL,
} from "@/lib/brandLinks";

vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe("Footer", () => {
  it("groups product links under Explore", () => {
    render(<Footer />);

    expect(screen.getByText("Explore")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: NAV_BROWSE_MARKETPLACE_LABEL })).toHaveAttribute(
      "href",
      "/marketplace"
    );
    expect(screen.getByRole("link", { name: "Talk to our team" })).toHaveAttribute(
      "href",
      "/contact"
    );
  });

  it("groups DigitalQatalyst links under Company", () => {
    render(<Footer />);

    expect(screen.getByText("Company")).toBeInTheDocument();

    const aboutLink = screen.getByRole("link", { name: FOOTER_ABOUT_DQ_LABEL });
    expect(aboutLink).toHaveAttribute("href", DQ_CORP_WEB_ABOUT_URL);
    expect(aboutLink).toHaveAttribute("target", "_blank");

    const exploreLink = screen.getByRole("link", { name: FOOTER_EXPLORE_DQ_LABEL });
    expect(exploreLink).toHaveAttribute("href", DQ_CORP_WEB_URL);
    expect(exploreLink).toHaveAttribute("target", "_blank");
  });

  it("keeps social links under Follow us only", () => {
    render(<Footer />);

    expect(screen.getByText("Follow us")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /LinkedIn/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^X$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /YouTube/i })).toBeInTheDocument();
  });

  it("renders the product-chrome endorsement bar", () => {
    render(<Footer />);

    expect(screen.getByText("Powered by DigitalQatalyst")).toBeInTheDocument();
    expect(
      screen.getByText("TMaaS — Transformation Management as a Service")
    ).toBeInTheDocument();
    expect(screen.getByText("© 2026 DigitalQatalyst")).toBeInTheDocument();
  });

  it("places legal links in the Explore column", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: "Privacy Policy" })).toHaveAttribute(
      "href",
      "/legal/privacy"
    );
    expect(screen.getByRole("link", { name: "Terms of Service" })).toHaveAttribute(
      "href",
      "/legal/terms"
    );
  });
});
