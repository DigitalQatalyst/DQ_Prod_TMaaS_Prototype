import type { PdpContent } from "@/types/catalog";
import type { ServiceProduct } from "./serviceDetailHelpers";
import { ServiceDetailAboutSection } from "./ServiceDetailAboutSection";
import { ServiceDetailKeyOutcomesSection } from "./ServiceDetailKeyOutcomesSection";

interface ServiceDetailOverviewTabProps {
  service: ServiceProduct;
  pdpContent?: PdpContent;
}

export function ServiceDetailOverviewTab({ service, pdpContent }: ServiceDetailOverviewTabProps) {
  return (
    <div className="space-y-10">
      <ServiceDetailAboutSection service={service} pdpContent={pdpContent} />
      <ServiceDetailKeyOutcomesSection service={service} />
    </div>
  );
}
