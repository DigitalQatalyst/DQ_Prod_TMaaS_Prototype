import type { MarketplaceCatalogFilters } from "@/lib/marketplaceCatalogFilters";
import type { ServiceProduct } from "@/types/serviceProduct";

export type { ServiceProduct };

export type CatalogListParams = MarketplaceCatalogFilters & {
  page: number;
  pageSize: number;
};

export type CatalogPageResult = {
  services: ServiceProduct[];
  totalCount: number;
};

export type DeployModule = {
  name: string;
  features: string[];
};

export type PdpDeliverable = {
  title: string;
  description: string;
};

export type PdpFaq = {
  question: string;
  answer: string;
};

export type PdpWhyItMattersItem = {
  title: string;
  description: string;
};

export type PdpWhyItMatters = {
  hook: string;
  problemParagraph: string;
  before: {
    eyebrow: string;
    title: string;
    items: PdpWhyItMattersItem[];
  };
  after: {
    eyebrow: string;
    title: string;
    items: PdpWhyItMattersItem[];
  };
};

export type PdpDeliveryStep = {
  step: number;
  title: string;
  duration?: string;
  body: string;
  whatHappens: string;
  dqEffort: "low" | "medium" | "high";
  yourEffort: "low" | "medium" | "high";
  active?: boolean;
};

export type PdpDeliveryProcess = {
  totalDuration: string;
  steps: PdpDeliveryStep[];
};

export type PdpContent = {
  heroSummary?: string;
  overviewParagraphs?: string[];
  audienceDescription?: string;
  deliverablesSummary?: string[];
  deliverables?: PdpDeliverable[];
  deliveryProcess?: PdpDeliveryProcess;
  packageHighlights?: string[];
  whyItMatters?: PdpWhyItMatters;
  faqIntro?: string;
  faqs?: PdpFaq[];
};

export type MarketplaceListing = ServiceProduct & {
  listingId?: number;
};

export type ServiceDetailPayload = {
  service: ServiceProduct;
  deployModules: DeployModule[];
  pdpContent?: PdpContent;
};
