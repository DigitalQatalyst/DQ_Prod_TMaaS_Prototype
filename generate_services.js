const fs = require('fs');

const servicesList = [
  { name: "Digital Strategy Blueprint", cap: "strategy", type: "advisory", goals: ["grow-business", "modernise-technology"], px: "$2,500" },
  { name: "AI Strategy & Readiness", cap: "ai", type: "advisory", goals: ["launch-ai"], px: "$1,800" },
  { name: "Marketing Strategy Transformation", cap: "marketing", type: "advisory", goals: ["grow-business", "improve-cx"], px: "$2,200" },
  { name: "Data & Analytics Strategy", cap: "data", type: "advisory", goals: ["modernise-technology", "improve-operations"], px: "$2,400" },
  { name: "Customer Experience (CX) Strategy", cap: "experience", type: "advisory", goals: ["improve-cx"], px: "$2,000" },
  { name: "Innovation & Emerging Technology Strategy", cap: "strategy", type: "advisory", goals: ["modernise-technology", "grow-business"], px: "$2,600" },
  { name: "Digital Operating Model Design", cap: "operations", type: "design", goals: ["improve-operations"], px: "$2,800" },
  { name: "Product & Platform Strategy", cap: "strategy", type: "advisory", goals: ["grow-business", "modernise-technology"], px: "$2,500" },
  { name: "Omnichannel Commerce Strategy", cap: "marketing", type: "advisory", goals: ["grow-business", "improve-cx"], px: "$2,100" },
  { name: "Enterprise Architecture Strategy", cap: "engineering", type: "advisory", goals: ["modernise-technology", "strengthen-governance"], px: "$2,700" },
  { name: "Website Experience Modernisation", cap: "experience", type: "design", goals: ["improve-cx", "grow-business"], px: "$1,800" },
  { name: "Customer Portal Development", cap: "engineering", type: "build", goals: ["improve-cx", "automate-workflows"], px: "$3,200" },
  { name: "Mobile App Experience Design", cap: "experience", type: "design", goals: ["improve-cx", "grow-business"], px: "$2,200" },
  { name: "Employee Experience Platform", cap: "experience", type: "build", goals: ["improve-operations"], px: "$2,500" },
  { name: "Self-Service Portal Setup", cap: "engineering", type: "build", goals: ["automate-workflows", "improve-cx"], px: "$2,000" },
  { name: "Omnichannel Experience Design", cap: "experience", type: "design", goals: ["improve-cx"], px: "$2,400" },
  { name: "Data Maturity Assessment", cap: "data", type: "advisory", goals: ["modernise-technology", "strengthen-governance"], px: "$1,500" },
  { name: "Business Intelligence Dashboard Setup", cap: "data", type: "build", goals: ["improve-operations", "grow-business"], px: "$1,900" },
  { name: "Executive Reporting Automation", cap: "data", type: "build", goals: ["automate-workflows", "improve-operations"], px: "$1,800" },
  { name: "Data Warehouse Modernisation", cap: "data", type: "build", goals: ["modernise-technology"], px: "$3,500" },
  { name: "Data Governance Framework", cap: "data", type: "design", goals: ["strengthen-governance"], px: "$2,100" },
  { name: "Master Data Management", cap: "data", type: "build", goals: ["strengthen-governance", "improve-operations"], px: "$2,800" },
  { name: "Real-Time Analytics Enablement", cap: "data", type: "build", goals: ["modernise-technology", "improve-operations"], px: "$2,600" },
  { name: "Predictive Analytics Setup", cap: "ai", type: "build", goals: ["launch-ai", "grow-business"], px: "$2,700" },
  { name: "Customer Behaviour Analytics", cap: "marketing", type: "build", goals: ["improve-cx", "grow-business"], px: "$1,900" },
  { name: "Operational Intelligence Platform", cap: "operations", type: "build", goals: ["improve-operations", "automate-workflows"], px: "$3,000" },
  { name: "Managed Digital Operations", cap: "operations", type: "manage", goals: ["improve-operations"], px: "$2,000" },
  { name: "Managed Cloud Services", cap: "engineering", type: "manage", goals: ["modernise-technology", "improve-operations"], px: "$2,200" },
  { name: "Managed AI Operations", cap: "ai", type: "manage", goals: ["launch-ai", "improve-operations"], px: "$2,500" },
  { name: "Managed DevOps Services", cap: "engineering", type: "manage", goals: ["automate-workflows", "modernise-technology"], px: "$2,100" },
  { name: "Managed Analytics Services", cap: "data", type: "manage", goals: ["improve-operations", "grow-business"], px: "$1,900" },
  { name: "Managed Security Monitoring", cap: "security", type: "manage", goals: ["strengthen-governance"], px: "$2,300" },
  { name: "Managed Application Support", cap: "engineering", type: "manage", goals: ["modernise-technology"], px: "$1,700" },
];

const industries = ["banking", "government", "healthcare", "retail", "education", "manufacturing", "logistics"];

const initialServices = servicesList.map((s, idx) => {
  const id = idx + 1;
  const remixName = {};
  industries.forEach(ind => {
    remixName[ind] = ind.charAt(0).toUpperCase() + ind.slice(1) + " " + s.name;
  });
  remixName["general"] = s.name;
  
  return {
    id: id,
    collection: s.cap,
    serviceType: s.type,
    standardName: s.name,
    remixName: remixName,
    description: "Expert " + s.name.toLowerCase() + " tailored to your business needs to drive growth and efficiency.",
    positioning: "Accelerate your transformation with our specialized " + s.type + " services.",
    price: s.px,
    duration: "4 Weeks",
    popularityRank: 100 - idx,
    deliveryComplexity: "medium",
    badge: idx % 5 === 0 ? "Popular" : null,
    audience: "Enterprise",
    industryRelevance: "All Industries",
    features: [
      "Initial assessment and scoping",
      "Customized implementation roadmap",
      "Executive alignment workshops",
      "Final delivery and handover"
    ],
    tags: [s.cap, s.type, "transformation"],
    outcomes: s.goals,
    department: "IT & Strategy",
    businessImpact: "Significant operational improvements",
    implementationModel: s.type === "advisory" ? "Consulting Sprint" : "Engineering Sprint",
    timelineMilestones: [
      "Week 1: Discovery",
      "Week 2: Design & Planning",
      "Week 3: Execution",
      "Week 4: Review & Handover"
    ],
    relatedServices: []
  };
});

const fileContent = `export const initialServices = ${JSON.stringify(initialServices, null, 2)};

export const getRemixedName = (pkg: typeof initialServices[0], industry: string) => {
  if (industry === "all" || !pkg.remixName || !(industry in pkg.remixName)) {
    return pkg.standardName;
  }
  return pkg.remixName[industry as keyof typeof pkg.remixName];
};

type ServiceCollection = (typeof initialServices)[number]["collection"];

/** Top services per collection (homepage featured + marketplace shelf) */
export const getFeaturedByCollection = (
  collection: ServiceCollection,
  limit = 3
) =>
  initialServices
    .filter((s) => s.collection === collection)
    .sort((a, b) => b.popularityRank - a.popularityRank)
    .slice(0, limit);

/** Best sellers for marketplace — all categories or one collection */
export const getBestSellers = (
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
  \`$\${amount.toLocaleString("en-US")}\`;
`;

fs.writeFileSync('src/data/services.ts', fileContent);
console.log('Successfully generated src/data/services.ts');
