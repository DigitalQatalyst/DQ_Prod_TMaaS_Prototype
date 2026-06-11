// Butler.AI Knowledge Base and Configuration
// STATIC PROTOTYPE - All responses are hardcoded, no API calls

export interface ServiceRecommendation {
  id: string;
  name: string;
  description: string;
  url: string;
  reason: string;
  tower: "dxp" | "dws" | "dia" | "sdo";
  type: "design" | "deploy-saas" | "deploy-onprem";
  price: string;
  duration: string;
  confidence: number;
}

export interface KnowledgeBaseEntry {
  id: string;
  question: string;
  answer: string;
  category: "platform" | "services" | "pricing" | "process";
  keywords: string[];
  links?: Array<{
    text: string;
    url: string;
  }>;
}

// KNOWLEDGE-RICH CONVERSATION PATTERNS
// Each response should: 1) Diagnose the problem, 2) Explain root cause, 3) Present modern solution, 4) Recommend TMaaS offering

// Educational context for each transformation goal
export const transformationContext = {
  "data-value": {
    context: "Data transformation is one of the highest-impact areas, but also where most organizations get stuck. The challenge isn't usually the analytics tools themselves. It's the underlying data architecture.\n\nMost legacy systems were built for transactions, not insights. That creates three core problems: siloed data across systems, inconsistent data quality, and no unified view of your business.",
    commonPatterns: ["Data silos across systems", "Inconsistent data quality", "No unified business view", "All of the above"]
  },
  "customer-experience": {
    context: "Customer experience transformation often stalls not because of poor design, but because of backend system disconnection. When your CRM, support platform, and transaction systems don't talk to each other, customers feel the friction at every touchpoint.\n\nThe issue isn't adding more channels, it's creating a unified experience layer that connects them all.",
    commonPatterns: ["Disconnected customer touchpoints", "Slow response times", "Inconsistent experience across channels", "All of the above"]
  },
  "internal-operations": {
    context: "Operational efficiency breaks down when core business systems operate in silos. Your ERP, HR, finance, and supply chain platforms each have their own data models and workflows, creating manual handoffs and reconciliation overhead.\n\nThe modern approach isn't replacing everything. It's building a digital core that orchestrates across your existing systems.",
    commonPatterns: ["Manual processes and handoffs", "System silos and data duplication", "Slow approval workflows", "All of the above"]
  },
  "devops": {
    context: "Delivery speed isn't just about tools, it's about the entire software supply chain. Most organizations have CI/CD pipelines, but they're still slow because security, compliance, and testing are bolted on at the end rather than built into the flow.\n\nThe shift to SecDevOps means security and compliance become automated guardrails, not manual gates.",
    commonPatterns: ["Security slows down delivery", "Manual compliance checks", "Inconsistent deployment processes", "All of the above"]
  }
};

// STATIC MOCKED RESPONSES - 16 recommendation paths (4 goals × 4 stages)
export const mockedRecommendations = {
  // PATH 1: Customer Experience
  "customer-experience-exploring": {
    message: "Based on what you've told me, I'd suggest the Digital Experience Strategy service. TMaaS packages this as a structured transformation roadmap, rather than starting from scratch, you get a proven, pre-scoped layout you can configure and launch. At the exploration stage, this gives you a clear plan to define your digital channel direction and make the case internally. Ready to take a look?",
    serviceName: "Digital Experience Strategy",
    serviceUrl: "/service/1"
  },
  "customer-experience-designing": {
    message: "Based on what you've told me, I'd suggest the Digital Experience Strategy service. You're already in discovery mode, this roadmap accelerates that by giving you a reference plan for a scalable, secure customer experience platform. It cuts execution planning time by over 50%. Ready to take a look?",
    serviceName: "Digital Experience Strategy",
    serviceUrl: "/service/1"
  },
  "customer-experience-implementing": {
    message: "Based on what you've told me, I'd suggest starting with the Digital Experience Strategy service. TMaaS's current services are at the planning stage, which is the right foundation before deployment. Specialist execution packages are coming soon. Getting your roadmap in place now means you're ready to move fast when they launch. Ready to take a look?",
    serviceName: "Digital Experience Strategy",
    serviceUrl: "/service/1"
  },
  "customer-experience-optimizing": {
    message: "Based on what you've told me, I'd suggest the Digital Experience Strategy service as your baseline review. TMaaS optimization packages for ongoing performance are coming soon, but starting with the strategy roadmap helps you identify where your current platform needs strengthening. Ready to take a look?",
    serviceName: "Digital Experience Strategy",
    serviceUrl: "/service/1"
  },
  
  // PATH 2: Internal Operations
  "internal-operations-exploring": {
    message: "Based on what you've told me, I'd suggest the DWS Strategy service. TMaaS packages this as a structured roadmap for designing your core business platforms, integrated, efficient, and secure. At the exploration stage, this gives you a clear plan to work from rather than defining everything from scratch. Ready to take a look?",
    serviceName: "DWS Strategy",
    serviceUrl: "/service/2"
  },
  "internal-operations-designing": {
    message: "Based on what you've told me, I'd suggest the DWS Strategy service. You're in planning mode, this roadmap gives you a reference plan for your Digital Core Platform, cutting execution setup time by 35%. Ready to take a look?",
    serviceName: "DWS Strategy",
    serviceUrl: "/service/2"
  },
  "internal-operations-implementing": {
    message: "Based on what you've told me, I'd suggest the DWS Strategy service as your starting point. TMaaS specialist execution packages are coming soon, but having the strategy roadmap in place now means your deployment has a solid, compliant foundation to build from. Ready to take a look?",
    serviceName: "DWS Strategy",
    serviceUrl: "/service/2"
  },
  "internal-operations-optimizing": {
    message: "Based on what you've told me, I'd suggest the DWS Strategy service as a baseline review of your current platform. TMaaS optimization packages are coming soon. Getting the strategy roadmap right first ensures your efficiency efforts are targeted and effective. Ready to take a look?",
    serviceName: "DWS Strategy",
    serviceUrl: "/service/2"
  },
  
  // PATH 3: Data Value
  "data-value-exploring": {
    message: "Based on what you've told me, I'd suggest the Digital Intelligence and Analytics Strategy service. TMaaS packages this as a structured roadmap for building your data platform, analytics capabilities, and AI roadmap. At the exploration stage, this gives you a clear picture of what to configure and in what order. Ready to take a look?",
    serviceName: "DI&A Strategy",
    serviceUrl: "/service/3"
  },
  "data-value-designing": {
    message: "Based on what you've told me, I'd suggest the Digital Intelligence and Analytics Strategy service. You're in planning mode, this roadmap gives you a reference plan for integrating your data systems and enabling actionable insights across the organization. Ready to take a look?",
    serviceName: "DI&A Strategy",
    serviceUrl: "/service/3"
  },
  "data-value-implementing": {
    message: "Based on what you've told me, I'd suggest the Digital Intelligence and Analytics Strategy service as your foundation. TMaaS specialist execution packages are coming soon, but a solid data roadmap now means your deployment is structured and scalable from day one. Ready to take a look?",
    serviceName: "DI&A Strategy",
    serviceUrl: "/service/3"
  },
  "data-value-optimizing": {
    message: "Based on what you've told me, I'd suggest the Digital Intelligence and Analytics Strategy service as a review of your current data architecture. TMaaS ongoing performance optimization is coming soon. This roadmap helps you identify the gaps between what you have and what you need. Ready to take a look?",
    serviceName: "DI&A Strategy",
    serviceUrl: "/service/3"
  },
  
  // PATH 4: DevOps
  "devops-exploring": {
    message: "Based on what you've told me, I'd suggest the SecDevOps Strategy service. TMaaS packages this as a structured roadmap for defining your security posture, development efficiency, and delivery roadmap. At the exploration stage, this gives you a clear baseline to build from. Ready to take a look?",
    serviceName: "SecDevOps Strategy",
    serviceUrl: "/service/4"
  },
  "devops-designing": {
    message: "Based on what you've told me, I'd suggest the SecDevOps Strategy service. You're in planning mode, this roadmap gives you a reference plan for integrating security and DevOps practices across your delivery lifecycle. Ready to take a look?",
    serviceName: "SecDevOps Strategy",
    serviceUrl: "/service/4"
  },
  "devops-implementing": {
    message: "Based on what you've told me, I'd suggest the SecDevOps Strategy service as your foundation. TMaaS specialist execution packages are coming soon, but having your DevOps roadmap in place ensures your deployment is secure and structured from the start. Ready to take a look?",
    serviceName: "SecDevOps Strategy",
    serviceUrl: "/service/4"
  },
  "devops-optimizing": {
    message: "Based on what you've told me, I'd suggest the SecDevOps Strategy service as a maturity review of your current delivery setup. TMaaS ongoing optimization is coming soon. This roadmap helps you identify where your pipeline needs strengthening. Ready to take a look?",
    serviceName: "SecDevOps Strategy",
    serviceUrl: "/service/4"
  }
};

// STATIC MOCKED FAQ RESPONSES - 4 FAQ paths
export const mockedFAQs = {
  "what-is-tmaas": {
    message: "TMaaS, Transformation as a Service, is a digital platform that helps organizations discover, explore, and activate digital transformation through structured services, AI-powered guidance, and collaborative workspaces. Instead of traditional consulting, TMaaS gives you proven transformation roadmaps you can adapt and activate.",
    options: ["Explore the services", "How does it work?", "Contact the team"]
  },
  "how-does-it-work": {
    message: "You describe your goals, Butler AI helps discover opportunities, and TMaaS recommends the right solution packages. Once you activate a package, a structured collaborative workspace is created for your team to drive results together.",
    options: ["Show me the services", "What does it cost?", "Get started"]
  },
  "what-does-it-cost": {
    message: "Pricing is scoped to your specific goals after a brief initial assessment. Speak to the TMaaS team to understand the right package for your organization.",
    options: ["Contact the team", "Explore the services"]
  },
  "how-to-get-started": {
    message: "Click Get Started to create your account, describe your goals to Butler AI, and explore the solution catalog. Butler will recommend a starting point based on your business reality.",
    options: ["Get Started", "Explore the services"]
  }
};

// STATIC ESCALATION RESPONSE - 1 escalation path
export const mockedEscalation = {
  message: "I wasn't able to find a clear answer for that. Would you like me to connect you with the TMaaS team?",
  contact: {
    name: "Anthony Mwangi",
    email: "support@digitalqatalyst.com",
    title: "Transformation Specialist"
  }
};

// TEAM HANDOFF SIMULATION
export const teamHandoff = {
  connecting: "Let me connect you with someone from our team...",
  checking: "Checking team availability...",
  available: "Great news! Anthony Mwangi is available right now.",
  introduction: "Hi there! I'm Anthony, a Transformation Specialist at TMaaS. Butler filled me in on your interest. How can I help you today?",
  
  // Simulated agent responses based on user input
  responses: {
    greeting: [
      "Thanks for reaching out! I'm here to help. What specific aspect of digital transformation are you looking to explore?",
      "Great to connect with you! What brings you to TMaaS today?",
      "Happy to help! What's your main challenge right now?"
    ],
    pricing: [
      "Our pricing is tailored to your specific needs. Design services typically start at $25k for a 4-6 week engagement. Would you like me to walk you through what's included?",
      "Great question! Investment depends on the scope and complexity. For a typical Digital Experience Strategy, we're looking at $25-30k. Can I learn more about your organization to give you a more accurate estimate?"
    ],
    timeline: [
      "Most of our Design services run 4-6 weeks, while Deploy services are 8-14 weeks depending on complexity. What timeline are you working with?",
      "Good question! Design phase is typically 4-6 weeks. If you're looking at implementation, that's another 8-12 weeks. Does that align with your expectations?"
    ],
    services: [
      "We offer services across four transformation towers: Digital Experience, Digital Workspace, Data & Intelligence, and SecDevOps. Which area is most relevant to your needs?",
      "TMaaS provides both Design services (strategic blueprints) and Deploy services (implementation). Based on what Butler shared, I think the Digital Experience Strategy might be a good fit. Want to dive deeper into that?"
    ],
    consultation: [
      "I'd be happy to schedule a consultation! Can you share your email and best time to connect? We typically do 30-minute discovery calls.",
      "Absolutely! Let me get you on the calendar. What's your email address and preferred time zone?"
    ],
    general: [
      "That's a great question. Let me make sure I understand correctly - are you asking about [topic]?",
      "I can definitely help with that. Could you give me a bit more context about your situation?",
      "Interesting! Tell me more about what you're trying to achieve."
    ]
  }
};

// Legacy data structures (kept for backward compatibility but not used in static prototype)
export const knowledgeBase: KnowledgeBaseEntry[] = [];
export const serviceRecommendations: ServiceRecommendation[] = [];
export const intentPatterns = { faq: [], routing: [], advisory: [] };
export const conversationTemplates = {
  greeting: {
    concierge: "",
    advisory: ""
  },
  qualification: {
    orgType: "",
    transformationStage: ""
  },
  escalation: ""
};
