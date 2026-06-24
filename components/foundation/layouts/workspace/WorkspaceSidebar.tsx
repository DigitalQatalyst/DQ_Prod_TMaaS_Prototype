"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import TMaaSLogo from "@/components/features/landing/TMaaSLogo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { customerNavItems } from "./customerNavConfig";

interface WorkspaceUser {
  name: string;
  organization: string;
  avatar: string;
}

interface WorkspaceSidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
  user: WorkspaceUser;
}

export function WorkspaceSidebar({
  collapsed,
  onToggleCollapse,
  mobileOpen,
  onMobileClose,
  user,
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

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-full border-r border-navy-100/60 bg-white/75 backdrop-blur-xl saturate-150 transition-all duration-300 shadow-[2px_0_12px_rgba(3,15,53,0.01)]",
        collapsed ? "w-20" : "w-72",
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={onToggleCollapse}
        className="absolute -right-3 top-5 z-50 hidden h-6 w-6 items-center justify-center rounded-full border border-navy-100/80 bg-white p-0 text-navy-950/70 shadow-[0_2px_8px_-1px_rgba(3,15,53,0.08)] transition-all duration-200 hover:bg-[#FB5535]/5 hover:text-[#FB5535] lg:flex"
      >
        {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </Button>

      <div className="flex h-full flex-col">
        <div
          className={cn(
            "flex h-16 items-center border-b border-navy-100/60 px-6",
            collapsed ? "justify-center" : "justify-between"
          )}
        >
          {collapsed ? (
            <Link
              href="/"
              className="flex items-center justify-center transition-opacity hover:opacity-80"
              aria-label="TMaaS home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/favicon-32.png"
                alt=""
                aria-hidden
                className="h-8 w-8 shrink-0 rounded-md"
                width={32}
                height={32}
              />
            </Link>
          ) : (
            <TMaaSLogo size="nav" className="min-w-0 max-w-[calc(100%-0.5rem)]" />
          )}
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <div className="space-y-1">
            {customerNavItems.map((item) => {
              const active = isActive(item.path);
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={onMobileClose}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                    active
                      ? "bg-[#FB5535]/10 font-semibold text-[#FB5535]"
                      : "text-navy-950/70 hover:bg-navy-50/80 hover:text-navy-950"
                  )}
                >
                  <Icon
                    size={18}
                    className={cn("shrink-0", active ? "text-[#FB5535]" : "text-navy-950/50")}
                  />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-navy-100/60 p-4">
          {!collapsed ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-navy-100/60 bg-navy-50/30 p-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FB5535]/10 text-xs font-bold text-[#FB5535]">
                  {user.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-navy-950">{user.name}</p>
                  <p className="truncate text-xs text-navy-950/50">{user.organization}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleSignOut}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-navy-950/60 transition-colors hover:bg-navy-50 hover:text-navy-950"
              >
                <LogOut size={16} />
                Sign out
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleSignOut}
              className="flex w-full items-center justify-center rounded-lg p-2 text-navy-950/60 transition-colors hover:bg-navy-50 hover:text-navy-950"
              aria-label="Sign out"
            >
              <LogOut size={18} />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
