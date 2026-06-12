/**
 * Generates Option A PDP copy for Supabase seeding.
 * Rules: no em dashes, no "In one week" hero openers (see /workspace/pdp-copy-style.md).
 */
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
export type WhyItMattersStateItem = { title: string; description: string };
export type WhyItMattersContent = {
  hook: string;
  problemParagraph: string;
  before: { eyebrow: string; title: string; items: WhyItMattersStateItem[] };
  after: { eyebrow: string; title: string; items: WhyItMattersStateItem[] };
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
  whyItMatters: WhyItMattersContent;
};

const GENERIC_POSITIONING = /\(High-Impact\) Positioning Strategy/i;
const GENERIC_DESCRIPTION =
  /^(A strategic discovery|Discovery engagement|Assessment of|Strategic assessment of|Architecture alignment)/i;

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

const HERO_OVERRIDES: Record<string, string> = {
  "online web presence|advisory":
    "We assess how your web presence performs today across journeys, content, conversion, and AI readiness, and return prioritised recommendations your leadership team can act on.",
  "enterprise data platform|advisory":
    "We map your data maturity across governance, quality, platform readiness, and pipeline gaps, and return prioritised recommendations your data and technology leaders can act on.",
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

function buildHeroSummary(service: ServiceProduct): string {
  const key = `${solutionKey(service.standardName)}|${service.serviceType}`;
  if (HERO_OVERRIDES[key]) return HERO_OVERRIDES[key];

  const desc = stripEmDash(service.description);
  if (desc && !GENERIC_DESCRIPTION.test(desc)) return desc;

  const solution = solutionLabel(service.standardName);
  const domain = COLLECTION_DOMAIN[service.collection] ?? "your target capability";

  const byType: Record<string, string> = {
    advisory: `We assess ${solution.toLowerCase()} across ${domain}, and return prioritised recommendations your leadership team can act on.`,
    design: `We translate your ${solution.toLowerCase()} goals into user-centred designs and implementation-ready specifications aligned to governance standards.`,
    ai_design: `We define responsible AI use cases and workflows for ${solution.toLowerCase()}, with specifications ready for controlled deployment.`,
    deploy: `We deliver production-ready ${solution.toLowerCase()} capabilities with structured testing, integration, and handover to your teams.`,
    ai_deploy: `We deploy governed AI capabilities for ${solution.toLowerCase()} with monitoring, safety controls, and operational handover built in.`,
    manage: `We run SLA-backed operations for ${solution.toLowerCase()} with continuous monitoring, optimisation, and lifecycle governance.`,
  };

  return byType[service.serviceType] ?? desc;
}

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
  const hero = buildHeroSummary(service);
  const positioning = stripEmDash(service.positioning);
  const closing =
    positioning && !GENERIC_POSITIONING.test(positioning)
      ? positioning
      : "We combine expert-led delivery with governance oversight so your teams can move forward with clarity and measurable outcomes.";

  if (hero === closing) return [hero];
  return [hero, closing];
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

function getStartedAnswer(service: ServiceProduct): string {
  if (service.price === "Free") {
    return "Request a consultation or submit a contact form. The DigitalQatalyst team will confirm scope and next steps before work begins.";
  }
  return `Request a quote or book a consultation. The DigitalQatalyst team will share scope, timeline, and commercial terms (reference price: ${service.price}, ${service.duration}).`;
}

function buildFaqs(service: ServiceProduct): { intro: string; items: FaqItem[] } {
  const solution = solutionLabel(service.standardName);
  const typeLabel = service.serviceType.replace("_", " ");
  const intro = `Key questions about the ${solution} ${typeLabel} service.`;

  const items: FaqItem[] = [
    {
      question: `What is included in the ${solution} scope?`,
      answer: stripEmDash(
        `Scope covers ${COLLECTION_DOMAIN[service.collection] ?? "the agreed capability area"}. Exact activities are confirmed during intake with the DigitalQatalyst team.`
      ),
    },
    {
      question: "What deliverables will we receive?",
      answer:
        "Named deliverables are listed in the What You Receive tab. Each output is designed for governance review and practical use by your teams.",
    },
    {
      question: "How long does this engagement take?",
      answer: `Delivered over ${service.duration} via ${service.implementationModel}. Timelines may adjust based on scope and stakeholder availability.`,
    },
    {
      question: "What happens after this engagement?",
      answer: stripEmDash(
        `Findings can inform the next stage of ${solution.toLowerCase()}, internal planning, or a follow-on TMaaS service. There is no obligation to proceed.`
      ),
    },
    {
      question: "How do we get started?",
      answer: getStartedAnswer(service),
    },
  ];

  return { intro, items };
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
          title: "Assess",
          duration: duration,
          body: "We evaluate your current state, stakeholder goals, and improvement opportunities for this service scope.",
          whatHappens: "Discovery workshops, evidence review, and gap analysis",
          dqEffort: "high",
          yourEffort: "medium",
          active: true,
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
        title: "Operate",
        duration: "Ongoing",
        body: "We run agreed service operations with SLA-backed reporting and governance.",
        whatHappens: "Monitoring, incident response, and service reviews",
        dqEffort: "high",
        yourEffort: "low",
        active: true,
      },
    ],
  };
}

function buildWhyItMatters(service: ServiceProduct): WhyItMattersContent {
  const solution = solutionLabel(service.standardName);
  const domain = COLLECTION_DOMAIN[service.collection] ?? "this capability area";

  return {
    hook: `Strong ${solution.toLowerCase()} outcomes depend on clear priorities, aligned teams, and governed delivery.`,
    problemParagraph: stripEmDash(
      `Many organisations struggle with fragmented ${domain}, unclear priorities, and slow progress from insight to action. This service gives you structured TMaaS delivery to move forward with confidence.`
    ),
    before: {
      eyebrow: "Today",
      title: "Common challenges",
      items: [
        {
          title: "Unclear priorities",
          description: "Teams lack a shared view of what to fix first and why.",
        },
        {
          title: "Siloed decisions",
          description: "Stakeholders work from different assumptions and incomplete evidence.",
        },
        {
          title: "Slow progress",
          description: "Good ideas stall before they become funded, governed delivery.",
        },
      ],
    },
    after: {
      eyebrow: "With TMaaS",
      title: "Expected outcomes",
      items: [
        {
          title: "Shared priorities",
          description: "Leadership aligns on the highest-value next steps for this scope.",
        },
        {
          title: "Actionable outputs",
          description: "Your teams receive practical artefacts they can execute against.",
        },
        {
          title: "Governed delivery",
          description: "Progress continues with clear milestones, reporting, and accountability.",
        },
      ],
    },
  };
}

export function generatePdpContent(service: ServiceProduct): GeneratedPdpContent {
  const faqBlock = buildFaqs(service);
  const positioning = stripEmDash(service.positioning);

  return {
    heroSummary: buildHeroSummary(service),
    overviewParagraphs: buildOverviewParagraphs(service),
    audienceDescription: buildAudienceDescription(service),
    positioning:
      positioning && !GENERIC_POSITIONING.test(positioning)
        ? positioning
        : buildOverviewParagraphs(service)[1] ?? positioning,
    deliverablesSummary: buildDeliverablesSummary(service),
    deliverables: buildDeliverables(service),
    faqIntro: faqBlock.intro,
    faqs: faqBlock.items,
    deliveryProcess: buildDeliveryProcess(service),
    packageHighlights:
      PACKAGE_HIGHLIGHTS[service.serviceType] ?? PACKAGE_HIGHLIGHTS.advisory,
    whyItMatters: buildWhyItMatters(service),
  };
}

export function escSql(value: string): string {
  return value.replace(/'/g, "''");
}

export function jsonSql(value: unknown): string {
  return `'${escSql(JSON.stringify(value))}'::jsonb`;
}
