import type { Metadata } from "next";
import { Suspense } from "react";
import SignInPageClient from "./_client";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your TMaaS account.",
};

export default function SignInPage() {
  return (
    <Suspense fallback={null}>
      <SignInPageClient />
    </Suspense>
  );
}
