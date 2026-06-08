import SplitSectionHeader from "./SplitSectionHeader";

const STEPS = [
  {
    num: 1,
    title: "Sign Up",
    body: "Create your organisation profile and set transformation goals.",
  },
  {
    num: 2,
    title: "Explore & Select",
    body: "Browse services, bundles, and certified providers matched to your needs.",
  },
  {
    num: 3,
    title: "Plan & Engage",
    body: "Blueprint readiness, align stakeholders, and activate delivery pods.",
  },
  {
    num: 4,
    title: "Execute & Track",
    body: "Ship increments with weekly cadence, milestones, and accountable owners.",
  },
  {
    num: 5,
    title: "Measure & Scale",
    body: "Review outcome scorecards, optimise, and expand what is working.",
  },
];

const LandingHowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="bg-white px-5 py-24 md:px-8 lg:px-10"
      aria-labelledby="landing-how-it-works-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <SplitSectionHeader
          kicker="How It Works"
          title={
            <span id="landing-how-it-works-heading">
              Simple. Guided. Built for results.
            </span>
          }
          description="Getting started on TMaaS takes minutes, not months. Follow a guided path from sign-up to measurable transformation outcomes."
        />

        {/* stepper */}
        <div className="relative">
          {/* connecting line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[18px] hidden h-px bg-gray-200 lg:block"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          />

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {STEPS.map(({ num, title, body }) => (
              <li key={num} className="relative list-none text-center">
                <div
                  className={`relative z-10 mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${
                    num === 1
                      ? "bg-dq-orange text-white"
                      : "border-2 border-gray-200 bg-white text-gray-500"
                  }`}
                >
                  {num}
                </div>
                <h3 className="mb-2 text-sm font-semibold text-dq-navy">{title}</h3>
                <p className="text-[13px] leading-relaxed text-gray-500">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default LandingHowItWorksSection;
