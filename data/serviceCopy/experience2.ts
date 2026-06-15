import type { CollectionCopyOverrides } from "./types";

/**
 * EXPERIENCE batch 2: CRM Solutions, Marketing Solutions, Smart Sales & Quotation,
 * Customer Support & Success, IT Operations & Support
 * (variant ids 31-54, 133-138).
 * Keyed by variant id. See ./types.ts for the field contract and voice rules.
 */
export const experience2Copy: CollectionCopyOverrides = {

  // -----------------------------------------------------------------------
  // CRM Solutions (ids 31-36)
  // -----------------------------------------------------------------------

  // 31: CRM Solutions - advisory (Assess)
  31: {
    description:
      "Audit your CRM platform and relationship management practices against current performance data, then receive a prioritised roadmap of the changes most likely to lift pipeline visibility and revenue consistency.",
    positioning:
      "Understand exactly where your CRM is costing you deals, before you spend a pound on change.",
    features: [
      "Current-state audit of CRM data quality, pipeline coverage, and process adherence",
      "Gap analysis mapped to sales, marketing, and service outcomes you care about",
      "Prioritised improvement roadmap with effort scores and owner recommendations",
      "Stakeholder-ready findings pack your leadership team can act on immediately",
    ],
    timelineMilestones: [
      "Days 1-2: CRM data and process review, stakeholder interviews",
      "Days 3-4: Gap scoring, impact analysis, and roadmap sequencing",
      "Day 5: Findings presentation and prioritised roadmap handover",
    ],
    deliverables: [
      {
        title: "CRM maturity scorecard",
        description:
          "Ratings across data quality, adoption, pipeline hygiene, and integration coverage, with specific evidence for each score.",
      },
      {
        title: "Gap and root-cause register",
        description:
          "Every identified gap linked to its business impact, so investment decisions are grounded in actual revenue and retention risk.",
      },
      {
        title: "Prioritised CRM improvement roadmap",
        description:
          "Sequenced actions ranked by impact and effort, with suggested owners and logical dependencies your teams can execute.",
      },
      {
        title: "Executive summary",
        description:
          "A concise brief for your leadership team covering findings, priorities, and the investment case for the next phase.",
      },
    ],
    packageHighlights: [
      "Fixed-scope, no-obligation assessment completed within one week",
      "Evidence-led findings grounded in your CRM data, not generic benchmarks",
      "Roadmap ready for immediate stakeholder review and sign-off",
    ],
    faqIntro: "Common questions about the CRM platform maturity assessment.",
    faqs: [
      {
        question: "What CRM platforms do you assess?",
        answer:
          "The DigitalQatalyst team works across Salesforce, HubSpot, Microsoft Dynamics, and other major CRM platforms. We confirm platform scope during the initial consultation.",
      },
      {
        question: "What access do you need from us?",
        answer:
          "Primarily read-only access to CRM reports and configuration, plus 3-4 hours of stakeholder time across sales, marketing, and service leads. No write access is required.",
      },
      {
        question: "Will the roadmap tell us how much change will cost?",
        answer:
          "The roadmap includes effort estimates and sequencing. Detailed cost modelling comes in the Design or Deploy phase once scope is confirmed.",
      },
      {
        question: "Is this assessment suitable if we are mid-implementation?",
        answer:
          "Yes. A mid-implementation assessment often catches misalignments before they become expensive to fix. The DigitalQatalyst team adjusts scope to focus on the most actionable findings.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation and the DigitalQatalyst team will confirm scope, stakeholders, and data access before any work begins.",
      },
    ],
    audience: "Sales Directors, Revenue Operations leads, CX and Marketing leaders",
    industryRelevance:
      "Organisations managing active sales pipelines, key account portfolios, or multi-channel customer relationships across B2B and B2C sectors",
    businessImpact:
      "Identifies the CRM gaps causing pipeline leakage and forecast inaccuracy, giving leadership a clear, costed path to higher win rates and stronger customer retention.",
    tags: ["crm", "pipeline-management", "revenue-operations"],
  },

  // 32: CRM Solutions - design
  32: {
    description:
      "Turn your CRM improvement goals into user-centred workflows, integration specifications, and a build-ready blueprint your delivery team can implement with confidence.",
    positioning:
      "A CRM design blueprint that closes the gap between what the platform can do and what your teams actually need.",
    features: [
      "User journey mapping for sales, marketing, and service roles across the CRM lifecycle",
      "Data model and field architecture designed for reporting accuracy and automation readiness",
      "Integration specifications covering your marketing, finance, and operational systems",
      "Change and adoption plan with role-based training outlines and go-live criteria",
    ],
    timelineMilestones: [
      "Week 1: Discovery workshops, user research, and current-state documentation",
      "Weeks 2-3: Workflow design, data model, and integration architecture",
      "Week 4: Prototype review, adoption planning, and specification sign-off",
    ],
    deliverables: [
      {
        title: "CRM workflow and journey designs",
        description:
          "Role-specific journey maps and process flows for sales pipeline, account management, and customer service, validated with end users.",
      },
      {
        title: "Data model and field specification",
        description:
          "Object structure, custom field definitions, validation rules, and data governance guidelines to ensure clean, reportable data from day one.",
      },
      {
        title: "Integration architecture document",
        description:
          "Detailed specifications for each system integration including data flows, trigger logic, error handling, and API or middleware requirements.",
      },
      {
        title: "Adoption and change plan",
        description:
          "Role-based training outlines, communication milestones, success metrics, and the criteria your team must meet before go-live.",
      },
    ],
    packageHighlights: [
      "User-centred design validated with your sales, marketing, and service teams",
      "Build-ready specifications your delivery team can implement without ambiguity",
      "Adoption plan included, not bolted on at the end",
    ],
    faqIntro: "Questions about the CRM design engagement and what it produces.",
    faqs: [
      {
        question: "Do we need the Assess first?",
        answer:
          "Not necessarily. If you have clear goals and existing documentation, the Design engagement can begin with a condensed discovery phase. The DigitalQatalyst team will advise during scoping.",
      },
      {
        question: "Which teams need to be involved?",
        answer:
          "Typically sales, marketing, customer service, and IT representatives. We keep individual time commitments manageable through structured workshops rather than open-ended availability.",
      },
      {
        question: "Does the design cover custom development?",
        answer:
          "Yes, where configuration alone cannot meet a requirement, the specifications will include custom development scope so your delivery team has full clarity.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call. The DigitalQatalyst team reviews your existing documentation, confirms the CRM platform, and agrees workshop participants before work begins.",
      },
    ],
    audience: "Sales Directors, Revenue Operations leads, CX and Marketing leaders",
    industryRelevance:
      "Organisations managing active sales pipelines, key account portfolios, or multi-channel customer relationships across B2B and B2C sectors",
    businessImpact:
      "Produces a CRM blueprint that reduces rework during build, accelerates adoption, and ensures the platform is fit for purpose from launch rather than requiring costly post-go-live corrections.",
    tags: ["crm", "pipeline-management", "revenue-operations"],
  },

  // 33: CRM Solutions - ai_design
  33: {
    description:
      "Validate which AI use cases genuinely improve CRM outcomes, then produce responsible workflow designs and deployment specifications your team can build and govern with confidence.",
    positioning:
      "AI capabilities for your CRM platform, scoped responsibly and specified for build before any budget is committed.",
    features: [
      "AI use-case scoring against your CRM data maturity, business value, and implementation feasibility",
      "Responsible workflow designs with bias controls, data privacy requirements, and human override points",
      "Model and vendor selection guidance tailored to your CRM platform and data landscape",
      "Deployment specifications including monitoring thresholds, model refresh cadence, and fallback logic",
    ],
    timelineMilestones: [
      "Week 1: AI opportunity identification and data readiness assessment",
      "Weeks 2-3: Use-case validation, responsible design, and workflow specification",
      "Week 4: Technical specifications, governance framework, and stakeholder sign-off",
    ],
    deliverables: [
      {
        title: "AI use-case scorecard",
        description:
          "Each candidate use case rated by business value, data availability, risk, and build feasibility, with a clear recommendation on what to pursue and in what order.",
      },
      {
        title: "Responsible AI workflow designs",
        description:
          "Workflow diagrams showing AI decision points, human override logic, bias mitigation steps, and data handling in accordance with your privacy obligations.",
      },
      {
        title: "Technical deployment specification",
        description:
          "Model inputs, outputs, integration points, infrastructure requirements, and the acceptance criteria your team will use to validate production readiness.",
      },
      {
        title: "AI governance framework",
        description:
          "Monitoring plan, escalation procedures, model refresh cadence, and the roles responsible for ongoing AI oversight within your CRM operations.",
      },
    ],
    packageHighlights: [
      "Use-case validation before build investment, not after",
      "Governance and safety controls designed in from the start",
      "Specifications compatible with your existing CRM platform architecture",
    ],
    faqIntro: "Questions about the CRM AI design engagement.",
    faqs: [
      {
        question: "Which AI capabilities are most commonly scoped for CRM?",
        answer:
          "Lead scoring, next-best-action recommendations, deal risk flagging, and customer churn prediction are the most frequently validated. The DigitalQatalyst team works through your specific pipeline to identify what your data actually supports.",
      },
      {
        question: "What data quality do we need before AI design is viable?",
        answer:
          "The data readiness assessment in week one determines this. Many organisations find targeted data cleaning in specific fields is sufficient; others discover the Assess or Design phases should come first.",
      },
      {
        question: "Does the output tell us which AI vendor or model to use?",
        answer:
          "Yes. The specifications include vendor and model recommendations with rationale based on your CRM platform, data volume, and budget constraints.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team reviews your CRM platform, existing data assets, and business priorities to shape the engagement scope.",
      },
    ],
    audience: "Sales Directors, Revenue Operations leads, CX and Marketing leaders",
    industryRelevance:
      "Organisations managing active sales pipelines, key account portfolios, or multi-channel customer relationships across B2B and B2C sectors",
    businessImpact:
      "Identifies the AI capabilities that will genuinely lift CRM performance, with governance built in, so the organisation avoids costly mis-steps and reaches production faster.",
    tags: ["crm", "ai-design", "revenue-operations", "responsible-ai"],
  },

  // 34: CRM Solutions - deploy
  34: {
    description:
      "Configure, integrate, test, and launch your CRM platform improvements with structured quality assurance and a controlled handover that leaves your team fully operational.",
    positioning:
      "CRM changes delivered on time, tested against your requirements, and handed over so your teams can run them without dependency on us.",
    features: [
      "Configuration and customisation built to approved specifications, version-controlled throughout",
      "Integration testing covering each connected system with documented pass criteria and defect resolution",
      "User acceptance testing facilitated with your sales, marketing, and service representatives",
      "Go-live playbook, rollback plan, and post-launch hypercare to protect business continuity",
    ],
    timelineMilestones: [
      "Weeks 1-3: Configuration, customisation, and integration build",
      "Weeks 4-8: System integration testing, defect resolution, and data migration",
      "Weeks 9-11: User acceptance testing, training, and go-live readiness sign-off",
      "Week 12: Controlled launch and hypercare handover",
    ],
    deliverables: [
      {
        title: "Configured CRM environment",
        description:
          "A fully built, tested CRM instance covering all approved workflows, fields, automations, and role-based permissions, ready for user acceptance.",
      },
      {
        title: "Integration test results",
        description:
          "Documented test evidence for every integration covering expected behaviours, edge cases, and the resolution record for any defects raised.",
      },
      {
        title: "User acceptance test report",
        description:
          "Signed-off UAT outcomes per business scenario, showing which criteria passed, any accepted exceptions, and the agreed go-live decision.",
      },
      {
        title: "Operational handover pack",
        description:
          "Administrator guides, escalation contacts, support procedures, and a 30-day post-launch check schedule so your team owns the platform from day one.",
      },
    ],
    packageHighlights: [
      "Full quality assurance cycle from system integration test to user acceptance",
      "Go-live playbook and rollback plan included as standard",
      "Hypercare period after launch to resolve early operational issues quickly",
    ],
    faqIntro: "Common questions about the CRM platform deployment engagement.",
    faqs: [
      {
        question: "Do we need a design specification before deploying?",
        answer:
          "Yes. The Deploy engagement builds from an agreed specification. If you do not have one, the DigitalQatalyst team can help you produce it through the Design engagement first.",
      },
      {
        question: "How is data migration handled?",
        answer:
          "Migration is scoped, mapped, and tested in a sandbox environment before production cutover. The DigitalQatalyst team runs data quality checks at each stage.",
      },
      {
        question: "What happens if issues arise after go-live?",
        answer:
          "The hypercare period provides direct access to the delivery team to resolve production issues quickly. After hypercare concludes, the Managed service can take over ongoing operations.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your approved specification or design outputs and the DigitalQatalyst team will confirm scope, resourcing, and a delivery timeline.",
      },
    ],
    audience: "Sales Directors, Revenue Operations leads, CX and Marketing leaders",
    industryRelevance:
      "Organisations managing active sales pipelines, key account portfolios, or multi-channel customer relationships across B2B and B2C sectors",
    businessImpact:
      "Delivers a working, tested CRM platform that sales and service teams adopt quickly, reducing time-to-value from project completion to measurable pipeline and retention improvement.",
    tags: ["crm", "pipeline-management", "revenue-operations"],
  },

  // 35: CRM Solutions - ai_deploy
  35: {
    description:
      "Deploy approved AI capabilities into your CRM platform with production-grade monitoring, safety controls, and a structured handover that gives your team full operational ownership.",
    positioning:
      "AI in your CRM that works in production, with the governance and monitoring to keep it working reliably.",
    features: [
      "Production deployment of AI models integrated into your CRM workflows and data pipelines",
      "Safety and bias monitoring configured to your agreed thresholds, with alerts and escalation paths",
      "Model performance dashboards accessible to your operations and analytics teams",
      "AI operations runbook and team training so your people manage the capability, not just consume it",
    ],
    timelineMilestones: [
      "Weeks 1-4: Infrastructure provisioning, model integration, and sandbox validation",
      "Weeks 5-8: Staged production deployment, bias and safety testing, and monitoring setup",
      "Weeks 9-11: Performance validation, team training, and handover readiness assessment",
      "Week 12: Production sign-off and operational handover",
    ],
    deliverables: [
      {
        title: "Production AI deployment",
        description:
          "AI capabilities fully integrated into your CRM environment, validated against the agreed performance and safety acceptance criteria.",
      },
      {
        title: "Monitoring and alerting configuration",
        description:
          "Dashboards and alert rules covering model accuracy drift, bias indicators, data pipeline health, and business outcome metrics.",
      },
      {
        title: "AI operations runbook",
        description:
          "Step-by-step procedures for monitoring, incident response, model refresh, and escalation, so your team can manage the AI capability without external dependency.",
      },
      {
        title: "Handover and training completion record",
        description:
          "Confirmed training completion for each operational role, sign-off on acceptance criteria, and a 30-day post-handover support schedule.",
      },
    ],
    packageHighlights: [
      "Staged deployment with safety validation at each production milestone",
      "Monitoring dashboards and alert rules configured before handover",
      "Operational runbook and team training included, not optional extras",
    ],
    faqIntro: "Questions about the CRM AI deployment engagement.",
    faqs: [
      {
        question: "What does the safety testing cover?",
        answer:
          "The DigitalQatalyst team tests for model accuracy degradation, demographic bias, data pipeline failures, and downstream CRM data corruption. All tests run against your agreed acceptance thresholds.",
      },
      {
        question: "Can AI capabilities be deployed to a staging environment first?",
        answer:
          "Yes. The deployment follows a staged approach: sandbox validation, then staging with production data samples, then controlled production rollout.",
      },
      {
        question: "What happens if model performance drops after go-live?",
        answer:
          "The monitoring configuration triggers alerts at agreed thresholds. The operations runbook covers the response procedure, and the DigitalQatalyst team provides post-launch support during the handover period.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your approved AI design specifications and the DigitalQatalyst team will confirm infrastructure requirements, deployment sequencing, and the production milestone schedule.",
      },
    ],
    audience: "Sales Directors, Revenue Operations leads, CX and Marketing leaders",
    industryRelevance:
      "Organisations managing active sales pipelines, key account portfolios, or multi-channel customer relationships across B2B and B2C sectors",
    businessImpact:
      "Puts validated AI capabilities into production within your CRM, delivering measurable improvements in lead prioritisation, deal forecasting accuracy, and account retention with governance in place from day one.",
    tags: ["crm", "ai-deploy", "revenue-operations", "responsible-ai"],
  },

  // 36: CRM Solutions - manage
  36: {
    description:
      "Keep your CRM platform performing at the level your revenue operations depend on, with continuous monitoring, regular optimisation cycles, and a dedicated team accountable to your agreed service levels.",
    positioning:
      "Your CRM platform, continuously maintained and improved, so your team focuses on customers, not system administration.",
    features: [
      "Monthly platform health checks covering data quality, automation success rates, and integration uptime",
      "Proactive optimisation of workflows, fields, and reports based on usage analytics and business feedback",
      "Release management, update testing, and configuration change control to protect production stability",
      "Monthly performance report with KPI tracking, usage trends, and a forward roadmap of improvements",
    ],
    timelineMilestones: [
      "Month 1: Baseline establishment, monitoring setup, and service level agreement confirmation",
      "Months 2-3: First optimisation cycle and reporting cadence live",
      "Ongoing: Monthly health checks, optimisation sprints, and quarterly roadmap review",
    ],
    deliverables: [
      {
        title: "Monthly CRM performance report",
        description:
          "Data quality scores, automation success rates, pipeline health metrics, and integration uptime, with commentary on trends and the next optimisation priorities.",
      },
      {
        title: "Optimisation change log",
        description:
          "A record of every configuration change made, the business rationale, the test evidence, and the observed outcome, giving you a complete audit trail.",
      },
      {
        title: "Release and update management record",
        description:
          "Documentation of all platform updates applied, compatibility tests run, and any issues resolved before changes reached production.",
      },
      {
        title: "Quarterly roadmap review",
        description:
          "A structured review of your CRM roadmap priorities, incorporating new business requirements, platform capability updates, and usage data from the previous quarter.",
      },
    ],
    packageHighlights: [
      "SLA-backed operations with defined response times for incidents and change requests",
      "Proactive optimisation, not just break-fix support",
      "Quarterly roadmap reviews to keep the CRM aligned with your business direction",
    ],
    faqIntro: "Questions about the CRM managed service.",
    faqs: [
      {
        question: "What does the SLA cover?",
        answer:
          "The SLA covers system availability monitoring, incident response for platform and integration failures, change management for configuration requests, and a monthly reporting cadence. Specific response and resolution targets are finalised during onboarding to reflect your operational requirements.",
      },
      {
        question: "Can we request new features or changes within the managed service?",
        answer:
          "Yes. A defined change request allowance is included each month. Larger scope changes are assessed and quoted separately so you remain in control of spend.",
      },
      {
        question: "How does the managed service interact with our internal IT team?",
        answer:
          "We operate as an extension of your team. Escalation paths, communication channels, and responsibility boundaries are agreed during onboarding and documented in the service agreement.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request an onboarding call. The DigitalQatalyst team reviews your current CRM environment, agrees the service baseline, and confirms the first reporting cycle.",
      },
    ],
    audience: "Sales Directors, Revenue Operations leads, CX and Marketing leaders",
    industryRelevance:
      "Organisations managing active sales pipelines, key account portfolios, or multi-channel customer relationships across B2B and B2C sectors",
    businessImpact:
      "Maintains CRM data quality and platform reliability so sales forecasts stay accurate, automations keep firing, and your revenue operations team spends time on selling, not system troubleshooting.",
    tags: ["crm", "managed-service", "revenue-operations"],
  },

  // -----------------------------------------------------------------------
  // Marketing Solutions (ids 37-42)
  // -----------------------------------------------------------------------

  // 37: Marketing Solutions - advisory (Assess)
  37: {
    description:
      "Audit your marketing operations, campaign infrastructure, and attribution model to identify what is limiting performance, then leave with a prioritised plan your marketing leadership can act on.",
    positioning:
      "Find out exactly why campaigns are underperforming before you invest in more technology or headcount.",
    features: [
      "Marketing operations audit covering automation health, data quality, and campaign execution consistency",
      "Attribution and measurement review to identify where reporting is misleading investment decisions",
      "Audience segmentation and targeting assessment against campaign performance outcomes",
      "Prioritised improvement roadmap with effort ratings and sequenced quick wins",
    ],
    timelineMilestones: [
      "Days 1-2: Marketing stack review, campaign data analysis, and stakeholder interviews",
      "Days 3-4: Attribution assessment, segmentation gap analysis, and roadmap sequencing",
      "Day 5: Findings presentation and prioritised marketing improvement roadmap",
    ],
    deliverables: [
      {
        title: "Marketing operations scorecard",
        description:
          "Ratings across automation reliability, data quality, segmentation accuracy, and attribution credibility, each supported by specific evidence from your current campaigns.",
      },
      {
        title: "Attribution and measurement gap report",
        description:
          "Identifies where your current measurement model is either over-crediting or under-crediting channels, and the specific changes needed to make investment decisions more accurate.",
      },
      {
        title: "Audience and segmentation review",
        description:
          "Assessment of how well your segments reflect buying behaviour, with concrete recommendations for better targeting that your platform can execute.",
      },
      {
        title: "Prioritised improvement roadmap",
        description:
          "Sequenced actions covering quick wins and longer-term changes, with effort scores so your team can plan resourcing alongside business-as-usual activity.",
      },
    ],
    packageHighlights: [
      "Fixed-scope assessment grounded in your actual campaign data and stack",
      "Attribution and measurement review included as a core output",
      "Completed within one week with no obligation to proceed further",
    ],
    faqIntro: "Questions about the marketing operations assessment.",
    faqs: [
      {
        question: "Which marketing platforms do you assess?",
        answer:
          "The DigitalQatalyst team works across HubSpot, Marketo, Salesforce Marketing Cloud, Klaviyo, and other leading platforms. We confirm scope during the initial consultation.",
      },
      {
        question: "What data do you need from us?",
        answer:
          "Campaign performance reports, automation audit logs, and audience configuration exports. No personal customer data is required for the assessment.",
      },
      {
        question: "Can this help us if we are about to re-platform?",
        answer:
          "Yes. A pre-migration assessment is one of the most valuable applications, as it identifies what is worth replicating and what should be redesigned before committing to a new platform.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation and the DigitalQatalyst team will confirm the scope, data requirements, and stakeholder participants before the engagement begins.",
      },
    ],
    audience: "CMOs, Marketing Operations leads, and Growth and Demand Generation directors",
    industryRelevance:
      "Organisations running structured marketing programmes with automation, paid and owned channel investment, and a need for reliable campaign attribution",
    businessImpact:
      "Identifies the specific automation failures, attribution gaps, and segmentation weaknesses reducing campaign return, and sequences the fixes that will move the needle fastest.",
    tags: ["marketing-ops", "campaign-performance", "attribution"],
  },

  // 38: Marketing Solutions - design
  38: {
    description:
      "Design your marketing platform architecture, campaign structures, and audience models so your team can execute at scale with consistent measurement and predictable results.",
    positioning:
      "A marketing blueprint built for how your organisation actually generates and converts demand.",
    features: [
      "Campaign architecture design covering channel mix, content cadences, and trigger logic",
      "Audience segmentation model with lifecycle stage definitions and personalisation rules",
      "Attribution and reporting framework designed for the decisions your leadership actually makes",
      "Technology and integration design connecting your marketing stack to CRM, data, and analytics",
    ],
    timelineMilestones: [
      "Week 1: Discovery workshops, current-state review, and goals alignment",
      "Weeks 2-3: Campaign architecture, segmentation model, and attribution framework design",
      "Week 4: Integration specifications, adoption plan, and final design sign-off",
    ],
    deliverables: [
      {
        title: "Campaign architecture blueprint",
        description:
          "Structured campaign templates, channel strategy, trigger logic, and content cadence designs your marketing team can immediately begin building against.",
      },
      {
        title: "Audience segmentation model",
        description:
          "Defined segments, scoring criteria, lifecycle stages, and the personalisation rules that govern how each audience receives communications.",
      },
      {
        title: "Measurement and attribution framework",
        description:
          "A reporting structure aligned to your business objectives, covering the metrics, dashboards, and data sources that will give leadership credible campaign performance data.",
      },
      {
        title: "Integration and technology specification",
        description:
          "Detailed connection specifications for your marketing platform, CRM, data warehouse, and any paid channel integrations, including sync frequency and data governance rules.",
      },
    ],
    packageHighlights: [
      "Design validated with your marketing, sales, and analytics stakeholders",
      "Attribution framework aligned to the decisions your leadership actually makes",
      "Specifications your platform team can build from without additional discovery",
    ],
    faqIntro: "Questions about the marketing design engagement.",
    faqs: [
      {
        question: "Does the design cover content strategy or creative?",
        answer:
          "The design covers campaign structures, audience logic, and channel orchestration. Content strategy and creative direction are separate engagements; the DigitalQatalyst team can advise on scope.",
      },
      {
        question: "How do you handle multi-brand or multi-market complexity?",
        answer:
          "Brand and market segmentation is addressed in the architecture design. We have experience designing frameworks that accommodate multiple brands or regional variations within a single platform.",
      },
      {
        question: "Will the design work with our existing marketing technology?",
        answer:
          "Yes. The design starts from your current stack. Where platform limitations exist, the specifications will flag them with options rather than assuming a re-platform.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call. The DigitalQatalyst team reviews your existing documentation, confirms your platform landscape, and agrees the workshop participants before work begins.",
      },
    ],
    audience: "CMOs, Marketing Operations leads, and Growth and Demand Generation directors",
    industryRelevance:
      "Organisations running structured marketing programmes with automation, paid and owned channel investment, and a need for reliable campaign attribution",
    businessImpact:
      "Produces a marketing architecture that reduces campaign production time, improves segmentation precision, and gives leadership an attribution model they can trust when making channel investment decisions.",
    tags: ["marketing-ops", "campaign-performance", "attribution"],
  },

  // 39: Marketing Solutions - ai_design
  39: {
    description:
      "Validate which AI capabilities will genuinely improve marketing outcomes for your organisation, then produce responsible workflow designs and deployment specifications ready for build.",
    positioning:
      "AI for marketing, validated against your data reality and scoped responsibly before a single line of code is written.",
    features: [
      "AI use-case scoring across personalisation, content generation, audience prediction, and spend optimisation",
      "Data readiness assessment confirming which use cases your current data actually supports",
      "Responsible AI workflow designs with privacy controls, human review points, and bias detection requirements",
      "Technical specifications covering model requirements, integration points, and monitoring thresholds",
    ],
    timelineMilestones: [
      "Week 1: AI opportunity identification, data quality review, and use-case shortlisting",
      "Weeks 2-3: Use-case validation, responsible design, and workflow specification",
      "Week 4: Technical specifications, governance framework, and sign-off",
    ],
    deliverables: [
      {
        title: "AI use-case prioritisation scorecard",
        description:
          "Each candidate marketing AI use case rated by business value, data feasibility, risk, and implementation complexity, with a clear recommendation on what to build and when.",
      },
      {
        title: "Responsible AI workflow designs",
        description:
          "Workflow diagrams showing model inputs, decision points, human review requirements, and the privacy and consent controls needed for compliance with your data obligations.",
      },
      {
        title: "Data readiness report",
        description:
          "Assessment of your marketing data against the requirements of each validated use case, including specific data quality actions needed before build can begin.",
      },
      {
        title: "Technical deployment specification",
        description:
          "Model inputs, outputs, integration requirements, infrastructure needs, and the acceptance criteria your delivery team will use to validate production readiness.",
      },
    ],
    packageHighlights: [
      "Use-case validation before build commitment, not after",
      "Privacy and consent controls designed in, not added as an afterthought",
      "Data readiness report tells you exactly what data work is needed before build",
    ],
    faqIntro: "Questions about the marketing AI design engagement.",
    faqs: [
      {
        question: "Which AI use cases are most commonly validated for marketing?",
        answer:
          "Predictive lead scoring, send-time optimisation, dynamic content personalisation, and budget allocation modelling are the most frequently scoped. The DigitalQatalyst team validates each against your specific data assets.",
      },
      {
        question: "What if our data is not ready for AI?",
        answer:
          "The data readiness report will tell you precisely what is missing. In many cases a targeted data improvement programme takes weeks rather than months. The DigitalQatalyst team will outline the options.",
      },
      {
        question: "Do we need to replace our existing marketing platform?",
        answer:
          "Usually not. The specifications are designed to integrate AI capabilities with your existing stack using available APIs or middleware. Re-platforming is only recommended when the current system creates an architectural barrier.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team reviews your marketing platform, data landscape, and AI ambitions to shape the engagement scope.",
      },
    ],
    audience: "CMOs, Marketing Operations leads, and Growth and Demand Generation directors",
    industryRelevance:
      "Organisations running structured marketing programmes with automation, paid and owned channel investment, and a need for reliable campaign attribution",
    businessImpact:
      "Ensures AI investment in marketing is targeted at use cases your data supports, with responsible design that protects the organisation from privacy risk and model bias.",
    tags: ["marketing-ops", "ai-design", "personalisation", "responsible-ai"],
  },

  // 40: Marketing Solutions - deploy
  40: {
    description:
      "Build, integrate, test, and launch your marketing platform capabilities with structured quality assurance and a controlled handover so your team can execute campaigns from day one.",
    positioning:
      "Marketing platform capabilities delivered and tested, with your team ready to run campaigns before the project closes.",
    features: [
      "Platform configuration and campaign template build to agreed specifications",
      "Integration delivery across CRM, analytics, paid channels, and data sources, with documented test evidence",
      "Audience and segmentation configuration validated against your approved segment definitions",
      "User acceptance testing with your marketing team and a go-live readiness checklist before launch",
    ],
    timelineMilestones: [
      "Weeks 1-4: Platform configuration, automation build, and integration delivery",
      "Weeks 5-8: System integration testing, data validation, and defect resolution",
      "Weeks 9-11: User acceptance testing, campaign template sign-off, and team training",
      "Week 12: Controlled launch and post-go-live support handover",
    ],
    deliverables: [
      {
        title: "Configured marketing platform",
        description:
          "Fully built automation programmes, campaign templates, audience segments, and integrations, validated in a staging environment before production promotion.",
      },
      {
        title: "Integration test evidence pack",
        description:
          "Test scenarios and results for every system integration, covering data sync accuracy, trigger reliability, and error handling behaviour.",
      },
      {
        title: "User acceptance test outcomes",
        description:
          "Signed-off UAT results per campaign workflow and audience scenario, including accepted exceptions and the agreed launch decision.",
      },
      {
        title: "Marketing operations handover pack",
        description:
          "Platform administration guide, campaign build procedures, escalation contacts, and a 30-day post-launch review schedule.",
      },
    ],
    packageHighlights: [
      "Full QA cycle from integration test to user acceptance before any campaign goes live",
      "Campaign templates and audience segments built and validated, not just the platform",
      "Post-go-live support period included to resolve early operational issues",
    ],
    faqIntro: "Questions about the marketing platform deployment engagement.",
    faqs: [
      {
        question: "What if we need to migrate historical campaign data?",
        answer:
          "Data migration scope is defined and agreed upfront. The DigitalQatalyst team runs data mapping, transformation, and validation in a sandbox before any production migration.",
      },
      {
        question: "Can we run campaigns during the build period?",
        answer:
          "Yes, where the current platform remains available. The DigitalQatalyst team will advise on cutover sequencing to minimise disruption to active campaigns.",
      },
      {
        question: "How long does post-go-live support last?",
        answer:
          "The hypercare period and its terms are confirmed during scoping. After hypercare, the Managed service can provide ongoing operational support.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your approved design specifications and the DigitalQatalyst team will confirm scope, resourcing, and a delivery timeline.",
      },
    ],
    audience: "CMOs, Marketing Operations leads, and Growth and Demand Generation directors",
    industryRelevance:
      "Organisations running structured marketing programmes with automation, paid and owned channel investment, and a need for reliable campaign attribution",
    businessImpact:
      "Delivers a production-ready marketing platform with validated automations and integrations, so the marketing team can execute campaigns at full capability from day one rather than spending the first quarter fixing configuration issues.",
    tags: ["marketing-ops", "campaign-performance", "attribution"],
  },

  // 41: Marketing Solutions - ai_deploy
  41: {
    description:
      "Deploy validated AI capabilities into your marketing platform with production monitoring, privacy controls, and a team handover that gives your marketing operations function full ownership.",
    positioning:
      "AI-powered marketing capabilities live in production, governed from the start, and run by your team.",
    features: [
      "Production deployment of AI models integrated into your marketing automation and data workflows",
      "Privacy and consent controls validated against your data obligations before any model goes live",
      "Model performance dashboards and alerting configured for your marketing operations team",
      "AI operations training and runbook so your team manages the capability rather than depending on external support",
    ],
    timelineMilestones: [
      "Weeks 1-4: Infrastructure setup, model integration, and staging environment validation",
      "Weeks 5-8: Staged production deployment, privacy control verification, and monitoring configuration",
      "Weeks 9-11: Performance validation, team training, and operational handover preparation",
      "Week 12: Production sign-off and formal handover",
    ],
    deliverables: [
      {
        title: "Production AI deployment",
        description:
          "AI capabilities fully integrated into your marketing platform, validated against the agreed performance, accuracy, and safety acceptance criteria.",
      },
      {
        title: "Privacy and consent validation report",
        description:
          "Evidence that data handling, consent enforcement, and model inputs comply with your obligations, reviewed and signed off before production launch.",
      },
      {
        title: "Monitoring dashboard and alert configuration",
        description:
          "Real-time visibility into model accuracy, data pipeline health, campaign impact metrics, and alert rules with defined response thresholds.",
      },
      {
        title: "AI operations runbook and training record",
        description:
          "Step-by-step procedures for daily monitoring, incident response, model refresh, and escalation, with confirmed training completion for each operational role.",
      },
    ],
    packageHighlights: [
      "Privacy and consent controls validated in staging before any production deployment",
      "Monitoring and alerting configured before handover, not after",
      "Operational training included so your team runs the AI capability from day one",
    ],
    faqIntro: "Questions about the marketing AI deployment engagement.",
    faqs: [
      {
        question: "How is personal data handled during model training and inference?",
        answer:
          "Data handling is governed by the specifications agreed in the AI Design phase. The DigitalQatalyst team validates compliance with those specifications before any model goes to production.",
      },
      {
        question: "What happens if a model starts producing poor results after launch?",
        answer:
          "The monitoring configuration triggers alerts when accuracy drops below agreed thresholds. The operations runbook covers the response procedure, including model rollback and the escalation path to the DigitalQatalyst team during the handover period.",
      },
      {
        question: "Can AI capabilities be deployed incrementally rather than all at once?",
        answer:
          "Yes. Staged deployment is the standard approach. Use cases go live in priority order so each is validated before the next is introduced.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your approved AI design specifications and the DigitalQatalyst team will confirm infrastructure requirements, compliance obligations, and the deployment milestone schedule.",
      },
    ],
    audience: "CMOs, Marketing Operations leads, and Growth and Demand Generation directors",
    industryRelevance:
      "Organisations running structured marketing programmes with automation, paid and owned channel investment, and a need for reliable campaign attribution",
    businessImpact:
      "Delivers validated AI capabilities into marketing production, lifting personalisation precision and reducing time spent on manual segmentation, with privacy controls and monitoring in place from day one.",
    tags: ["marketing-ops", "ai-deploy", "personalisation", "responsible-ai"],
  },

  // 42: Marketing Solutions - manage
  42: {
    description:
      "Keep your marketing platform and campaigns operating at full capability, with monthly performance reporting, proactive optimisation, and a team accountable to your agreed service levels.",
    positioning:
      "Your marketing operations, continuously maintained and improved, so campaigns keep delivering without platform bottlenecks.",
    features: [
      "Monthly marketing platform health checks covering automation reliability, data quality, and integration uptime",
      "Campaign performance analysis and optimisation recommendations based on your actual results data",
      "Release and update management, with testing before any platform changes reach production",
      "Monthly performance report covering KPIs, automation health, and a forward optimisation plan",
    ],
    timelineMilestones: [
      "Month 1: Service baseline, monitoring configuration, and KPI framework agreement",
      "Months 2-3: First optimisation cycle and monthly reporting cadence established",
      "Ongoing: Monthly health checks, quarterly campaign reviews, and continuous optimisation",
    ],
    deliverables: [
      {
        title: "Monthly marketing operations report",
        description:
          "Campaign performance KPIs, automation health metrics, data quality indicators, and integration uptime, with commentary on trends and the next optimisation priorities.",
      },
      {
        title: "Optimisation recommendations log",
        description:
          "A record of every improvement implemented, the rationale behind it, the test evidence used, and the observed outcome, giving your team a full audit trail.",
      },
      {
        title: "Platform release and update record",
        description:
          "Documentation of all platform updates applied, compatibility tests completed, and any issues resolved before changes were promoted to production.",
      },
      {
        title: "Quarterly campaign performance review",
        description:
          "A structured review of campaign results, audience performance, attribution accuracy, and the priorities for the next quarter, informed by data rather than assumption.",
      },
    ],
    packageHighlights: [
      "SLA-backed service with defined response targets for incidents and change requests",
      "Proactive optimisation based on campaign data, not just reactive issue resolution",
      "Quarterly performance reviews to align the platform roadmap with business priorities",
    ],
    faqIntro: "Questions about the marketing managed service.",
    faqs: [
      {
        question: "Does the managed service include campaign strategy or creative?",
        answer:
          "The managed service covers platform operations and performance reporting. Campaign strategy and creative production are separate; the DigitalQatalyst team can discuss how these services can be combined.",
      },
      {
        question: "Can we request new automations or campaign templates within the service?",
        answer:
          "Yes. A defined change request allowance is included each month. Larger build requests are assessed and quoted separately.",
      },
      {
        question: "How do you report against our marketing KPIs?",
        answer:
          "Each month you receive a performance dashboard connected to your analytics stack and presenting the KPIs that matter to your leadership. Every quarter the DigitalQatalyst team runs a business review to interpret trends and agree priorities for the next period. KPI alignment is confirmed during onboarding so the first report reflects what you actually measure.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request an onboarding call. The DigitalQatalyst team reviews your current platform, agrees the service baseline, and confirms the first reporting cycle.",
      },
    ],
    audience: "CMOs, Marketing Operations leads, and Growth and Demand Generation directors",
    industryRelevance:
      "Organisations running structured marketing programmes with automation, paid and owned channel investment, and a need for reliable campaign attribution",
    businessImpact:
      "Maintains marketing platform reliability and data quality so campaigns execute consistently, attribution data remains trustworthy, and marketing leadership can make investment decisions based on accurate performance information.",
    tags: ["marketing-ops", "managed-service", "campaign-performance"],
  },

  // -----------------------------------------------------------------------
  // Smart Sales & Quotation (ids 43-48)
  // -----------------------------------------------------------------------

  // 43: Smart Sales & Quotation - advisory (Assess)
  43: {
    description:
      "Audit your sales process and quotation workflows to identify where deals are slowing down, where pricing decisions are inconsistent, and where manual effort is creating conversion risk.",
    positioning:
      "Find the bottlenecks costing you deals and margin before committing to platform or process change.",
    features: [
      "End-to-end sales process audit from lead qualification through to quote acceptance",
      "Quotation workflow review covering approval steps, pricing rules, and error rates",
      "Pricing consistency assessment across products, channels, and sales team behaviour",
      "Prioritised improvement roadmap with effort scores and quick-win identification",
    ],
    timelineMilestones: [
      "Days 1-2: Sales process documentation review, quotation data analysis, and stakeholder interviews",
      "Days 3-4: Bottleneck identification, pricing consistency assessment, and roadmap sequencing",
      "Day 5: Findings presentation and prioritised improvement roadmap handover",
    ],
    deliverables: [
      {
        title: "Sales and quotation process scorecard",
        description:
          "Ratings across process adherence, quotation accuracy, approval cycle times, and pricing consistency, each supported by evidence from your actual transaction data.",
      },
      {
        title: "Bottleneck and root-cause register",
        description:
          "Every identified delay or error linked to its impact on quote turnaround time, conversion rate, or margin, so improvement priorities are grounded in commercial evidence.",
      },
      {
        title: "Pricing consistency analysis",
        description:
          "Assessment of where pricing rules are being applied inconsistently across products, customer types, or sales team members, with specific recommendations for control improvements.",
      },
      {
        title: "Prioritised improvement roadmap",
        description:
          "Sequenced actions covering process, platform, and governance improvements, with effort scores so your commercial leadership can plan the next phase.",
      },
    ],
    packageHighlights: [
      "Fixed-scope, no-obligation assessment grounded in your actual transaction and quotation data",
      "Pricing consistency analysis included as a core output",
      "Completed within one week with stakeholder-ready findings",
    ],
    faqIntro: "Questions about the sales and quotation assessment.",
    faqs: [
      {
        question: "What sales and CPQ platforms do you assess?",
        answer:
          "The DigitalQatalyst team works across Salesforce CPQ, HubSpot, SAP CPQ, and bespoke quotation systems. Platform scope is confirmed during the initial consultation.",
      },
      {
        question: "What data do you need from us?",
        answer:
          "Quotation logs, approval cycle time data, win and loss records, and any existing process documentation. No personal customer data is required.",
      },
      {
        question: "Is this relevant if we use a manual or spreadsheet-based quotation process?",
        answer:
          "Yes. Manual processes are often where the most significant improvement opportunities exist. The assessment will identify which improvements require a platform and which are process or governance changes alone.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation and the DigitalQatalyst team will confirm data requirements, stakeholder participants, and the assessment scope.",
      },
    ],
    audience: "Sales Directors, Commercial Operations leads, and Revenue Management executives",
    industryRelevance:
      "Organisations with structured sales processes, complex product or service pricing, and formal quotation or proposal workflows across B2B sectors",
    businessImpact:
      "Identifies the specific process and pricing control gaps causing slow quote turnaround and margin leakage, giving commercial leadership a costed plan for improvement.",
    tags: ["sales-ops", "cpq", "pricing-control"],
  },

  // 44: Smart Sales & Quotation - design
  44: {
    description:
      "Design the sales workflows, quotation logic, and pricing rules your team needs to produce accurate, approved quotes faster, with the integration and adoption plan to make it work in practice.",
    positioning:
      "A quotation system design that gives your sales team speed and your commercial leadership confidence in every price sent.",
    features: [
      "Sales journey design from opportunity qualification through quote generation and contract handoff",
      "Quotation logic and pricing rule architecture tailored to your product and customer complexity",
      "Approval workflow design with delegation matrices, override controls, and audit trail requirements",
      "Integration specifications connecting your CPQ platform to CRM, ERP, and contract systems",
    ],
    timelineMilestones: [
      "Week 1: Discovery workshops with sales, commercial, and finance stakeholders",
      "Weeks 2-3: Sales journey design, quotation logic, approval workflows, and integration architecture",
      "Week 4: Prototype review, adoption planning, and specification sign-off",
    ],
    deliverables: [
      {
        title: "Sales journey and workflow designs",
        description:
          "End-to-end sales process flows from lead to signed quote, covering role responsibilities, decision points, and the data required at each stage.",
      },
      {
        title: "Quotation and pricing logic specification",
        description:
          "Detailed rules for product configuration, pricing calculations, discount authorisation, and the conditions under which quotes require approval or escalation.",
      },
      {
        title: "Approval workflow and governance design",
        description:
          "Defined approval tiers, delegation rules, exception handling, and the audit trail requirements needed for commercial governance and compliance.",
      },
      {
        title: "Integration and system architecture specification",
        description:
          "Data flow diagrams and API or middleware specifications connecting your CPQ platform to CRM, ERP, and downstream contract management systems.",
      },
    ],
    packageHighlights: [
      "Pricing logic and approval workflow designed to your commercial governance requirements",
      "Integration specifications covering CRM, ERP, and contract systems",
      "Adoption plan validated with your sales team before the specification is finalised",
    ],
    faqIntro: "Questions about the sales and quotation design engagement.",
    faqs: [
      {
        question: "Can the design accommodate multiple pricing models or product families?",
        answer:
          "Yes. The quotation logic specification is built around your actual product and pricing complexity. Multi-tier pricing, bundles, and regional variations are all addressed during the design phase.",
      },
      {
        question: "How do you handle commercial sensitivity during workshops?",
        answer:
          "Pricing data and commercial rules are treated as confidential. The DigitalQatalyst team operates under NDAs and data handling agreements before any commercial information is shared.",
      },
      {
        question: "Does the design tell us which CPQ platform to use?",
        answer:
          "If you have not yet selected a platform, the design includes vendor assessment and a recommendation based on your requirements. If a platform is already chosen, the design works within that constraint.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call. The DigitalQatalyst team reviews your current quotation process and confirms the stakeholders needed for design workshops.",
      },
    ],
    audience: "Sales Directors, Commercial Operations leads, and Revenue Management executives",
    industryRelevance:
      "Organisations with structured sales processes, complex product or service pricing, and formal quotation or proposal workflows across B2B sectors",
    businessImpact:
      "Produces a quotation system design that reduces quote cycle times, enforces pricing consistency, and gives commercial leadership an auditable approval trail from first draft to signed contract.",
    tags: ["sales-ops", "cpq", "pricing-control"],
  },

  // 45: Smart Sales & Quotation - ai_design
  45: {
    description:
      "Validate which AI capabilities can meaningfully accelerate your quotation process and improve pricing decisions, then produce responsible workflow designs and deployment specifications ready for build.",
    positioning:
      "AI for sales and quotation, scoped to the use cases your data supports and specified for responsible deployment.",
    features: [
      "AI use-case scoring for pricing optimisation, quote-to-win prediction, and configuration assistance",
      "Data readiness assessment confirming which use cases your transaction and product data actually supports",
      "Responsible AI workflow designs with override controls, pricing authority boundaries, and audit trail requirements",
      "Technical specifications for model integration with your CPQ and CRM platforms",
    ],
    timelineMilestones: [
      "Week 1: AI opportunity identification, transaction data assessment, and use-case shortlisting",
      "Weeks 2-3: Use-case validation, responsible design, and workflow specification",
      "Week 4: Technical specifications, governance framework, and stakeholder sign-off",
    ],
    deliverables: [
      {
        title: "AI use-case scorecard for sales and quotation",
        description:
          "Each candidate use case rated by commercial value, data feasibility, implementation risk, and governance complexity, with a clear build recommendation and sequencing.",
      },
      {
        title: "Responsible AI workflow designs",
        description:
          "Workflow diagrams showing AI-suggested pricing recommendations, human authority boundaries, override logic, and the audit trail requirements for commercial compliance.",
      },
      {
        title: "Data readiness assessment",
        description:
          "Evaluation of your transaction history, product data, and win-loss records against the data requirements of each validated AI use case, with specific data improvement actions.",
      },
      {
        title: "Technical deployment specification",
        description:
          "Model input and output specifications, CPQ and CRM integration requirements, infrastructure needs, and the acceptance criteria for production validation.",
      },
    ],
    packageHighlights: [
      "AI recommendations validated against your actual transaction and product data before build",
      "Pricing authority boundaries and override logic built into every workflow design",
      "Specifications compatible with your existing CPQ and CRM architecture",
    ],
    faqIntro: "Questions about the sales and quotation AI design engagement.",
    faqs: [
      {
        question: "Can AI actually improve pricing decisions in a complex product environment?",
        answer:
          "AI-assisted pricing works best where there is sufficient historical transaction data with outcome labels. The use-case scoring phase determines whether your data supports this. Simpler applications, such as configuration assistance or win-probability scoring, often have lower data requirements.",
      },
      {
        question: "How do you ensure AI pricing recommendations do not override commercial authority?",
        answer:
          "The workflow designs define explicit human authority boundaries. AI produces recommendations; approval and override controls remain with authorised roles. This is a core design requirement, not an option.",
      },
      {
        question: "Do we need a CPQ platform in place before this engagement?",
        answer:
          "Not necessarily. The AI design can be completed in parallel with CPQ selection, with specifications written to accommodate the chosen platform. The DigitalQatalyst team will advise on the optimal sequencing.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review your current sales and pricing data landscape and shape the engagement scope accordingly.",
      },
    ],
    audience: "Sales Directors, Commercial Operations leads, and Revenue Management executives",
    industryRelevance:
      "Organisations with structured sales processes, complex product or service pricing, and formal quotation or proposal workflows across B2B sectors",
    businessImpact:
      "Identifies the AI capabilities that can genuinely accelerate quote turnaround and improve pricing accuracy, with governance and human authority boundaries built into every workflow.",
    tags: ["sales-ops", "ai-design", "pricing-control", "responsible-ai"],
  },

  // 46: Smart Sales & Quotation - deploy
  46: {
    description:
      "Configure, integrate, test, and launch your CPQ and sales quotation platform with structured quality assurance and a handover that leaves your sales team fully equipped to operate independently.",
    positioning:
      "Your CPQ platform live and tested, with your sales team confident in it before the first real quote goes out.",
    features: [
      "CPQ platform configuration built to your approved pricing rules and workflow specifications",
      "Integration delivery connecting CPQ to CRM, ERP, and contract systems, with documented test evidence",
      "End-to-end quotation workflow testing using representative sales scenarios from your actual product catalogue",
      "Sales team training and a go-live readiness assessment before controlled launch",
    ],
    timelineMilestones: [
      "Weeks 1-4: CPQ configuration, pricing rule implementation, and integration build",
      "Weeks 5-8: System integration testing, pricing accuracy validation, and defect resolution",
      "Weeks 9-11: User acceptance testing, sales team training, and launch readiness sign-off",
      "Week 12: Controlled launch and post-go-live support handover",
    ],
    deliverables: [
      {
        title: "Configured CPQ environment",
        description:
          "Fully built CPQ platform covering approved pricing rules, product configurations, approval workflows, and role permissions, validated in a staging environment.",
      },
      {
        title: "Integration test evidence",
        description:
          "Test scenarios and results for every system integration, covering data synchronisation accuracy, trigger reliability, and error handling across CRM, ERP, and contract management connections.",
      },
      {
        title: "Quotation accuracy validation report",
        description:
          "Test evidence confirming that CPQ outputs match expected pricing outcomes across representative product configurations, discounting scenarios, and approval conditions.",
      },
      {
        title: "Sales operations handover pack",
        description:
          "Administrator guides, pricing rule update procedures, escalation contacts, and a post-launch support schedule so your team owns the platform from day one.",
      },
    ],
    packageHighlights: [
      "Pricing accuracy validation as a dedicated QA step, not part of general testing",
      "Sales team training and readiness assessment before go-live",
      "Go-live playbook and rollback plan included as standard",
    ],
    faqIntro: "Questions about the CPQ and sales quotation deployment engagement.",
    faqs: [
      {
        question: "How is pricing rule accuracy validated?",
        answer:
          "The DigitalQatalyst team builds a test matrix of representative product configurations, discount scenarios, and approval conditions, then validates CPQ outputs against your expected pricing outcomes before any user acceptance testing begins.",
      },
      {
        question: "What if we need to migrate existing quotes or contracts?",
        answer:
          "Migration scope is defined and agreed upfront. Historical data migration is mapped, transformed, and validated in a sandbox environment before production cutover.",
      },
      {
        question: "Can we continue taking manual quotes during the build period?",
        answer:
          "Yes. The DigitalQatalyst team designs the cutover approach to minimise disruption to active commercial activity, including parallel-running options where needed.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your approved design specifications and the DigitalQatalyst team will confirm scope, the CPQ platform configuration approach, and a delivery timeline.",
      },
    ],
    audience: "Sales Directors, Commercial Operations leads, and Revenue Management executives",
    industryRelevance:
      "Organisations with structured sales processes, complex product or service pricing, and formal quotation or proposal workflows across B2B sectors",
    businessImpact:
      "Delivers a working CPQ platform that sales teams adopt confidently, reducing quote errors, shortening approval cycles, and giving commercial leadership real-time visibility into quote pipeline and margin.",
    tags: ["sales-ops", "cpq", "pricing-control"],
  },

  // 47: Smart Sales & Quotation - ai_deploy
  47: {
    description:
      "Deploy validated AI capabilities into your CPQ and sales platform with production monitoring, commercial authority controls, and a structured handover that gives your sales operations team full ownership.",
    positioning:
      "AI-assisted pricing and sales recommendations in production, governed correctly from the first quote.",
    features: [
      "Production deployment of AI models integrated into your CPQ and CRM workflows",
      "Commercial authority controls and override logic validated before any model goes live",
      "AI performance dashboards covering pricing accuracy, recommendation acceptance rates, and business impact",
      "Sales team training and AI operations runbook so your team manages the capability confidently",
    ],
    timelineMilestones: [
      "Weeks 1-4: Infrastructure provisioning, model integration, and staging environment validation",
      "Weeks 5-8: Staged production deployment, commercial control verification, and monitoring setup",
      "Weeks 9-11: Performance validation, sales team training, and handover preparation",
      "Week 12: Production sign-off and operational handover",
    ],
    deliverables: [
      {
        title: "Production AI deployment for CPQ",
        description:
          "AI capabilities fully integrated into your CPQ and CRM environment, validated against pricing accuracy, recommendation quality, and commercial authority acceptance criteria.",
      },
      {
        title: "Commercial authority control validation report",
        description:
          "Evidence that override controls, approval boundaries, and escalation paths operate correctly across representative pricing scenarios before production launch.",
      },
      {
        title: "AI performance monitoring dashboard",
        description:
          "Real-time visibility into recommendation acceptance rates, pricing accuracy trends, model confidence scores, and the business impact metrics agreed during design.",
      },
      {
        title: "AI operations runbook and training record",
        description:
          "Procedures for daily monitoring, model performance review, incident response, and model refresh, with confirmed training completion for sales operations and commercial roles.",
      },
    ],
    packageHighlights: [
      "Commercial authority and override controls validated before any model goes live in production",
      "Monitoring dashboard aligned to pricing accuracy and commercial impact metrics",
      "Operational runbook and training included so your team operates the AI independently",
    ],
    faqIntro: "Questions about the CPQ and sales AI deployment engagement.",
    faqs: [
      {
        question: "How is the commercial authority boundary enforced technically?",
        answer:
          "Override controls are implemented at the CPQ integration layer. AI recommendations are presented as suggestions; the CPQ workflow requires authorised human approval before any non-standard pricing is accepted. The DigitalQatalyst team validates this in staging before production deployment.",
      },
      {
        question: "What if the AI recommendations are wrong more often than expected?",
        answer:
          "The monitoring dashboard surfaces acceptance rates and accuracy metrics in near-real time. If performance falls below agreed thresholds, the operations runbook covers the investigation and response procedure, including model rollback.",
      },
      {
        question: "Can AI recommendations be limited to specific product lines or deal sizes initially?",
        answer:
          "Yes. Staged rollout by product category or deal value threshold is the standard approach, allowing the team to build confidence before broader deployment.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your approved AI design specifications and the DigitalQatalyst team will confirm CPQ integration requirements and the production deployment schedule.",
      },
    ],
    audience: "Sales Directors, Commercial Operations leads, and Revenue Management executives",
    industryRelevance:
      "Organisations with structured sales processes, complex product or service pricing, and formal quotation or proposal workflows across B2B sectors",
    businessImpact:
      "Puts AI-assisted pricing and sales recommendations into production, reducing quote preparation time and improving pricing accuracy while keeping commercial authority firmly with your authorised roles.",
    tags: ["sales-ops", "ai-deploy", "pricing-control", "responsible-ai"],
  },

  // 48: Smart Sales & Quotation - manage
  48: {
    description:
      "Keep your CPQ platform and quotation operations running at full commercial accuracy, with monthly health checks, pricing rule maintenance, and a team accountable to your agreed service levels.",
    positioning:
      "Your quotation platform continuously maintained so pricing stays accurate and sales teams can generate quotes without delay.",
    features: [
      "Monthly CPQ platform health checks covering pricing rule accuracy, workflow reliability, and integration uptime",
      "Pricing rule and product catalogue maintenance as your commercial offer evolves",
      "Release and update management, with pricing accuracy testing before any changes reach production",
      "Monthly performance report covering quote cycle times, approval volumes, and pricing exception rates",
    ],
    timelineMilestones: [
      "Month 1: Service baseline, pricing rule audit, and SLA framework agreement",
      "Months 2-3: First maintenance cycle, reporting cadence established",
      "Ongoing: Monthly health checks, pricing updates, and quarterly commercial alignment reviews",
    ],
    deliverables: [
      {
        title: "Monthly CPQ operations report",
        description:
          "Quote volume, approval cycle times, pricing exception rates, integration uptime, and a commentary on trends and next-period maintenance priorities.",
      },
      {
        title: "Pricing rule and catalogue update log",
        description:
          "A record of every pricing rule or product catalogue change made, the commercial rationale, the test evidence, and the observed outcome in production.",
      },
      {
        title: "Platform release and test record",
        description:
          "Documentation of all CPQ platform updates applied, pricing accuracy tests run, and any issues resolved before changes were promoted to the live environment.",
      },
      {
        title: "Quarterly commercial alignment review",
        description:
          "A structured review of CPQ performance against commercial objectives, incorporating new product requirements, pricing model changes, and usage data from the previous quarter.",
      },
    ],
    packageHighlights: [
      "Pricing rule maintenance included, not charged as a separate request",
      "Monthly reports covering quote cycle times and commercial exception rates",
      "Quarterly reviews to align the CPQ roadmap with your commercial strategy",
    ],
    faqIntro: "Questions about the CPQ and sales quotation managed service.",
    faqs: [
      {
        question: "What happens when we add new products or change pricing?",
        answer:
          "Pricing rule and product catalogue updates are included within the managed service. The DigitalQatalyst team tests changes in a staging environment and validates pricing accuracy before promoting to production.",
      },
      {
        question: "Can the managed service cover integration maintenance if a connected system changes?",
        answer:
          "Yes. Integration maintenance for connected CRM, ERP, and contract systems is included within the service scope. Major re-integrations caused by third-party platform changes are assessed and agreed separately.",
      },
      {
        question: "How do you handle urgent pricing changes that need to go live quickly?",
        answer:
          "Priority change procedures with defined response times are included in the service agreement. The DigitalQatalyst team confirms the specific turnaround commitments during onboarding.",
      },
      {
        question: "How is our commercial and customer data kept secure?",
        answer:
          "Your data is processed within the cloud region agreed at contract signature. Access to your CPQ environment is role-controlled and limited to the DigitalQatalyst team members assigned to your account. On contract end, data is deleted or returned in full per the terms agreed in your service agreement.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request an onboarding call. The DigitalQatalyst team reviews your CPQ environment, agrees the service baseline and pricing rule audit, and confirms the first reporting cycle.",
      },
    ],
    audience: "Sales Directors, Commercial Operations leads, and Revenue Management executives",
    industryRelevance:
      "Organisations with structured sales processes, complex product or service pricing, and formal quotation or proposal workflows across B2B sectors",
    businessImpact:
      "Maintains CPQ accuracy and reliability so pricing stays commercially controlled, quote cycle times remain competitive, and your sales team can generate proposals without waiting for platform fixes.",
    tags: ["sales-ops", "managed-service", "cpq"],
  },

  // -----------------------------------------------------------------------
  // Customer Support & Success (ids 49-54)
  // -----------------------------------------------------------------------

  // 49: Customer Support & Success - advisory (Assess)
  49: {
    description:
      "Audit your customer support and success operations to identify where resolution times are lagging, where customer effort is highest, and where your current tooling is creating agent and customer friction.",
    positioning:
      "Understand exactly where your support operation is losing customers and agent productivity before investing in change.",
    features: [
      "Support channel and case management audit covering resolution times, escalation rates, and first-contact resolution",
      "Customer effort assessment identifying where process or tooling is creating unnecessary friction for customers",
      "Agent productivity review covering handle times, knowledge access, and tool-switching burden",
      "Prioritised improvement roadmap with effort scores and quick wins your leadership can act on",
    ],
    timelineMilestones: [
      "Days 1-2: Support data review, case management analysis, and stakeholder interviews with service leaders and agents",
      "Days 3-4: Effort assessment, productivity gap analysis, and roadmap sequencing",
      "Day 5: Findings presentation and prioritised improvement roadmap handover",
    ],
    deliverables: [
      {
        title: "Support operations scorecard",
        description:
          "Ratings across resolution speed, first-contact resolution, customer effort, agent productivity, and escalation control, each supported by evidence from your actual case data.",
      },
      {
        title: "Customer effort and friction map",
        description:
          "A channel-by-channel assessment of where customers are experiencing unnecessary effort, with specific process and tooling recommendations to reduce abandonment and escalation.",
      },
      {
        title: "Agent productivity gap report",
        description:
          "Identifies the specific tooling limitations, knowledge gaps, and process inconsistencies adding handle time and reducing agent capacity to resolve cases at first contact.",
      },
      {
        title: "Prioritised improvement roadmap",
        description:
          "Sequenced actions ranked by impact on customer experience and operational efficiency, with effort scores so your CX and operations leadership can plan the next phase.",
      },
    ],
    packageHighlights: [
      "Fixed-scope assessment grounded in your actual case data and agent feedback",
      "Customer effort and agent productivity analysis included as core outputs",
      "Completed within one week with no obligation to proceed further",
    ],
    faqIntro: "Questions about the customer support and success operations assessment.",
    faqs: [
      {
        question: "Which support platforms do you assess?",
        answer:
          "The DigitalQatalyst team works across Zendesk, Salesforce Service Cloud, ServiceNow, Freshdesk, and other platforms. Scope is confirmed during the initial consultation.",
      },
      {
        question: "Do you interview frontline agents as well as managers?",
        answer:
          "Yes. Agent interviews are a core part of the assessment because they surface friction points that management reporting often does not capture. We keep sessions focused and respect agent time.",
      },
      {
        question: "Can this assessment cover digital self-service as well as live support?",
        answer:
          "Yes. The assessment covers all channels in scope, including knowledge bases, chatbots, and IVR, alongside live agent channels.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation and the DigitalQatalyst team will confirm data requirements, channel scope, and stakeholder participants before the engagement begins.",
      },
    ],
    audience: "Customer Service Directors, Head of Customer Success, and CX Operations leaders",
    industryRelevance:
      "Organisations operating structured customer support functions across digital and voice channels, including aftersales, account success, and technical support",
    businessImpact:
      "Identifies the specific resolution, effort, and productivity gaps reducing customer retention and support efficiency, and prioritises the changes that will lower churn and reduce cost to serve.",
    tags: ["customer-support", "cx-operations", "service-desk"],
  },

  // 50: Customer Support & Success - design
  50: {
    description:
      "Design the support workflows, knowledge architecture, and channel strategy your team needs to resolve cases faster, reduce escalations, and deliver a consistent customer experience at scale.",
    positioning:
      "A support operations design that gives your agents the right information at the right moment and your customers a resolution without unnecessary effort.",
    features: [
      "Support journey design covering all customer channels with escalation logic and handoff specifications",
      "Knowledge management architecture designed for agent accuracy, self-service deflection, and maintenance efficiency",
      "Case routing and priority logic tailored to your SLA tiers, customer segments, and agent skill sets",
      "Agent experience design covering workspace layout, knowledge access patterns, and after-call workflow",
    ],
    timelineMilestones: [
      "Week 1: Discovery workshops with service leaders, agents, and CX stakeholders",
      "Weeks 2-3: Journey design, knowledge architecture, routing logic, and agent experience specification",
      "Week 4: Prototype review, adoption planning, and design sign-off",
    ],
    deliverables: [
      {
        title: "Customer support journey maps",
        description:
          "End-to-end journey designs for each support channel, covering contact entry points, resolution paths, escalation triggers, and handoff specifications between teams and systems.",
      },
      {
        title: "Knowledge management architecture",
        description:
          "Structure, taxonomy, ownership model, and maintenance procedures for your support knowledge base, designed to serve both agent-assisted and customer self-service channels.",
      },
      {
        title: "Case routing and prioritisation logic",
        description:
          "Rule definitions for case assignment, priority scoring, SLA clock management, and re-routing criteria, with the data fields required to power each rule.",
      },
      {
        title: "Agent workspace and adoption plan",
        description:
          "Agent desktop layout specifications, knowledge access workflow designs, and an adoption plan covering training outlines, change communication milestones, and go-live criteria.",
      },
    ],
    packageHighlights: [
      "Knowledge architecture designed for both agent use and customer self-service",
      "Routing logic tailored to your SLA tiers and customer segment requirements",
      "Agent workspace design validated with frontline input, not just management",
    ],
    faqIntro: "Questions about the customer support and success design engagement.",
    faqs: [
      {
        question: "Does the design cover chatbot or AI-powered self-service?",
        answer:
          "The journey and channel design includes self-service touchpoints. Detailed AI self-service design is addressed in the AI Design engagement, which can run in sequence or in parallel.",
      },
      {
        question: "How do you handle multi-tier or multi-region support complexity?",
        answer:
          "Tiered support structures and regional variations are addressed in the routing logic and escalation design. The DigitalQatalyst team has experience designing frameworks that scale across multiple support levels and geographies.",
      },
      {
        question: "Will the design work within our existing support platform?",
        answer:
          "Yes. The design starts from your current platform. Where platform limitations exist, the specifications will flag them with options rather than assuming a platform change.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call. The DigitalQatalyst team reviews your current support operation and confirms the stakeholders needed for design workshops.",
      },
    ],
    audience: "Customer Service Directors, Head of Customer Success, and CX Operations leaders",
    industryRelevance:
      "Organisations operating structured customer support functions across digital and voice channels, including aftersales, account success, and technical support",
    businessImpact:
      "Produces a support operations design that reduces average handle time, improves first-contact resolution, and gives customers a consistent, low-effort experience across every channel.",
    tags: ["customer-support", "cx-operations", "service-desk"],
  },

  // 51: Customer Support & Success - ai_design
  51: {
    description:
      "Validate which AI capabilities can genuinely improve resolution speed and customer effort in your support operation, then produce responsible workflow designs and deployment specifications ready for build.",
    positioning:
      "AI for customer support, scoped to use cases your data and platform support, with guardrails that protect customers and agents.",
    features: [
      "AI use-case scoring for intelligent triage, agent assist, self-service automation, and sentiment monitoring",
      "Data readiness assessment confirming which use cases your case history and knowledge data actually supports",
      "Responsible AI workflow designs with human escalation paths, bias controls, and transparency requirements",
      "Technical specifications for integration with your support platform, knowledge base, and CRM",
    ],
    timelineMilestones: [
      "Week 1: AI opportunity identification, case data review, and use-case shortlisting",
      "Weeks 2-3: Use-case validation, responsible design, and workflow specification",
      "Week 4: Technical specifications, governance framework, and stakeholder sign-off",
    ],
    deliverables: [
      {
        title: "AI use-case scorecard for support",
        description:
          "Each candidate AI use case rated by impact on resolution time, customer effort, agent productivity, and implementation feasibility, with a clear recommendation on what to build first.",
      },
      {
        title: "Responsible AI workflow designs",
        description:
          "Workflow diagrams showing AI decision points, human escalation triggers, transparency requirements for customer-facing AI, and the bias controls needed for equitable service.",
      },
      {
        title: "Data readiness report",
        description:
          "Assessment of your case history, knowledge base quality, and customer data against the requirements of each validated AI use case, with specific data preparation actions.",
      },
      {
        title: "Technical deployment specification",
        description:
          "Model inputs, outputs, platform integration requirements, infrastructure needs, and the acceptance criteria for validating AI performance before production deployment.",
      },
    ],
    packageHighlights: [
      "Use-case validation grounded in your actual case and knowledge data before any build commitment",
      "Customer-facing transparency requirements designed into every AI workflow",
      "Escalation paths to human agents built into every automated interaction design",
    ],
    faqIntro: "Questions about the customer support AI design engagement.",
    faqs: [
      {
        question: "Which AI use cases are most commonly validated for support operations?",
        answer:
          "Intelligent case triage and routing, agent next-best-action suggestions, knowledge article recommendation, and automated tier-one resolution are the most frequently scoped. The DigitalQatalyst team validates each against your specific case data and platform capabilities.",
      },
      {
        question: "How do you ensure AI does not make customer interactions feel impersonal?",
        answer:
          "Transparency and escalation requirements are designed into every customer-facing AI workflow. Customers are told when they are interacting with an automated system and can reach a human agent at any point. This is a core design requirement.",
      },
      {
        question: "What data quality does our knowledge base need to support AI?",
        answer:
          "The data readiness assessment evaluates knowledge base completeness, consistency, and freshness against the requirements of each use case. Many organisations find targeted knowledge improvement is needed before AI can reliably recommend articles.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team reviews your support platform, case data, and AI ambitions to shape the engagement scope.",
      },
    ],
    audience: "Customer Service Directors, Head of Customer Success, and CX Operations leaders",
    industryRelevance:
      "Organisations operating structured customer support functions across digital and voice channels, including aftersales, account success, and technical support",
    businessImpact:
      "Identifies the AI capabilities that will genuinely reduce resolution times and customer effort, with responsible design that protects customers, agents, and the organisation from AI-related service failures.",
    tags: ["customer-support", "ai-design", "cx-operations", "responsible-ai"],
  },

  // 52: Customer Support & Success - deploy
  52: {
    description:
      "Configure, integrate, test, and launch your customer support platform improvements with structured quality assurance and a controlled handover that leaves your agents and service leaders fully operational.",
    positioning:
      "Support capabilities delivered and tested before your team takes a single live case through the new system.",
    features: [
      "Support platform configuration built to approved specifications covering routing, queues, and case management",
      "Knowledge base build and integration with your support platform, validated for accuracy and agent accessibility",
      "Integration delivery connecting support, CRM, and operational systems, with documented test evidence",
      "Agent user acceptance testing and training completed before go-live, with a readiness sign-off process",
    ],
    timelineMilestones: [
      "Weeks 1-4: Platform configuration, knowledge base build, and integration delivery",
      "Weeks 5-8: System integration testing, routing validation, and defect resolution",
      "Weeks 9-11: Agent user acceptance testing, training, and go-live readiness assessment",
      "Week 12: Controlled launch and post-go-live support handover",
    ],
    deliverables: [
      {
        title: "Configured support platform",
        description:
          "Fully built case management environment covering routing rules, queue configurations, SLA timers, permission sets, and knowledge base integration, validated in a staging environment.",
      },
      {
        title: "Integration test evidence pack",
        description:
          "Test scenarios and results for every system integration, covering case sync accuracy, CRM data exchange, and error handling across connected platforms.",
      },
      {
        title: "Agent UAT outcomes report",
        description:
          "Signed-off user acceptance test results per support scenario and channel, including accepted exceptions and the agreed go-live decision from service leadership.",
      },
      {
        title: "Support operations handover pack",
        description:
          "Administrator guides, routing rule update procedures, escalation contacts, and a 30-day post-launch review schedule so your team owns the platform from day one.",
      },
    ],
    packageHighlights: [
      "Agent user acceptance testing with your frontline team before any live cases are handled",
      "Knowledge base built and validated as part of the deployment, not treated as a separate work stream",
      "Post-launch hypercare period to resolve early operational issues quickly",
    ],
    faqIntro: "Questions about the customer support platform deployment engagement.",
    faqs: [
      {
        question: "How is the knowledge base built and validated?",
        answer:
          "The DigitalQatalyst team works with your subject matter experts to structure, author or migrate, and then quality-check knowledge articles before publication. Agents validate accuracy during user acceptance testing.",
      },
      {
        question: "Can we continue handling cases on the existing system during the build?",
        answer:
          "Yes. The cutover approach is designed to minimise disruption to live case volumes. Parallel-running options and off-peak cutover windows are considered during planning.",
      },
      {
        question: "What happens to open cases at the point of cutover?",
        answer:
          "Open case migration is planned, mapped, and tested before cutover. The DigitalQatalyst team produces a cutover playbook covering data migration steps, rollback triggers, and the communication plan for agents and customers.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your approved design specifications and the DigitalQatalyst team will confirm scope, platform configuration approach, and a delivery timeline.",
      },
    ],
    audience: "Customer Service Directors, Head of Customer Success, and CX Operations leaders",
    industryRelevance:
      "Organisations operating structured customer support functions across digital and voice channels, including aftersales, account success, and technical support",
    businessImpact:
      "Delivers a production-ready support platform that agents adopt quickly and with confidence, reducing time-to-resolution and enabling service leadership to manage capacity and quality from day one.",
    tags: ["customer-support", "cx-operations", "service-desk"],
  },

  // 53: Customer Support & Success - ai_deploy
  53: {
    description:
      "Deploy validated AI capabilities into your customer support platform with production monitoring, human escalation controls, and a structured handover so your service operations team can manage the capability independently.",
    positioning:
      "AI-assisted support in production, with the guardrails and monitoring your team needs to operate it confidently.",
    features: [
      "Production deployment of AI models integrated into your support platform workflows and knowledge systems",
      "Human escalation controls validated to ensure customers can always reach a live agent when AI cannot resolve their need",
      "AI performance dashboards covering resolution rates, escalation triggers, accuracy metrics, and customer satisfaction signals",
      "Service team training and AI operations runbook so your agents and team leads understand and can manage the capability",
    ],
    timelineMilestones: [
      "Weeks 1-4: Infrastructure provisioning, AI model integration, and staging environment validation",
      "Weeks 5-8: Staged production deployment, escalation control verification, and monitoring configuration",
      "Weeks 9-11: Performance validation, agent and team lead training, and handover preparation",
      "Week 12: Production sign-off and operational handover",
    ],
    deliverables: [
      {
        title: "Production AI deployment for support",
        description:
          "AI capabilities fully integrated into your support platform, validated against resolution accuracy, escalation behaviour, and the accepted performance criteria before production sign-off.",
      },
      {
        title: "Human escalation control validation report",
        description:
          "Evidence that escalation to live agents triggers correctly across representative contact scenarios, including edge cases where AI confidence is low or customer sentiment indicates distress.",
      },
      {
        title: "AI performance monitoring dashboard",
        description:
          "Real-time visibility into AI resolution rates, escalation volumes, customer satisfaction indicators, and model accuracy metrics, with alert rules at agreed performance thresholds.",
      },
      {
        title: "Service team training record and AI operations runbook",
        description:
          "Confirmed training completion for agents, team leads, and platform administrators, plus step-by-step procedures for monitoring, incident response, and model refresh.",
      },
    ],
    packageHighlights: [
      "Human escalation controls validated before any AI capability goes live with real customers",
      "Agent training included so your frontline team understands how AI is supporting their work",
      "Monitoring dashboard aligned to resolution outcomes and customer satisfaction, not just model metrics",
    ],
    faqIntro: "Questions about the customer support AI deployment engagement.",
    faqs: [
      {
        question: "How do you test that customers can always reach a human agent?",
        answer:
          "The DigitalQatalyst team runs escalation scenario tests covering low-confidence AI responses, repeated failed resolution attempts, high-sentiment distress signals, and explicit customer requests for a human. All must trigger the correct handoff before production deployment proceeds.",
      },
      {
        question: "How will agents know when AI has already interacted with a customer?",
        answer:
          "AI interaction context is surfaced in the agent workspace as part of the deployment configuration. Agents see the contact history, what the AI attempted, and why the escalation was triggered, so they do not ask customers to repeat themselves.",
      },
      {
        question: "What happens if the AI starts producing inaccurate resolutions?",
        answer:
          "The monitoring configuration triggers alerts when resolution accuracy drops below agreed thresholds. The operations runbook covers the investigation and response procedure, including model rollback and the escalation path to the DigitalQatalyst team during the handover period.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your approved AI design specifications and the DigitalQatalyst team will confirm platform integration requirements and the production deployment schedule.",
      },
    ],
    audience: "Customer Service Directors, Head of Customer Success, and CX Operations leaders",
    industryRelevance:
      "Organisations operating structured customer support functions across digital and voice channels, including aftersales, account success, and technical support",
    businessImpact:
      "Puts AI-assisted resolution and triage into production, reducing average handle time and improving first-contact resolution while maintaining the human escalation controls that protect customer trust.",
    tags: ["customer-support", "ai-deploy", "cx-operations", "responsible-ai"],
  },

  // 54: Customer Support & Success - manage
  54: {
    description:
      "Keep your customer support and success platform running at the service levels your customers and agents depend on, with continuous monitoring, proactive optimisation, and regular performance reporting.",
    positioning:
      "Your support operation continuously maintained and improved, so your team focuses on customers, not platform issues.",
    features: [
      "Monthly support platform health checks covering routing accuracy, SLA compliance, and integration reliability",
      "Case management and knowledge base optimisation based on resolution data and agent feedback",
      "Release and update management, with regression testing before any changes reach the production environment",
      "Monthly performance report covering resolution rates, customer satisfaction scores, and a forward optimisation plan",
    ],
    timelineMilestones: [
      "Month 1: Service baseline, monitoring configuration, and SLA framework agreement",
      "Months 2-3: First optimisation cycle and monthly reporting cadence established",
      "Ongoing: Monthly health checks, knowledge maintenance, and quarterly service reviews",
    ],
    deliverables: [
      {
        title: "Monthly support operations report",
        description:
          "Resolution rates, SLA compliance by tier, first-contact resolution trends, customer satisfaction scores, and commentary on the next period optimisation priorities.",
      },
      {
        title: "Knowledge base maintenance log",
        description:
          "A record of every knowledge article created, updated, or retired, the accuracy validation method used, and the agent or self-service usage data that informed each change.",
      },
      {
        title: "Platform change and update record",
        description:
          "Documentation of all platform updates applied, regression tests completed, and any issues resolved before changes reached the production environment.",
      },
      {
        title: "Quarterly service review",
        description:
          "A structured assessment of support performance against your agreed KPIs, incorporating business volume changes, new product requirements, and emerging customer contact drivers.",
      },
    ],
    packageHighlights: [
      "Knowledge base maintenance included as an ongoing service deliverable",
      "Monthly reports aligned to your SLA tiers and customer satisfaction targets",
      "Quarterly service reviews to keep the platform roadmap aligned with your business",
    ],
    faqIntro: "Questions about the customer support managed service.",
    faqs: [
      {
        question: "What does the managed service cover for knowledge maintenance?",
        answer:
          "The DigitalQatalyst team reviews knowledge article accuracy monthly, updates content based on case trend analysis and agent feedback, and archives or retires articles that no longer reflect current products or processes.",
      },
      {
        question: "Can we request new routing rules or queue changes within the service?",
        answer:
          "Yes. A defined change request allowance is included each month. Larger structural changes are assessed and agreed separately so you remain in control of scope and spend.",
      },
      {
        question: "How do you track and report customer satisfaction?",
        answer:
          "The DigitalQatalyst team integrates with your existing CSAT or NPS tooling. Where no measurement is in place, we can recommend a lightweight approach to capture and report customer feedback within the managed service.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request an onboarding call. The DigitalQatalyst team reviews your current support environment, agrees the service baseline and SLA framework, and confirms the first reporting cycle.",
      },
    ],
    audience: "Customer Service Directors, Head of Customer Success, and CX Operations leaders",
    industryRelevance:
      "Organisations operating structured customer support functions across digital and voice channels, including aftersales, account success, and technical support",
    businessImpact:
      "Maintains support platform reliability and knowledge accuracy so SLAs are consistently met, agents can resolve cases without workarounds, and customer satisfaction scores reflect a well-run operation.",
    tags: ["customer-support", "managed-service", "cx-operations"],
  },

  // -----------------------------------------------------------------------
  // IT Operations & Support (ids 133-138)
  // -----------------------------------------------------------------------

  // 133: IT Operations & Support - advisory (Assess)
  133: {
    description:
      "Audit your IT operations and service desk to identify where incidents are taking too long to resolve, where change control is creating risk, and where manual effort is reducing your team's capacity for strategic work.",
    positioning:
      "Find the operational gaps creating IT reliability risk and service desk inefficiency before they become incidents your business notices.",
    features: [
      "IT service desk audit covering incident volumes, resolution times, escalation rates, and repeat failures",
      "Change management process review assessing control effectiveness and the risk of uncontrolled change",
      "Operational tooling assessment covering monitoring coverage, alert quality, and automation maturity",
      "Prioritised improvement roadmap with effort scores and quick-win identification for your IT leadership",
    ],
    timelineMilestones: [
      "Days 1-2: ITSM data review, tooling assessment, and stakeholder interviews with IT operations and service desk leads",
      "Days 3-4: Gap analysis, change risk assessment, and roadmap sequencing",
      "Day 5: Findings presentation and prioritised IT operations improvement roadmap",
    ],
    deliverables: [
      {
        title: "IT operations maturity scorecard",
        description:
          "Ratings across incident management, change control, monitoring coverage, and automation maturity, each supported by evidence from your actual service desk and operations data.",
      },
      {
        title: "Incident and repeat failure analysis",
        description:
          "Root-cause patterns behind your highest-volume and longest-duration incidents, with specific recommendations for eliminating repeat failures and reducing mean time to resolution.",
      },
      {
        title: "Change control risk assessment",
        description:
          "Evaluation of your change management process against the frequency, impact, and rollback capability of recent changes, with recommendations for improving control without slowing delivery.",
      },
      {
        title: "Prioritised IT improvement roadmap",
        description:
          "Sequenced actions covering process, tooling, and automation improvements, with effort scores so your IT leadership can plan the next phase around existing operational commitments.",
      },
    ],
    packageHighlights: [
      "Fixed-scope, no-obligation assessment grounded in your actual ITSM and operations data",
      "Repeat failure and change risk analysis included as core outputs",
      "Completed within one week with findings ready for IT leadership review",
    ],
    faqIntro: "Questions about the IT operations and service desk assessment.",
    faqs: [
      {
        question: "Which ITSM platforms do you assess?",
        answer:
          "The DigitalQatalyst team works across ServiceNow, Jira Service Management, BMC Helix, Freshservice, and other platforms. Scope is confirmed during the initial consultation.",
      },
      {
        question: "What data do you need from us?",
        answer:
          "Incident, change, and problem ticket data for the previous 6-12 months, monitoring alert logs, and any existing runbooks or process documentation. No access to production systems is required for the assessment.",
      },
      {
        question: "Can this assessment cover both on-premises and cloud operations?",
        answer:
          "Yes. The operational scope, including on-premises, cloud, or hybrid environments, is confirmed during the consultation and the assessment is tailored accordingly.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation and the DigitalQatalyst team will confirm data requirements, operational scope, and stakeholder participants before the engagement begins.",
      },
    ],
    audience: "CIOs, IT Operations directors, and IT Service Desk and Infrastructure leads",
    industryRelevance:
      "Organisations dependent on reliable IT services to support their business operations, whether running on-premises, cloud, or hybrid infrastructure",
    businessImpact:
      "Identifies the specific incident, change, and automation gaps reducing IT service reliability and team productivity, and prioritises the fixes that will lower outage frequency and improve service desk throughput.",
    tags: ["it-operations", "itsm", "service-desk"],
  },

  // 134: IT Operations & Support - design
  134: {
    description:
      "Design the ITSM processes, tooling architecture, and automation workflows your IT operations team needs to resolve incidents faster, control change more effectively, and reduce manual workload.",
    positioning:
      "An IT operations design that gives your service desk team the structure and tools to manage incidents and change without firefighting.",
    features: [
      "ITSM process design covering incident, problem, change, and request management tailored to your operational environment",
      "Automation workflow design for alert triage, ticket enrichment, and routine resolution paths",
      "Monitoring and observability architecture aligned to your infrastructure and the services your business depends on",
      "Tooling integration specifications connecting your ITSM platform to monitoring, asset management, and CI/CD systems",
    ],
    timelineMilestones: [
      "Week 1: Discovery workshops with IT operations, service desk, and infrastructure stakeholders",
      "Weeks 2-3: Process design, automation workflow, monitoring architecture, and integration specifications",
      "Week 4: Design review, adoption planning, and specification sign-off",
    ],
    deliverables: [
      {
        title: "ITSM process design",
        description:
          "Defined workflows for incident, problem, change, and request management, covering roles, decision points, SLA tier assignments, and escalation paths tailored to your operational environment.",
      },
      {
        title: "Automation workflow specifications",
        description:
          "Detailed designs for automated alert triage, ticket enrichment, routing logic, and routine resolution playbooks, with the trigger conditions, data requirements, and fallback paths for each.",
      },
      {
        title: "Monitoring and observability architecture",
        description:
          "Coverage design for your infrastructure and application stack, defining what to monitor, alert thresholds, noise reduction rules, and the dashboards your operations team needs for effective incident response.",
      },
      {
        title: "Tooling integration and adoption plan",
        description:
          "Integration specifications for ITSM, monitoring, asset, and CI/CD connections, plus an adoption plan covering training outlines, change communication, and go-live readiness criteria.",
      },
    ],
    packageHighlights: [
      "Automation workflow design to reduce manual ticket handling from the start",
      "Monitoring architecture designed around the services your business actually depends on",
      "ITSM process design validated with both operations leadership and frontline service desk staff",
    ],
    faqIntro: "Questions about the IT operations and service desk design engagement.",
    faqs: [
      {
        question: "Does the design cover both reactive incident management and proactive problem management?",
        answer:
          "Yes. Problem management process design, including root-cause analysis workflows and known error management, is included alongside the reactive incident procedures.",
      },
      {
        question: "Can the design accommodate a DevOps or SRE working model?",
        answer:
          "Yes. The DigitalQatalyst team can design ITSM processes that integrate with DevOps delivery pipelines and align with SRE practices, including error budget and reliability target definitions.",
      },
      {
        question: "How do you handle regulatory or compliance requirements for IT change control?",
        answer:
          "Compliance requirements, such as change freezes, approval audit trails, and segregation of duties, are addressed in the change management process design and the tooling integration specifications.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call. The DigitalQatalyst team reviews your current ITSM platform and operational environment, then confirms the stakeholders needed for design workshops.",
      },
    ],
    audience: "CIOs, IT Operations directors, and IT Service Desk and Infrastructure leads",
    industryRelevance:
      "Organisations dependent on reliable IT services to support their business operations, whether running on-premises, cloud, or hybrid infrastructure",
    businessImpact:
      "Produces an IT operations design that reduces incident resolution time, improves change success rates, and automates routine workload so your operations team can focus on higher-value reliability work.",
    tags: ["it-operations", "itsm", "service-desk"],
  },

  // 135: IT Operations & Support - ai_design
  135: {
    description:
      "Validate which AI capabilities can genuinely improve incident resolution and IT operations efficiency for your organisation, then produce responsible workflow designs and deployment specifications ready for build.",
    positioning:
      "AI for IT operations, validated against your operational data and designed with the safety controls your infrastructure team requires.",
    features: [
      "AI use-case scoring for intelligent incident triage, anomaly detection, predictive failure prevention, and self-healing automation",
      "Data readiness assessment confirming which use cases your monitoring, ticket, and log data supports",
      "Responsible AI workflow designs with human approval gates, rollback controls, and blast-radius limits for automated remediation",
      "Technical specifications for integration with your ITSM, monitoring, and infrastructure platforms",
    ],
    timelineMilestones: [
      "Week 1: AI opportunity identification, operational data assessment, and use-case shortlisting",
      "Weeks 2-3: Use-case validation, responsible design, and workflow specification",
      "Week 4: Technical specifications, governance framework, and stakeholder sign-off",
    ],
    deliverables: [
      {
        title: "AI use-case scorecard for IT operations",
        description:
          "Each candidate use case rated by operational impact, data feasibility, risk, and implementation complexity, with a clear build recommendation and the sequencing rationale.",
      },
      {
        title: "Responsible AI workflow designs",
        description:
          "Workflow diagrams for each validated use case showing AI decision points, human approval gates, rollback triggers, blast-radius limits, and the conditions under which automated remediation is prohibited.",
      },
      {
        title: "Operational data readiness report",
        description:
          "Assessment of your monitoring, log, and ITSM data against the requirements of each validated AI use case, with specific data improvement actions needed before build can begin.",
      },
      {
        title: "Technical deployment specification",
        description:
          "Model inputs, outputs, ITSM and monitoring integration requirements, infrastructure needs, and the acceptance criteria for validating AI performance in a staging environment before production.",
      },
    ],
    packageHighlights: [
      "Human approval gates and blast-radius limits designed into every automated remediation workflow",
      "Data readiness report tells you exactly which operational data needs improvement before build",
      "Specifications designed for your existing ITSM and monitoring platform architecture",
    ],
    faqIntro: "Questions about the IT operations AI design engagement.",
    faqs: [
      {
        question: "Which AI use cases are most commonly validated for IT operations?",
        answer:
          "Intelligent alert correlation and noise reduction, anomaly detection for infrastructure metrics, predictive disk and capacity failure, and automated safe remediation playbooks are the most frequently scoped. The DigitalQatalyst team validates each against your specific operational data.",
      },
      {
        question: "How do you ensure AI remediation cannot cause a wider outage?",
        answer:
          "Blast-radius limits and scope boundaries are core design requirements, not optional additions. Every automated remediation workflow specifies what the AI is permitted to do, the conditions that must be true before action is taken, and the rollback trigger if the action does not produce the expected result.",
      },
      {
        question: "What monitoring data do we need before AI design is viable?",
        answer:
          "The data readiness assessment evaluates your monitoring coverage, log retention, and alert history. Gaps are identified with specific remediation steps. Many organisations find targeted monitoring improvements take weeks rather than months.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team reviews your ITSM platform, monitoring stack, and operational data landscape to shape the engagement scope.",
      },
    ],
    audience: "CIOs, IT Operations directors, and IT Service Desk and Infrastructure leads",
    industryRelevance:
      "Organisations dependent on reliable IT services to support their business operations, whether running on-premises, cloud, or hybrid infrastructure",
    businessImpact:
      "Identifies the AI capabilities that can meaningfully reduce incident detection time, false alert volume, and mean time to resolution, with safety controls built into every automated action.",
    tags: ["it-operations", "ai-design", "itsm", "responsible-ai"],
  },

  // 136: IT Operations & Support - deploy
  136: {
    description:
      "Configure, integrate, test, and launch your ITSM and IT operations platform improvements with structured quality assurance and a handover that leaves your operations team fully equipped to manage them independently.",
    positioning:
      "IT operations capabilities delivered and tested, with your team ready to manage incidents and change before the project closes.",
    features: [
      "ITSM platform configuration built to approved process specifications covering incident, change, and request management",
      "Monitoring and alerting configuration validated against your agreed coverage requirements and noise reduction targets",
      "Integration delivery connecting ITSM to monitoring, asset management, and CI/CD systems, with documented test evidence",
      "Operations team training and go-live readiness assessment completed before the controlled launch",
    ],
    timelineMilestones: [
      "Weeks 1-4: ITSM configuration, automation build, monitoring setup, and integration delivery",
      "Weeks 5-8: System integration testing, alert validation, and defect resolution",
      "Weeks 9-11: Operations team user acceptance testing, training, and launch readiness sign-off",
      "Week 12: Controlled launch and post-go-live support handover",
    ],
    deliverables: [
      {
        title: "Configured ITSM environment",
        description:
          "Fully built incident, change, problem, and request management workflows, routing rules, SLA configurations, and permission sets, validated in a staging environment before production promotion.",
      },
      {
        title: "Monitoring and alerting validation report",
        description:
          "Evidence that monitoring covers the agreed infrastructure and application scope, alert thresholds produce the expected signals, and noise reduction rules are functioning correctly.",
      },
      {
        title: "Integration test evidence pack",
        description:
          "Test scenarios and results for every ITSM integration, covering data synchronisation, trigger accuracy, and error handling across monitoring, asset management, and CI/CD connections.",
      },
      {
        title: "IT operations handover pack",
        description:
          "Administrator guides, runbook library, escalation contacts, and a 30-day post-launch review schedule so your team owns the platform and processes from day one.",
      },
    ],
    packageHighlights: [
      "Monitoring and alert configuration validated before any production traffic is managed through the new system",
      "Runbook library built and reviewed with your operations team during user acceptance testing",
      "Post-launch hypercare period to resolve early operational issues before full handover",
    ],
    faqIntro: "Questions about the IT operations and ITSM deployment engagement.",
    faqs: [
      {
        question: "How is monitoring coverage validated?",
        answer:
          "The DigitalQatalyst team runs a coverage validation against the agreed scope, confirming that each in-scope system and application is instrumented, alert thresholds produce the expected response, and noise reduction rules reduce false positives before go-live.",
      },
      {
        question: "What happens to open incidents and change requests at cutover?",
        answer:
          "Open ticket migration is planned and tested before cutover. The DigitalQatalyst team produces a cutover playbook covering data migration steps, rollback triggers, and the communication plan for operations staff.",
      },
      {
        question: "Can we continue using the existing ITSM during the build period?",
        answer:
          "Yes. The cutover is planned to minimise disruption to live operations. Parallel running options and low-risk migration windows are agreed during planning.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your approved design specifications and the DigitalQatalyst team will confirm scope, platform configuration approach, and a delivery timeline.",
      },
    ],
    audience: "CIOs, IT Operations directors, and IT Service Desk and Infrastructure leads",
    industryRelevance:
      "Organisations dependent on reliable IT services to support their business operations, whether running on-premises, cloud, or hybrid infrastructure",
    businessImpact:
      "Delivers a working ITSM and monitoring environment that your operations team can manage from day one, reducing incident detection and resolution time and giving IT leadership reliable visibility into service health.",
    tags: ["it-operations", "itsm", "service-desk"],
  },

  // 137: IT Operations & Support - ai_deploy
  137: {
    description:
      "Deploy validated AI capabilities into your IT operations and ITSM environment with production monitoring, safety controls, and a structured handover that gives your operations team full ownership of the capability.",
    positioning:
      "AI-assisted incident detection and operations automation in production, with the safety controls your infrastructure team demands.",
    features: [
      "Production deployment of AI models integrated into your ITSM, monitoring, and alerting workflows",
      "Safety controls and blast-radius limits validated before any automated remediation goes live in production",
      "AI operations dashboards covering detection accuracy, false positive rates, automated resolution success, and model health",
      "Operations team training and runbook so your engineers understand how to work alongside and manage the AI capability",
    ],
    timelineMilestones: [
      "Weeks 1-4: Infrastructure provisioning, model integration, and staging environment validation",
      "Weeks 5-8: Staged production deployment, safety control verification, and monitoring configuration",
      "Weeks 9-11: Performance validation, operations team training, and handover preparation",
      "Week 12: Production sign-off and operational handover",
    ],
    deliverables: [
      {
        title: "Production AI deployment for IT operations",
        description:
          "AI capabilities fully integrated into your ITSM and monitoring environment, validated against detection accuracy, automated resolution success rates, and the agreed safety acceptance criteria.",
      },
      {
        title: "Safety control validation report",
        description:
          "Evidence that blast-radius limits, human approval gates, and rollback triggers operate correctly across representative production scenarios before the capability goes live.",
      },
      {
        title: "AI operations dashboard and alerting",
        description:
          "Real-time visibility into model detection accuracy, false positive and negative rates, automated resolution outcomes, and the alert rules that notify your team when AI performance moves outside agreed thresholds.",
      },
      {
        title: "Operations runbook and training record",
        description:
          "Step-by-step procedures for AI monitoring, incident response, model performance review, and escalation, with confirmed training completion for operations engineers and team leads.",
      },
    ],
    packageHighlights: [
      "Safety controls and blast-radius limits validated in staging before any production automated remediation is enabled",
      "Operations dashboards give your team visibility into AI behaviour, not just business outcomes",
      "Runbook and training included so engineers can work confidently alongside and manage the AI capability",
    ],
    faqIntro: "Questions about the IT operations AI deployment engagement.",
    faqs: [
      {
        question: "How do you test that automated remediation cannot cause a wider outage?",
        answer:
          "The DigitalQatalyst team runs blast-radius tests in the staging environment, simulating remediation actions across representative failure scenarios to confirm that scope limits, rollback triggers, and human approval gates operate correctly before any production deployment.",
      },
      {
        question: "Can AI capabilities be deployed to non-critical systems first?",
        answer:
          "Yes. Staged rollout by system criticality or environment type is the standard approach, allowing the operations team to build confidence and refine thresholds before the AI manages business-critical infrastructure.",
      },
      {
        question: "How will our engineers know what the AI has done and why?",
        answer:
          "Every AI action is logged to the ITSM platform with the trigger condition, the action taken, the outcome, and the confidence level. Engineers have full audit trail access and the AI operations dashboard provides a real-time summary view.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your approved AI design specifications and the DigitalQatalyst team will confirm infrastructure requirements, safety control specifications, and the production deployment schedule.",
      },
    ],
    audience: "CIOs, IT Operations directors, and IT Service Desk and Infrastructure leads",
    industryRelevance:
      "Organisations dependent on reliable IT services to support their business operations, whether running on-premises, cloud, or hybrid infrastructure",
    businessImpact:
      "Puts AI-assisted detection, triage, and automated remediation into production, reducing mean time to detect and resolve incidents while keeping human engineers in control of every consequential action.",
    tags: ["it-operations", "ai-deploy", "itsm", "responsible-ai"],
  },

  // 138: IT Operations & Support - manage
  138: {
    description:
      "Keep your IT operations and ITSM platform running reliably, with ongoing monitoring, proactive incident trend analysis, and a team accountable to your service levels so your IT function can focus on delivery.",
    positioning:
      "Your IT operations platform continuously maintained and optimised, so your team resolves incidents faster and changes land without surprises.",
    features: [
      "Monthly ITSM platform health checks covering routing accuracy, SLA compliance, automation success rates, and integration reliability",
      "Incident trend analysis and problem management support to reduce repeat failures over time",
      "Release and update management with regression testing before any ITSM changes reach the production environment",
      "Monthly IT operations report covering service levels, incident trends, change success rates, and a forward improvement plan",
    ],
    timelineMilestones: [
      "Month 1: Service baseline, monitoring configuration, and SLA framework agreement",
      "Months 2-3: First trend analysis cycle and monthly reporting cadence established",
      "Ongoing: Monthly health checks, problem management reviews, and quarterly service alignment sessions",
    ],
    deliverables: [
      {
        title: "Monthly IT operations performance report",
        description:
          "Incident volumes, resolution times, SLA compliance by tier, change success rates, and automation health, with commentary on trends and the next period optimisation priorities.",
      },
      {
        title: "Problem management and trend analysis report",
        description:
          "Root-cause patterns behind repeat incidents, the problem records raised, and the improvement actions taken or recommended to eliminate recurring failures.",
      },
      {
        title: "ITSM platform change and update record",
        description:
          "Documentation of all ITSM updates applied, regression tests completed, and any issues resolved before changes were promoted to the production environment.",
      },
      {
        title: "Quarterly IT service review",
        description:
          "A structured assessment of IT operations performance against your agreed service objectives, incorporating business volume changes, new service onboardings, and emerging operational risks.",
      },
    ],
    packageHighlights: [
      "Problem management support included to eliminate repeat incidents, not just resolve them",
      "Monthly reports aligned to your SLA tiers and business service dependencies",
      "Quarterly service reviews to keep the ITSM roadmap aligned with your IT strategy",
    ],
    faqIntro: "Questions about the IT operations managed service.",
    faqs: [
      {
        question: "Does the managed service cover problem management as well as incidents?",
        answer:
          "Yes. Problem management is an active part of the service. The DigitalQatalyst team identifies repeat failure patterns from monthly incident data, raises problem records, and tracks improvement actions to resolution.",
      },
      {
        question: "Can we request ITSM configuration changes within the managed service?",
        answer:
          "Yes. A defined change request allowance is included each month. Larger structural changes are assessed and agreed separately so you remain in control of scope and investment.",
      },
      {
        question: "How do you manage the service if we have an in-house IT operations team?",
        answer:
          "The DigitalQatalyst team operates as an extension of your team. Responsibility boundaries, escalation paths, and communication channels are agreed during onboarding and documented in the service agreement.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request an onboarding call. The DigitalQatalyst team reviews your current ITSM environment, agrees the service baseline and SLA framework, and confirms the first reporting cycle.",
      },
    ],
    audience: "CIOs, IT Operations directors, and IT Service Desk and Infrastructure leads",
    industryRelevance:
      "Organisations dependent on reliable IT services to support their business operations, whether running on-premises, cloud, or hybrid infrastructure",
    businessImpact:
      "Maintains ITSM platform reliability and operational process discipline so incident resolution times stay competitive, change success rates remain high, and your IT team can direct capacity towards delivery rather than firefighting.",
    tags: ["it-operations", "managed-service", "itsm"],
  },
};
