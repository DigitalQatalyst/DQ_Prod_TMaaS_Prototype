import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import MeshSection from "@/components/site/MeshSection";
import HeroDashboardMockup from "@/components/site/landing/HeroDashboardMockup";
import { DQ_CORP_WEB_URL } from "@/lib/brandLinks";
import ProductBadgeRow from "./ProductBadgeRow";

const LandingHeroSection = () => {
  return (
    <MeshSection
      variant="heroLight"
      grid
      className="px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24 lg:px-10 lg:pb-24 lg:pt-28"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="animate-fade-in-up flex flex-col gap-4">
            <ProductBadgeRow code="TMaaS" status="Live" />
            <a
              href={DQ_CORP_WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-dq-navy"
            >
              Part of DigitalQatalyst
              <ExternalLink size={14} aria-hidden />
            </a>
          </div>

          <p className="animate-fade-in-up animation-delay-100 mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
            Transformation Management As A Service
          </p>

          <h1 className="animate-fade-in-up animation-delay-100 mt-5 text-balance text-[2.75rem] font-semibold leading-[1.0] tracking-[-0.03em] text-dq-navy sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">Find, compare, and</span>
            <span className="block text-dq-orange">activate services.</span>
          </h1>

          <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            TMaaS is a transformation marketplace — browse certified services,
            evaluate bundles against your goals, and engage when you are ready to
            move forward.
          </p>

          <div className="animate-fade-in-up animation-delay-300 mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link
              to="/marketplace"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-dq-orange px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#E04020] sm:w-auto"
              style={{ boxShadow: "var(--glow-orange-md)" }}
            >
              Explore Marketplace
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#c5cde8] bg-white/60 px-6 py-3.5 text-sm font-semibold text-dq-navy backdrop-blur-sm transition hover:border-[#a0aacc] hover:bg-white sm:w-auto"
            >
              Contact Us
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
