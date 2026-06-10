import type { ServiceProduct } from "./serviceDetailHelpers";
import { ServiceDetailAboutSection } from "./ServiceDetailAboutSection";
import { ServiceDetailKeyOutcomesSection } from "./ServiceDetailKeyOutcomesSection";

interface ServiceDetailOverviewTabProps {
  service: ServiceProduct;
}

export function ServiceDetailOverviewTab({ service }: ServiceDetailOverviewTabProps) {
  return (
    <div className="space-y-12">
      <ServiceDetailAboutSection service={service} />
      <ServiceDetailKeyOutcomesSection service={service} />
    </div>
  );
}
