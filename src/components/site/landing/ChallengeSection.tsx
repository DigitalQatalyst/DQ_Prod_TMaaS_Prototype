import { Boxes, Target, CircleHelp } from "lucide-react";
import MeshSection from "@/components/site/MeshSection";
import SplitSectionHeader from "./SplitSectionHeader";

const CHALLENGE_CARDS = [
  {
    Icon: Boxes,
    title: "Fragmented approach",
    body: "Multiple vendors, disconnected tools, and siloed delivery models lead to inconsistent outcomes and duplicated effort.",
  },
  {
    Icon: Target,
    title: "Execution gaps",
    body: "Strategy rarely translates to delivery. Teams lack the playbooks, accountable owners, and cadence to ship with confidence.",
  },
  {
    Icon: CircleHelp,
    title: "Uncertain outcomes",
    body: "Without telemetry and scorecards, leadership cannot steer investment toward what is working — or stop what is not.",
  },
];

const ChallengeSection = () => {
  return (
    <MeshSection
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
        <SplitSectionHeader
          dark
          kicker="The Challenge"
          title="Most transformations fail to deliver value."
          description="Organisations invest heavily in digital transformation — yet the majority never achieve the outcomes they set out to deliver. The reasons are structural, not strategic."
        />

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {CHALLENGE_CARDS.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-dq-orange/10 text-dq-orange">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-white">
                {title}
              </h3>
              <p className="text-[15px] leading-relaxed text-white/60">{body}</p>
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[3px] bg-dq-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </MeshSection>
  );
};

export default ChallengeSection;
