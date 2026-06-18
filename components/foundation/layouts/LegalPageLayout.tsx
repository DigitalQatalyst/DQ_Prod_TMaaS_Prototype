"use client";

import { useEffect, useRef, useState } from "react";

export interface LegalSection {
  id: string;
  heading: string;
  body: string[];
}

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

function renderParagraph(para: string, key: number) {
  if (!para.includes("info@digitalqatalyst.com")) {
    return (
      <p key={key} className="text-[15px] leading-relaxed text-gray-600">
        {para}
      </p>
    );
  }
  const parts = para.split("info@digitalqatalyst.com");
  return (
    <p key={key} className="text-[15px] leading-relaxed text-gray-600">
      {parts.map((part, j) =>
        j < parts.length - 1 ? (
          <span key={j}>
            {part}
            <a href="mailto:info@digitalqatalyst.com" className="text-dq-orange hover:underline">
              info@digitalqatalyst.com
            </a>
          </span>
        ) : (
          <span key={j}>{part}</span>
        )
      )}
    </p>
  );
}

export function LegalPageLayout({ eyebrow, title, subtitle, lastUpdated, sections }: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const intersectingRef = useRef<Map<string, boolean>>(new Map());

  useEffect(() => {
    const map = intersectingRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          map.set(entry.target.id, entry.isIntersecting);
        });
        const active = sections.find((s) => map.get(s.id));
        if (active) setActiveId(active.id);
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="flex flex-col">
      <section
        className="px-5 pb-14 pt-20 md:px-8 md:pb-16 md:pt-24 lg:px-10"
        style={{ background: "var(--mesh-hero-light)" }}
      >
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
            {eyebrow}
          </p>
          <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-dq-navy md:text-5xl">
            {title}
          </h1>
          <p className="max-w-[520px] text-lg leading-relaxed text-gray-600">{subtitle}</p>
          <p className="mt-5 text-[13px] text-gray-400">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-8 md:py-20 lg:px-10">
        <div className="mx-auto max-w-[1200px] lg:grid lg:grid-cols-[220px_1fr] lg:gap-16 xl:gap-20">
          <nav className="hidden lg:block">
            <div className="sticky top-8">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
                Contents
              </p>
              <ol className="space-y-0.5">
                {sections.map((s) => {
                  const isActive = activeId === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`block border-l-2 py-1.5 pl-3 text-[12px] leading-snug transition-all duration-150 ${
                          isActive
                            ? "border-dq-orange font-semibold text-dq-navy"
                            : "border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-700"
                        }`}
                      >
                        {s.heading}
                      </a>
                    </li>
                  );
                })}
              </ol>
            </div>
          </nav>

          <div className="min-w-0">
            <nav className="mb-10 rounded-xl border border-gray-100 bg-gray-50 p-5 lg:hidden">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
                Contents
              </p>
              <ol className="space-y-1.5">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-[13px] text-gray-600 transition-colors hover:text-dq-orange"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="space-y-12">
              {sections.map((s) => (
                <div key={s.id} id={s.id} className="scroll-mt-8">
                  <h2 className="mb-4 text-xl font-semibold tracking-tight text-dq-navy">
                    {s.heading}
                  </h2>
                  <div className="space-y-3">
                    {s.body.map((para, i) => renderParagraph(para, i))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
