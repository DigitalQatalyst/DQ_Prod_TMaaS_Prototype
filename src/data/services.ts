import { sortCatalogByPopularMix } from "@/lib/marketplaceCatalogFilters";
import type { ServiceProduct } from "@/types/serviceProduct";

export const initialServices = [
  {
    "id": 1,
    "collection": "experience",
    "serviceType": "advisory",
    "standardName": "Online Web Presence (High-Impact) - Assess",
    "remixName": {},
    "description": "The Online web presence Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment gives you evidence-led priorities your leadership team can act on.",
    "positioning": "See how online web presence performs today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "CX, Digital, Marketing & IT leaders",
    "industryRelevance": "B2B, B2C and public sector organisations with customer-facing web channels",
    "features": [
      "Architecture alignment for Online Web Presence (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital, CX, Marketing & IT",
    "businessImpact": "Improves digital visibility, customer trust, lead conversion and service accessibility while reducing friction across web journeys.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 2,
    "collection": "experience",
    "serviceType": "design",
    "standardName": "Online Web Presence (High-Impact) - Design",
    "remixName": {},
    "description": "The Online web presence Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement turns web goals into user-centred designs and build-ready specifications.",
    "positioning": "Turn online web presence goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "CX, Digital, Marketing & IT leaders",
    "industryRelevance": "B2B, B2C and public sector organisations with customer-facing web channels",
    "features": [
      "Architecture alignment for Online Web Presence (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital, CX, Marketing & IT",
    "businessImpact": "Improves digital visibility, customer trust, lead conversion and service accessibility while reducing friction across web journeys.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 3,
    "collection": "experience",
    "serviceType": "ai_design",
    "standardName": "Online Web Presence (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Online web presence AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for online web presence, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "CX, Digital, Marketing & IT leaders",
    "industryRelevance": "B2B, B2C and public sector organisations with customer-facing web channels",
    "features": [
      "Architecture alignment for Online Web Presence (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital, CX, Marketing & IT",
    "businessImpact": "Improves digital visibility, customer trust, lead conversion and service accessibility while reducing friction across web journeys.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 4,
    "collection": "experience",
    "serviceType": "deploy",
    "standardName": "Online Web Presence (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Online web presence Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed online web presence changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "CX, Digital, Marketing & IT leaders",
    "industryRelevance": "B2B, B2C and public sector organisations with customer-facing web channels",
    "features": [
      "Architecture alignment for Online Web Presence (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital, CX, Marketing & IT",
    "businessImpact": "Improves digital visibility, customer trust, lead conversion and service accessibility while reducing friction across web journeys.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      2
    ]
  },
  {
    "id": 5,
    "collection": "experience",
    "serviceType": "ai_deploy",
    "standardName": "Online Web Presence (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Online web presence AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled online web presence workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "CX, Digital, Marketing & IT leaders",
    "industryRelevance": "B2B, B2C and public sector organisations with customer-facing web channels",
    "features": [
      "Architecture alignment for Online Web Presence (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital, CX, Marketing & IT",
    "businessImpact": "Improves digital visibility, customer trust, lead conversion and service accessibility while reducing friction across web journeys.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      3
    ]
  },
  {
    "id": 6,
    "collection": "experience",
    "serviceType": "manage",
    "standardName": "Online Web Presence (High-Impact) - Managed",
    "remixName": {},
    "description": "The Online web presence Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve online web presence with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "CX, Digital, Marketing & IT leaders",
    "industryRelevance": "B2B, B2C and public sector organisations with customer-facing web channels",
    "features": [
      "Architecture alignment for Online Web Presence (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital, CX, Marketing & IT",
    "businessImpact": "Improves digital visibility, customer trust, lead conversion and service accessibility while reducing friction across web journeys.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 7,
    "collection": "experience",
    "serviceType": "advisory",
    "standardName": "Online Social Presence (High-Impact) - Assess",
    "remixName": {},
    "description": "The Online social presence Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment gives you evidence-led priorities for social strategy and investment.",
    "positioning": "See how social presence and audience engagement perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Marketing, Communications & CX leaders",
    "industryRelevance": "organisations using social channels for brand, customer engagement or public communication",
    "features": [
      "Architecture alignment for Online Social Presence (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Marketing, Communications, CX & Digital",
    "businessImpact": "Increases audience reach, content consistency, engagement quality and campaign responsiveness across social channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 8,
    "collection": "experience",
    "serviceType": "design",
    "standardName": "Online Social Presence (High-Impact) - Design",
    "remixName": {},
    "description": "The Online social presence Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement turns social goals into actionable strategies and build-ready specifications.",
    "positioning": "Turn social presence and audience engagement goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Marketing, Communications & CX leaders",
    "industryRelevance": "organisations using social channels for brand, customer engagement or public communication",
    "features": [
      "Architecture alignment for Online Social Presence (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Marketing, Communications, CX & Digital",
    "businessImpact": "Increases audience reach, content consistency, engagement quality and campaign responsiveness across social channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 9,
    "collection": "experience",
    "serviceType": "ai_design",
    "standardName": "Online Social Presence (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Online social presence AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for social presence and audience engagement, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Marketing, Communications & CX leaders",
    "industryRelevance": "organisations using social channels for brand, customer engagement or public communication",
    "features": [
      "Architecture alignment for Online Social Presence (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Marketing, Communications, CX & Digital",
    "businessImpact": "Increases audience reach, content consistency, engagement quality and campaign responsiveness across social channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 10,
    "collection": "experience",
    "serviceType": "deploy",
    "standardName": "Online Social Presence (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Online social presence Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed social presence and audience engagement changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Marketing, Communications & CX leaders",
    "industryRelevance": "organisations using social channels for brand, customer engagement or public communication",
    "features": [
      "Architecture alignment for Online Social Presence (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Marketing, Communications, CX & Digital",
    "businessImpact": "Increases audience reach, content consistency, engagement quality and campaign responsiveness across social channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      8
    ]
  },
  {
    "id": 11,
    "collection": "experience",
    "serviceType": "ai_deploy",
    "standardName": "Online Social Presence (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Online social presence AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled social presence and audience engagement workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Marketing, Communications & CX leaders",
    "industryRelevance": "organisations using social channels for brand, customer engagement or public communication",
    "features": [
      "Architecture alignment for Online Social Presence (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Marketing, Communications, CX & Digital",
    "businessImpact": "Increases audience reach, content consistency, engagement quality and campaign responsiveness across social channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      9
    ]
  },
  {
    "id": 12,
    "collection": "experience",
    "serviceType": "manage",
    "standardName": "Online Social Presence (High-Impact) - Managed",
    "remixName": {},
    "description": "The Online social presence Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve social presence and audience engagement with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Marketing, Communications & CX leaders",
    "industryRelevance": "organisations using social channels for brand, customer engagement or public communication",
    "features": [
      "Architecture alignment for Online Social Presence (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Marketing, Communications, CX & Digital",
    "businessImpact": "Increases audience reach, content consistency, engagement quality and campaign responsiveness across social channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 13,
    "collection": "experience",
    "serviceType": "advisory",
    "standardName": "Mobile Apps (High-Impact) - Assess",
    "remixName": {},
    "description": "The Mobile apps Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps maturity and returns prioritised improvements your product and technology leaders can act on.",
    "positioning": "See how mobile apps and mobile services perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Digital Product, CX & Operations leaders",
    "industryRelevance": "organisations with mobile-first customers, employees, partners or field operations",
    "features": [
      "Architecture alignment for Mobile Apps (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital Product, CX, Operations & IT",
    "businessImpact": "Improves mobile adoption, service convenience, journey completion and digital channel performance.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 14,
    "collection": "experience",
    "serviceType": "design",
    "standardName": "Mobile Apps (High-Impact) - Design",
    "remixName": {},
    "description": "The Mobile apps Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement turns mobile goals into user-centred designs and build-ready specifications.",
    "positioning": "Turn mobile apps and mobile services goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Digital Product, CX & Operations leaders",
    "industryRelevance": "organisations with mobile-first customers, employees, partners or field operations",
    "features": [
      "Architecture alignment for Mobile Apps (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital Product, CX, Operations & IT",
    "businessImpact": "Improves mobile adoption, service convenience, journey completion and digital channel performance.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 15,
    "collection": "experience",
    "serviceType": "ai_design",
    "standardName": "Mobile Apps (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Mobile apps AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for mobile apps and mobile services, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Digital Product, CX & Operations leaders",
    "industryRelevance": "organisations with mobile-first customers, employees, partners or field operations",
    "features": [
      "Architecture alignment for Mobile Apps (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital Product, CX, Operations & IT",
    "businessImpact": "Improves mobile adoption, service convenience, journey completion and digital channel performance.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 16,
    "collection": "experience",
    "serviceType": "deploy",
    "standardName": "Mobile Apps (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Mobile apps Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed mobile apps and mobile services changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Digital Product, CX & Operations leaders",
    "industryRelevance": "organisations with mobile-first customers, employees, partners or field operations",
    "features": [
      "Architecture alignment for Mobile Apps (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital Product, CX, Operations & IT",
    "businessImpact": "Improves mobile adoption, service convenience, journey completion and digital channel performance.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      14
    ]
  },
  {
    "id": 17,
    "collection": "experience",
    "serviceType": "ai_deploy",
    "standardName": "Mobile Apps (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Mobile apps AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled mobile apps and mobile services workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Digital Product, CX & Operations leaders",
    "industryRelevance": "organisations with mobile-first customers, employees, partners or field operations",
    "features": [
      "Architecture alignment for Mobile Apps (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital Product, CX, Operations & IT",
    "businessImpact": "Improves mobile adoption, service convenience, journey completion and digital channel performance.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      15
    ]
  },
  {
    "id": 18,
    "collection": "experience",
    "serviceType": "manage",
    "standardName": "Mobile Apps (High-Impact) - Managed",
    "remixName": {},
    "description": "The Mobile apps Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve mobile apps and mobile services with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Digital Product, CX & Operations leaders",
    "industryRelevance": "organisations with mobile-first customers, employees, partners or field operations",
    "features": [
      "Architecture alignment for Mobile Apps (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital Product, CX, Operations & IT",
    "businessImpact": "Improves mobile adoption, service convenience, journey completion and digital channel performance.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 19,
    "collection": "experience",
    "serviceType": "advisory",
    "standardName": "Physical Channels (High-Impact) - Assess",
    "remixName": {},
    "description": "The Physical channels Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps gaps and returns prioritised improvements across branches, kiosks, and digital handoffs.",
    "positioning": "See how physical channels and frontline experience perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Operations, CX & Facilities leaders",
    "industryRelevance": "organisations operating branches, stores, clinics, offices, venues or service centres",
    "features": [
      "Architecture alignment for Physical Channels (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Operations, CX, Facilities & Digital",
    "businessImpact": "Enhances physical service productivity, customer experience consistency and visibility across in-person channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 20,
    "collection": "experience",
    "serviceType": "design",
    "standardName": "Physical Channels (High-Impact) - Design",
    "remixName": {},
    "description": "The Physical channels Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines connected experiences across kiosks, branches, and digital touchpoints.",
    "positioning": "Turn physical channels and frontline experience goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Operations, CX & Facilities leaders",
    "industryRelevance": "organisations operating branches, stores, clinics, offices, venues or service centres",
    "features": [
      "Architecture alignment for Physical Channels (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Operations, CX, Facilities & Digital",
    "businessImpact": "Enhances physical service productivity, customer experience consistency and visibility across in-person channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 21,
    "collection": "experience",
    "serviceType": "ai_design",
    "standardName": "Physical Channels (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Physical channels AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for physical channels and frontline experience, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Operations, CX & Facilities leaders",
    "industryRelevance": "organisations operating branches, stores, clinics, offices, venues or service centres",
    "features": [
      "Architecture alignment for Physical Channels (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Operations, CX, Facilities & Digital",
    "businessImpact": "Enhances physical service productivity, customer experience consistency and visibility across in-person channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 22,
    "collection": "experience",
    "serviceType": "deploy",
    "standardName": "Physical Channels (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Physical channels Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed physical channels and frontline experience changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Operations, CX & Facilities leaders",
    "industryRelevance": "organisations operating branches, stores, clinics, offices, venues or service centres",
    "features": [
      "Architecture alignment for Physical Channels (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Operations, CX, Facilities & Digital",
    "businessImpact": "Enhances physical service productivity, customer experience consistency and visibility across in-person channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      20
    ]
  },
  {
    "id": 23,
    "collection": "experience",
    "serviceType": "ai_deploy",
    "standardName": "Physical Channels (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Physical channels AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled physical channels and frontline experience workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Operations, CX & Facilities leaders",
    "industryRelevance": "organisations operating branches, stores, clinics, offices, venues or service centres",
    "features": [
      "Architecture alignment for Physical Channels (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Operations, CX, Facilities & Digital",
    "businessImpact": "Enhances physical service productivity, customer experience consistency and visibility across in-person channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      21
    ]
  },
  {
    "id": 24,
    "collection": "experience",
    "serviceType": "manage",
    "standardName": "Physical Channels (High-Impact) - Managed",
    "remixName": {},
    "description": "The Physical channels Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve physical channels and frontline experience with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Operations, CX & Facilities leaders",
    "industryRelevance": "organisations operating branches, stores, clinics, offices, venues or service centres",
    "features": [
      "Architecture alignment for Physical Channels (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Operations, CX, Facilities & Digital",
    "businessImpact": "Enhances physical service productivity, customer experience consistency and visibility across in-person channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 25,
    "collection": "experience",
    "serviceType": "advisory",
    "standardName": "Integrated Experience (High-Impact) - Assess",
    "remixName": {},
    "description": "The Integrated experience Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps cross-channel gaps and returns prioritised improvements your CX and digital leaders can act on.",
    "positioning": "See how integrated customer and employee experience perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "CX, Digital, Product & Marketing leaders",
    "industryRelevance": "organisations improving customer, employee or stakeholder experience ecosystems",
    "features": [
      "Architecture alignment for Experience Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "CX, Digital, Product & Transformation",
    "businessImpact": "Improves journey consistency, engagement quality, personalisation readiness and experience-led growth.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 26,
    "collection": "experience",
    "serviceType": "design",
    "standardName": "Integrated Experience (High-Impact) - Design",
    "remixName": {},
    "description": "The Integrated experience Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines connected journeys and build-ready experience specifications.",
    "positioning": "Turn integrated customer and employee experience goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "CX, Digital, Product & Marketing leaders",
    "industryRelevance": "organisations improving customer, employee or stakeholder experience ecosystems",
    "features": [
      "Architecture alignment for Experience Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "CX, Digital, Product & Transformation",
    "businessImpact": "Improves journey consistency, engagement quality, personalisation readiness and experience-led growth.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 27,
    "collection": "experience",
    "serviceType": "ai_design",
    "standardName": "Integrated Experience (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Integrated experience AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for integrated customer and employee experience, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "CX, Digital, Product & Marketing leaders",
    "industryRelevance": "organisations improving customer, employee or stakeholder experience ecosystems",
    "features": [
      "Architecture alignment for Experience Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "CX, Digital, Product & Transformation",
    "businessImpact": "Improves journey consistency, engagement quality, personalisation readiness and experience-led growth.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 28,
    "collection": "experience",
    "serviceType": "deploy",
    "standardName": "Integrated Experience (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Integrated experience Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed integrated customer and employee experience changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "CX, Digital, Product & Marketing leaders",
    "industryRelevance": "organisations improving customer, employee or stakeholder experience ecosystems",
    "features": [
      "Architecture alignment for Experience Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "CX, Digital, Product & Transformation",
    "businessImpact": "Improves journey consistency, engagement quality, personalisation readiness and experience-led growth.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      26
    ]
  },
  {
    "id": 29,
    "collection": "experience",
    "serviceType": "ai_deploy",
    "standardName": "Integrated Experience (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Integrated experience AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled integrated customer and employee experience workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "CX, Digital, Product & Marketing leaders",
    "industryRelevance": "organisations improving customer, employee or stakeholder experience ecosystems",
    "features": [
      "Architecture alignment for Experience Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "CX, Digital, Product & Transformation",
    "businessImpact": "Improves journey consistency, engagement quality, personalisation readiness and experience-led growth.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      27
    ]
  },
  {
    "id": 30,
    "collection": "experience",
    "serviceType": "manage",
    "standardName": "Integrated Experience (High-Impact) - Managed",
    "remixName": {},
    "description": "The Integrated experience Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve integrated customer and employee experience with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "CX, Digital, Product & Marketing leaders",
    "industryRelevance": "organisations improving customer, employee or stakeholder experience ecosystems",
    "features": [
      "Architecture alignment for Experience Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "CX, Digital, Product & Transformation",
    "businessImpact": "Improves journey consistency, engagement quality, personalisation readiness and experience-led growth.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 31,
    "collection": "experience",
    "serviceType": "advisory",
    "standardName": "CRM Solutions (High-Impact) - Assess",
    "remixName": {},
    "description": "The Crm solutions Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps maturity and returns a prioritised CRM improvement roadmap.",
    "positioning": "See how CRM and relationship management perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Sales, Marketing, Service & CX leaders",
    "industryRelevance": "organisations managing sales pipelines, accounts, customer service or relationship portfolios",
    "features": [
      "Architecture alignment for CRM Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Sales, Marketing, Service, CX & IT",
    "businessImpact": "Increases pipeline visibility, customer understanding, relationship consistency and revenue operations discipline.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 32,
    "collection": "experience",
    "serviceType": "design",
    "standardName": "CRM Solutions (High-Impact) - Design",
    "remixName": {},
    "description": "The Crm solutions Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement turns CRM goals into user-centred workflows and build-ready specifications.",
    "positioning": "Turn CRM and relationship management goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Sales, Marketing, Service & CX leaders",
    "industryRelevance": "organisations managing sales pipelines, accounts, customer service or relationship portfolios",
    "features": [
      "Architecture alignment for CRM Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Sales, Marketing, Service, CX & IT",
    "businessImpact": "Increases pipeline visibility, customer understanding, relationship consistency and revenue operations discipline.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 33,
    "collection": "experience",
    "serviceType": "ai_design",
    "standardName": "CRM Solutions (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Crm solutions AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for CRM and relationship management, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Sales, Marketing, Service & CX leaders",
    "industryRelevance": "organisations managing sales pipelines, accounts, customer service or relationship portfolios",
    "features": [
      "Architecture alignment for CRM Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Sales, Marketing, Service, CX & IT",
    "businessImpact": "Increases pipeline visibility, customer understanding, relationship consistency and revenue operations discipline.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 34,
    "collection": "experience",
    "serviceType": "deploy",
    "standardName": "CRM Solutions (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Crm solutions Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed CRM and relationship management changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Sales, Marketing, Service & CX leaders",
    "industryRelevance": "organisations managing sales pipelines, accounts, customer service or relationship portfolios",
    "features": [
      "Architecture alignment for CRM Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Sales, Marketing, Service, CX & IT",
    "businessImpact": "Increases pipeline visibility, customer understanding, relationship consistency and revenue operations discipline.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      32
    ]
  },
  {
    "id": 35,
    "collection": "experience",
    "serviceType": "ai_deploy",
    "standardName": "CRM Solutions (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Crm solutions AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled CRM and relationship management workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Sales, Marketing, Service & CX leaders",
    "industryRelevance": "organisations managing sales pipelines, accounts, customer service or relationship portfolios",
    "features": [
      "Architecture alignment for CRM Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Sales, Marketing, Service, CX & IT",
    "businessImpact": "Increases pipeline visibility, customer understanding, relationship consistency and revenue operations discipline.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      33
    ]
  },
  {
    "id": 36,
    "collection": "experience",
    "serviceType": "manage",
    "standardName": "CRM Solutions (High-Impact) - Managed",
    "remixName": {},
    "description": "The Crm solutions Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve CRM and relationship management with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Sales, Marketing, Service & CX leaders",
    "industryRelevance": "organisations managing sales pipelines, accounts, customer service or relationship portfolios",
    "features": [
      "Architecture alignment for CRM Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Sales, Marketing, Service, CX & IT",
    "businessImpact": "Increases pipeline visibility, customer understanding, relationship consistency and revenue operations discipline.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 37,
    "collection": "experience",
    "serviceType": "advisory",
    "standardName": "Marketing Solutions (High-Impact) - Assess",
    "remixName": {},
    "description": "The Marketing solutions Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps gaps and returns prioritised improvements your marketing and technology leaders can act on.",
    "positioning": "See how marketing operations and campaigns perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "CMOs, Marketing Ops & Growth leaders",
    "industryRelevance": "organisations seeking measurable, data-driven and scalable marketing operations",
    "features": [
      "Architecture alignment for Marketing Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Marketing, Growth, Digital & Analytics",
    "businessImpact": "Improves campaign performance, marketing productivity, audience targeting and return on marketing investment.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 38,
    "collection": "experience",
    "serviceType": "design",
    "standardName": "Marketing Solutions (High-Impact) - Design",
    "remixName": {},
    "description": "The Marketing solutions Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement turns marketing goals into campaign structures and build-ready specifications.",
    "positioning": "Turn marketing operations and campaigns goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "CMOs, Marketing Ops & Growth leaders",
    "industryRelevance": "organisations seeking measurable, data-driven and scalable marketing operations",
    "features": [
      "Architecture alignment for Marketing Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Marketing, Growth, Digital & Analytics",
    "businessImpact": "Improves campaign performance, marketing productivity, audience targeting and return on marketing investment.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 39,
    "collection": "experience",
    "serviceType": "ai_design",
    "standardName": "Marketing Solutions (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Marketing solutions AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for marketing operations and campaigns, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "CMOs, Marketing Ops & Growth leaders",
    "industryRelevance": "organisations seeking measurable, data-driven and scalable marketing operations",
    "features": [
      "Architecture alignment for Marketing Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Marketing, Growth, Digital & Analytics",
    "businessImpact": "Improves campaign performance, marketing productivity, audience targeting and return on marketing investment.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 40,
    "collection": "experience",
    "serviceType": "deploy",
    "standardName": "Marketing Solutions (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Marketing solutions Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed marketing operations and campaigns changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "CMOs, Marketing Ops & Growth leaders",
    "industryRelevance": "organisations seeking measurable, data-driven and scalable marketing operations",
    "features": [
      "Architecture alignment for Marketing Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Marketing, Growth, Digital & Analytics",
    "businessImpact": "Improves campaign performance, marketing productivity, audience targeting and return on marketing investment.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      38
    ]
  },
  {
    "id": 41,
    "collection": "experience",
    "serviceType": "ai_deploy",
    "standardName": "Marketing Solutions (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Marketing solutions AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled marketing operations and campaigns workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "CMOs, Marketing Ops & Growth leaders",
    "industryRelevance": "organisations seeking measurable, data-driven and scalable marketing operations",
    "features": [
      "Architecture alignment for Marketing Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Marketing, Growth, Digital & Analytics",
    "businessImpact": "Improves campaign performance, marketing productivity, audience targeting and return on marketing investment.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      39
    ]
  },
  {
    "id": 42,
    "collection": "experience",
    "serviceType": "manage",
    "standardName": "Marketing Solutions (High-Impact) - Managed",
    "remixName": {},
    "description": "The Marketing solutions Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve marketing operations and campaigns with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "CMOs, Marketing Ops & Growth leaders",
    "industryRelevance": "organisations seeking measurable, data-driven and scalable marketing operations",
    "features": [
      "Architecture alignment for Marketing Solutions (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Marketing, Growth, Digital & Analytics",
    "businessImpact": "Improves campaign performance, marketing productivity, audience targeting and return on marketing investment.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 43,
    "collection": "experience",
    "serviceType": "advisory",
    "standardName": "Smart Sales & Quotation (High-Impact) - Assess",
    "remixName": {},
    "description": "The Smart sales & quotation Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps process and platform gaps and returns prioritised improvements your commercial leaders can act on.",
    "positioning": "See how sales and quotation perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Sales, Commercial & Revenue Ops leaders",
    "industryRelevance": "organisations with structured sales, pricing, quotation or proposal processes",
    "features": [
      "Architecture alignment for Smart Sales & Quotation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Sales, Commercial, Revenue Operations & Finance",
    "businessImpact": "Accelerates quote turnaround, improves pricing control, reduces manual effort and strengthens sales conversion.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 44,
    "collection": "experience",
    "serviceType": "design",
    "standardName": "Smart Sales & Quotation (High-Impact) - Design",
    "remixName": {},
    "description": "The Smart sales & quotation Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines sales journeys and build-ready specifications.",
    "positioning": "Turn sales and quotation goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Sales, Commercial & Revenue Ops leaders",
    "industryRelevance": "organisations with structured sales, pricing, quotation or proposal processes",
    "features": [
      "Architecture alignment for Smart Sales & Quotation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Sales, Commercial, Revenue Operations & Finance",
    "businessImpact": "Accelerates quote turnaround, improves pricing control, reduces manual effort and strengthens sales conversion.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 45,
    "collection": "experience",
    "serviceType": "ai_design",
    "standardName": "Smart Sales & Quotation (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Smart sales & quotation AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for sales and quotation, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Sales, Commercial & Revenue Ops leaders",
    "industryRelevance": "organisations with structured sales, pricing, quotation or proposal processes",
    "features": [
      "Architecture alignment for Smart Sales & Quotation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Sales, Commercial, Revenue Operations & Finance",
    "businessImpact": "Accelerates quote turnaround, improves pricing control, reduces manual effort and strengthens sales conversion.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 46,
    "collection": "experience",
    "serviceType": "deploy",
    "standardName": "Smart Sales & Quotation (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Smart sales & quotation Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed sales and quotation changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Sales, Commercial & Revenue Ops leaders",
    "industryRelevance": "organisations with structured sales, pricing, quotation or proposal processes",
    "features": [
      "Architecture alignment for Smart Sales & Quotation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Sales, Commercial, Revenue Operations & Finance",
    "businessImpact": "Accelerates quote turnaround, improves pricing control, reduces manual effort and strengthens sales conversion.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      44
    ]
  },
  {
    "id": 47,
    "collection": "experience",
    "serviceType": "ai_deploy",
    "standardName": "Smart Sales & Quotation (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Smart sales & quotation AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled sales and quotation workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Sales, Commercial & Revenue Ops leaders",
    "industryRelevance": "organisations with structured sales, pricing, quotation or proposal processes",
    "features": [
      "Architecture alignment for Smart Sales & Quotation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Sales, Commercial, Revenue Operations & Finance",
    "businessImpact": "Accelerates quote turnaround, improves pricing control, reduces manual effort and strengthens sales conversion.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      45
    ]
  },
  {
    "id": 48,
    "collection": "experience",
    "serviceType": "manage",
    "standardName": "Smart Sales & Quotation (High-Impact) - Managed",
    "remixName": {},
    "description": "The Smart sales & quotation Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve sales and quotation with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Sales, Commercial & Revenue Ops leaders",
    "industryRelevance": "organisations with structured sales, pricing, quotation or proposal processes",
    "features": [
      "Architecture alignment for Smart Sales & Quotation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Sales, Commercial, Revenue Operations & Finance",
    "businessImpact": "Accelerates quote turnaround, improves pricing control, reduces manual effort and strengthens sales conversion.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 49,
    "collection": "experience",
    "serviceType": "advisory",
    "standardName": "Customer Support & Success (High-Impact) - Assess",
    "remixName": {},
    "description": "The Customer support & success Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps support maturity and returns prioritised improvements your CX and operations leaders can act on.",
    "positioning": "See how customer support and success perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Customer Service, Success & CX leaders",
    "industryRelevance": "organisations operating customer care, support, aftersales or account success functions",
    "features": [
      "Architecture alignment for Customer Support & Success (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Customer Service, Success, CX & Operations",
    "businessImpact": "Improves service responsiveness, resolution quality, customer retention and support productivity.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 50,
    "collection": "experience",
    "serviceType": "design",
    "standardName": "Customer Support & Success (High-Impact) - Design",
    "remixName": {},
    "description": "The Customer support & success Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines support experiences and build-ready specifications.",
    "positioning": "Turn customer support and success goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Customer Service, Success & CX leaders",
    "industryRelevance": "organisations operating customer care, support, aftersales or account success functions",
    "features": [
      "Architecture alignment for Customer Support & Success (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Customer Service, Success, CX & Operations",
    "businessImpact": "Improves service responsiveness, resolution quality, customer retention and support productivity.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 51,
    "collection": "experience",
    "serviceType": "ai_design",
    "standardName": "Customer Support & Success (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Customer support & success AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for customer support and success, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Customer Service, Success & CX leaders",
    "industryRelevance": "organisations operating customer care, support, aftersales or account success functions",
    "features": [
      "Architecture alignment for Customer Support & Success (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Customer Service, Success, CX & Operations",
    "businessImpact": "Improves service responsiveness, resolution quality, customer retention and support productivity.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 52,
    "collection": "experience",
    "serviceType": "deploy",
    "standardName": "Customer Support & Success (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Customer support & success Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed customer support and success changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Customer Service, Success & CX leaders",
    "industryRelevance": "organisations operating customer care, support, aftersales or account success functions",
    "features": [
      "Architecture alignment for Customer Support & Success (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Customer Service, Success, CX & Operations",
    "businessImpact": "Improves service responsiveness, resolution quality, customer retention and support productivity.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      50
    ]
  },
  {
    "id": 53,
    "collection": "experience",
    "serviceType": "ai_deploy",
    "standardName": "Customer Support & Success (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Customer support & success AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled customer support and success workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Customer Service, Success & CX leaders",
    "industryRelevance": "organisations operating customer care, support, aftersales or account success functions",
    "features": [
      "Architecture alignment for Customer Support & Success (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Customer Service, Success, CX & Operations",
    "businessImpact": "Improves service responsiveness, resolution quality, customer retention and support productivity.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      51
    ]
  },
  {
    "id": 54,
    "collection": "experience",
    "serviceType": "manage",
    "standardName": "Customer Support & Success (High-Impact) - Managed",
    "remixName": {},
    "description": "The Customer support & success Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve customer support and success with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Customer Service, Success & CX leaders",
    "industryRelevance": "organisations operating customer care, support, aftersales or account success functions",
    "features": [
      "Architecture alignment for Customer Support & Success (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Customer Service, Success, CX & Operations",
    "businessImpact": "Improves service responsiveness, resolution quality, customer retention and support productivity.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 55,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "Digital Workplace (High-Impact) - Assess",
    "remixName": {},
    "description": "The Digital workplace Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps digital workplace maturity and returns prioritised improvements your operations and IT leaders can act on.",
    "positioning": "See how digital workplace and collaboration perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "HR, IT & Internal Comms leaders",
    "industryRelevance": "organisations modernising work, collaboration and employee productivity environments",
    "features": [
      "Architecture alignment for Digital Workplace (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "HR, IT, Operations & Internal Communications",
    "businessImpact": "Improves collaboration, employee productivity, knowledge access and adoption of digital ways of working.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 56,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "Digital Workplace (High-Impact) - Design",
    "remixName": {},
    "description": "The Digital workplace Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement turns workplace goals into user-centred designs and build-ready specifications.",
    "positioning": "Turn digital workplace and collaboration goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "HR, IT & Internal Comms leaders",
    "industryRelevance": "organisations modernising work, collaboration and employee productivity environments",
    "features": [
      "Architecture alignment for Digital Workplace (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "HR, IT, Operations & Internal Communications",
    "businessImpact": "Improves collaboration, employee productivity, knowledge access and adoption of digital ways of working.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 57,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "Digital Workplace (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Digital workplace AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for digital workplace and collaboration, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "HR, IT & Internal Comms leaders",
    "industryRelevance": "organisations modernising work, collaboration and employee productivity environments",
    "features": [
      "Architecture alignment for Digital Workplace (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "HR, IT, Operations & Internal Communications",
    "businessImpact": "Improves collaboration, employee productivity, knowledge access and adoption of digital ways of working.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 58,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "Digital Workplace (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Digital workplace Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed digital workplace and collaboration changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "HR, IT & Internal Comms leaders",
    "industryRelevance": "organisations modernising work, collaboration and employee productivity environments",
    "features": [
      "Architecture alignment for Digital Workplace (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "HR, IT, Operations & Internal Communications",
    "businessImpact": "Improves collaboration, employee productivity, knowledge access and adoption of digital ways of working.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      56
    ]
  },
  {
    "id": 59,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "Digital Workplace (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Digital workplace AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled digital workplace and collaboration workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "HR, IT & Internal Comms leaders",
    "industryRelevance": "organisations modernising work, collaboration and employee productivity environments",
    "features": [
      "Architecture alignment for Digital Workplace (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "HR, IT, Operations & Internal Communications",
    "businessImpact": "Improves collaboration, employee productivity, knowledge access and adoption of digital ways of working.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      57
    ]
  },
  {
    "id": 60,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "Digital Workplace (High-Impact) - Managed",
    "remixName": {},
    "description": "The Digital workplace Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve digital workplace and collaboration with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "HR, IT & Internal Comms leaders",
    "industryRelevance": "organisations modernising work, collaboration and employee productivity environments",
    "features": [
      "Architecture alignment for Digital Workplace (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "HR, IT, Operations & Internal Communications",
    "businessImpact": "Improves collaboration, employee productivity, knowledge access and adoption of digital ways of working.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 61,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "Business Process Automation (High-Impact) - Assess",
    "remixName": {},
    "description": "The Business process automation Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps automation maturity and returns prioritised improvements your operations leaders can act on.",
    "positioning": "See how business process automation performs today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "COOs, Operations & Transformation leaders",
    "industryRelevance": "organisations with repeatable workflows, approval chains, handoffs or back-office operations",
    "features": [
      "Architecture alignment for Business Process Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Operations, Transformation, Process Excellence & IT",
    "businessImpact": "Reduces process cycle time, manual effort, rework and operational leakage while improving standardisation.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 62,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "Business Process Automation (High-Impact) - Design",
    "remixName": {},
    "description": "The Business process automation Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines process automation and build-ready specifications.",
    "positioning": "Turn business process automation goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "COOs, Operations & Transformation leaders",
    "industryRelevance": "organisations with repeatable workflows, approval chains, handoffs or back-office operations",
    "features": [
      "Architecture alignment for Business Process Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Operations, Transformation, Process Excellence & IT",
    "businessImpact": "Reduces process cycle time, manual effort, rework and operational leakage while improving standardisation.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 63,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "Business Process Automation (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Business process automation AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for business process automation, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "COOs, Operations & Transformation leaders",
    "industryRelevance": "organisations with repeatable workflows, approval chains, handoffs or back-office operations",
    "features": [
      "Architecture alignment for Business Process Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Operations, Transformation, Process Excellence & IT",
    "businessImpact": "Reduces process cycle time, manual effort, rework and operational leakage while improving standardisation.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 64,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "Business Process Automation (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Business process automation Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed business process automation changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "COOs, Operations & Transformation leaders",
    "industryRelevance": "organisations with repeatable workflows, approval chains, handoffs or back-office operations",
    "features": [
      "Architecture alignment for Business Process Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Operations, Transformation, Process Excellence & IT",
    "businessImpact": "Reduces process cycle time, manual effort, rework and operational leakage while improving standardisation.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      62
    ]
  },
  {
    "id": 65,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "Business Process Automation (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Business process automation AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled business process automation workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "COOs, Operations & Transformation leaders",
    "industryRelevance": "organisations with repeatable workflows, approval chains, handoffs or back-office operations",
    "features": [
      "Architecture alignment for Business Process Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Operations, Transformation, Process Excellence & IT",
    "businessImpact": "Reduces process cycle time, manual effort, rework and operational leakage while improving standardisation.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      63
    ]
  },
  {
    "id": 66,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "Business Process Automation (High-Impact) - Managed",
    "remixName": {},
    "description": "The Business process automation Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve business process automation with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "COOs, Operations & Transformation leaders",
    "industryRelevance": "organisations with repeatable workflows, approval chains, handoffs or back-office operations",
    "features": [
      "Architecture alignment for Business Process Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Operations, Transformation, Process Excellence & IT",
    "businessImpact": "Reduces process cycle time, manual effort, rework and operational leakage while improving standardisation.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 73,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "Specialised Operations (High-Impact) - Assess",
    "remixName": {},
    "description": "The Specialised operations Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps operational maturity and returns prioritised improvements your domain leaders can act on.",
    "positioning": "See how specialised operations perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Business Unit & Domain Operations leaders",
    "industryRelevance": "domain-specific operations requiring fit-for-purpose digital enablement",
    "features": [
      "Architecture alignment for Specialized Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Business Operations, Domain Functions & Transformation",
    "businessImpact": "Improves performance, control and scalability in specialised business functions where generic systems are insufficient.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 74,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "Specialised Operations (High-Impact) - Design",
    "remixName": {},
    "description": "The Specialised operations Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement turns operational goals into structured designs and build-ready specifications.",
    "positioning": "Turn specialised operations goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Business Unit & Domain Operations leaders",
    "industryRelevance": "domain-specific operations requiring fit-for-purpose digital enablement",
    "features": [
      "Architecture alignment for Specialized Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Business Operations, Domain Functions & Transformation",
    "businessImpact": "Improves performance, control and scalability in specialised business functions where generic systems are insufficient.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 75,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "Specialised Operations (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Specialised operations AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for specialised operations, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Business Unit & Domain Operations leaders",
    "industryRelevance": "domain-specific operations requiring fit-for-purpose digital enablement",
    "features": [
      "Architecture alignment for Specialized Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Business Operations, Domain Functions & Transformation",
    "businessImpact": "Improves performance, control and scalability in specialised business functions where generic systems are insufficient.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 76,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "Specialised Operations (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Specialised operations Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed specialised operations changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Business Unit & Domain Operations leaders",
    "industryRelevance": "domain-specific operations requiring fit-for-purpose digital enablement",
    "features": [
      "Architecture alignment for Specialized Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Business Operations, Domain Functions & Transformation",
    "businessImpact": "Improves performance, control and scalability in specialised business functions where generic systems are insufficient.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      74
    ]
  },
  {
    "id": 77,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "Specialised Operations (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Specialised operations AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled specialised operations workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Business Unit & Domain Operations leaders",
    "industryRelevance": "domain-specific operations requiring fit-for-purpose digital enablement",
    "features": [
      "Architecture alignment for Specialized Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Business Operations, Domain Functions & Transformation",
    "businessImpact": "Improves performance, control and scalability in specialised business functions where generic systems are insufficient.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      75
    ]
  },
  {
    "id": 78,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "Specialised Operations (High-Impact) - Managed",
    "remixName": {},
    "description": "The Specialised operations Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve specialised operations with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Business Unit & Domain Operations leaders",
    "industryRelevance": "domain-specific operations requiring fit-for-purpose digital enablement",
    "features": [
      "Architecture alignment for Specialized Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Business Operations, Domain Functions & Transformation",
    "businessImpact": "Improves performance, control and scalability in specialised business functions where generic systems are insufficient.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 79,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "Enterprise Operations (High-Impact) - Assess",
    "remixName": {},
    "description": "The Enterprise operations Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps operational maturity and returns a prioritised enterprise improvement roadmap.",
    "positioning": "See how enterprise operations perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "COOs, Strategy & Transformation leaders",
    "industryRelevance": "organisations seeking enterprise-level operational coherence and execution visibility",
    "features": [
      "Architecture alignment for Enterprise Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Enterprise Operations, Strategy & Transformation",
    "businessImpact": "Improves enterprise coordination, operating visibility, decision speed and execution discipline across functions.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 80,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "Enterprise Operations (High-Impact) - Design",
    "remixName": {},
    "description": "The Enterprise operations Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines enterprise workflows and build-ready specifications.",
    "positioning": "Turn enterprise operations goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "COOs, Strategy & Transformation leaders",
    "industryRelevance": "organisations seeking enterprise-level operational coherence and execution visibility",
    "features": [
      "Architecture alignment for Enterprise Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Enterprise Operations, Strategy & Transformation",
    "businessImpact": "Improves enterprise coordination, operating visibility, decision speed and execution discipline across functions.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 81,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "Enterprise Operations (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Enterprise operations AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for enterprise operations, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "COOs, Strategy & Transformation leaders",
    "industryRelevance": "organisations seeking enterprise-level operational coherence and execution visibility",
    "features": [
      "Architecture alignment for Enterprise Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Enterprise Operations, Strategy & Transformation",
    "businessImpact": "Improves enterprise coordination, operating visibility, decision speed and execution discipline across functions.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 82,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "Enterprise Operations (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Enterprise operations Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed enterprise operations changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "COOs, Strategy & Transformation leaders",
    "industryRelevance": "organisations seeking enterprise-level operational coherence and execution visibility",
    "features": [
      "Architecture alignment for Enterprise Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Enterprise Operations, Strategy & Transformation",
    "businessImpact": "Improves enterprise coordination, operating visibility, decision speed and execution discipline across functions.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      80
    ]
  },
  {
    "id": 83,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "Enterprise Operations (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Enterprise operations AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled enterprise operations workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "COOs, Strategy & Transformation leaders",
    "industryRelevance": "organisations seeking enterprise-level operational coherence and execution visibility",
    "features": [
      "Architecture alignment for Enterprise Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Enterprise Operations, Strategy & Transformation",
    "businessImpact": "Improves enterprise coordination, operating visibility, decision speed and execution discipline across functions.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      81
    ]
  },
  {
    "id": 84,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "Enterprise Operations (High-Impact) - Managed",
    "remixName": {},
    "description": "The Enterprise operations Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve enterprise operations with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "COOs, Strategy & Transformation leaders",
    "industryRelevance": "organisations seeking enterprise-level operational coherence and execution visibility",
    "features": [
      "Architecture alignment for Enterprise Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Enterprise Operations, Strategy & Transformation",
    "businessImpact": "Improves enterprise coordination, operating visibility, decision speed and execution discipline across functions.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 85,
    "collection": "security",
    "serviceType": "advisory",
    "standardName": "Governance, Risk & Compliance (High-Impact) - Assess",
    "remixName": {},
    "description": "The Governance, risk & compliance Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps governance maturity and returns prioritised improvements your risk and compliance leaders can act on.",
    "positioning": "See how governance, risk and compliance perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Risk, Compliance, Audit & Legal leaders",
    "industryRelevance": "regulated, risk-sensitive or control-heavy organisations",
    "features": [
      "Architecture alignment for Governance, Risk & Compliance (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "security",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Governance, Risk, Compliance, Audit & Legal",
    "businessImpact": "Reduces compliance exposure, improves control effectiveness, strengthens assurance and accelerates risk response.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 86,
    "collection": "security",
    "serviceType": "design",
    "standardName": "Governance, Risk & Compliance (High-Impact) - Design",
    "remixName": {},
    "description": "The Governance, risk & compliance Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines GRC operating models and build-ready specifications.",
    "positioning": "Turn governance, risk and compliance goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Risk, Compliance, Audit & Legal leaders",
    "industryRelevance": "regulated, risk-sensitive or control-heavy organisations",
    "features": [
      "Architecture alignment for Governance, Risk & Compliance (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "security",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Governance, Risk, Compliance, Audit & Legal",
    "businessImpact": "Reduces compliance exposure, improves control effectiveness, strengthens assurance and accelerates risk response.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 87,
    "collection": "security",
    "serviceType": "ai_design",
    "standardName": "Governance, Risk & Compliance (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Governance, risk & compliance AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for governance, risk and compliance, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Risk, Compliance, Audit & Legal leaders",
    "industryRelevance": "regulated, risk-sensitive or control-heavy organisations",
    "features": [
      "Architecture alignment for Governance, Risk & Compliance (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "security",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Governance, Risk, Compliance, Audit & Legal",
    "businessImpact": "Reduces compliance exposure, improves control effectiveness, strengthens assurance and accelerates risk response.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 88,
    "collection": "security",
    "serviceType": "deploy",
    "standardName": "Governance, Risk & Compliance (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Governance, risk & compliance Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed governance, risk and compliance changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Risk, Compliance, Audit & Legal leaders",
    "industryRelevance": "regulated, risk-sensitive or control-heavy organisations",
    "features": [
      "Architecture alignment for Governance, Risk & Compliance (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "security",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Governance, Risk, Compliance, Audit & Legal",
    "businessImpact": "Reduces compliance exposure, improves control effectiveness, strengthens assurance and accelerates risk response.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      86
    ]
  },
  {
    "id": 89,
    "collection": "security",
    "serviceType": "ai_deploy",
    "standardName": "Governance, Risk & Compliance (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Governance, risk & compliance AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled governance, risk and compliance workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Risk, Compliance, Audit & Legal leaders",
    "industryRelevance": "regulated, risk-sensitive or control-heavy organisations",
    "features": [
      "Architecture alignment for Governance, Risk & Compliance (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "security",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Governance, Risk, Compliance, Audit & Legal",
    "businessImpact": "Reduces compliance exposure, improves control effectiveness, strengthens assurance and accelerates risk response.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      87
    ]
  },
  {
    "id": 90,
    "collection": "security",
    "serviceType": "manage",
    "standardName": "Governance, Risk & Compliance (High-Impact) - Managed",
    "remixName": {},
    "description": "The Governance, risk & compliance Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve governance, risk and compliance with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Risk, Compliance, Audit & Legal leaders",
    "industryRelevance": "regulated, risk-sensitive or control-heavy organisations",
    "features": [
      "Architecture alignment for Governance, Risk & Compliance (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "security",
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Governance, Risk, Compliance, Audit & Legal",
    "businessImpact": "Reduces compliance exposure, improves control effectiveness, strengthens assurance and accelerates risk response.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 91,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "Enterprise Resource Planning (High-Impact) - Assess",
    "remixName": {},
    "description": "The Enterprise resource planning Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps ERP maturity and returns prioritised improvements your finance and operations leaders can act on.",
    "positioning": "See how ERP and core enterprise operations perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "CFOs, Finance, Procurement & HR leaders",
    "industryRelevance": "organisations relying on integrated enterprise resource planning capabilities",
    "features": [
      "Architecture alignment for Enterprise Resource Planning (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Finance, Procurement, HR, Operations & IT",
    "businessImpact": "Improves process integration, data consistency, financial control and operational efficiency across core enterprise functions.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 92,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "Enterprise Resource Planning (High-Impact) - Design",
    "remixName": {},
    "description": "The Enterprise resource planning Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines ERP workflows and build-ready specifications.",
    "positioning": "Turn ERP and core enterprise operations goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "CFOs, Finance, Procurement & HR leaders",
    "industryRelevance": "organisations relying on integrated enterprise resource planning capabilities",
    "features": [
      "Architecture alignment for Enterprise Resource Planning (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Finance, Procurement, HR, Operations & IT",
    "businessImpact": "Improves process integration, data consistency, financial control and operational efficiency across core enterprise functions.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 93,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "Enterprise Resource Planning (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Enterprise resource planning AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for ERP and core enterprise operations, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "CFOs, Finance, Procurement & HR leaders",
    "industryRelevance": "organisations relying on integrated enterprise resource planning capabilities",
    "features": [
      "Architecture alignment for Enterprise Resource Planning (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Finance, Procurement, HR, Operations & IT",
    "businessImpact": "Improves process integration, data consistency, financial control and operational efficiency across core enterprise functions.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 94,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "Enterprise Resource Planning (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Enterprise resource planning Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed ERP and core enterprise operations changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "CFOs, Finance, Procurement & HR leaders",
    "industryRelevance": "organisations relying on integrated enterprise resource planning capabilities",
    "features": [
      "Architecture alignment for Enterprise Resource Planning (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Finance, Procurement, HR, Operations & IT",
    "businessImpact": "Improves process integration, data consistency, financial control and operational efficiency across core enterprise functions.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      92
    ]
  },
  {
    "id": 95,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "Enterprise Resource Planning (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Enterprise resource planning AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled ERP and core enterprise operations workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "CFOs, Finance, Procurement & HR leaders",
    "industryRelevance": "organisations relying on integrated enterprise resource planning capabilities",
    "features": [
      "Architecture alignment for Enterprise Resource Planning (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Finance, Procurement, HR, Operations & IT",
    "businessImpact": "Improves process integration, data consistency, financial control and operational efficiency across core enterprise functions.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      93
    ]
  },
  {
    "id": 96,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "Enterprise Resource Planning (High-Impact) - Managed",
    "remixName": {},
    "description": "The Enterprise resource planning Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve ERP and core enterprise operations with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "CFOs, Finance, Procurement & HR leaders",
    "industryRelevance": "organisations relying on integrated enterprise resource planning capabilities",
    "features": [
      "Architecture alignment for Enterprise Resource Planning (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Finance, Procurement, HR, Operations & IT",
    "businessImpact": "Improves process integration, data consistency, financial control and operational efficiency across core enterprise functions.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 97,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "Workforce Management (High-Impact) - Assess",
    "remixName": {},
    "description": "The Workforce management Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps workforce maturity and returns prioritised improvements your HR and operations leaders can act on.",
    "positioning": "See how workforce management performs today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "HR, Workforce Planning & Operations leaders",
    "industryRelevance": "organisations managing distributed, shift-based, field, frontline or knowledge workforces",
    "features": [
      "Architecture alignment for Workforce Management (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "HR, Workforce Planning, Operations & IT",
    "businessImpact": "Improves workforce utilisation, scheduling accuracy, productivity visibility and employee coordination.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 98,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "Workforce Management (High-Impact) - Design",
    "remixName": {},
    "description": "The Workforce management Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines workforce workflows and build-ready specifications.",
    "positioning": "Turn workforce management goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "HR, Workforce Planning & Operations leaders",
    "industryRelevance": "organisations managing distributed, shift-based, field, frontline or knowledge workforces",
    "features": [
      "Architecture alignment for Workforce Management (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "HR, Workforce Planning, Operations & IT",
    "businessImpact": "Improves workforce utilisation, scheduling accuracy, productivity visibility and employee coordination.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 99,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "Workforce Management (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Workforce management AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for workforce management, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "HR, Workforce Planning & Operations leaders",
    "industryRelevance": "organisations managing distributed, shift-based, field, frontline or knowledge workforces",
    "features": [
      "Architecture alignment for Workforce Management (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "HR, Workforce Planning, Operations & IT",
    "businessImpact": "Improves workforce utilisation, scheduling accuracy, productivity visibility and employee coordination.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 100,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "Workforce Management (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Workforce management Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed workforce management changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "HR, Workforce Planning & Operations leaders",
    "industryRelevance": "organisations managing distributed, shift-based, field, frontline or knowledge workforces",
    "features": [
      "Architecture alignment for Workforce Management (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "HR, Workforce Planning, Operations & IT",
    "businessImpact": "Improves workforce utilisation, scheduling accuracy, productivity visibility and employee coordination.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      98
    ]
  },
  {
    "id": 101,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "Workforce Management (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Workforce management AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled workforce management workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "HR, Workforce Planning & Operations leaders",
    "industryRelevance": "organisations managing distributed, shift-based, field, frontline or knowledge workforces",
    "features": [
      "Architecture alignment for Workforce Management (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "HR, Workforce Planning, Operations & IT",
    "businessImpact": "Improves workforce utilisation, scheduling accuracy, productivity visibility and employee coordination.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      99
    ]
  },
  {
    "id": 102,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "Workforce Management (High-Impact) - Managed",
    "remixName": {},
    "description": "The Workforce management Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve workforce management with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "HR, Workforce Planning & Operations leaders",
    "industryRelevance": "organisations managing distributed, shift-based, field, frontline or knowledge workforces",
    "features": [
      "Architecture alignment for Workforce Management (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "HR, Workforce Planning, Operations & IT",
    "businessImpact": "Improves workforce utilisation, scheduling accuracy, productivity visibility and employee coordination.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 103,
    "collection": "ai",
    "serviceType": "advisory",
    "standardName": "Enterprise Data Platform (High-Impact) - Assess",
    "remixName": {},
    "description": "The Enterprise data platform Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps maturity and returns a prioritised roadmap for a trusted enterprise data platform.",
    "positioning": "See how enterprise data platform performs today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "CDOs, CIOs, Data & Analytics leaders",
    "industryRelevance": "organisations building governed data platforms, data products or AI-ready foundations",
    "features": [
      "Architecture alignment for Enterprise Data Platform (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "data",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Data, Analytics, AI, Governance & IT",
    "businessImpact": "Improves data trust, reuse, governance, platform readiness and the ability to scale analytics and AI.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 104,
    "collection": "ai",
    "serviceType": "design",
    "standardName": "Enterprise Data Platform (High-Impact) - Design",
    "remixName": {},
    "description": "The Enterprise data platform Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines data platform blueprints and build-ready specifications.",
    "positioning": "Turn enterprise data platform goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "CDOs, CIOs, Data & Analytics leaders",
    "industryRelevance": "organisations building governed data platforms, data products or AI-ready foundations",
    "features": [
      "Architecture alignment for Enterprise Data Platform (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "data",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Data, Analytics, AI, Governance & IT",
    "businessImpact": "Improves data trust, reuse, governance, platform readiness and the ability to scale analytics and AI.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 105,
    "collection": "ai",
    "serviceType": "ai_design",
    "standardName": "Enterprise Data Platform (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Enterprise data platform AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for enterprise data platform, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "CDOs, CIOs, Data & Analytics leaders",
    "industryRelevance": "organisations building governed data platforms, data products or AI-ready foundations",
    "features": [
      "Architecture alignment for Enterprise Data Platform (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "data",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Data, Analytics, AI, Governance & IT",
    "businessImpact": "Improves data trust, reuse, governance, platform readiness and the ability to scale analytics and AI.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 106,
    "collection": "ai",
    "serviceType": "deploy",
    "standardName": "Enterprise Data Platform (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Enterprise data platform Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed enterprise data platform changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "CDOs, CIOs, Data & Analytics leaders",
    "industryRelevance": "organisations building governed data platforms, data products or AI-ready foundations",
    "features": [
      "Architecture alignment for Enterprise Data Platform (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "data",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Data, Analytics, AI, Governance & IT",
    "businessImpact": "Improves data trust, reuse, governance, platform readiness and the ability to scale analytics and AI.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      104
    ]
  },
  {
    "id": 107,
    "collection": "ai",
    "serviceType": "ai_deploy",
    "standardName": "Enterprise Data Platform (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Enterprise data platform AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled enterprise data platform workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "CDOs, CIOs, Data & Analytics leaders",
    "industryRelevance": "organisations building governed data platforms, data products or AI-ready foundations",
    "features": [
      "Architecture alignment for Enterprise Data Platform (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "data",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Data, Analytics, AI, Governance & IT",
    "businessImpact": "Improves data trust, reuse, governance, platform readiness and the ability to scale analytics and AI.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      105
    ]
  },
  {
    "id": 108,
    "collection": "ai",
    "serviceType": "manage",
    "standardName": "Enterprise Data Platform (High-Impact) - Managed",
    "remixName": {},
    "description": "The Enterprise data platform Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve enterprise data platform with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "CDOs, CIOs, Data & Analytics leaders",
    "industryRelevance": "organisations building governed data platforms, data products or AI-ready foundations",
    "features": [
      "Architecture alignment for Enterprise Data Platform (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "data",
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Data, Analytics, AI, Governance & IT",
    "businessImpact": "Improves data trust, reuse, governance, platform readiness and the ability to scale analytics and AI.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 109,
    "collection": "ai",
    "serviceType": "advisory",
    "standardName": "Business Intelligence & Analytics (High-Impact) - Assess",
    "remixName": {},
    "description": "The Business intelligence & analytics Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps analytics maturity and returns prioritised improvements your data and business leaders can act on.",
    "positioning": "See how business intelligence and analytics perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Strategy, Finance & Analytics leaders",
    "industryRelevance": "organisations seeking better performance visibility, KPIs and data-driven decision-making",
    "features": [
      "Architecture alignment for Business Intelligence & Analytics (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Analytics, Strategy, Finance & Operations",
    "businessImpact": "Improves management visibility, decision speed, performance tracking and confidence in business insight.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 110,
    "collection": "ai",
    "serviceType": "design",
    "standardName": "Business Intelligence & Analytics (High-Impact) - Design",
    "remixName": {},
    "description": "The Business intelligence & analytics Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines BI solutions and build-ready specifications.",
    "positioning": "Turn business intelligence and analytics goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Strategy, Finance & Analytics leaders",
    "industryRelevance": "organisations seeking better performance visibility, KPIs and data-driven decision-making",
    "features": [
      "Architecture alignment for Business Intelligence & Analytics (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Analytics, Strategy, Finance & Operations",
    "businessImpact": "Improves management visibility, decision speed, performance tracking and confidence in business insight.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 111,
    "collection": "ai",
    "serviceType": "ai_design",
    "standardName": "Business Intelligence & Analytics (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Business intelligence & analytics AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for business intelligence and analytics, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Strategy, Finance & Analytics leaders",
    "industryRelevance": "organisations seeking better performance visibility, KPIs and data-driven decision-making",
    "features": [
      "Architecture alignment for Business Intelligence & Analytics (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Analytics, Strategy, Finance & Operations",
    "businessImpact": "Improves management visibility, decision speed, performance tracking and confidence in business insight.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 112,
    "collection": "ai",
    "serviceType": "deploy",
    "standardName": "Business Intelligence & Analytics (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Business intelligence & analytics Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed business intelligence and analytics changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Strategy, Finance & Analytics leaders",
    "industryRelevance": "organisations seeking better performance visibility, KPIs and data-driven decision-making",
    "features": [
      "Architecture alignment for Business Intelligence & Analytics (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Analytics, Strategy, Finance & Operations",
    "businessImpact": "Improves management visibility, decision speed, performance tracking and confidence in business insight.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      110
    ]
  },
  {
    "id": 113,
    "collection": "ai",
    "serviceType": "ai_deploy",
    "standardName": "Business Intelligence & Analytics (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Business intelligence & analytics AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled business intelligence and analytics workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Strategy, Finance & Analytics leaders",
    "industryRelevance": "organisations seeking better performance visibility, KPIs and data-driven decision-making",
    "features": [
      "Architecture alignment for Business Intelligence & Analytics (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Analytics, Strategy, Finance & Operations",
    "businessImpact": "Improves management visibility, decision speed, performance tracking and confidence in business insight.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      111
    ]
  },
  {
    "id": 114,
    "collection": "ai",
    "serviceType": "manage",
    "standardName": "Business Intelligence & Analytics (High-Impact) - Managed",
    "remixName": {},
    "description": "The Business intelligence & analytics Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve business intelligence and analytics with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Strategy, Finance & Analytics leaders",
    "industryRelevance": "organisations seeking better performance visibility, KPIs and data-driven decision-making",
    "features": [
      "Architecture alignment for Business Intelligence & Analytics (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai",
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Analytics, Strategy, Finance & Operations",
    "businessImpact": "Improves management visibility, decision speed, performance tracking and confidence in business insight.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 115,
    "collection": "ai",
    "serviceType": "advisory",
    "standardName": "Enterprise AI & Automation (High-Impact) - Assess",
    "remixName": {},
    "description": "The Enterprise ai & automation Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps maturity and returns prioritised improvements your technology and business leaders can act on.",
    "positioning": "See how enterprise AI and automation perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "CEOs, CIOs, AI & Transformation leaders",
    "industryRelevance": "organisations ready to adopt AI assistants, agents, automation or cognitive workflows",
    "features": [
      "Architecture alignment for Enterprise AI & Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "AI, Automation, Transformation, Operations & IT",
    "businessImpact": "Improves productivity, decision support, workflow intelligence and the controlled adoption of enterprise AI.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 116,
    "collection": "ai",
    "serviceType": "design",
    "standardName": "Enterprise AI & Automation (High-Impact) - Design",
    "remixName": {},
    "description": "The Enterprise ai & automation Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines AI use cases and build-ready specifications.",
    "positioning": "Turn enterprise AI and automation goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "CEOs, CIOs, AI & Transformation leaders",
    "industryRelevance": "organisations ready to adopt AI assistants, agents, automation or cognitive workflows",
    "features": [
      "Architecture alignment for Enterprise AI & Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "AI, Automation, Transformation, Operations & IT",
    "businessImpact": "Improves productivity, decision support, workflow intelligence and the controlled adoption of enterprise AI.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 117,
    "collection": "ai",
    "serviceType": "ai_design",
    "standardName": "Enterprise AI & Automation (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Enterprise ai & automation AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for enterprise AI and automation, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "CEOs, CIOs, AI & Transformation leaders",
    "industryRelevance": "organisations ready to adopt AI assistants, agents, automation or cognitive workflows",
    "features": [
      "Architecture alignment for Enterprise AI & Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "AI, Automation, Transformation, Operations & IT",
    "businessImpact": "Improves productivity, decision support, workflow intelligence and the controlled adoption of enterprise AI.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 118,
    "collection": "ai",
    "serviceType": "deploy",
    "standardName": "Enterprise AI & Automation (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Enterprise ai & automation Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed enterprise AI and automation changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "CEOs, CIOs, AI & Transformation leaders",
    "industryRelevance": "organisations ready to adopt AI assistants, agents, automation or cognitive workflows",
    "features": [
      "Architecture alignment for Enterprise AI & Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "AI, Automation, Transformation, Operations & IT",
    "businessImpact": "Improves productivity, decision support, workflow intelligence and the controlled adoption of enterprise AI.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      116
    ]
  },
  {
    "id": 119,
    "collection": "ai",
    "serviceType": "ai_deploy",
    "standardName": "Enterprise AI & Automation (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Enterprise ai & automation AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled enterprise AI and automation workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "CEOs, CIOs, AI & Transformation leaders",
    "industryRelevance": "organisations ready to adopt AI assistants, agents, automation or cognitive workflows",
    "features": [
      "Architecture alignment for Enterprise AI & Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "AI, Automation, Transformation, Operations & IT",
    "businessImpact": "Improves productivity, decision support, workflow intelligence and the controlled adoption of enterprise AI.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      117
    ]
  },
  {
    "id": 120,
    "collection": "ai",
    "serviceType": "manage",
    "standardName": "Enterprise AI & Automation (High-Impact) - Managed",
    "remixName": {},
    "description": "The Enterprise ai & automation Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve enterprise AI and automation with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "CEOs, CIOs, AI & Transformation leaders",
    "industryRelevance": "organisations ready to adopt AI assistants, agents, automation or cognitive workflows",
    "features": [
      "Architecture alignment for Enterprise AI & Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai",
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "AI, Automation, Transformation, Operations & IT",
    "businessImpact": "Improves productivity, decision support, workflow intelligence and the controlled adoption of enterprise AI.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 121,
    "collection": "security",
    "serviceType": "advisory",
    "standardName": "Technology Governance (High-Impact) - Assess",
    "remixName": {},
    "description": "The Technology governance Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps governance maturity and returns prioritised improvements your CIO and architecture leaders can act on.",
    "positioning": "See how technology governance performs today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "CIOs, Enterprise Architecture & PMO leaders",
    "industryRelevance": "organisations managing technology portfolios, platforms, vendors and enterprise architecture standards",
    "features": [
      "Architecture alignment for Technology Governance (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "security",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Technology Governance, Enterprise Architecture & PMO",
    "businessImpact": "Improves technology alignment, investment control, architecture quality and delivery governance.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 122,
    "collection": "security",
    "serviceType": "design",
    "standardName": "Technology Governance (High-Impact) - Design",
    "remixName": {},
    "description": "The Technology governance Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines technology governance models and build-ready specifications.",
    "positioning": "Turn technology governance goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "CIOs, Enterprise Architecture & PMO leaders",
    "industryRelevance": "organisations managing technology portfolios, platforms, vendors and enterprise architecture standards",
    "features": [
      "Architecture alignment for Technology Governance (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "security",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Technology Governance, Enterprise Architecture & PMO",
    "businessImpact": "Improves technology alignment, investment control, architecture quality and delivery governance.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 123,
    "collection": "security",
    "serviceType": "ai_design",
    "standardName": "Technology Governance (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Technology governance AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for technology governance, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "CIOs, Enterprise Architecture & PMO leaders",
    "industryRelevance": "organisations managing technology portfolios, platforms, vendors and enterprise architecture standards",
    "features": [
      "Architecture alignment for Technology Governance (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "security",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Technology Governance, Enterprise Architecture & PMO",
    "businessImpact": "Improves technology alignment, investment control, architecture quality and delivery governance.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 124,
    "collection": "security",
    "serviceType": "deploy",
    "standardName": "Technology Governance (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Technology governance Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed technology governance changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "CIOs, Enterprise Architecture & PMO leaders",
    "industryRelevance": "organisations managing technology portfolios, platforms, vendors and enterprise architecture standards",
    "features": [
      "Architecture alignment for Technology Governance (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "security",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Technology Governance, Enterprise Architecture & PMO",
    "businessImpact": "Improves technology alignment, investment control, architecture quality and delivery governance.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      122
    ]
  },
  {
    "id": 125,
    "collection": "security",
    "serviceType": "ai_deploy",
    "standardName": "Technology Governance (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Technology governance AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled technology governance workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "CIOs, Enterprise Architecture & PMO leaders",
    "industryRelevance": "organisations managing technology portfolios, platforms, vendors and enterprise architecture standards",
    "features": [
      "Architecture alignment for Technology Governance (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "security",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Technology Governance, Enterprise Architecture & PMO",
    "businessImpact": "Improves technology alignment, investment control, architecture quality and delivery governance.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      123
    ]
  },
  {
    "id": 126,
    "collection": "security",
    "serviceType": "manage",
    "standardName": "Technology Governance (High-Impact) - Managed",
    "remixName": {},
    "description": "The Technology governance Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve technology governance with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "CIOs, Enterprise Architecture & PMO leaders",
    "industryRelevance": "organisations managing technology portfolios, platforms, vendors and enterprise architecture standards",
    "features": [
      "Architecture alignment for Technology Governance (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "security",
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Technology Governance, Enterprise Architecture & PMO",
    "businessImpact": "Improves technology alignment, investment control, architecture quality and delivery governance.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 127,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "DevSecOps Automation (High-Impact) - Assess",
    "remixName": {},
    "description": "The Devsecops automation Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps DevSecOps maturity and returns prioritised improvements your engineering leaders can act on.",
    "positioning": "See how DevSecOps automation performs today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "CTOs, Engineering, Security & DevOps leaders",
    "industryRelevance": "organisations building, integrating or operating digital platforms and software products",
    "features": [
      "Architecture alignment for DevSecOps Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Engineering, Security, DevOps & Platform Operations",
    "businessImpact": "Improves delivery speed, release quality, security assurance and operational reliability across digital platforms.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 128,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "DevSecOps Automation (High-Impact) - Design",
    "remixName": {},
    "description": "The Devsecops automation Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines delivery workflows and build-ready specifications.",
    "positioning": "Turn DevSecOps automation goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "CTOs, Engineering, Security & DevOps leaders",
    "industryRelevance": "organisations building, integrating or operating digital platforms and software products",
    "features": [
      "Architecture alignment for DevSecOps Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Engineering, Security, DevOps & Platform Operations",
    "businessImpact": "Improves delivery speed, release quality, security assurance and operational reliability across digital platforms.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 129,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "DevSecOps Automation (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Devsecops automation AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for DevSecOps automation, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "CTOs, Engineering, Security & DevOps leaders",
    "industryRelevance": "organisations building, integrating or operating digital platforms and software products",
    "features": [
      "Architecture alignment for DevSecOps Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Engineering, Security, DevOps & Platform Operations",
    "businessImpact": "Improves delivery speed, release quality, security assurance and operational reliability across digital platforms.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 130,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "DevSecOps Automation (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Devsecops automation Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed DevSecOps automation changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "CTOs, Engineering, Security & DevOps leaders",
    "industryRelevance": "organisations building, integrating or operating digital platforms and software products",
    "features": [
      "Architecture alignment for DevSecOps Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Engineering, Security, DevOps & Platform Operations",
    "businessImpact": "Improves delivery speed, release quality, security assurance and operational reliability across digital platforms.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      128
    ]
  },
  {
    "id": 131,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "DevSecOps Automation (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Devsecops automation AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled DevSecOps automation workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "CTOs, Engineering, Security & DevOps leaders",
    "industryRelevance": "organisations building, integrating or operating digital platforms and software products",
    "features": [
      "Architecture alignment for DevSecOps Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "operations",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Engineering, Security, DevOps & Platform Operations",
    "businessImpact": "Improves delivery speed, release quality, security assurance and operational reliability across digital platforms.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      129
    ]
  },
  {
    "id": 132,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "DevSecOps Automation (High-Impact) - Managed",
    "remixName": {},
    "description": "The Devsecops automation Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve DevSecOps automation with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "CTOs, Engineering, Security & DevOps leaders",
    "industryRelevance": "organisations building, integrating or operating digital platforms and software products",
    "features": [
      "Architecture alignment for DevSecOps Automation (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Engineering, Security, DevOps & Platform Operations",
    "businessImpact": "Improves delivery speed, release quality, security assurance and operational reliability across digital platforms.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 133,
    "collection": "experience",
    "serviceType": "advisory",
    "standardName": "IT Operations & Support (High-Impact) - Assess",
    "remixName": {},
    "description": "The It operations & support Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps operations maturity and returns prioritised improvements your IT leaders can act on.",
    "positioning": "See how IT operations and employee support services perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "CIOs, IT Operations & Service Desk leaders",
    "industryRelevance": "organisations dependent on reliable IT services, support workflows and operational continuity",
    "features": [
      "Architecture alignment for IT Operations & Support (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "advisory",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "IT Operations, Service Management, Infrastructure & Support",
    "businessImpact": "Improves service reliability, incident resolution, support productivity and user satisfaction.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 134,
    "collection": "experience",
    "serviceType": "design",
    "standardName": "IT Operations & Support (High-Impact) - Design",
    "remixName": {},
    "description": "The It operations & support Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines IT service operations and build-ready specifications.",
    "positioning": "Turn IT operations and employee support services goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "CIOs, IT Operations & Service Desk leaders",
    "industryRelevance": "organisations dependent on reliable IT services, support workflows and operational continuity",
    "features": [
      "Architecture alignment for IT Operations & Support (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "IT Operations, Service Management, Infrastructure & Support",
    "businessImpact": "Improves service reliability, incident resolution, support productivity and user satisfaction.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 135,
    "collection": "experience",
    "serviceType": "ai_design",
    "standardName": "IT Operations & Support (High-Impact) - AI Design",
    "remixName": {},
    "description": "The It operations & support AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for IT operations and employee support services, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "CIOs, IT Operations & Service Desk leaders",
    "industryRelevance": "organisations dependent on reliable IT services, support workflows and operational continuity",
    "features": [
      "Architecture alignment for IT Operations & Support (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_design",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "IT Operations, Service Management, Infrastructure & Support",
    "businessImpact": "Improves service reliability, incident resolution, support productivity and user satisfaction.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 136,
    "collection": "experience",
    "serviceType": "deploy",
    "standardName": "IT Operations & Support (High-Impact) - Deploy",
    "remixName": {},
    "description": "The It operations & support Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed IT operations and employee support services changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "CIOs, IT Operations & Service Desk leaders",
    "industryRelevance": "organisations dependent on reliable IT services, support workflows and operational continuity",
    "features": [
      "Architecture alignment for IT Operations & Support (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "IT Operations, Service Management, Infrastructure & Support",
    "businessImpact": "Improves service reliability, incident resolution, support productivity and user satisfaction.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      134
    ]
  },
  {
    "id": 137,
    "collection": "experience",
    "serviceType": "ai_deploy",
    "standardName": "IT Operations & Support (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The It operations & support AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled IT operations and employee support services workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "CIOs, IT Operations & Service Desk leaders",
    "industryRelevance": "organisations dependent on reliable IT services, support workflows and operational continuity",
    "features": [
      "Architecture alignment for IT Operations & Support (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "ai_deploy",
      "transformation",
      "high-impact"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "IT Operations, Service Management, Infrastructure & Support",
    "businessImpact": "Improves service reliability, incident resolution, support productivity and user satisfaction.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      135
    ]
  },
  {
    "id": 138,
    "collection": "experience",
    "serviceType": "manage",
    "standardName": "IT Operations & Support (High-Impact) - Managed",
    "remixName": {},
    "description": "The It operations & support Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve IT operations and employee support services with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "CIOs, IT Operations & Service Desk leaders",
    "industryRelevance": "organisations dependent on reliable IT services, support workflows and operational continuity",
    "features": [
      "Architecture alignment for IT Operations & Support (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "experience",
      "manage",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "IT Operations, Service Management, Infrastructure & Support",
    "businessImpact": "Improves service reliability, incident resolution, support productivity and user satisfaction.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 149,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "Farming Operations (High-Impact) - Assess",
    "remixName": {},
    "description": "The Farming operations Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps operational maturity and returns prioritised improvements your operations leaders can act on.",
    "positioning": "See how farming operations perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Agribusiness & Farm Operations leaders",
    "industryRelevance": "Farming 4.0: agribusiness, food production, crop operations and agricultural service providers",
    "features": [
      "Architecture alignment for Farming Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "advisory",
      "transformation",
      "high-impact",
      "farming-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Agriculture Operations, Production & Technology",
    "businessImpact": "Improves yield visibility, resource efficiency, operational planning and farm performance management.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 150,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "Farming Operations (High-Impact) - Design",
    "remixName": {},
    "description": "The Farming operations Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines farming operations and build-ready specifications.",
    "positioning": "Turn farming operations goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Agribusiness & Farm Operations leaders",
    "industryRelevance": "Farming 4.0: agribusiness, food production, crop operations and agricultural service providers",
    "features": [
      "Architecture alignment for Farming Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "design",
      "transformation",
      "high-impact",
      "farming-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Agriculture Operations, Production & Technology",
    "businessImpact": "Improves yield visibility, resource efficiency, operational planning and farm performance management.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 151,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "Farming Operations (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Farming operations AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for farming operations, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Agribusiness & Farm Operations leaders",
    "industryRelevance": "Farming 4.0: agribusiness, food production, crop operations and agricultural service providers",
    "features": [
      "Architecture alignment for Farming Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_design",
      "transformation",
      "high-impact",
      "farming-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Agriculture Operations, Production & Technology",
    "businessImpact": "Improves yield visibility, resource efficiency, operational planning and farm performance management.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 152,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "Farming Operations (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Farming operations Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed farming operations changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Agribusiness & Farm Operations leaders",
    "industryRelevance": "Farming 4.0: agribusiness, food production, crop operations and agricultural service providers",
    "features": [
      "Architecture alignment for Farming Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "deploy",
      "transformation",
      "high-impact",
      "farming-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Agriculture Operations, Production & Technology",
    "businessImpact": "Improves yield visibility, resource efficiency, operational planning and farm performance management.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      150
    ]
  },
  {
    "id": 153,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "Farming Operations (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Farming operations AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled farming operations workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Agribusiness & Farm Operations leaders",
    "industryRelevance": "Farming 4.0: agribusiness, food production, crop operations and agricultural service providers",
    "features": [
      "Architecture alignment for Farming Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_deploy",
      "transformation",
      "high-impact",
      "farming-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Agriculture Operations, Production & Technology",
    "businessImpact": "Improves yield visibility, resource efficiency, operational planning and farm performance management.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      151
    ]
  },
  {
    "id": 154,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "Farming Operations (High-Impact) - Managed",
    "remixName": {},
    "description": "The Farming operations Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve farming operations with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Agribusiness & Farm Operations leaders",
    "industryRelevance": "Farming 4.0: agribusiness, food production, crop operations and agricultural service providers",
    "features": [
      "Architecture alignment for Farming Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "farming-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Agriculture Operations, Production & Technology",
    "businessImpact": "Improves yield visibility, resource efficiency, operational planning and farm performance management.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 155,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "Manufacturing Operations (High-Impact) - Assess",
    "remixName": {},
    "description": "The Manufacturing operations Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps operational maturity and returns prioritised improvements your plant and operations leaders can act on.",
    "positioning": "See how manufacturing operations perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Manufacturing & Plant Operations leaders",
    "industryRelevance": "Plant 4.0: manufacturers, industrial operators and production environments",
    "features": [
      "Architecture alignment for Manufacturing Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "advisory",
      "transformation",
      "high-impact",
      "plant-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Manufacturing Operations, Quality, Maintenance & Technology",
    "businessImpact": "Improves throughput, quality control, downtime visibility, production coordination and operational efficiency.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 156,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "Manufacturing Operations (High-Impact) - Design",
    "remixName": {},
    "description": "The Manufacturing operations Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines manufacturing operations and build-ready specifications.",
    "positioning": "Turn manufacturing operations goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Manufacturing & Plant Operations leaders",
    "industryRelevance": "Plant 4.0: manufacturers, industrial operators and production environments",
    "features": [
      "Architecture alignment for Manufacturing Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "design",
      "transformation",
      "high-impact",
      "plant-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Manufacturing Operations, Quality, Maintenance & Technology",
    "businessImpact": "Improves throughput, quality control, downtime visibility, production coordination and operational efficiency.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 157,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "Manufacturing Operations (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Manufacturing operations AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for manufacturing operations, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Manufacturing & Plant Operations leaders",
    "industryRelevance": "Plant 4.0: manufacturers, industrial operators and production environments",
    "features": [
      "Architecture alignment for Manufacturing Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_design",
      "transformation",
      "high-impact",
      "plant-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Manufacturing Operations, Quality, Maintenance & Technology",
    "businessImpact": "Improves throughput, quality control, downtime visibility, production coordination and operational efficiency.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 158,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "Manufacturing Operations (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Manufacturing operations Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed manufacturing operations changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Manufacturing & Plant Operations leaders",
    "industryRelevance": "Plant 4.0: manufacturers, industrial operators and production environments",
    "features": [
      "Architecture alignment for Manufacturing Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "deploy",
      "transformation",
      "high-impact",
      "plant-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Manufacturing Operations, Quality, Maintenance & Technology",
    "businessImpact": "Improves throughput, quality control, downtime visibility, production coordination and operational efficiency.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      156
    ]
  },
  {
    "id": 159,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "Manufacturing Operations (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Manufacturing operations AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled manufacturing operations workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Manufacturing & Plant Operations leaders",
    "industryRelevance": "Plant 4.0: manufacturers, industrial operators and production environments",
    "features": [
      "Architecture alignment for Manufacturing Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_deploy",
      "transformation",
      "high-impact",
      "plant-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Manufacturing Operations, Quality, Maintenance & Technology",
    "businessImpact": "Improves throughput, quality control, downtime visibility, production coordination and operational efficiency.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      157
    ]
  },
  {
    "id": 160,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "Manufacturing Operations (High-Impact) - Managed",
    "remixName": {},
    "description": "The Manufacturing operations Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve manufacturing operations with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Manufacturing & Plant Operations leaders",
    "industryRelevance": "Plant 4.0: manufacturers, industrial operators and production environments",
    "features": [
      "Architecture alignment for Manufacturing Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "plant-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Manufacturing Operations, Quality, Maintenance & Technology",
    "businessImpact": "Improves throughput, quality control, downtime visibility, production coordination and operational efficiency.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 161,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "Infrastructure Operations (High-Impact) - Assess",
    "remixName": {},
    "description": "The Infrastructure operations Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps operational maturity and returns prioritised improvements your asset and operations leaders can act on.",
    "positioning": "See how infrastructure operations perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Asset Managers & Infrastructure leaders",
    "industryRelevance": "Infrastructure 4.0: utilities, transport, real estate, facilities, energy and asset-intensive operators",
    "features": [
      "Architecture alignment for Infrastructure Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "advisory",
      "transformation",
      "high-impact",
      "infrastructure-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Asset Operations, Maintenance, Engineering & Technology",
    "businessImpact": "Improves asset reliability, maintenance planning, field productivity and infrastructure service continuity.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 162,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "Infrastructure Operations (High-Impact) - Design",
    "remixName": {},
    "description": "The Infrastructure operations Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines infrastructure operations and build-ready specifications.",
    "positioning": "Turn infrastructure operations goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Asset Managers & Infrastructure leaders",
    "industryRelevance": "Infrastructure 4.0: utilities, transport, real estate, facilities, energy and asset-intensive operators",
    "features": [
      "Architecture alignment for Infrastructure Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "design",
      "transformation",
      "high-impact",
      "infrastructure-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Asset Operations, Maintenance, Engineering & Technology",
    "businessImpact": "Improves asset reliability, maintenance planning, field productivity and infrastructure service continuity.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 163,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "Infrastructure Operations (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Infrastructure operations AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for infrastructure operations, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Asset Managers & Infrastructure leaders",
    "industryRelevance": "Infrastructure 4.0: utilities, transport, real estate, facilities, energy and asset-intensive operators",
    "features": [
      "Architecture alignment for Infrastructure Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_design",
      "transformation",
      "high-impact",
      "infrastructure-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Asset Operations, Maintenance, Engineering & Technology",
    "businessImpact": "Improves asset reliability, maintenance planning, field productivity and infrastructure service continuity.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 164,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "Infrastructure Operations (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Infrastructure operations Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed infrastructure operations changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Asset Managers & Infrastructure leaders",
    "industryRelevance": "Infrastructure 4.0: utilities, transport, real estate, facilities, energy and asset-intensive operators",
    "features": [
      "Architecture alignment for Infrastructure Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "deploy",
      "transformation",
      "high-impact",
      "infrastructure-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Asset Operations, Maintenance, Engineering & Technology",
    "businessImpact": "Improves asset reliability, maintenance planning, field productivity and infrastructure service continuity.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      162
    ]
  },
  {
    "id": 165,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "Infrastructure Operations (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Infrastructure operations AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled infrastructure operations workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Asset Managers & Infrastructure leaders",
    "industryRelevance": "Infrastructure 4.0: utilities, transport, real estate, facilities, energy and asset-intensive operators",
    "features": [
      "Architecture alignment for Infrastructure Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_deploy",
      "transformation",
      "high-impact",
      "infrastructure-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Asset Operations, Maintenance, Engineering & Technology",
    "businessImpact": "Improves asset reliability, maintenance planning, field productivity and infrastructure service continuity.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      163
    ]
  },
  {
    "id": 166,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "Infrastructure Operations (High-Impact) - Managed",
    "remixName": {},
    "description": "The Infrastructure operations Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve infrastructure operations with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Asset Managers & Infrastructure leaders",
    "industryRelevance": "Infrastructure 4.0: utilities, transport, real estate, facilities, energy and asset-intensive operators",
    "features": [
      "Architecture alignment for Infrastructure Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "infrastructure-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Asset Operations, Maintenance, Engineering & Technology",
    "businessImpact": "Improves asset reliability, maintenance planning, field productivity and infrastructure service continuity.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 167,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "Government Operations (High-Impact) - Assess",
    "remixName": {},
    "description": "The Government operations Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps operational maturity and returns prioritised improvements programme leaders can act on.",
    "positioning": "See how government operations and citizen services perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Public sector & Digital Government leaders",
    "industryRelevance": "Government 4.0: ministries, authorities, agencies, municipalities and public service organisations",
    "features": [
      "Architecture alignment for Government Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "advisory",
      "transformation",
      "high-impact",
      "government-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital Government, Service Delivery, Operations & Policy",
    "businessImpact": "Improves citizen service quality, processing efficiency, transparency and cross-agency operational coordination.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 168,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "Government Operations (High-Impact) - Design",
    "remixName": {},
    "description": "The Government operations Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines government operations and build-ready specifications.",
    "positioning": "Turn government operations and citizen services goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Public sector & Digital Government leaders",
    "industryRelevance": "Government 4.0: ministries, authorities, agencies, municipalities and public service organisations",
    "features": [
      "Architecture alignment for Government Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "design",
      "transformation",
      "high-impact",
      "government-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital Government, Service Delivery, Operations & Policy",
    "businessImpact": "Improves citizen service quality, processing efficiency, transparency and cross-agency operational coordination.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 169,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "Government Operations (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Government operations AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for government operations and citizen services, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Public sector & Digital Government leaders",
    "industryRelevance": "Government 4.0: ministries, authorities, agencies, municipalities and public service organisations",
    "features": [
      "Architecture alignment for Government Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_design",
      "transformation",
      "high-impact",
      "government-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital Government, Service Delivery, Operations & Policy",
    "businessImpact": "Improves citizen service quality, processing efficiency, transparency and cross-agency operational coordination.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 170,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "Government Operations (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Government operations Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed government operations and citizen services changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Public sector & Digital Government leaders",
    "industryRelevance": "Government 4.0: ministries, authorities, agencies, municipalities and public service organisations",
    "features": [
      "Architecture alignment for Government Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "deploy",
      "transformation",
      "high-impact",
      "government-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital Government, Service Delivery, Operations & Policy",
    "businessImpact": "Improves citizen service quality, processing efficiency, transparency and cross-agency operational coordination.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      168
    ]
  },
  {
    "id": 171,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "Government Operations (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Government operations AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled government operations and citizen services workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Public sector & Digital Government leaders",
    "industryRelevance": "Government 4.0: ministries, authorities, agencies, municipalities and public service organisations",
    "features": [
      "Architecture alignment for Government Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_deploy",
      "transformation",
      "high-impact",
      "government-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital Government, Service Delivery, Operations & Policy",
    "businessImpact": "Improves citizen service quality, processing efficiency, transparency and cross-agency operational coordination.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      169
    ]
  },
  {
    "id": 172,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "Government Operations (High-Impact) - Managed",
    "remixName": {},
    "description": "The Government operations Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve government operations and citizen services with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Public sector & Digital Government leaders",
    "industryRelevance": "Government 4.0: ministries, authorities, agencies, municipalities and public service organisations",
    "features": [
      "Architecture alignment for Government Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "government-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital Government, Service Delivery, Operations & Policy",
    "businessImpact": "Improves citizen service quality, processing efficiency, transparency and cross-agency operational coordination.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 173,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "Hospitality Operations (High-Impact) - Assess",
    "remixName": {},
    "description": "The Hospitality operations Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps operational maturity and returns prioritised improvements your operations leaders can act on.",
    "positioning": "See how hospitality operations and guest experience perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Hospitality & Guest Experience leaders",
    "industryRelevance": "Hospitality 4.0: hotels, resorts, venues, tourism operators and guest service organisations",
    "features": [
      "Architecture alignment for Hospitality Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "advisory",
      "transformation",
      "high-impact",
      "hospitality-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Hospitality Operations, Guest Experience & Technology",
    "businessImpact": "Improves guest satisfaction, service responsiveness, staff coordination and operational efficiency.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 174,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "Hospitality Operations (High-Impact) - Design",
    "remixName": {},
    "description": "The Hospitality operations Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines hospitality operations and build-ready specifications.",
    "positioning": "Turn hospitality operations and guest experience goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Hospitality & Guest Experience leaders",
    "industryRelevance": "Hospitality 4.0: hotels, resorts, venues, tourism operators and guest service organisations",
    "features": [
      "Architecture alignment for Hospitality Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "design",
      "transformation",
      "high-impact",
      "hospitality-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Hospitality Operations, Guest Experience & Technology",
    "businessImpact": "Improves guest satisfaction, service responsiveness, staff coordination and operational efficiency.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 175,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "Hospitality Operations (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Hospitality operations AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for hospitality operations and guest experience, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Hospitality & Guest Experience leaders",
    "industryRelevance": "Hospitality 4.0: hotels, resorts, venues, tourism operators and guest service organisations",
    "features": [
      "Architecture alignment for Hospitality Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_design",
      "transformation",
      "high-impact",
      "hospitality-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Hospitality Operations, Guest Experience & Technology",
    "businessImpact": "Improves guest satisfaction, service responsiveness, staff coordination and operational efficiency.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 176,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "Hospitality Operations (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Hospitality operations Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed hospitality operations and guest experience changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Hospitality & Guest Experience leaders",
    "industryRelevance": "Hospitality 4.0: hotels, resorts, venues, tourism operators and guest service organisations",
    "features": [
      "Architecture alignment for Hospitality Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "deploy",
      "transformation",
      "high-impact",
      "hospitality-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Hospitality Operations, Guest Experience & Technology",
    "businessImpact": "Improves guest satisfaction, service responsiveness, staff coordination and operational efficiency.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      174
    ]
  },
  {
    "id": 177,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "Hospitality Operations (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Hospitality operations AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled hospitality operations and guest experience workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Hospitality & Guest Experience leaders",
    "industryRelevance": "Hospitality 4.0: hotels, resorts, venues, tourism operators and guest service organisations",
    "features": [
      "Architecture alignment for Hospitality Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_deploy",
      "transformation",
      "high-impact",
      "hospitality-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Hospitality Operations, Guest Experience & Technology",
    "businessImpact": "Improves guest satisfaction, service responsiveness, staff coordination and operational efficiency.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      175
    ]
  },
  {
    "id": 178,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "Hospitality Operations (High-Impact) - Managed",
    "remixName": {},
    "description": "The Hospitality operations Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve hospitality operations and guest experience with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Hospitality & Guest Experience leaders",
    "industryRelevance": "Hospitality 4.0: hotels, resorts, venues, tourism operators and guest service organisations",
    "features": [
      "Architecture alignment for Hospitality Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "hospitality-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Hospitality Operations, Guest Experience & Technology",
    "businessImpact": "Improves guest satisfaction, service responsiveness, staff coordination and operational efficiency.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 179,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "Retail Operations (High-Impact) - Assess",
    "remixName": {},
    "description": "The Retail operations Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps operational maturity and returns prioritised improvements your retail leaders can act on.",
    "positioning": "See how retail operations and omnichannel commerce perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Retail, Commerce & Store Operations leaders",
    "industryRelevance": "Retail 4.0: retailers, marketplaces, distributors and omnichannel commerce organisations",
    "features": [
      "Architecture alignment for Retail Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "advisory",
      "transformation",
      "high-impact",
      "retail-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Retail Operations, Commerce, CX & Technology",
    "businessImpact": "Improves sales execution, store productivity, inventory visibility and customer engagement across retail channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 180,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "Retail Operations (High-Impact) - Design",
    "remixName": {},
    "description": "The Retail operations Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines retail operations and build-ready specifications.",
    "positioning": "Turn retail operations and omnichannel commerce goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Retail, Commerce & Store Operations leaders",
    "industryRelevance": "Retail 4.0: retailers, marketplaces, distributors and omnichannel commerce organisations",
    "features": [
      "Architecture alignment for Retail Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "design",
      "transformation",
      "high-impact",
      "retail-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Retail Operations, Commerce, CX & Technology",
    "businessImpact": "Improves sales execution, store productivity, inventory visibility and customer engagement across retail channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 181,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "Retail Operations (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Retail operations AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for retail operations and omnichannel commerce, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Retail, Commerce & Store Operations leaders",
    "industryRelevance": "Retail 4.0: retailers, marketplaces, distributors and omnichannel commerce organisations",
    "features": [
      "Architecture alignment for Retail Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_design",
      "transformation",
      "high-impact",
      "retail-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Retail Operations, Commerce, CX & Technology",
    "businessImpact": "Improves sales execution, store productivity, inventory visibility and customer engagement across retail channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 182,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "Retail Operations (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Retail operations Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed retail operations and omnichannel commerce changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Retail, Commerce & Store Operations leaders",
    "industryRelevance": "Retail 4.0: retailers, marketplaces, distributors and omnichannel commerce organisations",
    "features": [
      "Architecture alignment for Retail Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "deploy",
      "transformation",
      "high-impact",
      "retail-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Retail Operations, Commerce, CX & Technology",
    "businessImpact": "Improves sales execution, store productivity, inventory visibility and customer engagement across retail channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      180
    ]
  },
  {
    "id": 183,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "Retail Operations (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Retail operations AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled retail operations and omnichannel commerce workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Retail, Commerce & Store Operations leaders",
    "industryRelevance": "Retail 4.0: retailers, marketplaces, distributors and omnichannel commerce organisations",
    "features": [
      "Architecture alignment for Retail Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_deploy",
      "transformation",
      "high-impact",
      "retail-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Retail Operations, Commerce, CX & Technology",
    "businessImpact": "Improves sales execution, store productivity, inventory visibility and customer engagement across retail channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      181
    ]
  },
  {
    "id": 184,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "Retail Operations (High-Impact) - Managed",
    "remixName": {},
    "description": "The Retail operations Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve retail operations and omnichannel commerce with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Retail, Commerce & Store Operations leaders",
    "industryRelevance": "Retail 4.0: retailers, marketplaces, distributors and omnichannel commerce organisations",
    "features": [
      "Architecture alignment for Retail Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "retail-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Retail Operations, Commerce, CX & Technology",
    "businessImpact": "Improves sales execution, store productivity, inventory visibility and customer engagement across retail channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 185,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "Service Operations (High-Impact) - Assess",
    "remixName": {},
    "description": "The Service operations Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps operational maturity and returns prioritised improvements your operations leaders can act on.",
    "positioning": "See how service operations perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Service Operations & Field Service leaders",
    "industryRelevance": "Service 4.0: professional, technical, field, maintenance and customer service organisations",
    "features": [
      "Architecture alignment for Service Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "advisory",
      "transformation",
      "high-impact",
      "service-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Service Operations, Field Service, Customer Experience & Technology",
    "businessImpact": "Improves service throughput, scheduling accuracy, delivery quality and customer satisfaction.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 186,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "Service Operations (High-Impact) - Design",
    "remixName": {},
    "description": "The Service operations Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines service operations and build-ready specifications.",
    "positioning": "Turn service operations goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Service Operations & Field Service leaders",
    "industryRelevance": "Service 4.0: professional, technical, field, maintenance and customer service organisations",
    "features": [
      "Architecture alignment for Service Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "design",
      "transformation",
      "high-impact",
      "service-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Service Operations, Field Service, Customer Experience & Technology",
    "businessImpact": "Improves service throughput, scheduling accuracy, delivery quality and customer satisfaction.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 187,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "Service Operations (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Service operations AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for service operations, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Service Operations & Field Service leaders",
    "industryRelevance": "Service 4.0: professional, technical, field, maintenance and customer service organisations",
    "features": [
      "Architecture alignment for Service Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_design",
      "transformation",
      "high-impact",
      "service-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Service Operations, Field Service, Customer Experience & Technology",
    "businessImpact": "Improves service throughput, scheduling accuracy, delivery quality and customer satisfaction.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 188,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "Service Operations (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Service operations Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed service operations changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Service Operations & Field Service leaders",
    "industryRelevance": "Service 4.0: professional, technical, field, maintenance and customer service organisations",
    "features": [
      "Architecture alignment for Service Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "deploy",
      "transformation",
      "high-impact",
      "service-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Service Operations, Field Service, Customer Experience & Technology",
    "businessImpact": "Improves service throughput, scheduling accuracy, delivery quality and customer satisfaction.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      186
    ]
  },
  {
    "id": 189,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "Service Operations (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Service operations AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled service operations workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Service Operations & Field Service leaders",
    "industryRelevance": "Service 4.0: professional, technical, field, maintenance and customer service organisations",
    "features": [
      "Architecture alignment for Service Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_deploy",
      "transformation",
      "high-impact",
      "service-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Service Operations, Field Service, Customer Experience & Technology",
    "businessImpact": "Improves service throughput, scheduling accuracy, delivery quality and customer satisfaction.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      187
    ]
  },
  {
    "id": 190,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "Service Operations (High-Impact) - Managed",
    "remixName": {},
    "description": "The Service operations Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve service operations with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Service Operations & Field Service leaders",
    "industryRelevance": "Service 4.0: professional, technical, field, maintenance and customer service organisations",
    "features": [
      "Architecture alignment for Service Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "service-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Service Operations, Field Service, Customer Experience & Technology",
    "businessImpact": "Improves service throughput, scheduling accuracy, delivery quality and customer satisfaction.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 191,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "Logistics Operations (High-Impact) - Assess",
    "remixName": {},
    "description": "The Logistics operations Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps operational maturity and returns prioritised improvements your supply chain leaders can act on.",
    "positioning": "See how logistics and supply chain operations perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Logistics & Supply Chain leaders",
    "industryRelevance": "Logistics 4.0: logistics providers, distributors, supply chain operators and fulfilment organisations",
    "features": [
      "Architecture alignment for Logistics Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "advisory",
      "transformation",
      "high-impact",
      "logistics-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Logistics, Supply Chain, Fulfilment & Technology",
    "businessImpact": "Improves fulfilment accuracy, delivery visibility, asset utilisation and supply chain responsiveness.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 192,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "Logistics Operations (High-Impact) - Design",
    "remixName": {},
    "description": "The Logistics operations Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines logistics operations and build-ready specifications.",
    "positioning": "Turn logistics and supply chain operations goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Logistics & Supply Chain leaders",
    "industryRelevance": "Logistics 4.0: logistics providers, distributors, supply chain operators and fulfilment organisations",
    "features": [
      "Architecture alignment for Logistics Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "design",
      "transformation",
      "high-impact",
      "logistics-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Logistics, Supply Chain, Fulfilment & Technology",
    "businessImpact": "Improves fulfilment accuracy, delivery visibility, asset utilisation and supply chain responsiveness.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 193,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "Logistics Operations (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Logistics operations AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for logistics and supply chain operations, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Logistics & Supply Chain leaders",
    "industryRelevance": "Logistics 4.0: logistics providers, distributors, supply chain operators and fulfilment organisations",
    "features": [
      "Architecture alignment for Logistics Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_design",
      "transformation",
      "high-impact",
      "logistics-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Logistics, Supply Chain, Fulfilment & Technology",
    "businessImpact": "Improves fulfilment accuracy, delivery visibility, asset utilisation and supply chain responsiveness.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 194,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "Logistics Operations (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Logistics operations Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed logistics and supply chain operations changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Logistics & Supply Chain leaders",
    "industryRelevance": "Logistics 4.0: logistics providers, distributors, supply chain operators and fulfilment organisations",
    "features": [
      "Architecture alignment for Logistics Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "deploy",
      "transformation",
      "high-impact",
      "logistics-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Logistics, Supply Chain, Fulfilment & Technology",
    "businessImpact": "Improves fulfilment accuracy, delivery visibility, asset utilisation and supply chain responsiveness.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      192
    ]
  },
  {
    "id": 195,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "Logistics Operations (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Logistics operations AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled logistics and supply chain operations workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Logistics & Supply Chain leaders",
    "industryRelevance": "Logistics 4.0: logistics providers, distributors, supply chain operators and fulfilment organisations",
    "features": [
      "Architecture alignment for Logistics Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_deploy",
      "transformation",
      "high-impact",
      "logistics-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Logistics, Supply Chain, Fulfilment & Technology",
    "businessImpact": "Improves fulfilment accuracy, delivery visibility, asset utilisation and supply chain responsiveness.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      193
    ]
  },
  {
    "id": 196,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "Logistics Operations (High-Impact) - Managed",
    "remixName": {},
    "description": "The Logistics operations Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve logistics and supply chain operations with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Logistics & Supply Chain leaders",
    "industryRelevance": "Logistics 4.0: logistics providers, distributors, supply chain operators and fulfilment organisations",
    "features": [
      "Architecture alignment for Logistics Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "logistics-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Logistics, Supply Chain, Fulfilment & Technology",
    "businessImpact": "Improves fulfilment accuracy, delivery visibility, asset utilisation and supply chain responsiveness.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 197,
    "collection": "operations",
    "serviceType": "advisory",
    "standardName": "Wellness Operations (High-Impact) - Assess",
    "remixName": {},
    "description": "The Wellness operations Advisory service reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on. This assessment maps operational maturity and returns prioritised improvements your operations leaders can act on.",
    "positioning": "See how wellness operations and client experience perform today, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.",
    "price": "Free",
    "duration": "1 Week",
    "popularityRank": 100,
    "deliveryComplexity": "medium",
    "badge": "Assess",
    "audience": "Wellness, Clinic & Care Operations leaders",
    "industryRelevance": "Wellness 4.0: wellness providers, clinics, fitness, preventive health and care service organisations",
    "features": [
      "Architecture alignment for Wellness Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "advisory",
      "transformation",
      "high-impact",
      "wellness-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Wellness Operations, Client Experience, Care Coordination & Technology",
    "businessImpact": "Improves client experience, scheduling efficiency, care coordination, service quality and operational visibility.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 198,
    "collection": "operations",
    "serviceType": "design",
    "standardName": "Wellness Operations (High-Impact) - Design",
    "remixName": {},
    "description": "The Wellness operations Design service turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against. This design engagement defines wellness operations and build-ready specifications.",
    "positioning": "Turn wellness operations and client experience goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 99,
    "deliveryComplexity": "high",
    "badge": "Design",
    "audience": "Wellness, Clinic & Care Operations leaders",
    "industryRelevance": "Wellness 4.0: wellness providers, clinics, fitness, preventive health and care service organisations",
    "features": [
      "Architecture alignment for Wellness Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "design",
      "transformation",
      "high-impact",
      "wellness-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Wellness Operations, Client Experience, Care Coordination & Technology",
    "businessImpact": "Improves client experience, scheduling efficiency, care coordination, service quality and operational visibility.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 199,
    "collection": "operations",
    "serviceType": "ai_design",
    "standardName": "Wellness Operations (High-Impact) - AI Design",
    "remixName": {},
    "description": "The Wellness operations AI Design service validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment. This AI design engagement defines responsible workflows and deployment-ready specifications.",
    "positioning": "Define the AI use cases that matter for wellness operations and client experience, with data requirements, guardrails, and specifications ready to build.",
    "price": "From $1,000",
    "duration": "4 Weeks",
    "popularityRank": 98,
    "deliveryComplexity": "high",
    "badge": "AI Design",
    "audience": "Wellness, Clinic & Care Operations leaders",
    "industryRelevance": "Wellness 4.0: wellness providers, clinics, fitness, preventive health and care service organisations",
    "features": [
      "Architecture alignment for Wellness Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_design",
      "transformation",
      "high-impact",
      "wellness-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Wellness Operations, Client Experience, Care Coordination & Technology",
    "businessImpact": "Improves client experience, scheduling efficiency, care coordination, service quality and operational visibility.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 200,
    "collection": "operations",
    "serviceType": "deploy",
    "standardName": "Wellness Operations (High-Impact) - Deploy",
    "remixName": {},
    "description": "The Wellness operations Deploy service delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team. This implementation delivers configured, tested capabilities with structured handover.",
    "positioning": "Implement agreed wellness operations and client experience changes through managed configuration, integration, testing, and controlled launch support.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 97,
    "deliveryComplexity": "high",
    "badge": "Deploy",
    "audience": "Wellness, Clinic & Care Operations leaders",
    "industryRelevance": "Wellness 4.0: wellness providers, clinics, fitness, preventive health and care service organisations",
    "features": [
      "Architecture alignment for Wellness Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "deploy",
      "transformation",
      "high-impact",
      "wellness-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Wellness Operations, Client Experience, Care Coordination & Technology",
    "businessImpact": "Improves client experience, scheduling efficiency, care coordination, service quality and operational visibility.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      198
    ]
  },
  {
    "id": 201,
    "collection": "operations",
    "serviceType": "ai_deploy",
    "standardName": "Wellness Operations (High-Impact) - AI Deploy",
    "remixName": {},
    "description": "The Wellness operations AI Deploy service deploys governed AI capabilities into production with monitoring, safety controls, and operational handover. This AI implementation deploys governed capabilities with monitoring and handover built in.",
    "positioning": "Put AI-enabled wellness operations and client experience workflows into production with security, governance, and adoption built in from day one.",
    "price": "Custom",
    "duration": "12 Weeks",
    "popularityRank": 96,
    "deliveryComplexity": "high",
    "badge": "AI Deploy",
    "audience": "Wellness, Clinic & Care Operations leaders",
    "industryRelevance": "Wellness 4.0: wellness providers, clinics, fitness, preventive health and care service organisations",
    "features": [
      "Architecture alignment for Wellness Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "ai_deploy",
      "transformation",
      "high-impact",
      "wellness-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Wellness Operations, Client Experience, Care Coordination & Technology",
    "businessImpact": "Improves client experience, scheduling efficiency, care coordination, service quality and operational visibility.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      199
    ]
  },
  {
    "id": 202,
    "collection": "operations",
    "serviceType": "manage",
    "standardName": "Wellness Operations (High-Impact) - Managed",
    "remixName": {},
    "description": "The Wellness operations Managed service runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance. This managed service provides SLA-backed operations and continuous improvement.",
    "positioning": "Run and improve wellness operations and client experience with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.",
    "price": "Custom Monthly Plans",
    "duration": "Ongoing",
    "popularityRank": 95,
    "deliveryComplexity": "medium",
    "badge": "Managed",
    "audience": "Wellness, Clinic & Care Operations leaders",
    "industryRelevance": "Wellness 4.0: wellness providers, clinics, fitness, preventive health and care service organisations",
    "features": [
      "Architecture alignment for Wellness Operations (High-Impact)",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "manage",
      "transformation",
      "high-impact",
      "wellness-4.0",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Wellness Operations, Client Experience, Care Coordination & Technology",
    "businessImpact": "Improves client experience, scheduling efficiency, care coordination, service quality and operational visibility.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": []
  },
  {
    "id": 203,
    "collection": "experience",
    "serviceType": "bundle",
    "standardName": "Online Web Presence (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Strengthen your organisation’s website as a trusted digital front door for discovery, engagement, conversion and service across priority customer journeys.",
    "positioning": "End-to-end phased delivery for online web presence: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "CX, Digital, Marketing & IT leaders",
    "industryRelevance": "B2B, B2C and public sector organisations with customer-facing web channels",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "experience"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital, CX, Marketing & IT",
    "businessImpact": "Improves digital visibility, customer trust, lead conversion and service accessibility while reducing friction across web journeys.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      2,
      3,
      4,
      5,
      6
    ]
  },
  {
    "id": 204,
    "collection": "experience",
    "serviceType": "bundle",
    "standardName": "Online Social Presence (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Modernise your social presence into a coordinated engagement channel for brand visibility, audience growth, campaign activation and customer dialogue.",
    "positioning": "End-to-end phased delivery for social presence and audience engagement: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Marketing, Communications & CX leaders",
    "industryRelevance": "organisations using social channels for brand, customer engagement or public communication",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "experience"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Marketing, Communications, CX & Digital",
    "businessImpact": "Increases audience reach, content consistency, engagement quality and campaign responsiveness across social channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      8,
      9,
      10,
      11,
      12
    ]
  },
  {
    "id": 205,
    "collection": "experience",
    "serviceType": "bundle",
    "standardName": "Mobile Apps (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Create or improve mobile app capabilities that make priority services, transactions and engagement journeys easier to access on the move.",
    "positioning": "End-to-end phased delivery for mobile apps and mobile services: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Digital Product, CX & Operations leaders",
    "industryRelevance": "organisations with mobile-first customers, employees, partners or field operations",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "experience"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital Product, CX, Operations & IT",
    "businessImpact": "Improves mobile adoption, service convenience, journey completion and digital channel performance.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      14,
      15,
      16,
      17,
      18
    ]
  },
  {
    "id": 206,
    "collection": "experience",
    "serviceType": "bundle",
    "standardName": "Physical Channels (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Connect physical locations, service points and frontline environments with digital experiences that improve engagement, service flow and operational visibility.",
    "positioning": "End-to-end phased delivery for physical channels and frontline experience: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Operations, CX & Facilities leaders",
    "industryRelevance": "organisations operating branches, stores, clinics, offices, venues or service centres",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "experience"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Operations, CX, Facilities & Digital",
    "businessImpact": "Enhances physical service productivity, customer experience consistency and visibility across in-person channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": 207,
    "collection": "experience",
    "serviceType": "bundle",
    "standardName": "Integrated Experience (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Design integrated experiences across journeys, content, channels and personalisation to improve customer and employee engagement.",
    "positioning": "End-to-end phased delivery for integrated customer and employee experience: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "CX, Digital, Product & Marketing leaders",
    "industryRelevance": "organisations improving customer, employee or stakeholder experience ecosystems",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "experience"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "CX, Digital, Product & Transformation",
    "businessImpact": "Improves journey consistency, engagement quality, personalisation readiness and experience-led growth.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": 208,
    "collection": "experience",
    "serviceType": "bundle",
    "standardName": "CRM Solutions (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Improve how your organisation manages prospects, customers, relationships and interactions through modern CRM capabilities and adoption practices.",
    "positioning": "End-to-end phased delivery for CRM and relationship management: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Sales, Marketing, Service & CX leaders",
    "industryRelevance": "organisations managing sales pipelines, accounts, customer service or relationship portfolios",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "experience"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Sales, Marketing, Service, CX & IT",
    "businessImpact": "Increases pipeline visibility, customer understanding, relationship consistency and revenue operations discipline.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": 209,
    "collection": "experience",
    "serviceType": "bundle",
    "standardName": "Marketing Solutions (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Upgrade marketing operations with clearer audience strategy, campaign workflows, performance measurement, automation and AI-enabled activation.",
    "positioning": "End-to-end phased delivery for marketing operations and campaigns: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "CMOs, Marketing Ops & Growth leaders",
    "industryRelevance": "organisations seeking measurable, data-driven and scalable marketing operations",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "experience"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Marketing, Growth, Digital & Analytics",
    "businessImpact": "Improves campaign performance, marketing productivity, audience targeting and return on marketing investment.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      38,
      39,
      40,
      41,
      42
    ]
  },
  {
    "id": 210,
    "collection": "experience",
    "serviceType": "bundle",
    "standardName": "Smart Sales & Quotation (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Streamline sales and quotation workflows from opportunity to proposal, pricing, approval and customer response.",
    "positioning": "End-to-end phased delivery for sales and quotation: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Sales, Commercial & Revenue Ops leaders",
    "industryRelevance": "organisations with structured sales, pricing, quotation or proposal processes",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "experience"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Sales, Commercial, Revenue Operations & Finance",
    "businessImpact": "Accelerates quote turnaround, improves pricing control, reduces manual effort and strengthens sales conversion.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      44,
      45,
      46,
      47,
      48
    ]
  },
  {
    "id": 211,
    "collection": "experience",
    "serviceType": "bundle",
    "standardName": "Customer Support & Success (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Strengthen customer support and success operations through better service workflows, knowledge, case handling, aftercare and digital assistance.",
    "positioning": "End-to-end phased delivery for customer support and success: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Customer Service, Success & CX leaders",
    "industryRelevance": "organisations operating customer care, support, aftersales or account success functions",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "experience"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Customer Service, Success, CX & Operations",
    "businessImpact": "Improves service responsiveness, resolution quality, customer retention and support productivity.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      50,
      51,
      52,
      53,
      54
    ]
  },
  {
    "id": 212,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Digital Workplace (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Enable a more productive digital workplace through collaboration, knowledge sharing, workflow enablement, employee experience and secure productivity tools.",
    "positioning": "End-to-end phased delivery for digital workplace and collaboration: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "HR, IT & Internal Comms leaders",
    "industryRelevance": "organisations modernising work, collaboration and employee productivity environments",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "HR, IT, Operations & Internal Communications",
    "businessImpact": "Improves collaboration, employee productivity, knowledge access and adoption of digital ways of working.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      56,
      57,
      58,
      59,
      60
    ]
  },
  {
    "id": 213,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Business Process Automation (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Identify, design and automate priority business processes to reduce manual work, improve control and accelerate execution across functions.",
    "positioning": "End-to-end phased delivery for business process automation: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "COOs, Operations & Transformation leaders",
    "industryRelevance": "organisations with repeatable workflows, approval chains, handoffs or back-office operations",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Operations, Transformation, Process Excellence & IT",
    "businessImpact": "Reduces process cycle time, manual effort, rework and operational leakage while improving standardisation.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      62,
      63,
      64,
      65,
      66
    ]
  },
  {
    "id": 214,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Specialised Operations (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Digitise and optimise specialised operational environments where domain-specific workflows require tailored platforms, controls and automation.",
    "positioning": "End-to-end phased delivery for specialised operations: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Business Unit & Domain Operations leaders",
    "industryRelevance": "domain-specific operations requiring fit-for-purpose digital enablement",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Business Operations, Domain Functions & Transformation",
    "businessImpact": "Improves performance, control and scalability in specialised business functions where generic systems are insufficient.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      74,
      75,
      76,
      77,
      78
    ]
  },
  {
    "id": 215,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Enterprise Operations (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Improve enterprise-wide operational coordination across processes, teams, services and performance management capabilities.",
    "positioning": "End-to-end phased delivery for enterprise operations: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "COOs, Strategy & Transformation leaders",
    "industryRelevance": "organisations seeking enterprise-level operational coherence and execution visibility",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Enterprise Operations, Strategy & Transformation",
    "businessImpact": "Improves enterprise coordination, operating visibility, decision speed and execution discipline across functions.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      80,
      81,
      82,
      83,
      84
    ]
  },
  {
    "id": 216,
    "collection": "security",
    "serviceType": "bundle",
    "standardName": "Governance, Risk & Compliance (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Strengthen governance, risk and compliance capabilities through clearer controls, workflows, evidence management, reporting and assurance mechanisms.",
    "positioning": "End-to-end phased delivery for governance, risk and compliance: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Risk, Compliance, Audit & Legal leaders",
    "industryRelevance": "regulated, risk-sensitive or control-heavy organisations",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "security"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Governance, Risk, Compliance, Audit & Legal",
    "businessImpact": "Reduces compliance exposure, improves control effectiveness, strengthens assurance and accelerates risk response.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      86,
      87,
      88,
      89,
      90
    ]
  },
  {
    "id": 217,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Enterprise Resource Planning (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Modernise ERP-enabled operations across finance, procurement, HR, inventory and core enterprise processes for better integration and control.",
    "positioning": "End-to-end phased delivery for ERP and core enterprise operations: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "CFOs, Finance, Procurement & HR leaders",
    "industryRelevance": "organisations relying on integrated enterprise resource planning capabilities",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Finance, Procurement, HR, Operations & IT",
    "businessImpact": "Improves process integration, data consistency, financial control and operational efficiency across core enterprise functions.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      92,
      93,
      94,
      95,
      96
    ]
  },
  {
    "id": 218,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Workforce Management (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Improve workforce planning, scheduling, productivity, task allocation and employee coordination across operational teams.",
    "positioning": "End-to-end phased delivery for workforce management: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "HR, Workforce Planning & Operations leaders",
    "industryRelevance": "organisations managing distributed, shift-based, field, frontline or knowledge workforces",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "HR, Workforce Planning, Operations & IT",
    "businessImpact": "Improves workforce utilisation, scheduling accuracy, productivity visibility and employee coordination.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      98,
      99,
      100,
      101,
      102
    ]
  },
  {
    "id": 219,
    "collection": "ai",
    "serviceType": "bundle",
    "standardName": "Enterprise Data Platform (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Establish the data foundation required for trusted reporting, analytics, AI, integration and operational decision-making.",
    "positioning": "End-to-end phased delivery for enterprise data platform: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "CDOs, CIOs, Data & Analytics leaders",
    "industryRelevance": "organisations building governed data platforms, data products or AI-ready foundations",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "data"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Data, Analytics, AI, Governance & IT",
    "businessImpact": "Improves data trust, reuse, governance, platform readiness and the ability to scale analytics and AI.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      104,
      105,
      106,
      107,
      108
    ]
  },
  {
    "id": 220,
    "collection": "ai",
    "serviceType": "bundle",
    "standardName": "Business Intelligence & Analytics (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Turn enterprise data into actionable insight through stronger reporting, dashboards, KPIs, analytics workflows and decision intelligence.",
    "positioning": "End-to-end phased delivery for business intelligence and analytics: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Strategy, Finance & Analytics leaders",
    "industryRelevance": "organisations seeking better performance visibility, KPIs and data-driven decision-making",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "ai"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Analytics, Strategy, Finance & Operations",
    "businessImpact": "Improves management visibility, decision speed, performance tracking and confidence in business insight.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      110,
      111,
      112,
      113,
      114
    ]
  },
  {
    "id": 221,
    "collection": "ai",
    "serviceType": "bundle",
    "standardName": "Enterprise AI & Automation (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Identify and scale practical AI and automation opportunities across workflows, decisions, knowledge work and customer or employee experiences.",
    "positioning": "End-to-end phased delivery for enterprise AI and automation: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "CEOs, CIOs, AI & Transformation leaders",
    "industryRelevance": "organisations ready to adopt AI assistants, agents, automation or cognitive workflows",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "ai"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "AI, Automation, Transformation, Operations & IT",
    "businessImpact": "Improves productivity, decision support, workflow intelligence and the controlled adoption of enterprise AI.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      116,
      117,
      118,
      119,
      120
    ]
  },
  {
    "id": 222,
    "collection": "security",
    "serviceType": "bundle",
    "standardName": "Technology Governance (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Improve technology governance across architecture, standards, portfolio controls, decision rights, assurance and platform lifecycle management.",
    "positioning": "End-to-end phased delivery for technology governance: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "CIOs, Enterprise Architecture & PMO leaders",
    "industryRelevance": "organisations managing technology portfolios, platforms, vendors and enterprise architecture standards",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "security"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Technology Governance, Enterprise Architecture & PMO",
    "businessImpact": "Improves technology alignment, investment control, architecture quality and delivery governance.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      122,
      123,
      124,
      125,
      126
    ]
  },
  {
    "id": 223,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "DevSecOps Automation (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Accelerate secure digital delivery through DevSecOps practices, automation pipelines, environment controls and release governance.",
    "positioning": "End-to-end phased delivery for DevSecOps automation: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "CTOs, Engineering, Security & DevOps leaders",
    "industryRelevance": "organisations building, integrating or operating digital platforms and software products",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Engineering, Security, DevOps & Platform Operations",
    "businessImpact": "Improves delivery speed, release quality, security assurance and operational reliability across digital platforms.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      128,
      129,
      130,
      131,
      132
    ]
  },
  {
    "id": 224,
    "collection": "experience",
    "serviceType": "bundle",
    "standardName": "IT Operations & Support (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Improve IT service delivery and employee support through better incident handling, knowledge, automation and service management.",
    "positioning": "End-to-end phased delivery for IT operations and employee support services: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "CIOs, IT Operations & Service Desk leaders",
    "industryRelevance": "organisations dependent on reliable IT services, support workflows and operational continuity",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "experience"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "IT Operations, Service Management, Infrastructure & Support",
    "businessImpact": "Improves service reliability, incident resolution, support productivity and user satisfaction.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      134,
      135,
      136,
      137,
      138
    ]
  },
  {
    "id": 225,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Farming Operations (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Digitise farming operations across planning, production, field activity, resource use, monitoring and performance management.",
    "positioning": "End-to-end phased delivery for farming operations: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Agribusiness & Farm Operations leaders",
    "industryRelevance": "Farming 4.0: agribusiness, food production, crop operations and agricultural service providers",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Agriculture Operations, Production & Technology",
    "businessImpact": "Improves yield visibility, resource efficiency, operational planning and farm performance management.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      150,
      151,
      152,
      153,
      154
    ]
  },
  {
    "id": 226,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Manufacturing Operations (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Improve manufacturing operations across production planning, shopfloor workflows, quality, maintenance, performance visibility and Industry 4.0 readiness.",
    "positioning": "End-to-end phased delivery for manufacturing operations: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Manufacturing & Plant Operations leaders",
    "industryRelevance": "Plant 4.0: manufacturers, industrial operators and production environments",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Manufacturing Operations, Quality, Maintenance & Technology",
    "businessImpact": "Improves throughput, quality control, downtime visibility, production coordination and operational efficiency.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      156,
      157,
      158,
      159,
      160
    ]
  },
  {
    "id": 227,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Infrastructure Operations (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Modernise infrastructure operations across assets, maintenance, field work, service reliability, compliance and operational performance.",
    "positioning": "End-to-end phased delivery for infrastructure operations: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Asset Managers & Infrastructure leaders",
    "industryRelevance": "Infrastructure 4.0: utilities, transport, real estate, facilities, energy and asset-intensive operators",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Asset Operations, Maintenance, Engineering & Technology",
    "businessImpact": "Improves asset reliability, maintenance planning, field productivity and infrastructure service continuity.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      162,
      163,
      164,
      165,
      166
    ]
  },
  {
    "id": 228,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Government Operations (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Improve government operations and citizen services through better service workflows, case management, coordination, governance and digital enablement.",
    "positioning": "End-to-end phased delivery for government operations and citizen services: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Public sector & Digital Government leaders",
    "industryRelevance": "Government 4.0: ministries, authorities, agencies, municipalities and public service organisations",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Digital Government, Service Delivery, Operations & Policy",
    "businessImpact": "Improves citizen service quality, processing efficiency, transparency and cross-agency operational coordination.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      168,
      169,
      170,
      171,
      172
    ]
  },
  {
    "id": 229,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Hospitality Operations (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Digitise hospitality operations across guest journeys, service workflows, staff coordination, facilities, revenue and experience management.",
    "positioning": "End-to-end phased delivery for hospitality operations and guest experience: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Hospitality & Guest Experience leaders",
    "industryRelevance": "Hospitality 4.0: hotels, resorts, venues, tourism operators and guest service organisations",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Hospitality Operations, Guest Experience & Technology",
    "businessImpact": "Improves guest satisfaction, service responsiveness, staff coordination and operational efficiency.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      174,
      175,
      176,
      177,
      178
    ]
  },
  {
    "id": 230,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Retail Operations (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Modernise retail operations across stores, commerce, inventory, customer engagement, staff productivity and omnichannel execution.",
    "positioning": "End-to-end phased delivery for retail operations and omnichannel commerce: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Retail, Commerce & Store Operations leaders",
    "industryRelevance": "Retail 4.0: retailers, marketplaces, distributors and omnichannel commerce organisations",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Retail Operations, Commerce, CX & Technology",
    "businessImpact": "Improves sales execution, store productivity, inventory visibility and customer engagement across retail channels.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      180,
      181,
      182,
      183,
      184
    ]
  },
  {
    "id": 231,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Service Operations (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Improve service operations across request intake, scheduling, delivery coordination, field execution, quality control and customer follow-up.",
    "positioning": "End-to-end phased delivery for service operations: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Service Operations & Field Service leaders",
    "industryRelevance": "Service 4.0: professional, technical, field, maintenance and customer service organisations",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Service Operations, Field Service, Customer Experience & Technology",
    "businessImpact": "Improves service throughput, scheduling accuracy, delivery quality and customer satisfaction.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      186,
      187,
      188,
      189,
      190
    ]
  },
  {
    "id": 232,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Logistics Operations (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Digitise logistics operations across planning, fulfilment, fleet, warehousing, supply chain visibility and exception management.",
    "positioning": "End-to-end phased delivery for logistics and supply chain operations: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Logistics & Supply Chain leaders",
    "industryRelevance": "Logistics 4.0: logistics providers, distributors, supply chain operators and fulfilment organisations",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Logistics, Supply Chain, Fulfilment & Technology",
    "businessImpact": "Improves fulfilment accuracy, delivery visibility, asset utilisation and supply chain responsiveness.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      192,
      193,
      194,
      195,
      196
    ]
  },
  {
    "id": 233,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Wellness Operations (High-Impact) - Transformation Bundle",
    "remixName": {},
    "description": "Improve wellness operations across client or patient journeys, scheduling, service coordination, records, care workflows and engagement.",
    "positioning": "End-to-end phased delivery for wellness operations and client experience: assess, design, deploy and handover under unified TMaaS governance.",
    "price": "Custom",
    "duration": "16-24 Weeks",
    "popularityRank": 200,
    "deliveryComplexity": "high",
    "badge": "Bundle",
    "audience": "Wellness, Clinic & Care Operations leaders",
    "industryRelevance": "Wellness 4.0: wellness providers, clinics, fitness, preventive health and care service organisations",
    "features": [
      "Includes Design, AI Design, Implementation, AI Implementation, and Managed Services",
      "Architecture alignment",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting",
      "Phased delivery and milestone tracking"
    ],
    "tags": [
      "bundle",
      "transformation",
      "high-impact",
      "operations"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Wellness Operations, Client Experience, Care Coordination & Technology",
    "businessImpact": "Improves client experience, scheduling efficiency, care coordination, service quality and operational visibility.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Discovery & Alignment",
      "Phase 2: Execution",
      "Phase 3: Governance & Review",
      "Phase 4: Operational Handover"
    ],
    "relatedServices": [
      198,
      199,
      200,
      201,
      202
    ]
  },
  {
    "id": 234,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Advisory Set - Advisory Set",
    "remixName": {},
    "description": "A flexible advisory package for diagnosing transformation priorities, clarifying opportunities and building executive alignment across one or more TMaaS capability areas.",
    "positioning": "Flexible advisory across selected TMaaS capability areas — diagnose priorities and build executive alignment.",
    "price": "Custom",
    "duration": "Variable",
    "popularityRank": 150,
    "deliveryComplexity": "medium",
    "badge": "Bundle",
    "audience": "Executives & Transformation leaders",
    "industryRelevance": "organisations requiring targeted transformation advisory across multiple capability areas",
    "features": [
      "Customisable selection across categories",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting"
    ],
    "tags": [
      "bundle",
      "set"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Executive, Strategy, Transformation & Technology",
    "businessImpact": "Creates leadership alignment, priority clarity and a practical roadmap before larger transformation investment.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Alignment",
      "Phase 2: Execution"
    ],
    "relatedServices": []
  },
  {
    "id": 235,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Design Services Set - Design Services Set",
    "remixName": {},
    "description": "A flexible design package for turning selected transformation priorities into solution blueprints, journey designs, delivery backlogs and implementation plans.",
    "positioning": "Blueprints and delivery plans across selected transformation priorities — journey designs, backlogs and governance included.",
    "price": "Custom",
    "duration": "Variable",
    "popularityRank": 150,
    "deliveryComplexity": "medium",
    "badge": "Bundle",
    "audience": "Product Owners & Delivery leaders",
    "industryRelevance": "organisations requiring solution design across one or more TMaaS capability areas",
    "features": [
      "Customisable selection across categories",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting"
    ],
    "tags": [
      "bundle",
      "set"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Product, Operations, Transformation & Technology",
    "businessImpact": "Converts transformation intent into practical designs, delivery scope, governance and execution-ready plans.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Alignment",
      "Phase 2: Execution"
    ],
    "relatedServices": []
  },
  {
    "id": 236,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Deploy Services Set - Deploy Services Set",
    "remixName": {},
    "description": "A flexible deploy package for implementing selected TMaaS capabilities through managed delivery, configuration, integration, testing and launch support.",
    "positioning": "Managed implementation across selected capabilities — configuration, integration, testing and controlled launch support.",
    "price": "Custom",
    "duration": "Variable",
    "popularityRank": 150,
    "deliveryComplexity": "medium",
    "badge": "Bundle",
    "audience": "Delivery Sponsors & Product Owners",
    "industryRelevance": "organisations ready to deploy digital, data, automation or operational capabilities",
    "features": [
      "Customisable selection across categories",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting"
    ],
    "tags": [
      "bundle",
      "set"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Delivery, Operations, Product & Technology",
    "businessImpact": "Accelerates controlled implementation, reduces delivery risk and helps launch usable transformation capabilities.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Alignment",
      "Phase 2: Execution"
    ],
    "relatedServices": []
  },
  {
    "id": 237,
    "collection": "operations",
    "serviceType": "bundle",
    "standardName": "Managed Services Set - Managed Services Set",
    "remixName": {},
    "description": "A flexible managed services package for operating, supporting and continuously improving selected TMaaS capabilities after launch.",
    "positioning": "Ongoing operations for selected deployed capabilities — monitoring, optimisation and service continuity.",
    "price": "Custom",
    "duration": "Variable",
    "popularityRank": 150,
    "deliveryComplexity": "medium",
    "badge": "Bundle",
    "audience": "Service Owners & Operations leaders",
    "industryRelevance": "organisations seeking managed operation and continuous improvement of deployed capabilities",
    "features": [
      "Customisable selection across categories",
      "Dedicated TMaaS specialist team",
      "SLA-backed governance and reporting"
    ],
    "tags": [
      "bundle",
      "set"
    ],
    "outcomes": [
      "modernise-technology",
      "improve-operations"
    ],
    "department": "Operations, Service Management, Transformation & Technology",
    "businessImpact": "Sustains service performance, adoption, optimisation and operational continuity after implementation.",
    "implementationModel": "TMaaS Managed Delivery",
    "timelineMilestones": [
      "Phase 1: Alignment",
      "Phase 2: Execution"
    ],
    "relatedServices": []
  }
] as const satisfies readonly ServiceProduct[];

export const getRemixedName = (
  service: (typeof initialServices)[number],
  remixKey: string = "all"
) => {
  if (remixKey === "all") return service.standardName;
  return service.remixName[remixKey as keyof typeof service.remixName] || service.standardName;
};

type ServiceCollection = "experience" | "operations" | "security" | "ai" | "bundles";

export const getPopularServices = (
  collection: "all" | ServiceCollection = "all",
  limit = 4
) => {
  const pool =
    collection === "all"
      ? initialServices
      : initialServices.filter((s) => s.collection === collection);
  return [...pool]
    .sort((a, b) => b.popularityRank - a.popularityRank)
    .slice(0, limit);
};

export const getServiceById = (id: number) =>
  initialServices.find((s) => s.id === id);

export const parseServicePrice = (price: string): number =>
  Number(price.replace(/[^0-9]/g, "")) || 0;

export const formatServicePrice = (amount: number): string =>
  `$${amount.toLocaleString("en-US")}`;

/** Top services per collection (homepage featured + marketplace shelf) */
export const getFeaturedByCollection = (
  collection: ServiceCollection,
  limit = 3
) =>
  initialServices
    .filter((s) => s.collection === collection)
    .sort((a, b) => b.popularityRank - a.popularityRank)
    .slice(0, limit);

/** Best sellers for marketplace, all categories or one collection */
export const getBestSellers = (
  collection: "all" | ServiceCollection = "all",
  limit = 4
) => {
  const pool =
    collection === "all"
      ? initialServices
      : initialServices.filter((s) => s.collection === collection);
  return sortCatalogByPopularMix(pool.filter((s) => s.serviceType !== "bundle")).slice(0, limit);
};
