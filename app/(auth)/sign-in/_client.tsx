"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import MeshSection from "@/components/features/landing/MeshSection";
import TMaaSLogo from "@/components/features/landing/TMaaSLogo";
import {
  PLATFORM_HERO_HEADLINE_ACCENT,
  PLATFORM_HERO_HEADLINE_PRIMARY,
} from "@/lib/brandLinks";

const DEFAULT_RETURN_TO = "/dashboard/requests";

const ENTRA_ERROR_MESSAGES: Record<string, string> = {
  entra: "Microsoft sign-in failed. Please try again.",
  entra_not_configured: "Microsoft sign-in is not configured for this environment.",
  state: "Sign-in session expired. Please try again.",
  code: "Sign-in was interrupted. Please try again.",
  nonce: "Sign-in verification failed. Please try again.",
  identity: "We could not read your Microsoft account details.",
  exchange: "Could not complete sign-in. Please try again.",
};

function getSafeReturnTo(value: string | null): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return DEFAULT_RETURN_TO;
  }
  return value;
}

function MicrosoftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 21 21" aria-hidden="true">
      <rect x="1" y="1" width="9" height="9" fill="#f25022" />
      <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
      <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
      <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
    </svg>
  );
}

export default function SignInPageClient() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [stubLoading, setStubLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const returnTo = getSafeReturnTo(searchParams.get("returnTo"));
  const entraErrorCode = searchParams.get("error");
  const entraError = entraErrorCode
    ? (ENTRA_ERROR_MESSAGES[entraErrorCode] ?? "Sign-in failed. Please try again.")
    : null;
  const displayError = error ?? entraError;

  const handleMicrosoftSSO = () => {
    setLoading(true);
    setError(null);
    window.location.assign(`/customer/auth/login?returnTo=${encodeURIComponent(returnTo)}`);
  };

  const handleStubSignIn = async () => {
    setStubLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/stub-session", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ audience: "customer" }),
      });
      if (!res.ok) {
        throw new Error("Could not start session");
      }
      window.location.assign(returnTo);
    } catch {
      setError("Dev sign-in failed. Please try again.");
      setStubLoading(false);
    }
  };

  const showDevStub =
    process.env.NODE_ENV !== "production" || entraErrorCode === "entra_not_configured";

  return (
    <MeshSection
      variant="heroLight"
      grid
      className="flex min-h-[100dvh] items-center justify-center px-4 py-10"
    >
      <div className="relative w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="flex justify-center">
            <TMaaSLogo size="lg" />
          </div>
          <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-[-0.03em] text-dq-navy sm:text-4xl">
            {PLATFORM_HERO_HEADLINE_PRIMARY}{" "}
            <span className="text-dq-orange">{PLATFORM_HERO_HEADLINE_ACCENT}</span>
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-gray-600">
            Track service requests, follow delivery progress, and return to the marketplace
            anytime.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_24px_60px_-20px_rgba(3,15,53,0.12)] sm:p-9">
          <h2 className="text-xl font-semibold tracking-tight text-dq-navy">Sign in</h2>
          <p className="mt-1.5 text-sm text-gray-600">
            Continue with your organisation&apos;s Microsoft account.
          </p>

          {displayError && (
            <div
              role="alert"
              className="mt-5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
              data-testid="sign-in-error"
            >
              {displayError}
            </div>
          )}

          <button
            type="button"
            onClick={handleMicrosoftSSO}
            disabled={loading || stubLoading}
            className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-dq-navy transition hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            data-testid="sign-in-microsoft"
          >
            <MicrosoftIcon />
            {loading ? "Redirecting to Microsoft…" : "Sign in with Microsoft"}
          </button>

          {showDevStub && (
            <>
              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-xs text-gray-500">or</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <button
                type="button"
                onClick={handleStubSignIn}
                disabled={loading || stubLoading}
                className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-medium text-dq-navy transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                data-testid="sign-in-dev-stub"
              >
                {stubLoading ? "Signing in…" : "Continue with dev session"}
              </button>
              <p className="mt-2 text-center text-xs text-gray-500">Local development only.</p>
            </>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          By signing in, you agree to our{" "}
          <a href="/legal/terms" className="text-dq-navy underline decoration-dq-navy/30 underline-offset-2 hover:text-dq-orange">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/legal/privacy" className="text-dq-navy underline decoration-dq-navy/30 underline-offset-2 hover:text-dq-orange">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </MeshSection>
  );
}
