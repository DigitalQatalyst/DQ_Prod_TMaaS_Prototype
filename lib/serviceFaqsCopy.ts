import { marketplaceServiceTypeLabels } from "@/data/marketplaceNavigation";
import {
  getServiceSolutionName,
  getSolutionDomainPhrase,
  resolveSolutionKey,
} from "@/lib/variantSeoCopy";
import type { ServiceProduct } from "@/lib/types/serviceProduct";

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
  domain: string;
  serviceType: string;
  serviceTypeLabel: string;
  duration: string;
  price: string;
  implementationModel: string;
  capability: string;
}

const COLLECTION_CAPABILITY: Record<string, string> = {
  experience: "customer touchpoints and engagement",
  operations: "workflow efficiency and productivity",
  security: "secure delivery, platform reliability, and operational governance",
  ai: "data, analytics, and intelligent automation",
  bundles: "end-to-end capability delivery",
};

const SOLUTION_FAQ_FOCUS: Record<string, string> = {
  "online web presence": "journeys, content, conversion paths, and AI readiness",
  "online social presence": "audience engagement, publishing workflows, and campaign performance",
  "mobile apps": "user journeys, retention, accessibility, and mobile AI features",
  "physical channels": "phygital touchpoints, branch journeys, and connected service paths",
  "integrated experience": "cross-channel journeys, personalisation, and experience orchestration",
  "crm solutions": "customer data, sales and service workflows, and CRM platform fit",
  "marketing solutions": "campaign operations, audience targeting, and marketing automation",
  "smart sales & quotation": "quoting workflows, pricing governance, and pipeline quality",
  "customer support & success": "support channels, service levels, and knowledge management",
  "digital workplace": "collaboration tools, productivity workflows, and adoption",
  "business process automation": "manual handoffs, workflow automation, and process governance",
  "specialised operations": "domain-specific workflows, controls, and operational performance",
  "enterprise operations": "cross-functional processes, data flows, and enterprise coordination",
  "governance, risk & compliance": "controls, risk exposure, and compliance posture",
  "enterprise resource planning": "finance, supply chain, and core ERP processes",
  "workforce management": "scheduling, capacity planning, and workforce systems",
  "enterprise data platform": "data quality, governance, pipelines, and platform scalability",
  "business intelligence & analytics": "KPIs, reporting trust, and analytics adoption",
  "enterprise ai & automation": "AI use-case portfolio, governance, and production readiness",
  "technology governance": "architecture decisions, standards adoption, and portfolio oversight",
  "devsecops automation": "CI/CD pipelines, security gates, and release quality",
  "it operations & support": "incident management, service catalogues, and IT service delivery",
  "farming operations": "field operations, yield data, and agribusiness workflows",
  "manufacturing operations": "production lines, quality control, and plant systems",
  "infrastructure operations": "asset maintenance, safety controls, and infrastructure visibility",
  "government operations": "citizen services, policy delivery, and public sector workflows",
  "hospitality operations": "guest journeys, property operations, and service consistency",
  "retail operations": "store execution, inventory accuracy, and omnichannel handoffs",
  "service operations": "field service dispatch, job execution, and customer communication",
  "logistics operations": "routing, warehouse flows, and supply chain visibility",
  "wellness operations": "client booking, care coordination, and clinic workflows",
};

const EXACT_FAQ_OVERRIDES: Record<string, ServiceFaq> = {
  "online web presence|advisory": {
    question: "What does the web presence assessment evaluate?",
    answer:
      "Brand alignment, user experience, content quality, accessibility, performance, and conversion pathways, with prioritised improvements grounded in best practice.",
  },
  "enterprise data platform|advisory": {
    question: "What does the data platform assessment cover?",
    answer:
      "Data quality, governance maturity, pipeline health, platform architecture, and AI readiness, with a prioritised roadmap for a trusted enterprise data platform.",
  },
  "digital workplace|design": {
    question: "What does the digital workplace design include?",
    answer:
      "Collaboration workflows, tool standards, integration requirements, adoption planning, and implementation-ready specifications for your workplace platforms.",
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
  "devsecops automation|advisory": {
    question: "What does the DevSecOps assessment review?",
    answer:
      "Pipeline maturity, security gate placement, release cadence, environment controls, and compliance automation across your software delivery lifecycle.",
  },
};

function getStartedFaq(ctx: FaqContext): ServiceFaq {
  return {
    question: "How do we get started?",
    answer:
      ctx.price === "Free"
        ? "Request a consultation or submit a contact form. The DigitalQatalyst team will confirm scope and next steps before work begins."
        : `Request a quote or book a consultation. The DigitalQatalyst team will share scope, timeline, and commercial terms (reference price: ${ctx.price}, ${ctx.duration}).`,
  };
}

function buildPrimaryFaq(ctx: FaqContext): ServiceFaq {
  const overrideKey = `${ctx.solutionKey}|${ctx.serviceType}`;
  const exactOverride = EXACT_FAQ_OVERRIDES[overrideKey];
  if (exactOverride) return exactOverride;

  const focus = SOLUTION_FAQ_FOCUS[ctx.solutionKey] ?? ctx.capability;
  const questions: Record<string, string> = {
    advisory: `What does the ${ctx.solution} Assess cover?`,
    design: `What is included in the ${ctx.solution} Design scope?`,
    ai_design: `What does the ${ctx.solution} AI Design engagement include?`,
    deploy: `What is included in the ${ctx.solution} Deploy implementation?`,
    ai_deploy: `What does the ${ctx.solution} AI Deploy implementation include?`,
    manage: `What is covered by the ${ctx.solution} Managed service?`,
  };

  const answers: Record<string, string> = {
    advisory: `We evaluate ${focus} for ${ctx.domain}, identify improvement opportunities, and produce prioritised recommendations aligned to your goals. Scope is confirmed during intake with the DigitalQatalyst team.`,
    design: `Discovery, experience and workflow design, governance alignment, and implementation-ready specifications covering ${focus}. Exact activities are agreed at kick-off.`,
    ai_design: `Validated AI use cases, responsible workflows, guardrails, and deployment-ready specifications for ${focus}. Human oversight and governance are designed in before build.`,
    deploy: `Build, integration, quality assurance, and go-live readiness for ${focus}. Acceptance criteria and phased milestones are agreed before development begins.`,
    ai_deploy: `Production deployment with orchestration, monitoring, safety controls, and operational handover for ${focus}. Compliance checks are validated before go-live.`,
    manage: `SLA-backed operations, monitoring, incident management, and continuous optimisation for ${focus}. Service levels and escalation paths are agreed at onboarding.`,
  };

  return {
    question: questions[ctx.serviceType] ?? `What does the ${ctx.solution} service cover?`,
    answer: answers[ctx.serviceType] ?? answers["advisory"]!,
  };
}

function buildSecondaryFaqs(ctx: FaqContext): ServiceFaq[] {
  const byType: Record<string, ServiceFaq[]> = {
    advisory: [
      {
        question: "What deliverables will we receive?",
        answer:
          "Executive-ready findings, prioritised opportunity areas, and actionable recommendations to inform design, investment, and delivery decisions.",
      },
      {
        question: "How long does this engagement take?",
        answer: `Delivered over ${ctx.duration} via ${ctx.implementationModel}. Timelines may adjust based on scope and stakeholder availability.`,
      },
      {
        question: "What happens after the assessment?",
        answer: `Findings can inform a ${ctx.solution} Design engagement, internal planning, or a follow-on TMaaS service. There is no obligation to proceed.`,
      },
    ],
    design: [
      {
        question: "What deliverables will we receive?",
        answer:
          "Journey definitions, design specifications, prototypes or wireframes where applicable, and a delivery backlog your teams can execute against.",
      },
      {
        question: "How involved does our team need to be?",
        answer:
          "We run structured workshops and review cycles with your product owners, subject-matter experts, and brand or governance stakeholders throughout the engagement.",
      },
      {
        question: "How long does this engagement take?",
        answer: `Runs over ${ctx.duration} through ${ctx.implementationModel}, with milestones agreed at kick-off.`,
      },
    ],
    ai_design: [
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
        question: "How long does this engagement take?",
        answer: `Spans ${ctx.duration} under ${ctx.implementationModel}.`,
      },
    ],
    deploy: [
      {
        question: "What handover and support is included?",
        answer:
          "Knowledge transfer, operational documentation, and post-launch stabilisation support. Ongoing managed operations can be added separately if needed.",
      },
      {
        question: "How long does implementation take?",
        answer: `Delivered over ${ctx.duration} via ${ctx.implementationModel}, with phased milestones and go-live checkpoints.`,
      },
      {
        question: "How is quality assured?",
        answer:
          "Structured testing, acceptance validation, and SLA-backed quality controls throughout build and launch.",
      },
    ],
    ai_deploy: [
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
        question: "How long does deployment take?",
        answer: `Runs over ${ctx.duration} through ${ctx.implementationModel}.`,
      },
    ],
    manage: [
      {
        question: "What SLAs apply?",
        answer:
          "Availability, response times, and escalation paths agreed at onboarding. The DigitalQatalyst team shares full SLA detail in the commercial proposal.",
      },
      {
        question: "How do we request changes or enhancements?",
        answer:
          "Changes are raised through TMaaS governance workflows, assessed for impact, and delivered through agreed change windows with transparent reporting.",
      },
      {
        question: "What is the engagement model?",
        answer: `Operates on a ${ctx.duration} model via ${ctx.implementationModel}.`,
      },
    ],
  };

  return byType[ctx.serviceType] ?? byType["advisory"]!;
}

function buildContext(service: ServiceProduct): FaqContext {
  const solution = getServiceSolutionName(service.standardName);
  const solutionKey = resolveSolutionKey(service.standardName);

  return {
    solution,
    solutionKey,
    domain: getSolutionDomainPhrase(service.standardName),
    serviceType: service.serviceType,
    serviceTypeLabel:
      marketplaceServiceTypeLabels[service.serviceType] ?? service.serviceType,
    duration: service.duration,
    price: service.price,
    implementationModel: service.implementationModel,
    capability:
      COLLECTION_CAPABILITY[service.collection] ?? COLLECTION_CAPABILITY["experience"]!,
  };
}

export function buildServiceFaqsContent(service: ServiceProduct): ServiceFaqsContent {
  const ctx = buildContext(service);
  const intro = `Key questions about the ${ctx.solution} ${ctx.serviceTypeLabel.toLowerCase()} service.`;

  const faqs = [
    buildPrimaryFaq(ctx),
    ...buildSecondaryFaqs(ctx),
    getStartedFaq(ctx),
  ].slice(0, MAX_FAQS);

  return { intro, faqs };
}
