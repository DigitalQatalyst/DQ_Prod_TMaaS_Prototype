import LandingNavbar from "@/components/site/landing/LandingNavbar";
import TrustedBySection from "@/components/site/landing/TrustedBySection";
import Footer from "@/components/Footer";
import LandingHeroSection from "@/components/site/landing/v2/LandingHeroSection";
import MarketplacePreviewSection from "@/components/site/landing/v2/MarketplacePreviewSection";
import WhyTmaasSection from "@/components/site/landing/v2/WhyTmaasSection";
import HowItWorksSection from "@/components/site/landing/v2/HowItWorksSection";
import ServiceCategoriesSection from "@/components/site/landing/v2/ServiceCategoriesSection";
import ClientOutcomesSection from "@/components/site/landing/v2/ClientOutcomesSection";
import DqLineageStatsBand from "@/components/site/landing/v2/DqLineageStatsBand";
import LandingCtaSection from "@/components/site/landing/v2/LandingCtaSection";

const IndexProductLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />
      <main>
        <LandingHeroSection />
        <MarketplacePreviewSection />
        <TrustedBySection />
        <WhyTmaasSection />
        <HowItWorksSection />
        <ServiceCategoriesSection />
        <ClientOutcomesSection />
        <DqLineageStatsBand />
        <LandingCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default IndexProductLanding;
