import type { ServiceProduct } from "@/lib/types/serviceProduct";

export function getRemixedName(
  service: ServiceProduct,
  remixKey: string = "all"
): string {
  if (remixKey === "all") return service.standardName;
  return service.remixName[remixKey] ?? service.standardName;
}

const PRICE_DISPLAY_OVERRIDES: Record<string, string> = {
  Custom: "Pricing on request",
  "Custom Monthly Plans": "Pricing on request",
};

/** Buyer-facing price label (maps internal catalog values like "Custom"). */
export function formatPriceDisplay(price: string): string {
  const trimmed = price.trim();
  return PRICE_DISPLAY_OVERRIDES[trimmed] ?? trimmed;
}

export function parseServicePrice(price: string): number {
  return Number(price.replace(/[^0-9]/g, "")) || 0;
}

export function formatServicePrice(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}
