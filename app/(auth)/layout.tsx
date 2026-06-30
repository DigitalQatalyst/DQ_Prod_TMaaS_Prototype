/**
 * Auth routes (e.g. /sign-in) must stay reachable — middleware redirects here
 * when protected routes lack a session. Do not gate behind the auth feature flag.
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <FeatureFlagGuard feature="auth" redirectTo={getFirstEnabledRoute()}>
      {children}
    </FeatureFlagGuard>
  );
}
