import {
  marketplaceCategoryLabels,
  marketplaceGoals,
  marketplaceServiceTypeLabels,
} from "@/data/marketplaceNavigation";
import type { initialServices } from "@/data/services";
import { initialServices as servicesCatalog } from "@/data/services";

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

export const collectionAudienceCard: Record<
  string,
  { cardBg: string; iconWell: string; icon: string }
> = {
  experience: {
    cardBg: "bg-[#F3F4F9]",
    iconWell: "bg-white",
    icon: "text-violet-600",
  },
  operations: {
    cardBg: "bg-blue-50",
    iconWell: "bg-white",
    icon: "text-blue-600",
  },
  security: {
    cardBg: "bg-emerald-50",
    iconWell: "bg-white",
    icon: "text-emerald-600",
  },
  ai: {
    cardBg: "bg-indigo-50",
    iconWell: "bg-white",
    icon: "text-indigo-600",
  },
  bundles: {
    cardBg: "bg-orange-50",
    iconWell: "bg-white",
    icon: "text-dq-orange",
  },
};

export interface OverviewContent {
  paragraphs: string[];
  audienceDescription: string;
}

const AUDIENCE_BY_COLLECTION_TYPE: Record<
  string,
  Partial<Record<string, string>>
> = {
  experience: {
    advisory:
      "Organisations looking to strengthen their digital presence, improve user experience, and drive business outcomes.",
    design:
      "Teams ready to shape digital experiences with structured design governance, brand alignment, and clear delivery artefacts.",
    ai_design:
      "Organisations exploring AI-enabled digital experiences who need validated use cases, responsible guardrails, and deployment-ready specifications.",
    deploy:
      "Organisations with approved designs ready to move into structured build, test, and go-live for digital experiences.",
    ai_deploy:
      "Teams with validated AI experience designs seeking production deployment, monitoring, and operational handover.",
    manage:
      "Organisations requiring ongoing digital experience operations with predictable service levels and continuous optimisation.",
  },
  operations: {
    advisory:
      "Organisations looking to improve operational efficiency, streamline business processes, and drive measurable productivity gains.",
    design:
      "Teams ready to design operational workflows, automation pathways, and implementation-ready process specifications.",
    deploy:
      "Organisations with approved operational designs ready for structured implementation and go-live.",
    manage:
      "Organisations seeking SLA-backed management of business operations platforms and continuous process optimisation.",
  },
  security: {
    advisory:
      "Organisations looking to assess their technology governance, strengthen delivery posture, and reduce operational risk.",
    design:
      "Teams ready to define secure architecture, DevSecOps workflows, and governance-aligned technical specifications.",
    deploy:
      "Organisations with approved security designs ready for structured platform implementation and validation.",
    manage:
      "Organisations requiring ongoing governance, security operations, and lifecycle management of critical platforms.",
  },
  ai: {
    advisory:
      "Organisations looking to assess data maturity, identify AI opportunities, and establish a prioritised adoption pathway.",
    design:
      "Teams ready to validate AI use cases, define responsible workflows, and produce deployment-ready specifications.",
    deploy:
      "Organisations with validated AI designs ready for production deployment and operational handover.",
    manage:
      "Organisations requiring ongoing AI platform operations, monitoring, and lifecycle governance.",
  },
  bundles: {
    bundle:
      "Organisations pursuing end-to-end transformation with coordinated specialist teams and a single engagement point.",
  },
};

const EXPERIENCE_ADVISORY_INTROS: Record<string, string> = {
  "online web presence":
    "This assessment helps you understand how your organisation presents itself online, how users experience your digital touchpoints, and where improvements can drive measurable impact.",
  "online social presence":
    "This assessment helps you understand how your organisation engages on social channels, how audiences experience your publishing strategy, and where improvements can drive measurable impact.",
  "mobile app experience":
    "This assessment helps you understand how users engage with your mobile experiences, where journeys create friction, and where improvements can drive measurable impact.",
  "phygital customer presence":
    "This assessment helps you understand how customers experience your physical and digital touchpoints, where journeys disconnect, and where improvements can drive measurable impact.",
  "digital content & journey":
    "This assessment helps you understand how content and journeys perform across your digital ecosystem, where personalisation gaps exist, and where improvements can drive measurable impact.",
};

const AUDIENCE_FRAMING: Record<string, (solution: string) => string> = {
  advisory: () =>
    "Organisations looking to strengthen their digital presence, improve user experience, and drive business outcomes.",
  design: (solution) =>
    `Teams ready to shape ${solution} experiences with structured design governance, brand alignment, and clear delivery artefacts.`,
  ai_design: (solution) =>
    `Organisations exploring AI-enabled ${solution} capabilities who need validated use cases, responsible guardrails, and deployment-ready specifications.`,
  deploy: (solution) =>
    `Organisations with approved ${solution} designs ready for structured build, test, and go-live under SLA-backed delivery governance.`,
  ai_deploy: (solution) =>
    `Teams with validated ${solution} AI designs seeking production deployment, monitoring setup, and operational handover.`,
  manage: (solution) =>
    `Organisations requiring ongoing ${solution} operations with predictable service levels, continuous optimisation, and lifecycle governance.`,
  bundle: (solution) =>
    `Organisations pursuing end-to-end ${solution} transformation with coordinated specialist teams and a single engagement point.`,
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

export function formatPackagePrice(price: string): string {
  return price.replace(/^Starting From\s+/i, "From ");
}

export function getServiceSolutionName(standardName: string): string {
  const withoutHighImpact = standardName.replace(" (High-Impact)", "");
  const stagedMatch = withoutHighImpact.match(
    /^(.+?)\s+-\s+(?:Assess|Design|AI Design|Implementation|AI Implementation|Managed Service|Transformation Bundle)$/
  );
  if (stagedMatch) return stagedMatch[1].trim();
  return withoutHighImpact.trim();
}

const GENERIC_POSITIONING = "(High-Impact) Positioning Strategy";

function isGenericPositioning(positioning: string): boolean {
  return !positioning || positioning === GENERIC_POSITIONING;
}

function buildOverviewIntro(service: ServiceProduct): string {
  const solutionKey = getServiceSolutionName(service.standardName).toLowerCase();
  const themes = extractDescriptionThemes(service.description);

  if (service.collection === "experience" && service.serviceType === "advisory") {
    if (EXPERIENCE_ADVISORY_INTROS[solutionKey]) {
      return EXPERIENCE_ADVISORY_INTROS[solutionKey];
    }
  }

  const stageLabel =
    {
      advisory: "assessment",
      design: "design engagement",
      ai_design: "AI design engagement",
      deploy: "implementation",
      ai_deploy: "AI implementation",
      manage: "managed service",
      bundle: "transformation bundle",
    }[service.serviceType] ?? "engagement";

  if (themes.length >= 2) {
    return `This ${stageLabel} helps you understand ${themes[0]}, ${themes[1]}, and where improvements can drive measurable impact.`;
  }

  if (themes.length === 1) {
    return `This ${stageLabel} helps you understand ${themes[0]} and where improvements can drive measurable impact.`;
  }

  return service.description;
}

const OVERVIEW_CLOSING_BY_TYPE: Record<string, string> = {
  advisory:
    "We combine strategic evaluation with industry best practices and AI-enabled insights to deliver clear, prioritised recommendations.",
  design:
    "We translate your requirements into user-centred experiences and implementation-ready specifications aligned to governance standards.",
  ai_design:
    "We define responsible AI use cases, human-in-the-loop workflows, and deployment-ready specifications that balance innovation with governance.",
  deploy:
    "We manage production-ready build, quality assurance, and go-live readiness under SLA-backed governance for predictable outcomes.",
  ai_deploy:
    "We integrate AI capabilities into production with monitoring, safety controls, and operational handover built in from day one.",
  manage:
    "We provide SLA-backed operations, continuous optimisation, and lifecycle governance so your platforms evolve with business needs.",
  bundle:
    "We coordinate phased delivery across specialist teams with unified governance, reporting, and a single engagement point of contact.",
};

function buildOverviewClosing(service: ServiceProduct): string {
  if (!isGenericPositioning(service.positioning)) {
    return service.positioning;
  }

  return (
    OVERVIEW_CLOSING_BY_TYPE[service.serviceType] ??
    "We combine expert-led delivery with governance oversight to help you achieve measurable transformation outcomes."
  );
}

function buildOverviewAudience(service: ServiceProduct): string {
  const solution = getServiceSolutionName(service.standardName);
  const collectionAudience =
    AUDIENCE_BY_COLLECTION_TYPE[service.collection]?.[service.serviceType];

  if (collectionAudience) {
    return collectionAudience;
  }

  if (service.serviceType === "bundle" && solution.endsWith(" set")) {
    const categoryLabel = getCategoryShortLabel(service.collection);
    return `Organisations seeking a customisable ${solution.toLowerCase()} spanning multiple ${categoryLabel} capabilities with unified governance.`;
  }

  return (
    AUDIENCE_FRAMING[service.serviceType]?.(solution) ??
    `Organisations looking to advance ${solution} with structured TMaaS delivery and measurable outcomes.`
  );
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

export function getAudienceCardAccent(collection: string) {
  return collectionAudienceCard[collection] ?? collectionAudienceCard.experience;
}

export function getOverviewContent(service: ServiceProduct): OverviewContent {
  return {
    paragraphs: [buildOverviewIntro(service), buildOverviewClosing(service)],
    audienceDescription: buildOverviewAudience(service),
  };
}

export interface KeyOutcome {
  title: string;
  description: string;
}

const OUTCOME_TITLE_VERBS: Record<string, readonly string[]> = {
  advisory: ["Evaluate", "Improve", "Prioritise", "Establish"],
  design: ["Define", "Align", "Specify", "Accelerate"],
  ai_design: ["Validate", "Design", "Prototype", "Prepare"],
  deploy: ["Deliver", "Implement", "Validate", "Transfer"],
  ai_deploy: ["Deploy", "Monitor", "Secure", "Hand over"],
  manage: ["Maintain", "Optimise", "Govern", "Evolve"],
  bundle: ["Coordinate", "Integrate", "Bundle", "Accelerate"],
};

const DESCRIPTION_PREFIX_PATTERNS = [
  /^A strategic discovery engagement focused on evaluating\s+/i,
  /^Discovery engagement focused on evaluating\s+/i,
  /^Strategic assessment of\s+/i,
  /^Assessment of\s+/i,
  /^Design and specification of\s+/i,
  /^Design of\s+/i,
  /^Deployment and implementation of\s+/i,
  /^Deployment and configuration of\s+/i,
  /^Development and deployment of\s+/i,
  /^Deployment of\s+/i,
  /^Ongoing management, optimisation, support, monitoring, and continuous improvement of\s+/i,
  /^Managed operations and optimisation of\s+/i,
  /^Ongoing support, optimisation, monitoring, and operational management of\s+/i,
  /^Ongoing support and optimisation of\s+/i,
];

type OutcomeDescriptionBuilder = (solution: string, theme: string) => string;

const OUTCOME_DESCRIPTION_BUILDERS: Record<string, readonly OutcomeDescriptionBuilder[]> =
  {
    advisory: [
      (solution, theme) =>
        `Surface gaps and prioritise improvements across ${theme} through your ${solution} assessment.`,
      (solution, theme) =>
        `Identify friction points and opportunity areas in ${theme} with expert-led evaluation.`,
      (solution, theme) =>
        `Translate findings on ${theme} into executive-ready recommendations.`,
      (solution, theme) =>
        `Build a stronger foundation for ${theme} to inform strategy and investment.`,
    ],
    design: [
      (solution, theme) =>
        `Shape ${theme} into user-centred experiences within your ${solution} scope.`,
      (solution, theme) =>
        `Align ${theme} to brand and governance standards for ${solution}.`,
      (solution, theme) =>
        `Deliver implementation-ready specifications for ${theme} your teams can execute.`,
      (solution, theme) =>
        `Accelerate delivery decisions on ${theme} with clear scope and priorities.`,
    ],
    ai_design: [
      (solution, theme) =>
        `Validate AI use cases for ${theme} within your ${solution} context.`,
      (solution, theme) =>
        `Design responsible workflows and guardrails for ${theme} before build begins.`,
      (solution, theme) =>
        `Create proof-of-value assets for ${theme} that de-risk AI investment.`,
      (solution, theme) =>
        `Prepare deployment-ready specifications for ${theme} aligned to governance.`,
    ],
    deploy: [
      (solution, theme) =>
        `Build and deploy production-ready ${theme} as part of your ${solution} rollout.`,
      (solution, theme) =>
        `Complete quality assurance and validation for ${theme} ahead of go-live.`,
      (solution, theme) =>
        `Integrate ${theme} with platform, security, and governance requirements.`,
      (solution, theme) =>
        `Transfer knowledge on ${theme} to support long-term operation.`,
    ],
    ai_deploy: [
      (solution, theme) =>
        `Deploy ${theme} into production with monitoring and orchestration built in.`,
      (solution, theme) =>
        `Implement safety, auditability, and compliance controls for ${theme}.`,
      (solution, theme) =>
        `Validate performance and reliability of ${theme} at scale.`,
      (solution, theme) =>
        `Hand over operational runbooks for ${theme} to your internal teams.`,
    ],
    manage: [
      (solution, theme) =>
        `Maintain SLA-backed operations for ${theme} across your ${solution} environment.`,
      (solution, theme) =>
        `Continuously optimise ${theme} through proactive monitoring and improvement.`,
      (solution, theme) =>
        `Govern lifecycle changes to ${theme} with structured reporting and reviews.`,
      (solution, theme) =>
        `Evolve ${theme} in line with business priorities and service expectations.`,
    ],
    bundle: [
      (solution, theme) =>
        `Coordinate ${theme} across advisory, design, and delivery within ${solution}.`,
      (solution, theme) =>
        `Integrate specialist teams and reporting for ${theme} under one engagement.`,
      (solution, theme) =>
        `Achieve bundled efficiency on ${theme} without sacrificing governance oversight.`,
      (solution, theme) =>
        `Accelerate end-to-end progress on ${theme} with a single point of contact.`,
    ],
  };

const THEME_TAIL_PATTERNS = [
  /\s+aligned to business goals$/i,
  /\s+transformation opportunities$/i,
  /\s+transformation priorities$/i,
  /\s+engagement opportunities$/i,
  /\s+enablement opportunities$/i,
  /\s+enablement potential$/i,
];

const MAX_THEME_WORDS = 3;

function normalizeTheme(theme: string): string {
  let normalized = theme.trim().replace(/\.$/, "");

  for (const pattern of THEME_TAIL_PATTERNS) {
    normalized = normalized.replace(pattern, "");
  }

  normalized = normalized
    .replace(/^high-impact\s+/i, "")
    .replace(/^enterprise\s+/i, "")
    .replace(/^AI-powered\s+/i, "")
    .replace(/^AI-enabled\s+/i, "")
    .trim();

  const words = normalized.split(/\s+/).filter(Boolean);
  if (words.length > MAX_THEME_WORDS) {
    normalized = words.slice(0, MAX_THEME_WORDS).join(" ");
  }

  return normalized;
}

function capitalizeTheme(theme: string): string {
  if (!theme) return theme;
  return theme.charAt(0).toUpperCase() + theme.slice(1);
}

function extractDescriptionThemes(description: string): string[] {
  let body = description.replace(/\.\s*$/, "").trim();

  for (const pattern of DESCRIPTION_PREFIX_PATTERNS) {
    body = body.replace(pattern, "");
  }

  body = body.replace(/^your organisation['']s\s+/i, "");

  return body
    .split(/,\s*(?:and\s+)?|\s+and\s+/i)
    .map((part) => normalizeTheme(part.trim()))
    .filter((part) => part.length > 2);
}

function getDistinctiveFeatureThemes(service: ServiceProduct): string[] {
  const genericPatterns = [
    /^Dedicated TMaaS/i,
    /^SLA-backed/i,
    /^Phased delivery/i,
    /^Architecture alignment for/i,
  ];

  const fromService = service.features.filter(
    (feature) => !genericPatterns.some((pattern) => pattern.test(feature))
  );
  const fromType = getKeyFeatures(service);

  return [...new Set([...fromService, ...fromType])];
}

function buildOutcomeTitle(theme: string, serviceType: string, index: number): string {
  const shortTheme = normalizeTheme(theme);
  const verbs =
    OUTCOME_TITLE_VERBS[serviceType] ?? OUTCOME_TITLE_VERBS.advisory;
  const verb = verbs[index % verbs.length];
  return `${verb} ${capitalizeTheme(shortTheme)}`;
}

function buildOutcomeDescription(
  service: ServiceProduct,
  theme: string,
  index: number
): string {
  const solution = getServiceSolutionName(service.standardName);
  const shortTheme = normalizeTheme(theme);
  const builders =
    OUTCOME_DESCRIPTION_BUILDERS[service.serviceType] ??
    OUTCOME_DESCRIPTION_BUILDERS.advisory;
  const builder = builders[index % builders.length];

  return builder(solution, shortTheme);
}

export function getKeyOutcomes(service: ServiceProduct): KeyOutcome[] {
  const themes = [
    ...extractDescriptionThemes(service.description),
    ...getDistinctiveFeatureThemes(service),
  ]
    .map(normalizeTheme)
    .filter((part) => part.length > 2);

  const uniqueThemes = [...new Set(themes.map((theme) => theme.toLowerCase()))].map(
    (lowerTheme) => themes.find((theme) => theme.toLowerCase() === lowerTheme)!
  );

  const paddedThemes = [...uniqueThemes];
  if (paddedThemes.length < 4) {
    paddedThemes.push(
      normalizeTheme(getServiceSolutionName(service.standardName))
    );
  }
  if (paddedThemes.length < 4) {
    paddedThemes.push("service outcomes");
  }

  return paddedThemes.slice(0, 4).map((theme, index) => ({
    title: buildOutcomeTitle(theme, service.serviceType, index),
    description: buildOutcomeDescription(service, theme, index),
  }));
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

const HERO_HIGHLIGHTS_BY_TYPE: Record<string, readonly string[]> = {
  advisory: [
    "Expert-led assessment",
    "Actionable insights",
    "Aligned to governance",
  ],
  design: [
    "User-centric design",
    "Brand-aligned systems",
    "Governance-aligned delivery",
  ],
  ai_design: [
    "AI use-case validation",
    "Responsible AI guardrails",
    "Deployment-ready specs",
  ],
  deploy: [
    "Production-ready build",
    "Quality assurance",
    "Knowledge transfer",
  ],
  ai_deploy: [
    "AI capability deployment",
    "Safety controls",
    "Operational handover",
  ],
  manage: [
    "SLA-backed operations",
    "Continuous optimisation",
    "Lifecycle governance",
  ],
  bundle: [
    "End-to-end coverage",
    "Unified governance",
    "Coordinated specialists",
  ],
};

export function getHeroHighlights(service: ServiceProduct): string[] {
  const tailored = HERO_HIGHLIGHTS_BY_TYPE[service.serviceType];
  if (tailored) return [...tailored];
  return getKeyFeatures(service).slice(0, 3);
}

export interface DeliverablesSummaryContent {
  paragraphs: string[];
}

export interface DeliverablesAtAGlance {
  duration: string;
  scopeLabel: string;
}

export interface DeliverableBreakdownItem {
  title: string;
  description: string;
}

const DELIVERABLES_SUMMARY_BY_TYPE: Record<string, [string, string]> = {
  advisory: [
    "This engagement delivers a focused set of outputs designed to help you understand your current digital presence, identify opportunities, and define a clear path forward.",
    "Each deliverable provides practical insight into opportunities, direction, and next steps, giving your organisation a clear foundation for decision-making.",
  ],
  design: [
    "This engagement produces implementation-ready design artefacts that translate strategy into user-centred experiences, operating models, and delivery specifications.",
    "Each output is structured for governance review and handover to build teams, reducing ambiguity before implementation begins.",
  ],
  ai_design: [
    "This engagement delivers validated AI use cases, responsible workflow designs, and specifications ready for controlled deployment.",
    "Each artefact balances innovation with governance, so teams can move from concept to build with clear guardrails.",
  ],
  deploy: [
    "This engagement delivers production-ready assets, validated builds, and structured handover materials aligned to your approved design scope.",
    "Each output supports go-live readiness, operational continuity, and measurable acceptance against agreed milestones.",
  ],
  ai_deploy: [
    "This engagement delivers integrated AI capabilities in production with monitoring, safety controls, and operational documentation.",
    "Each output is validated for performance and governance before handover to your operations teams.",
  ],
  manage: [
    "This managed service provides recurring outputs that keep your platforms running, optimised, and aligned to agreed service levels.",
    "Each report and artefact supports continuous improvement, risk visibility, and lifecycle governance.",
  ],
  bundle: [
    "This bundle coordinates deliverables across multiple service stages, from discovery through design, delivery, and operations.",
    "Each included service contributes scoped outputs under unified TMaaS governance and reporting.",
  ],
};

const MAX_DELIVERABLES = 4;

const DELIVERABLES_BY_TYPE: Record<string, readonly string[]> = {
  advisory: [
    "Current-State Assessment",
    "Opportunity Analysis",
    "Transformation Vision",
    "Priority Recommendations",
  ],
  design: [
    "Discovery & Strategy",
    "Experience Design",
    "Technical Specifications",
    "Success Framework",
  ],
  ai_design: [
    "AI Opportunity Validation",
    "Experience & Workflow Design",
    "Responsible AI Specifications",
    "Deployment Readiness Pack",
  ],
  deploy: [
    "Scope & Validation",
    "Solution Architecture",
    "Production Release",
    "Handover & Support",
  ],
  ai_deploy: [
    "AI Scope & Validation",
    "Integration Architecture",
    "Production AI Release",
    "Operational Handover",
  ],
  manage: [
    "Service Operations Report",
    "Performance Optimisation Plan",
    "Governance & SLA Review",
    "Lifecycle Roadmap",
  ],
};

const DELIVERABLE_DESCRIPTIONS_BY_TYPE: Record<
  string,
  Record<string, string>
> = {
  advisory: {
    "Current-State Assessment":
      "Evaluates your organisation's present capabilities, maturity, and constraints across the engagement scope.",
    "Opportunity Analysis":
      "Identifies high-impact improvement areas and prioritised opportunities aligned to business outcomes.",
    "Transformation Vision":
      "Defines a clear direction for how your organisation should evolve digitally.",
    "Priority Recommendations":
      "Provides executive-ready next steps to improve experience, engagement, and performance.",
  },
  design: {
    "Discovery & Strategy":
      "Synthesises discovery findings, stakeholder alignment, and strategic direction into a coherent foundation for design.",
    "Experience Design":
      "Shapes user-centred experiences through solution blueprints, process design, operating models, and validated prototypes.",
    "Technical Specifications":
      "Documents implementation-ready requirements, delivery backlogs, and deployment sequencing for build teams.",
    "Success Framework":
      "Defines KPIs, executive summaries, and governance checkpoints to measure and communicate outcomes.",
  },
  ai_design: {
    "AI Opportunity Validation":
      "Validates AI use cases, value hypotheses, and feasibility against your business and governance context.",
    "Experience & Workflow Design":
      "Designs human-in-the-loop workflows, interaction patterns, and experience touchpoints for AI-enabled capabilities.",
    "Responsible AI Specifications":
      "Documents guardrails, data boundaries, oversight models, and compliance controls for controlled deployment.",
    "Deployment Readiness Pack":
      "Packages specifications, prototype assets, and rollout criteria that de-risk production AI investment.",
  },
  deploy: {
    "Scope & Validation":
      "Confirms MVP scope, priority user flows, and acceptance criteria before build begins.",
    "Solution Architecture":
      "Defines target architecture, technical specifications, and a phased delivery plan aligned to governance.",
    "Production Release":
      "Delivers the production-ready build, deployment package, and validated release against agreed milestones.",
    "Handover & Support":
      "Transfers knowledge, access, runbooks, and stabilisation support for operational continuity.",
  },
  ai_deploy: {
    "AI Scope & Validation":
      "Confirms production scope, integration points, and safety requirements for AI capabilities.",
    "Integration Architecture":
      "Defines orchestration, model integration, monitoring hooks, and platform dependencies.",
    "Production AI Release":
      "Deploys governed AI capabilities with performance validation and production acceptance evidence.",
    "Operational Handover":
      "Provides runbooks, monitoring setup, and handover materials for responsible AI operations.",
  },
  manage: {
    "Service Operations Report":
      "Recurring report on platform health, incidents, service levels, and operational performance.",
    "Performance Optimisation Plan":
      "Identifies and tracks improvements to experience, efficiency, and platform utilisation.",
    "Governance & SLA Review":
      "Structured review of service levels, risks, escalations, and lifecycle governance obligations.",
    "Lifecycle Roadmap":
      "Forward-looking plan for capability evolution, upgrades, and alignment to business priorities.",
  },
};

export function getDeliverablesForService(
  service: ServiceProduct
): readonly string[] {
  const titles = DELIVERABLES_BY_TYPE[service.serviceType];
  if (titles?.length) {
    return titles.slice(0, MAX_DELIVERABLES);
  }
  return DELIVERABLES_BY_TYPE.advisory;
}

function buildDeliverableDescription(
  service: ServiceProduct,
  title: string
): string {
  const byType = DELIVERABLE_DESCRIPTIONS_BY_TYPE[service.serviceType];
  if (byType?.[title]) {
    return byType[title];
  }

  const solution = getServiceSolutionName(service.standardName);
  return `Supports your ${solution} engagement with structured insight and actionable detail on ${title.toLowerCase()}.`;
}

export function getDeliverablesSummaryContent(
  service: ServiceProduct
): DeliverablesSummaryContent {
  const paragraphs =
    DELIVERABLES_SUMMARY_BY_TYPE[service.serviceType] ??
    DELIVERABLES_SUMMARY_BY_TYPE.advisory;

  return {
    paragraphs: [...paragraphs],
  };
}

export function getDeliverablesAtAGlance(
  service: ServiceProduct,
  deliverableCount: number
): DeliverablesAtAGlance {
  const noun = deliverableCount === 1 ? "deliverable" : "deliverables";

  return {
    duration: service.duration,
    scopeLabel: `${deliverableCount} core ${noun}`,
  };
}

export function getDeliverableBreakdown(
  service: ServiceProduct,
  deliverableTitles: readonly string[]
): DeliverableBreakdownItem[] {
  return deliverableTitles.map((title) => ({
    title,
    description: buildDeliverableDescription(service, title),
  }));
}

export const servicePackageCardClass =
  "rounded-xl border border-gray-200 bg-white p-6 shadow-[var(--shadow-card)]";

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

const PIPELINE_STAGE_ORDER = [
  "advisory",
  "design",
  "ai_design",
  "deploy",
  "ai_deploy",
  "manage",
] as const;

const MAX_RELATED_SERVICES = 3;

function findSolutionBundle(
  solution: string,
  catalog: readonly ServiceProduct[]
): ServiceProduct | undefined {
  return catalog.find(
    (candidate) =>
      candidate.serviceType === "bundle" &&
      getServiceSolutionName(candidate.standardName) === solution
  );
}

export function getRelatedServices(
  service: ServiceProduct,
  catalog: readonly ServiceProduct[] = servicesCatalog
): ServiceProduct[] {
  const seen = new Set<number>([service.id]);
  const related: ServiceProduct[] = [];

  const add = (candidate?: ServiceProduct) => {
    if (!candidate || seen.has(candidate.id) || related.length >= MAX_RELATED_SERVICES) {
      return;
    }
    seen.add(candidate.id);
    related.push(candidate);
  };

  for (const relatedId of service.relatedServices ?? []) {
    add(catalog.find((candidate) => candidate.id === relatedId));
  }

  if (related.length >= MAX_RELATED_SERVICES) {
    return related;
  }

  const solution = getServiceSolutionName(service.standardName);
  const siblings = catalog.filter(
    (candidate) =>
      candidate.id !== service.id &&
      getServiceSolutionName(candidate.standardName) === solution
  );

  if (service.serviceType !== "bundle") {
    add(findSolutionBundle(solution, catalog));

    const currentStageIndex = PIPELINE_STAGE_ORDER.indexOf(
      service.serviceType as (typeof PIPELINE_STAGE_ORDER)[number]
    );

    if (currentStageIndex >= 0) {
      for (let index = currentStageIndex + 1; index < PIPELINE_STAGE_ORDER.length; index += 1) {
        const stage = PIPELINE_STAGE_ORDER[index];
        add(siblings.find((candidate) => candidate.serviceType === stage));
        if (related.length >= MAX_RELATED_SERVICES) break;
      }

      for (let index = currentStageIndex - 1; index >= 0; index -= 1) {
        const stage = PIPELINE_STAGE_ORDER[index];
        add(siblings.find((candidate) => candidate.serviceType === stage));
        if (related.length >= MAX_RELATED_SERVICES) break;
      }
    }
  }

  const rankedSiblings = [...siblings].sort(
    (left, right) => right.popularityRank - left.popularityRank
  );

  for (const sibling of rankedSiblings) {
    add(sibling);
    if (related.length >= MAX_RELATED_SERVICES) break;
  }

  return related;
}
