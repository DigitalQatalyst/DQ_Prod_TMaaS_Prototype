"use client";

import { Menu, PanelLeft } from "lucide-react";
import { AvatarLockup } from "@/components/foundation/workspace-ui/AvatarLockup";

interface WorkspaceUser {
  name: string;
}

interface WorkspaceSolutionChromeProps {
  user: WorkspaceUser;
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
  onMobileMenuToggle: () => void;
}

/**
 * DWS.01 AppChrome port — brand lives in sidebar on desktop; lockup mobile-only.
 */
export function WorkspaceSolutionChrome({
  user,
  sidebarCollapsed,
  onToggleSidebar,
  onMobileMenuToggle,
}: WorkspaceSolutionChromeProps) {
  return (
    <header
      className="flex h-[var(--shell-header-h)] shrink-0 items-center gap-3 border-b border-[var(--color-border-subtle)] bg-white px-4 md:px-6"
      data-slot-name="topBar"
    >
      <button
        type="button"
        onClick={onMobileMenuToggle}
        className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-button)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring-navy)] lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={18} strokeWidth={1.5} />
      </button>

      <button
        type="button"
        onClick={onToggleSidebar}
        className="hidden h-9 w-9 items-center justify-center rounded-[var(--radius-button)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring-navy)] lg:inline-flex"
        aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <PanelLeft size={18} strokeWidth={1.5} />
      </button>

      {/* Mobile only — desktop brand is always in the sidebar (mark or full logo). */}
      <div className="flex shrink-0 items-center gap-3 lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/mark.svg" alt="" className="h-[26px] w-[26px]" width={26} height={26} />
        <div className="hidden sm:block">
          <p className="text-sm font-semibold leading-tight text-[var(--color-text-primary)]">TMaaS</p>
          <p className="text-[10px] leading-tight text-[var(--color-text-muted)]">by DigitalQatalyst</p>
        </div>
      </div>

      <div className="flex-1" />

      <div className="flex min-w-0 items-center gap-2">
        <div
          aria-hidden
          className="mx-1 h-8 w-px bg-[var(--color-border-subtle)]"
        />
        <div className="flex items-center border-l border-[var(--color-border-subtle)] pl-3">
          <AvatarLockup name={user.name} />
        </div>
      </div>
    </header>
  );
}
