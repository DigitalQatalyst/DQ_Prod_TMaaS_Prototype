import { Compass } from "lucide-react";
import { sectionHeading } from "@/lib/brandAccent";
import {
  getAudienceCardAccent,
  type ServiceProduct,
} from "./serviceDetailHelpers";
import { getWhyItMattersContent } from "./whyItMattersContent";

const beforeCardClass =
  "rounded-xl border border-gray-200 bg-gray-50/80 p-5 shadow-[var(--shadow-card)]";

const afterCardClass =
  "rounded-xl border border-orange-100 bg-white p-5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:border-dq-orange/30 hover:shadow-[var(--shadow-elevated)]";

interface ServiceDetailWhyItMattersTabProps {
  service: ServiceProduct;
}

function StateSection({
  eyebrow,
  title,
  items,
  variant,
}: {
  eyebrow: string;
  title: string;
  items: { title: string; description: string }[];
  variant: "before" | "after";
}) {
  const cardClass = variant === "before" ? beforeCardClass : afterCardClass;

  return (
    <section aria-labelledby={`${variant}-state-heading`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-dq-orange">
        {eyebrow}
      </p>
      <h3
        id={`${variant}-state-heading`}
        className="mt-2 text-lg font-semibold tracking-tight text-dq-navy"
      >
        {title}
      </h3>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.title} className={cardClass}>
            <h4 className="text-sm font-semibold text-dq-navy">{item.title}</h4>
            <p className="mt-2 text-sm leading-[1.65] text-[#667085]">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ServiceDetailWhyItMattersTab({
  service,
}: ServiceDetailWhyItMattersTabProps) {
  const content = getWhyItMattersContent(service);
  const accent = getAudienceCardAccent(service.collection);

  return (
    <div className="space-y-12">
      <section aria-labelledby="why-service-matters-heading">
        <h2 id="why-service-matters-heading" className={sectionHeading}>
          Why This Service Matters
        </h2>
        <div className="mt-6 space-y-5">
          <p className="text-base font-medium leading-[1.7] text-dq-navy">
            {content.hook}
          </p>
          <p className="text-base leading-[1.7] text-[#667085]">
            {content.problemParagraph}
          </p>
        </div>
      </section>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
        <StateSection
          eyebrow={content.before.eyebrow}
          title={content.before.title}
          items={content.before.items}
          variant="before"
        />
        <StateSection
          eyebrow={content.after.eyebrow}
          title={content.after.title}
          items={content.after.items}
          variant="after"
        />
      </div>

      <section aria-labelledby="strategic-fit-heading">
        <div className={`rounded-2xl p-7 md:p-8 ${accent.cardBg}`}>
          <div
            className={`mb-5 flex h-11 w-11 items-center justify-center rounded-full ${accent.iconWell}`}
          >
            <Compass
              size={20}
              className={accent.icon}
              strokeWidth={1.75}
              aria-hidden
            />
          </div>
          <h3
            id="strategic-fit-heading"
            className="text-lg font-semibold text-dq-navy"
          >
            {content.strategicFit.title}
          </h3>
          <div className="mt-4 space-y-4">
            {content.strategicFit.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-[1.7] text-[#667085]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
