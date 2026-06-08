import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MeshSection from "@/components/site/MeshSection";
import HeroDashboardMockup from "./HeroDashboardMockup";

const LandingHeroSection = () => {
  return (
    <MeshSection
      variant="heroLight"
      grid
      className="px-5 pb-16 pt-10 md:px-8 md:pb-20 md:pt-14 lg:px-10 lg:pb-24 lg:pt-16"
    >
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="animate-fade-in-up font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
            Transformation Made As A Service
          </p>

          <h1 className="animate-fade-in-up animation-delay-100 mt-5 text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.03em] text-dq-navy sm:text-5xl lg:text-[3.25rem]">
            Accelerate digital{" "}
            <span className="text-dq-orange">transformation.</span>
            <br />
            Delivered as a service.
          </h1>

          <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-lg text-[15px] leading-relaxed text-gray-600 sm:text-lg">
            TMaaS connects organisations with certified transformation services,
            proven frameworks, and end-to-end delivery support — all in one
            marketplace built for measurable outcomes.
          </p>

          <div className="animate-fade-in-up animation-delay-300 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/marketplace"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-dq-orange px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#E04020]"
              style={{ boxShadow: "var(--glow-orange-md)" }}
            >
              Explore Marketplace
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c5cde8] bg-white/60 px-6 py-3.5 text-sm font-semibold text-dq-navy backdrop-blur-sm transition hover:border-[#a0aacc] hover:bg-white"
            >
              How it Works
              <ArrowRight size={16} className="text-dq-orange" />
            </a>
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
