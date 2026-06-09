const OUTCOMES = [
  {
    tag: "Cost",
    metric: "From $1k",
    metricLabel: "Low-cost starting point for transformation",
    title:
      "Enterprise transformation without enterprise-scale upfront investment.",
    body: "Explore productized services with transparent pricing — start with a focused engagement and scale as outcomes prove out.",
  },
  {
    tag: "Speed",
    metric: "12×",
    metricLabel: "Faster time to realise impact from digital transformation",
    title: "Practical impact in as little as four weeks.",
    body: "Realise practical impact from transformation in as fast as 4 weeks, due to focused execution of transformation.",
  },
  {
    tag: "Success",
    metric: "99%",
    metricLabel: "Success rate of transformation programs executed through an agile approach",
    title: "Goals realised even as priorities shift.",
    body: "Increased ability to successfully realise transformation goals due to ability to adapt to changing demand and priorities.",
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
            Client Outcomes
          </p>
          <h2
            id="client-outcomes-heading"
            className="text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl"
          >
            Real impact. Measurable results. Faster time to value.
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
