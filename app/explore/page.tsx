import type { Metadata } from "next";
import { FeatureFlagGuard } from "@/components/features/dashboard/FeatureFlagGuard";
import { getFirstEnabledRoute } from "@/lib/featureFlags";
import ExplorePageClient from "./_client";

export const metadata: Metadata = {
  title: "Explore | TMaaS",
  description:
    "Explore the TMaaS platform — discover services, bundles, and transformation journeys.",
};

export default function ExplorePage() {
  return (
    <FeatureFlagGuard feature="explore" redirectTo={getFirstEnabledRoute()}>
      <ExplorePageClient />
    </FeatureFlagGuard>
  );
}
