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

      <section className="px-5 py-24 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <MarketplaceBestSellers activeTab="all" selectedIndustry="all" />
        </div>
      </section>

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
