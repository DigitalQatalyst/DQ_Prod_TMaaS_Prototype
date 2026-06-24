"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";
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
 * TMaaS port of DWS.01 TransactionShell — sidebar + SolutionChrome + main + footer.
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

  const contentOffset = cn(
    "transition-[margin] duration-300 max-lg:ml-0",
    sidebarCollapsed ? "lg:ml-16" : "lg:ml-[280px]"
  );

  return (
    <div className="workspace-shell flex h-screen flex-col bg-[var(--color-surface)]">
      <div className="relative flex min-h-0 flex-1">
        <WorkspaceSidebar
          collapsed={sidebarCollapsed}
          mobileOpen={mobileMenuOpen}
          onMobileClose={() => setMobileMenuOpen(false)}
          user={user}
        />

        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/20 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden
          />
        )}

        <div className={cn("flex min-w-0 flex-1 flex-col", contentOffset)}>
          <WorkspaceSolutionChrome
            user={user}
            sidebarCollapsed={sidebarCollapsed}
            onToggleSidebar={() => setSidebarCollapsed((c) => !c)}
            onMobileMenuToggle={() => setMobileMenuOpen((o) => !o)}
            onSignOut={handleSignOut}
          />
          <main className="min-h-0 flex-1 overflow-y-auto bg-white">{children}</main>
        </div>
      </div>
      <div className={contentOffset}>
        <WorkspaceFooter />
      </div>
    </div>
  );
}
