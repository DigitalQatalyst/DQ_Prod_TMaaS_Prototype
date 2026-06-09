import { Link } from "react-router-dom";
import { ArrowRight, Search, Scale, Handshake } from "lucide-react";
import MeshSection from "@/components/site/MeshSection";

const WHY_CARDS = [
  {
    Icon: Search,
    title: "Hard to find the right services",
    body: "Transformation buyers waste cycles searching fragmented vendor lists with no shared taxonomy or outcome mapping.",
  },
  {
    Icon: Scale,
    title: "Difficult to compare options",
    body: "Pricing, scope, and delivery models vary wildly — making apples-to-apples evaluation nearly impossible.",
  },
  {
    Icon: Handshake,
    title: "No clear path to engage",
    body: "Even when the right service is identified, activation often stalls without a governed onboarding path.",
  },
];

const WhyTmaasSection = () => {
  return (
    <MeshSection
      id="why"
      variant="heroDark"
      className="px-5 py-24 text-white md:px-8 lg:px-10"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black 40%, transparent 80%)",
        }}
      />

      <div className="mx-auto max-w-[1200px]">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
          Why TMaaS
        </p>
        <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Buying transformation services should not be this hard.
        </h2>
        <p className="mb-16 max-w-2xl text-lg text-white/60">
          Organisations need a single place to discover, evaluate, and activate
          certified transformation services — with transparency from day one.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {WHY_CARDS.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-dq-orange/10 text-dq-orange">
                <Icon size={22} />
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-white">
                {title}
              </h3>
              <p className="text-[15px] leading-relaxed text-white/60">{body}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-[15px] text-white/50">
          TMaaS closes the gap with a curated marketplace —{" "}
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-1 font-semibold text-dq-orange transition-all hover:gap-2"
          >
            explore services <ArrowRight size={14} />
          </Link>
        </p>
      </div>
    </MeshSection>
  );
};

export default WhyTmaasSection;
