"use client";

import Link from "next/link";
import { LayoutDashboard, LogOut } from "lucide-react";
import { Avatar } from "@/components/foundation/workspace-ui/AvatarLockup";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { btnSecondary } from "@/lib/brandAccent";
import { featureFlags } from "@/lib/featureFlags";
import { cn } from "@/lib/utils";

interface NavAuthActionsProps {
  className?: string;
  /** Full-width stacked actions for mobile drawer menus. */
  layout?: "inline" | "mobile";
  onNavigate?: () => void;
}

export function NavAuthActions({ className, layout = "inline", onNavigate }: NavAuthActionsProps) {
  const { user, isAuthenticated, isLoading, signOut } = useAuth();

  if (!featureFlags.isEnabled("auth")) return null;
  if (isLoading) return null;

  if (!isAuthenticated) {
    return (
      <Link
        href="/sign-in"
        className={cn(
          btnSecondary,
          layout === "mobile" ? "mt-3 w-full py-3 text-center" : "px-4 py-2 text-sm",
          layout === "inline" && "hidden md:inline-flex",
          className
        )}
        onClick={onNavigate}
      >
        Sign in
      </Link>
    );
  }

  if (layout === "mobile") {
    return (
      <div className={cn("mt-3 space-y-2", className)}>
        <Link
          href="/dashboard/overview"
          className={cn(btnSecondary, "flex w-full items-center justify-center gap-2 py-3 text-center")}
          onClick={onNavigate}
        >
          <LayoutDashboard size={16} aria-hidden />
          Dashboard
        </Link>
        <button
          type="button"
          onClick={() => {
            onNavigate?.();
            void signOut();
          }}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white py-3 text-sm font-semibold text-dq-navy transition-colors hover:bg-gray-50"
        >
          <LogOut size={16} aria-hidden />
          Sign out
        </button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "hidden items-center gap-2 rounded-full border border-gray-200 bg-white py-1 pl-1 pr-3 outline-none transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 md:inline-flex",
            className
          )}
          aria-label="Account menu"
        >
          <Avatar name={user.name} size="sm" />
          <span className="max-w-[8rem] truncate text-sm font-medium text-dq-navy">{user.name}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="truncate text-sm font-semibold text-dq-navy">{user.name}</span>
            <span className="truncate text-xs text-gray-500">{user.email}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard/overview" className="flex cursor-pointer items-center gap-2">
            <LayoutDashboard size={16} aria-hidden />
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex cursor-pointer items-center gap-2 text-red-600 focus:text-red-600"
          onClick={() => void signOut()}
        >
          <LogOut size={16} aria-hidden />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
