const OUTCOMES = [
  {
    tag: "Business value",
    metric: "From $1k",
    metricLabel: "Typical entry engagement",
    title: "Transparent, cost-effective solutions with measurable ROI.",
    body: "Published pricing and scoped blueprints help business leaders fund with confidence. Start focused, scale as value is proven.",
  },
  {
    tag: "Speed",
    metric: "4 wks",
    metricLabel: "Typical time to first delivered outcome",
    title: "Ready-to-launch blueprints, not another strategy phase.",
    body: "AI-assisted, architecture-led services compress time to impact. Structured fulfilment in weeks, not quarters of discovery.",
  },
  {
    tag: "Scale",
    metric: "50+",
    metricLabel: "Certified productised services",
    title: "Flexible, scalable delivery that adapts with you.",
    body: "Reusable operating models and governed execution let technology leaders streamline delivery without restarting from zero.",
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
            What teams achieve
          </p>
          <h2
            id="client-outcomes-heading"
            className="text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl"
          >
            Lower risk to start. Faster to value. Built to scale.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {OUTCOMES.map(({ tag, metric, metricLabel, title, body }) => (
            <div
              key={tag}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-8 transition-all duration-300 hover:border-dq-orange hover:shadow-xl"
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
