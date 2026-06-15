import ServiceProductCard from "@/components/features/marketplace/ServiceProductCard";
import { useCatalogData } from "@/contexts/CatalogContext"; // TODO: Task 9 — wire up context;
import { sectionHeading } from "@/lib/brandAccent";
import { getRelatedServices, type ServiceProduct } from "./serviceDetailHelpers";

interface ServiceDetailRelatedServicesProps {
  service: ServiceProduct;
}

export function ServiceDetailRelatedServices({ service }: ServiceDetailRelatedServicesProps) {
  const catalog = useCatalogData();
  const relatedServices = getRelatedServices(
    service,
    catalog as unknown as readonly ServiceProduct[]
  );

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="related-services-heading">
      <h2 id="related-services-heading" className={sectionHeading}>
        Related Services
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-500">
        More services that pair well with this one across your transformation journey.
      </p>
      <ul className="mt-6 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {relatedServices.map((relatedService) => (
          <li key={relatedService.id} className="min-w-0">
            <ServiceProductCard service={relatedService} variant="grid" />
          </li>
        ))}
      </ul>
    </section>
  );
}
