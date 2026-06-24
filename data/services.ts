import { sortCatalogByPopularMix } from "@/lib/marketplaceCatalogFilters";
import type { ServiceProduct } from "@/lib/types/serviceProduct";

export const initialServices: ServiceProduct[] = [
  {
    id: 1,
    slug: "1",
    collection: "experience",
    serviceType: "advisory",
    standardName: "Online Web Presence (High-Impact) - Assess",
    remixName: {},
    description:
      "Get a clear picture of where your website is losing visitors, missing conversions, and underperforming on search, then walk away with a prioritised action list your marketing and IT teams can execute.",
    positioning:
      "Evidence-led audit of your web estate: gaps scored, priorities set, roadmap ready.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief Marketing Officers, Heads of Digital, and CX leaders accountable for online revenue and brand",
    industryRelevance:
      "B2B and B2C organisations where the website is a primary channel for lead generation, customer acquisition, or service delivery",
    features: [
      "Page-by-page performance audit covering speed, accessibility, and conversion friction",
      "SEO health check with keyword coverage gaps and crawlability findings",
      "Competitor benchmark showing where your site falls behind on key visitor journeys",
      "Prioritised recommendation list scored by effort and expected traffic or conversion uplift",
    ],
    tags: ["web-performance", "seo", "conversion-optimisation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a fully operational, AI-optimised web presence within 24 weeks, with measurable improvement in organic visibility, lead conversion, and digital service completion rates from launch through continuous managed operation.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 2,
    slug: "2",
    collection: "experience",
    serviceType: "design",
    standardName: "Online Web Presence (High-Impact) - Design",
    remixName: {},
    description:
      "Transform your web presence goals into a complete, build-ready blueprint: user journeys mapped, information architecture defined, and technical specifications your development team can code against.",
    positioning:
      "From brief to blueprint: user-centred web design with every decision documented for build.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief Marketing Officers, Heads of Digital, and CX leaders accountable for online revenue and brand",
    industryRelevance:
      "B2B and B2C organisations where the website is a primary channel for lead generation, customer acquisition, or service delivery",
    features: [
      "User journey mapping across your key visitor types and conversion goals",
      "Information architecture and navigation design validated with your target audience",
      "Component-level wireframes and interaction specifications ready for development",
      "CMS and integration requirements documented to prevent rework during build",
    ],
    tags: ["ux-design", "information-architecture", "web-strategy"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a fully operational, AI-optimised web presence within 24 weeks, with measurable improvement in organic visibility, lead conversion, and digital service completion rates from launch through continuous managed operation.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 3,
    slug: "3",
    collection: "experience",
    serviceType: "ai_design",
    standardName: "Online Web Presence (High-Impact) - AI Design",
    remixName: {},
    description: "Identify which AI capabilities will genuinely improve your website",
    positioning:
      "AI use cases for your web presence validated before build investment, with guardrails built in.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief Marketing Officers, Heads of Digital, and CX leaders accountable for online revenue and brand",
    industryRelevance:
      "B2B and B2C organisations where the website is a primary channel for lead generation, customer acquisition, or service delivery",
    features: [
      "AI opportunity mapping across personalisation, search, chat, and content generation for web",
      "Use-case prioritisation based on data readiness, visitor impact, and implementation complexity",
      "Responsible AI workflow design covering bias checks, fallback logic, and content moderation",
      "Deployment specification with model requirements, data pipelines, and integration contracts",
    ],
    tags: ["ai-design", "web-personalisation", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a fully operational, AI-optimised web presence within 24 weeks, with measurable improvement in organic visibility, lead conversion, and digital service completion rates from launch through continuous managed operation.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 4,
    slug: "4",
    collection: "experience",
    serviceType: "deploy",
    standardName: "Online Web Presence (High-Impact) - Implementation",
    remixName: {},
    description:
      "Bring your website designs to life with a phased build, integration, and launch programme that keeps quality and go-live dates on track, and hands over a fully documented site to your operations team.",
    positioning:
      "Managed web delivery: configured, tested, and launched with a documented handover to your team.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief Marketing Officers, Heads of Digital, and CX leaders accountable for online revenue and brand",
    industryRelevance:
      "B2B and B2C organisations where the website is a primary channel for lead generation, customer acquisition, or service delivery",
    features: [
      "CMS configuration and content migration executed against the agreed specification",
      "Third-party integration setup including analytics, CRM, and marketing tools",
      "Cross-browser and accessibility testing before launch, with a tracked defect log",
      "Staged rollout with performance monitoring and rollback procedure ready at go-live",
    ],
    tags: ["web-delivery", "cms-implementation", "launch-management"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a fully operational, AI-optimised web presence within 24 weeks, with measurable improvement in organic visibility, lead conversion, and digital service completion rates from launch through continuous managed operation.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 5,
    slug: "5",
    collection: "experience",
    serviceType: "ai_deploy",
    standardName: "Online Web Presence (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Put your validated AI web features into production with monitoring, safety controls, and a clear operational handover, so personalisation and automation deliver measurable results from launch day.",
    positioning:
      "Governed AI for your website: in production, monitored, and handed over with safety controls intact.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief Marketing Officers, Heads of Digital, and CX leaders accountable for online revenue and brand",
    industryRelevance:
      "B2B and B2C organisations where the website is a primary channel for lead generation, customer acquisition, or service delivery",
    features: [
      "AI model deployment with production-grade monitoring covering accuracy, latency, and drift",
      "Content moderation and output safety controls configured before public exposure",
      "A/B testing framework set up to measure AI feature impact on visitor behaviour",
      "Operational runbook and team training so your staff can manage AI tools post-launch",
    ],
    tags: ["ai-deployment", "model-monitoring", "web-personalisation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a fully operational, AI-optimised web presence within 24 weeks, with measurable improvement in organic visibility, lead conversion, and digital service completion rates from launch through continuous managed operation.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 6,
    slug: "6",
    collection: "experience",
    serviceType: "manage",
    standardName: "Online Web Presence (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your website performing at its best with ongoing monitoring, optimisation, and content governance managed by the DigitalQatalyst team under a clear SLA, so your team stays focused on business priorities.",
    positioning:
      "Your website, running and improving every month: SLA-backed operations with no surprises.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief Marketing Officers, Heads of Digital, and CX leaders accountable for online revenue and brand",
    industryRelevance:
      "B2B and B2C organisations where the website is a primary channel for lead generation, customer acquisition, or service delivery",
    features: [
      "Monthly performance reporting across speed, SEO rankings, and conversion metrics with trends",
      "Proactive issue detection and resolution before problems affect visitors or search rankings",
      "Ongoing content governance including updates, accessibility checks, and CMS user support",
      "Quarterly optimisation sprints targeting the highest-impact improvements identified from data",
    ],
    tags: ["managed-service", "web-operations", "continuous-optimisation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a fully operational, AI-optimised web presence within 24 weeks, with measurable improvement in organic visibility, lead conversion, and digital service completion rates from launch through continuous managed operation.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 7,
    slug: "7",
    collection: "experience",
    serviceType: "advisory",
    standardName: "Online Social Presence (High-Impact) - Assess",
    remixName: {},
    description:
      "Assess the health of your social media presence across every active channel, identify where engagement is low or brand consistency is missing, and receive a prioritised plan your marketing team can act on immediately.",
    positioning:
      "A clear audit of your social channels: where audience engagement is lost and how to win it back.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience: "Chief Marketing Officers, Heads of Social and Content, and Communications leaders",
    industryRelevance:
      "Organisations using social channels as a primary route to brand awareness, community engagement, or customer acquisition across B2C, B2B, and public-sector contexts",
    features: [
      "Channel-by-channel audit of content quality, posting consistency, and audience engagement rates",
      "Brand voice and visual consistency review across all active social platforms",
      "Competitor social benchmarking on follower growth, reach, and content formats",
      "Prioritised action plan ranked by potential engagement uplift and effort required",
    ],
    tags: ["social-media", "brand-consistency", "audience-engagement"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Creates a scalable social capability with consistent content output, measurable audience growth, and AI-optimised campaign activation from launch, sustained through ongoing managed operations.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 8,
    slug: "8",
    collection: "experience",
    serviceType: "design",
    standardName: "Online Social Presence (High-Impact) - Design",
    remixName: {},
    description:
      "Build a social media presence your audience will actually engage with: content frameworks designed for each platform, channel-specific workflows, and a publication system your team can run without agency dependency.",
    positioning: "A social strategy designed for your audience, your channels, and your team",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience: "Chief Marketing Officers, Heads of Social and Content, and Communications leaders",
    industryRelevance:
      "Organisations using social channels as a primary route to brand awareness, community engagement, or customer acquisition across B2C, B2B, and public-sector contexts",
    features: [
      "Platform-specific content strategy for each channel, matched to your audience behaviour data",
      "Content pillar framework with topic clusters, formats, and publishing cadence by channel",
      "Editorial workflow design covering creation, approval, scheduling, and performance review",
      "Community management playbook with response frameworks for comments, messages, and crises",
    ],
    tags: ["social-strategy", "content-design", "editorial-workflow"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Creates a scalable social capability with consistent content output, measurable audience growth, and AI-optimised campaign activation from launch, sustained through ongoing managed operations.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 9,
    slug: "9",
    collection: "experience",
    serviceType: "ai_design",
    standardName: "Online Social Presence (High-Impact) - AI Design",
    remixName: {},
    description:
      "Identify which AI tools will make your social content more relevant and your community management more responsive, validate those use cases, and receive specifications ready for your technology team to build.",
    positioning:
      "AI for social: content intelligence, scheduling optimisation, and sentiment monitoring designed before build.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience: "Chief Marketing Officers, Heads of Social and Content, and Communications leaders",
    industryRelevance:
      "Organisations using social channels as a primary route to brand awareness, community engagement, or customer acquisition across B2C, B2B, and public-sector contexts",
    features: [
      "AI use-case identification for social content generation, caption optimisation, and hashtag intelligence",
      "Sentiment analysis and social listening workflow design with alerting thresholds",
      "Responsible content moderation design covering AI-flagged comments and escalation logic",
      "Tool selection guidance with integration requirements for your existing social and CRM stack",
    ],
    tags: ["social-ai", "content-intelligence", "sentiment-monitoring"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Creates a scalable social capability with consistent content output, measurable audience growth, and AI-optimised campaign activation from launch, sustained through ongoing managed operations.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 10,
    slug: "10",
    collection: "experience",
    serviceType: "deploy",
    standardName: "Online Social Presence (High-Impact) - Implementation",
    remixName: {},
    description:
      "Activate your social media strategy with a fully configured technology stack, content workflows, and community management tools deployed and tested so your team can publish and engage from day one.",
    positioning:
      "Social channels live: tools configured, workflows active, and your team ready to publish.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience: "Chief Marketing Officers, Heads of Social and Content, and Communications leaders",
    industryRelevance:
      "Organisations using social channels as a primary route to brand awareness, community engagement, or customer acquisition across B2C, B2B, and public-sector contexts",
    features: [
      "Social management platform configuration with accounts, permissions, and approval workflows set up",
      "Content scheduling system deployment with editorial calendar integrated to your planning tools",
      "Analytics and reporting dashboard setup tracking reach, engagement, and audience growth by channel",
      "Team training and process validation to confirm your team can operate every tool independently",
    ],
    tags: ["social-deployment", "platform-configuration", "team-enablement"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Creates a scalable social capability with consistent content output, measurable audience growth, and AI-optimised campaign activation from launch, sustained through ongoing managed operations.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 11,
    slug: "11",
    collection: "experience",
    serviceType: "ai_deploy",
    standardName: "Online Social Presence (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy AI-powered social listening, content assistance, and automated moderation into your live channels with safety controls configured and your team trained to manage every feature in production.",
    positioning:
      "AI social tools in production: listening live, moderation active, and your team in control.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience: "Chief Marketing Officers, Heads of Social and Content, and Communications leaders",
    industryRelevance:
      "Organisations using social channels as a primary route to brand awareness, community engagement, or customer acquisition across B2C, B2B, and public-sector contexts",
    features: [
      "Social listening AI deployed with real-time alerts for brand mentions, sentiment shifts, and crisis signals",
      "Content AI tools activated with brand voice guardrails and editorial approval gates before publication",
      "Automated comment moderation live with escalation rules your community managers control",
      "Performance measurement framework tracking AI feature contribution to engagement and response time",
    ],
    tags: ["social-ai", "automated-moderation", "ai-deployment"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Creates a scalable social capability with consistent content output, measurable audience growth, and AI-optimised campaign activation from launch, sustained through ongoing managed operations.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 12,
    slug: "12",
    collection: "experience",
    serviceType: "manage",
    standardName: "Online Social Presence (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your social channels active, on-brand, and growing with monthly content management, community monitoring, and performance reporting handled by the DigitalQatalyst team under a defined SLA.",
    positioning:
      "Social presence managed end-to-end: publishing, monitoring, and reporting every month.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience: "Chief Marketing Officers, Heads of Social and Content, and Communications leaders",
    industryRelevance:
      "Organisations using social channels as a primary route to brand awareness, community engagement, or customer acquisition across B2C, B2B, and public-sector contexts",
    features: [
      "Monthly content publishing across agreed channels, aligned to your brand guidelines and calendar",
      "Daily community monitoring with response to comments and messages within SLA timeframes",
      "Monthly performance report covering reach, engagement, follower growth, and content effectiveness",
      "Quarterly strategy review to adjust content approach based on audience data and business priorities",
    ],
    tags: ["managed-social", "community-management", "content-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Creates a scalable social capability with consistent content output, measurable audience growth, and AI-optimised campaign activation from launch, sustained through ongoing managed operations.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 13,
    slug: "13",
    collection: "experience",
    serviceType: "advisory",
    standardName: "Mobile Apps & Services (High-Impact) - Assess",
    remixName: {},
    description:
      "Assess the performance, usability, and technical health of your mobile app portfolio, identify the gaps driving low adoption or poor retention, and receive a prioritised improvement roadmap your product and engineering teams can act on.",
    positioning:
      "A rigorous mobile app health check: adoption barriers identified, retention risks surfaced, roadmap ready.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Digital Product Directors, Heads of Mobile, and Operations leaders accountable for field or customer-facing mobile services",
    industryRelevance:
      "Organisations with mobile-first customer journeys, field workforce apps, or employee self-service tools across retail, logistics, healthcare, and professional services",
    features: [
      "App store performance audit covering ratings, review themes, and install-to-retention funnel data",
      "UX evaluation of core journeys identifying where users abandon tasks or disengage",
      "Technical performance review of load times, crash rates, and API response across device types",
      "Prioritised improvement roadmap scored by user impact and engineering effort",
    ],
    tags: ["mobile-audit", "app-performance", "ux-review"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a production-ready, AI-enhanced mobile app with sustainable managed operations, improving user adoption rates and reducing the post-launch maintenance burden that typically follows separately managed projects.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 14,
    slug: "14",
    collection: "experience",
    serviceType: "design",
    standardName: "Mobile Apps & Services (High-Impact) - Design",
    remixName: {},
    description:
      "Turn your mobile app strategy into screen-by-screen designs and build-ready specifications that your development team can code against, with user research validating every key interaction before build begins.",
    positioning:
      "From product brief to build-ready mobile app specification: user-validated, technically complete.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Digital Product Directors, Heads of Mobile, and Operations leaders accountable for field or customer-facing mobile services",
    industryRelevance:
      "Organisations with mobile-first customer journeys, field workforce apps, or employee self-service tools across retail, logistics, healthcare, and professional services",
    features: [
      "User research and journey mapping specific to mobile context, including offline and low-connectivity scenarios",
      "Screen-by-screen interaction design validated through usability testing with target users",
      "Platform-specific design system covering iOS and Android guidelines and accessibility standards",
      "Technical specification with API contracts, state management design, and push notification logic",
    ],
    tags: ["mobile-design", "ux-research", "app-specification"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a production-ready, AI-enhanced mobile app with sustainable managed operations, improving user adoption rates and reducing the post-launch maintenance burden that typically follows separately managed projects.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 15,
    slug: "15",
    collection: "experience",
    serviceType: "ai_design",
    standardName: "Mobile Apps & Services (High-Impact) - AI Design",
    remixName: {},
    description:
      "Validate which AI features will genuinely improve your mobile app experience, from in-app personalisation to intelligent search, and produce deployment-ready specifications with responsible AI controls built in.",
    positioning:
      "AI for mobile apps: validated use cases, on-device and cloud options assessed, guardrails specified.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Digital Product Directors, Heads of Mobile, and Operations leaders accountable for field or customer-facing mobile services",
    industryRelevance:
      "Organisations with mobile-first customer journeys, field workforce apps, or employee self-service tools across retail, logistics, healthcare, and professional services",
    features: [
      "AI use-case identification across personalisation, predictive actions, computer vision, and NLP for mobile",
      "On-device versus cloud AI trade-off analysis covering latency, privacy, and battery impact",
      "Responsible AI design including bias testing requirements, data minimisation, and user consent flows",
      "Deployment specification with SDK requirements, model delivery strategy, and platform API constraints",
    ],
    tags: ["mobile-ai", "on-device-ml", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a production-ready, AI-enhanced mobile app with sustainable managed operations, improving user adoption rates and reducing the post-launch maintenance burden that typically follows separately managed projects.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 16,
    slug: "16",
    collection: "experience",
    serviceType: "deploy",
    standardName: "Mobile Apps & Services (High-Impact) - Implementation",
    remixName: {},
    description:
      "Build and launch your mobile app with sprint-based engineering, rigorous QA across iOS and Android, and a documented handover that leaves your team able to manage and evolve the product independently.",
    positioning:
      "Mobile app delivered: built to specification, tested on real devices, and handed over with full documentation.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Digital Product Directors, Heads of Mobile, and Operations leaders accountable for field or customer-facing mobile services",
    industryRelevance:
      "Organisations with mobile-first customer journeys, field workforce apps, or employee self-service tools across retail, logistics, healthcare, and professional services",
    features: [
      "Cross-platform or native build executed against the agreed specification with weekly progress checkpoints",
      "Real-device testing across iOS and Android covering performance, accessibility, and offline behaviour",
      "App store submission management including metadata, screenshots, and review process support",
      "Post-launch hypercare period covering priority defect resolution and performance stabilisation",
    ],
    tags: ["mobile-delivery", "app-launch", "cross-platform"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a production-ready, AI-enhanced mobile app with sustainable managed operations, improving user adoption rates and reducing the post-launch maintenance burden that typically follows separately managed projects.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 17,
    slug: "17",
    collection: "experience",
    serviceType: "ai_deploy",
    standardName: "Mobile Apps & Services (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy your validated AI mobile features into production with on-device and cloud infrastructure configured, safety controls active, and your product team trained to manage every feature after handover.",
    positioning:
      "AI mobile features live: on-device models deployed, monitoring active, and your team in control.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Digital Product Directors, Heads of Mobile, and Operations leaders accountable for field or customer-facing mobile services",
    industryRelevance:
      "Organisations with mobile-first customer journeys, field workforce apps, or employee self-service tools across retail, logistics, healthcare, and professional services",
    features: [
      "AI model deployment covering both on-device SDK integration and cloud inference configuration",
      "Production monitoring for model accuracy, latency, and battery impact across device categories",
      "User consent flow and data privacy controls implemented and verified before public release",
      "Product team training on model update procedures, performance monitoring, and incident response",
    ],
    tags: ["mobile-ai", "ai-deployment", "on-device-ml"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a production-ready, AI-enhanced mobile app with sustainable managed operations, improving user adoption rates and reducing the post-launch maintenance burden that typically follows separately managed projects.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 18,
    slug: "18",
    collection: "experience",
    serviceType: "manage",
    standardName: "Mobile Apps & Services (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your mobile app performing, updated, and growing with ongoing release management, performance monitoring, and user feedback analysis handled by the DigitalQatalyst team under a defined SLA.",
    positioning:
      "Mobile app operations on autopilot: releases managed, performance monitored, issues resolved.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Digital Product Directors, Heads of Mobile, and Operations leaders accountable for field or customer-facing mobile services",
    industryRelevance:
      "Organisations with mobile-first customer journeys, field workforce apps, or employee self-service tools across retail, logistics, healthcare, and professional services",
    features: [
      "Monthly app store release management covering bug fixes, OS compatibility updates, and minor enhancements",
      "Continuous crash and ANR monitoring with priority defect resolution within SLA timeframes",
      "App store optimisation including rating response, keyword refinement, and listing updates",
      "Quarterly product review analysing retention data and user feedback to guide next-quarter priorities",
    ],
    tags: ["mobile-managed", "release-management", "app-store-optimisation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a production-ready, AI-enhanced mobile app with sustainable managed operations, improving user adoption rates and reducing the post-launch maintenance burden that typically follows separately managed projects.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 19,
    slug: "19",
    collection: "experience",
    serviceType: "advisory",
    standardName: "Physical & Frontline Channels (High-Impact) - Assess",
    remixName: {},
    description:
      "Assess how your branches, service centres, and in-person touchpoints are performing today, identify where frontline experience is inconsistent or inefficient, and receive a prioritised improvement roadmap for your operations leadership.",
    positioning:
      "Frontline experience audited: service gaps mapped, consistency failures identified, priorities set.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Operations Directors, Heads of Retail or Branch Networks, and Facilities leaders responsible for in-person service performance",
    industryRelevance:
      "Organisations operating branches, retail stores, clinics, service centres, venues, or hospitality environments where physical and digital experience must work together",
    features: [
      "Mystery shopping and customer journey observation across a sample of physical locations",
      "Staff process and tool review identifying friction points that slow service delivery",
      "Digital-to-physical handoff assessment mapping where customers fall through channel gaps",
      "Prioritised improvement plan ranked by customer experience impact and operational feasibility",
    ],
    tags: ["physical-cx", "frontline-experience", "operations-audit"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces queue times, improves staff productivity, and gives operations leaders a real-time view of physical channel performance, sustained through continuous managed operations after launch.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 20,
    slug: "20",
    collection: "experience",
    serviceType: "design",
    standardName: "Physical & Frontline Channels (High-Impact) - Design",
    remixName: {},
    description:
      "Design a consistent, connected physical service experience across your entire location network: standardised journeys, optimised staff workflows, and integrated digital handoffs specified for your operations team to implement.",
    positioning:
      "Physical service reimagined: connected journeys, standard processes, and digital integration designed for every location.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Operations Directors, Heads of Retail or Branch Networks, and Facilities leaders responsible for in-person service performance",
    industryRelevance:
      "Organisations operating branches, retail stores, clinics, service centres, venues, or hospitality environments where physical and digital experience must work together",
    features: [
      "Service journey redesign for your key in-person customer scenarios, tested with real frontline staff",
      "Standard operating procedure design covering service steps, tools, and escalation paths",
      "Digital handoff specification defining how in-person and online channels exchange customer context",
      "Location environment and signage guidance to align physical spaces with the intended experience",
    ],
    tags: ["physical-cx", "service-design", "omnichannel"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces queue times, improves staff productivity, and gives operations leaders a real-time view of physical channel performance, sustained through continuous managed operations after launch.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 21,
    slug: "21",
    collection: "experience",
    serviceType: "ai_design",
    standardName: "Physical & Frontline Channels (High-Impact) - AI Design",
    remixName: {},
    description:
      "Identify which AI tools will improve frontline service speed, reduce staff administrative burden, and make in-person experience more responsive, then validate those use cases and produce specifications ready for build.",
    positioning:
      "AI for physical channels: queue intelligence, staff assistance, and in-store analytics designed before deployment.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Operations Directors, Heads of Retail or Branch Networks, and Facilities leaders responsible for in-person service performance",
    industryRelevance:
      "Organisations operating branches, retail stores, clinics, service centres, venues, or hospitality environments where physical and digital experience must work together",
    features: [
      "AI use-case identification across queue management, staff decision support, product recommendation, and visitor analytics",
      "Edge AI feasibility assessment for in-store or branch deployments with connectivity constraints",
      "Responsible AI design for in-person contexts covering camera-based systems, consent requirements, and bias risks",
      "Integration specification connecting AI tools to your existing POS, CRM, and queue management systems",
    ],
    tags: ["physical-ai", "edge-ai", "retail-technology"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces queue times, improves staff productivity, and gives operations leaders a real-time view of physical channel performance, sustained through continuous managed operations after launch.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 22,
    slug: "22",
    collection: "experience",
    serviceType: "deploy",
    standardName: "Physical & Frontline Channels (High-Impact) - Implementation",
    remixName: {},
    description:
      "Implement the designed physical channel improvements across your location network with phased rollout management, per-cohort sign-off, staff training, and operational handover so every location delivers the new experience from launch day.",
    positioning:
      "Physical channel improvements deployed: configured, trained, and rolled out across your network.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Operations Directors, Heads of Retail or Branch Networks, and Facilities leaders responsible for in-person service performance",
    industryRelevance:
      "Organisations operating branches, retail stores, clinics, service centres, venues, or hospitality environments where physical and digital experience must work together",
    features: [
      "Technology and tooling deployment across agreed locations including configuration and integration testing",
      "Staff training programme delivered in-location and supported by self-service guides for ongoing reference",
      "Pilot location launch with defined success metrics reviewed before full network rollout",
      "Operations handover covering maintenance procedures, escalation contacts, and SLA documentation",
    ],
    tags: ["physical-deployment", "network-rollout", "staff-training"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces queue times, improves staff productivity, and gives operations leaders a real-time view of physical channel performance, sustained through continuous managed operations after launch.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 23,
    slug: "23",
    collection: "experience",
    serviceType: "ai_deploy",
    standardName: "Physical & Frontline Channels (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Put AI tools into your branches, stores, and service centres with hardware deployed, safety controls active, and frontline staff trained to use and manage every AI-powered feature in their daily work.",
    positioning:
      "AI in your physical locations: deployed, tested, and your frontline team trained and ready.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Operations Directors, Heads of Retail or Branch Networks, and Facilities leaders responsible for in-person service performance",
    industryRelevance:
      "Organisations operating branches, retail stores, clinics, service centres, venues, or hospitality environments where physical and digital experience must work together",
    features: [
      "AI hardware and software deployed across agreed locations with integration to existing systems",
      "Real-time monitoring of AI performance metrics including accuracy, latency, and hardware health",
      "Frontline staff enablement covering how to use, interpret, and escalate AI tool outputs",
      "Privacy and consent infrastructure implemented and verified at each physical location",
    ],
    tags: ["physical-ai", "ai-deployment", "edge-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces queue times, improves staff productivity, and gives operations leaders a real-time view of physical channel performance, sustained through continuous managed operations after launch.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 24,
    slug: "24",
    collection: "experience",
    serviceType: "manage",
    standardName: "Physical & Frontline Channels (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your physical channel technology performing and your frontline operations running smoothly with ongoing monitoring, maintenance, and optimisation managed by the DigitalQatalyst team under a defined SLA.",
    positioning:
      "Physical operations managed: technology maintained, performance tracked, and issues resolved before they reach customers.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Operations Directors, Heads of Retail or Branch Networks, and Facilities leaders responsible for in-person service performance",
    industryRelevance:
      "Organisations operating branches, retail stores, clinics, service centres, venues, or hospitality environments where physical and digital experience must work together",
    features: [
      "Continuous monitoring of physical channel technology including kiosks, queue systems, and in-store tools",
      "Preventive maintenance scheduling and remote resolution of technology faults within SLA timeframes",
      "Monthly performance reporting across customer flow, wait times, transaction completion, and technology uptime",
      "Quarterly experience review analysing operational data and customer feedback to guide network improvements",
    ],
    tags: ["physical-managed", "operations-management", "network-maintenance"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces queue times, improves staff productivity, and gives operations leaders a real-time view of physical channel performance, sustained through continuous managed operations after launch.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 25,
    slug: "25",
    collection: "experience",
    serviceType: "advisory",
    standardName: "Experience Solutions (High-Impact) - Assess",
    remixName: {},
    description:
      "Assess the consistency, quality, and connectivity of your customer and employee experience across every channel, identify where journeys break down at channel transitions, and receive a prioritised transformation roadmap.",
    positioning:
      "Your end-to-end experience audited: cross-channel gaps mapped, consistency failures scored, priorities agreed.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief Experience Officers, Heads of Digital Product, and Marketing leaders responsible for customer or employee experience strategy",
    industryRelevance:
      "Consumer brands, financial services providers, and large employers where experience consistency across digital, physical, and assisted channels is a competitive differentiator",
    features: [
      "Cross-channel journey audit tracing real customer paths from first contact through to resolution across web, app, social, and in-person",
      "Channel handoff analysis identifying where customers lose context or must repeat information at transition points",
      "Employee experience review assessing tool friction and process gaps affecting frontline service quality",
      "Prioritised transformation roadmap ranked by cross-channel impact and investment required",
    ],
    tags: ["cx-strategy", "cross-channel", "journey-mapping"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Produces measurable improvement in journey completion rates, NPS, and channel attribution accuracy, with ongoing managed operations ensuring the experience advantage compounds rather than erodes.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 26,
    slug: "26",
    collection: "experience",
    serviceType: "design",
    standardName: "Experience Solutions (High-Impact) - Design",
    remixName: {},
    description:
      "Design a connected, consistent customer and employee experience across every channel: unified journeys, shared data architecture, and an adoption plan your CX and technology teams can execute together.",
    positioning:
      "Experience designed end-to-end: consistent journeys, unified data, and an adoption plan across every channel.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief Experience Officers, Heads of Digital Product, and Marketing leaders responsible for customer or employee experience strategy",
    industryRelevance:
      "Consumer brands, financial services providers, and large employers where experience consistency across digital, physical, and assisted channels is a competitive differentiator",
    features: [
      "Unified customer journey design spanning web, mobile, social, and physical channels with no handoff gaps",
      "Shared experience data architecture defining how customer context flows between every channel",
      "Personalisation framework design covering segmentation, triggers, and content strategy across touchpoints",
      "Employee experience design aligning frontline tools, processes, and information access with the customer journey",
    ],
    tags: ["cx-design", "experience-architecture", "personalisation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Produces measurable improvement in journey completion rates, NPS, and channel attribution accuracy, with ongoing managed operations ensuring the experience advantage compounds rather than erodes.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 27,
    slug: "27",
    collection: "experience",
    serviceType: "ai_design",
    standardName: "Experience Solutions (High-Impact) - AI Design",
    remixName: {},
    description:
      "Validate the AI use cases that will make your integrated experience genuinely more personalised and responsive, define responsible workflows for every validated use case, and produce specifications your technology teams can build to.",
    positioning:
      "AI for integrated experience: personalisation engines, journey intelligence, and next-best-action workflows specified before build.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief Experience Officers, Heads of Digital Product, and Marketing leaders responsible for customer or employee experience strategy",
    industryRelevance:
      "Consumer brands, financial services providers, and large employers where experience consistency across digital, physical, and assisted channels is a competitive differentiator",
    features: [
      "AI opportunity mapping across personalisation, journey orchestration, next-best-action, and churn prediction for multi-channel environments",
      "Data readiness assessment confirming which use cases your current customer data estate can support",
      "Responsible AI workflow design for customer-facing personalisation covering consent, explainability, and bias controls",
      "Cross-channel AI integration specification showing how AI outputs reach customers across web, mobile, social, and in-person",
    ],
    tags: ["cx-ai", "personalisation-engine", "journey-intelligence"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Produces measurable improvement in journey completion rates, NPS, and channel attribution accuracy, with ongoing managed operations ensuring the experience advantage compounds rather than erodes.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 28,
    slug: "28",
    collection: "experience",
    serviceType: "deploy",
    standardName: "Experience Solutions (High-Impact) - Implementation",
    remixName: {},
    description:
      "Build and activate your integrated experience design across every channel: technology configured, data pipelines live, and your CX and technology teams handed a fully documented, operational cross-channel platform.",
    positioning:
      "Integrated experience live: channels connected, data flowing, and your teams in control from day one.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief Experience Officers, Heads of Digital Product, and Marketing leaders responsible for customer or employee experience strategy",
    industryRelevance:
      "Consumer brands, financial services providers, and large employers where experience consistency across digital, physical, and assisted channels is a competitive differentiator",
    features: [
      "Cross-channel technology deployment with all agreed integrations tested end-to-end before go-live",
      "Customer data pipeline configuration connecting your channel systems into a unified customer view",
      "Personalisation and journey orchestration tools configured and validated against the design specification",
      "CX and operations team training covering the full cross-channel platform and data management procedures",
    ],
    tags: ["cx-deployment", "integration-delivery", "omnichannel-platform"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Produces measurable improvement in journey completion rates, NPS, and channel attribution accuracy, with ongoing managed operations ensuring the experience advantage compounds rather than erodes.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 29,
    slug: "29",
    collection: "experience",
    serviceType: "ai_deploy",
    standardName: "Experience Solutions (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy AI-powered personalisation, journey orchestration, and next-best-action capabilities across your full channel estate with safety controls active and your CX teams trained to manage every AI feature in production.",
    positioning:
      "AI experience capabilities live: personalisation active, journey intelligence running, and your CX team in control.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief Experience Officers, Heads of Digital Product, and Marketing leaders responsible for customer or employee experience strategy",
    industryRelevance:
      "Consumer brands, financial services providers, and large employers where experience consistency across digital, physical, and assisted channels is a competitive differentiator",
    features: [
      "Personalisation AI deployed across web, mobile, and in-person channels with segment rules and content logic active",
      "Journey orchestration AI live with real-time triggers, channel handoff logic, and next-best-action recommendations",
      "AI safety controls configured including consent management, bias monitoring, and output audit logging",
      "CX team training covering model performance review, segment management, and AI recommendation override procedures",
    ],
    tags: ["cx-ai", "personalisation-deployment", "journey-orchestration"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Produces measurable improvement in journey completion rates, NPS, and channel attribution accuracy, with ongoing managed operations ensuring the experience advantage compounds rather than erodes.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 30,
    slug: "30",
    collection: "experience",
    serviceType: "manage",
    standardName: "Experience Solutions (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your integrated customer experience performing, personalised, and consistent across all channels with ongoing operations, AI model governance, and cross-channel performance reporting managed by the DigitalQatalyst team.",
    positioning:
      "Integrated experience managed end-to-end: all channels monitored, AI models governed, and performance improving monthly.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 110,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief Experience Officers, Heads of Digital Product, and Marketing leaders responsible for customer or employee experience strategy",
    industryRelevance:
      "Consumer brands, financial services providers, and large employers where experience consistency across digital, physical, and assisted channels is a competitive differentiator",
    features: [
      "Continuous cross-channel performance monitoring covering customer satisfaction, journey completion, and channel adoption metrics",
      "Monthly AI model governance review checking personalisation accuracy, bias flags, and recommendation quality",
      "Proactive content and segment management keeping personalisation relevant as your audience and product range evolve",
      "Quarterly integrated experience review aligning channel performance data with your business objectives and planning next improvements",
    ],
    tags: ["cx-managed", "ai-governance", "cross-channel-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Produces measurable improvement in journey completion rates, NPS, and channel attribution accuracy, with ongoing managed operations ensuring the experience advantage compounds rather than erodes.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 31,
    slug: "31",
    collection: "experience",
    serviceType: "advisory",
    standardName: "CRM & Customer Relationship (High-Impact) - Assess",
    remixName: {},
    description:
      "Audit your CRM platform and relationship management practices against current performance data, then receive a prioritised roadmap of the changes most likely to lift pipeline visibility and revenue consistency.",
    positioning:
      "Understand exactly where your CRM is costing you deals, before you spend a pound on change.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief Revenue Officers, Sales Directors, VP of Marketing, and Customer Service leaders accountable for pipeline, revenue, and retention",
    industryRelevance:
      "B2B organisations managing structured sales cycles, B2C businesses with subscription or account models, and service organisations tracking relationship portfolios",
    features: [
      "Current-state audit of CRM data quality, pipeline coverage, and process adherence",
      "Gap analysis mapped to sales, marketing, and service outcomes you care about",
      "Prioritised improvement roadmap with effort scores and owner recommendations",
      "Stakeholder-ready findings pack your leadership team can act on immediately",
    ],
    tags: ["crm", "pipeline-management", "revenue-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases pipeline visibility, shortens sales cycles, and improves customer retention through better data and AI-guided workflows, sustained by managed operations that maintain platform health and adoption rates.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 32,
    slug: "32",
    collection: "experience",
    serviceType: "design",
    standardName: "CRM & Customer Relationship (High-Impact) - Design",
    remixName: {},
    description:
      "Turn your CRM improvement goals into user-centred workflows, integration specifications, and a build-ready blueprint your delivery team can implement with confidence.",
    positioning:
      "A CRM design blueprint that closes the gap between what the platform can do and what your teams actually need.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief Revenue Officers, Sales Directors, VP of Marketing, and Customer Service leaders accountable for pipeline, revenue, and retention",
    industryRelevance:
      "B2B organisations managing structured sales cycles, B2C businesses with subscription or account models, and service organisations tracking relationship portfolios",
    features: [
      "User journey mapping for sales, marketing, and service roles across the CRM lifecycle",
      "Data model and field architecture designed for reporting accuracy and automation readiness",
      "Integration specifications covering your marketing, finance, and operational systems",
      "Change and adoption plan with role-based training outlines and go-live criteria",
    ],
    tags: ["crm", "pipeline-management", "revenue-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases pipeline visibility, shortens sales cycles, and improves customer retention through better data and AI-guided workflows, sustained by managed operations that maintain platform health and adoption rates.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 33,
    slug: "33",
    collection: "experience",
    serviceType: "ai_design",
    standardName: "CRM & Customer Relationship (High-Impact) - AI Design",
    remixName: {},
    description:
      "Validate which AI use cases genuinely improve CRM outcomes, then produce responsible workflow designs and deployment specifications your team can build and govern with confidence.",
    positioning:
      "AI capabilities for your CRM platform, scoped responsibly and specified for build before any budget is committed.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief Revenue Officers, Sales Directors, VP of Marketing, and Customer Service leaders accountable for pipeline, revenue, and retention",
    industryRelevance:
      "B2B organisations managing structured sales cycles, B2C businesses with subscription or account models, and service organisations tracking relationship portfolios",
    features: [
      "AI use-case scoring against your CRM data maturity, business value, and implementation feasibility",
      "Responsible workflow designs with bias controls, data privacy requirements, and human override points",
      "Model and vendor selection guidance tailored to your CRM platform and data landscape",
      "Deployment specifications including monitoring thresholds, model refresh cadence, and fallback logic",
    ],
    tags: ["crm", "ai-design", "revenue-operations", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases pipeline visibility, shortens sales cycles, and improves customer retention through better data and AI-guided workflows, sustained by managed operations that maintain platform health and adoption rates.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 34,
    slug: "34",
    collection: "experience",
    serviceType: "deploy",
    standardName: "CRM & Customer Relationship (High-Impact) - Implementation",
    remixName: {},
    description:
      "Configure, integrate, test, and launch your CRM platform improvements with structured quality assurance and a controlled handover that leaves your team fully operational.",
    positioning:
      "CRM changes delivered on time, tested against your requirements, and handed over so your teams can run them without dependency on us.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief Revenue Officers, Sales Directors, VP of Marketing, and Customer Service leaders accountable for pipeline, revenue, and retention",
    industryRelevance:
      "B2B organisations managing structured sales cycles, B2C businesses with subscription or account models, and service organisations tracking relationship portfolios",
    features: [
      "Configuration and customisation built to approved specifications, version-controlled throughout",
      "Integration testing covering each connected system with documented pass criteria and defect resolution",
      "User acceptance testing facilitated with your sales, marketing, and service representatives",
      "Go-live playbook, rollback plan, and post-launch hypercare to protect business continuity",
    ],
    tags: ["crm", "pipeline-management", "revenue-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases pipeline visibility, shortens sales cycles, and improves customer retention through better data and AI-guided workflows, sustained by managed operations that maintain platform health and adoption rates.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 35,
    slug: "35",
    collection: "experience",
    serviceType: "ai_deploy",
    standardName: "CRM & Customer Relationship (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy approved AI capabilities into your CRM platform with production-grade monitoring, safety controls, and a structured handover that gives your team full operational ownership.",
    positioning:
      "AI in your CRM that works in production, with the governance and monitoring to keep it working reliably.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief Revenue Officers, Sales Directors, VP of Marketing, and Customer Service leaders accountable for pipeline, revenue, and retention",
    industryRelevance:
      "B2B organisations managing structured sales cycles, B2C businesses with subscription or account models, and service organisations tracking relationship portfolios",
    features: [
      "Production deployment of AI models integrated into your CRM workflows and data pipelines",
      "Safety and bias monitoring configured to your agreed thresholds, with alerts and escalation paths",
      "Model performance dashboards accessible to your operations and analytics teams",
      "AI operations runbook and team training so your people manage the capability, not just consume it",
    ],
    tags: ["crm", "ai-deploy", "revenue-operations", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases pipeline visibility, shortens sales cycles, and improves customer retention through better data and AI-guided workflows, sustained by managed operations that maintain platform health and adoption rates.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 36,
    slug: "36",
    collection: "experience",
    serviceType: "manage",
    standardName: "CRM & Customer Relationship (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your CRM platform performing at the level your revenue operations depend on, with continuous monitoring, regular optimisation cycles, and a dedicated team accountable to your agreed service levels.",
    positioning:
      "Your CRM platform, continuously maintained and improved, so your team focuses on customers, not system administration.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief Revenue Officers, Sales Directors, VP of Marketing, and Customer Service leaders accountable for pipeline, revenue, and retention",
    industryRelevance:
      "B2B organisations managing structured sales cycles, B2C businesses with subscription or account models, and service organisations tracking relationship portfolios",
    features: [
      "Monthly platform health checks covering data quality, automation success rates, and integration uptime",
      "Proactive optimisation of workflows, fields, and reports based on usage analytics and business feedback",
      "Release management, update testing, and configuration change control to protect production stability",
      "Monthly performance report with KPI tracking, usage trends, and a forward roadmap of improvements",
    ],
    tags: ["crm", "managed-service", "revenue-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases pipeline visibility, shortens sales cycles, and improves customer retention through better data and AI-guided workflows, sustained by managed operations that maintain platform health and adoption rates.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 37,
    slug: "37",
    collection: "experience",
    serviceType: "advisory",
    standardName: "Marketing Operations (High-Impact) - Assess",
    remixName: {},
    description:
      "Audit your marketing operations, campaign infrastructure, and attribution model to identify what is limiting performance, then leave with a prioritised plan your marketing leadership can act on.",
    positioning:
      "Find out exactly why campaigns are underperforming before you invest in more technology or headcount.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief Marketing Officers, Heads of Marketing Operations, and Growth leaders accountable for demand generation and marketing ROI",
    industryRelevance:
      "Organisations scaling paid, owned, and earned marketing channels where data-driven targeting and campaign automation are necessary to maintain efficiency at volume",
    features: [
      "Marketing operations audit covering automation health, data quality, and campaign execution consistency",
      "Attribution and measurement review to identify where reporting is misleading investment decisions",
      "Audience segmentation and targeting assessment against campaign performance outcomes",
      "Prioritised improvement roadmap with effort ratings and sequenced quick wins",
    ],
    tags: ["marketing-ops", "campaign-performance", "attribution"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces campaign setup time, improves audience targeting precision, and increases marketing return on investment through AI-assisted optimisation, sustained by managed operations that keep the MarTech stack performing.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 38,
    slug: "38",
    collection: "experience",
    serviceType: "design",
    standardName: "Marketing Operations (High-Impact) - Design",
    remixName: {},
    description:
      "Design your marketing platform architecture, campaign structures, and audience models so your team can execute at scale with consistent measurement and predictable results.",
    positioning:
      "A marketing blueprint built for how your organisation actually generates and converts demand.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief Marketing Officers, Heads of Marketing Operations, and Growth leaders accountable for demand generation and marketing ROI",
    industryRelevance:
      "Organisations scaling paid, owned, and earned marketing channels where data-driven targeting and campaign automation are necessary to maintain efficiency at volume",
    features: [
      "Campaign architecture design covering channel mix, content cadences, and trigger logic",
      "Audience segmentation model with lifecycle stage definitions and personalisation rules",
      "Attribution and reporting framework designed for the decisions your leadership actually makes",
      "Technology and integration design connecting your marketing stack to CRM, data, and analytics",
    ],
    tags: ["marketing-ops", "campaign-performance", "attribution"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces campaign setup time, improves audience targeting precision, and increases marketing return on investment through AI-assisted optimisation, sustained by managed operations that keep the MarTech stack performing.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 39,
    slug: "39",
    collection: "experience",
    serviceType: "ai_design",
    standardName: "Marketing Operations (High-Impact) - AI Design",
    remixName: {},
    description:
      "Validate which AI capabilities will genuinely improve marketing outcomes for your organisation, then produce responsible workflow designs and deployment specifications ready for build.",
    positioning:
      "AI for marketing, validated against your data reality and scoped responsibly before a single line of code is written.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief Marketing Officers, Heads of Marketing Operations, and Growth leaders accountable for demand generation and marketing ROI",
    industryRelevance:
      "Organisations scaling paid, owned, and earned marketing channels where data-driven targeting and campaign automation are necessary to maintain efficiency at volume",
    features: [
      "AI use-case scoring across personalisation, content generation, audience prediction, and spend optimisation",
      "Data readiness assessment confirming which use cases your current data actually supports",
      "Responsible AI workflow designs with privacy controls, human review points, and bias detection requirements",
      "Technical specifications covering model requirements, integration points, and monitoring thresholds",
    ],
    tags: ["marketing-ops", "ai-design", "personalisation", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces campaign setup time, improves audience targeting precision, and increases marketing return on investment through AI-assisted optimisation, sustained by managed operations that keep the MarTech stack performing.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 40,
    slug: "40",
    collection: "experience",
    serviceType: "deploy",
    standardName: "Marketing Operations (High-Impact) - Implementation",
    remixName: {},
    description:
      "Build, integrate, test, and launch your marketing platform capabilities with structured quality assurance and a controlled handover so your team can execute campaigns from day one.",
    positioning:
      "Marketing platform capabilities delivered and tested, with your team ready to run campaigns before the project closes.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief Marketing Officers, Heads of Marketing Operations, and Growth leaders accountable for demand generation and marketing ROI",
    industryRelevance:
      "Organisations scaling paid, owned, and earned marketing channels where data-driven targeting and campaign automation are necessary to maintain efficiency at volume",
    features: [
      "Platform configuration and campaign template build to agreed specifications",
      "Integration delivery across CRM, analytics, paid channels, and data sources, with documented test evidence",
      "Audience and segmentation configuration validated against your approved segment definitions",
      "User acceptance testing with your marketing team and a go-live readiness checklist before launch",
    ],
    tags: ["marketing-ops", "campaign-performance", "attribution"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces campaign setup time, improves audience targeting precision, and increases marketing return on investment through AI-assisted optimisation, sustained by managed operations that keep the MarTech stack performing.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 41,
    slug: "41",
    collection: "experience",
    serviceType: "ai_deploy",
    standardName: "Marketing Operations (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy validated AI capabilities into your marketing platform with production monitoring, privacy controls, and a team handover that gives your marketing operations function full ownership.",
    positioning:
      "AI-powered marketing capabilities live in production, governed from the start, and run by your team.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief Marketing Officers, Heads of Marketing Operations, and Growth leaders accountable for demand generation and marketing ROI",
    industryRelevance:
      "Organisations scaling paid, owned, and earned marketing channels where data-driven targeting and campaign automation are necessary to maintain efficiency at volume",
    features: [
      "Production deployment of AI models integrated into your marketing automation and data workflows",
      "Privacy and consent controls validated against your data obligations before any model goes live",
      "Model performance dashboards and alerting configured for your marketing operations team",
      "AI operations training and runbook so your team manages the capability rather than depending on external support",
    ],
    tags: ["marketing-ops", "ai-deploy", "personalisation", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces campaign setup time, improves audience targeting precision, and increases marketing return on investment through AI-assisted optimisation, sustained by managed operations that keep the MarTech stack performing.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 42,
    slug: "42",
    collection: "experience",
    serviceType: "manage",
    standardName: "Marketing Operations (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your marketing platform and campaigns operating at full capability, with monthly performance reporting, proactive optimisation, and a team accountable to your agreed service levels.",
    positioning:
      "Your marketing operations, continuously maintained and improved, so campaigns keep delivering without platform bottlenecks.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief Marketing Officers, Heads of Marketing Operations, and Growth leaders accountable for demand generation and marketing ROI",
    industryRelevance:
      "Organisations scaling paid, owned, and earned marketing channels where data-driven targeting and campaign automation are necessary to maintain efficiency at volume",
    features: [
      "Monthly marketing platform health checks covering automation reliability, data quality, and integration uptime",
      "Campaign performance analysis and optimisation recommendations based on your actual results data",
      "Release and update management, with testing before any platform changes reach production",
      "Monthly performance report covering KPIs, automation health, and a forward optimisation plan",
    ],
    tags: ["marketing-ops", "managed-service", "campaign-performance"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces campaign setup time, improves audience targeting precision, and increases marketing return on investment through AI-assisted optimisation, sustained by managed operations that keep the MarTech stack performing.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 43,
    slug: "43",
    collection: "experience",
    serviceType: "advisory",
    standardName: "Smart Sales & Quotation (High-Impact) - Assess",
    remixName: {},
    description:
      "Audit your sales process and quotation workflows to identify where deals are slowing down, where pricing decisions are inconsistent, and where manual effort is creating conversion risk.",
    positioning:
      "Find the bottlenecks costing you deals and margin before committing to platform or process change.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief Revenue Officers, Commercial Directors, and Sales Operations leaders accountable for win rates and pricing discipline",
    industryRelevance:
      "Manufacturers, technology vendors, professional services firms, and distributors with complex pricing, product configuration, or multi-stakeholder approval requirements",
    features: [
      "End-to-end sales process audit from lead qualification through to quote acceptance",
      "Quotation workflow review covering approval steps, pricing rules, and error rates",
      "Pricing consistency assessment across products, channels, and sales team behaviour",
      "Prioritised improvement roadmap with effort scores and quick-win identification",
    ],
    tags: ["sales-ops", "cpq", "pricing-control"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Cuts average quote turnaround by reducing manual calculation and approval bottlenecks, improves pricing consistency, and gives commercial leaders live visibility of pipeline and margin performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 44,
    slug: "44",
    collection: "experience",
    serviceType: "design",
    standardName: "Smart Sales & Quotation (High-Impact) - Design",
    remixName: {},
    description:
      "Design the sales workflows, quotation logic, and pricing rules your team needs to produce accurate, approved quotes faster, with the integration and adoption plan to make it work in practice.",
    positioning:
      "A quotation system design that gives your sales team speed and your commercial leadership confidence in every price sent.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief Revenue Officers, Commercial Directors, and Sales Operations leaders accountable for win rates and pricing discipline",
    industryRelevance:
      "Manufacturers, technology vendors, professional services firms, and distributors with complex pricing, product configuration, or multi-stakeholder approval requirements",
    features: [
      "Sales journey design from opportunity qualification through quote generation and contract handoff",
      "Quotation logic and pricing rule architecture tailored to your product and customer complexity",
      "Approval workflow design with delegation matrices, override controls, and audit trail requirements",
      "Integration specifications connecting your CPQ platform to CRM, ERP, and contract systems",
    ],
    tags: ["sales-ops", "cpq", "pricing-control"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Cuts average quote turnaround by reducing manual calculation and approval bottlenecks, improves pricing consistency, and gives commercial leaders live visibility of pipeline and margin performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 45,
    slug: "45",
    collection: "experience",
    serviceType: "ai_design",
    standardName: "Smart Sales & Quotation (High-Impact) - AI Design",
    remixName: {},
    description:
      "Validate which AI capabilities can meaningfully accelerate your quotation process and improve pricing decisions, then produce responsible workflow designs and deployment specifications ready for build.",
    positioning:
      "AI for sales and quotation, scoped to the use cases your data supports and specified for responsible deployment.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief Revenue Officers, Commercial Directors, and Sales Operations leaders accountable for win rates and pricing discipline",
    industryRelevance:
      "Manufacturers, technology vendors, professional services firms, and distributors with complex pricing, product configuration, or multi-stakeholder approval requirements",
    features: [
      "AI use-case scoring for pricing optimisation, quote-to-win prediction, and configuration assistance",
      "Data readiness assessment confirming which use cases your transaction and product data actually supports",
      "Responsible AI workflow designs with override controls, pricing authority boundaries, and audit trail requirements",
      "Technical specifications for model integration with your CPQ and CRM platforms",
    ],
    tags: ["sales-ops", "ai-design", "pricing-control", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Cuts average quote turnaround by reducing manual calculation and approval bottlenecks, improves pricing consistency, and gives commercial leaders live visibility of pipeline and margin performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 46,
    slug: "46",
    collection: "experience",
    serviceType: "deploy",
    standardName: "Smart Sales & Quotation (High-Impact) - Implementation",
    remixName: {},
    description:
      "Configure, integrate, test, and launch your CPQ and sales quotation platform with structured quality assurance and a handover that leaves your sales team fully equipped to operate independently.",
    positioning:
      "Your CPQ platform live and tested, with your sales team confident in it before the first real quote goes out.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief Revenue Officers, Commercial Directors, and Sales Operations leaders accountable for win rates and pricing discipline",
    industryRelevance:
      "Manufacturers, technology vendors, professional services firms, and distributors with complex pricing, product configuration, or multi-stakeholder approval requirements",
    features: [
      "CPQ platform configuration built to your approved pricing rules and workflow specifications",
      "Integration delivery connecting CPQ to CRM, ERP, and contract systems, with documented test evidence",
      "End-to-end quotation workflow testing using representative sales scenarios from your actual product catalogue",
      "Sales team training and a go-live readiness assessment before controlled launch",
    ],
    tags: ["sales-ops", "cpq", "pricing-control"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Cuts average quote turnaround by reducing manual calculation and approval bottlenecks, improves pricing consistency, and gives commercial leaders live visibility of pipeline and margin performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 47,
    slug: "47",
    collection: "experience",
    serviceType: "ai_deploy",
    standardName: "Smart Sales & Quotation (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy validated AI capabilities into your CPQ and sales platform with production monitoring, commercial authority controls, and a structured handover that gives your sales operations team full ownership.",
    positioning:
      "AI-assisted pricing and sales recommendations in production, governed correctly from the first quote.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief Revenue Officers, Commercial Directors, and Sales Operations leaders accountable for win rates and pricing discipline",
    industryRelevance:
      "Manufacturers, technology vendors, professional services firms, and distributors with complex pricing, product configuration, or multi-stakeholder approval requirements",
    features: [
      "Production deployment of AI models integrated into your CPQ and CRM workflows",
      "Commercial authority controls and override logic validated before any model goes live",
      "AI performance dashboards covering pricing accuracy, recommendation acceptance rates, and business impact",
      "Sales team training and AI operations runbook so your team manages the capability confidently",
    ],
    tags: ["sales-ops", "ai-deploy", "pricing-control", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Cuts average quote turnaround by reducing manual calculation and approval bottlenecks, improves pricing consistency, and gives commercial leaders live visibility of pipeline and margin performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 48,
    slug: "48",
    collection: "experience",
    serviceType: "manage",
    standardName: "Smart Sales & Quotation (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your CPQ platform and quotation operations running at full commercial accuracy, with monthly health checks, pricing rule maintenance, and a team accountable to your agreed service levels.",
    positioning:
      "Your quotation platform continuously maintained so pricing stays accurate and sales teams can generate quotes without delay.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief Revenue Officers, Commercial Directors, and Sales Operations leaders accountable for win rates and pricing discipline",
    industryRelevance:
      "Manufacturers, technology vendors, professional services firms, and distributors with complex pricing, product configuration, or multi-stakeholder approval requirements",
    features: [
      "Monthly CPQ platform health checks covering pricing rule accuracy, workflow reliability, and integration uptime",
      "Pricing rule and product catalogue maintenance as your commercial offer evolves",
      "Release and update management, with pricing accuracy testing before any changes reach production",
      "Monthly performance report covering quote cycle times, approval volumes, and pricing exception rates",
    ],
    tags: ["sales-ops", "managed-service", "cpq"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Cuts average quote turnaround by reducing manual calculation and approval bottlenecks, improves pricing consistency, and gives commercial leaders live visibility of pipeline and margin performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 49,
    slug: "49",
    collection: "experience",
    serviceType: "advisory",
    standardName: "Customer Support & Success (High-Impact) - Assess",
    remixName: {},
    description:
      "Audit your customer support and success operations to identify where resolution times are lagging, where customer effort is highest, and where your current tooling is creating agent and customer friction.",
    positioning:
      "Understand exactly where your support operation is losing customers and agent productivity before investing in change.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "VP of Customer Success, Heads of Customer Service, and CX leaders accountable for retention and service cost",
    industryRelevance:
      "Subscription businesses, SaaS providers, consumer services organisations, and any company where customer retention is tied directly to support quality",
    features: [
      "Support channel and case management audit covering resolution times, escalation rates, and first-contact resolution",
      "Customer effort assessment identifying where process or tooling is creating unnecessary friction for customers",
      "Agent productivity review covering handle times, knowledge access, and tool-switching burden",
      "Prioritised improvement roadmap with effort scores and quick wins your leadership can act on",
    ],
    tags: ["customer-support", "cx-operations", "service-desk"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves first-contact resolution, reduces average handle time, and increases customer retention through AI-assisted support workflows, sustained by managed operations that monitor and improve performance continuously.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 50,
    slug: "50",
    collection: "experience",
    serviceType: "design",
    standardName: "Customer Support & Success (High-Impact) - Design",
    remixName: {},
    description:
      "Design the support workflows, knowledge architecture, and channel strategy your team needs to resolve cases faster, reduce escalations, and deliver a consistent customer experience at scale.",
    positioning:
      "A support operations design that gives your agents the right information at the right moment and your customers a resolution without unnecessary effort.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "VP of Customer Success, Heads of Customer Service, and CX leaders accountable for retention and service cost",
    industryRelevance:
      "Subscription businesses, SaaS providers, consumer services organisations, and any company where customer retention is tied directly to support quality",
    features: [
      "Support journey design covering all customer channels with escalation logic and handoff specifications",
      "Knowledge management architecture designed for agent accuracy, self-service deflection, and maintenance efficiency",
      "Case routing and priority logic tailored to your SLA tiers, customer segments, and agent skill sets",
      "Agent experience design covering workspace layout, knowledge access patterns, and after-call workflow",
    ],
    tags: ["customer-support", "cx-operations", "service-desk"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves first-contact resolution, reduces average handle time, and increases customer retention through AI-assisted support workflows, sustained by managed operations that monitor and improve performance continuously.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 51,
    slug: "51",
    collection: "experience",
    serviceType: "ai_design",
    standardName: "Customer Support & Success (High-Impact) - AI Design",
    remixName: {},
    description:
      "Validate which AI capabilities can genuinely improve resolution speed and customer effort in your support operation, then produce responsible workflow designs and deployment specifications ready for build.",
    positioning:
      "AI for customer support, scoped to use cases your data and platform support, with guardrails that protect customers and agents.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "VP of Customer Success, Heads of Customer Service, and CX leaders accountable for retention and service cost",
    industryRelevance:
      "Subscription businesses, SaaS providers, consumer services organisations, and any company where customer retention is tied directly to support quality",
    features: [
      "AI use-case scoring for intelligent triage, agent assist, self-service automation, and sentiment monitoring",
      "Data readiness assessment confirming which use cases your case history and knowledge data actually supports",
      "Responsible AI workflow designs with human escalation paths, bias controls, and transparency requirements",
      "Technical specifications for integration with your support platform, knowledge base, and CRM",
    ],
    tags: ["customer-support", "ai-design", "cx-operations", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves first-contact resolution, reduces average handle time, and increases customer retention through AI-assisted support workflows, sustained by managed operations that monitor and improve performance continuously.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 52,
    slug: "52",
    collection: "experience",
    serviceType: "deploy",
    standardName: "Customer Support & Success (High-Impact) - Implementation",
    remixName: {},
    description:
      "Configure, integrate, test, and launch your customer support platform improvements with structured quality assurance and a controlled handover that leaves your agents and service leaders fully operational.",
    positioning:
      "Support capabilities delivered and tested before your team takes a single live case through the new system.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "VP of Customer Success, Heads of Customer Service, and CX leaders accountable for retention and service cost",
    industryRelevance:
      "Subscription businesses, SaaS providers, consumer services organisations, and any company where customer retention is tied directly to support quality",
    features: [
      "Support platform configuration built to approved specifications covering routing, queues, and case management",
      "Knowledge base build and integration with your support platform, validated for accuracy and agent accessibility",
      "Integration delivery connecting support, CRM, and operational systems, with documented test evidence",
      "Agent user acceptance testing and training completed before go-live, with a readiness sign-off process",
    ],
    tags: ["customer-support", "cx-operations", "service-desk"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves first-contact resolution, reduces average handle time, and increases customer retention through AI-assisted support workflows, sustained by managed operations that monitor and improve performance continuously.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 53,
    slug: "53",
    collection: "experience",
    serviceType: "ai_deploy",
    standardName: "Customer Support & Success (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy validated AI capabilities into your customer support platform with production monitoring, human escalation controls, and a structured handover so your service operations team can manage the capability independently.",
    positioning:
      "AI-assisted support in production, with the guardrails and monitoring your team needs to operate it confidently.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "VP of Customer Success, Heads of Customer Service, and CX leaders accountable for retention and service cost",
    industryRelevance:
      "Subscription businesses, SaaS providers, consumer services organisations, and any company where customer retention is tied directly to support quality",
    features: [
      "Production deployment of AI models integrated into your support platform workflows and knowledge systems",
      "Human escalation controls validated to ensure customers can always reach a live agent when AI cannot resolve their need",
      "AI performance dashboards covering resolution rates, escalation triggers, accuracy metrics, and customer satisfaction signals",
      "Service team training and AI operations runbook so your agents and team leads understand and can manage the capability",
    ],
    tags: ["customer-support", "ai-deploy", "cx-operations", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves first-contact resolution, reduces average handle time, and increases customer retention through AI-assisted support workflows, sustained by managed operations that monitor and improve performance continuously.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 54,
    slug: "54",
    collection: "experience",
    serviceType: "manage",
    standardName: "Customer Support & Success (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your customer support and success platform running at the service levels your customers and agents depend on, with continuous monitoring, proactive optimisation, and regular performance reporting.",
    positioning:
      "Your support operation continuously maintained and improved, so your team focuses on customers, not platform issues.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "VP of Customer Success, Heads of Customer Service, and CX leaders accountable for retention and service cost",
    industryRelevance:
      "Subscription businesses, SaaS providers, consumer services organisations, and any company where customer retention is tied directly to support quality",
    features: [
      "Monthly support platform health checks covering routing accuracy, SLA compliance, and integration reliability",
      "Case management and knowledge base optimisation based on resolution data and agent feedback",
      "Release and update management, with regression testing before any changes reach the production environment",
      "Monthly performance report covering resolution rates, customer satisfaction scores, and a forward optimisation plan",
    ],
    tags: ["customer-support", "managed-service", "cx-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves first-contact resolution, reduces average handle time, and increases customer retention through AI-assisted support workflows, sustained by managed operations that monitor and improve performance continuously.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 55,
    slug: "55",
    collection: "operations",
    serviceType: "advisory",
    standardName: "Digital Workplace (High-Impact) - Assess",
    remixName: {},
    description:
      "A focused assessment of your collaboration tools, intranet, and employee-facing platforms that surfaces the gaps stopping people from finding information, communicating, and getting work done. You leave with a maturity rating and a prioritised improvement roadmap.",
    positioning:
      "Understand where your digital workplace is losing productivity, then fix the highest-impact gaps first.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief People Officers, Heads of IT, and Internal Communications leaders accountable for employee productivity and digital ways of working",
    industryRelevance:
      "Organisations with distributed, hybrid, or knowledge-intensive workforces where collaboration quality and information accessibility directly affect productivity and retention",
    features: [
      "A scored baseline revealing exactly which collaboration and knowledge-sharing gaps cost the most productivity, so your investment targets the highest-return improvements",
      "Gap analysis mapped to specific tools: Microsoft 365, Teams, SharePoint, or equivalents",
      "Interview-led findings from IT, HR, and end-user perspectives to surface adoption blockers",
      "Prioritised roadmap with effort estimates so leadership can sequence investment confidently",
    ],
    tags: ["digital-workplace", "employee-experience", "microsoft-365"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces time spent searching for information, improves cross-team collaboration, and accelerates new employee productivity, with adoption and performance sustained through ongoing managed operations.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 56,
    slug: "56",
    collection: "operations",
    serviceType: "design",
    standardName: "Digital Workplace (High-Impact) - Design",
    remixName: {},
    description:
      "Turn your digital workplace goals into user-centred wireframes, information architecture, and build-ready specifications covering Microsoft 365 configuration, intranet structure, and adoption planning, delivered across a focused four-week design engagement.",
    positioning:
      "Turn workplace collaboration goals into a blueprint your IT team can build and your employees will actually use.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief People Officers, Heads of IT, and Internal Communications leaders accountable for employee productivity and digital ways of working",
    industryRelevance:
      "Organisations with distributed, hybrid, or knowledge-intensive workforces where collaboration quality and information accessibility directly affect productivity and retention",
    features: [
      "User journey mapping for key workplace tasks: finding information, collaborating on documents, and onboarding",
      "Information architecture and SharePoint site structure designed for your organisation's size and working patterns",
      "Microsoft 365 configuration specifications with integration points for HR, ITSM, and communication channels",
      "Adoption and change plan with champions model, training outline, and launch communications",
    ],
    tags: ["digital-workplace", "sharepoint", "intranet-design"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces time spent searching for information, improves cross-team collaboration, and accelerates new employee productivity, with adoption and performance sustained through ongoing managed operations.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 57,
    slug: "57",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "Digital Workplace (High-Impact) - AI Design",
    remixName: {},
    description:
      "Find the AI use cases that will genuinely reduce friction in your digital workplace, validate each for feasibility and responsibility, and produce governed workflow specifications ready for build, all within a four-week AI design engagement.",
    positioning:
      "Find the AI use cases that will genuinely improve employee productivity, and design them safely before spending on build.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief People Officers, Heads of IT, and Internal Communications leaders accountable for employee productivity and digital ways of working",
    industryRelevance:
      "Organisations with distributed, hybrid, or knowledge-intensive workforces where collaboration quality and information accessibility directly affect productivity and retention",
    features: [
      "Use-case discovery and scoring against impact, data readiness, and responsible AI criteria for workplace scenarios",
      "Copilot for Microsoft 365 readiness evaluation covering data governance, sensitivity labels, and licence posture",
      "Responsible AI workflow design with human-in-the-loop checkpoints, override controls, and audit logging",
      "Deployment specification including prompt engineering guidance, integration requirements, and rollout sequencing",
    ],
    tags: ["digital-workplace", "copilot", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces time spent searching for information, improves cross-team collaboration, and accelerates new employee productivity, with adoption and performance sustained through ongoing managed operations.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 58,
    slug: "58",
    collection: "operations",
    serviceType: "deploy",
    standardName: "Digital Workplace (High-Impact) - Implementation",
    remixName: {},
    description:
      "Get your Microsoft 365 digital workplace environment built, integrated, and adopted, covering SharePoint intranet, Teams governance, and the structured adoption programme your employees need to shift their working habits, delivered across twelve weeks.",
    positioning: "Get your digital workplace built, tested, and adopted, not just switched on.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief People Officers, Heads of IT, and Internal Communications leaders accountable for employee productivity and digital ways of working",
    industryRelevance:
      "Organisations with distributed, hybrid, or knowledge-intensive workforces where collaboration quality and information accessibility directly affect productivity and retention",
    features: [
      "SharePoint intranet built to the approved information architecture with page templates, navigation, and content migration",
      "Microsoft Teams governance configuration covering naming policies, channel templates, guest access, and lifecycle management",
      "Integration setup for HRIS, ITSM, and communication tools so the workplace connects to the systems employees rely on",
      "Structured adoption programme: champion training, launch comms, and 30-day usage tracking to confirm behaviour change",
    ],
    tags: ["digital-workplace", "sharepoint", "microsoft-365-deployment"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces time spent searching for information, improves cross-team collaboration, and accelerates new employee productivity, with adoption and performance sustained through ongoing managed operations.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 59,
    slug: "59",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "Digital Workplace (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Put AI to work across your digital workplace with governance, monitoring, and adoption built in from the start, including Microsoft Copilot, automated knowledge surfacing, and AI-assisted communication tools deployed over twelve weeks.",
    positioning:
      "Put AI to work in your digital workplace with governance, monitoring, and adoption built in from the start.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief People Officers, Heads of IT, and Internal Communications leaders accountable for employee productivity and digital ways of working",
    industryRelevance:
      "Organisations with distributed, hybrid, or knowledge-intensive workforces where collaboration quality and information accessibility directly affect productivity and retention",
    features: [
      "Copilot for Microsoft 365 deployment with data sensitivity controls, usage policies, and employee guidance materials",
      "AI-powered search and knowledge surfacing configured to return accurate, permission-aware results",
      "Automated workflows for routine employee requests: IT tickets, HR queries, and meeting summaries",
      "Monitoring dashboard tracking AI usage, prompt quality, override rates, and adoption by team",
    ],
    tags: ["digital-workplace", "copilot-deployment", "ai-governance"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces time spent searching for information, improves cross-team collaboration, and accelerates new employee productivity, with adoption and performance sustained through ongoing managed operations.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 60,
    slug: "60",
    collection: "operations",
    serviceType: "manage",
    standardName: "Digital Workplace (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Ongoing managed operations for your Microsoft 365 digital workplace environment, covering platform health monitoring, licence and configuration governance, adoption reporting, and monthly optimisation to keep the environment aligned to how your organisation works.",
    positioning:
      "Keep your digital workplace performing, adopted, and fit for purpose without loading internal IT with platform management.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief People Officers, Heads of IT, and Internal Communications leaders accountable for employee productivity and digital ways of working",
    industryRelevance:
      "Organisations with distributed, hybrid, or knowledge-intensive workforces where collaboration quality and information accessibility directly affect productivity and retention",
    features: [
      "Monthly Microsoft 365 health reports covering Teams usage, SharePoint performance, and licence consumption",
      "Configuration drift detection and correction before issues affect employee productivity",
      "Adoption analytics reviewed monthly with recommended actions to lift engagement in underused tools",
      "Coordinated rollout of Microsoft feature updates so new capabilities land without disrupting working patterns",
    ],
    tags: ["digital-workplace", "managed-service", "microsoft-365-governance"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces time spent searching for information, improves cross-team collaboration, and accelerates new employee productivity, with adoption and performance sustained through ongoing managed operations.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 61,
    slug: "61",
    collection: "operations",
    serviceType: "advisory",
    standardName: "Business Process Automation (High-Impact) - Assess",
    remixName: {},
    description:
      "Find out which manual processes cost the most time and which are genuinely ready to automate, with a prioritised roadmap and an honest view of the tooling and data readiness required, delivered within one week.",
    positioning:
      "Find the manual processes that cost the most time, then get a clear plan to automate the right ones first.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief Operating Officers, Heads of Transformation, and Business Process Owners accountable for operational efficiency and throughput",
    industryRelevance:
      "Organisations with high-volume, rule-based, or approval-heavy processes across finance, HR, operations, procurement, and customer service",
    features: [
      "A prioritised map of the manual, rules-based work costing your teams the most time and error rate, ranked by automation ROI so effort goes to the highest-return processes first",
      "Automation potential scoring by volume, error rate, complexity, and data availability",
      "Tool fit analysis covering RPA, workflow automation, and API integration options relative to your existing stack",
      "Prioritised automation roadmap with effort, cost, and expected time-saving estimates for each candidate",
    ],
    tags: ["process-automation", "rpa", "workflow-efficiency"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces manual processing effort, shortens cycle times on priority workflows, and improves exception handling, with managed operations extending automation coverage and sustaining performance gains over time.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 62,
    slug: "62",
    collection: "operations",
    serviceType: "design",
    standardName: "Business Process Automation (High-Impact) - Design",
    remixName: {},
    description:
      "Eliminate the ambiguity that causes automation rework: get detailed process specifications, tool configurations, and test plans your delivery team can build and launch each workflow against, completed across a focused four-week design engagement.",
    positioning:
      "Design your automations properly before building them: fewer rework cycles, faster go-live, and workflows that hold up in production.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 110,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief Operating Officers, Heads of Transformation, and Business Process Owners accountable for operational efficiency and throughput",
    industryRelevance:
      "Organisations with high-volume, rule-based, or approval-heavy processes across finance, HR, operations, procurement, and customer service",
    features: [
      "As-is and to-be process maps for each priority workflow, showing every step, decision point, and exception path",
      "Tool configuration specifications for Power Automate, UiPath, or your chosen platform, with field mappings and error handling defined",
      "Integration design covering API connections, data transformations, and authentication requirements for each workflow",
      "Test plan with acceptance criteria, edge-case scenarios, and sign-off checklist your QA team can execute against",
    ],
    tags: ["process-automation", "workflow-design", "integration-architecture"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces manual processing effort, shortens cycle times on priority workflows, and improves exception handling, with managed operations extending automation coverage and sustaining performance gains over time.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 63,
    slug: "63",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "Business Process Automation (High-Impact) - AI Design",
    remixName: {},
    description:
      "Identify where intelligent automation, including document processing, decision support, and predictive routing, can extend your process automation beyond what rules-based tools handle, with responsible design and deployment specifications for each use case, ready after four weeks.",
    positioning:
      "Design the AI layer that takes your process automation from rules-based to genuinely intelligent, safely and with governance built in.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief Operating Officers, Heads of Transformation, and Business Process Owners accountable for operational efficiency and throughput",
    industryRelevance:
      "Organisations with high-volume, rule-based, or approval-heavy processes across finance, HR, operations, procurement, and customer service",
    features: [
      "AI use-case identification for processes where rules-based automation reaches its limits: unstructured documents, judgement-intensive approvals, and variable inputs",
      "Feasibility scoring across data quality, model availability, and responsible AI criteria for each candidate",
      "Intelligent document processing design for invoices, contracts, forms, and other high-volume unstructured inputs",
      "Governance specification covering confidence thresholds, human-review triggers, audit logging, and model retraining schedules",
    ],
    tags: ["intelligent-automation", "document-processing", "ai-workflow-design"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces manual processing effort, shortens cycle times on priority workflows, and improves exception handling, with managed operations extending automation coverage and sustaining performance gains over time.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 64,
    slug: "64",
    collection: "operations",
    serviceType: "deploy",
    standardName: "Business Process Automation (High-Impact) - Implementation",
    remixName: {},
    description:
      "Get your automation workflows built, tested, and running in production, covering RPA bots, low-code automations, and API integrations, with a documented handover including runbooks and administrator sign-off to the teams who will maintain them, delivered across twelve weeks.",
    positioning:
      "Get your automation workflows built, tested, and running in production, with the documentation and training your team needs to own them.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief Operating Officers, Heads of Transformation, and Business Process Owners accountable for operational efficiency and throughput",
    industryRelevance:
      "Organisations with high-volume, rule-based, or approval-heavy processes across finance, HR, operations, procurement, and customer service",
    features: [
      "Automation build for prioritised workflows across your chosen platform: Power Automate, UiPath, or equivalent",
      "API integration development connecting automation to ERP, CRM, HRIS, and other source systems",
      "End-to-end testing with business stakeholders covering happy paths, exceptions, and volume stress scenarios",
      "Operations handover including runbooks, monitoring setup, and administrator training for your internal team",
    ],
    tags: ["process-automation", "rpa-deployment", "workflow-build"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces manual processing effort, shortens cycle times on priority workflows, and improves exception handling, with managed operations extending automation coverage and sustaining performance gains over time.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 65,
    slug: "65",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "Business Process Automation (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Put governed AI automation into production, including intelligent document processing, AI-driven decision routing, and predictive workflow triggers, with monitoring active from day one and a pilot-first approach that contains risk before full scale.",
    positioning:
      "Put governed AI automation into production: document intelligence, decision support, and predictive routing, live and monitored.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief Operating Officers, Heads of Transformation, and Business Process Owners accountable for operational efficiency and throughput",
    industryRelevance:
      "Organisations with high-volume, rule-based, or approval-heavy processes across finance, HR, operations, procurement, and customer service",
    features: [
      "Intelligent document processing deployment for invoices, purchase orders, contracts, or forms, with accuracy baselines and human-review thresholds set",
      "AI decision-routing models integrated into your existing workflow orchestration so exceptions are handled consistently",
      "Confidence-score monitoring configured to alert when model accuracy degrades below agreed thresholds",
      "Structured pilot-to-production rollout with a defined cohort so risk is contained before full-scale automation runs",
    ],
    tags: ["intelligent-automation", "document-intelligence", "ai-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces manual processing effort, shortens cycle times on priority workflows, and improves exception handling, with managed operations extending automation coverage and sustaining performance gains over time.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 66,
    slug: "66",
    collection: "operations",
    serviceType: "manage",
    standardName: "Business Process Automation (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Ongoing managed operations for your business process automation environment, covering bot health monitoring, exception queue management, platform updates, and monthly performance reporting so your automations keep delivering the savings they were built to produce.",
    positioning:
      "Keep your automation estate healthy and producing savings, without your team spending time on bot maintenance and exception triaging.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief Operating Officers, Heads of Transformation, and Business Process Owners accountable for operational efficiency and throughput",
    industryRelevance:
      "Organisations with high-volume, rule-based, or approval-heavy processes across finance, HR, operations, procurement, and customer service",
    features: [
      "Daily bot health monitoring with alerting for failures, queue backlogs, and throughput drops before they become business issues",
      "Exception queue management: first-line triage and resolution for automation failures so manual fallback is minimised",
      "Monthly performance report covering hours saved, exception rates, and SLA adherence across all automations",
      "Planned change management for platform updates, system changes, and new process variations that affect existing bots",
    ],
    tags: ["process-automation", "managed-service", "bot-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces manual processing effort, shortens cycle times on priority workflows, and improves exception handling, with managed operations extending automation coverage and sustaining performance gains over time.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 73,
    slug: "73",
    collection: "operations",
    serviceType: "advisory",
    standardName: "Specialized Operations (High-Impact) - Assess",
    remixName: {},
    description:
      "Most specialist operations work -- barely. Facilities management teams run on spreadsheets and tribal knowledge. Legal ops functions manage matter intake through email. Field service scheduling lives in a supervisor",
    positioning:
      "Walk away with a clear picture of where your specialist operation is haemorrhaging time and risk, and which fixes will pay back fastest.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Business Unit heads, Domain Operations Directors, and specialist function leaders where generic platforms have failed to deliver operational fit",
    industryRelevance:
      "Legal operations, research and laboratory environments, specialised financial services functions, engineering and technical operations, and regulated professional services",
    features: [
      "A domain-specific map of every bottleneck in your operational function -- work order flow, matter lifecycle, inspection cycle, or equivalent -- showing exactly which manual steps and approval delays cost the most throughput and compliance exposure, so you know precisely what to fix first",
      "Bottleneck scoring identifying where throughput is constrained by manual steps, approval delays, or system gaps in your specific function",
      "Tech debt identification across the tools and workarounds your team has built up over time, ranked by operational and compliance risk",
      "Risk exposure assessment flagging the gaps most likely to cause audit failure, safety incidents, or regulatory non-compliance in your domain",
    ],
    tags: ["specialised-operations", "operational-assessment", "domain-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers operational capability that generic platforms cannot match, reducing manual workarounds, improving domain process control, and providing the specialist oversight needed to sustain performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 74,
    slug: "74",
    collection: "operations",
    serviceType: "design",
    standardName: "Specialized Operations (High-Impact) - Design",
    remixName: {},
    description:
      "Your assessment identified the highest-priority problems. Now you need a blueprint that actually fixes them -- process redesigns your operational staff will recognise, system configurations your delivery team can build, and integration specifications that close the gaps between your operational platform and the ERP, scheduling, and reporting tools it needs to talk to. This four-week design engagement produces that blueprint, built for your specific domain.",
    positioning:
      "Get build-ready process redesigns and system specifications that solve the problems your assessment identified, not a generic operating model document.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Business Unit heads, Domain Operations Directors, and specialist function leaders where generic platforms have failed to deliver operational fit",
    industryRelevance:
      "Legal operations, research and laboratory environments, specialised financial services functions, engineering and technical operations, and regulated professional services",
    features: [
      "Process redesign for your highest-priority gaps: work order management, matter lifecycle, inspection workflow, or the specific flows where your function is losing the most time",
      "System configuration specification covering the data model, screen layouts, automation rules, and approval logic your operational platform needs to support the redesigned processes",
      "Integration design producing API contracts and data transformation rules for the connections between your operational system, ERP, scheduling, and reporting tools",
      "Adoption and change plan specifying the training, communication, and cut-over activities your team needs to shift to the new workflows without disrupting live operations",
    ],
    tags: ["specialised-operations", "operational-design", "workflow-specification"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers operational capability that generic platforms cannot match, reducing manual workarounds, improving domain process control, and providing the specialist oversight needed to sustain performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 75,
    slug: "75",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "Specialized Operations (High-Impact) - AI Design",
    remixName: {},
    description:
      "Identify where AI can genuinely improve your facilities management, field service, quality, or other specialist operational workflows, from predictive scheduling and anomaly detection to AI-assisted decision support, with feasibility validation and responsible design specifications for each use case.",
    positioning:
      "Identify where AI genuinely improves specialist operational performance, and design it responsibly before investing in build.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Business Unit heads, Domain Operations Directors, and specialist function leaders where generic platforms have failed to deliver operational fit",
    industryRelevance:
      "Legal operations, research and laboratory environments, specialised financial services functions, engineering and technical operations, and regulated professional services",
    features: [
      "AI use-case discovery focused on domain-specific opportunities: predictive maintenance, intelligent scheduling, quality anomaly detection, and case triage",
      "Data readiness assessment evaluating whether your operational data supports the candidate AI models",
      "Responsible AI workflow design with domain-specific risk considerations, override mechanisms, and auditability requirements",
      "Deployment specification covering model selection, integration points, confidence thresholds, and human-review rules for each validated use case",
    ],
    tags: ["specialised-operations", "predictive-operations", "ai-workflow-design"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers operational capability that generic platforms cannot match, reducing manual workarounds, improving domain process control, and providing the specialist oversight needed to sustain performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 76,
    slug: "76",
    collection: "operations",
    serviceType: "deploy",
    standardName: "Specialized Operations (High-Impact) - Implementation",
    remixName: {},
    description:
      "Get your specialist operational system, whether for field service, facilities management, quality management, or case handling, configured, integrated, tested, and live in twelve weeks, with week-by-week knowledge transfer and handover documentation so your team can manage the environment independently.",
    positioning:
      "Get your specialist operational system configured, connected, and live, with the training and documentation to own it after handover.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Business Unit heads, Domain Operations Directors, and specialist function leaders where generic platforms have failed to deliver operational fit",
    industryRelevance:
      "Legal operations, research and laboratory environments, specialised financial services functions, engineering and technical operations, and regulated professional services",
    features: [
      "Platform configuration built to the approved domain-specific specification, covering objects, workflows, screens, and automation rules",
      "Integration development connecting your operational platform to ERP, scheduling, reporting, and communication systems",
      "Role-based user acceptance testing with operational staff validating real task scenarios, not just system functionality",
      "Knowledge transfer programme: administrator training, runbooks, and a documented configuration baseline for your team",
    ],
    tags: ["specialised-operations", "platform-deployment", "operational-configuration"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers operational capability that generic platforms cannot match, reducing manual workarounds, improving domain process control, and providing the specialist oversight needed to sustain performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 77,
    slug: "77",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "Specialized Operations (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy AI into your specialist operational environment, whether field service, facilities management, quality, or logistics, including predictive models, intelligent routing, and anomaly detection, with governance controls and performance monitoring active from the pilot phase.",
    positioning:
      "Deploy AI into your specialist operational workflows with the governance, accuracy monitoring, and staff enablement your domain requires.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Business Unit heads, Domain Operations Directors, and specialist function leaders where generic platforms have failed to deliver operational fit",
    industryRelevance:
      "Legal operations, research and laboratory environments, specialised financial services functions, engineering and technical operations, and regulated professional services",
    features: [
      "Predictive model deployment for domain-specific use cases such as maintenance scheduling, quality defect detection, or workload routing",
      "AI integration into operational workflows so predictions and recommendations surface in the systems your staff already use",
      "Governance configuration: confidence thresholds, human-override controls, and audit logging specific to your operational domain",
      "Staff enablement programme ensuring operational teams understand AI recommendations and know when to act on or override them",
    ],
    tags: ["specialised-operations", "predictive-ai", "operational-ai-deployment"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers operational capability that generic platforms cannot match, reducing manual workarounds, improving domain process control, and providing the specialist oversight needed to sustain performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 78,
    slug: "78",
    collection: "operations",
    serviceType: "manage",
    standardName: "Specialized Operations (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Ongoing managed operations for your specialist operational systems and workflows, covering platform health, data quality monitoring, user support, and monthly performance reporting so your domain function stays at operating capacity without straining internal resources.",
    positioning:
      "Keep your specialist operational systems performing at capacity, with proactive monitoring and expert support when domain-specific issues arise.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Business Unit heads, Domain Operations Directors, and specialist function leaders where generic platforms have failed to deliver operational fit",
    industryRelevance:
      "Legal operations, research and laboratory environments, specialised financial services functions, engineering and technical operations, and regulated professional services",
    features: [
      "Platform health monitoring with SLA-backed alerting for system performance, integration failures, and data quality degradation",
      "First-line operational support for domain-specific system issues, workflow errors, and configuration queries from your operations team",
      "Monthly performance report covering system uptime, data quality metrics, workflow throughput, and SLA adherence",
      "Planned maintenance and change management for system updates, process changes, and new configuration requirements from your operational function",
    ],
    tags: ["specialised-operations", "managed-service", "operational-support"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers operational capability that generic platforms cannot match, reducing manual workarounds, improving domain process control, and providing the specialist oversight needed to sustain performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 79,
    slug: "79",
    collection: "operations",
    serviceType: "advisory",
    standardName: "Enterprise Operations (High-Impact) - Assess",
    remixName: {},
    description:
      "Your quarterly planning cycle finishes two weeks late. Cross-functional projects stall in approval queues nobody owns. Performance reporting takes a fortnight to produce and is already out of date by the time it reaches the COO. These are not technology problems -- they are coordination failures baked into how your enterprise operates. This one-week assessment maps those failures, names where decision rights are ambiguous, and tells you what to fix first.",
    positioning:
      "Get a COO-ready view of the coordination failures slowing your enterprise down, and a sequenced plan for fixing them.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief Operating Officers, Strategy and Transformation Directors, and enterprise leaders accountable for cross-functional coordination and operational performance",
    industryRelevance:
      "Large and complex organisations where operational silos, inconsistent reporting, or slow decision-making are reducing execution effectiveness at enterprise scale",
    features: [
      "A scored gap view of your enterprise coordination failures -- decision rights, handoffs, planning cadence, and performance visibility -- so your COO and leadership team can see exactly which gaps slow execution the most and where to intervene first",
      "Cross-functional handoff audit tracing where projects stall and approvals queue, with the root cause identified for each failure point",
      "Planning cycle diagnostic measuring where your quarterly and monthly cycles lose time, from kickoff to sign-off, and why",
      "Performance visibility gap report documenting where your reporting data is late, incomplete, or inconsistent and what it is costing leadership in decision latency",
    ],
    tags: ["enterprise-operations", "operating-model", "operational-visibility"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves cross-functional coordination, accelerates decision-making with better real-time visibility, and sustains enterprise performance gains through governed managed operations rather than point-in-time project outputs.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 80,
    slug: "80",
    collection: "operations",
    serviceType: "design",
    standardName: "Enterprise Operations (High-Impact) - Design",
    remixName: {},
    description:
      "Your assessment named the coordination failures. Now you need something the COO can bring to the business: redesigned processes that close the planning cycle gaps, a governance framework that resolves the decision rights disputes, and a decision authority matrix that tells each function what they own. This four-week design engagement produces those outputs -- changes your organisation can actually implement, not a slide deck about operating model theory.",
    positioning:
      "Get the process redesigns, governance frameworks, and decision authority structures your COO needs to bring operating model change to the business.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief Operating Officers, Strategy and Transformation Directors, and enterprise leaders accountable for cross-functional coordination and operational performance",
    industryRelevance:
      "Large and complex organisations where operational silos, inconsistent reporting, or slow decision-making are reducing execution effectiveness at enterprise scale",
    features: [
      "Cross-functional process redesigns for your highest-priority coordination failures -- planning cycle, performance review, escalation, and cross-functional project handoff",
      "Governance framework specifying how decisions are made, escalated, and recorded across enterprise functions, with accountabilities assigned to roles not individuals",
      "Decision authority matrix defining what each function owns, what requires cross-functional sign-off, and what escalates to the COO -- in a format usable in practice",
      "Platform configuration specification for the ERP or operational management changes needed to support the redesigned processes, formatted for your delivery team",
    ],
    tags: ["enterprise-operations", "operating-model-design", "cross-functional-process"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves cross-functional coordination, accelerates decision-making with better real-time visibility, and sustains enterprise performance gains through governed managed operations rather than point-in-time project outputs.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 81,
    slug: "81",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "Enterprise Operations (High-Impact) - AI Design",
    remixName: {},
    description:
      "Design AI capabilities that improve enterprise operational decisions, not just automate them, covering demand forecasting, resource optimisation, and operational risk detection, with responsible design and governance specifications for each validated use case.",
    positioning:
      "Design AI capabilities that improve enterprise operational decisions, not just automate them.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief Operating Officers, Strategy and Transformation Directors, and enterprise leaders accountable for cross-functional coordination and operational performance",
    industryRelevance:
      "Large and complex organisations where operational silos, inconsistent reporting, or slow decision-making are reducing execution effectiveness at enterprise scale",
    features: [
      "Enterprise AI use-case discovery focused on operational decision support: demand forecasting, capacity planning, supply chain risk, and performance anomaly detection",
      "Data landscape assessment evaluating whether enterprise data sources have the quality and accessibility AI models require",
      "Responsible AI framework design including bias testing approach, human oversight requirements, and explainability standards for enterprise decision contexts",
      "Multi-system integration specification mapping how AI outputs feed into ERP, planning, and operational reporting platforms",
    ],
    tags: ["enterprise-operations", "operational-ai", "demand-forecasting"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves cross-functional coordination, accelerates decision-making with better real-time visibility, and sustains enterprise performance gains through governed managed operations rather than point-in-time project outputs.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 82,
    slug: "82",
    collection: "operations",
    serviceType: "deploy",
    standardName: "Enterprise Operations (High-Impact) - Implementation",
    remixName: {},
    description:
      "Large operating model change programmes fail for predictable reasons: adoption collapses when the new processes conflict with how people actually work, political resistance kills cross-functional changes that no single function owns, and the new governance structures do not stick without active reinforcement. This twelve-week deployment programme embeds change adoption directly into delivery -- with cross-functional programme management, per-function sign-off at each phase, and a change champion network that keeps adoption from sliding once the DigitalQatalyst team hands over.",
    positioning:
      "Deploy operating model changes that stick -- with adoption built into delivery, not bolted on at the end.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief Operating Officers, Strategy and Transformation Directors, and enterprise leaders accountable for cross-functional coordination and operational performance",
    industryRelevance:
      "Large and complex organisations where operational silos, inconsistent reporting, or slow decision-making are reducing execution effectiveness at enterprise scale",
    features: [
      "Stakeholder alignment sessions at each programme phase, ensuring cross-functional sign-off before changes go live in any function",
      "Phased rollout with per-function adoption checkpoints so problems surface and are resolved before the next phase starts",
      "Change champion network established within the business to sustain adoption and resolve resistance at the operational level",
      "Post-go-live adoption tracking covering process adherence, decision rights usage, and governance forum participation for the first 30 days",
    ],
    tags: ["enterprise-operations", "erp-configuration", "operational-programme"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves cross-functional coordination, accelerates decision-making with better real-time visibility, and sustains enterprise performance gains through governed managed operations rather than point-in-time project outputs.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 83,
    slug: "83",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "Enterprise Operations (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Put AI-driven decision support into your enterprise operational workflows, including demand forecasting models, supply chain risk detection, and operational anomaly alerting, with governance controls and executive visibility built in from day one of a twelve-week deployment.",
    positioning:
      "Put AI-driven decision support into your enterprise operational workflows, with the governance and accuracy monitoring that enterprise risk requires.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief Operating Officers, Strategy and Transformation Directors, and enterprise leaders accountable for cross-functional coordination and operational performance",
    industryRelevance:
      "Large and complex organisations where operational silos, inconsistent reporting, or slow decision-making are reducing execution effectiveness at enterprise scale",
    features: [
      "Demand forecasting model deployment integrated into your planning system so forecasts update automatically from live operational data",
      "Supply chain and operational risk detection with configurable alert thresholds and escalation routing to the right operational owners",
      "AI decision explainability built into every model output so operational managers understand why the AI recommendation was generated",
      "Executive AI governance dashboard tracking model performance, override rates, and decision outcomes across enterprise functions",
    ],
    tags: ["enterprise-operations", "forecasting-ai", "supply-chain-risk"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves cross-functional coordination, accelerates decision-making with better real-time visibility, and sustains enterprise performance gains through governed managed operations rather than point-in-time project outputs.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 84,
    slug: "84",
    collection: "operations",
    serviceType: "manage",
    standardName: "Enterprise Operations (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Ongoing managed operations for your enterprise operational platforms and AI capabilities, covering system health monitoring, model performance tracking, operational reporting, and continuous improvement to keep your enterprise operating model performing as your business evolves.",
    positioning:
      "Keep your enterprise operational systems and AI capabilities running at the performance levels your business depends on.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief Operating Officers, Strategy and Transformation Directors, and enterprise leaders accountable for cross-functional coordination and operational performance",
    industryRelevance:
      "Large and complex organisations where operational silos, inconsistent reporting, or slow decision-making are reducing execution effectiveness at enterprise scale",
    features: [
      "Enterprise platform health monitoring with SLA-backed response for system degradation, integration failures, and data quality issues",
      "AI model performance tracking with monthly accuracy reviews and threshold recalibration to prevent forecast drift over time",
      "Monthly operational performance report covering system uptime, data quality, AI accuracy, and a summary of changes made",
      "Proactive change management for ERP updates, data model changes, and new operational requirements from business functions",
    ],
    tags: ["enterprise-operations", "managed-service", "ai-model-governance"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves cross-functional coordination, accelerates decision-making with better real-time visibility, and sustains enterprise performance gains through governed managed operations rather than point-in-time project outputs.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 85,
    slug: "85",
    collection: "security",
    serviceType: "advisory",
    standardName: "Governance, Risk & Compliance (High-Impact) - Assess",
    remixName: {},
    description:
      "Map your governance, risk, and compliance posture against the controls that matter most, and leave with a prioritised remediation plan your board can sign off.",
    positioning:
      "See where compliance gaps create real exposure, then fix the highest-risk ones first.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 110,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief Risk Officers, Heads of Compliance, Internal Audit Directors, and Legal and Regulatory Affairs leaders",
    industryRelevance:
      "Regulated organisations in financial services, healthcare, government contracting, energy, and any business preparing for certification or under active regulatory scrutiny",
    features: [
      "Control-by-control gap assessment against your chosen framework (ISO 27001, NIST CSF, SOC 2, or sector standard)",
      "Risk register scored by likelihood and business impact so investment targets the right areas",
      "Prioritised remediation roadmap with named owners, effort bands, and sequenced dependencies",
      "Board-ready executive summary translating technical exposure into business risk language",
    ],
    tags: ["compliance", "risk-management", "GRC", "audit-readiness"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces compliance exposure by building continuous monitoring into live GRC operations from day one, replacing periodic manual reviews with a sustained capability that keeps the board informed and auditors confident.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 86,
    slug: "86",
    collection: "security",
    serviceType: "design",
    standardName: "Governance, Risk & Compliance (High-Impact) - Design",
    remixName: {},
    description:
      "Turn your compliance goals and risk appetite into a fully specified GRC operating model, with process designs, control architectures, and implementation blueprints your delivery teams can build against.",
    positioning:
      "A delivery-ready GRC blueprint: operating model, controls architecture, and integration specifications in four weeks.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief Risk Officers, Heads of Compliance, Internal Audit Directors, and Legal and Regulatory Affairs leaders",
    industryRelevance:
      "Regulated organisations in financial services, healthcare, government contracting, energy, and any business preparing for certification or under active regulatory scrutiny",
    features: [
      "GRC operating model design covering roles, accountabilities, escalation paths, and review cadences",
      "Control architecture specifying the controls, automation points, and tooling integrations to close priority gaps",
      "Process and workflow designs for risk identification, incident triage, and compliance reporting",
      "User-centred interface prototypes and adoption plan so teams actually use what is built",
    ],
    tags: ["compliance", "risk-management", "GRC", "operating-model"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces compliance exposure by building continuous monitoring into live GRC operations from day one, replacing periodic manual reviews with a sustained capability that keeps the board informed and auditors confident.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 87,
    slug: "87",
    collection: "security",
    serviceType: "ai_design",
    standardName: "Governance, Risk & Compliance (High-Impact) - AI Design",
    remixName: {},
    description:
      "Identify where AI can strengthen your GRC capability, validate those use cases against data, regulatory, and ethical requirements, and produce deployment-ready specifications before any build investment is committed.",
    positioning:
      "AI-powered GRC starts here: validated use cases, responsible workflows, and specifications ready to build.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief Risk Officers, Heads of Compliance, Internal Audit Directors, and Legal and Regulatory Affairs leaders",
    industryRelevance:
      "Regulated organisations in financial services, healthcare, government contracting, energy, and any business preparing for certification or under active regulatory scrutiny",
    features: [
      "AI use-case identification for risk detection, compliance monitoring, and anomaly alerting within your GRC context",
      "Responsible AI assessment covering data quality, bias risk, regulatory constraints, and explainability requirements",
      "Workflow designs specifying how AI-generated insights integrate into existing compliance and risk processes",
      "Deployment specifications including model requirements, guardrails, human-in-the-loop controls, and monitoring criteria",
    ],
    tags: ["AI-governance", "responsible-AI", "GRC", "compliance-automation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces compliance exposure by building continuous monitoring into live GRC operations from day one, replacing periodic manual reviews with a sustained capability that keeps the board informed and auditors confident.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 88,
    slug: "88",
    collection: "security",
    serviceType: "deploy",
    standardName: "Governance, Risk & Compliance (High-Impact) - Implementation",
    remixName: {},
    description:
      "Configure, integrate, test, and launch your GRC capability across the agreed scope, with staged testing and signed acceptance criteria at every phase and a controlled handover that leaves your operations team ready to run.",
    positioning:
      "From design to live GRC operations: configured controls, integrated systems, and a tested, handed-over capability.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief Risk Officers, Heads of Compliance, Internal Audit Directors, and Legal and Regulatory Affairs leaders",
    industryRelevance:
      "Regulated organisations in financial services, healthcare, government contracting, energy, and any business preparing for certification or under active regulatory scrutiny",
    features: [
      "End-to-end configuration of your GRC platform against agreed control requirements and operating model",
      "System integrations connecting risk, compliance, and audit data sources so reporting is automated and accurate",
      "Three-phase testing programme covering functional, integration, and user acceptance before go-live",
      "Controlled launch with runbooks, training, and a hypercare period so operations teams are fully prepared",
    ],
    tags: ["GRC-implementation", "compliance", "risk-management", "platform-deployment"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces compliance exposure by building continuous monitoring into live GRC operations from day one, replacing periodic manual reviews with a sustained capability that keeps the board informed and auditors confident.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 89,
    slug: "89",
    collection: "security",
    serviceType: "ai_deploy",
    standardName: "Governance, Risk & Compliance (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy AI-enabled GRC capabilities into production with the monitoring, safety controls, human-in-the-loop workflows, and operational handover your compliance function needs to run them confidently.",
    positioning:
      "AI-powered GRC in production: governed models, live monitoring, and your team trained to operate them safely.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief Risk Officers, Heads of Compliance, Internal Audit Directors, and Legal and Regulatory Affairs leaders",
    industryRelevance:
      "Regulated organisations in financial services, healthcare, government contracting, energy, and any business preparing for certification or under active regulatory scrutiny",
    features: [
      "Production deployment of validated AI models for risk detection, compliance monitoring, or anomaly alerting",
      "Safety and guardrail configuration enforcing human-in-the-loop approval at critical decision points",
      "Live monitoring dashboards tracking model accuracy, alert volumes, and compliance outcomes week-on-week",
      "Operations training programme so your GRC team can manage, retrain, and override AI outputs with confidence",
    ],
    tags: ["AI-deployment", "compliance-automation", "responsible-AI", "GRC"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces compliance exposure by building continuous monitoring into live GRC operations from day one, replacing periodic manual reviews with a sustained capability that keeps the board informed and auditors confident.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 90,
    slug: "90",
    collection: "security",
    serviceType: "manage",
    standardName: "Governance, Risk & Compliance (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your GRC capability operating at peak performance with ongoing monitoring, control testing, compliance reporting, and continuous optimisation backed by a named DigitalQatalyst team and defined service levels.",
    positioning:
      "Ongoing GRC operations with named accountability: monthly reporting, continuous control testing, and proactive optimisation.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief Risk Officers, Heads of Compliance, Internal Audit Directors, and Legal and Regulatory Affairs leaders",
    industryRelevance:
      "Regulated organisations in financial services, healthcare, government contracting, energy, and any business preparing for certification or under active regulatory scrutiny",
    features: [
      "Continuous control monitoring with exception alerting so control failures are caught before they become findings",
      "Monthly compliance performance reports mapped to your chosen framework and formatted for board and audit committees",
      "Quarterly control testing programme producing evidence packs ready for internal audit and external certification",
      "Proactive optimisation cycles adjusting controls, processes, and tooling as your risk landscape or regulatory obligations change",
    ],
    tags: ["managed-GRC", "compliance-operations", "continuous-monitoring", "audit-readiness"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces compliance exposure by building continuous monitoring into live GRC operations from day one, replacing periodic manual reviews with a sustained capability that keeps the board informed and auditors confident.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 91,
    slug: "91",
    collection: "operations",
    serviceType: "advisory",
    standardName: "Enterprise Resource Planning (High-Impact) - Assess",
    remixName: {},
    description:
      "Understand exactly where your ERP is creating manual workarounds, data quality problems, and integration failures across finance, procurement, and HR, then get a prioritised remediation roadmap your leaders can act on, all within one week.",
    positioning:
      "Understand exactly where your ERP is creating manual workarounds and data quality issues, and get a sequenced plan to fix them.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief Financial Officers, Heads of Finance Transformation, Procurement Directors, and HR leaders accountable for core enterprise operations",
    industryRelevance:
      "Manufacturing, distribution, professional services, and public sector organisations where ERP is the operational backbone for finance, procurement, and workforce management",
    features: [
      "ERP process coverage review across finance, procurement, inventory, and HR modules to identify gaps driving manual workarounds",
      "Data quality and consistency assessment across master data, transactional records, and reporting outputs",
      "Integration gap analysis mapping where ERP data fails to flow accurately to downstream systems, including payroll, CRM, and reporting",
      "Prioritised remediation roadmap with effort estimates, data risk flags, and recommended sequencing for each improvement",
    ],
    tags: ["erp", "finance-systems", "data-quality"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a live, AI-enhanced ERP capability with clean data, integrated processes, and managed operations that maintain system health and drive continuous finance and operational process improvement.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 92,
    slug: "92",
    collection: "operations",
    serviceType: "design",
    standardName: "Enterprise Resource Planning (High-Impact) - Design",
    remixName: {},
    description:
      "Design your ERP improvements properly before configuration begins: redesigned process flows, data model specifications, and configuration blueprints your implementation team can build against, covering finance, procurement, and HR modules, across a four-week engagement.",
    positioning:
      "Design your ERP improvements properly before configuration begins: fewer change requests, fewer reconciliation failures, and a system that reflects how your business actually runs.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief Financial Officers, Heads of Finance Transformation, Procurement Directors, and HR leaders accountable for core enterprise operations",
    industryRelevance:
      "Manufacturing, distribution, professional services, and public sector organisations where ERP is the operational backbone for finance, procurement, and workforce management",
    features: [
      "Process redesign for ERP-supported functions: purchase-to-pay, order-to-cash, record-to-report, and hire-to-retire workflows",
      "Master data model design covering chart of accounts, cost centre structure, supplier master, and employee data standards",
      "ERP configuration specification defining module settings, approval workflows, validation rules, and reporting dimensions",
      "Integration architecture for connections between ERP and payroll, CRM, data warehouse, and other dependent systems",
    ],
    tags: ["erp", "process-design", "master-data"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a live, AI-enhanced ERP capability with clean data, integrated processes, and managed operations that maintain system health and drive continuous finance and operational process improvement.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 93,
    slug: "93",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "Enterprise Resource Planning (High-Impact) - AI Design",
    remixName: {},
    description:
      "Make your ERP data work harder for finance, procurement, and HR decision-makers by identifying where AI can improve ERP-driven decisions, from automated invoice matching and cash flow forecasting to procurement risk detection, with responsible design and governance specifications for each validated use case.",
    positioning:
      "Design the AI capabilities that make your ERP data work harder for finance, procurement, and HR decision-makers.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief Financial Officers, Heads of Finance Transformation, Procurement Directors, and HR leaders accountable for core enterprise operations",
    industryRelevance:
      "Manufacturing, distribution, professional services, and public sector organisations where ERP is the operational backbone for finance, procurement, and workforce management",
    features: [
      "ERP-specific AI use-case discovery covering accounts payable automation, cash flow forecasting, spend anomaly detection, and workforce planning",
      "Data quality and lineage assessment of ERP data to confirm it meets the volume and accuracy requirements for AI model training",
      "Responsible AI design for finance-critical use cases: auditability requirements, control frameworks, and exception routing before any automated action is taken",
      "Specification for AI integration with ERP modules, covering API connections, data transformation rules, and model output display within ERP workflows",
    ],
    tags: ["erp", "finance-ai", "accounts-payable-automation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a live, AI-enhanced ERP capability with clean data, integrated processes, and managed operations that maintain system health and drive continuous finance and operational process improvement.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 94,
    slug: "94",
    collection: "operations",
    serviceType: "deploy",
    standardName: "Enterprise Resource Planning (High-Impact) - Implementation",
    remixName: {},
    description:
      "Get your ERP modules correctly configured, your data migrated cleanly, and your finance and procurement teams live on improved processes, with structured data migration, business user testing, and handover to your finance and IT teams, all within twelve weeks.",
    positioning:
      "Get your ERP configured correctly, your data migrated cleanly, and your finance and procurement teams live on improved processes within twelve weeks.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief Financial Officers, Heads of Finance Transformation, Procurement Directors, and HR leaders accountable for core enterprise operations",
    industryRelevance:
      "Manufacturing, distribution, professional services, and public sector organisations where ERP is the operational backbone for finance, procurement, and workforce management",
    features: [
      "ERP module configuration aligned to approved process designs and the master data standards agreed in the design phase",
      "Data migration and cleansing for master data and transactional records, with reconciliation checks before any data is loaded to production",
      "Integration development connecting ERP to payroll, CRM, data warehouse, and other dependent systems, tested against agreed data flow specifications",
      "Finance and procurement user acceptance testing with real transaction scenarios and month-end close rehearsal before go-live",
    ],
    tags: ["erp", "erp-implementation", "finance-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a live, AI-enhanced ERP capability with clean data, integrated processes, and managed operations that maintain system health and drive continuous finance and operational process improvement.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 95,
    slug: "95",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "Enterprise Resource Planning (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy AI into your ERP environment with the audit trail, control framework, and accuracy monitoring your finance function requires, covering automated invoice processing, cash flow forecasting, and spend anomaly detection, active from the pilot phase.",
    positioning:
      "Deploy AI into your ERP with the audit trail, control framework, and accuracy monitoring your finance function requires.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief Financial Officers, Heads of Finance Transformation, Procurement Directors, and HR leaders accountable for core enterprise operations",
    industryRelevance:
      "Manufacturing, distribution, professional services, and public sector organisations where ERP is the operational backbone for finance, procurement, and workforce management",
    features: [
      "Automated invoice matching and exception routing deployed within your ERP's accounts payable workflow, with confidence scoring and human-review queues",
      "Cash flow forecasting model integrated with your ERP data, generating rolling forecasts with variance explanations for your finance team",
      "Spend anomaly detection configured to flag procurement and expense transactions that fall outside policy or expected patterns",
      "Finance-grade audit logging for every AI action: input data, model version, output, confidence score, and reviewer decision recorded",
    ],
    tags: ["erp", "accounts-payable-ai", "cash-flow-forecasting"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a live, AI-enhanced ERP capability with clean data, integrated processes, and managed operations that maintain system health and drive continuous finance and operational process improvement.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 96,
    slug: "96",
    collection: "operations",
    serviceType: "manage",
    standardName: "Enterprise Resource Planning (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Ongoing managed operations for your ERP environment and AI capabilities, covering system health monitoring, period-end support, data quality governance, and monthly performance reporting so your finance and procurement functions run without operational disruption.",
    positioning:
      "Keep your ERP and finance AI capabilities running reliably, with expert support for period-end close and proactive monitoring between reporting cycles.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief Financial Officers, Heads of Finance Transformation, Procurement Directors, and HR leaders accountable for core enterprise operations",
    industryRelevance:
      "Manufacturing, distribution, professional services, and public sector organisations where ERP is the operational backbone for finance, procurement, and workforce management",
    features: [
      "ERP system health monitoring with SLA-backed alerting for performance degradation, integration failures, and data quality issues before they affect period-end close",
      "Period-end close support covering reconciliation checks, posting run oversight, and rapid issue resolution during month-end and quarter-end",
      "AI model accuracy monitoring with monthly reviews and recalibration to maintain invoice matching and forecasting performance as ERP data evolves",
      "Proactive ERP patch and upgrade management with impact assessment and testing before any change reaches your production environment",
    ],
    tags: ["erp", "managed-service", "finance-operations-support"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a live, AI-enhanced ERP capability with clean data, integrated processes, and managed operations that maintain system health and drive continuous finance and operational process improvement.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 97,
    slug: "97",
    collection: "operations",
    serviceType: "advisory",
    standardName: "Workforce Management (High-Impact) - Assess",
    remixName: {},
    description:
      "Understand where your workforce management platform is falling short: scheduling gaps, visibility blind spots, and coordination friction that cost you productivity every day. The DigitalQatalyst team returns a prioritised findings report and a practical roadmap your HR and operations leaders can act on immediately.",
    positioning:
      "A structured assessment that shows exactly where workforce management breaks down and what to fix first.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "HR Directors, Workforce Planning leads, and Operations leaders responsible for scheduling, labour cost, and frontline productivity",
    industryRelevance:
      "Retail, logistics, healthcare, hospitality, manufacturing, and any organisation managing shift-based, field, or distributed workforces where scheduling accuracy directly affects service quality and labour cost",
    features: [
      "Scheduling and rostering gap analysis across all workforce categories",
      "Productivity visibility audit: what you can and cannot measure today",
      "Integration review of time-and-attendance, payroll, and HRIS touchpoints",
      "Prioritised improvement roadmap with effort and impact scoring",
    ],
    tags: ["workforce-planning", "scheduling", "hr-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces scheduling errors and overtime costs, improves shift coverage for customer-facing operations, and gives workforce leaders the demand visibility needed to plan accurately across seasonal and operational cycles.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 98,
    slug: "98",
    collection: "operations",
    serviceType: "design",
    standardName: "Workforce Management (High-Impact) - Design",
    remixName: {},
    description:
      "Turn workforce management goals into a complete, build-ready blueprint: role-based journeys, scheduling logic, integration specifications, and an adoption plan your delivery teams can execute without ambiguity.",
    positioning:
      "A design engagement that produces workforce management specifications ready for configuration and build.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "HR Directors, Workforce Planning leads, and Operations leaders responsible for scheduling, labour cost, and frontline productivity",
    industryRelevance:
      "Retail, logistics, healthcare, hospitality, manufacturing, and any organisation managing shift-based, field, or distributed workforces where scheduling accuracy directly affects service quality and labour cost",
    features: [
      "Role-based journey mapping for managers, schedulers, and frontline workers",
      "Scheduling rules and rostering logic documented for your delivery context",
      "Integration specifications for payroll, HRIS, time-and-attendance, and comms platforms",
      "Adoption and change plan covering training, rollout phasing, and early-life support",
    ],
    tags: ["workforce-planning", "scheduling", "hr-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces scheduling errors and overtime costs, improves shift coverage for customer-facing operations, and gives workforce leaders the demand visibility needed to plan accurately across seasonal and operational cycles.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 99,
    slug: "99",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "Workforce Management (High-Impact) - AI Design",
    remixName: {},
    description:
      "Validate where AI can improve scheduling accuracy, demand forecasting, and workforce coordination before committing build budget. The DigitalQatalyst team produces responsible workflow designs and deployment-ready specifications for every approved use case.",
    positioning:
      "Define and validate the AI use cases that will actually improve workforce management, with guardrails built in from the start.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "HR Directors, Workforce Planning leads, and Operations leaders responsible for scheduling, labour cost, and frontline productivity",
    industryRelevance:
      "Retail, logistics, healthcare, hospitality, manufacturing, and any organisation managing shift-based, field, or distributed workforces where scheduling accuracy directly affects service quality and labour cost",
    features: [
      "AI use-case evaluation: demand forecasting, auto-rostering, absence prediction, and fatigue detection",
      "Data readiness assessment covering the inputs each model needs and what is missing",
      "Responsible AI workflow design with bias controls, override paths, and explainability requirements",
      "Deployment specification including model selection criteria, monitoring thresholds, and retraining triggers",
    ],
    tags: ["workforce-ai", "scheduling", "predictive-analytics"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces scheduling errors and overtime costs, improves shift coverage for customer-facing operations, and gives workforce leaders the demand visibility needed to plan accurately across seasonal and operational cycles.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 100,
    slug: "100",
    collection: "operations",
    serviceType: "deploy",
    standardName: "Workforce Management (High-Impact) - Implementation",
    remixName: {},
    description:
      "Configure, integrate, and launch your workforce management platform with structured quality assurance and a controlled handover that leaves your operations team confident and self-sufficient.",
    positioning:
      "A managed deployment that takes your workforce management blueprint from specification to live operations.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "HR Directors, Workforce Planning leads, and Operations leaders responsible for scheduling, labour cost, and frontline productivity",
    industryRelevance:
      "Retail, logistics, healthcare, hospitality, manufacturing, and any organisation managing shift-based, field, or distributed workforces where scheduling accuracy directly affects service quality and labour cost",
    features: [
      "Platform configuration against approved scheduling rules, rostering logic, and role permissions",
      "End-to-end integration testing with payroll, HRIS, time-and-attendance, and communication systems",
      "User acceptance testing with managers, schedulers, and representative frontline workers",
      "Hypercare period covering issue resolution and adoption support in the first weeks of live operation",
    ],
    tags: ["workforce-planning", "scheduling", "hr-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces scheduling errors and overtime costs, improves shift coverage for customer-facing operations, and gives workforce leaders the demand visibility needed to plan accurately across seasonal and operational cycles.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 101,
    slug: "101",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "Workforce Management (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy validated AI capabilities for demand forecasting, auto-rostering, and absence prediction into your live workforce management environment, with monitoring, safety controls, and a handover that keeps your operations team in control.",
    positioning:
      "Put AI-powered scheduling and forecasting into production with the governance and monitoring your HR leaders require.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "HR Directors, Workforce Planning leads, and Operations leaders responsible for scheduling, labour cost, and frontline productivity",
    industryRelevance:
      "Retail, logistics, healthcare, hospitality, manufacturing, and any organisation managing shift-based, field, or distributed workforces where scheduling accuracy directly affects service quality and labour cost",
    features: [
      "Governed model deployment for approved use cases including demand forecasting and shift optimisation",
      "Real-time monitoring dashboards tracking model accuracy, fairness metrics, and operational impact",
      "Human override and escalation workflows embedded in scheduling and rostering tools",
      "Operations team enablement covering model behaviour, intervention triggers, and performance review cadence",
    ],
    tags: ["workforce-ai", "scheduling", "predictive-analytics"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces scheduling errors and overtime costs, improves shift coverage for customer-facing operations, and gives workforce leaders the demand visibility needed to plan accurately across seasonal and operational cycles.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 102,
    slug: "102",
    collection: "operations",
    serviceType: "manage",
    standardName: "Workforce Management (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your workforce management platform performing at pace with your business: SLA-backed scheduling system operations, monthly performance reporting, and ongoing optimisation as your workforce grows or changes.",
    positioning:
      "Ongoing management of your workforce management platform so scheduling accuracy and visibility never degrade.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "HR Directors, Workforce Planning leads, and Operations leaders responsible for scheduling, labour cost, and frontline productivity",
    industryRelevance:
      "Retail, logistics, healthcare, hospitality, manufacturing, and any organisation managing shift-based, field, or distributed workforces where scheduling accuracy directly affects service quality and labour cost",
    features: [
      "Monthly scheduling performance reports covering fill rates, overtime variance, and absenteeism trends",
      "Proactive system health monitoring with incident response within agreed SLA windows",
      "Configuration updates as scheduling rules, roles, or workforce structures change",
      "Quarterly optimisation reviews identifying new capability opportunities and technical debt",
    ],
    tags: ["workforce-planning", "scheduling", "managed-service"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces scheduling errors and overtime costs, improves shift coverage for customer-facing operations, and gives workforce leaders the demand visibility needed to plan accurately across seasonal and operational cycles.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 103,
    slug: "103",
    collection: "ai",
    serviceType: "advisory",
    standardName: "Enterprise Data Platform (High-Impact) - Assess",
    remixName: {},
    description:
      "Pinpoint the architecture weaknesses, governance gaps, and pipeline failures holding your data platform back from becoming a trusted enterprise asset, and leave with a scored maturity view and prioritised roadmap your CDO and engineering leads can act on immediately.",
    positioning:
      "Pinpoint the data quality, governance, and architecture gaps blocking your platform from becoming a trusted enterprise asset.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief Data Officers, CIOs, Data Architecture leads, and Analytics leaders accountable for data platform strategy and enterprise reporting",
    industryRelevance:
      "Data-intensive organisations in financial services, healthcare, retail, and operations sectors where data quality, lineage, and governance directly affect regulatory compliance and commercial decision-making",
    features: [
      "A domain-by-domain scorecard showing exactly which gaps in ingestion, storage, governance, and consumption are undermining data trust, so investment targets the root causes rather than the symptoms",
      "Data quality and lineage gap identification with root-cause mapping",
      "Prioritised remediation roadmap ranked by business impact and implementation effort",
      "Stakeholder-ready findings pack including an executive summary and a technical annexe",
    ],
    tags: ["data-platform", "data-governance", "maturity-assessment"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Creates a trusted, scalable data platform that reduces time-to-insight for analytics teams, accelerates AI initiative delivery, and improves confidence in management reporting through continuous data quality management.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 104,
    slug: "104",
    collection: "ai",
    serviceType: "design",
    standardName: "Enterprise Data Platform (High-Impact) - Design",
    remixName: {},
    description:
      "Turn your enterprise data platform goals into an architecture blueprint, data model specifications, and a governance framework your engineering teams can build against with confidence.",
    positioning:
      "Go from data platform ambition to build-ready specifications: architecture, contracts, governance, and an adoption plan in one engagement.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief Data Officers, CIOs, Data Architecture leads, and Analytics leaders accountable for data platform strategy and enterprise reporting",
    industryRelevance:
      "Data-intensive organisations in financial services, healthcare, retail, and operations sectors where data quality, lineage, and governance directly affect regulatory compliance and commercial decision-making",
    features: [
      "A build-ready architecture blueprint your engineering teams can act on immediately, with every layer -- ingestion, processing, storage, and serving -- specified so delivery starts without rework or ambiguity",
      "Canonical data model and domain ownership definitions aligned to your business domains",
      "Governance framework including lineage, cataloguing, access control, and data quality contracts",
      "Phased build plan with team assignments, milestones, and dependency sequencing",
    ],
    tags: ["data-platform", "data-architecture", "data-governance"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Creates a trusted, scalable data platform that reduces time-to-insight for analytics teams, accelerates AI initiative delivery, and improves confidence in management reporting through continuous data quality management.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 105,
    slug: "105",
    collection: "ai",
    serviceType: "ai_design",
    standardName: "Enterprise Data Platform (High-Impact) - AI Design",
    remixName: {},
    description:
      "Identify the highest-value AI use cases your data platform can reliably support, validate their feasibility, and leave with responsible workflow designs and deployment-ready specifications before any build investment is committed.",
    positioning:
      "Validate which AI capabilities your data platform can reliably support, and leave with responsible workflow designs your team can build without reinventing guardrails.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief Data Officers, CIOs, Data Architecture leads, and Analytics leaders accountable for data platform strategy and enterprise reporting",
    industryRelevance:
      "Data-intensive organisations in financial services, healthcare, retail, and operations sectors where data quality, lineage, and governance directly affect regulatory compliance and commercial decision-making",
    features: [
      "A ranked shortlist of AI use cases your data platform can reliably support, each scored against data readiness, feasibility, and business value, so build investment goes only to capabilities with a clear path to production",
      "Responsible AI workflow design covering bias checks, explainability requirements, and human-in-the-loop controls",
      "Data readiness assessment identifying the gaps that must close before each use case can train or run reliably",
      "Deployment-ready specifications including model requirements, feature pipelines, and monitoring design",
    ],
    tags: ["data-platform", "responsible-ai", "ml-platform", "ai-design"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Creates a trusted, scalable data platform that reduces time-to-insight for analytics teams, accelerates AI initiative delivery, and improves confidence in management reporting through continuous data quality management.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 106,
    slug: "106",
    collection: "ai",
    serviceType: "deploy",
    standardName: "Enterprise Data Platform (High-Impact) - Implementation",
    remixName: {},
    description:
      "Configure, integrate, and launch your enterprise data platform with sprint-gated quality assurance, full pipeline testing, and a clean handover to your operations and data engineering teams, within a fixed twelve-week programme.",
    positioning:
      "Move from approved architecture to a live, tested data platform, with every pipeline validated, every integration confirmed, and your team ready to operate it.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief Data Officers, CIOs, Data Architecture leads, and Analytics leaders accountable for data platform strategy and enterprise reporting",
    industryRelevance:
      "Data-intensive organisations in financial services, healthcare, retail, and operations sectors where data quality, lineage, and governance directly affect regulatory compliance and commercial decision-making",
    features: [
      "A live, production-ready data platform built to the approved blueprint, with all pipelines running, acceptance criteria met, and your operations team certified before the DigitalQatalyst team steps back",
      "Pipeline build and integration testing covering ingestion, transformation, and serving layers end to end",
      "Data quality validation at each layer with acceptance criteria agreed before launch",
      "Week-by-week knowledge transfer with your operations team certified against runbooks and on-call guides before handover",
    ],
    tags: ["data-platform", "data-engineering", "platform-deployment"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Creates a trusted, scalable data platform that reduces time-to-insight for analytics teams, accelerates AI initiative delivery, and improves confidence in management reporting through continuous data quality management.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 107,
    slug: "107",
    collection: "ai",
    serviceType: "ai_deploy",
    standardName: "Enterprise Data Platform (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Put your designed AI capabilities into production on the enterprise data platform with governance controls, drift monitoring, and safety checks built in from the first day of operation.",
    positioning:
      "Launch AI models on your data platform the right way: governed, monitored, and production-hardened before your business depends on them.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 110,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief Data Officers, CIOs, Data Architecture leads, and Analytics leaders accountable for data platform strategy and enterprise reporting",
    industryRelevance:
      "Data-intensive organisations in financial services, healthcare, retail, and operations sectors where data quality, lineage, and governance directly affect regulatory compliance and commercial decision-making",
    features: [
      "AI models serving live predictions in production, with version control and rollback confirmed working before any model handles business decisions",
      "Real-time drift and performance monitoring configured to alert before model quality degrades",
      "Governance controls including audit logging, prediction traceability, and access controls on model endpoints",
      "Documented handover with incident playbooks and on-call guidance for your ML engineering team, validated before the DigitalQatalyst team steps back",
    ],
    tags: ["data-platform", "ml-deployment", "model-governance", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Creates a trusted, scalable data platform that reduces time-to-insight for analytics teams, accelerates AI initiative delivery, and improves confidence in management reporting through continuous data quality management.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 108,
    slug: "108",
    collection: "ai",
    serviceType: "manage",
    standardName: "Enterprise Data Platform (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your enterprise data platform running, governed, and improving every month, with SLA-backed pipeline monitoring, incident response, data quality reporting, and continuous optimisation by the DigitalQatalyst team.",
    positioning:
      "Keep your data platform trusted and performant every month, with proactive monitoring, rapid incident resolution, and a continuous improvement cycle built into the service.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief Data Officers, CIOs, Data Architecture leads, and Analytics leaders accountable for data platform strategy and enterprise reporting",
    industryRelevance:
      "Data-intensive organisations in financial services, healthcare, retail, and operations sectors where data quality, lineage, and governance directly affect regulatory compliance and commercial decision-making",
    features: [
      "Continuous pipeline health coverage with defined SLAs, so data failures are caught and resolved before they affect the business decisions or reports that depend on them",
      "Monthly data quality reports covering completeness, accuracy, freshness, and lineage coverage",
      "Capacity and performance optimisation reviews ensuring platform costs and query performance stay within targets",
      "Governance and compliance reporting aligned to your data policies and any applicable regulations",
    ],
    tags: ["data-platform", "managed-service", "platform-operations", "data-quality"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Creates a trusted, scalable data platform that reduces time-to-insight for analytics teams, accelerates AI initiative delivery, and improves confidence in management reporting through continuous data quality management.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 109,
    slug: "109",
    collection: "ai",
    serviceType: "advisory",
    standardName: "Business Intelligence & Analytics (High-Impact) - Assess",
    remixName: {},
    description:
      "Surface the data, tooling, and governance gaps that limit management visibility and leave key decisions relying on spreadsheets rather than trusted reports, and leave with a prioritised plan to close what matters most to your decision-makers.",
    positioning:
      "Find out exactly where your BI and analytics capability falls short, and leave with a prioritised plan to close the gaps that matter most to your decision-makers.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Finance Directors, Strategy leads, Chief Data Officers, and executive sponsors accountable for management reporting and operational performance visibility",
    industryRelevance:
      "Organisations across all sectors where leadership decisions rely on enterprise data, and where inconsistent metrics, slow reporting, or poor data quality are reducing decision confidence",
    features: [
      "BI maturity assessment covering data sources, reporting tools, KPI definitions, and self-service capability",
      "Report and dashboard audit identifying duplication, inconsistency, and single points of failure",
      "Stakeholder interviews mapping the decisions that lack reliable data and the cost of that gap",
      "Prioritised improvement roadmap ranked by decision-making impact and implementation effort",
    ],
    tags: ["business-intelligence", "analytics", "reporting", "kpi-design"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Accelerates management decision cycles, reduces time spent reconciling conflicting data definitions, and improves leadership confidence in performance data through consistent, governed, and AI-enhanced analytics.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 110,
    slug: "110",
    collection: "ai",
    serviceType: "design",
    standardName: "Business Intelligence & Analytics (High-Impact) - Design",
    remixName: {},
    description:
      "Turn your business intelligence and analytics goals into user-centred dashboard specifications, a semantic layer design, and a governed data model your delivery teams can build against, with metrics agreed and signed off before a single report is built.",
    positioning:
      "Design the BI and analytics environment your decision-makers actually need: agreed metrics, clean data models, and dashboards specified before a single report is built.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Finance Directors, Strategy leads, Chief Data Officers, and executive sponsors accountable for management reporting and operational performance visibility",
    industryRelevance:
      "Organisations across all sectors where leadership decisions rely on enterprise data, and where inconsistent metrics, slow reporting, or poor data quality are reducing decision confidence",
    features: [
      "Metrics catalogue and KPI definitions agreed across business and finance stakeholders before design begins",
      "Semantic layer and data model design ensuring consistent metric calculation across all reports",
      "Dashboard and self-service analytics specifications mapped to named user roles and decision workflows",
      "Governance design covering report certification, data ownership, and access control policies",
    ],
    tags: ["business-intelligence", "analytics", "data-modelling", "semantic-layer"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Accelerates management decision cycles, reduces time spent reconciling conflicting data definitions, and improves leadership confidence in performance data through consistent, governed, and AI-enhanced analytics.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 111,
    slug: "111",
    collection: "ai",
    serviceType: "ai_design",
    standardName: "Business Intelligence & Analytics (High-Impact) - AI Design",
    remixName: {},
    description:
      "Identify where machine learning and AI-driven insights can augment your business intelligence and analytics capability, validate each use case against your actual data, and leave with responsible workflow designs and deployment-ready specifications ready for engineering.",
    positioning:
      "Design AI-augmented analytics your organisation can trust: use cases validated against your data, workflows designed responsibly, specifications ready to build.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Finance Directors, Strategy leads, Chief Data Officers, and executive sponsors accountable for management reporting and operational performance visibility",
    industryRelevance:
      "Organisations across all sectors where leadership decisions rely on enterprise data, and where inconsistent metrics, slow reporting, or poor data quality are reducing decision confidence",
    features: [
      "AI use-case identification across forecasting, anomaly detection, natural language querying, and automated narrative generation",
      "Data readiness review confirming whether your existing analytics data can support each proposed AI capability",
      "Responsible AI workflow design specifying human review points, bias checks, and confidence thresholds for each model",
      "Technical specifications covering model requirements, feature engineering, and integration with your existing BI tooling",
    ],
    tags: ["business-intelligence", "analytics-ai", "forecasting", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Accelerates management decision cycles, reduces time spent reconciling conflicting data definitions, and improves leadership confidence in performance data through consistent, governed, and AI-enhanced analytics.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 112,
    slug: "112",
    collection: "ai",
    serviceType: "deploy",
    standardName: "Business Intelligence & Analytics (High-Impact) - Implementation",
    remixName: {},
    description:
      "Build, connect, and launch your agreed BI and analytics environment, from data pipeline integration and semantic layer implementation to certified dashboards and a trained self-service user community, within a milestone-gated twelve-week programme.",
    positioning:
      "Get your BI and analytics environment live: data connected, metrics consistent, dashboards certified, and your users confident before the engagement ends.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Finance Directors, Strategy leads, Chief Data Officers, and executive sponsors accountable for management reporting and operational performance visibility",
    industryRelevance:
      "Organisations across all sectors where leadership decisions rely on enterprise data, and where inconsistent metrics, slow reporting, or poor data quality are reducing decision confidence",
    features: [
      "Data source integration and pipeline configuration connecting your agreed data to the BI layer with tested refresh schedules",
      "Semantic layer implementation ensuring every tool calculates agreed KPIs from a single consistent source",
      "Dashboard development and certification covering all specified reports built to the agreed wireframes",
      "User training and self-service enablement leaving your analytics community able to answer their own questions",
    ],
    tags: ["business-intelligence", "analytics", "dashboard-development", "self-service-analytics"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Accelerates management decision cycles, reduces time spent reconciling conflicting data definitions, and improves leadership confidence in performance data through consistent, governed, and AI-enhanced analytics.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 113,
    slug: "113",
    collection: "ai",
    serviceType: "ai_deploy",
    standardName: "Business Intelligence & Analytics (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Put validated forecasting, anomaly detection, and AI-driven insight capabilities into production within your BI and analytics environment, with governance controls and monitoring configured from the first day of operation.",
    positioning:
      "Launch AI-powered analytics in production: models governed, outputs integrated into your existing dashboards, and your analytics team trained to act on what the AI surfaces.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Finance Directors, Strategy leads, Chief Data Officers, and executive sponsors accountable for management reporting and operational performance visibility",
    industryRelevance:
      "Organisations across all sectors where leadership decisions rely on enterprise data, and where inconsistent metrics, slow reporting, or poor data quality are reducing decision confidence",
    features: [
      "AI model deployment integrated directly into your BI tooling so insights appear where analysts already work",
      "Prediction monitoring and drift detection configured to alert before model accuracy degrades",
      "Human-in-the-loop controls implemented at the decision points specified in the AI design",
      "Analytics team enablement covering how to interpret model outputs, act on alerts, and escalate when the AI is uncertain",
    ],
    tags: ["analytics-ai", "forecasting", "anomaly-detection", "ml-deployment"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Accelerates management decision cycles, reduces time spent reconciling conflicting data definitions, and improves leadership confidence in performance data through consistent, governed, and AI-enhanced analytics.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 114,
    slug: "114",
    collection: "ai",
    serviceType: "manage",
    standardName: "Business Intelligence & Analytics (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your business intelligence and analytics environment accurate, performant, and current every month, with SLA-backed monitoring, monthly quality reporting, and a continuous improvement cycle managed by the DigitalQatalyst team.",
    positioning:
      "Maintain a BI and analytics environment your decision-makers can rely on every month, with proactive quality checks, rapid incident resolution, and regular optimisation reviews.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Finance Directors, Strategy leads, Chief Data Officers, and executive sponsors accountable for management reporting and operational performance visibility",
    industryRelevance:
      "Organisations across all sectors where leadership decisions rely on enterprise data, and where inconsistent metrics, slow reporting, or poor data quality are reducing decision confidence",
    features: [
      "Dashboard and data pipeline monitoring with SLA-backed response to report failures or data refresh issues",
      "Monthly analytics quality report covering metric accuracy, report usage, and data freshness by source",
      "Quarterly optimisation review addressing slow-running reports, redundant dashboards, and new stakeholder requirements",
      "Governed change management for new reports, metric updates, and data source additions",
    ],
    tags: ["business-intelligence", "analytics", "managed-service", "reporting-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Accelerates management decision cycles, reduces time spent reconciling conflicting data definitions, and improves leadership confidence in performance data through consistent, governed, and AI-enhanced analytics.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 115,
    slug: "115",
    collection: "ai",
    serviceType: "advisory",
    standardName: "Enterprise AI & Automation (High-Impact) - Assess",
    remixName: {},
    description:
      "Identify the highest-value AI and automation opportunities in your organisation, uncover the data and infrastructure gaps blocking adoption, and leave with a prioritised roadmap and the governance requirements your first production capability will need.",
    positioning:
      "Find out where AI and automation will create the most value for your organisation, what is blocking you today, and what needs to happen before you build.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief AI Officers, CEOs, CIOs, and Transformation Directors accountable for enterprise AI strategy and responsible adoption",
    industryRelevance:
      "Organisations across financial services, healthcare, operations, and professional services ready to move beyond AI pilots to governed, production-scale AI operations",
    features: [
      "AI and automation opportunity mapping across your key workflows, ranked by value and feasibility",
      "Readiness assessment covering data quality, infrastructure, skills, and governance against each priority use case",
      "Risk and ethics review identifying the responsible AI requirements specific to your sector and use cases",
      "Prioritised adoption roadmap with sequenced actions and the investment case for the top three use cases",
    ],
    tags: ["enterprise-ai", "automation", "ai-readiness", "ai-strategy"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Accelerates the safe adoption of AI at enterprise scale, improving productivity and decision speed across targeted workflows while maintaining the human oversight and governance that regulators and boards require.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 116,
    slug: "116",
    collection: "ai",
    serviceType: "design",
    standardName: "Enterprise AI & Automation (High-Impact) - Design",
    remixName: {},
    description:
      "Turn your validated AI and automation use cases into user-centred workflow designs, integration specifications, and a governed deployment blueprint your engineering teams can build against, with governance and override controls designed in from the outset.",
    positioning:
      "Translate AI and automation ambitions into build-ready specifications: workflows designed, integrations mapped, governance controls specified, and adoption planned before a line of code is written.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief AI Officers, CEOs, CIOs, and Transformation Directors accountable for enterprise AI strategy and responsible adoption",
    industryRelevance:
      "Organisations across financial services, healthcare, operations, and professional services ready to move beyond AI pilots to governed, production-scale AI operations",
    features: [
      "Workflow redesign for each prioritised use case, showing how AI or automation changes the user and system interactions",
      "Integration architecture mapping how AI capabilities connect to your existing applications, data sources, and process flows",
      "Governance framework design covering decision audit trails, human override controls, and escalation protocols",
      "Change management and adoption plan addressing the people, skills, and process changes needed for successful rollout",
    ],
    tags: ["enterprise-ai", "automation", "workflow-design", "ai-governance"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Accelerates the safe adoption of AI at enterprise scale, improving productivity and decision speed across targeted workflows while maintaining the human oversight and governance that regulators and boards require.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 117,
    slug: "117",
    collection: "ai",
    serviceType: "ai_design",
    standardName: "Enterprise AI & Automation (High-Impact) - AI Design",
    remixName: {},
    description:
      "Validate your enterprise AI and automation use cases against data readiness, responsible AI requirements, and sector-specific compliance obligations, and leave with deployment-ready specifications your engineering team can build against without ambiguity.",
    positioning:
      "Design enterprise AI capabilities that are viable, responsible, and buildable: each use case validated, each workflow governed, each specification ready for engineering.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 110,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief AI Officers, CEOs, CIOs, and Transformation Directors accountable for enterprise AI strategy and responsible adoption",
    industryRelevance:
      "Organisations across financial services, healthcare, operations, and professional services ready to move beyond AI pilots to governed, production-scale AI operations",
    features: [
      "Use-case feasibility validation covering data availability, model complexity, and responsible AI risk before any build commitment",
      "Responsible workflow design specifying explainability requirements, bias controls, human oversight points, and confidence thresholds",
      "Model and infrastructure specification defining training data requirements, compute needs, and serving architecture for each use case",
      "Governance and compliance mapping ensuring each AI workflow meets the obligations relevant to your sector",
    ],
    tags: ["enterprise-ai", "responsible-ai", "ai-governance", "compliance"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Accelerates the safe adoption of AI at enterprise scale, improving productivity and decision speed across targeted workflows while maintaining the human oversight and governance that regulators and boards require.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 118,
    slug: "118",
    collection: "ai",
    serviceType: "deploy",
    standardName: "Enterprise AI & Automation (High-Impact) - Implementation",
    remixName: {},
    description:
      "Configure, integrate, and launch your enterprise AI and automation capabilities into production with sprint-gated testing, quality assurance, change management, and a clean operational handover to your teams, within a twelve-week programme.",
    positioning:
      "Move from approved AI and automation designs to live production capabilities: integrated, tested, adopted, and handed over within a milestone-gated twelve-week programme.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief AI Officers, CEOs, CIOs, and Transformation Directors accountable for enterprise AI strategy and responsible adoption",
    industryRelevance:
      "Organisations across financial services, healthcare, operations, and professional services ready to move beyond AI pilots to governed, production-scale AI operations",
    features: [
      "AI and automation capability configuration and integration with your existing applications, data sources, and process workflows",
      "End-to-end testing covering functional validation, edge cases, and performance under expected production load",
      "User acceptance testing with process owners confirming the automated workflows meet agreed outcome criteria",
      "Structured go-live support and handover with runbooks, escalation paths, and trained operators ready before launch",
    ],
    tags: ["enterprise-ai", "automation", "ai-deployment", "process-automation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Accelerates the safe adoption of AI at enterprise scale, improving productivity and decision speed across targeted workflows while maintaining the human oversight and governance that regulators and boards require.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 119,
    slug: "119",
    collection: "ai",
    serviceType: "ai_deploy",
    standardName: "Enterprise AI & Automation (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Put your validated enterprise AI capabilities into production with full governance controls, real-time monitoring, safety checks, and a documented handover with runbooks and team sign-off so your teams can manage AI responsibly from day one.",
    positioning:
      "Launch enterprise AI in production the right way: governed, monitored, auditable, and with your teams fully prepared to operate it before the DigitalQatalyst team steps back.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief AI Officers, CEOs, CIOs, and Transformation Directors accountable for enterprise AI strategy and responsible adoption",
    industryRelevance:
      "Organisations across financial services, healthcare, operations, and professional services ready to move beyond AI pilots to governed, production-scale AI operations",
    features: [
      "Production AI deployment with model versioning, rollback capability, and staged rollout to manage adoption risk",
      "Real-time model performance and drift monitoring with configurable alert thresholds and incident playbooks",
      "Audit logging and decision traceability covering every model prediction and the human review outcomes",
      "AI operations handover including retraining triggers, model lifecycle management, and escalation protocols",
    ],
    tags: ["enterprise-ai", "ai-governance", "ml-deployment", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Accelerates the safe adoption of AI at enterprise scale, improving productivity and decision speed across targeted workflows while maintaining the human oversight and governance that regulators and boards require.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 120,
    slug: "120",
    collection: "ai",
    serviceType: "manage",
    standardName: "Enterprise AI & Automation (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your enterprise AI and automation capabilities operating reliably and responsibly, with SLA-backed monitoring, monthly performance reporting, model lifecycle management, and a continuous improvement cycle run by the DigitalQatalyst team.",
    positioning:
      "Maintain enterprise AI that your organisation can trust every month: monitored, governed, optimised, and with every model lifecycle event handled before it becomes a problem.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief AI Officers, CEOs, CIOs, and Transformation Directors accountable for enterprise AI strategy and responsible adoption",
    industryRelevance:
      "Organisations across financial services, healthcare, operations, and professional services ready to move beyond AI pilots to governed, production-scale AI operations",
    features: [
      "Continuous AI model performance monitoring with SLA-backed response to degradation or drift alerts",
      "Monthly AI operations report covering model accuracy, drift indicators, incident history, and retraining events",
      "Proactive model lifecycle management including scheduled retraining, version upgrades, and deprecation planning",
      "Governance and compliance reporting confirming that audit controls, access policies, and responsible AI requirements remain in place",
    ],
    tags: ["enterprise-ai", "ai-governance", "managed-service", "mlops"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Accelerates the safe adoption of AI at enterprise scale, improving productivity and decision speed across targeted workflows while maintaining the human oversight and governance that regulators and boards require.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 121,
    slug: "121",
    collection: "security",
    serviceType: "advisory",
    standardName: "Technology Governance (High-Impact) - Assess",
    remixName: {},
    description:
      "Assess the maturity of your technology governance framework across portfolio management, architecture standards, vendor oversight, and delivery controls, and receive a prioritised improvement roadmap your CIO can act on immediately.",
    positioning:
      "Understand where your technology governance framework is strong and where it is creating delivery risk, cost drag, or architectural drift.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief Information Officers, Enterprise Architecture leads, PMO Directors, and Technology Portfolio leaders",
    industryRelevance:
      "Organisations managing complex multi-platform technology portfolios, significant vendor ecosystems, or active enterprise architecture programmes across any sector",
    features: [
      "Technology governance maturity assessment across portfolio, architecture, vendor, and delivery dimensions",
      "Investment and portfolio control review identifying where spend is misaligned to strategy or poorly governed",
      "Architecture standards assessment surfacing where technical debt and non-standard choices are accumulating risk",
      "Prioritised improvement roadmap with effort estimates and sequencing recommendations for your CIO and architecture leaders",
    ],
    tags: [
      "technology-governance",
      "enterprise-architecture",
      "portfolio-management",
      "IT-governance",
    ],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Replaces ad-hoc technology governance with a disciplined, continuously operated capability that reduces investment waste, slows architecture drift, and gives leadership reliable monthly visibility of technology risk.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 122,
    slug: "122",
    collection: "security",
    serviceType: "design",
    standardName: "Technology Governance (High-Impact) - Design",
    remixName: {},
    description:
      "Design a technology governance operating model that aligns portfolio decisions, architecture standards, vendor oversight, and delivery controls to your strategy, with the specifications and adoption plan your teams need to implement it.",
    positioning:
      "A technology governance blueprint that translates strategy into accountable decisions, consistent architecture, and disciplined delivery.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief Information Officers, Enterprise Architecture leads, PMO Directors, and Technology Portfolio leaders",
    industryRelevance:
      "Organisations managing complex multi-platform technology portfolios, significant vendor ecosystems, or active enterprise architecture programmes across any sector",
    features: [
      "Technology governance operating model defining decision rights, escalation paths, and accountability across portfolio, architecture, and vendor domains",
      "Architecture review board and standards framework design, including decision criteria, review processes, and exception handling",
      "Portfolio governance process designs covering investment approval, prioritisation, and performance tracking",
      "Change and adoption plan addressing how governance changes are embedded without disrupting ongoing delivery",
    ],
    tags: [
      "technology-governance",
      "operating-model",
      "enterprise-architecture",
      "portfolio-governance",
    ],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Replaces ad-hoc technology governance with a disciplined, continuously operated capability that reduces investment waste, slows architecture drift, and gives leadership reliable monthly visibility of technology risk.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 123,
    slug: "123",
    collection: "security",
    serviceType: "ai_design",
    standardName: "Technology Governance (High-Impact) - AI Design",
    remixName: {},
    description:
      "Validate where AI can strengthen technology governance, design responsible decision-support workflows, and produce deployment-ready specifications so build investment goes into AI use cases that are feasible, governed, and aligned to your architecture standards.",
    positioning:
      "AI-assisted technology governance starts with validated use cases and responsible design, not experimentation.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief Information Officers, Enterprise Architecture leads, PMO Directors, and Technology Portfolio leaders",
    industryRelevance:
      "Organisations managing complex multi-platform technology portfolios, significant vendor ecosystems, or active enterprise architecture programmes across any sector",
    features: [
      "AI use-case identification for portfolio analytics, architecture drift detection, vendor risk scoring, and delivery performance prediction",
      "Feasibility and data readiness assessment for each prioritised use case, covering available data, model requirements, and integration points",
      "Responsible AI workflow design including human-in-the-loop decision approval, explainability requirements, and bias risk assessment",
      "Deployment specifications ready to hand to a build team, with guardrails, monitoring criteria, and audit logging defined",
    ],
    tags: ["AI-governance", "technology-governance", "responsible-AI", "portfolio-analytics"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Replaces ad-hoc technology governance with a disciplined, continuously operated capability that reduces investment waste, slows architecture drift, and gives leadership reliable monthly visibility of technology risk.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 124,
    slug: "124",
    collection: "security",
    serviceType: "deploy",
    standardName: "Technology Governance (High-Impact) - Implementation",
    remixName: {},
    description:
      "Implement your technology governance operating model with configured tooling, integrated data sources, tested processes, and a controlled handover that leaves your CIO and architecture teams running confidently.",
    positioning:
      "From governance design to live operations: configured tooling, integrated data, and your team trained to govern technology at scale.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief Information Officers, Enterprise Architecture leads, PMO Directors, and Technology Portfolio leaders",
    industryRelevance:
      "Organisations managing complex multi-platform technology portfolios, significant vendor ecosystems, or active enterprise architecture programmes across any sector",
    features: [
      "Technology governance platform configuration aligned to your operating model, decision rights, and reporting requirements",
      "Data integrations connecting portfolio, financial, vendor, and architecture data sources into a single governance view",
      "Process activation covering architecture review board, portfolio governance cycles, and vendor oversight workflows",
      "Training programme and runbooks ensuring your CIO, architecture, and PMO teams can operate the governance model from day one",
    ],
    tags: ["technology-governance", "portfolio-management", "platform-deployment", "IT-governance"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Replaces ad-hoc technology governance with a disciplined, continuously operated capability that reduces investment waste, slows architecture drift, and gives leadership reliable monthly visibility of technology risk.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 125,
    slug: "125",
    collection: "security",
    serviceType: "ai_deploy",
    standardName: "Technology Governance (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy AI decision-support capabilities into your technology governance function with live monitoring, human-in-the-loop controls, and an operations model that keeps your CIO and architecture teams in charge of every material decision.",
    positioning:
      "AI in production for technology governance: validated models, governed decisions, and your team trained to manage them.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief Information Officers, Enterprise Architecture leads, PMO Directors, and Technology Portfolio leaders",
    industryRelevance:
      "Organisations managing complex multi-platform technology portfolios, significant vendor ecosystems, or active enterprise architecture programmes across any sector",
    features: [
      "Production deployment of AI models for portfolio health analytics, architecture drift detection, or vendor risk scoring",
      "Human-in-the-loop approval workflows ensuring AI recommendations are reviewed by accountable leaders before action is taken",
      "Monitoring dashboards surfacing model accuracy, recommendation acceptance rates, and governance outcomes in real time",
      "Operations and override training so your CIO, architecture, and PMO teams can manage, retrain, and override AI outputs independently",
    ],
    tags: ["AI-deployment", "technology-governance", "portfolio-analytics", "responsible-AI"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Replaces ad-hoc technology governance with a disciplined, continuously operated capability that reduces investment waste, slows architecture drift, and gives leadership reliable monthly visibility of technology risk.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 126,
    slug: "126",
    collection: "security",
    serviceType: "manage",
    standardName: "Technology Governance (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Operate your technology governance framework continuously, with monthly portfolio reporting, quarterly architecture reviews, vendor oversight, and proactive optimisation so your CIO always has an accurate picture of investment alignment and technology risk.",
    positioning:
      "Named governance operations, monthly reporting, and continuous optimisation so technology governance keeps pace with your business.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief Information Officers, Enterprise Architecture leads, PMO Directors, and Technology Portfolio leaders",
    industryRelevance:
      "Organisations managing complex multi-platform technology portfolios, significant vendor ecosystems, or active enterprise architecture programmes across any sector",
    features: [
      "Continuous portfolio and investment monitoring with monthly performance reports aligned to your strategic objectives",
      "Quarterly architecture review cycles assessing standards compliance, technical debt accumulation, and non-standard exceptions",
      "Ongoing vendor oversight covering contract performance, risk monitoring, and renewal preparation",
      "Proactive governance optimisation adjusting processes, tooling, and reporting as your technology strategy or organisation evolves",
    ],
    tags: ["managed-governance", "technology-governance", "portfolio-management", "IT-governance"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Replaces ad-hoc technology governance with a disciplined, continuously operated capability that reduces investment waste, slows architecture drift, and gives leadership reliable monthly visibility of technology risk.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 127,
    slug: "127",
    collection: "operations",
    serviceType: "advisory",
    standardName: "DevSecOps Automation (High-Impact) - Assess",
    remixName: {},
    description:
      "Identify where your software delivery pipeline leaks speed, introduces security risk, or fails to meet reliability standards. The DigitalQatalyst team maps DevSecOps maturity across your toolchain and returns a prioritised roadmap your engineering and security leaders can act on.",
    positioning:
      "A structured assessment of your delivery pipeline that shows where automation gaps slow releases and where security controls are missing.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief Technology Officers, Engineering Directors, DevOps leads, and Security leaders accountable for delivery speed, software quality, and production security",
    industryRelevance:
      "Software product companies, digital platform operators, financial services technology teams, and any organisation where software delivery velocity and production security are both board-level concerns",
    features: [
      "Pipeline topology review covering build, test, security scanning, and deployment stages",
      "Security control gap analysis against shift-left and DevSecOps best practices",
      "Release velocity and defect-escape-rate benchmarking against your current toolchain",
      "Prioritised remediation roadmap with effort estimates and risk-reduction impact scores",
    ],
    tags: ["devsecops", "ci-cd", "pipeline-security"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases deployment frequency, reduces change failure rate, and embeds security assurance into the delivery pipeline as a permanent operational capability, improving both release confidence and audit posture.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 128,
    slug: "128",
    collection: "operations",
    serviceType: "design",
    standardName: "DevSecOps Automation (High-Impact) - Design",
    remixName: {},
    description:
      "Design a DevSecOps automation programme that closes your pipeline security gaps, accelerates release cycles, and gives your engineering teams clear, build-ready specifications for every workflow change.",
    positioning:
      "A design engagement that produces a complete DevSecOps automation blueprint ready for your engineering teams to implement.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief Technology Officers, Engineering Directors, DevOps leads, and Security leaders accountable for delivery speed, software quality, and production security",
    industryRelevance:
      "Software product companies, digital platform operators, financial services technology teams, and any organisation where software delivery velocity and production security are both board-level concerns",
    features: [
      "Pipeline architecture design covering build, test, security scan, deploy, and observe stages",
      "Security toolchain specification: SAST, DAST, dependency scanning, secrets detection, and container signing",
      "Branching strategy, environment promotion gates, and release approval workflow design",
      "Developer experience and adoption plan covering training, documentation, and inner-loop tooling",
    ],
    tags: ["devsecops", "ci-cd", "pipeline-security"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases deployment frequency, reduces change failure rate, and embeds security assurance into the delivery pipeline as a permanent operational capability, improving both release confidence and audit posture.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 129,
    slug: "129",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "DevSecOps Automation (High-Impact) - AI Design",
    remixName: {},
    description:
      "Validate which AI use cases will genuinely improve your DevSecOps pipeline, and design responsible, auditable workflows before any build investment is committed. The DigitalQatalyst team produces deployment-ready specifications for AI-assisted code review, anomaly detection, and predictive quality gating.",
    positioning:
      "Define and validate the AI capabilities that will accelerate delivery and improve security posture, with governance built in from the start.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief Technology Officers, Engineering Directors, DevOps leads, and Security leaders accountable for delivery speed, software quality, and production security",
    industryRelevance:
      "Software product companies, digital platform operators, financial services technology teams, and any organisation where software delivery velocity and production security are both board-level concerns",
    features: [
      "AI use-case evaluation: code review assistance, vulnerability prioritisation, anomaly detection, and predictive test selection",
      "Data and signal readiness assessment covering pipeline telemetry, scan outputs, and historical defect data",
      "Responsible AI workflow design with human review gates, model confidence thresholds, and override mechanisms",
      "Deployment specification including model selection, monitoring approach, and feedback loop design",
    ],
    tags: ["devsecops-ai", "pipeline-security", "ci-cd"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases deployment frequency, reduces change failure rate, and embeds security assurance into the delivery pipeline as a permanent operational capability, improving both release confidence and audit posture.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 130,
    slug: "130",
    collection: "operations",
    serviceType: "deploy",
    standardName: "DevSecOps Automation (High-Impact) - Implementation",
    remixName: {},
    description:
      "Implement your DevSecOps automation blueprint with structured configuration, integration testing, and a controlled handover that leaves your engineering teams operating a faster, more secure delivery pipeline from day one.",
    positioning:
      "A managed deployment that takes your DevSecOps design from specification to a production-ready, security-embedded pipeline.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 110,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief Technology Officers, Engineering Directors, DevOps leads, and Security leaders accountable for delivery speed, software quality, and production security",
    industryRelevance:
      "Software product companies, digital platform operators, financial services technology teams, and any organisation where software delivery velocity and production security are both board-level concerns",
    features: [
      "Pipeline configuration and toolchain integration across build, test, security scan, and deploy stages",
      "Security gate implementation including SAST, DAST, dependency scanning, and secrets detection policies",
      "Environment promotion and release approval workflow setup with audit trail and approval controls",
      "Engineering team enablement: pipeline onboarding, runbook creation, and go-live support",
    ],
    tags: ["devsecops", "ci-cd", "pipeline-security"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases deployment frequency, reduces change failure rate, and embeds security assurance into the delivery pipeline as a permanent operational capability, improving both release confidence and audit posture.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 131,
    slug: "131",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "DevSecOps Automation (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy validated AI capabilities for code review assistance, vulnerability prioritisation, and anomaly detection into your live DevSecOps pipeline, with monitoring, override controls, and a governance handover that keeps your engineering and security teams in control.",
    positioning:
      "Put AI-assisted delivery and security capabilities into production with the audit trail and oversight controls your engineering organisation requires.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief Technology Officers, Engineering Directors, DevOps leads, and Security leaders accountable for delivery speed, software quality, and production security",
    industryRelevance:
      "Software product companies, digital platform operators, financial services technology teams, and any organisation where software delivery velocity and production security are both board-level concerns",
    features: [
      "Governed model deployment for approved use cases including predictive test selection and AI-assisted vulnerability prioritisation",
      "Pipeline telemetry dashboards tracking model accuracy, false-positive rates, and delivery impact",
      "Developer-facing override and feedback mechanisms embedded in existing tooling",
      "Engineering team enablement on model behaviour, intervention scenarios, and performance review cadence",
    ],
    tags: ["devsecops-ai", "pipeline-security", "ci-cd"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases deployment frequency, reduces change failure rate, and embeds security assurance into the delivery pipeline as a permanent operational capability, improving both release confidence and audit posture.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 132,
    slug: "132",
    collection: "operations",
    serviceType: "manage",
    standardName: "DevSecOps Automation (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your DevSecOps pipeline performing at pace with your engineering organisation: SLA-backed pipeline operations, monthly delivery and security metrics reporting, and ongoing optimisation as your platform and team scale.",
    positioning:
      "Ongoing management of your DevSecOps pipeline so delivery speed and security assurance never degrade as the organisation grows.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief Technology Officers, Engineering Directors, DevOps leads, and Security leaders accountable for delivery speed, software quality, and production security",
    industryRelevance:
      "Software product companies, digital platform operators, financial services technology teams, and any organisation where software delivery velocity and production security are both board-level concerns",
    features: [
      "Monthly delivery metrics reports covering deployment frequency, lead time, change failure rate, and security finding trends",
      "Proactive pipeline health monitoring with incident response within agreed SLA windows",
      "Policy and configuration updates as toolchains, teams, or security requirements evolve",
      "Quarterly optimisation reviews identifying bottlenecks, redundant stages, and new automation opportunities",
    ],
    tags: ["devsecops", "ci-cd", "managed-service"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases deployment frequency, reduces change failure rate, and embeds security assurance into the delivery pipeline as a permanent operational capability, improving both release confidence and audit posture.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 133,
    slug: "133",
    collection: "experience",
    serviceType: "advisory",
    standardName: "IT Operations & Support (High-Impact) - Assess",
    remixName: {},
    description:
      "Audit your IT operations and service desk to identify where incidents are taking too long to resolve, where change control is creating risk, and where manual effort is reducing your team",
    positioning:
      "Find the operational gaps creating IT reliability risk and service desk inefficiency before they become incidents your business notices.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief Information Officers, IT Operations Directors, and Service Desk leaders accountable for employee productivity and IT service reliability",
    industryRelevance:
      "Organisations of any sector where IT service quality affects employee productivity, and where growing headcount or platform complexity is straining existing support capacity",
    features: [
      "IT service desk audit covering incident volumes, resolution times, escalation rates, and repeat failures",
      "Change management process review assessing control effectiveness and the risk of uncontrolled change",
      "Operational tooling assessment covering monitoring coverage, alert quality, and automation maturity",
      "Prioritised improvement roadmap with effort scores and quick-win identification for your IT leadership",
    ],
    tags: ["it-operations", "itsm", "service-desk"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces average ticket resolution time, improves first-contact resolution rates through AI-assisted support, and provides IT leadership with the operational visibility to manage reliability rather than react to failures.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 134,
    slug: "134",
    collection: "experience",
    serviceType: "design",
    standardName: "IT Operations & Support (High-Impact) - Design",
    remixName: {},
    description:
      "Design the ITSM processes, tooling architecture, and automation workflows your IT operations team needs to resolve incidents faster, control change more effectively, and reduce manual workload.",
    positioning:
      "An IT operations design that gives your service desk team the structure and tools to manage incidents and change without firefighting.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief Information Officers, IT Operations Directors, and Service Desk leaders accountable for employee productivity and IT service reliability",
    industryRelevance:
      "Organisations of any sector where IT service quality affects employee productivity, and where growing headcount or platform complexity is straining existing support capacity",
    features: [
      "ITSM process design covering incident, problem, change, and request management tailored to your operational environment",
      "Automation workflow design for alert triage, ticket enrichment, and routine resolution paths",
      "Monitoring and observability architecture aligned to your infrastructure and the services your business depends on",
      "Tooling integration specifications connecting your ITSM platform to monitoring, asset management, and CI/CD systems",
    ],
    tags: ["it-operations", "itsm", "service-desk"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces average ticket resolution time, improves first-contact resolution rates through AI-assisted support, and provides IT leadership with the operational visibility to manage reliability rather than react to failures.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 135,
    slug: "135",
    collection: "experience",
    serviceType: "ai_design",
    standardName: "IT Operations & Support (High-Impact) - AI Design",
    remixName: {},
    description:
      "Validate which AI capabilities can genuinely improve incident resolution and IT operations efficiency for your organisation, then produce responsible workflow designs and deployment specifications ready for build.",
    positioning:
      "AI for IT operations, validated against your operational data and designed with the safety controls your infrastructure team requires.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief Information Officers, IT Operations Directors, and Service Desk leaders accountable for employee productivity and IT service reliability",
    industryRelevance:
      "Organisations of any sector where IT service quality affects employee productivity, and where growing headcount or platform complexity is straining existing support capacity",
    features: [
      "AI use-case scoring for intelligent incident triage, anomaly detection, predictive failure prevention, and self-healing automation",
      "Data readiness assessment confirming which use cases your monitoring, ticket, and log data supports",
      "Responsible AI workflow designs with human approval gates, rollback controls, and blast-radius limits for automated remediation",
      "Technical specifications for integration with your ITSM, monitoring, and infrastructure platforms",
    ],
    tags: ["it-operations", "ai-design", "itsm", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces average ticket resolution time, improves first-contact resolution rates through AI-assisted support, and provides IT leadership with the operational visibility to manage reliability rather than react to failures.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 136,
    slug: "136",
    collection: "experience",
    serviceType: "deploy",
    standardName: "IT Operations & Support (High-Impact) - Implementation",
    remixName: {},
    description:
      "Configure, integrate, test, and launch your ITSM and IT operations platform improvements with structured quality assurance and a handover that leaves your operations team fully equipped to manage them independently.",
    positioning:
      "IT operations capabilities delivered and tested, with your team ready to manage incidents and change before the project closes.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief Information Officers, IT Operations Directors, and Service Desk leaders accountable for employee productivity and IT service reliability",
    industryRelevance:
      "Organisations of any sector where IT service quality affects employee productivity, and where growing headcount or platform complexity is straining existing support capacity",
    features: [
      "ITSM platform configuration built to approved process specifications covering incident, change, and request management",
      "Monitoring and alerting configuration validated against your agreed coverage requirements and noise reduction targets",
      "Integration delivery connecting ITSM to monitoring, asset management, and CI/CD systems, with documented test evidence",
      "Operations team training and go-live readiness assessment completed before the controlled launch",
    ],
    tags: ["it-operations", "itsm", "service-desk"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces average ticket resolution time, improves first-contact resolution rates through AI-assisted support, and provides IT leadership with the operational visibility to manage reliability rather than react to failures.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 137,
    slug: "137",
    collection: "experience",
    serviceType: "ai_deploy",
    standardName: "IT Operations & Support (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy validated AI capabilities into your IT operations and ITSM environment with production monitoring, safety controls, and a structured handover that gives your operations team full ownership of the capability.",
    positioning:
      "AI-assisted incident detection and operations automation in production, with the safety controls your infrastructure team demands.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief Information Officers, IT Operations Directors, and Service Desk leaders accountable for employee productivity and IT service reliability",
    industryRelevance:
      "Organisations of any sector where IT service quality affects employee productivity, and where growing headcount or platform complexity is straining existing support capacity",
    features: [
      "Production deployment of AI models integrated into your ITSM, monitoring, and alerting workflows",
      "Safety controls and blast-radius limits validated before any automated remediation goes live in production",
      "AI operations dashboards covering detection accuracy, false positive rates, automated resolution success, and model health",
      "Operations team training and runbook so your engineers understand how to work alongside and manage the AI capability",
    ],
    tags: ["it-operations", "ai-deploy", "itsm", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces average ticket resolution time, improves first-contact resolution rates through AI-assisted support, and provides IT leadership with the operational visibility to manage reliability rather than react to failures.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 138,
    slug: "138",
    collection: "experience",
    serviceType: "manage",
    standardName: "IT Operations & Support (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your IT operations and ITSM platform running reliably, with ongoing monitoring, proactive incident trend analysis, and a team accountable to your service levels so your IT function can focus on delivery.",
    positioning:
      "Your IT operations platform continuously maintained and optimised, so your team resolves incidents faster and changes land without surprises.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief Information Officers, IT Operations Directors, and Service Desk leaders accountable for employee productivity and IT service reliability",
    industryRelevance:
      "Organisations of any sector where IT service quality affects employee productivity, and where growing headcount or platform complexity is straining existing support capacity",
    features: [
      "Monthly ITSM platform health checks covering routing accuracy, SLA compliance, automation success rates, and integration reliability",
      "Incident trend analysis and problem management support to reduce repeat failures over time",
      "Release and update management with regression testing before any ITSM changes reach the production environment",
      "Monthly IT operations report covering service levels, incident trends, change success rates, and a forward improvement plan",
    ],
    tags: ["it-operations", "managed-service", "itsm"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces average ticket resolution time, improves first-contact resolution rates through AI-assisted support, and provides IT leadership with the operational visibility to manage reliability rather than react to failures.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 149,
    slug: "149",
    collection: "operations",
    serviceType: "advisory",
    standardName: "Farming Operations (High-Impact) - Assess",
    remixName: {},
    description:
      "Understand where your farming operations fall short on yield visibility, resource efficiency, and planning accuracy. The DigitalQatalyst team assesses your current operational maturity and returns a prioritised roadmap your agribusiness leaders can act on.",
    positioning:
      "A structured assessment that reveals where operational gaps are costing yield, water, and labour, and what to fix first.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Agribusiness Chief Operating Officers, Farm Operations Directors, and Agricultural Technology leaders",
    industryRelevance:
      "Commercial farming enterprises, food production businesses, agribusiness cooperatives, and agricultural technology providers across arable, horticultural, and livestock operations",
    features: [
      "Yield tracking and crop performance visibility gap analysis across fields and seasons",
      "Resource usage audit covering irrigation scheduling, input application, and equipment utilisation",
      "Operational planning and coordination review across planting, harvesting, and logistics cycles",
      "Prioritised improvement roadmap with effort estimates and expected yield or cost impact",
    ],
    tags: ["agribusiness", "precision-agriculture", "farm-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves yield predictability, reduces input waste through precise resource management, and gives farm operations leaders the real-time field visibility needed to act on agronomic signals before they become production losses.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 150,
    slug: "150",
    collection: "operations",
    serviceType: "design",
    standardName: "Farming Operations (High-Impact) - Design",
    remixName: {},
    description:
      "Turn farming operations improvement goals into a complete, build-ready blueprint: field monitoring workflows, resource scheduling logic, integration specifications, and an adoption plan your operations team can execute from the next season.",
    positioning:
      "A design engagement that produces farming operations specifications ready for technology configuration and rollout.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Agribusiness Chief Operating Officers, Farm Operations Directors, and Agricultural Technology leaders",
    industryRelevance:
      "Commercial farming enterprises, food production businesses, agribusiness cooperatives, and agricultural technology providers across arable, horticultural, and livestock operations",
    features: [
      "Field monitoring and crop performance tracking workflow design for managers and field operators",
      "Resource scheduling logic for irrigation, input application, and equipment across planting and harvest cycles",
      "Integration specifications for farm management systems, IoT sensors, and logistics platforms",
      "Operational adoption plan covering training, phased rollout, and early-life support across seasonal transitions",
    ],
    tags: ["agribusiness", "precision-agriculture", "farm-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves yield predictability, reduces input waste through precise resource management, and gives farm operations leaders the real-time field visibility needed to act on agronomic signals before they become production losses.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 151,
    slug: "151",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "Farming Operations (High-Impact) - AI Design",
    remixName: {},
    description:
      "Validate where AI can improve yield prediction, irrigation scheduling, and pest or disease detection before any build investment is committed. The DigitalQatalyst team designs responsible, audit-ready workflows and deployment-ready specifications for every approved agricultural AI use case.",
    positioning:
      "Define the AI use cases that will improve yield and reduce input waste, with data readiness and responsible workflow design confirmed before build.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Agribusiness Chief Operating Officers, Farm Operations Directors, and Agricultural Technology leaders",
    industryRelevance:
      "Commercial farming enterprises, food production businesses, agribusiness cooperatives, and agricultural technology providers across arable, horticultural, and livestock operations",
    features: [
      "AI use-case evaluation: yield forecasting, irrigation optimisation, pest detection, and crop health monitoring",
      "Data readiness assessment covering satellite imagery, sensor telemetry, historical yield data, and weather feeds",
      "Responsible AI workflow design with agronomist review gates, confidence thresholds, and field override mechanisms",
      "Deployment specification including model selection criteria, monitoring approach, and seasonal retraining schedules",
    ],
    tags: ["precision-agriculture", "agricultural-ai", "farm-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves yield predictability, reduces input waste through precise resource management, and gives farm operations leaders the real-time field visibility needed to act on agronomic signals before they become production losses.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 152,
    slug: "152",
    collection: "operations",
    serviceType: "deploy",
    standardName: "Farming Operations (High-Impact) - Implementation",
    remixName: {},
    description:
      "Configure, integrate, and launch your farming operations platform with structured testing across field and back-office workflows, and a controlled handover that leaves your operations team self-sufficient before the next season begins.",
    positioning:
      "A managed deployment that takes your farming operations blueprint from specification to a live, tested platform aligned to your seasonal calendar.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Agribusiness Chief Operating Officers, Farm Operations Directors, and Agricultural Technology leaders",
    industryRelevance:
      "Commercial farming enterprises, food production businesses, agribusiness cooperatives, and agricultural technology providers across arable, horticultural, and livestock operations",
    features: [
      "Platform configuration against approved field monitoring, resource scheduling, and logistics workflows",
      "End-to-end integration testing with farm management systems, IoT sensor networks, and logistics providers",
      "Field acceptance testing with farm managers, supervisors, and representative field operators",
      "Seasonal go-live planning with hypercare support timed to avoid critical planting or harvest windows",
    ],
    tags: ["agribusiness", "farm-operations", "precision-agriculture"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves yield predictability, reduces input waste through precise resource management, and gives farm operations leaders the real-time field visibility needed to act on agronomic signals before they become production losses.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 153,
    slug: "153",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "Farming Operations (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy validated AI capabilities for yield forecasting, irrigation optimisation, and pest detection into your live farming operations environment, with seasonal monitoring, agronomist override controls, and a governance handover that keeps your operations team in control.",
    positioning:
      "Put AI-powered crop management and resource optimisation into production, with responsible controls that keep agronomist expertise at the centre of every decision.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Agribusiness Chief Operating Officers, Farm Operations Directors, and Agricultural Technology leaders",
    industryRelevance:
      "Commercial farming enterprises, food production businesses, agribusiness cooperatives, and agricultural technology providers across arable, horticultural, and livestock operations",
    features: [
      "Governed model deployment for approved use cases including yield forecasting and variable-rate irrigation scheduling",
      "Field-level monitoring dashboards tracking model accuracy, recommendation adoption rates, and yield impact",
      "Agronomist review workflows and override mechanisms embedded in field management tooling",
      "Operations team enablement on model behaviour, seasonal retraining, and performance review cadence",
    ],
    tags: ["precision-agriculture", "agricultural-ai", "farm-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves yield predictability, reduces input waste through precise resource management, and gives farm operations leaders the real-time field visibility needed to act on agronomic signals before they become production losses.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 154,
    slug: "154",
    collection: "operations",
    serviceType: "manage",
    standardName: "Farming Operations (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your farming operations platform performing across every season: SLA-backed system operations, monthly yield and resource performance reporting, and ongoing optimisation as your farm footprint and crop programmes evolve.",
    positioning:
      "Ongoing management of your farming operations platform so yield visibility and resource efficiency never degrade across seasons.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Agribusiness Chief Operating Officers, Farm Operations Directors, and Agricultural Technology leaders",
    industryRelevance:
      "Commercial farming enterprises, food production businesses, agribusiness cooperatives, and agricultural technology providers across arable, horticultural, and livestock operations",
    features: [
      "Monthly performance reports covering yield tracking accuracy, resource utilisation, and system health",
      "Proactive platform monitoring with incident response within agreed SLA windows",
      "Seasonal configuration updates as crop programmes, field boundaries, or equipment change",
      "Annual optimisation review identifying new capability opportunities and data quality improvements",
    ],
    tags: ["agribusiness", "farm-operations", "managed-service"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves yield predictability, reduces input waste through precise resource management, and gives farm operations leaders the real-time field visibility needed to act on agronomic signals before they become production losses.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 155,
    slug: "155",
    collection: "operations",
    serviceType: "advisory",
    standardName: "Manufacturing Operations (High-Impact) - Assess",
    remixName: {},
    description:
      "Identify where your manufacturing operations are losing throughput, masking quality issues, or running blind on downtime. The DigitalQatalyst team assesses plant operational maturity and delivers a prioritised roadmap your operations and plant leaders can act on.",
    positioning:
      "A structured plant assessment that shows where production gaps are costing throughput and quality, and what to address first.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Manufacturing Directors, Plant Managers, and Operations leaders accountable for production throughput, quality, and asset performance",
    industryRelevance:
      "Discrete and process manufacturers, industrial operators, food and beverage producers, and automotive and aerospace component suppliers undertaking Industry 4.0 transformation",
    features: [
      "Production throughput and OEE gap analysis across lines, shifts, and equipment classes",
      "Quality control visibility review covering defect detection, reporting accuracy, and escape rates",
      "Downtime and maintenance planning audit: planned versus unplanned maintenance ratios and root-cause tracking",
      "Prioritised improvement roadmap with effort estimates and expected throughput or quality impact",
    ],
    tags: ["manufacturing", "oee", "plant-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases overall equipment effectiveness, reduces unplanned downtime through predictive maintenance, and improves quality defect detection rates, with managed operations sustaining and extending these gains as production volumes and mix change.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 156,
    slug: "156",
    collection: "operations",
    serviceType: "design",
    standardName: "Manufacturing Operations (High-Impact) - Design",
    remixName: {},
    description:
      "Turn manufacturing improvement goals into a complete, build-ready operations blueprint: production workflow designs, quality control specifications, maintenance scheduling logic, and an adoption plan your plant teams can execute without ambiguity.",
    positioning:
      "A design engagement that produces manufacturing operations specifications ready for MES configuration and plant rollout.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Manufacturing Directors, Plant Managers, and Operations leaders accountable for production throughput, quality, and asset performance",
    industryRelevance:
      "Discrete and process manufacturers, industrial operators, food and beverage producers, and automotive and aerospace component suppliers undertaking Industry 4.0 transformation",
    features: [
      "Production workflow design covering scheduling, WIP tracking, line balancing, and shift handover processes",
      "Quality control specification: inspection points, defect classification, corrective action workflows, and reporting",
      "Preventive and predictive maintenance scheduling logic tied to equipment class and production calendars",
      "Plant adoption plan covering operator training, phased line rollout, and early-life support",
    ],
    tags: ["manufacturing", "oee", "plant-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases overall equipment effectiveness, reduces unplanned downtime through predictive maintenance, and improves quality defect detection rates, with managed operations sustaining and extending these gains as production volumes and mix change.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 157,
    slug: "157",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "Manufacturing Operations (High-Impact) - AI Design",
    remixName: {},
    description:
      "Validate which AI use cases will genuinely improve throughput, quality, and maintenance performance before committing build budget. The DigitalQatalyst team designs responsible, audit-ready workflows and deployment-ready specifications for every approved manufacturing AI application.",
    positioning:
      "Define and validate the AI use cases that will improve production output and reduce quality escapes, with data readiness confirmed before build.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Manufacturing Directors, Plant Managers, and Operations leaders accountable for production throughput, quality, and asset performance",
    industryRelevance:
      "Discrete and process manufacturers, industrial operators, food and beverage producers, and automotive and aerospace component suppliers undertaking Industry 4.0 transformation",
    features: [
      "AI use-case evaluation: predictive maintenance, visual quality inspection, demand-based production scheduling, and OEE anomaly detection",
      "Data readiness assessment covering sensor telemetry, MES output, maintenance records, and quality inspection data",
      "Responsible AI workflow design with quality engineer review gates, confidence thresholds, and production override mechanisms",
      "Deployment specification including model selection, monitoring approach, and retraining trigger design",
    ],
    tags: ["manufacturing-ai", "predictive-maintenance", "plant-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases overall equipment effectiveness, reduces unplanned downtime through predictive maintenance, and improves quality defect detection rates, with managed operations sustaining and extending these gains as production volumes and mix change.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 158,
    slug: "158",
    collection: "operations",
    serviceType: "deploy",
    standardName: "Manufacturing Operations (High-Impact) - Implementation",
    remixName: {},
    description:
      "Configure, integrate, and launch your manufacturing operations platform with structured testing across production, quality, and maintenance workflows, and a controlled handover that leaves your plant team ready to operate independently.",
    positioning:
      "A managed deployment that takes your manufacturing blueprint from specification to a live, production-tested platform.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Manufacturing Directors, Plant Managers, and Operations leaders accountable for production throughput, quality, and asset performance",
    industryRelevance:
      "Discrete and process manufacturers, industrial operators, food and beverage producers, and automotive and aerospace component suppliers undertaking Industry 4.0 transformation",
    features: [
      "MES configuration against approved production scheduling, WIP tracking, and quality control workflows",
      "End-to-end integration testing with ERP, sensor networks, SCADA, and maintenance management systems",
      "Operator and supervisor acceptance testing across all in-scope lines and work centres",
      "Hypercare period covering production issue resolution and adoption support in the first weeks of live operation",
    ],
    tags: ["manufacturing", "oee", "plant-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases overall equipment effectiveness, reduces unplanned downtime through predictive maintenance, and improves quality defect detection rates, with managed operations sustaining and extending these gains as production volumes and mix change.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 159,
    slug: "159",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "Manufacturing Operations (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy validated AI capabilities for predictive maintenance, visual quality inspection, and production scheduling into your live manufacturing environment, with real-time monitoring, engineer override controls, and a governance handover that keeps your plant team in control.",
    positioning:
      "Put AI-powered maintenance, quality, and scheduling capabilities into production with the oversight controls your plant and quality teams require.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Manufacturing Directors, Plant Managers, and Operations leaders accountable for production throughput, quality, and asset performance",
    industryRelevance:
      "Discrete and process manufacturers, industrial operators, food and beverage producers, and automotive and aerospace component suppliers undertaking Industry 4.0 transformation",
    features: [
      "Governed model deployment for approved use cases including predictive maintenance and visual defect detection",
      "Line-level dashboards tracking model accuracy, engineer override rates, and production impact",
      "Quality engineer and maintenance technician override workflows embedded in existing plant systems",
      "Plant team enablement on model behaviour, retraining triggers, and monthly performance review",
    ],
    tags: ["manufacturing-ai", "predictive-maintenance", "plant-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases overall equipment effectiveness, reduces unplanned downtime through predictive maintenance, and improves quality defect detection rates, with managed operations sustaining and extending these gains as production volumes and mix change.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 160,
    slug: "160",
    collection: "operations",
    serviceType: "manage",
    standardName: "Manufacturing Operations (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your manufacturing operations platform and production performance metrics running reliably: SLA-backed system operations, monthly OEE and quality reporting, and ongoing optimisation as your plant footprint and production programmes grow.",
    positioning:
      "Ongoing management of your manufacturing platform so production visibility, quality controls, and maintenance scheduling never degrade.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Manufacturing Directors, Plant Managers, and Operations leaders accountable for production throughput, quality, and asset performance",
    industryRelevance:
      "Discrete and process manufacturers, industrial operators, food and beverage producers, and automotive and aerospace component suppliers undertaking Industry 4.0 transformation",
    features: [
      "Monthly OEE, quality, and maintenance performance reports with trend analysis and recommended actions",
      "Proactive platform monitoring with incident response within agreed SLA windows",
      "Configuration updates as production lines, equipment classes, or quality standards change",
      "Quarterly optimisation reviews identifying throughput improvement and technical debt reduction opportunities",
    ],
    tags: ["manufacturing", "oee", "managed-service"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases overall equipment effectiveness, reduces unplanned downtime through predictive maintenance, and improves quality defect detection rates, with managed operations sustaining and extending these gains as production volumes and mix change.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 161,
    slug: "161",
    collection: "operations",
    serviceType: "advisory",
    standardName: "Infrastructure Operations (High-Impact) - Assess",
    remixName: {},
    description:
      "Identify where your infrastructure operations are creating asset reliability risk, maintenance planning gaps, or field productivity loss. The DigitalQatalyst team assesses operational maturity across your asset portfolio and returns a prioritised roadmap your asset and operations leaders can act on.",
    positioning:
      "A structured assessment that shows where infrastructure asset gaps create reliability and service continuity risk, and what to prioritise first.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Asset Management Directors, Infrastructure Operations leaders, and Facilities or Utilities executives accountable for asset reliability and maintenance cost",
    industryRelevance:
      "Utilities, transport authorities, energy operators, real estate portfolio managers, and asset-intensive industrial operators where asset reliability and regulatory compliance are operational priorities",
    features: [
      "Asset registry and condition visibility audit across your infrastructure portfolio",
      "Maintenance planning review: planned versus reactive maintenance ratios and work order management accuracy",
      "Field workforce productivity gap analysis covering job scheduling, parts availability, and travel efficiency",
      "Prioritised improvement roadmap with effort estimates and expected reliability or cost impact",
    ],
    tags: ["asset-management", "infrastructure", "maintenance-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces unplanned asset failures through predictive maintenance, improves field productivity through better work order management, and provides asset leaders with the reliability data needed to plan capital investment accurately.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 162,
    slug: "162",
    collection: "operations",
    serviceType: "design",
    standardName: "Infrastructure Operations (High-Impact) - Design",
    remixName: {},
    description:
      "Turn infrastructure operations improvement goals into a complete, build-ready blueprint: asset management workflows, maintenance scheduling logic, field workforce coordination specifications, and an adoption plan your operations teams can execute without ambiguity.",
    positioning:
      "A design engagement that produces infrastructure operations specifications ready for EAM configuration and field rollout.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Asset Management Directors, Infrastructure Operations leaders, and Facilities or Utilities executives accountable for asset reliability and maintenance cost",
    industryRelevance:
      "Utilities, transport authorities, energy operators, real estate portfolio managers, and asset-intensive industrial operators where asset reliability and regulatory compliance are operational priorities",
    features: [
      "Asset lifecycle workflow design covering inspection, condition assessment, work order creation, and disposal",
      "Preventive and condition-based maintenance scheduling logic tied to asset class and criticality",
      "Field workforce coordination specification: job scheduling, parts and materials management, and completion recording",
      "Operations adoption plan covering technician training, mobile tool rollout, and early-life support",
    ],
    tags: ["asset-management", "infrastructure", "maintenance-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces unplanned asset failures through predictive maintenance, improves field productivity through better work order management, and provides asset leaders with the reliability data needed to plan capital investment accurately.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 163,
    slug: "163",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "Infrastructure Operations (High-Impact) - AI Design",
    remixName: {},
    description:
      "Validate which AI use cases will genuinely improve asset reliability, maintenance scheduling, and field productivity before committing build budget. The DigitalQatalyst team designs responsible, audit-ready workflows and deployment-ready specifications for every approved infrastructure AI application.",
    positioning:
      "Define and validate the AI capabilities that will improve asset uptime and field efficiency, with data readiness and responsible design confirmed before build.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Asset Management Directors, Infrastructure Operations leaders, and Facilities or Utilities executives accountable for asset reliability and maintenance cost",
    industryRelevance:
      "Utilities, transport authorities, energy operators, real estate portfolio managers, and asset-intensive industrial operators where asset reliability and regulatory compliance are operational priorities",
    features: [
      "AI use-case evaluation: predictive asset failure, condition-based maintenance scheduling, field route optimisation, and fault pattern detection",
      "Data readiness assessment covering sensor telemetry, maintenance history, inspection records, and GIS data",
      "Responsible AI workflow design with engineer review gates, confidence thresholds, and field override mechanisms",
      "Deployment specification including model selection criteria, monitoring approach, and retraining trigger design",
    ],
    tags: ["infrastructure-ai", "asset-management", "predictive-maintenance"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces unplanned asset failures through predictive maintenance, improves field productivity through better work order management, and provides asset leaders with the reliability data needed to plan capital investment accurately.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 164,
    slug: "164",
    collection: "operations",
    serviceType: "deploy",
    standardName: "Infrastructure Operations (High-Impact) - Implementation",
    remixName: {},
    description:
      "Configure, integrate, and launch your infrastructure operations platform with structured testing across asset management, maintenance, and field workforce workflows, and a controlled handover that leaves your operations team ready to manage assets independently.",
    positioning:
      "A managed deployment that takes your infrastructure operations blueprint from specification to a live, field-tested platform.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Asset Management Directors, Infrastructure Operations leaders, and Facilities or Utilities executives accountable for asset reliability and maintenance cost",
    industryRelevance:
      "Utilities, transport authorities, energy operators, real estate portfolio managers, and asset-intensive industrial operators where asset reliability and regulatory compliance are operational priorities",
    features: [
      "EAM and field management platform configuration against approved asset lifecycle, maintenance, and job scheduling workflows",
      "End-to-end integration testing with GIS, sensor networks, finance systems, and regulatory reporting platforms",
      "Field technician and supervisor acceptance testing across all in-scope asset classes and work order types",
      "Hypercare period covering field issue resolution and adoption support in the first weeks of live operation",
    ],
    tags: ["asset-management", "infrastructure", "maintenance-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces unplanned asset failures through predictive maintenance, improves field productivity through better work order management, and provides asset leaders with the reliability data needed to plan capital investment accurately.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 165,
    slug: "165",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "Infrastructure Operations (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy validated AI capabilities for predictive asset failure, condition-based maintenance, and field route optimisation into your live infrastructure operations environment, with real-time monitoring, engineer override controls, and a governance handover that keeps your operations team in control.",
    positioning:
      "Put AI-powered asset reliability and field optimisation capabilities into production with the oversight and audit controls your operations leadership requires.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Asset Management Directors, Infrastructure Operations leaders, and Facilities or Utilities executives accountable for asset reliability and maintenance cost",
    industryRelevance:
      "Utilities, transport authorities, energy operators, real estate portfolio managers, and asset-intensive industrial operators where asset reliability and regulatory compliance are operational priorities",
    features: [
      "Governed model deployment for approved use cases including predictive failure and condition-based maintenance scheduling",
      "Portfolio-level dashboards tracking model accuracy, maintenance prediction hit rates, and field productivity impact",
      "Engineer and technician override workflows embedded in EAM and field management tools",
      "Operations team enablement on model behaviour, retraining triggers, and quarterly performance review",
    ],
    tags: ["infrastructure-ai", "asset-management", "predictive-maintenance"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces unplanned asset failures through predictive maintenance, improves field productivity through better work order management, and provides asset leaders with the reliability data needed to plan capital investment accurately.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 166,
    slug: "166",
    collection: "operations",
    serviceType: "manage",
    standardName: "Infrastructure Operations (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your infrastructure operations platform and asset performance metrics running reliably: SLA-backed system operations, monthly asset health and maintenance reporting, and ongoing optimisation as your asset portfolio and regulatory requirements evolve.",
    positioning:
      "Ongoing management of your infrastructure operations platform so asset visibility, maintenance scheduling, and field coordination never degrade.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Asset Management Directors, Infrastructure Operations leaders, and Facilities or Utilities executives accountable for asset reliability and maintenance cost",
    industryRelevance:
      "Utilities, transport authorities, energy operators, real estate portfolio managers, and asset-intensive industrial operators where asset reliability and regulatory compliance are operational priorities",
    features: [
      "Monthly asset health and maintenance performance reports with reliability trend analysis",
      "Proactive platform monitoring with incident response within agreed SLA windows",
      "Configuration updates as asset portfolios, maintenance standards, or regulatory requirements change",
      "Quarterly optimisation reviews identifying reliability improvement and field productivity opportunities",
    ],
    tags: ["asset-management", "infrastructure", "managed-service"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces unplanned asset failures through predictive maintenance, improves field productivity through better work order management, and provides asset leaders with the reliability data needed to plan capital investment accurately.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 167,
    slug: "167",
    collection: "operations",
    serviceType: "advisory",
    standardName: "Government Operations (High-Impact) - Assess",
    remixName: {},
    description:
      "Identify where your government operations and citizen services are creating processing backlogs, transparency gaps, or cross-agency coordination failures. The DigitalQatalyst team assesses operational maturity and returns a prioritised roadmap your programme leaders can act on.",
    positioning:
      "A structured assessment that reveals where government operational gaps reduce citizen service quality and what to address first.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Digital Government Directors, Ministry CIOs, Agency Operations leaders, and Transformation Secretaries accountable for public service delivery",
    industryRelevance:
      "National and local government ministries, regulatory agencies, public authorities, and publicly funded service organisations transforming citizen-facing or internal government operations",
    features: [
      "Citizen service delivery review: end-to-end process mapping, touchpoint analysis, and waiting time measurement",
      "Cross-agency coordination audit covering data sharing, referral workflows, and information handoff accuracy",
      "Back-office processing efficiency review: approval queues, manual steps, and regulatory compliance controls",
      "Prioritised improvement roadmap with effort estimates and expected service quality and efficiency impact",
    ],
    tags: ["digital-government", "citizen-services", "public-sector"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves citizen service speed and accessibility, reduces case processing backlogs through automation, and provides public sector leaders with the operational transparency expected by oversight bodies and the public.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 168,
    slug: "168",
    collection: "operations",
    serviceType: "design",
    standardName: "Government Operations (High-Impact) - Design",
    remixName: {},
    description:
      "Turn government operations and citizen service improvement goals into a complete, build-ready blueprint: service journey designs, back-office workflow specifications, cross-agency integration patterns, and an adoption plan your delivery teams can execute within public sector governance.",
    positioning:
      "A design engagement that produces government operations and citizen service specifications ready for platform configuration and delivery.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Digital Government Directors, Ministry CIOs, Agency Operations leaders, and Transformation Secretaries accountable for public service delivery",
    industryRelevance:
      "National and local government ministries, regulatory agencies, public authorities, and publicly funded service organisations transforming citizen-facing or internal government operations",
    features: [
      "Citizen journey design across all in-scope services: application, processing, notification, and appeals flows",
      "Back-office workflow specification covering approvals, case management, compliance checks, and audit trails",
      "Cross-agency data sharing and referral workflow design with privacy and regulatory compliance built in",
      "Public sector adoption plan covering staff training, phased rollout, and accessibility compliance requirements",
    ],
    tags: ["digital-government", "citizen-services", "public-sector"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves citizen service speed and accessibility, reduces case processing backlogs through automation, and provides public sector leaders with the operational transparency expected by oversight bodies and the public.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 169,
    slug: "169",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "Government Operations (High-Impact) - AI Design",
    remixName: {},
    description:
      "Validate where AI can improve government service processing speed, decision support, and cross-agency coordination before committing build budget. The DigitalQatalyst team designs responsible, audit-ready AI workflows and deployment-ready specifications that meet public sector accountability requirements.",
    positioning:
      "Define and validate the AI use cases that will improve citizen service quality and processing efficiency, with responsible design and public sector accountability built in.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Digital Government Directors, Ministry CIOs, Agency Operations leaders, and Transformation Secretaries accountable for public service delivery",
    industryRelevance:
      "National and local government ministries, regulatory agencies, public authorities, and publicly funded service organisations transforming citizen-facing or internal government operations",
    features: [
      "AI use-case evaluation: automated eligibility checking, document classification, processing queue prioritisation, and risk-based compliance flagging",
      "Data readiness assessment covering case management records, document stores, and inter-agency data sharing agreements",
      "Responsible AI workflow design with case officer review gates, explainability requirements, and citizen appeal rights preserved",
      "Deployment specification aligned to public sector AI policy, including bias testing, audit logging, and accountability assignment",
    ],
    tags: ["digital-government", "government-ai", "citizen-services"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves citizen service speed and accessibility, reduces case processing backlogs through automation, and provides public sector leaders with the operational transparency expected by oversight bodies and the public.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 170,
    slug: "170",
    collection: "operations",
    serviceType: "deploy",
    standardName: "Government Operations (High-Impact) - Implementation",
    remixName: {},
    description:
      "Configure, integrate, and launch your government operations and citizen service platform with structured testing across service delivery, back-office, and cross-agency workflows, and a controlled handover that leaves your programme team ready to operate within public sector governance.",
    positioning:
      "A managed deployment that takes your government operations blueprint from specification to a live, tested platform that meets public sector delivery and compliance requirements.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Digital Government Directors, Ministry CIOs, Agency Operations leaders, and Transformation Secretaries accountable for public service delivery",
    industryRelevance:
      "National and local government ministries, regulatory agencies, public authorities, and publicly funded service organisations transforming citizen-facing or internal government operations",
    features: [
      "Citizen service platform configuration against approved service journeys, back-office workflows, and compliance controls",
      "End-to-end integration testing with case management, document management, identity, and cross-agency data sharing systems",
      "Staff acceptance testing across all in-scope service lines with accessibility and compliance validation included",
      "Hypercare period covering service issue resolution and staff support in the first weeks of live operation",
    ],
    tags: ["digital-government", "citizen-services", "public-sector"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves citizen service speed and accessibility, reduces case processing backlogs through automation, and provides public sector leaders with the operational transparency expected by oversight bodies and the public.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 171,
    slug: "171",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "Government Operations (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "Deploy validated AI capabilities for eligibility checking, document classification, and case prioritisation into your live government operations environment, with monitoring, case officer override controls, and a governance handover that maintains public accountability from day one.",
    positioning:
      "Put AI-powered government service processing into production with the accountability controls, explainability, and citizen appeal rights your public sector obligations require.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Digital Government Directors, Ministry CIOs, Agency Operations leaders, and Transformation Secretaries accountable for public service delivery",
    industryRelevance:
      "National and local government ministries, regulatory agencies, public authorities, and publicly funded service organisations transforming citizen-facing or internal government operations",
    features: [
      "Governed model deployment for approved use cases including automated eligibility pre-screening and document classification",
      "Service-level monitoring dashboards tracking model accuracy, case officer override rates, and processing time impact",
      "Case officer review workflows and override mechanisms embedded in existing case management tools",
      "Programme team enablement on model behaviour, bias monitoring, and quarterly accountability review",
    ],
    tags: ["digital-government", "government-ai", "citizen-services"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves citizen service speed and accessibility, reduces case processing backlogs through automation, and provides public sector leaders with the operational transparency expected by oversight bodies and the public.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 172,
    slug: "172",
    collection: "operations",
    serviceType: "manage",
    standardName: "Government Operations (High-Impact) - Managed Service",
    remixName: {},
    description:
      "Keep your government operations and citizen service platform running reliably within public sector governance: SLA-backed system operations, monthly service performance reporting, and ongoing optimisation as policy requirements and citizen demand evolve.",
    positioning:
      "Ongoing management of your government operations platform so citizen service quality, processing efficiency, and compliance controls never degrade.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Digital Government Directors, Ministry CIOs, Agency Operations leaders, and Transformation Secretaries accountable for public service delivery",
    industryRelevance:
      "National and local government ministries, regulatory agencies, public authorities, and publicly funded service organisations transforming citizen-facing or internal government operations",
    features: [
      "Monthly service performance reports covering processing times, case backlogs, error rates, and compliance control status",
      "Proactive platform monitoring with incident response within agreed SLA windows appropriate for public services",
      "Configuration updates as policy changes, legislation amendments, or new services require platform adjustment",
      "Quarterly optimisation reviews identifying processing efficiency improvements and technical debt reduction opportunities",
    ],
    tags: ["digital-government", "citizen-services", "managed-service"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves citizen service speed and accessibility, reduces case processing backlogs through automation, and provides public sector leaders with the operational transparency expected by oversight bodies and the public.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 173,
    slug: "173",
    collection: "operations",
    serviceType: "advisory",
    standardName: "Hospitality Operations (High-Impact) - Assess",
    remixName: {},
    description:
      "A structured assessment of your hotel, resort, or venue operations that surfaces the friction points costing you guest satisfaction, staff hours, and revenue, and returns a prioritised roadmap your leadership team can act on.",
    positioning:
      "Find the operational gaps that are holding back guest experience, then prioritise the fixes with the greatest return.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Hotel General Managers, Heads of Operations, Revenue Directors, and Guest Experience leaders accountable for occupancy, RevPAR, and guest satisfaction",
    industryRelevance:
      "Hotels, resorts, serviced residences, venue operators, and tourism businesses where guest experience quality and revenue optimisation are both operational and commercial priorities",
    features: [
      "Guest-journey friction audit covering front-of-house, housekeeping, F&B, and reservations",
      "Staff coordination review identifying handoff failures and scheduling inefficiencies",
      "Technology coverage gap analysis across your PMS, POS, and guest-communication tools",
      "Prioritised recommendations scored by guest-experience impact and delivery effort",
    ],
    tags: ["guest-experience", "hospitality-operations", "operational-assessment"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves guest satisfaction scores through faster, more personalised service, increases RevPAR through AI-driven pricing and upsell, and reduces operational coordination effort across housekeeping, F&B, and front office.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 174,
    slug: "174",
    collection: "operations",
    serviceType: "design",
    standardName: "Hospitality Operations (High-Impact) - Design",
    remixName: {},
    description:
      "A design engagement that translates your hospitality operations goals into guest-centred service blueprints, workflow specifications, and technology integration plans your delivery teams can build and launch from.",
    positioning:
      "Turn operational ambitions into a build-ready hospitality service blueprint, from guest journeys to system integrations.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Hotel General Managers, Heads of Operations, Revenue Directors, and Guest Experience leaders accountable for occupancy, RevPAR, and guest satisfaction",
    industryRelevance:
      "Hotels, resorts, serviced residences, venue operators, and tourism businesses where guest experience quality and revenue optimisation are both operational and commercial priorities",
    features: [
      "End-to-end guest service journey design covering arrival, stay, and departure touchpoints",
      "Staff workflow and handoff specifications that reduce coordination failures across departments",
      "PMS, POS, and guest-communication integration architecture with data-flow diagrams",
      "Adoption and change plan covering training, role-specific guides, and go-live communication",
    ],
    tags: ["service-design", "guest-journey", "hospitality-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves guest satisfaction scores through faster, more personalised service, increases RevPAR through AI-driven pricing and upsell, and reduces operational coordination effort across housekeeping, F&B, and front office.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 175,
    slug: "175",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "Hospitality Operations (High-Impact) - AI Design",
    remixName: {},
    description:
      "A focused AI design engagement that validates which AI use cases will genuinely improve hospitality operations, defines responsible workflows, and produces deployment-ready specifications before any build investment is committed.",
    positioning:
      "Design AI capabilities for hospitality with validated use cases, clear data requirements, and governance guardrails already built in.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Hotel General Managers, Heads of Operations, Revenue Directors, and Guest Experience leaders accountable for occupancy, RevPAR, and guest satisfaction",
    industryRelevance:
      "Hotels, resorts, serviced residences, venue operators, and tourism businesses where guest experience quality and revenue optimisation are both operational and commercial priorities",
    features: [
      "AI use-case validation against real guest-experience and operational data, not theoretical potential",
      "Responsible workflow design specifying human-oversight points, escalation paths, and model boundaries",
      "Data readiness assessment covering guest profiles, booking history, and operational signals required for each use case",
      "Deployment-ready AI specifications including model selection rationale, integration points, and monitoring requirements",
    ],
    tags: ["ai-design", "responsible-ai", "hospitality-technology"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves guest satisfaction scores through faster, more personalised service, increases RevPAR through AI-driven pricing and upsell, and reduces operational coordination effort across housekeeping, F&B, and front office.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 176,
    slug: "176",
    collection: "operations",
    serviceType: "deploy",
    standardName: "Hospitality Operations (High-Impact) - Implementation",
    remixName: {},
    description:
      "A managed deployment that configures, integrates, tests, and launches your hospitality operations platform capabilities, with structured quality assurance and a formal handover to your operations team.",
    positioning:
      "Bring your hospitality operations blueprint to life through a managed build, integration, and launch with a tested handover.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Hotel General Managers, Heads of Operations, Revenue Directors, and Guest Experience leaders accountable for occupancy, RevPAR, and guest satisfaction",
    industryRelevance:
      "Hotels, resorts, serviced residences, venue operators, and tourism businesses where guest experience quality and revenue optimisation are both operational and commercial priorities",
    features: [
      "Configured PMS, POS, and guest-communication platform setup aligned to your approved service design",
      "End-to-end integration testing across booking, housekeeping, F&B, and front-desk workflows",
      "Staff acceptance testing programme with department-specific scenarios and sign-off gates",
      "Structured go-live with hypercare support and a confirmed operational handover to your team",
    ],
    tags: ["deployment", "hospitality-technology", "platform-launch"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves guest satisfaction scores through faster, more personalised service, increases RevPAR through AI-driven pricing and upsell, and reduces operational coordination effort across housekeeping, F&B, and front office.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 177,
    slug: "177",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "Hospitality Operations (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "A governed AI deployment that puts validated hospitality AI capabilities into production with integrated monitoring, safety controls, staff enablement, and a formal operational handover.",
    positioning:
      "Launch AI-enabled hospitality operations with monitoring, guardrails, and staff confidence built in before the first live guest interaction.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Hotel General Managers, Heads of Operations, Revenue Directors, and Guest Experience leaders accountable for occupancy, RevPAR, and guest satisfaction",
    industryRelevance:
      "Hotels, resorts, serviced residences, venue operators, and tourism businesses where guest experience quality and revenue optimisation are both operational and commercial priorities",
    features: [
      "Production deployment of validated AI features across personalisation, scheduling, and guest communication workflows",
      "Real-time monitoring dashboards tracking model accuracy, guest-experience signals, and operational KPIs",
      "Safety and override controls ensuring staff can review, correct, or override AI outputs at any step",
      "Staff AI literacy programme covering how each model works, when to trust it, and how to escalate",
    ],
    tags: ["ai-deployment", "responsible-ai", "hospitality-technology"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves guest satisfaction scores through faster, more personalised service, increases RevPAR through AI-driven pricing and upsell, and reduces operational coordination effort across housekeeping, F&B, and front office.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 178,
    slug: "178",
    collection: "operations",
    serviceType: "manage",
    standardName: "Hospitality Operations (High-Impact) - Managed Service",
    remixName: {},
    description:
      "An ongoing managed service that runs and continuously improves your hospitality operations platform, with SLA-backed monitoring, monthly performance reporting, and proactive optimisation by the DigitalQatalyst team.",
    positioning:
      "Keep hospitality operations performing at their best with continuous monitoring, expert optimisation, and a team who knows your property.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Hotel General Managers, Heads of Operations, Revenue Directors, and Guest Experience leaders accountable for occupancy, RevPAR, and guest satisfaction",
    industryRelevance:
      "Hotels, resorts, serviced residences, venue operators, and tourism businesses where guest experience quality and revenue optimisation are both operational and commercial priorities",
    features: [
      "SLA-backed monitoring of PMS, POS, and guest-communication platforms with defined response and resolution times",
      "Monthly operational performance reviews covering guest satisfaction, system uptime, and throughput metrics",
      "Proactive optimisation cycles adjusting workflows, configurations, and integrations as your operation evolves",
      "Named service team with hospitality-sector knowledge providing continuity across every engagement",
    ],
    tags: ["managed-service", "hospitality-operations", "continuous-optimisation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves guest satisfaction scores through faster, more personalised service, increases RevPAR through AI-driven pricing and upsell, and reduces operational coordination effort across housekeeping, F&B, and front office.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 179,
    slug: "179",
    collection: "operations",
    serviceType: "advisory",
    standardName: "Retail Operations (High-Impact) - Assess",
    remixName: {},
    description:
      "A targeted assessment of your retail and omnichannel operations that identifies the gaps in store productivity, inventory visibility, and sales execution that are costing you revenue and customer loyalty.",
    positioning:
      "Understand exactly where your retail operations fall short, and walk away with a prioritised action plan your store and commerce leaders can execute.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Chief Retail Officers, Heads of Commerce, Store Operations Directors, and Supply Chain leaders accountable for sales performance and stock accuracy",
    industryRelevance:
      "Physical and omnichannel retailers, grocery operators, fashion and lifestyle brands, and marketplace businesses where inventory accuracy and customer engagement are critical to trading performance",
    features: [
      "Omnichannel customer journey audit covering in-store, online, click-and-collect, and returns flows",
      "Inventory visibility gap analysis across warehouses, stores, and digital channels",
      "Store productivity review examining task management, staff scheduling, and service standards",
      "Prioritised improvement register scored by revenue impact, customer-experience uplift, and delivery effort",
    ],
    tags: ["retail-operations", "omnichannel", "store-productivity"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces stock-outs and overstock positions through AI-driven replenishment, improves conversion through better promotion targeting, and gives retail leaders the real-time trading visibility to respond to demand shifts quickly.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 180,
    slug: "180",
    collection: "operations",
    serviceType: "design",
    standardName: "Retail Operations (High-Impact) - Design",
    remixName: {},
    description:
      "A design engagement that converts your retail operations objectives into customer-centred journey designs, inventory workflow specifications, and technology integration blueprints your implementation teams can build and release.",
    positioning:
      "Design the retail operations blueprint your teams need: customer journeys, inventory workflows, and system integrations ready for build.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Chief Retail Officers, Heads of Commerce, Store Operations Directors, and Supply Chain leaders accountable for sales performance and stock accuracy",
    industryRelevance:
      "Physical and omnichannel retailers, grocery operators, fashion and lifestyle brands, and marketplace businesses where inventory accuracy and customer engagement are critical to trading performance",
    features: [
      "Omnichannel customer journey designs covering browse, purchase, fulfilment, and return experiences",
      "Inventory and order management workflow specifications reducing stock inaccuracies and fulfilment delays",
      "POS, OMS, and WMS integration architecture aligned to your existing technology estate",
      "Store and digital adoption plan with role-specific training outlines and a go-live communication schedule",
    ],
    tags: ["retail-design", "omnichannel", "inventory-management"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces stock-outs and overstock positions through AI-driven replenishment, improves conversion through better promotion targeting, and gives retail leaders the real-time trading visibility to respond to demand shifts quickly.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 181,
    slug: "181",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "Retail Operations (High-Impact) - AI Design",
    remixName: {},
    description:
      "A retail-focused AI design engagement that validates which AI use cases will genuinely improve sales execution, inventory accuracy, and customer engagement, producing responsible workflow designs and build-ready specifications before any development begins.",
    positioning:
      "Design AI for retail with evidence-backed use cases, clean data requirements, and responsible-AI guardrails agreed before a line of code is written.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Chief Retail Officers, Heads of Commerce, Store Operations Directors, and Supply Chain leaders accountable for sales performance and stock accuracy",
    industryRelevance:
      "Physical and omnichannel retailers, grocery operators, fashion and lifestyle brands, and marketplace businesses where inventory accuracy and customer engagement are critical to trading performance",
    features: [
      "AI use-case scoring for retail: demand forecasting, personalisation, markdown optimisation, and loss-prevention ranked by data readiness and commercial value",
      "Responsible workflow design specifying human-review checkpoints, pricing override controls, and model-boundary documentation",
      "Retail data readiness assessment covering transactional, behavioural, and inventory data required for each validated use case",
      "Deployment-ready AI specifications with model selection rationale, integration points, and monitoring metrics for approved use cases",
    ],
    tags: ["ai-design", "retail-ai", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces stock-outs and overstock positions through AI-driven replenishment, improves conversion through better promotion targeting, and gives retail leaders the real-time trading visibility to respond to demand shifts quickly.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 182,
    slug: "182",
    collection: "operations",
    serviceType: "deploy",
    standardName: "Retail Operations (High-Impact) - Implementation",
    remixName: {},
    description:
      "A managed retail operations deployment that configures, integrates, tests, and launches your omnichannel commerce platform capabilities, with structured quality assurance and a formal handover to your store and digital operations teams.",
    positioning:
      "Launch retail operations improvements across store and digital channels with a tested build, structured rollout, and confirmed team handover.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Chief Retail Officers, Heads of Commerce, Store Operations Directors, and Supply Chain leaders accountable for sales performance and stock accuracy",
    industryRelevance:
      "Physical and omnichannel retailers, grocery operators, fashion and lifestyle brands, and marketplace businesses where inventory accuracy and customer engagement are critical to trading performance",
    features: [
      "Configured POS, OMS, and WMS platform setup aligned to your approved omnichannel design",
      "End-to-end integration testing across in-store, online, and fulfilment workflows before any live customer traffic",
      "Store and digital team acceptance testing with channel-specific scenarios and formal sign-off gates",
      "Phased go-live by channel or store format, with hypercare support during the critical first weeks of operation",
    ],
    tags: ["deployment", "retail-technology", "omnichannel-launch"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces stock-outs and overstock positions through AI-driven replenishment, improves conversion through better promotion targeting, and gives retail leaders the real-time trading visibility to respond to demand shifts quickly.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 183,
    slug: "183",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "Retail Operations (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "A governed AI deployment that puts validated retail AI capabilities into production with integrated monitoring, merchandising-safe override controls, and a formal handover to your retail operations and technology teams.",
    positioning:
      "Activate retail AI in a controlled, monitored way that protects pricing integrity, inventory accuracy, and customer trust from launch day.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Chief Retail Officers, Heads of Commerce, Store Operations Directors, and Supply Chain leaders accountable for sales performance and stock accuracy",
    industryRelevance:
      "Physical and omnichannel retailers, grocery operators, fashion and lifestyle brands, and marketplace businesses where inventory accuracy and customer engagement are critical to trading performance",
    features: [
      "Production deployment of validated retail AI features: demand forecasting, personalisation, and markdown optimisation",
      "Real-time monitoring dashboards tracking model accuracy, inventory impact, and revenue signals across channels",
      "Merchandising override controls ensuring commercial teams can adjust or veto AI pricing and markdown recommendations",
      "Retail staff AI literacy programme covering model purpose, confidence thresholds, and escalation procedures",
    ],
    tags: ["ai-deployment", "retail-ai", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces stock-outs and overstock positions through AI-driven replenishment, improves conversion through better promotion targeting, and gives retail leaders the real-time trading visibility to respond to demand shifts quickly.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 184,
    slug: "184",
    collection: "operations",
    serviceType: "manage",
    standardName: "Retail Operations (High-Impact) - Managed Service",
    remixName: {},
    description:
      "An ongoing managed service that runs and continuously improves your retail operations platform, with SLA-backed monitoring, monthly performance reporting across store and digital channels, and proactive optimisation by the DigitalQatalyst team.",
    positioning:
      "Keep retail operations and omnichannel commerce performing reliably with continuous monitoring, proactive optimisation, and monthly commercial performance reporting.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Chief Retail Officers, Heads of Commerce, Store Operations Directors, and Supply Chain leaders accountable for sales performance and stock accuracy",
    industryRelevance:
      "Physical and omnichannel retailers, grocery operators, fashion and lifestyle brands, and marketplace businesses where inventory accuracy and customer engagement are critical to trading performance",
    features: [
      "SLA-backed monitoring of POS, OMS, and WMS platforms with defined response and resolution times across store and digital environments",
      "Monthly omnichannel performance reviews covering conversion, fulfilment accuracy, inventory availability, and system uptime",
      "Proactive optimisation cycles adjusting workflows, integrations, and configurations as your retail operation evolves",
      "Named retail-sector service team providing continuity and commercial context in every engagement",
    ],
    tags: ["managed-service", "retail-operations", "omnichannel"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces stock-outs and overstock positions through AI-driven replenishment, improves conversion through better promotion targeting, and gives retail leaders the real-time trading visibility to respond to demand shifts quickly.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 185,
    slug: "185",
    collection: "operations",
    serviceType: "advisory",
    standardName: "Service Operations (High-Impact) - Assess",
    remixName: {},
    description:
      "A structured assessment of your service, field, or professional operations that identifies the scheduling failures, delivery bottlenecks, and quality gaps reducing throughput and customer satisfaction, and returns a prioritised improvement roadmap.",
    positioning:
      "Get a clear picture of where your service operations underperform, with every recommendation ranked by throughput impact and delivery effort.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Service Operations Directors, Field Service Managers, and Customer Experience leaders accountable for service delivery quality and operational cost",
    industryRelevance:
      "Field service organisations, maintenance and repair providers, professional services firms, facilities management companies, and any organisation where technician scheduling and on-site service quality affect customer retention",
    features: [
      "Service delivery throughput analysis covering job completion rates, rework frequency, and first-visit resolution",
      "Scheduling and dispatch efficiency review identifying capacity waste, double-booking, and travel-time losses",
      "Customer satisfaction touchpoint audit mapping where the service experience falls short of commitments",
      "Prioritised improvement register with each recommendation scored by impact on throughput, quality, and customer retention",
    ],
    tags: ["service-operations", "field-service", "throughput-optimisation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases first-time fix rates, reduces travel time through AI-optimised scheduling, improves customer satisfaction through proactive communication, and gives service leaders the visibility to manage capacity before SLA breaches occur.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 186,
    slug: "186",
    collection: "operations",
    serviceType: "design",
    standardName: "Service Operations (High-Impact) - Design",
    remixName: {},
    description:
      "A design engagement that turns your service operations improvement goals into job-scheduling blueprints, field workflow specifications, and technology integration plans your delivery teams can implement and go live with.",
    positioning:
      "Design the service operations workflows your teams need: scheduling logic, field processes, and system integrations built for throughput and quality.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Service Operations Directors, Field Service Managers, and Customer Experience leaders accountable for service delivery quality and operational cost",
    industryRelevance:
      "Field service organisations, maintenance and repair providers, professional services firms, facilities management companies, and any organisation where technician scheduling and on-site service quality affect customer retention",
    features: [
      "Job lifecycle workflow designs covering intake, scheduling, dispatch, execution, and closure with quality checkpoints at each stage",
      "Field service process specifications reducing rework by defining completion standards and sign-off requirements before a job is closed",
      "FSM, CRM, and ERP integration architecture connecting your scheduling, customer, and billing data into a single operational view",
      "Adoption plan with role-specific training outlines for dispatch, field staff, and service managers",
    ],
    tags: ["service-design", "field-service-management", "workflow-design"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases first-time fix rates, reduces travel time through AI-optimised scheduling, improves customer satisfaction through proactive communication, and gives service leaders the visibility to manage capacity before SLA breaches occur.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 187,
    slug: "187",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "Service Operations (High-Impact) - AI Design",
    remixName: {},
    description:
      "A service-operations AI design engagement that validates which AI capabilities will improve scheduling accuracy, first-visit resolution, and service quality prediction, producing responsible workflow designs and build-ready specifications before any development commitment.",
    positioning:
      "Design AI for service operations with validated scheduling and quality use cases, responsible guardrails, and deployment specifications ready before build.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Service Operations Directors, Field Service Managers, and Customer Experience leaders accountable for service delivery quality and operational cost",
    industryRelevance:
      "Field service organisations, maintenance and repair providers, professional services firms, facilities management companies, and any organisation where technician scheduling and on-site service quality affect customer retention",
    features: [
      "AI use-case validation for service operations: predictive scheduling, first-visit-resolution modelling, and service quality forecasting scored by data readiness and throughput value",
      "Responsible dispatch-AI workflow design specifying when human dispatchers retain override authority and how model recommendations are presented",
      "Service data readiness assessment covering job history, technician skills, asset records, and customer data required for each validated use case",
      "Deployment-ready AI specifications with model selection rationale, FSM integration points, and monitoring metrics for approved use cases",
    ],
    tags: ["ai-design", "service-ai", "scheduling-optimisation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases first-time fix rates, reduces travel time through AI-optimised scheduling, improves customer satisfaction through proactive communication, and gives service leaders the visibility to manage capacity before SLA breaches occur.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 188,
    slug: "188",
    collection: "operations",
    serviceType: "deploy",
    standardName: "Service Operations (High-Impact) - Implementation",
    remixName: {},
    description:
      "A managed service operations deployment that configures, integrates, tests, and launches your field service management and scheduling platform capabilities, with structured quality assurance and a formal handover to your service operations team.",
    positioning:
      "Go live with improved service operations tools through a tested, managed build that covers scheduling, dispatch, field workflows, and operations handover.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Service Operations Directors, Field Service Managers, and Customer Experience leaders accountable for service delivery quality and operational cost",
    industryRelevance:
      "Field service organisations, maintenance and repair providers, professional services firms, facilities management companies, and any organisation where technician scheduling and on-site service quality affect customer retention",
    features: [
      "Configured FSM, scheduling, and mobile field-application setup aligned to your approved workflow designs",
      "End-to-end integration testing across job intake, dispatch, field execution, and billing closure workflows",
      "Dispatcher and field-staff acceptance testing with job-type-specific scenarios and formal sign-off gates",
      "Controlled go-live with hypercare monitoring and a confirmed operational handover to your service management team",
    ],
    tags: ["deployment", "field-service-management", "service-technology"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases first-time fix rates, reduces travel time through AI-optimised scheduling, improves customer satisfaction through proactive communication, and gives service leaders the visibility to manage capacity before SLA breaches occur.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 189,
    slug: "189",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "Service Operations (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "A governed AI deployment that activates validated service operations AI capabilities in production, with integrated monitoring, dispatcher safety controls, and a formal handover to your service operations and technology teams.",
    positioning:
      "Put scheduling AI and service quality models into live production with monitoring, dispatcher overrides, and governance built in from activation.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Service Operations Directors, Field Service Managers, and Customer Experience leaders accountable for service delivery quality and operational cost",
    industryRelevance:
      "Field service organisations, maintenance and repair providers, professional services firms, facilities management companies, and any organisation where technician scheduling and on-site service quality affect customer retention",
    features: [
      "Production deployment of validated service AI features: predictive scheduling, first-visit-resolution modelling, and asset failure prediction",
      "Real-time monitoring dashboards tracking scheduling accuracy, first-visit resolution rates, and model recommendation uptake",
      "Dispatcher override controls ensuring scheduling teams can adjust or reject AI job assignments at any point",
      "Service team AI literacy programme covering model purpose, confidence thresholds, and escalation procedures for field and dispatch staff",
    ],
    tags: ["ai-deployment", "service-ai", "scheduling-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases first-time fix rates, reduces travel time through AI-optimised scheduling, improves customer satisfaction through proactive communication, and gives service leaders the visibility to manage capacity before SLA breaches occur.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 190,
    slug: "190",
    collection: "operations",
    serviceType: "manage",
    standardName: "Service Operations (High-Impact) - Managed Service",
    remixName: {},
    description:
      "An ongoing managed service that runs and continuously improves your service operations platform, with SLA-backed monitoring, monthly performance reporting across scheduling and field delivery, and proactive optimisation by the DigitalQatalyst team.",
    positioning:
      "Keep service operations performing at throughput targets with continuous monitoring, proactive scheduling optimisation, and monthly operational reporting.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Service Operations Directors, Field Service Managers, and Customer Experience leaders accountable for service delivery quality and operational cost",
    industryRelevance:
      "Field service organisations, maintenance and repair providers, professional services firms, facilities management companies, and any organisation where technician scheduling and on-site service quality affect customer retention",
    features: [
      "SLA-backed monitoring of FSM, scheduling, and mobile field platforms with defined response and resolution times",
      "Monthly performance reviews covering job completion rates, first-visit resolution, scheduling utilisation, and customer satisfaction",
      "Proactive optimisation cycles adjusting scheduling logic, workflow configurations, and integrations as your service operation evolves",
      "Named service-operations service team with field-sector knowledge providing continuity across every review cycle",
    ],
    tags: ["managed-service", "service-operations", "field-service-management"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases first-time fix rates, reduces travel time through AI-optimised scheduling, improves customer satisfaction through proactive communication, and gives service leaders the visibility to manage capacity before SLA breaches occur.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 191,
    slug: "191",
    collection: "operations",
    serviceType: "advisory",
    standardName: "Logistics Operations (High-Impact) - Assess",
    remixName: {},
    description:
      "A structured assessment of your logistics and supply chain operations that identifies the fulfilment inaccuracies, visibility gaps, and asset utilisation losses reducing delivery performance, and returns a prioritised improvement roadmap your supply chain leaders can act on.",
    positioning:
      "Pinpoint the logistics and supply chain gaps costing you fulfilment accuracy, delivery visibility, and asset utilisation, with every recommendation ranked for impact.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Supply Chain Directors, Heads of Logistics, Fulfilment Operations leaders, and COOs accountable for delivery performance and logistics cost",
    industryRelevance:
      "3PL providers, e-commerce fulfilment operators, distributors, manufacturers with outbound logistics operations, and importers where delivery performance and inventory accuracy are competitive differentiators",
    features: [
      "Fulfilment accuracy audit covering pick, pack, despatch, and last-mile delivery failure rates and root causes",
      "Supply chain visibility gap analysis identifying where order, stock, and carrier data breaks down across the network",
      "Asset and fleet utilisation review exposing idle time, underloaded routes, and capacity waste",
      "Prioritised improvement register scored by fulfilment-accuracy, cost-reduction, and delivery-performance impact",
    ],
    tags: ["logistics-operations", "supply-chain", "fulfilment-accuracy"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves on-time delivery rates, reduces per-shipment cost through AI-optimised routing, and gives logistics leaders the real-time network visibility needed to intervene before delays become customer complaints.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 192,
    slug: "192",
    collection: "operations",
    serviceType: "design",
    standardName: "Logistics Operations (High-Impact) - Design",
    remixName: {},
    description:
      "A logistics design engagement that converts your supply chain improvement objectives into fulfilment workflow blueprints, carrier integration specifications, and warehouse technology architectures your delivery teams can implement and launch.",
    positioning:
      "Design the logistics operations blueprint you need: fulfilment workflows, carrier integrations, and warehouse technology ready for build.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Supply Chain Directors, Heads of Logistics, Fulfilment Operations leaders, and COOs accountable for delivery performance and logistics cost",
    industryRelevance:
      "3PL providers, e-commerce fulfilment operators, distributors, manufacturers with outbound logistics operations, and importers where delivery performance and inventory accuracy are competitive differentiators",
    features: [
      "Fulfilment workflow designs covering inbound, storage, pick and pack, despatch, and returns with throughput and accuracy checkpoints at each stage",
      "Carrier and last-mile integration architecture connecting your WMS, TMS, and carrier APIs into a real-time delivery visibility layer",
      "Warehouse layout and technology specifications for scanning, slotting, and automation aligned to your throughput targets",
      "Adoption plan with role-specific training outlines for warehouse, transport, and planning teams",
    ],
    tags: ["logistics-design", "supply-chain", "warehouse-management"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves on-time delivery rates, reduces per-shipment cost through AI-optimised routing, and gives logistics leaders the real-time network visibility needed to intervene before delays become customer complaints.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 193,
    slug: "193",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "Logistics Operations (High-Impact) - AI Design",
    remixName: {},
    description:
      "A logistics-focused AI design engagement that validates which AI capabilities will genuinely improve demand forecasting, route optimisation, and fulfilment planning, producing responsible workflow designs and build-ready specifications before any development investment is committed.",
    positioning:
      "Design logistics AI with validated forecasting and routing use cases, clean data requirements, and responsible guardrails defined before build begins.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Supply Chain Directors, Heads of Logistics, Fulfilment Operations leaders, and COOs accountable for delivery performance and logistics cost",
    industryRelevance:
      "3PL providers, e-commerce fulfilment operators, distributors, manufacturers with outbound logistics operations, and importers where delivery performance and inventory accuracy are competitive differentiators",
    features: [
      "AI use-case validation for logistics: demand forecasting, dynamic route optimisation, predictive inventory replenishment, and carrier performance scoring ranked by data readiness and network value",
      "Responsible logistics AI workflow design specifying when planners retain override authority over AI routing and replenishment recommendations",
      "Logistics data readiness assessment covering order history, carrier, fleet, and inventory data required for each validated use case",
      "Deployment-ready AI specifications with model selection rationale, WMS and TMS integration points, and monitoring metrics",
    ],
    tags: ["ai-design", "logistics-ai", "route-optimisation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves on-time delivery rates, reduces per-shipment cost through AI-optimised routing, and gives logistics leaders the real-time network visibility needed to intervene before delays become customer complaints.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 194,
    slug: "194",
    collection: "operations",
    serviceType: "deploy",
    standardName: "Logistics Operations (High-Impact) - Implementation",
    remixName: {},
    description:
      "A managed logistics deployment that configures, integrates, tests, and launches your warehouse management and carrier integration capabilities, with structured quality assurance across fulfilment workflows and a formal handover to your logistics operations team.",
    positioning:
      "Go live with improved logistics operations through a tested build that covers WMS configuration, carrier integration, and fulfilment workflow launch.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Supply Chain Directors, Heads of Logistics, Fulfilment Operations leaders, and COOs accountable for delivery performance and logistics cost",
    industryRelevance:
      "3PL providers, e-commerce fulfilment operators, distributors, manufacturers with outbound logistics operations, and importers where delivery performance and inventory accuracy are competitive differentiators",
    features: [
      "Configured WMS and TMS setup aligned to your approved fulfilment workflow designs, including scanning, slotting, and carrier API connections",
      "End-to-end integration testing across inbound, pick and pack, despatch, carrier handoff, and returns workflows before any live inventory traffic",
      "Warehouse and planning team acceptance testing with fulfilment-scenario sign-off gates for each operational zone",
      "Controlled go-live with hypercare monitoring and a confirmed operational handover to your logistics management team",
    ],
    tags: ["deployment", "logistics-technology", "warehouse-management"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves on-time delivery rates, reduces per-shipment cost through AI-optimised routing, and gives logistics leaders the real-time network visibility needed to intervene before delays become customer complaints.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 195,
    slug: "195",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "Logistics Operations (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "A governed AI deployment that activates validated logistics AI capabilities in production, with integrated monitoring, planner override controls, and a formal handover to your supply chain operations and technology teams.",
    positioning:
      "Activate demand forecasting and route optimisation AI in a controlled, monitored environment with planner authority and governance built in from day one.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Supply Chain Directors, Heads of Logistics, Fulfilment Operations leaders, and COOs accountable for delivery performance and logistics cost",
    industryRelevance:
      "3PL providers, e-commerce fulfilment operators, distributors, manufacturers with outbound logistics operations, and importers where delivery performance and inventory accuracy are competitive differentiators",
    features: [
      "Production deployment of validated logistics AI features: demand forecasting, dynamic route optimisation, and predictive inventory replenishment",
      "Real-time monitoring dashboards tracking forecast accuracy, route efficiency gains, and fulfilment-cost signals across the network",
      "Planner override controls ensuring supply chain planners can adjust or reject AI routing and replenishment recommendations at any stage",
      "Logistics team AI literacy programme covering model purpose, confidence intervals, and escalation procedures for planning and operations staff",
    ],
    tags: ["ai-deployment", "logistics-ai", "demand-forecasting"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves on-time delivery rates, reduces per-shipment cost through AI-optimised routing, and gives logistics leaders the real-time network visibility needed to intervene before delays become customer complaints.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 196,
    slug: "196",
    collection: "operations",
    serviceType: "manage",
    standardName: "Logistics Operations (High-Impact) - Managed Service",
    remixName: {},
    description:
      "An ongoing managed service that runs and continuously improves your logistics operations platform, with SLA-backed monitoring, monthly performance reporting across fulfilment and carrier delivery, and proactive network optimisation by the DigitalQatalyst team.",
    positioning:
      "Keep logistics and supply chain operations performing at target with continuous monitoring, proactive route and fulfilment optimisation, and monthly network performance reporting.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Supply Chain Directors, Heads of Logistics, Fulfilment Operations leaders, and COOs accountable for delivery performance and logistics cost",
    industryRelevance:
      "3PL providers, e-commerce fulfilment operators, distributors, manufacturers with outbound logistics operations, and importers where delivery performance and inventory accuracy are competitive differentiators",
    features: [
      "SLA-backed monitoring of WMS, TMS, and carrier integration platforms with defined response and resolution times across your fulfilment network",
      "Monthly network performance reviews covering fulfilment accuracy, on-time delivery, carrier performance, and system availability",
      "Proactive optimisation cycles adjusting routing configurations, slotting logic, and carrier integrations as your network evolves",
      "Named logistics-sector service team providing supply chain context and continuity across every monthly review",
    ],
    tags: ["managed-service", "logistics-operations", "supply-chain"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves on-time delivery rates, reduces per-shipment cost through AI-optimised routing, and gives logistics leaders the real-time network visibility needed to intervene before delays become customer complaints.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 197,
    slug: "197",
    collection: "operations",
    serviceType: "advisory",
    standardName: "Wellness Operations (High-Impact) - Assess",
    remixName: {},
    description:
      "A structured assessment of your wellness, clinic, or care operations that identifies the scheduling inefficiencies, care coordination gaps, and service quality issues reducing client experience and operational throughput, and returns a prioritised improvement roadmap.",
    positioning:
      "Understand exactly where your wellness operations fall short on client experience and scheduling efficiency, with every finding ranked for clinical and operational impact.",
    price: "From $1,000",
    duration: "1 Week",
    popularityRank: 100,
    deliveryComplexity: "medium",
    badge: "Advisory",
    audience:
      "Clinic Directors, Wellness Operations leaders, and Practice Managers accountable for client outcomes, retention, and practitioner productivity",
    industryRelevance:
      "Wellness centres, physiotherapy and allied health clinics, preventive health providers, fitness and lifestyle operators, and mental health service organisations",
    features: [
      "Client journey audit mapping the friction points across booking, arrival, session delivery, and follow-up that reduce satisfaction and retention",
      "Scheduling and capacity utilisation review identifying appointment gaps, cancellation patterns, and practitioner underutilisation",
      "Care coordination gap analysis covering communication between practitioners, referral pathways, and client record completeness",
      "Prioritised improvement register scored by client-satisfaction, retention, and operational-efficiency impact",
    ],
    tags: ["wellness-operations", "client-experience", "scheduling-efficiency"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases client retention through personalised engagement, reduces appointment no-show rates through automated reminders, improves practitioner utilisation, and gives practice leaders clear visibility of care quality and operational performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 198,
    slug: "198",
    collection: "operations",
    serviceType: "design",
    standardName: "Wellness Operations (High-Impact) - Design",
    remixName: {},
    description:
      "A design engagement that converts your wellness operations goals into client-centred journey designs, appointment and care coordination workflow specifications, and technology integration blueprints your implementation teams can build and launch.",
    positioning:
      "Design the wellness operations blueprint your practitioners and clients need: booking journeys, care coordination workflows, and platform integrations ready for build.",
    price: "From $2,000",
    duration: "4 Weeks",
    popularityRank: 99,
    deliveryComplexity: "high",
    badge: "Design",
    audience:
      "Clinic Directors, Wellness Operations leaders, and Practice Managers accountable for client outcomes, retention, and practitioner productivity",
    industryRelevance:
      "Wellness centres, physiotherapy and allied health clinics, preventive health providers, fitness and lifestyle operators, and mental health service organisations",
    features: [
      "Client journey designs covering online booking, arrival, session delivery, care plan recording, and post-session follow-up across every touchpoint",
      "Practitioner workflow specifications defining care coordination, record-keeping, referral, and scheduling handoff standards to reduce administrative burden",
      "Practice management system and EHR integration architecture connecting booking, care records, billing, and client communications into a single operational view",
      "Adoption plan with role-specific training outlines for reception, practitioners, and clinic management",
    ],
    tags: ["wellness-design", "client-journey", "practice-management"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases client retention through personalised engagement, reduces appointment no-show rates through automated reminders, improves practitioner utilisation, and gives practice leaders clear visibility of care quality and operational performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 199,
    slug: "199",
    collection: "operations",
    serviceType: "ai_design",
    standardName: "Wellness Operations (High-Impact) - AI Design",
    remixName: {},
    description:
      "A wellness-focused AI design engagement that validates which AI capabilities will genuinely improve appointment scheduling, client retention prediction, and care coordination quality, producing responsible workflow designs and build-ready specifications before any development begins.",
    positioning:
      "Design AI for wellness with validated scheduling and retention use cases, clear data requirements, and clinical governance guardrails defined before build begins.",
    price: "From $1,000",
    duration: "4 Weeks",
    popularityRank: 98,
    deliveryComplexity: "high",
    badge: "Ai Design",
    audience:
      "Clinic Directors, Wellness Operations leaders, and Practice Managers accountable for client outcomes, retention, and practitioner productivity",
    industryRelevance:
      "Wellness centres, physiotherapy and allied health clinics, preventive health providers, fitness and lifestyle operators, and mental health service organisations",
    features: [
      "AI use-case validation for wellness: appointment scheduling optimisation, client dropout prediction, care plan recommendation, and demand forecasting scored by data readiness and clinical value",
      "Responsible wellness AI workflow design specifying where practitioners retain full clinical authority and how AI recommendations are framed as support tools rather than directives",
      "Wellness data readiness assessment covering appointment history, client engagement, care plan, and practitioner data required for each validated use case",
      "Deployment-ready AI specifications with model selection rationale, PMS and EHR integration points, and monitoring metrics for approved use cases",
    ],
    tags: ["ai-design", "wellness-ai", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases client retention through personalised engagement, reduces appointment no-show rates through automated reminders, improves practitioner utilisation, and gives practice leaders clear visibility of care quality and operational performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 200,
    slug: "200",
    collection: "operations",
    serviceType: "deploy",
    standardName: "Wellness Operations (High-Impact) - Implementation",
    remixName: {},
    description:
      "A managed wellness operations deployment that configures, integrates, tests, and launches your practice management and client engagement platform capabilities, with structured quality assurance and a formal handover to your clinic and wellness operations team.",
    positioning:
      "Launch improved wellness operations through a tested build covering practice management configuration, care coordination workflows, and a confirmed team handover.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 97,
    deliveryComplexity: "high",
    badge: "Deploy",
    audience:
      "Clinic Directors, Wellness Operations leaders, and Practice Managers accountable for client outcomes, retention, and practitioner productivity",
    industryRelevance:
      "Wellness centres, physiotherapy and allied health clinics, preventive health providers, fitness and lifestyle operators, and mental health service organisations",
    features: [
      "Configured practice management system and EHR setup aligned to your approved client journey and practitioner workflow designs",
      "End-to-end integration testing across booking, scheduling, care record, billing, and client-communication workflows before any live client interactions",
      "Practitioner and reception team acceptance testing with discipline-specific scenarios and formal sign-off gates",
      "Controlled go-live with hypercare monitoring and a confirmed operational handover to your clinic management team",
    ],
    tags: ["deployment", "wellness-technology", "practice-management"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases client retention through personalised engagement, reduces appointment no-show rates through automated reminders, improves practitioner utilisation, and gives practice leaders clear visibility of care quality and operational performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 201,
    slug: "201",
    collection: "operations",
    serviceType: "ai_deploy",
    standardName: "Wellness Operations (High-Impact) - AI Implementation",
    remixName: {},
    description:
      "A governed AI deployment that activates validated wellness AI capabilities in production, with integrated monitoring, practitioner authority controls, and a formal handover to your clinic operations and technology teams.",
    positioning:
      "Launch scheduling optimisation and client retention AI in a controlled, monitored environment where practitioners retain full clinical authority from activation day.",
    price: "Custom",
    duration: "12 Weeks",
    popularityRank: 96,
    deliveryComplexity: "high",
    badge: "Ai Deploy",
    audience:
      "Clinic Directors, Wellness Operations leaders, and Practice Managers accountable for client outcomes, retention, and practitioner productivity",
    industryRelevance:
      "Wellness centres, physiotherapy and allied health clinics, preventive health providers, fitness and lifestyle operators, and mental health service organisations",
    features: [
      "Production deployment of validated wellness AI features: appointment scheduling optimisation, client dropout prediction, and demand forecasting",
      "Real-time monitoring dashboards tracking scheduling fill rates, client retention signals, and model recommendation uptake across your practice",
      "Practitioner authority controls ensuring clinical staff can review, modify, or reject any AI care-support recommendation at any point",
      "Wellness team AI literacy programme covering model purpose, confidence thresholds, data-privacy commitments, and escalation procedures",
    ],
    tags: ["ai-deployment", "wellness-ai", "responsible-ai"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases client retention through personalised engagement, reduces appointment no-show rates through automated reminders, improves practitioner utilisation, and gives practice leaders clear visibility of care quality and operational performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 202,
    slug: "202",
    collection: "operations",
    serviceType: "manage",
    standardName: "Wellness Operations (High-Impact) - Managed Service",
    remixName: {},
    description:
      "An ongoing managed service that runs and continuously improves your wellness operations platform, with SLA-backed monitoring, monthly performance reporting across scheduling and client experience, and proactive optimisation by the DigitalQatalyst team.",
    positioning:
      "Keep wellness operations and client experience performing consistently with continuous monitoring, proactive scheduling optimisation, and monthly operational reporting.",
    price: "Custom Monthly Plans",
    duration: "Ongoing",
    popularityRank: 95,
    deliveryComplexity: "medium",
    badge: "Managed Service",
    audience:
      "Clinic Directors, Wellness Operations leaders, and Practice Managers accountable for client outcomes, retention, and practitioner productivity",
    industryRelevance:
      "Wellness centres, physiotherapy and allied health clinics, preventive health providers, fitness and lifestyle operators, and mental health service organisations",
    features: [
      "SLA-backed monitoring of your practice management system, EHR, and client-communication platforms with defined response and resolution times",
      "Monthly performance reviews covering appointment fill rates, client retention, care coordination quality, and system availability",
      "Proactive optimisation cycles adjusting scheduling logic, workflow configurations, and platform integrations as your practice evolves",
      "Named wellness-sector service team with clinical operations context providing continuity across every monthly review",
    ],
    tags: ["managed-service", "wellness-operations", "practice-management"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases client retention through personalised engagement, reduces appointment no-show rates through automated reminders, improves practitioner utilisation, and gives practice leaders clear visibility of care quality and operational performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 203,
    slug: "203",
    collection: "experience",
    serviceType: "bundle",
    standardName: "Online Web Presence (High-Impact) - End-to-end bundle",
    remixName: {},
    description: "Take your organisation",
    positioning:
      "One team, one programme, one web presence that converts visitors and keeps improving after go-live.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief Marketing Officers, Heads of Digital, and CX leaders accountable for online revenue and brand",
    industryRelevance:
      "B2B and B2C organisations where the website is a primary channel for lead generation, customer acquisition, or service delivery",
    features: [
      "Continuous team context across Design, AI Design, Deploy, AI Deploy, and Managed stages removes costly re-onboarding between phases",
      "AI-informed content personalisation and journey optimisation built into the architecture from the design stage, not retrofitted later",
      "Unified governance framework means every milestone, change request, and performance metric is tracked in one place throughout the engagement",
      "Post-launch managed service extends the programme investment, applying analytics and optimisation so performance compounds over time",
    ],
    tags: ["bundle", "end-to-end", "web-presence", "digital-experience"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a fully operational, AI-optimised web presence within 24 weeks, with measurable improvement in organic visibility, lead conversion, and digital service completion rates from launch through continuous managed operation.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 204,
    slug: "204",
    collection: "experience",
    serviceType: "bundle",
    standardName: "Online Social Presence (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Build a coordinated social media capability that spans channel strategy, AI-assisted content workflows, platform activation, and ongoing performance management without handing off between separate teams at each stage. The result is a social presence that grows audience, drives engagement, and responds to campaigns with the agility your brand requires.",
    positioning:
      "From social strategy to sustained audience growth, delivered as one programme with no hand-off gaps.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience: "Chief Marketing Officers, Heads of Social and Content, and Communications leaders",
    industryRelevance:
      "Organisations using social channels as a primary route to brand awareness, community engagement, or customer acquisition across B2C, B2B, and public-sector contexts",
    features: [
      "Single design-to-operate team retains full channel strategy context through every stage, eliminating briefing duplication",
      "AI content and scheduling workflows are specified and validated before build, ensuring they integrate cleanly rather than being added as afterthoughts",
      "Cross-stage governance tracks audience KPIs, content velocity, and campaign ROI from the first week through to steady-state managed operations",
      "Managed service stage continuously optimises posting cadence, channel mix, and paid amplification based on live performance data",
    ],
    tags: ["bundle", "end-to-end", "social-media", "content-marketing"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Creates a scalable social capability with consistent content output, measurable audience growth, and AI-optimised campaign activation from launch, sustained through ongoing managed operations.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 205,
    slug: "205",
    collection: "experience",
    serviceType: "bundle",
    standardName: "Mobile Apps & Services (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Design, build, and operate a mobile app capability that serves your customers, employees, or field teams with the reliability and experience quality they expect from day one. The bundle runs from user research through AI feature integration to App Store launch and managed support, with no re-scoping between phases.",
    positioning:
      "A mobile app designed, launched, and operated as one programme so quality is maintained from first sketch to live service.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Digital Product Directors, Heads of Mobile, and Operations leaders accountable for field or customer-facing mobile services",
    industryRelevance:
      "Organisations with mobile-first customer journeys, field workforce apps, or employee self-service tools across retail, logistics, healthcare, and professional services",
    features: [
      "User research and journey design from the bundle's first stage directly shapes the build backlog, preventing costly scope changes mid-development",
      "AI features such as personalisation, predictive search, or smart notifications are validated in the design stage and built to specification in deploy, not bolted on post-launch",
      "A single cross-stage team maintains app architecture context, preventing the technical debt that accumulates when design and build are separated",
      "Managed service stage includes crash monitoring, OS update management, and feature optimisation so the app does not degrade after handover",
    ],
    tags: ["bundle", "end-to-end", "mobile-app", "digital-product"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a production-ready, AI-enhanced mobile app with sustainable managed operations, improving user adoption rates and reducing the post-launch maintenance burden that typically follows separately managed projects.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 206,
    slug: "206",
    collection: "experience",
    serviceType: "bundle",
    standardName: "Physical & Frontline Channels (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Connect your physical locations with digital capabilities that make every in-person interaction faster, better informed, and easier to manage at scale. This bundle takes the solution from service design to deployed hardware integrations to managed operations, with the same team maintaining context at every stage.",
    positioning:
      "Digital capabilities for your physical locations, delivered end-to-end so frontline teams are set up to succeed from the start.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Operations Directors, Heads of Retail or Branch Networks, and Facilities leaders responsible for in-person service performance",
    industryRelevance:
      "Organisations operating branches, retail stores, clinics, service centres, venues, or hospitality environments where physical and digital experience must work together",
    features: [
      "Service design and digital capability blueprints created before hardware procurement, ensuring technology choices fit the real operational environment rather than driving it",
      "AI-assisted queue management, capacity sensing, or staff scheduling specifications validated before deployment, not speculated during build",
      "Unified testing programme covers both physical integration points and digital workflows, catching issues that siloed testing misses",
      "Post-launch managed service monitors device health, customer experience signals, and operational KPIs across all locations in scope",
    ],
    tags: ["bundle", "end-to-end", "physical-channels", "omnichannel"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces queue times, improves staff productivity, and gives operations leaders a real-time view of physical channel performance, sustained through continuous managed operations after launch.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 207,
    slug: "207",
    collection: "experience",
    serviceType: "bundle",
    standardName: "Experience Solutions (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Design and deliver a connected experience ecosystem where customers and employees encounter consistent journeys, content, and personalisation regardless of which channel they use. This bundle builds the capability once, integrates it across touchpoints, and operates it continuously so the experience stays coherent as channels and expectations evolve.",
    positioning:
      "Consistent, personalised experiences across every channel, built as a single programme rather than a patchwork of individual projects.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief Experience Officers, Heads of Digital Product, and Marketing leaders responsible for customer or employee experience strategy",
    industryRelevance:
      "Consumer brands, financial services providers, and large employers where experience consistency across digital, physical, and assisted channels is a competitive differentiator",
    features: [
      "Experience architecture designed across all channels in the first stage, creating a shared journey model that governs every subsequent build decision",
      "Personalisation and AI recommendation specifications are validated before deployment, so the right data pipelines and consent frameworks are in place from go-live",
      "Cross-channel integration testing covers edge cases that single-channel testing always misses, reducing post-launch friction",
      "Managed service tracks experience consistency metrics and runs quarterly optimisation cycles, preventing channel experience drift over time",
    ],
    tags: ["bundle", "end-to-end", "integrated-experience", "personalisation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Produces measurable improvement in journey completion rates, NPS, and channel attribution accuracy, with ongoing managed operations ensuring the experience advantage compounds rather than erodes.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 208,
    slug: "208",
    collection: "experience",
    serviceType: "bundle",
    standardName: "CRM & Customer Relationship (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Replace a fragmented approach to customer relationship management with a fully configured CRM platform that your sales, marketing, and service teams actually use, supported by AI-enhanced workflows and active managed operations that keep data and process quality high long after go-live.",
    positioning:
      "A CRM capability built for adoption and operated for performance, not handed over and left to drift.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief Revenue Officers, Sales Directors, VP of Marketing, and Customer Service leaders accountable for pipeline, revenue, and retention",
    industryRelevance:
      "B2B organisations managing structured sales cycles, B2C businesses with subscription or account models, and service organisations tracking relationship portfolios",
    features: [
      "Process design and CRM data model defined at the start of the bundle ensures platform configuration reflects how your teams actually sell and serve, reducing rework during build",
      "AI lead scoring, opportunity prioritisation, and next-best-action specifications validated before build means AI is embedded in core workflows rather than layered on top",
      "Single team carries CRM knowledge from design through deployment, so business rules captured early are not lost between phases",
      "Managed service includes data quality monitoring, user adoption reporting, and quarterly workflow optimisation so CRM performance improves rather than plateauing",
    ],
    tags: ["bundle", "end-to-end", "CRM", "revenue-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases pipeline visibility, shortens sales cycles, and improves customer retention through better data and AI-guided workflows, sustained by managed operations that maintain platform health and adoption rates.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 209,
    slug: "209",
    collection: "experience",
    serviceType: "bundle",
    standardName: "Marketing Operations (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Build a marketing operations capability that runs campaigns from audience insight to performance measurement with structured automation, AI-assisted activation, and the governance to scale it. The bundle spans strategy design through platform deployment to managed operations so marketing effectiveness compounds, not just launches.",
    positioning:
      "Marketing operations built for scalability and measured from the start, not after things go wrong.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief Marketing Officers, Heads of Marketing Operations, and Growth leaders accountable for demand generation and marketing ROI",
    industryRelevance:
      "Organisations scaling paid, owned, and earned marketing channels where data-driven targeting and campaign automation are necessary to maintain efficiency at volume",
    features: [
      "Audience strategy, channel architecture, and campaign workflow designs created before any platform configuration, ensuring the tech stack serves the strategy",
      "AI audience segmentation, content recommendation, and campaign optimisation use cases validated in the design stage, with data requirements confirmed before build commits",
      "Cross-channel campaign testing conducted under unified governance before go-live, preventing the attribution gaps that fragment marketing reporting",
      "Managed service delivers monthly performance reporting, A/B testing cycles, and audience refresh so marketing ROI improves continuously after launch",
    ],
    tags: ["bundle", "end-to-end", "marketing-operations", "campaign-automation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces campaign setup time, improves audience targeting precision, and increases marketing return on investment through AI-assisted optimisation, sustained by managed operations that keep the MarTech stack performing.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 210,
    slug: "210",
    collection: "experience",
    serviceType: "bundle",
    standardName: "Smart Sales & Quotation (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Accelerate the journey from opportunity to signed order by designing, building, and operating a sales and quotation capability that automates pricing logic, guided configuration, and approval workflows. The bundle carries commercial and technical requirements through every stage under the same team, so complexity does not compound between phases.",
    positioning:
      "Faster quotes, controlled pricing, and a managed sales workflow from design to live operations.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief Revenue Officers, Commercial Directors, and Sales Operations leaders accountable for win rates and pricing discipline",
    industryRelevance:
      "Manufacturers, technology vendors, professional services firms, and distributors with complex pricing, product configuration, or multi-stakeholder approval requirements",
    features: [
      "Commercial rules, pricing logic, and approval governance captured during design are encoded directly into the platform configuration, with no translation loss between stages",
      "AI price optimisation and guided configuration use cases validated against your product catalogue and margin requirements before build investment is committed",
      "End-to-end integration testing covers CRM, ERP, and contract management connections in a single structured programme, not separate workstreams",
      "Managed service monitors quote cycle times, win rates, and pricing exception volumes so continuous improvements are grounded in real commercial data",
    ],
    tags: ["bundle", "end-to-end", "CPQ", "sales-automation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Cuts average quote turnaround by reducing manual calculation and approval bottlenecks, improves pricing consistency, and gives commercial leaders live visibility of pipeline and margin performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 211,
    slug: "211",
    collection: "experience",
    serviceType: "bundle",
    standardName: "Customer Support & Success (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Transform customer support from a reactive cost centre into a proactive success capability: structured service workflows, AI-assisted triage and resolution, and an operations model that maintains quality at scale. The bundle runs from service design to live managed support, carrying customer context and process knowledge through every stage.",
    positioning:
      "Support operations designed for retention, not just resolution, delivered and managed end-to-end.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "VP of Customer Success, Heads of Customer Service, and CX leaders accountable for retention and service cost",
    industryRelevance:
      "Subscription businesses, SaaS providers, consumer services organisations, and any company where customer retention is tied directly to support quality",
    features: [
      "Service workflow, escalation path, and knowledge architecture designed together in the first stage, eliminating the gaps that emerge when support processes are designed separately from knowledge systems",
      "AI triage, suggested resolution, and sentiment analysis use cases validated before build, ensuring the right data, consent, and agent workflow integrations are confirmed upfront",
      "Unified change management and training programme spans design through go-live, so agents adopt the new model consistently rather than working around it",
      "Managed service tracks CSAT, first-contact resolution, and handle time monthly, with quarterly optimisation cycles targeting the metrics most affecting retention",
    ],
    tags: ["bundle", "end-to-end", "customer-support", "service-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves first-contact resolution, reduces average handle time, and increases customer retention through AI-assisted support workflows, sustained by managed operations that monitor and improve performance continuously.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 212,
    slug: "212",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Digital Workplace (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Create a digital workplace where employees find information, collaborate across teams, and complete workflows without switching between disconnected tools. This bundle takes the employee experience from journey design to platform deployment to managed operations, maintaining the same understanding of how your organisation works at every stage.",
    positioning:
      "A digital workplace your employees will actually use, built with their journeys in mind from the first workshop to managed operations.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief People Officers, Heads of IT, and Internal Communications leaders accountable for employee productivity and digital ways of working",
    industryRelevance:
      "Organisations with distributed, hybrid, or knowledge-intensive workforces where collaboration quality and information accessibility directly affect productivity and retention",
    features: [
      "Employee journey research from the design stage shapes platform configuration decisions, preventing the common failure of deploying tools that do not fit real working patterns",
      "AI-assisted search, knowledge surfacing, and workflow automation validated before build ensures intelligent features are woven into the platform architecture, not added as plugins",
      "Change and adoption programme designed in stage one and executed through deployment, creating the adoption conditions for durable behaviour change rather than short-term launch activity",
      "Managed service includes platform health monitoring, feature adoption tracking, and quarterly capability reviews so the workplace continues to deliver value as the organisation evolves",
    ],
    tags: ["bundle", "end-to-end", "digital-workplace", "employee-experience"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces time spent searching for information, improves cross-team collaboration, and accelerates new employee productivity, with adoption and performance sustained through ongoing managed operations.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 213,
    slug: "213",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Business Process Automation (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Identify the business processes creating the most manual effort, design automation that fits your actual workflows, deploy it with proper integration and testing, and then operate it so performance improves as process volumes and requirements change. The bundle avoids the typical failure mode of automating the wrong things by starting with process design before touching any tooling.",
    positioning:
      "Automation that targets the right processes, built properly, and kept running at peak performance.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief Operating Officers, Heads of Transformation, and Business Process Owners accountable for operational efficiency and throughput",
    industryRelevance:
      "Organisations with high-volume, rule-based, or approval-heavy processes across finance, HR, operations, procurement, and customer service",
    features: [
      "Process discovery and prioritisation in the design stage means automation investment targets the workflows with the highest return, not just the ones that are easiest to automate",
      "AI process mining, intelligent document processing, or decision automation use cases validated against your actual data quality and exception volumes before build begins",
      "Integration testing covers upstream and downstream system connections as a single programme, preventing the partial automation failures that occur when hand-offs are tested in isolation",
      "Managed service monitors process throughput, exception rates, and automation coverage monthly, and runs optimisation cycles to extend coverage as new process candidates emerge",
    ],
    tags: ["bundle", "end-to-end", "process-automation", "RPA"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces manual processing effort, shortens cycle times on priority workflows, and improves exception handling, with managed operations extending automation coverage and sustaining performance gains over time.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 214,
    slug: "214",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Specialized Operations (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Digitise the specialised operational environment where your domain-specific workflows, data types, and compliance requirements make generic enterprise platforms a poor fit. This bundle designs a tailored solution, validates AI use cases within your domain constraints, deploys the capability, and then operates it with the domain knowledge that generic managed services cannot replicate.",
    positioning:
      "Domain-fit digital operations: a solution shaped around your specialised workflows and operated by a team that understands them.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Business Unit heads, Domain Operations Directors, and specialist function leaders where generic platforms have failed to deliver operational fit",
    industryRelevance:
      "Legal operations, research and laboratory environments, specialised financial services functions, engineering and technical operations, and regulated professional services",
    features: [
      "Domain-specific requirements captured during design inform platform selection and configuration, avoiding the compromises that arise when a generic tool is forced to fit specialist operations",
      "AI use cases are validated against the particular data structures, regulatory constraints, and exception patterns of your domain before any build commitment",
      "The same team that designed the solution configures and deploys it, preserving the institutional knowledge that is typically lost in hand-offs between specialist design and generic delivery teams",
      "Managed service is staffed with domain-aware operators who can interpret operational anomalies in context, rather than applying generic SLA responses to domain-specific problems",
    ],
    tags: ["bundle", "end-to-end", "specialised-operations", "domain-specific"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers operational capability that generic platforms cannot match, reducing manual workarounds, improving domain process control, and providing the specialist oversight needed to sustain performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 215,
    slug: "215",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Enterprise Operations (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Bring coherence to enterprise-wide operational coordination by designing an operating model, deploying the enabling platforms, and then running them with the governance discipline that keeps performance visible and decisions informed. The bundle spans the full journey from operating model design to live managed operations, using a single team that carries your organisational context throughout.",
    positioning:
      "Enterprise operations redesigned and operated as one coordinated programme, not a sequence of disconnected projects.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief Operating Officers, Strategy and Transformation Directors, and enterprise leaders accountable for cross-functional coordination and operational performance",
    industryRelevance:
      "Large and complex organisations where operational silos, inconsistent reporting, or slow decision-making are reducing execution effectiveness at enterprise scale",
    features: [
      "Enterprise operating model and performance framework designed first, so platform and tooling choices align to how the business needs to coordinate rather than to vendor defaults",
      "AI performance prediction, resource optimisation, and exception alerting validated against your actual operational data and reporting requirements before build",
      "A single cross-stage team prevents the fragmentation that occurs when operating model design, platform deployment, and managed operations are delivered by different parties with no shared context",
      "Managed service provides monthly enterprise performance reporting, quarterly operating model reviews, and continuous optimisation of the platforms and processes in scope",
    ],
    tags: ["bundle", "end-to-end", "enterprise-operations", "operating-model"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves cross-functional coordination, accelerates decision-making with better real-time visibility, and sustains enterprise performance gains through governed managed operations rather than point-in-time project outputs.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 216,
    slug: "216",
    collection: "security",
    serviceType: "bundle",
    standardName: "Governance, Risk & Compliance (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Build a governance, risk, and compliance capability that is designed with your control frameworks in mind, enhanced with responsible AI, deployed with full audit evidence, and then operated continuously so your compliance posture never degrades between reporting cycles. The bundle eliminates the gap between compliance assessment and live GRC operations.",
    positioning:
      "From control design to continuous compliance: a GRC capability built, deployed, and operated under a single programme.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief Risk Officers, Heads of Compliance, Internal Audit Directors, and Legal and Regulatory Affairs leaders",
    industryRelevance:
      "Regulated organisations in financial services, healthcare, government contracting, energy, and any business preparing for certification or under active regulatory scrutiny",
    features: [
      "Control framework, risk taxonomy, and operating model designed together in stage one, ensuring the GRC platform is configured to reflect your actual risk appetite rather than a generic template",
      "AI risk detection and compliance monitoring use cases validated against regulatory constraints and data quality requirements before any configuration work begins",
      "Audit evidence pack produced during deployment is scoped to support both internal audit review and external certification, built in rather than assembled after go-live",
      "Managed service provides monthly compliance performance reports, quarterly control testing, and proactive regulatory change monitoring as a continuous managed programme",
    ],
    tags: ["bundle", "end-to-end", "GRC", "compliance-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces compliance exposure by building continuous monitoring into live GRC operations from day one, replacing periodic manual reviews with a sustained capability that keeps the board informed and auditors confident.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 217,
    slug: "217",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Enterprise Resource Planning (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Modernise your ERP-enabled operations across finance, procurement, HR, and inventory with a single programme that takes you from process design and data model definition through platform deployment to managed ERP operations. The bundle keeps business process knowledge and technical configuration understanding with the same team at every stage, preventing the costly gap between design intent and deployed reality.",
    positioning:
      "ERP modernisation delivered as a single programme: from process design to live managed operations without context loss between phases.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief Financial Officers, Heads of Finance Transformation, Procurement Directors, and HR leaders accountable for core enterprise operations",
    industryRelevance:
      "Manufacturing, distribution, professional services, and public sector organisations where ERP is the operational backbone for finance, procurement, and workforce management",
    features: [
      "Business process design and data model decisions made in the first stage directly inform every configuration and integration choice during deployment, eliminating redesign cycles mid-project",
      "AI forecasting, automated reconciliation, and procurement intelligence use cases validated against your chart of accounts, master data quality, and finance team workflows before build",
      "Single data migration strategy designed upfront and executed in deployment, with validation against business rules established at design stage rather than improvised at cutover",
      "Managed service monitors ERP system health, data quality metrics, and process performance monthly, with access to the same team that designed and deployed the capability",
    ],
    tags: ["bundle", "end-to-end", "ERP", "finance-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers a live, AI-enhanced ERP capability with clean data, integrated processes, and managed operations that maintain system health and drive continuous finance and operational process improvement.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 218,
    slug: "218",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Workforce Management (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Give your workforce planning, scheduling, and productivity operations the digital backbone they need: designed around how your people actually work, enhanced with AI-driven demand forecasting, deployed with your scheduling rules embedded, and actively managed to keep schedules accurate and employees informed. One continuous programme from strategy to operations.",
    positioning:
      "Workforce management designed for your operational reality and operated to improve scheduling accuracy month after month.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "HR Directors, Workforce Planning leads, and Operations leaders responsible for scheduling, labour cost, and frontline productivity",
    industryRelevance:
      "Retail, logistics, healthcare, hospitality, manufacturing, and any organisation managing shift-based, field, or distributed workforces where scheduling accuracy directly affects service quality and labour cost",
    features: [
      "Scheduling rules, demand patterns, and workforce constraints captured during design are encoded directly into platform configuration, preventing the gap between policy and deployed behaviour",
      "AI demand forecasting and optimised schedule generation use cases validated against your historical staffing data and compliance requirements before build begins",
      "Change management and employee communication programme designed alongside the platform, ensuring frontline workers adopt self-service scheduling from go-live rather than reverting to manual processes",
      "Managed service tracks schedule adherence, overtime rates, and demand forecast accuracy, with monthly reporting and quarterly model recalibration as labour patterns shift",
    ],
    tags: ["bundle", "end-to-end", "workforce-management", "scheduling"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces scheduling errors and overtime costs, improves shift coverage for customer-facing operations, and gives workforce leaders the demand visibility needed to plan accurately across seasonal and operational cycles.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 219,
    slug: "219",
    collection: "ai",
    serviceType: "bundle",
    standardName: "Enterprise Data Platform (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Build the data foundation your organisation needs to trust its reporting, scale its analytics, and adopt AI with confidence. This bundle takes the data platform from architecture design and governance model through to live deployment and managed data operations, with data quality and platform reliability maintained as continuous commitments rather than launch-time promises.",
    positioning:
      "A governed data platform designed for scale, deployed for quality, and managed so trust in data compounds over time.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief Data Officers, CIOs, Data Architecture leads, and Analytics leaders accountable for data platform strategy and enterprise reporting",
    industryRelevance:
      "Data-intensive organisations in financial services, healthcare, retail, and operations sectors where data quality, lineage, and governance directly affect regulatory compliance and commercial decision-making",
    features: [
      "Data architecture, governance model, and domain ownership structure designed before any platform configuration, ensuring the technical choices serve the data strategy rather than constraining it",
      "AI-readiness validation confirms that the data assets, metadata standards, and quality thresholds needed for planned AI workloads are achievable before build investment is committed",
      "Data quality framework designed in stage one and enforced through platform configuration and managed operations, creating a continuous quality assurance programme rather than a one-time data cleanse",
      "Managed data operations include data catalogue maintenance, pipeline health monitoring, and quarterly data product reviews, keeping the platform reliable as new sources and consumers are added",
    ],
    tags: ["bundle", "end-to-end", "data-platform", "data-governance"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Creates a trusted, scalable data platform that reduces time-to-insight for analytics teams, accelerates AI initiative delivery, and improves confidence in management reporting through continuous data quality management.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 220,
    slug: "220",
    collection: "ai",
    serviceType: "bundle",
    standardName: "Business Intelligence & Analytics (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Turn your enterprise data into the management intelligence your leaders need to make faster, better-grounded decisions: designed around your actual KPIs and decision workflows, deployed with governed data pipelines, and operated as a continuous analytics service. The bundle builds BI capability from measurement design to live managed reporting.",
    positioning:
      "Analytics that answers the questions your leaders actually ask, built and operated as one coherent programme.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Finance Directors, Strategy leads, Chief Data Officers, and executive sponsors accountable for management reporting and operational performance visibility",
    industryRelevance:
      "Organisations across all sectors where leadership decisions rely on enterprise data, and where inconsistent metrics, slow reporting, or poor data quality are reducing decision confidence",
    features: [
      "KPI framework and decision workflow analysis conducted before any dashboard design, ensuring the BI outputs serve real management decisions rather than replicating existing spreadsheet patterns",
      "AI-assisted analytics, anomaly detection, and narrative generation use cases validated against your data platform quality before build, preventing AI features from surfacing unreliable insights",
      "Single semantic layer designed and governed across all BI outputs in the programme, ensuring metric definitions are consistent across finance, operations, and commercial dashboards from launch",
      "Managed analytics service delivers monthly report packs, tracks data freshness and dashboard adoption, and runs quarterly insight reviews with leadership to keep analytics aligned to evolving business priorities",
    ],
    tags: ["bundle", "end-to-end", "business-intelligence", "analytics"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Accelerates management decision cycles, reduces time spent reconciling conflicting data definitions, and improves leadership confidence in performance data through consistent, governed, and AI-enhanced analytics.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 221,
    slug: "221",
    collection: "ai",
    serviceType: "bundle",
    standardName: "Enterprise AI & Automation (High-Impact) - End-to-end bundle",
    remixName: {},
    description: "Scale AI and automation across your organisation",
    positioning:
      "Enterprise AI deployed responsibly and operated with the oversight that makes it sustainable, not just a pilot.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief AI Officers, CEOs, CIOs, and Transformation Directors accountable for enterprise AI strategy and responsible adoption",
    industryRelevance:
      "Organisations across financial services, healthcare, operations, and professional services ready to move beyond AI pilots to governed, production-scale AI operations",
    features: [
      "AI strategy and use-case prioritisation conducted before any model selection, ensuring adoption targets the workflows with the best combination of value, data readiness, and risk profile",
      "Responsible AI assessment and workflow design stage validates ethical constraints, human-in-the-loop requirements, and regulatory obligations before build, not after a prototype fails scrutiny",
      "Governed model deployment includes safety controls, monitoring, and override procedures designed in the AI Design stage and implemented consistently across all use cases in the programme",
      "Managed AI operations monitor model performance, alert volumes, and business impact monthly, with quarterly retraining cycles and human override review built into the service as standard",
    ],
    tags: ["bundle", "end-to-end", "enterprise-AI", "responsible-AI"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Accelerates the safe adoption of AI at enterprise scale, improving productivity and decision speed across targeted workflows while maintaining the human oversight and governance that regulators and boards require.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 222,
    slug: "222",
    collection: "security",
    serviceType: "bundle",
    standardName: "Technology Governance (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Establish the technology governance operating model your organisation needs to make consistent investment decisions, maintain architecture standards, and oversee vendors with confidence. This bundle designs the governance framework, deploys supporting tooling, and then operates it as a continuous managed service, keeping your CIO and board informed through every portfolio and architecture cycle.",
    positioning:
      "Technology governance that works in practice, not just on paper, designed and operated as a sustained programme.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief Information Officers, Enterprise Architecture leads, PMO Directors, and Technology Portfolio leaders",
    industryRelevance:
      "Organisations managing complex multi-platform technology portfolios, significant vendor ecosystems, or active enterprise architecture programmes across any sector",
    features: [
      "Governance operating model, decision rights, and architecture standards defined in the design stage and encoded directly into the governance tooling during deployment, preventing the drift between policy and practice",
      "AI-assisted portfolio analytics and architecture drift detection validated against your actual investment data and architecture repository before build, ensuring AI decision support is grounded rather than aspirational",
      "Governance processes activated and tested in a live cycle during deployment, so your CIO receives real governance outputs before handover rather than test artefacts",
      "Managed governance service delivers monthly portfolio reports, quarterly architecture reviews, and proactive vendor risk monitoring, all under the accountability of the same team that designed the model",
    ],
    tags: ["bundle", "end-to-end", "technology-governance", "IT-governance"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Replaces ad-hoc technology governance with a disciplined, continuously operated capability that reduces investment waste, slows architecture drift, and gives leadership reliable monthly visibility of technology risk.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 223,
    slug: "223",
    collection: "operations",
    serviceType: "bundle",
    standardName: "DevSecOps Automation (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Build the DevSecOps capability your engineering teams need to deliver software faster without trading security for speed: designed with security controls embedded in the pipeline from the outset, deployed with automated testing and release governance, and then operated as a continuous managed engineering service. The bundle eliminates the security-delivery tension by treating both as engineering requirements from day one.",
    positioning:
      "DevSecOps designed for speed and security together, deployed across your pipeline, and managed as a sustained engineering capability.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief Technology Officers, Engineering Directors, DevOps leads, and Security leaders accountable for delivery speed, software quality, and production security",
    industryRelevance:
      "Software product companies, digital platform operators, financial services technology teams, and any organisation where software delivery velocity and production security are both board-level concerns",
    features: [
      "Pipeline architecture, security control placement, and release governance designed as an integrated model in stage one, preventing the friction that arises when security is retrofitted to an existing delivery pipeline",
      "AI-assisted vulnerability detection, dependency scanning, and release quality prediction validated against your code repositories and deployment patterns before pipeline build",
      "Security testing automation and release gate enforcement implemented consistently across all environments in scope during a single deployment programme, avoiding the environment drift common in phased rollouts",
      "Managed DevSecOps service monitors pipeline health, security scan coverage, deployment frequency, and change failure rate, with monthly engineering performance reports and quarterly pipeline optimisation cycles",
    ],
    tags: ["bundle", "end-to-end", "DevSecOps", "delivery-automation"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases deployment frequency, reduces change failure rate, and embeds security assurance into the delivery pipeline as a permanent operational capability, improving both release confidence and audit posture.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 224,
    slug: "224",
    collection: "experience",
    serviceType: "bundle",
    standardName: "IT Operations & Support (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Modernise IT service delivery so employees receive fast, consistent support and IT operations leaders have the visibility to manage reliability proactively. This bundle designs the service management model, deploys AI-assisted support capabilities, and then operates the IT service desk as a continuously improving managed service under defined SLAs.",
    positioning:
      "IT support redesigned for the way your people work today, then managed to maintain quality as your organisation grows.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief Information Officers, IT Operations Directors, and Service Desk leaders accountable for employee productivity and IT service reliability",
    industryRelevance:
      "Organisations of any sector where IT service quality affects employee productivity, and where growing headcount or platform complexity is straining existing support capacity",
    features: [
      "Service catalogue, incident management process, and knowledge architecture designed together in stage one, so the ITSM platform is configured to reflect the real support model rather than a default template",
      "AI-assisted triage, knowledge article recommendation, and automated resolution use cases validated against your ticket history and knowledge base quality before any configuration work",
      "Knowledge base population and self-service portal activation completed during deployment as part of the programme, not left as a post-launch task that is typically never prioritised",
      "Managed IT service delivers monthly SLA and ticket performance reports, quarterly knowledge base reviews, and proactive capacity planning so support quality improves as headcount and tooling change",
    ],
    tags: ["bundle", "end-to-end", "IT-operations", "ITSM"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces average ticket resolution time, improves first-contact resolution rates through AI-assisted support, and provides IT leadership with the operational visibility to manage reliability rather than react to failures.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 225,
    slug: "225",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Farming Operations (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Bring precision and coordination to farming operations by digitising field activity, crop planning, resource management, and yield monitoring across your agricultural business. This bundle designs the operational capability, validates AI-driven agronomic insights, deploys the solution across your farm environment, and then operates it through growing seasons with the domain knowledge your operations require.",
    positioning:
      "Digital farming operations from crop plan to harvest, designed for your land and operated through every season.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Agribusiness Chief Operating Officers, Farm Operations Directors, and Agricultural Technology leaders",
    industryRelevance:
      "Commercial farming enterprises, food production businesses, agribusiness cooperatives, and agricultural technology providers across arable, horticultural, and livestock operations",
    features: [
      "Operational design conducted by a team with farming context, ensuring digital workflows map to actual seasonal cycles and field activity patterns rather than generic operations templates",
      "AI yield prediction, irrigation optimisation, and pest risk alerting validated against your crop types, soil data, and historical yield records before any platform build",
      "Deployment includes field device integration, IoT sensor connectivity, and agronomic data pipeline setup as a single coordinated programme, avoiding the fragmented rollout that leaves data siloed by field or season",
      "Managed service operates through growing seasons, monitoring equipment health, data ingestion quality, and agronomic alert accuracy, with seasonal performance reviews tied to your production calendar",
    ],
    tags: ["bundle", "end-to-end", "farming-operations", "agritech"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves yield predictability, reduces input waste through precise resource management, and gives farm operations leaders the real-time field visibility needed to act on agronomic signals before they become production losses.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 226,
    slug: "226",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Manufacturing Operations (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Modernise your manufacturing operations with a programme that connects production planning, shopfloor visibility, quality management, and predictive maintenance into a single operational capability. The bundle takes manufacturing digitisation from process design through MES and IIoT deployment to managed plant operations, maintaining the production context needed to make each stage build on the last.",
    positioning:
      "Manufacturing operations redesigned for Industry 4.0 and operated to improve OEE continuously after go-live.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Manufacturing Directors, Plant Managers, and Operations leaders accountable for production throughput, quality, and asset performance",
    industryRelevance:
      "Discrete and process manufacturers, industrial operators, food and beverage producers, and automotive and aerospace component suppliers undertaking Industry 4.0 transformation",
    features: [
      "Production process mapping and digital workflow design conducted before any platform selection, ensuring the manufacturing execution system reflects your actual production sequences and quality checkpoints",
      "AI predictive maintenance, quality defect detection, and production scheduling optimisation validated against your equipment data, failure history, and production constraint records before build",
      "Shopfloor integration programme covering PLC, SCADA, and sensor connectivity as a unified deployment, avoiding the data fragmentation that results from separate integration projects for each production line",
      "Managed plant operations service monitors OEE, predictive maintenance alert accuracy, quality rates, and production plan adherence with monthly reports and quarterly optimisation cycles",
    ],
    tags: ["bundle", "end-to-end", "manufacturing-operations", "Industry-4.0"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases overall equipment effectiveness, reduces unplanned downtime through predictive maintenance, and improves quality defect detection rates, with managed operations sustaining and extending these gains as production volumes and mix change.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 227,
    slug: "227",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Infrastructure Operations (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Digitise infrastructure asset management and field operations with a programme that takes you from asset data model design through IoT and field mobility deployment to managed infrastructure operations. The bundle addresses the challenge of ageing asset records, reactive maintenance, and field coordination gaps as a single end-to-end capability, not separate workstreams.",
    positioning:
      "Infrastructure operations built on trusted asset data, predictive maintenance, and the field mobility your teams need to act fast.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Asset Management Directors, Infrastructure Operations leaders, and Facilities or Utilities executives accountable for asset reliability and maintenance cost",
    industryRelevance:
      "Utilities, transport authorities, energy operators, real estate portfolio managers, and asset-intensive industrial operators where asset reliability and regulatory compliance are operational priorities",
    features: [
      "Asset data model, maintenance strategy, and field workflow design conducted in stage one ensures the operational platform reflects your actual asset classes, maintenance regimes, and field team structures",
      "AI predictive failure detection and work order prioritisation validated against your historical maintenance records and asset condition data before any configuration begins",
      "Field mobility and IoT sensor integration deployed as part of the same programme as the asset management platform, ensuring data flows from sensor to work order to performance dashboard without manual intervention",
      "Managed infrastructure operations provide monthly asset health reports, maintenance schedule adherence tracking, and quarterly asset performance reviews aligned to your regulatory and service level commitments",
    ],
    tags: ["bundle", "end-to-end", "infrastructure-operations", "asset-management"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces unplanned asset failures through predictive maintenance, improves field productivity through better work order management, and provides asset leaders with the reliability data needed to plan capital investment accurately.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 228,
    slug: "228",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Government Operations (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Modernise government service delivery and internal operations with a programme that designs citizen-centred workflows, validates responsible AI use within public sector constraints, deploys digital capabilities with the security and accessibility standards public services require, and then operates them as managed government services accountable to citizens and oversight bodies.",
    positioning:
      "Government transformation delivered with the accountability, accessibility, and security that public services demand.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Digital Government Directors, Ministry CIOs, Agency Operations leaders, and Transformation Secretaries accountable for public service delivery",
    industryRelevance:
      "National and local government ministries, regulatory agencies, public authorities, and publicly funded service organisations transforming citizen-facing or internal government operations",
    features: [
      "Service design grounded in citizen journey research and public sector accessibility requirements, ensuring digital services meet the standards expected before build investment is committed",
      "AI use-case validation conducted with public sector regulatory, explainability, and ethical constraints as first-order requirements, not afterthoughts added during deployment",
      "Deployment programme includes security accreditation support, accessibility compliance testing, and data sovereignty verification as integrated workstreams, not separate projects requiring separate sign-off cycles",
      "Managed public service operations deliver monthly service performance reports, accessibility compliance monitoring, and security posture reviews aligned to government assurance frameworks",
    ],
    tags: ["bundle", "end-to-end", "government-operations", "citizen-services"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves citizen service speed and accessibility, reduces case processing backlogs through automation, and provides public sector leaders with the operational transparency expected by oversight bodies and the public.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 229,
    slug: "229",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Hospitality Operations (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Elevate the guest experience and streamline hospitality operations by designing a digital capability that connects reservations, housekeeping, food and beverage, and guest communications into a single coordinated service model. The bundle takes hospitality operations from workflow design through property management system deployment to live managed guest operations.",
    positioning:
      "Hospitality operations built around the guest journey, deployed across your properties, and managed to improve satisfaction scores continuously.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Hotel General Managers, Heads of Operations, Revenue Directors, and Guest Experience leaders accountable for occupancy, RevPAR, and guest satisfaction",
    industryRelevance:
      "Hotels, resorts, serviced residences, venue operators, and tourism businesses where guest experience quality and revenue optimisation are both operational and commercial priorities",
    features: [
      "Guest journey mapping and operational workflow design conducted first ensures that platform configuration reflects your actual service standards and property workflows, not a generic hospitality template",
      "AI-driven demand forecasting, dynamic pricing, and personalised upsell recommendations validated against your booking history, seasonality patterns, and revenue management strategy before build",
      "Property management system and guest communication platform deployed as a single integrated programme, eliminating the fragmentation where reservations, housekeeping, and F&B operate on disconnected systems",
      "Managed hospitality operations monitor guest satisfaction scores, service response times, and revenue per available room, with seasonal performance reviews and continuous operational optimisation",
    ],
    tags: ["bundle", "end-to-end", "hospitality-operations", "guest-experience"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves guest satisfaction scores through faster, more personalised service, increases RevPAR through AI-driven pricing and upsell, and reduces operational coordination effort across housekeeping, F&B, and front office.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 230,
    slug: "230",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Retail Operations (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Build a retail operations capability that keeps stores performing, inventory accurate, and customer engagement consistent across all channels. This bundle designs the omnichannel operational model, validates AI merchandising and demand planning use cases, deploys the platform, and then operates retail operations as a managed service that responds to trading patterns rather than lagging them.",
    positioning:
      "Retail operations designed for omnichannel consistency and managed to improve trading performance continuously after launch.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Chief Retail Officers, Heads of Commerce, Store Operations Directors, and Supply Chain leaders accountable for sales performance and stock accuracy",
    industryRelevance:
      "Physical and omnichannel retailers, grocery operators, fashion and lifestyle brands, and marketplace businesses where inventory accuracy and customer engagement are critical to trading performance",
    features: [
      "Omnichannel operational model and inventory architecture designed before any platform configuration, preventing the inventory synchronisation failures that stem from designing commerce and store systems separately",
      "AI demand forecasting, replenishment optimisation, and personalised promotion targeting validated against your SKU portfolio, seasonality, and customer purchase data before build",
      "Store systems, e-commerce platform, and inventory management deployed as a unified programme with a single integration testing cycle covering all channel hand-offs",
      "Managed retail operations deliver weekly trading performance dashboards, monthly inventory accuracy reports, and quarterly trading reviews so operational response keeps pace with commercial needs",
    ],
    tags: ["bundle", "end-to-end", "retail-operations", "omnichannel"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces stock-outs and overstock positions through AI-driven replenishment, improves conversion through better promotion targeting, and gives retail leaders the real-time trading visibility to respond to demand shifts quickly.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 231,
    slug: "231",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Service Operations (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Design and operate a service delivery model that coordinates scheduling, field execution, quality, and customer follow-through from a single platform. This bundle takes service operations from workflow design through field service management deployment to managed service operations, keeping service delivery KPIs and operational context with the same team throughout.",
    positioning:
      "Service operations designed for throughput and quality, deployed for field execution, and managed to close every job right.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Service Operations Directors, Field Service Managers, and Customer Experience leaders accountable for service delivery quality and operational cost",
    industryRelevance:
      "Field service organisations, maintenance and repair providers, professional services firms, facilities management companies, and any organisation where technician scheduling and on-site service quality affect customer retention",
    features: [
      "Service workflow, scheduling rules, and quality checkpoint design in stage one ensures the field service management platform is configured to match your actual service types, technician skills, and SLA commitments",
      "AI job scheduling optimisation and predictive service demand validated against your job history, technician capacity, and geographic distribution before build",
      "Customer communication workflows, technician mobile app, and back-office integration deployed in a single programme, eliminating the gap between what the customer is told and what the field team does",
      "Managed service operations track first-time fix rate, SLA compliance, technician utilisation, and customer satisfaction monthly, with quarterly scheduling optimisation cycles",
    ],
    tags: ["bundle", "end-to-end", "service-operations", "field-service"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases first-time fix rates, reduces travel time through AI-optimised scheduling, improves customer satisfaction through proactive communication, and gives service leaders the visibility to manage capacity before SLA breaches occur.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 232,
    slug: "232",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Logistics Operations (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Build a logistics capability that gives you real-time visibility across your fleet, warehouse, and fulfilment operations while reducing the manual coordination that slows execution and creates errors. This bundle takes logistics digitisation from operational design through WMS and TMS deployment to managed logistics operations, maintaining supply chain context at every stage.",
    positioning:
      "Logistics operations built for visibility and responsiveness, deployed end-to-end, and managed to reduce exception handling costs.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Supply Chain Directors, Heads of Logistics, Fulfilment Operations leaders, and COOs accountable for delivery performance and logistics cost",
    industryRelevance:
      "3PL providers, e-commerce fulfilment operators, distributors, manufacturers with outbound logistics operations, and importers where delivery performance and inventory accuracy are competitive differentiators",
    features: [
      "Supply chain operational design and data flow architecture confirmed before any platform selection, ensuring the WMS, TMS, and tracking systems are chosen and configured to work together from the start",
      "AI route optimisation, demand-driven replenishment, and predictive delay alerting validated against your shipment volumes, carrier mix, and network geography before build",
      "Warehouse, transport, and carrier integration deployed as a unified programme with end-to-end testing covering order, pick, dispatch, and last-mile hand-offs in a single test cycle",
      "Managed logistics operations deliver daily exception dashboards, weekly performance summaries, and monthly network optimisation reviews so logistics costs and service levels improve continuously",
    ],
    tags: ["bundle", "end-to-end", "logistics-operations", "supply-chain"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Improves on-time delivery rates, reduces per-shipment cost through AI-optimised routing, and gives logistics leaders the real-time network visibility needed to intervene before delays become customer complaints.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 233,
    slug: "233",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Wellness Operations (High-Impact) - End-to-end bundle",
    remixName: {},
    description:
      "Create a wellness service model where clients receive consistent, coordinated care from first booking through treatment, follow-up, and ongoing wellness engagement. This bundle designs the client experience and clinical workflow, validates AI-assisted care recommendations within wellness and clinical constraints, deploys the practice management capability, and then operates it as a managed wellness service.",
    positioning:
      "A connected wellness capability that improves client outcomes and practice efficiency, designed and managed end-to-end.",
    price: "Custom",
    duration: "16-24 Weeks",
    popularityRank: 200,
    deliveryComplexity: "high",
    badge: "End-to-end bundle",
    audience:
      "Clinic Directors, Wellness Operations leaders, and Practice Managers accountable for client outcomes, retention, and practitioner productivity",
    industryRelevance:
      "Wellness centres, physiotherapy and allied health clinics, preventive health providers, fitness and lifestyle operators, and mental health service organisations",
    features: [
      "Client journey and care workflow design conducted before any practice management platform configuration, ensuring scheduling, records, and care coordination align to your actual clinical or wellness model",
      "AI wellness recommendation, appointment optimisation, and client engagement use cases validated against your care protocols, data consent model, and applicable wellness or clinical regulations",
      "Client portal, practitioner scheduling, and electronic records deployed as a single integrated programme, preventing the disconnection between what clients see and what practitioners access",
      "Managed wellness operations monitor booking conversion, client retention, appointment utilisation, and care plan completion rates, with quarterly operational reviews and continuous workflow optimisation",
    ],
    tags: ["bundle", "end-to-end", "wellness-operations", "health-tech"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Increases client retention through personalised engagement, reduces appointment no-show rates through automated reminders, improves practitioner utilisation, and gives practice leaders clear visibility of care quality and operational performance.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 234,
    slug: "234",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Flexible Advisory Package",
    remixName: {},
    description:
      "A structured advisory programme for organisations that need targeted diagnostic work across multiple transformation domains before committing to larger investments. The Advisory Set applies the DigitalQatalyst team",
    positioning:
      "Targeted transformation diagnostics across your chosen domains, consolidated into priorities your leadership can act on.",
    price: "Custom",
    duration: "Variable",
    popularityRank: 150,
    deliveryComplexity: "medium",
    badge: "End-to-end bundle",
    audience:
      "Chief Executives, Strategy Directors, Transformation Sponsors, and Executive leadership teams making investment decisions across multiple transformation domains",
    industryRelevance:
      "Organisations at a strategic inflection point across any sector, where multiple transformation opportunities are competing for leadership attention and investment priority",
    features: [
      "Scope defined by your transformation agenda, not a fixed domain list, allowing the advisory to focus where your organisation's most consequential decisions need support",
      "Cross-domain findings consolidated into a single priority map, surfacing the interdependencies between capability areas that siloed assessments typically miss",
      "Each advisory workstream applies the same structured assessment methodology, ensuring findings are comparable and can be sequenced into a coherent transformation roadmap",
      "Executive alignment session at the close translates findings into investment decisions and sequencing recommendations that leadership can take to board or budget review",
    ],
    tags: ["bundle", "end-to-end", "advisory", "transformation-strategy"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Creates the leadership alignment and priority clarity needed to commit transformation investment with confidence, reducing the risk of misallocated spend across competing initiatives.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 235,
    slug: "235",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Flexible Design Package",
    remixName: {},
    description:
      "A design programme that turns transformation priorities across multiple capability areas into solution blueprints, user-centred specifications, and delivery-ready backlogs. The Design Services Set applies the DigitalQatalyst team",
    positioning:
      "Transformation blueprints across your chosen domains, coordinated to avoid conflicts and ready to hand to delivery teams.",
    price: "Custom",
    duration: "Variable",
    popularityRank: 150,
    deliveryComplexity: "medium",
    badge: "End-to-end bundle",
    audience:
      "Heads of Digital and Technology, Delivery Sponsors, Product Directors, and Programme leaders accountable for solution design quality across multiple workstreams",
    industryRelevance:
      "Organisations with concurrent transformation workstreams across digital, operational, or data domains that need coordinated design rather than separately managed design projects",
    features: [
      "Design scope shaped around your transformation priorities, with the DigitalQatalyst team confirming design dependencies and sequencing before work begins to prevent downstream conflicts",
      "Each domain design produces build-ready specifications with acceptance criteria, data requirements, and integration dependencies documented to a consistent standard",
      "Cross-domain integration requirements identified and resolved during the design programme, not discovered during build when fixing them is expensive",
      "Design governance framework established at the start applies consistent architecture principles and approval standards across all domain workstreams in the set",
    ],
    tags: ["bundle", "end-to-end", "design-services", "transformation-design"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Delivers build-ready specifications for multiple transformation domains without the integration conflicts that arise from separately managed design workstreams, accelerating the path from strategy to delivery.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 236,
    slug: "236",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Flexible Deploy Package",
    remixName: {},
    description:
      "A structured deployment programme that implements selected TMaaS capabilities across your organisation through managed delivery, configuration, and integration work governed under a single programme framework. The Deploy Services Set applies consistent delivery standards across multiple capability deployments, reducing the coordination burden that falls on your team when running separate delivery projects simultaneously.",
    positioning:
      "Multiple capability deployments coordinated as one programme, with shared governance and a single programme team accountable for delivery.",
    price: "Custom",
    duration: "Variable",
    popularityRank: 150,
    deliveryComplexity: "medium",
    badge: "End-to-end bundle",
    audience:
      "Programme Directors, Delivery Sponsors, and Technology leaders accountable for delivering multiple simultaneous transformation capabilities",
    industryRelevance:
      "Organisations with active transformation portfolios across digital, data, operational, or automation domains where separate project delivery is creating coordination overhead and integration risk",
    features: [
      "Delivery programme governance established at the start covers all deployment workstreams, providing a single status view and consistent escalation path rather than separate steering arrangements for each capability",
      "Integration dependencies across capability deployments managed within the programme, preventing the hand-off failures that occur when separate projects share data or platform dependencies",
      "Testing and quality assurance standards applied consistently across all deployments in the set, so acceptance criteria and defect management are governed to the same standard everywhere",
      "Controlled launch and hypercare coordinated across all capabilities in scope, ensuring support capacity and issue management are planned for the full go-live portfolio rather than each deployment in isolation",
    ],
    tags: ["bundle", "end-to-end", "deployment-services", "programme-delivery"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces delivery risk and coordination effort for multi-capability deployments, shortening the time from committed investment to live operations by treating interdependent deployments as a single managed programme.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
  {
    id: 237,
    slug: "237",
    collection: "operations",
    serviceType: "bundle",
    standardName: "Flexible Managed Services Package",
    remixName: {},
    description:
      "A flexible managed operations programme that sustains performance across your deployed TMaaS capabilities after launch, with monitoring, optimisation, and continuous improvement governed under a single service agreement. The Managed Services Set gives organisations one accountable team for ongoing operations across multiple capabilities rather than separate managed service contracts for each.",
    positioning:
      "One team, one service agreement, one performance view across all your deployed capabilities after go-live.",
    price: "Custom",
    duration: "Variable",
    popularityRank: 150,
    deliveryComplexity: "medium",
    badge: "End-to-end bundle",
    audience:
      "Chief Operating Officers, Service Owners, IT Directors, and Transformation leaders accountable for the sustained performance of deployed digital and operational capabilities",
    industryRelevance:
      "Organisations with multiple live TMaaS capabilities that want a coordinated managed service approach rather than a growing portfolio of separately contracted support arrangements",
    features: [
      "Single service management framework governs all capabilities in scope, providing a consolidated monthly performance report and one escalation path for issues across all deployed platforms",
      "Continuous optimisation cycles applied across the set identify improvement opportunities that span capability boundaries, such as data quality improvements that benefit both analytics and automation",
      "SLA coverage negotiated at the portfolio level, with the flexibility to allocate response priority and service hours to the capabilities where operational risk is highest",
      "Regular performance reviews assess each capability's contribution to business outcomes and identify where additional investment or scope changes would increase impact, keeping the managed service aligned to your evolving priorities",
    ],
    tags: ["bundle", "end-to-end", "managed-services", "service-operations"],
    outcomes: ["Modernise Technology", "Improve Operations"],
    department: "IT & Transformation",
    businessImpact:
      "Reduces the management overhead of operating multiple deployed capabilities, improves cross-capability performance through coordinated optimisation, and provides leadership with a single consolidated view of operational health across the transformation portfolio.",
    implementationModel: "TMaaS Managed Delivery",
    timelineMilestones: [],
    relatedServices: [],
  },
];

export const getRemixedName = (
  service: (typeof initialServices)[number],
  remixKey: string = "all"
) => {
  if (remixKey === "all") return service.standardName;
  return service.remixName[remixKey as keyof typeof service.remixName] || service.standardName;
};

type ServiceCollection = "experience" | "operations" | "security" | "ai" | "bundles";

export const getPopularServices = (collection: "all" | ServiceCollection = "all", limit = 4) => {
  const pool =
    collection === "all"
      ? initialServices
      : initialServices.filter((s) => s.collection === collection);
  return [...pool].sort((a, b) => b.popularityRank - a.popularityRank).slice(0, limit);
};

export const getServiceById = (id: number) => initialServices.find((s) => s.id === id);

export const parseServicePrice = (price: string): number =>
  Number(price.replace(/[^0-9]/g, "")) || 0;

export const formatServicePrice = (amount: number): string => `$${amount.toLocaleString("en-US")}`;

/** Top services per collection (homepage featured + marketplace shelf) */
export const getFeaturedByCollection = (collection: ServiceCollection, limit = 3) =>
  initialServices
    .filter((s) => s.collection === collection)
    .sort((a, b) => b.popularityRank - a.popularityRank)
    .slice(0, limit);

/** Best sellers for marketplace, all categories or one collection */
export const getBestSellers = (collection: "all" | ServiceCollection = "all", limit = 4) => {
  const pool =
    collection === "all"
      ? initialServices
      : initialServices.filter((s) => s.collection === collection);
  return sortCatalogByPopularMix(pool.filter((s) => s.serviceType !== "bundle")).slice(0, limit);
};
