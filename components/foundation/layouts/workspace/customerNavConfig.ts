import { Clock, Compass, LayoutDashboard, type LucideIcon } from "lucide-react";

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
    id: "marketplace",
    label: "MARKETPLACE",
    items: [
      { id: "explore-services", name: "Explore Services", icon: Compass, path: "/marketplace" },
    ],
  },
  {
    id: "workspace",
    label: "WORKSPACE",
    items: [{ id: "requests", name: "My Requests", icon: Clock, path: "/dashboard/requests" }],
  },
];
