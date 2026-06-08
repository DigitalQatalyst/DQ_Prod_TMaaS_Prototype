const MARQUEE_LOGOS = [
  "ADIB",
  "QDB",
  "QNB",
  "Saudi Investment Bank",
  "UAE Ministry of Finance",
  "Abu Dhabi Digital Authority",
  "ADGM",
  "Mubadala",
  "NEOM",
  "Schneider Electric",
];

const TrustedBySection = () => {
  const doubled = [...MARQUEE_LOGOS, ...MARQUEE_LOGOS];

  return (
    <section className="border-y border-gray-100 bg-white py-10 px-5 md:px-8 lg:px-10">
      <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400">
        Trusted by leading organisations
      </p>
      <div className="marquee-mask mx-auto max-w-[1200px] overflow-hidden">
        <div className="marquee-track gap-12">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 select-none px-6 text-lg font-semibold tracking-tight text-gray-400 transition-colors hover:text-dq-navy"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
