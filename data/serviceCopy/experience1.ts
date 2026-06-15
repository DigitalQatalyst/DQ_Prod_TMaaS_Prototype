import type { CollectionCopyOverrides } from "./types";

/**
 * EXPERIENCE batch 1: Online Web Presence, Online Social Presence, Mobile Apps,
 * Physical Channels, Integrated Experience (variant ids 1-30).
 * Keyed by variant id. See ./types.ts for the field contract and voice rules.
 */
export const experience1Copy: CollectionCopyOverrides = {
  // -----------------------------------------------------------------------
  // ONLINE WEB PRESENCE (ids 1-6)
  // -----------------------------------------------------------------------

  1: {
    description:
      "Get a clear picture of where your website is losing visitors, missing conversions, and underperforming on search, then walk away with a prioritised action list your marketing and IT teams can execute.",
    positioning:
      "Evidence-led audit of your web estate: gaps scored, priorities set, roadmap ready.",
    features: [
      "Page-by-page performance audit covering speed, accessibility, and conversion friction",
      "SEO health check with keyword coverage gaps and crawlability findings",
      "Competitor benchmark showing where your site falls behind on key visitor journeys",
      "Prioritised recommendation list scored by effort and expected traffic or conversion uplift",
    ],
    timelineMilestones: [
      "Days 1-2: Stakeholder interviews, analytics access, and scope confirmation",
      "Days 3-4: Site audit, crawl analysis, and competitor benchmarking",
      "Day 5: Findings presentation, prioritised roadmap, and next-step recommendations",
    ],
    deliverables: [
      {
        title: "Web estate audit report",
        description:
          "Page-level findings covering performance, accessibility, SEO, and conversion barriers, with each issue rated by severity and effort to fix.",
      },
      {
        title: "SEO gap analysis",
        description:
          "Keyword coverage, crawlability issues, and content gaps mapped against organic visibility targets.",
      },
      {
        title: "Competitor benchmark",
        description:
          "Side-by-side comparison of your top three competitors on journey quality, content depth, and search presence.",
      },
      {
        title: "Prioritised action roadmap",
        description:
          "Sequenced recommendations with effort scores, expected business impact, and suggested owners so your team can begin immediately.",
      },
    ],
    packageHighlights: [
      "Fixed-scope assessment with no obligation to proceed",
      "Covers performance, SEO, accessibility, and conversion in one engagement",
      "Stakeholder-ready findings delivered within the week",
    ],
    faqIntro: "Common questions about the Online Web Presence assessment.",
    faqs: [
      {
        question: "What access do you need to run the audit?",
        answer:
          "Read-only access to Google Analytics or equivalent, Google Search Console, and your CMS is ideal. The DigitalQatalyst team agrees the exact access list during scoping.",
      },
      {
        question: "Do you audit every page on our site?",
        answer:
          "We crawl the full site but focus detailed analysis on the highest-traffic and highest-value pages. Scope is confirmed with your team at the start.",
      },
      {
        question: "Will we get specific fixes or just a list of issues?",
        answer:
          "Both. Each finding comes with a recommended fix, effort estimate, and expected impact so your teams have actionable instructions, not just a list of problems.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will confirm scope, access requirements, and stakeholders before the engagement begins.",
      },
    ],
    audience: "Marketing Directors, Digital Leads, and Head of CX or IT",
    industryRelevance:
      "B2B and B2C organisations with customer-facing websites, e-commerce platforms, or self-service portals",
    businessImpact:
      "Identifies the specific friction points and search gaps costing you visitors and conversions, giving your team a clear, prioritised starting point for web investment.",
    tags: ["web-performance", "seo", "conversion-optimisation"],
  },

  2: {
    description:
      "Transform your web presence goals into a complete, build-ready blueprint: user journeys mapped, information architecture defined, and technical specifications your development team can code against.",
    positioning:
      "From brief to blueprint: user-centred web design with every decision documented for build.",
    features: [
      "User journey mapping across your key visitor types and conversion goals",
      "Information architecture and navigation design validated with your target audience",
      "Component-level wireframes and interaction specifications ready for development",
      "CMS and integration requirements documented to prevent rework during build",
    ],
    timelineMilestones: [
      "Week 1: Discovery, user research synthesis, and journey mapping",
      "Weeks 2-3: Information architecture, wireframing, and design iteration",
      "Week 4: Specification finalisation, stakeholder sign-off, and build handover",
    ],
    deliverables: [
      {
        title: "User journey maps",
        description:
          "Documented journeys for each visitor type, showing entry points, decision moments, and the actions needed to reach conversion.",
      },
      {
        title: "Information architecture and navigation design",
        description:
          "Site structure, menu hierarchy, and content taxonomy validated against user expectations and business goals.",
      },
      {
        title: "Wireframe library",
        description:
          "Annotated wireframes for every key template and interaction, with component-level specifications your developers can implement directly.",
      },
      {
        title: "Technical and integration specification",
        description:
          "CMS requirements, third-party integration points, and API contracts documented to eliminate ambiguity during build.",
      },
    ],
    packageHighlights: [
      "User research-validated designs, not assumption-led templates",
      "Build-ready specifications that reduce development rework",
      "Stakeholder sign-off checkpoint built into the engagement",
    ],
    faqIntro: "Key questions about the Online Web Presence Design service.",
    faqs: [
      {
        question: "Do we need to have completed an assessment first?",
        answer:
          "Not mandatory, but recommended. The DigitalQatalyst team can work from your existing analytics and research if an assessment has not been done.",
      },
      {
        question: "Will the designs be handed off to our internal developers or to your team?",
        answer:
          "Either. The specification pack is tool-agnostic and includes everything an internal team or an external agency needs to build accurately.",
      },
      {
        question: "How much user research is included?",
        answer:
          "The engagement includes synthesis of existing data and targeted interviews or usability sessions. Larger primary research programmes can be scoped separately.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review your existing assets, agree the design scope, and confirm the research approach before work begins.",
      },
    ],
    audience: "Marketing Directors, Digital Product Owners, and UX Leads",
    industryRelevance:
      "B2B and B2C organisations planning a website redesign, content overhaul, or new digital channel",
    businessImpact:
      "Produces a validated, build-ready web design that reduces rework and shortens time to launch while grounding every decision in visitor behaviour.",
    tags: ["ux-design", "information-architecture", "web-strategy"],
  },

  3: {
    description:
      "Identify which AI capabilities will genuinely improve your website's visitor experience, validate the use cases with real data, and receive deployment-ready specifications before a single line of build code is written.",
    positioning:
      "AI use cases for your web presence validated before build investment, with guardrails built in.",
    features: [
      "AI opportunity mapping across personalisation, search, chat, and content generation for web",
      "Use-case prioritisation based on data readiness, visitor impact, and implementation complexity",
      "Responsible AI workflow design covering bias checks, fallback logic, and content moderation",
      "Deployment specification with model requirements, data pipelines, and integration contracts",
    ],
    timelineMilestones: [
      "Week 1: AI opportunity discovery and data landscape review",
      "Week 2: Use-case validation, feasibility scoring, and risk assessment",
      "Weeks 3-4: Responsible workflow design, guardrail specification, and documentation",
    ],
    deliverables: [
      {
        title: "AI opportunity register",
        description:
          "Ranked list of AI use cases for your web presence, each scored on visitor impact, data readiness, and build complexity.",
      },
      {
        title: "Responsible AI workflow designs",
        description:
          "Process flows for each prioritised use case, including human-in-the-loop checkpoints, bias mitigation, and fallback logic.",
      },
      {
        title: "Data and model specification",
        description:
          "Training data requirements, model selection criteria, and pipeline architecture for each approved use case.",
      },
      {
        title: "Deployment-ready build specification",
        description:
          "Integration contracts, API requirements, and acceptance criteria your engineering team can build and test against.",
      },
    ],
    packageHighlights: [
      "Use-case validation before any build commitment",
      "Responsible AI guardrails designed in from the start",
      "Specification pack handed to your build team or the DigitalQatalyst team",
    ],
    faqIntro: "Key questions about the Online Web Presence AI Design service.",
    faqs: [
      {
        question: "Which AI use cases are most common for web presence?",
        answer:
          "Personalised content recommendations, AI-powered site search, conversational chat assistants, and automated content tagging are the most frequently prioritised. The DigitalQatalyst team will validate which of these fits your data and visitor profile.",
      },
      {
        question: "What data do we need to have in place?",
        answer:
          "We assess your current data landscape as part of the engagement and identify gaps. You do not need a complete data platform before starting.",
      },
      {
        question: "How do you handle AI risks like hallucination or bias?",
        answer:
          "Every workflow design includes a responsible AI review covering bias testing, output validation, fallback logic, and human escalation paths.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will confirm your AI readiness level and agree the discovery scope before work begins.",
      },
    ],
    audience: "Digital Directors, CTO offices, and Marketing Technology leaders",
    industryRelevance:
      "Organisations with enough web traffic and content volume to benefit from AI-driven personalisation or automation",
    businessImpact:
      "Prevents wasted build spend by validating AI use cases against real data and visitor behaviour before any development investment is committed.",
    tags: ["ai-design", "web-personalisation", "responsible-ai"],
  },

  4: {
    description:
      "Bring your website designs to life with a phased build, integration, and launch programme that keeps quality and go-live dates on track, and hands over a fully documented site to your operations team.",
    positioning:
      "Managed web delivery: configured, tested, and launched with a documented handover to your team.",
    features: [
      "CMS configuration and content migration executed against the agreed specification",
      "Third-party integration setup including analytics, CRM, and marketing tools",
      "Cross-browser and accessibility testing before launch, with a tracked defect log",
      "Staged rollout with performance monitoring and rollback procedure ready at go-live",
    ],
    timelineMilestones: [
      "Weeks 1-3: Environment setup, CMS configuration, and content migration",
      "Weeks 4-8: Integration build, feature development, and internal QA",
      "Weeks 9-10: User acceptance testing and defect resolution",
      "Weeks 11-12: Staged launch, performance validation, and operations handover",
    ],
    deliverables: [
      {
        title: "Configured and tested website",
        description:
          "Fully built site meeting the design specification, with all integrations live and accessibility checks passed.",
      },
      {
        title: "QA test report",
        description:
          "Documented test results covering cross-browser compatibility, performance benchmarks, accessibility compliance, and resolved defects.",
      },
      {
        title: "Launch runbook",
        description:
          "Step-by-step go-live procedure including DNS changes, cache warm-up, monitoring checks, and rollback instructions.",
      },
      {
        title: "Operations handover pack",
        description:
          "CMS user guides, integration documentation, and maintenance procedures your internal team needs to manage the site post-launch.",
      },
    ],
    packageHighlights: [
      "Build managed against a fixed specification to contain scope creep",
      "QA, accessibility, and performance testing included before go-live",
      "Documented handover so your team can manage the site independently",
    ],
    faqIntro: "Key questions about the Online Web Presence Deploy service.",
    faqs: [
      {
        question: "Does the Deploy service include content creation?",
        answer:
          "Content migration is included. Content creation and copywriting are separate and can be quoted alongside this service.",
      },
      {
        question: "Which CMS platforms do you build on?",
        answer:
          "The DigitalQatalyst team works across the major platforms including WordPress, Contentful, Sanity, and custom headless stacks. The target platform is confirmed during design.",
      },
      {
        question: "How is change managed during the build?",
        answer:
          "Scope changes go through a formal change request process to protect the timeline and budget. Minor clarifications are absorbed; additions are quoted separately.",
      },
      {
        question: "What happens if a critical issue is found after launch?",
        answer:
          "The launch runbook includes a rollback procedure. The DigitalQatalyst team provides a defined hypercare window post-go-live to resolve priority defects.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review the design specification, confirm the technical environment, and agree a delivery schedule.",
      },
    ],
    audience: "Digital Project Managers, IT Leads, and Marketing Operations",
    industryRelevance:
      "B2B and B2C organisations with a completed web design ready for structured build and launch",
    businessImpact:
      "Delivers a production-ready website with integrated tooling, documented and tested, so your team can operate it confidently from day one.",
    tags: ["web-delivery", "cms-implementation", "launch-management"],
  },

  5: {
    description:
      "Put your validated AI web features into production with monitoring, safety controls, and a clear operational handover, so personalisation and automation deliver measurable results from launch day.",
    positioning:
      "Governed AI for your website: in production, monitored, and handed over with safety controls intact.",
    features: [
      "AI model deployment with production-grade monitoring covering accuracy, latency, and drift",
      "Content moderation and output safety controls configured before public exposure",
      "A/B testing framework set up to measure AI feature impact on visitor behaviour",
      "Operational runbook and team training so your staff can manage AI tools post-launch",
    ],
    timelineMilestones: [
      "Weeks 1-3: Infrastructure provisioning, model deployment, and integration to web platform",
      "Weeks 4-7: Safety control configuration, moderation rules, and monitoring dashboard setup",
      "Weeks 8-10: Controlled rollout, A/B test configuration, and performance validation",
      "Weeks 11-12: Full release, operational handover, and team enablement",
    ],
    deliverables: [
      {
        title: "Deployed AI features",
        description:
          "AI capabilities live on your website, integrated with your CMS and analytics stack, and confirmed against the agreed acceptance criteria.",
      },
      {
        title: "Monitoring and alerting dashboard",
        description:
          "Real-time view of model accuracy, response latency, and safety flags with configured alerts for your operations team.",
      },
      {
        title: "Safety and moderation controls",
        description:
          "Output filters, fallback logic, and escalation paths configured and tested to protect visitors and your brand.",
      },
      {
        title: "AI operations runbook",
        description:
          "Step-by-step procedures for monitoring, retraining triggers, incident response, and routine maintenance of each deployed AI feature.",
      },
    ],
    packageHighlights: [
      "AI safety controls and monitoring configured before public launch",
      "A/B testing framework included to prove ROI from day one",
      "Full operational runbook and team training at handover",
    ],
    faqIntro: "Key questions about the Online Web Presence AI Deploy service.",
    faqs: [
      {
        question: "Do we need in-house ML engineers to manage the AI features after launch?",
        answer:
          "Not necessarily. The DigitalQatalyst team designs the operational model around your team's capability and can include an ongoing managed tier if needed.",
      },
      {
        question: "How do you handle model drift over time?",
        answer:
          "Monitoring dashboards flag accuracy degradation. The runbook includes retraining triggers and a process for re-deploying updated models without site downtime.",
      },
      {
        question: "What if an AI feature produces harmful or incorrect outputs?",
        answer:
          "Safety controls and fallback logic are configured and tested before launch. The moderation layer catches out-of-policy outputs before they reach visitors.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review the AI Design specification and confirm the deployment environment before work begins.",
      },
    ],
    audience: "Digital Directors, CTO offices, and Marketing Technology Leads",
    industryRelevance:
      "Organisations that have validated AI use cases for their website and are ready to move to production",
    businessImpact:
      "Gets AI-powered personalisation and automation live on your website with safety controls and measurement in place so every feature can prove its impact.",
    tags: ["ai-deployment", "model-monitoring", "web-personalisation"],
  },

  6: {
    description:
      "Keep your website performing at its best with ongoing monitoring, optimisation, and content governance managed by the DigitalQatalyst team under a clear SLA, so your team stays focused on business priorities.",
    positioning:
      "Your website, running and improving every month: SLA-backed operations with no surprises.",
    features: [
      "Monthly performance reporting across speed, SEO rankings, and conversion metrics with trends",
      "Proactive issue detection and resolution before problems affect visitors or search rankings",
      "Ongoing content governance including updates, accessibility checks, and CMS user support",
      "Quarterly optimisation sprints targeting the highest-impact improvements identified from data",
    ],
    timelineMilestones: [
      "Month 1: Onboarding, baseline measurement, and SLA configuration",
      "Months 2-3: First operational cycle with reporting cadence established",
      "Ongoing: Monthly reporting, quarterly optimisation reviews, and continuous monitoring",
    ],
    deliverables: [
      {
        title: "Monthly performance report",
        description:
          "Traffic, SEO, speed, and conversion data with month-on-month trends and recommended actions.",
      },
      {
        title: "Issue log and resolution record",
        description:
          "Tracked log of every detected issue, time to resolution, and root cause, demonstrating SLA compliance.",
      },
      {
        title: "Quarterly optimisation plan",
        description:
          "Prioritised improvements for the next quarter, each with expected impact and effort, agreed with your team in advance.",
      },
      {
        title: "Annual web health review",
        description:
          "Full assessment of your web estate's performance against goals, with strategic recommendations for the year ahead.",
      },
    ],
    packageHighlights: [
      "SLA-backed response times with monthly performance accountability",
      "Proactive monitoring, not reactive ticket management",
      "Quarterly improvement sprints included in the managed plan",
    ],
    faqIntro: "Key questions about the Online Web Presence Managed service.",
    faqs: [
      {
        question: "What is included in the SLA?",
        answer:
          "Response and resolution times for critical, high, and standard issues, plus monthly reporting delivery dates. Exact SLA terms are agreed during onboarding.",
      },
      {
        question: "Can we make content updates ourselves or does everything go through your team?",
        answer:
          "You retain full CMS access. The DigitalQatalyst team handles governance, quality checks, and complex updates while your team handles day-to-day content.",
      },
      {
        question: "How are quarterly optimisation priorities set?",
        answer:
          "The DigitalQatalyst team analyses performance data and presents a prioritised list at the start of each quarter. You approve the plan before work begins.",
      },
      {
        question: "What happens if performance drops after go-live?",
        answer:
          "The DigitalQatalyst team monitors your website continuously and responds to critical performance incidents within four business hours. Non-critical issues are triaged and resolved in line with the SLA response targets agreed during onboarding.",
      },
      {
        question: "What happens if our website needs a major redesign during the managed contract?",
        answer:
          "Major redesigns are scoped as separate Design or Deploy engagements. The managed service continues uninterrupted during the project.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review your current web setup, agree the SLA terms, and confirm the onboarding timeline.",
      },
    ],
    audience: "Marketing Operations, Digital Leads, and IT Managers",
    industryRelevance:
      "B2B and B2C organisations that need their website managed reliably without hiring a dedicated in-house web operations team",
    businessImpact:
      "Keeps your website visible, fast, and converting while freeing your internal team from reactive maintenance and unplanned performance issues.",
    tags: ["managed-service", "web-operations", "continuous-optimisation"],
  },

  // -----------------------------------------------------------------------
  // ONLINE SOCIAL PRESENCE (ids 7-12)
  // -----------------------------------------------------------------------

  7: {
    description:
      "Assess the health of your social media presence across every active channel, identify where engagement is low or brand consistency is missing, and receive a prioritised plan your marketing team can act on immediately.",
    positioning:
      "A clear audit of your social channels: where audience engagement is lost and how to win it back.",
    features: [
      "Channel-by-channel audit of content quality, posting consistency, and audience engagement rates",
      "Brand voice and visual consistency review across all active social platforms",
      "Competitor social benchmarking on follower growth, reach, and content formats",
      "Prioritised action plan ranked by potential engagement uplift and effort required",
    ],
    timelineMilestones: [
      "Days 1-2: Channel access, analytics review, and stakeholder interviews",
      "Days 3-4: Content audit, competitor analysis, and brand consistency assessment",
      "Day 5: Findings presentation with prioritised social strategy recommendations",
    ],
    deliverables: [
      {
        title: "Social channel audit report",
        description:
          "Platform-by-platform findings on content quality, posting frequency, engagement rates, and follower demographics.",
      },
      {
        title: "Brand consistency assessment",
        description:
          "Review of voice, visual identity, and messaging coherence across your active social accounts.",
      },
      {
        title: "Competitor social benchmark",
        description:
          "Comparison of your top three competitors on content strategy, audience growth rate, and engagement quality.",
      },
      {
        title: "Prioritised social action plan",
        description:
          "Ranked recommendations with expected engagement impact and implementation effort for your marketing team.",
      },
    ],
    packageHighlights: [
      "Fixed-scope audit covering all active social channels",
      "Competitor benchmarking included at no extra cost",
      "Stakeholder-ready findings delivered within the week",
    ],
    faqIntro: "Key questions about the Online Social Presence assessment.",
    faqs: [
      {
        question: "Which social platforms do you cover in the audit?",
        answer:
          "All platforms where your organisation has an active presence. The DigitalQatalyst team confirms the channel list during scoping.",
      },
      {
        question: "Do you need admin access to our social accounts?",
        answer:
          "Read-only analytics access is sufficient. The DigitalQatalyst team agrees the exact access requirements before the engagement starts.",
      },
      {
        question: "Will you assess our paid social campaigns as well as organic content?",
        answer:
          "The standard assessment focuses on organic presence. Paid social campaign analysis can be added to scope during the initial consultation.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will confirm the channel scope and access requirements before work begins.",
      },
    ],
    audience: "Marketing Directors, Social Media Managers, and Communications Leaders",
    industryRelevance:
      "Organisations using social channels for brand awareness, customer engagement, or community building",
    businessImpact:
      "Surfaces the specific content and channel gaps reducing your social reach and engagement, so your team knows exactly where to focus effort for the fastest improvement.",
    tags: ["social-media", "brand-consistency", "audience-engagement"],
  },

  8: {
    description:
      "Build a social media presence your audience will actually engage with: content frameworks designed for each platform, channel-specific workflows, and a publication system your team can run without agency dependency.",
    positioning:
      "A social strategy designed for your audience, your channels, and your team's capacity.",
    features: [
      "Platform-specific content strategy for each channel, matched to your audience behaviour data",
      "Content pillar framework with topic clusters, formats, and publishing cadence by channel",
      "Editorial workflow design covering creation, approval, scheduling, and performance review",
      "Community management playbook with response frameworks for comments, messages, and crises",
    ],
    timelineMilestones: [
      "Week 1: Audience research, channel analysis, and content objective setting",
      "Weeks 2-3: Content pillar design, workflow mapping, and template creation",
      "Week 4: Playbook finalisation, team training, and publication system handover",
    ],
    deliverables: [
      {
        title: "Platform-specific content strategy",
        description:
          "Audience-validated content approach for each active social channel, covering formats, tone, themes, and posting cadence.",
      },
      {
        title: "Content pillar and topic framework",
        description:
          "Structured content pillars with topic clusters, format guidance, and a 90-day content calendar template.",
      },
      {
        title: "Editorial and approval workflow",
        description:
          "End-to-end process for content creation, review, scheduling, and performance tracking, mapped to your team structure.",
      },
      {
        title: "Community management playbook",
        description:
          "Response frameworks for comments, direct messages, and crisis scenarios, with example copy your team can adapt.",
      },
    ],
    packageHighlights: [
      "Audience research built into the design, not assumed",
      "Team-operable workflows that reduce dependency on external agencies",
      "90-day content calendar template included at handover",
    ],
    faqIntro: "Key questions about the Online Social Presence Design service.",
    faqs: [
      {
        question: "Does the design include creating actual social content?",
        answer:
          "The engagement produces frameworks, templates, and examples rather than finished posts. Content production can be scoped as a separate service.",
      },
      {
        question: "What if our team is small? Will the workflows be too complex to run?",
        answer:
          "Workflow design is matched to your team's size and capability. The DigitalQatalyst team designs for what your team can realistically sustain.",
      },
      {
        question: "Can you design for a new platform we have not used before?",
        answer:
          "Yes. The DigitalQatalyst team can include strategy for platforms you are launching on, with audience research to validate the channel choice.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review your current channels and team structure before agreeing the design scope.",
      },
    ],
    audience: "Marketing Directors, Head of Social, and Brand Communications Leads",
    industryRelevance:
      "Organisations building or rebuilding their social media presence with limited internal strategy resource",
    businessImpact:
      "Creates a sustainable, audience-matched social system that grows engagement without requiring constant agency support or reactive posting.",
    tags: ["social-strategy", "content-design", "editorial-workflow"],
  },

  9: {
    description:
      "Identify which AI tools will make your social content more relevant and your community management more responsive, validate those use cases, and receive specifications ready for your technology team to build.",
    positioning:
      "AI for social: content intelligence, scheduling optimisation, and sentiment monitoring designed before build.",
    features: [
      "AI use-case identification for social content generation, caption optimisation, and hashtag intelligence",
      "Sentiment analysis and social listening workflow design with alerting thresholds",
      "Responsible content moderation design covering AI-flagged comments and escalation logic",
      "Tool selection guidance with integration requirements for your existing social and CRM stack",
    ],
    timelineMilestones: [
      "Week 1: AI opportunity mapping across content, scheduling, moderation, and listening",
      "Week 2: Use-case validation, platform API feasibility, and risk review",
      "Weeks 3-4: Workflow design, responsible AI specification, and integration documentation",
    ],
    deliverables: [
      {
        title: "AI opportunity assessment",
        description:
          "Ranked list of AI use cases for social presence, each scored on audience impact, platform feasibility, and implementation effort.",
      },
      {
        title: "Social listening and sentiment workflow",
        description:
          "Designed workflow for AI-powered monitoring, alerting, and escalation, including response thresholds for your community team.",
      },
      {
        title: "Content AI specification",
        description:
          "Requirements for caption assistance, hashtag optimisation, and scheduling tools, with vendor shortlist and integration contracts.",
      },
      {
        title: "Responsible moderation design",
        description:
          "AI moderation rules, escalation paths, and human-review criteria that protect your brand without silencing legitimate audience voices.",
      },
    ],
    packageHighlights: [
      "AI use cases validated for your platforms and audience before any build",
      "Responsible moderation design included from the start",
      "Vendor-neutral specification compatible with your existing stack",
    ],
    faqIntro: "Key questions about the Online Social Presence AI Design service.",
    faqs: [
      {
        question: "Can AI really help with social content creation without sounding robotic?",
        answer:
          "Yes, when implemented with your brand voice guidelines and human editorial review. The design includes tone guardrails and a human-approval step for all published content.",
      },
      {
        question: "Which social platforms support AI integrations?",
        answer:
          "Most major platforms expose APIs for scheduling, analytics, and moderation. The DigitalQatalyst team validates feasibility per platform during the design engagement.",
      },
      {
        question: "How do you handle AI-generated content and transparency obligations?",
        answer:
          "The workflow design includes disclosure guidance aligned with current platform policies and relevant regulatory guidance in your region.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review your current social stack and agree the AI design scope.",
      },
    ],
    audience: "Marketing Technology Leads, Head of Social, and Digital Directors",
    industryRelevance:
      "Organisations with active social channels looking to scale content output and audience intelligence with AI tools",
    businessImpact:
      "Defines the AI tools and workflows that will increase content throughput and audience responsiveness, validated against your platforms before any technology spend is committed.",
    tags: ["social-ai", "content-intelligence", "sentiment-monitoring"],
  },

  10: {
    description:
      "Activate your social media strategy with a fully configured technology stack, content workflows, and community management tools deployed and tested so your team can publish and engage from day one.",
    positioning:
      "Social channels live: tools configured, workflows active, and your team ready to publish.",
    features: [
      "Social management platform configuration with accounts, permissions, and approval workflows set up",
      "Content scheduling system deployment with editorial calendar integrated to your planning tools",
      "Analytics and reporting dashboard setup tracking reach, engagement, and audience growth by channel",
      "Team training and process validation to confirm your team can operate every tool independently",
    ],
    timelineMilestones: [
      "Weeks 1-2: Platform configuration, account connection, and permission structure setup",
      "Weeks 3-6: Scheduling and analytics tool deployment, workflow testing, and content migration",
      "Weeks 7-9: UAT, team training, and process sign-off",
      "Weeks 10-12: Go-live, first publication cycle, and operational handover",
    ],
    deliverables: [
      {
        title: "Configured social management platform",
        description:
          "All active channels connected, permission levels set, approval workflows active, and accounts verified across your social management tool.",
      },
      {
        title: "Analytics and reporting dashboard",
        description:
          "Live reporting across all channels showing reach, engagement, follower growth, and content performance with automated monthly report templates.",
      },
      {
        title: "Training materials and guides",
        description:
          "Role-specific guides for content creators, approvers, and community managers so your team runs every tool without ongoing support.",
      },
      {
        title: "Operations handover pack",
        description:
          "All platform credentials, workflow documentation, and escalation contacts compiled and handed to your team at close.",
      },
    ],
    packageHighlights: [
      "Full technology stack configured and tested before handover",
      "Team training included so your people can operate independently",
      "First publication cycle supported by the DigitalQatalyst team",
    ],
    faqIntro: "Key questions about the Online Social Presence Deploy service.",
    faqs: [
      {
        question: "Which social management tools do you deploy?",
        answer:
          "Hootsuite, Sprout Social, Buffer, and similar platforms. If you have an existing tool, the DigitalQatalyst team configures it. If not, a recommendation is made during scoping.",
      },
      {
        question: "Is content creation included in the deploy?",
        answer:
          "Content deployment tools and workflows are included. Content creation and copywriting are separate and can be scoped alongside this service.",
      },
      {
        question: "How long does team training take?",
        answer:
          "Typically two to three sessions across the final weeks of deployment, tailored to each role. Self-service reference guides are provided for ongoing use.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will confirm your current technology, account access, and deployment timeline.",
      },
    ],
    audience: "Marketing Operations, Head of Social, and IT Leads",
    industryRelevance:
      "Organisations activating or re-platforming their social media management tools and processes",
    businessImpact:
      "Delivers a fully operational social media toolset that your team can run from day one, with measurement in place to track growth from the first week.",
    tags: ["social-deployment", "platform-configuration", "team-enablement"],
  },

  11: {
    description:
      "Deploy AI-powered social listening, content assistance, and automated moderation into your live channels with safety controls configured and your team trained to manage every feature in production.",
    positioning:
      "AI social tools in production: listening live, moderation active, and your team in control.",
    features: [
      "Social listening AI deployed with real-time alerts for brand mentions, sentiment shifts, and crisis signals",
      "Content AI tools activated with brand voice guardrails and editorial approval gates before publication",
      "Automated comment moderation live with escalation rules your community managers control",
      "Performance measurement framework tracking AI feature contribution to engagement and response time",
    ],
    timelineMilestones: [
      "Weeks 1-3: AI platform integration, API connections, and data pipeline configuration",
      "Weeks 4-7: Moderation rule setup, listening threshold calibration, and content tool activation",
      "Weeks 8-10: Controlled rollout, team training, and performance baseline establishment",
      "Weeks 11-12: Full activation, measurement validation, and operational handover",
    ],
    deliverables: [
      {
        title: "Deployed AI social tools",
        description:
          "Listening, content assistance, and moderation AI live across your active channels, integrated with your social management platform.",
      },
      {
        title: "Monitoring and alerting configuration",
        description:
          "Real-time dashboards for brand sentiment, keyword alerts, and moderation activity with configured escalation thresholds.",
      },
      {
        title: "Content AI guardrail configuration",
        description:
          "Brand voice rules, topic restrictions, and human approval workflows configured and tested before any AI content reaches your audience.",
      },
      {
        title: "AI operations guide",
        description:
          "Procedures for managing alerts, reviewing moderation decisions, updating content AI rules, and handling AI tool incidents.",
      },
    ],
    packageHighlights: [
      "AI features deployed with brand guardrails active before public exposure",
      "Community manager training included for every AI tool",
      "Performance measurement built in to prove ROI from launch",
    ],
    faqIntro: "Key questions about the Online Social Presence AI Deploy service.",
    faqs: [
      {
        question: "Will AI moderation remove comments our community should see?",
        answer:
          "Moderation rules are calibrated to your community standards and reviewed before activation. The system flags for human review rather than automatically deleting borderline content.",
      },
      {
        question: "How does the social listening AI handle multiple languages?",
        answer:
          "Multi-language support is configured based on your audience profile. The DigitalQatalyst team confirms language coverage during the deployment setup.",
      },
      {
        question: "What happens if an AI tool produces inappropriate content?",
        answer:
          "Editorial approval gates prevent AI-suggested content from publishing without human sign-off. The guardrail configuration is tested before any tool goes live.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review the AI design specification and confirm the deployment infrastructure.",
      },
    ],
    audience: "Marketing Technology Leads, Head of Social, and Community Managers",
    industryRelevance:
      "Organisations ready to put AI social tools into production after completing an AI design engagement",
    businessImpact:
      "Activates AI-powered listening and content tools across your social channels with safety controls in place, reducing manual moderation effort and improving response speed.",
    tags: ["social-ai", "automated-moderation", "ai-deployment"],
  },

  12: {
    description:
      "Keep your social channels active, on-brand, and growing with monthly content management, community monitoring, and performance reporting handled by the DigitalQatalyst team under a defined SLA.",
    positioning:
      "Social presence managed end-to-end: publishing, monitoring, and reporting every month.",
    features: [
      "Monthly content publishing across agreed channels, aligned to your brand guidelines and calendar",
      "Daily community monitoring with response to comments and messages within SLA timeframes",
      "Monthly performance report covering reach, engagement, follower growth, and content effectiveness",
      "Quarterly strategy review to adjust content approach based on audience data and business priorities",
    ],
    timelineMilestones: [
      "Month 1: Onboarding, channel access, brand guideline review, and content calendar setup",
      "Month 2: First managed content cycle with reporting cadence established",
      "Ongoing: Monthly publishing, monitoring, and reporting with quarterly strategy sessions",
    ],
    deliverables: [
      {
        title: "Monthly content publishing report",
        description:
          "Record of all published content with per-post engagement data, reach, and impressions by channel.",
      },
      {
        title: "Community management log",
        description:
          "Tracked log of all monitored interactions, response times against SLA, and escalated items for your team's attention.",
      },
      {
        title: "Monthly social performance report",
        description:
          "Audience growth, engagement rate trends, and content effectiveness scores with recommended adjustments.",
      },
      {
        title: "Quarterly strategy review",
        description:
          "Assessment of the quarter's social performance against goals, with a revised content approach and priorities for the next period.",
      },
    ],
    packageHighlights: [
      "Daily monitoring with SLA-backed response times",
      "Content published monthly within agreed brand guidelines",
      "Quarterly strategy review keeps the approach current with audience data",
    ],
    faqIntro: "Key questions about the Online Social Presence Managed service.",
    faqs: [
      {
        question: "Does your team create the social content or do we?",
        answer:
          "The DigitalQatalyst team creates and publishes content within agreed brand guidelines. You review and approve the monthly content calendar before publication.",
      },
      {
        question: "What response time is guaranteed for community management?",
        answer:
          "Response timeframes are defined in the SLA during onboarding. Typical configurations target four-hour response for standard comments and one-hour for urgent or crisis mentions.",
      },
      {
        question: "Can we adjust the content direction mid-contract?",
        answer:
          "Yes. The quarterly strategy review is the formal checkpoint, but the DigitalQatalyst team can accommodate urgent messaging changes outside of the review cycle.",
      },
      {
        question: "What happens during a social media crisis?",
        answer:
          "A crisis escalation protocol is agreed during onboarding. The DigitalQatalyst team alerts your communications lead immediately and follows the agreed response procedure.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will confirm channel access, review your brand guidelines, and agree the SLA terms before onboarding begins.",
      },
    ],
    audience: "Marketing Directors, Communications Leaders, and Brand Managers",
    industryRelevance:
      "Organisations that need consistent, managed social media operations without a full in-house social team",
    businessImpact:
      "Delivers consistent audience engagement and brand presence across social channels without the overhead of managing content, communities, and reporting internally.",
    tags: ["managed-social", "community-management", "content-operations"],
  },

  // -----------------------------------------------------------------------
  // MOBILE APPS (ids 13-18)
  // -----------------------------------------------------------------------

  13: {
    description:
      "Assess the performance, usability, and technical health of your mobile app portfolio, identify the gaps driving low adoption or poor retention, and receive a prioritised improvement roadmap your product and engineering teams can act on.",
    positioning:
      "A rigorous mobile app health check: adoption barriers identified, retention risks surfaced, roadmap ready.",
    features: [
      "App store performance audit covering ratings, review themes, and install-to-retention funnel data",
      "UX evaluation of core journeys identifying where users abandon tasks or disengage",
      "Technical performance review of load times, crash rates, and API response across device types",
      "Prioritised improvement roadmap scored by user impact and engineering effort",
    ],
    timelineMilestones: [
      "Days 1-2: Analytics access, stakeholder interviews, and app store data collection",
      "Days 3-4: Journey testing, technical performance review, and competitor app analysis",
      "Day 5: Findings presentation with prioritised mobile roadmap",
    ],
    deliverables: [
      {
        title: "Mobile app audit report",
        description:
          "Findings across UX quality, technical performance, app store ratings, and retention funnel, with each issue rated by severity.",
      },
      {
        title: "Journey friction analysis",
        description:
          "Identified drop-off points in your key user journeys with specific causes and recommended fixes.",
      },
      {
        title: "Technical performance benchmark",
        description:
          "App load times, crash rates, and API performance compared against category benchmarks for your app store category.",
      },
      {
        title: "Prioritised mobile roadmap",
        description:
          "Sequenced improvement recommendations with user impact scores, engineering effort estimates, and suggested sprint sequencing.",
      },
    ],
    packageHighlights: [
      "Covers UX, technical performance, and app store presence in one audit",
      "Findings prioritised by user impact, not just technical severity",
      "Roadmap your product team can take straight into sprint planning",
    ],
    faqIntro: "Key questions about the Mobile Apps assessment.",
    faqs: [
      {
        question: "Do you audit both iOS and Android versions?",
        answer:
          "Yes. The audit covers both platforms unless the assessment scope is limited to one by mutual agreement.",
      },
      {
        question: "What data access do you need?",
        answer:
          "Firebase or equivalent analytics, App Store Connect, and Google Play Console read-only access. The DigitalQatalyst team confirms the exact list during scoping.",
      },
      {
        question: "Can you assess an app still in development, not yet in production?",
        answer:
          "Yes. The assessment can be run on a staging build. Findings will focus on UX and technical architecture rather than live retention data.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will confirm the platform scope and access requirements before the engagement begins.",
      },
    ],
    audience: "Digital Product Managers, Mobile Engineering Leads, and CX Directors",
    industryRelevance:
      "Organisations with customer-facing, employee, or partner mobile apps across any platform",
    businessImpact:
      "Identifies the specific friction points and technical issues reducing adoption and retention so your product team can fix the highest-impact problems first.",
    tags: ["mobile-audit", "app-performance", "ux-review"],
  },

  14: {
    description:
      "Turn your mobile app strategy into screen-by-screen designs and build-ready specifications that your development team can code against, with user research validating every key interaction before build begins.",
    positioning:
      "From product brief to build-ready mobile app specification: user-validated, technically complete.",
    features: [
      "User research and journey mapping specific to mobile context, including offline and low-connectivity scenarios",
      "Screen-by-screen interaction design validated through usability testing with target users",
      "Platform-specific design system covering iOS and Android guidelines and accessibility standards",
      "Technical specification with API contracts, state management design, and push notification logic",
    ],
    timelineMilestones: [
      "Week 1: User research, journey mapping, and product requirements alignment",
      "Weeks 2-3: Wireframing, interaction design, and usability testing",
      "Week 4: Design system documentation, technical specification, and handover package",
    ],
    deliverables: [
      {
        title: "Mobile user journey maps",
        description:
          "Research-validated journeys for each user type across the key app flows, including edge cases and error states.",
      },
      {
        title: "Interaction design and prototype",
        description:
          "Screen-by-screen designs with annotated interactions for iOS and Android, tested with real users before specification sign-off.",
      },
      {
        title: "Mobile design system",
        description:
          "Component library, colour system, typography, and accessibility guidelines aligned to platform standards.",
      },
      {
        title: "Technical build specification",
        description:
          "API contracts, data models, push notification flows, and offline behaviour documented for your engineering team.",
      },
    ],
    packageHighlights: [
      "Usability testing included before specification is finalised",
      "iOS and Android covered in a single design engagement",
      "Accessibility standards built into the design system from day one",
    ],
    faqIntro: "Key questions about the Mobile Apps Design service.",
    faqs: [
      {
        question: "Do you design for both iOS and Android in the same engagement?",
        answer:
          "Yes. The design system and specification cover both platforms, with platform-specific component guidance where the experiences diverge.",
      },
      {
        question: "How many rounds of usability testing are included?",
        answer:
          "One round of moderated usability testing is included. Additional rounds can be added to the scope during the initial consultation.",
      },
      {
        question: "Is the prototype interactive?",
        answer:
          "Yes. A clickable prototype is produced for usability testing and stakeholder sign-off. It covers the core journeys rather than every screen.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review your product brief and existing research before agreeing the design scope.",
      },
    ],
    audience: "Product Managers, Mobile Engineering Leads, and Head of UX",
    industryRelevance:
      "Organisations building or redesigning customer, employee, or partner mobile applications",
    businessImpact:
      "Produces a user-validated, technically complete mobile app specification that reduces build rework and accelerates time to a high-quality launch.",
    tags: ["mobile-design", "ux-research", "app-specification"],
  },

  15: {
    description:
      "Validate which AI features will genuinely improve your mobile app experience, from in-app personalisation to intelligent search, and produce deployment-ready specifications with responsible AI controls built in.",
    positioning:
      "AI for mobile apps: validated use cases, on-device and cloud options assessed, guardrails specified.",
    features: [
      "AI use-case identification across personalisation, predictive actions, computer vision, and NLP for mobile",
      "On-device versus cloud AI trade-off analysis covering latency, privacy, and battery impact",
      "Responsible AI design including bias testing requirements, data minimisation, and user consent flows",
      "Deployment specification with SDK requirements, model delivery strategy, and platform API constraints",
    ],
    timelineMilestones: [
      "Week 1: AI opportunity mapping and mobile-specific feasibility review",
      "Week 2: Use-case prioritisation, on-device versus cloud assessment, and privacy review",
      "Weeks 3-4: Responsible workflow design, consent flow specification, and build documentation",
    ],
    deliverables: [
      {
        title: "Mobile AI opportunity register",
        description:
          "Ranked AI use cases for your app, each scored on user impact, technical feasibility, and privacy considerations.",
      },
      {
        title: "On-device versus cloud analysis",
        description:
          "Documented trade-offs for each use case covering latency, connectivity requirements, battery impact, and data privacy.",
      },
      {
        title: "Responsible AI specification",
        description:
          "Bias testing requirements, consent flow designs, data minimisation rules, and human oversight checkpoints for each approved use case.",
      },
      {
        title: "Mobile AI build specification",
        description:
          "SDK and API requirements, model delivery approach, and integration contracts your engineering team can build to.",
      },
    ],
    packageHighlights: [
      "On-device AI feasibility assessed alongside cloud options",
      "Privacy and consent design included from the start",
      "Build specification matched to iOS and Android platform constraints",
    ],
    faqIntro: "Key questions about the Mobile Apps AI Design service.",
    faqs: [
      {
        question: "Can AI features work offline on mobile?",
        answer:
          "On-device AI models can operate without connectivity. The design engagement assesses which features are suitable for on-device deployment and which require cloud inference.",
      },
      {
        question: "How do you handle app store AI disclosure requirements?",
        answer:
          "The specification includes platform-specific disclosure requirements for iOS and Android, aligned to current App Store and Google Play policies.",
      },
      {
        question: "What if our app user base is privacy-sensitive?",
        answer:
          "Privacy-first AI design is the default. Data minimisation, on-device processing options, and explicit consent flows are designed into every use case.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review your existing app architecture and agree the AI design scope.",
      },
    ],
    audience: "Product Managers, Mobile Engineering Leads, and CTO offices",
    industryRelevance:
      "Organisations with established mobile apps looking to add AI-powered personalisation, automation, or intelligence features",
    businessImpact:
      "Prevents wasted mobile AI investment by validating use cases for feasibility and privacy compliance before any engineering resources are committed.",
    tags: ["mobile-ai", "on-device-ml", "responsible-ai"],
  },

  16: {
    description:
      "Build and launch your mobile app with sprint-based engineering, rigorous QA across iOS and Android, and a documented handover that leaves your team able to manage and evolve the product independently.",
    positioning:
      "Mobile app delivered: built to specification, tested on real devices, and handed over with full documentation.",
    features: [
      "Cross-platform or native build executed against the agreed specification with weekly progress checkpoints",
      "Real-device testing across iOS and Android covering performance, accessibility, and offline behaviour",
      "App store submission management including metadata, screenshots, and review process support",
      "Post-launch hypercare period covering priority defect resolution and performance stabilisation",
    ],
    timelineMilestones: [
      "Weeks 1-4: Development environment setup, core feature build, and sprint reviews",
      "Weeks 5-8: Integration, secondary feature development, and internal QA",
      "Weeks 9-10: User acceptance testing and defect resolution",
      "Weeks 11-12: App store submission, launch, and hypercare",
    ],
    deliverables: [
      {
        title: "Production-ready mobile app",
        description:
          "Fully built application on iOS and Android meeting the specification, passing QA, and live in both app stores.",
      },
      {
        title: "QA test report",
        description:
          "Documented test results covering real-device performance, accessibility, offline behaviour, and resolved defects.",
      },
      {
        title: "App store submission package",
        description:
          "App store listings, screenshots, metadata, and privacy disclosures prepared and submitted with review process managed.",
      },
      {
        title: "Technical handover documentation",
        description:
          "Architecture overview, API documentation, build and deployment procedures, and maintenance guides for your engineering team.",
      },
    ],
    packageHighlights: [
      "Real-device QA included across iOS and Android before launch",
      "App store submission managed as part of the service",
      "Hypercare period for priority defect resolution post-launch",
    ],
    faqIntro: "Key questions about the Mobile Apps Deploy service.",
    faqs: [
      {
        question: "Do you build native or cross-platform apps?",
        answer:
          "Both options are available. The DigitalQatalyst team recommends the approach best suited to your performance requirements, team capability, and budget during the design phase.",
      },
      {
        question: "How do you handle app store rejection during the review process?",
        answer:
          "App store review requirements are built into the QA checklist before submission. If a rejection occurs, the DigitalQatalyst team resolves the flagged issue and resubmits.",
      },
      {
        question: "What is included in the hypercare period?",
        answer:
          "Priority defect resolution, performance monitoring, and crash report triage for a defined window after launch. Duration is confirmed during scoping.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review the design specification and agree the build schedule and technology stack.",
      },
    ],
    audience: "Product Managers, Mobile Engineering Leads, and Digital Directors",
    industryRelevance:
      "Organisations building a new mobile app or launching a significant new version with a completed design specification",
    businessImpact:
      "Delivers a production-ready, app-store-listed mobile application that your team can maintain independently, with QA evidence and documentation from day one.",
    tags: ["mobile-delivery", "app-launch", "cross-platform"],
  },

  17: {
    description:
      "Deploy your validated AI mobile features into production with on-device and cloud infrastructure configured, safety controls active, and your product team trained to manage every feature after handover.",
    positioning:
      "AI mobile features live: on-device models deployed, monitoring active, and your team in control.",
    features: [
      "AI model deployment covering both on-device SDK integration and cloud inference configuration",
      "Production monitoring for model accuracy, latency, and battery impact across device categories",
      "User consent flow and data privacy controls implemented and verified before public release",
      "Product team training on model update procedures, performance monitoring, and incident response",
    ],
    timelineMilestones: [
      "Weeks 1-3: Infrastructure setup, SDK integration, and model deployment to staging",
      "Weeks 4-7: Safety control configuration, consent flow testing, and performance validation",
      "Weeks 8-10: Staged rollout, monitoring baseline establishment, and team training",
      "Weeks 11-12: Full release, operational handover, and post-launch support window",
    ],
    deliverables: [
      {
        title: "Deployed AI mobile features",
        description:
          "AI capabilities live in your production app on iOS and Android, integrated with your backend services and confirmed against acceptance criteria.",
      },
      {
        title: "Mobile AI monitoring dashboard",
        description:
          "Real-time view of model accuracy, inference latency, battery impact, and error rates with configured alerts.",
      },
      {
        title: "Privacy and consent implementation",
        description:
          "User consent flows, data handling disclosures, and privacy controls implemented, tested, and confirmed against platform policies.",
      },
      {
        title: "AI model management guide",
        description:
          "Procedures for monitoring performance, triggering retraining, deploying model updates, and handling AI-related incidents.",
      },
    ],
    packageHighlights: [
      "On-device and cloud AI deployment options both supported",
      "Privacy controls and consent flows verified before public release",
      "Model update and retraining procedures documented at handover",
    ],
    faqIntro: "Key questions about the Mobile Apps AI Deploy service.",
    faqs: [
      {
        question: "How do on-device model updates reach users?",
        answer:
          "Model updates can be delivered via app store releases or over-the-air model delivery frameworks. The deployment approach is documented in the model management guide.",
      },
      {
        question: "Will AI features increase our app's data consumption or battery usage?",
        answer:
          "Battery and data impact are monitored as part of the production deployment. On-device model size and inference frequency are optimised during the build phase.",
      },
      {
        question: "How do we manage AI features if we do not have ML engineers in-house?",
        answer:
          "The handover documentation and training are designed for product and mobile engineering teams without dedicated ML expertise. The DigitalQatalyst team can also provide an ongoing managed tier.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review the AI design specification and confirm the deployment environment and tooling.",
      },
    ],
    audience: "Product Managers, Mobile Engineering Leads, and CTO offices",
    industryRelevance:
      "Organisations ready to launch validated AI features within their mobile applications",
    businessImpact:
      "Gets AI-powered mobile features into users' hands with production monitoring and safety controls in place, providing the measurement foundation to prove feature value.",
    tags: ["mobile-ai", "ai-deployment", "on-device-ml"],
  },

  18: {
    description:
      "Keep your mobile app performing, updated, and growing with ongoing release management, performance monitoring, and user feedback analysis handled by the DigitalQatalyst team under a defined SLA.",
    positioning:
      "Mobile app operations on autopilot: releases managed, performance monitored, issues resolved.",
    features: [
      "Monthly app store release management covering bug fixes, OS compatibility updates, and minor enhancements",
      "Continuous crash and ANR monitoring with priority defect resolution within SLA timeframes",
      "App store optimisation including rating response, keyword refinement, and listing updates",
      "Quarterly product review analysing retention data and user feedback to guide next-quarter priorities",
    ],
    timelineMilestones: [
      "Month 1: Onboarding, access setup, baseline metrics, and release cadence agreement",
      "Month 2: First managed release cycle with monitoring and reporting established",
      "Ongoing: Monthly releases, continuous monitoring, and quarterly product reviews",
    ],
    deliverables: [
      {
        title: "Monthly release report",
        description:
          "Record of all releases including changes shipped, QA outcomes, and app store review status.",
      },
      {
        title: "Performance and stability report",
        description:
          "Monthly crash rates, ANR rates, and performance benchmarks with trends and resolved issue log.",
      },
      {
        title: "App store optimisation report",
        description:
          "Keyword rankings, rating trends, review response log, and listing update history by month.",
      },
      {
        title: "Quarterly product review",
        description:
          "Retention analysis, user feedback synthesis, and prioritised feature and improvement recommendations for the next quarter.",
      },
    ],
    packageHighlights: [
      "Monthly release management with SLA-backed defect resolution",
      "App store optimisation included in the managed plan",
      "Quarterly product reviews grounded in retention and user feedback data",
    ],
    faqIntro: "Key questions about the Mobile Apps Managed service.",
    faqs: [
      {
        question: "What is included in monthly release management?",
        answer:
          "Bug fixes, OS and device compatibility updates, and minor enhancements within agreed scope. Feature additions are quoted separately.",
      },
      {
        question: "How quickly are critical crashes resolved?",
        answer:
          "Critical crash SLA timeframes are agreed during onboarding. The DigitalQatalyst team monitors crash reporting continuously and escalates immediately for severity-one issues.",
      },
      {
        question: "Do you manage both the iOS and Android app store presences?",
        answer:
          "Yes. App Store Connect and Google Play management are both included in the managed service.",
      },
      {
        question: "What happens if a new OS version breaks our app?",
        answer:
          "The DigitalQatalyst team monitors OS beta releases and tests compatibility ahead of public releases, issuing a compatibility update before it affects users.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review your app, agree the release cadence, and confirm the monitoring and SLA terms.",
      },
    ],
    audience: "Product Managers, Mobile Engineering Leads, and Digital Operations",
    industryRelevance:
      "Organisations with live mobile apps that need reliable release management without a full in-house mobile DevOps team",
    businessImpact:
      "Maintains app store ratings, prevents OS compatibility failures, and delivers continuous improvements without tying up your product team in release operations.",
    tags: ["mobile-managed", "release-management", "app-store-optimisation"],
  },

  // -----------------------------------------------------------------------
  // PHYSICAL CHANNELS (ids 19-24)
  // -----------------------------------------------------------------------

  19: {
    description:
      "Assess how your branches, service centres, and in-person touchpoints are performing today, identify where frontline experience is inconsistent or inefficient, and receive a prioritised improvement roadmap for your operations leadership.",
    positioning:
      "Frontline experience audited: service gaps mapped, consistency failures identified, priorities set.",
    features: [
      "Mystery shopping and customer journey observation across a sample of physical locations",
      "Staff process and tool review identifying friction points that slow service delivery",
      "Digital-to-physical handoff assessment mapping where customers fall through channel gaps",
      "Prioritised improvement plan ranked by customer experience impact and operational feasibility",
    ],
    timelineMilestones: [
      "Days 1-2: Stakeholder interviews, process documentation review, and location sampling plan",
      "Days 3-4: Mystery shopping visits, staff observations, and data collection",
      "Day 5: Findings presentation with prioritised physical channel improvement roadmap",
    ],
    deliverables: [
      {
        title: "Physical channel audit report",
        description:
          "Location-by-location findings on service quality, process efficiency, staff tools, and customer experience consistency.",
      },
      {
        title: "Digital-to-physical handoff analysis",
        description:
          "Mapped gaps where digital journeys fail to connect with in-person service, with specific causes and recommended fixes.",
      },
      {
        title: "Staff and process friction inventory",
        description:
          "Identified workflow bottlenecks and tool gaps reducing frontline staff efficiency, with severity ratings.",
      },
      {
        title: "Prioritised physical channel roadmap",
        description:
          "Sequenced improvement actions with customer experience scores, operational effort estimates, and suggested owners.",
      },
    ],
    packageHighlights: [
      "Mystery shopping and direct observation included, not just survey data",
      "Digital-to-physical handoff gaps specifically assessed",
      "Roadmap structured for operations teams, not just strategic leaders",
    ],
    faqIntro: "Key questions about the Physical Channels assessment.",
    faqs: [
      {
        question: "How many locations do you visit for the audit?",
        answer:
          "A sample of locations is agreed during scoping based on your network size and geographic spread. Findings are extrapolated across the full estate.",
      },
      {
        question: "Do staff know they are being observed?",
        answer:
          "Mystery shopping visits are unannounced. Structured observation sessions are agreed with site managers in advance. The approach is confirmed with your team during scoping.",
      },
      {
        question: "Do you cover kiosks and automated service points as well as staffed counters?",
        answer:
          "Yes. All physical touchpoints within scope are included, whether staffed, self-service, or hybrid.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will confirm the location sample, access arrangements, and assessment scope.",
      },
    ],
    audience: "Operations Directors, CX Leaders, Retail or Branch Network Managers",
    industryRelevance:
      "Organisations operating branches, stores, clinics, service centres, or any network of in-person customer touchpoints",
    businessImpact:
      "Exposes the specific service inconsistencies and process bottlenecks reducing customer satisfaction and staff efficiency across your physical network.",
    tags: ["physical-cx", "frontline-experience", "operations-audit"],
  },

  20: {
    description:
      "Design a consistent, connected physical service experience across your entire location network: standardised journeys, optimised staff workflows, and integrated digital handoffs specified for your operations team to implement.",
    positioning:
      "Physical service reimagined: connected journeys, standard processes, and digital integration designed for every location.",
    features: [
      "Service journey redesign for your key in-person customer scenarios, tested with real frontline staff",
      "Standard operating procedure design covering service steps, tools, and escalation paths",
      "Digital handoff specification defining how in-person and online channels exchange customer context",
      "Location environment and signage guidance to align physical spaces with the intended experience",
    ],
    timelineMilestones: [
      "Week 1: Current state analysis, frontline staff interviews, and journey prioritisation",
      "Weeks 2-3: Service journey redesign, SOP drafting, and digital integration specification",
      "Week 4: Pilot design validation, documentation finalisation, and handover to operations",
    ],
    deliverables: [
      {
        title: "Redesigned service journey maps",
        description:
          "Step-by-step service flows for each priority scenario, tested with frontline staff and validated against customer research.",
      },
      {
        title: "Standard operating procedures",
        description:
          "Documented service steps, decision rules, tool requirements, and escalation paths for each redesigned journey.",
      },
      {
        title: "Digital-to-physical integration specification",
        description:
          "Technical and process requirements for passing customer context between digital and in-person channels without friction.",
      },
      {
        title: "Environment and wayfinding guidance",
        description:
          "Recommendations for signage, layout, and technology placement to align the physical environment with the redesigned service journeys.",
      },
    ],
    packageHighlights: [
      "Frontline staff input built into the design process, not added at the end",
      "Digital integration specified alongside physical journeys",
      "Pilot-ready documentation for a test location before network rollout",
    ],
    faqIntro: "Key questions about the Physical Channels Design service.",
    faqs: [
      {
        question: "Do you design for a single location type or the whole network?",
        answer:
          "The design is built for your standard location model and adapted for variations (high-volume vs. smaller format, for example). Network rollout planning is included.",
      },
      {
        question: "How do you involve frontline staff in the design?",
        answer:
          "Structured interviews and co-design workshops with frontline teams are built into the engagement so the resulting SOPs reflect operational reality.",
      },
      {
        question: "Can the design accommodate different location formats across our estate?",
        answer:
          "Yes. The DigitalQatalyst team identifies the core journey standard and documents format-specific variations where needed.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review your existing location formats and agree the design scope and pilot approach.",
      },
    ],
    audience: "Operations Directors, CX Leaders, and Retail or Branch Network Managers",
    industryRelevance:
      "Organisations with multi-location physical networks looking to standardise service quality and connect digital and in-person channels",
    businessImpact:
      "Creates a consistent, staff-validated service design that can be implemented across your full location network, reducing service variability and customer effort.",
    tags: ["physical-cx", "service-design", "omnichannel"],
  },

  21: {
    description:
      "Identify which AI tools will improve frontline service speed, reduce staff administrative burden, and make in-person experience more responsive, then validate those use cases and produce specifications ready for build.",
    positioning:
      "AI for physical channels: queue intelligence, staff assistance, and in-store analytics designed before deployment.",
    features: [
      "AI use-case identification across queue management, staff decision support, product recommendation, and visitor analytics",
      "Edge AI feasibility assessment for in-store or branch deployments with connectivity constraints",
      "Responsible AI design for in-person contexts covering camera-based systems, consent requirements, and bias risks",
      "Integration specification connecting AI tools to your existing POS, CRM, and queue management systems",
    ],
    timelineMilestones: [
      "Week 1: AI opportunity mapping for frontline and location operations contexts",
      "Week 2: Use-case validation, connectivity and hardware feasibility, and regulatory review",
      "Weeks 3-4: Responsible AI workflow design, consent specification, and integration documentation",
    ],
    deliverables: [
      {
        title: "Physical channel AI opportunity register",
        description:
          "Ranked AI use cases for your location network, each scored on operational impact, hardware feasibility, and privacy considerations.",
      },
      {
        title: "Edge AI deployment assessment",
        description:
          "Analysis of on-premise versus cloud AI options for locations with constrained connectivity, including hardware requirements.",
      },
      {
        title: "Responsible AI design for physical contexts",
        description:
          "Consent mechanisms, data handling procedures, and bias mitigation requirements for camera-based or biometric AI systems.",
      },
      {
        title: "Physical channel AI build specification",
        description:
          "Integration contracts, hardware specifications, and data flows connecting AI tools to your existing branch and retail systems.",
      },
    ],
    packageHighlights: [
      "Camera and sensor AI use cases assessed with privacy and consent design built in",
      "Edge AI options included for locations with limited connectivity",
      "Integration specified against your existing POS and CRM stack",
    ],
    faqIntro: "Key questions about the Physical Channels AI Design service.",
    faqs: [
      {
        question: "Can AI tools work in locations with poor internet connectivity?",
        answer:
          "Edge AI deployment is assessed as part of this engagement. Many queue management and decision support tools can operate on-premise with periodic cloud sync.",
      },
      {
        question: "What regulations apply to AI in physical retail or branch environments?",
        answer:
          "Camera-based and biometric AI systems are subject to specific regional regulations. The design engagement includes a regulatory landscape review for your operating regions.",
      },
      {
        question: "How do you get staff buy-in for AI tools in a physical environment?",
        answer:
          "Staff impact and change management are considered in the workflow design. The DigitalQatalyst team can include a change readiness assessment as part of the engagement.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will confirm your location types, existing technology, and regulatory context before agreeing the design scope.",
      },
    ],
    audience: "Operations Directors, Retail Technology Leaders, and CX Directors",
    industryRelevance:
      "Organisations operating stores, branches, clinics, or service centres looking to apply AI to improve frontline service and operational efficiency",
    businessImpact:
      "Identifies and validates the AI tools that will reduce queue times, support staff decisions, and improve visitor experience before any hardware or software investment is committed.",
    tags: ["physical-ai", "edge-ai", "retail-technology"],
  },

  22: {
    description:
      "Implement the designed physical channel improvements across your location network with phased rollout management, per-cohort sign-off, staff training, and operational handover so every location delivers the new experience from launch day.",
    positioning:
      "Physical channel improvements deployed: configured, trained, and rolled out across your network.",
    features: [
      "Technology and tooling deployment across agreed locations including configuration and integration testing",
      "Staff training programme delivered in-location and supported by self-service guides for ongoing reference",
      "Pilot location launch with defined success metrics reviewed before full network rollout",
      "Operations handover covering maintenance procedures, escalation contacts, and SLA documentation",
    ],
    timelineMilestones: [
      "Weeks 1-3: Technology setup, systems integration, and pilot location preparation",
      "Weeks 4-7: Pilot launch, performance measurement, and staff training at pilot sites",
      "Weeks 8-10: Rollout to remaining locations with lessons from pilot applied",
      "Weeks 11-12: Full network go-live, performance validation, and operations handover",
    ],
    deliverables: [
      {
        title: "Deployed physical channel improvements",
        description:
          "Technology configured, processes implemented, and staff trained across all agreed locations.",
      },
      {
        title: "Pilot performance report",
        description:
          "Measurement results from the pilot location including customer experience metrics, staff adoption rates, and identified adjustments applied to the network rollout.",
      },
      {
        title: "Staff training materials",
        description:
          "Role-specific training guides, quick reference cards, and e-learning content for ongoing staff onboarding.",
      },
      {
        title: "Operations handover pack",
        description:
          "System documentation, maintenance procedures, escalation paths, and SLA terms for each deployed capability.",
      },
    ],
    packageHighlights: [
      "Pilot location approach proves value before full network investment",
      "Staff training delivered in-location, not just classroom-based",
      "Full operations handover with documented maintenance procedures",
    ],
    faqIntro: "Key questions about the Physical Channels Deploy service.",
    faqs: [
      {
        question: "How is the rollout sequenced across a large location network?",
        answer:
          "The DigitalQatalyst team designs a location tiering approach based on volume, geography, and complexity. The rollout sequence is agreed with your operations team before deployment begins.",
      },
      {
        question: "What happens if a location has specific technical constraints?",
        answer:
          "Location-specific constraints are assessed during the pilot phase. Configuration variations are documented before the network rollout begins.",
      },
      {
        question: "How is staff training managed across multiple shifts and locations?",
        answer:
          "Training is delivered in-location by DigitalQatalyst team trainers, with self-service guides and refresher materials for staff who join after go-live.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will confirm the location scope, existing technology, and rollout timeline.",
      },
    ],
    audience: "Operations Directors, Retail or Branch Network Managers, and IT Leads",
    industryRelevance:
      "Multi-location organisations ready to implement designed physical channel improvements across branches, stores, or service centres",
    businessImpact:
      "Delivers consistent physical service improvements across your full location network with trained staff and documented operations from the first day of full rollout.",
    tags: ["physical-deployment", "network-rollout", "staff-training"],
  },

  23: {
    description:
      "Put AI tools into your branches, stores, and service centres with hardware deployed, safety controls active, and frontline staff trained to use and manage every AI-powered feature in their daily work.",
    positioning:
      "AI in your physical locations: deployed, tested, and your frontline team trained and ready.",
    features: [
      "AI hardware and software deployed across agreed locations with integration to existing systems",
      "Real-time monitoring of AI performance metrics including accuracy, latency, and hardware health",
      "Frontline staff enablement covering how to use, interpret, and escalate AI tool outputs",
      "Privacy and consent infrastructure implemented and verified at each physical location",
    ],
    timelineMilestones: [
      "Weeks 1-3: Hardware procurement, infrastructure setup, and pilot location configuration",
      "Weeks 4-7: AI tool deployment, safety control activation, and staff training at pilot sites",
      "Weeks 8-10: Pilot performance validation and issues resolved before network rollout",
      "Weeks 11-12: Network deployment, full go-live, and operational handover",
    ],
    deliverables: [
      {
        title: "Deployed physical channel AI tools",
        description:
          "AI hardware and software live at all agreed locations, integrated with branch systems and confirmed against acceptance criteria.",
      },
      {
        title: "Physical AI monitoring dashboard",
        description:
          "Centralised view of AI tool performance, hardware health, and safety alerts across all locations.",
      },
      {
        title: "Frontline staff training and reference materials",
        description:
          "In-location training sessions and quick reference guides for every AI tool deployed, covering normal operation and escalation procedures.",
      },
      {
        title: "Physical AI operations guide",
        description:
          "Maintenance schedules, incident response procedures, and escalation contacts for each deployed AI capability.",
      },
    ],
    packageHighlights: [
      "Hardware and software deployment managed end-to-end",
      "Frontline staff trained at the location, not in a classroom",
      "Centralised monitoring dashboard covering the full location network",
    ],
    faqIntro: "Key questions about the Physical Channels AI Deploy service.",
    faqs: [
      {
        question: "Do you manage hardware procurement as part of this service?",
        answer:
          "Hardware specification and sourcing support are included. The DigitalQatalyst team can manage procurement or work alongside your existing vendor relationships.",
      },
      {
        question: "How do you handle locations where AI hardware fails?",
        answer:
          "The operations guide includes hardware fault escalation procedures and fallback processes so service continues without the AI tool until repair or replacement.",
      },
      {
        question: "How do customers at each location know AI is being used?",
        answer:
          "Consent and disclosure requirements are implemented at each location in line with the responsible AI design specification. Signage, screen notices, and staff scripts are all included.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review the AI design specification and confirm the hardware and infrastructure requirements.",
      },
    ],
    audience: "Operations Directors, Retail Technology Leaders, and IT Leads",
    industryRelevance:
      "Organisations ready to deploy validated AI tools across their physical location network",
    businessImpact:
      "Gets AI-powered frontline tools live across your location network with monitoring, trained staff, and safety controls in place so the technology improves service from day one.",
    tags: ["physical-ai", "ai-deployment", "edge-ai"],
  },

  24: {
    description:
      "Keep your physical channel technology performing and your frontline operations running smoothly with ongoing monitoring, maintenance, and optimisation managed by the DigitalQatalyst team under a defined SLA.",
    positioning:
      "Physical operations managed: technology maintained, performance tracked, and issues resolved before they reach customers.",
    features: [
      "Continuous monitoring of physical channel technology including kiosks, queue systems, and in-store tools",
      "Preventive maintenance scheduling and remote resolution of technology faults within SLA timeframes",
      "Monthly performance reporting across customer flow, wait times, transaction completion, and technology uptime",
      "Quarterly experience review analysing operational data and customer feedback to guide network improvements",
    ],
    timelineMilestones: [
      "Month 1: Onboarding, system access, baseline performance, and SLA configuration",
      "Month 2: First managed operations cycle with monitoring and reporting established",
      "Ongoing: Monthly reporting, continuous monitoring, and quarterly experience reviews",
    ],
    deliverables: [
      {
        title: "Monthly operations report",
        description:
          "Technology uptime, incident log, maintenance activity, and customer flow metrics across all managed locations.",
      },
      {
        title: "SLA compliance record",
        description:
          "Tracked resolution times for every incident against agreed SLA tiers, with root cause notes for recurring issues.",
      },
      {
        title: "Quarterly experience review",
        description:
          "Physical channel performance against goals, with customer feedback synthesis and prioritised improvement recommendations.",
      },
      {
        title: "Technology lifecycle report",
        description:
          "Annual review of hardware age, software version currency, and replacement or upgrade recommendations for each location.",
      },
    ],
    packageHighlights: [
      "Preventive maintenance included to reduce unplanned downtime",
      "SLA-backed incident response with monthly compliance reporting",
      "Quarterly experience reviews keep operational improvements data-driven",
    ],
    faqIntro: "Key questions about the Physical Channels Managed service.",
    faqs: [
      {
        question: "Do you manage technology at every location or just a subset?",
        answer:
          "The managed service can cover your full network or a defined subset. Location scope is agreed during onboarding and can be expanded as your network grows.",
      },
      {
        question: "How are hardware faults handled when they need on-site attendance?",
        answer:
          "The DigitalQatalyst team coordinates with your facilities teams and approved vendors for on-site faults. Remote resolution is attempted first to minimise wait times.",
      },
      {
        question:
          "What is the escalation path during a major incident affecting multiple locations?",
        answer:
          "A major incident protocol is agreed during onboarding. The DigitalQatalyst team activates the protocol and provides hourly updates until resolution.",
      },
      {
        question: "Can the managed service cover newly opened locations?",
        answer:
          "Yes. New location onboarding is part of the managed service. The DigitalQatalyst team adds locations to monitoring as they open.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review your location network, existing technology, and agree the SLA terms.",
      },
    ],
    audience: "Operations Directors, Facilities Managers, and IT Leads",
    industryRelevance:
      "Organisations operating multi-location physical networks that rely on technology for customer service delivery",
    businessImpact:
      "Reduces unplanned technology downtime and service disruption across your physical network while freeing your operations team from reactive maintenance management.",
    tags: ["physical-managed", "operations-management", "network-maintenance"],
  },

  // -----------------------------------------------------------------------
  // INTEGRATED EXPERIENCE (ids 25-30)
  // -----------------------------------------------------------------------

  25: {
    description:
      "Assess the consistency, quality, and connectivity of your customer and employee experience across every channel, identify where journeys break down at channel transitions, and receive a prioritised transformation roadmap.",
    positioning:
      "Your end-to-end experience audited: cross-channel gaps mapped, consistency failures scored, priorities agreed.",
    features: [
      "Cross-channel journey audit tracing real customer paths from first contact through to resolution across web, app, social, and in-person",
      "Channel handoff analysis identifying where customers lose context or must repeat information at transition points",
      "Employee experience review assessing tool friction and process gaps affecting frontline service quality",
      "Prioritised transformation roadmap ranked by cross-channel impact and investment required",
    ],
    timelineMilestones: [
      "Days 1-2: Stakeholder interviews, customer journey data review, and channel scope agreement",
      "Days 3-4: Cross-channel testing, handoff analysis, and employee experience review",
      "Day 5: Findings presentation with prioritised integrated experience roadmap",
    ],
    deliverables: [
      {
        title: "Cross-channel experience audit",
        description:
          "End-to-end journey findings across all in-scope channels, with each handoff point rated for continuity, effort, and customer satisfaction impact.",
      },
      {
        title: "Channel handoff analysis",
        description:
          "Specific gaps where customer context is lost or repeated at channel transitions, with root cause and recommended fixes.",
      },
      {
        title: "Employee experience snapshot",
        description:
          "Frontline tool and process gaps identified through staff interviews, rated by impact on service quality.",
      },
      {
        title: "Integrated experience roadmap",
        description:
          "Prioritised recommendations spanning all channels, with expected cross-channel impact, effort estimates, and sequencing rationale.",
      },
    ],
    packageHighlights: [
      "All active channels assessed in a single, connected audit",
      "Employee experience included alongside customer journey findings",
      "Roadmap prioritised by cross-channel impact, not channel silos",
    ],
    faqIntro: "Key questions about the Integrated Experience assessment.",
    faqs: [
      {
        question: "How many channels do you cover in the audit?",
        answer:
          "The scope is agreed during the initial consultation based on your active channels. A typical integrated assessment covers web, mobile, social, and at least one physical touchpoint.",
      },
      {
        question: "Do you assess B2B and B2C journeys in the same engagement?",
        answer:
          "Yes, if both are in scope. The DigitalQatalyst team maps journeys separately by customer type and identifies shared platform or process dependencies.",
      },
      {
        question: "What if we do not have data on cross-channel journeys?",
        answer:
          "Direct observation, customer interviews, and mystery shopping are used alongside analytics. Good findings are possible even without mature cross-channel tracking.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will confirm the channel scope, data access requirements, and stakeholder involvement before work begins.",
      },
    ],
    audience: "CX Directors, Digital Leaders, Product Heads, and Marketing Directors",
    industryRelevance:
      "Organisations operating across multiple customer channels and looking to improve consistency and connectivity across the full experience ecosystem",
    businessImpact:
      "Reveals the specific channel handoff failures and consistency gaps reducing customer satisfaction and repeat engagement, giving your team a cross-channel view of where to invest first.",
    tags: ["cx-strategy", "cross-channel", "journey-mapping"],
  },

  26: {
    description:
      "Design a connected, consistent customer and employee experience across every channel: unified journeys, shared data architecture, and an adoption plan your CX and technology teams can execute together.",
    positioning:
      "Experience designed end-to-end: consistent journeys, unified data, and an adoption plan across every channel.",
    features: [
      "Unified customer journey design spanning web, mobile, social, and physical channels with no handoff gaps",
      "Shared experience data architecture defining how customer context flows between every channel",
      "Personalisation framework design covering segmentation, triggers, and content strategy across touchpoints",
      "Employee experience design aligning frontline tools, processes, and information access with the customer journey",
    ],
    timelineMilestones: [
      "Week 1: Cross-channel discovery, stakeholder alignment, and journey prioritisation",
      "Weeks 2-3: Journey design, data architecture specification, and personalisation framework",
      "Week 4: Employee experience design, adoption planning, and full specification handover",
    ],
    deliverables: [
      {
        title: "Unified customer journey maps",
        description:
          "End-to-end journey designs spanning every in-scope channel, with detailed channel handoff specifications and no identified gaps.",
      },
      {
        title: "Experience data architecture",
        description:
          "Data model and flow design showing how customer context, preferences, and history are shared across channels and systems.",
      },
      {
        title: "Personalisation framework",
        description:
          "Segmentation approach, trigger logic, and content strategy for delivering relevant experiences across touchpoints.",
      },
      {
        title: "Experience adoption plan",
        description:
          "Rollout sequencing, change management steps, and training approach for CX, technology, and frontline teams.",
      },
    ],
    packageHighlights: [
      "All channels designed together, not as separate workstreams",
      "Data architecture included so channels can actually share context",
      "Employee experience designed alongside customer journeys",
    ],
    faqIntro: "Key questions about the Integrated Experience Design service.",
    faqs: [
      {
        question: "Does this design work if we have different technology platforms per channel?",
        answer:
          "Yes. The experience data architecture is designed to work across your existing platform mix. Integration requirements are documented for each channel's technology.",
      },
      {
        question: "How detailed is the personalisation framework?",
        answer:
          "The framework covers segmentation criteria, trigger events, content slot definitions, and a testing approach. It is specification-level, ready for your technology team to implement.",
      },
      {
        question: "Can the design cover employee-facing tools as well as customer journeys?",
        answer:
          "Yes. Employee journey design and frontline tool requirements are included in the integrated experience design by default.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review your channel landscape and agree the design scope and channel coverage.",
      },
    ],
    audience: "CX Directors, Digital Leaders, and Product and Marketing Heads",
    industryRelevance:
      "Organisations operating across multiple customer channels that want to deliver a consistent, personalised experience without siloed channel strategies",
    businessImpact:
      "Creates the design foundation for a genuinely connected experience that reduces customer effort at channel transitions and improves personalisation readiness across your full channel estate.",
    tags: ["cx-design", "experience-architecture", "personalisation"],
  },

  27: {
    description:
      "Validate the AI use cases that will make your integrated experience genuinely more personalised and responsive, define responsible workflows for every validated use case, and produce specifications your technology teams can build to.",
    positioning:
      "AI for integrated experience: personalisation engines, journey intelligence, and next-best-action workflows specified before build.",
    features: [
      "AI opportunity mapping across personalisation, journey orchestration, next-best-action, and churn prediction for multi-channel environments",
      "Data readiness assessment confirming which use cases your current customer data estate can support",
      "Responsible AI workflow design for customer-facing personalisation covering consent, explainability, and bias controls",
      "Cross-channel AI integration specification showing how AI outputs reach customers across web, mobile, social, and in-person",
    ],
    timelineMilestones: [
      "Week 1: AI opportunity mapping and cross-channel data landscape review",
      "Week 2: Use-case prioritisation, data readiness assessment, and regulatory review",
      "Weeks 3-4: Responsible workflow design, integration specification, and build documentation",
    ],
    deliverables: [
      {
        title: "Integrated experience AI opportunity register",
        description:
          "Ranked AI use cases for your cross-channel environment, each scored on personalisation impact, data readiness, and implementation complexity.",
      },
      {
        title: "Data readiness assessment",
        description:
          "Review of your customer data estate confirming which AI use cases are feasible today and what data gaps need addressing first.",
      },
      {
        title: "Responsible AI personalisation design",
        description:
          "Consent mechanisms, explainability requirements, bias testing criteria, and data retention rules for customer-facing AI features.",
      },
      {
        title: "Cross-channel AI integration specification",
        description:
          "API contracts and data flow design showing how AI model outputs reach the right channel at the right moment in the customer journey.",
      },
    ],
    packageHighlights: [
      "Data readiness assessed before any AI use case is committed to build",
      "Responsible personalisation design built in from the start",
      "Cross-channel integration specified so AI works across your full estate",
    ],
    faqIntro: "Key questions about the Integrated Experience AI Design service.",
    faqs: [
      {
        question: "What if our customer data is fragmented across multiple systems?",
        answer:
          "The data readiness assessment identifies fragmentation and prioritises the data consolidation needed before each AI use case. Not all use cases require a full data platform.",
      },
      {
        question: "How do you ensure personalisation AI respects customer privacy preferences?",
        answer:
          "Every personalisation workflow design includes consent integration, preference management, and data minimisation requirements aligned to your regulatory context.",
      },
      {
        question: "Can AI orchestrate the customer journey across channels in real time?",
        answer:
          "Real-time journey orchestration is assessed as a use case. Feasibility depends on your existing data infrastructure, which the assessment confirms.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review your current AI maturity and agree the design scope.",
      },
    ],
    audience: "CX Technology Leaders, Chief Digital Officers, and Marketing Technology Heads",
    industryRelevance:
      "Organisations with multi-channel customer data looking to apply AI to personalisation, journey intelligence, and next-best-action across touchpoints",
    businessImpact:
      "Identifies the AI use cases that will genuinely personalise cross-channel experience and validates them against your actual data estate before any build investment is made.",
    tags: ["cx-ai", "personalisation-engine", "journey-intelligence"],
  },

  28: {
    description:
      "Build and activate your integrated experience design across every channel: technology configured, data pipelines live, and your CX and technology teams handed a fully documented, operational cross-channel platform.",
    positioning:
      "Integrated experience live: channels connected, data flowing, and your teams in control from day one.",
    features: [
      "Cross-channel technology deployment with all agreed integrations tested end-to-end before go-live",
      "Customer data pipeline configuration connecting your channel systems into a unified customer view",
      "Personalisation and journey orchestration tools configured and validated against the design specification",
      "CX and operations team training covering the full cross-channel platform and data management procedures",
    ],
    timelineMilestones: [
      "Weeks 1-4: Technology environment setup, integration development, and data pipeline configuration",
      "Weeks 5-8: Journey orchestration setup, personalisation rule configuration, and QA",
      "Weeks 9-10: User acceptance testing and defect resolution across all channel integrations",
      "Weeks 11-12: Phased go-live, performance validation, and operations handover",
    ],
    deliverables: [
      {
        title: "Integrated experience platform",
        description:
          "All channels connected and integrated, with data flowing between systems and the unified customer view live and tested.",
      },
      {
        title: "QA and integration test report",
        description:
          "Documented test results covering all cross-channel integration paths, data accuracy, and journey orchestration logic.",
      },
      {
        title: "Personalisation and orchestration configuration",
        description:
          "All segments, triggers, and content rules configured and tested in the journey orchestration tool, with documented logic for each.",
      },
      {
        title: "Operations handover pack",
        description:
          "Platform architecture documentation, data management procedures, and team training materials for CX, technology, and operations staff.",
      },
    ],
    packageHighlights: [
      "All channel integrations tested end-to-end before go-live",
      "Unified customer data view configured as part of the deployment",
      "Training and documentation for CX, technology, and operations teams",
    ],
    faqIntro: "Key questions about the Integrated Experience Deploy service.",
    faqs: [
      {
        question: "How do you manage the complexity of integrating multiple channel platforms?",
        answer:
          "Integration is managed against a documented specification with each connection tested individually then end-to-end. A phased go-live reduces risk for complex multi-system environments.",
      },
      {
        question: "What if one of our channel platforms does not support the required integration?",
        answer:
          "Integration feasibility is confirmed during the design phase. Where platform limitations exist, the DigitalQatalyst team designs the best available workaround.",
      },
      {
        question: "How long does the team training take?",
        answer:
          "Training is scheduled across the final three weeks of deployment and tailored by role. Self-service guides cover every platform for ongoing reference.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review the experience design specification and agree the deployment scope and timeline.",
      },
    ],
    audience: "CX Directors, Digital Leaders, and Marketing Technology Heads",
    industryRelevance:
      "Organisations ready to implement a completed integrated experience design across their full channel estate",
    businessImpact:
      "Delivers a connected, data-backed cross-channel experience with all integrations live and your teams trained to operate the platform from day one.",
    tags: ["cx-deployment", "integration-delivery", "omnichannel-platform"],
  },

  29: {
    description:
      "Deploy AI-powered personalisation, journey orchestration, and next-best-action capabilities across your full channel estate with safety controls active and your CX teams trained to manage every AI feature in production.",
    positioning:
      "AI experience capabilities live: personalisation active, journey intelligence running, and your CX team in control.",
    features: [
      "Personalisation AI deployed across web, mobile, and in-person channels with segment rules and content logic active",
      "Journey orchestration AI live with real-time triggers, channel handoff logic, and next-best-action recommendations",
      "AI safety controls configured including consent management, bias monitoring, and output audit logging",
      "CX team training covering model performance review, segment management, and AI recommendation override procedures",
    ],
    timelineMilestones: [
      "Weeks 1-3: AI infrastructure deployment, model integration, and staging environment testing",
      "Weeks 4-7: Personalisation rule configuration, orchestration logic activation, and safety control setup",
      "Weeks 8-10: Controlled rollout, A/B testing framework configuration, and team training",
      "Weeks 11-12: Full production release, performance baselining, and operational handover",
    ],
    deliverables: [
      {
        title: "Deployed AI experience capabilities",
        description:
          "Personalisation, orchestration, and next-best-action AI live across all agreed channels, integrated with your customer data platform and CRM.",
      },
      {
        title: "AI monitoring and performance dashboard",
        description:
          "Real-time view of model accuracy, recommendation click-through, segment coverage, and safety control activity across channels.",
      },
      {
        title: "AI safety and consent configuration",
        description:
          "Consent integration, bias monitoring rules, and output audit logging configured and verified before full production release.",
      },
      {
        title: "CX AI operations guide",
        description:
          "Procedures for managing segment updates, reviewing AI recommendation performance, overriding outputs, and responding to AI incidents.",
      },
    ],
    packageHighlights: [
      "Personalisation and orchestration AI active across all channels simultaneously",
      "A/B testing framework configured to measure AI feature impact from day one",
      "CX team trained to manage and override AI recommendations independently",
    ],
    faqIntro: "Key questions about the Integrated Experience AI Deploy service.",
    faqs: [
      {
        question: "How do you prevent AI personalisation from feeling intrusive to customers?",
        answer:
          "Personalisation rules and content logic are calibrated during testing to ensure relevance without overreach. Customers can also manage their preferences through the consent controls.",
      },
      {
        question: "What happens when an AI recommendation is wrong?",
        answer:
          "CX teams are trained to review and override AI recommendations. The monitoring dashboard flags low-performing recommendations automatically so corrections can be made quickly.",
      },
      {
        question: "How does the orchestration AI handle customers who move between channels?",
        answer:
          "Journey orchestration uses the unified customer profile to maintain context across channel switches. The handoff logic is tested end-to-end before full release.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review the AI design specification and confirm the deployment infrastructure and integration requirements.",
      },
    ],
    audience: "CX Technology Leaders, Chief Digital Officers, and Marketing Technology Heads",
    industryRelevance:
      "Organisations with a validated AI experience design ready to move personalisation and orchestration capabilities into production",
    businessImpact:
      "Activates AI-driven personalisation and journey intelligence across your full channel estate with safety controls and measurement in place so every capability can prove its impact on customer engagement.",
    tags: ["cx-ai", "personalisation-deployment", "journey-orchestration"],
  },

  30: {
    description:
      "Keep your integrated customer experience performing, personalised, and consistent across all channels with ongoing operations, AI model governance, and cross-channel performance reporting managed by the DigitalQatalyst team.",
    positioning:
      "Integrated experience managed end-to-end: all channels monitored, AI models governed, and performance improving monthly.",
    features: [
      "Continuous cross-channel performance monitoring covering customer satisfaction, journey completion, and channel adoption metrics",
      "Monthly AI model governance review checking personalisation accuracy, bias flags, and recommendation quality",
      "Proactive content and segment management keeping personalisation relevant as your audience and product range evolve",
      "Quarterly integrated experience review aligning channel performance data with your business objectives and planning next improvements",
    ],
    timelineMilestones: [
      "Month 1: Onboarding, access setup, baseline metrics across all channels, and SLA configuration",
      "Month 2: First managed cycle with cross-channel reporting and AI governance established",
      "Ongoing: Monthly governance reviews, reporting, and quarterly experience strategy sessions",
    ],
    deliverables: [
      {
        title: "Monthly cross-channel performance report",
        description:
          "Customer satisfaction, journey completion, channel adoption, and personalisation effectiveness across all managed channels.",
      },
      {
        title: "Monthly AI governance report",
        description:
          "Personalisation accuracy, segment coverage, bias monitoring outcomes, and model performance trends with recommended adjustments.",
      },
      {
        title: "Content and segment management log",
        description:
          "Record of all segment and content updates made during the month, with rationale and measured impact.",
      },
      {
        title: "Quarterly integrated experience review",
        description:
          "Strategic assessment of cross-channel experience against business goals, with a prioritised improvement plan for the next quarter.",
      },
    ],
    packageHighlights: [
      "All channels and AI features governed in a single managed service",
      "Monthly AI model review included, not an optional add-on",
      "Quarterly strategy sessions keep the experience aligned with business priorities",
    ],
    faqIntro: "Key questions about the Integrated Experience Managed service.",
    faqs: [
      {
        question: "Does the managed service cover both the technology and the experience strategy?",
        answer:
          "Yes. The DigitalQatalyst team manages technology performance and governance while the quarterly review covers experience strategy and improvement prioritisation.",
      },
      {
        question: "How are AI models updated if personalisation accuracy degrades?",
        answer:
          "The monthly AI governance review identifies accuracy degradation. The DigitalQatalyst team recommends and implements model updates or retraining within the managed service.",
      },
      {
        question: "What if we want to add a new channel to the managed service?",
        answer:
          "New channels are onboarded through a scoped addition to the managed service. The DigitalQatalyst team confirms integration requirements and extends monitoring before the channel goes live.",
      },
      {
        question: "How is the cross-channel data kept accurate and current?",
        answer:
          "Data pipeline health is monitored continuously. The DigitalQatalyst team alerts your team to any pipeline issues and resolves them within agreed SLA timeframes.",
      },
      {
        question: "How do we get started?",
        answer:
          "Request a consultation. The DigitalQatalyst team will review your channel estate, existing platform access, and agree the SLA and governance terms before onboarding.",
      },
    ],
    audience: "CX Directors, Chief Digital Officers, and Marketing Technology Heads",
    industryRelevance:
      "Organisations operating a connected multi-channel experience platform that requires ongoing governance, personalisation management, and performance optimisation",
    businessImpact:
      "Maintains a personalised, consistent, and measurably improving customer experience across all channels while removing the operational burden of cross-channel governance from your internal teams.",
    tags: ["cx-managed", "ai-governance", "cross-channel-operations"],
  },
};
