import type { MarketplaceCollectionId } from "@/data/marketplaceNavigation";

export type ShopByGoalCard = {
  id: string;
  title: string;
  body: string;
  collection: MarketplaceCollectionId;
};

export const SHOP_BY_GOAL_EYEBROW = "Start with your goal";

export const SHOP_BY_GOAL_HEADLINE = "What are you trying to do?";

export const SHOP_BY_GOAL_SUBCOPY =
  "Find the right starting point by outcome, not by browsing a catalogue of 100+ services cold.";

export const SHOP_BY_GOAL_CARDS: ShopByGoalCard[] = [
  {
    id: "grow-revenue",
    title: "Grow revenue",
    body: "Customer portals, digital experiences, and channels built to convert.",
    collection: "experience",
  },
  {
    id: "launch-ai",
    title: "Launch AI",
    body: "AI readiness, pilots, and governed rollout, scoped to a specific use case.",
    collection: "ai",
  },
  {
    id: "modernise-operations",
    title: "Modernise operations",
    body: "Workflow automation and platform modernisation for existing teams.",
    collection: "operations",
  },
  {
    id: "strengthen-compliance",
    title: "Strengthen compliance",
    body: "Cloud, security, and DevOps services built for regulated delivery.",
    collection: "security",
  },
];
