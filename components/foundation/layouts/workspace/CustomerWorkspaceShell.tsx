"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { WorkspaceSidebar } from "./WorkspaceSidebar";
import { WorkspaceTopBar } from "./WorkspaceTopBar";

const DEWA_STUB_USER = {
  name: "Ahmed Al Tayer",
  email: "ahmed.altayer@dewa.gov.ae",
  organization: "Dubai Electricity & Water Authority",
  avatar: "AM",
};

interface CustomerWorkspaceShellProps {
  children: React.ReactNode;
}

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
    <div className="flex h-screen bg-background">
      <WorkspaceSidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((c) => !c)}
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
        user={user}
      />

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden
        />
      )}

      <div
        className={`flex min-w-0 flex-1 flex-col transition-all duration-300 ${
          sidebarCollapsed ? "lg:ml-20" : "lg:ml-72"
        }`}
      >
        <WorkspaceTopBar
          user={user}
          notificationCount={2}
          onMobileMenuToggle={() => setMobileMenuOpen((o) => !o)}
          onSignOut={handleSignOut}
        />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
