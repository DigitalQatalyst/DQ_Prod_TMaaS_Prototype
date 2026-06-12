import type { ServiceProduct } from "@/types/serviceProduct";

export function getRemixedName(
  service: ServiceProduct,
  remixKey: string = "all"
): string {
  if (remixKey === "all") return service.standardName;
  return service.remixName[remixKey] ?? service.standardName;
}

export function parseServicePrice(price: string): number {
  return Number(price.replace(/[^0-9]/g, "")) || 0;
}

export function formatServicePrice(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}
