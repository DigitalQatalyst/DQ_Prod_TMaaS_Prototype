const STATS = [
  { value: "100+", label: "Expert service providers" },
  { value: "6+", label: "Countries served" },
  { value: "50+", label: "Transformation services" },
  { value: "15", label: "Years of industry experience" },
];

const StatsSection = () => {
  return (
    <section className="bg-white px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 md:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="border-l-4 border-dq-navy pl-6">
              <div className="mb-2 text-5xl font-semibold tracking-tight text-dq-navy md:text-6xl">
                {value}
              </div>
              <p className="max-w-[160px] text-sm leading-snug text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
