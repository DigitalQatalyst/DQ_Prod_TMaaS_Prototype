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
  { id: "strategy", label: "Strategy" },
  { id: "ai", label: "AI" },
  { id: "marketing", label: "Marketing" },
  { id: "data", label: "Data" },
  { id: "experience", label: "Experience" },
  { id: "engineering", label: "Engineering" },
  { id: "security", label: "Security" },
  { id: "operations", label: "Operations" },
] as const;

export const marketplaceIndustries = [
  { id: "banking", label: "Banking" },
  { id: "government", label: "Government" },
  { id: "healthcare", label: "Healthcare" },
  { id: "retail", label: "Retail" },
  { id: "education", label: "Education" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "logistics", label: "Logistics" },
] as const;

export const marketplaceServiceTypes = [
  { id: "advisory", label: "Advisory" },
  { id: "design", label: "Design" },
  { id: "build", label: "Build" },
  { id: "deploy", label: "Deploy" },
  { id: "manage", label: "Manage" },
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
