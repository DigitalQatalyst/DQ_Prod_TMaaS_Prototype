import { marketplaceServiceTypeLabels } from "@/data/marketplaceNavigation";
import {
  getServiceSolutionName,
  type ServiceProduct,
} from "./serviceDetailHelpers";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceFaqsContent {
  intro: string;
  faqs: ServiceFaq[];
}

const MAX_FAQS = 5;

interface FaqContext {
  solution: string;
  solutionKey: string;
  serviceType: string;
  serviceTypeLabel: string;
  duration: string;
  price: string;
  implementationModel: string;
  industry: string;
  capability: string;
}

const COLLECTION_CAPABILITY: Record<string, string> = {
  experience: "customer touchpoints and engagement",
  operations: "workflow efficiency and productivity",
  security: "risk management and platform reliability",
  ai: "insight generation and intelligent automation",
  bundles: "end-to-end capability delivery",
};

const GET_STARTED_FAQ = (ctx: FaqContext): ServiceFaq => ({
  question: "How do I get started?",
  answer:
    ctx.price === "Free"
      ? "Use Request Quote on this page to open our contact form with this service pre-filled. A DQ advisor will confirm scope and next steps."
      : `Use Request Quote on this page to open our contact form with this service pre-filled. A DQ advisor will share a proposal with timelines and pricing (list price: ${ctx.price}, ${ctx.duration}).`,
});

const TYPE_FAQ_BUILDERS: Record<string, (ctx: FaqContext) => ServiceFaq[]> = {
  advisory: (ctx) => [
    {
      question: `What does the ${ctx.solution} assessment cover?`,
      answer: `We evaluate your current ${ctx.capability}, identify improvement opportunities, and produce prioritised recommendations aligned to your transformation goals. Scope is confirmed during intake.`,
    },
    {
      question: "What deliverables will we receive?",
      answer:
        "Executive-ready findings, prioritised opportunity areas, and actionable recommendations to inform design, investment, and delivery decisions.",
    },
    {
      question: `How long does this engagement take?`,
      answer: `Delivered over ${ctx.duration} via ${ctx.implementationModel}. Timelines may adjust slightly based on scope and stakeholder availability.`,
    },
    {
      question: "What happens after the assessment?",
      answer: `Findings can inform a ${ctx.solution} design engagement, a transformation bundle, or internal planning. There is no obligation to proceed.`,
    },
    GET_STARTED_FAQ(ctx),
  ],
  design: (ctx) => [
    {
      question: `What is included in the ${ctx.solution} design scope?`,
      answer: `Discovery, experience and workflow design, governance alignment, and implementation-ready specifications for ${ctx.capability}. Exact scope is confirmed during intake.`,
    },
    {
      question: "What deliverables will we receive?",
      answer:
        "Journey definitions, design specifications, prototypes or wireframes where applicable, and a delivery backlog or rollout plan your teams can execute against.",
    },
    {
      question: "How involved does our team need to be?",
      answer:
        "We run structured workshops and review cycles with your product owners, subject-matter experts, and brand or governance stakeholders throughout the engagement.",
    },
    {
      question: `How long does this engagement take?`,
      answer: `Runs over ${ctx.duration} through ${ctx.implementationModel}, with milestones agreed at kick-off.`,
    },
    GET_STARTED_FAQ(ctx),
  ],
  ai_design: (ctx) => [
    {
      question: `What does the ${ctx.solution} AI design engagement include?`,
      answer: `Validated AI use cases, human-in-the-loop workflows, responsible AI guardrails, and deployment-ready specifications for ${ctx.capability}.`,
    },
    {
      question: "How do you approach responsible AI?",
      answer:
        "Data boundaries, human oversight, auditability, and safety controls are designed in before any build investment, aligned to your governance standards.",
    },
    {
      question: "What deliverables will we receive?",
      answer:
        "Validated use-case definitions, workflow designs, prototype assets where appropriate, and technical specifications that de-risk production deployment.",
    },
    {
      question: `How long does this engagement take?`,
      answer: `Spans ${ctx.duration} under ${ctx.implementationModel}.`,
    },
    GET_STARTED_FAQ(ctx),
  ],
  deploy: (ctx) => [
    {
      question: `What is included in the ${ctx.solution} implementation?`,
      answer: `Build, integration, quality assurance, and go-live readiness for ${ctx.capability}. Scope and acceptance criteria are agreed before development begins.`,
    },
    {
      question: "What handover and support is included?",
      answer:
        "Knowledge transfer, operational documentation, and post-launch stabilisation support. Ongoing managed operations can be added separately if needed.",
    },
    {
      question: `How long does implementation take?`,
      answer: `Delivered over ${ctx.duration} via ${ctx.implementationModel}, with phased milestones and go-live checkpoints.`,
    },
    {
      question: "How is quality assured?",
      answer:
        "Structured testing, acceptance validation, and SLA-backed quality controls throughout build and launch.",
    },
    GET_STARTED_FAQ(ctx),
  ],
  ai_deploy: (ctx) => [
    {
      question: `What does ${ctx.solution} AI implementation include?`,
      answer: `Production deployment with orchestration, monitoring, safety controls, and operational handover for ${ctx.capability}.`,
    },
    {
      question: "How are safety and compliance handled?",
      answer:
        "Monitoring, audit trails, access controls, and escalation paths aligned to your governance framework, validated before go-live.",
    },
    {
      question: "What happens after go-live?",
      answer:
        "Runbooks, performance validation reporting, and handover to your operations team. Managed service options are available for continuous optimisation.",
    },
    {
      question: `How long does deployment take?`,
      answer: `Runs over ${ctx.duration} through ${ctx.implementationModel}.`,
    },
    GET_STARTED_FAQ(ctx),
  ],
  manage: (ctx) => [
    {
      question: `What is covered by the ${ctx.solution} managed service?`,
      answer: `SLA-backed operations, monitoring, incident management, and continuous optimisation for ${ctx.capability}.`,
    },
    {
      question: "What SLAs apply?",
      answer:
        "Availability, response times, and escalation paths agreed at onboarding. Your DQ advisor shares full SLA detail in the commercial proposal.",
    },
    {
      question: "How do we request changes or enhancements?",
      answer:
        "Changes are raised through TMaaS governance workflows, assessed for impact, and delivered through agreed change windows with transparent reporting.",
    },
    {
      question: `What is the engagement model?`,
      answer: `Operates on a ${ctx.duration} model via ${ctx.implementationModel}.`,
    },
    GET_STARTED_FAQ(ctx),
  ],
  bundle: (ctx) => [
    {
      question: `What is included in the ${ctx.solution} bundle?`,
      answer: `Assessment, design, implementation, and where applicable managed operations for ${ctx.capability}, under a single TMaaS engagement with unified governance.`,
    },
    {
      question: "How is the bundle priced?",
      answer: `Bundled commercial terms are provided in your quote. List reference: ${ctx.price} over ${ctx.duration}, with efficiency compared to purchasing each stage separately.`,
    },
    {
      question: "Can delivery be phased?",
      answer:
        "Yes. Bundles are structured in phases with clear gates between discovery, design, build, and operations, matched to your readiness and priorities.",
    },
    {
      question: "What governance is included?",
      answer:
        "Unified reporting, risk and quality oversight, and stakeholder reviews across all included services, with a single engagement lead.",
    },
    GET_STARTED_FAQ(ctx),
  ],
};

const SOLUTION_FAQ_OVERRIDES: Record<string, ServiceFaq> = {
  "online web presence|advisory": {
    question: "What does the web presence assessment evaluate?",
    answer:
      "Brand alignment, user experience, content quality, accessibility, performance, and conversion pathways, with prioritised improvements grounded in best practice.",
  },
  "crm solutions|deploy": {
    question: "Which CRM platforms can you implement?",
    answer:
      "Leading enterprise CRM platforms and custom configurations scoped to your architecture. Platform selection is confirmed during discovery.",
  },
  "enterprise ai & automation|ai_deploy": {
    question: "How do you handle model governance in production?",
    answer:
      "Model versioning, performance monitoring, drift detection, and human oversight workflows aligned to your AI governance policy.",
  },
};

function buildContext(service: ServiceProduct): FaqContext {
  const solution = getServiceSolutionName(service.standardName);
  const industry =
    service.industryRelevance === "Cross-Industry"
      ? "cross-industry"
      : service.industryRelevance;

  return {
    solution,
    solutionKey: solution.toLowerCase(),
    serviceType: service.serviceType,
    serviceTypeLabel:
      marketplaceServiceTypeLabels[service.serviceType] ?? service.serviceType,
    duration: service.duration,
    price: service.price,
    implementationModel: service.implementationModel,
    industry,
    capability:
      COLLECTION_CAPABILITY[service.collection] ??
      COLLECTION_CAPABILITY.experience,
  };
}

function dedupeFaqs(faqs: ServiceFaq[]): ServiceFaq[] {
  const seen = new Set<string>();
  return faqs.filter((faq) => {
    const key = faq.question.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function getServiceFaqsContent(service: ServiceProduct): ServiceFaqsContent {
  const ctx = buildContext(service);
  const typeBuilder =
    TYPE_FAQ_BUILDERS[ctx.serviceType] ?? TYPE_FAQ_BUILDERS.advisory;
  const overrideKey = `${ctx.solutionKey}|${ctx.serviceType}`;
  const solutionOverride = SOLUTION_FAQ_OVERRIDES[overrideKey];

  const baseFaqs = typeBuilder(ctx);
  const faqs = dedupeFaqs(
    solutionOverride
      ? [solutionOverride, ...baseFaqs.slice(1)]
      : baseFaqs
  ).slice(0, MAX_FAQS);

  const intro =
    ctx.serviceType === "bundle"
      ? `Key questions about the ${ctx.solution} transformation bundle.`
      : `Key questions about the ${ctx.solution} ${ctx.serviceTypeLabel.toLowerCase()} service.`;

  return { intro, faqs };
}
