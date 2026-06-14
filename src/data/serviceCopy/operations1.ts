import type { CollectionCopyOverrides } from "./types";

/**
 * OPERATIONS batch 1: Digital Workplace, Business Process Automation,
 * Specialised Operations, Enterprise Operations, Enterprise Resource Planning
 * (variant ids 55-66, 73-84, 91-96).
 * Keyed by variant id. See ./types.ts for the field contract and voice rules.
 */
export const operations1Copy: CollectionCopyOverrides = {

  // -----------------------------------------------------------------------
  // DIGITAL WORKPLACE (ids 55-60)
  // -----------------------------------------------------------------------

  55: {
    description:
      "A focused assessment of your collaboration tools, intranet, and employee-facing platforms that surfaces the gaps stopping people from finding information, communicating, and getting work done. You leave with a maturity rating and a prioritised improvement roadmap.",
    positioning:
      "Understand where your digital workplace is losing productivity, then fix the highest-impact gaps first.",
    features: [
      "Maturity scoring across communication, knowledge, collaboration, and adoption dimensions",
      "Gap analysis mapped to specific tools: Microsoft 365, Teams, SharePoint, or equivalents",
      "Interview-led findings from IT, HR, and end-user perspectives to surface adoption blockers",
      "Prioritised roadmap with effort estimates so leadership can sequence investment confidently",
    ],
    timelineMilestones: [
      "Days 1-2: Stakeholder interviews, tool inventory, and current-state data gathering",
      "Days 3-4: Maturity scoring, gap analysis, and roadmap drafting",
      "Day 5: Findings playback, roadmap review, and handover pack",
    ],
    deliverables: [
      {
        title: "Digital Workplace Maturity Assessment",
        description:
          "Scored evaluation across collaboration, communication, knowledge management, and adoption dimensions with evidence from interviews and usage data.",
      },
      {
        title: "Gap and Friction Register",
        description:
          "Documented pain points tied to specific tools and workflows, ranked by frequency and business impact.",
      },
      {
        title: "Prioritised Improvement Roadmap",
        description:
          "Sequenced recommendations with effort estimates, dependencies, and ownership suggestions your IT and HR teams can execute against.",
      },
      {
        title: "Executive Summary",
        description:
          "A concise read for senior stakeholders covering maturity position, top risks, and recommended first investments.",
      },
    ],
    packageHighlights: [
      "Fixed-scope, no-obligation assessment completed within one week",
      "Covers both technical configuration and human adoption factors",
      "Findings playback with the DigitalQatalyst team included",
    ],
    faqIntro: "Common questions about the Digital Workplace assessment.",
    faqs: [
      {
        question: "Which platforms does the assessment cover?",
        answer:
          "Microsoft 365, Teams, SharePoint, and connected productivity tools are the primary focus. The DigitalQatalyst team confirms scope during the initial briefing.",
      },
      {
        question: "Do you need access to our Microsoft tenant?",
        answer:
          "Read-only access to usage analytics is helpful but not required. The assessment can run on interview data, screenshots, and documentation alone.",
      },
      {
        question: "Who should be involved from our side?",
        answer:
          "An IT or M365 lead, an HR or Internal Comms representative, and a handful of end users across different functions give us the breadth we need.",
      },
      {
        question: "What do we get at the end of the week?",
        answer:
          "A maturity scorecard, a gap register, a prioritised roadmap, and an executive summary, all walked through in a findings session.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a brief scoping call. The DigitalQatalyst team will confirm participants, access needs, and the week's schedule before work begins.",
      },
    ],
    audience: "HR Directors, IT Managers, and Internal Communications leaders",
    industryRelevance:
      "Any organisation with 100 or more knowledge workers, particularly those mid-migration to Microsoft 365 or managing hybrid work arrangements",
    businessImpact:
      "Identifies the collaboration and knowledge-access gaps that cut into productive hours, giving leadership a clear, costed view of where to act first.",
    tags: ["digital-workplace", "employee-experience", "microsoft-365"],
  },

  56: {
    description:
      "A four-week design engagement that translates your digital workplace goals into user-centred wireframes, information architecture, and build-ready specifications covering Microsoft 365 configuration, intranet structure, and adoption planning.",
    positioning:
      "Turn workplace collaboration goals into a blueprint your IT team can build and your employees will actually use.",
    features: [
      "User journey mapping for key workplace tasks: finding information, collaborating on documents, and onboarding",
      "Information architecture and SharePoint site structure designed for your organisation's size and working patterns",
      "Microsoft 365 configuration specifications with integration points for HR, ITSM, and communication channels",
      "Adoption and change plan with champions model, training outline, and launch communications",
    ],
    timelineMilestones: [
      "Week 1: Discovery workshops, persona definition, and current-state mapping",
      "Week 2: Information architecture, navigation, and wireframe drafting",
      "Week 3: Configuration specifications, integrations design, and adoption planning",
      "Week 4: Design review, stakeholder sign-off, and build-ready handover",
    ],
    deliverables: [
      {
        title: "User Journey Maps",
        description:
          "Step-by-step flows for the tasks employees perform most, showing where today's tools create friction and where the redesign removes it.",
      },
      {
        title: "Information Architecture and Wireframes",
        description:
          "Site structure, navigation taxonomy, and annotated wireframes for intranet pages and team spaces ready for a SharePoint developer to build against.",
      },
      {
        title: "Microsoft 365 Configuration Specification",
        description:
          "Detailed settings, permissions, and integration requirements across Teams, SharePoint, and connected apps, formatted for the delivery team.",
      },
      {
        title: "Adoption and Launch Plan",
        description:
          "A champions programme outline, training schedule, and communication templates to ensure employees actually shift to the new ways of working.",
      },
    ],
    packageHighlights: [
      "Designs tested against real user journeys, not just IT requirements",
      "Build-ready specification handed over at the end of week four",
      "Adoption plan included so launch success is designed in from the start",
    ],
    faqIntro: "Key questions about the Digital Workplace design engagement.",
    faqs: [
      {
        question: "What design tools do you produce artefacts in?",
        answer:
          "Wireframes are delivered in Figma by default. The DigitalQatalyst team can adapt to your preferred tooling if agreed at the start.",
      },
      {
        question: "Do we need to have completed an assessment first?",
        answer:
          "An assessment or equivalent discovery findings are helpful, but the design engagement includes its own discovery workshops so you can start here if your requirements are already clear.",
      },
      {
        question: "Can this cover a full intranet rebuild or just improvements?",
        answer:
          "Both. The scope is confirmed in week one and can range from targeted improvements to a full SharePoint intranet architecture.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team to confirm scope, stakeholder availability, and the week-one workshop schedule.",
      },
    ],
    audience: "HR Directors, IT Managers, and Internal Communications leaders",
    industryRelevance:
      "Organisations planning or mid-way through a Microsoft 365 rollout, intranet rebuild, or hybrid-work programme",
    businessImpact:
      "Reduces the rework and adoption failure common in self-directed intranet projects by grounding every design decision in how employees actually work.",
    tags: ["digital-workplace", "sharepoint", "intranet-design"],
  },

  57: {
    description:
      "A four-week AI design engagement that identifies where AI can reduce friction in your digital workplace, validates each use case for feasibility and responsibility, and produces governed workflow specifications ready for build.",
    positioning:
      "Find the AI use cases that will genuinely improve employee productivity, and design them safely before spending on build.",
    features: [
      "Use-case discovery and scoring against impact, data readiness, and responsible AI criteria for workplace scenarios",
      "Copilot for Microsoft 365 readiness evaluation covering data governance, sensitivity labels, and licence posture",
      "Responsible AI workflow design with human-in-the-loop checkpoints, override controls, and audit logging",
      "Deployment specification including prompt engineering guidance, integration requirements, and rollout sequencing",
    ],
    timelineMilestones: [
      "Week 1: AI use-case discovery workshops and current-data landscape review",
      "Week 2: Use-case scoring, Copilot readiness evaluation, and responsible-AI framing",
      "Week 3: Workflow design, guardrails specification, and integration mapping",
      "Week 4: Specification review, risk sign-off, and build-ready handover",
    ],
    deliverables: [
      {
        title: "AI Use-Case Shortlist and Scoring Matrix",
        description:
          "Validated workplace AI scenarios ranked by employee impact, data readiness, and risk level, with a recommended build sequence.",
      },
      {
        title: "Copilot Readiness Report",
        description:
          "Assessment of your Microsoft 365 data governance, sensitivity labelling, and licence position against the requirements for a safe Copilot deployment.",
      },
      {
        title: "Responsible AI Workflow Specifications",
        description:
          "Detailed workflow designs for the prioritised use cases, including human review points, override mechanisms, and audit trail requirements.",
      },
      {
        title: "Build and Rollout Plan",
        description:
          "Phased deployment sequence with dependency mapping, pilot cohort definition, and success metrics for each AI capability.",
      },
    ],
    packageHighlights: [
      "Responsible AI criteria applied to every use case before a line of build begins",
      "Copilot for Microsoft 365 readiness included as a standard workstream",
      "Specifications handed over in a format your delivery team can act on immediately",
    ],
    faqIntro: "Questions about the Digital Workplace AI design engagement.",
    faqs: [
      {
        question: "Does this only cover Microsoft Copilot?",
        answer:
          "Copilot for Microsoft 365 is the primary focus, but the DigitalQatalyst team can evaluate other AI tooling such as Viva Insights or third-party assistants within the same engagement.",
      },
      {
        question: "What data governance work is needed before AI can go live?",
        answer:
          "That depends on your current labelling and access-control maturity. The Copilot readiness report identifies exactly what needs to be in place and in what order.",
      },
      {
        question: "Can we proceed straight to AI Deploy without a prior design engagement?",
        answer:
          "Only if you already have validated use cases and governance specifications. If not, this design engagement prevents costly rework during build.",
      },
      {
        question: "How do we get started?",
        answer:
          "Reach out to the DigitalQatalyst team. They will confirm your Microsoft 365 licence position, data landscape, and the workshop schedule before work begins.",
      },
    ],
    audience: "HR Directors, IT Managers, and Internal Communications leaders",
    industryRelevance:
      "Organisations with Microsoft 365 E3 or E5 licences considering Copilot deployment, or those evaluating AI assistants for knowledge-worker productivity",
    businessImpact:
      "Prevents governance failures and employee distrust by ensuring every AI capability is validated, scoped, and governed before it reaches production.",
    tags: ["digital-workplace", "copilot", "responsible-ai"],
  },

  58: {
    description:
      "A twelve-week implementation that configures, integrates, and launches your Microsoft 365 digital workplace environment, covering SharePoint intranet, Teams governance, and the adoption programme your employees need to shift their working habits.",
    positioning:
      "Get your digital workplace built, tested, and adopted, not just switched on.",
    features: [
      "SharePoint intranet built to the approved information architecture with page templates, navigation, and content migration",
      "Microsoft Teams governance configuration covering naming policies, channel templates, guest access, and lifecycle management",
      "Integration setup for HRIS, ITSM, and communication tools so the workplace connects to the systems employees rely on",
      "Structured adoption programme: champion training, launch comms, and 30-day usage tracking to confirm behaviour change",
    ],
    timelineMilestones: [
      "Weeks 1-2: Environment setup, governance configuration, and sprint planning",
      "Weeks 3-7: SharePoint build, Teams configuration, and integration development",
      "Weeks 8-10: User acceptance testing, content migration, and champion training",
      "Weeks 11-12: Controlled launch, hypercare support, and handover to your operations team",
    ],
    deliverables: [
      {
        title: "Configured SharePoint Intranet",
        description:
          "A built and content-populated intranet matching the approved architecture, with templates, permissions, and search configured for your organisation.",
      },
      {
        title: "Teams Governance Ruleset",
        description:
          "Enforced naming conventions, provisioning policies, guest-access rules, and lifecycle settings keeping your Teams environment manageable at scale.",
      },
      {
        title: "Integration Build and Test Evidence",
        description:
          "Documented and tested connections to HRIS, ITSM, and other agreed systems, with test scripts and sign-off records.",
      },
      {
        title: "Adoption Programme Outcomes Report",
        description:
          "30-day usage data, champion engagement summary, and recommended actions for sustaining adoption after handover.",
      },
    ],
    packageHighlights: [
      "Full build, test, and launch, not a configuration-only handover",
      "Adoption programme runs alongside the technical build",
      "Hypercare support included in the final two weeks",
    ],
    faqIntro: "Questions about the Digital Workplace deployment engagement.",
    faqs: [
      {
        question: "What Microsoft 365 licence do we need?",
        answer:
          "Business Premium or E3 covers the core scope. The DigitalQatalyst team confirms exact licence requirements during the kickoff sprint.",
      },
      {
        question: "Can you migrate content from our old intranet?",
        answer:
          "Yes. Content migration is scoped during weeks one to two. Volume, format, and metadata complexity determine the effort estimate.",
      },
      {
        question: "What if our employees do not adopt the new tools?",
        answer:
          "The adoption programme is built into the engagement, not bolted on. Champions are trained, communications are scheduled, and usage is tracked so issues surface early.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team with your approved design specification or existing requirements. They will confirm the sprint plan and environment access needed to begin.",
      },
    ],
    audience: "HR Directors, IT Managers, and Internal Communications leaders",
    industryRelevance:
      "Organisations migrating from legacy intranets, completing a Microsoft 365 rollout, or standardising collaboration across distributed or hybrid teams",
    businessImpact:
      "Delivers a functioning, adopted digital workplace within twelve weeks, cutting the adoption lag and configuration drift that typically follow self-managed rollouts.",
    tags: ["digital-workplace", "sharepoint", "microsoft-365-deployment"],
  },

  59: {
    description:
      "A twelve-week engagement that deploys governed AI capabilities across your digital workplace, including Microsoft Copilot, automated knowledge surfacing, and AI-assisted communication tools, with safety controls and monitoring active from day one.",
    positioning:
      "Put AI to work in your digital workplace with governance, monitoring, and adoption built in from the start.",
    features: [
      "Copilot for Microsoft 365 deployment with data sensitivity controls, usage policies, and employee guidance materials",
      "AI-powered search and knowledge surfacing configured to return accurate, permission-aware results",
      "Automated workflows for routine employee requests: IT tickets, HR queries, and meeting summaries",
      "Monitoring dashboard tracking AI usage, prompt quality, override rates, and adoption by team",
    ],
    timelineMilestones: [
      "Weeks 1-2: Governance configuration, sensitivity labelling review, and pilot cohort selection",
      "Weeks 3-6: Copilot rollout to pilot cohort with usage monitoring and feedback capture",
      "Weeks 7-10: AI search, automated workflows, and broader rollout to remaining users",
      "Weeks 11-12: Performance review, monitoring handover, and operational sign-off",
    ],
    deliverables: [
      {
        title: "Copilot Deployment with Governance Controls",
        description:
          "Microsoft 365 Copilot live for your user base with sensitivity labels enforced, usage policies published, and employee guidance distributed.",
      },
      {
        title: "AI Search and Knowledge Configuration",
        description:
          "Microsoft Search or equivalent tuned to surface relevant, permission-correct results from SharePoint, Teams, and connected repositories.",
      },
      {
        title: "Automated Workflow Builds",
        description:
          "Power Automate flows handling agreed employee request scenarios, tested and handed over with documentation for your support team.",
      },
      {
        title: "AI Monitoring Dashboard",
        description:
          "A live view of Copilot usage, prompt patterns, and adoption by department so your IT team can optimise and govern AI use on an ongoing basis.",
      },
    ],
    packageHighlights: [
      "Governance controls configured before any AI capability goes live",
      "Pilot cohort approach reduces risk before full organisational rollout",
      "Monitoring dashboard handed over so your team can manage AI use independently",
    ],
    faqIntro: "Questions about deploying AI capabilities into your digital workplace.",
    faqs: [
      {
        question: "What Microsoft licences are required for Copilot?",
        answer:
          "Microsoft 365 Copilot requires an E3 or E5 base licence plus the Copilot add-on. The DigitalQatalyst team confirms your exact licence position at kickoff.",
      },
      {
        question: "How do you prevent Copilot surfacing data employees should not see?",
        answer:
          "Sensitivity labels and permissions are audited and corrected before Copilot is enabled. The readiness checklist from the AI design phase drives this work.",
      },
      {
        question: "What happens if employees misuse AI tools?",
        answer:
          "Usage policies, monitoring alerts, and manager-visible reporting are all configured. The DigitalQatalyst team trains your IT team to act on the signals.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your AI design specification and current licence position with the DigitalQatalyst team. They will confirm the pilot cohort, governance prerequisites, and kickoff schedule.",
      },
    ],
    audience: "HR Directors, IT Managers, and Internal Communications leaders",
    industryRelevance:
      "Organisations with Microsoft 365 E3 or E5 licences ready to activate Copilot or deploy AI-assisted workflows for knowledge workers",
    businessImpact:
      "Delivers measurable productivity gains for knowledge workers while keeping sensitive data protected and AI behaviour auditable from day one.",
    tags: ["digital-workplace", "copilot-deployment", "ai-governance"],
  },

  60: {
    description:
      "Ongoing managed operations for your Microsoft 365 digital workplace environment, covering platform health monitoring, licence and configuration governance, adoption reporting, and monthly optimisation to keep the environment aligned to how your organisation works.",
    positioning:
      "Keep your digital workplace performing, adopted, and fit for purpose without loading internal IT with platform management.",
    features: [
      "Monthly Microsoft 365 health reports covering Teams usage, SharePoint performance, and licence consumption",
      "Configuration drift detection and correction before issues affect employee productivity",
      "Adoption analytics reviewed monthly with recommended actions to lift engagement in underused tools",
      "Coordinated rollout of Microsoft feature updates so new capabilities land without disrupting working patterns",
    ],
    timelineMilestones: [
      "Month 1: Baseline health audit, SLA agreement, and monitoring tool configuration",
      "Months 2-3: First reporting cycle, adoption review, and backlog prioritisation",
      "Ongoing: Monthly health reports, quarterly roadmap reviews, and annual licence optimisation",
    ],
    deliverables: [
      {
        title: "Monthly Health and Adoption Report",
        description:
          "Usage metrics, configuration status, and adoption trends across Teams, SharePoint, and connected apps, with recommended actions for the following month.",
      },
      {
        title: "Configuration Change Log",
        description:
          "Documented record of every setting change, policy update, and integration modification applied during the month, with rationale and sign-off.",
      },
      {
        title: "Feature Update Briefings",
        description:
          "Monthly summary of incoming Microsoft 365 feature releases assessed for relevance and readiness, with a recommended rollout plan for your organisation.",
      },
      {
        title: "Quarterly Roadmap Review",
        description:
          "A structured session with the DigitalQatalyst team to reassess priorities, adjust the backlog, and confirm the next quarter's improvement focus.",
      },
    ],
    packageHighlights: [
      "SLA-backed response times for configuration issues affecting employee access",
      "Licence optimisation reviewed annually to avoid paying for unused capacity",
      "Monthly adoption reporting included as standard, not an add-on",
    ],
    faqIntro: "Questions about the Digital Workplace managed service.",
    faqs: [
      {
        question: "What does the managed service cover that our IT team does not already do?",
        answer:
          "Proactive configuration drift detection, adoption analytics interpretation, and Microsoft feature-update planning are typically the gaps. The DigitalQatalyst team handles these so your IT team can focus on internal requests.",
      },
      {
        question: "Can we add new capabilities under the managed service?",
        answer:
          "Minor enhancements are included. Larger additions are scoped as separate engagements. The monthly review session is the right place to flag new requirements.",
      },
      {
        question: "What are the SLA response times?",
        answer:
          "Response times are agreed at onboarding. The standard plan covers critical issues within four business hours and standard changes within five business days.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team. They will complete a baseline health audit of your Microsoft 365 environment before the first SLA period begins.",
      },
    ],
    audience: "HR Directors, IT Managers, and Internal Communications leaders",
    industryRelevance:
      "Organisations that have completed a digital workplace rollout and need ongoing governance, adoption support, and platform optimisation without expanding headcount",
    businessImpact:
      "Prevents the configuration drift and adoption decline that typically erode productivity gains twelve to eighteen months after a workplace rollout.",
    tags: ["digital-workplace", "managed-service", "microsoft-365-governance"],
  },

  // -----------------------------------------------------------------------
  // BUSINESS PROCESS AUTOMATION (ids 61-66)
  // -----------------------------------------------------------------------

  61: {
    description:
      "A one-week assessment that maps your highest-volume manual processes, scores each for automation potential, and returns a prioritised list of workflows to tackle first along with an honest view of the tooling and data readiness required.",
    positioning:
      "Find the manual processes that cost the most time, then get a clear plan to automate the right ones first.",
    features: [
      "Process inventory across operations, finance, HR, and IT to identify repetitive, rules-based work",
      "Automation potential scoring by volume, error rate, complexity, and data availability",
      "Tool fit analysis covering RPA, workflow automation, and API integration options relative to your existing stack",
      "Prioritised automation roadmap with effort, cost, and expected time-saving estimates for each candidate",
    ],
    timelineMilestones: [
      "Days 1-2: Process discovery workshops and document/system review",
      "Days 3-4: Scoring, tool-fit analysis, and roadmap drafting",
      "Day 5: Findings playback with prioritised roadmap and next-step recommendations",
    ],
    deliverables: [
      {
        title: "Process Inventory and Scoring Matrix",
        description:
          "Every in-scope process documented and rated for automation potential, with volume, error rate, and complexity noted for each.",
      },
      {
        title: "Tool Fit Analysis",
        description:
          "Assessment of which automation approach, RPA, low-code workflow, or API integration, suits each candidate given your existing platforms and IT constraints.",
      },
      {
        title: "Prioritised Automation Roadmap",
        description:
          "Sequenced list of automation candidates with estimated effort, expected hours saved per month, and recommended tooling for each initiative.",
      },
      {
        title: "Business Case Summary",
        description:
          "A concise document for COO and finance stakeholders covering total addressable saving and recommended first investment.",
      },
    ],
    packageHighlights: [
      "Fixed-scope, no-obligation assessment completed within one week",
      "Tool-neutral: recommends the right automation approach for each process",
      "Business case summary included for stakeholder sign-off",
    ],
    faqIntro: "Questions about the Business Process Automation assessment.",
    faqs: [
      {
        question: "Which processes are in scope?",
        answer:
          "Scope is agreed at the start of the week. Most assessments cover operations, finance approvals, HR onboarding, and IT service requests. Additional areas can be included.",
      },
      {
        question: "Do we need to have a specific automation tool already chosen?",
        answer:
          "No. The assessment is tool-neutral and will recommend the right approach, whether that is Power Automate, UiPath, Zapier, or custom API integration, based on your existing stack.",
      },
      {
        question: "What if we already know which processes we want to automate?",
        answer:
          "The DigitalQatalyst team will validate those candidates and assess them alongside others you may not have considered, ensuring the roadmap reflects the full opportunity.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call with the DigitalQatalyst team. They will confirm which departments to include and what documentation to prepare before day one.",
      },
    ],
    audience: "COOs, Operations Directors, and Transformation leads",
    industryRelevance:
      "Organisations in financial services, professional services, logistics, healthcare administration, or any sector with high volumes of repeatable back-office work",
    businessImpact:
      "Gives leadership a costed, sequenced view of where automation saves the most time and reduces the rework and manual error that erode margin in back-office operations.",
    tags: ["process-automation", "rpa", "workflow-efficiency"],
  },

  62: {
    description:
      "A four-week design engagement that translates your automation priorities into detailed process specifications, tool configurations, and test plans, giving your delivery team everything needed to build and launch each workflow without ambiguity.",
    positioning:
      "Design your automations properly before building them: fewer rework cycles, faster go-live, and workflows that hold up in production.",
    features: [
      "As-is and to-be process maps for each priority workflow, showing every step, decision point, and exception path",
      "Tool configuration specifications for Power Automate, UiPath, or your chosen platform, with field mappings and error handling defined",
      "Integration design covering API connections, data transformations, and authentication requirements for each workflow",
      "Test plan with acceptance criteria, edge-case scenarios, and sign-off checklist your QA team can execute against",
    ],
    timelineMilestones: [
      "Week 1: Process deep-dives, exception mapping, and tool scoping",
      "Week 2: To-be process design and integration architecture",
      "Week 3: Configuration specifications, field mapping, and test plan drafting",
      "Week 4: Design review, stakeholder sign-off, and build-ready handover",
    ],
    deliverables: [
      {
        title: "As-Is and To-Be Process Maps",
        description:
          "Detailed flow diagrams for each automation candidate showing current manual steps and the redesigned automated flow, including all exception and escalation paths.",
      },
      {
        title: "Automation Configuration Specifications",
        description:
          "Step-by-step build instructions for your chosen platform, covering triggers, actions, field mappings, conditions, and error-handling logic.",
      },
      {
        title: "Integration Architecture Document",
        description:
          "API connection designs, data transformation rules, and authentication approaches for each system the automation touches.",
      },
      {
        title: "Test Plan and Acceptance Criteria",
        description:
          "A ready-to-execute test script covering happy paths, edge cases, and failure scenarios with pass/fail criteria for each.",
      },
    ],
    packageHighlights: [
      "Exception and escalation paths designed in, not discovered during build",
      "Platform-specific configuration specifications, not generic process diagrams",
      "Test plan included so QA can begin immediately after build",
    ],
    faqIntro: "Questions about the Business Process Automation design engagement.",
    faqs: [
      {
        question: "How many automation workflows does the design engagement cover?",
        answer:
          "Typically three to five workflows depending on complexity. The DigitalQatalyst team confirms scope based on your prioritised roadmap during week one.",
      },
      {
        question: "Can you design for any automation platform?",
        answer:
          "Yes. The DigitalQatalyst team designs to your chosen platform, whether Power Automate, UiPath, Automation Anywhere, Make, or another tool.",
      },
      {
        question: "Do we need development resources available during the design phase?",
        answer:
          "A technical contact who understands your systems and APIs is helpful in weeks two and three to validate integration assumptions.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your prioritised automation roadmap or assessment output with the DigitalQatalyst team and confirm which platform you are building on.",
      },
    ],
    audience: "COOs, Operations Directors, and Transformation leads",
    industryRelevance:
      "Organisations with a confirmed automation roadmap that need detailed build specifications before committing development resources",
    businessImpact:
      "Cuts build rework by resolving integration gaps, exception logic, and acceptance criteria before a developer writes a single line of automation code.",
    tags: ["process-automation", "workflow-design", "integration-architecture"],
  },

  63: {
    description:
      "A four-week AI design engagement that identifies where intelligent automation, including document processing, decision support, and predictive routing, can extend your business process automation beyond rules-based workflows, with responsible design and deployment specifications for each use case.",
    positioning:
      "Design the AI layer that takes your process automation from rules-based to genuinely intelligent, safely and with governance built in.",
    features: [
      "AI use-case identification for processes where rules-based automation reaches its limits: unstructured documents, judgement-intensive approvals, and variable inputs",
      "Feasibility scoring across data quality, model availability, and responsible AI criteria for each candidate",
      "Intelligent document processing design for invoices, contracts, forms, and other high-volume unstructured inputs",
      "Governance specification covering confidence thresholds, human-review triggers, audit logging, and model retraining schedules",
    ],
    timelineMilestones: [
      "Week 1: AI use-case workshops, data landscape review, and feasibility scoping",
      "Week 2: Use-case scoring and responsible AI framing for prioritised candidates",
      "Week 3: Workflow design, model selection, and governance specification",
      "Week 4: Specification review, risk assessment sign-off, and handover",
    ],
    deliverables: [
      {
        title: "AI Use-Case Feasibility Report",
        description:
          "Scored assessment of each AI candidate covering data readiness, model options, implementation complexity, and responsible AI considerations.",
      },
      {
        title: "Intelligent Document Processing Specification",
        description:
          "Design for AI-powered extraction and classification of unstructured documents, including field mapping, confidence scoring, and exception routing.",
      },
      {
        title: "AI Workflow Designs",
        description:
          "Detailed workflow specifications for each prioritised use case, showing where AI decisions are made, where humans review, and where the audit trail is recorded.",
      },
      {
        title: "Governance and Model Management Plan",
        description:
          "Confidence thresholds, human-in-the-loop rules, monitoring metrics, and retraining triggers for each AI model deployed in a process.",
      },
    ],
    packageHighlights: [
      "Focused on processes where AI genuinely outperforms rules, not where it adds complexity without value",
      "Responsible AI criteria applied at design stage, not retrofitted after build",
      "Governance and model management plan included so the AI stays reliable over time",
    ],
    faqIntro: "Questions about designing AI capabilities for business process automation.",
    faqs: [
      {
        question: "What kinds of processes benefit most from AI rather than standard automation?",
        answer:
          "Processes involving unstructured data, variable inputs, or judgement-based decisions: invoice processing, contract review, complaint classification, and demand forecasting are common examples.",
      },
      {
        question: "Do we need to have our own AI models or data science team?",
        answer:
          "No. The DigitalQatalyst team designs for pre-built AI services, such as Azure AI Document Intelligence or AWS Textract, so you do not need in-house model training capability.",
      },
      {
        question: "How do you handle cases where the AI makes the wrong decision?",
        answer:
          "Confidence thresholds and human-review triggers are designed in from the start. Every AI decision that falls below the threshold routes to a human before any action is taken.",
      },
      {
        question: "How do we get started?",
        answer:
          "Bring your existing automation roadmap and the DigitalQatalyst team will identify which processes are candidates for AI extension. A brief scoping call is the first step.",
      },
    ],
    audience: "COOs, Operations Directors, and Transformation leads",
    industryRelevance:
      "Organisations in financial services, insurance, logistics, and professional services with high volumes of unstructured documents or variable-input approval processes",
    businessImpact:
      "Extends automation coverage to the document-heavy and judgement-intensive processes that rules-based tools cannot handle, reducing manual review time and exception rates.",
    tags: ["intelligent-automation", "document-processing", "ai-workflow-design"],
  },

  64: {
    description:
      "A twelve-week implementation that builds, integrates, tests, and launches your prioritised automation workflows, covering RPA bots, low-code automations, and API integrations, with structured handover to the teams who will maintain them.",
    positioning:
      "Get your automation workflows built, tested, and running in production, with the documentation and training your team needs to own them.",
    features: [
      "Automation build for prioritised workflows across your chosen platform: Power Automate, UiPath, or equivalent",
      "API integration development connecting automation to ERP, CRM, HRIS, and other source systems",
      "End-to-end testing with business stakeholders covering happy paths, exceptions, and volume stress scenarios",
      "Operations handover including runbooks, monitoring setup, and administrator training for your internal team",
    ],
    timelineMilestones: [
      "Weeks 1-2: Environment setup, access configuration, and sprint planning with your team",
      "Weeks 3-8: Automation builds and integration development in fortnightly sprint cycles",
      "Weeks 9-10: User acceptance testing, exception handling refinement, and business sign-off",
      "Weeks 11-12: Controlled launch, hypercare support, and handover with runbooks and training",
    ],
    deliverables: [
      {
        title: "Built and Tested Automation Workflows",
        description:
          "Live automations running in your production environment, tested against the agreed acceptance criteria and signed off by business stakeholders.",
      },
      {
        title: "API Integration Connections",
        description:
          "Functioning and documented connections between your automation platform and the source systems each workflow depends on.",
      },
      {
        title: "Test Evidence Pack",
        description:
          "Executed test scripts, defect log, and sign-off records covering all tested scenarios for audit and governance purposes.",
      },
      {
        title: "Operations Runbook and Training",
        description:
          "Step-by-step runbooks for each automation, monitoring alert setup, and hands-on training for the team responsible for day-to-day oversight.",
      },
    ],
    packageHighlights: [
      "Builds delivered in fortnightly sprints so you see working automations before the project ends",
      "Business sign-off on acceptance criteria before any workflow goes live",
      "Runbooks and administrator training included in the final two weeks",
    ],
    faqIntro: "Questions about the Business Process Automation deployment engagement.",
    faqs: [
      {
        question: "How many workflows can be built in twelve weeks?",
        answer:
          "Typically five to ten workflows depending on complexity. The sprint plan confirms scope in week one based on the approved design specifications.",
      },
      {
        question: "What if we discover a workflow is more complex than the design assumed?",
        answer:
          "Scope changes are assessed in the affected sprint. The DigitalQatalyst team will present options: simplify the design, adjust other scope, or extend with a change request.",
      },
      {
        question: "Do we need dedicated technical resources from our side?",
        answer:
          "A system access contact and a business owner for each workflow are required. Dedicated developer time from your side is helpful but not essential.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your approved design specifications and the DigitalQatalyst team will confirm environment access, tooling licences, and the sprint-one schedule.",
      },
    ],
    audience: "COOs, Operations Directors, and Transformation leads",
    industryRelevance:
      "Organisations with approved automation designs ready for build, particularly those in operations-heavy sectors where manual processing is a known cost driver",
    businessImpact:
      "Delivers working automations in production within twelve weeks, with the operations documentation your team needs to maintain and extend them without vendor dependency.",
    tags: ["process-automation", "rpa-deployment", "workflow-build"],
  },

  65: {
    description:
      "A twelve-week engagement that deploys AI-powered automation capabilities into your production environment, including intelligent document processing, AI-driven decision routing, and predictive workflow triggers, with governance controls and monitoring active from day one.",
    positioning:
      "Put governed AI automation into production: document intelligence, decision support, and predictive routing, live and monitored.",
    features: [
      "Intelligent document processing deployment for invoices, purchase orders, contracts, or forms, with accuracy baselines and human-review thresholds set",
      "AI decision-routing models integrated into your existing workflow orchestration so exceptions are handled consistently",
      "Confidence-score monitoring configured to alert when model accuracy degrades below agreed thresholds",
      "Structured pilot-to-production rollout with a defined cohort so risk is contained before full-scale automation runs",
    ],
    timelineMilestones: [
      "Weeks 1-3: Governance setup, model configuration, and pilot environment preparation",
      "Weeks 4-7: Pilot deployment with monitoring, accuracy tracking, and threshold calibration",
      "Weeks 8-10: Production rollout, integration testing, and exception-handling validation",
      "Weeks 11-12: Performance baseline review, monitoring handover, and operational sign-off",
    ],
    deliverables: [
      {
        title: "Deployed Intelligent Document Processing",
        description:
          "AI document extraction and classification running in production with agreed field accuracy rates, confidence thresholds, and human-review queue configured.",
      },
      {
        title: "AI Decision-Routing Integration",
        description:
          "AI-powered routing logic embedded in your workflow orchestration, with audit logs recording every decision and its confidence score.",
      },
      {
        title: "Monitoring and Alerting Configuration",
        description:
          "Live dashboards and alert rules covering model accuracy, throughput, exception rates, and human-review queue depth for your operations team.",
      },
      {
        title: "Pilot Outcome Report",
        description:
          "Accuracy benchmarks, exception rates, and throughput data from the pilot period, with recommendations for threshold adjustments before full production scale.",
      },
    ],
    packageHighlights: [
      "Pilot cohort approach confirms accuracy before full-scale automation runs",
      "Governance controls and audit logging configured before any AI decision affects a live process",
      "Monitoring handed over to your team with trained operators, not just dashboards",
    ],
    faqIntro: "Questions about deploying AI automation capabilities into production.",
    faqs: [
      {
        question: "What accuracy rates can we expect from intelligent document processing?",
        answer:
          "Accuracy depends on document quality and variability. The DigitalQatalyst team sets baseline targets during the pilot and tunes extraction rules before full rollout.",
      },
      {
        question: "What happens when an AI decision is wrong?",
        answer:
          "Every decision below the confidence threshold routes to a human reviewer before any downstream action is taken. The audit log records the AI output and the human decision.",
      },
      {
        question: "Can we use our existing document processing tool, or do we need a new one?",
        answer:
          "The DigitalQatalyst team will assess your existing tooling. If it meets the requirements, the engagement extends its capability rather than replacing it.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your AI workflow design specifications and the DigitalQatalyst team will confirm the pilot cohort, governance prerequisites, and environment access needed to begin.",
      },
    ],
    audience: "COOs, Operations Directors, and Transformation leads",
    industryRelevance:
      "Organisations in financial services, insurance, procurement, and logistics with high document volumes or judgement-heavy approval chains that standard RPA cannot handle",
    businessImpact:
      "Extends automation to the document-intensive and variable-input processes that consume the most manual effort, while keeping every AI decision auditable and reversible.",
    tags: ["intelligent-automation", "document-intelligence", "ai-operations"],
  },

  66: {
    description:
      "Ongoing managed operations for your business process automation environment, covering bot health monitoring, exception queue management, platform updates, and monthly performance reporting so your automations keep delivering the savings they were built to produce.",
    positioning:
      "Keep your automation estate healthy and producing savings, without your team spending time on bot maintenance and exception triaging.",
    features: [
      "Daily bot health monitoring with alerting for failures, queue backlogs, and throughput drops before they become business issues",
      "Exception queue management: first-line triage and resolution for automation failures so manual fallback is minimised",
      "Monthly performance report covering hours saved, exception rates, and SLA adherence across all automations",
      "Planned change management for platform updates, system changes, and new process variations that affect existing bots",
    ],
    timelineMilestones: [
      "Month 1: Automation estate handover, monitoring tool setup, and SLA baseline agreement",
      "Months 2-3: First full monitoring cycle, exception reporting, and backlog prioritisation",
      "Ongoing: Monthly performance reports, quarterly optimisation reviews, and annual capacity planning",
    ],
    deliverables: [
      {
        title: "Monthly Automation Performance Report",
        description:
          "Hours saved, exception rates, queue health, and SLA adherence for every automation in the managed estate, with a recommended actions list.",
      },
      {
        title: "Exception and Incident Log",
        description:
          "Documented record of every automation failure, root cause, resolution action, and recurrence prevention measure taken during the month.",
      },
      {
        title: "Change Impact Assessments",
        description:
          "Assessment of how upcoming system changes, such as ERP upgrades or API version changes, affect your automations, with remediation plans and effort estimates.",
      },
      {
        title: "Quarterly Optimisation Review",
        description:
          "Structured session with the DigitalQatalyst team to review performance trends, retire underperforming bots, and prioritise new automation candidates.",
      },
    ],
    packageHighlights: [
      "Daily monitoring with SLA-backed response times for automation failures",
      "Exception queue triage included so your operations team is not manually firefighting bot failures",
      "Change impact assessments prevent unexpected automation breakage during system upgrades",
    ],
    faqIntro: "Questions about the Business Process Automation managed service.",
    faqs: [
      {
        question: "What is included in exception queue management?",
        answer:
          "The DigitalQatalyst team performs first-line triage on failed automation runs: diagnosing the cause, applying fixes where possible, and escalating to your team with a documented root cause when a code change is needed.",
      },
      {
        question: "How do you handle changes to the systems our automations connect to?",
        answer:
          "The DigitalQatalyst team monitors announced changes from your ERP, CRM, and other connected platforms and produces an impact assessment before each change lands.",
      },
      {
        question: "Can we add new automations under the managed service?",
        answer:
          "Minor enhancements and small new workflows are included within capacity. Larger additions are scoped as separate engagements and flagged in the quarterly review.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team with an inventory of your current automation estate. They will complete a health baseline before the first SLA period begins.",
      },
    ],
    audience: "COOs, Operations Directors, and Transformation leads",
    industryRelevance:
      "Organisations with a live automation estate of five or more workflows that need proactive monitoring and maintenance without dedicating internal RPA developers to it",
    businessImpact:
      "Prevents the automation decay that typically cuts savings in half within twelve months by keeping bots healthy, exceptions resolved, and the estate adapted to system changes.",
    tags: ["process-automation", "managed-service", "bot-operations"],
  },

  // -----------------------------------------------------------------------
  // SPECIALISED OPERATIONS (ids 73-78)
  // -----------------------------------------------------------------------

  73: {
    description:
      "A one-week assessment of your domain-specific operational functions, covering the tools, workflows, and data flows unique to your business unit, and returning a prioritised improvement roadmap your operational leaders can act on immediately.",
    positioning:
      "Get an honest, evidence-based view of where your specialist operations are underperforming and what to fix first.",
    features: [
      "Domain-specific process mapping covering the workflows, handoffs, and system dependencies unique to your operational function",
      "Gap analysis comparing current tooling and data quality against what the function needs to operate at scale",
      "Stakeholder interviews with operational leads, front-line staff, and system owners to surface friction that metrics alone miss",
      "Prioritised improvement roadmap with effort estimates, dependency sequencing, and risk flags for each recommendation",
    ],
    timelineMilestones: [
      "Days 1-2: Stakeholder interviews, process walkthroughs, and system review",
      "Days 3-4: Gap scoring, dependency mapping, and roadmap drafting",
      "Day 5: Findings playback and prioritised roadmap handover",
    ],
    deliverables: [
      {
        title: "Operational Function Assessment Report",
        description:
          "Documented review of your specialist function covering process maturity, tooling fit, data quality, and the specific gaps limiting performance.",
      },
      {
        title: "Gap and Risk Register",
        description:
          "Every identified gap scored by operational impact and remediation effort, with risk flags for gaps that carry compliance or safety implications.",
      },
      {
        title: "Prioritised Improvement Roadmap",
        description:
          "Sequenced recommendations with effort estimates and ownership suggestions your operational and IT leads can plan against.",
      },
      {
        title: "Executive Briefing",
        description:
          "A concise summary of findings and recommended first investments for your business unit and technology leadership.",
      },
    ],
    packageHighlights: [
      "Fixed-scope, no-obligation assessment adapted to your specific operational domain",
      "Interview-led methodology captures operational reality, not just what systems report",
      "Findings playback with the DigitalQatalyst team included",
    ],
    faqIntro: "Questions about the Specialised Operations assessment.",
    faqs: [
      {
        question: "What kinds of specialist operations does this cover?",
        answer:
          "Field service management, asset and facilities operations, quality management, supply chain execution, and other domain-specific functions. The DigitalQatalyst team confirms fit during the scoping call.",
      },
      {
        question: "Can you assess a function that uses a niche or legacy system we built internally?",
        answer:
          "Yes. The assessment is focused on the operational function, not just commercial platforms. Custom and legacy systems are reviewed as part of the tooling analysis.",
      },
      {
        question: "Who from our organisation needs to be available?",
        answer:
          "The operational function lead, two to three front-line staff, and the system owner for the primary operational platform are the minimum. Additional stakeholders can be included if scope warrants it.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call with the DigitalQatalyst team to confirm the operational function in scope, the stakeholders to involve, and any documentation to prepare in advance.",
      },
    ],
    audience: "Business Unit Directors, Domain Operations Managers, and functional leads in specialist operational roles",
    industryRelevance:
      "Organisations with domain-specific operational functions where generic enterprise platforms do not fully fit, including field service, quality management, facilities, and supply chain execution",
    businessImpact:
      "Surfaces the specific process and tooling gaps that limit throughput, control, and scalability in specialist functions, giving leadership a costed improvement plan to act on.",
    tags: ["specialised-operations", "operational-assessment", "domain-operations"],
  },

  74: {
    description:
      "A four-week design engagement that translates your specialist operational goals into user-centred workflows, system configurations, and integration specifications tailored to the particular demands of your domain function.",
    positioning:
      "Design operational workflows built for your specific domain, not adapted from a generic template that does not fit how your function works.",
    features: [
      "Role-specific user journey mapping that reflects the actual tasks, exceptions, and decision points of your operational staff",
      "Workflow design for domain-specific processes: work order management, quality inspection, case handling, or equivalent function-specific flows",
      "System configuration specification for your operational platform, covering data models, screen layouts, and automation rules",
      "Integration design connecting your operational system to ERP, scheduling, reporting, and communication tools your function depends on",
    ],
    timelineMilestones: [
      "Week 1: Domain discovery workshops, user research, and current-state mapping",
      "Week 2: To-be workflow design and system configuration scoping",
      "Week 3: Integration architecture, data model, and configuration specification",
      "Week 4: Design review, stakeholder sign-off, and build-ready handover",
    ],
    deliverables: [
      {
        title: "Domain-Specific User Journey Maps",
        description:
          "Workflow diagrams for each key operational task, showing role, system, data, and decision at every step, with exceptions and escalations mapped.",
      },
      {
        title: "System Configuration Specification",
        description:
          "Detailed build instructions for your operational platform covering objects, fields, screens, rules, and automation triggers.",
      },
      {
        title: "Integration Architecture Document",
        description:
          "Design for connections between your operational system and ERP, scheduling, and reporting tools, with API contracts and data transformation rules.",
      },
      {
        title: "Adoption and Training Plan",
        description:
          "Outline of the change management, training, and communication activities needed to shift your operational staff to the redesigned workflows.",
      },
    ],
    packageHighlights: [
      "Domain-specific design: workflows are built around how your function operates, not a generic process template",
      "Integration architecture included so downstream systems are part of the design, not an afterthought",
      "Build-ready specifications handed over at end of week four",
    ],
    faqIntro: "Questions about the Specialised Operations design engagement.",
    faqs: [
      {
        question: "Can this cover a purpose-built or niche operational platform?",
        answer:
          "Yes. The DigitalQatalyst team designs to the platform your function uses, whether a leading field service tool, a bespoke case management system, or a sector-specific application.",
      },
      {
        question: "How do you capture what operational staff actually need versus what management thinks they need?",
        answer:
          "Week one includes structured sessions with front-line operational staff. Their task walkthroughs and friction points directly shape the to-be design.",
      },
      {
        question: "Do we need an existing system in place, or can this design a new one?",
        answer:
          "Both. The design engagement can specify a new operational platform or redesign the workflows in an existing one.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team with details of your operational function and the platform in scope. They will confirm the week-one workshop schedule and participants.",
      },
    ],
    audience: "Business Unit Directors, Domain Operations Managers, and functional leads in specialist operational roles",
    industryRelevance:
      "Organisations whose specialist functions, field service, quality management, facilities, or supply chain execution, are constrained by poorly configured or poorly integrated operational systems",
    businessImpact:
      "Reduces the configuration and integration gaps that cause operational workarounds, data duplication, and reporting inaccuracy in specialist functions.",
    tags: ["specialised-operations", "operational-design", "workflow-specification"],
  },

  75: {
    description:
      "A four-week AI design engagement that identifies where AI can augment your specialist operational workflows, from predictive scheduling and anomaly detection to AI-assisted decision support, with feasibility validation and responsible design specifications for each use case.",
    positioning:
      "Identify where AI genuinely improves specialist operational performance, and design it responsibly before investing in build.",
    features: [
      "AI use-case discovery focused on domain-specific opportunities: predictive maintenance, intelligent scheduling, quality anomaly detection, and case triage",
      "Data readiness assessment evaluating whether your operational data supports the candidate AI models",
      "Responsible AI workflow design with domain-specific risk considerations, override mechanisms, and auditability requirements",
      "Deployment specification covering model selection, integration points, confidence thresholds, and human-review rules for each validated use case",
    ],
    timelineMilestones: [
      "Week 1: AI opportunity workshops, data landscape review, and domain-specific risk framing",
      "Week 2: Use-case scoring and responsible AI assessment for prioritised candidates",
      "Week 3: Workflow design, integration mapping, and governance specification",
      "Week 4: Specification review, risk sign-off, and build-ready handover",
    ],
    deliverables: [
      {
        title: "AI Use-Case Feasibility Assessment",
        description:
          "Scored evaluation of each candidate AI use case covering data availability, model suitability, operational risk, and responsible AI considerations specific to your domain.",
      },
      {
        title: "Domain-Specific AI Workflow Designs",
        description:
          "Detailed workflow specifications for prioritised use cases showing where AI acts, where humans review, and where the decision record is kept.",
      },
      {
        title: "Data Readiness Report",
        description:
          "Assessment of whether your operational data, in terms of volume, quality, and labelling, supports the identified AI models, with remediation steps where gaps exist.",
      },
      {
        title: "Governance and Monitoring Specification",
        description:
          "Confidence thresholds, override controls, audit logging requirements, and model performance metrics for each AI capability to be deployed.",
      },
    ],
    packageHighlights: [
      "Domain-specific risk assessment applied to every AI use case",
      "Data readiness evaluated before any build investment is committed",
      "Governance specification included so responsible AI is built in, not added later",
    ],
    faqIntro: "Questions about designing AI for specialist operational functions.",
    faqs: [
      {
        question: "What types of AI are most relevant to specialist operations?",
        answer:
          "Predictive maintenance, intelligent scheduling, anomaly and quality defect detection, and AI-assisted case triage tend to offer the highest returns in domain-specific operations. The DigitalQatalyst team validates which apply to your function.",
      },
      {
        question: "What if our operational data is not clean enough for AI?",
        answer:
          "The data readiness report identifies exactly what needs to improve and in what order. Some use cases can proceed with targeted data remediation; others may need to wait.",
      },
      {
        question: "Are there safety or regulatory considerations for AI in our operational function?",
        answer:
          "Domain-specific risk is assessed in week two. Where regulatory or safety considerations apply, the DigitalQatalyst team incorporates them into the responsible AI framework for each use case.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team with details of your operational function and the processes you think could benefit from AI. They will confirm scope and the week-one workshop schedule.",
      },
    ],
    audience: "Business Unit Directors, Domain Operations Managers, and functional leads in specialist operational roles",
    industryRelevance:
      "Organisations in asset-intensive industries, manufacturing, utilities, field service, and logistics where operational AI can drive predictive and autonomous decision-making",
    businessImpact:
      "Validates the AI use cases that will genuinely improve specialist operational performance before build investment, reducing the risk of deploying AI that creates more exceptions than it resolves.",
    tags: ["specialised-operations", "predictive-operations", "ai-workflow-design"],
  },

  76: {
    description:
      "A twelve-week implementation that configures, integrates, tests, and launches the operational system capabilities your specialist function needs, with structured knowledge transfer and handover documentation so your team can manage the environment independently.",
    positioning:
      "Get your specialist operational system configured, connected, and live, with the training and documentation to own it after handover.",
    features: [
      "Platform configuration built to the approved domain-specific specification, covering objects, workflows, screens, and automation rules",
      "Integration development connecting your operational platform to ERP, scheduling, reporting, and communication systems",
      "Role-based user acceptance testing with operational staff validating real task scenarios, not just system functionality",
      "Knowledge transfer programme: administrator training, runbooks, and a documented configuration baseline for your team",
    ],
    timelineMilestones: [
      "Weeks 1-2: Environment setup, data migration planning, and sprint kickoff with your operational leads",
      "Weeks 3-8: Platform configuration, integration development, and iterative review with operational stakeholders",
      "Weeks 9-10: User acceptance testing with front-line staff and defect resolution",
      "Weeks 11-12: Controlled go-live, hypercare support, and handover with training and runbooks",
    ],
    deliverables: [
      {
        title: "Configured Operational Platform",
        description:
          "Your specialist operational system live in production, configured to the approved specification and signed off by operational stakeholders.",
      },
      {
        title: "Integration Connections",
        description:
          "Tested and documented connections between your operational platform and ERP, scheduling, reporting, and other agreed systems.",
      },
      {
        title: "User Acceptance Test Evidence",
        description:
          "Executed test scripts covering role-specific operational scenarios, with defect log and sign-off records for audit and governance.",
      },
      {
        title: "Administrator Runbooks and Training",
        description:
          "Step-by-step operational guides, configuration documentation, and hands-on training for the team responsible for maintaining the system.",
      },
    ],
    packageHighlights: [
      "Front-line operational staff involved in acceptance testing, not just IT reviewers",
      "Knowledge transfer and administrator training built into the final two weeks",
      "Hypercare support included so issues surfacing after go-live are resolved quickly",
    ],
    faqIntro: "Questions about the Specialised Operations deployment engagement.",
    faqs: [
      {
        question: "Can you configure a niche or sector-specific operational platform?",
        answer:
          "Yes, provided the DigitalQatalyst team has the relevant platform expertise or you can provide a certified implementation partner to collaborate with. Scope is confirmed at kickoff.",
      },
      {
        question: "What happens if operational staff reject the new system during testing?",
        answer:
          "User acceptance testing in weeks nine and ten is designed to surface usability issues before go-live. Findings are addressed in the same testing window to protect the launch date.",
      },
      {
        question: "Do we need to migrate historical data?",
        answer:
          "Data migration scope is confirmed in weeks one to two. Volume, quality, and format complexity determine effort. Not all deployments require historical data migration.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your approved design specification and the DigitalQatalyst team will confirm environment access, data migration scope, and the sprint-one schedule.",
      },
    ],
    audience: "Business Unit Directors, Domain Operations Managers, and functional leads in specialist operational roles",
    industryRelevance:
      "Organisations deploying or reconfiguring specialist operational platforms in field service, quality management, asset management, or case and workflow management",
    businessImpact:
      "Delivers a correctly configured, properly integrated operational system within twelve weeks, with operational staff trained and documented so the function can run independently.",
    tags: ["specialised-operations", "platform-deployment", "operational-configuration"],
  },

  77: {
    description:
      "A twelve-week engagement that puts AI capabilities into your specialist operational environment, including predictive models, intelligent routing, and anomaly detection, with governance controls and performance monitoring active from the pilot phase.",
    positioning:
      "Deploy AI into your specialist operational workflows with the governance, accuracy monitoring, and staff enablement your domain requires.",
    features: [
      "Predictive model deployment for domain-specific use cases such as maintenance scheduling, quality defect detection, or workload routing",
      "AI integration into operational workflows so predictions and recommendations surface in the systems your staff already use",
      "Governance configuration: confidence thresholds, human-override controls, and audit logging specific to your operational domain",
      "Staff enablement programme ensuring operational teams understand AI recommendations and know when to act on or override them",
    ],
    timelineMilestones: [
      "Weeks 1-3: Model configuration, governance setup, and pilot environment preparation",
      "Weeks 4-7: Pilot deployment with accuracy monitoring, threshold calibration, and staff feedback",
      "Weeks 8-10: Production rollout, integration validation, and exception-handling confirmation",
      "Weeks 11-12: Performance baseline, monitoring handover, and operational sign-off",
    ],
    deliverables: [
      {
        title: "Deployed AI Models in Operational Workflows",
        description:
          "Validated AI capabilities running in your operational platform, integrated into the workflows your staff use, with agreed accuracy benchmarks met before full rollout.",
      },
      {
        title: "Governance and Override Configuration",
        description:
          "Confidence thresholds, human-review queues, and audit logging active for every AI decision that affects an operational outcome.",
      },
      {
        title: "Pilot Accuracy and Performance Report",
        description:
          "Precision, recall, and throughput data from the pilot period with analysis of exception patterns and threshold recommendations for production.",
      },
      {
        title: "Staff Enablement Materials",
        description:
          "Role-specific guidance on how to interpret AI recommendations, when to act on them, and how to escalate concerns through the override process.",
      },
    ],
    packageHighlights: [
      "Pilot-first approach validates accuracy in your specific operational context before full deployment",
      "Governance and override controls configured before any AI recommendation affects an operational decision",
      "Staff enablement programme ensures adoption rather than resistance",
    ],
    faqIntro: "Questions about deploying AI into specialist operational functions.",
    faqs: [
      {
        question: "How do you validate that AI predictions are accurate enough for our operational context?",
        answer:
          "The pilot phase runs the model against real operational scenarios with monitoring against agreed accuracy thresholds. The DigitalQatalyst team does not move to full production until those thresholds are met.",
      },
      {
        question: "What if operational staff do not trust the AI recommendations?",
        answer:
          "The staff enablement programme explains how the model works and when its recommendations are reliable. Override controls are always available so staff remain in control.",
      },
      {
        question: "Can the AI models be retrained if operational conditions change?",
        answer:
          "Yes. The monitoring configuration includes triggers for retraining when accuracy degrades. The DigitalQatalyst team can advise on retraining cadence as part of the managed service.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your AI design specifications and the DigitalQatalyst team will confirm the pilot cohort, data pipeline requirements, and the governance prerequisites needed to begin.",
      },
    ],
    audience: "Business Unit Directors, Domain Operations Managers, and functional leads in specialist operational roles",
    industryRelevance:
      "Asset-intensive industries, manufacturing, utilities, field service operations, and logistics where AI-driven prediction and routing can measurably improve operational throughput",
    businessImpact:
      "Reduces unplanned downtime, improves throughput predictability, and cuts exception-handling effort in specialist operations by deploying AI where it demonstrably outperforms manual judgement.",
    tags: ["specialised-operations", "predictive-ai", "operational-ai-deployment"],
  },

  78: {
    description:
      "Ongoing managed operations for your specialist operational systems and workflows, covering platform health, data quality monitoring, user support, and monthly performance reporting so your domain function stays at operating capacity without straining internal resources.",
    positioning:
      "Keep your specialist operational systems performing at capacity, with proactive monitoring and expert support when domain-specific issues arise.",
    features: [
      "Platform health monitoring with SLA-backed alerting for system performance, integration failures, and data quality degradation",
      "First-line operational support for domain-specific system issues, workflow errors, and configuration queries from your operations team",
      "Monthly performance report covering system uptime, data quality metrics, workflow throughput, and SLA adherence",
      "Planned maintenance and change management for system updates, process changes, and new configuration requirements from your operational function",
    ],
    timelineMilestones: [
      "Month 1: System handover, monitoring configuration, and SLA baseline agreement",
      "Months 2-3: First reporting cycle, support pattern analysis, and backlog prioritisation",
      "Ongoing: Monthly performance reports, quarterly roadmap reviews, and proactive maintenance scheduling",
    ],
    deliverables: [
      {
        title: "Monthly Operational System Performance Report",
        description:
          "Uptime, throughput, data quality metrics, and SLA adherence for your specialist operational platform, with recommended actions for the following month.",
      },
      {
        title: "Support and Incident Log",
        description:
          "Documented record of every issue raised, resolution time, root cause, and recurrence prevention action taken during the month.",
      },
      {
        title: "Change Management Assessments",
        description:
          "Impact assessment for each planned change to your operational system or connected integrations, with a risk rating and recommended implementation approach.",
      },
      {
        title: "Quarterly Operational Review",
        description:
          "A structured session with the DigitalQatalyst team to review performance trends, address emerging operational requirements, and adjust the improvement backlog.",
      },
    ],
    packageHighlights: [
      "Domain-specific support expertise, not generic IT helpdesk coverage",
      "Data quality monitoring included so operational decisions are based on accurate information",
      "Quarterly review keeps the system aligned to how your function evolves over time",
    ],
    faqIntro: "Questions about the Specialised Operations managed service.",
    faqs: [
      {
        question: "What does domain-specific support mean in practice?",
        answer:
          "The DigitalQatalyst team assigned to your function understands both the platform and the operational context. They can resolve workflow configuration issues, data quality problems, and integration failures without needing extensive briefing from your team.",
      },
      {
        question: "Is user training included in the managed service?",
        answer:
          "Training for new users onboarded to the system is included within agreed limits. Larger training programmes for significant process changes are scoped separately.",
      },
      {
        question: "How quickly are operational system issues resolved?",
        answer:
          "Response and resolution times are set by the SLA agreed at onboarding. Critical issues affecting operational throughput are given the highest response priority.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team with your current system documentation. They will complete a health baseline audit before the first SLA period begins.",
      },
    ],
    audience: "Business Unit Directors, Domain Operations Managers, and functional leads in specialist operational roles",
    industryRelevance:
      "Organisations with live specialist operational platforms in field service, quality management, asset management, or case handling that need ongoing expert support without building an in-house team",
    businessImpact:
      "Prevents operational disruption from platform drift, integration failures, and data quality issues by keeping specialist operational systems managed by people who understand both the tool and the domain.",
    tags: ["specialised-operations", "managed-service", "operational-support"],
  },

  // -----------------------------------------------------------------------
  // ENTERPRISE OPERATIONS (ids 79-84)
  // -----------------------------------------------------------------------

  79: {
    description:
      "A one-week assessment of how your enterprise operational model, including planning, coordination, and execution visibility, performs across functions, returning a prioritised roadmap to close the gaps that slow decision-making and limit cross-functional execution.",
    positioning:
      "Get a clear, evidence-based view of where your enterprise operating model is losing coordination and execution speed.",
    features: [
      "Enterprise operating model review covering planning cadences, cross-functional handoffs, performance visibility, and decision rights",
      "Technology assessment of operational platforms: ERP, operational dashboards, and the data flows connecting them",
      "Stakeholder interviews across COO, finance, operations, and IT to surface coordination failures that system data does not capture",
      "Prioritised improvement roadmap with sequenced recommendations, effort estimates, and dependency mapping",
    ],
    timelineMilestones: [
      "Days 1-2: Leadership interviews, operating model documentation review, and system landscape mapping",
      "Days 3-4: Gap analysis, dependency mapping, and roadmap drafting",
      "Day 5: Findings playback and prioritised roadmap handover to leadership",
    ],
    deliverables: [
      {
        title: "Enterprise Operating Model Assessment",
        description:
          "Documented review of planning, coordination, visibility, and decision-rights across your enterprise functions, with maturity scores and identified gaps.",
      },
      {
        title: "Technology and Data Landscape Map",
        description:
          "Inventory of operational platforms, data flows, and integration points with a gap analysis against what the enterprise needs for real-time operational visibility.",
      },
      {
        title: "Prioritised Improvement Roadmap",
        description:
          "Sequenced recommendations covering operating model design, technology, and data, with effort estimates and ownership assignments your leadership can act on.",
      },
      {
        title: "Executive Briefing Pack",
        description:
          "A concise summary of findings, top risks, and recommended first investments formatted for COO and board-level review.",
      },
    ],
    packageHighlights: [
      "Covers operating model design, technology, and data in one integrated assessment",
      "Interview-led methodology captures coordination failures that system metrics miss",
      "Fixed-scope, no-obligation assessment completed within one week",
    ],
    faqIntro: "Questions about the Enterprise Operations assessment.",
    faqs: [
      {
        question: "Is this focused on technology or on how the organisation operates?",
        answer:
          "Both. The assessment covers operating model design, decision rights, and coordination patterns alongside the technology that enables or constrains them.",
      },
      {
        question: "How many functions does the assessment cover?",
        answer:
          "Scope is agreed at the start of the engagement. Most assessments cover COO, finance, supply chain, and IT as a minimum, with additional functions added based on priority.",
      },
      {
        question: "Do you benchmark our operating model against industry standards?",
        answer:
          "The DigitalQatalyst team uses reference models for enterprise operations to contextualise findings, though benchmarking against named competitors is not included in this engagement.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call with the DigitalQatalyst team. They will confirm the functions in scope, the stakeholders to involve, and any documentation to prepare in advance.",
      },
    ],
    audience: "COOs, Chief of Staff, Strategy Directors, and heads of Transformation",
    industryRelevance:
      "Large organisations where cross-functional coordination, planning visibility, and execution discipline are limiting competitive performance",
    businessImpact:
      "Identifies the operating model and technology gaps that slow enterprise decision-making and cross-functional execution, giving leadership a costed plan to address the highest-impact ones first.",
    tags: ["enterprise-operations", "operating-model", "operational-visibility"],
  },

  80: {
    description:
      "A four-week design engagement that translates your enterprise operational goals into redesigned processes, platform configurations, and integration specifications that improve coordination, visibility, and execution discipline across your business functions.",
    positioning:
      "Design the operating model and technology changes that will actually improve how your enterprise coordinates and executes.",
    features: [
      "Cross-functional process redesign covering planning, performance review, escalation, and operational reporting workflows",
      "Operational data model design defining the metrics, data sources, and refresh cadences your enterprise dashboard needs",
      "Platform configuration specification for your ERP or operational management system, covering the changes needed to support the redesigned processes",
      "Change management and communication plan for the operating model changes affecting leadership and operational teams",
    ],
    timelineMilestones: [
      "Week 1: Operating model workshops, stakeholder alignment, and current-state process mapping",
      "Week 2: To-be process and data model design with cross-functional stakeholders",
      "Week 3: Platform configuration specification and integration architecture",
      "Week 4: Design review, leadership sign-off, and build-ready handover",
    ],
    deliverables: [
      {
        title: "Redesigned Cross-Functional Process Maps",
        description:
          "Detailed to-be workflows for planning, performance review, escalation, and operational reporting, with roles, decision rights, and data flows documented.",
      },
      {
        title: "Operational Data Model",
        description:
          "Definition of the metrics, data sources, refresh cadences, and ownership rules that underpin your target enterprise operational dashboard.",
      },
      {
        title: "Platform Configuration Specification",
        description:
          "Build instructions for ERP or operational platform changes required to support the redesigned processes, formatted for your delivery team.",
      },
      {
        title: "Change and Communication Plan",
        description:
          "Stakeholder map, impact assessment, and communication timeline for the operating model changes, including guidance for engaging the leadership population.",
      },
    ],
    packageHighlights: [
      "Operating model design and technology specification developed together, not in isolation",
      "Cross-functional stakeholders involved in design to prevent implementation conflict later",
      "Change plan included so the human side of the transformation is designed alongside the technology",
    ],
    faqIntro: "Questions about the Enterprise Operations design engagement.",
    faqs: [
      {
        question: "Does the design engagement cover organisation design as well as process and technology?",
        answer:
          "The primary focus is process and technology design. Operating model decisions that affect team structure and reporting lines are flagged but formal organisation design is a separate workstream.",
      },
      {
        question: "How do you align stakeholders across multiple functions during the design?",
        answer:
          "Week one includes a cross-functional alignment workshop. The design is reviewed with representatives from each function in weeks two and three before sign-off in week four.",
      },
      {
        question: "Can the design cover a specific platform such as SAP or Oracle?",
        answer:
          "Yes. The DigitalQatalyst team designs to your target platform. Platform-specific expertise is confirmed during the scoping call.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team with your assessment findings or a summary of the operational improvements you need to achieve. They will confirm the cross-functional stakeholders to engage from day one.",
      },
    ],
    audience: "COOs, Chief of Staff, Strategy Directors, and heads of Transformation",
    industryRelevance:
      "Large organisations redesigning their enterprise operating model, improving cross-functional visibility, or preparing for an ERP reconfiguration programme",
    businessImpact:
      "Reduces the planning misalignment and coordination failures that slow enterprise execution by grounding technology changes in redesigned operational processes.",
    tags: ["enterprise-operations", "operating-model-design", "cross-functional-process"],
  },

  81: {
    description:
      "A four-week AI design engagement that identifies where AI can improve enterprise operational decision-making, including demand forecasting, resource optimisation, and operational risk detection, with responsible design and governance specifications for each validated use case.",
    positioning:
      "Design AI capabilities that improve enterprise operational decisions, not just automate them.",
    features: [
      "Enterprise AI use-case discovery focused on operational decision support: demand forecasting, capacity planning, supply chain risk, and performance anomaly detection",
      "Data landscape assessment evaluating whether enterprise data sources have the quality and accessibility AI models require",
      "Responsible AI framework design including bias testing approach, human oversight requirements, and explainability standards for enterprise decision contexts",
      "Multi-system integration specification mapping how AI outputs feed into ERP, planning, and operational reporting platforms",
    ],
    timelineMilestones: [
      "Week 1: Enterprise AI opportunity workshops, data landscape review, and responsible AI scoping",
      "Week 2: Use-case scoring, feasibility assessment, and data readiness gaps identified",
      "Week 3: AI workflow design, integration architecture, and governance specification",
      "Week 4: Specification review, executive sign-off, and build-ready handover",
    ],
    deliverables: [
      {
        title: "Enterprise AI Use-Case Assessment",
        description:
          "Scored evaluation of AI opportunities across enterprise operational functions, ranked by strategic impact, data readiness, and responsible AI risk profile.",
      },
      {
        title: "Data Readiness and Architecture Report",
        description:
          "Assessment of enterprise data quality, accessibility, and lineage requirements for the prioritised AI use cases, with remediation steps for gaps.",
      },
      {
        title: "Responsible AI Framework",
        description:
          "Governance principles, bias testing approach, explainability requirements, and human oversight rules designed for your enterprise operational decision context.",
      },
      {
        title: "AI Integration and Workflow Specifications",
        description:
          "Detailed design for how AI outputs integrate with ERP, planning, and reporting systems, with data flow diagrams, API contracts, and monitoring requirements.",
      },
    ],
    packageHighlights: [
      "Enterprise-specific responsible AI framework, not a generic policy document",
      "Multi-system integration designed from the start so AI outputs actually reach decision-makers",
      "Data readiness assessed before any build commitment is made",
    ],
    faqIntro: "Questions about designing AI for enterprise operational decision-making.",
    faqs: [
      {
        question: "Which enterprise AI use cases tend to deliver the most operational value?",
        answer:
          "Demand forecasting, supply chain risk detection, capacity optimisation, and operational anomaly alerting are consistently high-value. The DigitalQatalyst team validates which apply to your operational context.",
      },
      {
        question: "How do you handle AI explainability for enterprise decisions?",
        answer:
          "Explainability requirements are defined in the responsible AI framework for each use case. Where decisions affect employees, suppliers, or customers, the framework specifies how explanations are generated and made available.",
      },
      {
        question: "Our enterprise data is spread across multiple ERPs and data warehouses. Can AI still work?",
        answer:
          "The data readiness report maps exactly what is available, where quality issues exist, and what integration work is needed. Some use cases can proceed with targeted data remediation; others may need to wait.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team with your enterprise operational priorities. They will confirm the use-case discovery scope and the stakeholders to involve in week one.",
      },
    ],
    audience: "COOs, Chief of Staff, Strategy Directors, and heads of Transformation",
    industryRelevance:
      "Large enterprises in manufacturing, retail, financial services, and logistics where AI-driven operational forecasting and risk detection can improve planning accuracy and reduce operational losses",
    businessImpact:
      "Reduces planning inaccuracy and operational risk exposure by designing AI capabilities that give enterprise decision-makers earlier, more reliable signals on demand, capacity, and supply chain risk.",
    tags: ["enterprise-operations", "operational-ai", "demand-forecasting"],
  },

  82: {
    description:
      "A twelve-week programme that configures, integrates, tests, and launches the enterprise operational capabilities needed to improve cross-functional coordination, planning visibility, and execution discipline across your business.",
    positioning:
      "Implement the enterprise operational technology changes that deliver coordination, visibility, and execution improvements your leadership can measure.",
    features: [
      "ERP and operational platform configuration aligned to approved process designs, covering planning, performance, and operational reporting modules",
      "Cross-system integration development connecting ERP, data warehouse, and operational dashboards so decision-makers see a consistent view",
      "Enterprise change and adoption programme with stakeholder communications, manager briefings, and end-user training across affected functions",
      "Go-live control framework including rollback procedures, hypercare support, and a post-launch performance baseline",
    ],
    timelineMilestones: [
      "Weeks 1-2: Environment setup, data migration scoping, and sprint planning with cross-functional leads",
      "Weeks 3-8: Platform configuration, integration builds, and iterative review with business stakeholders",
      "Weeks 9-10: User acceptance testing across affected functions and defect resolution",
      "Weeks 11-12: Controlled go-live, hypercare support, and performance baseline capture",
    ],
    deliverables: [
      {
        title: "Configured Enterprise Operational Platform",
        description:
          "ERP and operational system modules live in production, configured to the approved specification and accepted by cross-functional business owners.",
      },
      {
        title: "Integrated Operational Data Flows",
        description:
          "Tested and documented connections between ERP, data warehouse, and operational dashboards, delivering a consistent enterprise view of performance.",
      },
      {
        title: "User Acceptance Test Evidence",
        description:
          "Executed test scripts covering cross-functional operational scenarios, with defect log, resolution record, and business sign-off documentation.",
      },
      {
        title: "Post-Launch Performance Baseline",
        description:
          "Measurement of planning cycle time, reporting accuracy, and operational visibility metrics taken at go-live to establish the improvement baseline.",
      },
    ],
    packageHighlights: [
      "Cross-functional change programme included, not just technical configuration",
      "Go-live control framework with rollback procedures reduces risk during launch",
      "Post-launch baseline captured so business benefit can be measured",
    ],
    faqIntro: "Questions about the Enterprise Operations deployment engagement.",
    faqs: [
      {
        question: "How do you manage cross-functional stakeholder alignment during a twelve-week build?",
        answer:
          "The sprint plan includes fortnightly review sessions with cross-functional business owners. Change impact is tracked and communicated as configuration decisions are made.",
      },
      {
        question: "What if our ERP does not support the configuration changes in the design?",
        answer:
          "Weeks one to two include a technical feasibility review. Any gaps between the design and platform capability are surfaced early with options: alternative configuration, middleware, or design adjustment.",
      },
      {
        question: "How do you handle data migration from legacy operational systems?",
        answer:
          "Data migration scope is confirmed in weeks one to two. The DigitalQatalyst team designs the migration approach, validates data quality, and runs reconciliation checks before go-live.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your approved design specification and the DigitalQatalyst team will confirm environment access, migration scope, and the sprint-one schedule with your cross-functional leads.",
      },
    ],
    audience: "COOs, Chief of Staff, Strategy Directors, and heads of Transformation",
    industryRelevance:
      "Large enterprises undertaking ERP reconfiguration, operational dashboard implementation, or cross-functional process standardisation programmes",
    businessImpact:
      "Delivers measurable improvements in planning cycle time, reporting accuracy, and cross-functional coordination within twelve weeks, with a performance baseline to evidence the business case.",
    tags: ["enterprise-operations", "erp-configuration", "operational-programme"],
  },

  83: {
    description:
      "A twelve-week engagement that deploys AI decision-support capabilities into your enterprise operational environment, including demand forecasting models, supply chain risk detection, and operational anomaly alerting, with governance controls and executive visibility built in from day one.",
    positioning:
      "Put AI-driven decision support into your enterprise operational workflows, with the governance and accuracy monitoring that enterprise risk requires.",
    features: [
      "Demand forecasting model deployment integrated into your planning system so forecasts update automatically from live operational data",
      "Supply chain and operational risk detection with configurable alert thresholds and escalation routing to the right operational owners",
      "AI decision explainability built into every model output so operational managers understand why the AI recommendation was generated",
      "Executive AI governance dashboard tracking model performance, override rates, and decision outcomes across enterprise functions",
    ],
    timelineMilestones: [
      "Weeks 1-3: Data pipeline configuration, model setup, and governance framework activation",
      "Weeks 4-7: Pilot deployment with business stakeholders, accuracy calibration, and threshold tuning",
      "Weeks 8-10: Production rollout across target functions, integration testing, and manager enablement",
      "Weeks 11-12: Performance baseline review, governance dashboard handover, and operational sign-off",
    ],
    deliverables: [
      {
        title: "Deployed Forecasting and Risk Detection Models",
        description:
          "AI models running in production and integrated into your planning and operational systems, validated against agreed accuracy thresholds during the pilot phase.",
      },
      {
        title: "Operational Risk Alert Configuration",
        description:
          "Alert rules, escalation routing, and notification templates configured for supply chain and operational risk scenarios, tested against historical data before go-live.",
      },
      {
        title: "AI Explainability Layer",
        description:
          "Explanation outputs accompanying every AI recommendation, formatted for the operational managers who will act on or override them.",
      },
      {
        title: "Executive AI Governance Dashboard",
        description:
          "Live view of model accuracy, override rates, alert volumes, and decision outcomes across enterprise functions, handed over with trained dashboard administrators.",
      },
    ],
    packageHighlights: [
      "Pilot-first deployment validates accuracy in your operational context before enterprise rollout",
      "Explainability built into every model output so managers can make informed decisions",
      "Executive governance dashboard included so AI performance is visible to leadership",
    ],
    faqIntro: "Questions about deploying AI decision support into enterprise operations.",
    faqs: [
      {
        question: "How do you validate forecasting accuracy before full production rollout?",
        answer:
          "During the pilot phase, forecasts are run against historical data and compared to actual outcomes. The DigitalQatalyst team sets accuracy targets at kickoff and does not proceed to full rollout until they are met.",
      },
      {
        question: "What if enterprise leaders override AI recommendations frequently?",
        answer:
          "Override rates are tracked in the governance dashboard. High override rates trigger a review of confidence thresholds and model assumptions with the DigitalQatalyst team.",
      },
      {
        question: "How does the AI handle unexpected events that fall outside its training data?",
        answer:
          "Model confidence scores drop for out-of-distribution scenarios, triggering human review rather than automated action. The governance framework defines the escalation path for these situations.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your AI design specifications and data pipeline documentation with the DigitalQatalyst team. They will confirm model configuration prerequisites and the pilot cohort before work begins.",
      },
    ],
    audience: "COOs, Chief of Staff, Strategy Directors, and heads of Transformation",
    industryRelevance:
      "Large enterprises in manufacturing, retail, logistics, and financial services where AI-driven forecasting and risk detection can reduce planning errors and operational losses",
    businessImpact:
      "Improves enterprise planning accuracy, reduces undetected supply chain risk, and cuts the time from operational signal to management decision by embedding AI into the workflows leaders already use.",
    tags: ["enterprise-operations", "forecasting-ai", "supply-chain-risk"],
  },

  84: {
    description:
      "Ongoing managed operations for your enterprise operational platforms and AI capabilities, covering system health monitoring, model performance tracking, operational reporting, and continuous improvement to keep your enterprise operating model performing as your business evolves.",
    positioning:
      "Keep your enterprise operational systems and AI capabilities running at the performance levels your business depends on.",
    features: [
      "Enterprise platform health monitoring with SLA-backed response for system degradation, integration failures, and data quality issues",
      "AI model performance tracking with monthly accuracy reviews and threshold recalibration to prevent forecast drift over time",
      "Monthly operational performance report covering system uptime, data quality, AI accuracy, and a summary of changes made",
      "Proactive change management for ERP updates, data model changes, and new operational requirements from business functions",
    ],
    timelineMilestones: [
      "Month 1: Platform and AI estate handover, monitoring configuration, and SLA baseline agreement",
      "Months 2-3: First full reporting cycle, model accuracy review, and improvement backlog prioritisation",
      "Ongoing: Monthly performance reports, quarterly AI accuracy reviews, and annual enterprise roadmap planning",
    ],
    deliverables: [
      {
        title: "Monthly Enterprise Operations Report",
        description:
          "System uptime, data quality metrics, AI model accuracy, and SLA adherence across your enterprise operational estate, with recommended actions.",
      },
      {
        title: "AI Model Performance Review",
        description:
          "Monthly accuracy and drift analysis for each AI model in production, with threshold recalibration recommendations and retraining triggers where needed.",
      },
      {
        title: "Change Impact Assessments",
        description:
          "Assessment of every planned ERP update, data model change, or operational process change for impact on platform configuration and AI model performance.",
      },
      {
        title: "Quarterly Enterprise Roadmap Review",
        description:
          "A structured session with the DigitalQatalyst team to review operational performance trends, prioritise improvement initiatives, and align the backlog to business priorities.",
      },
    ],
    packageHighlights: [
      "AI model accuracy tracked monthly and recalibrated before drift affects operational decisions",
      "Proactive ERP change impact assessment prevents unexpected system breakage",
      "Quarterly roadmap reviews keep the enterprise operational estate aligned to business strategy",
    ],
    faqIntro: "Questions about the Enterprise Operations managed service.",
    faqs: [
      {
        question: "What does AI model maintenance involve on an ongoing basis?",
        answer:
          "Monthly accuracy reviews compare model outputs against actual outcomes. When accuracy drifts below threshold, the DigitalQatalyst team initiates recalibration or retraining and documents the change.",
      },
      {
        question: "How do you handle major ERP upgrades under the managed service?",
        answer:
          "The DigitalQatalyst team assesses every planned ERP upgrade for impact on configuration, integrations, and AI data pipelines, providing a remediation plan before the upgrade lands.",
      },
      {
        question: "Can we add new operational capabilities under the managed service?",
        answer:
          "Minor enhancements are included within capacity. Significant new capabilities are scoped as separate engagements and discussed in the quarterly roadmap review.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team with your current platform and AI estate documentation. They will complete a health baseline before the first SLA period begins.",
      },
    ],
    audience: "COOs, Chief of Staff, Strategy Directors, and heads of Transformation",
    industryRelevance:
      "Large enterprises with live enterprise operational platforms and AI capabilities that need ongoing expert monitoring, model governance, and proactive maintenance",
    businessImpact:
      "Prevents the performance degradation that erodes operational benefits over time by keeping enterprise systems healthy, AI models accurate, and configurations aligned to how the business operates.",
    tags: ["enterprise-operations", "managed-service", "ai-model-governance"],
  },

  // -----------------------------------------------------------------------
  // ENTERPRISE RESOURCE PLANNING (ids 91-96)
  // -----------------------------------------------------------------------

  91: {
    description:
      "A one-week assessment of your ERP environment that maps process coverage gaps, data inconsistencies, and integration weaknesses across finance, procurement, and HR, returning a prioritised remediation roadmap your finance and operations leaders can act on.",
    positioning:
      "Understand exactly where your ERP is creating manual workarounds and data quality issues, and get a sequenced plan to fix them.",
    features: [
      "ERP process coverage review across finance, procurement, inventory, and HR modules to identify gaps driving manual workarounds",
      "Data quality and consistency assessment across master data, transactional records, and reporting outputs",
      "Integration gap analysis mapping where ERP data fails to flow accurately to downstream systems, including payroll, CRM, and reporting",
      "Prioritised remediation roadmap with effort estimates, data risk flags, and recommended sequencing for each improvement",
    ],
    timelineMilestones: [
      "Days 1-2: ERP module walkthroughs, stakeholder interviews, and data extract review",
      "Days 3-4: Gap scoring, integration analysis, and roadmap drafting",
      "Day 5: Findings playback with prioritised roadmap and recommended next steps",
    ],
    deliverables: [
      {
        title: "ERP Process Coverage Assessment",
        description:
          "Module-by-module review of finance, procurement, HR, and inventory processes showing where ERP covers the business need and where manual workarounds have filled the gaps.",
      },
      {
        title: "Data Quality Report",
        description:
          "Assessment of master data accuracy, transactional data completeness, and reporting consistency, with specific data domains flagged for remediation.",
      },
      {
        title: "Integration Gap Analysis",
        description:
          "Documented review of data flows between ERP and connected systems, with gaps, duplications, and reconciliation failures identified and ranked by financial risk.",
      },
      {
        title: "Prioritised Remediation Roadmap",
        description:
          "Sequenced improvement plan covering ERP configuration, data remediation, and integration fixes, with effort estimates and ownership assignments.",
      },
    ],
    packageHighlights: [
      "Fixed-scope, no-obligation assessment completed within one week",
      "Finance, procurement, and HR modules assessed in an integrated review, not separately",
      "Data risk flags included so finance leaders understand where ERP gaps create reporting exposure",
    ],
    faqIntro: "Questions about the ERP assessment engagement.",
    faqs: [
      {
        question: "Which ERP platforms does the assessment cover?",
        answer:
          "SAP, Oracle, Microsoft Dynamics 365, and Sage are the most common. The DigitalQatalyst team confirms platform compatibility during the scoping call.",
      },
      {
        question: "Can you assess an ERP that is heavily customised?",
        answer:
          "Yes. Customised ERPs are a common source of the gaps this assessment finds. The review covers both standard module gaps and the technical debt from custom development.",
      },
      {
        question: "Do you need access to the ERP system itself?",
        answer:
          "Read-only access to the system and sample data extracts is helpful. The assessment can also run on documentation and stakeholder interviews if system access is restricted.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call with the DigitalQatalyst team. They will confirm the modules in scope, the stakeholders to involve, and any documentation or data extracts to prepare in advance.",
      },
    ],
    audience: "CFOs, Finance Directors, Procurement Directors, and HR leaders",
    industryRelevance:
      "Organisations running SAP, Oracle, Microsoft Dynamics, or Sage that are experiencing manual workarounds, data quality issues, or reconciliation failures between ERP and downstream systems",
    businessImpact:
      "Identifies the ERP gaps creating the highest financial reporting risk, manual effort, and data inconsistency, giving finance and operations leadership a costed plan to address them.",
    tags: ["erp", "finance-systems", "data-quality"],
  },

  92: {
    description:
      "A four-week design engagement that translates your ERP improvement priorities into redesigned process flows, data model specifications, and configuration blueprints your implementation team can build against, covering finance, procurement, and HR modules.",
    positioning:
      "Design your ERP improvements properly before configuration begins: fewer change requests, fewer reconciliation failures, and a system that reflects how your business actually runs.",
    features: [
      "Process redesign for ERP-supported functions: purchase-to-pay, order-to-cash, record-to-report, and hire-to-retire workflows",
      "Master data model design covering chart of accounts, cost centre structure, supplier master, and employee data standards",
      "ERP configuration specification defining module settings, approval workflows, validation rules, and reporting dimensions",
      "Integration architecture for connections between ERP and payroll, CRM, data warehouse, and other dependent systems",
    ],
    timelineMilestones: [
      "Week 1: Process deep-dives across finance, procurement, and HR with module owners",
      "Week 2: To-be process design and master data model specification",
      "Week 3: ERP configuration specification and integration architecture",
      "Week 4: Design review, sign-off with finance and IT, and build-ready handover",
    ],
    deliverables: [
      {
        title: "ERP Process Design Documents",
        description:
          "To-be process flows for each in-scope ERP module covering every transaction type, approval path, exception, and reporting touchpoint.",
      },
      {
        title: "Master Data Standards Specification",
        description:
          "Defined standards for chart of accounts, cost centres, supplier master, and employee data, with ownership rules and data quality criteria.",
      },
      {
        title: "ERP Configuration Blueprint",
        description:
          "Module-level configuration specifications covering settings, approval workflows, validation rules, and reporting dimensions your ERP team can implement directly.",
      },
      {
        title: "Integration Architecture Document",
        description:
          "Data flow diagrams and API specifications for connections between ERP and payroll, CRM, data warehouse, and other dependent systems.",
      },
    ],
    packageHighlights: [
      "Master data model designed alongside process, preventing the data quality issues that derail ERP go-lives",
      "Configuration blueprint formatted for direct use by your ERP implementation team",
      "Integration architecture included so downstream systems are part of the design from the start",
    ],
    faqIntro: "Questions about the ERP design engagement.",
    faqs: [
      {
        question: "How many ERP modules does the design engagement cover?",
        answer:
          "Scope is agreed at the start of week one. Most engagements cover three to five modules. Finance, procurement, and HR are the most common combination.",
      },
      {
        question: "Does this produce artefacts that an SAP or Oracle implementer can use directly?",
        answer:
          "Yes. Configuration blueprints are produced in a format aligned to the conventions of your target platform. The DigitalQatalyst team confirms the artefact format at kickoff.",
      },
      {
        question: "Can you help with the chart of accounts redesign specifically?",
        answer:
          "Yes. Chart of accounts and cost centre structure redesign is a standard workstream within the master data specification deliverable.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your ERP assessment findings or a summary of the improvements needed and the DigitalQatalyst team will confirm scope, module coverage, and the week-one workshop schedule.",
      },
    ],
    audience: "CFOs, Finance Directors, Procurement Directors, and HR leaders",
    industryRelevance:
      "Organisations planning ERP module reconfiguration, a system upgrade, or a consolidation from multiple legacy finance and procurement systems",
    businessImpact:
      "Reduces ERP implementation rework and post-go-live reconciliation failures by resolving process design, master data, and integration decisions before configuration begins.",
    tags: ["erp", "process-design", "master-data"],
  },

  93: {
    description:
      "A four-week AI design engagement that identifies where AI can improve ERP-driven decision-making, from automated invoice matching and cash flow forecasting to procurement risk detection, with responsible design and governance specifications for each validated use case.",
    positioning:
      "Design the AI capabilities that make your ERP data work harder for finance, procurement, and HR decision-makers.",
    features: [
      "ERP-specific AI use-case discovery covering accounts payable automation, cash flow forecasting, spend anomaly detection, and workforce planning",
      "Data quality and lineage assessment of ERP data to confirm it meets the volume and accuracy requirements for AI model training",
      "Responsible AI design for finance-critical use cases: auditability requirements, control frameworks, and exception routing before any automated action is taken",
      "Specification for AI integration with ERP modules, covering API connections, data transformation rules, and model output display within ERP workflows",
    ],
    timelineMilestones: [
      "Week 1: AI use-case workshops with finance, procurement, and HR stakeholders, and ERP data landscape review",
      "Week 2: Use-case scoring, data readiness assessment, and responsible AI framing for finance contexts",
      "Week 3: AI workflow design, ERP integration specification, and control framework design",
      "Week 4: Specification review, finance and IT sign-off, and build-ready handover",
    ],
    deliverables: [
      {
        title: "ERP AI Use-Case Assessment",
        description:
          "Scored list of AI opportunities across finance, procurement, and HR, ranked by financial impact, data readiness, and audit risk.",
      },
      {
        title: "ERP Data Readiness Report",
        description:
          "Assessment of transactional and master data quality, volume, and lineage against the requirements for each AI candidate, with remediation steps for gaps.",
      },
      {
        title: "Responsible AI Specifications for Finance Contexts",
        description:
          "Control framework and audit trail requirements for each AI use case, designed to satisfy finance audit, SOX, and regulatory scrutiny.",
      },
      {
        title: "ERP AI Integration Specifications",
        description:
          "Detailed API and data flow designs for embedding AI recommendations, alerts, and automated actions within ERP workflows.",
      },
    ],
    packageHighlights: [
      "Finance-specific control framework designed for every AI use case, not a generic responsible AI checklist",
      "ERP data readiness assessed before build investment is committed",
      "Auditability requirements designed in from the start to satisfy finance audit and regulatory review",
    ],
    faqIntro: "Questions about designing AI capabilities for ERP environments.",
    faqs: [
      {
        question: "Which AI use cases are most mature for ERP environments?",
        answer:
          "Accounts payable matching, invoice exception detection, cash flow forecasting, and spend category classification are the most commonly deployed. The DigitalQatalyst team validates which are appropriate for your ERP data and processes.",
      },
      {
        question: "How do you address the audit trail requirements for AI-driven financial decisions?",
        answer:
          "Every AI action in a finance context is designed with a full audit record: the input data, model version, output, confidence score, and any human review action. This is specified in the control framework deliverable.",
      },
      {
        question: "Can AI work with the data quality we currently have in our ERP?",
        answer:
          "The data readiness report will tell you clearly. Some use cases are feasible with targeted remediation; others require a data quality programme first. The DigitalQatalyst team will not recommend AI deployment on data that does not meet minimum quality thresholds.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team with your ERP platform details and the finance processes you are considering for AI. They will confirm the use-case discovery scope and week-one workshop participants.",
      },
    ],
    audience: "CFOs, Finance Directors, Procurement Directors, and HR leaders",
    industryRelevance:
      "Organisations with SAP, Oracle, or Dynamics environments where finance and procurement data volumes are large enough for AI to detect patterns that manual review misses",
    businessImpact:
      "Extends the value of ERP investment by applying AI to the high-volume transactional processes, such as invoice matching and cash flow forecasting, where speed and accuracy directly affect financial performance.",
    tags: ["erp", "finance-ai", "accounts-payable-automation"],
  },

  94: {
    description:
      "A twelve-week ERP implementation that configures, integrates, tests, and launches the module improvements and data corrections identified in your design phase, with structured data migration, business user testing, and handover to your finance and IT teams.",
    positioning:
      "Get your ERP configured correctly, your data migrated cleanly, and your finance and procurement teams live on improved processes within twelve weeks.",
    features: [
      "ERP module configuration aligned to approved process designs and the master data standards agreed in the design phase",
      "Data migration and cleansing for master data and transactional records, with reconciliation checks before any data is loaded to production",
      "Integration development connecting ERP to payroll, CRM, data warehouse, and other dependent systems, tested against agreed data flow specifications",
      "Finance and procurement user acceptance testing with real transaction scenarios and month-end close rehearsal before go-live",
    ],
    timelineMilestones: [
      "Weeks 1-2: Environment preparation, data migration planning, and sprint kickoff with finance and IT leads",
      "Weeks 3-8: ERP configuration, integration builds, and data migration runs in iterative sprints",
      "Weeks 9-10: User acceptance testing with finance and procurement teams, including month-end close simulation",
      "Weeks 11-12: Controlled go-live with parallel run, hypercare support, and handover documentation",
    ],
    deliverables: [
      {
        title: "Configured ERP Modules",
        description:
          "Finance, procurement, and HR modules live in production, configured to the approved specification and accepted by business module owners.",
      },
      {
        title: "Migrated and Reconciled Data",
        description:
          "Master data and opening balances loaded to production with reconciliation evidence confirming accuracy against the source system.",
      },
      {
        title: "Integration Connections with Test Evidence",
        description:
          "Functioning and documented data flows between ERP and connected systems, with executed test scripts and business sign-off records.",
      },
      {
        title: "Go-Live Operations Pack",
        description:
          "Cutover runbook, rollback procedure, period-end close checklist, and administrator guide for your finance and IT teams to manage the post-go-live environment.",
      },
    ],
    packageHighlights: [
      "Month-end close rehearsal in user acceptance testing confirms finance teams are ready before go-live",
      "Parallel run period included to reduce financial reporting risk at cutover",
      "Go-live operations pack hands operational control to your finance and IT teams cleanly",
    ],
    faqIntro: "Questions about the ERP deployment engagement.",
    faqs: [
      {
        question: "How do you handle the cutover from our current ERP to the new configuration?",
        answer:
          "The DigitalQatalyst team designs a detailed cutover plan in weeks eleven to twelve, including a parallel run period, a reconciliation checklist, and a rollback procedure if issues arise post-go-live.",
      },
      {
        question: "What if data quality issues are discovered during migration?",
        answer:
          "Migration runs in weeks three to eight surface data quality issues before the production load. The DigitalQatalyst team works with your data owners to resolve issues and re-run migration before user acceptance testing begins.",
      },
      {
        question: "Can we run the ERP deployment while the business continues normal operations?",
        answer:
          "Yes. The programme is designed to run alongside business operations. The cutover is timed to minimise disruption to financial period-end activities.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your approved ERP design specification and the DigitalQatalyst team will confirm environment access, data migration scope, and the sprint-one schedule with your finance and IT leads.",
      },
    ],
    audience: "CFOs, Finance Directors, Procurement Directors, and HR leaders",
    industryRelevance:
      "Organisations undertaking ERP module reconfiguration, a system upgrade, or consolidation from multiple finance and procurement platforms into a single ERP environment",
    businessImpact:
      "Delivers correctly configured ERP modules with clean migrated data within twelve weeks, reducing the reconciliation effort and reporting errors that persist when ERP programmes are poorly executed.",
    tags: ["erp", "erp-implementation", "finance-operations"],
  },

  95: {
    description:
      "A twelve-week engagement that deploys AI capabilities into your ERP environment, including automated invoice processing, cash flow forecasting, and spend anomaly detection, with finance-grade audit controls and monitoring active from the pilot phase.",
    positioning:
      "Deploy AI into your ERP with the audit trail, control framework, and accuracy monitoring your finance function requires.",
    features: [
      "Automated invoice matching and exception routing deployed within your ERP's accounts payable workflow, with confidence scoring and human-review queues",
      "Cash flow forecasting model integrated with your ERP data, generating rolling forecasts with variance explanations for your finance team",
      "Spend anomaly detection configured to flag procurement and expense transactions that fall outside policy or expected patterns",
      "Finance-grade audit logging for every AI action: input data, model version, output, confidence score, and reviewer decision recorded",
    ],
    timelineMilestones: [
      "Weeks 1-3: Governance setup, ERP data pipeline configuration, and pilot cohort selection",
      "Weeks 4-7: Pilot deployment with accuracy monitoring, threshold calibration, and finance team feedback",
      "Weeks 8-10: Production rollout across finance and procurement functions, integration testing, and user enablement",
      "Weeks 11-12: Accuracy baseline, audit log review, monitoring handover, and sign-off",
    ],
    deliverables: [
      {
        title: "Deployed Invoice Matching Automation",
        description:
          "AI-powered three-way match running in your ERP accounts payable workflow, with agreed accuracy rates achieved during pilot before full production rollout.",
      },
      {
        title: "Cash Flow Forecasting Integration",
        description:
          "Rolling cash flow forecast generated from live ERP data, displayed within the finance team's planning environment with variance explanations.",
      },
      {
        title: "Spend Anomaly Detection Alerts",
        description:
          "Configured alert rules detecting policy breaches and spending pattern anomalies, routed to the appropriate procurement or finance approver.",
      },
      {
        title: "Finance-Grade Audit Log and Control Report",
        description:
          "Complete audit trail for every AI decision during the deployment period, reviewed against the control framework and cleared for finance audit.",
      },
    ],
    packageHighlights: [
      "Pilot phase validates invoice matching accuracy before full AP volume runs through the AI",
      "Finance-grade audit logging active from day one, covering every AI decision",
      "Cash flow forecasting includes variance explanations so finance teams can interrogate AI outputs",
    ],
    faqIntro: "Questions about deploying AI into ERP environments.",
    faqs: [
      {
        question: "What invoice matching accuracy rates can we expect?",
        answer:
          "Straight-through processing rates depend on invoice quality and supplier data consistency. The DigitalQatalyst team sets accuracy targets during the pilot and does not proceed to full rollout until they are met.",
      },
      {
        question: "How does AI cash flow forecasting work alongside our existing treasury models?",
        answer:
          "The AI forecast runs as a complementary input, not a replacement for treasury models. The integration design confirms how the two outputs are presented to the finance team.",
      },
      {
        question: "Can the AI be switched off for a specific invoice type or supplier without affecting everything else?",
        answer:
          "Yes. Inclusion rules are configured at a granular level so the finance team can exclude specific transaction types, suppliers, or currency categories from AI processing.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your AI design specifications and ERP environment details with the DigitalQatalyst team. They will confirm data pipeline prerequisites and the pilot cohort before work begins.",
      },
    ],
    audience: "CFOs, Finance Directors, Procurement Directors, and HR leaders",
    industryRelevance:
      "Finance and procurement functions in organisations with SAP, Oracle, or Dynamics ERP environments processing high volumes of supplier invoices, expenses, or procurement transactions",
    businessImpact:
      "Reduces accounts payable processing cost and cycle time, improves cash flow forecast accuracy, and catches spending policy breaches earlier, all while maintaining a complete audit trail for finance governance.",
    tags: ["erp", "accounts-payable-ai", "cash-flow-forecasting"],
  },

  96: {
    description:
      "Ongoing managed operations for your ERP environment and AI capabilities, covering system health monitoring, period-end support, data quality governance, and monthly performance reporting so your finance and procurement functions run without operational disruption.",
    positioning:
      "Keep your ERP and finance AI capabilities running reliably, with expert support for period-end close and proactive monitoring between reporting cycles.",
    features: [
      "ERP system health monitoring with SLA-backed alerting for performance degradation, integration failures, and data quality issues before they affect period-end close",
      "Period-end close support covering reconciliation checks, posting run oversight, and rapid issue resolution during month-end and quarter-end",
      "AI model accuracy monitoring with monthly reviews and recalibration to maintain invoice matching and forecasting performance as ERP data evolves",
      "Proactive ERP patch and upgrade management with impact assessment and testing before any change reaches your production environment",
    ],
    timelineMilestones: [
      "Month 1: ERP and AI estate handover, monitoring setup, and SLA baseline agreement",
      "Months 2-3: First full monitoring cycle, period-end support run, and AI accuracy review",
      "Ongoing: Monthly performance reports, quarterly AI accuracy reviews, and annual upgrade planning",
    ],
    deliverables: [
      {
        title: "Monthly ERP Health and AI Performance Report",
        description:
          "System uptime, integration health, data quality metrics, AI model accuracy, and SLA adherence, with recommended actions for the following month.",
      },
      {
        title: "Period-End Close Support Log",
        description:
          "Record of every issue identified and resolved during monthly and quarterly period-end close, with root cause and prevention measure for recurring issues.",
      },
      {
        title: "AI Model Accuracy Review",
        description:
          "Monthly comparison of invoice matching and forecasting accuracy against agreed thresholds, with recalibration actions taken and the next review date.",
      },
      {
        title: "ERP Change Impact Assessment",
        description:
          "Assessment of every planned ERP patch, upgrade, or configuration change for impact on processes, integrations, and AI data pipelines, with a test plan and implementation recommendation.",
      },
    ],
    packageHighlights: [
      "Period-end close support included as standard, not an additional call-off",
      "AI model accuracy reviewed monthly and recalibrated before drift affects financial reporting",
      "ERP patch impact assessments prevent unplanned disruption to finance operations",
    ],
    faqIntro: "Questions about the ERP managed service.",
    faqs: [
      {
        question: "What does period-end close support actually cover?",
        answer:
          "The DigitalQatalyst team is available during month-end and quarter-end windows to assist with reconciliation checks, posting run monitoring, and rapid resolution of system issues that arise during the close process.",
      },
      {
        question: "How do you manage ERP patches without disrupting production?",
        answer:
          "Every patch is assessed for impact, tested in a non-production environment, and approved by your finance IT lead before it is applied to production. Testing covers integration connections and AI data pipelines.",
      },
      {
        question: "What happens if an AI model starts producing inaccurate invoice matches?",
        answer:
          "The monthly accuracy review will identify the drift. The DigitalQatalyst team implements recalibration and, where necessary, initiates retraining. You are notified before any threshold breach affects your AP processing.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team with your current ERP and AI configuration documentation. They will complete a health baseline audit before the first SLA period begins.",
      },
    ],
    audience: "CFOs, Finance Directors, Procurement Directors, and HR leaders",
    industryRelevance:
      "Finance and procurement functions relying on SAP, Oracle, or Dynamics ERP environments that need expert monitoring, period-end support, and AI governance without expanding internal ERP headcount",
    businessImpact:
      "Prevents ERP performance issues and AI accuracy drift from disrupting financial reporting and period-end close, keeping finance operations running on schedule and audit-ready.",
    tags: ["erp", "managed-service", "finance-operations-support"],
  },
};
