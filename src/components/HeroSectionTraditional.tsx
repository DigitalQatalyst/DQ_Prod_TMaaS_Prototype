import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import MeshSection from "./site/MeshSection";

const HeroSectionTraditional = () => {
  return (
    <MeshSection
      variant="heroLight"
      grid
      className="border-b border-navy-100/80 pb-16 pt-28 md:pb-20 md:pt-36"
    >
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Eyebrow */}
        <p className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700">
          <Sparkles size={13} className="text-orange-500" strokeWidth={2} />
          Transformation-as-a-Service
        </p>

        {/* Heading */}
        <h1 className="mt-5 font-heading text-balance text-3xl font-bold leading-tight tracking-tight text-navy-950 sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
          Find the right{" "}
          <span className="text-orange-600">transformation services</span>
          <br className="hidden sm:block" />
          <span className="sm:whitespace-nowrap"> for your business</span>
        </h1>

        {/* Subheading */}
        <p className="mt-5 text-balance text-base leading-relaxed text-navy-600 sm:text-lg md:text-[1.125rem]">
          Access certified specialists, proven frameworks, and end-to-end
          delivery support — all in one marketplace built for digital
          transformation.
        </p>

        {/* CTA buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Browse the marketplace
            <ArrowRight size={16} strokeWidth={2.25} />
          </Link>
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-6 py-3 text-sm font-semibold text-navy-800 shadow-sm transition hover:border-orange-200 hover:bg-orange-50/50 hover:text-orange-700"
          >
            Explore services
          </Link>
        </div>

        {/* Social proof / trust line */}
        <p className="mt-8 text-xs text-gray-400">
          Trusted by organisations across fintech, health, retail, and the public sector.
        </p>
      </div>
    </MeshSection>
  );
};

export default HeroSectionTraditional;
