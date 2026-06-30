import { ClipboardList, LayoutDashboard, UserCheck } from "lucide-react";
import type { WorkspaceNavSection } from "./customerNavConfig";

/** DWS.01 AppSidebar-style nav sections for DQ internal workspace. */
export const dqNavSections: WorkspaceNavSection[] = [
  {
    id: "orientation",
    label: "ORIENTATION",
    items: [
      {
        id: "dq-dashboard",
        name: "My Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard/dq/overview",
      },
    ],
  },
  {
    id: "workspace",
    label: "WORKSPACE",
    items: [
      {
        id: "requests-queue",
        name: "Requests Queue",
        icon: ClipboardList,
        path: "/dashboard/dq/queue",
      },
      {
        id: "my-assignments",
        name: "My Assignments",
        icon: UserCheck,
        path: "/dashboard/dq/my-assignments",
      },
    ],
  },
];

