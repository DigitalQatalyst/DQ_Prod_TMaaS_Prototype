const FEATURED_SERVICES = [
  { name: "AI Readiness Assessment", category: "Data, AI & Analytics" },
  { name: "Customer Portal Build", category: "Customer Experience & Engagement" },
  { name: "Cloud SecDevOps Setup", category: "Development, Security, and Operations" },
];

const HeroDashboardMockup = () => {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
      <div
        className="relative"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          className="relative rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl"
          style={{
            transform: "rotateY(-8deg) rotateX(4deg)",
            transformStyle: "preserve-3d",
            boxShadow:
              "0 25px 60px -12px rgba(3, 15, 53, 0.25), 0 0 0 1px rgba(3, 15, 53, 0.04)",
          }}
        >
          <div className="overflow-hidden rounded-xl bg-[#0a1628]">
            <div className="flex">
              <div className="hidden w-[52px] shrink-0 border-r border-white/10 bg-[#060f1f] py-4 sm:block">
                <div className="mx-auto mb-6 h-6 w-6 rounded-md bg-dq-orange/80" />
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`mx-auto mb-3 h-7 w-7 rounded-lg ${
                      i === 1 ? "bg-white/15" : "bg-white/5"
                    }`}
                  />
                ))}
              </div>

              <div className="min-w-0 flex-1 p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-dq-orange">
                      TMaaS Marketplace
                    </div>
                    <div className="mt-0.5 text-sm font-semibold text-white sm:text-base">
                      Service Catalogue
                    </div>
                  </div>
                  <div className="hidden rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[9px] text-white/60 sm:block">
                    Browse
                  </div>
                </div>

                <div className="mb-4 grid grid-cols-3 gap-2">
                  {[
                    { label: "Services", value: "50+" },
                    { label: "Categories", value: "12" },
                    { label: "Bundles", value: "8" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5 sm:p-3"
                    >
                      <div className="text-[9px] uppercase tracking-wider text-white/40">
                        {stat.label}
                      </div>
                      <div className="mt-1 text-lg font-semibold text-white sm:text-xl">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-4 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <div className="mb-2 text-[10px] font-medium text-white/70">
                    Featured Services
                  </div>
                  <div className="space-y-2">
                    {FEATURED_SERVICES.map((service) => (
                      <div
                        key={service.name}
                        className="flex items-center justify-between gap-2 rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-2"
                      >
                        <span className="truncate text-[11px] text-white/80">
                          {service.name}
                        </span>
                        <span className="shrink-0 font-mono text-[8px] uppercase tracking-wider text-dq-orange">
                          {service.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">
                    Shop by Goal
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Grow Revenue", "Launch AI", "Modernise Ops"].map((goal) => (
                      <span
                        key={goal}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-white/60"
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.65 0.208 29 / 0.15), transparent 70%)",
        }}
      />
    </div>
  );
};

export default HeroDashboardMockup;
