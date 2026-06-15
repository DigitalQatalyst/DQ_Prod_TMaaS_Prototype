import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Globe,
  Layers,
  Package,
  PenLine,
  Settings2,
  ShieldCheck,
  Smartphone,
  Workflow,
  Wand2,
} from "lucide-react";

const serviceTypeIcons: Record<string, LucideIcon> = {
  advisory: Globe,
  design: PenLine,
  ai_design: Wand2,
  deploy: Smartphone,
  ai_deploy: Bot,
  manage: Settings2,
  bundle: Package,
};

const collectionIcons: Record<string, LucideIcon> = {
  experience: Globe,
  operations: Workflow,
  security: ShieldCheck,
  ai: BarChart3,
  bundles: Layers,
};

export function getServiceIcon(collection: string, serviceType: string): LucideIcon {
  return serviceTypeIcons[serviceType] ?? collectionIcons[collection] ?? Globe;
}
