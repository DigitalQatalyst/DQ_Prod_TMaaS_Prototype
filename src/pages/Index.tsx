import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShopByGoalSection from "@/components/ShopByGoalSection";
import FeaturedPackagesSection from "@/components/FeaturedPackagesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ShopByGoalSection />
      <FeaturedPackagesSection />
      <HowItWorksSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
