import { useQuery } from "@tanstack/react-query";
import { deployModulesData } from "@/data/deployModules";
import { getServiceById } from "@/data/services";
import {
  fetchServiceDetail,
  shouldUseSupabaseCatalog,
} from "@/services/catalogService";
import type { ServiceDetailPayload } from "@/types/catalog";

function getStaticDeployModules(standardName: string) {
  if (deployModulesData[standardName]) return deployModulesData[standardName];
  const baseNameMatch = standardName.match(/^(.*?)\s*\(/);
  if (baseNameMatch) {
    const baseName = baseNameMatch[1];
    const matchingKey = Object.keys(deployModulesData).find((key) =>
      key.startsWith(baseName)
    );
    if (matchingKey) return deployModulesData[matchingKey];
  }
  return [];
}

function getStaticServiceDetail(id: number): ServiceDetailPayload | undefined {
  const service = getServiceById(id);
  if (!service) return undefined;
  return {
    service,
    deployModules: getStaticDeployModules(service.standardName),
  };
}

export function useServiceDetail(variantId: number) {
  const useRemote = shouldUseSupabaseCatalog();

  return useQuery({
    queryKey: ["service-detail", variantId],
    queryFn: () => fetchServiceDetail(variantId),
    enabled: useRemote && variantId > 0,
    staleTime: 5 * 60 * 1000,
    placeholderData: () => getStaticServiceDetail(variantId),
    initialData: useRemote ? undefined : getStaticServiceDetail(variantId),
  });
}
