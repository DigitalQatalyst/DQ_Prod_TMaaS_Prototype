import { Suspense } from "react";
import type { Metadata } from "next";
import { FeatureFlagGuard } from "@/components/features/dashboard/FeatureFlagGuard";
import { getFirstEnabledRoute } from "@/lib/featureFlags";
import RequestServicePageClient from "./_client";

export const metadata: Metadata = {
  title: "Request service",
  description: "Submit a service request on TMaaS.",
};

export default function RequestServicePage() {
  return (
    <FeatureFlagGuard feature="contactUs" redirectTo={getFirstEnabledRoute()}>
      <Suspense fallback={null}>
        <RequestServicePageClient />
      </Suspense>
    </FeatureFlagGuard>
  );
}
