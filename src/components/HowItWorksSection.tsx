import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageSquareCode,
  Settings2,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageSquareCode,
    title: "Describe your goal",
    desc: "Use Butler or pick a business goal to narrow what you need.",
  },
  {
    icon: Settings2,
    title: "Choose a package",
    desc: "Compare fixed-price services with clear scope, timeline, and deliverables.",
  },
  {
    icon: Workflow,
    title: "Activate delivery",
    desc: "Launch with certified specialists and tracked milestones.",
  },
];

const proofPoints = [
  { value: "50%", label: "Faster delivery" },
  { value: "40%", label: "Lower tech spend" },
  { value: "98%", label: "SLA success rate" },
];

const HowItWorksSection = () => {
  const openButler = () => {
    window.dispatchEvent(new CustomEvent("openDiagnoseAI"));
  };

  return (
    <section
      id="how-it-works"
      className="border-t border-navy-100 bg-white py-16 md:py-20"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header — matches featured packages row */}
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-orange-600">
            How it works
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-1 text-2xl font-bold tracking-tight text-navy-950 md:text-3xl"
          >
            From goal to live capability
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Browse packages, configure what you need, and deploy with a delivery
            model you can track.
          </p>
        </div>

        {/* Steps — equal cards, number in icon corner */}
        <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="list-none rounded-xl border border-navy-100 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-white">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-xs font-semibold tabular-nums text-orange-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-bold text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                  {step.desc}
                </p>
              </li>
            );
          })}
        </ol>

        {/* Stats — single divider row, no grey box */}
        <div className="mt-12 border-t border-navy-100 pt-10">
          <div className="grid grid-cols-3 gap-4 md:gap-0 md:divide-x md:divide-navy-100">
            {proofPoints.map((point) => (
              <div
                key={point.label}
                className="text-center md:px-8 first:md:pl-0 last:md:pr-0"
              >
                <p className="text-2xl font-bold tracking-tight text-navy-950 md:text-3xl">
                  {point.value}
                </p>
                <p className="mt-1 text-xs font-medium text-gray-500 md:text-sm">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            asChild
            className="h-10 rounded-lg bg-navy-950 px-5 text-sm font-semibold hover:bg-navy-900"
          >
            <Link to="/marketplace" className="gap-2">
              Browse marketplace
              <ArrowRight size={15} />
            </Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={openButler}
            className="h-10 gap-2 px-4 text-sm font-semibold text-gray-600 hover:text-navy-950"
          >
            <Sparkles size={15} className="text-orange-500" />
            Ask Butler
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
