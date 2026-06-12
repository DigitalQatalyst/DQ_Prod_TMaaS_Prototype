import JsonLd from "@/components/JsonLd";
import Seo from "@/components/Seo";
import { HOME_SEO } from "@/lib/seo";
import { buildHomeStructuredData } from "@/lib/structuredData";
import LandingNavbar from "@/components/site/landing/LandingNavbar";
import TrustedBySection from "@/components/site/landing/TrustedBySection";
import Footer from "@/components/Footer";
import LandingHeroSection from "@/components/site/landing/v2/LandingHeroSection";
import MarketplacePreviewSection from "@/components/site/landing/v2/MarketplacePreviewSection";
import WhyTmaasSection from "@/components/site/landing/v2/WhyTmaasSection";
import HowItWorksSection from "@/components/site/landing/v2/HowItWorksSection";
import ClientOutcomesSection from "@/components/site/landing/v2/ClientOutcomesSection";
import DqLineageStatsBand from "@/components/site/landing/v2/DqLineageStatsBand";
import LandingCtaSection from "@/components/site/landing/v2/LandingCtaSection";

const IndexProductLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={HOME_SEO.title}
        description={HOME_SEO.description}
        path={HOME_SEO.path}
      />
      <JsonLd data={buildHomeStructuredData()} />
      <LandingNavbar />
      <main>
        <LandingHeroSection />
        <MarketplacePreviewSection />
        <TrustedBySection />
        <WhyTmaasSection />
        <HowItWorksSection />
        <ClientOutcomesSection />
        <DqLineageStatsBand />
        <LandingCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default IndexProductLanding;
