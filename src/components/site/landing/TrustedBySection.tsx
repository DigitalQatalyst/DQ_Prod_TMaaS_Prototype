const MARQUEE_LOGOS = [
  "QNB",
  "RTA",
  "ADNOC",
  "Mubadala",
  "QDB",
  "Schneider",
  "SAIB",
  "DEWA",
  "ADIB",
  "NEOM",
  "ADGM",
  "Abu Dhabi Digital Authority",
];

const TrustedBySection = () => {
  const doubled = [...MARQUEE_LOGOS, ...MARQUEE_LOGOS];

  return (
    <section className="border-y border-gray-100 bg-white px-5 py-12 md:px-8 lg:px-10">
      <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-widest text-gray-400">
        Trusted by leading organisations
      </p>
      <div className="marquee-mask mx-auto max-w-[1200px] overflow-hidden">
        <div className="marquee-track gap-12">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 select-none px-8 text-xl font-bold text-gray-400 transition-colors hover:text-dq-navy"
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
