export const marketplaceGoals = [
  { id: "grow-business", label: "Grow My Business" },
  { id: "improve-operations", label: "Improve Operations" },
  { id: "launch-ai", label: "Launch AI" },
  { id: "modernise-technology", label: "Modernise Technology" },
  { id: "improve-cx", label: "Improve Customer Experience" },
  { id: "automate-workflows", label: "Automate Workflows" },
  { id: "strengthen-governance", label: "Strengthen Governance" },
] as const;

export const marketplaceCapabilities = [
  { id: "experience", label: "Customer Experience & Engagement" },
  { id: "operations", label: "Business Operations & Productivity" },
  { id: "security", label: "DevOps and Security" },
  { id: "ai", label: "Data, AI & Analytics" },
  { id: "bundles", label: "Bundles" },
] as const;

export const marketplaceCoreCapabilities = marketplaceCapabilities.filter(
  (capability) => capability.id !== "bundles"
);

export const marketplaceEconomySectors = [
  { id: "farming-4-0", label: "Farming 4.0" },
  { id: "plant-4-0", label: "Plant 4.0" },
  { id: "infrastructure-4-0", label: "Infrastructure 4.0" },
  { id: "government-4-0", label: "Government 4.0" },
  { id: "hospitality-4-0", label: "Hospitality 4.0" },
  { id: "retail-4-0", label: "Retail 4.0" },
  { id: "service-4-0", label: "Service 4.0" },
  { id: "logistics-4-0", label: "Logistics 4.0" },
  { id: "wellness-4-0", label: "Wellness 4.0" },
] as const;

export const marketplaceServiceTypes = [
  { id: "advisory", label: "Advisory" },
  { id: "design", label: "Design" },
  { id: "ai_design", label: "AI Design" },
  { id: "deploy", label: "Deploy" },
  { id: "ai_deploy", label: "AI Deploy" },
  { id: "manage", label: "Managed" },
] as const;

export type MarketplaceCollectionId =
  (typeof marketplaceCapabilities)[number]["id"];

export const marketplaceCollectionIds = [
  "all",
  ...marketplaceCapabilities.map((c) => c.id),
] as const;

export const marketplaceCategoryLabels: Record<string, string> = {
  all: "All categories",
  ...Object.fromEntries(marketplaceCapabilities.map(c => [c.id, c.label]))
};

export const marketplaceServiceTypeLabels: Record<string, string> = {
  ...Object.fromEntries(marketplaceServiceTypes.map(t => [t.id, t.label]))
};
