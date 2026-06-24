import { FeatureFlagGuard } from "@/components/features/dashboard/FeatureFlagGuard";
import { getFirstEnabledRoute } from "@/lib/featureFlags";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <FeatureFlagGuard feature="dashboard" redirectTo={getFirstEnabledRoute()}>
      {children}
    </FeatureFlagGuard>
  );
}
