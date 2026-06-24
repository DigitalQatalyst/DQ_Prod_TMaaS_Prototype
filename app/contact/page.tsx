import { Suspense } from "react";
import type { Metadata } from "next";
import { FeatureFlagGuard } from "@/components/features/dashboard/FeatureFlagGuard";
import { getFirstEnabledRoute } from "@/lib/featureFlags";
import ContactPageClient from "./_client";

export const metadata: Metadata = {
  title: "Talk to our team",
  description: "Get in touch with Digital Qatalyst to discuss your technology management needs.",
};

export default function ContactPage() {
  return (
    <FeatureFlagGuard feature="contactUs" redirectTo={getFirstEnabledRoute()}>
      <Suspense fallback={null}>
        <ContactPageClient />
      </Suspense>
    </FeatureFlagGuard>
  );
}
