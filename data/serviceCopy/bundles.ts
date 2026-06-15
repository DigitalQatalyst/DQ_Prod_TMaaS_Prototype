import type { CollectionCopyOverrides } from "./types";

/**
 * Per-variant copy overrides for BUNDLE products (ids 203-237).
 * Each entry covers a full-journey transformation bundle spanning Design,
 * AI Design, Deploy, AI Deploy, and Managed Service stages.
 * Keyed by variant id. See ./types.ts for the field contract and voice rules.
 */
export const bundlesCopy: CollectionCopyOverrides = {
  // ─── 203: Online Web Presence ────────────────────────────────────────────

  203: {
    description:
      "Take your organisation's website from a static brochure to a high-performing digital front door: designed, AI-enhanced, launched, and actively managed under a single continuous programme. Every stage builds on the last, so the web presence that goes live reflects the strategy set on day one.",
    positioning:
      "One team, one programme, one web presence that converts visitors and keeps improving after go-live.",
    features: [
      "Continuous team context across Design, AI Design, Deploy, AI Deploy, and Managed stages removes costly re-onboarding between phases",
      "AI-informed content personalisation and journey optimisation built into the architecture from the design stage, not retrofitted later",
      "Unified governance framework means every milestone, change request, and performance metric is tracked in one place throughout the engagement",
      "Post-launch managed service extends the programme investment, applying analytics and optimisation so performance compounds over time",
    ],
    timelineMilestones: [
      "Weeks 1-4: Web strategy, user research, information architecture, and design blueprints",
      "Weeks 5-8: AI use-case validation and content personalisation specifications",
      "Weeks 9-16: Platform build, content migration, integrations, and structured testing",
      "Weeks 17-20: AI capability deployment, monitoring configuration, and controlled launch",
      "Weeks 21-24: Managed service activation, first optimisation cycle, and performance review",
    ],
    audience:
      "Chief Marketing Officers, Heads of Digital, and CX leaders accountable for online revenue and brand",
    industryRelevance:
      "B2B and B2C organisations where the website is a primary channel for lead generation, customer acquisition, or service delivery",
    businessImpact:
      "Delivers a fully operational, AI-optimised web presence within 24 weeks, with measurable improvement in organic visibility, lead conversion, and digital service completion rates from launch through continuous managed operation.",
    tags: ["bundle", "end-to-end", "web-presence", "digital-experience"],
  },

  // ─── 204: Online Social Presence ─────────────────────────────────────────

  204: {
    description:
      "Build a coordinated social media capability that spans channel strategy, AI-assisted content workflows, platform activation, and ongoing performance management without handing off between separate teams at each stage. The result is a social presence that grows audience, drives engagement, and responds to campaigns with the agility your brand requires.",
    positioning:
      "From social strategy to sustained audience growth, delivered as one programme with no hand-off gaps.",
    features: [
      "Single design-to-operate team retains full channel strategy context through every stage, eliminating briefing duplication",
      "AI content and scheduling workflows are specified and validated before build, ensuring they integrate cleanly rather than being added as afterthoughts",
      "Cross-stage governance tracks audience KPIs, content velocity, and campaign ROI from the first week through to steady-state managed operations",
      "Managed service stage continuously optimises posting cadence, channel mix, and paid amplification based on live performance data",
    ],
    timelineMilestones: [
      "Weeks 1-4: Audience analysis, channel strategy, content framework, and persona design",
      "Weeks 5-8: AI content workflow validation, scheduling automation specifications",
      "Weeks 9-14: Platform configuration, content calendar build, and integration testing",
      "Weeks 15-18: AI scheduling and analytics deployment, soft launch and tuning",
      "Weeks 19-24: Managed service activation, first campaign cycle, and performance reporting",
    ],
    audience: "Chief Marketing Officers, Heads of Social and Content, and Communications leaders",
    industryRelevance:
      "Organisations using social channels as a primary route to brand awareness, community engagement, or customer acquisition across B2C, B2B, and public-sector contexts",
    businessImpact:
      "Creates a scalable social capability with consistent content output, measurable audience growth, and AI-optimised campaign activation from launch, sustained through ongoing managed operations.",
    tags: ["bundle", "end-to-end", "social-media", "content-marketing"],
  },

  // ─── 205: Mobile Apps ────────────────────────────────────────────────────

  205: {
    description:
      "Design, build, and operate a mobile app capability that serves your customers, employees, or field teams with the reliability and experience quality they expect from day one. The bundle runs from user research through AI feature integration to App Store launch and managed support, with no re-scoping between phases.",
    positioning:
      "A mobile app designed, launched, and operated as one programme so quality is maintained from first sketch to live service.",
    features: [
      "User research and journey design from the bundle's first stage directly shapes the build backlog, preventing costly scope changes mid-development",
      "AI features such as personalisation, predictive search, or smart notifications are validated in the design stage and built to specification in deploy, not bolted on post-launch",
      "A single cross-stage team maintains app architecture context, preventing the technical debt that accumulates when design and build are separated",
      "Managed service stage includes crash monitoring, OS update management, and feature optimisation so the app does not degrade after handover",
    ],
    timelineMilestones: [
      "Weeks 1-5: User research, journey mapping, UX design, and technical architecture blueprints",
      "Weeks 6-9: AI feature use-case validation, data requirements, and interaction specifications",
      "Weeks 10-17: App development, API integrations, device testing, and UAT",
      "Weeks 18-21: AI feature deployment, performance monitoring setup, and App Store submission",
      "Weeks 22-24: Managed service activation, first update cycle, and adoption reporting",
    ],
    audience:
      "Digital Product Directors, Heads of Mobile, and Operations leaders accountable for field or customer-facing mobile services",
    industryRelevance:
      "Organisations with mobile-first customer journeys, field workforce apps, or employee self-service tools across retail, logistics, healthcare, and professional services",
    businessImpact:
      "Delivers a production-ready, AI-enhanced mobile app with sustainable managed operations, improving user adoption rates and reducing the post-launch maintenance burden that typically follows separately managed projects.",
    tags: ["bundle", "end-to-end", "mobile-app", "digital-product"],
  },

  // ─── 206: Physical Channels ──────────────────────────────────────────────

  206: {
    description:
      "Connect your physical locations with digital capabilities that make every in-person interaction faster, better informed, and easier to manage at scale. This bundle takes the solution from service design to deployed hardware integrations to managed operations, with the same team maintaining context at every stage.",
    positioning:
      "Digital capabilities for your physical locations, delivered end-to-end so frontline teams are set up to succeed from the start.",
    features: [
      "Service design and digital capability blueprints created before hardware procurement, ensuring technology choices fit the real operational environment rather than driving it",
      "AI-assisted queue management, capacity sensing, or staff scheduling specifications validated before deployment, not speculated during build",
      "Unified testing programme covers both physical integration points and digital workflows, catching issues that siloed testing misses",
      "Post-launch managed service monitors device health, customer experience signals, and operational KPIs across all locations in scope",
    ],
    timelineMilestones: [
      "Weeks 1-4: Site discovery, journey design, digital capability blueprints, and integration architecture",
      "Weeks 5-8: AI use-case validation for queue, capacity, or scheduling optimisation",
      "Weeks 9-16: System configuration, device integration, workflow build, and cross-channel testing",
      "Weeks 17-20: AI capability deployment, monitoring setup, and phased location rollout",
      "Weeks 21-24: Managed operations activation, device fleet management, and performance review cadence",
    ],
    audience:
      "Operations Directors, Heads of Retail or Branch Networks, and Facilities leaders responsible for in-person service performance",
    industryRelevance:
      "Organisations operating branches, retail stores, clinics, service centres, venues, or hospitality environments where physical and digital experience must work together",
    businessImpact:
      "Reduces queue times, improves staff productivity, and gives operations leaders a real-time view of physical channel performance, sustained through continuous managed operations after launch.",
    tags: ["bundle", "end-to-end", "physical-channels", "omnichannel"],
  },

  // ─── 207: Integrated Experience ──────────────────────────────────────────

  207: {
    description:
      "Design and deliver a connected experience ecosystem where customers and employees encounter consistent journeys, content, and personalisation regardless of which channel they use. This bundle builds the capability once, integrates it across touchpoints, and operates it continuously so the experience stays coherent as channels and expectations evolve.",
    positioning:
      "Consistent, personalised experiences across every channel, built as a single programme rather than a patchwork of individual projects.",
    features: [
      "Experience architecture designed across all channels in the first stage, creating a shared journey model that governs every subsequent build decision",
      "Personalisation and AI recommendation specifications are validated before deployment, so the right data pipelines and consent frameworks are in place from go-live",
      "Cross-channel integration testing covers edge cases that single-channel testing always misses, reducing post-launch friction",
      "Managed service tracks experience consistency metrics and runs quarterly optimisation cycles, preventing channel experience drift over time",
    ],
    timelineMilestones: [
      "Weeks 1-5: Journey research, experience architecture, channel mapping, and design system blueprints",
      "Weeks 6-9: Personalisation and AI recommendation use-case validation and data requirements",
      "Weeks 10-17: Platform configuration, content integration, cross-channel workflow build, and testing",
      "Weeks 18-21: AI personalisation deployment, consent framework activation, and experience tuning",
      "Weeks 22-24: Managed service start, first optimisation review, and experience quality baseline",
    ],
    audience:
      "Chief Experience Officers, Heads of Digital Product, and Marketing leaders responsible for customer or employee experience strategy",
    industryRelevance:
      "Consumer brands, financial services providers, and large employers where experience consistency across digital, physical, and assisted channels is a competitive differentiator",
    businessImpact:
      "Produces measurable improvement in journey completion rates, NPS, and channel attribution accuracy, with ongoing managed operations ensuring the experience advantage compounds rather than erodes.",
    tags: ["bundle", "end-to-end", "integrated-experience", "personalisation"],
  },

  // ─── 208: CRM Solutions ──────────────────────────────────────────────────

  208: {
    description:
      "Replace a fragmented approach to customer relationship management with a fully configured CRM platform that your sales, marketing, and service teams actually use, supported by AI-enhanced workflows and active managed operations that keep data and process quality high long after go-live.",
    positioning:
      "A CRM capability built for adoption and operated for performance, not handed over and left to drift.",
    features: [
      "Process design and CRM data model defined at the start of the bundle ensures platform configuration reflects how your teams actually sell and serve, reducing rework during build",
      "AI lead scoring, opportunity prioritisation, and next-best-action specifications validated before build means AI is embedded in core workflows rather than layered on top",
      "Single team carries CRM knowledge from design through deployment, so business rules captured early are not lost between phases",
      "Managed service includes data quality monitoring, user adoption reporting, and quarterly workflow optimisation so CRM performance improves rather than plateauing",
    ],
    timelineMilestones: [
      "Weeks 1-4: Sales and service process mapping, CRM requirements, data model design, and platform selection",
      "Weeks 5-8: AI workflow validation, lead scoring specifications, and integration architecture",
      "Weeks 9-16: CRM configuration, data migration, integrations, and structured UAT",
      "Weeks 17-20: AI workflow deployment, sales enablement activation, and controlled go-live",
      "Weeks 21-24: Managed operations start, adoption monitoring, and first optimisation cycle",
    ],
    audience:
      "Chief Revenue Officers, Sales Directors, VP of Marketing, and Customer Service leaders accountable for pipeline, revenue, and retention",
    industryRelevance:
      "B2B organisations managing structured sales cycles, B2C businesses with subscription or account models, and service organisations tracking relationship portfolios",
    businessImpact:
      "Increases pipeline visibility, shortens sales cycles, and improves customer retention through better data and AI-guided workflows, sustained by managed operations that maintain platform health and adoption rates.",
    tags: ["bundle", "end-to-end", "CRM", "revenue-operations"],
  },

  // ─── 209: Marketing Solutions ────────────────────────────────────────────

  209: {
    description:
      "Build a marketing operations capability that runs campaigns from audience insight to performance measurement with structured automation, AI-assisted activation, and the governance to scale it. The bundle spans strategy design through platform deployment to managed operations so marketing effectiveness compounds, not just launches.",
    positioning:
      "Marketing operations built for scalability and measured from the start, not after things go wrong.",
    features: [
      "Audience strategy, channel architecture, and campaign workflow designs created before any platform configuration, ensuring the tech stack serves the strategy",
      "AI audience segmentation, content recommendation, and campaign optimisation use cases validated in the design stage, with data requirements confirmed before build commits",
      "Cross-channel campaign testing conducted under unified governance before go-live, preventing the attribution gaps that fragment marketing reporting",
      "Managed service delivers monthly performance reporting, A/B testing cycles, and audience refresh so marketing ROI improves continuously after launch",
    ],
    timelineMilestones: [
      "Weeks 1-4: Audience strategy, campaign workflow design, MarTech architecture, and measurement framework",
      "Weeks 5-8: AI segmentation and content recommendation validation and data pipeline specifications",
      "Weeks 9-16: Platform configuration, automation build, integration testing, and campaign UAT",
      "Weeks 17-20: AI activation deployment, attribution setup, and first live campaign",
      "Weeks 21-24: Managed service start, monthly reporting cycle, and optimisation roadmap",
    ],
    audience:
      "Chief Marketing Officers, Heads of Marketing Operations, and Growth leaders accountable for demand generation and marketing ROI",
    industryRelevance:
      "Organisations scaling paid, owned, and earned marketing channels where data-driven targeting and campaign automation are necessary to maintain efficiency at volume",
    businessImpact:
      "Reduces campaign setup time, improves audience targeting precision, and increases marketing return on investment through AI-assisted optimisation, sustained by managed operations that keep the MarTech stack performing.",
    tags: ["bundle", "end-to-end", "marketing-operations", "campaign-automation"],
  },

  // ─── 210: Smart Sales & Quotation ────────────────────────────────────────

  210: {
    description:
      "Accelerate the journey from opportunity to signed order by designing, building, and operating a sales and quotation capability that automates pricing logic, guided configuration, and approval workflows. The bundle carries commercial and technical requirements through every stage under the same team, so complexity does not compound between phases.",
    positioning:
      "Faster quotes, controlled pricing, and a managed sales workflow from design to live operations.",
    features: [
      "Commercial rules, pricing logic, and approval governance captured during design are encoded directly into the platform configuration, with no translation loss between stages",
      "AI price optimisation and guided configuration use cases validated against your product catalogue and margin requirements before build investment is committed",
      "End-to-end integration testing covers CRM, ERP, and contract management connections in a single structured programme, not separate workstreams",
      "Managed service monitors quote cycle times, win rates, and pricing exception volumes so continuous improvements are grounded in real commercial data",
    ],
    timelineMilestones: [
      "Weeks 1-4: Commercial process mapping, pricing logic design, quotation workflow blueprints, and integration architecture",
      "Weeks 5-8: AI configuration guidance and price optimisation validation and CPQ platform specifications",
      "Weeks 9-16: CPQ platform build, ERP and CRM integration, approval workflow configuration, and UAT",
      "Weeks 17-20: AI recommendation deployment, pricing engine activation, and controlled go-live",
      "Weeks 21-24: Managed service start, quote performance monitoring, and first optimisation cycle",
    ],
    audience:
      "Chief Revenue Officers, Commercial Directors, and Sales Operations leaders accountable for win rates and pricing discipline",
    industryRelevance:
      "Manufacturers, technology vendors, professional services firms, and distributors with complex pricing, product configuration, or multi-stakeholder approval requirements",
    businessImpact:
      "Cuts average quote turnaround by reducing manual calculation and approval bottlenecks, improves pricing consistency, and gives commercial leaders live visibility of pipeline and margin performance.",
    tags: ["bundle", "end-to-end", "CPQ", "sales-automation"],
  },

  // ─── 211: Customer Support & Success ─────────────────────────────────────

  211: {
    description:
      "Transform customer support from a reactive cost centre into a proactive success capability: structured service workflows, AI-assisted triage and resolution, and an operations model that maintains quality at scale. The bundle runs from service design to live managed support, carrying customer context and process knowledge through every stage.",
    positioning:
      "Support operations designed for retention, not just resolution, delivered and managed end-to-end.",
    features: [
      "Service workflow, escalation path, and knowledge architecture designed together in the first stage, eliminating the gaps that emerge when support processes are designed separately from knowledge systems",
      "AI triage, suggested resolution, and sentiment analysis use cases validated before build, ensuring the right data, consent, and agent workflow integrations are confirmed upfront",
      "Unified change management and training programme spans design through go-live, so agents adopt the new model consistently rather than working around it",
      "Managed service tracks CSAT, first-contact resolution, and handle time monthly, with quarterly optimisation cycles targeting the metrics most affecting retention",
    ],
    timelineMilestones: [
      "Weeks 1-4: Service workflow mapping, knowledge architecture design, case management blueprint, and SLA framework",
      "Weeks 5-8: AI triage and resolution use-case validation, sentiment analysis specifications, and agent desktop requirements",
      "Weeks 9-16: Platform configuration, knowledge base build, integrations, training content, and UAT",
      "Weeks 17-20: AI capability deployment, agent training, controlled launch, and hypercare",
      "Weeks 21-24: Managed service activation, CSAT baseline, and first optimisation review",
    ],
    audience:
      "VP of Customer Success, Heads of Customer Service, and CX leaders accountable for retention and service cost",
    industryRelevance:
      "Subscription businesses, SaaS providers, consumer services organisations, and any company where customer retention is tied directly to support quality",
    businessImpact:
      "Improves first-contact resolution, reduces average handle time, and increases customer retention through AI-assisted support workflows, sustained by managed operations that monitor and improve performance continuously.",
    tags: ["bundle", "end-to-end", "customer-support", "service-operations"],
  },

  // ─── 212: Digital Workplace ──────────────────────────────────────────────

  212: {
    description:
      "Create a digital workplace where employees find information, collaborate across teams, and complete workflows without switching between disconnected tools. This bundle takes the employee experience from journey design to platform deployment to managed operations, maintaining the same understanding of how your organisation works at every stage.",
    positioning:
      "A digital workplace your employees will actually use, built with their journeys in mind from the first workshop to managed operations.",
    features: [
      "Employee journey research from the design stage shapes platform configuration decisions, preventing the common failure of deploying tools that do not fit real working patterns",
      "AI-assisted search, knowledge surfacing, and workflow automation validated before build ensures intelligent features are woven into the platform architecture, not added as plugins",
      "Change and adoption programme designed in stage one and executed through deployment, creating the adoption conditions for durable behaviour change rather than short-term launch activity",
      "Managed service includes platform health monitoring, feature adoption tracking, and quarterly capability reviews so the workplace continues to deliver value as the organisation evolves",
    ],
    timelineMilestones: [
      "Weeks 1-4: Employee journey research, information architecture design, collaboration workflow blueprints, and governance model",
      "Weeks 5-8: AI search and workflow automation use-case validation and integration requirements",
      "Weeks 9-16: Platform configuration, intranet or collaboration suite build, integrations, and UAT",
      "Weeks 17-20: AI feature deployment, adoption programme launch, and controlled go-live",
      "Weeks 21-24: Managed service start, adoption metrics baseline, and first quarterly capability review",
    ],
    audience:
      "Chief People Officers, Heads of IT, and Internal Communications leaders accountable for employee productivity and digital ways of working",
    industryRelevance:
      "Organisations with distributed, hybrid, or knowledge-intensive workforces where collaboration quality and information accessibility directly affect productivity and retention",
    businessImpact:
      "Reduces time spent searching for information, improves cross-team collaboration, and accelerates new employee productivity, with adoption and performance sustained through ongoing managed operations.",
    tags: ["bundle", "end-to-end", "digital-workplace", "employee-experience"],
  },

  // ─── 213: Business Process Automation ────────────────────────────────────

  213: {
    description:
      "Identify the business processes creating the most manual effort, design automation that fits your actual workflows, deploy it with proper integration and testing, and then operate it so performance improves as process volumes and requirements change. The bundle avoids the typical failure mode of automating the wrong things by starting with process design before touching any tooling.",
    positioning:
      "Automation that targets the right processes, built properly, and kept running at peak performance.",
    features: [
      "Process discovery and prioritisation in the design stage means automation investment targets the workflows with the highest return, not just the ones that are easiest to automate",
      "AI process mining, intelligent document processing, or decision automation use cases validated against your actual data quality and exception volumes before build begins",
      "Integration testing covers upstream and downstream system connections as a single programme, preventing the partial automation failures that occur when hand-offs are tested in isolation",
      "Managed service monitors process throughput, exception rates, and automation coverage monthly, and runs optimisation cycles to extend coverage as new process candidates emerge",
    ],
    timelineMilestones: [
      "Weeks 1-4: Process discovery, prioritisation, automation opportunity scoring, and workflow redesign blueprints",
      "Weeks 5-8: AI process mining and intelligent automation use-case validation, exception handling design",
      "Weeks 9-16: Automation platform build, system integrations, exception workflows, and structured testing",
      "Weeks 17-20: AI automation deployment, monitoring configuration, and phased process cutover",
      "Weeks 21-24: Managed operations start, exception monitoring, throughput reporting, and optimisation backlog",
    ],
    audience:
      "Chief Operating Officers, Heads of Transformation, and Business Process Owners accountable for operational efficiency and throughput",
    industryRelevance:
      "Organisations with high-volume, rule-based, or approval-heavy processes across finance, HR, operations, procurement, and customer service",
    businessImpact:
      "Reduces manual processing effort, shortens cycle times on priority workflows, and improves exception handling, with managed operations extending automation coverage and sustaining performance gains over time.",
    tags: ["bundle", "end-to-end", "process-automation", "RPA"],
  },

  // ─── 214: Specialised Operations ─────────────────────────────────────────

  214: {
    description:
      "Digitise the specialised operational environment where your domain-specific workflows, data types, and compliance requirements make generic enterprise platforms a poor fit. This bundle designs a tailored solution, validates AI use cases within your domain constraints, deploys the capability, and then operates it with the domain knowledge that generic managed services cannot replicate.",
    positioning:
      "Domain-fit digital operations: a solution shaped around your specialised workflows and operated by a team that understands them.",
    features: [
      "Domain-specific requirements captured during design inform platform selection and configuration, avoiding the compromises that arise when a generic tool is forced to fit specialist operations",
      "AI use cases are validated against the particular data structures, regulatory constraints, and exception patterns of your domain before any build commitment",
      "The same team that designed the solution configures and deploys it, preserving the institutional knowledge that is typically lost in hand-offs between specialist design and generic delivery teams",
      "Managed service is staffed with domain-aware operators who can interpret operational anomalies in context, rather than applying generic SLA responses to domain-specific problems",
    ],
    timelineMilestones: [
      "Weeks 1-5: Domain workflow analysis, operational requirements, platform options assessment, and solution blueprint",
      "Weeks 6-9: AI use-case validation within domain constraints, data readiness and compliance review",
      "Weeks 10-17: Platform configuration, domain-specific integration build, data migration, and specialist UAT",
      "Weeks 18-21: AI deployment, operational team training, controlled cutover, and hypercare",
      "Weeks 22-24: Managed operations activation, domain KPI baseline, and first performance review",
    ],
    audience:
      "Business Unit heads, Domain Operations Directors, and specialist function leaders where generic platforms have failed to deliver operational fit",
    industryRelevance:
      "Legal operations, research and laboratory environments, specialised financial services functions, engineering and technical operations, and regulated professional services",
    businessImpact:
      "Delivers operational capability that generic platforms cannot match, reducing manual workarounds, improving domain process control, and providing the specialist oversight needed to sustain performance.",
    tags: ["bundle", "end-to-end", "specialised-operations", "domain-specific"],
  },

  // ─── 215: Enterprise Operations ──────────────────────────────────────────

  215: {
    description:
      "Bring coherence to enterprise-wide operational coordination by designing an operating model, deploying the enabling platforms, and then running them with the governance discipline that keeps performance visible and decisions informed. The bundle spans the full journey from operating model design to live managed operations, using a single team that carries your organisational context throughout.",
    positioning:
      "Enterprise operations redesigned and operated as one coordinated programme, not a sequence of disconnected projects.",
    features: [
      "Enterprise operating model and performance framework designed first, so platform and tooling choices align to how the business needs to coordinate rather than to vendor defaults",
      "AI performance prediction, resource optimisation, and exception alerting validated against your actual operational data and reporting requirements before build",
      "A single cross-stage team prevents the fragmentation that occurs when operating model design, platform deployment, and managed operations are delivered by different parties with no shared context",
      "Managed service provides monthly enterprise performance reporting, quarterly operating model reviews, and continuous optimisation of the platforms and processes in scope",
    ],
    timelineMilestones: [
      "Weeks 1-5: Operating model design, performance framework, governance blueprint, and platform requirements",
      "Weeks 6-9: AI performance analytics and resource optimisation validation, data and integration requirements",
      "Weeks 10-17: Platform configuration, cross-function integration build, workflow activation, and UAT",
      "Weeks 18-21: AI capability deployment, leadership dashboard activation, and controlled rollout",
      "Weeks 22-24: Managed operations start, monthly reporting cycle, and first operating model review",
    ],
    audience:
      "Chief Operating Officers, Strategy and Transformation Directors, and enterprise leaders accountable for cross-functional coordination and operational performance",
    industryRelevance:
      "Large and complex organisations where operational silos, inconsistent reporting, or slow decision-making are reducing execution effectiveness at enterprise scale",
    businessImpact:
      "Improves cross-functional coordination, accelerates decision-making with better real-time visibility, and sustains enterprise performance gains through governed managed operations rather than point-in-time project outputs.",
    tags: ["bundle", "end-to-end", "enterprise-operations", "operating-model"],
  },

  // ─── 216: Governance, Risk & Compliance ──────────────────────────────────

  216: {
    description:
      "Build a governance, risk, and compliance capability that is designed with your control frameworks in mind, enhanced with responsible AI, deployed with full audit evidence, and then operated continuously so your compliance posture never degrades between reporting cycles. The bundle eliminates the gap between compliance assessment and live GRC operations.",
    positioning:
      "From control design to continuous compliance: a GRC capability built, deployed, and operated under a single programme.",
    features: [
      "Control framework, risk taxonomy, and operating model designed together in stage one, ensuring the GRC platform is configured to reflect your actual risk appetite rather than a generic template",
      "AI risk detection and compliance monitoring use cases validated against regulatory constraints and data quality requirements before any configuration work begins",
      "Audit evidence pack produced during deployment is scoped to support both internal audit review and external certification, built in rather than assembled after go-live",
      "Managed service provides monthly compliance performance reports, quarterly control testing, and proactive regulatory change monitoring as a continuous managed programme",
    ],
    timelineMilestones: [
      "Weeks 1-4: Control framework design, risk taxonomy, GRC operating model blueprints, and platform selection",
      "Weeks 5-8: AI compliance monitoring and risk detection use-case validation, regulatory constraint review",
      "Weeks 9-16: GRC platform configuration, system integrations, control workflow build, and audit evidence testing",
      "Weeks 17-20: AI monitoring deployment, alert tuning, parallel-run validation, and go-live",
      "Weeks 21-24: Managed compliance operations start, first monthly report, and quarterly control testing schedule",
    ],
    audience:
      "Chief Risk Officers, Heads of Compliance, Internal Audit Directors, and Legal and Regulatory Affairs leaders",
    industryRelevance:
      "Regulated organisations in financial services, healthcare, government contracting, energy, and any business preparing for certification or under active regulatory scrutiny",
    businessImpact:
      "Reduces compliance exposure by building continuous monitoring into live GRC operations from day one, replacing periodic manual reviews with a sustained capability that keeps the board informed and auditors confident.",
    tags: ["bundle", "end-to-end", "GRC", "compliance-operations"],
  },

  // ─── 217: Enterprise Resource Planning ───────────────────────────────────

  217: {
    description:
      "Modernise your ERP-enabled operations across finance, procurement, HR, and inventory with a single programme that takes you from process design and data model definition through platform deployment to managed ERP operations. The bundle keeps business process knowledge and technical configuration understanding with the same team at every stage, preventing the costly gap between design intent and deployed reality.",
    positioning:
      "ERP modernisation delivered as a single programme: from process design to live managed operations without context loss between phases.",
    features: [
      "Business process design and data model decisions made in the first stage directly inform every configuration and integration choice during deployment, eliminating redesign cycles mid-project",
      "AI forecasting, automated reconciliation, and procurement intelligence use cases validated against your chart of accounts, master data quality, and finance team workflows before build",
      "Single data migration strategy designed upfront and executed in deployment, with validation against business rules established at design stage rather than improvised at cutover",
      "Managed service monitors ERP system health, data quality metrics, and process performance monthly, with access to the same team that designed and deployed the capability",
    ],
    timelineMilestones: [
      "Weeks 1-5: Business process design, data model, integration architecture, and ERP platform selection",
      "Weeks 6-9: AI forecasting and automation use-case validation, master data readiness assessment",
      "Weeks 10-18: ERP configuration, data migration build, system integrations, and structured testing",
      "Weeks 19-22: AI capability deployment, cutover preparation, parallel-run, and controlled go-live",
      "Weeks 23-24: Managed ERP operations activation, hypercare, and first performance reporting cycle",
    ],
    audience:
      "Chief Financial Officers, Heads of Finance Transformation, Procurement Directors, and HR leaders accountable for core enterprise operations",
    industryRelevance:
      "Manufacturing, distribution, professional services, and public sector organisations where ERP is the operational backbone for finance, procurement, and workforce management",
    businessImpact:
      "Delivers a live, AI-enhanced ERP capability with clean data, integrated processes, and managed operations that maintain system health and drive continuous finance and operational process improvement.",
    tags: ["bundle", "end-to-end", "ERP", "finance-operations"],
  },

  // ─── 218: Workforce Management ───────────────────────────────────────────

  218: {
    description:
      "Give your workforce planning, scheduling, and productivity operations the digital backbone they need: designed around how your people actually work, enhanced with AI-driven demand forecasting, deployed with your scheduling rules embedded, and actively managed to keep schedules accurate and employees informed. One continuous programme from strategy to operations.",
    positioning:
      "Workforce management designed for your operational reality and operated to improve scheduling accuracy month after month.",
    features: [
      "Scheduling rules, demand patterns, and workforce constraints captured during design are encoded directly into platform configuration, preventing the gap between policy and deployed behaviour",
      "AI demand forecasting and optimised schedule generation use cases validated against your historical staffing data and compliance requirements before build begins",
      "Change management and employee communication programme designed alongside the platform, ensuring frontline workers adopt self-service scheduling from go-live rather than reverting to manual processes",
      "Managed service tracks schedule adherence, overtime rates, and demand forecast accuracy, with monthly reporting and quarterly model recalibration as labour patterns shift",
    ],
    timelineMilestones: [
      "Weeks 1-4: Workforce analysis, scheduling rules design, demand pattern review, and platform requirements",
      "Weeks 5-8: AI demand forecasting and schedule optimisation use-case validation and data requirements",
      "Weeks 9-16: Platform configuration, payroll integration, scheduling workflow build, and manager UAT",
      "Weeks 17-20: AI forecasting deployment, schedule generation testing, and phased workforce rollout",
      "Weeks 21-24: Managed service activation, schedule accuracy monitoring, and first optimisation cycle",
    ],
    audience:
      "HR Directors, Workforce Planning leads, and Operations leaders responsible for scheduling, labour cost, and frontline productivity",
    industryRelevance:
      "Retail, logistics, healthcare, hospitality, manufacturing, and any organisation managing shift-based, field, or distributed workforces where scheduling accuracy directly affects service quality and labour cost",
    businessImpact:
      "Reduces scheduling errors and overtime costs, improves shift coverage for customer-facing operations, and gives workforce leaders the demand visibility needed to plan accurately across seasonal and operational cycles.",
    tags: ["bundle", "end-to-end", "workforce-management", "scheduling"],
  },

  // ─── 219: Enterprise Data Platform ───────────────────────────────────────

  219: {
    description:
      "Build the data foundation your organisation needs to trust its reporting, scale its analytics, and adopt AI with confidence. This bundle takes the data platform from architecture design and governance model through to live deployment and managed data operations, with data quality and platform reliability maintained as continuous commitments rather than launch-time promises.",
    positioning:
      "A governed data platform designed for scale, deployed for quality, and managed so trust in data compounds over time.",
    features: [
      "Data architecture, governance model, and domain ownership structure designed before any platform configuration, ensuring the technical choices serve the data strategy rather than constraining it",
      "AI-readiness validation confirms that the data assets, metadata standards, and quality thresholds needed for planned AI workloads are achievable before build investment is committed",
      "Data quality framework designed in stage one and enforced through platform configuration and managed operations, creating a continuous quality assurance programme rather than a one-time data cleanse",
      "Managed data operations include data catalogue maintenance, pipeline health monitoring, and quarterly data product reviews, keeping the platform reliable as new sources and consumers are added",
    ],
    timelineMilestones: [
      "Weeks 1-5: Data architecture design, governance model, domain ownership, and platform selection",
      "Weeks 6-9: AI-readiness validation, data quality requirements, and integration catalogue review",
      "Weeks 10-17: Platform build, data pipeline development, metadata framework, and data quality testing",
      "Weeks 18-21: AI workload environment deployment, data catalogue publication, and controlled go-live",
      "Weeks 22-24: Managed data operations activation, pipeline monitoring, and first data quality review cycle",
    ],
    audience:
      "Chief Data Officers, CIOs, Data Architecture leads, and Analytics leaders accountable for data platform strategy and enterprise reporting",
    industryRelevance:
      "Data-intensive organisations in financial services, healthcare, retail, and operations sectors where data quality, lineage, and governance directly affect regulatory compliance and commercial decision-making",
    businessImpact:
      "Creates a trusted, scalable data platform that reduces time-to-insight for analytics teams, accelerates AI initiative delivery, and improves confidence in management reporting through continuous data quality management.",
    tags: ["bundle", "end-to-end", "data-platform", "data-governance"],
  },

  // ─── 220: Business Intelligence & Analytics ───────────────────────────────

  220: {
    description:
      "Turn your enterprise data into the management intelligence your leaders need to make faster, better-grounded decisions: designed around your actual KPIs and decision workflows, deployed with governed data pipelines, and operated as a continuous analytics service. The bundle builds BI capability from measurement design to live managed reporting.",
    positioning:
      "Analytics that answers the questions your leaders actually ask, built and operated as one coherent programme.",
    features: [
      "KPI framework and decision workflow analysis conducted before any dashboard design, ensuring the BI outputs serve real management decisions rather than replicating existing spreadsheet patterns",
      "AI-assisted analytics, anomaly detection, and narrative generation use cases validated against your data platform quality before build, preventing AI features from surfacing unreliable insights",
      "Single semantic layer designed and governed across all BI outputs in the programme, ensuring metric definitions are consistent across finance, operations, and commercial dashboards from launch",
      "Managed analytics service delivers monthly report packs, tracks data freshness and dashboard adoption, and runs quarterly insight reviews with leadership to keep analytics aligned to evolving business priorities",
    ],
    timelineMilestones: [
      "Weeks 1-4: KPI framework design, decision workflow analysis, data source assessment, and BI architecture",
      "Weeks 5-8: AI analytics and anomaly detection use-case validation, semantic layer design",
      "Weeks 9-15: Dashboard build, semantic layer implementation, data pipeline configuration, and UAT",
      "Weeks 16-19: AI narrative and anomaly detection deployment, management report pack testing, go-live",
      "Weeks 20-24: Managed analytics activation, adoption tracking, and first quarterly leadership review",
    ],
    audience:
      "Finance Directors, Strategy leads, Chief Data Officers, and executive sponsors accountable for management reporting and operational performance visibility",
    industryRelevance:
      "Organisations across all sectors where leadership decisions rely on enterprise data, and where inconsistent metrics, slow reporting, or poor data quality are reducing decision confidence",
    businessImpact:
      "Accelerates management decision cycles, reduces time spent reconciling conflicting data definitions, and improves leadership confidence in performance data through consistent, governed, and AI-enhanced analytics.",
    tags: ["bundle", "end-to-end", "business-intelligence", "analytics"],
  },

  // ─── 221: Enterprise AI & Automation ─────────────────────────────────────

  221: {
    description:
      "Scale AI and automation across your organisation's workflows, decisions, and knowledge operations with a programme that validates use cases responsibly, deploys governed AI capabilities, and then operates them under continuous human oversight. The bundle takes enterprise AI from strategy through responsible deployment to live managed AI operations.",
    positioning:
      "Enterprise AI deployed responsibly and operated with the oversight that makes it sustainable, not just a pilot.",
    features: [
      "AI strategy and use-case prioritisation conducted before any model selection, ensuring adoption targets the workflows with the best combination of value, data readiness, and risk profile",
      "Responsible AI assessment and workflow design stage validates ethical constraints, human-in-the-loop requirements, and regulatory obligations before build, not after a prototype fails scrutiny",
      "Governed model deployment includes safety controls, monitoring, and override procedures designed in the AI Design stage and implemented consistently across all use cases in the programme",
      "Managed AI operations monitor model performance, alert volumes, and business impact monthly, with quarterly retraining cycles and human override review built into the service as standard",
    ],
    timelineMilestones: [
      "Weeks 1-5: AI strategy, use-case discovery, responsible AI assessment, and deployment requirements",
      "Weeks 6-9: Workflow design, human-in-the-loop specifications, guardrails design, and data readiness",
      "Weeks 10-17: Model preparation, AI platform configuration, workflow integration, and parallel-run testing",
      "Weeks 18-21: Governed production deployment, safety control activation, monitoring setup, and launch",
      "Weeks 22-24: Managed AI operations activation, model performance review, and first retraining cycle",
    ],
    audience:
      "Chief AI Officers, CEOs, CIOs, and Transformation Directors accountable for enterprise AI strategy and responsible adoption",
    industryRelevance:
      "Organisations across financial services, healthcare, operations, and professional services ready to move beyond AI pilots to governed, production-scale AI operations",
    businessImpact:
      "Accelerates the safe adoption of AI at enterprise scale, improving productivity and decision speed across targeted workflows while maintaining the human oversight and governance that regulators and boards require.",
    tags: ["bundle", "end-to-end", "enterprise-AI", "responsible-AI"],
  },

  // ─── 222: Technology Governance ──────────────────────────────────────────

  222: {
    description:
      "Establish the technology governance operating model your organisation needs to make consistent investment decisions, maintain architecture standards, and oversee vendors with confidence. This bundle designs the governance framework, deploys supporting tooling, and then operates it as a continuous managed service, keeping your CIO and board informed through every portfolio and architecture cycle.",
    positioning:
      "Technology governance that works in practice, not just on paper, designed and operated as a sustained programme.",
    features: [
      "Governance operating model, decision rights, and architecture standards defined in the design stage and encoded directly into the governance tooling during deployment, preventing the drift between policy and practice",
      "AI-assisted portfolio analytics and architecture drift detection validated against your actual investment data and architecture repository before build, ensuring AI decision support is grounded rather than aspirational",
      "Governance processes activated and tested in a live cycle during deployment, so your CIO receives real governance outputs before handover rather than test artefacts",
      "Managed governance service delivers monthly portfolio reports, quarterly architecture reviews, and proactive vendor risk monitoring, all under the accountability of the same team that designed the model",
    ],
    timelineMilestones: [
      "Weeks 1-5: Governance framework design, decision rights, architecture standards, and tooling requirements",
      "Weeks 6-9: AI portfolio analytics and architecture monitoring validation, data source assessment",
      "Weeks 10-17: Governance platform configuration, data integration, process activation, and first-cycle testing",
      "Weeks 18-21: AI analytics deployment, architecture review board activation, and go-live",
      "Weeks 22-24: Managed governance operations start, monthly portfolio reporting, and architecture review cadence",
    ],
    audience:
      "Chief Information Officers, Enterprise Architecture leads, PMO Directors, and Technology Portfolio leaders",
    industryRelevance:
      "Organisations managing complex multi-platform technology portfolios, significant vendor ecosystems, or active enterprise architecture programmes across any sector",
    businessImpact:
      "Replaces ad-hoc technology governance with a disciplined, continuously operated capability that reduces investment waste, slows architecture drift, and gives leadership reliable monthly visibility of technology risk.",
    tags: ["bundle", "end-to-end", "technology-governance", "IT-governance"],
  },

  // ─── 223: DevSecOps Automation ───────────────────────────────────────────

  223: {
    description:
      "Build the DevSecOps capability your engineering teams need to deliver software faster without trading security for speed: designed with security controls embedded in the pipeline from the outset, deployed with automated testing and release governance, and then operated as a continuous managed engineering service. The bundle eliminates the security-delivery tension by treating both as engineering requirements from day one.",
    positioning:
      "DevSecOps designed for speed and security together, deployed across your pipeline, and managed as a sustained engineering capability.",
    features: [
      "Pipeline architecture, security control placement, and release governance designed as an integrated model in stage one, preventing the friction that arises when security is retrofitted to an existing delivery pipeline",
      "AI-assisted vulnerability detection, dependency scanning, and release quality prediction validated against your code repositories and deployment patterns before pipeline build",
      "Security testing automation and release gate enforcement implemented consistently across all environments in scope during a single deployment programme, avoiding the environment drift common in phased rollouts",
      "Managed DevSecOps service monitors pipeline health, security scan coverage, deployment frequency, and change failure rate, with monthly engineering performance reports and quarterly pipeline optimisation cycles",
    ],
    timelineMilestones: [
      "Weeks 1-4: Pipeline assessment, DevSecOps framework design, security control architecture, and toolchain selection",
      "Weeks 5-8: AI security scanning and release quality prediction validation, environment and repository review",
      "Weeks 9-16: Pipeline build, security control integration, automated testing activation, and engineering UAT",
      "Weeks 17-20: AI tool deployment, release gate enforcement, production monitoring setup, and go-live",
      "Weeks 21-24: Managed DevSecOps operations start, DORA metric baseline, and first optimisation cycle",
    ],
    audience:
      "Chief Technology Officers, Engineering Directors, DevOps leads, and Security leaders accountable for delivery speed, software quality, and production security",
    industryRelevance:
      "Software product companies, digital platform operators, financial services technology teams, and any organisation where software delivery velocity and production security are both board-level concerns",
    businessImpact:
      "Increases deployment frequency, reduces change failure rate, and embeds security assurance into the delivery pipeline as a permanent operational capability, improving both release confidence and audit posture.",
    tags: ["bundle", "end-to-end", "DevSecOps", "delivery-automation"],
  },

  // ─── 224: IT Operations & Support ────────────────────────────────────────

  224: {
    description:
      "Modernise IT service delivery so employees receive fast, consistent support and IT operations leaders have the visibility to manage reliability proactively. This bundle designs the service management model, deploys AI-assisted support capabilities, and then operates the IT service desk as a continuously improving managed service under defined SLAs.",
    positioning:
      "IT support redesigned for the way your people work today, then managed to maintain quality as your organisation grows.",
    features: [
      "Service catalogue, incident management process, and knowledge architecture designed together in stage one, so the ITSM platform is configured to reflect the real support model rather than a default template",
      "AI-assisted triage, knowledge article recommendation, and automated resolution use cases validated against your ticket history and knowledge base quality before any configuration work",
      "Knowledge base population and self-service portal activation completed during deployment as part of the programme, not left as a post-launch task that is typically never prioritised",
      "Managed IT service delivers monthly SLA and ticket performance reports, quarterly knowledge base reviews, and proactive capacity planning so support quality improves as headcount and tooling change",
    ],
    timelineMilestones: [
      "Weeks 1-4: Service catalogue design, incident and request workflow blueprints, ITSM platform selection, and SLA framework",
      "Weeks 5-8: AI triage and resolution use-case validation, ticket data analysis, and knowledge gap review",
      "Weeks 9-15: ITSM platform configuration, knowledge base build, integrations, self-service portal, and UAT",
      "Weeks 16-19: AI capability deployment, first-line automation activation, and controlled go-live",
      "Weeks 20-24: Managed IT service operations start, SLA baseline, and first optimisation review",
    ],
    audience:
      "Chief Information Officers, IT Operations Directors, and Service Desk leaders accountable for employee productivity and IT service reliability",
    industryRelevance:
      "Organisations of any sector where IT service quality affects employee productivity, and where growing headcount or platform complexity is straining existing support capacity",
    businessImpact:
      "Reduces average ticket resolution time, improves first-contact resolution rates through AI-assisted support, and provides IT leadership with the operational visibility to manage reliability rather than react to failures.",
    tags: ["bundle", "end-to-end", "IT-operations", "ITSM"],
  },

  // ─── 225: Farming Operations ─────────────────────────────────────────────

  225: {
    description:
      "Bring precision and coordination to farming operations by digitising field activity, crop planning, resource management, and yield monitoring across your agricultural business. This bundle designs the operational capability, validates AI-driven agronomic insights, deploys the solution across your farm environment, and then operates it through growing seasons with the domain knowledge your operations require.",
    positioning:
      "Digital farming operations from crop plan to harvest, designed for your land and operated through every season.",
    features: [
      "Operational design conducted by a team with farming context, ensuring digital workflows map to actual seasonal cycles and field activity patterns rather than generic operations templates",
      "AI yield prediction, irrigation optimisation, and pest risk alerting validated against your crop types, soil data, and historical yield records before any platform build",
      "Deployment includes field device integration, IoT sensor connectivity, and agronomic data pipeline setup as a single coordinated programme, avoiding the fragmented rollout that leaves data siloed by field or season",
      "Managed service operates through growing seasons, monitoring equipment health, data ingestion quality, and agronomic alert accuracy, with seasonal performance reviews tied to your production calendar",
    ],
    timelineMilestones: [
      "Weeks 1-4: Farm operations mapping, crop planning workflow design, data platform requirements, and device integration architecture",
      "Weeks 5-8: AI yield prediction and resource optimisation use-case validation, soil and historical data review",
      "Weeks 9-16: Platform configuration, IoT integration, field data pipeline build, and operational UAT",
      "Weeks 17-20: AI agronomic model deployment, alert configuration, seasonal monitoring setup, and go-live",
      "Weeks 21-24: Managed farming operations activation, first seasonal review, and yield data baseline",
    ],
    audience:
      "Agribusiness Chief Operating Officers, Farm Operations Directors, and Agricultural Technology leaders",
    industryRelevance:
      "Commercial farming enterprises, food production businesses, agribusiness cooperatives, and agricultural technology providers across arable, horticultural, and livestock operations",
    businessImpact:
      "Improves yield predictability, reduces input waste through precise resource management, and gives farm operations leaders the real-time field visibility needed to act on agronomic signals before they become production losses.",
    tags: ["bundle", "end-to-end", "farming-operations", "agritech"],
  },

  // ─── 226: Manufacturing Operations ───────────────────────────────────────

  226: {
    description:
      "Modernise your manufacturing operations with a programme that connects production planning, shopfloor visibility, quality management, and predictive maintenance into a single operational capability. The bundle takes manufacturing digitisation from process design through MES and IIoT deployment to managed plant operations, maintaining the production context needed to make each stage build on the last.",
    positioning:
      "Manufacturing operations redesigned for Industry 4.0 and operated to improve OEE continuously after go-live.",
    features: [
      "Production process mapping and digital workflow design conducted before any platform selection, ensuring the manufacturing execution system reflects your actual production sequences and quality checkpoints",
      "AI predictive maintenance, quality defect detection, and production scheduling optimisation validated against your equipment data, failure history, and production constraint records before build",
      "Shopfloor integration programme covering PLC, SCADA, and sensor connectivity as a unified deployment, avoiding the data fragmentation that results from separate integration projects for each production line",
      "Managed plant operations service monitors OEE, predictive maintenance alert accuracy, quality rates, and production plan adherence with monthly reports and quarterly optimisation cycles",
    ],
    timelineMilestones: [
      "Weeks 1-5: Production process mapping, digital workflow design, MES requirements, and IIoT architecture",
      "Weeks 6-9: AI predictive maintenance and quality detection validation, equipment data and sensor review",
      "Weeks 10-17: MES configuration, PLC and sensor integration, production workflow build, and plant UAT",
      "Weeks 18-21: AI model deployment, predictive alert configuration, production monitoring setup, and phased go-live",
      "Weeks 22-24: Managed plant operations activation, OEE baseline, and first quarterly optimisation review",
    ],
    audience:
      "Manufacturing Directors, Plant Managers, and Operations leaders accountable for production throughput, quality, and asset performance",
    industryRelevance:
      "Discrete and process manufacturers, industrial operators, food and beverage producers, and automotive and aerospace component suppliers undertaking Industry 4.0 transformation",
    businessImpact:
      "Increases overall equipment effectiveness, reduces unplanned downtime through predictive maintenance, and improves quality defect detection rates, with managed operations sustaining and extending these gains as production volumes and mix change.",
    tags: ["bundle", "end-to-end", "manufacturing-operations", "Industry-4.0"],
  },

  // ─── 227: Infrastructure Operations ─────────────────────────────────────

  227: {
    description:
      "Digitise infrastructure asset management and field operations with a programme that takes you from asset data model design through IoT and field mobility deployment to managed infrastructure operations. The bundle addresses the challenge of ageing asset records, reactive maintenance, and field coordination gaps as a single end-to-end capability, not separate workstreams.",
    positioning:
      "Infrastructure operations built on trusted asset data, predictive maintenance, and the field mobility your teams need to act fast.",
    features: [
      "Asset data model, maintenance strategy, and field workflow design conducted in stage one ensures the operational platform reflects your actual asset classes, maintenance regimes, and field team structures",
      "AI predictive failure detection and work order prioritisation validated against your historical maintenance records and asset condition data before any configuration begins",
      "Field mobility and IoT sensor integration deployed as part of the same programme as the asset management platform, ensuring data flows from sensor to work order to performance dashboard without manual intervention",
      "Managed infrastructure operations provide monthly asset health reports, maintenance schedule adherence tracking, and quarterly asset performance reviews aligned to your regulatory and service level commitments",
    ],
    timelineMilestones: [
      "Weeks 1-5: Asset data model design, maintenance strategy, field workflow blueprints, and integration architecture",
      "Weeks 6-9: AI predictive maintenance validation, sensor data review, and condition monitoring requirements",
      "Weeks 10-17: EAM platform configuration, IoT integration, field mobility deployment, and structured testing",
      "Weeks 18-21: AI failure prediction deployment, work order automation, monitoring setup, and go-live",
      "Weeks 22-24: Managed infrastructure operations activation, maintenance schedule baseline, and first performance review",
    ],
    audience:
      "Asset Management Directors, Infrastructure Operations leaders, and Facilities or Utilities executives accountable for asset reliability and maintenance cost",
    industryRelevance:
      "Utilities, transport authorities, energy operators, real estate portfolio managers, and asset-intensive industrial operators where asset reliability and regulatory compliance are operational priorities",
    businessImpact:
      "Reduces unplanned asset failures through predictive maintenance, improves field productivity through better work order management, and provides asset leaders with the reliability data needed to plan capital investment accurately.",
    tags: ["bundle", "end-to-end", "infrastructure-operations", "asset-management"],
  },

  // ─── 228: Government Operations ──────────────────────────────────────────

  228: {
    description:
      "Modernise government service delivery and internal operations with a programme that designs citizen-centred workflows, validates responsible AI use within public sector constraints, deploys digital capabilities with the security and accessibility standards public services require, and then operates them as managed government services accountable to citizens and oversight bodies.",
    positioning:
      "Government transformation delivered with the accountability, accessibility, and security that public services demand.",
    features: [
      "Service design grounded in citizen journey research and public sector accessibility requirements, ensuring digital services meet the standards expected before build investment is committed",
      "AI use-case validation conducted with public sector regulatory, explainability, and ethical constraints as first-order requirements, not afterthoughts added during deployment",
      "Deployment programme includes security accreditation support, accessibility compliance testing, and data sovereignty verification as integrated workstreams, not separate projects requiring separate sign-off cycles",
      "Managed public service operations deliver monthly service performance reports, accessibility compliance monitoring, and security posture reviews aligned to government assurance frameworks",
    ],
    timelineMilestones: [
      "Weeks 1-5: Citizen journey research, service workflow design, accessibility requirements, and digital platform selection",
      "Weeks 6-9: AI use-case validation within public sector constraints, data governance and security requirements",
      "Weeks 10-17: Platform configuration, accessibility build, security controls, and structured testing",
      "Weeks 18-21: AI capability deployment, security accreditation, accessibility audit, and controlled launch",
      "Weeks 22-24: Managed government service operations start, first citizen satisfaction measurement, and performance baseline",
    ],
    audience:
      "Digital Government Directors, Ministry CIOs, Agency Operations leaders, and Transformation Secretaries accountable for public service delivery",
    industryRelevance:
      "National and local government ministries, regulatory agencies, public authorities, and publicly funded service organisations transforming citizen-facing or internal government operations",
    businessImpact:
      "Improves citizen service speed and accessibility, reduces case processing backlogs through automation, and provides public sector leaders with the operational transparency expected by oversight bodies and the public.",
    tags: ["bundle", "end-to-end", "government-operations", "citizen-services"],
  },

  // ─── 229: Hospitality Operations ─────────────────────────────────────────

  229: {
    description:
      "Elevate the guest experience and streamline hospitality operations by designing a digital capability that connects reservations, housekeeping, food and beverage, and guest communications into a single coordinated service model. The bundle takes hospitality operations from workflow design through property management system deployment to live managed guest operations.",
    positioning:
      "Hospitality operations built around the guest journey, deployed across your properties, and managed to improve satisfaction scores continuously.",
    features: [
      "Guest journey mapping and operational workflow design conducted first ensures that platform configuration reflects your actual service standards and property workflows, not a generic hospitality template",
      "AI-driven demand forecasting, dynamic pricing, and personalised upsell recommendations validated against your booking history, seasonality patterns, and revenue management strategy before build",
      "Property management system and guest communication platform deployed as a single integrated programme, eliminating the fragmentation where reservations, housekeeping, and F&B operate on disconnected systems",
      "Managed hospitality operations monitor guest satisfaction scores, service response times, and revenue per available room, with seasonal performance reviews and continuous operational optimisation",
    ],
    timelineMilestones: [
      "Weeks 1-4: Guest journey mapping, service workflow design, PMS requirements, and revenue management integration architecture",
      "Weeks 5-8: AI demand forecasting and personalisation use-case validation, booking data review",
      "Weeks 9-15: PMS and channel manager configuration, housekeeping integration, F&B workflow build, and UAT",
      "Weeks 16-19: AI pricing and personalisation deployment, guest communication activation, and controlled go-live",
      "Weeks 20-24: Managed hospitality operations activation, guest satisfaction baseline, and first revenue review",
    ],
    audience:
      "Hotel General Managers, Heads of Operations, Revenue Directors, and Guest Experience leaders accountable for occupancy, RevPAR, and guest satisfaction",
    industryRelevance:
      "Hotels, resorts, serviced residences, venue operators, and tourism businesses where guest experience quality and revenue optimisation are both operational and commercial priorities",
    businessImpact:
      "Improves guest satisfaction scores through faster, more personalised service, increases RevPAR through AI-driven pricing and upsell, and reduces operational coordination effort across housekeeping, F&B, and front office.",
    tags: ["bundle", "end-to-end", "hospitality-operations", "guest-experience"],
  },

  // ─── 230: Retail Operations ───────────────────────────────────────────────

  230: {
    description:
      "Build a retail operations capability that keeps stores performing, inventory accurate, and customer engagement consistent across all channels. This bundle designs the omnichannel operational model, validates AI merchandising and demand planning use cases, deploys the platform, and then operates retail operations as a managed service that responds to trading patterns rather than lagging them.",
    positioning:
      "Retail operations designed for omnichannel consistency and managed to improve trading performance continuously after launch.",
    features: [
      "Omnichannel operational model and inventory architecture designed before any platform configuration, preventing the inventory synchronisation failures that stem from designing commerce and store systems separately",
      "AI demand forecasting, replenishment optimisation, and personalised promotion targeting validated against your SKU portfolio, seasonality, and customer purchase data before build",
      "Store systems, e-commerce platform, and inventory management deployed as a unified programme with a single integration testing cycle covering all channel hand-offs",
      "Managed retail operations deliver weekly trading performance dashboards, monthly inventory accuracy reports, and quarterly trading reviews so operational response keeps pace with commercial needs",
    ],
    timelineMilestones: [
      "Weeks 1-4: Omnichannel model design, inventory architecture, store workflow blueprints, and platform selection",
      "Weeks 5-8: AI demand forecasting and promotion targeting validation, customer data and catalogue review",
      "Weeks 9-16: Platform configuration, store and commerce integrations, inventory workflow build, and trading UAT",
      "Weeks 17-20: AI merchandising deployment, promotion engine activation, and controlled launch",
      "Weeks 21-24: Managed retail operations activation, inventory accuracy baseline, and first trading performance review",
    ],
    audience:
      "Chief Retail Officers, Heads of Commerce, Store Operations Directors, and Supply Chain leaders accountable for sales performance and stock accuracy",
    industryRelevance:
      "Physical and omnichannel retailers, grocery operators, fashion and lifestyle brands, and marketplace businesses where inventory accuracy and customer engagement are critical to trading performance",
    businessImpact:
      "Reduces stock-outs and overstock positions through AI-driven replenishment, improves conversion through better promotion targeting, and gives retail leaders the real-time trading visibility to respond to demand shifts quickly.",
    tags: ["bundle", "end-to-end", "retail-operations", "omnichannel"],
  },

  // ─── 231: Service Operations ──────────────────────────────────────────────

  231: {
    description:
      "Design and operate a service delivery model that coordinates scheduling, field execution, quality, and customer follow-through from a single platform. This bundle takes service operations from workflow design through field service management deployment to managed service operations, keeping service delivery KPIs and operational context with the same team throughout.",
    positioning:
      "Service operations designed for throughput and quality, deployed for field execution, and managed to close every job right.",
    features: [
      "Service workflow, scheduling rules, and quality checkpoint design in stage one ensures the field service management platform is configured to match your actual service types, technician skills, and SLA commitments",
      "AI job scheduling optimisation and predictive service demand validated against your job history, technician capacity, and geographic distribution before build",
      "Customer communication workflows, technician mobile app, and back-office integration deployed in a single programme, eliminating the gap between what the customer is told and what the field team does",
      "Managed service operations track first-time fix rate, SLA compliance, technician utilisation, and customer satisfaction monthly, with quarterly scheduling optimisation cycles",
    ],
    timelineMilestones: [
      "Weeks 1-4: Service workflow design, scheduling rules, skill matrix, SLA framework, and FSM platform selection",
      "Weeks 5-8: AI scheduling optimisation and demand forecasting validation, job history and capacity review",
      "Weeks 9-15: FSM configuration, mobile app deployment, customer communication build, and integrated testing",
      "Weeks 16-19: AI scheduling deployment, route optimisation activation, and controlled go-live",
      "Weeks 20-24: Managed service operations activation, first-time fix baseline, and scheduling optimisation cycle",
    ],
    audience:
      "Service Operations Directors, Field Service Managers, and Customer Experience leaders accountable for service delivery quality and operational cost",
    industryRelevance:
      "Field service organisations, maintenance and repair providers, professional services firms, facilities management companies, and any organisation where technician scheduling and on-site service quality affect customer retention",
    businessImpact:
      "Increases first-time fix rates, reduces travel time through AI-optimised scheduling, improves customer satisfaction through proactive communication, and gives service leaders the visibility to manage capacity before SLA breaches occur.",
    tags: ["bundle", "end-to-end", "service-operations", "field-service"],
  },

  // ─── 232: Logistics Operations ───────────────────────────────────────────

  232: {
    description:
      "Build a logistics capability that gives you real-time visibility across your fleet, warehouse, and fulfilment operations while reducing the manual coordination that slows execution and creates errors. This bundle takes logistics digitisation from operational design through WMS and TMS deployment to managed logistics operations, maintaining supply chain context at every stage.",
    positioning:
      "Logistics operations built for visibility and responsiveness, deployed end-to-end, and managed to reduce exception handling costs.",
    features: [
      "Supply chain operational design and data flow architecture confirmed before any platform selection, ensuring the WMS, TMS, and tracking systems are chosen and configured to work together from the start",
      "AI route optimisation, demand-driven replenishment, and predictive delay alerting validated against your shipment volumes, carrier mix, and network geography before build",
      "Warehouse, transport, and carrier integration deployed as a unified programme with end-to-end testing covering order, pick, dispatch, and last-mile hand-offs in a single test cycle",
      "Managed logistics operations deliver daily exception dashboards, weekly performance summaries, and monthly network optimisation reviews so logistics costs and service levels improve continuously",
    ],
    timelineMilestones: [
      "Weeks 1-5: Network design, operational workflow mapping, data flow architecture, and WMS or TMS platform selection",
      "Weeks 6-9: AI route and replenishment optimisation validation, carrier data and shipment history review",
      "Weeks 10-17: Platform configuration, warehouse workflow build, carrier integration, and end-to-end testing",
      "Weeks 18-21: AI optimisation deployment, tracking activation, monitoring setup, and phased go-live",
      "Weeks 22-24: Managed logistics operations activation, network performance baseline, and first monthly review",
    ],
    audience:
      "Supply Chain Directors, Heads of Logistics, Fulfilment Operations leaders, and COOs accountable for delivery performance and logistics cost",
    industryRelevance:
      "3PL providers, e-commerce fulfilment operators, distributors, manufacturers with outbound logistics operations, and importers where delivery performance and inventory accuracy are competitive differentiators",
    businessImpact:
      "Improves on-time delivery rates, reduces per-shipment cost through AI-optimised routing, and gives logistics leaders the real-time network visibility needed to intervene before delays become customer complaints.",
    tags: ["bundle", "end-to-end", "logistics-operations", "supply-chain"],
  },

  // ─── 233: Wellness Operations ────────────────────────────────────────────

  233: {
    description:
      "Create a wellness service model where clients receive consistent, coordinated care from first booking through treatment, follow-up, and ongoing wellness engagement. This bundle designs the client experience and clinical workflow, validates AI-assisted care recommendations within wellness and clinical constraints, deploys the practice management capability, and then operates it as a managed wellness service.",
    positioning:
      "A connected wellness capability that improves client outcomes and practice efficiency, designed and managed end-to-end.",
    features: [
      "Client journey and care workflow design conducted before any practice management platform configuration, ensuring scheduling, records, and care coordination align to your actual clinical or wellness model",
      "AI wellness recommendation, appointment optimisation, and client engagement use cases validated against your care protocols, data consent model, and applicable wellness or clinical regulations",
      "Client portal, practitioner scheduling, and electronic records deployed as a single integrated programme, preventing the disconnection between what clients see and what practitioners access",
      "Managed wellness operations monitor booking conversion, client retention, appointment utilisation, and care plan completion rates, with quarterly operational reviews and continuous workflow optimisation",
    ],
    timelineMilestones: [
      "Weeks 1-4: Client journey mapping, care workflow design, practice management requirements, and regulatory review",
      "Weeks 5-8: AI care recommendation and scheduling optimisation validation, consent model and data review",
      "Weeks 9-15: Platform configuration, client portal build, records integration, and clinical workflow testing",
      "Weeks 16-19: AI recommendation deployment, appointment optimisation activation, and controlled go-live",
      "Weeks 20-24: Managed wellness operations activation, client retention baseline, and first quarterly review",
    ],
    audience:
      "Clinic Directors, Wellness Operations leaders, and Practice Managers accountable for client outcomes, retention, and practitioner productivity",
    industryRelevance:
      "Wellness centres, physiotherapy and allied health clinics, preventive health providers, fitness and lifestyle operators, and mental health service organisations",
    businessImpact:
      "Increases client retention through personalised engagement, reduces appointment no-show rates through automated reminders, improves practitioner utilisation, and gives practice leaders clear visibility of care quality and operational performance.",
    tags: ["bundle", "end-to-end", "wellness-operations", "health-tech"],
  },

  // ─── 234: Advisory Set ───────────────────────────────────────────────────

  234: {
    description:
      "A structured advisory programme for organisations that need targeted diagnostic work across multiple transformation domains before committing to larger investments. The Advisory Set applies the DigitalQatalyst team's assessment methodology selectively across your chosen capability areas, producing a consolidated view of priorities with the rigour of a full assessment and the focus of a targeted engagement.",
    positioning:
      "Targeted transformation diagnostics across your chosen domains, consolidated into priorities your leadership can act on.",
    features: [
      "Scope defined by your transformation agenda, not a fixed domain list, allowing the advisory to focus where your organisation's most consequential decisions need support",
      "Cross-domain findings consolidated into a single priority map, surfacing the interdependencies between capability areas that siloed assessments typically miss",
      "Each advisory workstream applies the same structured assessment methodology, ensuring findings are comparable and can be sequenced into a coherent transformation roadmap",
      "Executive alignment session at the close translates findings into investment decisions and sequencing recommendations that leadership can take to board or budget review",
    ],
    timelineMilestones: [
      "Phase 1: Scope alignment and advisory workstream design",
      "Phase 2: Domain assessments, stakeholder interviews, and findings development",
      "Phase 3: Cross-domain analysis, priority synthesis, and roadmap drafting",
      "Phase 4: Leadership playback, investment alignment, and roadmap sign-off",
    ],
    audience:
      "Chief Executives, Strategy Directors, Transformation Sponsors, and Executive leadership teams making investment decisions across multiple transformation domains",
    industryRelevance:
      "Organisations at a strategic inflection point across any sector, where multiple transformation opportunities are competing for leadership attention and investment priority",
    businessImpact:
      "Creates the leadership alignment and priority clarity needed to commit transformation investment with confidence, reducing the risk of misallocated spend across competing initiatives.",
    tags: ["bundle", "end-to-end", "advisory", "transformation-strategy"],
  },

  // ─── 235: Design Services Set ────────────────────────────────────────────

  235: {
    description:
      "A design programme that turns transformation priorities across multiple capability areas into solution blueprints, user-centred specifications, and delivery-ready backlogs. The Design Services Set applies the DigitalQatalyst team's design methodology selectively across your chosen domains, with cross-domain design coherence built in rather than bolted on.",
    positioning:
      "Transformation blueprints across your chosen domains, coordinated to avoid conflicts and ready to hand to delivery teams.",
    features: [
      "Design scope shaped around your transformation priorities, with the DigitalQatalyst team confirming design dependencies and sequencing before work begins to prevent downstream conflicts",
      "Each domain design produces build-ready specifications with acceptance criteria, data requirements, and integration dependencies documented to a consistent standard",
      "Cross-domain integration requirements identified and resolved during the design programme, not discovered during build when fixing them is expensive",
      "Design governance framework established at the start applies consistent architecture principles and approval standards across all domain workstreams in the set",
    ],
    timelineMilestones: [
      "Phase 1: Design scope alignment, cross-domain dependency mapping, and design principles",
      "Phase 2: Domain design workstreams: journey design, solution blueprints, and specification development",
      "Phase 3: Cross-domain integration design, architecture review, and specification alignment",
      "Phase 4: Stakeholder sign-off, delivery backlog handover, and build-readiness confirmation",
    ],
    audience:
      "Heads of Digital and Technology, Delivery Sponsors, Product Directors, and Programme leaders accountable for solution design quality across multiple workstreams",
    industryRelevance:
      "Organisations with concurrent transformation workstreams across digital, operational, or data domains that need coordinated design rather than separately managed design projects",
    businessImpact:
      "Delivers build-ready specifications for multiple transformation domains without the integration conflicts that arise from separately managed design workstreams, accelerating the path from strategy to delivery.",
    tags: ["bundle", "end-to-end", "design-services", "transformation-design"],
  },

  // ─── 236: Deploy Services Set ────────────────────────────────────────────

  236: {
    description:
      "A structured deployment programme that implements selected TMaaS capabilities across your organisation through managed delivery, configuration, and integration work governed under a single programme framework. The Deploy Services Set applies consistent delivery standards across multiple capability deployments, reducing the coordination burden that falls on your team when running separate delivery projects simultaneously.",
    positioning:
      "Multiple capability deployments coordinated as one programme, with shared governance and a single programme team accountable for delivery.",
    features: [
      "Delivery programme governance established at the start covers all deployment workstreams, providing a single status view and consistent escalation path rather than separate steering arrangements for each capability",
      "Integration dependencies across capability deployments managed within the programme, preventing the hand-off failures that occur when separate projects share data or platform dependencies",
      "Testing and quality assurance standards applied consistently across all deployments in the set, so acceptance criteria and defect management are governed to the same standard everywhere",
      "Controlled launch and hypercare coordinated across all capabilities in scope, ensuring support capacity and issue management are planned for the full go-live portfolio rather than each deployment in isolation",
    ],
    timelineMilestones: [
      "Phase 1: Programme setup, deployment scope confirmation, and dependency mapping across capabilities",
      "Phase 2: Configuration and build across capability workstreams, with integration touchpoints managed centrally",
      "Phase 3: Integrated testing, cross-capability UAT, and launch readiness confirmation",
      "Phase 4: Phased go-live, hypercare, and operational handover across all deployed capabilities",
    ],
    audience:
      "Programme Directors, Delivery Sponsors, and Technology leaders accountable for delivering multiple simultaneous transformation capabilities",
    industryRelevance:
      "Organisations with active transformation portfolios across digital, data, operational, or automation domains where separate project delivery is creating coordination overhead and integration risk",
    businessImpact:
      "Reduces delivery risk and coordination effort for multi-capability deployments, shortening the time from committed investment to live operations by treating interdependent deployments as a single managed programme.",
    tags: ["bundle", "end-to-end", "deployment-services", "programme-delivery"],
  },

  // ─── 237: Managed Services Set ───────────────────────────────────────────

  237: {
    description:
      "A flexible managed operations programme that sustains performance across your deployed TMaaS capabilities after launch, with monitoring, optimisation, and continuous improvement governed under a single service agreement. The Managed Services Set gives organisations one accountable team for ongoing operations across multiple capabilities rather than separate managed service contracts for each.",
    positioning:
      "One team, one service agreement, one performance view across all your deployed capabilities after go-live.",
    features: [
      "Single service management framework governs all capabilities in scope, providing a consolidated monthly performance report and one escalation path for issues across all deployed platforms",
      "Continuous optimisation cycles applied across the set identify improvement opportunities that span capability boundaries, such as data quality improvements that benefit both analytics and automation",
      "SLA coverage negotiated at the portfolio level, with the flexibility to allocate response priority and service hours to the capabilities where operational risk is highest",
      "Regular performance reviews assess each capability's contribution to business outcomes and identify where additional investment or scope changes would increase impact, keeping the managed service aligned to your evolving priorities",
    ],
    timelineMilestones: [
      "Phase 1: Service scope confirmation, SLA alignment, and onboarding across all capabilities in the set",
      "Phase 2: Steady-state operations, first consolidated performance reporting cycle, and baseline establishment",
      "Phase 3: First optimisation cycle, cross-capability improvement identification, and service review",
      "Ongoing: Monthly performance reporting, continuous monitoring, and quarterly optimisation across all capabilities",
    ],
    audience:
      "Chief Operating Officers, Service Owners, IT Directors, and Transformation leaders accountable for the sustained performance of deployed digital and operational capabilities",
    industryRelevance:
      "Organisations with multiple live TMaaS capabilities that want a coordinated managed service approach rather than a growing portfolio of separately contracted support arrangements",
    businessImpact:
      "Reduces the management overhead of operating multiple deployed capabilities, improves cross-capability performance through coordinated optimisation, and provides leadership with a single consolidated view of operational health across the transformation portfolio.",
    tags: ["bundle", "end-to-end", "managed-services", "service-operations"],
  },
};
