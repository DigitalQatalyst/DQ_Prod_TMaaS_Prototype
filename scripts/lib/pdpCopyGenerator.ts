/**
 * Generates Option A PDP copy for Supabase seeding.
 * Rules: no em dashes, no "In one week" hero openers (see /workspace/pdp-copy-style.md).
 */
import { getVariantCopyOverride } from "../../src/data/serviceCopy";
import { buildServiceFaqsContent } from "../../src/lib/serviceFaqsCopy";
import { buildWhyItMattersContent } from "../../src/lib/whyItMattersCopy";
import {
  buildVariantHeroDescription,
  buildVariantPositioning,
} from "../../src/lib/variantSeoCopy";
import type { ServiceProduct } from "../../src/types/serviceProduct";

export type DeliverableItem = { title: string; description: string };
export type FaqItem = { question: string; answer: string };
export type DeliveryStep = {
  step: number;
  title: string;
  duration: string;
  body: string;
  whatHappens: string;
  dqEffort: "low" | "medium" | "high";
  yourEffort: "low" | "medium" | "high";
  active?: boolean;
};
export type DeliveryProcessContent = {
  totalDuration: string;
  steps: DeliveryStep[];
};
export type GeneratedPdpContent = {
  heroSummary: string;
  overviewParagraphs: string[];
  audienceDescription: string;
  positioning: string;
  deliverablesSummary: string[];
  deliverables: DeliverableItem[];
  faqIntro: string;
  faqs: FaqItem[];
  deliveryProcess: DeliveryProcessContent;
  packageHighlights: string[];
  whyItMatters: ReturnType<typeof buildWhyItMattersContent>;
};

function stripEmDash(text: string): string {
  return text.replace(/\s*—\s*/g, ", ").replace(/\s+/g, " ").trim();
}

function solutionKey(standardName: string): string {
  const base = standardName.replace(" (High-Impact)", "");
  const match = base.match(
    /^(.+?)\s+-\s+(?:Assess|Design|AI Design|Deploy|AI Deploy|Managed Service|Implementation|AI Implementation|Transformation Bundle)/
  );
  return (match?.[1] ?? base).trim().toLowerCase();
}

function solutionLabel(standardName: string): string {
  const key = solutionKey(standardName);
  return key.charAt(0).toUpperCase() + key.slice(1);
}

const COLLECTION_DOMAIN: Record<string, string> = {
  experience: "customer experience and digital engagement",
  operations: "business operations and productivity",
  security: "governance, risk, and platform reliability",
  ai: "data, analytics, and intelligent automation",
};

const DELIVERABLES_SUMMARY_OVERRIDES: Record<string, string[]> = {
  "online web presence|advisory": [
    "This engagement reviews how your web presence supports discovery, engagement, and conversion across priority customer journeys.",
    "You receive practical findings and a prioritised roadmap your teams can use for design, investment, and delivery decisions.",
  ],
  "enterprise data platform|advisory": [
    "This engagement maps your data maturity across governance, quality, platform readiness, and pipeline gaps.",
    "You receive a prioritised roadmap for a scalable enterprise data platform your leadership team can act on.",
  ],
};

const DELIVERABLE_TITLES: Record<string, string[]> = {
  advisory: [
    "Current-state assessment",
    "Opportunity analysis",
    "Prioritised recommendations",
    "Executive summary",
  ],
  design: [
    "Discovery and strategy",
    "Experience design",
    "Technical specifications",
    "Delivery backlog",
  ],
  ai_design: [
    "Use-case validation",
    "Workflow design",
    "Responsible AI guardrails",
    "Deployment specifications",
  ],
  deploy: [
    "Configured build",
    "Integration and testing",
    "Go-live readiness",
    "Handover pack",
  ],
  ai_deploy: [
    "Production deployment",
    "Monitoring and controls",
    "Safety validation",
    "Operational handover",
  ],
  manage: [
    "Service operations",
    "Performance reporting",
    "Continuous improvement",
    "Governance reviews",
  ],
};

const PACKAGE_HIGHLIGHTS: Record<string, string[]> = {
  advisory: [
    "Fixed discovery scope",
    "Executive-ready findings",
    "No obligation to proceed",
  ],
  design: [
    "Workshop-led discovery",
    "Implementation-ready specifications",
    "Governance-aligned delivery",
  ],
  ai_design: [
    "Validated AI use cases",
    "Responsible workflow design",
    "Deployment-ready specifications",
  ],
  deploy: [
    "Phased implementation",
    "QA and handover included",
    "SLA-backed delivery",
  ],
  ai_deploy: [
    "Production AI deployment",
    "Monitoring and safety controls",
    "Operational handover",
  ],
  manage: [
    "Monthly SLA-backed service",
    "Continuous optimisation",
    "Dedicated specialist team",
  ],
};

function buildDeliverablesSummary(service: ServiceProduct): string[] {
  const key = `${solutionKey(service.standardName)}|${service.serviceType}`;
  if (DELIVERABLES_SUMMARY_OVERRIDES[key]) return DELIVERABLES_SUMMARY_OVERRIDES[key];

  const solution = solutionLabel(service.standardName);
  const domain = COLLECTION_DOMAIN[service.collection] ?? "your operating environment";

  const byType: Record<string, string[]> = {
    advisory: [
      `This engagement reviews ${solution.toLowerCase()} across ${domain}.`,
      "You receive practical findings and a prioritised roadmap for next steps.",
    ],
    design: [
      `This engagement produces design artefacts that translate ${solution.toLowerCase()} requirements into build-ready specifications.`,
      "Each output is structured for governance review and handover to delivery teams.",
    ],
    ai_design: [
      `This engagement validates AI use cases and defines responsible workflows for ${solution.toLowerCase()}.`,
      "You receive specifications that balance innovation with governance before build investment.",
    ],
    deploy: [
      `This engagement delivers configured, tested, and validated ${solution.toLowerCase()} assets aligned to approved scope.`,
      "Each output supports go-live readiness and structured handover to your operations team.",
    ],
    ai_deploy: [
      `This engagement deploys production AI capabilities for ${solution.toLowerCase()} with monitoring and safety controls.`,
      "You receive operational runbooks and validation evidence before handover.",
    ],
    manage: [
      `This managed service covers ongoing operations, reporting, and improvement for ${solution.toLowerCase()}.`,
      "You receive predictable SLA-backed support aligned to agreed service levels.",
    ],
  };

  return byType[service.serviceType] ?? byType.advisory;
}

function buildOverviewParagraphs(service: ServiceProduct): string[] {
  const hero = buildVariantHeroDescription(service);
  const positioning = buildVariantPositioning(service);
  if (hero === positioning) return [hero];
  return [hero, positioning];
}

function buildAudienceDescription(service: ServiceProduct): string {
  if (service.audience && !/^enterprise\s*&/i.test(service.audience)) {
    return `Built for ${service.audience.toLowerCase()} who need clear scope, practical outputs, and governance-aligned delivery.`;
  }
  return `Built for leaders responsible for ${solutionLabel(service.standardName).toLowerCase()} who need structured TMaaS delivery and measurable outcomes.`;
}

function buildDeliverables(service: ServiceProduct): DeliverableItem[] {
  const titles = DELIVERABLE_TITLES[service.serviceType] ?? DELIVERABLE_TITLES.advisory;
  const solution = solutionLabel(service.standardName);

  return titles.map((title) => ({
    title,
    description: stripEmDash(
      `Supports your ${solution} engagement with structured insight and actionable detail on ${title.toLowerCase()}.`
    ),
  }));
}

function buildDeliveryProcess(service: ServiceProduct): DeliveryProcessContent {
  const duration = service.duration;
  const isAdvisory = service.serviceType === "advisory";

  if (isAdvisory) {
    return {
      totalDuration: duration,
      steps: [
        {
          step: 1,
          title: "Scope",
          duration: "Days 1-2",
          body: "We align on your goals, stakeholders, and assessment focus so the week stays targeted.",
          whatHappens: "Kick-off, context gathering, and assessment scope",
          dqEffort: "medium",
          yourEffort: "medium",
          active: true,
        },
        {
          step: 2,
          title: "Assess",
          duration: "Days 3-4",
          body: "We review your current state, surface priority gaps, and gather evidence your leadership can act on.",
          whatHappens: "Current-state review, gap analysis, and evidence capture",
          dqEffort: "high",
          yourEffort: "medium",
        },
        {
          step: 3,
          title: "Advise",
          duration: "Day 5",
          body: "We share findings, recommendations, and practical next steps so you know what to prioritise in the marketplace.",
          whatHappens: "Findings playback, recommendations, and next-step roadmap",
          dqEffort: "medium",
          yourEffort: "low",
        },
      ],
    };
  }

  if (service.serviceType === "design" || service.serviceType === "ai_design") {
    return {
      totalDuration: duration,
      steps: [
        {
          step: 1,
          title: "Discover",
          duration: "1 Week",
          body: "We align on goals, constraints, and success measures with your stakeholders.",
          whatHappens: "Kick-off, stakeholder interviews, and scope confirmation",
          dqEffort: "high",
          yourEffort: "medium",
          active: true,
        },
        {
          step: 2,
          title: "Design",
          duration: "2-3 Weeks",
          body: "We produce experience, workflow, and specification artefacts for review.",
          whatHappens: "Design workshops, reviews, and iteration cycles",
          dqEffort: "high",
          yourEffort: "medium",
        },
        {
          step: 3,
          title: "Handover",
          duration: "1 Week",
          body: "We finalise specifications and agree the path to implementation.",
          whatHappens: "Governance sign-off and delivery backlog handover",
          dqEffort: "medium",
          yourEffort: "low",
        },
      ],
    };
  }

  if (service.serviceType === "deploy" || service.serviceType === "ai_deploy") {
    return {
      totalDuration: duration,
      steps: [
        {
          step: 1,
          title: "Prepare",
          duration: "2 Weeks",
          body: "We confirm scope, environments, and acceptance criteria before build.",
          whatHappens: "Technical readiness and delivery planning",
          dqEffort: "high",
          yourEffort: "medium",
          active: true,
        },
        {
          step: 2,
          title: "Build",
          duration: "6-8 Weeks",
          body: "We implement, integrate, and test against agreed requirements.",
          whatHappens: "Sprints, QA cycles, and stakeholder reviews",
          dqEffort: "high",
          yourEffort: "medium",
        },
        {
          step: 3,
          title: "Go live",
          duration: "2 Weeks",
          body: "We support launch, validation, and handover to your operations team.",
          whatHappens: "Go-live readiness, cutover, and knowledge transfer",
          dqEffort: "high",
          yourEffort: "medium",
        },
      ],
    };
  }

  return {
    totalDuration: duration,
    steps: [
      {
        step: 1,
        title: "Onboard",
        duration: "Week 1",
        body: "We align on scope, SLAs, access, and how we will run the service with your team.",
        whatHappens: "Scope alignment, SLA setup, and access provisioning",
        dqEffort: "medium",
        yourEffort: "medium",
        active: true,
      },
      {
        step: 2,
        title: "Operate",
        duration: "Ongoing",
        body: "We run agreed operations with monitoring, incident response, and SLA-backed reporting.",
        whatHappens: "Monitoring, incident response, and service reporting",
        dqEffort: "high",
        yourEffort: "low",
      },
      {
        step: 3,
        title: "Improve",
        duration: "Ongoing",
        body: "We review performance, apply optimisations, and keep the service aligned as your needs change.",
        whatHappens: "Performance reviews, optimisations, and roadmap updates",
        dqEffort: "medium",
        yourEffort: "low",
      },
    ],
  };
}

function mergeDeliveryProcess(
  base: DeliveryProcessContent,
  override: ReturnType<typeof getVariantCopyOverride>["deliveryProcessSteps"]
): DeliveryProcessContent {
  if (!override?.length) return base;
  return {
    ...base,
    steps: base.steps.map((step, index) => {
      const o = override[index];
      if (!o) return step;
      return {
        ...step,
        title: o.title ?? step.title,
        body: o.body ? stripEmDash(o.body) : step.body,
        whatHappens: o.whatHappens ?? step.whatHappens,
      };
    }),
  };
}

export function generatePdpContent(service: ServiceProduct): GeneratedPdpContent {
  const override = getVariantCopyOverride(service.id);
  const faqBlock = buildServiceFaqsContent(service);
  const heroSummary =
    override.heroSummary ?? override.description ?? buildVariantHeroDescription(service);
  const positioning = override.positioning ?? buildVariantPositioning(service);

  return {
    heroSummary: stripEmDash(heroSummary),
    overviewParagraphs: override.overviewParagraphs ?? buildOverviewParagraphs(service),
    audienceDescription: override.audienceDescription ?? buildAudienceDescription(service),
    positioning: stripEmDash(positioning),
    deliverablesSummary: override.deliverablesSummary ?? buildDeliverablesSummary(service),
    deliverables: override.deliverables ?? buildDeliverables(service),
    faqIntro: override.faqIntro ?? faqBlock.intro,
    faqs: override.faqs ?? faqBlock.faqs,
    deliveryProcess: mergeDeliveryProcess(
      buildDeliveryProcess(service),
      override.deliveryProcessSteps
    ),
    packageHighlights:
      override.packageHighlights ??
      PACKAGE_HIGHLIGHTS[service.serviceType] ??
      PACKAGE_HIGHLIGHTS.advisory,
    whyItMatters: buildWhyItMattersContent(service),
  };
}

export function escSql(value: string): string {
  return value.replace(/'/g, "''");
}

export function jsonSql(value: unknown): string {
  return `'${escSql(JSON.stringify(value))}'::jsonb`;
}
