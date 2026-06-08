import LandingNavbar from "@/components/site/landing/LandingNavbar";
import LandingHeroSection from "@/components/site/landing/LandingHeroSection";
import TrustedBySection from "@/components/site/landing/TrustedBySection";
import ChallengeSection from "@/components/site/landing/ChallengeSection";
import SolutionSection from "@/components/site/landing/SolutionSection";
import OfferingsSection from "@/components/site/landing/OfferingsSection";
import StatsSection from "@/components/site/landing/StatsSection";
import LandingHowItWorksSection from "@/components/site/landing/LandingHowItWorksSection";
import LandingCtaSection from "@/components/site/landing/LandingCtaSection";
import Footer from "@/components/Footer";

const IndexTraditional = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />
      <main>
        <LandingHeroSection />
        <TrustedBySection />
        <ChallengeSection />
        <SolutionSection />
        <OfferingsSection />
        <StatsSection />
        <LandingHowItWorksSection />
        <LandingCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default IndexTraditional;
