import { Users } from "lucide-react";
import {
  sectionHeading,
  serviceDetailSideCard,
  serviceDetailSplitGrid,
  serviceDetailSplitLead,
} from "@/lib/brandAccent";
import {
  getAudienceCardAccent,
  getOverviewContent,
  type ServiceProduct,
} from "./serviceDetailHelpers";

interface ServiceDetailAboutSectionProps {
  service: ServiceProduct;
}

export function ServiceDetailAboutSection({ service }: ServiceDetailAboutSectionProps) {
  const { paragraphs, audienceDescription } = getOverviewContent(service);
  const accent = getAudienceCardAccent(service.collection);

  return (
    <section aria-labelledby="about-service-heading">
      <div className={serviceDetailSplitGrid}>
        <div className={serviceDetailSplitLead}>
          <h2 id="about-service-heading" className={sectionHeading}>
            About This Service
          </h2>
          <div className="mt-6 space-y-5">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-[1.7] text-[#667085]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <aside
          className={`${serviceDetailSideCard} ${accent.cardBg}`}
          aria-labelledby="service-audience-heading"
        >
          <h3 id="service-audience-heading" className={sectionHeading}>
            Who it&apos;s for
          </h3>
          <div
            className={`mt-5 flex h-11 w-11 items-center justify-center rounded-full ${accent.iconWell}`}
          >
            <Users
              size={20}
              className={accent.icon}
              strokeWidth={1.75}
              aria-hidden
            />
          </div>
          <p className="mt-4 text-base leading-[1.7] text-[#667085]">
            {audienceDescription}
          </p>
        </aside>
      </div>
    </section>
  );
}
