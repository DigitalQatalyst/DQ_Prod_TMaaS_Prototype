"use client";

import { useQuery } from "@tanstack/react-query";
import { useRegisterCatalogServices } from "@/contexts/CatalogContext";
import { fetchServiceDetail } from "@/services/catalogService";

export function useServiceDetail(variantId: number) {
  const query = useQuery({
    queryKey: ["service-detail", variantId],
    queryFn: () => fetchServiceDetail(variantId),
    enabled: variantId > 0,
    staleTime: 5 * 60 * 1000,
  });

  useRegisterCatalogServices(query.data?.service ? [query.data.service] : []);

  return query;
}
