import DqBrandMark from "@/components/foundation/DqBrandMark";
import {
  HERO_MOCKUP_BADGE,
  HERO_MOCKUP_EYEBROW,
  HERO_MOCKUP_STATS,
} from "@/components/features/landing/landing/heroMockupContent";

const HeroDashboardMockup = () => {
  return (
    <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
      <div
        className="rounded-[22px] bg-white ring-1 ring-gray-200/60"
        style={{
          boxShadow:
            "0 2px 6px rgba(3,15,53,0.03), 0 8px 24px rgba(3,15,53,0.05), 0 24px 48px -12px rgba(3,15,53,0.08)",
        }}
      >
        <div className="flex items-center justify-between gap-4 px-5 pb-1 pt-5 sm:px-6 sm:pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500">
            {HERO_MOCKUP_EYEBROW}
          </p>
          <span className="shrink-0 rounded-full border border-orange-200 bg-[#FBEAE6] px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-dq-orange">
            {HERO_MOCKUP_BADGE}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2.5 px-5 py-4 sm:gap-3 sm:px-6 sm:py-5">
          {HERO_MOCKUP_STATS.map(({ value, label, Icon }) => (
            <div
              key={label}
              className="flex flex-col rounded-2xl border border-gray-100/80 bg-white px-3 py-4 sm:px-3.5 sm:py-5"
              style={{
                boxShadow: "0 4px 14px -4px rgba(3,15,53,0.06), 0 1px 3px rgba(3,15,53,0.04)",
              }}
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#E8EDF8] text-dq-navy sm:h-10 sm:w-10">
                <Icon size={18} strokeWidth={1.75} aria-hidden />
              </div>
              <div className="text-lg font-semibold leading-none tracking-tight text-dq-navy sm:text-[22px]">
                {value}
              </div>
              <p className="mt-2 font-mono text-[8px] uppercase leading-snug tracking-[0.08em] text-gray-500 sm:text-[9px]">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-4 mb-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#030F35] via-[#1a1f4a] to-[#3d1f2e] px-4 py-3.5 sm:mx-5 sm:mb-5 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <DqBrandMark size="sm" variant="dark" className="text-dq-orange" />
            </div>
            <div className="relative min-w-0 flex-1">
              <div className="h-px bg-white/15" />
              <span
                aria-hidden
                className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-dq-orange shadow-[0_0_10px_rgba(251,85,53,0.85)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDashboardMockup;
