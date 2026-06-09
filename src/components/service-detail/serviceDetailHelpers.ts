import {
  marketplaceCategoryLabels,
  marketplaceGoals,
  marketplaceServiceTypeLabels,
} from "@/data/marketplaceNavigation";
import type { initialServices } from "@/data/services";

export type ServiceProduct = (typeof initialServices)[number];

export const marketplaceCategoryShortLabels: Record<string, string> = {
  experience: "Digital Experience",
  operations: "Business Operations",
  security: "DevSecOps",
  ai: "Data & AI",
  bundles: "Bundles",
};

export const collectionAccent: Record<
  string,
  { badge: string; icon: string; iconBg: string }
> = {
  experience: {
    badge: "text-violet-700",
    icon: "text-violet-600",
    iconBg: "bg-violet-50",
  },
  operations: {
    badge: "text-blue-700",
    icon: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  security: {
    badge: "text-emerald-700",
    icon: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  ai: {
    badge: "text-indigo-700",
    icon: "text-indigo-600",
    iconBg: "bg-indigo-50",
  },
  bundles: {
    badge: "text-dq-navy",
    icon: "text-dq-orange",
    iconBg: "bg-orange-50",
  },
};

const goalLabelById = Object.fromEntries(
  marketplaceGoals.map((goal) => [goal.id, goal.label])
);

const KEY_FEATURES_BY_TYPE: Record<string, readonly string[]> = {
  advisory: [
    "Strategic opportunity assessment",
    "Stakeholder alignment workshops",
    "Transformation roadmap definition",
    "AI enablement opportunity mapping",
    "Executive-ready recommendations",
    "Governance and prioritisation framework",
  ],
  design: [
    "User-centric experience design",
    "Responsive across all devices",
    "Brand-aligned visual systems",
    "Accessibility and performance standards",
    "Implementation-ready specifications",
    "Governance-aligned delivery artifacts",
  ],
  ai_design: [
    "AI use-case design and validation",
    "Human-in-the-loop workflow design",
    "Model integration architecture",
    "Responsible AI guardrails",
    "Prototype and proof-of-value assets",
    "Deployment-ready specifications",
  ],
  deploy: [
    "Production-ready implementation",
    "Integrated platform deployment",
    "Quality assurance and testing",
    "Go-live readiness validation",
    "Knowledge transfer and handover",
    "Post-launch stabilisation support",
  ],
  ai_deploy: [
    "AI capability deployment",
    "Model integration and orchestration",
    "Production monitoring setup",
    "Safety and compliance controls",
    "Operational handover package",
    "Performance validation reporting",
  ],
  manage: [
    "SLA-backed platform operations",
    "Continuous performance optimisation",
    "Incident and escalation management",
    "Lifecycle governance reporting",
    "Capability evolution planning",
    "Stakeholder service reviews",
  ],
  bundle: [
    "End-to-end transformation coverage",
    "Phased delivery across service types",
    "Unified governance and reporting",
    "Bundled commercial efficiency",
    "Coordinated specialist teams",
    "Single engagement point of contact",
  ],
};

const DEFAULT_BENEFITS = [
  "Strengthen brand credibility",
  "Improve customer engagement",
  "Accelerate time-to-market",
  "Establish governance foundations",
] as const;

export function getDisplayTitle(standardName: string): string {
  return standardName.replace(" (High-Impact)", "");
}

export function getCategoryShortLabel(collection: string): string {
  return (
    marketplaceCategoryShortLabels[collection] ??
    marketplaceCategoryLabels[collection] ??
    collection
  );
}

export function getCollectionAccent(collection: string) {
  return collectionAccent[collection] ?? collectionAccent.experience;
}

export function getBenefitStatements(outcomes: readonly string[]): string[] {
  const mapped = outcomes
    .map((id) => goalLabelById[id])
    .filter((label): label is string => Boolean(label));

  return [...new Set([...mapped, ...DEFAULT_BENEFITS])].slice(0, 4);
}

export function getKeyFeatures(service: ServiceProduct): string[] {
  const tailored = KEY_FEATURES_BY_TYPE[service.serviceType];
  if (tailored) return [...tailored];
  return [...service.features];
}

export interface ServiceMetadataRow {
  label: string;
  value: string;
}

export function getServiceMetadata(service: ServiceProduct): ServiceMetadataRow[] {
  const isBundle = service.serviceType === "bundle";
  const serviceTypeLabel =
    marketplaceServiceTypeLabels[service.serviceType] ?? service.serviceType;

  return [
    {
      label: "Service Type",
      value: isBundle ? "Multi-service bundle" : "Single-service",
    },
    {
      label: "Engagement Model",
      value:
        service.serviceType === "advisory"
          ? "Discovery"
          : service.serviceType === "manage"
            ? "Managed Subscription"
            : "Fixed Price",
    },
    {
      label: "Delivery Mode",
      value: "Remote",
    },
    {
      label: "Payment Terms",
      value:
        service.price === "Free"
          ? "No charge"
          : service.serviceType === "manage"
            ? "Monthly subscription"
            : "Upon milestone completion",
    },
    {
      label: "Support",
      value: service.serviceType === "manage" ? "Premium" : "Standard",
    },
    {
      label: "Service Stage",
      value: serviceTypeLabel,
    },
  ];
}
