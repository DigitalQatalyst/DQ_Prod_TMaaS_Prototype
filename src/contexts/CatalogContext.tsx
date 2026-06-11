import { createContext, useContext, type ReactNode } from "react";
import { initialServices } from "@/data/services";
import { useCatalogServices } from "@/hooks/useCatalog";
import type { ServiceProduct } from "@/types/serviceProduct";

const CatalogContext = createContext<ServiceProduct[]>(initialServices);

export function CatalogProvider({ children }: { children: ReactNode }) {
  const { services } = useCatalogServices();
  return (
    <CatalogContext.Provider value={services}>{children}</CatalogContext.Provider>
  );
}

export function useCatalogData(): ServiceProduct[] {
  return useContext(CatalogContext);
}
