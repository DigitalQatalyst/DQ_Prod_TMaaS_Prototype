import { FeatureFlagGuard } from "@/components/features/dashboard/FeatureFlagGuard";
import { getFirstEnabledRoute } from "@/lib/featureFlags";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <FeatureFlagGuard feature="auth" redirectTo={getFirstEnabledRoute()}>
      {children}
    </FeatureFlagGuard>
  );
}
