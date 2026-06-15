"use client";

import Link from "next/link";
import {
  ArrowRight,
  MessageSquareCode,
  Settings2,
  Bot,
  Workflow,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquareCode,
    title: "Describe your goal",
    desc: "Use Butler or browse strategic outcomes.",
  },
  {
    icon: Settings2,
    title: "Choose your services",
    desc: "Explore services and recommended bundles.",
  },
  {
    icon: Workflow,
    title: "Launch structured delivery",
    desc: "Activate implementation with guided delivery and tracked milestones.",
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
      className="border-t border-gray-100 bg-white px-5 py-24 md:px-8 lg:px-10"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
            How it works
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-4 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl"
          >
            From goal to live capability
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Browse packages, configure what you need, and deploy with a delivery
            model you can track.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="list-none rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-dq-orange hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-dq-navy text-white">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-xs font-semibold tabular-nums text-dq-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-dq-navy">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                  {step.desc}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 border-t border-gray-100 pt-10">
          <div className="grid grid-cols-3 gap-4 md:gap-0 md:divide-x md:divide-gray-100">
            {proofPoints.map((point) => (
              <div
                key={point.label}
                className="text-center first:md:pl-0 last:md:pr-0 md:px-8"
              >
                <p className="text-2xl font-semibold tracking-tight text-dq-navy md:text-3xl">
                  {point.value}
                </p>
                <p className="mt-1 text-xs font-medium text-gray-500 md:text-sm">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/marketplace"
            className="group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-full bg-dq-navy px-6 text-sm font-semibold text-white transition"
            style={{ boxShadow: "var(--glow-navy-md)" }}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-dq-orange to-[#e04020] transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative">Browse marketplace</span>
            <ArrowRight size={15} className="relative transition group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            onClick={openButler}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#c5cde8] bg-white/60 px-6 text-sm font-semibold text-dq-navy backdrop-blur-sm transition hover:border-[#a0aacc] hover:bg-white"
          >
            <Bot size={15} className="text-dq-orange" />
            Ask Butler
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
