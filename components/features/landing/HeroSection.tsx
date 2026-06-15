"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUp, Bot } from "lucide-react";
import DiagnoseDialog from "@/components/features/dashboard/DiagnoseDialog";
import MeshSection from "@/components/features/landing/MeshSection";

const MAX_PROMPT_LENGTH = 4000;

const suggestions = [
  { label: "Launch AI capabilities", prompt: "Launch AI Capabilities" },
  { label: "Improve customer experience", prompt: "I want to improve customer experience" },
  { label: "Modernize operations", prompt: "Modernize our digital operations" },
  { label: "Build transformation roadmap", prompt: "Build Transformation Roadmap" },
  {
    label: "Accelerate digital delivery",
    prompt: "Accelerate digital delivery across the organization",
  },
  { label: "Deploy with specialists", prompt: "Deploy with Certified Specialists" },
];

const HeroSection = () => {
  const [problem, setProblem] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openWithPrompt = (prompt: string) => {
    setProblem(prompt);
    setIsDialogOpen(true);
  };

  const handleSubmit = () => {
    const trimmed = problem.trim();
    if (trimmed) setIsDialogOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <MeshSection
      id="hero"
      variant="heroLight"
      grid
      className="px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-36 lg:px-10"
    >
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <p className="animate-fade-in-up font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
          AI Mode
        </p>

        <h1 className="animate-fade-in-up animation-delay-200 mt-4 text-balance text-[2.75rem] font-semibold leading-[1.0] tracking-[-0.03em] text-dq-navy sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block">Find the right</span>
          <span className="block text-dq-orange">transformation services</span>
          <span className="block sm:whitespace-nowrap">for your business</span>
        </h1>

        <p className="animate-fade-in-up animation-delay-300 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Describe your business challenge and Butler will guide you to the right TMaaS services.
        </p>

        <div className="animate-fade-in-up animation-delay-300 mt-10 text-left">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 focus-within:border-dq-orange focus-within:shadow-xl">
            <label htmlFor="butler-prompt" className="sr-only">
              Describe your business need
            </label>
            <textarea
              id="butler-prompt"
              value={problem}
              onChange={(e) => setProblem(e.target.value.slice(0, MAX_PROMPT_LENGTH))}
              onKeyDown={handleKeyDown}
              placeholder="Describe your business challenge and Butler will guide you to the right services."
              rows={4}
              className="block w-full min-h-[7.5rem] resize-none border-0 bg-transparent px-4 pb-2 pt-4 text-base leading-relaxed text-dq-navy placeholder:text-gray-400 focus:outline-none focus:ring-0 md:text-[17px]"
            />

            <div className="flex items-center justify-between gap-3 border-t border-gray-100 px-3 py-2.5">
              <Link
                href="/marketplace"
                className="text-xs font-medium text-gray-500 transition-colors hover:text-dq-orange"
              >
                Browse marketplace
              </Link>
              <div className="flex items-center gap-2.5">
                <span className="text-xs tabular-nums text-gray-400" aria-live="polite">
                  {problem.length} / {MAX_PROMPT_LENGTH}
                </span>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!problem.trim()}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dq-orange text-white transition hover:bg-[#E04020] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                  aria-label="Send to Butler"
                >
                  <ArrowUp size={18} strokeWidth={2.25} />
                </button>
              </div>
            </div>
          </div>

          <p className="mt-3 text-center text-[11px] leading-relaxed text-gray-400">
            By using Butler, you agree that your prompt may be processed to recommend TMaaS
            services. Do not submit confidential data.
          </p>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {suggestions.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => openWithPrompt(item.prompt)}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/60 px-3.5 py-2 text-xs font-medium text-dq-navy backdrop-blur-sm transition-all duration-300 hover:border-dq-orange hover:bg-white hover:shadow-md"
              >
                <Bot size={12} className="shrink-0 text-dq-orange" strokeWidth={2} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <DiagnoseDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        initialProblem={problem}
      />
    </MeshSection>
  );
};

export default HeroSection;
