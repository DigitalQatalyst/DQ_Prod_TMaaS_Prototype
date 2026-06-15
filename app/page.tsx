import LandingHeroSection from "@/components/features/landing/landing/v2/LandingHeroSection";
import WhyTmaasSection from "@/components/features/landing/landing/v2/WhyTmaasSection";
import HowItWorksSection from "@/components/features/landing/landing/v2/HowItWorksSection";
import ClientOutcomesSection from "@/components/features/landing/landing/v2/ClientOutcomesSection";
import MarketplacePreviewSection from "@/components/features/landing/landing/v2/MarketplacePreviewSection";
import DqLineageStatsBand from "@/components/features/landing/landing/v2/DqLineageStatsBand";
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
        <DqLineageStatsBand />
        <LandingCtaSection />
      </main>
      <Footer />
    </div>
  );
}
