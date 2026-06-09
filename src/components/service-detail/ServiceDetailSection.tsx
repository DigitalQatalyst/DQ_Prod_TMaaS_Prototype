import type { ReactNode } from "react";

interface ServiceDetailSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function ServiceDetailSection({
  eyebrow,
  title,
  description,
  children,
}: ServiceDetailSectionProps) {
  return (
    <section>
      <p className="dq-eyebrow">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-dq-navy md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
          {description}
        </p>
      ) : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}
