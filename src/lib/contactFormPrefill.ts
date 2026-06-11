import type { ServiceProduct } from "@/types/serviceProduct";

export const CONTACT_INTEREST_OPTIONS = [
  "Digital Platform & Architecture",
  "Transformation Strategy & Advisory",
  "Training & Capability",
  "General Enquiry",
] as const;

export const CONTACT_NEED_OPTIONS = [
  "Advisory & Strategy",
  "Product Demo or Walkthrough",
  "Diagnostic Assessment",
  "Implementation Support",
  "Transformation Programme",
  "General Enquiry",
] as const;

export type ContactInterest = (typeof CONTACT_INTEREST_OPTIONS)[number];
export type ContactNeed = (typeof CONTACT_NEED_OPTIONS)[number];
export type ContactEnquiryIntent = "quote" | "consultation";

export type ServiceContactParams = {
  service: string;
  type?: string;
  collection?: string;
  intent?: string;
};

export function parseServiceContactParams(
  searchParams: URLSearchParams
): ServiceContactParams | null {
  const service = searchParams.get("service")?.trim();
  if (!service) return null;

  return {
    service,
    type: searchParams.get("type")?.trim() || undefined,
    collection: searchParams.get("collection")?.trim() || undefined,
    intent: searchParams.get("intent")?.trim() || undefined,
  };
}

export function mapServiceToInterest(
  collection?: string,
  serviceType?: string
): ContactInterest {
  if (serviceType === "advisory" || collection === "strategy") {
    return "Transformation Strategy & Advisory";
  }
  return "Digital Platform & Architecture";
}

export function mapServiceToNeed(
  serviceType?: string,
  intent?: string
): ContactNeed {
  if (intent === "consultation") {
    return "Advisory & Strategy";
  }

  switch (serviceType) {
    case "advisory":
      return "Advisory & Strategy";
    case "design":
    case "ai_design":
      return "Diagnostic Assessment";
    case "deploy":
    case "ai_deploy":
      return "Implementation Support";
    case "bundle":
      return "Transformation Programme";
    default:
      return "General Enquiry";
  }
}

export function buildServiceEnquiryMessage(
  serviceName: string,
  intent?: string
): string {
  if (intent === "consultation") {
    return `I would like to talk to the team about: ${serviceName}`;
  }
  return `I would like to request a quote for: ${serviceName}`;
}

export function buildContactPath(
  service: ServiceProduct,
  intent: ContactEnquiryIntent
): string {
  const params = new URLSearchParams({
    service: service.standardName,
    type: service.serviceType,
    collection: service.collection,
    intent,
  });
  return `/contact?${params.toString()}`;
}

export function getServiceEnquiryFormDefaults(params: ServiceContactParams) {
  return {
    interest: mapServiceToInterest(params.collection, params.type),
    need: mapServiceToNeed(params.type, params.intent),
    message: buildServiceEnquiryMessage(params.service, params.intent),
  };
}
