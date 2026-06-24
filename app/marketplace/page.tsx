import { Suspense } from "react";
import type { Metadata } from "next";
import LandingNavbar from "@/components/features/landing/landing/LandingNavbar";
import Footer from "@/components/features/landing/Footer";
import { FeatureFlagGuard } from "@/components/features/dashboard/FeatureFlagGuard";
import { getFirstEnabledRoute } from "@/lib/featureFlags";
import MarketplacePageClient from "./_client";

export const metadata: Metadata = {
  title: "Marketplace",
  description:
    "Browse 200+ technology management services. Filter by category, delivery model, and price.",
};

export default function MarketplacePage() {
  return (
    <FeatureFlagGuard feature="marketplace" redirectTo={getFirstEnabledRoute()}>
      <LandingNavbar />
      <Suspense fallback={null}>
        <MarketplacePageClient />
      </Suspense>
      <Footer />
    </FeatureFlagGuard>
  );
}
