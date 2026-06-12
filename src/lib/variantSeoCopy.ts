import { marketplaceServiceTypeLabels } from "@/data/marketplaceNavigation";
import { buildWhyItMattersContent } from "@/lib/whyItMattersCopy";
import type { ServiceProduct } from "@/types/serviceProduct";

const SOLUTION_DOMAIN: Record<string, string> = {
  "online web presence": "online web presence",
  "online social presence": "social presence and audience engagement",
  "mobile apps": "mobile apps and mobile services",
  "physical channels": "physical channels and frontline experience",
  "integrated experience": "integrated customer and employee experience",
  "crm solutions": "CRM and relationship management",
  "marketing solutions": "marketing operations and campaigns",
  "smart sales & quotation": "sales and quotation",
  "customer support & success": "customer support and success",
  "digital workplace": "digital workplace and collaboration",
  "business process automation": "business process automation",
  "specialised operations": "specialised operations",
  "enterprise operations": "enterprise operations",
  "governance, risk & compliance": "governance, risk and compliance",
  "enterprise resource planning": "ERP and core enterprise operations",
  "workforce management": "workforce management",
  "enterprise data platform": "enterprise data platform",
  "business intelligence & analytics": "business intelligence and analytics",
  "enterprise ai & automation": "enterprise AI and automation",
  "technology governance": "technology governance",
  "devsecops automation": "DevSecOps automation",
  "it operations & support": "IT operations and employee support services",
  "farming operations": "farming operations",
  "manufacturing operations": "manufacturing operations",
  "infrastructure operations": "infrastructure operations",
  "government operations": "government operations and citizen services",
  "hospitality operations": "hospitality operations and guest experience",
  "retail operations": "retail operations and omnichannel commerce",
  "service operations": "service operations",
  "logistics operations": "logistics and supply chain operations",
  "wellness operations": "wellness operations and client experience",
};

function stripEmDash(text: string): string {
  return text.replace(/\s*—\s*/g, ", ").replace(/\s+/g, " ").trim();
}

export function resolveSolutionKey(standardName: string): string {
  const base = standardName.replace(" (High-Impact)", "");
  const match = base.match(
    /^(.+?)\s+-\s+(?:Assess|Design|AI Design|Deploy|AI Deploy|Managed|Implementation|AI Implementation|Managed Service|Transformation Bundle)$/
  );
  return (match?.[1] ?? base).trim().toLowerCase();
}

export function getServiceSolutionName(standardName: string): string {
  const key = resolveSolutionKey(standardName);
  return key.charAt(0).toUpperCase() + key.slice(1);
}

export function getSolutionDomainPhrase(standardName: string): string {
  const key = resolveSolutionKey(standardName);
  return SOLUTION_DOMAIN[key] ?? key;
}

function domainPerformClause(domain: string): string {
  const needsPlural =
    domain.includes(" and ") ||
    /\b(apps|services|operations|channels|campaigns)\b/i.test(domain);
  return needsPlural ? `${domain} perform today` : `${domain} performs today`;
}

function restateProblemParagraph(paragraph: string): string {
  const sentences = paragraph.split(/(?<=\.)\s+/).filter(Boolean);
  if (sentences.length <= 1) return paragraph;
  return sentences.slice(1).join(" ");
}

const HERO_TYPE_LEAD: Record<string, string> = {
  advisory:
    "reviews your current state, surfaces priority gaps, and leaves you with evidence-led recommendations stakeholders can act on.",
  design:
    "turns your goals into user-centred designs and implementation-ready specifications your delivery teams can build against.",
  ai_design:
    "validates AI use cases, defines responsible workflows, and produces deployment-ready specifications before build investment.",
  deploy:
    "delivers configured, tested capabilities with structured integration, quality assurance, and handover to your operations team.",
  ai_deploy:
    "deploys governed AI capabilities into production with monitoring, safety controls, and operational handover.",
  manage:
    "runs SLA-backed operations with continuous monitoring, optimisation, and lifecycle governance.",
};

export function buildVariantHeroDescription(service: ServiceProduct): string {
  const solution = getServiceSolutionName(service.standardName);
  const stageLabel =
    marketplaceServiceTypeLabels[service.serviceType] ?? service.badge;
  const typeLead = HERO_TYPE_LEAD[service.serviceType] ?? HERO_TYPE_LEAD.advisory;
  const why = buildWhyItMattersContent(service);
  const scope = restateProblemParagraph(why.problemParagraph);

  const opener = `The ${solution} ${stageLabel} service`;
  const parts = [opener, typeLead];
  if (scope && !scope.startsWith(opener)) {
    parts.push(scope);
  }
  return stripEmDash(parts.join(" "));
}

const POSITIONING_BY_TYPE: Record<string, (domain: string) => string> = {
  advisory: (domain) =>
    `See how ${domainPerformClause(domain)}, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.`,
  design: (domain) =>
    `Turn ${domain} goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.`,
  ai_design: (domain) =>
    `Define the AI use cases that matter for ${domain}, with data requirements, guardrails, and specifications ready to build.`,
  deploy: (domain) =>
    `Implement agreed ${domain} changes through managed configuration, integration, testing, and controlled launch support.`,
  ai_deploy: (domain) =>
    `Put AI-enabled ${domain} workflows into production with security, governance, and adoption built in from day one.`,
  manage: (domain) =>
    `Run and improve ${domain} with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.`,
};

export function buildVariantPositioning(service: ServiceProduct): string {
  const domain = getSolutionDomainPhrase(service.standardName);
  const builder = POSITIONING_BY_TYPE[service.serviceType] ?? POSITIONING_BY_TYPE.advisory;
  return stripEmDash(builder(domain));
}
