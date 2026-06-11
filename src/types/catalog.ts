import type { DeployModule } from "@/data/deployModules";
import type { ServiceProduct } from "@/types/serviceProduct";

export type { ServiceProduct };

export type MarketplaceListing = ServiceProduct & {
  listingId?: number;
};

export type ServiceDetailPayload = {
  service: ServiceProduct;
  deployModules: DeployModule[];
};
