"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Check, Loader2 } from "lucide-react";
import LandingNavbar from "@/components/features/landing/landing/LandingNavbar";
import Footer from "@/components/features/landing/Footer";
import MeshSection from "@/components/features/landing/MeshSection";
import { btnPrimary, btnSecondary } from "@/lib/brandAccent";
import { useAuth } from "@/contexts/AuthContext";
import {
  ASK_ABOUT_SERVICE_CTA_LABEL,
  buildAskAboutServicePathFromParams,
  buildSignInPathWithReturn,
  parseRequestServiceParams,
} from "@/lib/requestService";
import { cn } from "@/lib/utils";

type FormState = {
  organisation: string;
  notes: string;
  consent: boolean;
};

function inputClass(hasError?: string) {
  return cn(
    "w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-dq-navy outline-none transition-colors focus:ring-2 focus:ring-dq-orange/20",
    hasError ? "border-red-300" : "border-gray-200 focus:border-dq-navy",
  );
}

export default function RequestServicePageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
  const serviceParams = useMemo(
    () => parseRequestServiceParams(searchParams),
    [queryString, searchParams],
  );
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();

  const [form, setForm] = useState<FormState>({
    organisation: "",
    notes: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [createdRequestId, setCreatedRequestId] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    if (!isAuthenticated || authLoading) return;
    if (user.organization) {
      setForm((prev) => (prev.organisation ? prev : { ...prev, organisation: user.organization }));
    }
  }, [authLoading, isAuthenticated, user.organization]);

  if (!serviceParams) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
        <p className="mb-4 text-center text-gray-600">Choose a service from the marketplace first.</p>
        <Link href="/marketplace" className={cn(btnPrimary, "px-6 py-2.5 text-sm")}>
          Browse marketplace
        </Link>
      </div>
    );
  }

  const requestPath = `/request-service?${queryString}`;
  const askAboutPath = buildAskAboutServicePathFromParams(serviceParams);

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-dq-navy" aria-label="Loading" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <LandingNavbar />
        <MeshSection variant="heroLight" grid className="flex min-h-[60vh] items-center justify-center px-5 py-16">
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-2xl font-semibold text-dq-navy">Sign in to request this service</h1>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Service requests are linked to your account so you can track progress in My Requests.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href={buildSignInPathWithReturn(requestPath)} className={cn(btnPrimary, "px-6 py-2.5 text-sm")}>
                Sign in
              </Link>
              <Link href={askAboutPath} className={cn(btnSecondary, "px-6 py-2.5 text-sm")}>
                {ASK_ABOUT_SERVICE_CTA_LABEL}
              </Link>
            </div>
          </div>
        </MeshSection>
        <Footer />
      </div>
    );
  }

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (submitError) setSubmitError(null);
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.organisation.trim()) next.organisation = "Organisation is required";
    if (!form.consent) next.consent = "Consent is required to submit";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setSubmitError(null);

    try {
      const res = await fetch("/api/request-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({
          organisation: form.organisation,
          notes: form.notes,
          consent: form.consent,
          website: honeypot,
          serviceTitle: serviceParams.service,
          serviceType: serviceParams.type,
          variantId: serviceParams.variantId,
          marketplaceSlug: serviceParams.slug,
        }),
      });

      if (res.status === 401) {
        router.push(buildSignInPathWithReturn(requestPath));
        return;
      }

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Submission failed. Please try again.");
      }

      const data = (await res.json()) as { requestId?: string };
      setCreatedRequestId(data.requestId ?? null);
      setStatus("success");
    } catch (error) {
      setStatus("idle");
      setSubmitError(error instanceof Error ? error.message : "Submission failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />

      <MeshSection variant="heroLight" grid className="px-5 py-10 md:px-8 md:py-14 lg:px-10">
        <div className="mx-auto max-w-lg">
          <button
            type="button"
            onClick={() => router.back()}
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-dq-navy"
          >
            <ArrowLeft size={16} aria-hidden />
            Back
          </button>

          {status === "success" ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#ECFDF3]">
                <Check size={28} className="text-green-600" strokeWidth={2.5} />
              </div>
              <h1 className="text-2xl font-semibold text-dq-navy">Request submitted</h1>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                We&apos;ve received your request for{" "}
                <span className="font-medium text-dq-navy">{serviceParams.service}</span>. Track it
                in My Requests.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                {createdRequestId && (
                  <Link
                    href={`/dashboard/requests?highlight=${createdRequestId}`}
                    className={cn(btnPrimary, "px-6 py-2.5 text-sm")}
                  >
                    View in My Requests
                  </Link>
                )}
                <Link href="/marketplace" className={cn(btnSecondary, "px-6 py-2.5 text-sm")}>
                  Browse marketplace
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6 rounded-xl border border-dq-orange/20 bg-dq-orange/5 px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-dq-orange">
                  Service request
                </p>
                <p className="mt-1 text-lg font-semibold text-dq-navy">{serviceParams.service}</p>
              </div>

              <div className="mb-6 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm">
                <p className="font-medium text-dq-navy">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
              </div>

              <h1 className="text-2xl font-semibold tracking-tight text-dq-navy sm:text-3xl">
                Request this service
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Confirm your details and submit. This request will appear in your dashboard.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="organisation"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-600"
                  >
                    Organisation <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="organisation"
                    type="text"
                    autoComplete="organization"
                    value={form.organisation}
                    onChange={(e) => setField("organisation", e.target.value)}
                    className={inputClass(errors.organisation)}
                  />
                  {errors.organisation && (
                    <p className="mt-1 text-xs text-red-600">{errors.organisation}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-600"
                  >
                    Additional details
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    value={form.notes}
                    onChange={(e) => setField("notes", e.target.value)}
                    placeholder="Share goals, timelines, or context for this request (optional)."
                    className={cn(inputClass(), "resize-y")}
                  />
                </div>

                <label className="flex items-start gap-2.5 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setField("consent", e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-dq-orange focus:ring-dq-orange"
                  />
                  <span>
                    I agree to the processing of my data per the{" "}
                    <Link href="/legal/privacy" className="text-dq-navy underline hover:text-dq-orange">
                      Privacy Policy
                    </Link>
                    . <span className="text-red-600">*</span>
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-red-600">{errors.consent}</p>}

                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                />

                {submitError && (
                  <p
                    className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
                    role="alert"
                  >
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={cn(btnPrimary, "flex w-full items-center justify-center gap-2 py-3 text-sm")}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden />
                      Submitting…
                    </>
                  ) : (
                    "Submit request"
                  )}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-600">
                Not ready to request yet?{" "}
                <Link href={askAboutPath} className="font-semibold text-dq-orange hover:text-dq-orange/80">
                  {ASK_ABOUT_SERVICE_CTA_LABEL}
                </Link>
              </p>
            </>
          )}
        </div>
      </MeshSection>

      <Footer />
    </div>
  );
}
