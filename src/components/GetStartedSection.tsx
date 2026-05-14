import { motion } from "framer-motion";
import { Brain, Layers, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MeshSection from "@/components/site/MeshSection";
import SectionHeading from "@/components/site/SectionHeading";

const paths = [
  {
    icon: Brain,
    title: "Not sure where to start?",
    description: "Use our AI-powered Diagnose tool to identify the right services for your transformation needs.",
    cta: "Start with TMaaS AI",
    href: "#diagnose",
    primary: true,
  },
  {
    icon: Layers,
    title: "Know what you need?",
    description: "Browse our full range of transformation services across Design, Deploy, and Drive.",
    cta: "Explore Marketplaces",
    href: "/explore",
    primary: false,
  },
];

const GetStartedSection = () => {
  const handleDiagnoseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const event = new CustomEvent('openDiagnoseAI');
    window.dispatchEvent(event);
  };

  return (
    <MeshSection variant="ctaOrange" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            kicker="Get Started"
            title={
              <>
                Ready to{" "}
                <span className="bg-gradient-to-r from-navy-950 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                  transform?
                </span>
              </>
            }
            description={
              <>
                Choose your path based on where you are in your transformation
                journey.
              </>
            }
          />
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {paths.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={[
                "group relative overflow-hidden rounded-3xl border p-8 shadow-card backdrop-blur transition-all hover:shadow-elevated",
                path.primary
                  ? "border-orange-500/20 bg-white/70"
                  : "border-navy-100 bg-white/60",
              ].join(" ")}
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${
                path.primary ? "bg-orange-500 text-white shadow-[var(--glow-orange-md)]" : "bg-orange-500/10"
              }`}>
                <path.icon size={24} className={path.primary ? "text-white" : "text-orange-600"} />
              </div>

              <h3 className="mb-3 text-xl font-bold tracking-tight text-navy-950">{path.title}</h3>
              <p className="mb-6 leading-relaxed text-gray-600">{path.description}</p>

              {path.primary ? (
                <button
                  onClick={handleDiagnoseClick}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[var(--glow-orange-md)] transition hover:bg-orange-400"
                >
                  {path.cta}
                  <ArrowRight size={16} />
                </button>
              ) : (
                <Button
                  asChild
                  variant="outline"
                  className="gap-2 rounded-full border-navy-200 bg-white/60 text-navy-950 backdrop-blur hover:bg-white"
                >
                  <a href={path.href}>
                    {path.cta}
                    <ArrowRight size={16} />
                  </a>
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </MeshSection>
  );
};

export default GetStartedSection;
