import type { CollectionCopyOverrides } from "./types";

/**
 * Per-variant copy overrides for the AI collection.
 * Keyed by variant id. See ./types.ts for the field contract and voice rules.
 * Solutions: Enterprise Data Platform (103-108), Business Intelligence & Analytics (109-114),
 * Enterprise AI & Automation (115-120).
 */
export const aiCopy: CollectionCopyOverrides = {

  // -------------------------------------------------------------------------
  // ENTERPRISE DATA PLATFORM (ids 103-108)
  // -------------------------------------------------------------------------

  103: {
    description:
      "Pinpoint the architecture weaknesses, governance gaps, and pipeline failures holding your data platform back from becoming a trusted enterprise asset, and leave with a scored maturity view and prioritised roadmap your CDO and engineering leads can act on immediately.",
    positioning:
      "Pinpoint the data quality, governance, and architecture gaps blocking your platform from becoming a trusted enterprise asset.",
    features: [
      "A domain-by-domain scorecard showing exactly which gaps in ingestion, storage, governance, and consumption are undermining data trust, so investment targets the root causes rather than the symptoms",
      "Data quality and lineage gap identification with root-cause mapping",
      "Prioritised remediation roadmap ranked by business impact and implementation effort",
      "Stakeholder-ready findings pack including an executive summary and a technical annexe",
    ],
    timelineMilestones: [
      "Days 1-2: Architecture review, stakeholder interviews, and data landscape mapping",
      "Days 3-4: Pipeline and governance analysis, quality sampling, and gap scoring",
      "Day 5: Findings playback, roadmap walkthrough, and executive summary delivery",
    ],
    deliverables: [
      {
        title: "Data platform maturity scorecard",
        description:
          "A domain-by-domain rating of ingestion, transformation, storage, and consumption layers, with evidence for each score.",
      },
      {
        title: "Gap and root-cause register",
        description:
          "Every identified gap mapped to its root cause, the business risk it carries, and the effort band required to close it.",
      },
      {
        title: "Prioritised roadmap",
        description:
          "A sequenced action plan with owners, dependencies, and effort estimates so your teams can start closing the highest-risk gaps immediately.",
      },
      {
        title: "Executive summary pack",
        description:
          "A concise board-ready presentation covering current state, priority findings, and recommended investment.",
      },
    ],
    packageHighlights: [
      "Fixed-scope assessment completed within one week, no build commitment required",
      "Covers architecture, data quality, lineage, and governance in a single engagement",
      "Output calibrated for both technical leads and executive sponsors",
    ],
    faqIntro:
      "Common questions about the Enterprise Data Platform assessment.",
    faqs: [
      {
        question: "What do you review during the assessment?",
        answer:
          "The DigitalQatalyst team reviews your ingestion pipelines, storage architecture, transformation logic, data quality controls, lineage tooling, and governance policies. We focus on what is actually in place, not what is documented.",
      },
      {
        question: "Do you need access to production systems?",
        answer:
          "We work primarily from architecture diagrams, pipeline configurations, and stakeholder interviews. Any read-only access to tooling is agreed upfront and scoped to the minimum needed.",
      },
      {
        question: "What if we are mid-way through a migration?",
        answer:
          "That is common. We assess your current and target state together so the roadmap accounts for in-flight work and avoids duplicating effort.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will align on scope, confirm the relevant stakeholders, and agree a kick-off date before any work begins.",
      },
      {
        question: "What does the roadmap look like?",
        answer:
          "A sequenced list of prioritised actions, each with an owner role, an effort band (days of work), key dependencies, and a recommended delivery sequence.",
      },
    ],
    audience: "CDOs, CIOs, and data and analytics engineering leads",
    industryRelevance:
      "Organisations building governed data platforms, data products, or AI-ready foundations across financial services, retail, healthcare, and the public sector",
    businessImpact:
      "Cuts wasted data engineering effort by exposing root causes of quality and governance failures, and gives leadership a concrete investment case for the platform improvements with the greatest return.",
    tags: ["data-platform", "data-governance", "maturity-assessment"],
  },

  104: {
    description:
      "Turn your enterprise data platform goals into an architecture blueprint, data model specifications, and a governance framework your engineering teams can build against with confidence.",
    positioning:
      "Go from data platform ambition to build-ready specifications: architecture, contracts, governance, and an adoption plan in one engagement.",
    features: [
      "A build-ready architecture blueprint your engineering teams can act on immediately, with every layer -- ingestion, processing, storage, and serving -- specified so delivery starts without rework or ambiguity",
      "Canonical data model and domain ownership definitions aligned to your business domains",
      "Governance framework including lineage, cataloguing, access control, and data quality contracts",
      "Phased build plan with team assignments, milestones, and dependency sequencing",
    ],
    timelineMilestones: [
      "Week 1: Discovery, requirements workshops, and current-state architecture review",
      "Week 2: Target architecture design, data domain mapping, and technology selection",
      "Week 3: Governance framework, data contracts, and integration design",
      "Week 4: Build plan, adoption playbook, and design pack delivery",
    ],
    deliverables: [
      {
        title: "Target-state architecture blueprint",
        description:
          "A detailed diagram and narrative covering each platform layer, technology choices, and the rationale for each decision.",
      },
      {
        title: "Canonical data model and domain definitions",
        description:
          "Domain-level entity definitions, ownership assignments, and the data contracts your teams will build to.",
      },
      {
        title: "Governance and quality framework",
        description:
          "Policies, tooling recommendations, and process designs for lineage tracking, cataloguing, access control, and quality measurement.",
      },
      {
        title: "Phased build and adoption plan",
        description:
          "A sequenced delivery roadmap with team roles, sprint milestones, and a change management guide to drive adoption across data consumers.",
      },
    ],
    packageHighlights: [
      "Architecture validated against your existing technology investments and team capabilities",
      "Governance design integrated into the architecture, not bolted on afterwards",
      "Build plan ready to hand directly to your delivery squads",
    ],
    faqIntro:
      "Common questions about the Enterprise Data Platform design engagement.",
    faqs: [
      {
        question: "Do you design for a specific cloud provider or technology stack?",
        answer:
          "The DigitalQatalyst team designs for your chosen stack. We are fluent across the major cloud data platforms and will work within your existing technology constraints or help you select where the choice is still open.",
      },
      {
        question: "How much input does our team need to provide?",
        answer:
          "We run structured workshops in weeks one and two. Your data engineers, architects, and domain leads will need half-day availability across those sessions. We handle the synthesis and design work between workshops.",
      },
      {
        question: "What is a data contract and why does it matter?",
        answer:
          "A data contract is a formal agreement between a data producer and its consumers specifying schema, quality guarantees, and SLAs. It prevents the silent breaking changes that erode trust in platform data.",
      },
      {
        question: "Does the design include a migration plan if we are replacing a legacy system?",
        answer:
          "Yes. Where a legacy system is in scope, the architecture blueprint includes a migration strategy covering data extraction, transformation, parallel running, and cutover.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team to discuss your platform goals. We will confirm scope, identify the right stakeholders, and propose a kick-off schedule.",
      },
    ],
    audience: "CDOs, CIOs, and data platform architects",
    industryRelevance:
      "Organisations building governed data platforms, data products, or AI-ready foundations across financial services, retail, healthcare, and the public sector",
    businessImpact:
      "Reduces build risk and rework by resolving architecture decisions and governance design before engineering investment begins, giving delivery teams a clear, agreed specification to work from.",
    tags: ["data-platform", "data-architecture", "data-governance"],
  },

  105: {
    description:
      "Identify the highest-value AI use cases your data platform can reliably support, validate their feasibility, and leave with responsible workflow designs and deployment-ready specifications before any build investment is committed.",
    positioning:
      "Validate which AI capabilities your data platform can reliably support, and leave with responsible workflow designs your team can build without reinventing guardrails.",
    features: [
      "A ranked shortlist of AI use cases your data platform can reliably support, each scored against data readiness, feasibility, and business value, so build investment goes only to capabilities with a clear path to production",
      "Responsible AI workflow design covering bias checks, explainability requirements, and human-in-the-loop controls",
      "Data readiness assessment identifying the gaps that must close before each use case can train or run reliably",
      "Deployment-ready specifications including model requirements, feature pipelines, and monitoring design",
    ],
    timelineMilestones: [
      "Week 1: Use-case discovery, data readiness review, and feasibility scoring",
      "Week 2: Responsible AI requirements, ethics review, and workflow design",
      "Week 3: Feature pipeline and model specification, monitoring and alerting design",
      "Week 4: Specification pack delivery and build-readiness review",
    ],
    deliverables: [
      {
        title: "AI use-case prioritisation matrix",
        description:
          "Each candidate use case scored on data readiness, technical complexity, business value, and risk, with a clear build-or-defer recommendation.",
      },
      {
        title: "Responsible AI workflow designs",
        description:
          "End-to-end workflow diagrams for each prioritised use case, including bias controls, explainability hooks, and human-in-the-loop decision points.",
      },
      {
        title: "Data readiness gap report",
        description:
          "A precise list of the data quality, coverage, and lineage gaps that must be resolved before each use case can proceed to build.",
      },
      {
        title: "Deployment-ready AI specifications",
        description:
          "Feature pipeline definitions, model requirements, inference architecture, and monitoring specifications your engineering team can build against.",
      },
    ],
    packageHighlights: [
      "Use cases selected based on your actual data assets, not aspirational scenarios",
      "Ethics and responsibility considerations built into each workflow design",
      "Specifications include monitoring and drift detection from the outset",
    ],
    faqIntro:
      "Common questions about the Enterprise Data Platform AI design engagement.",
    faqs: [
      {
        question: "How do you decide which AI use cases to prioritise?",
        answer:
          "The DigitalQatalyst team scores each candidate against four factors: data readiness, technical feasibility, business value, and governance risk. Only use cases that score above a defined threshold proceed to full specification.",
      },
      {
        question: "What does responsible AI mean in practice for a data platform?",
        answer:
          "It means designing bias detection into training pipelines, defining explainability requirements before model selection, and specifying the human review points where an automated decision must be checked before acting.",
      },
      {
        question: "Do we need an existing ML platform to begin?",
        answer:
          "No. If you do not have an ML platform, the specifications will include platform requirements. If you do, we design within your existing tooling.",
      },
      {
        question: "How do we get started?",
        answer:
          "Reach out to the DigitalQatalyst team with your candidate use cases or business problems. We will assess your starting position and propose a scoped engagement.",
      },
    ],
    audience: "CDOs, CIOs, data platform architects, and heads of AI and machine learning",
    industryRelevance:
      "Organisations building AI-ready data platforms in financial services, insurance, retail, and healthcare, where data quality and responsible AI are non-negotiable",
    businessImpact:
      "Prevents costly build failures by validating data readiness and use-case feasibility before engineering investment, and embeds responsibility controls that protect the organisation from model-driven decisions going wrong.",
    tags: ["data-platform", "responsible-ai", "ml-platform", "ai-design"],
  },

  106: {
    description:
      "Configure, integrate, and launch your enterprise data platform with sprint-gated quality assurance, full pipeline testing, and a clean handover to your operations and data engineering teams, within a fixed twelve-week programme.",
    positioning:
      "Move from approved architecture to a live, tested data platform, with every pipeline validated, every integration confirmed, and your team ready to operate it.",
    features: [
      "A live, production-ready data platform built to the approved blueprint, with all pipelines running, acceptance criteria met, and your operations team certified before the DigitalQatalyst team steps back",
      "Pipeline build and integration testing covering ingestion, transformation, and serving layers end to end",
      "Data quality validation at each layer with acceptance criteria agreed before launch",
      "Week-by-week knowledge transfer with your operations team certified against runbooks and on-call guides before handover",
    ],
    timelineMilestones: [
      "Weeks 1-3: Environment setup, infrastructure provisioning, and pipeline scaffolding",
      "Weeks 4-7: Pipeline implementation, source system integration, and data quality testing",
      "Weeks 8-10: End-to-end validation, performance testing, and user acceptance testing",
      "Weeks 11-12: Controlled launch, handover sessions, and runbook sign-off",
    ],
    deliverables: [
      {
        title: "Configured and tested data platform",
        description:
          "A fully provisioned platform environment with all agreed pipelines live, tested against acceptance criteria, and confirmed ready for production traffic.",
      },
      {
        title: "Integration test results and sign-off",
        description:
          "Test evidence covering each source-to-destination data flow, with defects resolved and results signed off by your technical lead.",
      },
      {
        title: "Operations runbook set",
        description:
          "Step-by-step runbooks for pipeline monitoring, incident triage, scheduled maintenance, and common failure scenarios.",
      },
      {
        title: "Handover and knowledge transfer pack",
        description:
          "Session recordings, architecture documentation, and a competency checklist confirming your team can operate the platform independently.",
      },
    ],
    packageHighlights: [
      "Pipeline acceptance criteria agreed before build begins, so there is no ambiguity at launch",
      "Parallel running period built in to confirm data fidelity before full cutover",
      "Runbooks and handover materials produced as part of the engagement, not as an afterthought",
    ],
    faqIntro:
      "Common questions about the Enterprise Data Platform deployment engagement.",
    faqs: [
      {
        question: "What does the knowledge transfer programme involve in practice?",
        answer:
          "Your operations and engineering teams join live sessions covering platform monitoring, pipeline triage, and incident response. They receive runbooks, architecture documentation, and a sign-off checklist before the DigitalQatalyst team steps back.",
      },
      {
        question: "How do you handle data quality during migration?",
        answer:
          "We define acceptance criteria for each pipeline before build. During testing, every pipeline output is validated against those criteria. Any deviation is classified and resolved before that pipeline goes live.",
      },
      {
        question: "What if a source system integration is more complex than expected?",
        answer:
          "Scope changes are assessed formally. The DigitalQatalyst team will identify the impact on timeline and budget and agree any adjustment with you before proceeding.",
      },
      {
        question: "How do we get started?",
        answer:
          "The deployment engagement follows directly from a completed design. Share your architecture blueprint with the DigitalQatalyst team and we will confirm scope, resourcing, and a kick-off date.",
      },
    ],
    audience: "CDOs, data engineering leads, and infrastructure and platform architects",
    industryRelevance:
      "Organisations building governed data platforms in financial services, retail, healthcare, and the public sector, where data fidelity and operational reliability are critical",
    businessImpact:
      "Delivers a tested, fully operational data platform within a fixed timeline, removing the build and integration risk that typically derails platform programmes and delays the business value they are designed to unlock.",
    tags: ["data-platform", "data-engineering", "platform-deployment"],
  },

  107: {
    description:
      "Put your designed AI capabilities into production on the enterprise data platform with governance controls, drift monitoring, and safety checks built in from the first day of operation.",
    positioning:
      "Launch AI models on your data platform the right way: governed, monitored, and production-hardened before your business depends on them.",
    features: [
      "AI models serving live predictions in production, with version control and rollback confirmed working before any model handles business decisions",
      "Real-time drift and performance monitoring configured to alert before model quality degrades",
      "Governance controls including audit logging, prediction traceability, and access controls on model endpoints",
      "Documented handover with incident playbooks and on-call guidance for your ML engineering team, validated before the DigitalQatalyst team steps back",
    ],
    timelineMilestones: [
      "Weeks 1-3: ML infrastructure provisioning, model packaging, and staging environment setup",
      "Weeks 4-7: Feature pipeline deployment, model serving configuration, and monitoring instrumentation",
      "Weeks 8-10: Production validation, load testing, and governance control verification",
      "Weeks 11-12: Controlled production launch, operational handover, and incident playbook delivery",
    ],
    deliverables: [
      {
        title: "Production AI deployment",
        description:
          "AI models serving live predictions via governed endpoints, with version control, rollback capability, and environment isolation confirmed working.",
      },
      {
        title: "Monitoring and alerting configuration",
        description:
          "Drift detection, performance dashboards, and alert thresholds configured so your team knows immediately when a model needs attention.",
      },
      {
        title: "Governance and audit controls",
        description:
          "Audit logs, prediction traceability records, and access control configurations meeting your compliance and responsible AI requirements.",
      },
      {
        title: "ML operations handover pack",
        description:
          "Incident playbooks, retraining triggers, monitoring guides, and a sign-off checklist confirming your ML team can operate and maintain the models independently.",
      },
    ],
    packageHighlights: [
      "Governance and monitoring configured before go-live, not retrofitted after an incident",
      "Rollback capability tested and confirmed before any model goes live in production",
      "Handover includes retraining triggers and a model lifecycle management guide",
    ],
    faqIntro:
      "Common questions about the Enterprise Data Platform AI deployment engagement.",
    faqs: [
      {
        question: "What does model drift monitoring look like?",
        answer:
          "We configure statistical checks on input feature distributions and prediction output distributions. When either drifts beyond agreed thresholds, your team receives an alert and the incident playbook tells them what to investigate first.",
      },
      {
        question: "How do you handle model versioning in production?",
        answer:
          "Every model version is tagged, stored in a model registry, and deployed with a documented rollback path. Promoting a new version requires a passing validation suite, so production is never overwritten without evidence.",
      },
      {
        question: "What if a model underperforms in production?",
        answer:
          "The incident playbook covers this. Your team can roll back to the previous version immediately. The DigitalQatalyst team will support a root-cause review if the underperformance is not explained by drift.",
      },
      {
        question: "How do we get started?",
        answer:
          "The AI deployment engagement follows from a completed AI design. Share your deployment specifications with the DigitalQatalyst team and we will confirm scope, ML infrastructure requirements, and a timeline.",
      },
    ],
    audience: "CDOs, heads of AI and ML, and data platform architects",
    industryRelevance:
      "Organisations deploying AI on enterprise data platforms in financial services, insurance, healthcare, and retail, where model reliability and auditability are regulatory or operational requirements",
    businessImpact:
      "Puts AI capabilities into production reliably and responsibly, with monitoring and governance that protects the business from silent model failures and provides the audit trail regulators and risk teams require.",
    tags: ["data-platform", "ml-deployment", "model-governance", "responsible-ai"],
  },

  108: {
    description:
      "Keep your enterprise data platform running, governed, and improving every month, with SLA-backed pipeline monitoring, incident response, data quality reporting, and continuous optimisation by the DigitalQatalyst team.",
    positioning:
      "Keep your data platform trusted and performant every month, with proactive monitoring, rapid incident resolution, and a continuous improvement cycle built into the service.",
    features: [
      "Continuous pipeline health coverage with defined SLAs, so data failures are caught and resolved before they affect the business decisions or reports that depend on them",
      "Monthly data quality reports covering completeness, accuracy, freshness, and lineage coverage",
      "Capacity and performance optimisation reviews ensuring platform costs and query performance stay within targets",
      "Governance and compliance reporting aligned to your data policies and any applicable regulations",
    ],
    timelineMilestones: [
      "Month 1: Onboarding, monitoring baseline, and SLA definition",
      "Month 2 onwards: Continuous monitoring, monthly quality reports, and quarterly optimisation reviews",
      "Ongoing: Incident management, change requests, and annual roadmap review",
    ],
    deliverables: [
      {
        title: "Monthly data quality report",
        description:
          "A scored view of platform data quality across completeness, accuracy, freshness, and lineage, with trend analysis and recommended actions.",
      },
      {
        title: "Incident log and resolution record",
        description:
          "A complete log of every pipeline incident, the time to detect and resolve, the root cause, and the preventive action taken.",
      },
      {
        title: "Quarterly performance and cost review",
        description:
          "An analysis of platform query performance, compute and storage costs, and the optimisations applied or recommended for the next quarter.",
      },
      {
        title: "Governance compliance summary",
        description:
          "A periodic report confirming that access controls, lineage coverage, and data retention policies remain compliant with your governance framework.",
      },
    ],
    packageHighlights: [
      "SLA-backed incident response with defined detection and resolution time targets",
      "Monthly quality reporting gives leadership a consistent view of platform health",
      "Optimisation reviews prevent cost and performance drift over time",
    ],
    faqIntro:
      "Common questions about the Enterprise Data Platform managed service.",
    faqs: [
      {
        question: "What SLAs apply to the managed service?",
        answer:
          "SLAs are agreed during onboarding and typically cover time to detect a pipeline failure, time to notify, and time to resolve by severity level. Your account is reviewed against these targets in the monthly report.",
      },
      {
        question: "What happens when a pipeline fails?",
        answer:
          "The DigitalQatalyst team receives an alert, assesses severity, and begins remediation within the agreed response window. You are notified immediately and kept updated until resolution.",
      },
      {
        question: "Can we request changes or new pipelines under the managed service?",
        answer:
          "Yes. Change requests are scoped and delivered within the service. Larger changes that exceed the included capacity are quoted separately.",
      },
      {
        question: "How do we get started?",
        answer:
          "The managed service typically follows a completed deployment. Contact the DigitalQatalyst team to discuss transition planning, agree SLAs, and schedule the onboarding period.",
      },
    ],
    audience: "CDOs, CIOs, data engineering leads, and platform operations managers",
    industryRelevance:
      "Organisations operating enterprise data platforms in financial services, retail, healthcare, and the public sector, where data reliability and governance are continuous operational requirements",
    businessImpact:
      "Maintains data platform reliability and data trust over time, preventing the gradual quality and performance degradation that erodes confidence in platform data and forces expensive remediation programmes.",
    tags: ["data-platform", "managed-service", "platform-operations", "data-quality"],
  },

  // -------------------------------------------------------------------------
  // BUSINESS INTELLIGENCE & ANALYTICS (ids 109-114)
  // -------------------------------------------------------------------------

  109: {
    description:
      "Surface the data, tooling, and governance gaps that limit management visibility and leave key decisions relying on spreadsheets rather than trusted reports, and leave with a prioritised plan to close what matters most to your decision-makers.",
    positioning:
      "Find out exactly where your BI and analytics capability falls short, and leave with a prioritised plan to close the gaps that matter most to your decision-makers.",
    features: [
      "BI maturity assessment covering data sources, reporting tools, KPI definitions, and self-service capability",
      "Report and dashboard audit identifying duplication, inconsistency, and single points of failure",
      "Stakeholder interviews mapping the decisions that lack reliable data and the cost of that gap",
      "Prioritised improvement roadmap ranked by decision-making impact and implementation effort",
    ],
    timelineMilestones: [
      "Days 1-2: Stakeholder interviews, report inventory, and data source mapping",
      "Days 3-4: Tool and governance review, KPI consistency analysis, and gap scoring",
      "Day 5: Findings playback, prioritised roadmap delivery, and next-step recommendations",
    ],
    deliverables: [
      {
        title: "BI maturity scorecard",
        description:
          "A capability-by-capability rating of your current BI and analytics environment, with evidence and the specific gaps to close.",
      },
      {
        title: "Report and dashboard audit",
        description:
          "An inventory of existing reports identifying duplication, conflicting definitions, stale data sources, and reports nobody uses.",
      },
      {
        title: "Decision-gap register",
        description:
          "A log of the business decisions currently made without reliable data, the risk that carries, and the data changes needed to fix it.",
      },
      {
        title: "Prioritised BI improvement roadmap",
        description:
          "A sequenced action plan covering quick wins and strategic investments, with effort estimates and recommended owners.",
      },
    ],
    packageHighlights: [
      "Covers tooling, data quality, KPI definitions, and governance in a single assessment week",
      "Decision-gap register connects BI improvements directly to business outcomes",
      "No commitment to further work required to receive the full findings pack",
    ],
    faqIntro:
      "Common questions about the Business Intelligence and Analytics assessment.",
    faqs: [
      {
        question: "Which BI tools do you review?",
        answer:
          "The DigitalQatalyst team reviews whatever tools you use, whether that is Power BI, Tableau, Looker, Qlik, or a custom-built solution. The assessment is tool-agnostic.",
      },
      {
        question: "How do you identify which gaps matter most?",
        answer:
          "We interview the people who make decisions and ask them which questions they cannot answer reliably, how often those questions arise, and what the cost of the uncertainty is. That drives the prioritisation.",
      },
      {
        question: "What if our biggest problem is data quality rather than the BI tools?",
        answer:
          "That is a common finding. The roadmap will distinguish between BI-layer fixes and upstream data fixes, and recommend which to tackle first based on the impact on decision-making.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation with the DigitalQatalyst team. We will confirm scope, identify the right stakeholders for interviews, and agree a kick-off date.",
      },
    ],
    audience: "Strategy, finance, and analytics leaders, and heads of data and reporting",
    industryRelevance:
      "Organisations across financial services, retail, manufacturing, and the public sector seeking better performance visibility, consistent KPIs, and faster, more confident decision-making",
    businessImpact:
      "Identifies the specific reporting and data gaps reducing decision confidence, and provides a roadmap that gives leadership reliable insight where it is currently absent.",
    tags: ["business-intelligence", "analytics", "reporting", "kpi-design"],
  },

  110: {
    description:
      "Turn your business intelligence and analytics goals into user-centred dashboard specifications, a semantic layer design, and a governed data model your delivery teams can build against, with metrics agreed and signed off before a single report is built.",
    positioning:
      "Design the BI and analytics environment your decision-makers actually need: agreed metrics, clean data models, and dashboards specified before a single report is built.",
    features: [
      "Metrics catalogue and KPI definitions agreed across business and finance stakeholders before design begins",
      "Semantic layer and data model design ensuring consistent metric calculation across all reports",
      "Dashboard and self-service analytics specifications mapped to named user roles and decision workflows",
      "Governance design covering report certification, data ownership, and access control policies",
    ],
    timelineMilestones: [
      "Week 1: Stakeholder workshops, metrics catalogue drafting, and current-state data model review",
      "Week 2: Semantic layer design, data model specification, and metric sign-off",
      "Week 3: Dashboard wireframes, self-service requirements, and governance policy design",
      "Week 4: Specification pack delivery, build backlog, and adoption plan",
    ],
    deliverables: [
      {
        title: "Metrics catalogue",
        description:
          "Every agreed KPI defined with its calculation logic, source data, owner, refresh frequency, and the decisions it supports.",
      },
      {
        title: "Semantic layer and data model specification",
        description:
          "A logical data model and semantic layer design ensuring every report calculates the same metric in the same way, regardless of which tool produces it.",
      },
      {
        title: "Dashboard and report specifications",
        description:
          "Wireframes and functional specifications for each dashboard, mapped to the user roles and decision workflows they serve.",
      },
      {
        title: "Governance and certification design",
        description:
          "Policies and process designs for report certification, data ownership, access control, and the lifecycle management of dashboards.",
      },
    ],
    packageHighlights: [
      "Metrics agreed and signed off before any build, eliminating conflicting numbers at launch",
      "Semantic layer design prevents the metric fragmentation that plagues large BI estates",
      "Specifications include self-service analytics requirements alongside governed reports",
    ],
    faqIntro:
      "Common questions about the Business Intelligence and Analytics design engagement.",
    faqs: [
      {
        question: "What is a semantic layer and why does it matter for BI?",
        answer:
          "A semantic layer sits between your raw data and your BI tools, translating database fields into business terms and centralising metric calculation logic. It means every tool that queries it returns the same number for revenue, margin, or any other KPI.",
      },
      {
        question: "How do you get stakeholders to agree on metric definitions?",
        answer:
          "We run facilitated definition workshops in week one where each metric owner presents their current definition and we mediate towards a single agreed version. The DigitalQatalyst team documents every decision and its rationale.",
      },
      {
        question: "Do we need to replace our existing BI tools to benefit from the design?",
        answer:
          "No. The design works with your chosen tools. Where we identify tooling gaps, we make recommendations but do not require tool changes as a condition of the engagement.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team with your BI goals and a list of the decisions you want better data for. We will propose a scoped engagement and identify the stakeholders needed.",
      },
    ],
    audience: "Strategy, finance, and analytics leaders, and BI architects",
    industryRelevance:
      "Organisations in financial services, retail, manufacturing, and the public sector seeking consistent, trustworthy reporting across multiple business units or data sources",
    businessImpact:
      "Eliminates the conflicting-numbers problem that undermines confidence in management reporting, and produces specifications that cut rework during build by resolving metric and model decisions upfront.",
    tags: ["business-intelligence", "analytics", "data-modelling", "semantic-layer"],
  },

  111: {
    description:
      "Identify where machine learning and AI-driven insights can augment your business intelligence and analytics capability, validate each use case against your actual data, and leave with responsible workflow designs and deployment-ready specifications ready for engineering.",
    positioning:
      "Design AI-augmented analytics your organisation can trust: use cases validated against your data, workflows designed responsibly, specifications ready to build.",
    features: [
      "AI use-case identification across forecasting, anomaly detection, natural language querying, and automated narrative generation",
      "Data readiness review confirming whether your existing analytics data can support each proposed AI capability",
      "Responsible AI workflow design specifying human review points, bias checks, and confidence thresholds for each model",
      "Technical specifications covering model requirements, feature engineering, and integration with your existing BI tooling",
    ],
    timelineMilestones: [
      "Week 1: Use-case discovery workshops, data readiness review, and feasibility scoring",
      "Week 2: Responsible AI requirements, workflow design, and ethics review",
      "Week 3: Technical specifications, feature engineering design, and BI integration architecture",
      "Week 4: Specification delivery, build prioritisation, and data gap remediation plan",
    ],
    deliverables: [
      {
        title: "AI use-case prioritisation assessment",
        description:
          "Each proposed AI capability scored on data readiness, technical feasibility, business value, and responsible AI risk, with a build or defer recommendation.",
      },
      {
        title: "Responsible AI workflow designs",
        description:
          "End-to-end workflow diagrams for each prioritised use case, specifying human review points, confidence thresholds, and the actions to take when the model is uncertain.",
      },
      {
        title: "Technical specifications",
        description:
          "Model requirements, feature pipeline designs, and integration architecture for each approved use case, ready for your engineering team to build against.",
      },
      {
        title: "Data gap remediation plan",
        description:
          "A targeted list of the data quality and coverage improvements needed before each AI use case can train and run reliably.",
      },
    ],
    packageHighlights: [
      "Use cases validated against your actual analytics data, not theoretical capability",
      "Responsible AI requirements designed in, not added as compliance afterthought",
      "Integration design ensures AI insights surface within your existing BI tools",
    ],
    faqIntro:
      "Common questions about the Business Intelligence and Analytics AI design engagement.",
    faqs: [
      {
        question: "What kinds of AI capabilities work well for BI and analytics?",
        answer:
          "Forecasting and scenario modelling, anomaly and outlier detection, natural language querying of data, automated narrative generation for reports, and smart alerting that identifies which metric changes actually matter.",
      },
      {
        question: "How do you assess data readiness for AI?",
        answer:
          "The DigitalQatalyst team reviews the data sources that would feed each use case, checking completeness, consistency, history depth, and refresh frequency against the minimum requirements for the proposed AI capability.",
      },
      {
        question: "Do we need a separate ML platform or does this work with our BI tool?",
        answer:
          "It depends on the use case. Some AI capabilities are native to modern BI tools. Others require a separate ML platform. The specifications will tell you exactly what infrastructure each use case needs.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your BI goals and the decisions you want to make faster or more accurately with the DigitalQatalyst team. We will assess your starting position and propose an engagement scope.",
      },
    ],
    audience: "Analytics leaders, heads of data science, and strategy and finance executives",
    industryRelevance:
      "Organisations in financial services, retail, and the public sector where analytics drives pricing, planning, or resource allocation decisions, and AI augmentation could materially improve decision quality",
    businessImpact:
      "Adds AI-driven forecasting and insight to your analytics capability, validated against real data and designed to integrate with existing tools, so analysts spend less time on manual data work and more time on decisions.",
    tags: ["business-intelligence", "analytics-ai", "forecasting", "responsible-ai"],
  },

  112: {
    description:
      "Build, connect, and launch your agreed BI and analytics environment, from data pipeline integration and semantic layer implementation to certified dashboards and a trained self-service user community, within a milestone-gated twelve-week programme.",
    positioning:
      "Get your BI and analytics environment live: data connected, metrics consistent, dashboards certified, and your users confident before the engagement ends.",
    features: [
      "Data source integration and pipeline configuration connecting your agreed data to the BI layer with tested refresh schedules",
      "Semantic layer implementation ensuring every tool calculates agreed KPIs from a single consistent source",
      "Dashboard development and certification covering all specified reports built to the agreed wireframes",
      "User training and self-service enablement leaving your analytics community able to answer their own questions",
    ],
    timelineMilestones: [
      "Weeks 1-3: Environment setup, data source integration, and pipeline testing",
      "Weeks 4-7: Semantic layer implementation, dashboard development, and iterative review",
      "Weeks 8-10: User acceptance testing, report certification, and self-service configuration",
      "Weeks 11-12: Go-live support, user training delivery, and handover documentation",
    ],
    deliverables: [
      {
        title: "Integrated and tested BI environment",
        description:
          "Data sources connected, pipelines running to schedule, and the semantic layer in place with all agreed KPIs calculating correctly.",
      },
      {
        title: "Certified dashboard suite",
        description:
          "All specified dashboards built, tested against acceptance criteria, and certified as the authoritative source for each metric they present.",
      },
      {
        title: "Self-service analytics configuration",
        description:
          "Self-service workspace configured with governed data sets, access controls in place, and documentation enabling your analysts to build their own reports.",
      },
      {
        title: "Training materials and handover documentation",
        description:
          "Role-based training guides, administrator documentation, and a handover pack confirming your team can maintain and extend the BI environment independently.",
      },
    ],
    packageHighlights: [
      "Dashboard certification process confirms every report shows the right number before go-live",
      "Self-service enablement built into the deployment, not added later",
      "Handover includes administrator training so your team owns the environment from day one",
    ],
    faqIntro:
      "Common questions about the Business Intelligence and Analytics deployment engagement.",
    faqs: [
      {
        question: "What does dashboard certification mean?",
        answer:
          "Certification means a named data owner has reviewed the dashboard, confirmed its calculations against the agreed metric definitions, and approved it as the authoritative source. Certified dashboards are marked in the BI environment.",
      },
      {
        question: "How do you handle conflicting numbers found during testing?",
        answer:
          "When user acceptance testing reveals a metric discrepancy, the DigitalQatalyst team traces it to its source, applies the agreed metric definition, and resolves it before certification. No dashboard goes live with unresolved conflicts.",
      },
      {
        question: "Will our data team be able to add new dashboards after the engagement?",
        answer:
          "Yes. Self-service configuration and administrator training are included. Your team will be able to publish new reports against the governed data sets without our involvement.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your completed BI design specifications to the DigitalQatalyst team. We will confirm scope, agree the data sources to connect first, and schedule a kick-off.",
      },
    ],
    audience: "Analytics leaders, heads of data engineering, and BI architects",
    industryRelevance:
      "Organisations in financial services, retail, manufacturing, and the public sector replacing legacy reporting environments or consolidating fragmented BI estates",
    businessImpact:
      "Delivers a consistent, certified BI environment that restores trust in management reporting and frees analysts from manual data reconciliation, redirecting their time to the insights that drive decisions.",
    tags: ["business-intelligence", "analytics", "dashboard-development", "self-service-analytics"],
  },

  113: {
    description:
      "Put validated forecasting, anomaly detection, and AI-driven insight capabilities into production within your BI and analytics environment, with governance controls and monitoring configured from the first day of operation.",
    positioning:
      "Launch AI-powered analytics in production: models governed, outputs integrated into your existing dashboards, and your analytics team trained to act on what the AI surfaces.",
    features: [
      "AI model deployment integrated directly into your BI tooling so insights appear where analysts already work",
      "Prediction monitoring and drift detection configured to alert before model accuracy degrades",
      "Human-in-the-loop controls implemented at the decision points specified in the AI design",
      "Analytics team enablement covering how to interpret model outputs, act on alerts, and escalate when the AI is uncertain",
    ],
    timelineMilestones: [
      "Weeks 1-3: ML infrastructure setup, model packaging, and staging environment validation",
      "Weeks 4-7: Model deployment, BI integration, and monitoring instrumentation",
      "Weeks 8-10: Production validation, user acceptance testing, and governance control verification",
      "Weeks 11-12: Controlled launch, analytics team training, and operational handover",
    ],
    deliverables: [
      {
        title: "Production AI analytics deployment",
        description:
          "AI models serving live predictions integrated into your BI dashboards, with version control and rollback capability confirmed working before launch.",
      },
      {
        title: "Monitoring and alert configuration",
        description:
          "Drift detection, accuracy tracking, and alerting thresholds configured so degradation is caught and investigated before it affects decisions.",
      },
      {
        title: "Governance and audit controls",
        description:
          "Audit logs covering model predictions, access controls on model endpoints, and documentation of the human review points applied in each workflow.",
      },
      {
        title: "Analytics team enablement pack",
        description:
          "Training materials, interpretation guides, and escalation procedures giving your analytics team the confidence to act on AI outputs and challenge them when something looks wrong.",
      },
    ],
    packageHighlights: [
      "AI outputs surface inside your existing BI tools, no separate interface required",
      "Human-in-the-loop controls implemented as specified, not deferred to a later phase",
      "Analytics team trained on model interpretation before go-live",
    ],
    faqIntro:
      "Common questions about the Business Intelligence and Analytics AI deployment engagement.",
    faqs: [
      {
        question: "How do AI insights appear inside our existing dashboards?",
        answer:
          "The integration architecture defined in your AI design connects model outputs to your BI tool's data layer. Analysts see forecasts, anomaly flags, or narrative insights directly in the dashboards they already use.",
      },
      {
        question: "What happens when a model flags an anomaly?",
        answer:
          "The alert routes to the relevant analyst. The incident playbook tells them what to investigate, what to rule out, and when to escalate. The DigitalQatalyst team will support the first few live alerts to build team confidence.",
      },
      {
        question: "How do you validate that the AI is producing useful outputs before go-live?",
        answer:
          "We run a shadow period where models produce outputs alongside your existing analysis. Your analytics team reviews the outputs against known historical events before the model is promoted to production.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your completed AI design specifications with the DigitalQatalyst team. We will confirm infrastructure requirements, identify the first use case for deployment, and schedule a kick-off.",
      },
    ],
    audience: "Analytics leaders, heads of data science, and BI platform architects",
    industryRelevance:
      "Organisations in financial services, retail, and the public sector where AI-driven forecasting or anomaly detection would materially improve planning, risk management, or operational decisions",
    businessImpact:
      "Puts AI-driven forecasting and anomaly detection into production where analysts can act on them, reducing the time to identify performance issues and improving forecast accuracy for planning processes.",
    tags: ["analytics-ai", "forecasting", "anomaly-detection", "ml-deployment"],
  },

  114: {
    description:
      "Keep your business intelligence and analytics environment accurate, performant, and current every month, with SLA-backed monitoring, monthly quality reporting, and a continuous improvement cycle managed by the DigitalQatalyst team.",
    positioning:
      "Maintain a BI and analytics environment your decision-makers can rely on every month, with proactive quality checks, rapid incident resolution, and regular optimisation reviews.",
    features: [
      "Dashboard and data pipeline monitoring with SLA-backed response to report failures or data refresh issues",
      "Monthly analytics quality report covering metric accuracy, report usage, and data freshness by source",
      "Quarterly optimisation review addressing slow-running reports, redundant dashboards, and new stakeholder requirements",
      "Governed change management for new reports, metric updates, and data source additions",
    ],
    timelineMilestones: [
      "Month 1: Onboarding, monitoring baseline, SLA definition, and service catalogue agreement",
      "Month 2 onwards: Continuous monitoring, monthly quality reporting, and change request management",
      "Quarterly: Performance optimisation review and roadmap update",
    ],
    deliverables: [
      {
        title: "Monthly analytics quality report",
        description:
          "A scored view of metric accuracy, data freshness, report usage, and incident history with trend analysis and recommended actions.",
      },
      {
        title: "Incident log and resolution record",
        description:
          "A complete log of every report failure or data issue, the time to detect and resolve, root cause, and preventive action taken.",
      },
      {
        title: "Quarterly optimisation review",
        description:
          "An analysis of report performance, dashboard usage, and the optimisations applied or planned for the next quarter.",
      },
      {
        title: "Change register",
        description:
          "A documented record of every approved change to reports, metrics, or data sources, with the business justification and sign-off for each.",
      },
    ],
    packageHighlights: [
      "SLA-backed incident response so report failures are resolved before they affect the morning meeting",
      "Monthly quality reporting gives leadership a consistent view of analytics environment health",
      "Governed change management prevents the metric drift that erodes report credibility over time",
    ],
    faqIntro:
      "Common questions about the Business Intelligence and Analytics managed service.",
    faqs: [
      {
        question: "What counts as an incident under the managed service?",
        answer:
          "A report failure, a data refresh that misses its SLA window, a metric that calculates incorrectly, or a dashboard that becomes inaccessible. All are classified by severity and handled within the agreed response times.",
      },
      {
        question: "How do we request new reports or metric changes?",
        answer:
          "Through the change request process included in the service. The DigitalQatalyst team scopes the request, estimates effort, and delivers it within the agreed capacity. Requests that exceed included capacity are quoted separately.",
      },
      {
        question: "What happens if our source data changes and breaks our reports?",
        answer:
          "Monitoring detects the failure. The DigitalQatalyst team investigates, identifies the source change, and either remediates or raises a change request to update the affected pipelines and dashboards.",
      },
      {
        question: "How do we get started?",
        answer:
          "The managed service typically follows a completed deployment. Contact the DigitalQatalyst team to discuss transition planning, agree SLAs and service scope, and schedule the onboarding period.",
      },
    ],
    audience: "Analytics leaders, finance directors, and heads of reporting and data",
    industryRelevance:
      "Organisations in financial services, retail, manufacturing, and the public sector where management reporting must be accurate and timely every month without internal team bandwidth to maintain it",
    businessImpact:
      "Maintains report accuracy and analytics reliability over time, preventing the slow degradation that causes decision-makers to lose confidence in data and revert to spreadsheet-based workarounds.",
    tags: ["business-intelligence", "analytics", "managed-service", "reporting-operations"],
  },

  // -------------------------------------------------------------------------
  // ENTERPRISE AI & AUTOMATION (ids 115-120)
  // -------------------------------------------------------------------------

  115: {
    description:
      "Identify the highest-value AI and automation opportunities in your organisation, uncover the data and infrastructure gaps blocking adoption, and leave with a prioritised roadmap and the governance requirements your first production capability will need.",
    positioning:
      "Find out where AI and automation will create the most value for your organisation, what is blocking you today, and what needs to happen before you build.",
    features: [
      "AI and automation opportunity mapping across your key workflows, ranked by value and feasibility",
      "Readiness assessment covering data quality, infrastructure, skills, and governance against each priority use case",
      "Risk and ethics review identifying the responsible AI requirements specific to your sector and use cases",
      "Prioritised adoption roadmap with sequenced actions and the investment case for the top three use cases",
    ],
    timelineMilestones: [
      "Days 1-2: Opportunity discovery workshops, workflow mapping, and stakeholder interviews",
      "Days 3-4: Readiness assessment, risk and ethics review, and use-case scoring",
      "Day 5: Findings playback, roadmap delivery, and executive briefing",
    ],
    deliverables: [
      {
        title: "AI opportunity map",
        description:
          "A scored view of the AI and automation opportunities across your priority workflows, ranked by business value, feasibility, and time to first value.",
      },
      {
        title: "Readiness assessment",
        description:
          "A gap analysis covering data quality, infrastructure, skills, and governance against the requirements of each priority use case.",
      },
      {
        title: "Risk and ethics register",
        description:
          "The responsible AI risks specific to your use cases and sector, with the controls and governance requirements needed to address each one.",
      },
      {
        title: "Prioritised AI adoption roadmap",
        description:
          "A sequenced action plan for closing readiness gaps and building your first AI capabilities, with the investment case for each priority use case.",
      },
    ],
    packageHighlights: [
      "Use cases grounded in your actual workflows and data, not generic AI scenarios",
      "Responsible AI and ethics assessment included, not a separate engagement",
      "No commitment to build required to receive the full findings and roadmap",
    ],
    faqIntro:
      "Common questions about the Enterprise AI and Automation assessment.",
    faqs: [
      {
        question: "Do we need to have AI projects already underway to benefit from this assessment?",
        answer:
          "No. This assessment is designed for organisations at the start of their AI journey. It is equally valuable if you have existing AI experiments that need structure and prioritisation.",
      },
      {
        question: "How do you identify which use cases are genuinely feasible?",
        answer:
          "The DigitalQatalyst team scores each candidate against four factors: the data available to train and run it, the technical complexity, the business value, and the responsible AI risk. Only use cases that score above a defined threshold make the roadmap.",
      },
      {
        question: "What does the responsible AI review cover?",
        answer:
          "It covers bias risk, explainability requirements, regulatory obligations relevant to your sector, and the human oversight needed for each use case. The output is a practical list of the controls you will need to put in place.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation with the DigitalQatalyst team. We will confirm scope, identify the right stakeholders, and agree which workflows to focus on during the assessment.",
      },
    ],
    audience: "CEOs, CIOs, chief transformation officers, and heads of AI and automation",
    industryRelevance:
      "Organisations across financial services, professional services, manufacturing, retail, and the public sector looking to move from AI experimentation to structured, governed adoption",
    businessImpact:
      "Removes the strategic uncertainty that slows AI adoption by identifying the use cases with the strongest value-to-risk ratio and the exact readiness gaps that must close before build investment begins.",
    tags: ["enterprise-ai", "automation", "ai-readiness", "ai-strategy"],
  },

  116: {
    description:
      "Turn your validated AI and automation use cases into user-centred workflow designs, integration specifications, and a governed deployment blueprint your engineering teams can build against, with governance and override controls designed in from the outset.",
    positioning:
      "Translate AI and automation ambitions into build-ready specifications: workflows designed, integrations mapped, governance controls specified, and adoption planned before a line of code is written.",
    features: [
      "Workflow redesign for each prioritised use case, showing how AI or automation changes the user and system interactions",
      "Integration architecture mapping how AI capabilities connect to your existing applications, data sources, and process flows",
      "Governance framework design covering decision audit trails, human override controls, and escalation protocols",
      "Change management and adoption plan addressing the people, skills, and process changes needed for successful rollout",
    ],
    timelineMilestones: [
      "Week 1: Workflow discovery, current-state process mapping, and stakeholder requirements workshops",
      "Week 2: Redesigned workflow designs, integration architecture, and technology alignment",
      "Week 3: Governance framework, audit and override control design, and compliance review",
      "Week 4: Adoption plan, change impact assessment, and full design pack delivery",
    ],
    deliverables: [
      {
        title: "AI workflow designs",
        description:
          "Detailed workflow diagrams for each prioritised use case, showing the AI or automation interactions, decision points, human touchpoints, and exception paths.",
      },
      {
        title: "Integration architecture specification",
        description:
          "A technical specification mapping how each AI capability connects to your applications, APIs, and data sources, with the agreed integration patterns and data flow.",
      },
      {
        title: "Governance and control framework",
        description:
          "Policies and process designs for decision audit trails, human override mechanisms, model governance, and escalation when an automated decision must be reviewed.",
      },
      {
        title: "Adoption and change management plan",
        description:
          "A structured plan covering communication, training, role changes, and the success metrics that confirm adoption is working after go-live.",
      },
    ],
    packageHighlights: [
      "Workflow designs validated with end users before specifications are finalised",
      "Governance and override controls designed in, not retrofitted after the build",
      "Adoption plan included so your people are ready when the technology goes live",
    ],
    faqIntro:
      "Common questions about the Enterprise AI and Automation design engagement.",
    faqs: [
      {
        question: "How much involvement does our team need during the design phase?",
        answer:
          "We run workshops in weeks one and two requiring your process owners, technology leads, and end-user representatives. Half-day availability across those sessions is typically sufficient. The DigitalQatalyst team handles design synthesis between workshops.",
      },
      {
        question: "How do you design for human oversight in automated workflows?",
        answer:
          "We identify the decision points in each workflow where the automated output must be reviewed by a human before acting. The design specifies the trigger conditions, the review interface, the time window, and the escalation path if a reviewer is unavailable.",
      },
      {
        question: "What if we do not have a preferred technology platform yet?",
        answer:
          "The design engagement includes technology alignment. The DigitalQatalyst team will map your requirements against appropriate platforms and provide a recommendation with rationale before the integration specification is written.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your prioritised use cases or your AI opportunity assessment with the DigitalQatalyst team. We will scope the design engagement and propose a workshop schedule.",
      },
    ],
    audience: "CIOs, heads of AI and automation, process owners, and enterprise architects",
    industryRelevance:
      "Organisations in financial services, insurance, professional services, and the public sector designing AI-assisted or automated workflows that must meet governance and compliance requirements",
    businessImpact:
      "Reduces build risk and costly rework by resolving workflow, integration, and governance design decisions before engineering investment begins, and produces specifications that give delivery teams unambiguous direction.",
    tags: ["enterprise-ai", "automation", "workflow-design", "ai-governance"],
  },

  117: {
    description:
      "Validate your enterprise AI and automation use cases against data readiness, responsible AI requirements, and sector-specific compliance obligations, and leave with deployment-ready specifications your engineering team can build against without ambiguity.",
    positioning:
      "Design enterprise AI capabilities that are viable, responsible, and buildable: each use case validated, each workflow governed, each specification ready for engineering.",
    features: [
      "Use-case feasibility validation covering data availability, model complexity, and responsible AI risk before any build commitment",
      "Responsible workflow design specifying explainability requirements, bias controls, human oversight points, and confidence thresholds",
      "Model and infrastructure specification defining training data requirements, compute needs, and serving architecture for each use case",
      "Governance and compliance mapping ensuring each AI workflow meets the obligations relevant to your sector",
    ],
    timelineMilestones: [
      "Week 1: Use-case feasibility review, data and infrastructure readiness assessment, and risk scoring",
      "Week 2: Responsible AI requirements, ethics review, and workflow design",
      "Week 3: Model and infrastructure specifications, governance mapping, and compliance review",
      "Week 4: Specification pack delivery, build prioritisation, and gap remediation plan",
    ],
    deliverables: [
      {
        title: "Use-case feasibility assessment",
        description:
          "Each AI use case scored and assessed against data readiness, technical complexity, responsible AI risk, and business value, with a build or defer recommendation and supporting rationale.",
      },
      {
        title: "Responsible AI workflow designs",
        description:
          "Detailed workflow designs for each approved use case, specifying the bias controls, explainability hooks, human oversight points, and the actions to take when the model output falls below the agreed confidence threshold.",
      },
      {
        title: "Model and infrastructure specifications",
        description:
          "Training data requirements, model type recommendations, compute and serving infrastructure specifications, and monitoring requirements for each approved use case.",
      },
      {
        title: "Governance and compliance mapping",
        description:
          "A record of the governance controls and regulatory obligations that apply to each AI workflow, and the specific design decisions that address each one.",
      },
    ],
    packageHighlights: [
      "Feasibility validation prevents investment in use cases the data or infrastructure cannot yet support",
      "Responsible AI requirements specified at design time, not discovered during a post-launch audit",
      "Compliance mapping covers your sector-specific obligations so your legal and risk teams can review before build begins",
    ],
    faqIntro:
      "Common questions about the Enterprise AI and Automation AI design engagement.",
    faqs: [
      {
        question: "How is this different from the standard design engagement?",
        answer:
          "The AI design engagement focuses specifically on AI and machine learning use cases. It adds a responsible AI layer covering bias, explainability, and oversight requirements, and produces model-level specifications rather than just workflow designs.",
      },
      {
        question: "What if our data is not ready for all the use cases we want to build?",
        answer:
          "That is the point of the feasibility assessment. Use cases that fail the data readiness check are deferred. The gap remediation plan tells you exactly what data improvements are needed and in what sequence to prioritise them.",
      },
      {
        question: "How do you handle sector-specific AI regulations?",
        answer:
          "The DigitalQatalyst team maps each workflow against the applicable regulations for your sector, identifies the specific obligations that apply, and designs the controls to meet them. The compliance mapping deliverable records every decision for your legal and risk teams.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your candidate AI use cases or your AI opportunity assessment with the DigitalQatalyst team. We will confirm scope, assess your starting position, and propose an engagement plan.",
      },
    ],
    audience: "CIOs, heads of AI and data science, enterprise architects, and risk and compliance leads",
    industryRelevance:
      "Organisations in financial services, insurance, healthcare, and the public sector where AI adoption requires regulatory compliance, explainability, and robust governance before any model goes live",
    businessImpact:
      "Prevents costly build failures and post-launch remediation by resolving feasibility, governance, and compliance questions before engineering begins, and gives risk and compliance teams the documentation they need to approve the build.",
    tags: ["enterprise-ai", "responsible-ai", "ai-governance", "compliance"],
  },

  118: {
    description:
      "Configure, integrate, and launch your enterprise AI and automation capabilities into production with sprint-gated testing, quality assurance, change management, and a clean operational handover to your teams, within a twelve-week programme.",
    positioning:
      "Move from approved AI and automation designs to live production capabilities: integrated, tested, adopted, and handed over within a milestone-gated twelve-week programme.",
    features: [
      "AI and automation capability configuration and integration with your existing applications, data sources, and process workflows",
      "End-to-end testing covering functional validation, edge cases, and performance under expected production load",
      "User acceptance testing with process owners confirming the automated workflows meet agreed outcome criteria",
      "Structured go-live support and handover with runbooks, escalation paths, and trained operators ready before launch",
    ],
    timelineMilestones: [
      "Weeks 1-3: Environment provisioning, integration configuration, and source system connectivity testing",
      "Weeks 4-7: Capability build, workflow integration, and iterative functional testing",
      "Weeks 8-10: User acceptance testing, performance validation, and go-live readiness review",
      "Weeks 11-12: Controlled launch, go-live support, and operational handover",
    ],
    deliverables: [
      {
        title: "Configured and tested AI and automation platform",
        description:
          "Production capabilities live and integrated with your existing systems, tested against agreed acceptance criteria and confirmed ready for operational use.",
      },
      {
        title: "Integration test evidence pack",
        description:
          "Test results for every integration point, with defects resolved and sign-off from your technical lead before any capability goes live.",
      },
      {
        title: "Operations and incident runbook set",
        description:
          "Step-by-step runbooks for monitoring the deployed capabilities, triaging incidents, handling exceptions, and managing scheduled maintenance.",
      },
      {
        title: "Handover and training pack",
        description:
          "Role-based training materials, administrator guides, and a competency sign-off confirming your teams can operate and maintain the capabilities independently.",
      },
    ],
    packageHighlights: [
      "Acceptance criteria agreed before build, so go-live is a clear decision not a judgment call",
      "Change management and user training included in the deployment scope",
      "Operational runbooks written as part of the engagement, ready before the first incident",
    ],
    faqIntro:
      "Common questions about the Enterprise AI and Automation deployment engagement.",
    faqs: [
      {
        question: "How do you manage integration with legacy systems?",
        answer:
          "Integration patterns and constraints are identified during the design phase. During deployment, the DigitalQatalyst team builds and tests each integration point against agreed specifications, with a formal defect resolution process before sign-off.",
      },
      {
        question: "What if a workflow does not perform as expected during user acceptance testing?",
        answer:
          "UAT findings are classified by severity. Blockers are resolved before launch. Non-blocking findings are documented and addressed in a post-launch remediation sprint included within the engagement scope.",
      },
      {
        question: "How do you prepare end users for automated workflows that change how they work?",
        answer:
          "The change management plan from the design phase drives the training schedule. We run role-based training sessions during weeks ten and eleven, with materials left in place for ongoing onboarding.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your completed AI and automation design specifications to the DigitalQatalyst team. We will confirm the delivery scope, agree integration priorities, and schedule a kick-off.",
      },
    ],
    audience: "CIOs, heads of AI and automation, enterprise architects, and operations leads",
    industryRelevance:
      "Organisations in financial services, professional services, manufacturing, and the public sector deploying AI assistants, automation workflows, or cognitive process tools into live operations",
    businessImpact:
      "Delivers working AI and automation capabilities into production within a fixed timeline, with adoption built in, reducing the time between design approval and the first measurable productivity or quality improvement.",
    tags: ["enterprise-ai", "automation", "ai-deployment", "process-automation"],
  },

  119: {
    description:
      "Put your validated enterprise AI capabilities into production with full governance controls, real-time monitoring, safety checks, and a documented handover with runbooks and team sign-off so your teams can manage AI responsibly from day one.",
    positioning:
      "Launch enterprise AI in production the right way: governed, monitored, auditable, and with your teams fully prepared to operate it before the DigitalQatalyst team steps back.",
    features: [
      "Production AI deployment with model versioning, rollback capability, and staged rollout to manage adoption risk",
      "Real-time model performance and drift monitoring with configurable alert thresholds and incident playbooks",
      "Audit logging and decision traceability covering every model prediction and the human review outcomes",
      "AI operations handover including retraining triggers, model lifecycle management, and escalation protocols",
    ],
    timelineMilestones: [
      "Weeks 1-3: AI infrastructure provisioning, model packaging, and staging environment validation",
      "Weeks 4-7: Production deployment, monitoring instrumentation, and governance control implementation",
      "Weeks 8-10: Shadow period validation, load testing, and governance control verification",
      "Weeks 11-12: Controlled production launch, operations team handover, and incident playbook delivery",
    ],
    deliverables: [
      {
        title: "Production AI deployment",
        description:
          "AI capabilities live in production with model versioning, staged rollout controls, and rollback capability confirmed working before any model handles live decisions.",
      },
      {
        title: "Monitoring and alerting platform",
        description:
          "Real-time dashboards and alert configurations for model performance, input drift, prediction distribution, and infrastructure health.",
      },
      {
        title: "Audit and traceability controls",
        description:
          "Complete audit logs covering model predictions, confidence scores, human review outcomes, and model version history, meeting the audit requirements of your governance framework.",
      },
      {
        title: "AI operations handover pack",
        description:
          "Retraining triggers, model lifecycle management procedures, incident playbooks, and a sign-off checklist confirming your team can manage the AI capabilities independently.",
      },
    ],
    packageHighlights: [
      "Shadow period validation confirms model outputs are reliable before full production traffic",
      "Audit logging and traceability configured to meet your governance and regulatory requirements",
      "Retraining and lifecycle management procedures handed over with the deployment, not documented later",
    ],
    faqIntro:
      "Common questions about the Enterprise AI and Automation AI deployment engagement.",
    faqs: [
      {
        question: "What is a shadow period and why does it matter?",
        answer:
          "During the shadow period, the AI produces outputs in parallel with your existing process without acting on them. Your team reviews the outputs against known outcomes to confirm the model is reliable before it takes over the decision.",
      },
      {
        question: "How do you handle model retraining in production?",
        answer:
          "The handover pack includes documented retraining triggers based on drift thresholds or scheduled frequency, the steps to retrain safely, and the validation checks that must pass before the retrained model replaces the current version.",
      },
      {
        question: "What audit evidence does the deployment produce?",
        answer:
          "Every model prediction is logged with its input features, confidence score, output, and the human review outcome where applicable. The audit log is queryable and retained for the period your governance framework requires.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your completed AI design specifications with the DigitalQatalyst team. We will confirm infrastructure requirements, validate the governance controls to implement, and agree a deployment schedule.",
      },
    ],
    audience: "CIOs, heads of AI and data science, enterprise architects, and risk and compliance leads",
    industryRelevance:
      "Organisations in financial services, insurance, healthcare, and the public sector deploying AI capabilities where auditability, governance, and responsible operation are regulatory or board-level requirements",
    businessImpact:
      "Puts AI capabilities into production safely and responsibly, with the monitoring, audit controls, and operational procedures that protect the organisation from model failures and satisfy the governance requirements that regulators and boards expect.",
    tags: ["enterprise-ai", "ai-governance", "ml-deployment", "responsible-ai"],
  },

  120: {
    description:
      "Keep your enterprise AI and automation capabilities operating reliably and responsibly, with SLA-backed monitoring, monthly performance reporting, model lifecycle management, and a continuous improvement cycle run by the DigitalQatalyst team.",
    positioning:
      "Maintain enterprise AI that your organisation can trust every month: monitored, governed, optimised, and with every model lifecycle event handled before it becomes a problem.",
    features: [
      "Continuous AI model performance monitoring with SLA-backed response to degradation or drift alerts",
      "Monthly AI operations report covering model accuracy, drift indicators, incident history, and retraining events",
      "Proactive model lifecycle management including scheduled retraining, version upgrades, and deprecation planning",
      "Governance and compliance reporting confirming that audit controls, access policies, and responsible AI requirements remain in place",
    ],
    timelineMilestones: [
      "Month 1: Onboarding, monitoring baseline, SLA definition, and service catalogue agreement",
      "Month 2 onwards: Continuous monitoring, monthly performance reporting, and incident management",
      "Quarterly: Model review, optimisation assessment, and responsible AI compliance check",
    ],
    deliverables: [
      {
        title: "Monthly AI operations report",
        description:
          "A performance view covering model accuracy, drift indicators, prediction volumes, incident history, and any retraining events completed during the month.",
      },
      {
        title: "Incident log and resolution record",
        description:
          "A complete log of every model degradation event, alert, or incident, with time to detect and resolve, root cause, and the preventive action applied.",
      },
      {
        title: "Quarterly model review",
        description:
          "An assessment of each model's performance trend, retraining schedule, and fitness for continued production use, with recommendations for upgrades or retirement.",
      },
      {
        title: "Governance compliance report",
        description:
          "A periodic confirmation that audit logging, access controls, human oversight procedures, and responsible AI requirements remain active and compliant with your governance framework.",
      },
    ],
    packageHighlights: [
      "SLA-backed incident response so model degradation is caught and resolved before decisions are affected",
      "Proactive retraining management prevents the silent accuracy decay that makes AI untrustworthy over time",
      "Governance compliance reporting gives your risk and audit teams the evidence they need each quarter",
    ],
    faqIntro:
      "Common questions about the Enterprise AI and Automation managed service.",
    faqs: [
      {
        question: "What SLAs apply to AI model incidents?",
        answer:
          "SLAs are agreed during onboarding and cover time to detect a degradation alert, time to notify the relevant team, and time to resolve or escalate by severity. Performance against SLAs is reported monthly.",
      },
      {
        question: "How do you decide when a model needs retraining?",
        answer:
          "Retraining triggers are defined in the handover documentation from the deployment engagement. The DigitalQatalyst team monitors the agreed drift and performance thresholds and initiates retraining when a trigger is met, following the validated retraining procedure.",
      },
      {
        question: "What happens when a regulation changes and affects our AI governance requirements?",
        answer:
          "Regulatory changes relevant to your AI capabilities are flagged in the quarterly governance review. The DigitalQatalyst team will assess the impact on your current controls and recommend changes, which are then handled as a managed change request.",
      },
      {
        question: "How do we get started?",
        answer:
          "The managed service follows a completed AI deployment. Contact the DigitalQatalyst team to discuss transition planning, agree SLAs, and define the service catalogue for your AI capabilities.",
      },
    ],
    audience: "CIOs, heads of AI, chief risk officers, and enterprise AI operations leads",
    industryRelevance:
      "Organisations in financial services, insurance, healthcare, and the public sector that have deployed AI capabilities and need ongoing governance, monitoring, and lifecycle management without building a large internal MLOps team",
    businessImpact:
      "Protects the value of AI investments by preventing the performance and compliance drift that causes enterprise AI to become unreliable over time, and gives boards and regulators the evidence that AI is being operated responsibly.",
    tags: ["enterprise-ai", "ai-governance", "managed-service", "mlops"],
  },
};
