import { motion } from "framer-motion";
import { Globe, Users, Database, ShieldCheck } from "lucide-react";
import MeshSection from "@/components/site/MeshSection";
import SectionHeading from "@/components/site/SectionHeading";

const pillars = [
  {
    icon: Globe,
    name: "Digital Experience",
    subtitle: "Customer journeys & channels",
    description: "Transform how customers interact with your organisation across every digital touchpoint.",
    examples: ["Customer onboarding", "Omnichannel", "Service portals", "Digital marketing"],
  },
  {
    icon: Users,
    name: "Digital Workspace",
    subtitle: "Internal tools & productivity",
    description: "Modernise how your teams work with intelligent platforms, governance, and collaboration tools.",
    examples: ["Intranet & collaboration", "GPRC & compliance", "Core business systems", "Backoffice support"],
  },
  {
    icon: Database,
    name: "Data & Intelligence",
    subtitle: "Analytics, AI & decisions",
    description: "Unlock the value of your data with modern analytics, AI capabilities, and decision intelligence.",
    examples: ["Data platforms", "Business intelligence", "AI/ML", "Data governance"],
  },
  {
    icon: ShieldCheck,
    name: "SecDevOps",
    subtitle: "Security & platform engineering",
    description: "Build secure, scalable, and automated foundations for continuous delivery and operations.",
    examples: ["Security posture", "DevOps maturity", "Platform engineering", "Automation"],
  },
];

const DBPSection = () => {
  return (
    <MeshSection variant="heroLight" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            kicker="The Foundation"
            title={
              <>
                The Digital Business{" "}
                <span className="bg-gradient-to-r from-navy-950 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Platform
                </span>
              </>
            }
            description={
              <>
                A unifying architecture built as integrated service marketplaces
                that power the enterprise across external value, internal
                efficiency, and adaptive evolution.
              </>
            }
          />
        </motion.div>

        {/* Four Execution Streams */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-navy-950">
              Four execution streams
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Comprehensive coverage across every dimension of your organisation's digital landscape
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="rounded-3xl border border-navy-100 bg-white/70 p-7 shadow-card backdrop-blur transition hover:border-navy-200 hover:shadow-elevated"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10">
                    <pillar.icon size={20} className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-navy-950">
                      {pillar.name}
                    </h3>
                    <p className="text-xs font-semibold text-orange-600">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {pillar.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {pillar.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-full border border-navy-100 bg-white/60 px-3 py-1 text-xs text-gray-700 backdrop-blur"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </MeshSection>
  );
};

export default DBPSection;
