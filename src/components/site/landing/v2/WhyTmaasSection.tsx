import { FileX, Layers, Unlink } from "lucide-react";
import MeshSection from "@/components/site/MeshSection";

const WHY_CARDS = [
  {
    Icon: FileX,
    title: "Designed, never built",
    body: "Strategy decks and roadmaps that never connect to execution or running systems.",
  },
  {
    Icon: Layers,
    title: "Built without a blueprint",
    body: "Technology deployed without architecture alignment, accountable owners, or delivery cadence.",
  },
  {
    Icon: Unlink,
    title: "No continuity",
    body: "Discovery, delivery, and operations treated as disconnected engagements — with no measurable outcomes.",
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
          Why TMaaS exists
        </p>
        <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          70% of digital transformations fail to deliver.
        </h2>
        <p className="mb-16 max-w-2xl text-lg text-white/60">
          The reasons are consistent. The fix is architectural — and productised.
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
          TMaaS was built to close this gap — with a marketplace that treats
          transformation as a continuous, managed system.
        </p>
      </div>
    </MeshSection>
  );
};

export default WhyTmaasSection;
