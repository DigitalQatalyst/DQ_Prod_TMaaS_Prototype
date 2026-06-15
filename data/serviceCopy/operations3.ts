import type { CollectionCopyOverrides } from "./types";

/**
 * OPERATIONS batch 3: Hospitality Operations, Retail Operations, Service Operations,
 * Logistics Operations, Wellness Operations (variant ids 173-202).
 * Keyed by variant id. See ./types.ts for the field contract and voice rules.
 */
export const operations3Copy: CollectionCopyOverrides = {
  // -----------------------------------------------------------------------
  // HOSPITALITY OPERATIONS (ids 173-178)
  // -----------------------------------------------------------------------

  173: {
    description:
      "A structured assessment of your hotel, resort, or venue operations that surfaces the friction points costing you guest satisfaction, staff hours, and revenue, and returns a prioritised roadmap your leadership team can act on.",
    positioning:
      "Find the operational gaps that are holding back guest experience, then prioritise the fixes with the greatest return.",
    features: [
      "Guest-journey friction audit covering front-of-house, housekeeping, F&B, and reservations",
      "Staff coordination review identifying handoff failures and scheduling inefficiencies",
      "Technology coverage gap analysis across your PMS, POS, and guest-communication tools",
      "Prioritised recommendations scored by guest-experience impact and delivery effort",
    ],
    timelineMilestones: [
      "Days 1-2: Stakeholder interviews, operational data review, and scope confirmation",
      "Days 3-4: Guest-journey mapping, friction scoring, and technology gap analysis",
      "Day 5: Findings playback, prioritised roadmap, and quick-win recommendations",
    ],
    deliverables: [
      {
        title: "Guest-journey friction map",
        description:
          "A stage-by-stage view of where service breaks down, with root causes and the measurable cost of each failure point.",
      },
      {
        title: "Operational capability assessment",
        description:
          "Rated review of staffing models, handoff processes, and technology coverage against your service standards.",
      },
      {
        title: "Prioritised improvement roadmap",
        description:
          "Sequenced actions ranked by guest-satisfaction impact, feasibility, and estimated effort so you start with highest-return fixes.",
      },
      {
        title: "Quick-win summary",
        description:
          "A short list of changes your team can make without capital investment, ready to action within weeks of the assessment.",
      },
    ],
    packageHighlights: [
      "Fixed-scope assessment with no obligation to proceed to build",
      "Covers front-of-house, back-of-house, and technology in a single engagement",
      "Prioritised roadmap ready to present to leadership within the week",
    ],
    faqIntro: "Common questions about the Hospitality Operations assessment.",
    faqs: [
      {
        question: "Which parts of our operation does the assessment cover?",
        answer:
          "Front-of-house service, housekeeping coordination, F&B operations, reservations, and the technology systems that connect them. We confirm exact scope with the DigitalQatalyst team during kick-off.",
      },
      {
        question: "Do you need access to our PMS or POS systems?",
        answer:
          "We review system configurations and reporting outputs, not guest data. Any access is read-only and agreed in advance.",
      },
      {
        question: "What does the roadmap look like?",
        answer:
          "A sequenced list of improvements ranked by guest-experience impact and effort, with owners, dependencies, and a suggested phasing for delivery.",
      },
      {
        question: "We are seasonal. Does timing matter?",
        answer:
          "We recommend scheduling the assessment in shoulder season so operational leaders are available for interviews and the findings land before your next peak.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation and the DigitalQatalyst team will confirm the scope, the key stakeholders to involve, and the assessment start date.",
      },
    ],
    audience:
      "General managers, heads of operations, and guest experience directors in hotels, resorts, and venues",
    industryRelevance:
      "Hotels, resorts, serviced apartments, tourism operators, conference venues, and hospitality groups",
    businessImpact:
      "Identifies the highest-cost service failures and technology gaps, giving leadership a clear, prioritised plan to raise guest satisfaction scores and reduce operational waste.",
    tags: ["guest-experience", "hospitality-operations", "operational-assessment"],
  },

  174: {
    description:
      "A design engagement that translates your hospitality operations goals into guest-centred service blueprints, workflow specifications, and technology integration plans your delivery teams can build and launch from.",
    positioning:
      "Turn operational ambitions into a build-ready hospitality service blueprint, from guest journeys to system integrations.",
    features: [
      "End-to-end guest service journey design covering arrival, stay, and departure touchpoints",
      "Staff workflow and handoff specifications that reduce coordination failures across departments",
      "PMS, POS, and guest-communication integration architecture with data-flow diagrams",
      "Adoption and change plan covering training, role-specific guides, and go-live communication",
    ],
    timelineMilestones: [
      "Week 1: Discovery workshops, current-state mapping, and design principles agreement",
      "Weeks 2-3: Guest journey design, workflow specification, and technology integration architecture",
      "Week 4: Design review, stakeholder sign-off, and final blueprint delivery",
    ],
    deliverables: [
      {
        title: "Guest service blueprint",
        description:
          "Detailed end-to-end journey maps for each guest segment, with service standards, touchpoints, and failure-prevention checkpoints built in.",
      },
      {
        title: "Operational workflow specifications",
        description:
          "Step-by-step workflow definitions for housekeeping, F&B, concierge, and front desk, designed to reduce handoff errors and response time.",
      },
      {
        title: "Technology integration architecture",
        description:
          "Data-flow and integration diagrams connecting PMS, POS, guest-messaging, and back-office tools into a coherent operational picture.",
      },
      {
        title: "Adoption and training plan",
        description:
          "Role-specific onboarding materials, training outlines, and a communication plan to bring staff along during rollout.",
      },
    ],
    packageHighlights: [
      "Blueprint covers guest-facing and back-of-house workflows in a single design sprint",
      "Integration architecture is system-agnostic and built to your existing tech stack",
      "Stakeholder-approved specifications handed to your delivery team in build-ready format",
    ],
    faqIntro: "Key questions about the Hospitality Operations design engagement.",
    faqs: [
      {
        question: "What do we need to prepare before the design engagement starts?",
        answer:
          "Current service standards, PMS/POS system documentation, and availability of department heads for two workshops in week one. The DigitalQatalyst team will share a preparation checklist.",
      },
      {
        question: "Does this engagement include visual design for guest-facing interfaces?",
        answer:
          "The focus is service and workflow design. UI/visual design for any guest-facing digital surfaces is scoped separately if needed.",
      },
      {
        question: "How are the specifications handed over to the delivery team?",
        answer:
          "Documented blueprints, annotated workflow diagrams, and integration specs in a shared workspace, formatted for handover to internal or third-party delivery teams.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call. The DigitalQatalyst team will review your current-state documentation and confirm the design sprint schedule.",
      },
    ],
    audience:
      "Operations directors, technology managers, and heads of guest experience in hospitality organisations planning operational improvement programmes",
    industryRelevance:
      "Hotels, resorts, serviced apartments, tourism operators, conference venues, and hospitality groups ready to design and build operational improvements",
    businessImpact:
      "Produces build-ready specifications that cut design iteration during delivery, reducing rework and ensuring launched capabilities match guest-experience intentions from day one.",
    tags: ["service-design", "guest-journey", "hospitality-operations"],
  },

  175: {
    description:
      "A focused AI design engagement that validates which AI use cases will genuinely improve hospitality operations, defines responsible workflows, and produces deployment-ready specifications before any build investment is committed.",
    positioning:
      "Design AI capabilities for hospitality with validated use cases, clear data requirements, and governance guardrails already built in.",
    features: [
      "AI use-case validation against real guest-experience and operational data, not theoretical potential",
      "Responsible workflow design specifying human-oversight points, escalation paths, and model boundaries",
      "Data readiness assessment covering guest profiles, booking history, and operational signals required for each use case",
      "Deployment-ready AI specifications including model selection rationale, integration points, and monitoring requirements",
    ],
    timelineMilestones: [
      "Week 1: AI use-case workshops, data landscape review, and feasibility scoring",
      "Weeks 2-3: Responsible workflow design, governance specification, and integration mapping",
      "Week 4: Specification review, risk assessment sign-off, and deployment-ready documentation delivery",
    ],
    deliverables: [
      {
        title: "Validated AI use-case register",
        description:
          "Each candidate AI use case scored against data availability, guest-experience value, operational feasibility, and responsible-AI criteria.",
      },
      {
        title: "Responsible workflow designs",
        description:
          "Step-by-step workflow specifications for approved AI features, with human-oversight triggers, override mechanisms, and escalation paths defined.",
      },
      {
        title: "Data readiness report",
        description:
          "Assessment of the guest data, operational signals, and integration sources required for each use case, with gaps and remediation steps identified.",
      },
      {
        title: "AI deployment specification",
        description:
          "Build-ready documentation covering model selection, API integration points, monitoring metrics, and rollback procedures for each approved use case.",
      },
    ],
    packageHighlights: [
      "Use-case validation prevents investment in AI that your data cannot yet support",
      "Responsible-AI guardrails designed in before build, not retrofitted after launch",
      "Deployment specifications are technology-stack agnostic and handover-ready",
    ],
    faqIntro: "Key questions about designing AI capabilities for hospitality operations.",
    faqs: [
      {
        question: "What kinds of AI use cases are typically in scope for hospitality?",
        answer:
          "Guest personalisation, dynamic room allocation, predictive maintenance scheduling, demand forecasting, and AI-assisted concierge responses are common starting points. The DigitalQatalyst team validates which are feasible for your data and operation.",
      },
      {
        question: "Do we need a mature data platform before starting?",
        answer:
          "Not necessarily. The data readiness assessment identifies what you have and what gaps need closing before each use case can proceed to build.",
      },
      {
        question: "How do you handle guest-data privacy in AI designs?",
        answer:
          "Privacy requirements and data-minimisation principles are built into every workflow specification. We flag regulatory constraints relevant to your region during the engagement.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a scoping call. The DigitalQatalyst team will confirm which AI use cases to evaluate and what data access is needed to run the feasibility assessment.",
      },
    ],
    audience:
      "Chief technology officers, operations directors, and digital transformation leads in hospitality organisations evaluating AI investment",
    industryRelevance:
      "Hotels, resorts, and hospitality groups with access to guest, booking, and operational data who want to invest responsibly in AI capabilities",
    businessImpact:
      "Prevents wasted AI build investment by validating feasibility and data readiness first, and delivers governance-ready specifications that accelerate responsible deployment.",
    tags: ["ai-design", "responsible-ai", "hospitality-technology"],
  },

  176: {
    description:
      "A managed deployment that configures, integrates, tests, and launches your hospitality operations platform capabilities, with structured quality assurance and a formal handover to your operations team.",
    positioning:
      "Bring your hospitality operations blueprint to life through a managed build, integration, and launch with a tested handover.",
    features: [
      "Configured PMS, POS, and guest-communication platform setup aligned to your approved service design",
      "End-to-end integration testing across booking, housekeeping, F&B, and front-desk workflows",
      "Staff acceptance testing programme with department-specific scenarios and sign-off gates",
      "Structured go-live with hypercare support and a confirmed operational handover to your team",
    ],
    timelineMilestones: [
      "Weeks 1-3: Environment setup, system configuration, and integration build",
      "Weeks 4-8: Workflow configuration, data migration, and unit testing by department",
      "Weeks 9-11: Staff acceptance testing, issue resolution, and go-live preparation",
      "Week 12: Controlled launch, hypercare period, and formal operational handover",
    ],
    deliverables: [
      {
        title: "Configured operational platform",
        description:
          "PMS, POS, and guest-communication systems configured to your service blueprint, with integrations tested and operational across all departments.",
      },
      {
        title: "Test results and sign-off report",
        description:
          "Complete test evidence covering integration, workflow, and staff acceptance scenarios, with all critical issues resolved before go-live.",
      },
      {
        title: "Staff training completion record",
        description:
          "Documented training completion by department and role, with assessed competency against the operational standards defined in the design phase.",
      },
      {
        title: "Operational handover pack",
        description:
          "System configuration documentation, runbooks, escalation contacts, and first-90-days operational guidance for your management team.",
      },
    ],
    packageHighlights: [
      "Full integration testing before any live-guest traffic touches the new configuration",
      "Department-by-department acceptance testing with formal sign-off gates",
      "Hypercare support during the first weeks of live operation",
    ],
    faqIntro: "Key questions about the Hospitality Operations deployment engagement.",
    faqs: [
      {
        question: "Do we need to complete the design phase before deploying?",
        answer:
          "Yes. Deployment builds from approved specifications. If you do not have these, the DigitalQatalyst team can scope the design phase first.",
      },
      {
        question: "How is live-guest disruption avoided during the rollout?",
        answer:
          "Configuration and testing happen in a non-production environment. The go-live is phased by department or property and scheduled during low-occupancy periods where possible.",
      },
      {
        question: "What happens if critical issues are found during acceptance testing?",
        answer:
          "Issues are logged, triaged, and resolved before the go-live gate. No launch proceeds until critical and high-severity issues are closed.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your approved design specifications with the DigitalQatalyst team and we will scope the deployment plan, environment setup, and timeline.",
      },
    ],
    audience:
      "Operations directors, technology managers, and project leads in hospitality organisations ready to build and launch approved operational improvements",
    industryRelevance:
      "Hotels, resorts, serviced apartments, and hospitality groups moving from design into build and live operation of improved hospitality platforms",
    businessImpact:
      "Delivers a tested, live operational platform with trained staff and a formal handover, reducing the risk of guest-facing failures in the first weeks of operation.",
    tags: ["deployment", "hospitality-technology", "platform-launch"],
  },

  177: {
    description:
      "A governed AI deployment that puts validated hospitality AI capabilities into production with integrated monitoring, safety controls, staff enablement, and a formal operational handover.",
    positioning:
      "Launch AI-enabled hospitality operations with monitoring, guardrails, and staff confidence built in before the first live guest interaction.",
    features: [
      "Production deployment of validated AI features across personalisation, scheduling, and guest communication workflows",
      "Real-time monitoring dashboards tracking model accuracy, guest-experience signals, and operational KPIs",
      "Safety and override controls ensuring staff can review, correct, or override AI outputs at any step",
      "Staff AI literacy programme covering how each model works, when to trust it, and how to escalate",
    ],
    timelineMilestones: [
      "Weeks 1-4: Production environment setup, AI model integration, and data pipeline validation",
      "Weeks 5-8: Controlled shadow-mode testing alongside existing workflows, performance baselining",
      "Weeks 9-11: Phased live activation by department, monitoring review, and staff sign-off",
      "Week 12: Full live operation, handover to operations team, and ongoing monitoring confirmed",
    ],
    deliverables: [
      {
        title: "Live AI capability suite",
        description:
          "Approved AI features in production, integrated with your PMS, guest-data sources, and operational workflows, tested and accepted by department leads.",
      },
      {
        title: "Monitoring and alerting dashboard",
        description:
          "Real-time view of model performance, guest-experience impact metrics, and operational KPIs, with alert thresholds set to your agreed tolerances.",
      },
      {
        title: "Governance and override documentation",
        description:
          "Written policies and in-system controls covering when staff must override AI recommendations, escalation paths, and incident-response procedures.",
      },
      {
        title: "AI operations handover pack",
        description:
          "Model cards, integration diagrams, monitoring runbooks, and retraining schedules handed to your technology and operations teams.",
      },
    ],
    packageHighlights: [
      "Shadow-mode testing validates AI accuracy against live data before guest-facing activation",
      "Staff override controls built into every AI-assisted workflow from launch day",
      "Monitoring dashboards cover both model health and guest-experience outcomes",
    ],
    faqIntro: "Key questions about deploying AI into live hospitality operations.",
    faqs: [
      {
        question: "Which AI capabilities are typically deployed in this engagement?",
        answer:
          "Those validated in the AI Design phase: commonly personalisation engines, predictive housekeeping scheduling, demand forecasting, and AI-assisted concierge. Scope is confirmed from your approved specifications.",
      },
      {
        question: "How do you prevent AI errors from affecting guests?",
        answer:
          "Shadow-mode testing runs the models against live data without acting on outputs until performance thresholds are met. Staff override controls remain active after launch.",
      },
      {
        question: "Who owns the AI models after handover?",
        answer:
          "Your technology team, with the DigitalQatalyst team providing model cards, monitoring documentation, and retraining schedules as part of the handover pack.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your approved AI deployment specifications and the DigitalQatalyst team will confirm the production environment requirements and phased activation plan.",
      },
    ],
    audience:
      "Chief technology officers, operations directors, and heads of digital in hospitality groups ready to activate validated AI capabilities in live operations",
    industryRelevance:
      "Hotels, resorts, and hospitality groups that have completed AI design validation and are ready to deploy into guest-facing and back-of-house operations",
    businessImpact:
      "Activates AI capabilities in a controlled, monitored manner that protects guest experience during rollout and builds staff confidence in AI-assisted operations over time.",
    tags: ["ai-deployment", "responsible-ai", "hospitality-technology"],
  },

  178: {
    description:
      "An ongoing managed service that runs and continuously improves your hospitality operations platform, with SLA-backed monitoring, monthly performance reporting, and proactive optimisation by the DigitalQatalyst team.",
    positioning:
      "Keep hospitality operations performing at their best with continuous monitoring, expert optimisation, and a team who knows your property.",
    features: [
      "SLA-backed monitoring of PMS, POS, and guest-communication platforms with defined response and resolution times",
      "Monthly operational performance reviews covering guest satisfaction, system uptime, and throughput metrics",
      "Proactive optimisation cycles adjusting workflows, configurations, and integrations as your operation evolves",
      "Named service team with hospitality-sector knowledge providing continuity across every engagement",
    ],
    timelineMilestones: [
      "Month 1: Service onboarding, baseline metrics, and SLA confirmation",
      "Months 2-3: Steady-state monitoring, first performance review, and initial optimisation cycle",
      "Ongoing: Monthly reviews, quarterly optimisation sprints, and annual roadmap refresh",
    ],
    deliverables: [
      {
        title: "Monthly performance report",
        description:
          "Guest satisfaction scores, system uptime, service throughput, and trend analysis across all monitored platforms, delivered every month.",
      },
      {
        title: "Optimisation log",
        description:
          "Record of every configuration change, workflow adjustment, and integration fix made during the service period, with outcomes noted.",
      },
      {
        title: "SLA compliance report",
        description:
          "Monthly record of incidents, response times, and resolution times against agreed SLA targets, with root-cause notes for any breaches.",
      },
      {
        title: "Annual service roadmap",
        description:
          "Forward-looking plan identifying optimisation priorities, technology refresh opportunities, and recommended investments for the next 12 months.",
      },
    ],
    packageHighlights: [
      "Named service team with hospitality-sector context, not a rotating support pool",
      "Proactive optimisation included, not just reactive incident response",
      "Monthly reporting gives leadership visibility without requiring internal analyst time",
    ],
    faqIntro: "Key questions about the Hospitality Operations managed service.",
    faqs: [
      {
        question: "What does the managed service cover?",
        answer:
          "Monitoring, incident response, and proactive optimisation of your hospitality operations platform, including PMS, POS, and guest-communication integrations. Exact scope is agreed during onboarding.",
      },
      {
        question: "What SLAs apply?",
        answer:
          "Response and resolution targets are confirmed during onboarding based on your platform criticality. Guest-facing system incidents receive priority-one treatment.",
      },
      {
        question: "Can the service expand to cover new systems added after launch?",
        answer:
          "Yes. The DigitalQatalyst team can onboard additional platforms into the managed scope as your technology estate grows.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team to schedule a service onboarding call. We confirm the systems in scope, SLA targets, reporting format, and the named contacts on both sides.",
      },
    ],
    audience:
      "General managers, operations directors, and technology leads in hospitality organisations seeking ongoing operational support without expanding internal headcount",
    industryRelevance:
      "Hotels, resorts, serviced apartments, and hospitality groups running complex multi-system operational environments",
    businessImpact:
      "Maintains platform reliability and service consistency across peak and off-peak periods, freeing internal teams to focus on guest experience rather than system management.",
    tags: ["managed-service", "hospitality-operations", "continuous-optimisation"],
  },

  // -----------------------------------------------------------------------
  // RETAIL OPERATIONS (ids 179-184)
  // -----------------------------------------------------------------------

  179: {
    description:
      "A targeted assessment of your retail and omnichannel operations that identifies the gaps in store productivity, inventory visibility, and sales execution that are costing you revenue and customer loyalty.",
    positioning:
      "Understand exactly where your retail operations fall short, and walk away with a prioritised action plan your store and commerce leaders can execute.",
    features: [
      "Omnichannel customer journey audit covering in-store, online, click-and-collect, and returns flows",
      "Inventory visibility gap analysis across warehouses, stores, and digital channels",
      "Store productivity review examining task management, staff scheduling, and service standards",
      "Prioritised improvement register scored by revenue impact, customer-experience uplift, and delivery effort",
    ],
    timelineMilestones: [
      "Days 1-2: Stakeholder interviews, sales and operations data review, and scope confirmation",
      "Days 3-4: Omnichannel journey mapping, inventory-gap analysis, and store productivity assessment",
      "Day 5: Findings playback, prioritised recommendations, and quick-win identification",
    ],
    deliverables: [
      {
        title: "Omnichannel operations audit",
        description:
          "A channel-by-channel review of customer journey friction points, handoff failures, and inventory inconsistencies with root causes and impact estimates.",
      },
      {
        title: "Inventory visibility report",
        description:
          "Assessment of real-time stock accuracy across stores, warehouses, and digital channels, with the gaps creating lost sales or excess markdown.",
      },
      {
        title: "Store productivity scorecard",
        description:
          "Benchmark of task completion rates, scheduling efficiency, and service standards across your estate, with the highest-leverage improvement opportunities identified.",
      },
      {
        title: "Prioritised action roadmap",
        description:
          "Sequenced improvement actions ranked by revenue impact and delivery effort, with suggested ownership and a phasing recommendation for your leadership team.",
      },
    ],
    packageHighlights: [
      "Covers in-store, online, and omnichannel flows in a single assessment",
      "Revenue-impact scoring on every recommendation, not just operational priority",
      "Fixed-scope with findings ready for leadership review within the week",
    ],
    faqIntro: "Key questions about the Retail Operations assessment.",
    faqs: [
      {
        question: "How many stores or channels does the assessment cover?",
        answer:
          "Scope is confirmed with the DigitalQatalyst team before the engagement starts. Typically one to three representative store formats and your primary digital channel are included.",
      },
      {
        question: "What data do you need access to?",
        answer:
          "Sales reports, inventory records, and operational metrics. No customer PII is required. Data access is read-only and agreed in advance.",
      },
      {
        question: "Do you cover both physical retail and e-commerce?",
        answer:
          "Yes. The assessment maps the customer journey across all channels your business operates, including click-and-collect and returns flows.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation with the DigitalQatalyst team. We confirm the channels in scope, the data required, and the assessment schedule.",
      },
    ],
    audience:
      "Heads of retail operations, omnichannel directors, store operations managers, and e-commerce leads",
    industryRelevance:
      "Retailers, marketplace operators, distributors, and omnichannel commerce organisations at any stage of digital maturity",
    businessImpact:
      "Identifies the specific operational gaps that reduce conversion, increase fulfilment errors, and erode store productivity, giving leadership a clear evidence-based case for where to invest.",
    tags: ["retail-operations", "omnichannel", "store-productivity"],
  },

  180: {
    description:
      "A design engagement that converts your retail operations objectives into customer-centred journey designs, inventory workflow specifications, and technology integration blueprints your implementation teams can build and release.",
    positioning:
      "Design the retail operations blueprint your teams need: customer journeys, inventory workflows, and system integrations ready for build.",
    features: [
      "Omnichannel customer journey designs covering browse, purchase, fulfilment, and return experiences",
      "Inventory and order management workflow specifications reducing stock inaccuracies and fulfilment delays",
      "POS, OMS, and WMS integration architecture aligned to your existing technology estate",
      "Store and digital adoption plan with role-specific training outlines and a go-live communication schedule",
    ],
    timelineMilestones: [
      "Week 1: Stakeholder workshops, current-state mapping, and design-principles agreement",
      "Weeks 2-3: Journey design, workflow specification, and technology integration architecture",
      "Week 4: Design review, stakeholder sign-off, and build-ready documentation delivery",
    ],
    deliverables: [
      {
        title: "Omnichannel journey designs",
        description:
          "Detailed customer journey maps for each channel and segment, with service standards, touchpoints, and consistency checkpoints across store and digital surfaces.",
      },
      {
        title: "Inventory and order workflow specifications",
        description:
          "Step-by-step process definitions for receiving, picking, packing, fulfilment, and returns, designed to eliminate the handoff errors identified in assessment.",
      },
      {
        title: "Technology integration architecture",
        description:
          "Data-flow diagrams and integration specifications connecting POS, OMS, WMS, and customer-data platforms into a coherent retail operations picture.",
      },
      {
        title: "Adoption and rollout plan",
        description:
          "Store-by-store and channel-by-channel rollout sequence with training materials, communication templates, and go/no-go criteria for each phase.",
      },
    ],
    packageHighlights: [
      "Customer journey and back-office workflow design completed in a single sprint",
      "Integration architecture built to your existing POS, OMS, and WMS systems",
      "Rollout plan included so delivery teams have sequencing from the start",
    ],
    faqIntro: "Key questions about the Retail Operations design engagement.",
    faqs: [
      {
        question: "Can we run the design engagement without completing an assessment first?",
        answer:
          "Yes, if you have clear objectives and existing operational data. The DigitalQatalyst team will confirm whether a design-only engagement is appropriate during scoping.",
      },
      {
        question: "Does the design cover both store and digital channels?",
        answer:
          "Yes. Journey designs and workflow specifications cover every channel in scope, including click-and-collect, ship-from-store, and returns.",
      },
      {
        question: "What format are the specifications delivered in?",
        answer:
          "Annotated journey maps, workflow diagrams, and integration specs delivered in a shared digital workspace formatted for handover to internal or third-party delivery teams.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call and the DigitalQatalyst team will confirm the channels in scope, the workshops required, and the design sprint schedule.",
      },
    ],
    audience:
      "Omnichannel directors, store operations managers, e-commerce leads, and technology teams in retail organisations planning operational improvement programmes",
    industryRelevance:
      "Retailers, marketplaces, and omnichannel commerce organisations ready to move from identified gaps to a delivery-ready design for operational improvement",
    businessImpact:
      "Produces build-ready specifications that reduce rework during delivery, ensuring launched capabilities match customer-experience and operational-efficiency targets from day one.",
    tags: ["retail-design", "omnichannel", "inventory-management"],
  },

  181: {
    description:
      "A retail-focused AI design engagement that validates which AI use cases will genuinely improve sales execution, inventory accuracy, and customer engagement, producing responsible workflow designs and build-ready specifications before any development begins.",
    positioning:
      "Design AI for retail with evidence-backed use cases, clean data requirements, and responsible-AI guardrails agreed before a line of code is written.",
    features: [
      "AI use-case scoring for retail: demand forecasting, personalisation, markdown optimisation, and loss-prevention ranked by data readiness and commercial value",
      "Responsible workflow design specifying human-review checkpoints, pricing override controls, and model-boundary documentation",
      "Retail data readiness assessment covering transactional, behavioural, and inventory data required for each validated use case",
      "Deployment-ready AI specifications with model selection rationale, integration points, and monitoring metrics for approved use cases",
    ],
    timelineMilestones: [
      "Week 1: AI use-case workshops, retail data landscape review, and feasibility scoring",
      "Weeks 2-3: Responsible workflow design, data-gap remediation planning, and integration mapping",
      "Week 4: Specification review, governance sign-off, and deployment-ready documentation delivery",
    ],
    deliverables: [
      {
        title: "Validated retail AI use-case register",
        description:
          "Candidate AI use cases scored against commercial value, data availability, regulatory constraints, and responsible-AI criteria specific to retail.",
      },
      {
        title: "Responsible workflow designs",
        description:
          "Step-by-step AI-assisted workflow specifications for approved use cases, with pricing override controls, human-review triggers, and escalation paths.",
      },
      {
        title: "Retail data readiness report",
        description:
          "Assessment of transactional, inventory, and customer-behaviour data required for each approved AI use case, with gaps and remediation steps.",
      },
      {
        title: "AI deployment specification",
        description:
          "Build-ready documentation covering model selection, integration points, monitoring metrics, and rollback procedures for each approved retail AI use case.",
      },
    ],
    packageHighlights: [
      "Use-case validation against your actual retail data, not generic benchmarks",
      "Pricing and markdown AI designs include mandatory human-override controls",
      "Deployment specifications are ready to hand to your engineering or vendor team",
    ],
    faqIntro: "Key questions about designing AI capabilities for retail operations.",
    faqs: [
      {
        question: "What AI use cases are most common in retail?",
        answer:
          "Demand forecasting, personalised product recommendations, dynamic markdown optimisation, inventory replenishment triggers, and AI-assisted loss prevention. The DigitalQatalyst team validates which are feasible for your data estate.",
      },
      {
        question: "Do we need a unified data platform before starting?",
        answer:
          "No. The data readiness assessment identifies what you have and what gaps need closing. Some use cases may be ready to build immediately; others need data infrastructure work first.",
      },
      {
        question: "How do you handle pricing AI responsibly?",
        answer:
          "Pricing and markdown AI workflow designs include mandatory human-review stages and override controls. We specify the governance process before any build investment is made.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a scoping call and the DigitalQatalyst team will confirm which AI use cases to evaluate and what data access is required for the feasibility assessment.",
      },
    ],
    audience:
      "E-commerce directors, heads of merchandising, chief data officers, and retail technology leads evaluating AI investments",
    industryRelevance:
      "Retailers, marketplaces, and omnichannel operators with access to transactional, behavioural, and inventory data who want to invest responsibly in AI capabilities",
    businessImpact:
      "Prevents investment in AI the data estate cannot support, and delivers governance-ready specifications that accelerate responsible deployment of revenue-generating retail AI features.",
    tags: ["ai-design", "retail-ai", "responsible-ai"],
  },

  182: {
    description:
      "A managed retail operations deployment that configures, integrates, tests, and launches your omnichannel commerce platform capabilities, with structured quality assurance and a formal handover to your store and digital operations teams.",
    positioning:
      "Launch retail operations improvements across store and digital channels with a tested build, structured rollout, and confirmed team handover.",
    features: [
      "Configured POS, OMS, and WMS platform setup aligned to your approved omnichannel design",
      "End-to-end integration testing across in-store, online, and fulfilment workflows before any live customer traffic",
      "Store and digital team acceptance testing with channel-specific scenarios and formal sign-off gates",
      "Phased go-live by channel or store format, with hypercare support during the critical first weeks of operation",
    ],
    timelineMilestones: [
      "Weeks 1-3: Environment setup, system configuration, and integration build",
      "Weeks 4-8: Workflow configuration, data migration, and channel-by-channel unit testing",
      "Weeks 9-11: Acceptance testing by store and digital teams, issue resolution, and go-live preparation",
      "Week 12: Phased channel launch, hypercare monitoring, and formal operational handover",
    ],
    deliverables: [
      {
        title: "Configured retail operations platform",
        description:
          "POS, OMS, and WMS configured and integrated across your in-scope channels and store formats, with data flows tested end-to-end.",
      },
      {
        title: "Test results and channel sign-off report",
        description:
          "Test evidence covering integration, fulfilment workflow, and acceptance scenarios for each channel, with all critical issues resolved pre-launch.",
      },
      {
        title: "Staff training completion record",
        description:
          "Documented training completion by store format, role, and digital-operations function, with competency assessed against operational standards.",
      },
      {
        title: "Retail operations handover pack",
        description:
          "System configuration documentation, runbooks, escalation contacts, and first-90-days operational guidance for store operations and digital teams.",
      },
    ],
    packageHighlights: [
      "Channel-by-channel acceptance testing with formal sign-off before any customer traffic",
      "Phased launch sequence reduces the risk of large-scale disruption at go-live",
      "Hypercare support covers the first weeks of live omnichannel operation",
    ],
    faqIntro: "Key questions about the Retail Operations deployment engagement.",
    faqs: [
      {
        question: "Can we deploy store and online channels simultaneously?",
        answer:
          "Usually not recommended. The DigitalQatalyst team designs a phased channel sequence that lets you validate in-store operation before activating digital fulfilment flows.",
      },
      {
        question: "How is existing inventory data migrated?",
        answer:
          "Migration is planned, validated, and tested in a non-production environment before go-live. The migration approach is confirmed with your operations team during weeks one to three.",
      },
      {
        question: "What if acceptance testing reveals issues with a specific store format?",
        answer:
          "Issues are logged, triaged, and resolved before that format proceeds to launch. Go-live gates are format-specific so a delay in one store type does not hold back others.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your approved design specifications with the DigitalQatalyst team and we will scope the deployment plan and environment requirements.",
      },
    ],
    audience:
      "Retail technology managers, store operations directors, and e-commerce leads in organisations ready to build and launch approved omnichannel improvements",
    industryRelevance:
      "Retailers, marketplaces, and omnichannel commerce organisations moving from design into build and live operation of improved commerce platforms",
    businessImpact:
      "Delivers a tested, live retail operations platform with trained store and digital teams, reducing the risk of fulfilment failures and customer-facing errors in the critical launch period.",
    tags: ["deployment", "retail-technology", "omnichannel-launch"],
  },

  183: {
    description:
      "A governed AI deployment that puts validated retail AI capabilities into production with integrated monitoring, merchandising-safe override controls, and a formal handover to your retail operations and technology teams.",
    positioning:
      "Activate retail AI in a controlled, monitored way that protects pricing integrity, inventory accuracy, and customer trust from launch day.",
    features: [
      "Production deployment of validated retail AI features: demand forecasting, personalisation, and markdown optimisation",
      "Real-time monitoring dashboards tracking model accuracy, inventory impact, and revenue signals across channels",
      "Merchandising override controls ensuring commercial teams can adjust or veto AI pricing and markdown recommendations",
      "Retail staff AI literacy programme covering model purpose, confidence thresholds, and escalation procedures",
    ],
    timelineMilestones: [
      "Weeks 1-4: Production environment setup, model integration, and data pipeline validation",
      "Weeks 5-8: Shadow-mode operation alongside existing workflows, accuracy baselining by use case",
      "Weeks 9-11: Phased live activation by use case, monitoring review, and merchandising team sign-off",
      "Week 12: Full live operation, handover to retail and technology teams, monitoring confirmed",
    ],
    deliverables: [
      {
        title: "Live retail AI capability suite",
        description:
          "Approved AI features in production, integrated with POS, OMS, and inventory systems, accepted by merchandising and operations leads.",
      },
      {
        title: "Retail AI monitoring dashboard",
        description:
          "Real-time view of model performance, revenue and inventory impact metrics, and alert thresholds set to your agreed commercial tolerances.",
      },
      {
        title: "Merchandising governance documentation",
        description:
          "Written policies and in-system controls covering when merchandising teams must review or override AI pricing and replenishment recommendations.",
      },
      {
        title: "AI operations handover pack",
        description:
          "Model cards, integration diagrams, monitoring runbooks, and retraining schedules for your technology and retail operations teams.",
      },
    ],
    packageHighlights: [
      "Shadow-mode testing validates model accuracy against live retail data before any commercial impact",
      "Merchandising override controls active from day one of live operation",
      "Use-case-by-use-case activation schedule reduces risk at each launch gate",
    ],
    faqIntro: "Key questions about deploying AI into live retail operations.",
    faqs: [
      {
        question: "Which AI features are typically activated in this deployment?",
        answer:
          "Those validated in the AI Design phase: commonly demand forecasting, personalised recommendations, and markdown optimisation. Scope is confirmed from your approved specifications.",
      },
      {
        question: "How do you protect pricing integrity during AI activation?",
        answer:
          "Shadow-mode testing runs pricing AI against live data without acting on outputs until accuracy thresholds are met. Merchandising override controls remain active after full launch.",
      },
      {
        question: "Who is responsible for retraining AI models over time?",
        answer:
          "Your technology team, using the retraining schedules and model documentation handed over at the end of the engagement. The DigitalQatalyst team can provide managed-service support if needed.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your approved AI deployment specifications and the DigitalQatalyst team will confirm production environment requirements and the use-case activation sequence.",
      },
    ],
    audience:
      "Chief technology officers, heads of merchandising, e-commerce directors, and retail technology leads ready to activate validated AI capabilities",
    industryRelevance:
      "Retailers, marketplaces, and omnichannel operators that have completed AI design validation and are ready to deploy AI into live commerce operations",
    businessImpact:
      "Activates revenue-generating AI capabilities with commercial safeguards in place, protecting margin and customer trust during rollout while building team confidence in AI-assisted retail decisions.",
    tags: ["ai-deployment", "retail-ai", "responsible-ai"],
  },

  184: {
    description:
      "An ongoing managed service that runs and continuously improves your retail operations platform, with SLA-backed monitoring, monthly performance reporting across store and digital channels, and proactive optimisation by the DigitalQatalyst team.",
    positioning:
      "Keep retail operations and omnichannel commerce performing reliably with continuous monitoring, proactive optimisation, and monthly commercial performance reporting.",
    features: [
      "SLA-backed monitoring of POS, OMS, and WMS platforms with defined response and resolution times across store and digital environments",
      "Monthly omnichannel performance reviews covering conversion, fulfilment accuracy, inventory availability, and system uptime",
      "Proactive optimisation cycles adjusting workflows, integrations, and configurations as your retail operation evolves",
      "Named retail-sector service team providing continuity and commercial context in every engagement",
    ],
    timelineMilestones: [
      "Month 1: Service onboarding, baseline metrics across channels, and SLA confirmation",
      "Months 2-3: Steady-state monitoring, first omnichannel performance review, and initial optimisation cycle",
      "Ongoing: Monthly reviews, quarterly optimisation sprints, and annual retail roadmap refresh",
    ],
    deliverables: [
      {
        title: "Monthly omnichannel performance report",
        description:
          "Conversion, fulfilment accuracy, inventory availability, and system-uptime metrics across all in-scope channels, delivered every month.",
      },
      {
        title: "Optimisation log",
        description:
          "Record of every workflow adjustment, configuration change, and integration fix made during the service period, with before-and-after metrics noted.",
      },
      {
        title: "SLA compliance report",
        description:
          "Monthly record of incidents, response times, and resolution times against agreed SLA targets, with root-cause notes for any breaches.",
      },
      {
        title: "Annual retail technology roadmap",
        description:
          "Forward-looking plan identifying optimisation priorities, platform upgrade opportunities, and recommended investments for the next 12 months.",
      },
    ],
    packageHighlights: [
      "Omnichannel performance reporting covers store and digital in a single monthly view",
      "Proactive optimisation included alongside reactive incident management",
      "Named retail-sector team with commercial context, not a generic support function",
    ],
    faqIntro: "Key questions about the Retail Operations managed service.",
    faqs: [
      {
        question: "What systems does the managed service cover?",
        answer:
          "POS, OMS, WMS, and the integrations connecting them across your in-scope channels. Additional platforms can be onboarded as your estate grows.",
      },
      {
        question: "What SLA response times apply?",
        answer:
          "Targets are agreed during onboarding based on platform criticality. Customer-facing system failures receive priority-one treatment.",
      },
      {
        question: "Does the managed service include peak-trading support?",
        answer:
          "Yes. The DigitalQatalyst team reviews your trading calendar during onboarding and confirms enhanced monitoring windows for peak periods.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team to schedule a service onboarding call covering systems in scope, SLA targets, reporting format, and the named contacts on both sides.",
      },
    ],
    audience:
      "Heads of retail operations, store technology managers, e-commerce directors, and omnichannel operations leads",
    industryRelevance:
      "Retailers, marketplaces, and omnichannel commerce organisations running multi-system environments across store and digital channels",
    businessImpact:
      "Maintains platform reliability and fulfilment accuracy across peak and off-peak trading periods, freeing commercial and operations teams to focus on sales and customer experience.",
    tags: ["managed-service", "retail-operations", "omnichannel"],
  },

  // -----------------------------------------------------------------------
  // SERVICE OPERATIONS (ids 185-190)
  // -----------------------------------------------------------------------

  185: {
    description:
      "A structured assessment of your service, field, or professional operations that identifies the scheduling failures, delivery bottlenecks, and quality gaps reducing throughput and customer satisfaction, and returns a prioritised improvement roadmap.",
    positioning:
      "Get a clear picture of where your service operations underperform, with every recommendation ranked by throughput impact and delivery effort.",
    features: [
      "Service delivery throughput analysis covering job completion rates, rework frequency, and first-visit resolution",
      "Scheduling and dispatch efficiency review identifying capacity waste, double-booking, and travel-time losses",
      "Customer satisfaction touchpoint audit mapping where the service experience falls short of commitments",
      "Prioritised improvement register with each recommendation scored by impact on throughput, quality, and customer retention",
    ],
    timelineMilestones: [
      "Days 1-2: Stakeholder interviews, job-completion data review, and scope confirmation",
      "Days 3-4: Throughput analysis, scheduling review, and customer-satisfaction gap mapping",
      "Day 5: Findings playback, prioritised roadmap, and immediate-action recommendations",
    ],
    deliverables: [
      {
        title: "Service throughput diagnostic",
        description:
          "Data-backed analysis of job completion rates, rework volumes, and first-visit resolution rates, with root causes identified for the highest-cost failure patterns.",
      },
      {
        title: "Scheduling and dispatch efficiency report",
        description:
          "Assessment of your scheduling model, dispatch logic, and field coverage with the specific inefficiencies costing you capacity and response time.",
      },
      {
        title: "Customer experience gap map",
        description:
          "Stage-by-stage view of where service commitments are missed, with the customer-satisfaction and retention impact of each gap quantified.",
      },
      {
        title: "Prioritised improvement roadmap",
        description:
          "Sequenced action plan ranked by throughput and retention impact, with ownership suggestions and a phasing recommendation for leadership.",
      },
    ],
    packageHighlights: [
      "Covers scheduling, dispatch, delivery quality, and customer experience in one assessment",
      "Throughput and retention impact scored on every recommendation",
      "Fixed-scope with a prioritised roadmap ready within the week",
    ],
    faqIntro: "Key questions about the Service Operations assessment.",
    faqs: [
      {
        question: "Which types of service operations does the assessment cover?",
        answer:
          "Field service, professional services delivery, maintenance and repair, technical support, and customer service operations. Scope is confirmed with the DigitalQatalyst team before start.",
      },
      {
        question: "What data do you need?",
        answer:
          "Job completion records, scheduling data, rework logs, and customer satisfaction scores. No customer PII is required beyond anonymised feedback data.",
      },
      {
        question: "Can the assessment cover remote and on-site service delivery?",
        answer:
          "Yes. The assessment maps both remote and field delivery models where your operation runs a combination of both.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation and the DigitalQatalyst team will confirm the operational scope, data requirements, and assessment schedule.",
      },
    ],
    audience:
      "Heads of service operations, field service directors, professional services leaders, and customer service managers",
    industryRelevance:
      "Professional services firms, field service organisations, maintenance and repair operators, and customer service functions across technical and non-technical sectors",
    businessImpact:
      "Surfaces the specific scheduling, delivery, and quality failures reducing throughput and customer retention, giving leadership an evidence-based starting point for targeted improvement investment.",
    tags: ["service-operations", "field-service", "throughput-optimisation"],
  },

  186: {
    description:
      "A design engagement that turns your service operations improvement goals into job-scheduling blueprints, field workflow specifications, and technology integration plans your delivery teams can implement and go live with.",
    positioning:
      "Design the service operations workflows your teams need: scheduling logic, field processes, and system integrations built for throughput and quality.",
    features: [
      "Job lifecycle workflow designs covering intake, scheduling, dispatch, execution, and closure with quality checkpoints at each stage",
      "Field service process specifications reducing rework by defining completion standards and sign-off requirements before a job is closed",
      "FSM, CRM, and ERP integration architecture connecting your scheduling, customer, and billing data into a single operational view",
      "Adoption plan with role-specific training outlines for dispatch, field staff, and service managers",
    ],
    timelineMilestones: [
      "Week 1: Stakeholder workshops, current-state process mapping, and design-principles agreement",
      "Weeks 2-3: Job lifecycle design, field workflow specification, and technology integration architecture",
      "Week 4: Design review, stakeholder sign-off, and build-ready documentation delivery",
    ],
    deliverables: [
      {
        title: "Job lifecycle workflow designs",
        description:
          "End-to-end workflow specifications from job intake to closure, with quality checkpoints, escalation paths, and completion standards defined at each stage.",
      },
      {
        title: "Field service process specifications",
        description:
          "Step-by-step field task definitions, completion-standard checklists, and sign-off requirements designed to reduce rework and improve first-visit resolution.",
      },
      {
        title: "Technology integration architecture",
        description:
          "Data-flow diagrams connecting FSM, CRM, ERP, and mobile field-application data into a coherent operational picture for scheduling and reporting.",
      },
      {
        title: "Adoption and training plan",
        description:
          "Role-specific onboarding materials for dispatch teams, field staff, and service managers, with a rollout sequence and go/no-go criteria.",
      },
    ],
    packageHighlights: [
      "Field and back-office workflow design completed together, not in separate engagements",
      "Integration architecture built to your existing FSM, CRM, and ERP systems",
      "Completion-standard specifications designed to measurably cut rework rates",
    ],
    faqIntro: "Key questions about the Service Operations design engagement.",
    faqs: [
      {
        question: "Does the design cover both back-office scheduling and field execution?",
        answer:
          "Yes. Job lifecycle designs span intake, scheduling, dispatch, field execution, and closure, with handoff specifications at each stage.",
      },
      {
        question: "What if we are replacing our FSM platform as part of this programme?",
        answer:
          "The integration architecture can be designed for your target FSM system if a platform migration is already planned. The DigitalQatalyst team confirms the approach during scoping.",
      },
      {
        question: "How are the specifications handed to the delivery team?",
        answer:
          "Annotated workflow diagrams, process specifications, and integration architectures in a shared workspace formatted for handover to internal or vendor delivery teams.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call and the DigitalQatalyst team will confirm the workflow scope, the workshops required, and the design sprint schedule.",
      },
    ],
    audience:
      "Service operations directors, field service managers, professional services leaders, and technology managers planning service delivery improvement programmes",
    industryRelevance:
      "Field service organisations, professional services firms, maintenance and repair operators, and customer service functions planning operational redesign",
    businessImpact:
      "Produces build-ready workflow and integration specifications that reduce rework during implementation, ensuring launched capabilities deliver measurable throughput and quality improvements from go-live.",
    tags: ["service-design", "field-service-management", "workflow-design"],
  },

  187: {
    description:
      "A service-operations AI design engagement that validates which AI capabilities will improve scheduling accuracy, first-visit resolution, and service quality prediction, producing responsible workflow designs and build-ready specifications before any development commitment.",
    positioning:
      "Design AI for service operations with validated scheduling and quality use cases, responsible guardrails, and deployment specifications ready before build.",
    features: [
      "AI use-case validation for service operations: predictive scheduling, first-visit-resolution modelling, and service quality forecasting scored by data readiness and throughput value",
      "Responsible dispatch-AI workflow design specifying when human dispatchers retain override authority and how model recommendations are presented",
      "Service data readiness assessment covering job history, technician skills, asset records, and customer data required for each validated use case",
      "Deployment-ready AI specifications with model selection rationale, FSM integration points, and monitoring metrics for approved use cases",
    ],
    timelineMilestones: [
      "Week 1: AI use-case workshops, service data landscape review, and feasibility scoring",
      "Weeks 2-3: Responsible workflow design, data-gap remediation planning, and FSM integration mapping",
      "Week 4: Specification review, governance sign-off, and deployment-ready documentation delivery",
    ],
    deliverables: [
      {
        title: "Validated service AI use-case register",
        description:
          "Candidate AI use cases scored against throughput value, data availability, and responsible-AI criteria specific to service and field operations.",
      },
      {
        title: "Responsible dispatch AI workflow designs",
        description:
          "Step-by-step specifications for AI-assisted scheduling and dispatch, with dispatcher override controls, confidence thresholds, and escalation procedures.",
      },
      {
        title: "Service data readiness report",
        description:
          "Assessment of job history, technician, asset, and customer data required for each approved AI use case, with gaps and remediation steps.",
      },
      {
        title: "AI deployment specification",
        description:
          "Build-ready documentation covering model selection, FSM integration points, monitoring metrics, and rollback procedures for each approved service AI use case.",
      },
    ],
    packageHighlights: [
      "Use-case validation against your actual job and technician data, not generic industry benchmarks",
      "Dispatcher override controls specified in every AI-assisted scheduling workflow",
      "Deployment specifications ready for handover to your engineering or FSM vendor team",
    ],
    faqIntro: "Key questions about designing AI capabilities for service operations.",
    faqs: [
      {
        question: "Which AI use cases make sense for service operations?",
        answer:
          "Predictive scheduling optimisation, first-visit-resolution modelling, asset failure prediction, and service quality forecasting are common starting points. The DigitalQatalyst team validates feasibility against your data.",
      },
      {
        question: "How much historical job data is needed?",
        answer:
          "Typically two or more years of job records with technician, asset, and outcome data. The data readiness report specifies exactly what each use case requires.",
      },
      {
        question: "How do you design AI scheduling without removing human dispatcher judgement?",
        answer:
          "Override controls and confidence thresholds are built into every dispatch AI workflow design. The specification defines exactly when and how dispatchers retain authority over final scheduling decisions.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a scoping call and the DigitalQatalyst team will confirm which AI use cases to evaluate and what data access is needed for the feasibility assessment.",
      },
    ],
    audience:
      "Heads of service operations, chief data officers, FSM platform owners, and digital leads in organisations evaluating AI investment for scheduling and quality improvement",
    industryRelevance:
      "Field service organisations, professional services firms, maintenance and repair operators with job-history and technician data to support AI model training",
    businessImpact:
      "Prevents investment in scheduling AI the data estate cannot support, and delivers governance-ready specifications that accelerate responsible deployment of throughput-improving capabilities.",
    tags: ["ai-design", "service-ai", "scheduling-optimisation"],
  },

  188: {
    description:
      "A managed service operations deployment that configures, integrates, tests, and launches your field service management and scheduling platform capabilities, with structured quality assurance and a formal handover to your service operations team.",
    positioning:
      "Go live with improved service operations tools through a tested, managed build that covers scheduling, dispatch, field workflows, and operations handover.",
    features: [
      "Configured FSM, scheduling, and mobile field-application setup aligned to your approved workflow designs",
      "End-to-end integration testing across job intake, dispatch, field execution, and billing closure workflows",
      "Dispatcher and field-staff acceptance testing with job-type-specific scenarios and formal sign-off gates",
      "Controlled go-live with hypercare monitoring and a confirmed operational handover to your service management team",
    ],
    timelineMilestones: [
      "Weeks 1-3: Environment setup, FSM configuration, and integration build",
      "Weeks 4-8: Workflow configuration, data migration, and job-type-specific unit testing",
      "Weeks 9-11: Dispatcher and field-staff acceptance testing, issue resolution, and go-live readiness review",
      "Week 12: Controlled launch, hypercare period, and formal service operations handover",
    ],
    deliverables: [
      {
        title: "Configured service operations platform",
        description:
          "FSM, scheduling, and mobile field applications configured and integrated across your in-scope job types and regions, with data flows tested end-to-end.",
      },
      {
        title: "Test results and sign-off report",
        description:
          "Test evidence covering integration, job lifecycle, and acceptance scenarios for each job type, with all critical issues resolved before go-live.",
      },
      {
        title: "Staff training completion record",
        description:
          "Documented training completion for dispatch teams, field staff, and service managers, with competency assessed against the operational standards in your workflow designs.",
      },
      {
        title: "Service operations handover pack",
        description:
          "System configuration documentation, runbooks, escalation contacts, and first-90-days operational guidance for your service management team.",
      },
    ],
    packageHighlights: [
      "Job-type-specific acceptance testing with formal sign-off before any live service traffic",
      "Field mobile application and back-office scheduling tested together before go-live",
      "Hypercare support covers the first weeks of live service operation",
    ],
    faqIntro: "Key questions about the Service Operations deployment engagement.",
    faqs: [
      {
        question: "Can we deploy one job type or region first before expanding?",
        answer:
          "Yes. The deployment plan typically phases launch by job type or region, allowing validation at smaller scale before full rollout.",
      },
      {
        question: "How is existing job and asset data migrated?",
        answer:
          "Migration is planned, validated, and tested in a non-production environment before go-live. The migration plan is confirmed with your operations team during the first three weeks.",
      },
      {
        question: "What if acceptance testing reveals issues with field mobile workflows?",
        answer:
          "Issues are logged, triaged, and resolved before that job type proceeds to launch. Field and back-office sign-offs are separate gates so a field issue does not delay scheduling changes.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your approved workflow specifications with the DigitalQatalyst team and we will scope the deployment plan and environment requirements.",
      },
    ],
    audience:
      "Service operations directors, field service managers, technology leads, and project managers in organisations ready to build and launch approved operational improvements",
    industryRelevance:
      "Field service organisations, professional services firms, and maintenance operators moving from design into build and live operation of improved service delivery platforms",
    businessImpact:
      "Delivers a tested, live service operations platform with trained dispatch and field teams, reducing the risk of scheduling failures and rework in the critical weeks after go-live.",
    tags: ["deployment", "field-service-management", "service-technology"],
  },

  189: {
    description:
      "A governed AI deployment that activates validated service operations AI capabilities in production, with integrated monitoring, dispatcher safety controls, and a formal handover to your service operations and technology teams.",
    positioning:
      "Put scheduling AI and service quality models into live production with monitoring, dispatcher overrides, and governance built in from activation.",
    features: [
      "Production deployment of validated service AI features: predictive scheduling, first-visit-resolution modelling, and asset failure prediction",
      "Real-time monitoring dashboards tracking scheduling accuracy, first-visit resolution rates, and model recommendation uptake",
      "Dispatcher override controls ensuring scheduling teams can adjust or reject AI job assignments at any point",
      "Service team AI literacy programme covering model purpose, confidence thresholds, and escalation procedures for field and dispatch staff",
    ],
    timelineMilestones: [
      "Weeks 1-4: Production environment setup, AI model integration, and data pipeline validation",
      "Weeks 5-8: Shadow-mode operation alongside existing dispatch workflows, scheduling accuracy baselining",
      "Weeks 9-11: Phased live activation by job type, monitoring review, and dispatcher sign-off",
      "Week 12: Full live operation, handover to service and technology teams, monitoring confirmed",
    ],
    deliverables: [
      {
        title: "Live service AI capability suite",
        description:
          "Approved AI features in production, integrated with your FSM and job-data systems, accepted by dispatch managers and field service leads.",
      },
      {
        title: "Service AI monitoring dashboard",
        description:
          "Real-time view of scheduling accuracy, first-visit resolution rates, and model recommendation uptake, with alert thresholds agreed with your service management team.",
      },
      {
        title: "Dispatcher governance documentation",
        description:
          "Written policies and in-system controls covering when dispatchers must review or override AI scheduling recommendations, with escalation paths.",
      },
      {
        title: "AI operations handover pack",
        description:
          "Model cards, FSM integration diagrams, monitoring runbooks, and retraining schedules handed to your technology and service operations teams.",
      },
    ],
    packageHighlights: [
      "Shadow-mode testing validates scheduling AI accuracy against live job data before any operational impact",
      "Dispatcher override controls active from day one of live scheduling AI operation",
      "Monitoring tracks both model health and real-world throughput outcomes",
    ],
    faqIntro: "Key questions about deploying AI into live service operations.",
    faqs: [
      {
        question: "Which AI capabilities are activated in this deployment?",
        answer:
          "Those validated in your AI Design phase: commonly predictive scheduling optimisation, first-visit-resolution modelling, and asset failure prediction. Scope is confirmed from your approved specifications.",
      },
      {
        question: "How do you avoid AI scheduling errors affecting field staff and customers?",
        answer:
          "Shadow-mode testing runs the scheduling AI against live data without acting on outputs until accuracy thresholds are met. Dispatcher override controls remain active after full launch.",
      },
      {
        question: "Who maintains the AI models after handover?",
        answer:
          "Your technology team, using the model cards, monitoring runbooks, and retraining schedules provided in the handover pack. The DigitalQatalyst team can provide ongoing managed support if needed.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your approved AI deployment specifications and the DigitalQatalyst team will confirm production environment requirements and the job-type activation sequence.",
      },
    ],
    audience:
      "Service operations directors, chief technology officers, FSM platform owners, and field service leads ready to activate validated scheduling and quality AI",
    industryRelevance:
      "Field service organisations and professional services firms that have completed AI design validation and are ready to deploy scheduling and quality AI into live operations",
    businessImpact:
      "Activates scheduling and quality AI with operational safeguards in place, improving first-visit resolution and technician utilisation while maintaining dispatcher confidence and control.",
    tags: ["ai-deployment", "service-ai", "scheduling-ai"],
  },

  190: {
    description:
      "An ongoing managed service that runs and continuously improves your service operations platform, with SLA-backed monitoring, monthly performance reporting across scheduling and field delivery, and proactive optimisation by the DigitalQatalyst team.",
    positioning:
      "Keep service operations performing at throughput targets with continuous monitoring, proactive scheduling optimisation, and monthly operational reporting.",
    features: [
      "SLA-backed monitoring of FSM, scheduling, and mobile field platforms with defined response and resolution times",
      "Monthly performance reviews covering job completion rates, first-visit resolution, scheduling utilisation, and customer satisfaction",
      "Proactive optimisation cycles adjusting scheduling logic, workflow configurations, and integrations as your service operation evolves",
      "Named service-operations service team with field-sector knowledge providing continuity across every review cycle",
    ],
    timelineMilestones: [
      "Month 1: Service onboarding, baseline metrics, SLA confirmation, and first monitoring window",
      "Months 2-3: Steady-state monitoring, first performance review, and initial scheduling optimisation cycle",
      "Ongoing: Monthly reviews, quarterly optimisation sprints, and annual service operations roadmap",
    ],
    deliverables: [
      {
        title: "Monthly service operations performance report",
        description:
          "Job completion rates, first-visit resolution, scheduling utilisation, and system-uptime metrics across all in-scope platforms, delivered every month.",
      },
      {
        title: "Optimisation log",
        description:
          "Record of every scheduling adjustment, workflow change, and integration fix made during the service period, with before-and-after performance metrics.",
      },
      {
        title: "SLA compliance report",
        description:
          "Monthly record of incidents, response times, and resolution times against agreed SLA targets, with root-cause notes for any breaches.",
      },
      {
        title: "Annual service operations roadmap",
        description:
          "Forward-looking plan identifying scheduling optimisation priorities, platform upgrade opportunities, and recommended investments for the next 12 months.",
      },
    ],
    packageHighlights: [
      "Scheduling and field performance reported together in a single monthly view",
      "Proactive scheduling optimisation included alongside reactive incident management",
      "Named team with service-sector context, not a generic IT support function",
    ],
    faqIntro: "Key questions about the Service Operations managed service.",
    faqs: [
      {
        question: "What platforms does the managed service cover?",
        answer:
          "FSM, scheduling, and mobile field applications, plus the integrations connecting them. Additional platforms can be onboarded as your estate grows.",
      },
      {
        question: "What SLA response times apply to field-critical incidents?",
        answer:
          "Response and resolution targets are agreed during onboarding. Field-facing system failures that prevent job dispatch receive priority-one treatment.",
      },
      {
        question: "Does the managed service include peak-capacity support periods?",
        answer:
          "Yes. The DigitalQatalyst team reviews your operational calendar during onboarding and confirms enhanced monitoring for high-demand periods.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team to schedule a service onboarding call covering platforms in scope, SLA targets, reporting format, and named contacts.",
      },
    ],
    audience:
      "Heads of service operations, field service directors, FSM platform owners, and operations technology leads seeking ongoing platform support",
    industryRelevance:
      "Field service organisations, professional services firms, and maintenance operators running multi-system environments across dispatch, field, and back-office functions",
    businessImpact:
      "Maintains scheduling accuracy and platform reliability across demand peaks, freeing service management to focus on customer relationships and technician development rather than system issues.",
    tags: ["managed-service", "service-operations", "field-service-management"],
  },

  // -----------------------------------------------------------------------
  // LOGISTICS OPERATIONS (ids 191-196)
  // -----------------------------------------------------------------------

  191: {
    description:
      "A structured assessment of your logistics and supply chain operations that identifies the fulfilment inaccuracies, visibility gaps, and asset utilisation losses reducing delivery performance, and returns a prioritised improvement roadmap your supply chain leaders can act on.",
    positioning:
      "Pinpoint the logistics and supply chain gaps costing you fulfilment accuracy, delivery visibility, and asset utilisation, with every recommendation ranked for impact.",
    features: [
      "Fulfilment accuracy audit covering pick, pack, despatch, and last-mile delivery failure rates and root causes",
      "Supply chain visibility gap analysis identifying where order, stock, and carrier data breaks down across the network",
      "Asset and fleet utilisation review exposing idle time, underloaded routes, and capacity waste",
      "Prioritised improvement register scored by fulfilment-accuracy, cost-reduction, and delivery-performance impact",
    ],
    timelineMilestones: [
      "Days 1-2: Stakeholder interviews, fulfilment and carrier data review, and scope confirmation",
      "Days 3-4: Fulfilment accuracy analysis, visibility gap mapping, and asset utilisation review",
      "Day 5: Findings playback, prioritised roadmap, and quick-win identification",
    ],
    deliverables: [
      {
        title: "Fulfilment accuracy diagnostic",
        description:
          "Data-backed analysis of pick, pack, despatch, and last-mile failure rates, with root causes and cost estimates for the highest-impact error patterns.",
      },
      {
        title: "Supply chain visibility report",
        description:
          "Assessment of order, stock, and carrier data flows across your network, with the specific visibility gaps causing delayed decisions and customer-facing delivery failures.",
      },
      {
        title: "Asset and fleet utilisation scorecard",
        description:
          "Benchmark of vehicle and warehouse asset utilisation against capacity, with idle time, route inefficiencies, and the revenue cost of underutilisation identified.",
      },
      {
        title: "Prioritised logistics improvement roadmap",
        description:
          "Sequenced action plan ranked by fulfilment and cost impact, with ownership suggestions and a phasing recommendation your supply chain leadership can execute.",
      },
    ],
    packageHighlights: [
      "Covers fulfilment accuracy, network visibility, and asset utilisation in one assessment",
      "Cost and delivery-performance impact scored on every recommendation",
      "Fixed-scope with a prioritised roadmap ready within the week",
    ],
    faqIntro: "Key questions about the Logistics Operations assessment.",
    faqs: [
      {
        question: "Which parts of the logistics network does the assessment cover?",
        answer:
          "Warehousing, fulfilment, carrier integration, last-mile delivery, and returns. Exact scope is confirmed with the DigitalQatalyst team before start.",
      },
      {
        question: "What data do you need?",
        answer:
          "Fulfilment accuracy records, carrier performance data, warehouse throughput metrics, and fleet utilisation reports. Data is reviewed read-only and agreed in advance.",
      },
      {
        question: "Can you assess third-party logistics operations alongside our own?",
        answer:
          "Yes, where you have data access. The assessment maps your full network including 3PL partners where performance data is available.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation and the DigitalQatalyst team will confirm the network scope, data requirements, and assessment schedule.",
      },
    ],
    audience:
      "Supply chain directors, heads of logistics, distribution centre managers, and transport operations leaders",
    industryRelevance:
      "Logistics providers, distributors, retailers with in-house logistics, supply chain operators, and fulfilment organisations of any network scale",
    businessImpact:
      "Identifies the specific fulfilment, visibility, and utilisation failures reducing delivery performance and inflating cost, giving supply chain leadership a clear evidence-based roadmap for targeted improvement.",
    tags: ["logistics-operations", "supply-chain", "fulfilment-accuracy"],
  },

  192: {
    description:
      "A logistics design engagement that converts your supply chain improvement objectives into fulfilment workflow blueprints, carrier integration specifications, and warehouse technology architectures your delivery teams can implement and launch.",
    positioning:
      "Design the logistics operations blueprint you need: fulfilment workflows, carrier integrations, and warehouse technology ready for build.",
    features: [
      "Fulfilment workflow designs covering inbound, storage, pick and pack, despatch, and returns with throughput and accuracy checkpoints at each stage",
      "Carrier and last-mile integration architecture connecting your WMS, TMS, and carrier APIs into a real-time delivery visibility layer",
      "Warehouse layout and technology specifications for scanning, slotting, and automation aligned to your throughput targets",
      "Adoption plan with role-specific training outlines for warehouse, transport, and planning teams",
    ],
    timelineMilestones: [
      "Week 1: Stakeholder workshops, current-state network mapping, and design-principles agreement",
      "Weeks 2-3: Fulfilment workflow design, carrier integration architecture, and warehouse technology specification",
      "Week 4: Design review, stakeholder sign-off, and build-ready documentation delivery",
    ],
    deliverables: [
      {
        title: "Fulfilment workflow designs",
        description:
          "End-to-end process specifications from inbound receipt to last-mile despatch and returns, with throughput targets, accuracy checkpoints, and escalation paths at each stage.",
      },
      {
        title: "Carrier and TMS integration architecture",
        description:
          "Data-flow diagrams and API integration specifications connecting your WMS, TMS, and carrier systems into a real-time network visibility picture.",
      },
      {
        title: "Warehouse technology specification",
        description:
          "Scanning, slotting, and automation technology recommendations with layout integration plans aligned to your fulfilment volume and accuracy targets.",
      },
      {
        title: "Adoption and training plan",
        description:
          "Role-specific onboarding materials for warehouse operatives, transport coordinators, and planning teams, with a rollout sequence and sign-off criteria.",
      },
    ],
    packageHighlights: [
      "Fulfilment, carrier integration, and warehouse technology designed in a single engagement",
      "Integration architecture built to your existing WMS, TMS, and carrier connections",
      "Throughput and accuracy targets embedded in workflow specifications from the design stage",
    ],
    faqIntro: "Key questions about the Logistics Operations design engagement.",
    faqs: [
      {
        question: "Does the design cover returns as well as outbound fulfilment?",
        answer:
          "Yes. Returns workflow specifications are included as a standard component of the fulfilment blueprint.",
      },
      {
        question: "What if we are changing our WMS as part of this programme?",
        answer:
          "The integration architecture can be designed for your target WMS system if a platform migration is already planned. The DigitalQatalyst team confirms the approach during scoping.",
      },
      {
        question: "How are specifications handed to the delivery team?",
        answer:
          "Annotated workflow diagrams, integration specs, and warehouse technology recommendations in a shared workspace formatted for handover to internal or third-party implementation teams.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call and the DigitalQatalyst team will confirm the network scope, the workshops required, and the design sprint schedule.",
      },
    ],
    audience:
      "Supply chain directors, heads of logistics operations, warehouse technology managers, and distribution network leaders planning fulfilment improvement programmes",
    industryRelevance:
      "Logistics providers, distributors, retailers with in-house fulfilment, and supply chain operators planning network or technology redesign",
    businessImpact:
      "Produces build-ready fulfilment and integration specifications that reduce rework during implementation, ensuring launched capabilities deliver measurable accuracy and throughput improvements from day one.",
    tags: ["logistics-design", "supply-chain", "warehouse-management"],
  },

  193: {
    description:
      "A logistics-focused AI design engagement that validates which AI capabilities will genuinely improve demand forecasting, route optimisation, and fulfilment planning, producing responsible workflow designs and build-ready specifications before any development investment is committed.",
    positioning:
      "Design logistics AI with validated forecasting and routing use cases, clean data requirements, and responsible guardrails defined before build begins.",
    features: [
      "AI use-case validation for logistics: demand forecasting, dynamic route optimisation, predictive inventory replenishment, and carrier performance scoring ranked by data readiness and network value",
      "Responsible logistics AI workflow design specifying when planners retain override authority over AI routing and replenishment recommendations",
      "Logistics data readiness assessment covering order history, carrier, fleet, and inventory data required for each validated use case",
      "Deployment-ready AI specifications with model selection rationale, WMS and TMS integration points, and monitoring metrics",
    ],
    timelineMilestones: [
      "Week 1: AI use-case workshops, logistics data landscape review, and feasibility scoring",
      "Weeks 2-3: Responsible workflow design, data-gap remediation planning, and WMS/TMS integration mapping",
      "Week 4: Specification review, governance sign-off, and deployment-ready documentation delivery",
    ],
    deliverables: [
      {
        title: "Validated logistics AI use-case register",
        description:
          "Candidate AI use cases scored against network value, data availability, and responsible-AI criteria specific to logistics and supply chain operations.",
      },
      {
        title: "Responsible logistics AI workflow designs",
        description:
          "Step-by-step specifications for AI-assisted route planning, demand forecasting, and replenishment, with planner override controls and escalation paths.",
      },
      {
        title: "Logistics data readiness report",
        description:
          "Assessment of order, carrier, fleet, and inventory data required for each approved AI use case, with gaps and remediation steps identified.",
      },
      {
        title: "AI deployment specification",
        description:
          "Build-ready documentation covering model selection, WMS and TMS integration points, monitoring metrics, and rollback procedures for each approved logistics AI use case.",
      },
    ],
    packageHighlights: [
      "Use-case validation against your actual order and carrier data, not generic industry benchmarks",
      "Planner override controls specified in every AI routing and replenishment workflow",
      "Deployment specifications ready to hand to your engineering or WMS vendor team",
    ],
    faqIntro: "Key questions about designing AI capabilities for logistics operations.",
    faqs: [
      {
        question: "Which AI use cases make sense for logistics?",
        answer:
          "Demand forecasting, dynamic route optimisation, predictive inventory replenishment, and carrier performance scoring are the most common starting points. The DigitalQatalyst team validates which are feasible for your data.",
      },
      {
        question: "How much historical data is needed for demand forecasting AI?",
        answer:
          "Typically two or more years of order and inventory records. The data readiness report specifies exactly what each use case requires and identifies gaps to close.",
      },
      {
        question: "How do you keep human planners in control of AI routing decisions?",
        answer:
          "Override controls and confidence thresholds are built into every AI routing workflow design. The specification defines when and how planners retain authority over final route assignments.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a scoping call and the DigitalQatalyst team will confirm which AI use cases to evaluate and what data access is required for the feasibility assessment.",
      },
    ],
    audience:
      "Supply chain directors, heads of logistics planning, chief data officers, and WMS and TMS platform owners evaluating AI investment",
    industryRelevance:
      "Logistics providers, distributors, and supply chain operators with order, carrier, and inventory data sufficient to support AI model training and validation",
    businessImpact:
      "Prevents investment in logistics AI the data estate cannot support, and delivers governance-ready specifications that accelerate responsible deployment of forecasting and routing AI that reduces fulfilment cost and delivery failures.",
    tags: ["ai-design", "logistics-ai", "route-optimisation"],
  },

  194: {
    description:
      "A managed logistics deployment that configures, integrates, tests, and launches your warehouse management and carrier integration capabilities, with structured quality assurance across fulfilment workflows and a formal handover to your logistics operations team.",
    positioning:
      "Go live with improved logistics operations through a tested build that covers WMS configuration, carrier integration, and fulfilment workflow launch.",
    features: [
      "Configured WMS and TMS setup aligned to your approved fulfilment workflow designs, including scanning, slotting, and carrier API connections",
      "End-to-end integration testing across inbound, pick and pack, despatch, carrier handoff, and returns workflows before any live inventory traffic",
      "Warehouse and planning team acceptance testing with fulfilment-scenario sign-off gates for each operational zone",
      "Controlled go-live with hypercare monitoring and a confirmed operational handover to your logistics management team",
    ],
    timelineMilestones: [
      "Weeks 1-3: Environment setup, WMS configuration, and carrier integration build",
      "Weeks 4-8: Workflow configuration, inventory data migration, and zone-by-zone unit testing",
      "Weeks 9-11: Warehouse and planning team acceptance testing, issue resolution, and go-live readiness review",
      "Week 12: Controlled launch, hypercare monitoring, and formal logistics operations handover",
    ],
    deliverables: [
      {
        title: "Configured logistics operations platform",
        description:
          "WMS, TMS, and carrier integrations configured and tested end-to-end across all in-scope fulfilment workflows and operational zones.",
      },
      {
        title: "Test results and sign-off report",
        description:
          "Test evidence covering integration, fulfilment workflow, and acceptance scenarios for each operational zone, with all critical issues resolved before go-live.",
      },
      {
        title: "Staff training completion record",
        description:
          "Documented training completion for warehouse operatives, transport coordinators, and planning teams, with competency assessed against the fulfilment standards in the workflow designs.",
      },
      {
        title: "Logistics operations handover pack",
        description:
          "WMS configuration documentation, carrier integration runbooks, escalation contacts, and first-90-days operational guidance for your logistics management team.",
      },
    ],
    packageHighlights: [
      "Zone-by-zone acceptance testing with formal sign-off before any live inventory transactions",
      "Carrier API integrations tested alongside WMS workflows before go-live",
      "Hypercare monitoring covers the first weeks of live fulfilment operation",
    ],
    faqIntro: "Key questions about the Logistics Operations deployment engagement.",
    faqs: [
      {
        question: "Can we go live with one warehouse zone before expanding?",
        answer:
          "Yes. The deployment plan typically phases activation by fulfilment zone or product category, allowing validation at smaller scale before full warehouse rollout.",
      },
      {
        question: "How is live inventory data migrated?",
        answer:
          "Inventory migration is planned, validated, and tested in a non-production environment before go-live. The migration plan is confirmed with your operations team during the first three weeks.",
      },
      {
        question: "What happens if carrier integrations fail during acceptance testing?",
        answer:
          "Carrier integration failures are logged, triaged, and resolved before that carrier goes live. Individual carrier failures do not delay zones that are ready for launch.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your approved workflow specifications with the DigitalQatalyst team and we will scope the deployment plan, environment requirements, and carrier onboarding sequence.",
      },
    ],
    audience:
      "Logistics operations directors, WMS and TMS platform owners, warehouse managers, and technology leads in organisations ready to build and launch approved supply chain improvements",
    industryRelevance:
      "Logistics providers, distributors, and supply chain operators moving from design into build and live operation of improved fulfilment and carrier management platforms",
    businessImpact:
      "Delivers a tested, live logistics operations platform with trained warehouse and planning teams, reducing the risk of fulfilment errors and carrier integration failures in the critical launch period.",
    tags: ["deployment", "logistics-technology", "warehouse-management"],
  },

  195: {
    description:
      "A governed AI deployment that activates validated logistics AI capabilities in production, with integrated monitoring, planner override controls, and a formal handover to your supply chain operations and technology teams.",
    positioning:
      "Activate demand forecasting and route optimisation AI in a controlled, monitored environment with planner authority and governance built in from day one.",
    features: [
      "Production deployment of validated logistics AI features: demand forecasting, dynamic route optimisation, and predictive inventory replenishment",
      "Real-time monitoring dashboards tracking forecast accuracy, route efficiency gains, and fulfilment-cost signals across the network",
      "Planner override controls ensuring supply chain planners can adjust or reject AI routing and replenishment recommendations at any stage",
      "Logistics team AI literacy programme covering model purpose, confidence intervals, and escalation procedures for planning and operations staff",
    ],
    timelineMilestones: [
      "Weeks 1-4: Production environment setup, AI model integration, and data pipeline validation",
      "Weeks 5-8: Shadow-mode operation alongside existing planning workflows, forecast accuracy and route efficiency baselining",
      "Weeks 9-11: Phased live activation by use case, monitoring review, and planning team sign-off",
      "Week 12: Full live operation, handover to logistics and technology teams, monitoring confirmed",
    ],
    deliverables: [
      {
        title: "Live logistics AI capability suite",
        description:
          "Approved AI features in production, integrated with WMS and TMS, accepted by supply chain planning and logistics operations leads.",
      },
      {
        title: "Logistics AI monitoring dashboard",
        description:
          "Real-time view of forecast accuracy, route efficiency, and fulfilment-cost signals, with alert thresholds agreed with your planning and operations team.",
      },
      {
        title: "Planner governance documentation",
        description:
          "Written policies and in-system controls covering when planners must review or override AI forecasting and routing recommendations, with escalation paths.",
      },
      {
        title: "AI operations handover pack",
        description:
          "Model cards, WMS and TMS integration diagrams, monitoring runbooks, and retraining schedules for your supply chain technology and operations teams.",
      },
    ],
    packageHighlights: [
      "Shadow-mode testing validates forecast and route AI accuracy before any operational decisions are affected",
      "Planner override controls active from day one of live AI operation across all use cases",
      "Use-case-by-use-case activation reduces risk at each launch gate",
    ],
    faqIntro: "Key questions about deploying AI into live logistics operations.",
    faqs: [
      {
        question: "Which AI capabilities are activated in this deployment?",
        answer:
          "Those validated in your AI Design phase: commonly demand forecasting, dynamic route optimisation, and predictive replenishment. Scope is confirmed from your approved specifications.",
      },
      {
        question: "How do you prevent AI forecasting errors from affecting inventory commitments?",
        answer:
          "Shadow-mode testing runs forecasting models against live data without acting on outputs until accuracy thresholds are met. Planner override controls remain active after full launch.",
      },
      {
        question: "Who maintains the AI models after handover?",
        answer:
          "Your supply chain technology team, using model cards, monitoring runbooks, and retraining schedules provided in the handover pack. The DigitalQatalyst team can provide ongoing managed support if needed.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your approved AI deployment specifications and the DigitalQatalyst team will confirm production environment requirements and the use-case activation sequence.",
      },
    ],
    audience:
      "Supply chain directors, chief technology officers, WMS and TMS platform owners, and logistics planning leads ready to activate validated AI capabilities",
    industryRelevance:
      "Logistics providers, distributors, and supply chain operators that have completed AI design validation and are ready to deploy forecasting and routing AI into live operations",
    businessImpact:
      "Activates demand forecasting and route optimisation AI with operational safeguards, reducing fulfilment costs and delivery failures while maintaining planner authority over critical supply chain decisions.",
    tags: ["ai-deployment", "logistics-ai", "demand-forecasting"],
  },

  196: {
    description:
      "An ongoing managed service that runs and continuously improves your logistics operations platform, with SLA-backed monitoring, monthly performance reporting across fulfilment and carrier delivery, and proactive network optimisation by the DigitalQatalyst team.",
    positioning:
      "Keep logistics and supply chain operations performing at target with continuous monitoring, proactive route and fulfilment optimisation, and monthly network performance reporting.",
    features: [
      "SLA-backed monitoring of WMS, TMS, and carrier integration platforms with defined response and resolution times across your fulfilment network",
      "Monthly network performance reviews covering fulfilment accuracy, on-time delivery, carrier performance, and system availability",
      "Proactive optimisation cycles adjusting routing configurations, slotting logic, and carrier integrations as your network evolves",
      "Named logistics-sector service team providing supply chain context and continuity across every monthly review",
    ],
    timelineMilestones: [
      "Month 1: Service onboarding, baseline network metrics, SLA confirmation, and first monitoring window",
      "Months 2-3: Steady-state monitoring, first fulfilment performance review, and initial network optimisation cycle",
      "Ongoing: Monthly reviews, quarterly optimisation sprints, and annual logistics roadmap refresh",
    ],
    deliverables: [
      {
        title: "Monthly logistics performance report",
        description:
          "Fulfilment accuracy, on-time delivery rates, carrier performance, and system-availability metrics across all in-scope network nodes, delivered every month.",
      },
      {
        title: "Network optimisation log",
        description:
          "Record of every routing adjustment, slotting change, and carrier integration fix made during the service period, with before-and-after performance metrics.",
      },
      {
        title: "SLA compliance report",
        description:
          "Monthly record of incidents, response times, and resolution times against agreed SLA targets, with root-cause notes for any network availability breaches.",
      },
      {
        title: "Annual logistics roadmap",
        description:
          "Forward-looking plan identifying network optimisation priorities, platform upgrade opportunities, and recommended technology investments for the next 12 months.",
      },
    ],
    packageHighlights: [
      "Fulfilment and carrier performance reported together in a single monthly view",
      "Proactive route and network optimisation included alongside reactive incident management",
      "Named logistics-sector team with supply chain context, not a generic IT support function",
    ],
    faqIntro: "Key questions about the Logistics Operations managed service.",
    faqs: [
      {
        question: "What platforms does the managed service cover?",
        answer:
          "WMS, TMS, and carrier integration APIs, plus the workflows connecting them across your fulfilment network. Additional nodes and platforms can be onboarded as your estate grows.",
      },
      {
        question: "What SLA response times apply to fulfilment-critical incidents?",
        answer:
          "Response and resolution targets are agreed during onboarding. Incidents affecting live despatch and carrier integration receive priority-one treatment.",
      },
      {
        question: "Does the service scale for peak fulfilment periods?",
        answer:
          "Yes. The DigitalQatalyst team reviews your trading calendar during onboarding and confirms enhanced monitoring windows for peak despatch periods.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team to schedule a service onboarding call covering network scope, SLA targets, reporting format, and named contacts on both sides.",
      },
    ],
    audience:
      "Supply chain directors, heads of logistics, distribution centre managers, and logistics technology leads seeking ongoing platform support and network optimisation",
    industryRelevance:
      "Logistics providers, distributors, and supply chain operators running multi-node WMS and TMS environments with complex carrier integration requirements",
    businessImpact:
      "Maintains fulfilment accuracy and delivery reliability across peak and off-peak periods, freeing supply chain management to focus on network strategy rather than platform incidents.",
    tags: ["managed-service", "logistics-operations", "supply-chain"],
  },

  // -----------------------------------------------------------------------
  // WELLNESS OPERATIONS (ids 197-202)
  // -----------------------------------------------------------------------

  197: {
    description:
      "A structured assessment of your wellness, clinic, or care operations that identifies the scheduling inefficiencies, care coordination gaps, and service quality issues reducing client experience and operational throughput, and returns a prioritised improvement roadmap.",
    positioning:
      "Understand exactly where your wellness operations fall short on client experience and scheduling efficiency, with every finding ranked for clinical and operational impact.",
    features: [
      "Client journey audit mapping the friction points across booking, arrival, session delivery, and follow-up that reduce satisfaction and retention",
      "Scheduling and capacity utilisation review identifying appointment gaps, cancellation patterns, and practitioner underutilisation",
      "Care coordination gap analysis covering communication between practitioners, referral pathways, and client record completeness",
      "Prioritised improvement register scored by client-satisfaction, retention, and operational-efficiency impact",
    ],
    timelineMilestones: [
      "Days 1-2: Stakeholder interviews, scheduling and satisfaction data review, and scope confirmation",
      "Days 3-4: Client journey mapping, scheduling analysis, and care coordination gap assessment",
      "Day 5: Findings playback, prioritised roadmap, and quick-win identification",
    ],
    deliverables: [
      {
        title: "Client journey friction map",
        description:
          "A stage-by-stage view of where the client experience breaks down, from first booking to post-session follow-up, with root causes and retention-impact estimates.",
      },
      {
        title: "Scheduling and capacity report",
        description:
          "Assessment of appointment fill rates, cancellation patterns, and practitioner utilisation, with the specific inefficiencies reducing revenue and client access.",
      },
      {
        title: "Care coordination gap analysis",
        description:
          "Review of practitioner communication pathways, referral processes, and client record completeness, with the gaps affecting continuity and service quality.",
      },
      {
        title: "Prioritised improvement roadmap",
        description:
          "Sequenced action plan ranked by client-satisfaction and efficiency impact, with ownership suggestions and a phasing recommendation your leadership team can act on.",
      },
    ],
    packageHighlights: [
      "Covers client experience, scheduling efficiency, and care coordination in one assessment",
      "Client retention and satisfaction impact scored on every recommendation",
      "Fixed-scope with prioritised findings ready within the week",
    ],
    faqIntro: "Key questions about the Wellness Operations assessment.",
    faqs: [
      {
        question: "Which types of wellness organisation does the assessment cover?",
        answer:
          "Wellness centres, clinics, fitness operators, preventive health services, and allied health practices. Scope is confirmed with the DigitalQatalyst team before start.",
      },
      {
        question: "What data do you need?",
        answer:
          "Appointment and scheduling records, cancellation logs, client satisfaction feedback, and referral data. No sensitive health records are required.",
      },
      {
        question: "Can the assessment cover multiple sites or practitioners?",
        answer:
          "Yes. The assessment scope covers the sites and practitioner groups confirmed with the DigitalQatalyst team during scoping.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation and the DigitalQatalyst team will confirm the operational scope, data requirements, and assessment schedule.",
      },
    ],
    audience:
      "Clinic directors, wellness centre managers, heads of allied health operations, and practice managers in wellness and preventive care organisations",
    industryRelevance:
      "Wellness providers, clinics, fitness operators, preventive health services, and allied health practices seeking to improve client experience and operational efficiency",
    businessImpact:
      "Surfaces the specific scheduling, coordination, and service-quality failures reducing client retention and practitioner utilisation, giving leadership a clear evidence-based plan for targeted improvement.",
    tags: ["wellness-operations", "client-experience", "scheduling-efficiency"],
  },

  198: {
    description:
      "A design engagement that converts your wellness operations goals into client-centred journey designs, appointment and care coordination workflow specifications, and technology integration blueprints your implementation teams can build and launch.",
    positioning:
      "Design the wellness operations blueprint your practitioners and clients need: booking journeys, care coordination workflows, and platform integrations ready for build.",
    features: [
      "Client journey designs covering online booking, arrival, session delivery, care plan recording, and post-session follow-up across every touchpoint",
      "Practitioner workflow specifications defining care coordination, record-keeping, referral, and scheduling handoff standards to reduce administrative burden",
      "Practice management system and EHR integration architecture connecting booking, care records, billing, and client communications into a single operational view",
      "Adoption plan with role-specific training outlines for reception, practitioners, and clinic management",
    ],
    timelineMilestones: [
      "Week 1: Stakeholder workshops, current-state mapping, and design-principles agreement",
      "Weeks 2-3: Client journey design, practitioner workflow specification, and technology integration architecture",
      "Week 4: Design review, stakeholder sign-off, and build-ready documentation delivery",
    ],
    deliverables: [
      {
        title: "Client journey designs",
        description:
          "End-to-end journey maps from first contact to post-session follow-up, with service standards, touchpoints, and consistency requirements across booking and in-clinic experiences.",
      },
      {
        title: "Practitioner workflow specifications",
        description:
          "Step-by-step workflow definitions for scheduling, care planning, record-keeping, and referral processes, designed to reduce administrative time and coordination failures.",
      },
      {
        title: "Technology integration architecture",
        description:
          "Data-flow diagrams and integration specifications connecting your practice management system, EHR, billing, and client-communication tools into a coherent operational view.",
      },
      {
        title: "Adoption and training plan",
        description:
          "Role-specific onboarding materials for reception, practitioners, and clinic managers, with a rollout sequence and go/no-go criteria for each phase.",
      },
    ],
    packageHighlights: [
      "Client experience and practitioner workflow design completed together in a single sprint",
      "Integration architecture built to your existing practice management and EHR systems",
      "Specifications include both clinical and administrative workflow requirements",
    ],
    faqIntro: "Key questions about the Wellness Operations design engagement.",
    faqs: [
      {
        question: "Does the design cover digital booking as well as in-clinic workflows?",
        answer:
          "Yes. Client journey designs span online booking through to in-clinic delivery and post-session follow-up, covering all touchpoints in your client experience.",
      },
      {
        question: "Can the design accommodate multiple disciplines or service types?",
        answer:
          "Yes. Workflow specifications are designed per discipline or service type where your operation offers a range of modalities.",
      },
      {
        question: "What if we are migrating to a new practice management system?",
        answer:
          "The integration architecture can be designed for your target platform if a migration is already planned. The DigitalQatalyst team confirms the approach during scoping.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call and the DigitalQatalyst team will confirm the service types in scope, the workshops required, and the design sprint schedule.",
      },
    ],
    audience:
      "Clinic directors, wellness centre managers, heads of allied health operations, and technology managers planning wellness operations improvement programmes",
    industryRelevance:
      "Wellness providers, clinics, fitness operators, and allied health practices ready to move from identified gaps to a delivery-ready design for operational improvement",
    businessImpact:
      "Produces build-ready client experience and workflow specifications that reduce rework during implementation, ensuring launched capabilities deliver measurable improvements in client satisfaction and scheduling efficiency from go-live.",
    tags: ["wellness-design", "client-journey", "practice-management"],
  },

  199: {
    description:
      "A wellness-focused AI design engagement that validates which AI capabilities will genuinely improve appointment scheduling, client retention prediction, and care coordination quality, producing responsible workflow designs and build-ready specifications before any development begins.",
    positioning:
      "Design AI for wellness with validated scheduling and retention use cases, clear data requirements, and clinical governance guardrails defined before build begins.",
    features: [
      "AI use-case validation for wellness: appointment scheduling optimisation, client dropout prediction, care plan recommendation, and demand forecasting scored by data readiness and clinical value",
      "Responsible wellness AI workflow design specifying where practitioners retain full clinical authority and how AI recommendations are framed as support tools rather than directives",
      "Wellness data readiness assessment covering appointment history, client engagement, care plan, and practitioner data required for each validated use case",
      "Deployment-ready AI specifications with model selection rationale, PMS and EHR integration points, and monitoring metrics for approved use cases",
    ],
    timelineMilestones: [
      "Week 1: AI use-case workshops, wellness data landscape review, and feasibility scoring",
      "Weeks 2-3: Responsible workflow design, clinical-governance specification, and PMS/EHR integration mapping",
      "Week 4: Specification review, governance sign-off, and deployment-ready documentation delivery",
    ],
    deliverables: [
      {
        title: "Validated wellness AI use-case register",
        description:
          "Candidate AI use cases scored against clinical value, data availability, regulatory constraints, and responsible-AI criteria specific to wellness and care operations.",
      },
      {
        title: "Responsible wellness AI workflow designs",
        description:
          "Step-by-step specifications for AI-assisted scheduling and retention modelling, with practitioner authority boundaries, override controls, and client-communication guidelines.",
      },
      {
        title: "Wellness data readiness report",
        description:
          "Assessment of appointment, engagement, care plan, and practitioner data required for each approved AI use case, with gaps and remediation steps.",
      },
      {
        title: "AI deployment specification",
        description:
          "Build-ready documentation covering model selection, PMS and EHR integration points, monitoring metrics, and rollback procedures for each approved wellness AI use case.",
      },
    ],
    packageHighlights: [
      "Use-case validation against your actual appointment and client data, not generic health-sector benchmarks",
      "Clinical authority boundaries and practitioner override controls specified in every AI workflow design",
      "Regulatory and privacy considerations for health and wellness data addressed at design stage",
    ],
    faqIntro: "Key questions about designing AI capabilities for wellness operations.",
    faqs: [
      {
        question: "What AI use cases make sense for wellness operations?",
        answer:
          "Appointment scheduling optimisation, client dropout prediction, demand forecasting, and care plan recommendation support are common starting points. The DigitalQatalyst team validates which are feasible for your data.",
      },
      {
        question: "How do you handle health and wellness data privacy in AI designs?",
        answer:
          "Privacy requirements and data-minimisation principles are built into every workflow specification. Regulatory constraints relevant to your jurisdiction are identified and addressed during the engagement.",
      },
      {
        question: "Do practitioners retain clinical authority when AI makes care recommendations?",
        answer:
          "Yes, unconditionally. Every AI care-support workflow design specifies that practitioners have full authority to accept, modify, or reject AI recommendations. AI is framed as a decision-support tool only.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a scoping call and the DigitalQatalyst team will confirm which AI use cases to evaluate and what data access is required for the feasibility assessment.",
      },
    ],
    audience:
      "Clinic directors, heads of allied health operations, digital health leads, and practice technology managers evaluating AI investment in wellness settings",
    industryRelevance:
      "Wellness providers, clinics, fitness operators, and allied health practices with appointment, engagement, and care-plan data sufficient to support responsible AI model development",
    businessImpact:
      "Prevents investment in wellness AI the data estate cannot support, and delivers governance-ready specifications that protect practitioner authority and client privacy while enabling responsible deployment of scheduling and retention AI.",
    tags: ["ai-design", "wellness-ai", "responsible-ai"],
  },

  200: {
    description:
      "A managed wellness operations deployment that configures, integrates, tests, and launches your practice management and client engagement platform capabilities, with structured quality assurance and a formal handover to your clinic and wellness operations team.",
    positioning:
      "Launch improved wellness operations through a tested build covering practice management configuration, care coordination workflows, and a confirmed team handover.",
    features: [
      "Configured practice management system and EHR setup aligned to your approved client journey and practitioner workflow designs",
      "End-to-end integration testing across booking, scheduling, care record, billing, and client-communication workflows before any live client interactions",
      "Practitioner and reception team acceptance testing with discipline-specific scenarios and formal sign-off gates",
      "Controlled go-live with hypercare monitoring and a confirmed operational handover to your clinic management team",
    ],
    timelineMilestones: [
      "Weeks 1-3: Environment setup, PMS and EHR configuration, and integration build",
      "Weeks 4-8: Workflow configuration, client data migration, and discipline-specific unit testing",
      "Weeks 9-11: Practitioner and reception acceptance testing, issue resolution, and go-live readiness review",
      "Week 12: Controlled launch, hypercare monitoring, and formal wellness operations handover",
    ],
    deliverables: [
      {
        title: "Configured wellness operations platform",
        description:
          "Practice management system and EHR configured and integrated across your in-scope service types and sites, with booking, care record, and billing flows tested end-to-end.",
      },
      {
        title: "Test results and discipline sign-off report",
        description:
          "Test evidence covering integration, care workflow, and acceptance scenarios for each discipline, with all critical issues resolved before any live client access.",
      },
      {
        title: "Staff training completion record",
        description:
          "Documented training completion for reception, practitioners, and clinic managers, with competency assessed against the client experience and workflow standards in your design.",
      },
      {
        title: "Wellness operations handover pack",
        description:
          "Platform configuration documentation, care-workflow runbooks, escalation contacts, and first-90-days operational guidance for your clinic management team.",
      },
    ],
    packageHighlights: [
      "Discipline-by-discipline acceptance testing with formal sign-off before any live client interactions",
      "EHR and PMS workflows tested together before go-live to prevent care-record gaps at launch",
      "Hypercare monitoring covers the first weeks of live wellness operation",
    ],
    faqIntro: "Key questions about the Wellness Operations deployment engagement.",
    faqs: [
      {
        question: "Can we go live with one clinic site or discipline before expanding?",
        answer:
          "Yes. The deployment plan typically phases activation by site or discipline, allowing validation at smaller scale before full rollout.",
      },
      {
        question: "How is existing client data migrated?",
        answer:
          "Client data migration is planned, validated, and tested in a non-production environment before go-live. The migration approach is confirmed with your operations and clinical leads during the first three weeks.",
      },
      {
        question: "What if acceptance testing reveals issues with a specific discipline workflow?",
        answer:
          "Issues are logged, triaged, and resolved before that discipline proceeds to launch. Discipline-specific sign-off gates mean a delay in one area does not hold back others that are ready.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your approved workflow specifications with the DigitalQatalyst team and we will scope the deployment plan and environment requirements.",
      },
    ],
    audience:
      "Clinic directors, wellness centre managers, practice technology managers, and project leads in wellness organisations ready to build and launch approved operational improvements",
    industryRelevance:
      "Wellness providers, clinics, fitness operators, and allied health practices moving from design into build and live operation of improved practice management and client engagement platforms",
    businessImpact:
      "Delivers a tested, live wellness operations platform with trained practitioners and reception teams, reducing the risk of care-record gaps and client experience failures in the critical weeks after go-live.",
    tags: ["deployment", "wellness-technology", "practice-management"],
  },

  201: {
    description:
      "A governed AI deployment that activates validated wellness AI capabilities in production, with integrated monitoring, practitioner authority controls, and a formal handover to your clinic operations and technology teams.",
    positioning:
      "Launch scheduling optimisation and client retention AI in a controlled, monitored environment where practitioners retain full clinical authority from activation day.",
    features: [
      "Production deployment of validated wellness AI features: appointment scheduling optimisation, client dropout prediction, and demand forecasting",
      "Real-time monitoring dashboards tracking scheduling fill rates, client retention signals, and model recommendation uptake across your practice",
      "Practitioner authority controls ensuring clinical staff can review, modify, or reject any AI care-support recommendation at any point",
      "Wellness team AI literacy programme covering model purpose, confidence thresholds, data-privacy commitments, and escalation procedures",
    ],
    timelineMilestones: [
      "Weeks 1-4: Production environment setup, AI model integration, and data pipeline validation",
      "Weeks 5-8: Shadow-mode operation alongside existing scheduling workflows, accuracy and retention-signal baselining",
      "Weeks 9-11: Phased live activation by use case, monitoring review, and practitioner sign-off",
      "Week 12: Full live operation, handover to clinic and technology teams, monitoring confirmed",
    ],
    deliverables: [
      {
        title: "Live wellness AI capability suite",
        description:
          "Approved AI features in production, integrated with your PMS and EHR, accepted by clinical leads and clinic management.",
      },
      {
        title: "Wellness AI monitoring dashboard",
        description:
          "Real-time view of scheduling fill rates, client retention metrics, and model recommendation uptake, with alert thresholds agreed with your clinical and operations team.",
      },
      {
        title: "Clinical governance documentation",
        description:
          "Written policies and in-system controls confirming practitioner authority over AI care-support outputs, with override procedures and client communication guidelines.",
      },
      {
        title: "AI operations handover pack",
        description:
          "Model cards, PMS and EHR integration diagrams, monitoring runbooks, and retraining schedules handed to your wellness technology and clinical operations teams.",
      },
    ],
    packageHighlights: [
      "Shadow-mode testing validates scheduling and retention AI against live client data before any clinical workflows are affected",
      "Practitioner authority controls active from day one: no AI recommendation is acted on without clinical review where specified",
      "Use-case-by-use-case activation keeps risk contained at each launch gate",
    ],
    faqIntro: "Key questions about deploying AI into live wellness operations.",
    faqs: [
      {
        question: "Which AI capabilities are activated in this deployment?",
        answer:
          "Those validated in your AI Design phase: commonly appointment scheduling optimisation, client dropout prediction, and demand forecasting. Scope is confirmed from your approved specifications.",
      },
      {
        question: "How do you protect client privacy during AI activation?",
        answer:
          "Data-minimisation and privacy controls are built into every model integration. Shadow-mode testing operates on consented operational data only, and no client PII is used beyond what was specified in the AI Design phase.",
      },
      {
        question: "Who is responsible for AI model accuracy over time?",
        answer:
          "Your technology team, using model cards, monitoring runbooks, and retraining schedules provided in the handover pack. The DigitalQatalyst team can provide ongoing managed support if needed.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your approved AI deployment specifications and the DigitalQatalyst team will confirm production environment requirements and the use-case activation sequence.",
      },
    ],
    audience:
      "Clinic directors, chief technology officers, digital health leads, and wellness practice managers ready to activate validated AI capabilities in live clinical and wellness settings",
    industryRelevance:
      "Wellness providers, clinics, and allied health practices that have completed AI design validation and are ready to deploy scheduling and retention AI into live operations",
    businessImpact:
      "Activates scheduling and retention AI with clinical governance and privacy controls in place, improving appointment fill rates and client retention while maintaining full practitioner authority over care decisions.",
    tags: ["ai-deployment", "wellness-ai", "responsible-ai"],
  },

  202: {
    description:
      "An ongoing managed service that runs and continuously improves your wellness operations platform, with SLA-backed monitoring, monthly performance reporting across scheduling and client experience, and proactive optimisation by the DigitalQatalyst team.",
    positioning:
      "Keep wellness operations and client experience performing consistently with continuous monitoring, proactive scheduling optimisation, and monthly operational reporting.",
    features: [
      "SLA-backed monitoring of your practice management system, EHR, and client-communication platforms with defined response and resolution times",
      "Monthly performance reviews covering appointment fill rates, client retention, care coordination quality, and system availability",
      "Proactive optimisation cycles adjusting scheduling logic, workflow configurations, and platform integrations as your practice evolves",
      "Named wellness-sector service team with clinical operations context providing continuity across every monthly review",
    ],
    timelineMilestones: [
      "Month 1: Service onboarding, baseline operational metrics, SLA confirmation, and first monitoring window",
      "Months 2-3: Steady-state monitoring, first performance review, and initial scheduling optimisation cycle",
      "Ongoing: Monthly reviews, quarterly optimisation sprints, and annual wellness operations roadmap",
    ],
    deliverables: [
      {
        title: "Monthly wellness operations performance report",
        description:
          "Appointment fill rates, client retention, care coordination quality metrics, and system-availability data across all in-scope platforms, delivered every month.",
      },
      {
        title: "Optimisation log",
        description:
          "Record of every scheduling adjustment, workflow change, and platform integration fix made during the service period, with before-and-after performance metrics.",
      },
      {
        title: "SLA compliance report",
        description:
          "Monthly record of incidents, response times, and resolution times against agreed SLA targets, with root-cause notes for any platform availability breaches.",
      },
      {
        title: "Annual wellness operations roadmap",
        description:
          "Forward-looking plan identifying scheduling optimisation priorities, platform upgrade opportunities, and recommended investments for the next 12 months of your practice.",
      },
    ],
    packageHighlights: [
      "Scheduling and client retention reported together in a single monthly view",
      "Proactive scheduling optimisation included alongside reactive incident management",
      "Named team with wellness-sector and clinical operations context, not a generic IT support function",
    ],
    faqIntro: "Key questions about the Wellness Operations managed service.",
    faqs: [
      {
        question: "What platforms does the managed service cover?",
        answer:
          "Your practice management system, EHR, and client-communication platforms, plus the integrations connecting them. Additional systems can be onboarded as your estate grows.",
      },
      {
        question: "What SLA response times apply to booking-critical incidents?",
        answer:
          "Response and resolution targets are agreed during onboarding. Incidents affecting live client booking and care record access receive priority-one treatment.",
      },
      {
        question: "Does the service include peak-demand support for busy clinic periods?",
        answer:
          "Yes. The DigitalQatalyst team reviews your appointment calendar during onboarding and confirms enhanced monitoring for high-demand periods.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team to schedule a service onboarding call covering platforms in scope, SLA targets, reporting format, and named contacts on both sides.",
      },
    ],
    audience:
      "Clinic directors, wellness centre managers, heads of allied health operations, and practice technology leads seeking ongoing platform support and scheduling optimisation",
    industryRelevance:
      "Wellness providers, clinics, fitness operators, and allied health practices running multi-system environments across booking, care records, billing, and client communications",
    businessImpact:
      "Maintains appointment fill rates and platform reliability across peak and off-peak periods, freeing clinical and management staff to focus on client care rather than system incidents.",
    tags: ["managed-service", "wellness-operations", "practice-management"],
  },
};
