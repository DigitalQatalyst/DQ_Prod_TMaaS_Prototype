import type { Metadata } from "next";
import { Suspense } from "react";
import DqSignInPageClient from "./_client";

export const metadata: Metadata = {
  title: "Delivery workspace",
  description: "Sign in to the delivery workspace.",
  robots: { index: false, follow: false },
};

export default function DqSignInPage() {
  return (
    <Suspense fallback={null}>
      <DqSignInPageClient />
    </Suspense>
  );
}
