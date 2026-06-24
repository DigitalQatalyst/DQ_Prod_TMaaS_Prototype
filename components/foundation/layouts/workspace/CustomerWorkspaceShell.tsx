"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { WorkspaceSidebar } from "./WorkspaceSidebar";
import { WorkspaceSolutionChrome } from "./WorkspaceSolutionChrome";
import { WorkspaceFooter } from "./WorkspaceFooter";
import "./workspace-tokens.css";

const DEWA_STUB_USER = {
  name: "Ahmed Al Tayer",
  email: "ahmed.altayer@dewa.gov.ae",
  organization: "Dubai Electricity & Water Authority",
  avatar: "AM",
};

interface CustomerWorkspaceShellProps {
  children: React.ReactNode;
}

/**
 * TMaaS port of DWS.01 TransactionShell — flex row (sidebar + main), no margin offset overflow.
 */
export function CustomerWorkspaceShell({ children }: CustomerWorkspaceShellProps) {
  const router = useRouter();
  const { user: authUser } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const user = {
    name: authUser.name === "Demo User" ? DEWA_STUB_USER.name : authUser.name,
    email: authUser.email === "demo@example.com" ? DEWA_STUB_USER.email : authUser.email,
    organization:
      authUser.organization === "STC Bank" ? DEWA_STUB_USER.organization : authUser.organization,
    avatar: authUser.avatar === "DU" ? DEWA_STUB_USER.avatar : authUser.avatar,
  };

  const handleSignOut = () => {
    router.push("/sign-in");
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
          onSignOut={handleSignOut}
        />
        <main className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto bg-white">
          {children}
        </main>
        <WorkspaceFooter />
      </div>
    </div>
  );
}
