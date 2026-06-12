import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { CATALOG_QUERY_KEY } from "@/lib/catalogQueryKeys";
import { fetchCatalog, shouldUseSupabaseCatalog } from "@/services/catalogService";

const CATALOG_STALE_MS = 5 * 60 * 1000;

/** Warm the catalog cache before the user opens the marketplace. */
export default function CatalogPrefetch() {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!shouldUseSupabaseCatalog()) return;

    void queryClient.prefetchQuery({
      queryKey: CATALOG_QUERY_KEY,
      queryFn: fetchCatalog,
      staleTime: CATALOG_STALE_MS,
    });
  }, [queryClient]);

  return null;
}
