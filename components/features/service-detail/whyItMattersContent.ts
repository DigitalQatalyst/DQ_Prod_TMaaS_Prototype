import type { ServiceProduct } from "./serviceDetailHelpers";
import {
  buildWhyItMattersContent,
  type WhyItMattersContent,
  type WhyItMattersStateItem,
} from "@/lib/whyItMattersCopy";

export type { WhyItMattersContent, WhyItMattersStateItem };

export function getWhyItMattersContent(service: ServiceProduct): WhyItMattersContent {
  return buildWhyItMattersContent(service);
}
