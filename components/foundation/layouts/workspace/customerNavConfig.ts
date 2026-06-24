import { Clock, LayoutDashboard, Settings, type LucideIcon } from "lucide-react";

export interface CustomerNavItem {
  id: string;
  name: string;
  icon: LucideIcon;
  path: string;
}

export interface CustomerNavSection {
  id: string;
  label: string;
  items: CustomerNavItem[];
}

/** DWS.01 AppSidebar-style nav sections for customer workspace. */
export const customerNavSections: CustomerNavSection[] = [
  {
    id: "orientation",
    label: "ORIENTATION",
    items: [{ id: "overview", name: "Overview", icon: LayoutDashboard, path: "/dashboard/overview" }],
  },
  {
    id: "workspace",
    label: "WORKSPACE",
    items: [{ id: "requests", name: "My Requests", icon: Clock, path: "/dashboard/requests" }],
  },
  {
    id: "settings",
    label: "SETTINGS",
    items: [{ id: "settings", name: "Settings", icon: Settings, path: "/dashboard/settings" }],
  },
];
