import { FeatureFlagGuard } from "@/components/features/dashboard/FeatureFlagGuard";
import { getFirstEnabledRoute } from "@/lib/featureFlags";

/** Evaluate dashboard flag per request — avoids baking redirects into static HTML at build time. */
export const dynamic = "force-dynamic";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <FeatureFlagGuard feature="dashboard" redirectTo={getFirstEnabledRoute()}>
      {children}
    </FeatureFlagGuard>
  );
}
