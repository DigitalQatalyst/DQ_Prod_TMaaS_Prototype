import type { ServiceProduct } from "@/lib/types/serviceProduct";
import { parseServiceContactParams, type ServiceContactParams } from "@/lib/contactFormPrefill";
import { buildStoredRequestDescription } from "@/lib/requests/customerRequestNotes";

export const REQUEST_SERVICE_CTA_LABEL = "Request service";
export const ASK_ABOUT_SERVICE_CTA_LABEL = "Ask about this service";

export function buildRequestServicePath(service: ServiceProduct): string {
  const params = new URLSearchParams({
    service: service.standardName,
    type: service.serviceType,
    collection: service.collection,
    variantId: String(service.id),
    slug: service.slug,
  });
  return `/request-service?${params.toString()}`;
}

export function buildAskAboutServicePath(service: ServiceProduct): string {
  const params = new URLSearchParams({
    service: service.standardName,
    type: service.serviceType,
    collection: service.collection,
    intent: "consultation",
    variantId: String(service.id),
    slug: service.slug,
  });
  return `/contact?${params.toString()}`;
}

export function buildAskAboutServicePathFromParams(params: ServiceContactParams): string {
  const search = new URLSearchParams({
    service: params.service,
    intent: "consultation",
  });
  if (params.type) search.set("type", params.type);
  if (params.collection) search.set("collection", params.collection);
  if (params.variantId !== undefined) search.set("variantId", String(params.variantId));
  if (params.slug) search.set("slug", params.slug);
  return `/contact?${search.toString()}`;
}

export function parseRequestServiceParams(
  searchParams: URLSearchParams,
): ServiceContactParams | null {
  return parseServiceContactParams(searchParams);
}

export function buildRequestServiceDescription(serviceName: string, notes?: string): string {
  return buildStoredRequestDescription(serviceName, notes);
}

/** Send guests to sign-in, then back to the protected request flow. */
export function buildSignInPathWithReturn(returnTo: string): string {
  return `/sign-in?returnTo=${encodeURIComponent(returnTo)}`;
}
