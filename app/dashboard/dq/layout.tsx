"use client";

import { DqWorkspaceShell } from "@/components/foundation/layouts/workspace/DqWorkspaceShell";

export default function DqDashboardLayout({ children }: { children: React.ReactNode }) {
  return <DqWorkspaceShell>{children}</DqWorkspaceShell>;
}

