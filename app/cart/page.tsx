import type { Metadata } from "next";
import { FeatureFlagGuard } from "@/components/features/dashboard/FeatureFlagGuard";
import { getFirstEnabledRoute } from "@/lib/featureFlags";
import CartPageClient from "./_client";

export const metadata: Metadata = {
  title: "Cart | TMaaS",
  description: "Review and manage your selected TMaaS services.",
};

export default function CartPage() {
  return (
    <FeatureFlagGuard feature="cart" redirectTo={getFirstEnabledRoute()}>
      <CartPageClient />
    </FeatureFlagGuard>
  );
}
