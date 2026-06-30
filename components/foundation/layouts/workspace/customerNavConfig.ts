import { Clock, Compass, LayoutDashboard, type LucideIcon } from "lucide-react";

export interface WorkspaceNavItem {
  id: string;
  name: string;
  icon: LucideIcon;
  path: string;
  outOfDashboard?: boolean;
}

export interface WorkspaceNavSection {
  id: string;
  label: string;
  items: WorkspaceNavItem[];
}

/** DWS.01 AppSidebar-style nav sections for customer workspace. */
export const customerNavSections: WorkspaceNavSection[] = [
  {
    id: "orientation",
    label: "ORIENTATION",
    items: [{ id: "overview", name: "Overview", icon: LayoutDashboard, path: "/dashboard/overview" }],
  },
  {
    id: "marketplace",
    label: "MARKETPLACE",
    items: [
      { id: "explore-services", name: "Explore Services", icon: Compass, path: "/marketplace", outOfDashboard: true },
      { id: "requests", name: "My Requests", icon: Clock, path: "/dashboard/requests" },
    ],
  },
];
