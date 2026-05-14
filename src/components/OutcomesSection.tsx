import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Zap, Award } from "lucide-react";

const outcomes = [
  {
    icon: Zap,
    metric: "50%",
    label: "Faster development time",
    description: "Blueprint-driven architecture accelerates delivery cycles",
  },
  {
    icon: DollarSign,
    metric: "40%",
    label: "Technology cost savings",
    description: "Reusable solutions and synchronized execution reduce waste",
  },
  {
    icon: Award,
    metric: "Higher",
    label: "Quality of implementation",
    description: "Reference architectures ensure best-practice compliance",
  },
  {
    icon: TrendingUp,
    metric: "Continuous",
    label: "Adaptive evolution",
    description: "Live specifications enable ongoing optimization",
  },
];

const OutcomesSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-20 text-white md:py-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--mesh-hero-dark)" }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-300 backdrop-blur">
            Accelerated Outcomes
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Measurable{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              impact
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Through TMaaS, enterprises achieve measurable acceleration across every dimension of transformation.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                <outcome.icon size={20} className="text-orange-300" />
              </div>
              <div className="mb-2 text-3xl font-bold text-white">
                {outcome.metric}
              </div>
              <div className="mb-2 text-sm font-semibold text-white">
                {outcome.label}
              </div>
              <p className="text-xs leading-relaxed text-white/70">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur"
        >
          <p className="text-lg italic leading-relaxed text-white">
            "In the digital era, marketplaces are not platforms you launch—they are ecosystems you continuously
            design, govern, and evolve."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OutcomesSection;
