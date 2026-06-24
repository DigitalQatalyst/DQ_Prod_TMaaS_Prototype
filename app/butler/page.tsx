import type { Metadata } from "next";
import { FeatureFlagGuard } from "@/components/features/dashboard/FeatureFlagGuard";
import { getFirstEnabledRoute } from "@/lib/featureFlags";
import ButlerPageClient from "./_client";

export const metadata: Metadata = {
  title: "TMaaS AI | TMaaS",
  description: "Conversational AI assistant prototype for the TMaaS platform.",
};

export default function ButlerPage() {
  return (
    <FeatureFlagGuard feature="butlerDemo" redirectTo={getFirstEnabledRoute()}>
      <ButlerPageClient />
    </FeatureFlagGuard>
  );
}
