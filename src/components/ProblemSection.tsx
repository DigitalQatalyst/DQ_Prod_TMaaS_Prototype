import { motion } from "framer-motion";
import { AlertCircle, Clock, DollarSign } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

const problems = [
  {
    icon: Clock,
    title: "Slow, consultant-heavy delivery",
    description: "Traditional consulting reports take months to produce and rarely translate to executable outcomes.",
  },
  {
    icon: DollarSign,
    title: "High cost, unclear value",
    description: "Six-figure retainers with limited visibility into progress, deliverables, or measurable business impact.",
  },
  {
    icon: AlertCircle,
    title: "Disconnected design and build",
    description: "Strategy documents become outdated the moment development begins, creating costly rework.",
  },
];

const ProblemSection = () => {
  return (
    <section className="border-y border-navy-100 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            kicker="The Challenge"
            title={
              <>
                Traditional transformation is{" "}
                <span className="bg-gradient-to-r from-navy-950 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  broken
                </span>
              </>
            }
          />
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 shadow-card transition hover:border-navy-200 hover:shadow-elevated"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10">
                <problem.icon size={20} className="text-orange-600" />
              </div>
              <h3 className="mb-2 font-semibold tracking-tight text-navy-950">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
