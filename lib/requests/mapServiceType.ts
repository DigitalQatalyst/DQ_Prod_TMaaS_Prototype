import type { ServiceTypeId } from "@/lib/types/serviceProduct";
import type { ServiceType } from "@/lib/types/requests";

export function mapCatalogServiceType(type: ServiceTypeId | string | undefined): ServiceType {
  switch (type) {
    case "advisory":
      return "assess";
    case "design":
      return "design";
    case "ai_design":
      return "ai_design";
    case "deploy":
      return "deploy";
    case "ai_deploy":
      return "ai_deploy";
    case "manage":
      return "deploy";
    case "bundle":
      return "design";
    default:
      return "design";
  }
}
