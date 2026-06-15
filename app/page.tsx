import type { Metadata } from "next";
import LandingHeroSection from "@/components/features/landing/landing/v2/LandingHeroSection";
import { PLATFORM_FULL_NAME, PLATFORM_HERO_SUBCOPY } from "@/lib/brandLinks";

export const metadata: Metadata = {
  title: `TMaaS | ${PLATFORM_FULL_NAME}`,
  description: PLATFORM_HERO_SUBCOPY,
  openGraph: {
    title: `TMaaS | ${PLATFORM_FULL_NAME}`,
    description: PLATFORM_HERO_SUBCOPY,
    images: ["/og-image.png"],
    type: "website",
  },
};
import WhyTmaasSection from "@/components/features/landing/landing/v2/WhyTmaasSection";
import HowItWorksSection from "@/components/features/landing/landing/v2/HowItWorksSection";
import ClientOutcomesSection from "@/components/features/landing/landing/v2/ClientOutcomesSection";
import MarketplacePreviewSection from "@/components/features/landing/landing/v2/MarketplacePreviewSection";
import LandingCtaSection from "@/components/features/landing/landing/v2/LandingCtaSection";
import LandingNavbar from "@/components/features/landing/landing/LandingNavbar";
import Footer from "@/components/features/landing/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />
      <main>
        <LandingHeroSection />
        <WhyTmaasSection />
        <HowItWorksSection />
        <ClientOutcomesSection />
        <MarketplacePreviewSection />
        <LandingCtaSection />
      </main>
      <Footer />
    </div>
  );
}
