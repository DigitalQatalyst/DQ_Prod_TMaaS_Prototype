"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

const NAV = [
  { label: "How it works", href: "#how" },
  { label: "Pods", href: "#pods" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "FAQ", href: "#faq" },
];

const PODS = [
  {
    tag: "Assess",
    title: "Find the constraint, fast.",
    body: "Signal capture, stakeholder mapping, and readiness scoring to expose the real blockers to progress, not the assumed ones.",
    accent: "from-orange-500/20 to-transparent",
  },
  {
    tag: "Design",
    title: "Blueprint what you can ship.",
    body: "Architecture-backed plans across operating model, data fabric, and AI substrate, sized to execution reality.",
    accent: "from-navy-300/30 to-transparent",
  },
  {
    tag: "Deliver",
    title: "Build the system, not the deck.",
    body: "Sprint pods with certified playbooks that turn a transformation thesis into running, instrumented capability.",
    accent: "from-orange-500/15 to-navy-300/20",
  },
  {
    tag: "Operate",
    title: "Make outcomes compound.",
    body: "Run-state telemetry, governance loops, and continuous optimisation so value keeps accruing after go-live.",
    accent: "from-navy-400/25 to-transparent",
  },
];

const LOGOS = [
  "Energy",
  "Banking",
  "Government",
  "Telecom",
  "Aviation",
  "Healthcare",
  "Retail",
  "Logistics",
  "Manufacturing",
  "Utilities",
  "Insurance",
  "Real Estate",
];

// Tiny inline icons (avoid lucide version drift)
const Icon = {
  arrow: (p: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  spark: (p: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>
  ),
  bolt: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  ),
};

function cx(...values: Array<string | false | undefined | null>) {
  return values.filter(Boolean).join(" ");
}

function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
    };
    el.addEventListener("pointermove", move);
    return () => el.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: sx,
          y: sy,
          background:
            "radial-gradient(closest-side, oklch(0.65 0.208 29 / 0.28), oklch(0.65 0.208 29 / 0.06) 55%, transparent 75%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.span
      className="inline-block"
      initial={{ y: "110%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );
}

function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div
        className={cx(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300",
          scrolled
            ? "mt-3 rounded-full border border-navy-100 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl backdrop-saturate-150"
            : "py-4"
        )}
        style={
          scrolled
            ? {
                boxShadow:
                  "0 1px 0 rgba(3,15,53,0.04), 0 8px 24px rgba(3,15,53,0.06)",
              }
            : undefined
        }
      >
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-navy-950 text-white">
            <span className="font-mono text-[11px] font-bold">DQ</span>
          </span>
          <span className="text-navy-950">
            DigitalQatalyst <span className="text-gray-400">TMaaS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="rounded-full px-3 py-1.5 text-sm text-gray-700 transition hover:bg-navy-50 hover:text-navy-950"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/sign-in"
            className="hidden text-sm text-gray-700 hover:text-navy-950 sm:block"
          >
            Sign in
          </Link>
          <Link
            to="/marketplace"
            className="group inline-flex items-center gap-1.5 rounded-full bg-navy-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-navy-800"
          >
            Explore services
            <Icon.arrow className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      {/* mesh background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--mesh-hero-light)" }}
      />
      {/* grid */}
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

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white/70 px-3 py-1 text-xs font-medium text-navy-800 backdrop-blur"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-orange-500/60" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-orange-500" />
          </span>
          TMaaS v1, delivery pods now available
          <Icon.arrow className="h-3 w-3" />
        </motion.div>

        <h1
          className="max-w-5xl text-balance text-navy-950 tracking-tight text-4xl md:text-5xl lg:text-6xl"
          style={{ fontWeight: 700, lineHeight: 1.1 }}
        >
          <span className="block overflow-hidden">
            <Reveal>Transformation</Reveal>
          </span>
          <span className="block overflow-hidden">
            <Reveal delay={0.08}>
              <span className="bg-gradient-to-r from-navy-950 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                as a Service.
              </span>
            </Reveal>
          </span>
          <span className="block overflow-hidden">
            <Reveal delay={0.18}>
              <span className="text-gray-500">
                Ship outcomes. Instrument change. Compound value.
              </span>
            </Reveal>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-gray-600"
        >
          TMaaS is an execution layer for digital transformation, a marketplace
          of certified pods that diagnose, design, deliver, and operate the
          change with measurable outcome SLAs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/marketplace"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white transition"
            style={{ boxShadow: "var(--glow-navy-md)" }}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-orange-500 to-orange-600 transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative">Explore the pods</span>
            <Icon.arrow className="relative h-4 w-4 transition group-hover:translate-x-1" />
          </Link>

          <Link
            to="/butler-demo"
            className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/60 px-6 py-3.5 text-sm font-semibold text-navy-950 backdrop-blur transition hover:border-navy-300 hover:bg-white"
          >
            <Icon.spark className="h-4 w-4 text-orange-500" />
            Talk to Butler
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="relative mt-20"
        >
          <div className="relative mx-auto max-w-5xl rounded-3xl border border-navy-100 bg-white/70 p-2 shadow-2xl backdrop-blur-xl">
            <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-orange-500/30 via-transparent to-navy-300/30 blur-xl" />
            <div className="overflow-hidden rounded-[1.25rem] bg-navy-950">
              <div className="grid gap-0 md:grid-cols-[1.25fr_1fr]">
                <div className="p-6 md:p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-widest text-orange-400">
                        Engagement / Run #TM-01 · Pilot
                      </div>
                      <div className="mt-1 text-2xl font-semibold tracking-tight text-white">
                        Outcome Readiness Snapshot
                      </div>
                    </div>
                    <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70 md:block">
                      4 pods · 16 signals
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                    {[
                      { k: "Clarity", v: 74 },
                      { k: "Data", v: 58 },
                      { k: "Delivery", v: 63 },
                      { k: "Governance", v: 69 },
                      { k: "Talent", v: 55 },
                      { k: "Velocity", v: 47 },
                    ].map((m, i) => (
                      <motion.div
                        key={m.k}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + i * 0.06 }}
                        className="rounded-lg border border-white/10 bg-white/5 p-3"
                      >
                        <div className="text-[11px] uppercase tracking-wider text-white/50">
                          {m.k}
                        </div>
                        <div className="mt-1.5 flex items-end gap-2">
                          <div className="text-2xl font-semibold text-white">
                            {m.v}
                          </div>
                          <div className="mb-1 text-[10px] text-white/40">
                            /100
                          </div>
                        </div>
                        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${m.v}%` }}
                            transition={{
                              delay: 1.1 + i * 0.06,
                              duration: 0.8,
                              ease: "easeOut",
                            }}
                            className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 bg-white/[0.03] p-6 md:border-t-0 md:border-l md:p-8">
                  <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                    What you get
                  </div>
                  <ul className="space-y-3 text-sm text-white/80">
                    {[
                      "A weekly execution rhythm with accountable owners.",
                      "Blueprints + backlog, sized for delivery.",
                      "A measurable outcome scorecard and telemetry.",
                      "A marketplace path for specialist pods.",
                    ].map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5">
                          <span className="h-2 w-2 text-orange-500">●</span>
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                      Next step
                    </div>
                    <div className="mt-2 text-sm text-white/80">
                      Start with an assessment pod to baseline readiness and
                      prioritise your first 90 days.
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <Link
                        to="/marketplace"
                        className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-400"
                        style={{ boxShadow: "var(--glow-orange-md)" }}
                      >
                        View pods
                        <Icon.arrow className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        to="/explore"
                        className="text-xs font-semibold text-white/70 hover:text-white"
                      >
                        Read the approach
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LogoStrip() {
  const row = useMemo(() => [...LOGOS, ...LOGOS], []);
  return (
    <section className="border-y border-navy-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-gray-500">
          Built for complex, regulated environments
        </div>
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track gap-12">
            {row.map((l, i) => (
              <div
                key={`${l}-${i}`}
                className="shrink-0 select-none tracking-tight text-gray-400 transition hover:text-navy-950"
                style={{ fontSize: "1.25rem", fontWeight: 600 }}
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pods() {
  return (
    <section id="pods" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-orange-600">
              Pods & delivery
            </div>
            <h2
              className="mt-3 tracking-tight text-navy-950"
              style={{ fontSize: "1.875rem", fontWeight: 600, lineHeight: 1.25 }}
            >
              Four pods.
              <br />
              <span className="text-gray-400">
                One operating rhythm for transformation.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-gray-600 md:justify-self-end">
            TMaaS turns transformation into a repeatable operating system, with
            weekly cadence, evidence-based decisions, and delivery artifacts you
            can ship.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {PODS.map((p) => (
            <div
              key={p.tag}
              className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-8 transition hover:border-navy-200 hover:shadow-xl"
            >
              <div
                aria-hidden
                className={cx(
                  "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  "bg-gradient-to-br",
                  p.accent
                )}
              />
              <div className="relative">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-orange-600">
                  <Icon.bolt className="h-3.5 w-3.5 text-orange-500" />
                  {p.tag}
                </div>
                <h3
                  className="mt-4 tracking-tight text-navy-950"
                  style={{ fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.35 }}
                >
                  {p.title}
                </h3>
                <p className="mt-3 text-gray-600">{p.body}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy-950">
                  Learn more <Icon.arrow className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section
      id="outcomes"
      className="relative isolate overflow-hidden bg-navy-950 py-24 text-white md:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.9]"
        style={{ background: "var(--mesh-hero-dark)" }}
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-[1fr_1fr] md:items-center">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-orange-400">
            Outcome SLAs
          </div>
          <h2
            className="mt-3 tracking-tight"
            style={{ fontSize: "2.25rem", fontWeight: 650, lineHeight: 1.15 }}
          >
            Move from activity to{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              measurable outcomes
            </span>
            .
          </h2>
          <p className="mt-6 max-w-xl text-white/70">
            Every pod is backed by a scorecard, readiness, delivery, adoption,
            and value metrics, so leadership can steer the programme with
            evidence.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/dashboard/overview"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
              style={{ boxShadow: "var(--glow-orange-md)" }}
            >
              View a sample dashboard
              <Icon.arrow className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10"
            >
              Read the playbook
              <Icon.spark className="h-4 w-4 text-orange-300" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-8">
          {[
            {
              k: "Time-to-value",
              v: "Weeks, not quarters",
              d: "Short cycles with weekly review, clear owners, and unblock paths.",
            },
            {
              k: "Adoption",
              v: "Built into delivery",
              d: "Operating model + comms + enablement delivered as artifacts, not advice.",
            },
            {
              k: "Governance",
              v: "Evidence-led",
              d: "Scorecards + telemetry steer investment to what’s working.",
            },
          ].map((row) => (
            <div
              key={row.k}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-300">
                {row.k}
              </div>
              <div className="mt-2 text-lg font-semibold tracking-tight">
                {row.v}
              </div>
              <div className="mt-2 text-sm text-white/70">{row.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="how" className="relative isolate overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--mesh-cta-orange)" }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-navy-100 bg-white/70 p-10 backdrop-blur md:p-14">
          <div className="max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-orange-600">
              Start in 3 steps
            </div>
            <h2
              className="mt-3 tracking-tight text-navy-950"
              style={{ fontSize: "2.25rem", fontWeight: 650, lineHeight: 1.15 }}
            >
              Baseline. Blueprint. Build.
            </h2>
            <p className="mt-5 text-gray-600">
              Begin with a short assessment pod, align on a 90‑day blueprint,
              then deploy delivery pods with outcome SLAs and telemetry.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/marketplace"
                className="group inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-900"
                style={{ boxShadow: "var(--glow-navy-md)" }}
              >
                Choose a pod
                <Icon.arrow className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/60 px-6 py-3.5 text-sm font-semibold text-navy-950 backdrop-blur transition hover:bg-white"
              >
                FAQ
                <Icon.spark className="h-4 w-4 text-orange-500" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {[
              { n: "01", t: "Assessment pod", d: "Readiness baseline + constraints map." },
              { n: "02", t: "Blueprint pod", d: "Backlog + architecture + owners." },
              { n: "03", t: "Delivery pod(s)", d: "Ship increments with telemetry." },
            ].map((c) => (
              <div
                key={c.n}
                className="rounded-2xl border border-navy-100 bg-white p-6"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-600">
                  Step {c.n}
                </div>
                <div className="mt-2 text-lg font-semibold tracking-tight text-navy-950">
                  {c.t}
                </div>
                <div className="mt-2 text-sm text-gray-600">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Is TMaaS a consultancy engagement?",
      a: "It’s delivery-first: pods ship artifacts and running capability, with a weekly cadence and measured outcomes.",
    },
    {
      q: "How do pods interface with our teams?",
      a: "Pods embed with your owners; they bring playbooks, delivery muscle, and a scorecard so your organisation learns the operating rhythm.",
    },
    {
      q: "Can we start small?",
      a: "Yes, begin with an assessment pod, then scale into delivery pods once the blueprint is agreed.",
    },
  ];

  return (
    <section id="faq" className="border-t border-navy-100 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-orange-600">
            FAQ
          </div>
          <h2
            className="mt-3 tracking-tight text-navy-950"
            style={{ fontSize: "1.875rem", fontWeight: 650, lineHeight: 1.2 }}
          >
            Practical questions, answered.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.q}
              className="rounded-2xl border border-navy-100 bg-white p-7"
            >
              <div className="text-sm font-semibold text-navy-950">{it.q}</div>
              <div className="mt-3 text-sm text-gray-600">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-navy-950 text-white">
                <span className="font-mono text-[11px] font-bold">DQ</span>
              </span>
              <span className="text-navy-950">
                DigitalQatalyst <span className="text-gray-400">TMaaS</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-gray-600">
              Execution pods for digital transformation, built around measurable
              outcomes and an evidence-led operating rhythm.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-600">
                Navigate
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-navy-950">
                <li>
                  <Link to="/explore" className="hover:text-orange-600">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link to="/marketplace" className="hover:text-orange-600">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link to="/butler-demo" className="hover:text-orange-600">
                    Butler demo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-600">
                Account
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-navy-950">
                <li>
                  <Link to="/sign-in" className="hover:text-orange-600">
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/overview" className="hover:text-orange-600">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-navy-100 pt-6 text-xs text-gray-500 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} DigitalQatalyst</div>
          <div className="flex gap-4">
            <Link to="/legal/terms" className="hover:text-navy-950">
              Terms
            </Link>
            <Link to="/legal/privacy" className="hover:text-navy-950">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function TMaaSHomepage() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <Hero />
        <LogoStrip />
        <Pods />
        <Outcomes />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

