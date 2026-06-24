"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { WorkspaceSidebar } from "./WorkspaceSidebar";
import { WorkspaceSolutionChrome } from "./WorkspaceSolutionChrome";
import { WorkspaceFooter } from "./WorkspaceFooter";
import "./workspace-tokens.css";

const DEWA_STUB_USER = {
  name: "Ahmed Al Tayer",
  organization: "Dubai Electricity & Water Authority",
};

interface CustomerWorkspaceShellProps {
  children: React.ReactNode;
}

/**
 * TMaaS port of DWS.01 TransactionShell — flex row (sidebar + main), no margin offset overflow.
 */
export function CustomerWorkspaceShell({ children }: CustomerWorkspaceShellProps) {
  const { user: authUser } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const user = {
    name: authUser.name === "Demo User" ? DEWA_STUB_USER.name : authUser.name,
    organization:
      authUser.organization === "STC Bank" ? DEWA_STUB_USER.organization : authUser.organization,
  };

  return (
    <div className="workspace-shell flex h-screen overflow-hidden bg-[var(--color-surface)]">
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden
        />
      )}

      <WorkspaceSidebar
        collapsed={sidebarCollapsed}
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <WorkspaceSolutionChrome
          user={user}
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={() => setSidebarCollapsed((c) => !c)}
          onMobileMenuToggle={() => setMobileMenuOpen((o) => !o)}
        />
        <main className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto bg-white">
          {children}
        </main>
        <WorkspaceFooter />
      </div>
    </div>
  );
}
