import { FeatureFlagGuard } from "@/components/features/dashboard/FeatureFlagGuard";
import { getFirstEnabledRoute } from "@/lib/featureFlags";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <FeatureFlagGuard feature="legal" redirectTo={getFirstEnabledRoute()}>
      {children}
    </FeatureFlagGuard>
  );
}
