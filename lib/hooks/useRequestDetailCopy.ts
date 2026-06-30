"use client";

import { getCustomerSubmittedNotes } from "@/lib/requests/customerRequestNotes";
import type { CustomerRequest } from "@/lib/types/requests";

type RequestCopySource = Pick<
  CustomerRequest,
  "description" | "variantId" | "marketplaceSlug"
>;

function buildMarketplaceHref(request: RequestCopySource): string | null {
  if (request.marketplaceSlug) return `/marketplace/${request.marketplaceSlug}`;
  if (request.variantId > 0) return `/marketplace/${request.variantId}`;
  return null;
}

export function useRequestDetailCopy(request: RequestCopySource | null) {
  const additionalDetails = request ? getCustomerSubmittedNotes(request.description) : null;
  const marketplaceHref = request ? buildMarketplaceHref(request) : null;

  return {
    additionalDetails,
    marketplaceHref,
  };
}
