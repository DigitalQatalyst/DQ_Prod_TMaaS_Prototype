"use client";

// TODO: Task 9 — replace stubs with full CatalogContext implementation
import { createContext, useContext, useState, ReactNode } from "react";
import type { ServiceProduct } from "@/lib/types/serviceProduct";

export type { ServiceProduct };

const CatalogContext = createContext<ServiceProduct[]>([]);
const RegisterContext = createContext<(items: ServiceProduct[]) => void>(() => {});

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [catalog, setCatalog] = useState<ServiceProduct[]>([]);
  return (
    <RegisterContext.Provider value={setCatalog}>
      <CatalogContext.Provider value={catalog}>{children}</CatalogContext.Provider>
    </RegisterContext.Provider>
  );
}

export function useCatalogData(): ServiceProduct[] {
  return useContext(CatalogContext);
}

export function useRegisterCatalogServices(items: ServiceProduct[]) {
  const register = useContext(RegisterContext);
  register(items);
}
