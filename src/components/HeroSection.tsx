import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import DiagnoseDialog from "./DiagnoseDialog";

function HeroSpotlight() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        aria-hidden
        className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[24px]"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.65 0.208 29 / 0.26), oklch(0.65 0.208 29 / 0.06) 55%, transparent 75%)",
        }}
      />
    </div>
  );
}

const HeroSection = () => {
  const [problem, setProblem] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = () => {
    if (problem.trim()) {
      setIsDialogOpen(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--mesh-hero-light)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.86 0.010 264 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.86 0.010 264 / 0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 30%, black 40%, transparent 80%)",
        }}
      />
      <HeroSpotlight />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-700 backdrop-blur"
        >
          <Sparkles size={12} className="text-orange-500 animate-pulse" />
          <span>Living AI-guided Transformation Marketplace</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl font-heading text-balance text-4xl font-bold leading-[1.1] tracking-tight text-navy-950 md:text-6xl"
        >
          Launch your next growth phase
          <br />
          <span className="bg-gradient-to-r from-navy-950 via-orange-600 to-orange-500 bg-clip-text text-transparent">
            in weeks, not years.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg"
        >
          Browse, explore, and activate pre-scoped transformation roadmaps.
          <br className="hidden md:block" />
          Powered by active marketplace intelligence and delivered by certified specialists.
        </motion.p>

        {/* Butler prompt (input-first, no faux-chat UI) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-10 max-w-3xl"
        >
          <div className="mt-6 rounded-[1.75rem] border border-navy-100 bg-white/70 p-3 shadow-2xl backdrop-blur-xl transition-all focus-within:shadow-[var(--glow-navy-md)]">
            <div className="flex items-end gap-2 relative">
              <div className="absolute left-4 top-4 text-orange-500">
                <Sparkles size={20} className="animate-pulse" />
              </div>
              <div className="flex-1">
                <label htmlFor="butler-prompt" className="sr-only">
                  Ask Butler anything
                </label>
                <textarea
                  id="butler-prompt"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="What business goal can we help you solve today? (e.g., 'Optimize digital sales' or 'Launch AI capabilities')..."
                  rows={2}
                  className="block w-full resize-none bg-transparent pl-12 pr-3 py-3 text-base leading-relaxed text-navy-950 placeholder:text-gray-500 focus:outline-none md:text-lg"
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!problem.trim()}
                className="h-12 w-12 shrink-0 rounded-2xl bg-orange-500 p-0 text-white shadow-[var(--glow-orange-md)] hover:bg-orange-400 disabled:opacity-50"
                aria-label="Send to Butler"
              >
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Breadcrumbs - Butler's 4 transformation goals with instant-trigger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex flex-col items-center justify-center gap-3"
        >
          <span className="text-xs font-semibold text-gray-500 tracking-wider uppercase">Not sure where to start? Try one of our outcome goals:</span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { text: "Launch AI Capabilities", action: "Launch AI Capabilities" },
              { text: "Build Transformation Roadmap", action: "Build Transformation Roadmap" },
              { text: "Optimize Customer Experience", action: "I want to improve customer experience" },
              { text: "Deploy with Certified Specialists", action: "Deploy with Certified Specialists" }
            ].map((item) => (
              <button
                key={item.text}
                onClick={() => {
                  setProblem(item.action);
                  setIsDialogOpen(true);
                }}
                className="rounded-full border border-navy-100 bg-white/60 px-4 py-2.5 text-xs font-semibold text-gray-700 backdrop-blur transition hover:border-orange-500 hover:bg-orange-500/5 hover:text-orange-600 shadow-sm"
              >
                {item.text}
              </button>
            ))}
          </div>
        </motion.div>


      </div>

      <DiagnoseDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        initialProblem={problem}
      />
    </section>
  );
};

export default HeroSection;
