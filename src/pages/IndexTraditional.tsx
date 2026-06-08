import Navbar from "@/components/Navbar";
import HeroSectionTraditional from "@/components/HeroSectionTraditional";
import MarketplaceBestSellers from "@/components/marketplace/MarketplaceBestSellers";
import TransformationJourneysSection from "@/components/site/TransformationJourneysSection";
import ExploreByCategorySection from "@/components/site/ExploreByCategorySection";
import IndustrySolutionsSection from "@/components/site/IndustrySolutionsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const IndexTraditional = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSectionTraditional />

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <MarketplaceBestSellers activeTab="all" selectedIndustry="all" />
      </div>

      <TransformationJourneysSection />
      <ExploreByCategorySection />
      <IndustrySolutionsSection />

      <HowItWorksSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default IndexTraditional;
