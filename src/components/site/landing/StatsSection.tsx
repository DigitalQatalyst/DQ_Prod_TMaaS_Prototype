import { Users, Globe, Briefcase, Building2 } from "lucide-react";
import MeshSection from "@/components/site/MeshSection";

const STATS = [
  {
    Icon: Users,
    value: "100+",
    label: "Expert service providers",
  },
  {
    Icon: Globe,
    value: "6+",
    label: "Countries served",
  },
  {
    Icon: Briefcase,
    value: "50+",
    label: "Transformation services",
  },
  {
    Icon: Building2,
    value: "15+",
    label: "Industry verticals",
  },
];

const StatsSection = () => {
  return (
    <MeshSection variant="heroDark" className="px-5 py-20 md:px-8 lg:px-10">
      {/* wavy glow background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, oklch(0.55 0.18 29 / 0.2), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
        {STATS.map(({ Icon, value, label }) => (
          <div key={label} className="text-center">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-dq-orange/10 text-dq-orange">
              <Icon size={20} strokeWidth={1.75} />
            </div>
            <div className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {value}
            </div>
            <p className="mt-2 text-[13px] leading-snug text-white/60">{label}</p>
          </div>
        ))}
      </div>
    </MeshSection>
  );
};

export default StatsSection;
