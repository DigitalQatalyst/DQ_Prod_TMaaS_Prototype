import { LayoutDashboard, Clock, Settings, type LucideIcon } from "lucide-react";

export interface CustomerNavItem {
  name: string;
  icon: LucideIcon;
  path: string;
}

export const customerNavItems: CustomerNavItem[] = [
  { name: "Overview", icon: LayoutDashboard, path: "/dashboard/overview" },
  { name: "My Requests", icon: Clock, path: "/dashboard/requests" },
  { name: "Settings", icon: Settings, path: "/dashboard/settings" },
];
