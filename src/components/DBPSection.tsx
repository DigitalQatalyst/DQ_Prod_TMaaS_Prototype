import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Flame, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Percent, 
  Tags, 
  Users, 
  Star,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import MeshSection from "@/components/site/MeshSection";
import SectionHeading from "@/components/site/SectionHeading";
import DiagnoseDialog from "./DiagnoseDialog";

const collectionTabs = [
  { id: "ai", label: "AI Transformation Starter Kits" },
  { id: "cx", label: "Customer Experience Accelerators" },
  { id: "ops", label: "Operations Modernization Packs" }
];

const collectionsData = {
  ai: [
    {
      id: "ai-strategy",
      title: "AI Strategy & Roadmap",
      badge: "Trending Accelerator",
      icon: Flame,
      desc: "Establish your artificial intelligence roadmap, risk parameters, and high-ROI operational use cases tailored to your business.",
      price: "$15,000",
      duration: "2 Weeks",
      confidence: 98,
      complexity: "⭐⭐⭐⭐⭐ (Very Accessible)",
      audience: "Recommended for: Retail & Finance",
      suggestion: "Combine with Enterprise AI Launch for 3 weeks faster execution.",
      features: [
        "Use case scoping & prioritization",
        "Model safety & risk baselines",
        "Integration readiness audit",
        "Executive activation roadmap"
      ],
      serviceUrl: "/service/3",
      butlerPrompt: "Launch AI capabilities: establish strategy roadmap and use cases"
    },
    {
      id: "ai-launch",
      title: "Enterprise AI Launch Program",
      badge: "Best Seller",
      icon: Sparkles,
      desc: "Deploy pre-scoped AI capabilities, model integrations, and operational intelligence programs safely across your business.",
      price: "$25,000",
      duration: "4 Weeks",
      confidence: 94,
      complexity: "⭐⭐⭐⭐ (Straightforward)",
      audience: "Best for: Mid-Market & Enterprise",
      suggestion: "Pair with AI Strategy for 20% lower overall investment.",
      features: [
        "Model API integration guides",
        "Operational telemetry setup",
        "Staff AI enablement training",
        "Solution specialist audit"
      ],
      serviceUrl: "/service/3",
      butlerPrompt: "Launch AI capabilities: deploy model integrations and specialist programs"
    }
  ],
  cx: [
    {
      id: "cx-transform",
      title: "Customer Experience Transformation",
      badge: "High Growth",
      icon: Zap,
      desc: "Unify digital customer touchpoints, shopping experiences, and self-service portals to increase customer loyalty and conversion.",
      price: "$30,000",
      duration: "6 Weeks",
      confidence: 96,
      complexity: "⭐⭐⭐⭐ (Balanced)",
      audience: "Best for: Retail & Consumer Goods",
      suggestion: "Integrate storefront portals for 15% immediate conversion gains.",
      features: [
        "Frictionless checkout designs",
        "Self-service support portals",
        "Unified customer journey roadmap",
        "Attribution tracking analytics"
      ],
      serviceUrl: "/service/1",
      butlerPrompt: "Scale customer experience: unify touchpoints and portals"
    },
    {
      id: "cx-sales",
      title: "Digital Sales Acceleration",
      badge: "Recently Configured",
      icon: Tags,
      desc: "Supercharge sales pipelines, marketing automation tools, and user acquisition campaigns for fast conversion gains.",
      price: "$18,000",
      duration: "3 Weeks",
      confidence: 90,
      complexity: "⭐⭐⭐⭐⭐ (Very Accessible)",
      audience: "Recommended for: B2B & E-commerce",
      suggestion: "Link with CX Strategy for complete multi-channel campaign attribution.",
      features: [
        "Pipeline capture setups",
        "Marketing automation workflows",
        "Attribution telemetry dashboards",
        "Conversion optimization audits"
      ],
      serviceUrl: "/service/1",
      butlerPrompt: "Scale customer experience: sales pipelines and lead acquisition"
    }
  ],
  ops: [
    {
      id: "ops-core",
      title: "Operations Modernization",
      badge: "Efficiency Leader",
      icon: CheckCircle,
      desc: "Automate core business approvals, digitize manual backoffice paperwork, and integrate siloed applications to reduce friction.",
      price: "$20,000",
      duration: "4 Weeks",
      confidence: 92,
      complexity: "⭐⭐⭐⭐ (Balanced)",
      audience: "Best for: Supply Chain & Healthcare",
      suggestion: "Automate approvals to cut internal cycle times by 30%.",
      features: [
        "Approval workflow automation",
        "Backoffice system integrations",
        "Process efficiency analytics",
        "Staff workflow training"
      ],
      serviceUrl: "/service/2",
      butlerPrompt: "Accelerate digital operations: modernize workflows and automate approvals"
    }
  ]
};

const DBPSection = () => {
  const [activeTab, setActiveTab] = useState<"ai" | "cx" | "ops">("ai");
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleConfigureClick = (prompt: string) => {
    setSelectedPrompt(prompt);
    setIsDialogOpen(true);
  };

  return (
    <MeshSection variant="heroLight" className="py-20 md:py-24 relative overflow-hidden">
      {/* Mesh highlights */}
      <div className="absolute left-1/4 top-10 h-[400px] w-[400px] rounded-full bg-orange-100/30 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionHeading
            kicker="Curated Solutions"
            title={
              <>
                Pre-Scoped Transformation{" "}
                <span className="bg-gradient-to-r from-navy-950 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Offerings
                </span>
              </>
            }
            description="Browse popular transformation packages organized like modern SaaS marketplaces. Scale customer experience, adopt AI, or modernize operations with plain-English outcomes."
          />
        </motion.div>

        {/* E-Commerce Collection Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center rounded-full border border-navy-100 bg-white p-1.5 shadow-sm">
            {collectionTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
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

        {/* Curated Products Grid */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 md:grid-cols-2"
            >
              {collectionsData[activeTab].map((pkg, i) => {
                const IconComponent = pkg.icon;
                return (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="group relative flex flex-col justify-between rounded-3xl border border-navy-100 bg-white p-8 shadow-card transition-all duration-300 hover:border-orange-500 hover:shadow-elevated"
                  >
                    {/* E-Commerce Match Badge */}
                    <div className="absolute -top-3.5 right-6 flex items-center gap-1 rounded-full bg-navy-950 px-3 py-1.5 text-[10px] font-bold text-white shadow-sm">
                      <Percent size={9} className="text-orange-500" />
                      <span>{pkg.confidence}% Match Score</span>
                    </div>

                    <div>
                      <div className="flex items-start justify-between mb-5">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                          <IconComponent size={20} className="animate-pulse" />
                        </div>
                        <span className="rounded-full bg-slate-50 border border-slate-100 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-navy-950">
                          {pkg.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold tracking-tight text-navy-950 group-hover:text-orange-600 transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="mt-2.5 text-xs leading-relaxed text-gray-500">
                        {pkg.desc}
                      </p>

                      {/* Dynamic Merchandising Context */}
                      <div className="mt-4 flex flex-wrap gap-2 text-[10px] text-gray-400">
                        <span className="flex items-center gap-1 bg-slate-50 border border-slate-100 rounded-full px-2.5 py-1">
                          <Users size={10} className="text-orange-500" />
                          <span className="font-semibold text-slate-600">{pkg.audience}</span>
                        </span>
                        <span className="flex items-center gap-1 bg-slate-50 border border-slate-100 rounded-full px-2.5 py-1">
                          <Star size={10} className="text-orange-500 fill-orange-500" />
                          <span className="font-semibold text-slate-600">Complexity: {pkg.complexity}</span>
                        </span>
                      </div>

                      {/* Scoping details */}
                      <div className="mt-5">
                        <ul className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                          {pkg.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-1.5 text-xs text-gray-500">
                              <CheckCircle size={12} className="text-orange-500 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      {/* Pricing and Timeline Metrics */}
                      <div className="mt-6 grid grid-cols-2 gap-4 border-y border-slate-50 py-3.5 mb-6 text-xs">
                        <div className="flex items-center gap-2">
                          <DollarSign size={15} className="text-orange-500" />
                          <div>
                            <div className="text-[9px] font-bold text-gray-400 uppercase">Flat-Rate Investment</div>
                            <div className="font-bold text-navy-950">{pkg.price}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={15} className="text-orange-500" />
                          <div>
                            <div className="text-[9px] font-bold text-gray-400 uppercase">Timeline SLA</div>
                            <div className="font-bold text-navy-950">{pkg.duration}</div>
                          </div>
                        </div>
                      </div>

                      {/* Embedded AI Guidance recommendation */}
                      <div className="mb-6 rounded-2xl bg-orange-500/[0.03] border border-orange-500/10 p-3.5 flex items-start gap-2.5">
                        <Sparkles size={14} className="text-orange-500 shrink-0 mt-0.5 animate-pulse" />
                        <div>
                          <div className="text-[9px] font-bold text-orange-600 uppercase tracking-wider">AI Intelligent Suggestion</div>
                          <p className="text-[11px] leading-relaxed text-gray-500 mt-0.5">{pkg.suggestion}</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button
                          onClick={() => handleConfigureClick(pkg.butlerPrompt)}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-orange-500 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-orange-400 transition"
                        >
                          <span>Get Started</span>
                          <ArrowRight size={13} />
                        </button>
                        <Link
                          to={pkg.serviceUrl}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-navy-50 bg-slate-50/50 px-4 py-2.5 text-xs font-semibold text-navy-950 hover:bg-slate-50 transition"
                        >
                          <span>View Details</span>
                        </Link>
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
        initialProblem={selectedPrompt}
      />
    </MeshSection>
  );
};

export default DBPSection;
