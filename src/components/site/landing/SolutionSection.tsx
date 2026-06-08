import { Search, ClipboardList, Rocket, BarChart3 } from "lucide-react";
import SplitSectionHeader from "./SplitSectionHeader";

const SOLUTION_ITEMS = [
  {
    Icon: Search,
    title: "Discover",
    body: "Browse services and bundles mapped to your transformation goals and industry context.",
  },
  {
    Icon: ClipboardList,
    title: "Assess & Plan",
    body: "Blueprint readiness, prioritise backlog, and align stakeholders on a clear 90-day path.",
  },
  {
    Icon: Rocket,
    title: "Execute",
    body: "Deploy certified pods with weekly cadence, delivery artifacts, and accountable owners.",
  },
  {
    Icon: BarChart3,
    title: "Measure & Improve",
    body: "Track outcomes with scorecards, telemetry, and continuous optimisation loops.",
  },
];

const SolutionSection = () => {
  return (
    <section className="bg-white px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <SplitSectionHeader
          kicker="The Solution"
          title="One platform. End-to-end transformation."
          description="TMaaS brings discovery, planning, execution, and measurement into a single operating system — so transformation becomes repeatable, not one-off."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {SOLUTION_ITEMS.map(({ Icon, title, body }) => (
            <div key={title} className="flex flex-col">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-dq-orange">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-tight text-dq-navy">
                {title}
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
