import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  BarChart3, 
  ArrowRight, 
  MessageSquareCode, 
  Settings2, 
  Workflow 
} from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import DiagnoseDialog from "./DiagnoseDialog";

const metrics = [
  {
    icon: Cpu,
    metric: "50% Faster",
    title: "Accelerated Delivery Time",
    desc: "By utilizing pre-scoped transformation roadmaps and pre-configured delivery plans, we cut transformation discovery and design cycles in half."
  },
  {
    icon: BarChart3,
    metric: "40% Savings",
    title: "Technology Optimization",
    desc: "Eliminate advisor overhead and duplicate software purchases. Discovery validation ensures you only pay for exactly what you deploy."
  },
  {
    icon: ShieldCheck,
    metric: "98% Success",
    title: "SLA Guaranteed Outcomes",
    desc: "Every initiative anchors to transparent scorecards. Execution checkpoints ensure total quality compliance and execution audit records."
  }
];

const steps = [
  {
    icon: MessageSquareCode,
    num: "01",
    title: "Discover Opportunities",
    desc: "Describe your business goals or growth priorities. TMaaS AI identifies transformation opportunities tailored to your organization."
  },
  {
    icon: Settings2,
    num: "02",
    title: "Explore Recommended Solutions",
    desc: "Browse AI-curated transformation packages, industry accelerators, and recommended growth paths."
  },
  {
    icon: Workflow,
    num: "03",
    title: "Activate Your Transformation",
    desc: "Launch quickly with guided delivery, transparent progress tracking, and trusted specialists."
  }
];

const FrameworkSection = () => {
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleStartDiagnose = () => {
    setSelectedPrompt("Hi, I want to explore how to get started with TMaaS.");
    setIsDialogOpen(true);
  };

  return (
    <section id="governance-framework" className="bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-slate-50 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionHeading
            kicker="Our Value Commitment"
            title={
              <>
                A Technical Delivery Engine{" "}
                <span className="bg-gradient-to-r from-navy-950 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  You Can Trust
                </span>
              </>
            }
            description="TMaaS connects top-level corporate strategy directly to running capabilities. We deliver evidence-led governance, transparent roadmaps, and measurable metrics."
          />
        </motion.div>

        {/* 3 Metric Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-navy-50 bg-slate-50/50 p-8 transition-all hover:bg-white hover:border-navy-100 hover:shadow-card"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-600">
                  <IconComponent size={22} />
                </div>
                <div className="text-3xl font-extrabold text-navy-950 tracking-tight mb-1">{item.metric}</div>
                <h4 className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-3">{item.title}</h4>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* 3 Process Steps */}
        <div className="mt-28 border-t border-navy-100 pt-20">
          <div className="mb-14 text-center">
            <span className="rounded-full bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600">
              Three Simple Steps
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-navy-950">
              How it works commercially
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3 relative">
            {/* Connecting lines for steps */}
            <div className="absolute left-0 right-0 top-14 hidden md:block z-0">
              <div className="mx-auto flex max-w-4xl items-center justify-between px-10">
                <div className="h-0.5 flex-1 border-t-2 border-dashed border-navy-100" />
                <div className="h-0.5 flex-1 border-t-2 border-dashed border-navy-100" />
              </div>
            </div>

            {steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 text-center flex flex-col items-center px-4"
                >
                  <div className="relative mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-navy-950 text-white shadow-elevated transition-transform group-hover:scale-105">
                      <StepIcon size={24} />
                    </div>
                    <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white shadow-sm">
                      {step.num}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold tracking-tight text-navy-950 mb-2">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-500">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 flex justify-center">
            <button
              onClick={handleStartDiagnose}
              className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-8 py-3.5 text-sm font-semibold text-white shadow-brand hover:bg-navy-900 transition"
            >
              <span>Discover Opportunities</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <DiagnoseDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        initialProblem={selectedPrompt}
      />
    </section>
  );
};

export default FrameworkSection;
