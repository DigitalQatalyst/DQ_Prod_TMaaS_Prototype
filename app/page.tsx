import type { Metadata } from "next";
import LandingHeroSection from "@/components/features/landing/landing/v2/LandingHeroSection";
import WhyTmaasSection from "@/components/features/landing/landing/v2/WhyTmaasSection";
import ProofSection from "@/components/features/landing/landing/v2/ProofSection";
import ShopByGoalSection from "@/components/features/landing/landing/v2/ShopByGoalSection";
import HowItWorksSection from "@/components/features/landing/landing/v2/HowItWorksSection";
import MarketplacePreviewSection from "@/components/features/landing/landing/v2/MarketplacePreviewSection";
import LandingFaqSection from "@/components/features/landing/landing/v2/LandingFaqSection";
import LandingCtaSection from "@/components/features/landing/landing/v2/LandingCtaSection";
import LandingNavbar from "@/components/features/landing/landing/LandingNavbar";
import Footer from "@/components/features/landing/Footer";
import { FeatureFlagGuard } from "@/components/features/dashboard/FeatureFlagGuard";
import { PLATFORM_FULL_NAME, PLATFORM_META_DESCRIPTION, buildPageTitle } from "@/lib/brandLinks";
import { getFirstEnabledRoute } from "@/lib/featureFlags";

export const metadata: Metadata = {
  title: { absolute: buildPageTitle(PLATFORM_FULL_NAME) },
  description: PLATFORM_META_DESCRIPTION,
  openGraph: {
    title: buildPageTitle(PLATFORM_FULL_NAME),
    description: PLATFORM_META_DESCRIPTION,
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <FeatureFlagGuard feature="homepage" redirectTo={getFirstEnabledRoute("/")}>
      <div className="min-h-screen bg-white">
        <LandingNavbar />
        <main>
          <LandingHeroSection />
          <WhyTmaasSection />
          <ProofSection />
          <ShopByGoalSection />
          <HowItWorksSection />
          <MarketplacePreviewSection />
          <LandingFaqSection />
          <LandingCtaSection />
        </main>
        <Footer />
      </div>
    </FeatureFlagGuard>
  );
}
