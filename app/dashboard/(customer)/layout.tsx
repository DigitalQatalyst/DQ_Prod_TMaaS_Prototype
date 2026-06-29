"use client";

import { CustomerWorkspaceShell } from "@/components/foundation/layouts/workspace/CustomerWorkspaceShell";

export default function CustomerDashboardLayout({ children }: { children: React.ReactNode }) {
  return <CustomerWorkspaceShell>{children}</CustomerWorkspaceShell>;
}
