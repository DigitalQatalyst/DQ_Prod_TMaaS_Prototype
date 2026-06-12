import type { ServiceProduct } from "./serviceDetailHelpers";
import {
  buildServiceFaqsContent,
  type ServiceFaq,
  type ServiceFaqsContent,
} from "@/lib/serviceFaqsCopy";

export type { ServiceFaq, ServiceFaqsContent };

export function getServiceFaqsContent(service: ServiceProduct): ServiceFaqsContent {
  return buildServiceFaqsContent(service);
}
