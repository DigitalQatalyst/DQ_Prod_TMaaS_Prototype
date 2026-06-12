import type { ReactNode } from "react";
import { sectionHeading } from "@/lib/brandAccent";

interface ServiceDetailSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
}

export function ServiceDetailSection({
  eyebrow,
  title,
  description,
  className,
  children,
}: ServiceDetailSectionProps) {
  return (
    <section className={className}>
      {eyebrow ? <p className="dq-eyebrow">{eyebrow}</p> : null}
      <h2 className={eyebrow ? `mt-3 ${sectionHeading}` : sectionHeading}>{title}</h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
          {description}
        </p>
      ) : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}
