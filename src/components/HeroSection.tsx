import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Sparkles } from "lucide-react";
import DiagnoseDialog from "./DiagnoseDialog";

const MAX_PROMPT_LENGTH = 4000;

const suggestions = [
  { label: "Launch AI capabilities", prompt: "Launch AI Capabilities" },
  { label: "Improve customer experience", prompt: "I want to improve customer experience" },
  { label: "Modernize operations", prompt: "Modernize our digital operations" },
  { label: "Build transformation roadmap", prompt: "Build Transformation Roadmap" },
  { label: "Accelerate digital delivery", prompt: "Accelerate digital delivery across the organization" },
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
    <section
      id="hero"
      className="relative isolate overflow-hidden border-b border-navy-100/80 bg-gradient-to-b from-sky-50/90 via-white to-white pb-16 pt-28 md:pb-20 md:pt-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.75 0.12 250 / 0.15), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-800">
          <Sparkles size={15} className="text-orange-500" strokeWidth={2} />
          Butler mode
        </p>

        <h1 className="mt-4 font-heading text-balance text-3xl font-bold leading-tight tracking-tight text-navy-950 sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
          Find the right{" "}
          <span className="text-orange-600">transformation package</span>
          <br className="hidden sm:block" />
          <span className="sm:whitespace-nowrap"> for your business</span>
        </h1>

        {/* Agent prompt — AWS-style card */}
        <div className="mt-10 text-left">
          <div className="overflow-hidden rounded-xl border border-navy-200/80 bg-white shadow-sm transition-shadow focus-within:border-orange-300 focus-within:shadow-md focus-within:ring-2 focus-within:ring-orange-500/15">
            <label htmlFor="butler-prompt" className="sr-only">
              Describe your business need
            </label>
            <textarea
              id="butler-prompt"
              value={problem}
              onChange={(e) =>
                setProblem(e.target.value.slice(0, MAX_PROMPT_LENGTH))
              }
              onKeyDown={handleKeyDown}
              placeholder="Let's guide you to the right solution. What's your business need?"
              rows={4}
              className="block w-full min-h-[7.5rem] resize-none border-0 bg-transparent px-4 pt-4 pb-2 text-base leading-relaxed text-navy-950 placeholder:text-gray-400 focus:outline-none focus:ring-0 md:text-[17px]"
            />

            <div className="flex items-center justify-between gap-3 border-t border-navy-100/80 px-3 py-2.5">
              <Link
                to="/marketplace"
                className="text-xs font-medium text-gray-500 transition-colors hover:text-orange-600"
              >
                Browse marketplace
              </Link>
              <div className="flex items-center gap-2.5">
                <span
                  className="text-xs tabular-nums text-gray-400"
                  aria-live="polite"
                >
                  {problem.length} / {MAX_PROMPT_LENGTH}
                </span>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!problem.trim()}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                  aria-label="Send to Butler"
                >
                  <ArrowUp size={18} strokeWidth={2.25} />
                </button>
              </div>
            </div>
          </div>

          <p className="mt-3 text-center text-[11px] leading-relaxed text-gray-400">
            By using Butler, you agree that your prompt may be processed to recommend
            TMaaS services. Do not submit confidential data.
          </p>
        </div>

        {/* Quick prompts */}
        <div className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {suggestions.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => openWithPrompt(item.prompt)}
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-white px-3.5 py-2 text-xs font-medium text-navy-800 shadow-sm transition hover:border-orange-200 hover:bg-orange-50/50 hover:text-orange-700"
              >
                <Sparkles
                  size={12}
                  className="shrink-0 text-orange-500"
                  strokeWidth={2}
                />
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
    </section>
  );
};

export default HeroSection;
