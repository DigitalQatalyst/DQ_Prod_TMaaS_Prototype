import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MeshSection from "@/components/site/MeshSection";
import HeroDashboardMockup from "@/components/site/landing/HeroDashboardMockup";
import ProductBadgeRow from "@/components/site/landing/v2/ProductBadgeRow";
import { PLATFORM_ACRONYM } from "@/lib/brandLinks";
import { btnPrimary, btnSecondary } from "@/lib/brandAccent";
import { cn } from "@/lib/utils";

const LandingHeroSection = () => {
  return (
    <MeshSection
      variant="heroLight"
      grid
      className="px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24 lg:px-10 lg:pb-24 lg:pt-28"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="animate-fade-in-up">
            <ProductBadgeRow code={PLATFORM_ACRONYM} status="Live" />
          </div>

          <p className="animate-fade-in-up animation-delay-100 mt-5 dq-eyebrow">
            Transformation operating platform
          </p>

          <h1 className="animate-fade-in-up animation-delay-100 mt-5 text-balance text-[2.75rem] font-semibold leading-[1.0] tracking-[-0.03em] text-dq-navy sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">Industrialise digital</span>
            <span className="block text-dq-orange">transformation delivery</span>
          </h1>

          <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            {PLATFORM_ACRONYM} is DigitalQatalyst&apos;s operating platform for
            productised transformation: an architecture-led marketplace of
            AI-ready blueprints, governed fulfilment, and transparent pricing.
            Move beyond isolated consulting engagements to structured execution
            you can activate in weeks.
          </p>

          <div className="animate-fade-in-up animation-delay-300 mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link
              to="/marketplace"
              className={cn(btnPrimary, "group w-full sm:w-auto")}
            >
              Browse services
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              to="/contact"
              className={cn(btnSecondary, "w-full sm:w-auto")}
            >
              Talk to our team
            </Link>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-200 lg:justify-self-end">
          <HeroDashboardMockup />
        </div>
      </div>
    </MeshSection>
  );
};

export default LandingHeroSection;
