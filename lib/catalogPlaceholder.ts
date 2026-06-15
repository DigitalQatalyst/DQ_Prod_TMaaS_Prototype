import { initialServices } from "@/data/services";
import type { ServiceProduct } from "@/lib/types/serviceProduct";

const CACHE_KEY = "tmaas-marketplace-catalog-v2";
const CACHE_TTL_MS = 5 * 60 * 1000;

type CatalogCachePayload = {
  fetchedAt: number;
  data: ServiceProduct[];
};

/** Instant catalog for placeholder UI while Supabase loads (cache → bundled fixture). */
export function getCatalogPlaceholder(): ServiceProduct[] {
  return readCachedCatalog() ?? ([...initialServices] as ServiceProduct[]);
}

export function readCachedCatalog(): ServiceProduct[] | undefined {
  if (typeof sessionStorage === "undefined") return undefined;

  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return undefined;

    const payload = JSON.parse(raw) as CatalogCachePayload;
    if (Date.now() - payload.fetchedAt > CACHE_TTL_MS) return undefined;
    if (!Array.isArray(payload.data) || payload.data.length === 0) return undefined;

    return payload.data;
  } catch {
    return undefined;
  }
}

export function writeCachedCatalog(data: ServiceProduct[]): void {
  if (typeof sessionStorage === "undefined" || data.length === 0) return;

  try {
    const payload: CatalogCachePayload = { fetchedAt: Date.now(), data };
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch {
    // Quota or private browsing — ignore.
  }
}
