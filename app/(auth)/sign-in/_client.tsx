"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import TMaaSLogo from "@/components/features/landing/TMaaSLogo";
import { POWERED_BY_LINE } from "@/lib/brandLinks";

const DEFAULT_RETURN_TO = "/dashboard/requests";

function getSafeReturnTo(value: string | null): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return DEFAULT_RETURN_TO;
  }
  return value;
}

export default function SignInPageClient() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const returnTo = getSafeReturnTo(searchParams.get("returnTo"));

  const handleMicrosoftSSO = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/stub-session", { method: "POST", credentials: "same-origin" });
      if (!res.ok) {
        throw new Error("Could not start session");
      }
      // Full navigation ensures the new session cookie is sent on the next request.
      window.location.assign(returnTo);
    } catch {
      setError("Sign-in failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-accent/30 to-background px-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-6 flex justify-center">
            <TMaaSLogo size="lg" />
          </div>
          <h1 className="text-3xl font-semibold text-foreground">Sign in to TMaaS</h1>
          <p className="mt-2 text-sm text-muted-foreground">{POWERED_BY_LINE}</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <Button
            onClick={handleMicrosoftSSO}
            disabled={loading}
            className="w-full gap-3 bg-[#2F2F2F] text-white hover:bg-[#1F1F1F]"
            size="lg"
          >
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" aria-hidden>
              <rect width="10" height="10" fill="#F25022" />
              <rect x="11" width="10" height="10" fill="#7FBA00" />
              <rect y="11" width="10" height="10" fill="#00A4EF" />
              <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
            </svg>
            {loading ? "Signing in…" : "Sign in with Microsoft"}
          </Button>
          {error && <p className="mt-3 text-center text-sm text-destructive">{error}</p>}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          By signing in, you agree to our{" "}
          <a href="/legal/terms" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/legal/privacy" className="underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
