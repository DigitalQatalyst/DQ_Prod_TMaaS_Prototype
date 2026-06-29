"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, HelpCircle, LogOut, type LucideIcon } from "lucide-react";
import TMaaSLogo from "@/components/features/landing/TMaaSLogo";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";
import { customerNavSections } from "./customerNavConfig";

interface WorkspaceSidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

function SidebarNavLink({
  href,
  label,
  icon: Icon,
  active,
  collapsed,
  onNavigate,
  outOfDashboard,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
  collapsed: boolean;
  onNavigate?: () => void;
  outOfDashboard?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={() => onNavigate?.()}
      title={collapsed ? label : undefined}
      aria-current={active ? "page" : undefined}
      className={cn(
        "sidebar-feature-group focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring-navy)]",
        active && "sidebar-feature-group-active",
        collapsed && "justify-center px-2"
      )}
    >
      {active && <span className="sidebar-nav-accent" aria-hidden />}
      <div className="relative shrink-0">
        <Icon size={17} strokeWidth={1.5} className="shrink-0" />
        {outOfDashboard && collapsed && (
          <span className="pointer-events-none absolute -right-1 -top-1 rounded-full bg-white p-[1px] text-[var(--color-text-muted)]">
            <ArrowUpRight size={10} strokeWidth={2} />
          </span>
        )}
      </div>
      {!collapsed && <span className="min-w-0 flex-1 truncate">{label}</span>}
      {!collapsed && outOfDashboard && (
        <ArrowUpRight
          size={14}
          strokeWidth={2}
          className="ml-2 shrink-0 text-[var(--color-text-muted)]"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}

/**
 * DWS.01 AppSidebar port — orange section eyebrows, navy-50 active rows, left accent bar.
 */
export function WorkspaceSidebar({
  collapsed,
  mobileOpen,
  onMobileClose,
}: WorkspaceSidebarProps) {
  const pathname = usePathname();
  const { signOut } = useAuth();

  const isActive = (path: string) => {
    if (path === "/dashboard/requests") return pathname.startsWith("/dashboard/requests");
    if (path === "/dashboard/overview") return pathname.startsWith("/dashboard/overview");
    if (path === "/marketplace") return pathname.startsWith("/marketplace");
    return pathname === path;
  };

  const handleSignOut = () => {
    void signOut();
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

      <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Sidebar navigation">
        <div className="space-y-5">
          {customerNavSections.map((section) => (
            <section key={section.id} className="space-y-1">
              {!collapsed && <div className="sidebar-feature-area">{section.label}</div>}
              <div className="mt-1 space-y-1">
                {section.items.map((item) => (
                  <SidebarNavLink
                    key={item.id}
                    href={item.path}
                    label={item.name}
                    icon={item.icon}
                    active={isActive(item.path)}
                    collapsed={collapsed}
                    onNavigate={onMobileClose}
                    {...(item.outOfDashboard ? { outOfDashboard: true } : {})}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </nav>

      <div className="shrink-0 border-t border-[var(--color-border-subtle)] p-3">
        <Link
          href="/contact"
          className={cn(
            "sidebar-feature-group sidebar-footer-item focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring-navy)]",
            collapsed && "justify-center px-2"
          )}
        >
          <div className="relative shrink-0">
            <HelpCircle size={17} strokeWidth={1.5} />
            {collapsed && (
              <span className="pointer-events-none absolute -right-1 -top-1 rounded-full bg-white p-[1px] text-[var(--color-text-muted)]">
                <ArrowUpRight size={10} strokeWidth={2} />
              </span>
            )}
          </div>
          {!collapsed && <span className="min-w-0 flex-1 truncate">Contact Us</span>}
          {!collapsed && (
            <ArrowUpRight
              size={14}
              strokeWidth={2}
              className="ml-2 shrink-0 text-[var(--color-text-muted)]"
              aria-hidden="true"
            />
          )}
        </Link>
        <button
          type="button"
          onClick={handleSignOut}
          className={cn(
            "sidebar-feature-group sidebar-footer-item mt-1 focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring-navy)]",
            collapsed && "justify-center px-2"
          )}
        >
          <LogOut size={17} strokeWidth={1.5} />
          {!collapsed && <span>Sign out</span>}
        </button>
      </div>
    </aside>
  );
}
