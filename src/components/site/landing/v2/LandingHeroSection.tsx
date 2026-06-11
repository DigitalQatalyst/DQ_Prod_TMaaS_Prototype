import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MeshSection from "@/components/site/MeshSection";
import HeroDashboardMockup from "@/components/site/landing/HeroDashboardMockup";
import { PLATFORM_NAME } from "@/lib/brandLinks";
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
        <div className="min-w-0">
          <p className="animate-fade-in-up dq-eyebrow">
            Transformation Management as a Service
          </p>

          <h1 className="animate-fade-in-up animation-delay-100 mt-5 text-balance text-[2.75rem] font-semibold leading-[1.0] tracking-[-0.03em] text-dq-navy sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">Digital transformation</span>
            <span className="block text-dq-orange">accelerated</span>
          </h1>

          <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            {PLATFORM_NAME} is a low-cost platform for digital
            transformation services. Browse AI-powered, ready-to-launch
            blueprints with transparent pricing and start delivering impact in
            weeks.
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

        <div className="animate-fade-in-up animation-delay-200 min-w-0 overflow-hidden px-2 py-4 sm:px-4 sm:py-6 lg:justify-self-end">
          <HeroDashboardMockup />
        </div>
      </div>
    </MeshSection>
  );
};

export default LandingHeroSection;
