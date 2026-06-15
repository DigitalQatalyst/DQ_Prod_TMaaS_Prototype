import type { ServiceProduct } from "@/lib/types/serviceProduct";

export type WhyItMattersStateItem = { title: string; description: string };

export type WhyItMattersContent = {
  hook: string;
  problemParagraph: string;
  before: { eyebrow: string; title: string; items: WhyItMattersStateItem[] };
  after: { eyebrow: string; title: string; items: WhyItMattersStateItem[] };
};

type ServiceTypeKey =
  | "advisory"
  | "design"
  | "ai_design"
  | "deploy"
  | "ai_deploy"
  | "manage";

type TypeBlock = {
  problemParagraph: string;
  gaps: WhyItMattersStateItem[];
  outcomes: WhyItMattersStateItem[];
};

type SolutionProfile = {
  hook: string;
  advisory: TypeBlock;
  design: TypeBlock;
};

const BEFORE_EYEBROW = "Without this service";
const BEFORE_TITLE = "Typical gaps";
const AFTER_EYEBROW = "With this service";
const AFTER_TITLE = "What changes";

function gap(title: string, description: string): WhyItMattersStateItem {
  return { title, description };
}

function resolveSolutionKey(standardName: string): string {
  const base = standardName.replace(" (High-Impact)", "");
  const match = base.match(
    /^(.+?)\s+-\s+(?:Assess|Design|AI Design|Deploy|AI Deploy|Managed|Implementation|AI Implementation|Managed Service)$/
  );
  return (match?.[1] ?? base).trim().toLowerCase();
}

function aiDesignBlock(noun: string, context: string): TypeBlock {
  return {
    problemParagraph: `Many organisations apply AI to ${context} without validated use cases, unclear guardrails, or specifications ready for controlled deployment. This AI design engagement defines responsible workflows and deployment-ready specifications.`,
    gaps: [
      gap(
        "Unvalidated AI use cases",
        `AI ambitions for ${noun} lack structured validation against business value and feasibility.`
      ),
      gap(
        "Missing guardrails",
        "Responsible AI controls and human-in-the-loop workflows are not yet defined."
      ),
      gap(
        "Deployment uncertainty",
        "Teams cannot move from concept to build without clear specifications and risk controls."
      ),
    ],
    outcomes: [
      gap(
        "Validated use cases",
        `AI opportunities for ${noun} are prioritised with clear value hypotheses and success criteria.`
      ),
      gap(
        "Responsible workflows",
        "Human oversight, safety controls, and governance are designed into every workflow."
      ),
      gap(
        "Deployment-ready designs",
        "Specifications and prototypes de-risk investment and accelerate production deployment."
      ),
    ],
  };
}

function deployBlock(noun: string, context: string): TypeBlock {
  return {
    problemParagraph: `Many organisations stall between approved designs and production for ${context}, with integration gaps, quality risks, and delayed go-live. This implementation delivers configured, tested capabilities with structured handover.`,
    gaps: [
      gap(
        "Stalled implementation",
        `Approved designs for ${noun} sit idle while teams struggle to coordinate build and integration.`
      ),
      gap(
        "Quality and integration risk",
        "Testing gaps and platform dependencies threaten go-live timelines and stability."
      ),
      gap(
        "Unclear handover",
        "Operations teams lack the documentation and knowledge transfer needed to run live systems."
      ),
    ],
    outcomes: [
      gap(
        "Production-ready delivery",
        "Capabilities are built, tested, and validated against agreed acceptance criteria."
      ),
      gap(
        "Integrated platforms",
        "Solutions are deployed with security, governance, and platform requirements met."
      ),
      gap(
        "Confident go-live",
        "Structured handover equips your teams to operate and evolve the capability."
      ),
    ],
  };
}

function aiDeployBlock(noun: string, context: string): TypeBlock {
  return {
    problemParagraph: `Many AI initiatives for ${context} fail to reach production, blocked by integration complexity, safety concerns, and missing operational readiness. This AI implementation deploys governed capabilities with monitoring and handover built in.`,
    gaps: [
      gap(
        "AI stuck in pilot",
        `Promising AI designs for ${noun} fail to reach production due to integration and operational barriers.`
      ),
      gap(
        "Safety and compliance gaps",
        "Monitoring, auditability, and responsible AI controls are not yet in place."
      ),
      gap(
        "Operational blind spots",
        "Teams lack runbooks and performance visibility for live AI capabilities."
      ),
    ],
    outcomes: [
      gap(
        "Live AI capabilities",
        "AI is deployed in production with orchestration and monitoring built in."
      ),
      gap(
        "Governed operations",
        "Safety controls, compliance checks, and audit trails support responsible use at scale."
      ),
      gap(
        "Operational readiness",
        "Runbooks and handover materials equip teams to manage AI in production."
      ),
    ],
  };
}

function manageBlock(noun: string, context: string): TypeBlock {
  return {
    problemParagraph: `Many organisations struggle to sustain performance across ${context} after go-live, with reactive support, rising costs, and declining platform value. This managed service provides SLA-backed operations and continuous improvement.`,
    gaps: [
      gap(
        "Reactive operations",
        `${noun} issues are addressed after impact, not prevented through proactive management.`
      ),
      gap(
        "Declining performance",
        "Platform value erodes without continuous optimisation and lifecycle governance."
      ),
      gap(
        "Unpredictable support",
        "Service levels and escalation paths are unclear when teams need help most."
      ),
    ],
    outcomes: [
      gap(
        "SLA-backed operations",
        "Predictable service levels and structured incident management keep platforms running."
      ),
      gap(
        "Continuous optimisation",
        "Proactive monitoring and improvement sustain performance and user satisfaction."
      ),
      gap(
        "Lifecycle governance",
        "Regular reviews and reporting align platform evolution with business priorities."
      ),
    ],
  };
}

const SOLUTION_PROFILES: Record<string, SolutionProfile> = {
  "online web presence": {
    hook: "Your website is often the first place customers judge whether to trust, engage, or leave.",
    advisory: {
      problemParagraph:
        "Many organisations run web estates with inconsistent journeys, weak conversion paths, and no clear view of AI readiness. This assessment gives you evidence-led priorities your leadership team can act on.",
      gaps: [
        gap(
          "Fragmented journeys",
          "Customers hit dead ends between discovery, content, and conversion."
        ),
        gap(
          "Weak conversion signals",
          "Teams optimise pages without shared metrics or testable hypotheses."
        ),
        gap(
          "No AI readiness view",
          "Personalisation and assistant use cases are discussed without a practical baseline."
        ),
      ],
      outcomes: [
        gap(
          "Journey-led priorities",
          "You know which paths to fix first across content, UX, and conversion."
        ),
        gap(
          "Clear improvement backlog",
          "Gaps are ranked for design, investment, and delivery decisions."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations are structured for governance review and next-stage funding."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations plan web changes without aligned journeys, experience standards, or specifications implementation teams can build against. This design engagement turns web goals into user-centred designs and build-ready specifications.",
      gaps: [
        gap(
          "Undefined journey direction",
          "Priority web journeys are unclear, making it hard to align teams and stakeholders."
        ),
        gap(
          "Inconsistent experience standards",
          "Brand, UX, and technical patterns are applied unevenly across pages and flows."
        ),
        gap(
          "Build ambiguity",
          "Delivery teams lack the specifications needed to implement with confidence."
        ),
      ],
      outcomes: [
        gap(
          "User-centred web designs",
          "Experiences are designed around real user needs with clear journey definitions."
        ),
        gap(
          "Brand-aligned patterns",
          "Visual systems and interaction standards reflect your brand with consistency."
        ),
        gap(
          "Implementation-ready specs",
          "Build teams receive clear specifications that reduce rework and accelerate delivery."
        ),
      ],
    },
  },
  "online social presence": {
    hook: "Your social channels are where audiences form first impressions and build ongoing relationships.",
    advisory: {
      problemParagraph:
        "Many organisations run social programmes with inconsistent publishing, weak audience insight, and no clear view of AI-enabled engagement. This assessment gives you evidence-led priorities for social strategy and investment.",
      gaps: [
        gap(
          "Fragmented publishing",
          "Content and campaigns run across channels without a coordinated audience model."
        ),
        gap(
          "Limited audience insight",
          "Teams post without shared metrics on reach, engagement, or conversion impact."
        ),
        gap(
          "Unclear AI opportunities",
          "Automation and content intelligence are discussed without a practical readiness baseline."
        ),
      ],
      outcomes: [
        gap(
          "Channel-led priorities",
          "You know which audiences, formats, and journeys to improve first."
        ),
        gap(
          "Ranked improvement plan",
          "Gaps are ordered for design, tooling, and campaign investment."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations are structured for governance review and next-stage funding."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations launch social initiatives without defined audience journeys, campaign structures, or specifications teams can operationalise. This design engagement turns social goals into actionable strategies and build-ready specifications.",
      gaps: [
        gap(
          "Undefined audience journeys",
          "Engagement paths from awareness to action are unclear across channels."
        ),
        gap(
          "Inconsistent campaign design",
          "Publishing workflows and governance vary by team and platform."
        ),
        gap(
          "Operational ambiguity",
          "Teams lack playbooks and specs to run programmes at scale."
        ),
      ],
      outcomes: [
        gap(
          "Audience-centred strategies",
          "Journeys and content models reflect how your audiences actually engage."
        ),
        gap(
          "Aligned campaign structures",
          "Publishing, moderation, and governance requirements are defined upfront."
        ),
        gap(
          "Implementation-ready artefacts",
          "Teams receive specifications and workflows they can execute against."
        ),
      ],
    },
  },
  "mobile apps": {
    hook: "Your mobile apps are where users engage most deeply, and where experience gaps have the greatest impact.",
    advisory: {
      problemParagraph:
        "Many organisations operate mobile apps with inconsistent journeys, weak retention signals, and no clear view of AI-enabled features. This assessment maps maturity and returns prioritised improvements your product and technology leaders can act on.",
      gaps: [
        gap(
          "Fragmented user journeys",
          "Users encounter friction across onboarding, core tasks, and support paths."
        ),
        gap(
          "Weak performance signals",
          "Teams lack shared metrics on retention, conversion, and accessibility."
        ),
        gap(
          "No AI feature baseline",
          "Assistant and personalisation ideas are discussed without a practical readiness view."
        ),
      ],
      outcomes: [
        gap(
          "Journey-led priorities",
          "You know which flows to fix first across UX, performance, and engagement."
        ),
        gap(
          "Clear product backlog",
          "Gaps are ranked for design, engineering, and investment decisions."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations are structured for governance review and delivery funding."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations build mobile features without validated journeys, design standards, or specifications engineering teams can implement confidently. This design engagement turns mobile goals into user-centred designs and build-ready specifications.",
      gaps: [
        gap(
          "Undefined experience direction",
          "Target mobile journeys and interaction patterns are unclear across squads."
        ),
        gap(
          "Design inconsistency",
          "UI patterns, accessibility, and platform standards are applied unevenly."
        ),
        gap(
          "Build ambiguity",
          "Engineering teams lack specs, acceptance criteria, and integration detail."
        ),
      ],
      outcomes: [
        gap(
          "User-centred mobile designs",
          "Experiences reflect real user needs with clear flow definitions."
        ),
        gap(
          "Consistent design standards",
          "Patterns and accessibility requirements are defined for iOS, Android, or cross-platform builds."
        ),
        gap(
          "Implementation-ready specs",
          "Engineering receives artefacts that reduce rework and accelerate release cycles."
        ),
      ],
    },
  },
  "physical channels": {
    hook: "Your physical and digital touchpoints must work as one, or customer journeys break at the seams.",
    advisory: {
      problemParagraph:
        "Many organisations run phygital environments with disconnected touchpoints, inconsistent service paths, and no clear view of AI-enabled interactions. This assessment maps gaps and returns prioritised improvements across branches, kiosks, and digital handoffs.",
      gaps: [
        gap(
          "Disconnected touchpoints",
          "Customers repeat steps or lose context between physical and digital channels."
        ),
        gap(
          "Inconsistent service paths",
          "Staff and self-service journeys vary by location without shared standards."
        ),
        gap(
          "No intelligent interaction baseline",
          "Routing, kiosk, and assistant opportunities are unclear and untested."
        ),
      ],
      outcomes: [
        gap(
          "Unified journey priorities",
          "You know which phygital paths to fix first across locations and channels."
        ),
        gap(
          "Ranked improvement plan",
          "Gaps are ordered for design, technology, and operational investment."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations support governance review and staged transformation funding."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations upgrade physical channels without integrated journey design, service standards, or specifications operations teams can deploy. This design engagement defines connected experiences across kiosks, branches, and digital touchpoints.",
      gaps: [
        gap(
          "Siloed channel design",
          "Physical and digital experiences are planned without a shared customer model."
        ),
        gap(
          "Undefined service standards",
          "Staff workflows, signage, and digital handoffs lack consistent patterns."
        ),
        gap(
          "Deployment ambiguity",
          "Operations teams lack specs to roll out changes across locations."
        ),
      ],
      outcomes: [
        gap(
          "Integrated experience designs",
          "Journeys connect physical and digital touchpoints with clear handoffs."
        ),
        gap(
          "Operational standards",
          "Service paths, staffing models, and technology requirements are defined upfront."
        ),
        gap(
          "Rollout-ready specifications",
          "Teams receive artefacts they can pilot and scale across locations."
        ),
      ],
    },
  },
  "integrated experience": {
    hook: "Connected digital experiences are how customers judge your brand, across every channel and journey.",
    advisory: {
      problemParagraph:
        "Many organisations deliver experiences through disconnected channels, inconsistent personalisation, and no single view of journey performance. This assessment maps cross-channel gaps and returns prioritised improvements your CX and digital leaders can act on.",
      gaps: [
        gap(
          "Channel fragmentation",
          "Customers receive inconsistent messaging and service across touchpoints."
        ),
        gap(
          "Weak journey measurement",
          "Teams optimise channels in isolation without shared journey metrics."
        ),
        gap(
          "Limited personalisation maturity",
          "Targeting and orchestration capabilities are unclear and unevenly adopted."
        ),
      ],
      outcomes: [
        gap(
          "Cross-channel priorities",
          "You know which journeys and integrations to fix first."
        ),
        gap(
          "Ranked experience backlog",
          "Gaps are ordered for design, platform, and investment decisions."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations are structured for governance and staged delivery funding."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations plan integrated experiences without orchestration models, personalisation standards, or specifications platform teams can implement. This design engagement defines connected journeys and build-ready experience specifications.",
      gaps: [
        gap(
          "Undefined orchestration model",
          "Journey triggers, content rules, and channel handoffs are not designed end to end."
        ),
        gap(
          "Inconsistent personalisation",
          "Audience segments and experience rules vary by channel and team."
        ),
        gap(
          "Platform ambiguity",
          "Implementation teams lack specs for integration, data, and governance."
        ),
      ],
      outcomes: [
        gap(
          "Connected journey designs",
          "Experiences are mapped across channels with clear orchestration logic."
        ),
        gap(
          "Personalisation standards",
          "Segmentation, content, and governance rules are defined upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Platform teams receive artefacts that accelerate integrated delivery."
        ),
      ],
    },
  },
  "crm solutions": {
    hook: "Your CRM is the backbone of how you understand, serve, and retain customers.",
    advisory: {
      problemParagraph:
        "Many organisations run CRM platforms with fragmented customer data, inconsistent sales and service processes, and limited insight into automation opportunities. This assessment maps maturity and returns a prioritised CRM improvement roadmap.",
      gaps: [
        gap(
          "Incomplete customer view",
          "Teams work from conflicting records because data quality and ownership are unclear."
        ),
        gap(
          "Process inconsistency",
          "Sales, service, and marketing workflows vary by team without shared standards."
        ),
        gap(
          "Underused platform capability",
          "Integrations, automation, and reporting potential are not fully understood."
        ),
      ],
      outcomes: [
        gap(
          "Shared CRM maturity view",
          "Leadership sees where data, process, and platform readiness stand today."
        ),
        gap(
          "Prioritised improvement plan",
          "Initiatives are ordered by customer impact, dependency, and feasibility."
        ),
        gap(
          "Investment clarity",
          "Your commercial and technology leaders can fund the right CRM fixes first."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations customise CRM without aligned process design, data models, or specifications delivery teams can implement. This design engagement turns CRM goals into user-centred workflows and build-ready specifications.",
      gaps: [
        gap(
          "Undefined process models",
          "Sales, service, and marketing journeys are not designed against a shared customer lifecycle."
        ),
        gap(
          "Data model gaps",
          "Fields, integrations, and ownership rules lack consistent definitions."
        ),
        gap(
          "Build ambiguity",
          "Admins and developers lack specs to configure and integrate with confidence."
        ),
      ],
      outcomes: [
        gap(
          "Aligned CRM workflows",
          "Processes reflect how teams actually sell, serve, and retain customers."
        ),
        gap(
          "Consistent data standards",
          "Models, integrations, and governance rules are defined upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Delivery teams receive configuration and integration artefacts they can execute."
        ),
      ],
    },
  },
  "marketing solutions": {
    hook: "Your marketing platforms determine how effectively you reach, engage, and convert audiences.",
    advisory: {
      problemParagraph:
        "Many organisations run marketing stacks with siloed campaigns, weak attribution, and no clear view of automation or AI readiness. This assessment maps gaps and returns prioritised improvements your marketing and technology leaders can act on.",
      gaps: [
        gap(
          "Siloed campaign execution",
          "Channels operate without shared audience data or coordinated journeys."
        ),
        gap(
          "Weak attribution",
          "Teams cannot connect spend, engagement, and conversion with confidence."
        ),
        gap(
          "Automation blind spots",
          "Personalisation and intelligence capabilities are discussed without a practical baseline."
        ),
      ],
      outcomes: [
        gap(
          "Channel and journey priorities",
          "You know which capabilities and integrations to improve first."
        ),
        gap(
          "Ranked marketing backlog",
          "Gaps are ordered for design, platform, and budget decisions."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations support governance review and investment planning."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations buy marketing tools without journey design, audience models, or specifications teams can operationalise. This design engagement turns marketing goals into campaign structures and build-ready specifications.",
      gaps: [
        gap(
          "Undefined audience models",
          "Segmentation, triggers, and content rules are inconsistent across channels."
        ),
        gap(
          "Campaign design gaps",
          "Workflows for planning, approval, and publishing lack shared standards."
        ),
        gap(
          "Integration ambiguity",
          "Teams lack specs to connect CRM, analytics, and channel platforms."
        ),
      ],
      outcomes: [
        gap(
          "Aligned campaign designs",
          "Journeys and audiences are defined with clear orchestration logic."
        ),
        gap(
          "Consistent operating standards",
          "Governance, data, and workflow requirements are set upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Teams receive artefacts that accelerate platform configuration and integration."
        ),
      ],
    },
  },
  "smart sales & quotation": {
    hook: "Your sales and quotation processes directly shape revenue velocity and customer confidence.",
    advisory: {
      problemParagraph:
        "Many organisations run sales and quoting with manual steps, inconsistent pricing logic, and limited visibility into pipeline quality. This assessment maps process and platform gaps and returns prioritised improvements your commercial leaders can act on.",
      gaps: [
        gap(
          "Manual quoting friction",
          "Teams rebuild quotes from spreadsheets instead of governed product and pricing rules."
        ),
        gap(
          "Inconsistent sales process",
          "Stages, approvals, and handoffs vary by team without shared standards."
        ),
        gap(
          "Weak pipeline insight",
          "Forecasting relies on incomplete data and subjective updates."
        ),
      ],
      outcomes: [
        gap(
          "Process and platform priorities",
          "You know which quoting and sales capabilities to fix first."
        ),
        gap(
          "Ranked improvement backlog",
          "Gaps are ordered for design, CRM integration, and investment."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations support governance review and revenue operations funding."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations digitise sales without designed quoting workflows, pricing governance, or specifications CRM and ERP teams can implement. This design engagement defines sales journeys and build-ready specifications.",
      gaps: [
        gap(
          "Undefined quote-to-cash flows",
          "Pricing, approval, and contract paths are not designed end to end."
        ),
        gap(
          "Governance gaps",
          "Discount rules, product bundles, and approvals lack clear controls."
        ),
        gap(
          "Build ambiguity",
          "Platform teams lack specs for CRM, ERP, and document integration."
        ),
      ],
      outcomes: [
        gap(
          "Designed sales workflows",
          "Quoting and pipeline stages reflect how commercial teams actually sell."
        ),
        gap(
          "Pricing and approval standards",
          "Rules and controls are defined for governance and auditability."
        ),
        gap(
          "Implementation-ready specs",
          "Delivery teams receive artefacts that accelerate CRM and ERP alignment."
        ),
      ],
    },
  },
  "customer support & success": {
    hook: "Customer support is where brand promises are kept, or broken, at scale.",
    advisory: {
      problemParagraph:
        "Many organisations run support operations with fragmented channels, inconsistent service levels, and limited insight into automation opportunities. This assessment maps support maturity and returns prioritised improvements your CX and operations leaders can act on.",
      gaps: [
        gap(
          "Fragmented support channels",
          "Customers repeat information across chat, email, phone, and self-service."
        ),
        gap(
          "Inconsistent service levels",
          "Response targets, escalation paths, and knowledge bases vary by team."
        ),
        gap(
          "Limited automation view",
          "Deflection, routing, and assistant use cases lack a practical readiness baseline."
        ),
      ],
      outcomes: [
        gap(
          "Support journey priorities",
          "You know which channels, processes, and tools to improve first."
        ),
        gap(
          "Ranked service backlog",
          "Gaps are ordered for design, platform, and staffing investment."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations support governance review and service transformation funding."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations upgrade support tools without designed service journeys, knowledge models, or specifications operations teams can run. This design engagement defines support experiences and build-ready specifications.",
      gaps: [
        gap(
          "Undefined service journeys",
          "Intake, resolution, and escalation paths are unclear across channels."
        ),
        gap(
          "Knowledge fragmentation",
          "Articles, macros, and training content are inconsistent or out of date."
        ),
        gap(
          "Operational ambiguity",
          "Teams lack specs for routing, integrations, and SLA reporting."
        ),
      ],
      outcomes: [
        gap(
          "Aligned support designs",
          "Journeys reflect how customers seek help and how agents resolve issues."
        ),
        gap(
          "Consistent knowledge standards",
          "Content, taxonomy, and governance rules are defined upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Operations teams receive artefacts they can configure and train against."
        ),
      ],
    },
  },
  "digital workplace": {
    hook: "Your digital workplace is how teams collaborate, decide, and deliver every day.",
    advisory: {
      problemParagraph:
        "Many organisations adopt workplace tools without aligned collaboration models, adoption metrics, or a clear view of productivity gaps. This assessment maps digital workplace maturity and returns prioritised improvements your operations and IT leaders can act on.",
      gaps: [
        gap(
          "Tool sprawl",
          "Collaboration happens across disconnected apps with no shared workflow model."
        ),
        gap(
          "Uneven adoption",
          "Teams use platforms differently, reducing productivity gains."
        ),
        gap(
          "Unclear productivity signals",
          "Leaders lack evidence on where friction costs time and decision quality."
        ),
      ],
      outcomes: [
        gap(
          "Workplace priority map",
          "You know which tools, workflows, and integrations to improve first."
        ),
        gap(
          "Ranked improvement backlog",
          "Gaps are ordered for design, change management, and investment."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations support governance review and workplace funding."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations adopt tools without aligned workflows, adoption plans, or specifications that implementation teams can build against. This design engagement turns workplace goals into user-centred designs and build-ready specifications.",
      gaps: [
        gap(
          "Tool sprawl",
          "Collaboration happens across disconnected apps with no shared workflow model."
        ),
        gap(
          "Uneven adoption",
          "Teams use platforms differently, reducing productivity gains."
        ),
        gap(
          "Build ambiguity",
          "Delivery teams lack journey maps, standards, and specs to implement with confidence."
        ),
      ],
      outcomes: [
        gap(
          "Aligned workplace experience",
          "Journeys and workflows reflect how teams actually work."
        ),
        gap(
          "Consistent standards",
          "UX, integration, and governance requirements are defined upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Build teams receive artefacts that reduce rework and accelerate delivery."
        ),
      ],
    },
  },
  "business process automation": {
    hook: "Manual processes and disconnected workflows are among the biggest drains on operational performance.",
    advisory: {
      problemParagraph:
        "Many organisations automate ad hoc tasks without end-to-end process visibility, governance, or a clear view of ROI. This assessment maps automation maturity and returns prioritised improvements your operations leaders can act on.",
      gaps: [
        gap(
          "Manual handoffs",
          "Work stalls between systems because steps are not orchestrated end to end."
        ),
        gap(
          "Process inconsistency",
          "Teams run the same work differently without documented standards."
        ),
        gap(
          "Unclear automation candidates",
          "High-value workflows are not ranked by effort, risk, and return."
        ),
      ],
      outcomes: [
        gap(
          "Process-led priorities",
          "You know which workflows to automate or redesign first."
        ),
        gap(
          "Ranked automation backlog",
          "Candidates are ordered by impact, feasibility, and dependency."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations support governance review and automation investment."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations launch automation without designed workflows, exception handling, or specifications platform teams can implement. This design engagement defines process automation and build-ready specifications.",
      gaps: [
        gap(
          "Undefined workflow models",
          "Triggers, approvals, and exceptions are not designed before build."
        ),
        gap(
          "Integration gaps",
          "Systems of record lack clear APIs, events, and data contracts."
        ),
        gap(
          "Governance ambiguity",
          "Teams lack controls for monitoring, audit, and change management."
        ),
      ],
      outcomes: [
        gap(
          "Designed automation flows",
          "Workflows reflect real operations with clear human-in-the-loop points."
        ),
        gap(
          "Integration standards",
          "Data, events, and platform requirements are defined upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Delivery teams receive artefacts that accelerate reliable automation."
        ),
      ],
    },
  },
  "specialised operations": {
    hook: "Specialised operational capabilities are what differentiate your organisation in complex environments.",
    advisory: {
      problemParagraph:
        "Many organisations run specialised operations with bespoke processes, limited standardisation, and unclear technology fit. This assessment maps operational maturity and returns prioritised improvements your domain leaders can act on.",
      gaps: [
        gap(
          "Bespoke process drift",
          "Critical workflows evolve informally without documented standards."
        ),
        gap(
          "Technology misalignment",
          "Tools do not match the specificity of operational requirements."
        ),
        gap(
          "Limited performance visibility",
          "Leaders lack shared metrics on throughput, quality, and risk."
        ),
      ],
      outcomes: [
        gap(
          "Operational priority map",
          "You know which processes and systems to improve first."
        ),
        gap(
          "Ranked transformation backlog",
          "Gaps are ordered for design, technology, and investment."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations support governance review and programme funding."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations digitise specialised operations without designed workflows, controls, or specifications delivery teams can implement. This design engagement turns operational goals into structured designs and build-ready specifications.",
      gaps: [
        gap(
          "Undefined operational models",
          "Workflows, roles, and controls are not designed against business rules."
        ),
        gap(
          "Inconsistent standards",
          "Teams interpret procedures differently across sites or functions."
        ),
        gap(
          "Build ambiguity",
          "Delivery teams lack specs aligned to domain constraints and compliance."
        ),
      ],
      outcomes: [
        gap(
          "Aligned operational designs",
          "Workflows reflect domain requirements with clear accountability."
        ),
        gap(
          "Consistent control standards",
          "Governance, data, and integration rules are defined upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Teams receive artefacts tailored to specialised operational delivery."
        ),
      ],
    },
  },
  "enterprise operations": {
    hook: "Enterprise operations span the systems and workflows that keep your organisation running at scale.",
    advisory: {
      problemParagraph:
        "Many organisations coordinate enterprise operations across siloed functions, inconsistent data, and overlapping technology investments. This assessment maps operational maturity and returns a prioritised enterprise improvement roadmap.",
      gaps: [
        gap(
          "Functional silos",
          "Operations, finance, and supply teams work from different data and priorities."
        ),
        gap(
          "Process fragmentation",
          "End-to-end workflows break at system and organisational boundaries."
        ),
        gap(
          "Unclear investment focus",
          "Transformation spend is spread without a shared enterprise view."
        ),
      ],
      outcomes: [
        gap(
          "Enterprise priority map",
          "Leadership sees where process, data, and platform gaps matter most."
        ),
        gap(
          "Prioritised improvement plan",
          "Initiatives are ordered by enterprise impact and dependency."
        ),
        gap(
          "Investment clarity",
          "Your operations and technology leaders can fund the right fixes first."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations plan enterprise change without integrated operating models, data standards, or specifications programme teams can deliver. This design engagement defines enterprise workflows and build-ready specifications.",
      gaps: [
        gap(
          "Undefined operating models",
          "Cross-functional processes lack shared design and accountability."
        ),
        gap(
          "Data and integration gaps",
          "Systems of record do not exchange information with clear contracts."
        ),
        gap(
          "Programme ambiguity",
          "Delivery teams lack specs for phased rollout and governance."
        ),
      ],
      outcomes: [
        gap(
          "Integrated process designs",
          "Workflows connect functions with clear handoffs and controls."
        ),
        gap(
          "Enterprise standards",
          "Data, integration, and governance requirements are defined upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Programme teams receive artefacts that accelerate coordinated delivery."
        ),
      ],
    },
  },
  "governance, risk & compliance": {
    hook: "Governance and compliance are not overhead, they are what makes sustainable transformation possible.",
    advisory: {
      problemParagraph:
        "Many organisations run GRC programmes with informal controls, inconsistent policy application, and limited visibility into risk exposure. This assessment maps governance maturity and returns prioritised improvements your risk and compliance leaders can act on.",
      gaps: [
        gap(
          "Informal controls",
          "Policies exist on paper but are not consistently applied in operations."
        ),
        gap(
          "Fragmented risk view",
          "Teams track issues in spreadsheets without a single assurance picture."
        ),
        gap(
          "Compliance blind spots",
          "Regulatory and audit requirements are not mapped to live processes."
        ),
      ],
      outcomes: [
        gap(
          "Shared GRC maturity view",
          "Leadership sees where controls, risk, and compliance posture stand today."
        ),
        gap(
          "Prioritised remediation plan",
          "Gaps are ordered by regulatory exposure, impact, and feasibility."
        ),
        gap(
          "Investment clarity",
          "Your assurance leaders can fund the right control improvements first."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations update policies without designed control frameworks, workflows, or specifications assurance teams can operationalise. This design engagement defines GRC operating models and build-ready specifications.",
      gaps: [
        gap(
          "Undefined control frameworks",
          "Policies are not translated into testable controls and workflows."
        ),
        gap(
          "Inconsistent assurance processes",
          "Testing, evidence, and remediation vary by team and system."
        ),
        gap(
          "Platform ambiguity",
          "Teams lack specs for GRC tooling, data, and reporting integration."
        ),
      ],
      outcomes: [
        gap(
          "Designed control models",
          "Frameworks connect policy to operational controls and owners."
        ),
        gap(
          "Consistent assurance standards",
          "Testing, evidence, and escalation rules are defined upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Teams receive artefacts that accelerate governed GRC operations."
        ),
      ],
    },
  },
  "enterprise resource planning": {
    hook: "Your ERP connects finance, operations, and supply chain, making it foundational to organisational performance.",
    advisory: {
      problemParagraph:
        "Many organisations run ERP landscapes with misaligned modules, master data issues, and unclear upgrade or replacement paths. This assessment maps ERP maturity and returns prioritised improvements your finance and operations leaders can act on.",
      gaps: [
        gap(
          "Master data inconsistency",
          "Finance and operations teams work from conflicting item, vendor, and customer records."
        ),
        gap(
          "Process misalignment",
          "Core workflows do not match how business units actually operate."
        ),
        gap(
          "Upgrade uncertainty",
          "Technical debt and customisation risk obscure the right modernisation path."
        ),
      ],
      outcomes: [
        gap(
          "ERP maturity view",
          "Leadership sees where data, process, and platform readiness stand today."
        ),
        gap(
          "Prioritised roadmap",
          "Initiatives are ordered by business impact, risk, and dependency."
        ),
        gap(
          "Investment clarity",
          "Your leaders can fund stabilisation, optimisation, or transformation first."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations configure ERP without designed process models, data standards, or specifications functional teams can implement. This design engagement defines ERP workflows and build-ready specifications.",
      gaps: [
        gap(
          "Undefined process templates",
          "Order-to-cash, procure-to-pay, and record-to-report paths lack standard design."
        ),
        gap(
          "Data model gaps",
          "Chart of accounts, items, and dimensions lack governance and ownership."
        ),
        gap(
          "Build ambiguity",
          "Functional and technical teams lack specs for configuration and integration."
        ),
      ],
      outcomes: [
        gap(
          "Aligned ERP processes",
          "Workflows reflect how finance and operations need to run at scale."
        ),
        gap(
          "Consistent data standards",
          "Master data and integration rules are defined upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Teams receive artefacts that reduce rework during ERP delivery."
        ),
      ],
    },
  },
  "workforce management": {
    hook: "Workforce systems shape how you deploy talent, manage capacity, and respond to demand.",
    advisory: {
      problemParagraph:
        "Many organisations manage workforce planning with disconnected HR, scheduling, and payroll systems and limited visibility into capacity risk. This assessment maps workforce maturity and returns prioritised improvements your HR and operations leaders can act on.",
      gaps: [
        gap(
          "Siloed workforce data",
          "Scheduling, skills, and attendance live in systems that do not reconcile."
        ),
        gap(
          "Capacity blind spots",
          "Leaders cannot forecast demand against available skills and hours."
        ),
        gap(
          "Compliance risk",
          "Labour rules and roster policies are applied inconsistently."
        ),
      ],
      outcomes: [
        gap(
          "Workforce priority map",
          "You know which processes, data, and platforms to improve first."
        ),
        gap(
          "Ranked improvement backlog",
          "Gaps are ordered for design, integration, and investment."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations support governance review and workforce funding."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations buy workforce tools without designed scheduling models, policy rules, or specifications HR and operations teams can implement. This design engagement defines workforce workflows and build-ready specifications.",
      gaps: [
        gap(
          "Undefined scheduling models",
          "Rostering, skills matching, and approval flows are not designed end to end."
        ),
        gap(
          "Policy fragmentation",
          "Rules for overtime, leave, and compliance vary by site or manager."
        ),
        gap(
          "Integration ambiguity",
          "Teams lack specs for HRIS, payroll, and operations system connections."
        ),
      ],
      outcomes: [
        gap(
          "Aligned workforce designs",
          "Scheduling and capacity models reflect operational reality."
        ),
        gap(
          "Consistent policy standards",
          "Rules and controls are defined for governance and auditability."
        ),
        gap(
          "Implementation-ready specs",
          "Teams receive artefacts that accelerate workforce platform delivery."
        ),
      ],
    },
  },
  "enterprise data platform": {
    hook: "Your data platform is the foundation for reporting, analytics, automation, and every AI initiative you pursue.",
    advisory: {
      problemParagraph:
        "Many organisations hold data across siloed systems with inconsistent quality, weak governance, and pipelines that cannot scale. This assessment maps maturity and returns a prioritised roadmap for a trusted enterprise data platform.",
      gaps: [
        gap(
          "Inconsistent data quality",
          "Reports conflict because definitions and ownership are unclear."
        ),
        gap(
          "Governance gaps",
          "Access, lineage, and stewardship are informal or absent."
        ),
        gap(
          "Platform scaling risk",
          "Pipelines and architecture cannot support analytics or AI at scale."
        ),
      ],
      outcomes: [
        gap(
          "Shared maturity view",
          "Leadership sees where governance, quality, and platform readiness stand today."
        ),
        gap(
          "Prioritised platform roadmap",
          "Initiatives are ordered by impact, dependency, and feasibility."
        ),
        gap(
          "Investment clarity",
          "Your data and technology leaders can fund the right fixes first."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations plan data platforms without aligned architecture, governance models, or specifications engineering teams can build against. This design engagement defines data platform blueprints and build-ready specifications.",
      gaps: [
        gap(
          "Undefined platform architecture",
          "Ingestion, storage, and consumption patterns are not designed coherently."
        ),
        gap(
          "Governance design gaps",
          "Catalogues, lineage, and access models lack operational detail."
        ),
        gap(
          "Build ambiguity",
          "Engineering teams lack specs for pipelines, APIs, and platform services."
        ),
      ],
      outcomes: [
        gap(
          "Aligned platform designs",
          "Architecture reflects analytics, AI, and operational data needs."
        ),
        gap(
          "Governance standards",
          "Ownership, quality, and access rules are defined upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Engineering receives artefacts that accelerate platform delivery."
        ),
      ],
    },
  },
  "business intelligence & analytics": {
    hook: "Analytics capability determines whether decisions are driven by evidence, or by assumption.",
    advisory: {
      problemParagraph:
        "Many organisations invest in dashboards without trusted metrics, consistent definitions, or adoption across leadership. This assessment maps analytics maturity and returns prioritised improvements your data and business leaders can act on.",
      gaps: [
        gap(
          "Metric inconsistency",
          "Teams debate numbers because KPIs are defined differently across functions."
        ),
        gap(
          "Low report adoption",
          "Dashboards exist but do not drive decisions in planning and operations."
        ),
        gap(
          "Data trust issues",
          "Source quality and lineage are unclear for critical business metrics."
        ),
      ],
      outcomes: [
        gap(
          "Analytics priority map",
          "You know which metrics, models, and platforms to fix first."
        ),
        gap(
          "Ranked improvement backlog",
          "Gaps are ordered for design, data, and investment decisions."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations support governed analytics transformation funding."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations build reports without designed metric frameworks, semantic models, or specifications analytics teams can implement. This design engagement defines BI solutions and build-ready specifications.",
      gaps: [
        gap(
          "Undefined metric frameworks",
          "KPIs and dimensions lack shared definitions and ownership."
        ),
        gap(
          "Semantic model gaps",
          "Self-service and enterprise reporting pull from inconsistent logic."
        ),
        gap(
          "Delivery ambiguity",
          "Teams lack specs for dashboards, alerts, and data products."
        ),
      ],
      outcomes: [
        gap(
          "Aligned analytics designs",
          "Metrics and models reflect how leaders actually make decisions."
        ),
        gap(
          "Consistent semantic standards",
          "Definitions and governance rules are set upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Analytics teams receive artefacts that accelerate trusted reporting."
        ),
      ],
    },
  },
  "enterprise ai & automation": {
    hook: "AI and automation are reshaping how organisations operate, but only where use cases are validated and governed.",
    advisory: {
      problemParagraph:
        "Many organisations experiment with AI and automation without portfolio governance, risk controls, or a clear view of production readiness. This assessment maps maturity and returns prioritised improvements your technology and business leaders can act on.",
      gaps: [
        gap(
          "Scattered experiments",
          "Pilots run in isolation without shared prioritisation or learning."
        ),
        gap(
          "Weak governance",
          "Risk, ethics, and compliance controls are not applied consistently."
        ),
        gap(
          "Production gap",
          "Promising use cases lack a path from proof of concept to scaled operations."
        ),
      ],
      outcomes: [
        gap(
          "Portfolio priority view",
          "Leadership sees which AI and automation opportunities matter most."
        ),
        gap(
          "Prioritised delivery roadmap",
          "Use cases are ordered by value, feasibility, and risk."
        ),
        gap(
          "Investment clarity",
          "Your leaders can fund governed production capabilities first."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations design AI solutions without validated workflows, responsible controls, or specifications engineering teams can deploy. This design engagement defines AI use cases and build-ready specifications.",
      gaps: [
        gap(
          "Unvalidated use cases",
          "AI ideas lack structured business cases and success criteria."
        ),
        gap(
          "Missing guardrails",
          "Human oversight, monitoring, and safety controls are not designed in."
        ),
        gap(
          "Integration ambiguity",
          "Teams lack specs for data, APIs, and operational handover."
        ),
      ],
      outcomes: [
        gap(
          "Validated AI designs",
          "Use cases include workflow, data, and governance detail."
        ),
        gap(
          "Responsible control standards",
          "Safety and compliance requirements are defined upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Engineering receives artefacts that de-risk production deployment."
        ),
      ],
    },
  },
  "technology governance": {
    hook: "Technology governance is what turns ambitious delivery into sustainable, risk-aware progress.",
    advisory: {
      problemParagraph:
        "Many organisations govern technology informally, with unclear architecture decisions, weak standards adoption, and limited portfolio visibility. This assessment maps governance maturity and returns prioritised improvements your CIO and architecture leaders can act on.",
      gaps: [
        gap(
          "Ad hoc architecture decisions",
          "Standards are bypassed when delivery pressure mounts."
        ),
        gap(
          "Portfolio opacity",
          "Leaders lack a clear view of application health, cost, and risk."
        ),
        gap(
          "Inconsistent guardrails",
          "Security, integration, and lifecycle policies are applied unevenly."
        ),
      ],
      outcomes: [
        gap(
          "Governance maturity view",
          "Leadership sees where standards, portfolio, and controls stand today."
        ),
        gap(
          "Prioritised improvement plan",
          "Initiatives are ordered by risk reduction and delivery enablement."
        ),
        gap(
          "Investment clarity",
          "Your technology leaders can fund the right governance fixes first."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations document governance without designed decision forums, standards catalogues, or specifications platform teams can follow. This design engagement defines technology governance models and build-ready specifications.",
      gaps: [
        gap(
          "Undefined decision rights",
          "Architecture and security approvals lack clear forums and criteria."
        ),
        gap(
          "Standards catalogue gaps",
          "Patterns for integration, data, and security are incomplete or outdated."
        ),
        gap(
          "Operational ambiguity",
          "Teams lack specs for tooling, workflows, and compliance reporting."
        ),
      ],
      outcomes: [
        gap(
          "Designed governance models",
          "Forums, roles, and decision paths are clear and actionable."
        ),
        gap(
          "Consistent standards",
          "Architecture and control requirements are defined upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Platform teams receive artefacts that accelerate governed delivery."
        ),
      ],
    },
  },
  "devsecops automation": {
    hook: "DevSecOps practices determine how fast you can ship, and how confidently you can scale.",
    advisory: {
      problemParagraph:
        "Many organisations deliver software with manual pipelines, late security testing, and inconsistent release practices. This assessment maps DevSecOps maturity and returns prioritised improvements your engineering leaders can act on.",
      gaps: [
        gap(
          "Manual delivery pipelines",
          "Builds and deployments rely on tribal knowledge instead of automation."
        ),
        gap(
          "Late security feedback",
          "Vulnerabilities are found after merge instead of during development."
        ),
        gap(
          "Release inconsistency",
          "Teams ship on different cadences without shared quality gates."
        ),
      ],
      outcomes: [
        gap(
          "Pipeline priority map",
          "You know which toolchain, process, and control gaps to fix first."
        ),
        gap(
          "Ranked improvement backlog",
          "Initiatives are ordered by delivery speed, risk, and dependency."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations support governed engineering transformation funding."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations adopt DevSecOps tools without designed pipelines, policy-as-code models, or specifications platform teams can implement. This design engagement defines delivery workflows and build-ready specifications.",
      gaps: [
        gap(
          "Undefined pipeline models",
          "CI/CD stages, approvals, and environments are not designed end to end."
        ),
        gap(
          "Security control gaps",
          "Scanning, secrets, and policy enforcement lack consistent standards."
        ),
        gap(
          "Platform ambiguity",
          "Teams lack specs for tooling integration and developer experience."
        ),
      ],
      outcomes: [
        gap(
          "Aligned pipeline designs",
          "Workflows balance speed, quality, and security with clear gates."
        ),
        gap(
          "Consistent DevSecOps standards",
          "Controls and policies are defined for repeatable adoption."
        ),
        gap(
          "Implementation-ready specs",
          "Platform teams receive artefacts that accelerate pipeline delivery."
        ),
      ],
    },
  },
  "it operations & support": {
    hook: "IT operations keep critical platforms available, secure, and fit for evolving business needs.",
    advisory: {
      problemParagraph:
        "Many organisations run IT operations reactively, with unclear service catalogues, inconsistent incident practices, and limited capacity planning. This assessment maps operations maturity and returns prioritised improvements your IT leaders can act on.",
      gaps: [
        gap(
          "Reactive incident handling",
          "Outages are managed ad hoc without consistent runbooks and communication."
        ),
        gap(
          "Opaque service catalogue",
          "Business teams do not know what IT provides or how to request it."
        ),
        gap(
          "Capacity blind spots",
          "Infrastructure and support load are not forecast against business demand."
        ),
      ],
      outcomes: [
        gap(
          "Operations priority map",
          "You know which services, processes, and tools to improve first."
        ),
        gap(
          "Ranked improvement backlog",
          "Gaps are ordered for design, automation, and investment."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations support IT service transformation funding."
        ),
      ],
    },
    design: {
      problemParagraph:
        "Many organisations improve IT tools without designed service models, incident workflows, or specifications operations teams can run. This design engagement defines IT service operations and build-ready specifications.",
      gaps: [
        gap(
          "Undefined service models",
          "Request, fulfilment, and escalation paths are not designed consistently."
        ),
        gap(
          "Runbook fragmentation",
          "Operational knowledge lives with individuals instead of governed libraries."
        ),
        gap(
          "Tooling ambiguity",
          "Teams lack specs for ITSM, monitoring, and automation integration."
        ),
      ],
      outcomes: [
        gap(
          "Aligned IT service designs",
          "Workflows reflect how the business consumes technology services."
        ),
        gap(
          "Consistent operational standards",
          "SLAs, runbooks, and escalation rules are defined upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Operations teams receive artefacts they can configure and adopt."
        ),
      ],
    },
  },
};

function sectorOperationsProfile(
  key: string,
  hook: string,
  sector: string,
  advisoryProblem: string,
  designProblem: string
): SolutionProfile {
  return {
    hook,
    advisory: {
      problemParagraph: advisoryProblem,
      gaps: [
        gap(
          "Fragmented operations data",
          `${sector} teams work from disconnected systems without a single operational view.`
        ),
        gap(
          "Inconsistent field processes",
          "Standard operating procedures vary by site, team, or shift."
        ),
        gap(
          "Limited digitisation baseline",
          "Automation and analytics opportunities are unclear and unprioritised."
        ),
      ],
      outcomes: [
        gap(
          "Operational priority map",
          `You know which ${sector.toLowerCase()} processes and systems to improve first.`
        ),
        gap(
          "Ranked improvement backlog",
          "Gaps are ordered for design, technology, and investment."
        ),
        gap(
          "Leadership-ready roadmap",
          "Recommendations support governance review and transformation funding."
        ),
      ],
    },
    design: {
      problemParagraph: designProblem,
      gaps: [
        gap(
          "Undefined operational workflows",
          `${sector} journeys from intake to completion are not designed end to end.`
        ),
        gap(
          "Integration gaps",
          "Field, ERP, and customer systems lack clear data and event contracts."
        ),
        gap(
          "Rollout ambiguity",
          "Teams lack specs to pilot and scale changes across sites."
        ),
      ],
      outcomes: [
        gap(
          "Aligned operational designs",
          `Workflows reflect how ${sector.toLowerCase()} teams actually deliver service.`
        ),
        gap(
          "Consistent standards",
          "Data, integration, and governance requirements are defined upfront."
        ),
        gap(
          "Implementation-ready specs",
          "Delivery teams receive artefacts they can execute across locations."
        ),
      ],
    },
  };
}

const SECTOR_OPERATIONS: Record<string, SolutionProfile> = {
  "farming operations": sectorOperationsProfile(
    "farming operations",
    "Farming operations depend on timely data, coordinated field activity, and resilient supply chain execution.",
    "Agricultural operations",
    "Many agribusinesses run farming operations with manual field coordination, inconsistent yield data, and limited visibility into supply chain risk. This assessment maps operational maturity and returns prioritised improvements your operations leaders can act on.",
    "Many farming organisations digitise operations without designed field workflows, asset models, or specifications teams can deploy across sites. This design engagement defines farming operations and build-ready specifications."
  ),
  "government operations": sectorOperationsProfile(
    "government operations",
    "Public service delivery depends on reliable processes, transparent accountability, and citizen-centred design.",
    "Government service",
    "Many public sector bodies run services with legacy processes, siloed data, and limited visibility into citizen journey performance. This assessment maps operational maturity and returns prioritised improvements programme leaders can act on.",
    "Many government programmes digitise services without designed citizen journeys, policy controls, or specifications delivery teams can implement. This design engagement defines government operations and build-ready specifications."
  ),
  "hospitality operations": sectorOperationsProfile(
    "hospitality operations",
    "Guest experience in hospitality is shaped by every operational handoff, from booking to checkout.",
    "Hospitality operations",
    "Many hospitality operators run properties with disconnected booking, service, and back-office systems and inconsistent guest journey execution. This assessment maps operational maturity and returns prioritised improvements your operations leaders can act on.",
    "Many hospitality groups upgrade systems without designed guest journeys, staff workflows, or specifications property teams can roll out. This design engagement defines hospitality operations and build-ready specifications."
  ),
  "infrastructure operations": sectorOperationsProfile(
    "infrastructure operations",
    "Infrastructure reliability depends on coordinated maintenance, safety controls, and asset visibility.",
    "Infrastructure operations",
    "Many infrastructure operators manage assets with ageing systems, manual maintenance scheduling, and limited predictive insight. This assessment maps operational maturity and returns prioritised improvements your asset and operations leaders can act on.",
    "Many infrastructure programmes modernise operations without designed maintenance workflows, asset models, or specifications field teams can deploy. This design engagement defines infrastructure operations and build-ready specifications."
  ),
  "logistics operations": sectorOperationsProfile(
    "logistics operations",
    "Logistics performance is won or lost on visibility, routing discipline, and handoff accuracy.",
    "Logistics operations",
    "Many logistics organisations run networks with fragmented tracking, inconsistent warehouse processes, and limited end-to-end visibility. This assessment maps operational maturity and returns prioritised improvements your supply chain leaders can act on.",
    "Many logistics operators digitise networks without designed routing workflows, warehouse standards, or specifications operations teams can implement. This design engagement defines logistics operations and build-ready specifications."
  ),
  "manufacturing operations": sectorOperationsProfile(
    "manufacturing operations",
    "Manufacturing performance depends on synchronised production, quality control, and supply coordination.",
    "Manufacturing operations",
    "Many manufacturers run plants with siloed MES, ERP, and quality data and inconsistent production workflows. This assessment maps operational maturity and returns prioritised improvements your plant and operations leaders can act on.",
    "Many factories modernise production without designed line workflows, quality models, or specifications engineering teams can deploy. This design engagement defines manufacturing operations and build-ready specifications."
  ),
  "retail operations": sectorOperationsProfile(
    "retail operations",
    "Retail success depends on consistent store execution, inventory accuracy, and connected customer journeys.",
    "Retail operations",
    "Many retailers run stores and channels with inconsistent stock visibility, promotional execution, and customer handoffs. This assessment maps operational maturity and returns prioritised improvements your retail leaders can act on.",
    "Many retail groups upgrade commerce and store systems without designed omnichannel workflows, inventory models, or specifications teams can roll out. This design engagement defines retail operations and build-ready specifications."
  ),
  "service operations": sectorOperationsProfile(
    "service operations",
    "Service businesses win on scheduling discipline, field execution, and customer communication.",
    "Service operations",
    "Many service organisations coordinate field teams with manual scheduling, disconnected CRM data, and inconsistent job execution. This assessment maps operational maturity and returns prioritised improvements your operations leaders can act on.",
    "Many service businesses digitise operations without designed dispatch workflows, job standards, or specifications field teams can adopt. This design engagement defines service operations and build-ready specifications."
  ),
  "wellness operations": sectorOperationsProfile(
    "wellness operations",
    "Wellness providers depend on seamless booking, care coordination, and compliant client management.",
    "Wellness operations",
    "Many wellness operators run clinics and programmes with fragmented booking, client records, and service delivery workflows. This assessment maps operational maturity and returns prioritised improvements your operations leaders can act on.",
    "Many wellness groups adopt platforms without designed client journeys, practitioner workflows, or specifications teams can implement. This design engagement defines wellness operations and build-ready specifications."
  ),
};

Object.assign(SOLUTION_PROFILES, SECTOR_OPERATIONS);

function contextPhrase(key: string): string {
  const phrases: Record<string, string> = {
    "online web presence": "your web presence",
    "online social presence": "your social channels",
    "mobile apps": "your mobile apps",
    "physical channels": "your phygital touchpoints",
    "integrated experience": "your integrated customer experiences",
    "crm solutions": "your CRM capability",
    "marketing solutions": "your marketing platforms",
    "smart sales & quotation": "your sales and quoting processes",
    "customer support & success": "your customer support operations",
    "digital workplace": "your digital workplace",
    "business process automation": "your business processes",
    "specialised operations": "your specialised operations",
    "enterprise operations": "your enterprise operations",
    "governance, risk & compliance": "your GRC programme",
    "enterprise resource planning": "your ERP landscape",
    "workforce management": "your workforce systems",
    "enterprise data platform": "your enterprise data platform",
    "business intelligence & analytics": "your analytics capability",
    "enterprise ai & automation": "your AI and automation portfolio",
    "technology governance": "your technology governance model",
    "devsecops automation": "your software delivery pipelines",
    "it operations & support": "your IT service operations",
    "farming operations": "your farming operations",
    "government operations": "your government services",
    "hospitality operations": "your hospitality operations",
    "infrastructure operations": "your infrastructure operations",
    "logistics operations": "your logistics network",
    "manufacturing operations": "your manufacturing operations",
    "retail operations": "your retail operations",
    "service operations": "your field service operations",
    "wellness operations": "your wellness operations",
  };
  return phrases[key] ?? `your ${key}`;
}

const TYPE_BUILDERS: Record<
  Exclude<ServiceTypeKey, "advisory" | "design">,
  (key: string) => TypeBlock
> = {
  ai_design: (key) => aiDesignBlock(key, contextPhrase(key)),
  deploy: (key) => deployBlock(key, contextPhrase(key)),
  ai_deploy: (key) => aiDeployBlock(key, contextPhrase(key)),
  manage: (key) => manageBlock(key, contextPhrase(key)),
};

function fallbackProfile(key: string): SolutionProfile {
  const label = key.charAt(0).toUpperCase() + key.slice(1);
  return {
    hook: `Your ${label.toLowerCase()} capability is central to how your organisation delivers value.`,
    advisory: {
      problemParagraph: `Many organisations struggle to assess ${label.toLowerCase()} maturity with clear priorities and governed next steps. This assessment returns evidence-led recommendations your leadership team can act on.`,
      gaps: [
        gap("Unclear priorities", "Teams lack a shared view of what to fix first and why."),
        gap(
          "Siloed decisions",
          "Stakeholders work from different assumptions and incomplete evidence."
        ),
        gap(
          "Slow progress",
          "Good ideas stall before they become funded, governed delivery."
        ),
      ],
      outcomes: [
        gap(
          "Shared priorities",
          "Leadership aligns on the highest-value next steps for this scope."
        ),
        gap(
          "Actionable outputs",
          "Your teams receive practical artefacts they can execute against."
        ),
        gap(
          "Governed delivery",
          "Progress continues with clear milestones, reporting, and accountability."
        ),
      ],
    },
    design: {
      problemParagraph: `Many organisations plan ${label.toLowerCase()} changes without aligned designs, standards, or build-ready specifications. This design engagement turns goals into user-centred designs and implementation-ready artefacts.`,
      gaps: [
        gap("Undefined direction", "Target workflows and experiences are unclear for stakeholders."),
        gap("Inconsistent standards", "Teams apply different patterns without shared governance."),
        gap("Build ambiguity", "Delivery teams lack specifications needed to implement with confidence."),
      ],
      outcomes: [
        gap("Aligned designs", "Workflows and experiences reflect how teams and users actually work."),
        gap("Consistent standards", "UX, integration, and governance requirements are defined upfront."),
        gap(
          "Implementation-ready specs",
          "Build teams receive artefacts that reduce rework and accelerate delivery."
        ),
      ],
    },
  };
}

function resolveTypeBlock(
  profile: SolutionProfile,
  serviceType: ServiceTypeKey,
  solutionKey: string
): TypeBlock {
  if (serviceType === "advisory") return profile.advisory;
  if (serviceType === "design") return profile.design;
  return TYPE_BUILDERS[serviceType](solutionKey);
}

function toWhyItMattersContent(
  profile: SolutionProfile,
  serviceType: ServiceTypeKey,
  solutionKey: string
): WhyItMattersContent {
  const block = resolveTypeBlock(profile, serviceType, solutionKey);
  return {
    hook: profile.hook,
    problemParagraph: block.problemParagraph,
    before: {
      eyebrow: BEFORE_EYEBROW,
      title: BEFORE_TITLE,
      items: block.gaps,
    },
    after: {
      eyebrow: AFTER_EYEBROW,
      title: AFTER_TITLE,
      items: block.outcomes,
    },
  };
}

export function buildWhyItMattersContent(service: ServiceProduct): WhyItMattersContent {
  const key = resolveSolutionKey(service.standardName);
  const serviceType = service.serviceType as ServiceTypeKey;
  const profile = SOLUTION_PROFILES[key] ?? fallbackProfile(key);

  if (!["advisory", "design", "ai_design", "deploy", "ai_deploy", "manage"].includes(serviceType)) {
    return toWhyItMattersContent(profile, "advisory", key);
  }

  return toWhyItMattersContent(profile, serviceType, key);
}
