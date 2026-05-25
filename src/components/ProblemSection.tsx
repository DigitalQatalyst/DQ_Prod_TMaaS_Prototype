import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Settings, 
  Bot, 
  Users, 
  Briefcase, 
  HeartPulse, 
  ShoppingCart, 
  Database, 
  ShieldCheck, 
  Zap,
  Percent,
  TrendingDown
} from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import DiagnoseDialog from "./DiagnoseDialog";

const tabs = [
  { id: "outcome", label: "Browse by Outcome" },
  { id: "industry", label: "Browse by Industry" },
  { id: "department", label: "Browse by Department" }
];

const data = {
  outcome: [
    {
      title: "Scale Customer Experience",
      desc: "Remove friction across digital channels, integrate backend sales pipelines, and design high-momentum client portals.",
      action: "I want to improve customer experience: scale digital customer touchpoints",
      icon: Users,
      tag: "Aspirational",
      match: 98,
      speed: "Fast Launch"
    },
    {
      title: "Launch AI Capabilities",
      desc: "Implement predictive intelligence algorithms, generative models, and robust master data pipelines safely.",
      action: "I want to adopt AI capabilities: build intelligence models",
      icon: Bot,
      tag: "Highest Growth",
      match: 96,
      speed: "2-3 Weeks"
    },
    {
      title: "Accelerate Digital Operations",
      desc: "Eradicate manual handoffs, consolidate core databases, and orchestrate approval pipelines automatically.",
      action: "I want to improve operations: accelerate digital operating core",
      icon: Settings,
      tag: "High Efficiency",
      match: 92,
      speed: "4 Weeks"
    },
    {
      title: "Reduce Operational Bottlenecks",
      desc: "Optimize slow approval workflows, eliminate document sharing silos, and track real-time delivery telemetry.",
      action: "I want to improve operations: reduce bottlenecks in approval flows",
      icon: TrendingDown,
      tag: "Instant Gains",
      match: 90,
      speed: "Immediate"
    }
  ],
  industry: [
    {
      title: "Retail AI Transformation",
      desc: "Optimize store checkouts, global commerce catalogs, and real-time user personalization telemetry.",
      action: "Retail AI Transformation: modernize storefronts and catalog ingestion",
      icon: ShoppingCart,
      tag: "Retail & E-commerce",
      match: 98,
      speed: "Highly Popular"
    },
    {
      title: "Banking Customer Experience",
      desc: "Consolidate secure client self-service portals and automate transactions for unified digital branches.",
      action: "Banking Customer Experience: secure self-service portals and branch operations",
      icon: Briefcase,
      tag: "Banking & Finance",
      match: 94,
      speed: "Regulated Core"
    },
    {
      title: "Healthcare Operations Modernization",
      desc: "Streamline secure clinician workflows, HIPAA-compliant document folders, and patient registrations.",
      action: "Healthcare Operations Modernization: secure patient registrations and HIPAA doc workflows",
      icon: HeartPulse,
      tag: "Healthcare & Biotech",
      match: 95,
      speed: "Fully Compliant"
    },
    {
      title: "SME Digital Growth",
      desc: "Supercharge marketing automation, lead scoring engines, and client acquisition channels for rapid scaling.",
      action: "SME Digital Growth: scale marketing automation and lead acquisition",
      icon: TrendingUp,
      tag: "Mid-Market Growth",
      match: 93,
      speed: "Rapid ROI"
    }
  ],
  department: [
    {
      title: "Marketing & Sales",
      desc: "Refine digital acquisition, real-time campaign performance telemetry, and automated conversion flows.",
      action: "Marketing & Sales: lead telemetry and conversion automation",
      icon: TrendingUp,
      tag: "Growth Engine",
      match: 96,
      speed: "Fast Configuration"
    },
    {
      title: "Customer Support",
      desc: "Build automated client portals, secure chat triggers, and aggregate communication timelines.",
      action: "Customer Support: self-service support portals and ticketing analytics",
      icon: Users,
      tag: "Retention Core",
      match: 94,
      speed: "Launch in Days"
    },
    {
      title: "IT & Product Engineering",
      desc: "Automate delivery plans, secure compliance pipelines, and track immutably validated software releases.",
      action: "IT & Product Engineering: DevOps release compliance and delivery plans",
      icon: ShieldCheck,
      tag: "Engineering Core",
      match: 91,
      speed: "Fully Automated"
    },
    {
      title: "Operations & HR",
      desc: "Orchestrate employee onboarding records, core approvals, and integrate siloed backoffice applications.",
      action: "Operations & HR: automate approval workflows and internal support integrations",
      icon: Settings,
      tag: "Operational Backbone",
      match: 90,
      speed: "Immediate Launch"
    }
  ]
};

const ProblemSection = () => {
  const [activeTab, setActiveTab] = useState<"outcome" | "industry" | "department">("outcome");
  const [selectedProblem, setSelectedProblem] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = (action: string) => {
    setSelectedProblem(action);
    setIsDialogOpen(true);
  };

  return (
    <section id="discovery-navigation" className="border-y border-navy-100 bg-slate-50/50 py-20 md:py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute right-0 top-1/4 h-[350px] w-[350px] rounded-full bg-orange-100/20 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 h-[300px] w-[300px] rounded-full bg-navy-100/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionHeading
            kicker="Dynamic Discovery"
            title={
              <>
                What business goal can we{" "}
                <span className="bg-gradient-to-r from-navy-950 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  solve for you today?
                </span>
              </>
            }
            description="Explore transformation pathways tailored exactly to your department's KPI targets, your industry's compliance reality, or your company's growth objectives."
          />
        </motion.div>

        {/* Tab Controls */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-navy-100 bg-white p-1.5 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-navy-950 text-white shadow-sm"
                    : "text-gray-500 hover:text-navy-950"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Card Display */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {data[activeTab].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleCardClick(item.action)}
                    className="group relative cursor-pointer overflow-hidden rounded-3xl border border-navy-50 bg-white p-6 shadow-card transition-all duration-300 hover:border-orange-500 hover:shadow-elevated flex flex-col justify-between"
                  >
                    {/* Glow hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div>
                      <div className="flex items-start justify-between">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                          <IconComponent size={20} />
                        </div>
                        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500 group-hover:bg-orange-100 group-hover:text-orange-700 transition-colors">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="mb-2 text-base font-bold tracking-tight text-navy-950 group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-gray-500 mb-4">
                        {item.desc}
                      </p>
                    </div>

                    <div>
                      {/* Live metrics inside problem card */}
                      <div className="flex items-center justify-between border-t border-slate-50 pt-3 mb-4 text-[10px] text-gray-400">
                        <span className="flex items-center gap-0.5">
                          <Percent size={10} className="text-orange-500" />
                          <span className="font-semibold text-gray-600">{item.match}% Match</span>
                        </span>
                        <span className="font-semibold text-orange-600">{item.speed}</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-600">
                        <span>Explore Solutions</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <DiagnoseDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        initialProblem={selectedProblem}
      />
    </section>
  );
};

export default ProblemSection;
