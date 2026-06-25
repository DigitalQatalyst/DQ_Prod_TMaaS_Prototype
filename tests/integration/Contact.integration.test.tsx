import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Mock Next.js navigation — useSearchParams returns configurable params
let mockSearchParams = new URLSearchParams();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => "/contact",
  useSearchParams: () => mockSearchParams,
}));

// Mock next/link to render as plain <a> tags in tests
vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock next/image to render as plain <img> tags in tests
vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}));

import ContactPageClient from "@/app/contact/_client";

const VALID = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@company.com",
  phone: "+971 4 266 6169",
  organisation: "Acme Corp",
  role: "Director of Digital",
  interest: "General Enquiry",
  need: "General Enquiry",
  message: "We need help launching a customer portal.",
};

function renderContact(searchParamStr = "") {
  mockSearchParams = new URLSearchParams(searchParamStr);
  return render(<ContactPageClient />);
}

function fillRequiredFields(overrides: Partial<typeof VALID> = {}) {
  const data = { ...VALID, ...overrides };

  fireEvent.change(screen.getByLabelText(/first name/i), {
    target: { value: data.firstName },
  });
  fireEvent.change(screen.getByLabelText(/last name/i), {
    target: { value: data.lastName },
  });
  fireEvent.change(screen.getByLabelText(/work email/i), {
    target: { value: data.email },
  });
  if (data.phone) {
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: data.phone },
    });
  }
  fireEvent.change(screen.getByLabelText(/^organisation/i), {
    target: { value: data.organisation },
  });
  if (data.role) {
    fireEvent.change(screen.getByLabelText(/role \/ title/i), {
      target: { value: data.role },
    });
  }
  const interestField = screen.queryByLabelText(/what are you exploring/i);
  if (interestField) {
    fireEvent.change(interestField, {
      target: { value: data.interest },
    });
  }
  const needField = screen.queryByLabelText(/what do you need from dq/i);
  if (needField) {
    fireEvent.change(needField, {
      target: { value: data.need },
    });
  }
  fireEvent.change(screen.getByLabelText(/your message/i), {
    target: { value: data.message },
  });
  fireEvent.click(screen.getByRole("checkbox", { name: /i agree to the processing/i }));
}

describe("Contact integration", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({ success: true }),
      } as Response)
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders the contact hero and enquiry form", async () => {
    renderContact();

    expect(
      screen.getByRole("heading", {
        name: /tell us what you need/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send request/i })).toBeInTheDocument();
    expect(screen.getByText(/what happens next/i)).toBeInTheDocument();
  });

  it("shows validation errors when required fields are missing", async () => {
    renderContact();

    fireEvent.click(screen.getByRole("button", { name: /send request/i }));

    expect(await screen.findByText("First name is required")).toBeInTheDocument();
    expect(screen.getByText("Last name is required")).toBeInTheDocument();
    expect(screen.getByText("Work email is required")).toBeInTheDocument();
    expect(screen.getByText("Organisation is required")).toBeInTheDocument();
    expect(screen.getByText("Select an area of interest")).toBeInTheDocument();
    expect(screen.getByText("Select what you need from DQ")).toBeInTheDocument();
    expect(screen.getByText("A short context message is required")).toBeInTheDocument();
    expect(screen.getByText("Consent is required to submit")).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("prefills service enquiry context and hides routing questions", async () => {
    renderContact("service=AI%20Readiness%20Assessment&type=advisory&collection=ai&intent=quote");

    expect(screen.getByText("Service enquiry")).toBeInTheDocument();
    expect(screen.getByText("AI Readiness Assessment")).toBeInTheDocument();
    expect(screen.queryByLabelText(/what are you exploring/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/what do you need from dq/i)).not.toBeInTheDocument();
    // advisory type sets "get started" message regardless of intent
    expect(screen.getByLabelText(/your message/i)).toHaveValue(
      "I'd like to get started with: AI Readiness Assessment"
    );
  });

  it("submits a service enquiry without asking for interest or need", async () => {
    renderContact("service=AI%20Readiness%20Assessment&type=advisory&collection=ai&intent=quote");
    fillRequiredFields({
      interest: "",
      need: "",
      message: "I'd like to get started with: AI Readiness Assessment",
    });

    fireEvent.click(screen.getByRole("button", { name: /send request/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({
          ...VALID,
          interest: "Transformation Strategy & Advisory",
          need: "Advisory & Strategy",
          message: "I'd like to get started with: AI Readiness Assessment",
          consent: true,
          website: "",
          serviceTitle: "AI Readiness Assessment",
          serviceType: "advisory",
        }),
      });
    });
  });

  it("rejects an invalid email before calling the API", async () => {
    renderContact();
    fillRequiredFields({ email: "not-an-email" });

    fireEvent.click(screen.getByRole("button", { name: /send request/i }));

    expect(await screen.findByText("Enter a valid work email")).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("rejects an invalid phone number before calling the API", async () => {
    renderContact();
    fillRequiredFields({ phone: "abc" });

    fireEvent.click(screen.getByRole("button", { name: /send request/i }));

    expect(await screen.findByText("Enter a valid phone number")).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("submits a valid enquiry and shows the success state", async () => {
    renderContact();
    fillRequiredFields();

    fireEvent.click(screen.getByRole("button", { name: /send request/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({
          ...VALID,
          consent: true,
          website: "",
        }),
      });
    });

    expect(
      await screen.findByRole("heading", { name: /we've got your request/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit another request/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /back to home/i })).toHaveAttribute("href", "/");
  });

  it("shows a submission error when the API returns a failure", async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({
        error: "Submission failed, please try again or email us directly.",
      }),
    } as Response);

    renderContact();
    fillRequiredFields();

    fireEvent.click(screen.getByRole("button", { name: /send request/i }));

    expect(
      await screen.findByText(/submission failed, please try again or email us directly/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send request/i })).toBeInTheDocument();
  });

  it("lets the user submit another request after success", async () => {
    renderContact();
    fillRequiredFields();

    fireEvent.click(screen.getByRole("button", { name: /send request/i }));
    await screen.findByRole("heading", { name: /we've got your request/i });

    fireEvent.click(screen.getByRole("button", { name: /submit another request/i }));

    expect(screen.getByLabelText(/first name/i)).toHaveValue("");
    expect(screen.getByRole("button", { name: /send request/i })).toBeInTheDocument();
  });
});
