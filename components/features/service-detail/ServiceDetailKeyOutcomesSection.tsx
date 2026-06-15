import { sectionHeading } from "@/lib/brandAccent";
import { getKeyOutcomes, type ServiceProduct } from "./serviceDetailHelpers";

interface ServiceDetailKeyOutcomesSectionProps {
  service: ServiceProduct;
}

function outcomeItemClass(index: number): string {
  const classes = ["flex min-w-0 flex-col px-6 py-8 sm:px-8 lg:px-8 lg:py-0"];

  if (index === 0) {
    classes.push("pt-0");
  }

  // Stacked mobile dividers
  if (index > 0) {
    classes.push("border-t border-gray-200 sm:border-t-0");
  }

  // Two-column tablet dividers
  if (index % 2 === 1) {
    classes.push("sm:border-l sm:border-gray-200");
  }
  if (index >= 2) {
    classes.push("sm:border-t sm:border-gray-200 lg:border-t-0");
  }

  // Four-column desktop dividers
  if (index > 0) {
    classes.push("lg:border-l lg:border-gray-200");
  }

  return classes.join(" ");
}

export function ServiceDetailKeyOutcomesSection({ service }: ServiceDetailKeyOutcomesSectionProps) {
  const keyOutcomes = getKeyOutcomes(service);

  return (
    <section aria-labelledby="key-outcomes-heading">
      <h2 id="key-outcomes-heading" className={sectionHeading}>
        Key Outcomes
      </h2>

      <ol className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {keyOutcomes.map((outcome, index) => (
          <li key={`${outcome.title}-${index}`} className={outcomeItemClass(index)}>
            <span
              aria-hidden
              className="text-4xl font-bold leading-none tracking-tight text-dq-orange md:text-[2.5rem]"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-base font-medium leading-snug text-dq-navy">
              {outcome.title}
            </h3>
            <p className="mt-3 text-sm leading-[1.7] text-[#667085] md:text-[15px]">
              {outcome.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
