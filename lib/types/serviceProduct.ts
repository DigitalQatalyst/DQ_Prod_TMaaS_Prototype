import type { MarketplaceCollectionId } from "@/data/marketplaceNavigation";

export type ServiceTypeId =
  | "advisory"
  | "design"
  | "ai_design"
  | "deploy"
  | "ai_deploy"
  | "manage"
  | "bundle";

export type DeliveryComplexity = "low" | "medium" | "high";

export interface ServiceProduct {
  id: number;
  slug: string;
  collection: MarketplaceCollectionId;
  serviceType: ServiceTypeId;
  standardName: string;
  remixName: Record<string, string>;
  description: string;
  positioning: string;
  price: string;
  duration: string;
  popularityRank: number;
  deliveryComplexity: DeliveryComplexity;
  badge: string;
  audience: string;
  industryRelevance: string;
  features: string[];
  tags: string[];
  outcomes: string[];
  department: string;
  businessImpact: string;
  implementationModel: string;
  timelineMilestones: string[];
  relatedServices: number[];
}
