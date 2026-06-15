import React from "react";
import { redirect } from "next/navigation";
import { featureFlags, type FeatureFlags } from "@/lib/featureFlags";

interface FeatureFlagGuardProps {
  feature: keyof FeatureFlags;
  fallback?: React.ReactNode;
  redirectTo?: string;
  children: React.ReactNode;
}

export function FeatureFlagGuard({
  feature,
  fallback = null,
  redirectTo,
  children,
}: FeatureFlagGuardProps) {
  const isEnabled = featureFlags.isEnabled(feature);

  if (!isEnabled) {
    if (redirectTo) {
      redirect(redirectTo);
    }
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

export function useFeatureFlag(feature: keyof FeatureFlags): boolean {
  return featureFlags.isEnabled(feature);
}

export function DisabledFeaturePlaceholder({
  featureName,
  message,
}: {
  featureName: string;
  message?: string;
}) {
  return (
    <div className="flex min-h-[400px] items-center justify-center bg-gray-50">
      <div className="mx-auto max-w-md space-y-4 p-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
          <svg
            className="h-8 w-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-medium text-gray-900">Feature Temporarily Disabled</h3>
          <p className="text-sm text-gray-600">
            {message ||
              `The ${featureName} feature is currently disabled and will be available in a future release.`}
          </p>
        </div>
      </div>
    </div>
  );
}
