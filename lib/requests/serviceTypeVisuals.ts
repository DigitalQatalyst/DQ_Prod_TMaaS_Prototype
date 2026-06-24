import {
  Bot,
  ClipboardCheck,
  Layers,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import type { ServiceType } from "@/lib/types/requests";

export interface ServiceTypeVisual {
  icon: LucideIcon;
  iconClass: string;
}

const SERVICE_TYPE_VISUALS: Record<ServiceType, ServiceTypeVisual> = {
  design: { icon: Layers, iconClass: "bg-purple-100 text-purple-600" },
  ai_design: { icon: Bot, iconClass: "bg-purple-100 text-purple-600" },
  deploy: { icon: Rocket, iconClass: "bg-blue-100 text-blue-600" },
  assess: { icon: ClipboardCheck, iconClass: "bg-teal-100 text-teal-600" },
  ai_deploy: { icon: Bot, iconClass: "bg-orange-100 text-orange-600" },
};

export function getServiceTypeVisual(type: ServiceType): ServiceTypeVisual {
  return SERVICE_TYPE_VISUALS[type];
}
