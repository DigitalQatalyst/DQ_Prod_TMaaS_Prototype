import { motion } from "framer-motion";
import { Search, PenTool, Rocket, TrendingUp, Brain, BookOpen, HelpCircle, Layers, Cloud, Server, Cog, Briefcase, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MeshSection from "@/components/site/MeshSection";
import SectionHeading from "@/components/site/SectionHeading";

const marketplaces = [
  {
    phase: "Discern",
    icon: Search,
    description: "Identify context, assess capabilities, and translate problems into transformation signals.",
    items: [
      {
        icon: Brain,
        name: "TMaaS AI",
        description: "AI-powered problem resolution and service recommendations",
        href: "#diagnose",
        badge: "AI-Powered",
        comingSoon: false,
      },
      {
        icon: BookOpen,
        name: "TMaaS Knowledge Centre",
        description: "Best practices, guides, and transformation resources",
        href: "/knowledge",
        badge: "Resources",
        comingSoon: false,
      },
      {
        icon: HelpCircle,
        name: "TMaaS FAQs",
        description: "Common questions and answers about transformation services",
        href: "/faqs",
        badge: "Support",
        comingSoon: false,
      },
    ],
  },
  {
    phase: "Design",
    icon: PenTool,
    description: "Convert insights into structured strategies, architectures, and actionable blueprints.",
    items: [
      {
        icon: Layers,
        name: "Design Services",
        description: "Strategic architecture and transformation blueprints",
        href: "/marketplace?tab=design",
        badge: "Architecture",
        comingSoon: false,
      },
    ],
  },
  {
    phase: "Deploy",
    icon: Rocket,
    description: "Execute initiatives using predefined blueprints with built-in tracking and governance.",
    items: [
      {
        icon: Cloud,
        name: "SaaS Deploy Services",
        description: "Cloud-based implementation services",
        href: "/marketplace?tab=deploy-saas",
        badge: "Cloud",
        comingSoon: false,
      },
      {
        icon: Server,
        name: "On-Prem Deploy Services",
        description: "On-premise deployment and implementation",
        href: "/marketplace?tab=deploy-onprem",
        badge: "On-Premise",
        comingSoon: true,
      },
    ],
  },
  {
    phase: "Drive",
    icon: TrendingUp,
    description: "Enable adoption, optimize outcomes, and support continuous improvement.",
    items: [
      {
        icon: Cog,
        name: "Managed Platform Services",
        description: "Ongoing platform management and optimization",
        href: "/drive/managed-services",
        badge: "Managed",
        comingSoon: true,
      },
      {
        icon: Briefcase,
        name: "BPaaS Services",
        description: "Business Process as a Service solutions",
        href: "/drive/bpaas",
        badge: "BPaaS",
        comingSoon: true,
      },
      {
        icon: Brain,
        name: "AI Agents",
        description: "Intelligent automation and AI-powered agents",
        href: "/drive/ai-agents",
        badge: "AI",
        comingSoon: true,
      },
    ],
  },
];

const Explore = () => {
  const handleDiagnoseClick = () => {
    // Trigger the chat button
    const event = new CustomEvent('openDiagnoseAI');
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <MeshSection variant="heroLight" grid className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SectionHeading
              kicker="Explore"
              align="left"
              className="mx-0 max-w-3xl"
              title={
                <>
                  Explore TMaaS{" "}
                  <span className="bg-gradient-to-r from-navy-950 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                    Marketplaces
                  </span>
                </>
              }
              description={
                <>
                  Access our full range of transformation services, resources,
                  and AI-powered tools organized across the 4D Framework. From
                  problem diagnosis to continuous optimization.
                </>
              }
            />
          </motion.div>
        </div>
      </MeshSection>

      {/* Marketplaces Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-16">
            {marketplaces.map((phase, phaseIndex) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: phaseIndex * 0.1 }}
              >
                {/* Phase Header */}
                <div className="mb-8 flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10">
                    <phase.icon size={24} className="text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold tracking-tight text-navy-950 md:text-3xl">
                      {phaseIndex + 1}. {phase.phase}
                    </h2>
                    <p className="mt-2 text-base leading-relaxed text-gray-600">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Marketplace Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {phase.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: phaseIndex * 0.1 + itemIndex * 0.05 }}
                      className={[
                        "group relative overflow-hidden rounded-3xl border border-navy-100 bg-white/70 p-6 shadow-card backdrop-blur",
                        item.comingSoon
                          ? "opacity-75"
                          : "transition-all hover:border-navy-200 hover:shadow-elevated",
                      ].join(" ")}
                    >
                      {item.comingSoon ? (
                        <>
                          {/* Badge */}
                          <div className="mb-4 flex items-center justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10">
                              <item.icon size={20} className="text-orange-600" />
                            </div>
                            <span className="rounded-full border border-navy-100 bg-white/60 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur">
                              {item.badge}
                            </span>
                          </div>

                          {/* Content */}
                          <h3 className="mb-2 text-lg font-semibold tracking-tight text-navy-950">
                            {item.name}
                          </h3>
                          <p className="mb-4 text-sm leading-relaxed text-gray-600">
                            {item.description}
                          </p>

                          {/* Coming Soon Badge */}
                          <div className="inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white/60 px-4 py-2 text-xs font-semibold text-gray-700 backdrop-blur">
                            Coming Soon
                          </div>
                        </>
                      ) : (
                        <a
                          href={item.href}
                          onClick={(e) => {
                            if (item.name === "TMaaS AI") {
                              e.preventDefault();
                              handleDiagnoseClick();
                            }
                          }}
                          className="block"
                        >
                          {/* Badge */}
                          <div className="mb-4 flex items-center justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10">
                              <item.icon size={20} className="text-orange-600" />
                            </div>
                            <span className="rounded-full border border-navy-100 bg-white/60 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur">
                              {item.badge}
                            </span>
                          </div>

                          {/* Content */}
                          <h3 className="mb-2 text-lg font-semibold tracking-tight text-navy-950 transition-colors group-hover:text-orange-600">
                            {item.name}
                          </h3>
                          <p className="mb-4 text-sm leading-relaxed text-gray-600">
                            {item.description}
                          </p>

                          {/* Arrow */}
                          <div className="flex items-center gap-2 text-sm font-semibold text-orange-600">
                            <span>Explore</span>
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                          </div>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 -z-10 rounded-3xl transition-all group-hover:bg-orange-500/5"></div>
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <MeshSection variant="ctaOrange" className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy-950 md:text-3xl">
            Not sure where to start?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Use our AI-powered Diagnose tool to identify the right services for
            your transformation needs.
          </p>
          <button
            onClick={handleDiagnoseClick}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-[var(--glow-orange-md)] transition hover:bg-orange-400"
          >
            <Brain size={20} />
            Start with TMaaS AI
          </button>
        </div>
      </MeshSection>

      <Footer />
    </div>
  );
};

export default Explore;
