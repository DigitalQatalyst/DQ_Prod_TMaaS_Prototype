import { Calendar, Check } from "lucide-react";

/** Decorative 3D advisory-session mockup — matches landing hero mockup language. */
const LaunchAdvisoryIllustration = () => {
  return (
    <div
      className="relative mx-auto w-full max-w-[340px] select-none"
      aria-hidden
    >
      <div className="absolute -right-4 top-6 h-28 w-28 rounded-full bg-dq-orange/15 blur-2xl" />
      <div className="absolute -left-2 bottom-4 h-24 w-24 rounded-full bg-dq-navy/10 blur-2xl" />

      <div className="relative lg:[perspective:1100px]">
        <div className="rounded-2xl border border-gray-200/80 bg-white p-2.5 shadow-lg lg:[transform:rotateY(-10deg)_rotateX(6deg)] lg:[transform-style:preserve-3d]">
          <div className="overflow-hidden rounded-xl bg-[#0a1628]">
            <div className="border-b border-white/10 px-4 py-3">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-dq-orange">
                  Launch offer
                </span>
                <span className="rounded-full bg-dq-orange/20 px-2 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wider text-dq-orange">
                  Free
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-white">
                Transformation advisory
              </p>
            </div>

            <div className="space-y-3 p-4">
              <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-dq-orange/15 text-dq-orange">
                  <Calendar size={16} strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-white/40">
                    Session
                  </p>
                  <p className="text-xs font-medium text-white">Book with a DQ advisor</p>
                </div>
              </div>

              {[
                "Clarify priorities",
                "Identify high-impact gaps",
                "Plan your next step",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[11px] text-white/70">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-dq-orange/20 text-dq-orange">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchAdvisoryIllustration;
