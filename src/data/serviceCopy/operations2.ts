import type { CollectionCopyOverrides } from "./types";

/**
 * OPERATIONS batch 2: Workforce Management, DevSecOps Automation, Farming Operations,
 * Manufacturing Operations, Infrastructure Operations, Government Operations
 * (variant ids 97-102, 127-132, 149-172).
 * Keyed by variant id. See ./types.ts for the field contract and voice rules.
 */
export const operations2Copy: CollectionCopyOverrides = {

  // -----------------------------------------------------------------------
  // WORKFORCE MANAGEMENT (ids 97-102)
  // -----------------------------------------------------------------------

  97: {
    description:
      "Understand where your workforce management platform is falling short: scheduling gaps, visibility blind spots, and coordination friction that cost you productivity every day. The DigitalQatalyst team returns a prioritised findings report and a practical roadmap your HR and operations leaders can act on immediately.",
    positioning:
      "A structured assessment that shows exactly where workforce management breaks down and what to fix first.",
    features: [
      "Scheduling and rostering gap analysis across all workforce categories",
      "Productivity visibility audit: what you can and cannot measure today",
      "Integration review of time-and-attendance, payroll, and HRIS touchpoints",
      "Prioritised improvement roadmap with effort and impact scoring",
    ],
    timelineMilestones: [
      "Days 1-2: Stakeholder interviews, data access, and scope confirmation",
      "Days 3-4: Scheduling analysis, system review, and gap documentation",
      "Day 5: Findings playback, roadmap walkthrough, and next-step agreement",
    ],
    deliverables: [
      { title: "Workforce maturity scorecard", description: "Ratings across scheduling accuracy, labour visibility, coordination tools, and compliance controls, with evidence for each score." },
      { title: "Gap and friction register", description: "Documented breakdowns in scheduling, attendance tracking, and cross-team coordination, ranked by business impact." },
      { title: "Prioritised improvement roadmap", description: "Sequenced actions with named owners, effort estimates, and dependencies so your team knows what to tackle first." },
      { title: "Stakeholder briefing pack", description: "A concise summary of findings and recommended investment for HR, finance, and operations leadership." },
    ],
    packageHighlights: [
      "Fixed-scope assessment with no obligation to proceed",
      "Covers distributed, shift-based, field, and frontline workforce models",
      "Findings delivered within one week",
    ],
    faqIntro: "Key questions about the workforce management assessment.",
    faqs: [
      { question: "What workforce models does this cover?", answer: "Distributed, shift-based, field, frontline, and knowledge worker models. The DigitalQatalyst team confirms which apply to your organisation during scoping." },
      { question: "Do you need access to our scheduling or HR systems?", answer: "We review configuration and reporting outputs rather than live data. Any access required is read-only and agreed in advance." },
      { question: "What do we get at the end?", answer: "A maturity scorecard, a gap and friction register, a prioritised improvement roadmap, and a stakeholder briefing pack." },
      { question: "How long does the assessment take?", answer: "One week from kick-off to findings delivery, assuming stakeholders are available for interviews in the first two days." },
      { question: "How do we get started?", answer: "Request a consultation. The DigitalQatalyst team will confirm scope, workforce categories in scope, and key stakeholders before work begins." },
    ],
    audience: "HR directors, workforce planning managers, and head-of-operations roles",
    industryRelevance: "Organisations managing distributed, shift-based, field, frontline, or knowledge workforces across any sector",
    businessImpact: "Surfaces the scheduling gaps and visibility gaps costing the most time and money, so investment goes to the fixes with the greatest return.",
    tags: ["workforce-planning", "scheduling", "hr-operations"],
  },

  98: {
    description:
      "Turn workforce management goals into a complete, build-ready blueprint: role-based journeys, scheduling logic, integration specifications, and an adoption plan your delivery teams can execute without ambiguity.",
    positioning:
      "A design engagement that produces workforce management specifications ready for configuration and build.",
    features: [
      "Role-based journey mapping for managers, schedulers, and frontline workers",
      "Scheduling rules and rostering logic documented for your delivery context",
      "Integration specifications for payroll, HRIS, time-and-attendance, and comms platforms",
      "Adoption and change plan covering training, rollout phasing, and early-life support",
    ],
    timelineMilestones: [
      "Week 1: Current-state review, goal alignment, and workforce journey workshops",
      "Weeks 2-3: Scheduling logic design, integration specification, and prototype validation",
      "Week 4: Final blueprint review, adoption planning, and build-readiness sign-off",
    ],
    deliverables: [
      { title: "Workforce journey maps", description: "End-to-end flows for each role: how managers create rosters, how workers view and swap shifts, and how exceptions are handled." },
      { title: "Scheduling and rostering specification", description: "Rules, constraints, and business logic documented so development or configuration teams can build without interpretation." },
      { title: "Integration design", description: "Data flows, field mappings, and API or file-exchange patterns for every connected system including payroll and HRIS." },
      { title: "Adoption and change plan", description: "Phased rollout approach, training requirements by role, and success metrics to track uptake after launch." },
    ],
    packageHighlights: [
      "Design-only engagement: no build commitment required",
      "Covers all workforce categories relevant to your organisation",
      "Blueprint is system-agnostic and delivery-team ready",
    ],
    faqIntro: "Key questions about the workforce management design engagement.",
    faqs: [
      { question: "Does the design tie us to a specific platform?", answer: "No. The DigitalQatalyst team designs to your requirements first. Platform selection is informed by the design, not the other way around." },
      { question: "What if we already have a platform in place?", answer: "We design around it, documenting configuration changes, integration updates, and any gaps the current platform cannot close." },
      { question: "How do frontline workers feed into the design?", answer: "We include representative users in journey workshops to ensure scheduling and communication flows work for the people using them daily." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the workforce categories in scope and the systems we need to design around before the engagement begins." },
    ],
    audience: "HR directors, workforce planning managers, and operations leaders sponsoring workforce platform programmes",
    industryRelevance: "Organisations managing distributed, shift-based, field, frontline, or knowledge workforces across any sector",
    businessImpact: "Removes ambiguity before build begins, cutting configuration rework and speeding time to a working scheduling and visibility capability.",
    tags: ["workforce-planning", "scheduling", "hr-operations"],
  },

  99: {
    description:
      "Validate where AI can improve scheduling accuracy, demand forecasting, and workforce coordination before committing build budget. The DigitalQatalyst team produces responsible workflow designs and deployment-ready specifications for every approved use case.",
    positioning:
      "Define and validate the AI use cases that will actually improve workforce management, with guardrails built in from the start.",
    features: [
      "AI use-case evaluation: demand forecasting, auto-rostering, absence prediction, and fatigue detection",
      "Data readiness assessment covering the inputs each model needs and what is missing",
      "Responsible AI workflow design with bias controls, override paths, and explainability requirements",
      "Deployment specification including model selection criteria, monitoring thresholds, and retraining triggers",
    ],
    timelineMilestones: [
      "Week 1: Use-case discovery, data landscape review, and feasibility scoring",
      "Weeks 2-3: Responsible workflow design, guardrail specification, and stakeholder validation",
      "Week 4: Deployment specification sign-off and build-readiness confirmation",
    ],
    deliverables: [
      { title: "AI use-case feasibility register", description: "Each candidate use case scored against data availability, technical complexity, and business value, with a go or no-go recommendation." },
      { title: "Data readiness report", description: "Gaps in training data, labelling, and integration coverage that must be closed before model development can begin." },
      { title: "Responsible workforce AI workflows", description: "Designed flows for approved use cases including human override points, fairness constraints, and worker-facing explainability." },
      { title: "Deployment and monitoring specification", description: "Model selection guidance, performance thresholds, drift detection triggers, and retraining schedules for production readiness." },
    ],
    packageHighlights: [
      "Validates feasibility before any build investment is committed",
      "Responsible AI by design: bias controls and override paths included",
      "Covers scheduling, forecasting, and absence management use cases",
    ],
    faqIntro: "Key questions about the workforce management AI design engagement.",
    faqs: [
      { question: "Which AI use cases are typically in scope?", answer: "Demand-based auto-rostering, absence and attrition prediction, shift-swap optimisation, and fatigue or compliance flagging are the most common starting points." },
      { question: "What if our workforce data is incomplete?", answer: "The data readiness report identifies exactly what is missing. Many organisations begin with narrower use cases while filling data gaps in parallel." },
      { question: "How do you address fairness in scheduling AI?", answer: "Fairness constraints, protected-attribute exclusions, and worker-facing explanations are built into the workflow design, not added later." },
      { question: "How do we get started?", answer: "Book a consultation with the DigitalQatalyst team to identify your highest-value AI use cases and confirm your current data landscape." },
    ],
    audience: "HR directors, workforce planning managers, and heads of people analytics",
    industryRelevance: "Organisations managing large or complex workforces where scheduling, forecasting, or absence management creates material operational cost",
    businessImpact: "Prevents wasted AI investment by confirming feasibility and data readiness before build, and produces responsible designs that can go to production without rework.",
    tags: ["workforce-ai", "scheduling", "predictive-analytics"],
  },

  100: {
    description:
      "Configure, integrate, and launch your workforce management platform with structured quality assurance and a controlled handover that leaves your operations team confident and self-sufficient.",
    positioning:
      "A managed deployment that takes your workforce management blueprint from specification to live operations.",
    features: [
      "Platform configuration against approved scheduling rules, rostering logic, and role permissions",
      "End-to-end integration testing with payroll, HRIS, time-and-attendance, and communication systems",
      "User acceptance testing with managers, schedulers, and representative frontline workers",
      "Hypercare period covering issue resolution and adoption support in the first weeks of live operation",
    ],
    timelineMilestones: [
      "Weeks 1-3: Environment setup, configuration build, and integration development",
      "Weeks 4-8: System integration testing, data migration validation, and defect resolution",
      "Weeks 9-10: User acceptance testing and sign-off",
      "Weeks 11-12: Controlled go-live, hypercare, and operational handover",
    ],
    deliverables: [
      { title: "Configured workforce management platform", description: "Production-ready scheduling, rostering, time tracking, and communication setup tested against your approved specifications." },
      { title: "Integration test evidence pack", description: "Test cases, execution results, and defect closure confirmation for every connected system including payroll and HRIS." },
      { title: "User acceptance sign-off", description: "Documented UAT results from managers, schedulers, and frontline representatives confirming the platform meets operational requirements." },
      { title: "Operational handover kit", description: "Administrator guides, support escalation paths, known-issues register, and a 30-day post-launch review schedule." },
    ],
    packageHighlights: [
      "Structured 12-week deployment with milestone-gated progress",
      "Full integration testing across payroll, HRIS, and attendance systems",
      "Hypercare support through the first weeks of live operation",
    ],
    faqIntro: "Key questions about the workforce management deployment.",
    faqs: [
      { question: "What happens if integration testing uncovers gaps in the design?", answer: "The DigitalQatalyst team documents and triages each gap. Minor issues are resolved within the deployment. Scope changes are raised with the project sponsor before proceeding." },
      { question: "How are frontline workers involved in UAT?", answer: "We recruit representative workers from each shift category to test scheduling, shift-swap, and notification flows in a pre-production environment." },
      { question: "What does hypercare include?", answer: "Daily monitoring, prioritised defect fixes, and a dedicated point of contact for your operations team through the first two to four weeks of live operation." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the platform, integration scope, and cutover constraints before planning begins." },
    ],
    audience: "HR directors, workforce planning managers, operations leaders, and IT project managers",
    industryRelevance: "Organisations managing distributed, shift-based, field, frontline, or knowledge workforces implementing or replacing a workforce management platform",
    businessImpact: "Delivers a fully integrated, tested workforce management platform that reduces scheduling errors and gives operations leaders accurate labour visibility from day one.",
    tags: ["workforce-planning", "scheduling", "hr-operations"],
  },

  101: {
    description:
      "Deploy validated AI capabilities for demand forecasting, auto-rostering, and absence prediction into your live workforce management environment, with monitoring, safety controls, and a handover that keeps your operations team in control.",
    positioning:
      "Put AI-powered scheduling and forecasting into production with the governance and monitoring your HR leaders require.",
    features: [
      "Governed model deployment for approved use cases including demand forecasting and shift optimisation",
      "Real-time monitoring dashboards tracking model accuracy, fairness metrics, and operational impact",
      "Human override and escalation workflows embedded in scheduling and rostering tools",
      "Operations team enablement covering model behaviour, intervention triggers, and performance review cadence",
    ],
    timelineMilestones: [
      "Weeks 1-4: Production environment preparation, data pipeline validation, and model staging",
      "Weeks 5-8: Controlled rollout to pilot workforce cohorts with close monitoring",
      "Weeks 9-10: Full rollout, override workflow validation, and performance baseline capture",
      "Weeks 11-12: Governance handover, monitoring setup confirmation, and retraining schedule agreement",
    ],
    deliverables: [
      { title: "Production AI deployment", description: "Approved models live in your workforce management platform with data pipelines, override controls, and logging in place." },
      { title: "Model performance dashboard", description: "Real-time view of scheduling accuracy, forecast error rates, fairness indicators, and alert thresholds for your operations team." },
      { title: "Override and escalation playbook", description: "Step-by-step procedures for managers when AI recommendations need to be overridden, and when to escalate to the DigitalQatalyst team." },
      { title: "AI governance handover pack", description: "Model cards, data lineage documentation, retraining schedule, and accountability assignments for ongoing responsible operation." },
    ],
    packageHighlights: [
      "Phased rollout from pilot cohort to full workforce",
      "Real-time fairness and accuracy monitoring from day one",
      "Full governance documentation and retraining schedule included",
    ],
    faqIntro: "Key questions about the workforce management AI deployment.",
    faqs: [
      { question: "What happens if a model starts performing poorly after launch?", answer: "Monitoring dashboards alert the DigitalQatalyst team and your operations leads. Retraining or rollback procedures are defined in the governance handover pack." },
      { question: "Can managers override AI scheduling recommendations?", answer: "Yes. Override workflows are embedded in the scheduling tool. All overrides are logged for quality review and model improvement." },
      { question: "How do you handle regulatory requirements around automated workforce decisions?", answer: "Accountability, explainability, and human oversight controls are designed into the deployment. We confirm applicable obligations during scoping." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team with your approved AI design specification to plan the production environment and pilot cohort." },
    ],
    audience: "HR directors, heads of people analytics, workforce planning managers, and operations IT leads",
    industryRelevance: "Organisations with complex shift, field, or frontline workforces where scheduling and forecasting automation creates measurable efficiency gains",
    businessImpact: "Reduces scheduling overhead, improves shift fill rates, and gives HR leaders accurate demand forecasts, with governance controls that maintain worker trust and regulatory compliance.",
    tags: ["workforce-ai", "scheduling", "predictive-analytics"],
  },

  102: {
    description:
      "Keep your workforce management platform performing at pace with your business: SLA-backed scheduling system operations, monthly performance reporting, and ongoing optimisation as your workforce grows or changes.",
    positioning:
      "Ongoing management of your workforce management platform so scheduling accuracy and visibility never degrade.",
    features: [
      "Monthly scheduling performance reports covering fill rates, overtime variance, and absenteeism trends",
      "Proactive system health monitoring with incident response within agreed SLA windows",
      "Configuration updates as scheduling rules, roles, or workforce structures change",
      "Quarterly optimisation reviews identifying new capability opportunities and technical debt",
    ],
    timelineMilestones: [
      "Month 1: Service baseline, monitoring setup, and SLA agreement confirmation",
      "Months 2-3: First reporting cycle, initial optimisation recommendations, and configuration updates",
      "Ongoing: Monthly performance reviews, quarterly optimisation sessions, and annual roadmap refresh",
    ],
    deliverables: [
      { title: "Monthly performance report", description: "Scheduling fill rates, overtime trends, absenteeism patterns, and system health metrics with commentary and recommended actions." },
      { title: "Incident and change log", description: "Transparent record of all incidents, configuration changes, and SLA performance across the reporting period." },
      { title: "Quarterly optimisation review", description: "Analysis of workforce trends, platform capability gaps, and prioritised improvement actions for the next quarter." },
      { title: "Annual workforce management roadmap", description: "Forward-looking plan covering platform updates, capability additions, and structural changes needed to support business growth." },
    ],
    packageHighlights: [
      "SLA-backed operations with defined incident response times",
      "Monthly reporting and quarterly optimisation included as standard",
      "Configuration updates covered as workforce structures evolve",
    ],
    faqIntro: "Key questions about the workforce management managed service.",
    faqs: [
      { question: "What is covered under the managed service?", answer: "Platform monitoring, incident response, configuration changes, monthly reporting, and quarterly optimisation reviews. Scope is confirmed in the service agreement." },
      { question: "What SLAs apply?", answer: "Response and resolution times are agreed during onboarding based on the criticality of your scheduling operations. Typical targets range from 4-hour response for critical incidents to next-business-day for low-priority items." },
      { question: "Can we add new workforce categories or locations over time?", answer: "Yes. Configuration updates for new sites, roles, or scheduling rules are included within agreed change volumes. Larger changes are scoped and priced separately." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the platform in scope, current configuration baseline, and SLA requirements before the service agreement is drafted." },
    ],
    audience: "HR directors, operations leaders, and workforce planning managers running live workforce management platforms",
    industryRelevance: "Organisations managing distributed, shift-based, field, frontline, or knowledge workforces that require consistent scheduling accuracy and operational visibility",
    businessImpact: "Maintains scheduling accuracy and labour visibility as the workforce grows, reduces operational overhead on internal IT teams, and surfaces optimisation opportunities before they become problems.",
    tags: ["workforce-planning", "scheduling", "managed-service"],
  },

  // -----------------------------------------------------------------------
  // DEVSECOPS AUTOMATION (ids 127-132)
  // -----------------------------------------------------------------------

  127: {
    description:
      "Identify where your software delivery pipeline leaks speed, introduces security risk, or fails to meet reliability standards. The DigitalQatalyst team maps DevSecOps maturity across your toolchain and returns a prioritised roadmap your engineering and security leaders can act on.",
    positioning:
      "A structured assessment of your delivery pipeline that shows where automation gaps slow releases and where security controls are missing.",
    features: [
      "Pipeline topology review covering build, test, security scanning, and deployment stages",
      "Security control gap analysis against shift-left and DevSecOps best practices",
      "Release velocity and defect-escape-rate benchmarking against your current toolchain",
      "Prioritised remediation roadmap with effort estimates and risk-reduction impact scores",
    ],
    timelineMilestones: [
      "Days 1-2: Pipeline inventory, toolchain access, and stakeholder interviews",
      "Days 3-4: Automated and manual control review, velocity data analysis, and gap documentation",
      "Day 5: Findings playback, risk-ranked roadmap presentation, and next-step agreement",
    ],
    deliverables: [
      { title: "DevSecOps maturity assessment", description: "Ratings across pipeline automation, security integration, test coverage, and release reliability, with evidence and specific gaps for each dimension." },
      { title: "Security control gap report", description: "Missing or misconfigured controls in SAST, DAST, dependency scanning, secrets detection, and container security, ranked by exploitability." },
      { title: "Delivery velocity baseline", description: "Current lead time, deployment frequency, change failure rate, and mean time to restore, with analysis of the pipeline stages causing the most drag." },
      { title: "Prioritised remediation roadmap", description: "Sequenced actions addressing the highest-risk gaps first, with effort estimates and the expected improvement in release quality and speed." },
    ],
    packageHighlights: [
      "Fixed-scope assessment with findings delivered within one week",
      "Covers security, velocity, and reliability dimensions of your pipeline",
      "No obligation to proceed with subsequent design or deployment",
    ],
    faqIntro: "Key questions about the DevSecOps automation assessment.",
    faqs: [
      { question: "Which pipelines and platforms does the assessment cover?", answer: "Any CI/CD toolchain: GitHub Actions, GitLab CI, Jenkins, Azure DevOps, and others. The DigitalQatalyst team confirms scope during the initial scoping call." },
      { question: "Do you need access to our source code?", answer: "We review pipeline configuration, scan results, and deployment logs. Source code access is not required unless specific vulnerability patterns need tracing." },
      { question: "What do we get at the end?", answer: "A maturity assessment, a security control gap report, a velocity baseline, and a prioritised remediation roadmap." },
      { question: "How do we get started?", answer: "Request a consultation. The DigitalQatalyst team will confirm which pipelines and teams are in scope before work begins." },
    ],
    audience: "CTOs, heads of engineering, DevOps leads, and application security managers",
    industryRelevance: "Organisations building, integrating, or operating digital platforms and software products across any sector",
    businessImpact: "Identifies the pipeline bottlenecks and security gaps costing the most release velocity and audit risk, so remediation effort goes where it returns the greatest improvement.",
    tags: ["devsecops", "ci-cd", "pipeline-security"],
  },

  128: {
    description:
      "Design a DevSecOps automation programme that closes your pipeline security gaps, accelerates release cycles, and gives your engineering teams clear, build-ready specifications for every workflow change.",
    positioning:
      "A design engagement that produces a complete DevSecOps automation blueprint ready for your engineering teams to implement.",
    features: [
      "Pipeline architecture design covering build, test, security scan, deploy, and observe stages",
      "Security toolchain specification: SAST, DAST, dependency scanning, secrets detection, and container signing",
      "Branching strategy, environment promotion gates, and release approval workflow design",
      "Developer experience and adoption plan covering training, documentation, and inner-loop tooling",
    ],
    timelineMilestones: [
      "Week 1: Pipeline review, team interviews, and target-state goal alignment",
      "Weeks 2-3: Architecture design, toolchain selection, and workflow specification workshops",
      "Week 4: Blueprint review, developer experience validation, and build-readiness sign-off",
    ],
    deliverables: [
      { title: "Pipeline architecture blueprint", description: "End-to-end design of your CI/CD stages including trigger logic, parallelisation, caching strategy, and failure-handling patterns." },
      { title: "Security toolchain specification", description: "Tools, scan configurations, threshold policies, and integration patterns for every security gate in the pipeline." },
      { title: "Workflow and governance design", description: "Branch strategy, environment promotion rules, approval gates, and audit trail requirements documented for implementation." },
      { title: "Developer adoption plan", description: "Training approach, inner-loop tooling recommendations, and rollout phasing to minimise disruption to active delivery teams." },
    ],
    packageHighlights: [
      "Design-only engagement: no build commitment required",
      "Platform-agnostic design that works with your existing toolchain",
      "Security controls specified at every pipeline stage",
    ],
    faqIntro: "Key questions about the DevSecOps automation design engagement.",
    faqs: [
      { question: "Can we keep our existing CI/CD platform?", answer: "Yes. The design is built around your current toolchain wherever it meets requirements. Replacements are only recommended where existing tools create unresolvable gaps." },
      { question: "How do you balance security controls with developer speed?", answer: "Security gates are designed to run in parallel where possible and block only on critical findings. The developer experience plan ensures controls add minimal friction to the inner loop." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to share your current pipeline inventory and confirm which teams and platforms are in scope for the design." },
    ],
    audience: "CTOs, heads of engineering, DevOps leads, and platform engineering teams",
    industryRelevance: "Organisations building or scaling digital platforms where release speed and security assurance are both business priorities",
    businessImpact: "Produces a complete, build-ready DevSecOps blueprint that accelerates implementation and avoids the rework caused by designing security controls after pipelines are built.",
    tags: ["devsecops", "ci-cd", "pipeline-security"],
  },

  129: {
    description:
      "Validate which AI use cases will genuinely improve your DevSecOps pipeline, and design responsible, auditable workflows before any build investment is committed. The DigitalQatalyst team produces deployment-ready specifications for AI-assisted code review, anomaly detection, and predictive quality gating.",
    positioning:
      "Define and validate the AI capabilities that will accelerate delivery and improve security posture, with governance built in from the start.",
    features: [
      "AI use-case evaluation: code review assistance, vulnerability prioritisation, anomaly detection, and predictive test selection",
      "Data and signal readiness assessment covering pipeline telemetry, scan outputs, and historical defect data",
      "Responsible AI workflow design with human review gates, model confidence thresholds, and override mechanisms",
      "Deployment specification including model selection, monitoring approach, and feedback loop design",
    ],
    timelineMilestones: [
      "Week 1: Use-case discovery, pipeline telemetry review, and feasibility scoring",
      "Weeks 2-3: Responsible workflow design, guardrail specification, and engineering team validation",
      "Week 4: Deployment specification sign-off and build-readiness confirmation",
    ],
    deliverables: [
      { title: "AI use-case feasibility register", description: "Each candidate scored on data availability, toolchain compatibility, and expected quality or velocity improvement, with a clear go or no-go recommendation." },
      { title: "Pipeline signal readiness report", description: "Assessment of existing telemetry, scan outputs, and historical data quality against the inputs each AI model requires." },
      { title: "Responsible DevSecOps AI workflows", description: "Designed flows for approved use cases with human review gates, confidence thresholds, and audit logging at every decision point." },
      { title: "Deployment and monitoring specification", description: "Model selection guidance, performance baselines, drift detection thresholds, and feedback loop design for production use." },
    ],
    packageHighlights: [
      "Confirms feasibility before any AI build spend is committed",
      "Responsible by design: human gates and audit trails at every stage",
      "Covers code quality, security, and reliability AI use cases",
    ],
    faqIntro: "Key questions about the DevSecOps AI design engagement.",
    faqs: [
      { question: "Which AI use cases are most commonly explored?", answer: "AI-assisted code review, ML-based vulnerability prioritisation, predictive test selection to reduce pipeline duration, and anomaly detection on deployment telemetry." },
      { question: "What if our pipeline telemetry is incomplete?", answer: "The signal readiness report identifies specific gaps. Organisations often start with lower-data-demand use cases while building telemetry coverage in parallel." },
      { question: "How do you ensure AI recommendations do not block releases incorrectly?", answer: "Confidence thresholds, human override gates, and fallback logic are designed into every workflow so false positives never silently block deployments." },
      { question: "How do we get started?", answer: "Book a consultation with the DigitalQatalyst team to identify your highest-value AI use cases and share current pipeline telemetry and toolchain details." },
    ],
    audience: "CTOs, heads of engineering, DevOps leads, and application security managers exploring AI-assisted delivery",
    industryRelevance: "Organisations with mature CI/CD pipelines looking to apply AI to accelerate release cycles and improve security signal quality",
    businessImpact: "Prevents wasted AI investment by validating feasibility before build, and produces responsible workflow designs that improve release quality without introducing uncontrolled automation risk.",
    tags: ["devsecops-ai", "pipeline-security", "ci-cd"],
  },

  130: {
    description:
      "Implement your DevSecOps automation blueprint with structured configuration, integration testing, and a controlled handover that leaves your engineering teams operating a faster, more secure delivery pipeline from day one.",
    positioning:
      "A managed deployment that takes your DevSecOps design from specification to a production-ready, security-embedded pipeline.",
    features: [
      "Pipeline configuration and toolchain integration across build, test, security scan, and deploy stages",
      "Security gate implementation including SAST, DAST, dependency scanning, and secrets detection policies",
      "Environment promotion and release approval workflow setup with audit trail and approval controls",
      "Engineering team enablement: pipeline onboarding, runbook creation, and go-live support",
    ],
    timelineMilestones: [
      "Weeks 1-4: Toolchain setup, pipeline configuration, and security gate integration",
      "Weeks 5-9: Integration testing, policy validation, and defect resolution across all environments",
      "Weeks 10-11: Team onboarding, runbook validation, and controlled go-live",
      "Week 12: Hypercare, incident monitoring, and operational handover",
    ],
    deliverables: [
      { title: "Production DevSecOps pipeline", description: "Fully configured CI/CD pipeline with security gates, test automation, environment promotion, and deployment controls live in your production environment." },
      { title: "Security gate validation report", description: "Evidence that each security control is running correctly, policies are enforced, and critical findings are blocking promotion as designed." },
      { title: "Engineering onboarding kit", description: "Pipeline documentation, developer quick-start guide, and runbooks for common operations and incident scenarios." },
      { title: "Operational handover pack", description: "Support contacts, escalation paths, known-issues register, and a 30-day post-launch review schedule." },
    ],
    packageHighlights: [
      "Structured 12-week deployment with milestone-gated progress",
      "Security controls validated in every environment before go-live",
      "Hypercare support through the first weeks of live operation",
    ],
    faqIntro: "Key questions about the DevSecOps automation deployment.",
    faqs: [
      { question: "Can we run the new pipeline alongside existing pipelines during transition?", answer: "Yes. The deployment plan includes a parallel-run period where both pipelines operate so teams can validate the new configuration before cutting over." },
      { question: "How do security policies get agreed before implementation?", answer: "The DigitalQatalyst team runs a policy alignment session in the first two weeks with engineering and security stakeholders to agree scan thresholds and blocking rules." },
      { question: "What happens if a security control creates too many false positives?", answer: "Policy tuning is included within the deployment scope. Thresholds are adjusted iteratively during the integration testing phase before go-live." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team with your approved pipeline design to plan toolchain access, environment scope, and team onboarding schedule." },
    ],
    audience: "CTOs, heads of engineering, DevOps leads, and platform engineering teams",
    industryRelevance: "Organisations building or operating digital platforms where release speed, security assurance, and operational reliability are business priorities",
    businessImpact: "Delivers a production-ready DevSecOps pipeline that reduces deployment lead time, cuts defect escape rates, and gives security teams confidence that controls are enforced consistently on every release.",
    tags: ["devsecops", "ci-cd", "pipeline-security"],
  },

  131: {
    description:
      "Deploy validated AI capabilities for code review assistance, vulnerability prioritisation, and anomaly detection into your live DevSecOps pipeline, with monitoring, override controls, and a governance handover that keeps your engineering and security teams in control.",
    positioning:
      "Put AI-assisted delivery and security capabilities into production with the audit trail and oversight controls your engineering organisation requires.",
    features: [
      "Governed model deployment for approved use cases including predictive test selection and AI-assisted vulnerability prioritisation",
      "Pipeline telemetry dashboards tracking model accuracy, false-positive rates, and delivery impact",
      "Developer-facing override and feedback mechanisms embedded in existing tooling",
      "Engineering team enablement on model behaviour, intervention scenarios, and performance review cadence",
    ],
    timelineMilestones: [
      "Weeks 1-4: Production environment preparation, telemetry pipeline validation, and model staging",
      "Weeks 5-8: Controlled rollout to pilot engineering teams with close monitoring",
      "Weeks 9-10: Full rollout, override workflow validation, and performance baseline capture",
      "Weeks 11-12: Governance handover, monitoring confirmation, and retraining schedule agreement",
    ],
    deliverables: [
      { title: "Production AI pipeline capabilities", description: "Approved models live in your CI/CD pipeline with telemetry ingestion, result logging, and developer-facing interfaces active." },
      { title: "Model performance dashboard", description: "Real-time view of recommendation accuracy, false-positive rates, pipeline duration impact, and alert thresholds for your platform team." },
      { title: "Override and feedback playbook", description: "Developer procedures for overriding AI recommendations, submitting false-positive reports, and escalating model quality concerns." },
      { title: "AI governance handover pack", description: "Model cards, telemetry lineage, retraining schedule, and accountability assignments for ongoing responsible operation." },
    ],
    packageHighlights: [
      "Phased rollout from pilot teams to full engineering organisation",
      "False-positive monitoring and threshold tuning included",
      "Full governance documentation and feedback loop design included",
    ],
    faqIntro: "Key questions about the DevSecOps AI deployment.",
    faqs: [
      { question: "How do developers interact with AI recommendations in the pipeline?", answer: "Recommendations appear in pull request comments or pipeline dashboards, with one-click override and a mandatory reason field that feeds the model's improvement loop." },
      { question: "What happens if AI vulnerability prioritisation produces too many false positives?", answer: "Threshold adjustment is included in the deployment. The monitoring dashboard surfaces false-positive rates, and the DigitalQatalyst team tunes thresholds before full rollout." },
      { question: "How do you maintain model accuracy as the codebase evolves?", answer: "Retraining triggers and schedules are defined in the governance handover pack. Model drift alerts notify the DigitalQatalyst team and your platform leads when retraining is needed." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team with your approved AI design specification to plan the production environment, telemetry access, and pilot team selection." },
    ],
    audience: "CTOs, heads of engineering, DevOps leads, and application security managers",
    industryRelevance: "Organisations with mature DevSecOps pipelines where AI-assisted quality and security tooling can deliver measurable velocity and risk improvements",
    businessImpact: "Reduces pipeline duration through smarter test selection, improves vulnerability fix rates through accurate prioritisation, and maintains human oversight at every AI decision point.",
    tags: ["devsecops-ai", "pipeline-security", "ci-cd"],
  },

  132: {
    description:
      "Keep your DevSecOps pipeline performing at pace with your engineering organisation: SLA-backed pipeline operations, monthly delivery and security metrics reporting, and ongoing optimisation as your platform and team scale.",
    positioning:
      "Ongoing management of your DevSecOps pipeline so delivery speed and security assurance never degrade as the organisation grows.",
    features: [
      "Monthly delivery metrics reports covering deployment frequency, lead time, change failure rate, and security finding trends",
      "Proactive pipeline health monitoring with incident response within agreed SLA windows",
      "Policy and configuration updates as toolchains, teams, or security requirements evolve",
      "Quarterly optimisation reviews identifying bottlenecks, redundant stages, and new automation opportunities",
    ],
    timelineMilestones: [
      "Month 1: Service baseline, monitoring setup, and SLA agreement confirmation",
      "Months 2-3: First reporting cycle, initial optimisation actions, and policy update cadence established",
      "Ongoing: Monthly delivery and security reports, quarterly optimisation sessions, and annual pipeline roadmap",
    ],
    deliverables: [
      { title: "Monthly delivery and security report", description: "DORA metrics, security finding volumes and age, policy exception counts, and pipeline health summary with recommended actions." },
      { title: "Incident and change log", description: "Transparent record of pipeline incidents, policy changes, and SLA performance across each reporting period." },
      { title: "Quarterly pipeline optimisation review", description: "Analysis of stage durations, flaky test trends, and security tool false-positive rates, with prioritised improvement actions." },
      { title: "Annual pipeline roadmap", description: "Forward-looking plan covering toolchain updates, new security integrations, and scalability improvements to support engineering growth." },
    ],
    packageHighlights: [
      "SLA-backed operations with defined incident response times",
      "Monthly DORA and security metrics reporting as standard",
      "Policy and toolchain updates included as engineering scales",
    ],
    faqIntro: "Key questions about the DevSecOps automation managed service.",
    faqs: [
      { question: "What is covered under the managed service?", answer: "Pipeline monitoring, incident response, policy and configuration updates, monthly reporting, and quarterly optimisation. Full scope is confirmed in the service agreement." },
      { question: "Can you manage pipelines across multiple cloud environments?", answer: "Yes. Multi-cloud and hybrid pipeline environments are in scope. The DigitalQatalyst team confirms the environment inventory during onboarding." },
      { question: "How are security policy changes handled when compliance requirements change?", answer: "Policy update requests are assessed, implemented in a staging pipeline, validated, and promoted to production within the agreed change management process." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the pipelines, toolchains, and SLA requirements in scope before the service agreement is drafted." },
    ],
    audience: "CTOs, heads of engineering, DevOps leads, and platform engineering teams running production delivery pipelines",
    industryRelevance: "Organisations operating digital platforms where continuous delivery speed and security assurance are operational requirements",
    businessImpact: "Maintains delivery velocity and security posture as the engineering organisation scales, reduces platform team toil on pipeline maintenance, and surfaces optimisation opportunities before they compound.",
    tags: ["devsecops", "ci-cd", "managed-service"],
  },

  // -----------------------------------------------------------------------
  // FARMING OPERATIONS (ids 149-154)
  // -----------------------------------------------------------------------

  149: {
    description:
      "Understand where your farming operations fall short on yield visibility, resource efficiency, and planning accuracy. The DigitalQatalyst team assesses your current operational maturity and returns a prioritised roadmap your agribusiness leaders can act on.",
    positioning:
      "A structured assessment that reveals where operational gaps are costing yield, water, and labour, and what to fix first.",
    features: [
      "Yield tracking and crop performance visibility gap analysis across fields and seasons",
      "Resource usage audit covering irrigation scheduling, input application, and equipment utilisation",
      "Operational planning and coordination review across planting, harvesting, and logistics cycles",
      "Prioritised improvement roadmap with effort estimates and expected yield or cost impact",
    ],
    timelineMilestones: [
      "Days 1-2: Stakeholder interviews, data review, and operational scope confirmation",
      "Days 3-4: Field operations analysis, system and data gap documentation, and benchmarking",
      "Day 5: Findings presentation, prioritised roadmap walkthrough, and next-step agreement",
    ],
    deliverables: [
      { title: "Farming operations maturity scorecard", description: "Ratings across yield tracking, resource management, planning accuracy, and equipment utilisation, with evidence and specific gaps." },
      { title: "Operational gap register", description: "Documented gaps in crop monitoring, irrigation scheduling, input management, and harvest coordination, ranked by cost and yield impact." },
      { title: "Prioritised improvement roadmap", description: "Sequenced actions with owners, effort estimates, and dependencies your operations team can act on from the first season." },
      { title: "Leadership briefing pack", description: "A concise summary of findings and recommended investment for agribusiness and farm operations leadership." },
    ],
    packageHighlights: [
      "Fixed-scope assessment delivered within one week",
      "Covers crop, livestock, and mixed farming operation models",
      "No obligation to proceed with subsequent design or deployment",
    ],
    faqIntro: "Key questions about the farming operations assessment.",
    faqs: [
      { question: "What farming models does the assessment cover?", answer: "Broadacre cropping, horticulture, livestock, and mixed operations. The DigitalQatalyst team confirms the applicable model during scoping." },
      { question: "Do you need access to our farm management systems?", answer: "We review system outputs and operational records rather than live data. Any access required is read-only and agreed in advance." },
      { question: "What do we get at the end?", answer: "A maturity scorecard, an operational gap register, a prioritised improvement roadmap, and a leadership briefing pack." },
      { question: "How do we get started?", answer: "Request a consultation. The DigitalQatalyst team will confirm the farming operation type, geographic scope, and key stakeholders before work begins." },
    ],
    audience: "Agribusiness executives, farm operations managers, and heads of agricultural production",
    industryRelevance: "Agribusiness, food production, crop operations, and agricultural service providers pursuing digital and operational improvement",
    businessImpact: "Surfaces the yield tracking and resource efficiency gaps costing the most per season, so investment goes to the improvements with the clearest return.",
    tags: ["agribusiness", "precision-agriculture", "farm-operations"],
  },

  150: {
    description:
      "Turn farming operations improvement goals into a complete, build-ready blueprint: field monitoring workflows, resource scheduling logic, integration specifications, and an adoption plan your operations team can execute from the next season.",
    positioning:
      "A design engagement that produces farming operations specifications ready for technology configuration and rollout.",
    features: [
      "Field monitoring and crop performance tracking workflow design for managers and field operators",
      "Resource scheduling logic for irrigation, input application, and equipment across planting and harvest cycles",
      "Integration specifications for farm management systems, IoT sensors, and logistics platforms",
      "Operational adoption plan covering training, phased rollout, and early-life support across seasonal transitions",
    ],
    timelineMilestones: [
      "Week 1: Current-state review, goal alignment, and operational workflow workshops",
      "Weeks 2-3: Workflow design, integration specification, and prototype validation with field teams",
      "Week 4: Final blueprint review, adoption planning, and build-readiness sign-off",
    ],
    deliverables: [
      { title: "Field operations workflow maps", description: "End-to-end flows covering crop monitoring, resource scheduling, exception handling, and harvest coordination across all relevant roles." },
      { title: "Resource scheduling specification", description: "Irrigation, input application, and equipment allocation rules documented for configuration or development teams." },
      { title: "Integration design", description: "Data flows and API patterns for farm management systems, sensor networks, weather data providers, and logistics platforms." },
      { title: "Seasonal adoption plan", description: "Phased rollout timed to your crop calendar, with training requirements by role and success metrics to track uptake." },
    ],
    packageHighlights: [
      "Design-only engagement: no platform commitment required",
      "Rollout phasing aligned to your seasonal operating calendar",
      "Blueprint covers IoT, field management, and logistics integrations",
    ],
    faqIntro: "Key questions about the farming operations design engagement.",
    faqs: [
      { question: "Does the design work with our existing farm management system?", answer: "Yes. The DigitalQatalyst team designs around your current platform, documenting configuration changes and integration updates needed to close operational gaps." },
      { question: "How are field operators involved in the design?", answer: "Field supervisors and operators are included in workflow workshops to ensure monitoring and scheduling flows work in practice, not just on paper." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the farming operation model, the systems in scope, and the seasonal timeline constraints before the engagement begins." },
    ],
    audience: "Agribusiness executives, farm operations managers, and agricultural technology programme leads",
    industryRelevance: "Agribusiness, food production, crop operations, and agricultural service providers investing in operational platforms",
    businessImpact: "Removes ambiguity before platform configuration begins, reducing rework and ensuring the solution works across seasonal cycles and field conditions.",
    tags: ["agribusiness", "precision-agriculture", "farm-operations"],
  },

  151: {
    description:
      "Validate where AI can improve yield prediction, irrigation scheduling, and pest or disease detection before any build investment is committed. The DigitalQatalyst team designs responsible, audit-ready workflows and deployment-ready specifications for every approved agricultural AI use case.",
    positioning:
      "Define the AI use cases that will improve yield and reduce input waste, with data readiness and responsible workflow design confirmed before build.",
    features: [
      "AI use-case evaluation: yield forecasting, irrigation optimisation, pest detection, and crop health monitoring",
      "Data readiness assessment covering satellite imagery, sensor telemetry, historical yield data, and weather feeds",
      "Responsible AI workflow design with agronomist review gates, confidence thresholds, and field override mechanisms",
      "Deployment specification including model selection criteria, monitoring approach, and seasonal retraining schedules",
    ],
    timelineMilestones: [
      "Week 1: Use-case discovery, data landscape review, and feasibility scoring",
      "Weeks 2-3: Responsible workflow design, guardrail specification, and agronomist validation",
      "Week 4: Deployment specification sign-off and build-readiness confirmation",
    ],
    deliverables: [
      { title: "Agricultural AI use-case feasibility register", description: "Each candidate scored on data availability, model complexity, and expected yield or cost improvement, with a clear go or no-go recommendation." },
      { title: "Farm data readiness report", description: "Gaps in sensor coverage, imagery resolution, historical data depth, and integration availability that must be addressed before model development." },
      { title: "Responsible farming AI workflows", description: "Designed flows for approved use cases with agronomist review points, confidence display for field operators, and documented override procedures." },
      { title: "Deployment and monitoring specification", description: "Model selection guidance, performance thresholds, seasonal retraining triggers, and field-level monitoring requirements for production use." },
    ],
    packageHighlights: [
      "Validates feasibility before any AI build investment is committed",
      "Covers yield, irrigation, pest, and crop health AI use cases",
      "Responsible by design: agronomist review gates at every decision point",
    ],
    faqIntro: "Key questions about the farming operations AI design engagement.",
    faqs: [
      { question: "Which AI use cases are most commonly explored?", answer: "Yield forecasting by field and variety, variable-rate irrigation scheduling, early pest and disease detection from imagery, and harvest timing optimisation." },
      { question: "What if our sensor and imagery coverage is incomplete?", answer: "The data readiness report identifies specific gaps. Many operations start with yield forecasting using historical records while sensor networks are expanded in parallel." },
      { question: "How do agronomists interact with AI recommendations?", answer: "Agronomist review gates are designed into every workflow with confidence displays and one-click override capability so field expertise always has the final say." },
      { question: "How do we get started?", answer: "Book a consultation with the DigitalQatalyst team to identify your highest-value AI use cases and share your current data landscape and sensor coverage." },
    ],
    audience: "Agribusiness executives, heads of agronomy, and farm operations technology leads",
    industryRelevance: "Large-scale crop, horticulture, and mixed farming operations with sufficient data infrastructure to support AI model development",
    businessImpact: "Prevents wasted investment by confirming data readiness before build, and produces responsible workflow designs that improve yield and reduce input costs without replacing agronomist judgement.",
    tags: ["precision-agriculture", "agricultural-ai", "farm-operations"],
  },

  152: {
    description:
      "Configure, integrate, and launch your farming operations platform with structured testing across field and back-office workflows, and a controlled handover that leaves your operations team self-sufficient before the next season begins.",
    positioning:
      "A managed deployment that takes your farming operations blueprint from specification to a live, tested platform aligned to your seasonal calendar.",
    features: [
      "Platform configuration against approved field monitoring, resource scheduling, and logistics workflows",
      "End-to-end integration testing with farm management systems, IoT sensor networks, and logistics providers",
      "Field acceptance testing with farm managers, supervisors, and representative field operators",
      "Seasonal go-live planning with hypercare support timed to avoid critical planting or harvest windows",
    ],
    timelineMilestones: [
      "Weeks 1-4: Environment setup, platform configuration, and integration development",
      "Weeks 5-9: System integration testing, sensor data validation, and defect resolution",
      "Weeks 10-11: Field acceptance testing and operational sign-off",
      "Week 12: Controlled go-live, hypercare, and operational handover",
    ],
    deliverables: [
      { title: "Configured farming operations platform", description: "Production-ready crop monitoring, resource scheduling, and logistics coordination capability tested against approved specifications." },
      { title: "Integration test evidence pack", description: "Test cases, results, and defect closure evidence for every connected system including farm management software, IoT networks, and logistics platforms." },
      { title: "Field acceptance sign-off", description: "Documented UAT results from farm managers and field operators confirming the platform meets operational requirements across all relevant workflows." },
      { title: "Operational handover kit", description: "Administrator guides, seasonal configuration checklist, support escalation paths, and a 30-day post-launch review schedule." },
    ],
    packageHighlights: [
      "Structured 12-week deployment with milestone-gated progress",
      "Go-live timing planned around your seasonal crop calendar",
      "Field acceptance testing with managers and operators included",
    ],
    faqIntro: "Key questions about the farming operations deployment.",
    faqs: [
      { question: "How do you handle seasonal timing constraints for go-live?", answer: "The deployment plan maps milestones to your crop calendar. The DigitalQatalyst team avoids scheduling critical testing or go-live activities during planting or harvest peaks." },
      { question: "What happens if sensor data quality issues are found during integration testing?", answer: "Data quality issues are documented, triaged, and resolved within the deployment scope where possible. Issues requiring infrastructure changes are escalated to the project sponsor." },
      { question: "How are field operators trained on the new platform?", answer: "Role-specific training is included in the deployment plan, with field-accessible guides and refresher support available during the hypercare period." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the platform, integration scope, and seasonal calendar constraints before deployment planning begins." },
    ],
    audience: "Agribusiness executives, farm operations managers, and agricultural technology programme leads",
    industryRelevance: "Agribusiness, food production, and crop operations organisations implementing or replacing farm management and field monitoring platforms",
    businessImpact: "Delivers a fully integrated, tested farming operations platform that improves yield visibility and resource scheduling accuracy from the first full season of use.",
    tags: ["agribusiness", "farm-operations", "precision-agriculture"],
  },

  153: {
    description:
      "Deploy validated AI capabilities for yield forecasting, irrigation optimisation, and pest detection into your live farming operations environment, with seasonal monitoring, agronomist override controls, and a governance handover that keeps your operations team in control.",
    positioning:
      "Put AI-powered crop management and resource optimisation into production, with responsible controls that keep agronomist expertise at the centre of every decision.",
    features: [
      "Governed model deployment for approved use cases including yield forecasting and variable-rate irrigation scheduling",
      "Field-level monitoring dashboards tracking model accuracy, recommendation adoption rates, and yield impact",
      "Agronomist review workflows and override mechanisms embedded in field management tooling",
      "Operations team enablement on model behaviour, seasonal retraining, and performance review cadence",
    ],
    timelineMilestones: [
      "Weeks 1-4: Production environment setup, data pipeline validation, and model staging",
      "Weeks 5-8: Controlled rollout to pilot fields or farm zones with close monitoring",
      "Weeks 9-10: Full rollout, override workflow validation, and seasonal baseline capture",
      "Weeks 11-12: Governance handover, monitoring confirmation, and retraining schedule agreement",
    ],
    deliverables: [
      { title: "Production farming AI capabilities", description: "Approved models live in your farm management environment with data pipelines, result logging, and field-facing interfaces active." },
      { title: "Field performance monitoring dashboard", description: "Real-time view of model recommendation accuracy, agronomist override rates, and yield or resource efficiency impact by field." },
      { title: "Agronomist override playbook", description: "Procedures for accepting, overriding, and providing feedback on AI recommendations, with escalation steps for model quality concerns." },
      { title: "AI governance handover pack", description: "Model cards, data lineage documentation, seasonal retraining schedule, and accountability assignments for ongoing responsible operation." },
    ],
    packageHighlights: [
      "Pilot field rollout before full farm deployment",
      "Seasonal retraining schedule included in governance handover",
      "Agronomist override and feedback loop built in from day one",
    ],
    faqIntro: "Key questions about the farming operations AI deployment.",
    faqs: [
      { question: "How do agronomists override AI recommendations in the field?", answer: "Override controls are accessible in the field management interface and mobile tools. All overrides are logged and feed the model's seasonal improvement cycle." },
      { question: "How do seasonal changes affect model accuracy?", answer: "Retraining schedules are designed around your crop calendar. The monitoring dashboard surfaces accuracy drift, and the DigitalQatalyst team initiates retraining at agreed trigger points." },
      { question: "What happens during extreme weather or unusual growing conditions?", answer: "Confidence thresholds lower when input data falls outside training ranges, prompting agronomist review rather than automated recommendations in edge cases." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team with your approved AI design specification to plan the production environment, pilot field selection, and data pipeline configuration." },
    ],
    audience: "Agribusiness executives, heads of agronomy, and farm operations technology leads",
    industryRelevance: "Large-scale crop, horticulture, and mixed farming operations with data infrastructure in place to support AI model deployment",
    businessImpact: "Improves yield through better forecasting and resource scheduling, reduces input waste through precision application, and keeps agronomist expertise central to every operational decision.",
    tags: ["precision-agriculture", "agricultural-ai", "farm-operations"],
  },

  154: {
    description:
      "Keep your farming operations platform performing across every season: SLA-backed system operations, monthly yield and resource performance reporting, and ongoing optimisation as your farm footprint and crop programmes evolve.",
    positioning:
      "Ongoing management of your farming operations platform so yield visibility and resource efficiency never degrade across seasons.",
    features: [
      "Monthly performance reports covering yield tracking accuracy, resource utilisation, and system health",
      "Proactive platform monitoring with incident response within agreed SLA windows",
      "Seasonal configuration updates as crop programmes, field boundaries, or equipment change",
      "Annual optimisation review identifying new capability opportunities and data quality improvements",
    ],
    timelineMilestones: [
      "Month 1: Service baseline, seasonal calendar mapping, and SLA agreement confirmation",
      "Months 2-3: First reporting cycle, initial optimisation recommendations, and configuration update cadence",
      "Ongoing: Monthly performance reports, seasonal configuration updates, and annual capability review",
    ],
    deliverables: [
      { title: "Monthly farming operations report", description: "Yield tracking accuracy, resource consumption versus plan, equipment utilisation, and system health metrics with commentary and recommended actions." },
      { title: "Incident and change log", description: "Transparent record of system incidents, configuration changes, and SLA performance for each reporting period." },
      { title: "Seasonal configuration update", description: "Platform updates reflecting new crop programmes, field boundary changes, or equipment additions before each new season begins." },
      { title: "Annual operations roadmap", description: "Forward-looking plan covering platform capability additions, data quality improvements, and structural changes aligned to the farming business plan." },
    ],
    packageHighlights: [
      "SLA-backed operations with defined incident response times",
      "Monthly yield and resource reporting included as standard",
      "Seasonal configuration updates covered as programmes evolve",
    ],
    faqIntro: "Key questions about the farming operations managed service.",
    faqs: [
      { question: "What is covered under the managed service?", answer: "Platform monitoring, incident response, seasonal configuration updates, monthly reporting, and annual optimisation reviews. Full scope is confirmed in the service agreement." },
      { question: "How are configuration updates timed around the crop calendar?", answer: "The DigitalQatalyst team schedules all configuration changes outside critical planting and harvest windows, confirmed with operations leads at the start of each season." },
      { question: "Can the service scale as we add new farms or crops?", answer: "Yes. Additional farms, fields, or crop programmes are onboarded under the service. Large structural changes are scoped and priced separately." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the platform in scope, the current configuration baseline, and the seasonal calendar before the service agreement is drafted." },
    ],
    audience: "Agribusiness executives and farm operations managers running live farming management platforms",
    industryRelevance: "Agribusiness, food production, and crop operations organisations that require consistent platform performance across seasonal cycles",
    businessImpact: "Maintains yield tracking and resource management accuracy across seasons, reduces internal IT burden, and surfaces platform improvements before they affect operational performance.",
    tags: ["agribusiness", "farm-operations", "managed-service"],
  },

  // -----------------------------------------------------------------------
  // MANUFACTURING OPERATIONS (ids 155-160)
  // -----------------------------------------------------------------------

  155: {
    description:
      "Identify where your manufacturing operations are losing throughput, masking quality issues, or running blind on downtime. The DigitalQatalyst team assesses plant operational maturity and delivers a prioritised roadmap your operations and plant leaders can act on.",
    positioning:
      "A structured plant assessment that shows where production gaps are costing throughput and quality, and what to address first.",
    features: [
      "Production throughput and OEE gap analysis across lines, shifts, and equipment classes",
      "Quality control visibility review covering defect detection, reporting accuracy, and escape rates",
      "Downtime and maintenance planning audit: planned versus unplanned maintenance ratios and root-cause tracking",
      "Prioritised improvement roadmap with effort estimates and expected throughput or quality impact",
    ],
    timelineMilestones: [
      "Days 1-2: Plant tours, production data review, and stakeholder interviews",
      "Days 3-4: OEE analysis, quality and downtime gap documentation, and benchmarking",
      "Day 5: Findings presentation, prioritised roadmap walkthrough, and next-step agreement",
    ],
    deliverables: [
      { title: "Manufacturing maturity scorecard", description: "Ratings across throughput management, quality control, downtime visibility, and production coordination, with evidence and specific gaps." },
      { title: "OEE and downtime gap report", description: "Analysis of availability, performance, and quality losses across lines and shifts, with root-cause identification for the highest-impact losses." },
      { title: "Prioritised improvement roadmap", description: "Sequenced actions with owners, effort estimates, and dependencies your plant team can execute within normal production schedules." },
      { title: "Leadership briefing pack", description: "A concise summary of findings and recommended investment for plant, operations, and finance leadership." },
    ],
    packageHighlights: [
      "Fixed-scope assessment delivered within one week",
      "Covers production, quality, and maintenance dimensions",
      "No obligation to proceed with subsequent design or deployment",
    ],
    faqIntro: "Key questions about the manufacturing operations assessment.",
    faqs: [
      { question: "What types of manufacturing environments does the assessment cover?", answer: "Discrete, process, and mixed manufacturing. The DigitalQatalyst team confirms the applicable production model and equipment categories during scoping." },
      { question: "Do you need to access our MES or ERP systems?", answer: "We review system-generated reports and operational records rather than live production systems. Any access required is read-only and agreed in advance." },
      { question: "What do we get at the end?", answer: "A manufacturing maturity scorecard, an OEE and downtime gap report, a prioritised improvement roadmap, and a leadership briefing pack." },
      { question: "How do we get started?", answer: "Request a consultation. The DigitalQatalyst team will confirm the plant scope, production environment type, and key stakeholders before work begins." },
    ],
    audience: "Plant managers, heads of manufacturing, operations directors, and continuous improvement leads",
    industryRelevance: "Manufacturers, industrial operators, and production environments across discrete, process, and mixed manufacturing sectors",
    businessImpact: "Surfaces the throughput and quality losses costing the most per shift, so improvement investment goes to the changes with the greatest return on production capacity.",
    tags: ["manufacturing", "oee", "plant-operations"],
  },

  156: {
    description:
      "Turn manufacturing improvement goals into a complete, build-ready operations blueprint: production workflow designs, quality control specifications, maintenance scheduling logic, and an adoption plan your plant teams can execute without ambiguity.",
    positioning:
      "A design engagement that produces manufacturing operations specifications ready for MES configuration and plant rollout.",
    features: [
      "Production workflow design covering scheduling, WIP tracking, line balancing, and shift handover processes",
      "Quality control specification: inspection points, defect classification, corrective action workflows, and reporting",
      "Preventive and predictive maintenance scheduling logic tied to equipment class and production calendars",
      "Plant adoption plan covering operator training, phased line rollout, and early-life support",
    ],
    timelineMilestones: [
      "Week 1: Plant review, goal alignment, and production workflow workshops with operations and quality teams",
      "Weeks 2-3: Workflow design, MES and ERP integration specification, and prototype validation",
      "Week 4: Final blueprint review, adoption planning, and build-readiness sign-off",
    ],
    deliverables: [
      { title: "Production workflow maps", description: "End-to-end flows for scheduling, WIP tracking, shift handover, and exception management across all in-scope lines and work centres." },
      { title: "Quality control specification", description: "Inspection point definitions, defect classification rules, and corrective action escalation flows documented for configuration teams." },
      { title: "Maintenance scheduling specification", description: "Preventive and condition-based maintenance rules by equipment class, with production calendar integration logic." },
      { title: "Plant adoption plan", description: "Line-by-line rollout sequence, operator training requirements, and success metrics to track uptake without disrupting production targets." },
    ],
    packageHighlights: [
      "Design-only engagement: no MES or ERP commitment required",
      "Covers production, quality, and maintenance workflow dimensions",
      "Rollout sequencing planned around your production calendar",
    ],
    faqIntro: "Key questions about the manufacturing operations design engagement.",
    faqs: [
      { question: "Does the design tie us to a specific MES platform?", answer: "No. The DigitalQatalyst team designs to your requirements first. Platform selection is informed by the design and your existing ERP landscape." },
      { question: "How are operators involved in the design process?", answer: "Line operators and shift supervisors participate in workflow workshops to ensure designs reflect actual production conditions, not just management expectations." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the lines in scope, the MES and ERP platforms in use, and any production calendar constraints before the engagement begins." },
    ],
    audience: "Plant managers, heads of manufacturing, continuous improvement leads, and operations IT managers",
    industryRelevance: "Manufacturers implementing or replacing MES platforms or improving production, quality, and maintenance workflow digitalisation",
    businessImpact: "Removes specification ambiguity before MES configuration begins, reducing implementation rework and ensuring production, quality, and maintenance workflows are aligned before go-live.",
    tags: ["manufacturing", "oee", "plant-operations"],
  },

  157: {
    description:
      "Validate which AI use cases will genuinely improve throughput, quality, and maintenance performance before committing build budget. The DigitalQatalyst team designs responsible, audit-ready workflows and deployment-ready specifications for every approved manufacturing AI application.",
    positioning:
      "Define and validate the AI use cases that will improve production output and reduce quality escapes, with data readiness confirmed before build.",
    features: [
      "AI use-case evaluation: predictive maintenance, visual quality inspection, demand-based production scheduling, and OEE anomaly detection",
      "Data readiness assessment covering sensor telemetry, MES output, maintenance records, and quality inspection data",
      "Responsible AI workflow design with quality engineer review gates, confidence thresholds, and production override mechanisms",
      "Deployment specification including model selection, monitoring approach, and retraining trigger design",
    ],
    timelineMilestones: [
      "Week 1: Use-case discovery, manufacturing data landscape review, and feasibility scoring",
      "Weeks 2-3: Responsible workflow design, guardrail specification, and plant team validation",
      "Week 4: Deployment specification sign-off and build-readiness confirmation",
    ],
    deliverables: [
      { title: "Manufacturing AI use-case feasibility register", description: "Each candidate scored on sensor data availability, model complexity, and expected OEE or quality improvement, with a clear go or no-go recommendation." },
      { title: "Plant data readiness report", description: "Gaps in sensor coverage, data labelling, MES integration, and historical quality records that must be resolved before model development." },
      { title: "Responsible manufacturing AI workflows", description: "Designed flows for approved use cases with quality engineer review points, confidence displays for operators, and documented override procedures." },
      { title: "Deployment and monitoring specification", description: "Model selection guidance, performance thresholds, production-aligned retraining triggers, and line-level monitoring requirements for production use." },
    ],
    packageHighlights: [
      "Validates feasibility before any AI build investment is committed",
      "Covers predictive maintenance, visual inspection, and scheduling AI",
      "Responsible by design: engineer review gates at every decision point",
    ],
    faqIntro: "Key questions about the manufacturing operations AI design engagement.",
    faqs: [
      { question: "Which AI use cases are most commonly explored?", answer: "Predictive maintenance from vibration and temperature data, AI-powered visual defect detection, demand-based scheduling optimisation, and OEE anomaly alerting." },
      { question: "What if our sensor infrastructure is limited?", answer: "The data readiness report identifies the minimum sensor coverage needed for each use case. Many plants start with predictive maintenance on high-value equipment while expanding coverage." },
      { question: "How do quality engineers interact with AI inspection recommendations?", answer: "AI inspection results appear alongside images in the quality workflow with confidence scores. Engineers can confirm, override, or escalate, with all decisions logged for audit." },
      { question: "How do we get started?", answer: "Book a consultation with the DigitalQatalyst team to identify your highest-value AI use cases and share your current sensor, MES, and quality data landscape." },
    ],
    audience: "Plant managers, heads of manufacturing, quality managers, and operations technology leads",
    industryRelevance: "Manufacturers with sensor instrumentation and MES data in place, looking to apply AI to reduce downtime and improve quality outcomes",
    businessImpact: "Prevents wasted AI investment by confirming data readiness before build, and produces responsible workflow designs that improve OEE and quality without removing operator and engineer oversight.",
    tags: ["manufacturing-ai", "predictive-maintenance", "plant-operations"],
  },

  158: {
    description:
      "Configure, integrate, and launch your manufacturing operations platform with structured testing across production, quality, and maintenance workflows, and a controlled handover that leaves your plant team ready to operate independently.",
    positioning:
      "A managed deployment that takes your manufacturing blueprint from specification to a live, production-tested platform.",
    features: [
      "MES configuration against approved production scheduling, WIP tracking, and quality control workflows",
      "End-to-end integration testing with ERP, sensor networks, SCADA, and maintenance management systems",
      "Operator and supervisor acceptance testing across all in-scope lines and work centres",
      "Hypercare period covering production issue resolution and adoption support in the first weeks of live operation",
    ],
    timelineMilestones: [
      "Weeks 1-4: Environment setup, MES configuration, and integration development",
      "Weeks 5-9: System and integration testing, data validation, and defect resolution",
      "Weeks 10-11: Operator acceptance testing and plant sign-off",
      "Week 12: Controlled go-live, hypercare, and operational handover",
    ],
    deliverables: [
      { title: "Configured manufacturing operations platform", description: "Production-ready MES with scheduling, WIP tracking, quality control, and maintenance modules configured and tested against approved specifications." },
      { title: "Integration test evidence pack", description: "Test cases, execution results, and defect closure evidence for every connected system including ERP, SCADA, and maintenance management." },
      { title: "Operator acceptance sign-off", description: "Documented UAT results from operators, supervisors, and quality staff confirming the platform meets production requirements across all lines." },
      { title: "Operational handover kit", description: "Administrator guides, shift-change procedures, support escalation paths, and a 30-day post-launch review schedule." },
    ],
    packageHighlights: [
      "Structured 12-week deployment with milestone-gated progress",
      "Operator acceptance testing across all in-scope production lines",
      "Hypercare support through the first weeks of live production",
    ],
    faqIntro: "Key questions about the manufacturing operations deployment.",
    faqs: [
      { question: "How do you minimise disruption to production during deployment?", answer: "Configuration and integration work is done in a staging environment. Cutover is scheduled during planned maintenance windows and validated with a parallel-run period before full go-live." },
      { question: "What happens if sensor or SCADA integration issues are discovered during testing?", answer: "Integration issues are documented and triaged. The DigitalQatalyst team resolves issues within deployment scope. Changes affecting production infrastructure are escalated for separate planning." },
      { question: "How are shift workers trained without impacting production targets?", answer: "Training sessions are scheduled around shift patterns. Role-specific quick-reference guides are available on the shop floor from day one of go-live." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the MES platform, integration scope, and production calendar constraints before deployment planning begins." },
    ],
    audience: "Plant managers, heads of manufacturing, operations IT managers, and continuous improvement leads",
    industryRelevance: "Manufacturers implementing or replacing MES platforms across discrete, process, or mixed production environments",
    businessImpact: "Delivers a fully integrated, tested manufacturing platform that improves production visibility, quality control accuracy, and maintenance scheduling from the first week of live operation.",
    tags: ["manufacturing", "oee", "plant-operations"],
  },

  159: {
    description:
      "Deploy validated AI capabilities for predictive maintenance, visual quality inspection, and production scheduling into your live manufacturing environment, with real-time monitoring, engineer override controls, and a governance handover that keeps your plant team in control.",
    positioning:
      "Put AI-powered maintenance, quality, and scheduling capabilities into production with the oversight controls your plant and quality teams require.",
    features: [
      "Governed model deployment for approved use cases including predictive maintenance and visual defect detection",
      "Line-level dashboards tracking model accuracy, engineer override rates, and production impact",
      "Quality engineer and maintenance technician override workflows embedded in existing plant systems",
      "Plant team enablement on model behaviour, retraining triggers, and monthly performance review",
    ],
    timelineMilestones: [
      "Weeks 1-4: Production environment setup, sensor data pipeline validation, and model staging",
      "Weeks 5-8: Controlled rollout to pilot lines with close monitoring",
      "Weeks 9-10: Full plant rollout, override workflow validation, and performance baseline capture",
      "Weeks 11-12: Governance handover, monitoring confirmation, and retraining schedule agreement",
    ],
    deliverables: [
      { title: "Production manufacturing AI capabilities", description: "Approved models live in your plant environment with sensor data pipelines, alert logging, and operator and engineer-facing interfaces active." },
      { title: "Plant performance monitoring dashboard", description: "Real-time view of model accuracy, maintenance prediction hit rates, visual inspection confidence, and production scheduling deviation by line." },
      { title: "Engineer and operator override playbook", description: "Procedures for accepting, overriding, and feeding back on AI recommendations, with escalation steps for model quality concerns." },
      { title: "AI governance handover pack", description: "Model cards, sensor data lineage, retraining schedule, and accountability assignments for ongoing responsible plant operation." },
    ],
    packageHighlights: [
      "Pilot line rollout before full plant deployment",
      "Override and feedback workflows embedded in existing plant systems",
      "Retraining schedule and drift monitoring included in handover",
    ],
    faqIntro: "Key questions about the manufacturing operations AI deployment.",
    faqs: [
      { question: "How do maintenance technicians interact with predictive maintenance alerts?", answer: "Alerts surface in the maintenance management system with confidence scores, recommended actions, and one-click override. All actions are logged for model improvement." },
      { question: "What happens if a predictive maintenance model produces frequent false alarms?", answer: "False-alarm rates are tracked in the monitoring dashboard. The DigitalQatalyst team adjusts model thresholds during the pilot phase before full plant rollout." },
      { question: "How is model accuracy maintained as equipment ages or is replaced?", answer: "Retraining triggers are defined in the governance handover pack. Equipment change events automatically flag affected models for review and retraining." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team with your approved AI design specification to plan the production environment, sensor pipeline access, and pilot line selection." },
    ],
    audience: "Plant managers, heads of manufacturing, quality managers, and maintenance managers",
    industryRelevance: "Manufacturers with sensor instrumentation and MES data infrastructure deploying AI to reduce unplanned downtime and improve quality outcomes",
    businessImpact: "Reduces unplanned downtime through accurate maintenance prediction, cuts quality escape rates through consistent visual inspection, and improves scheduling efficiency, with engineer oversight maintained at every decision point.",
    tags: ["manufacturing-ai", "predictive-maintenance", "plant-operations"],
  },

  160: {
    description:
      "Keep your manufacturing operations platform and production performance metrics running reliably: SLA-backed system operations, monthly OEE and quality reporting, and ongoing optimisation as your plant footprint and production programmes grow.",
    positioning:
      "Ongoing management of your manufacturing platform so production visibility, quality controls, and maintenance scheduling never degrade.",
    features: [
      "Monthly OEE, quality, and maintenance performance reports with trend analysis and recommended actions",
      "Proactive platform monitoring with incident response within agreed SLA windows",
      "Configuration updates as production lines, equipment classes, or quality standards change",
      "Quarterly optimisation reviews identifying throughput improvement and technical debt reduction opportunities",
    ],
    timelineMilestones: [
      "Month 1: Service baseline, production calendar mapping, and SLA agreement confirmation",
      "Months 2-3: First reporting cycle, initial optimisation recommendations, and configuration update cadence established",
      "Ongoing: Monthly OEE and quality reports, quarterly optimisation sessions, and annual plant roadmap",
    ],
    deliverables: [
      { title: "Monthly manufacturing performance report", description: "OEE by line and shift, quality defect trends, maintenance adherence, and system health metrics with commentary and prioritised actions." },
      { title: "Incident and change log", description: "Transparent record of system incidents, configuration changes, and SLA performance across each reporting period." },
      { title: "Quarterly plant optimisation review", description: "Analysis of production bottlenecks, quality control gaps, and maintenance scheduling accuracy with prioritised improvement actions." },
      { title: "Annual manufacturing technology roadmap", description: "Forward-looking plan covering platform upgrades, new production line integrations, and capability additions aligned to the plant business plan." },
    ],
    packageHighlights: [
      "SLA-backed operations with defined incident response times",
      "Monthly OEE and quality reporting included as standard",
      "Configuration updates covered as production programmes change",
    ],
    faqIntro: "Key questions about the manufacturing operations managed service.",
    faqs: [
      { question: "What is covered under the managed service?", answer: "Platform monitoring, incident response, configuration updates, monthly reporting, and quarterly optimisation reviews. Full scope is confirmed in the service agreement." },
      { question: "How are configuration changes handled during production?", answer: "All configuration changes are tested in a staging environment and scheduled for production during planned maintenance windows, confirmed with plant leads in advance." },
      { question: "Can the service scale to cover new production lines or sites?", answer: "Yes. New lines or sites are onboarded under the service. Large expansions are scoped and priced separately." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the platform scope, current configuration baseline, and production calendar before the service agreement is drafted." },
    ],
    audience: "Plant managers, heads of manufacturing, and operations IT managers running live production management platforms",
    industryRelevance: "Manufacturers requiring consistent MES performance, OEE visibility, and quality control accuracy across production operations",
    businessImpact: "Maintains production visibility and quality control accuracy as operations scale, reduces IT overhead on platform maintenance, and surfaces throughput improvements before they impact production targets.",
    tags: ["manufacturing", "oee", "managed-service"],
  },

  // -----------------------------------------------------------------------
  // INFRASTRUCTURE OPERATIONS (ids 161-166)
  // -----------------------------------------------------------------------

  161: {
    description:
      "Identify where your infrastructure operations are creating asset reliability risk, maintenance planning gaps, or field productivity loss. The DigitalQatalyst team assesses operational maturity across your asset portfolio and returns a prioritised roadmap your asset and operations leaders can act on.",
    positioning:
      "A structured assessment that shows where infrastructure asset gaps create reliability and service continuity risk, and what to prioritise first.",
    features: [
      "Asset registry and condition visibility audit across your infrastructure portfolio",
      "Maintenance planning review: planned versus reactive maintenance ratios and work order management accuracy",
      "Field workforce productivity gap analysis covering job scheduling, parts availability, and travel efficiency",
      "Prioritised improvement roadmap with effort estimates and expected reliability or cost impact",
    ],
    timelineMilestones: [
      "Days 1-2: Asset portfolio review, operational data access, and stakeholder interviews",
      "Days 3-4: Maintenance and field operations analysis, gap documentation, and benchmarking",
      "Day 5: Findings presentation, prioritised roadmap walkthrough, and next-step agreement",
    ],
    deliverables: [
      { title: "Infrastructure operations maturity scorecard", description: "Ratings across asset visibility, maintenance planning, field productivity, and service continuity controls, with evidence and specific gaps." },
      { title: "Asset and maintenance gap report", description: "Documented gaps in condition monitoring, work order management, parts planning, and field scheduling, ranked by reliability and service risk." },
      { title: "Prioritised improvement roadmap", description: "Sequenced actions with owners, effort estimates, and dependencies your operations team can act on within normal maintenance cycles." },
      { title: "Leadership briefing pack", description: "A concise summary of findings and recommended investment for asset management and operations leadership." },
    ],
    packageHighlights: [
      "Fixed-scope assessment delivered within one week",
      "Covers asset visibility, maintenance, and field operations dimensions",
      "No obligation to proceed with subsequent design or deployment",
    ],
    faqIntro: "Key questions about the infrastructure operations assessment.",
    faqs: [
      { question: "What types of infrastructure assets does the assessment cover?", answer: "Utilities, transport, real estate, facilities, energy, and other asset-intensive environments. The DigitalQatalyst team confirms the asset classes in scope during scoping." },
      { question: "Do you need access to our EAM or CMMS systems?", answer: "We review system-generated reports and asset records rather than live systems. Any access required is read-only and agreed in advance." },
      { question: "What do we get at the end?", answer: "A maturity scorecard, an asset and maintenance gap report, a prioritised improvement roadmap, and a leadership briefing pack." },
      { question: "How do we get started?", answer: "Request a consultation. The DigitalQatalyst team will confirm the asset classes in scope, operational environment type, and key stakeholders before work begins." },
    ],
    audience: "Asset managers, heads of infrastructure operations, maintenance directors, and field operations leads",
    industryRelevance: "Utilities, transport, real estate, facilities management, energy, and other asset-intensive operators",
    businessImpact: "Surfaces the asset visibility and maintenance planning gaps creating the greatest reliability risk, so investment goes to the improvements with the most direct impact on service continuity.",
    tags: ["asset-management", "infrastructure", "maintenance-operations"],
  },

  162: {
    description:
      "Turn infrastructure operations improvement goals into a complete, build-ready blueprint: asset management workflows, maintenance scheduling logic, field workforce coordination specifications, and an adoption plan your operations teams can execute without ambiguity.",
    positioning:
      "A design engagement that produces infrastructure operations specifications ready for EAM configuration and field rollout.",
    features: [
      "Asset lifecycle workflow design covering inspection, condition assessment, work order creation, and disposal",
      "Preventive and condition-based maintenance scheduling logic tied to asset class and criticality",
      "Field workforce coordination specification: job scheduling, parts and materials management, and completion recording",
      "Operations adoption plan covering technician training, mobile tool rollout, and early-life support",
    ],
    timelineMilestones: [
      "Week 1: Asset portfolio review, goal alignment, and operations workflow workshops",
      "Weeks 2-3: Workflow design, EAM and GIS integration specification, and prototype validation with field teams",
      "Week 4: Final blueprint review, adoption planning, and build-readiness sign-off",
    ],
    deliverables: [
      { title: "Asset lifecycle workflow maps", description: "End-to-end flows for inspection, condition recording, work order generation, field execution, and asset disposal across all in-scope asset classes." },
      { title: "Maintenance scheduling specification", description: "Preventive and condition-based maintenance rules by asset class and criticality, with production calendar and regulatory compliance integration." },
      { title: "Field operations specification", description: "Job scheduling logic, parts and materials management rules, and mobile completion recording requirements for field technicians." },
      { title: "Operations adoption plan", description: "Technician training requirements, mobile tool rollout sequence, and success metrics to track field adoption without disrupting service continuity." },
    ],
    packageHighlights: [
      "Design-only engagement: no EAM or field management commitment required",
      "Covers asset lifecycle, maintenance, and field workforce dimensions",
      "Mobile and field-first design approach throughout",
    ],
    faqIntro: "Key questions about the infrastructure operations design engagement.",
    faqs: [
      { question: "Does the design work with our existing EAM or CMMS platform?", answer: "Yes. The DigitalQatalyst team designs around your current platform, documenting configuration changes and integration updates needed to close the operational gaps identified." },
      { question: "How are field technicians involved in the design process?", answer: "Field technicians and supervisors participate in workflow workshops to ensure job scheduling, parts management, and mobile recording flows work in real operating conditions." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the asset classes in scope, the EAM and field management platforms in use, and any regulatory compliance requirements." },
    ],
    audience: "Asset managers, maintenance directors, field operations leads, and infrastructure IT programme managers",
    industryRelevance: "Utilities, transport, real estate, facilities management, energy, and other asset-intensive organisations implementing or improving EAM or field management platforms",
    businessImpact: "Removes specification ambiguity before EAM configuration begins, reducing implementation rework and ensuring maintenance, field, and asset lifecycle workflows are aligned before go-live.",
    tags: ["asset-management", "infrastructure", "maintenance-operations"],
  },

  163: {
    description:
      "Validate which AI use cases will genuinely improve asset reliability, maintenance scheduling, and field productivity before committing build budget. The DigitalQatalyst team designs responsible, audit-ready workflows and deployment-ready specifications for every approved infrastructure AI application.",
    positioning:
      "Define and validate the AI capabilities that will improve asset uptime and field efficiency, with data readiness and responsible design confirmed before build.",
    features: [
      "AI use-case evaluation: predictive asset failure, condition-based maintenance scheduling, field route optimisation, and fault pattern detection",
      "Data readiness assessment covering sensor telemetry, maintenance history, inspection records, and GIS data",
      "Responsible AI workflow design with engineer review gates, confidence thresholds, and field override mechanisms",
      "Deployment specification including model selection criteria, monitoring approach, and retraining trigger design",
    ],
    timelineMilestones: [
      "Week 1: Use-case discovery, asset data landscape review, and feasibility scoring",
      "Weeks 2-3: Responsible workflow design, guardrail specification, and operations team validation",
      "Week 4: Deployment specification sign-off and build-readiness confirmation",
    ],
    deliverables: [
      { title: "Infrastructure AI use-case feasibility register", description: "Each candidate scored on sensor data availability, asset history quality, and expected reliability or cost improvement, with a clear go or no-go recommendation." },
      { title: "Asset data readiness report", description: "Gaps in sensor coverage, inspection record completeness, maintenance history depth, and GIS data quality that must be addressed before model development." },
      { title: "Responsible infrastructure AI workflows", description: "Designed flows for approved use cases with engineer review points, confidence displays for field technicians, and documented override procedures." },
      { title: "Deployment and monitoring specification", description: "Model selection guidance, performance thresholds, asset-aligned retraining triggers, and fleet or portfolio-level monitoring requirements for production use." },
    ],
    packageHighlights: [
      "Validates feasibility before any AI build investment is committed",
      "Covers predictive failure, condition-based maintenance, and route optimisation AI",
      "Responsible by design: engineer review gates at every decision point",
    ],
    faqIntro: "Key questions about the infrastructure operations AI design engagement.",
    faqs: [
      { question: "Which AI use cases are most commonly explored?", answer: "Predictive asset failure from sensor and maintenance history data, condition-based maintenance scheduling, field workforce route optimisation, and fault pattern detection across asset networks." },
      { question: "What if our sensor coverage is limited to a subset of assets?", answer: "The data readiness report identifies the minimum coverage needed for each use case. Many organisations start with highest-criticality assets while expanding sensor coverage in parallel." },
      { question: "How do field engineers interact with AI maintenance recommendations?", answer: "Recommendations appear in the field management mobile tool with confidence scores and recommended actions. Engineers can confirm, reschedule, or override, with all decisions logged." },
      { question: "How do we get started?", answer: "Book a consultation with the DigitalQatalyst team to identify your highest-value AI use cases and share your current asset data, sensor, and maintenance record landscape." },
    ],
    audience: "Asset managers, maintenance directors, heads of infrastructure operations, and operations technology leads",
    industryRelevance: "Asset-intensive infrastructure operators with sensor data and maintenance histories sufficient to support AI model development",
    businessImpact: "Prevents wasted AI investment by confirming data readiness before build, and produces responsible workflow designs that improve asset uptime and field efficiency without removing engineer oversight.",
    tags: ["infrastructure-ai", "asset-management", "predictive-maintenance"],
  },

  164: {
    description:
      "Configure, integrate, and launch your infrastructure operations platform with structured testing across asset management, maintenance, and field workforce workflows, and a controlled handover that leaves your operations team ready to manage assets independently.",
    positioning:
      "A managed deployment that takes your infrastructure operations blueprint from specification to a live, field-tested platform.",
    features: [
      "EAM and field management platform configuration against approved asset lifecycle, maintenance, and job scheduling workflows",
      "End-to-end integration testing with GIS, sensor networks, finance systems, and regulatory reporting platforms",
      "Field technician and supervisor acceptance testing across all in-scope asset classes and work order types",
      "Hypercare period covering field issue resolution and adoption support in the first weeks of live operation",
    ],
    timelineMilestones: [
      "Weeks 1-4: Environment setup, EAM configuration, and integration development",
      "Weeks 5-9: System integration testing, asset data migration validation, and defect resolution",
      "Weeks 10-11: Field acceptance testing and operational sign-off",
      "Week 12: Controlled go-live, hypercare, and operational handover",
    ],
    deliverables: [
      { title: "Configured infrastructure operations platform", description: "Production-ready EAM with asset lifecycle management, maintenance scheduling, work order management, and field coordination configured and tested." },
      { title: "Integration test evidence pack", description: "Test cases, results, and defect closure evidence for every connected system including GIS, sensor networks, finance, and regulatory reporting." },
      { title: "Field acceptance sign-off", description: "Documented UAT results from technicians, supervisors, and asset managers confirming the platform meets operational requirements across all asset classes." },
      { title: "Operational handover kit", description: "Administrator guides, field supervisor quick-start pack, support escalation paths, and a 30-day post-launch review schedule." },
    ],
    packageHighlights: [
      "Structured 12-week deployment with milestone-gated progress",
      "Field technician acceptance testing across all in-scope asset types",
      "Hypercare support through the first weeks of live field operations",
    ],
    faqIntro: "Key questions about the infrastructure operations deployment.",
    faqs: [
      { question: "How do you handle asset data migration from legacy CMMS systems?", answer: "Asset data migration is included in the deployment scope. The DigitalQatalyst team validates data completeness and asset hierarchy accuracy before cutover." },
      { question: "What happens if GIS or sensor integration issues are found during testing?", answer: "Issues are documented and triaged. The DigitalQatalyst team resolves items within deployment scope. Infrastructure or network issues are escalated for separate planning." },
      { question: "How are mobile tools rolled out to field technicians?", answer: "Mobile device and application setup is included in the deployment. Field training sessions are scheduled to minimise service disruption." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the EAM platform, integration scope, asset data migration requirements, and field team size before deployment planning begins." },
    ],
    audience: "Asset managers, maintenance directors, field operations leads, and infrastructure IT programme managers",
    industryRelevance: "Utilities, transport, real estate, facilities, energy, and other asset-intensive operators implementing or replacing EAM or field management platforms",
    businessImpact: "Delivers a fully integrated, field-tested infrastructure operations platform that improves asset visibility, maintenance scheduling accuracy, and field productivity from the first week of live operation.",
    tags: ["asset-management", "infrastructure", "maintenance-operations"],
  },

  165: {
    description:
      "Deploy validated AI capabilities for predictive asset failure, condition-based maintenance, and field route optimisation into your live infrastructure operations environment, with real-time monitoring, engineer override controls, and a governance handover that keeps your operations team in control.",
    positioning:
      "Put AI-powered asset reliability and field optimisation capabilities into production with the oversight and audit controls your operations leadership requires.",
    features: [
      "Governed model deployment for approved use cases including predictive failure and condition-based maintenance scheduling",
      "Portfolio-level dashboards tracking model accuracy, maintenance prediction hit rates, and field productivity impact",
      "Engineer and technician override workflows embedded in EAM and field management tools",
      "Operations team enablement on model behaviour, retraining triggers, and quarterly performance review",
    ],
    timelineMilestones: [
      "Weeks 1-4: Production environment setup, sensor data pipeline validation, and model staging",
      "Weeks 5-8: Controlled rollout to pilot asset classes with close monitoring",
      "Weeks 9-10: Full portfolio rollout, override workflow validation, and performance baseline capture",
      "Weeks 11-12: Governance handover, monitoring confirmation, and retraining schedule agreement",
    ],
    deliverables: [
      { title: "Production infrastructure AI capabilities", description: "Approved models live in your EAM environment with sensor pipelines, prediction logging, and technician-facing recommendation interfaces active." },
      { title: "Asset portfolio monitoring dashboard", description: "Real-time view of prediction accuracy, maintenance intervention hit rates, technician override rates, and field productivity impact by asset class." },
      { title: "Engineer and technician override playbook", description: "Procedures for accepting, deferring, or overriding AI maintenance recommendations, with escalation steps for model quality concerns." },
      { title: "AI governance handover pack", description: "Model cards, sensor data lineage, asset-aligned retraining schedule, and accountability assignments for ongoing responsible operation." },
    ],
    packageHighlights: [
      "Pilot asset class rollout before full portfolio deployment",
      "Override and feedback workflows embedded in existing field tools",
      "Retraining schedule aligned to asset inspection and data refresh cycles",
    ],
    faqIntro: "Key questions about the infrastructure operations AI deployment.",
    faqs: [
      { question: "How do field technicians receive AI maintenance recommendations?", answer: "Recommendations appear in the field management mobile tool with priority, confidence score, and recommended action. Technicians can accept, defer, or override with a reason captured for model improvement." },
      { question: "What happens if a predictive failure model produces frequent false alerts?", answer: "False-alert rates are tracked in the monitoring dashboard. Threshold adjustments are made during the pilot phase before full portfolio rollout." },
      { question: "How is model performance maintained as assets age or the network expands?", answer: "Retraining triggers are defined in the governance handover pack. Asset age events and new asset additions automatically flag affected models for review." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team with your approved AI design specification to plan the production environment, sensor pipeline access, and pilot asset class selection." },
    ],
    audience: "Asset managers, maintenance directors, heads of infrastructure operations, and operations technology leads",
    industryRelevance: "Asset-intensive infrastructure operators with sensor coverage and maintenance history data sufficient to support AI model production deployment",
    businessImpact: "Reduces unplanned asset failures, cuts reactive maintenance costs, and improves field workforce productivity, with engineer and technician oversight maintained at every AI decision point.",
    tags: ["infrastructure-ai", "asset-management", "predictive-maintenance"],
  },

  166: {
    description:
      "Keep your infrastructure operations platform and asset performance metrics running reliably: SLA-backed system operations, monthly asset health and maintenance reporting, and ongoing optimisation as your asset portfolio and regulatory requirements evolve.",
    positioning:
      "Ongoing management of your infrastructure operations platform so asset visibility, maintenance scheduling, and field coordination never degrade.",
    features: [
      "Monthly asset health and maintenance performance reports with reliability trend analysis",
      "Proactive platform monitoring with incident response within agreed SLA windows",
      "Configuration updates as asset portfolios, maintenance standards, or regulatory requirements change",
      "Quarterly optimisation reviews identifying reliability improvement and field productivity opportunities",
    ],
    timelineMilestones: [
      "Month 1: Service baseline, asset portfolio mapping, and SLA agreement confirmation",
      "Months 2-3: First reporting cycle, initial optimisation recommendations, and configuration update cadence",
      "Ongoing: Monthly asset health reports, quarterly optimisation sessions, and annual infrastructure roadmap",
    ],
    deliverables: [
      { title: "Monthly asset health and maintenance report", description: "Planned versus reactive maintenance ratios, work order completion rates, asset condition trends, and system health metrics with recommended actions." },
      { title: "Incident and change log", description: "Transparent record of platform incidents, configuration changes, and SLA performance across each reporting period." },
      { title: "Quarterly infrastructure optimisation review", description: "Analysis of maintenance scheduling accuracy, field workforce productivity, and asset reliability trends with prioritised improvement actions." },
      { title: "Annual infrastructure technology roadmap", description: "Forward-looking plan covering platform updates, new asset class integrations, and capability additions aligned to portfolio strategy and regulatory obligations." },
    ],
    packageHighlights: [
      "SLA-backed operations with defined incident response times",
      "Monthly asset health and maintenance reporting as standard",
      "Configuration updates covered as the asset portfolio evolves",
    ],
    faqIntro: "Key questions about the infrastructure operations managed service.",
    faqs: [
      { question: "What is covered under the managed service?", answer: "Platform monitoring, incident response, configuration updates, monthly reporting, and quarterly optimisation reviews. Full scope is confirmed in the service agreement." },
      { question: "How are regulatory compliance updates to maintenance standards handled?", answer: "Compliance-driven configuration changes are assessed, implemented in a test environment, validated, and promoted to production within the agreed change management process." },
      { question: "Can the service scale to cover additional asset classes or new sites?", answer: "Yes. New asset classes and sites are onboarded under the service. Large portfolio expansions are scoped and priced separately." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the EAM platform, asset portfolio scope, and SLA requirements before the service agreement is drafted." },
    ],
    audience: "Asset managers, maintenance directors, and infrastructure IT managers running live EAM and field management platforms",
    industryRelevance: "Utilities, transport, real estate, facilities, energy, and other asset-intensive operators requiring consistent platform performance and regulatory compliance",
    businessImpact: "Maintains asset visibility and maintenance scheduling accuracy as portfolios grow, reduces IT overhead on EAM maintenance, and surfaces reliability improvements before they affect service continuity.",
    tags: ["asset-management", "infrastructure", "managed-service"],
  },

  // -----------------------------------------------------------------------
  // GOVERNMENT OPERATIONS (ids 167-172)
  // -----------------------------------------------------------------------

  167: {
    description:
      "Identify where your government operations and citizen services are creating processing backlogs, transparency gaps, or cross-agency coordination failures. The DigitalQatalyst team assesses operational maturity and returns a prioritised roadmap your programme leaders can act on.",
    positioning:
      "A structured assessment that reveals where government operational gaps reduce citizen service quality and what to address first.",
    features: [
      "Citizen service delivery review: end-to-end process mapping, touchpoint analysis, and waiting time measurement",
      "Cross-agency coordination audit covering data sharing, referral workflows, and information handoff accuracy",
      "Back-office processing efficiency review: approval queues, manual steps, and regulatory compliance controls",
      "Prioritised improvement roadmap with effort estimates and expected service quality and efficiency impact",
    ],
    timelineMilestones: [
      "Days 1-2: Service inventory review, process documentation access, and stakeholder interviews",
      "Days 3-4: Service delivery analysis, cross-agency coordination review, and gap documentation",
      "Day 5: Findings presentation, prioritised roadmap walkthrough, and next-step agreement",
    ],
    deliverables: [
      { title: "Government operations maturity scorecard", description: "Ratings across citizen service delivery, back-office processing, cross-agency coordination, and transparency controls, with evidence and specific gaps." },
      { title: "Service delivery gap report", description: "Documented process bottlenecks, coordination failures, and compliance control gaps ranked by citizen impact and operational risk." },
      { title: "Prioritised improvement roadmap", description: "Sequenced actions with named owners, effort estimates, and dependencies your programme team can act on within normal governance cycles." },
      { title: "Leadership and ministerial briefing pack", description: "A concise summary of findings and recommended investment for digital government and programme leadership." },
    ],
    packageHighlights: [
      "Fixed-scope assessment delivered within one week",
      "Covers citizen service, back-office, and cross-agency dimensions",
      "No obligation to proceed with subsequent design or deployment",
    ],
    faqIntro: "Key questions about the government operations assessment.",
    faqs: [
      { question: "Which government functions does the assessment cover?", answer: "The scope is confirmed with your programme leads before engagement. Common areas include licensing, grants, permits, benefits processing, and case management." },
      { question: "Do you need access to case management or citizen data systems?", answer: "We review process documentation and system outputs rather than live citizen data. Any access required is read-only, data-minimised, and agreed with your data governance lead in advance." },
      { question: "What do we get at the end?", answer: "A maturity scorecard, a service delivery gap report, a prioritised improvement roadmap, and a leadership briefing pack." },
      { question: "How do we get started?", answer: "Request a consultation. The DigitalQatalyst team will confirm the services and functions in scope, data access constraints, and key stakeholders before work begins." },
    ],
    audience: "Digital government directors, programme leaders, heads of service delivery, and chief operating officers in public sector organisations",
    industryRelevance: "Ministries, authorities, agencies, municipalities, and public service organisations pursuing digital and operational improvement",
    businessImpact: "Surfaces the processing bottlenecks and coordination gaps reducing citizen service quality most, so investment goes to the improvements with the greatest public value return.",
    tags: ["digital-government", "citizen-services", "public-sector"],
  },

  168: {
    description:
      "Turn government operations and citizen service improvement goals into a complete, build-ready blueprint: service journey designs, back-office workflow specifications, cross-agency integration patterns, and an adoption plan your delivery teams can execute within public sector governance.",
    positioning:
      "A design engagement that produces government operations and citizen service specifications ready for platform configuration and delivery.",
    features: [
      "Citizen journey design across all in-scope services: application, processing, notification, and appeals flows",
      "Back-office workflow specification covering approvals, case management, compliance checks, and audit trails",
      "Cross-agency data sharing and referral workflow design with privacy and regulatory compliance built in",
      "Public sector adoption plan covering staff training, phased rollout, and accessibility compliance requirements",
    ],
    timelineMilestones: [
      "Week 1: Service and process review, goal alignment, and citizen and staff journey workshops",
      "Weeks 2-3: Workflow design, integration specification, and prototype validation with service teams",
      "Week 4: Final blueprint review, adoption planning, and build-readiness sign-off",
    ],
    deliverables: [
      { title: "Citizen journey maps", description: "End-to-end service flows from initial application through processing, decision, notification, and appeals across all in-scope government services." },
      { title: "Back-office workflow specification", description: "Approval queues, case assignment rules, compliance check procedures, and audit trail requirements documented for configuration and development teams." },
      { title: "Cross-agency integration design", description: "Data sharing patterns, referral workflow logic, and privacy compliance controls for all inter-agency touchpoints in scope." },
      { title: "Public sector adoption plan", description: "Phased rollout sequence with staff training requirements by role, accessibility compliance checklist, and service continuity plan during transition." },
    ],
    packageHighlights: [
      "Design-only engagement: no platform commitment required",
      "Privacy and regulatory compliance built into every integration design",
      "Citizen accessibility standards addressed throughout the design",
    ],
    faqIntro: "Key questions about the government operations design engagement.",
    faqs: [
      { question: "How do you ensure the design meets accessibility obligations?", answer: "Accessibility requirements are incorporated from the first workshop. The DigitalQatalyst team aligns designs to the applicable standard, such as WCAG 2.1 AA, and documents compliance evidence." },
      { question: "How are citizens involved in the design process?", answer: "Where the programme governance permits, representative citizen research or usability review is incorporated to validate that service journeys work for the intended audience." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the services and functions in scope, the platforms in use, and any procurement or governance constraints before the engagement begins." },
    ],
    audience: "Digital government directors, programme leaders, heads of service design, and chief operating officers in public sector organisations",
    industryRelevance: "Ministries, authorities, agencies, municipalities, and public service organisations designing or redesigning citizen-facing and back-office operations",
    businessImpact: "Removes ambiguity before platform configuration begins, reducing delivery rework and ensuring citizen service journeys, back-office processes, and cross-agency integrations are aligned before build.",
    tags: ["digital-government", "citizen-services", "public-sector"],
  },

  169: {
    description:
      "Validate where AI can improve government service processing speed, decision support, and cross-agency coordination before committing build budget. The DigitalQatalyst team designs responsible, audit-ready AI workflows and deployment-ready specifications that meet public sector accountability requirements.",
    positioning:
      "Define and validate the AI use cases that will improve citizen service quality and processing efficiency, with responsible design and public sector accountability built in.",
    features: [
      "AI use-case evaluation: automated eligibility checking, document classification, processing queue prioritisation, and risk-based compliance flagging",
      "Data readiness assessment covering case management records, document stores, and inter-agency data sharing agreements",
      "Responsible AI workflow design with case officer review gates, explainability requirements, and citizen appeal rights preserved",
      "Deployment specification aligned to public sector AI policy, including bias testing, audit logging, and accountability assignment",
    ],
    timelineMilestones: [
      "Week 1: Use-case discovery, government data landscape review, and feasibility scoring",
      "Weeks 2-3: Responsible workflow design, accountability framework specification, and programme team validation",
      "Week 4: Deployment specification sign-off and build-readiness confirmation",
    ],
    deliverables: [
      { title: "Government AI use-case feasibility register", description: "Each candidate scored on data availability, regulatory permissibility, and expected service quality or processing efficiency improvement, with a go or no-go recommendation." },
      { title: "Government data readiness report", description: "Gaps in case management data quality, document classification coverage, and inter-agency sharing agreements that must be resolved before model development." },
      { title: "Responsible government AI workflows", description: "Designed flows for approved use cases with case officer review points, citizen-facing explainability, appeal rights preserved, and audit logging at every decision point." },
      { title: "Public sector AI deployment specification", description: "Model selection guidance, bias testing requirements, performance thresholds, audit log design, and accountability assignments aligned to applicable public sector AI policy." },
    ],
    packageHighlights: [
      "Validates feasibility and regulatory permissibility before any build investment",
      "Responsible by design: case officer review, explainability, and citizen appeal rights built in",
      "Aligned to public sector AI accountability and transparency requirements",
    ],
    faqIntro: "Key questions about the government operations AI design engagement.",
    faqs: [
      { question: "Which AI use cases are most commonly explored in government?", answer: "Automated eligibility pre-screening, intelligent document classification, risk-based case prioritisation, and back-office processing queue optimisation are the most common starting points." },
      { question: "How do you handle the legal and policy requirements for automated government decisions?", answer: "Accountability, explainability, and citizen appeal rights are designed into every workflow from the start. The DigitalQatalyst team confirms the applicable legal framework during scoping." },
      { question: "What if citizen data cannot be used for AI model training?", answer: "Synthetic data, anonymised record sets, and privacy-preserving training techniques are explored during the data readiness phase. Use cases requiring live citizen data are flagged for separate legal review." },
      { question: "How do we get started?", answer: "Book a consultation with the DigitalQatalyst team to identify your highest-value AI use cases and confirm data availability, legal constraints, and programme governance requirements." },
    ],
    audience: "Digital government directors, heads of service delivery, data and AI ethics leads, and programme leaders in public sector organisations",
    industryRelevance: "Ministries, authorities, agencies, and municipalities exploring AI to improve citizen service processing speed and decision support quality",
    businessImpact: "Prevents wasted AI investment by confirming feasibility and regulatory permissibility before build, and produces responsible workflow designs that improve service processing without compromising citizen rights or public trust.",
    tags: ["digital-government", "government-ai", "citizen-services"],
  },

  170: {
    description:
      "Configure, integrate, and launch your government operations and citizen service platform with structured testing across service delivery, back-office, and cross-agency workflows, and a controlled handover that leaves your programme team ready to operate within public sector governance.",
    positioning:
      "A managed deployment that takes your government operations blueprint from specification to a live, tested platform that meets public sector delivery and compliance requirements.",
    features: [
      "Citizen service platform configuration against approved service journeys, back-office workflows, and compliance controls",
      "End-to-end integration testing with case management, document management, identity, and cross-agency data sharing systems",
      "Staff acceptance testing across all in-scope service lines with accessibility and compliance validation included",
      "Hypercare period covering service issue resolution and staff support in the first weeks of live operation",
    ],
    timelineMilestones: [
      "Weeks 1-4: Environment setup, platform configuration, and integration development",
      "Weeks 5-9: System integration testing, data migration validation, and defect resolution",
      "Weeks 10-11: Staff acceptance testing and service sign-off",
      "Week 12: Controlled go-live, hypercare, and operational handover",
    ],
    deliverables: [
      { title: "Configured government operations platform", description: "Production-ready citizen service portal, back-office case management, and cross-agency integration configured and tested against approved specifications." },
      { title: "Integration test evidence pack", description: "Test cases, results, and defect closure evidence for every connected system including identity platforms, document management, and inter-agency data exchanges." },
      { title: "Staff acceptance sign-off", description: "Documented UAT results from front-line staff, case officers, and supervisors confirming the platform meets service delivery requirements and accessibility obligations." },
      { title: "Operational handover kit", description: "Administrator guides, service manager quick-start pack, support escalation paths, compliance audit trail documentation, and a 30-day post-launch review schedule." },
    ],
    packageHighlights: [
      "Structured 12-week deployment with milestone-gated progress",
      "Accessibility and compliance validation included in acceptance testing",
      "Hypercare support through the first weeks of live citizen service operation",
    ],
    faqIntro: "Key questions about the government operations deployment.",
    faqs: [
      { question: "How do you handle legacy system migration within government environments?", answer: "Data migration plans are agreed with your data governance and records management leads. Migration is staged and validated before cutover to avoid service disruption." },
      { question: "How is security clearance managed for team members working on the deployment?", answer: "The DigitalQatalyst team confirms security clearance requirements during scoping. Members working on sensitive environments are cleared or matched to the required level." },
      { question: "What happens if integration testing reveals issues with a third-party government system?", answer: "Issues are documented and raised with the relevant system owner through your programme governance process. Workarounds are designed where the third-party timeline cannot be aligned." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the platform, integration scope, security requirements, and public sector procurement constraints before deployment planning begins." },
    ],
    audience: "Digital government directors, programme managers, heads of service delivery, and IT leads in public sector organisations",
    industryRelevance: "Ministries, authorities, agencies, municipalities, and public service organisations implementing or modernising citizen-facing and back-office operations platforms",
    businessImpact: "Delivers a fully integrated, tested government operations platform that improves citizen service processing speed and transparency, with compliance audit trails in place from go-live.",
    tags: ["digital-government", "citizen-services", "public-sector"],
  },

  171: {
    description:
      "Deploy validated AI capabilities for eligibility checking, document classification, and case prioritisation into your live government operations environment, with monitoring, case officer override controls, and a governance handover that maintains public accountability from day one.",
    positioning:
      "Put AI-powered government service processing into production with the accountability controls, explainability, and citizen appeal rights your public sector obligations require.",
    features: [
      "Governed model deployment for approved use cases including automated eligibility pre-screening and document classification",
      "Service-level monitoring dashboards tracking model accuracy, case officer override rates, and processing time impact",
      "Case officer review workflows and override mechanisms embedded in existing case management tools",
      "Programme team enablement on model behaviour, bias monitoring, and quarterly accountability review",
    ],
    timelineMilestones: [
      "Weeks 1-4: Production environment setup, data pipeline validation, and model staging in test environment",
      "Weeks 5-8: Controlled rollout to pilot service line with close case officer monitoring",
      "Weeks 9-10: Full service rollout, override workflow validation, and performance baseline capture",
      "Weeks 11-12: Governance handover, bias monitoring confirmation, and accountability review schedule agreement",
    ],
    deliverables: [
      { title: "Production government AI capabilities", description: "Approved models live in your government operations platform with data pipelines, decision logging, and case officer-facing recommendation interfaces active." },
      { title: "Service performance monitoring dashboard", description: "Real-time view of model accuracy, case officer override rates, processing time improvement, and bias indicators by service line and demographic group." },
      { title: "Case officer override and appeal playbook", description: "Procedures for accepting, overriding, and escalating AI recommendations, with citizen explanation and appeal right documentation for each service." },
      { title: "Public sector AI governance handover pack", description: "Model cards, data lineage documentation, bias testing records, quarterly accountability review schedule, and accountability assignments for ongoing responsible operation." },
    ],
    packageHighlights: [
      "Pilot service line rollout before full deployment",
      "Bias monitoring and demographic impact tracking from day one",
      "Citizen appeal rights and explainability built into every service workflow",
    ],
    faqIntro: "Key questions about the government operations AI deployment.",
    faqs: [
      { question: "How do case officers override AI recommendations?", answer: "Override controls are built into the case management interface. All overrides are logged with a reason and reviewed in the quarterly accountability session." },
      { question: "How do you monitor for bias in AI-assisted government decisions?", answer: "Demographic group outcome analysis runs continuously in the monitoring dashboard. Disparity alerts trigger immediate review and, where needed, model adjustment before the next processing cycle." },
      { question: "What happens if AI recommendations are challenged through a citizen appeal?", answer: "Decision logs, model outputs, and case officer actions are retrievable through the audit trail to support the appeals process. The accountability playbook covers the specific steps for each service." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team with your approved AI design specification to plan the production environment, data pipeline access, and pilot service line selection." },
    ],
    audience: "Digital government directors, heads of service delivery, AI ethics and data leads, and programme managers in public sector organisations",
    industryRelevance: "Ministries, authorities, agencies, and municipalities with approved AI use cases ready to move from design to production deployment",
    businessImpact: "Reduces processing times for high-volume citizen services, improves consistency of eligibility and classification decisions, and maintains public trust through transparent accountability controls and auditable decision records.",
    tags: ["digital-government", "government-ai", "citizen-services"],
  },

  172: {
    description:
      "Keep your government operations and citizen service platform running reliably within public sector governance: SLA-backed system operations, monthly service performance reporting, and ongoing optimisation as policy requirements and citizen demand evolve.",
    positioning:
      "Ongoing management of your government operations platform so citizen service quality, processing efficiency, and compliance controls never degrade.",
    features: [
      "Monthly service performance reports covering processing times, case backlogs, error rates, and compliance control status",
      "Proactive platform monitoring with incident response within agreed SLA windows appropriate for public services",
      "Configuration updates as policy changes, legislation amendments, or new services require platform adjustment",
      "Quarterly optimisation reviews identifying processing efficiency improvements and technical debt reduction opportunities",
    ],
    timelineMilestones: [
      "Month 1: Service baseline, SLA agreement confirmation, and compliance monitoring setup",
      "Months 2-3: First reporting cycle, initial optimisation recommendations, and configuration update cadence established",
      "Ongoing: Monthly service performance reports, quarterly optimisation sessions, and annual capability roadmap",
    ],
    deliverables: [
      { title: "Monthly government service performance report", description: "Processing times, case resolution rates, citizen satisfaction indicators, compliance control status, and system health metrics with recommended actions." },
      { title: "Incident and change log", description: "Transparent record of platform incidents, policy-driven configuration changes, and SLA performance across each reporting period." },
      { title: "Quarterly service optimisation review", description: "Analysis of processing backlogs, case management bottlenecks, and compliance control gaps with prioritised improvement actions." },
      { title: "Annual government technology roadmap", description: "Forward-looking plan covering platform updates, new service integrations, and capability additions aligned to digital government strategy and legislative obligations." },
    ],
    packageHighlights: [
      "SLA-backed operations with response times appropriate for public services",
      "Monthly processing and compliance reporting included as standard",
      "Policy-driven configuration updates covered as legislation changes",
    ],
    faqIntro: "Key questions about the government operations managed service.",
    faqs: [
      { question: "What is covered under the managed service?", answer: "Platform monitoring, incident response, policy-driven configuration updates, monthly reporting, and quarterly optimisation reviews. Full scope is confirmed in the service agreement." },
      { question: "How quickly can configuration changes be made when policy or legislation changes?", answer: "The DigitalQatalyst team assesses change impact, agrees a timeline with your programme lead, and implements within your change management process. Emergency legislative changes are handled under a priority change procedure." },
      { question: "Can the service support new citizen-facing services added to the platform over time?", answer: "Yes. New services are onboarded under the managed service. Services requiring significant new configuration or integration are scoped and priced separately." },
      { question: "How do we get started?", answer: "Contact the DigitalQatalyst team to confirm the platform scope, current service inventory, SLA requirements, and compliance obligations before the service agreement is drafted." },
    ],
    audience: "Digital government directors, programme managers, and service delivery leads running live government operations platforms",
    industryRelevance: "Ministries, authorities, agencies, municipalities, and public service organisations requiring consistent platform performance, regulatory compliance, and citizen service continuity",
    businessImpact: "Maintains citizen service processing speed and compliance control accuracy as policy and demand evolve, reduces internal IT burden on platform maintenance, and surfaces service quality improvements before they affect citizen outcomes.",
    tags: ["digital-government", "citizen-services", "managed-service"],
  },
};
