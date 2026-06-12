import { useEffect, useMemo, useRef } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRegisterCatalogServices } from "@/contexts/CatalogContext";
import { getCatalogPlaceholder } from "@/lib/catalogPlaceholder";
import { CATALOG_QUERY_KEY } from "@/lib/catalogQueryKeys";
import { filterCatalogServices, type MarketplaceCatalogFilters } from "@/lib/marketplaceCatalogFilters";
import {
  enrichCatalogListExtras,
  fetchCatalog,
  pickTopServicesByPopularity,
  shouldUseSupabaseCatalog,
} from "@/services/catalogService";
import type { CatalogListParams } from "@/types/catalog";
import type { ServiceProduct } from "@/types/serviceProduct";

export { CATALOG_QUERY_KEY };

const CATALOG_STALE_MS = 5 * 60 * 1000;

export function useCatalog({ enabled = true }: { enabled?: boolean } = {}) {
  const useRemote = shouldUseSupabaseCatalog();
  const queryClient = useQueryClient();
  const enrichedRef = useRef(false);

  const query = useQuery({
    queryKey: CATALOG_QUERY_KEY,
    queryFn: fetchCatalog,
    enabled,
    staleTime: CATALOG_STALE_MS,
    placeholderData: useRemote ? getCatalogPlaceholder : undefined,
  });

  useEffect(() => {
    enrichedRef.current = false;
  }, [enabled, useRemote]);

  useEffect(() => {
    if (!useRemote || !enabled || !query.data?.length) return;
    if (query.isPlaceholderData || enrichedRef.current) return;

    enrichedRef.current = true;
    void enrichCatalogListExtras(query.data).then((enriched) => {
      queryClient.setQueryData(CATALOG_QUERY_KEY, enriched);
    });
  }, [enabled, query.data, query.isPlaceholderData, queryClient, useRemote]);

  return query;
}

export function useCatalogServices(): {
  services: ServiceProduct[];
  isLoading: boolean;
  isError: boolean;
} {
  const useRemote = shouldUseSupabaseCatalog();
  const query = useCatalog({ enabled: !useRemote });

  return {
    services: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
  };
}

export function useBestSellers(collection: string, limit = 6, enabled = true) {
  const catalogQuery = useCatalog({ enabled });

  const data = useMemo(() => {
    if (!enabled || !catalogQuery.data?.length) return [];
    return pickTopServicesByPopularity(catalogQuery.data, collection, limit);
  }, [catalogQuery.data, collection, enabled, limit]);

  useRegisterCatalogServices(data);

  return {
    data,
    isLoading: false,
    isError: catalogQuery.isError,
    isRefreshing: catalogQuery.isFetching && !catalogQuery.isPlaceholderData,
  };
}

export function useMarketplaceListings(params: CatalogListParams) {
  const catalogQuery = useCatalog();

  const pageResult = useMemo(() => {
    const catalog = catalogQuery.data ?? [];
    const filtered = filterCatalogServices(catalog, params);
    const start = (params.page - 1) * params.pageSize;

    return {
      services: filtered.slice(start, start + params.pageSize),
      totalCount: filtered.length,
    };
  }, [catalogQuery.data, params]);

  useRegisterCatalogServices(pageResult.services);

  return {
    services: pageResult.services,
    totalCount: pageResult.totalCount,
    isLoading: false,
    isError: catalogQuery.isError,
    isRefreshing: catalogQuery.isFetching && !catalogQuery.isPlaceholderData,
  };
}

export type { MarketplaceCatalogFilters };
