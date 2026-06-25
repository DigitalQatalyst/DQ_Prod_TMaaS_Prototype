import type { ServiceProduct, ServiceTypeId } from "@/lib/types/serviceProduct";

export type ServicePackageCta = {
  label: string;
  intent: ContactEnquiryIntent;
};

/** Primary package-card CTA by service stage. */
export function getServicePackageCta(serviceType: ServiceTypeId): ServicePackageCta {
  switch (serviceType) {
    case "advisory":
    case "design":
    case "ai_design":
      return { label: "Get started", intent: "consultation" };
    case "deploy":
    case "ai_deploy":
      return { label: "Get a quote", intent: "quote" };
    case "manage":
      return { label: "Talk to our team", intent: "consultation" };
    case "bundle":
      return { label: "Request proposal", intent: "quote" };
    default:
      return { label: "Get a quote", intent: "quote" };
  }
}

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
  type?: string | undefined;
  collection?: string | undefined;
  intent?: string | undefined;
  variantId?: number | undefined;
  slug?: string | undefined;
};

export function parseServiceContactParams(
  searchParams: URLSearchParams
): ServiceContactParams | null {
  const service = searchParams.get("service")?.trim();
  if (!service) return null;

  const type = searchParams.get("type")?.trim() || undefined;
  const collection = searchParams.get("collection")?.trim() || undefined;
  const intent = searchParams.get("intent")?.trim() || undefined;
  const variantIdRaw = searchParams.get("variantId")?.trim();
  const slug = searchParams.get("slug")?.trim() || undefined;
  const variantId = variantIdRaw ? Number.parseInt(variantIdRaw, 10) : undefined;

  return {
    service,
    ...(type !== undefined ? { type } : {}),
    ...(collection !== undefined ? { collection } : {}),
    ...(intent !== undefined ? { intent } : {}),
    ...(Number.isFinite(variantId) ? { variantId } : {}),
    ...(slug !== undefined ? { slug } : {}),
  };
}

export function mapServiceToInterest(collection?: string, serviceType?: string): ContactInterest {
  if (serviceType === "advisory" || collection === "strategy") {
    return "Transformation Strategy & Advisory";
  }
  return "Digital Platform & Architecture";
}

export function mapServiceToNeed(serviceType?: string, intent?: string): ContactNeed {
  switch (serviceType) {
    case "advisory":
    case "manage":
      return "Advisory & Strategy";
    case "design":
    case "ai_design":
      return "Diagnostic Assessment";
    case "deploy":
    case "ai_deploy":
      return intent === "consultation" ? "Advisory & Strategy" : "Implementation Support";
    case "bundle":
      return "Transformation Programme";
    default:
      return intent === "consultation" ? "Advisory & Strategy" : "General Enquiry";
  }
}

export function buildServiceEnquiryMessage(
  serviceName: string,
  intent?: string,
  serviceType?: string
): string {
  if (serviceType === "bundle") {
    return `I would like to request a proposal for: ${serviceName}`;
  }
  if (serviceType === "advisory" || serviceType === "design" || serviceType === "ai_design") {
    return `I'd like to get started with: ${serviceName}`;
  }
  if (intent === "consultation" || serviceType === "manage") {
    return `I would like to talk to the team about: ${serviceName}`;
  }
  return `I would like to request a quote for: ${serviceName}`;
}

export function buildContactPath(service: ServiceProduct, intent: ContactEnquiryIntent): string {
  const params = new URLSearchParams({
    service: service.standardName,
    type: service.serviceType,
    collection: service.collection,
    intent,
    variantId: String(service.id),
    slug: service.slug,
  });
  return `/contact?${params.toString()}`;
}

export function getServiceEnquiryFormDefaults(params: ServiceContactParams) {
  return {
    interest: mapServiceToInterest(params.collection, params.type),
    need: mapServiceToNeed(params.type, params.intent),
    message: buildServiceEnquiryMessage(params.service, params.intent, params.type),
  };
}
