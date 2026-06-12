import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useQuery } from "@tanstack/react-query";
import { getCatalogPlaceholder } from "@/lib/catalogPlaceholder";
import { CATALOG_QUERY_KEY } from "@/lib/catalogQueryKeys";
import { fetchCatalog, shouldUseSupabaseCatalog } from "@/services/catalogService";
import type { ServiceProduct } from "@/types/serviceProduct";

type CatalogContextValue = {
  services: ServiceProduct[];
  registerServices: (items: ServiceProduct[]) => void;
};

const CatalogContext = createContext<CatalogContextValue>({
  services: [],
  registerServices: () => {},
});

export function CatalogProvider({ children }: { children: ReactNode }) {
  const useRemote = shouldUseSupabaseCatalog();
  const staticQuery = useQuery({
    queryKey: CATALOG_QUERY_KEY,
    queryFn: fetchCatalog,
    enabled: !useRemote,
    staleTime: 5 * 60 * 1000,
  });
  const remoteCatalogQuery = useQuery({
    queryKey: CATALOG_QUERY_KEY,
    queryFn: fetchCatalog,
    enabled: useRemote,
    staleTime: 5 * 60 * 1000,
    placeholderData: getCatalogPlaceholder,
  });
  const [registry, setRegistry] = useState<Map<number, ServiceProduct>>(new Map());

  const registerServices = useCallback((items: ServiceProduct[]) => {
    if (!useRemote || items.length === 0) return;

    setRegistry((previous) => {
      const next = new Map(previous);
      let changed = false;

      for (const item of items) {
        const existing = next.get(item.id);
        if (!existing || existing !== item) {
          next.set(item.id, item);
          changed = true;
        }
      }

      return changed ? next : previous;
    });
  }, [useRemote]);

  const services = useMemo(() => {
    if (!useRemote) return staticQuery.data ?? [];
    if (remoteCatalogQuery.data?.length) return remoteCatalogQuery.data;
    return Array.from(registry.values());
  }, [registry, remoteCatalogQuery.data, staticQuery.data, useRemote]);

  const value = useMemo(
    () => ({ services, registerServices }),
    [registerServices, services]
  );

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalogData(): ServiceProduct[] {
  return useContext(CatalogContext).services;
}

export function useRegisterCatalogServices(items: ServiceProduct[]) {
  const { registerServices } = useContext(CatalogContext);

  useEffect(() => {
    registerServices(items);
  }, [items, registerServices]);
}
