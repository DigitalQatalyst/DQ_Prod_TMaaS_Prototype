"use client";

import { ChevronDown, Menu, PanelLeft } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface WorkspaceUser {
  name: string;
  organization: string;
  avatar: string;
  email: string;
}

interface WorkspaceSolutionChromeProps {
  user: WorkspaceUser;
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
  onMobileMenuToggle: () => void;
  onSignOut: () => void;
}

/**
 * DWS.01 AppChrome — brand lockup only when sidebar is collapsed (sidebar shows brand when expanded).
 */
export function WorkspaceSolutionChrome({
  user,
  sidebarCollapsed,
  onToggleSidebar,
  onMobileMenuToggle,
  onSignOut,
}: WorkspaceSolutionChromeProps) {
  return (
    <header
      className="flex h-[var(--shell-header-h)] shrink-0 items-center gap-3 border-b border-[var(--color-border-subtle)] bg-white px-4"
      data-slot-name="topBar"
    >
      <button
        type="button"
        onClick={onMobileMenuToggle}
        className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-button)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      <button
        type="button"
        onClick={onToggleSidebar}
        className="hidden h-9 w-9 items-center justify-center rounded-[var(--radius-button)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] lg:inline-flex"
        aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <PanelLeft size={18} />
      </button>

      <div
        className={cn(
          "flex shrink-0 items-center gap-3",
          !sidebarCollapsed && "lg:hidden"
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/mark.svg" alt="" className="h-[26px] w-[26px]" width={26} height={26} />
        <div className="hidden sm:block">
          <p className="text-sm font-semibold leading-tight text-[var(--color-text-primary)]">TMaaS</p>
          <p className="text-[10px] leading-tight text-[var(--color-text-muted)]">by DigitalQatalyst</p>
        </div>
      </div>

      <div className="flex-1" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={cn(
              "flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white py-1 pl-1 pr-3",
              "outline-none transition-colors hover:bg-[var(--color-surface)]",
              "focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)]/30"
            )}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-secondary)]/10 text-xs font-bold text-[var(--color-secondary)]">
              {user.avatar}
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold leading-tight text-[var(--color-text-primary)]">
                {user.name}
              </p>
              <p className="max-w-[160px] truncate text-[11px] leading-tight text-[var(--color-text-muted)]">
                {user.organization}
              </p>
            </div>
            <ChevronDown size={14} className="hidden text-[var(--color-text-muted)] sm:block" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="px-2 py-1.5">
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/dashboard/settings">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onSignOut}>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
