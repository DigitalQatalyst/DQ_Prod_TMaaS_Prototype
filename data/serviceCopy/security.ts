import type { CollectionCopyOverrides } from "./types";

/**
 * Per-variant copy overrides for the SECURITY collection.
 * Keyed by variant id. See ./types.ts for the field contract and voice rules.
 */
export const securityCopy: CollectionCopyOverrides = {
  // ─── Governance, Risk & Compliance ───────────────────────────────────────

  85: {
    description:
      "Map your governance, risk, and compliance posture against the controls that matter most, and leave with a prioritised remediation plan your board can sign off.",
    positioning:
      "See where compliance gaps create real exposure, then fix the highest-risk ones first.",
    features: [
      "Control-by-control gap assessment against your chosen framework (ISO 27001, NIST CSF, SOC 2, or sector standard)",
      "Risk register scored by likelihood and business impact so investment targets the right areas",
      "Prioritised remediation roadmap with named owners, effort bands, and sequenced dependencies",
      "Board-ready executive summary translating technical exposure into business risk language",
    ],
    timelineMilestones: [
      "Days 1-2: Scope confirmation, framework alignment, and stakeholder interviews",
      "Days 3-4: Control evidence review, gap scoring, and risk register build",
      "Day 5: Findings playback, roadmap validation, and board summary delivery",
    ],
    deliverables: [
      {
        title: "Control gap assessment",
        description:
          "Every in-scope control rated against your target framework, with evidence reviewed and specific gaps documented for remediation.",
      },
      {
        title: "Scored risk register",
        description:
          "Risks ranked by likelihood and business impact so the highest-exposure items receive attention before lower-priority ones.",
      },
      {
        title: "Prioritised remediation roadmap",
        description:
          "Sequenced actions with named owners, effort estimates, and dependencies your teams can execute against in the next quarter.",
      },
      {
        title: "Board-ready executive summary",
        description:
          "A concise read on current exposure, priority actions, and recommended investment framed for non-technical stakeholders.",
      },
    ],
    packageHighlights: [
      "Fixed-scope, no-obligation assessment completed within one week",
      "Framework-aligned to ISO 27001, NIST CSF, SOC 2, or your target standard",
      "Board-ready findings delivered before the engagement closes",
    ],
    faqIntro:
      "Common questions about the Governance, Risk and Compliance assessment.",
    faqs: [
      {
        question: "Which compliance frameworks do you assess against?",
        answer:
          "ISO 27001, NIST CSF, SOC 2 Type II, and sector-specific standards such as PCI DSS and HIPAA. The DigitalQatalyst team confirms the target framework during scoping.",
      },
      {
        question: "What access do you need to our systems?",
        answer:
          "The assessment runs on documentation, policy evidence, and stakeholder interviews. If read-only access to a specific tool would accelerate evidence collection, we agree the exact scope with your IT security team in advance -- it is never a requirement to proceed.",
      },
      {
        question: "How quickly will we see results?",
        answer:
          "The full assessment, scored risk register, and remediation roadmap are delivered within one week of the engagement starting.",
      },
      {
        question: "Can the roadmap feed directly into our next budget cycle?",
        answer:
          "Yes. The roadmap includes effort estimates and business impact scores formatted to support prioritisation conversations with finance and leadership.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will confirm scope, target framework, and stakeholders before any work begins.",
      },
    ],
    audience: "CISOs, risk and compliance officers, heads of internal audit, and legal and regulatory affairs leaders",
    industryRelevance:
      "Regulated organisations in financial services, healthcare, government, and any business preparing for certification or facing audit scrutiny",
    businessImpact:
      "Reduces audit findings and regulatory exposure by focusing remediation on the controls with the greatest risk, shortening the path to certification and strengthening board-level assurance.",
    tags: ["compliance", "risk-management", "GRC", "audit-readiness"],
  },

  86: {
    description:
      "Turn your compliance goals and risk appetite into a fully specified GRC operating model, with process designs, control architectures, and implementation blueprints your delivery teams can build against.",
    positioning:
      "A delivery-ready GRC blueprint: operating model, controls architecture, and integration specifications in four weeks.",
    features: [
      "GRC operating model design covering roles, accountabilities, escalation paths, and review cadences",
      "Control architecture specifying the controls, automation points, and tooling integrations to close priority gaps",
      "Process and workflow designs for risk identification, incident triage, and compliance reporting",
      "User-centred interface prototypes and adoption plan so teams actually use what is built",
    ],
    timelineMilestones: [
      "Week 1: Current-state review, requirements capture, and design principles",
      "Weeks 2-3: Operating model design, control architecture, and workflow prototyping",
      "Week 4: Specification sign-off, integration requirements, and build handover package",
    ],
    deliverables: [
      {
        title: "GRC operating model",
        description:
          "Defined roles, accountabilities, governance cadences, and escalation paths for ongoing risk and compliance operations.",
      },
      {
        title: "Controls architecture",
        description:
          "Specified controls mapped to gaps from assessment, with automation points, tooling choices, and integration requirements documented.",
      },
      {
        title: "Process and workflow designs",
        description:
          "End-to-end workflow diagrams and process specifications for risk identification, compliance monitoring, and incident response.",
      },
      {
        title: "Build handover package",
        description:
          "Complete implementation specifications, data requirements, acceptance criteria, and an adoption plan ready for a deployment team.",
      },
    ],
    packageHighlights: [
      "Operating model and controls architecture tailored to your risk profile",
      "Build-ready specifications so deployment begins without rework",
      "Adoption plan included to accelerate stakeholder uptake",
    ],
    faqIntro:
      "Key questions about the Governance, Risk and Compliance design engagement.",
    faqs: [
      {
        question: "Do we need to have completed an assessment first?",
        answer:
          "An assessment is strongly recommended as it informs the design priorities. If you have existing audit findings or a gap analysis, the DigitalQatalyst team can use those as the starting point.",
      },
      {
        question: "Which GRC platforms do you design for?",
        answer:
          "We design platform-agnostic specifications and can align to ServiceNow GRC, Microsoft Purview, Archer, or your preferred tooling. Platform selection is confirmed during week one.",
      },
      {
        question: "How involved does our team need to be?",
        answer:
          "We run focused workshops in weeks one and three. Between sessions your team reviews drafts and provides feedback. We handle the documentation and specification work.",
      },
      {
        question: "What happens after the design is signed off?",
        answer:
          "The handover package goes directly to a deployment team, either your internal resources or the DigitalQatalyst team through a Deploy engagement.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call. The DigitalQatalyst team will review your objectives and any existing assessment findings before the engagement kicks off.",
      },
    ],
    audience: "CISOs, risk and compliance officers, heads of internal audit, and legal and regulatory affairs leaders",
    industryRelevance:
      "Regulated organisations in financial services, healthcare, government, and any business preparing for certification or facing audit scrutiny",
    businessImpact:
      "Accelerates path to a functioning GRC capability by delivering build-ready specifications that prevent costly rework during deployment, reducing the time from design to live operations.",
    tags: ["compliance", "risk-management", "GRC", "operating-model"],
  },

  87: {
    description:
      "Identify where AI can strengthen your GRC capability, validate those use cases against data, regulatory, and ethical requirements, and produce deployment-ready specifications before any build investment is committed.",
    positioning:
      "AI-powered GRC starts here: validated use cases, responsible workflows, and specifications ready to build.",
    features: [
      "AI use-case identification for risk detection, compliance monitoring, and anomaly alerting within your GRC context",
      "Responsible AI assessment covering data quality, bias risk, regulatory constraints, and explainability requirements",
      "Workflow designs specifying how AI-generated insights integrate into existing compliance and risk processes",
      "Deployment specifications including model requirements, guardrails, human-in-the-loop controls, and monitoring criteria",
    ],
    timelineMilestones: [
      "Week 1: AI opportunity mapping, data landscape review, and regulatory constraint analysis",
      "Weeks 2-3: Use-case validation workshops, responsible AI assessment, and workflow design",
      "Week 4: Deployment specifications, guardrails definition, and design sign-off",
    ],
    deliverables: [
      {
        title: "AI use-case register",
        description:
          "Validated list of AI applications for GRC, each assessed for feasibility, data readiness, regulatory compatibility, and expected value.",
      },
      {
        title: "Responsible AI assessment",
        description:
          "Documented findings on bias risk, data quality, explainability obligations, and regulatory constraints for each prioritised use case.",
      },
      {
        title: "AI workflow designs",
        description:
          "Process specifications showing how AI outputs integrate into risk identification, compliance monitoring, and incident escalation workflows.",
      },
      {
        title: "Deployment specification package",
        description:
          "Technical and governance requirements for each use case: model criteria, human-in-the-loop controls, monitoring thresholds, and audit logging.",
      },
    ],
    packageHighlights: [
      "Use cases validated before any build budget is committed",
      "Responsible AI assessment built into every specification",
      "Guardrails and human-in-the-loop controls defined from the outset",
    ],
    faqIntro:
      "Key questions about AI design for Governance, Risk and Compliance.",
    faqs: [
      {
        question: "What kinds of AI use cases typically emerge in GRC?",
        answer:
          "Common validated use cases include continuous control monitoring, anomaly detection in transaction data, automated regulatory change alerts, and AI-assisted policy review. The DigitalQatalyst team works with your context to identify which apply.",
      },
      {
        question: "How do you handle regulatory constraints on AI in compliance functions?",
        answer:
          "The responsible AI assessment covers applicable regulations, including explainability requirements under GDPR, sector-specific AI rules, and your own internal AI policy. Constraints are documented in the deployment spec.",
      },
      {
        question: "What data do you need access to during the design?",
        answer:
          "Primarily data inventories, schema documentation, and sample datasets for feasibility assessment. No production data is required; the design phase works from specifications.",
      },
      {
        question: "Can we run this without a prior GRC assessment?",
        answer:
          "Yes, though an assessment or existing gap analysis makes the use-case prioritisation more precise. The DigitalQatalyst team will review available materials during scoping.",
      },
      {
        question: "How do we get started?",
        answer:
          "Contact the DigitalQatalyst team to arrange a scoping call covering your current GRC tooling, data landscape, and AI objectives.",
      },
    ],
    audience: "CISOs, risk and compliance officers, heads of internal audit, and legal and regulatory affairs leaders",
    industryRelevance:
      "Regulated organisations in financial services, healthcare, government, and any business preparing for certification or facing audit scrutiny",
    businessImpact:
      "Prevents wasted AI build investment by validating use cases and addressing responsible AI requirements before any code is written, reducing rework risk and accelerating time to production.",
    tags: ["AI-governance", "responsible-AI", "GRC", "compliance-automation"],
  },

  88: {
    description:
      "Configure, integrate, test, and launch your GRC capability across the agreed scope, with staged testing and signed acceptance criteria at every phase and a controlled handover that leaves your operations team ready to run.",
    positioning:
      "From design to live GRC operations: configured controls, integrated systems, and a tested, handed-over capability.",
    features: [
      "End-to-end configuration of your GRC platform against agreed control requirements and operating model",
      "System integrations connecting risk, compliance, and audit data sources so reporting is automated and accurate",
      "Three-phase testing programme covering functional, integration, and user acceptance before go-live",
      "Controlled launch with runbooks, training, and a hypercare period so operations teams are fully prepared",
    ],
    timelineMilestones: [
      "Weeks 1-3: Environment setup, configuration, and initial integration build",
      "Weeks 4-8: Integration testing, control validation, and UAT with compliance and audit teams",
      "Weeks 9-11: Pilot launch, issue resolution, and runbook finalisation",
      "Week 12: Full go-live, hypercare activation, and operational handover",
    ],
    deliverables: [
      {
        title: "Configured GRC platform",
        description:
          "Your chosen GRC tooling fully configured to your control framework, risk taxonomy, and reporting requirements, with all agreed integrations live.",
      },
      {
        title: "Integration and data pipeline documentation",
        description:
          "Documented connections between GRC platform and upstream data sources, with data flow diagrams and monitoring configurations.",
      },
      {
        title: "Testing evidence pack",
        description:
          "Full test results across functional, integration, and user acceptance phases, with defect resolution records for audit and assurance purposes.",
      },
      {
        title: "Operational handover package",
        description:
          "Runbooks, administrator guides, user training materials, and a hypercare plan so your team can operate the GRC capability independently.",
      },
    ],
    packageHighlights: [
      "Twelve-week phased delivery with named milestones and stakeholder checkpoints",
      "Testing evidence pack suitable for internal audit and regulator review",
      "Hypercare period included so operations teams are not left unsupported at go-live",
    ],
    faqIntro:
      "Key questions about deploying a Governance, Risk and Compliance capability.",
    faqs: [
      {
        question: "Which GRC platforms can you deploy and configure?",
        answer:
          "ServiceNow GRC, Microsoft Purview Compliance, RSA Archer, LogicGate, and other leading platforms. The DigitalQatalyst team confirms platform fit during pre-deployment scoping.",
      },
      {
        question: "How do you manage integration with our existing data sources?",
        answer:
          "Integration requirements are scoped in the first three weeks. The team builds and tests connections to HR, IT, financial, and operational data sources as agreed in the design specifications.",
      },
      {
        question: "What does the hypercare period cover?",
        answer:
          "Hypercare runs for two weeks post-launch and includes daily check-ins, priority defect resolution, and on-call support for your compliance and operations teams.",
      },
      {
        question: "What if we do not have a completed design?",
        answer:
          "A design specification is a prerequisite for deployment. The DigitalQatalyst team can run a condensed design phase before committing to the deployment schedule.",
      },
      {
        question: "How do we get started?",
        answer:
          "Provide your design specification or assessment findings and the DigitalQatalyst team will scope the deployment timeline and resource requirements within five working days.",
      },
    ],
    audience: "CISOs, risk and compliance officers, heads of internal audit, and legal and regulatory affairs leaders",
    industryRelevance:
      "Regulated organisations in financial services, healthcare, government, and any business preparing for certification or facing audit scrutiny",
    businessImpact:
      "Brings a fully operational GRC capability live within twelve weeks, reducing manual compliance effort and providing the audit evidence trail regulators and board assurance functions expect.",
    tags: ["GRC-implementation", "compliance", "risk-management", "platform-deployment"],
  },

  89: {
    description:
      "Deploy AI-enabled GRC capabilities into production with the monitoring, safety controls, human-in-the-loop workflows, and operational handover your compliance function needs to run them confidently.",
    positioning:
      "AI-powered GRC in production: governed models, live monitoring, and your team trained to operate them safely.",
    features: [
      "Production deployment of validated AI models for risk detection, compliance monitoring, or anomaly alerting",
      "Safety and guardrail configuration enforcing human-in-the-loop approval at critical decision points",
      "Live monitoring dashboards tracking model accuracy, alert volumes, and compliance outcomes week-on-week",
      "Operations training programme so your GRC team can manage, retrain, and override AI outputs with confidence",
    ],
    timelineMilestones: [
      "Weeks 1-3: Production environment preparation, model deployment, and integration testing",
      "Weeks 4-7: Guardrail configuration, monitoring setup, and parallel-run validation",
      "Weeks 8-10: Phased cutover, alert tuning, and false-positive reduction",
      "Weeks 11-12: Full production handover, operations training, and hypercare activation",
    ],
    deliverables: [
      {
        title: "Production AI deployment",
        description:
          "Validated AI models live in your environment, connected to GRC data sources, and processing alerts within agreed latency and accuracy thresholds.",
      },
      {
        title: "Guardrails and safety controls documentation",
        description:
          "Configured human-in-the-loop checkpoints, override procedures, and escalation paths documented for audit and regulatory review.",
      },
      {
        title: "Monitoring and performance dashboard",
        description:
          "Real-time view of model outputs, alert volumes, false-positive rates, and compliance outcomes with configurable thresholds and alerting.",
      },
      {
        title: "Operations and retraining guide",
        description:
          "Step-by-step procedures for your GRC team to manage model performance, trigger retraining, and document decisions for audit purposes.",
      },
    ],
    packageHighlights: [
      "Parallel-run phase validates AI accuracy before full cutover",
      "Guardrails and human-in-the-loop controls configured to your risk tolerance",
      "Operations training ensures your team owns and can govern the AI capability",
    ],
    faqIntro:
      "Key questions about AI deployment for Governance, Risk and Compliance.",
    faqs: [
      {
        question: "What AI use cases can you put into production for GRC?",
        answer:
          "Continuous control monitoring, transaction anomaly detection, regulatory change classification, and AI-assisted policy review are the most common production deployments. The DigitalQatalyst team works from your validated AI design specifications.",
      },
      {
        question: "How do you ensure the AI does not make compliance decisions without human review?",
        answer:
          "Human-in-the-loop checkpoints are configured before deployment. High-risk alerts always route to a named reviewer before any action is taken. Guardrail logic is documented and auditable.",
      },
      {
        question: "What happens if model accuracy degrades after go-live?",
        answer:
          "The monitoring dashboard surfaces accuracy metrics weekly. The operations guide includes retraining triggers and the DigitalQatalyst team provides hypercare support during the first two weeks post-launch.",
      },
      {
        question: "Do we need a deployment specification before this engagement?",
        answer:
          "Yes, the AI Deploy engagement builds from the specifications produced in an AI Design phase. If those are not in place, the DigitalQatalyst team can scope a combined design and deployment programme.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your AI design specifications and the DigitalQatalyst team will confirm readiness, environment requirements, and the deployment timeline within one week.",
      },
    ],
    audience: "CISOs, risk and compliance officers, heads of internal audit, and legal and regulatory affairs leaders",
    industryRelevance:
      "Regulated organisations in financial services, healthcare, government, and any business preparing for certification or facing audit scrutiny",
    businessImpact:
      "Automates routine compliance monitoring and risk detection, freeing analysts to focus on investigation and remediation while providing an auditable AI decision trail for regulators.",
    tags: ["AI-deployment", "compliance-automation", "responsible-AI", "GRC"],
  },

  90: {
    description:
      "Keep your GRC capability operating at peak performance with ongoing monitoring, control testing, compliance reporting, and continuous optimisation backed by a named DigitalQatalyst team and defined service levels.",
    positioning:
      "Ongoing GRC operations with named accountability: monthly reporting, continuous control testing, and proactive optimisation.",
    features: [
      "Continuous control monitoring with exception alerting so control failures are caught before they become findings",
      "Monthly compliance performance reports mapped to your chosen framework and formatted for board and audit committees",
      "Quarterly control testing programme producing evidence packs ready for internal audit and external certification",
      "Proactive optimisation cycles adjusting controls, processes, and tooling as your risk landscape or regulatory obligations change",
    ],
    timelineMilestones: [
      "Month 1: Onboarding, baseline establishment, and SLA confirmation",
      "Months 2-3: Steady-state monitoring, first reporting cycle, and initial optimisation",
      "Quarterly: Control testing, evidence pack production, and performance review",
      "Ongoing: Continuous monitoring, reporting, and regulatory change response",
    ],
    deliverables: [
      {
        title: "Monthly compliance performance reports",
        description:
          "Structured reports covering control status, open exceptions, remediation progress, and framework compliance score, formatted for board and audit committee use.",
      },
      {
        title: "Quarterly control testing evidence packs",
        description:
          "Documented test results for in-scope controls, suitable for internal audit review and external certification bodies.",
      },
      {
        title: "Exception and incident log",
        description:
          "Running record of control exceptions, incidents, and remediation actions with timestamps and owner details for regulatory and audit purposes.",
      },
      {
        title: "Optimisation recommendations",
        description:
          "Quarterly recommendations for control improvements, tooling adjustments, or process changes based on performance data and regulatory developments.",
      },
    ],
    packageHighlights: [
      "Named DigitalQatalyst team with defined response SLAs across all service tiers",
      "Monthly board-ready compliance reports and quarterly audit evidence packs included",
      "Proactive regulatory change monitoring so you are not caught off-guard by new obligations",
    ],
    faqIntro:
      "Key questions about the Governance, Risk and Compliance managed service.",
    faqs: [
      {
        question: "What is included in the monthly service?",
        answer:
          "Continuous control monitoring, exception alerting, a compliance performance report, and ongoing liaison with your risk and audit teams. Quarterly deliverables include control testing and evidence packs.",
      },
      {
        question: "How quickly do you respond to a control failure or incident?",
        answer:
          "Response times depend on your service tier. Critical control failures are escalated within four hours. The DigitalQatalyst team confirms SLA thresholds during onboarding.",
      },
      {
        question: "Can the service scale if our regulatory obligations change?",
        answer:
          "Yes. The engagement is reviewed quarterly. New frameworks, expanded scope, or additional controls can be added through a change request without restarting the engagement.",
      },
      {
        question: "How does the service handle a regulator audit or certification visit?",
        answer:
          "The DigitalQatalyst team prepares and packages evidence for the audit scope, attends readiness reviews, and supports your team throughout the audit process as part of the managed service.",
      },
      {
        question: "How do we get started?",
        answer:
          "The DigitalQatalyst team runs a two-week onboarding to establish baselines, confirm SLAs, and connect monitoring tooling before steady-state operations begin.",
      },
    ],
    audience: "CISOs, risk and compliance officers, heads of internal audit, and legal and regulatory affairs leaders",
    industryRelevance:
      "Regulated organisations in financial services, healthcare, government, and any business preparing for certification or facing audit scrutiny",
    businessImpact:
      "Reduces the cost and effort of maintaining compliance posture year-round, replaces point-in-time audit preparation with continuous assurance, and provides leadership with reliable monthly visibility of risk exposure.",
    tags: ["managed-GRC", "compliance-operations", "continuous-monitoring", "audit-readiness"],
  },

  // ─── Technology Governance ────────────────────────────────────────────────

  121: {
    description:
      "Assess the maturity of your technology governance framework across portfolio management, architecture standards, vendor oversight, and delivery controls, and receive a prioritised improvement roadmap your CIO can act on immediately.",
    positioning:
      "Understand where your technology governance framework is strong and where it is creating delivery risk, cost drag, or architectural drift.",
    features: [
      "Technology governance maturity assessment across portfolio, architecture, vendor, and delivery dimensions",
      "Investment and portfolio control review identifying where spend is misaligned to strategy or poorly governed",
      "Architecture standards assessment surfacing where technical debt and non-standard choices are accumulating risk",
      "Prioritised improvement roadmap with effort estimates and sequencing recommendations for your CIO and architecture leaders",
    ],
    timelineMilestones: [
      "Days 1-2: Scope confirmation, maturity model alignment, and leadership interviews",
      "Days 3-4: Documentation review, portfolio analysis, and architecture standards gap scoring",
      "Day 5: Findings playback, roadmap review, and next-step recommendations",
    ],
    deliverables: [
      {
        title: "Technology governance maturity report",
        description:
          "Scored assessment across portfolio management, architecture standards, vendor governance, and delivery controls, with evidence and specific gaps documented.",
      },
      {
        title: "Investment and portfolio control findings",
        description:
          "Analysis of where technology spend is poorly governed, misaligned to strategy, or lacking accountability, with specific improvement recommendations.",
      },
      {
        title: "Architecture standards gap analysis",
        description:
          "Documented drift from agreed standards, concentration of technical debt, and non-standard choices creating future integration or compliance risk.",
      },
      {
        title: "Prioritised improvement roadmap",
        description:
          "Sequenced actions across governance dimensions, with effort estimates and dependencies framed for CIO and board-level decision-making.",
      },
    ],
    packageHighlights: [
      "Fixed-scope, no-obligation assessment completed within one week",
      "Covers portfolio, architecture, vendor, and delivery governance in a single engagement",
      "Board-ready improvement roadmap delivered before the engagement closes",
    ],
    faqIntro:
      "Common questions about the Technology Governance assessment.",
    faqs: [
      {
        question: "What does the maturity model cover?",
        answer:
          "The assessment covers four dimensions: technology portfolio and investment governance, enterprise architecture standards and compliance, vendor and third-party oversight, and delivery and programme governance. The DigitalQatalyst team confirms which are in scope during the kick-off.",
      },
      {
        question: "What documentation do you need from us?",
        answer:
          "Portfolio records, architecture principles documents, vendor contracts, and delivery governance artefacts such as project status reports or gate review outputs. Gaps in documentation are themselves findings.",
      },
      {
        question: "How is the maturity model calibrated to our organisation?",
        answer:
          "The DigitalQatalyst team aligns the scoring model to your organisation's size, sector, and regulatory context in the first day of the engagement so findings are relevant rather than generic.",
      },
      {
        question: "Can this support a broader digital or IT transformation programme?",
        answer:
          "Yes. The roadmap is designed to feed directly into transformation planning, enterprise architecture reviews, or an operating model redesign.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation with the DigitalQatalyst team. We confirm scope, maturity model, and stakeholder availability before the engagement begins.",
      },
    ],
    audience: "CIOs, heads of enterprise architecture, PMO directors, and technology portfolio leaders",
    industryRelevance:
      "Organisations managing complex technology portfolios, multi-vendor environments, or enterprise architecture programmes across any sector",
    businessImpact:
      "Identifies the governance gaps creating the greatest delivery risk and cost exposure, so improvement investment is targeted rather than spread across lower-priority activities.",
    tags: ["technology-governance", "enterprise-architecture", "portfolio-management", "IT-governance"],
  },

  122: {
    description:
      "Design a technology governance operating model that aligns portfolio decisions, architecture standards, vendor oversight, and delivery controls to your strategy, with the specifications and adoption plan your teams need to implement it.",
    positioning:
      "A technology governance blueprint that translates strategy into accountable decisions, consistent architecture, and disciplined delivery.",
    features: [
      "Technology governance operating model defining decision rights, escalation paths, and accountability across portfolio, architecture, and vendor domains",
      "Architecture review board and standards framework design, including decision criteria, review processes, and exception handling",
      "Portfolio governance process designs covering investment approval, prioritisation, and performance tracking",
      "Change and adoption plan addressing how governance changes are embedded without disrupting ongoing delivery",
    ],
    timelineMilestones: [
      "Week 1: Current-state review, governance principles, and design requirements",
      "Weeks 2-3: Operating model design, process workshops, and architecture framework development",
      "Week 4: Specification sign-off, adoption planning, and implementation handover package",
    ],
    deliverables: [
      {
        title: "Technology governance operating model",
        description:
          "Documented decision rights, governance bodies, meeting cadences, escalation paths, and accountabilities across portfolio, architecture, vendor, and delivery governance.",
      },
      {
        title: "Architecture review board design",
        description:
          "Membership, mandate, decision criteria, review process, and exception procedures for your architecture governance function, ready to stand up.",
      },
      {
        title: "Portfolio governance process specifications",
        description:
          "Investment approval workflows, prioritisation criteria, performance tracking templates, and reporting formats for your technology portfolio function.",
      },
      {
        title: "Implementation handover package",
        description:
          "Role descriptions, templates, tooling recommendations, and an adoption plan sequenced to minimise disruption to current delivery programmes.",
      },
    ],
    packageHighlights: [
      "Decision rights and accountabilities defined across all governance dimensions",
      "Architecture review board and portfolio governance ready to implement",
      "Adoption plan included so governance changes embed without stalling delivery",
    ],
    faqIntro:
      "Key questions about designing a Technology Governance operating model.",
    faqs: [
      {
        question: "Do we need an assessment before starting the design?",
        answer:
          "An assessment provides the evidence base for design priorities. Existing audit findings, architecture reviews, or previous governance reports can substitute if a fresh assessment has not been run.",
      },
      {
        question: "How do you design governance that works with our existing structures?",
        answer:
          "The design phase begins with a current-state review. The DigitalQatalyst team maps existing committees, forums, and reporting lines before designing the new model so it complements rather than conflicts with what already works.",
      },
      {
        question: "Can the design be implemented in phases?",
        answer:
          "Yes. The implementation handover package includes a phased adoption plan sequenced by impact and readiness. Quick-win governance changes are separated from longer-term structural redesigns.",
      },
      {
        question: "What tooling do you recommend for technology governance?",
        answer:
          "Tooling recommendations are included in the handover package, covering portfolio management platforms, architecture repository tools, and reporting tooling. The DigitalQatalyst team aligns recommendations to your existing technology estate.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a scoping call with the DigitalQatalyst team. We review your current governance maturity, objectives, and any existing documentation before confirming the design scope.",
      },
    ],
    audience: "CIOs, heads of enterprise architecture, PMO directors, and technology portfolio leaders",
    industryRelevance:
      "Organisations managing complex technology portfolios, multi-vendor environments, or enterprise architecture programmes across any sector",
    businessImpact:
      "Reduces delivery failure rates and misaligned investment by establishing clear decision rights and governance processes, cutting the time spent on escalations and unstructured architecture exceptions.",
    tags: ["technology-governance", "operating-model", "enterprise-architecture", "portfolio-governance"],
  },

  123: {
    description:
      "Validate where AI can strengthen technology governance, design responsible decision-support workflows, and produce deployment-ready specifications so build investment goes into AI use cases that are feasible, governed, and aligned to your architecture standards.",
    positioning:
      "AI-assisted technology governance starts with validated use cases and responsible design, not experimentation.",
    features: [
      "AI use-case identification for portfolio analytics, architecture drift detection, vendor risk scoring, and delivery performance prediction",
      "Feasibility and data readiness assessment for each prioritised use case, covering available data, model requirements, and integration points",
      "Responsible AI workflow design including human-in-the-loop decision approval, explainability requirements, and bias risk assessment",
      "Deployment specifications ready to hand to a build team, with guardrails, monitoring criteria, and audit logging defined",
    ],
    timelineMilestones: [
      "Week 1: AI opportunity mapping, data landscape review, and technology governance process analysis",
      "Weeks 2-3: Use-case validation, responsible AI assessment, and workflow design workshops",
      "Week 4: Deployment specification finalisation, guardrails design, and sign-off",
    ],
    deliverables: [
      {
        title: "AI use-case register for technology governance",
        description:
          "Validated use cases for AI in portfolio management, architecture review, vendor oversight, and delivery governance, each assessed for feasibility and regulatory compatibility.",
      },
      {
        title: "Responsible AI assessment",
        description:
          "Documented findings on data quality, bias risk, explainability requirements, and applicable AI regulations for each prioritised use case.",
      },
      {
        title: "AI workflow designs",
        description:
          "End-to-end workflow specifications showing how AI outputs integrate into governance decision points, with human-in-the-loop controls at each critical step.",
      },
      {
        title: "Deployment specification package",
        description:
          "Technical and governance requirements for each approved use case, including model criteria, data pipelines, guardrails, and monitoring configurations.",
      },
    ],
    packageHighlights: [
      "Use cases validated against data availability and regulatory constraints before build",
      "Responsible AI assessment included for every prioritised use case",
      "Deployment specifications prevent rework when the build phase begins",
    ],
    faqIntro:
      "Key questions about AI design for Technology Governance.",
    faqs: [
      {
        question: "What AI use cases apply to technology governance?",
        answer:
          "Common validated use cases include portfolio health analytics, architecture compliance drift detection, vendor risk scoring from contract and performance data, and delivery performance prediction. The DigitalQatalyst team works with your governance context to prioritise.",
      },
      {
        question: "What data do you need access to during the design phase?",
        answer:
          "Data inventories, schema documentation, and sample datasets for feasibility assessment. No production data is processed during design; the engagement works from specifications and representative samples.",
      },
      {
        question: "How do you assess responsible AI risk for governance functions?",
        answer:
          "The assessment covers decision significance, explainability obligations, data provenance, and the consequences of model error in each governance context. High-risk decision points automatically require human-in-the-loop controls in the workflow design.",
      },
      {
        question: "Do we need an existing technology governance model before this engagement?",
        answer:
          "A functioning governance model makes use-case identification more precise, but the DigitalQatalyst team can run this engagement alongside a governance design phase.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation with the DigitalQatalyst team. We will review your current governance tooling, data landscape, and AI objectives before confirming the scope.",
      },
    ],
    audience: "CIOs, heads of enterprise architecture, PMO directors, and technology portfolio leaders",
    industryRelevance:
      "Organisations managing complex technology portfolios, multi-vendor environments, or enterprise architecture programmes across any sector",
    businessImpact:
      "Prevents wasted AI investment in unvalidated use cases and ensures governance AI is designed responsibly before build begins, reducing regulatory and reputational risk.",
    tags: ["AI-governance", "technology-governance", "responsible-AI", "portfolio-analytics"],
  },

  124: {
    description:
      "Implement your technology governance operating model with configured tooling, integrated data sources, tested processes, and a controlled handover that leaves your CIO and architecture teams running confidently.",
    positioning:
      "From governance design to live operations: configured tooling, integrated data, and your team trained to govern technology at scale.",
    features: [
      "Technology governance platform configuration aligned to your operating model, decision rights, and reporting requirements",
      "Data integrations connecting portfolio, financial, vendor, and architecture data sources into a single governance view",
      "Process activation covering architecture review board, portfolio governance cycles, and vendor oversight workflows",
      "Training programme and runbooks ensuring your CIO, architecture, and PMO teams can operate the governance model from day one",
    ],
    timelineMilestones: [
      "Weeks 1-3: Environment setup, platform configuration, and initial data integration",
      "Weeks 4-8: Process activation, governance workflow testing, and UAT with CIO and architecture stakeholders",
      "Weeks 9-11: Pilot governance cycles, issue resolution, and runbook finalisation",
      "Week 12: Full go-live, first governance reporting cycle, and operational handover",
    ],
    deliverables: [
      {
        title: "Configured technology governance platform",
        description:
          "Portfolio management, architecture repository, or governance tooling fully configured to your operating model, with all agreed integrations live and reporting automated.",
      },
      {
        title: "Data integration documentation",
        description:
          "Documented connections between governance tooling and portfolio, financial, vendor, and architecture data sources, with data flow diagrams and refresh schedules.",
      },
      {
        title: "Process activation evidence",
        description:
          "Records of architecture review board, portfolio governance, and vendor oversight processes tested and signed off by your governance stakeholders.",
      },
      {
        title: "Operational handover package",
        description:
          "Runbooks, administrator guides, training materials, and a first-cycle governance calendar so your teams operate without dependency on the DigitalQatalyst team.",
      },
    ],
    packageHighlights: [
      "Twelve-week phased delivery with named milestones and governance checkpoints",
      "First governance reporting cycle completed before handover closes",
      "Training and runbooks ensure your team operates independently from go-live",
    ],
    faqIntro:
      "Key questions about deploying a Technology Governance operating model.",
    faqs: [
      {
        question: "Which governance platforms can you configure?",
        answer:
          "Planview, ServiceNow IT Business Management, LeanIX, Ardoq, and portfolio management tooling in Microsoft or Atlassian ecosystems. Platform selection is confirmed during pre-deployment scoping with the DigitalQatalyst team.",
      },
      {
        question: "What data sources do you typically integrate?",
        answer:
          "Financial systems for investment data, project management tools for delivery status, architecture repositories, vendor contract management systems, and HR systems for resource data. Integration scope is confirmed in week one.",
      },
      {
        question: "How do you handle governance process changes mid-deployment?",
        answer:
          "A change control process is established in week one. Minor changes are absorbed; significant scope changes are assessed and agreed before implementation to protect the timeline.",
      },
      {
        question: "What is the first governance cycle output we will see?",
        answer:
          "By the end of week twelve your portfolio reporting, architecture review calendar, and vendor oversight process will have completed their first cycle, producing real governance outputs rather than test artefacts.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your governance design specification and the DigitalQatalyst team will scope the deployment in detail and confirm the timeline within five working days.",
      },
    ],
    audience: "CIOs, heads of enterprise architecture, PMO directors, and technology portfolio leaders",
    industryRelevance:
      "Organisations managing complex technology portfolios, multi-vendor environments, or enterprise architecture programmes across any sector",
    businessImpact:
      "Operationalises technology governance within twelve weeks, replacing ad-hoc decision-making with documented, accountable processes that reduce investment waste and architecture drift.",
    tags: ["technology-governance", "portfolio-management", "platform-deployment", "IT-governance"],
  },

  125: {
    description:
      "Deploy AI decision-support capabilities into your technology governance function with live monitoring, human-in-the-loop controls, and an operations model that keeps your CIO and architecture teams in charge of every material decision.",
    positioning:
      "AI in production for technology governance: validated models, governed decisions, and your team trained to manage them.",
    features: [
      "Production deployment of AI models for portfolio health analytics, architecture drift detection, or vendor risk scoring",
      "Human-in-the-loop approval workflows ensuring AI recommendations are reviewed by accountable leaders before action is taken",
      "Monitoring dashboards surfacing model accuracy, recommendation acceptance rates, and governance outcomes in real time",
      "Operations and override training so your CIO, architecture, and PMO teams can manage, retrain, and override AI outputs independently",
    ],
    timelineMilestones: [
      "Weeks 1-3: Production environment preparation, model deployment, and integration testing",
      "Weeks 4-7: Human-in-the-loop workflow activation, monitoring configuration, and parallel-run validation",
      "Weeks 8-10: Phased cutover, recommendation tuning, and false-positive reduction",
      "Weeks 11-12: Full production handover, operations training, and hypercare activation",
    ],
    deliverables: [
      {
        title: "Production AI deployment for technology governance",
        description:
          "AI models live in your environment, connected to portfolio, architecture, and vendor data sources, processing recommendations within agreed accuracy and latency thresholds.",
      },
      {
        title: "Human-in-the-loop workflow documentation",
        description:
          "Configured approval checkpoints, escalation paths, and override procedures for each AI-supported governance decision, documented for audit and regulatory review.",
      },
      {
        title: "Governance AI monitoring dashboard",
        description:
          "Real-time view of model outputs, recommendation volumes, acceptance rates, and governance decision outcomes with configurable thresholds and alerting.",
      },
      {
        title: "Operations and retraining guide",
        description:
          "Step-by-step procedures for your governance teams to manage model performance, trigger retraining cycles, and document AI-influenced decisions for audit purposes.",
      },
    ],
    packageHighlights: [
      "Parallel-run phase validates AI accuracy against actual governance decisions before full cutover",
      "Every material AI recommendation requires human approval before action is taken",
      "Operations training ensures your team governs the AI, not the other way around",
    ],
    faqIntro:
      "Key questions about AI deployment for Technology Governance.",
    faqs: [
      {
        question: "Which AI use cases can you put into production for technology governance?",
        answer:
          "Portfolio health analytics, architecture compliance drift detection, vendor risk scoring, and delivery performance prediction are the most common production deployments. The DigitalQatalyst team builds from your validated AI design specifications.",
      },
      {
        question: "How do you ensure AI does not make governance decisions without approval?",
        answer:
          "Human-in-the-loop checkpoints are configured before production cutover. Every AI recommendation that influences a governance decision routes to a named accountable leader for approval. The approval audit trail is maintained in the governance platform.",
      },
      {
        question: "What happens if a model recommendation is consistently wrong?",
        answer:
          "The monitoring dashboard surfaces acceptance rates and override frequencies weekly. The operations guide includes retraining triggers and the DigitalQatalyst team provides hypercare support during the first two weeks post-launch.",
      },
      {
        question: "Do we need AI design specifications before this engagement?",
        answer:
          "Yes. The AI Deploy engagement builds directly from specifications produced in an AI Design phase. If those are not complete, the DigitalQatalyst team can run a combined design and deployment programme.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your AI design specifications and the DigitalQatalyst team will confirm environment readiness, integration requirements, and the deployment schedule within one week.",
      },
    ],
    audience: "CIOs, heads of enterprise architecture, PMO directors, and technology portfolio leaders",
    industryRelevance:
      "Organisations managing complex technology portfolios, multi-vendor environments, or enterprise architecture programmes across any sector",
    businessImpact:
      "Brings AI decision-support into active technology governance without removing human accountability, improving the speed and consistency of portfolio, architecture, and vendor decisions.",
    tags: ["AI-deployment", "technology-governance", "portfolio-analytics", "responsible-AI"],
  },

  126: {
    description:
      "Operate your technology governance framework continuously, with monthly portfolio reporting, quarterly architecture reviews, vendor oversight, and proactive optimisation so your CIO always has an accurate picture of investment alignment and technology risk.",
    positioning:
      "Named governance operations, monthly reporting, and continuous optimisation so technology governance keeps pace with your business.",
    features: [
      "Continuous portfolio and investment monitoring with monthly performance reports aligned to your strategic objectives",
      "Quarterly architecture review cycles assessing standards compliance, technical debt accumulation, and non-standard exceptions",
      "Ongoing vendor oversight covering contract performance, risk monitoring, and renewal preparation",
      "Proactive governance optimisation adjusting processes, tooling, and reporting as your technology strategy or organisation evolves",
    ],
    timelineMilestones: [
      "Month 1: Onboarding, baseline establishment, and governance calendar confirmation",
      "Months 2-3: First monthly reporting cycle, architecture review activation, and vendor oversight baseline",
      "Quarterly: Architecture review, vendor risk refresh, and governance performance review",
      "Ongoing: Monthly portfolio reporting, continuous monitoring, and optimisation cycles",
    ],
    deliverables: [
      {
        title: "Monthly technology portfolio report",
        description:
          "Structured report covering investment alignment, delivery performance, risk indicators, and exception items, formatted for CIO and board-level review.",
      },
      {
        title: "Quarterly architecture review report",
        description:
          "Assessment of architecture standards compliance, technical debt trends, non-standard exception status, and recommended actions for your enterprise architecture function.",
      },
      {
        title: "Vendor performance and risk summary",
        description:
          "Ongoing view of vendor contract performance, risk indicators, upcoming renewals, and escalation items requiring CIO or commercial team attention.",
      },
      {
        title: "Governance optimisation recommendations",
        description:
          "Quarterly recommendations for process improvements, tooling enhancements, or governance model adjustments based on performance data and changes in your technology landscape.",
      },
    ],
    packageHighlights: [
      "Named DigitalQatalyst team with defined SLAs for reporting, escalations, and reviews",
      "Monthly portfolio reports and quarterly architecture reviews included as standard",
      "Proactive regulatory and technology change monitoring keeps governance current",
    ],
    faqIntro:
      "Key questions about the Technology Governance managed service.",
    faqs: [
      {
        question: "What does the monthly managed service include?",
        answer:
          "Continuous portfolio and investment monitoring, a monthly performance report for CIO and board use, ongoing vendor oversight, and escalation support for governance issues requiring executive attention.",
      },
      {
        question: "How are architecture reviews structured in the managed service?",
        answer:
          "Quarterly architecture review cycles cover standards compliance, technical debt trends, and outstanding non-standard exceptions. Results feed into the quarterly governance performance review with your CIO and architecture leaders.",
      },
      {
        question: "Can the managed service adapt as our technology strategy changes?",
        answer:
          "Yes. Scope and reporting are reviewed quarterly. Changes to portfolio scope, new governance domains, or revised strategic priorities are incorporated through a change request without disrupting ongoing operations.",
      },
      {
        question: "How do you handle a governance escalation or investment decision under time pressure?",
        answer:
          "The DigitalQatalyst team provides named points of contact for escalations. Response SLAs are defined by issue severity. For investment decisions, the team can produce targeted analysis within agreed timescales to support the decision-making process.",
      },
      {
        question: "How do we get started?",
        answer:
          "The DigitalQatalyst team runs a two-week onboarding to establish governance baselines, confirm SLAs, connect monitoring tooling, and set the governance calendar before steady-state operations begin.",
      },
    ],
    audience: "CIOs, heads of enterprise architecture, PMO directors, and technology portfolio leaders",
    industryRelevance:
      "Organisations managing complex technology portfolios, multi-vendor environments, or enterprise architecture programmes across any sector",
    businessImpact:
      "Gives CIO and board leadership reliable monthly visibility of investment alignment and technology risk, replacing periodic manual reviews with continuous, accountable governance operations.",
    tags: ["managed-governance", "technology-governance", "portfolio-management", "IT-governance"],
  },
};
