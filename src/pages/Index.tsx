import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarketplaceBestSellers from "@/components/marketplace/MarketplaceBestSellers";
import TransformationJourneysSection from "@/components/site/TransformationJourneysSection";
import ExploreByCategorySection from "@/components/site/ExploreByCategorySection";
import IndustrySolutionsSection from "@/components/site/IndustrySolutionsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
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

export default Index;
