import {
  getServiceSolutionName,
  type ServiceProduct,
} from "./serviceDetailHelpers";

export interface WhyItMattersStateItem {
  title: string;
  description: string;
}

export interface WhyItMattersContent {
  hook: string;
  problemParagraph: string;
  before: {
    eyebrow: string;
    title: string;
    items: WhyItMattersStateItem[];
  };
  after: {
    eyebrow: string;
    title: string;
    items: WhyItMattersStateItem[];
  };
}

interface SolutionContext {
  solution: string;
  solutionKey: string;
  domain: string;
  domainShort: string;
  capability: string;
}

const COLLECTION_CONTEXT: Record<
  string,
  { domain: string; domainShort: string; capability: string }
> = {
  experience: {
    domain: "digital experience",
    domainShort: "digital presence",
    capability: "customer touchpoints and engagement",
  },
  operations: {
    domain: "business operations",
    domainShort: "operational capability",
    capability: "workflow efficiency and productivity",
  },
  security: {
    domain: "technology governance",
    domainShort: "delivery posture",
    capability: "risk management and platform reliability",
  },
  ai: {
    domain: "data and AI",
    domainShort: "data and AI capability",
    capability: "insight generation and intelligent automation",
  },
  bundles: {
    domain: "transformation",
    domainShort: "transformation programme",
    capability: "end-to-end capability delivery",
  },
};

const SOLUTION_HOOKS: Record<string, string> = {
  "online web presence":
    "Your website is often the first, and most critical, digital touchpoint.",
  "online social presence":
    "Your social channels are where audiences form first impressions and build ongoing relationships.",
  "mobile apps":
    "Your mobile apps are where users engage most deeply, and where experience gaps have the greatest impact.",
  "physical channels":
    "Your physical and digital touchpoints must work as one, or customer journeys break at the seams.",
  "experience solutions":
    "Connected digital experiences are how customers judge your brand, across every channel and journey.",
  "crm solutions":
    "Your CRM is the backbone of how you understand, serve, and retain customers.",
  "marketing solutions":
    "Your marketing platforms determine how effectively you reach, engage, and convert audiences.",
  "smart sales & quotation":
    "Your sales and quotation processes directly shape revenue velocity and customer confidence.",
  "customer support & success":
    "Customer support is where brand promises are kept, or broken, at scale.",
  "digital workplace":
    "Your digital workplace is how teams collaborate, decide, and deliver, every day.",
  "business process automation":
    "Manual processes and disconnected workflows are among the biggest drains on operational performance.",
  "specialized operations":
    "Specialised operational capabilities are what differentiate your organisation in complex environments.",
  "enterprise operations":
    "Enterprise operations span the systems and workflows that keep your organisation running at scale.",
  "governance, risk & compliance":
    "Governance and compliance are not overhead, they are what makes sustainable transformation possible.",
  "enterprise resource planning":
    "Your ERP connects finance, operations, and supply chain, making it foundational to organisational performance.",
  "workforce management":
    "Workforce systems shape how you deploy talent, manage capacity, and respond to demand.",
  "enterprise data platform":
    "Your data platform is the foundation for every insight, automation, and AI initiative you pursue.",
  "business intelligence & analytics":
    "Analytics capability determines whether decisions are driven by evidence, or by assumption.",
  "enterprise ai & automation":
    "AI and automation are reshaping how organisations operate, but only where use cases are validated and governed.",
  "technology governance":
    "Technology governance is what turns ambitious delivery into sustainable, risk-aware progress.",
  "devsecops automation":
    "DevSecOps practices determine how fast you can ship, and how confidently you can scale.",
  "it operations & support":
    "IT operations keep critical platforms available, secure, and fit for evolving business needs.",
};

const SERVICE_TYPE_LABELS: Record<string, string> = {
  advisory: "assessment",
  design: "design engagement",
  ai_design: "AI design engagement",
  deploy: "implementation",
  ai_deploy: "AI implementation",
  manage: "managed service",
  bundle: "transformation bundle",
};

const PROBLEM_PARAGRAPH_BUILDERS: Record<
  string,
  (ctx: SolutionContext) => string
> = {
  advisory: (ctx) =>
    `Yet many organisations struggle with fragmented ${ctx.domainShort}, unclear priorities across ${ctx.capability}, and missed opportunities. This ${SERVICE_TYPE_LABELS.advisory} gives you the clarity to fix what's holding you back and focus on what will drive impact.`,
  design: (ctx) =>
    `Yet many organisations move to build without validated designs, inconsistent standards across ${ctx.capability}, and specifications that leave teams guessing. This ${SERVICE_TYPE_LABELS.design} gives you the structure to design with confidence and hand over with clarity.`,
  ai_design: (ctx) =>
    `Yet many organisations pursue AI without validated use cases, unclear guardrails for ${ctx.capability}, and designs that cannot be deployed responsibly. This ${SERVICE_TYPE_LABELS.ai_design} gives you the framework to innovate with governance built in.`,
  deploy: (ctx) =>
    `Yet many organisations stall between approved designs and production, with integration gaps, quality risks, and delayed go-live across ${ctx.capability}. This ${SERVICE_TYPE_LABELS.deploy} gives you structured delivery to move from plan to live with confidence.`,
  ai_deploy: (ctx) =>
    `Yet many AI initiatives fail to reach production, blocked by integration complexity, safety concerns, and missing operational readiness for ${ctx.capability}. This ${SERVICE_TYPE_LABELS.ai_deploy} gives you a governed path from design to live AI capability.`,
  manage: (ctx) =>
    `Yet many organisations struggle to sustain platform performance after go-live, with reactive support, rising costs, and declining value from ${ctx.capability}. This ${SERVICE_TYPE_LABELS.manage} gives you predictable operations and continuous improvement under SLA governance.`,
  bundle: (ctx) =>
    `Yet many transformation programmes fragment across vendors, stages, and priorities, leaving gaps in ${ctx.capability} and no single view of progress. This ${SERVICE_TYPE_LABELS.bundle} gives you coordinated end-to-end delivery with unified governance.`,
};

const BEFORE_AFTER_BY_TYPE: Record<
  string,
  { before: WhyItMattersStateItem[]; after: WhyItMattersStateItem[] }
> = {
  advisory: {
    before: [
      {
        title: "Unclear digital presence",
        description:
          "Your presence doesn't clearly communicate value or reflect your brand credibility.",
      },
      {
        title: "Reactive decisions",
        description:
          "Decisions are based on assumptions and disconnected insights, not evidence.",
      },
      {
        title: "Scattered priorities",
        description:
          "Opportunities are scattered, making it hard to focus and drive meaningful progress.",
      },
    ],
    after: [
      {
        title: "Evidence-based priorities",
        description:
          "You have a clear, data-led view of what matters most for your digital presence.",
      },
      {
        title: "Clearer improvement opportunities",
        description:
          "Gaps and opportunities are identified to improve customer experience and engagement.",
      },
      {
        title: "Stronger foundation for growth",
        description:
          "A focused roadmap sets the foundation for digital transformation and measurable impact.",
      },
    ],
  },
  design: {
    before: [
      {
        title: "Undefined experience direction",
        description:
          "Target experiences are unclear, making it difficult to align teams and stakeholders.",
      },
      {
        title: "Design inconsistency",
        description:
          "Brand, UX, and technical standards are applied unevenly across touchpoints.",
      },
      {
        title: "Build ambiguity",
        description:
          "Implementation teams lack the specifications needed to deliver with confidence.",
      },
    ],
    after: [
      {
        title: "User-centred specifications",
        description:
          "Experiences are designed around real user needs with clear journey definitions.",
      },
      {
        title: "Brand-aligned experiences",
        description:
          "Visual systems and interaction patterns reflect your brand with consistency.",
      },
      {
        title: "Implementation-ready artefacts",
        description:
          "Build teams receive clear specifications that reduce rework and accelerate delivery.",
      },
    ],
  },
  ai_design: {
    before: [
      {
        title: "Unvalidated AI use cases",
        description:
          "AI ambitions lack structured validation against business value and feasibility.",
      },
      {
        title: "Missing guardrails",
        description:
          "Responsible AI controls and human-in-the-loop workflows are not yet defined.",
      },
      {
        title: "Deployment uncertainty",
        description:
          "Teams cannot move from concept to build without clear specifications and risk controls.",
      },
    ],
    after: [
      {
        title: "Validated use cases",
        description:
          "AI opportunities are prioritised with clear value hypotheses and success criteria.",
      },
      {
        title: "Responsible workflows",
        description:
          "Human oversight, safety controls, and governance are designed into every workflow.",
      },
      {
        title: "Deployment-ready designs",
        description:
          "Specifications and prototypes de-risk investment and accelerate production deployment.",
      },
    ],
  },
  deploy: {
    before: [
      {
        title: "Stalled implementation",
        description:
          "Approved designs sit idle while teams struggle to coordinate build and integration.",
      },
      {
        title: "Quality and integration risk",
        description:
          "Testing gaps and platform dependencies threaten go-live timelines and stability.",
      },
      {
        title: "Unclear handover",
        description:
          "Operations teams lack the documentation and knowledge transfer needed to run live systems.",
      },
    ],
    after: [
      {
        title: "Production-ready delivery",
        description:
          "Capabilities are built, tested, and validated against agreed acceptance criteria.",
      },
      {
        title: "Integrated platforms",
        description:
          "Solutions are deployed with security, governance, and platform requirements met.",
      },
      {
        title: "Confident go-live",
        description:
          "Structured handover equips your teams to operate and evolve the capability.",
      },
    ],
  },
  ai_deploy: {
    before: [
      {
        title: "AI stuck in pilot",
        description:
          "Promising AI designs fail to reach production due to integration and operational barriers.",
      },
      {
        title: "Safety and compliance gaps",
        description:
          "Monitoring, auditability, and responsible AI controls are not yet in place.",
      },
      {
        title: "Operational blind spots",
        description:
          "Teams lack runbooks and performance visibility for live AI capabilities.",
      },
    ],
    after: [
      {
        title: "Live AI capabilities",
        description:
          "AI is deployed in production with orchestration and monitoring built in.",
      },
      {
        title: "Governed operations",
        description:
          "Safety controls, compliance checks, and audit trails support responsible use at scale.",
      },
      {
        title: "Operational readiness",
        description:
          "Runbooks and handover materials equip teams to manage AI in production.",
      },
    ],
  },
  manage: {
    before: [
      {
        title: "Reactive operations",
        description:
          "Issues are addressed after impact, not prevented through proactive management.",
      },
      {
        title: "Declining performance",
        description:
          "Platform value erodes without continuous optimisation and lifecycle governance.",
      },
      {
        title: "Unpredictable support",
        description:
          "Service levels and escalation paths are unclear when teams need help most.",
      },
    ],
    after: [
      {
        title: "SLA-backed operations",
        description:
          "Predictable service levels and structured incident management keep platforms running.",
      },
      {
        title: "Continuous optimisation",
        description:
          "Proactive monitoring and improvement sustain performance and user satisfaction.",
      },
      {
        title: "Lifecycle governance",
        description:
          "Regular reviews and reporting align platform evolution with business priorities.",
      },
    ],
  },
  bundle: {
    before: [
      {
        title: "Fragmented delivery",
        description:
          "Multiple vendors and disconnected stages create gaps, delays, and misaligned outcomes.",
      },
      {
        title: "No single view of progress",
        description:
          "Stakeholders lack unified reporting across discovery, design, build, and operations.",
      },
      {
        title: "Governance overhead",
        description:
          "Coordinating specialists and milestones consumes time that should go to delivery.",
      },
    ],
    after: [
      {
        title: "Coordinated transformation",
        description:
          "Specialist teams work under one engagement with aligned milestones and reporting.",
      },
      {
        title: "End-to-end coverage",
        description:
          "Discovery through operations is covered without handoff gaps between stages.",
      },
      {
        title: "Unified governance",
        description:
          "A single point of contact and bundled commercial model simplify programme oversight.",
      },
    ],
  },
};

const EXACT_CONTENT_OVERRIDES: Record<string, Partial<WhyItMattersContent>> = {
  "online web presence|advisory": {
    hook: "Your website is often the first, and most critical, digital touchpoint.",
    problemParagraph:
      "Yet many organisations struggle with fragmented web presence, unclear customer journeys, and missed engagement opportunities. This assessment gives you the clarity to fix what's holding you back and focus on what will drive impact.",
    before: {
      eyebrow: "Before",
      title: "Where You Are Now",
      items: [
        {
          title: "Unclear digital presence",
          description:
            "Your web presence doesn't clearly communicate value or reflect your brand credibility.",
        },
        {
          title: "Reactive decisions",
          description:
            "Decisions are based on assumptions and disconnected insights, not evidence.",
        },
        {
          title: "Scattered priorities",
          description:
            "Opportunities are scattered, making it hard to focus and drive meaningful progress.",
        },
      ],
    },
    after: {
      eyebrow: "After",
      title: "Where You Can Be",
      items: [
        {
          title: "Evidence-based priorities",
          description:
            "You have a clear, data-led view of what matters most for your web presence.",
        },
        {
          title: "Clearer improvement opportunities",
          description:
            "Gaps and opportunities are identified to improve customer experience and engagement.",
        },
        {
          title: "Stronger foundation for growth",
          description:
            "A focused roadmap sets the foundation for digital transformation and measurable impact.",
        },
      ],
    },
  },
};

function buildSolutionContext(service: ServiceProduct): SolutionContext {
  const solution = getServiceSolutionName(service.standardName);
  const solutionKey = solution.toLowerCase();
  const collectionContext =
    COLLECTION_CONTEXT[service.collection] ?? COLLECTION_CONTEXT.experience;

  return {
    solution,
    solutionKey,
    domain: collectionContext.domain,
    domainShort: collectionContext.domainShort,
    capability: collectionContext.capability,
  };
}

function buildHook(ctx: SolutionContext, service: ServiceProduct): string {
  if (SOLUTION_HOOKS[ctx.solutionKey]) {
    return SOLUTION_HOOKS[ctx.solutionKey];
  }

  if (service.collection === "bundles") {
    return `Your ${ctx.solution} programme spans the capabilities your organisation needs to transform at scale.`;
  }

  return `Your ${ctx.solution} capability is central to how your organisation delivers value through ${ctx.capability}.`;
}

function contextualizeItems(
  items: WhyItMattersStateItem[],
  ctx: SolutionContext,
  serviceType: string
): WhyItMattersStateItem[] {
  const replacements: Record<string, string> = {
    "digital presence": ctx.domainShort,
    "your presence": `your ${ctx.domainShort}`,
    "your digital presence": `your ${ctx.domainShort}`,
    "web presence": ctx.domainShort.includes("web") ? "web presence" : ctx.domainShort,
  };

  if (serviceType === "advisory" && ctx.solutionKey === "online web presence") {
    return items;
  }

  return items.map((item) => {
    let description = item.description;
    for (const [from, to] of Object.entries(replacements)) {
      description = description.replace(new RegExp(from, "gi"), to);
    }

    let title = item.title;
    if (title === "Unclear digital presence" && ctx.domainShort !== "digital presence") {
      title = `Unclear ${ctx.domainShort}`;
    }

    return { title, description };
  });
}

export function getWhyItMattersContent(service: ServiceProduct): WhyItMattersContent {
  const ctx = buildSolutionContext(service);
  const overrideKey = `${ctx.solutionKey}|${service.serviceType}`;
  const exactOverride = EXACT_CONTENT_OVERRIDES[overrideKey];

  const serviceType = service.serviceType;
  const beforeAfter =
    BEFORE_AFTER_BY_TYPE[serviceType] ?? BEFORE_AFTER_BY_TYPE.advisory;
  const problemBuilder =
    PROBLEM_PARAGRAPH_BUILDERS[serviceType] ?? PROBLEM_PARAGRAPH_BUILDERS.advisory;

  const baseContent: WhyItMattersContent = {
    hook: buildHook(ctx, service),
    problemParagraph: problemBuilder(ctx),
    before: {
      eyebrow: "Before",
      title: "Where You Are Now",
      items: contextualizeItems(beforeAfter.before, ctx, serviceType),
    },
    after: {
      eyebrow: "After",
      title: "Where You Can Be",
      items: contextualizeItems(beforeAfter.after, ctx, serviceType),
    },
  };

  if (!exactOverride) {
    return baseContent;
  }

  return {
    ...baseContent,
    ...exactOverride,
    before: exactOverride.before ?? baseContent.before,
    after: exactOverride.after ?? baseContent.after,
  };
}
