"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HelpCircle, LogOut } from "lucide-react";
import TMaaSLogo from "@/components/features/landing/TMaaSLogo";
import { cn } from "@/lib/utils";
import { customerNavSections } from "./customerNavConfig";

interface WorkspaceSidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

/**
 * TMaaS port of DWS.01 AppSidebar — section eyebrows, nav leaves, Help + Sign out footer.
 * User identity lives in SolutionChrome only (no sidebar avatar card).
 */
export function WorkspaceSidebar({
  collapsed,
  mobileOpen,
  onMobileClose,
}: WorkspaceSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) =>
    path === "/dashboard/requests"
      ? pathname.startsWith("/dashboard/requests")
      : pathname === path;

  const handleSignOut = () => {
    router.push("/sign-in");
  };

  const sidebarWidth = collapsed
    ? "var(--shell-sidebar-w-collapsed)"
    : "var(--shell-sidebar-w)";

  return (
    <aside
      className={cn(
        "z-40 flex h-full shrink-0 flex-col border-r border-[var(--color-border-subtle)] bg-white transition-all duration-300",
        "fixed inset-y-0 left-0 lg:static",
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}
      style={{ width: sidebarWidth }}
    >
      <div
        className={cn(
          "flex h-[var(--shell-header-h)] shrink-0 items-center border-b border-[var(--color-border-subtle)] px-4",
          collapsed ? "justify-center" : "px-5"
        )}
      >
        {collapsed ? (
          <Link href="/" aria-label="TMaaS home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/mark.svg" alt="" className="h-7 w-7" width={28} height={28} />
          </Link>
        ) : (
          <TMaaSLogo size="nav" className="min-w-0" />
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-4">
        {customerNavSections.map((section) => (
          <div key={section.id} className="mb-4">
            {!collapsed && (
              <p className="mb-2 px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                {section.label}
              </p>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const active = isActive(item.path);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.path}
                    onClick={onMobileClose}
                    title={collapsed ? item.name : undefined}
                    className={cn(
                      "flex items-center gap-3 rounded-[var(--radius-button)] px-3 py-2 text-sm transition-colors",
                      active
                        ? "bg-[var(--color-secondary)]/10 font-semibold text-[var(--color-secondary)]"
                        : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]",
                      collapsed && "justify-center px-2"
                    )}
                  >
                    <Icon size={18} className="shrink-0" />
                    {!collapsed && <span>{item.name}</span>}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="shrink-0 border-t border-[var(--color-border-subtle)] p-3">
        <a
          href="mailto:info@digitalqatalyst.com"
          className={cn(
            "flex items-center gap-2 rounded-[var(--radius-button)] px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)]",
            collapsed && "justify-center px-2"
          )}
        >
          <HelpCircle size={16} />
          {!collapsed && <span>Help / Support</span>}
        </a>
        <button
          type="button"
          onClick={handleSignOut}
          className={cn(
            "mt-0.5 flex w-full items-center gap-2 rounded-[var(--radius-button)] px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)]",
            collapsed && "justify-center px-2"
          )}
        >
          <LogOut size={16} />
          {!collapsed && <span>Sign out</span>}
        </button>
      </div>
    </aside>
  );
}
