import type { ServiceProduct } from "@/lib/types/serviceProduct";
import { aiCopy } from "./ai";
import { bundlesCopy } from "./bundles";
import { experience1Copy } from "./experience1";
import { experience2Copy } from "./experience2";
import { operations1Copy } from "./operations1";
import { operations2Copy } from "./operations2";
import { operations3Copy } from "./operations3";
import { securityCopy } from "./security";
import type { VariantCopyOverride } from "./types";

export type { VariantCopyOverride, CollectionCopyOverrides, DeliveryStepOverride } from "./types";

/** All per-variant overrides, merged across batches (keyed by variant id). */
export const serviceCopyOverrides: Record<number, VariantCopyOverride> = {
  ...experience1Copy,
  ...experience2Copy,
  ...operations1Copy,
  ...operations2Copy,
  ...operations3Copy,
  ...aiCopy,
  ...securityCopy,
  ...bundlesCopy,
};

/** Returns the override for a variant id, or an empty object if none. */
export function getVariantCopyOverride(id: number): VariantCopyOverride {
  return serviceCopyOverrides[id] ?? {};
}

/**
 * Returns a copy of the service with card-level override fields merged in.
 * Used by the seed-SQL generator and any runtime fallback so DB and static
 * catalog stay in sync.
 */
export function applyCardCopyOverride(service: ServiceProduct): ServiceProduct {
  const o = serviceCopyOverrides[service.id];
  if (!o) return service;
  return {
    ...service,
    description: o.description ?? service.description,
    positioning: o.positioning ?? service.positioning,
    features: o.features ?? service.features,
    tags: o.tags ?? service.tags,
    timelineMilestones: o.timelineMilestones ?? service.timelineMilestones,
    businessImpact: o.businessImpact ?? service.businessImpact,
    audience: o.audience ?? service.audience,
    industryRelevance: o.industryRelevance ?? service.industryRelevance,
  };
}
