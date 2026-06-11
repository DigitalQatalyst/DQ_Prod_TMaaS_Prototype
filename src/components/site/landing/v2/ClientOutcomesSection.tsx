const OUTCOMES = [
  {
    tag: "Cost",
    metric: "From $1k",
    metricLabel: "Starting price for services",
    title: "Low cost to start. Clear value to scale.",
    body: "Transparent pricing on every service. Start small, prove results, then grow.",
  },
  {
    tag: "Speed",
    metric: "4 wks",
    metricLabel: "Time to first outcome",
    title: "Impact in weeks, not months.",
    body: "Ready-to-launch blueprints and AI-powered delivery get you moving fast.",
  },
  {
    tag: "Scale",
    metric: "50+",
    metricLabel: "Transformation services",
    title: "Built to grow with your business.",
    body: "Modular services and proven blueprints adapt as your priorities change.",
  },
];

const ClientOutcomesSection = () => {
  return (
    <section
      id="outcomes"
      className="bg-white px-5 py-24 md:px-8 lg:px-10"
      aria-labelledby="client-outcomes-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12">
          <p className="mb-4 dq-eyebrow">
            Results
          </p>
          <h2
            id="client-outcomes-heading"
            className="text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl"
          >
            Less cost. Faster impact. Room to scale.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {OUTCOMES.map(({ tag, metric, metricLabel, title, body }) => (
            <div
              key={tag}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:border-dq-orange hover:shadow-xl sm:p-8"
            >
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
                {tag}
              </p>

              <div className="mb-6 border-b border-gray-200 pb-6">
                <div className="mb-1 text-5xl font-semibold leading-none tracking-tight text-dq-navy transition-colors group-hover:text-dq-orange">
                  {metric}
                </div>
                <div className="text-[13px] text-gray-500">{metricLabel}</div>
              </div>

              <h3 className="mb-3 flex-1 text-[17px] font-semibold leading-snug tracking-tight text-dq-navy">
                {title}
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-500">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientOutcomesSection;
