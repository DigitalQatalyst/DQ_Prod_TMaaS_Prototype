import { useQuery } from "@tanstack/react-query";
import { initialServices } from "@/data/services";
import { getBestSellers as getStaticBestSellers } from "@/data/services";
import {
  fetchCatalog,
  fetchBestSellers,
  pickTopServicesByPopularity,
  shouldUseSupabaseCatalog,
} from "@/services/catalogService";
import type { ServiceProduct } from "@/types/serviceProduct";

export const CATALOG_QUERY_KEY = ["catalog"] as const;

export function useCatalog() {
  const useRemote = shouldUseSupabaseCatalog();

  return useQuery({
    queryKey: CATALOG_QUERY_KEY,
    queryFn: fetchCatalog,
    enabled: useRemote,
    staleTime: 5 * 60 * 1000,
    placeholderData: initialServices,
  });
}

export function useCatalogServices(): {
  services: ServiceProduct[];
  isLoading: boolean;
  isError: boolean;
} {
  const useRemote = shouldUseSupabaseCatalog();
  const query = useCatalog();

  if (!useRemote) {
    return { services: initialServices, isLoading: false, isError: false };
  }

  return {
    services: query.data ?? initialServices,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}

export function useBestSellers(collection: string, limit = 6) {
  const useRemote = shouldUseSupabaseCatalog();
  const catalogQuery = useCatalog();
  const staticSellers = getStaticBestSellers(
    collection as Parameters<typeof getStaticBestSellers>[0],
    limit
  );

  const query = useQuery({
    queryKey: ["best-sellers", collection, limit],
    queryFn: () => fetchBestSellers(collection, limit),
    enabled: useRemote,
    staleTime: 5 * 60 * 1000,
  });

  if (!useRemote) {
    return { data: staticSellers, isLoading: false, isError: false };
  }

  const catalogFallback = catalogQuery.data
    ? pickTopServicesByPopularity(catalogQuery.data, collection, limit)
    : [];

  return {
    data: query.data ?? catalogFallback,
    isLoading: query.isLoading && !query.data && !catalogQuery.data,
    isError: query.isError,
  };
}
