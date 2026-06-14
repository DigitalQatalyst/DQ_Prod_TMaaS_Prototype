import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Check, Clock, ArrowRight, Loader2, MapPin, Phone, Mail } from "lucide-react";
import LandingNavbar from "@/components/site/landing/LandingNavbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Seo from "@/components/Seo";
import { CONTACT_SEO } from "@/lib/seo";
import { buildContactStructuredData } from "@/lib/structuredData";
import {
  CONTACT_INTEREST_OPTIONS,
  CONTACT_NEED_OPTIONS,
  getServiceEnquiryFormDefaults,
  parseServiceContactParams,
} from "@/lib/contactFormPrefill";
import ContactTurnstile from "@/components/ContactTurnstile";
import { PLATFORM_CONTACT_LINE } from "@/lib/brandLinks";
import {
  getLaunchAdvisoryFormDefaults,
  isLaunchAdvisoryEnquiry,
  LAUNCH_ADVISORY_HEADLINE,
} from "@/lib/launchOffering";
import { featureFlags } from "@/lib/featureFlags";

const MAX_ROLE_LEN = 150;

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organisation: string;
  role: string;
  interest: string;
  need: string;
  message: string;
  consent: boolean;
};

const INITIAL: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organisation: "",
  role: "",
  interest: "",
  need: "",
  message: "",
  consent: false,
};

const PHONE_REGEX = /^\+?[\d\s\-(). ]{7,20}$/;

const Contact = () => {
  const [searchParams] = useSearchParams();

  const launchAdvisoryEnquiry = isLaunchAdvisoryEnquiry(searchParams);
  const serviceEnquiry = launchAdvisoryEnquiry ? null : parseServiceContactParams(searchParams);

  const [form, setForm] = useState<FormState>(() => {
    if (launchAdvisoryEnquiry) {
      return { ...INITIAL, ...getLaunchAdvisoryFormDefaults() };
    }
    if (!serviceEnquiry) return INITIAL;
    return {
      ...INITIAL,
      ...getServiceEnquiryFormDefaults(serviceEnquiry),
    };
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (submitError) setSubmitError(null);
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) next.firstName = "First name is required";
    if (!form.lastName.trim()) next.lastName = "Last name is required";
    if (!form.email.trim()) next.email = "Work email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid work email";
    if (form.phone.trim() && !PHONE_REGEX.test(form.phone.trim()))
      next.phone = "Enter a valid phone number";
    if (!form.organisation.trim()) next.organisation = "Organisation is required";
    if (form.role.trim().length > MAX_ROLE_LEN) next.role = "Role must be 150 characters or fewer";
    if (!serviceEnquiry && !launchAdvisoryEnquiry) {
      if (!form.interest) next.interest = "Select an area of interest";
      if (!form.need) next.need = "Select what you need from DQ";
    }
    if (!form.message.trim()) next.message = "A short context message is required";
    if (!form.consent) next.consent = "Consent is required to submit";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) {
      setSubmitError("Complete the security check before submitting.");
      return;
    }
    if (!validate()) return;
    setStatus("loading");
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          turnstileToken,
          website: honeypot,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(
          data?.error ?? "Submission failed, please try again or email us directly."
        );
      }
      setStatus("success");
    } catch (error) {
      setStatus("idle");
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Submission failed, please try again or email us directly."
      );
    }
  };

  const resetForm = () => {
    setForm(INITIAL);
    setErrors({});
    setSubmitError(null);
    setStatus("idle");
    setTurnstileToken(null);
    setHoneypot("");
  };

  const privacyLink = featureFlags.isEnabled("legal") ? (
    <Link to="/legal/privacy" className="underline transition-colors hover:text-dq-orange">
      Privacy Policy
    </Link>
  ) : (
    <a
      href="https://digitalqatalyst.com/privacy"
      target="_blank"
      rel="noopener noreferrer"
      className="underline transition-colors hover:text-dq-orange"
    >
      Privacy Policy
    </a>
  );

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={CONTACT_SEO.title}
        description={CONTACT_SEO.description}
        path={CONTACT_SEO.path}
      />
      <JsonLd data={buildContactStructuredData()} />
      <LandingNavbar />
      {status === "success" ? (
        <section className="bg-white px-5 pb-12 pt-20 md:px-8 md:pb-16 md:pt-24">
          <div className="mx-auto max-w-[1120px]">
            <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm md:p-12">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#ECFDF3]">
                <Check size={32} className="text-green-600" strokeWidth={2.5} />
              </div>
              <h1 className="mb-3 text-2xl font-semibold tracking-tight text-dq-navy md:text-3xl">
                We&apos;ve got your request
              </h1>
              <p className="mx-auto mb-8 max-w-md text-[15px] leading-relaxed text-gray-600">
                A DQ advisor will review your message and get back to you within 2
                business days with the right next step.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-full border border-gray-200 px-6 py-2.5 text-[15px] font-semibold text-dq-navy outline-none transition-colors hover:border-dq-navy hover:text-dq-navy focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2"
                >
                  Submit another request
                </button>
                <Link
                  to="/"
                  className="rounded-full bg-dq-navy px-6 py-2.5 text-[15px] font-semibold text-white outline-none transition-colors hover:bg-[#020A24] focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <ContactHero />
          <section className="bg-white px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16">
            <div className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-xl bg-gray-50 p-5 sm:p-6 md:p-8 lg:p-10"
                >
                  <div className="space-y-7">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field id="firstName" label="First Name" required error={errors.firstName}>
                        <input
                          id="firstName"
                          type="text"
                          autoComplete="given-name"
                          value={form.firstName}
                          onChange={(e) => setField("firstName", e.target.value)}
                          className={inputClass(errors.firstName)}
                        />
                      </Field>
                      <Field id="lastName" label="Last Name" required error={errors.lastName}>
                        <input
                          id="lastName"
                          type="text"
                          autoComplete="family-name"
                          value={form.lastName}
                          onChange={(e) => setField("lastName", e.target.value)}
                          className={inputClass(errors.lastName)}
                        />
                      </Field>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field id="email" label="Work Email" required error={errors.email}>
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={(e) => setField("email", e.target.value)}
                          className={inputClass(errors.email)}
                        />
                      </Field>
                      <Field id="phone" label="Phone Number" optional error={errors.phone}>
                        <input
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+971 XX XXX XXXX"
                          maxLength={20}
                          value={form.phone}
                          onChange={(e) => setField("phone", e.target.value)}
                          className={inputClass(errors.phone)}
                        />
                      </Field>
                    </div>

                    <Field
                      id="organisation"
                      label="Organisation"
                      required
                      error={errors.organisation}
                    >
                      <input
                        id="organisation"
                        type="text"
                        autoComplete="organization"
                        value={form.organisation}
                        onChange={(e) => setField("organisation", e.target.value)}
                        className={inputClass(errors.organisation)}
                      />
                    </Field>

                    <Field id="role" label="Role / Title" optional error={errors.role}>
                      <input
                        id="role"
                        type="text"
                        autoComplete="organization-title"
                        placeholder="e.g. Director of Digital Transformation"
                        maxLength={MAX_ROLE_LEN}
                        value={form.role}
                        onChange={(e) => setField("role", e.target.value)}
                        className={inputClass(errors.role)}
                      />
                    </Field>

                    {launchAdvisoryEnquiry ? (
                      <div className="rounded-xl border border-dq-orange/20 bg-orange-50/40 px-4 py-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-dq-orange">
                          Launch offer
                        </p>
                        <p className="mt-1 text-base font-semibold text-dq-navy">
                          {LAUNCH_ADVISORY_HEADLINE}
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                          Tell us a little about your organisation and we&apos;ll schedule your free
                          advisory session.
                        </p>
                      </div>
                    ) : serviceEnquiry ? (
                      <div className="rounded-xl border border-gray-200 bg-white px-4 py-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                          Service enquiry
                        </p>
                        <p className="mt-1 text-base font-semibold text-dq-navy">
                          {serviceEnquiry.service}
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                          We&apos;ll route your request to the right DQ advisor for this service.
                        </p>
                      </div>
                    ) : (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field
                          id="interest"
                          label="What are you exploring?"
                          required
                          error={errors.interest}
                        >
                          <select
                            id="interest"
                            value={form.interest}
                            onChange={(e) => setField("interest", e.target.value)}
                            className={inputClass(errors.interest)}
                          >
                            <option value="">Select an area…</option>
                            {CONTACT_INTEREST_OPTIONS.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </Field>
                        <Field
                          id="need"
                          label="What do you need from DQ?"
                          required
                          error={errors.need}
                        >
                          <select
                            id="need"
                            value={form.need}
                            onChange={(e) => setField("need", e.target.value)}
                            className={inputClass(errors.need)}
                          >
                            <option value="">Select a need…</option>
                            {CONTACT_NEED_OPTIONS.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </Field>
                      </div>
                    )}

                    <Field
                      id="message"
                      label="Your Message"
                      required
                      error={errors.message}
                      hint="Share your goals, challenges, or timeline so we can help faster."
                    >
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => setField("message", e.target.value)}
                        className={`${inputClass(errors.message)} min-h-[120px] resize-y`}
                      />
                    </Field>

                    <div>
                      <label htmlFor="consent" className="flex cursor-pointer items-start gap-3">
                        <input
                          id="consent"
                          type="checkbox"
                          required
                          aria-required="true"
                          aria-describedby={errors.consent ? "consent-error" : undefined}
                          aria-invalid={!!errors.consent}
                          checked={form.consent}
                          onChange={(e) => setField("consent", e.target.checked)}
                          className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-dq-navy focus:ring-dq-orange"
                        />
                        <span
                          className={`text-[13px] leading-relaxed transition-colors ${errors.consent ? "text-red-600" : "text-gray-500"}`}
                        >
                          I agree to the processing of my data for this consultation request, in
                          accordance with the {privacyLink}
                          <span aria-hidden="true">
                            . <span className="text-red-600">*</span>
                          </span>
                        </span>
                      </label>
                      {errors.consent && (
                        <p id="consent-error" className="ml-1 mt-1.5 text-[12px] text-red-600" role="alert">
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    <ContactTurnstile
                      onVerify={setTurnstileToken}
                      onExpire={() => setTurnstileToken(null)}
                      onError={() =>
                        setSubmitError(
                          "Security verification failed to load. Please refresh the page or email us at info@digitalqatalyst.com."
                        )
                      }
                    />

                    {submitError && (
                      <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                        {submitError}
                      </p>
                    )}

                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-center text-[12px] text-gray-500 sm:text-left">
                        <span className="text-red-600">*</span> Required fields.
                      </p>
                      <button
                        type="submit"
                        disabled={status === "loading" || !turnstileToken}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-dq-orange px-6 py-3 text-[15px] font-semibold text-white outline-none transition-colors hover:bg-[#E04020] glow-orange focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-80 sm:w-auto"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Submitting…
                          </>
                        ) : (
                          <>
                            Send request
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <aside className="border-t border-gray-100 px-1 pt-8 lg:col-span-4 lg:border-t-0 lg:pt-0">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                  What happens next
                </p>
                <p className="mb-5 text-[13px] leading-relaxed text-gray-500">
                  A DQ advisor reads every message and connects you to the right
                  services, whether that&apos;s advice, a demo, or hands-on support.
                </p>
                <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
                  <Clock size={13} className="shrink-0 text-gray-400" />
                  Expect a response within 2 business days.
                </div>

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                    Reach us
                  </p>
                  <a
                    href="https://share.google/9pVW35F4st9j56xt4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mb-4 flex items-start gap-2.5"
                  >
                    <MapPin size={13} className="mt-0.5 shrink-0 text-dq-navy" />
                    <div className="border-l border-dq-navy/25 pl-2.5 transition-colors group-hover:border-dq-navy/60">
                      <p className="text-[13px] font-medium leading-snug text-dq-navy transition-colors group-hover:text-dq-orange">
                        708, Opal Tower
                      </p>
                      <p className="mt-0.5 text-[12px] text-gray-500">Business Bay, Dubai, UAE</p>
                    </div>
                  </a>
                  <a
                    href="https://share.google/a0nFDiFNo30ZcNrsL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mb-4 flex items-start gap-2.5"
                  >
                    <MapPin size={13} className="mt-0.5 shrink-0 text-dq-navy" />
                    <div className="border-l border-dq-navy/25 pl-2.5 transition-colors group-hover:border-dq-navy/60">
                      <p className="text-[13px] font-medium leading-snug text-dq-navy transition-colors group-hover:text-dq-orange">
                        Kenafric Business Park
                      </p>
                      <p className="mt-0.5 text-[12px] text-gray-500">Baba Dogo Road, Nairobi, Kenya</p>
                    </div>
                  </a>
                  <a href="tel:+97142666169" className="group flex items-center gap-2.5 py-1">
                    <Phone
                      size={13}
                      className="shrink-0 text-gray-400 transition-colors group-hover:text-dq-orange"
                    />
                    <span className="text-[13px] text-gray-600 transition-colors group-hover:text-dq-orange">
                      +971 4 266 6169
                    </span>
                  </a>
                  <a
                    href="mailto:info@digitalqatalyst.com"
                    className="group mt-0.5 flex items-center gap-2.5 py-1"
                  >
                    <Mail
                      size={13}
                      className="shrink-0 text-gray-400 transition-colors group-hover:text-dq-orange"
                    />
                    <span className="text-[13px] text-gray-600 transition-colors group-hover:text-dq-orange">
                      info@digitalqatalyst.com
                    </span>
                  </a>
                </div>

                {featureFlags.isEnabled("marketplace") && (
                  <div className="mt-6">
                    <Link
                      to="/marketplace"
                      className="inline-flex items-center gap-1 rounded-sm text-[13px] font-semibold text-dq-navy outline-none transition-colors hover:text-[#E04020] focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2"
                    >
                      Not sure where to start? Browse services
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                )}
              </aside>
            </div>
          </section>
        </>
      )}
      <Footer />
    </div>
  );
};

function ContactHero() {
  return (
    <section
      className="relative isolate overflow-hidden px-5 pb-14 pt-20 md:px-8 md:pb-16 md:pt-24 lg:px-10"
      style={{ background: "var(--mesh-hero-light)" }}
    >
      <div className="mx-auto max-w-[1120px]">
        <p className="mb-4 max-w-2xl text-[15px] font-medium leading-relaxed text-gray-600">
          {PLATFORM_CONTACT_LINE}
        </p>
        <h1 className="mb-5 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">
          Tell us what you need. We&apos;ll help you get started.
        </h1>
        <p className="max-w-xl text-[15px] leading-relaxed text-gray-600 md:text-[16px]">
          Every message is reviewed by a DQ advisor who will match you to the
          right services and next steps.
        </p>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  optional,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  const enhanced = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(child as React.ReactElement<Record<string, unknown>>, {
      ...(required && { "aria-required": true }),
      ...(error !== undefined && { "aria-invalid": !!error }),
      ...(describedBy && { "aria-describedby": describedBy }),
    });
  });
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-600"
      >
        <span>
          {label}
          {required && (
            <span aria-hidden="true" className="ml-0.5 text-red-600">
              *
            </span>
          )}
        </span>
        {optional && (
          <span className="text-[10px] font-normal normal-case tracking-normal text-gray-400">
            Optional
          </span>
        )}
      </label>
      {enhanced}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-[12px] text-gray-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[12px] text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError?: string) {
  return [
    "w-full border-0 border-b bg-transparent px-0 py-2.5 text-[14px] text-gray-900 outline-none transition-colors",
    "focus:ring-0",
    hasError ? "border-red-600" : "border-gray-200 focus:border-dq-navy",
  ].join(" ");
}

export default Contact;
