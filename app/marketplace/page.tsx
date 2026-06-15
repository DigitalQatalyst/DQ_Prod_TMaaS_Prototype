import { Suspense } from "react";
import type { Metadata } from "next";
import MarketplacePageClient from "./_client";

export const metadata: Metadata = {
  title: "Marketplace | TMaaS",
  description:
    "Browse 200+ technology management services. Filter by category, delivery model, and price.",
};

export default function MarketplacePage() {
  return (
    <Suspense fallback={null}>
      <MarketplacePageClient />
    </Suspense>
  );
}