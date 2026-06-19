import { FeatureFlagGuard } from "@/components/features/dashboard/FeatureFlagGuard";
import { getFirstEnabledRoute } from "@/lib/featureFlags";

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <FeatureFlagGuard feature="onboarding" redirectTo={getFirstEnabledRoute()}>
      {children}
    </FeatureFlagGuard>
  );
}
