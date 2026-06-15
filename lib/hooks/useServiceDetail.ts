"use client";

import { useQuery } from "@tanstack/react-query";
import { useRegisterCatalogServices } from "@/contexts/CatalogContext";
import { fetchServiceDetail } from "@/services/catalogService";

export function useServiceDetail(idOrSlug: number | string) {
  const query = useQuery({
    queryKey: ["service-detail", idOrSlug],
    queryFn: () => fetchServiceDetail(idOrSlug),
    enabled: typeof idOrSlug === "string" ? idOrSlug.length > 0 : idOrSlug > 0,
    staleTime: 5 * 60 * 1000,
  });

  useRegisterCatalogServices(query.data?.service ? [query.data.service] : []);

  return query;
}
