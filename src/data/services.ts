export const initialServices = [
  // AI & Automation (ai)
  {
    id: 3,
    collection: "ai",
    standardName: "AI Strategy & Roadmap",
    remixName: {
      retail: "Retail AI Growth Service",
      banking: "Banking AI Customer Experience Accelerator",
      healthcare: "Healthcare Decision Intelligence Roadmap",
      logistics: "Supply Chain Predictive AI Strategy",
      government: "Public Service Automation Roadmap",
      education: "Personalized Learning Platform Plan",
      general: "AI Strategy & Roadmap"
    },
    description: "Establish your operational AI roadmap, safety guidelines, and high-ROI use cases tailored to your organization's growth goals.",
    positioning: "Establish AI priorities, governance structures, and adoption pathways aligned to your business goals.",
    price: "$1,500",
    duration: "2 Weeks",
    popularityRank: 10,
    deliveryComplexity: "low",
    badge: "Recommended",
    audience: "Mid-Market & Enterprise",
    industryRelevance: "Finance • Retail • Government",
    features: [
      "AI opportunity scoping & priority mapping",
      "Operational safety & risk guardrails",
      "Business system compatibility audit",
      "Executive activation roadmap"
    ],
    tags: ["AI Strategy", "AI Adoption", "Business Insights", "Workforce Automation"],
    outcomes: ["Launch AI Capabilities", "Grow Revenue"],
    department: "IT & Product Engineering",
    businessImpact: "+25% Strategic Scoping Accuracy",
    implementationModel: "Specialist-Led Co-Delivery Sprint",
    timelineMilestones: [
      "Day 1-3: Core Stakeholder Interviews",
      "Day 4-6: System Readiness Assessment",
      "Day 7-9: ROI Use Case Mapping",
      "Day 10: Deliverable Handover"
    ],
    relatedServices: [101, 102]
  },
  {
    id: 101,
    collection: "ai",
    standardName: "Enterprise AI Launch Service",
    remixName: {
      retail: "Retail Omnichannel Recommendation Engine",
      banking: "Banking AI Customer Service Agent",
      healthcare: "Clinical Research Data Orchestrator",
      logistics: "Predictive Warehouse Dispatcher",
      government: "Federal AI Operations Assistant",
      education: "Smart Curriculum Copilot Setup",
      general: "Enterprise AI Launch Service"
    },
    description: "Deploy pre-scoped AI capabilities, automated workflows, and operational intelligence solutions safely across your daily business processes.",
    positioning: "Move AI out of experimentation and deploy intelligent workflows securely.",
    price: "$2,500",
    duration: "4 Weeks",
    popularityRank: 8,
    deliveryComplexity: "medium",
    badge: "Enterprise Ready",
    audience: "Enterprise Target",
    industryRelevance: "Finance • Healthcare • Logistics",
    features: [
      "AI model operational playbooks",
      "Performance tracking dashboards",
      "Staff AI enablement training workshops",
      "Transformation specialist audit reviews"
    ],
    tags: ["AI Launch", "AI Automation", "Workforce Enablement"],
    outcomes: ["Launch AI Capabilities", "Grow Revenue"],
    department: "IT & Product Engineering",
    businessImpact: "3.2x ROI on custom models",
    implementationModel: "Platform Engineering Co-Design",
    timelineMilestones: [
      "Week 1: API Scopes & Specs",
      "Week 2: Model Tuning & Integrations",
      "Week 3: Telemetry & Monitoring Setup",
      "Week 4: Handover & Core Training"
    ],
    relatedServices: [3, 102]
  },
  {
    id: 102,
    collection: "ai",
    standardName: "AI Workforce Enablement Sprint",
    remixName: {
      retail: "Retail Clienteling AI Enablement",
      banking: "Financial Advisor AI Copilot Setup",
      healthcare: "HIPAA Compliant AI Training Sprint",
      logistics: "Dispatch Coordinator AI Enablement",
      government: "Public Service AI Training Sprint",
      education: "Teacher AI Co-Designer Workshop",
      general: "AI Workforce Enablement Sprint"
    },
    description: "Accelerate staff adoption of artificial intelligence utilities through ready-to-use prompt libraries, customized templates, and compliance training.",
    positioning: "Accelerate staff productivity by enabling safe, compliant daily AI usage.",
    price: "$1,200",
    duration: "2 Weeks",
    popularityRank: 9,
    deliveryComplexity: "low",
    badge: "Fast Deployment",
    audience: "High Adoption Firms",
    industryRelevance: "Retail • Education • Logistics",
    features: [
      "Custom prompt libraries & templates",
      "Team productivity benchmarks",
      "Compliance & safety workshops",
      "Staff adoption scorecards"
    ],
    tags: ["AI Adoption", "Workforce Enablement", "Training"],
    outcomes: ["Launch AI Capabilities", "Improve Customer Experience"],
    department: "Operations & HR",
    businessImpact: "+45% Staff Prompt Efficiency",
    implementationModel: "Specialist-Led Collaborative Workshop",
    timelineMilestones: [
      "Day 1-2: Baseline Productivity Scan",
      "Day 3-5: Custom Prompts Library Setup",
      "Day 6-8: Hands-On Enablement Workshop",
      "Day 10: Adoption Dashboard Delivery"
    ],
    relatedServices: [3, 101]
  },

  // Customer Experience (cx)
  {
    id: 1,
    collection: "cx",
    standardName: "Customer Experience Transformation",
    remixName: {
      retail: "Retail CX Omnichannel Optimization",
      banking: "Banking Unified Customer Portal",
      healthcare: "Secure Patient Experience Hub",
      logistics: "Real-Time Client Delivery Portal",
      government: "Citizen Direct Support Terminal",
      education: "Unified Student Onboarding Hub",
      general: "Customer Experience Transformation"
    },
    description: "Unify digital customer touchpoints, shopping experiences, and client self-service hubs to increase brand loyalty and conversions.",
    positioning: "Design scalable, high-converting digital customer experiences across all channels.",
    price: "$3,000",
    duration: "6 Weeks",
    popularityRank: 7,
    deliveryComplexity: "medium",
    badge: null,
    audience: "Retail & Consumer Goods",
    industryRelevance: "Retail • Banking • Healthcare",
    features: [
      "High-conversion customer checkout pathways",
      "Self-service support portals",
      "Unified customer experience roadmap",
      "Customer growth attribution dashboards"
    ],
    tags: ["Customer Experience", "Omnichannel", "Client Portals"],
    outcomes: ["Improve Customer Experience", "Grow Revenue"],
    department: "Customer Service",
    businessImpact: "+18% Customer Satisfaction Score",
    implementationModel: "Specialist-Led Custom Engineering Sprint",
    timelineMilestones: [
      "Week 1-2: Customer Journey Mapping",
      "Week 3-4: Portal UI/UX Engineering",
      "Week 5: Backend Integrations & Testing",
      "Week 6: Deployment & Analytics Handover"
    ],
    relatedServices: [103, 104]
  },
  {
    id: 103,
    collection: "cx",
    standardName: "CRM Modernization Service",
    remixName: {
      retail: "Retail Client Profile Consolidation",
      banking: "Wealth CRM Pipeline Consolidation",
      healthcare: "Patient Record CRM Synchronization",
      logistics: "Account Manager Sales Pipeline",
      government: "Constituent CRM Modernization",
      education: "Student Lifecycle CRM Integration",
      general: "CRM Modernization Service"
    },
    description: "Consolidate duplicate customer records, synchronize communication pipelines, and optimize team access across sales pipelines.",
    positioning: "Eliminate disjointed customer data and unify your core CRM strategy.",
    price: "$2,400",
    duration: "4 Weeks",
    popularityRank: 6,
    deliveryComplexity: "medium",
    badge: "Recommended",
    audience: "High Growth Firms",
    industryRelevance: "Finance • Logistics • Retail",
    features: [
      "Customer workflow consolidation",
      "Automated contact synchronization",
      "Sales pipeline scorecards",
      "Custom team performance dashboards"
    ],
    tags: ["CRM", "Sales Pipeline", "Consolidation"],
    outcomes: ["Improve Customer Experience", "Modernize Operations"],
    department: "Marketing & Sales",
    businessImpact: "+35% Lead Conversion Velocity",
    implementationModel: "Co-Delivery Setup Sprint",
    timelineMilestones: [
      "Week 1: Sync Audit & Field Mapping",
      "Week 2: Automated Sync Pipeline Build",
      "Week 3: Dashboard & Analytics Setup",
      "Week 4: Team Onboarding & Deployment"
    ],
    relatedServices: [1, 104]
  },
  {
    id: 104,
    collection: "cx",
    standardName: "Digital Sales Acceleration",
    remixName: {
      retail: "Retail Commerce Funnel Optimization",
      banking: "Loan Application Funnel Acceleration",
      healthcare: "Patient Intake Funnel Optimization",
      logistics: "Freight Quote Booking Funnel",
      government: "Agency Service Discovery Optimizer",
      education: "Admissions Funnel Optimization Kit",
      general: "Digital Sales Acceleration"
    },
    description: "Supercharge sales pipelines, marketing automation tools, and customer acquisition campaigns for fast conversion gains.",
    positioning: "Accelerate revenue pipelines by removing digital friction and improving capture points.",
    price: "$1,800",
    duration: "3 Weeks",
    popularityRank: 5,
    deliveryComplexity: "low",
    badge: "Fast Deployment",
    audience: "B2B & E-commerce",
    industryRelevance: "E-Commerce • B2B Tech • Banking",
    features: [
      "Sales lead capture setups",
      "Marketing automation workflows",
      "Customer growth attribution dashboards",
      "Conversion rate optimization audits"
    ],
    tags: ["Digital Sales", "Campaign Automation", "Conversion Optimization"],
    outcomes: ["Improve Customer Experience", "Grow Revenue"],
    department: "Marketing & Sales",
    businessImpact: "+22% Sales Pipeline Velocity",
    implementationModel: "Specialist-Led Co-Delivery Sprint",
    timelineMilestones: [
      "Week 1: Capture Funnel Scoping",
      "Week 2: Marketing Automation Setup",
      "Week 3: Analytics Dashboards & Handover"
    ],
    relatedServices: [1, 103]
  },

  // Operations Modernization (ops)
  {
    id: 2,
    collection: "ops",
    standardName: "Operations Modernization",
    remixName: {
      retail: "Retail Supply Chain Digitization",
      banking: "Banking Backoffice Approval Automation",
      healthcare: "Clinical Workflow Digitization",
      logistics: "Dispatch Operations Modernization",
      government: "Inter-Agency Document Router",
      education: "Academic Records Digitization Kit",
      general: "Operations Modernization"
    },
    description: "Automate core business approvals, digitize manual backoffice paperwork, and synchronize siloed software applications to reduce friction.",
    positioning: "Eradicate manual bottlenecks and orchestrate seamless digital operations.",
    price: "$2,000",
    duration: "4 Weeks",
    popularityRank: 9,
    deliveryComplexity: "medium",
    badge: "Recommended",
    audience: "Supply Chain & Healthcare",
    industryRelevance: "Logistics • Government • Healthcare",
    features: [
      "Approval workflow automation",
      "Backoffice system synchronization",
      "Process efficiency analytics dashboards",
      "Staff workflow enablement training"
    ],
    tags: ["Operations", "Workflow Automation", "Approve flows"],
    outcomes: ["Modernize Operations", "Accelerate Delivery"],
    department: "Operations & HR",
    businessImpact: "-40% Operational Approval Overhead",
    implementationModel: "Workflow Engineering Sprint",
    timelineMilestones: [
      "Week 1: Process Bottleneck Analysis",
      "Week 2: Automated Approvals Logic",
      "Week 3: Integrations & Telemetry",
      "Week 4: Staff Training & Handoff"
    ],
    relatedServices: [201, 202]
  },
  {
    id: 201,
    collection: "ops",
    standardName: "Workflow Automation Accelerator",
    remixName: {
      retail: "Retail Order Processing Automator",
      banking: "Credit Approval Automated Workflow",
      healthcare: "Patient Referral Automated Routing",
      logistics: "Waybill Parsing Automated Pipeline",
      government: "License Approval Automated System",
      education: "Course Registration Automated Routing",
      general: "Workflow Automation Accelerator"
    },
    description: "Eliminate manual handoffs by integrating custom automated processes and intelligent workflows into your daily operations.",
    positioning: "Automate repetitive tasks to empower your teams to focus on high-value work.",
    price: "$1,600",
    duration: "3 Weeks",
    popularityRank: 4,
    deliveryComplexity: "low",
    badge: "Fast Deployment",
    audience: "Operations Teams",
    industryRelevance: "Logistics • Finance • Government",
    features: [
      "Repetitive task automation",
      "Data synchronization networks",
      "Custom trigger workflow setups",
      "Exception handling alerts"
    ],
    tags: ["Automation", "RPA", "Workflow optimization"],
    outcomes: ["Modernize Operations", "Accelerate Delivery"],
    department: "Operations & HR",
    businessImpact: "-30% Manual Task Time",
    implementationModel: "Specialist-Led Custom Sprint",
    timelineMilestones: [
      "Week 1: RPA Scoping & Triggers",
      "Week 2: Automation Pipelines Construction",
      "Week 3: Integration Checks & Handoff"
    ],
    relatedServices: [2, 202]
  },
  {
    id: 202,
    collection: "ops",
    standardName: "Delivery Governance Service",
    remixName: {
      retail: "Retail Fulfillment Governance Setup",
      banking: "Financial SLA Governance Setup",
      healthcare: "Clinical Compliance Tracking Setup",
      logistics: "Carrier SLA Performance Tracking",
      government: "Agency Service Compliance Stepper",
      education: "EdTech SLA Delivery Governance",
      general: "Delivery Governance Service"
    },
    description: "Establish transparent scorecards, automated compliance checkpoints, and clear delivery plans across engineering teams.",
    positioning: "Introduce enterprise-grade delivery governance and milestone tracking for total visibility.",
    price: "$2,200",
    duration: "5 Weeks",
    popularityRank: 3,
    deliveryComplexity: "medium",
    badge: "Enterprise Ready",
    audience: "Regulated Industries",
    industryRelevance: "Healthcare • Finance • Government",
    features: [
      "SLA compliance tracking dashboards",
      "Automated milestone logging",
      "Transparent performance scorecards",
      "Compliance tracking templates"
    ],
    tags: ["DevOps Governance", "SLA tracking", "Compliance auditing"],
    outcomes: ["Accelerate Delivery", "Improve Compliance"],
    department: "IT & Product Engineering",
    businessImpact: "100% Release Compliance Verification",
    implementationModel: "DevOps Platforms Engineering Sprint",
    timelineMilestones: [
      "Week 1: SLA Parameter Scoping",
      "Week 2: Compliance Pipeline Logging",
      "Week 3: Visual Analytics Setups",
      "Week 4-5: Compliance Auditing Handover"
    ],
    relatedServices: [2, 201]
  },

  // Growth & Commerce (growth)
  {
    id: 301,
    collection: "growth",
    standardName: "Omnichannel Customer Portal",
    remixName: {
      retail: "Retail Omnichannel Commerce Hub",
      banking: "Wealth Portfolio Digital Advisor",
      healthcare: "Unified Patient Intake & Care Portal",
      logistics: "Client Freight Tracking Portal",
      government: "Citizen Portal & Account Manager",
      education: "Student Portal & Academy Manager",
      general: "Omnichannel Customer Portal"
    },
    description: "Launch highly connected, mobile-optimized customer self-service suites that unify purchasing histories and portal interactions.",
    positioning: "Design scalable unified customer hubs that drive retention and repeat business.",
    price: "$3,500",
    duration: "8 Weeks",
    popularityRank: 7,
    deliveryComplexity: "high",
    badge: "Enterprise Ready",
    audience: "Enterprise & High Growth",
    industryRelevance: "Retail • Healthcare • Finance",
    features: [
      "Unified customer profile dashboards",
      "Self-service service modules",
      "Multilingual customer notifications",
      "Workflow sync connections"
    ],
    tags: ["Growth", "Customer Portal", "Omnichannel"],
    outcomes: ["Grow Revenue", "Improve Customer Experience"],
    department: "Customer Service",
    businessImpact: "+28% User Active Engagement",
    implementationModel: "Product Engineering Co-Design Sprint",
    timelineMilestones: [
      "Week 1-2: Integration Audits & UX Mockups",
      "Week 3-4: Portal Frontend Assembly",
      "Week 5-6: System API Integration Sprints",
      "Week 7-8: Testing, Security Scans & Launch"
    ],
    relatedServices: [1, 103]
  },
  {
    id: 302,
    collection: "growth",
    standardName: "Rapid Market Expansion Kit",
    remixName: {
      retail: "Global Digital Storefront Launch",
      banking: "Digital Branch Expansion Blueprint",
      healthcare: "Telehealth Operations Deployment",
      logistics: "Multi-Region Carrier Onboarding Kit",
      government: "Multi-Agency Digital Workspace Setup",
      education: "Global Virtual Academy Launch Kit",
      general: "Rapid Market Expansion Kit"
    },
    description: "Supercharge your geographic and segment reach through pre-scoped global transaction systems and content localization networks.",
    positioning: "Unlock new market channels quickly through standardized deployment architectures.",
    price: "$2,800",
    duration: "6 Weeks",
    popularityRank: 2,
    deliveryComplexity: "medium",
    badge: null,
    audience: "Mid-Market & Enterprise",
    industryRelevance: "E-commerce • Tech • Education",
    features: [
      "Global payment gateways",
      "Localized search visibility plans",
      "Dynamic multi-currency setups",
      "High-speed content delivery networks"
    ],
    tags: ["Growth", "Global Store", "Expansion"],
    outcomes: ["Grow Revenue", "Accelerate Delivery"],
    department: "Marketing & Sales",
    businessImpact: "+15% Direct Multi-Region Revenue",
    implementationModel: "Co-Delivery Setup Sprint",
    timelineMilestones: [
      "Week 1: Market Expansion Scoping",
      "Week 2: Localized Gateway Integration",
      "Week 3-4: Content Hub Construction",
      "Week 5-6: Load Testing, Validation & Launch"
    ],
    relatedServices: [104, 301]
  },

  // Governance & Compliance (gov)
  {
    id: 401,
    collection: "gov",
    standardName: "HIPAA & Data Compliance Shield",
    remixName: {
      retail: "Retail GDPR & Payment Compliance Kit",
      banking: "Financial Audit & Regulatory Shield",
      healthcare: "HIPAA Patient Privacy & Audit Shield",
      logistics: "Supply Chain Risk & Compliance System",
      government: "FedRAMP Security & Governance Shield",
      education: "FERPA Student Privacy Shield",
      general: "HIPAA & Data Compliance Shield"
    },
    description: "Install airtight data logging, secure encrypted document hubs, continuous scanning safeguards, and risk dashboards.",
    positioning: "Protect enterprise data and guarantee compliance across all digital operations.",
    price: "$4,000",
    duration: "8 Weeks",
    popularityRank: 1,
    deliveryComplexity: "high",
    badge: "Enterprise Ready",
    audience: "Enterprise & Regulated Firms",
    industryRelevance: "Healthcare • Finance • Government",
    features: [
      "Airtight system audit logging",
      "Secure encrypted document hubs",
      "Automated security scanning guardrails",
      "Third-party vendor risk dashboards"
    ],
    tags: ["Governance", "Compliance", "Security"],
    outcomes: ["Improve Compliance", "Modernize Operations"],
    department: "IT & Product Engineering",
    businessImpact: "100% HIPAA/GDPR Compliance Readiness",
    implementationModel: "Airtight Security & Platforms Sprint",
    timelineMilestones: [
      "Week 1-2: Security Gaps Scans",
      "Week 3-4: Secure Storage Vault Build",
      "Week 5-6: Encrypted Pipeline Rigging",
      "Week 7-8: Stress Auditing & Officer Handover"
    ],
    relatedServices: [202, 402]
  },
  {
    id: 402,
    collection: "gov",
    standardName: "Security Audit & Compliance Service",
    remixName: {
      retail: "E-commerce Fraud Prevention Audit",
      banking: "Securities Compliance & Security Audit",
      healthcare: "Clinical Device Cyber-Security Review",
      logistics: "Customs Operations Risk Audit",
      government: "Agency-Wide Access & Security Audit",
      education: "District-Wide Data Security Review",
      general: "Security Audit & Compliance Service"
    },
    description: "Conduct continuous vulnerability reviews, role-based platform security structures, disaster recovery plans, and cybersecurity scorecards.",
    positioning: "Ensure digital systems remain secure through robust auditing and identity controls.",
    price: "$2,700",
    duration: "4 Weeks",
    popularityRank: 5,
    deliveryComplexity: "medium",
    badge: "Recommended",
    audience: "Mid-Market & Enterprise",
    industryRelevance: "Finance • Government • Education",
    features: [
      "Digital core security vulnerability audits",
      "Role-based platform security structures",
      "Continuous compliance monitoring dashboard",
      "Airtight backup & recovery blueprints"
    ],
    tags: ["Security", "Identity Access", "Vulnerability"],
    outcomes: ["Improve Compliance", "Accelerate Delivery"],
    department: "IT & Product Engineering",
    businessImpact: "-50% Security Vulnerability Risk",
    implementationModel: "Platform Engineering Co-Design",
    timelineMilestones: [
      "Week 1: Vulnerability Scans & IAM Audit",
      "Week 2: Identity Controls Configuration",
      "Week 3: Continuous Monitoring Setup",
      "Week 4: Security Plan Handover"
    ],
    relatedServices: [202, 401]
  }
];

export const getRemixedName = (pkg: typeof initialServices[0], industry: string) => {
  if (industry === "all" || !pkg.remixName || !pkg.remixName[industry as keyof typeof pkg.remixName]) {
    return pkg.standardName;
  }
  return pkg.remixName[industry as keyof typeof pkg.remixName];
};
