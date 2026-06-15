import { sectionHeading, serviceDetailSplitGrid, serviceDetailSplitLead } from "@/lib/brandAccent";
import type { PdpContent } from "@/lib/types/catalog";
import { getAboutSectionContent, type ServiceProduct } from "./serviceDetailHelpers";

interface ServiceDetailAboutSectionProps {
  service: ServiceProduct;
  pdpContent?: PdpContent | undefined;
}

export function ServiceDetailAboutSection({ service, pdpContent }: ServiceDetailAboutSectionProps) {
  const { paragraphs, audienceDescription } = getAboutSectionContent(service, pdpContent);

  return (
    <section aria-labelledby="about-service-heading">
      <div className={serviceDetailSplitGrid}>
        <div className={serviceDetailSplitLead}>
          <h2 id="about-service-heading" className={sectionHeading}>
            About This Service
          </h2>
          <div className="mt-5 space-y-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-[1.7] text-[#667085]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <aside className="min-w-0 md:pt-7 lg:pt-8" aria-labelledby="service-audience-heading">
          <h3 id="service-audience-heading" className={sectionHeading}>
            Who it&apos;s for
          </h3>
          <p className="mt-4 border-l-2 border-dq-navy/15 pl-4 text-base leading-[1.7] text-[#667085]">
            {audienceDescription}
          </p>
        </aside>
      </div>
    </section>
  );
}
