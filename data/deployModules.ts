export type DeployModule = {
  name: string;
  features: string[];
};

export const deployModulesData: Record<string, DeployModule[]> = {
  "Online Web Presence (High-Impact) - Implementation": [
    {
      name: "Website CMS",
      features: [
        "Page management",
        "Component-based content editing",
        "Multi-site management",
        "Media library",
        "Content approval workflows",
      ],
    },
    {
      name: "Digital Experience Portal",
      features: [
        "Personalised landing pages",
        "Customer dashboards",
        "Portal navigation management",
        "Role-based access",
        "Multi-device responsiveness",
      ],
    },
    {
      name: "Content Publishing Engine",
      features: [
        "Scheduled publishing",
        "Draft/version management",
        "Content localisation",
        "Campaign publishing",
        "Dynamic content rendering",
      ],
    },
    {
      name: "SEO & Performance Suite",
      features: [
        "SEO optimisation",
        "Metadata management",
        "Performance monitoring",
        "Accessibility compliance",
        "Search indexing",
      ],
    },
    {
      name: "Customer Interaction Layer",
      features: [
        "Live chat integration",
        "Contact forms",
        "CTA management",
        "Customer feedback capture",
        "Session tracking",
      ],
    },
    {
      name: "Forms & Conversion Engine",
      features: [
        "Digital forms",
        "Lead capture",
        "Form validation",
        "Workflow routing",
        "Conversion analytics",
      ],
    },
  ],
  "Online Social Presence (High-Impact) - Implementation": [
    {
      name: "Social Publishing Hub",
      features: [
        "Multi-channel publishing",
        "Content scheduling",
        "Approval workflows",
        "Asset management",
        "Hashtag management",
      ],
    },
    {
      name: "Community Engagement Console",
      features: [
        "Comment management",
        "Direct message management",
        "Customer response workflows",
        "Escalation routing",
        "Moderation controls",
      ],
    },
    {
      name: "Campaign Management",
      features: [
        "Campaign planning",
        "Audience targeting",
        "Budget tracking",
        "Campaign automation",
        "Engagement monitoring",
      ],
    },
    {
      name: "Social Listening Dashboard",
      features: [
        "Brand monitoring",
        "Keyword tracking",
        "Sentiment analysis",
        "Competitor monitoring",
        "Trend tracking",
      ],
    },
    {
      name: "Engagement Analytics",
      features: [
        "Engagement reporting",
        "Audience insights",
        "Reach analytics",
        "Conversion tracking",
        "Campaign performance dashboards",
      ],
    },
  ],
  "Mobile Apps (High-Impact) - Implementation": [
    {
      name: "Mobile Application Platform",
      features: [
        "Native/hybrid app deployment",
        "App navigation",
        "Offline mode support",
        "Multi-platform support",
        "App configuration management",
      ],
    },
    {
      name: "Push Notification Engine",
      features: [
        "Push messaging",
        "Campaign notifications",
        "Behaviour-triggered notifications",
        "Scheduling",
        "Notification analytics",
      ],
    },
    {
      name: "Mobile Identity Layer",
      features: [
        "Mobile authentication",
        "Biometric login",
        "MFA support",
        "Session management",
        "Device registration",
      ],
    },
    {
      name: "Customer Mobile Services",
      features: [
        "Profile management",
        "Mobile transactions",
        "In-app messaging",
        "Support integration",
        "Self-service actions",
      ],
    },
    {
      name: "Mobile Analytics",
      features: [
        "App usage analytics",
        "Crash monitoring",
        "Customer journey tracking",
        "Performance analytics",
        "Behaviour insights",
      ],
    },
  ],
  "Physical Channels (High-Impact) - Implementation": [
    {
      name: "Channel Orchestration",
      features: [
        "Cross-channel workflows",
        "Journey continuity",
        "Interaction routing",
        "Engagement triggers",
        "Channel prioritisation",
      ],
    },
    {
      name: "Unified Customer Journey",
      features: [
        "Customer journey mapping",
        "Personalised interactions",
        "Touchpoint tracking",
        "Journey automation",
        "Behaviour monitoring",
      ],
    },
    {
      name: "Engagement Routing",
      features: [
        "Smart routing",
        "Agent assignment",
        "Escalation management",
        "SLA workflows",
        "Queue management",
      ],
    },
    {
      name: "Experience Synchronisation",
      features: [
        "Customer profile synchronisation",
        "Real-time updates",
        "Cross-channel continuity",
        "Session persistence",
        "Unified notifications",
      ],
    },
    {
      name: "Customer Interaction Analytics",
      features: [
        "Journey analytics",
        "Channel performance reporting",
        "Customer behaviour analytics",
        "Funnel analysis",
        "Engagement dashboards",
      ],
    },
  ],
  "Experience Solutions (High-Impact) - Implementation": [
    {
      name: "Enterprise CMS",
      features: [
        "Structured content management",
        "Page composition",
        "Version control",
        "Workflow approvals",
        "Multi-language support",
      ],
    },
    {
      name: "Digital Asset Management",
      features: [
        "Media repository",
        "Asset tagging",
        "Asset lifecycle management",
        "File versioning",
        "Access permissions",
      ],
    },
    {
      name: "Content Workflow Engine",
      features: [
        "Editorial workflows",
        "Content approvals",
        "Publishing automation",
        "Review cycles",
        "Workflow notifications",
      ],
    },
    {
      name: "Experience Personalisation",
      features: [
        "Audience segmentation",
        "Dynamic content",
        "Personalised recommendations",
        "Behaviour targeting",
        "Experience optimisation",
      ],
    },
    {
      name: "Content Analytics",
      features: [
        "Content engagement analytics",
        "Traffic reporting",
        "Conversion analytics",
        "Audience insights",
        "Performance dashboards",
      ],
    },
  ],
  "CRM Solutions (High-Impact) - Implementation": [
    {
      name: "Customer Management",
      features: [
        "Customer profiles",
        "Contact management",
        "Account hierarchy",
        "Relationship mapping",
        "Interaction history",
      ],
    },
    {
      name: "Sales Pipeline Management",
      features: [
        "Opportunity tracking",
        "Sales stages",
        "Forecast management",
        "Pipeline dashboards",
        "Revenue tracking",
      ],
    },
    {
      name: "Lead Management",
      features: [
        "Lead capture",
        "Lead qualification",
        "Lead routing",
        "Scoring models",
        "Campaign attribution",
      ],
    },
    {
      name: "Customer Service Console",
      features: [
        "Case management",
        "SLA management",
        "Ticket routing",
        "Knowledge integration",
        "Service workflows",
      ],
    },
    {
      name: "CRM Analytics",
      features: [
        "Sales dashboards",
        "Customer insights",
        "Forecast reporting",
        "Pipeline analytics",
        "Activity monitoring",
      ],
    },
  ],
  "Marketing Solutions (High-Impact) - Implementation": [
    {
      name: "Campaign Automation",
      features: [
        "Campaign workflows",
        "Multi-step campaigns",
        "Trigger automation",
        "Audience targeting",
        "Campaign approvals",
      ],
    },
    {
      name: "Customer Journey Automation",
      features: [
        "Journey orchestration",
        "Behaviour-based workflows",
        "Event triggers",
        "Personalised engagement",
        "Lifecycle management",
      ],
    },
    {
      name: "Lead Nurturing Engine",
      features: [
        "Lead scoring",
        "Drip campaigns",
        "Segmentation",
        "Qualification workflows",
        "Conversion tracking",
      ],
    },
    {
      name: "Email Marketing Suite",
      features: [
        "Email builder",
        "Email templates",
        "A/B testing",
        "Delivery management",
        "Open/click tracking",
      ],
    },
    {
      name: "Marketing Analytics",
      features: [
        "Campaign performance",
        "ROI dashboards",
        "Audience insights",
        "Attribution analytics",
        "Funnel analytics",
      ],
    },
  ],
  "Smart Sales & Quotation (High-Impact) - Implementation": [
    {
      name: "Product Configuration",
      features: [
        "Product catalogues",
        "Rules-based configuration",
        "Bundle management",
        "Guided selling",
        "Compatibility validation",
      ],
    },
    {
      name: "Pricing Engine",
      features: [
        "Dynamic pricing",
        "Discount management",
        "Pricing rules",
        "Contract pricing",
        "Margin controls",
      ],
    },
    {
      name: "Quote Management",
      features: [
        "Quote generation",
        "Proposal templates",
        "Version management",
        "Customer approvals",
        "Digital signatures",
      ],
    },
    {
      name: "Approval Workflows",
      features: [
        "Pricing approvals",
        "Escalation workflows",
        "Compliance checks",
        "Audit tracking",
        "Approval notifications",
      ],
    },
    {
      name: "CPQ Analytics",
      features: [
        "Quote analytics",
        "Sales performance reporting",
        "Pricing insights",
        "Approval metrics",
        "Revenue dashboards",
      ],
    },
  ],
  "Customer Support & Success (High-Impact) - Implementation": [
    {
      name: "Service Desk",
      features: [
        "Service request handling",
        "Queue management",
        "SLA tracking",
        "Escalation workflows",
        "Agent workspace",
      ],
    },
    {
      name: "Ticket Management",
      features: [
        "Ticket lifecycle management",
        "Categorisation",
        "Priority routing",
        "Assignment workflows",
        "Resolution tracking",
      ],
    },
    {
      name: "Customer Communication Hub",
      features: [
        "Omnichannel support",
        "Live chat",
        "Email integration",
        "Messaging integration",
        "Notification management",
      ],
    },
    {
      name: "Knowledge Base",
      features: [
        "Knowledge articles",
        "Self-service portal",
        "FAQ management",
        "Search capability",
        "Content approvals",
      ],
    },
    {
      name: "Support Analytics",
      features: [
        "Resolution metrics",
        "SLA reporting",
        "Agent performance",
        "Customer satisfaction tracking",
        "Support dashboards",
      ],
    },
  ],
  "Digital Workplace (High-Impact) - Implementation": [
    {
      name: "Collaboration Workspace",
      features: [
        "Team workspaces",
        "File collaboration",
        "Shared calendars",
        "Meeting integration",
        "Workspace permissions",
      ],
    },
    {
      name: "Employee Communication Hub",
      features: [
        "Announcements",
        "Internal messaging",
        "Employee engagement feeds",
        "Notifications",
        "Broadcast communications",
      ],
    },
    {
      name: "Knowledge Workspace",
      features: [
        "Knowledge repositories",
        "Document management",
        "Search capabilities",
        "Knowledge sharing",
        "Content governance",
      ],
    },
    {
      name: "Task & Activity Management",
      features: [
        "Task assignment",
        "Workflow tracking",
        "Activity monitoring",
        "Team coordination",
        "Productivity tracking",
      ],
    },
    {
      name: "Workplace Analytics",
      features: [
        "Usage reporting",
        "Collaboration analytics",
        "Engagement insights",
        "Productivity dashboards",
        "Adoption monitoring",
      ],
    },
  ],
  "Enterprise Resource Planning (High-Impact) - Implementation": [
    {
      name: "Finance Management",
      features: [
        "General ledger",
        "Accounts payable",
        "Accounts receivable",
        "Budget management",
        "Financial reporting",
      ],
    },
    {
      name: "Procurement Management",
      features: [
        "Purchase requests",
        "Vendor management",
        "Procurement approvals",
        "Contract tracking",
        "Supplier workflows",
      ],
    },
    {
      name: "Inventory Management",
      features: [
        "Inventory tracking",
        "Warehouse management",
        "Stock monitoring",
        "Inventory forecasting",
        "Reorder automation",
      ],
    },
    {
      name: "Operations Management",
      features: [
        "Operational workflows",
        "Resource planning",
        "Process management",
        "Operational reporting",
        "Workflow approvals",
      ],
    },
    {
      name: "ERP Analytics",
      features: [
        "Executive dashboards",
        "Operational reporting",
        "Financial analytics",
        "KPI monitoring",
        "Forecast analytics",
      ],
    },
  ],
  "Workforce Management (High-Impact) - Implementation": [
    {
      name: "Workforce Scheduling",
      features: [
        "Shift scheduling",
        "Workforce planning",
        "Availability management",
        "Scheduling optimisation",
        "Shift notifications",
      ],
    },
    {
      name: "Attendance Management",
      features: [
        "Time tracking",
        "Leave management",
        "Attendance monitoring",
        "Overtime tracking",
        "Compliance reporting",
      ],
    },
    {
      name: "Workforce Operations",
      features: [
        "Workforce coordination",
        "Task allocation",
        "Operational workflows",
        "Workforce communication",
        "Activity monitoring",
      ],
    },
    {
      name: "Employee Self-Service",
      features: [
        "Leave requests",
        "Shift swaps",
        "Personal profile management",
        "Notifications",
        "Self-service workflows",
      ],
    },
    {
      name: "Workforce Analytics",
      features: [
        "Workforce dashboards",
        "Productivity analytics",
        "Attendance insights",
        "Labour forecasting",
        "Compliance analytics",
      ],
    },
  ],
  "Enterprise Data Platform (High-Impact) - Implementation": [
    {
      name: "Data Integration Platform",
      features: [
        "ETL/ELT pipelines",
        "API integrations",
        "Data synchronisation",
        "Batch processing",
        "Real-time streaming",
      ],
    },
    {
      name: "Data Governance Hub",
      features: [
        "Data catalogues",
        "Data lineage",
        "Access controls",
        "Data quality monitoring",
        "Governance workflows",
      ],
    },
    {
      name: "Data Warehouse",
      features: [
        "Centralised storage",
        "Data modelling",
        "Query optimisation",
        "Historical data management",
        "Data partitioning",
      ],
    },
    {
      name: "Master Data Management",
      features: [
        "Golden record management",
        "Data standardisation",
        "Duplicate management",
        "Entity resolution",
        "Reference data management",
      ],
    },
    {
      name: "Data Analytics Workspace",
      features: [
        "Query workspaces",
        "Data exploration",
        "Visual analytics",
        "Dashboard publishing",
        "Collaborative analytics",
      ],
    },
  ],
  "Business Intelligence & Analytics (High-Impact) - Implementation": [
    {
      name: "BI Dashboarding",
      features: [
        "Interactive dashboards",
        "KPI monitoring",
        "Drill-down analytics",
        "Real-time reporting",
        "Dashboard sharing",
      ],
    },
    {
      name: "Reporting Workspace",
      features: [
        "Report generation",
        "Scheduled reporting",
        "Export capabilities",
        "Ad hoc reporting",
        "Report approvals",
      ],
    },
    {
      name: "Data Visualisation Suite",
      features: [
        "Chart libraries",
        "Visual storytelling",
        "Data exploration",
        "Interactive filtering",
        "Custom visualisations",
      ],
    },
    {
      name: "Executive Intelligence Hub",
      features: [
        "Executive scorecards",
        "Strategic insights",
        "Trend analysis",
        "Performance forecasting",
        "Decision support",
      ],
    },
    {
      name: "Analytics Governance",
      features: [
        "Access management",
        "Data governance policies",
        "Audit logging",
        "Analytics approvals",
        "Compliance monitoring",
      ],
    },
  ],
  "Enterprise AI & Automation (High-Impact) - Implementation": [
    {
      name: "AI Assistant Framework",
      features: [
        "Conversational AI",
        "Copilot experiences",
        "Context-aware assistance",
        "Multilingual support",
        "AI interaction history",
      ],
    },
    {
      name: "AI Agent Platform",
      features: [
        "Autonomous workflows",
        "Task orchestration",
        "Agent configuration",
        "Human-in-the-loop controls",
        "Agent monitoring",
      ],
    },
    {
      name: "Enterprise Knowledge AI",
      features: [
        "Enterprise search",
        "Knowledge retrieval",
        "Semantic indexing",
        "Document intelligence",
        "Context grounding",
      ],
    },
    {
      name: "AI Automation Engine",
      features: [
        "Workflow automation",
        "AI decision routing",
        "Trigger-based actions",
        "Process augmentation",
        "Automation monitoring",
      ],
    },
    {
      name: "AI Governance & Monitoring",
      features: [
        "AI audit trails",
        "Model monitoring",
        "Prompt governance",
        "Compliance controls",
        "Usage analytics",
      ],
    },
  ],
  "Technology Governance (High-Impact) - Implementation": [
    {
      name: "IT Governance Framework",
      features: [
        "Governance structures",
        "Control frameworks",
        "Operating models",
        "Approval workflows",
        "Policy mapping",
      ],
    },
    {
      name: "Policy Management",
      features: [
        "Policy repositories",
        "Version management",
        "Policy approvals",
        "Policy attestations",
        "Policy lifecycle tracking",
      ],
    },
    {
      name: "Risk & Compliance Controls",
      features: [
        "Risk registers",
        "Compliance workflows",
        "Control testing",
        "Exception management",
        "Compliance tracking",
      ],
    },
    {
      name: "Technology Audit Management",
      features: [
        "Audit planning",
        "Evidence collection",
        "Audit workflows",
        "Findings management",
        "Remediation tracking",
      ],
    },
    {
      name: "Governance Analytics",
      features: [
        "Compliance dashboards",
        "Risk analytics",
        "Audit reporting",
        "Governance KPIs",
        "Executive insights",
      ],
    },
  ],
  "DevSecOps Automation (High-Impact) - Implementation": [
    {
      name: "CI/CD Pipeline Platform",
      features: [
        "Build pipelines",
        "Release automation",
        "Deployment orchestration",
        "Version control integration",
        "Pipeline monitoring",
      ],
    },
    {
      name: "Infrastructure Automation",
      features: [
        "Infrastructure-as-code",
        "Environment provisioning",
        "Configuration management",
        "Cloud orchestration",
        "Automation templates",
      ],
    },
    {
      name: "Security Operations",
      features: [
        "Security scanning",
        "Vulnerability management",
        "Secrets management",
        "Compliance validation",
        "Threat monitoring",
      ],
    },
    {
      name: "Environment Management",
      features: [
        "Environment provisioning",
        "Sandbox management",
        "Release environments",
        "Environment monitoring",
        "Resource optimisation",
      ],
    },
    {
      name: "DevSecOps Analytics",
      features: [
        "Deployment metrics",
        "Release reporting",
        "Security analytics",
        "Operational dashboards",
        "Delivery insights",
      ],
    },
  ],
  "IT Operations & Support (High-Impact) - Implementation": [
    {
      name: "IT Service Management",
      features: [
        "Service requests",
        "Change management",
        "Problem management",
        "SLA workflows",
        "Service catalogues",
      ],
    },
    {
      name: "Infrastructure Monitoring",
      features: [
        "Infrastructure observability",
        "Performance monitoring",
        "Alerting",
        "Log management",
        "Availability tracking",
      ],
    },
    {
      name: "Incident Management",
      features: [
        "Incident lifecycle management",
        "Escalation workflows",
        "Root cause analysis",
        "Resolution tracking",
        "Major incident management",
      ],
    },
    {
      name: "Asset & Configuration Management",
      features: [
        "CMDB management",
        "Asset tracking",
        "Configuration management",
        "Dependency mapping",
        "Lifecycle management",
      ],
    },
    {
      name: "Operations Analytics",
      features: [
        "Operational dashboards",
        "Incident analytics",
        "Service performance metrics",
        "Infrastructure insights",
        "SLA reporting",
      ],
    },
  ],
};
