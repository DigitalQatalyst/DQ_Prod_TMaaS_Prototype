"use client";

import Link from "next/link";
import { Bell, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface WorkspaceUser {
  name: string;
  organization: string;
  avatar: string;
  email: string;
}

interface WorkspaceTopBarProps {
  user: WorkspaceUser;
  notificationCount?: number;
  onMobileMenuToggle: () => void;
  onSignOut: () => void;
}

export function WorkspaceTopBar({
  user,
  notificationCount = 2,
  onMobileMenuToggle,
  onSignOut,
}: WorkspaceTopBarProps) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-end gap-3 border-b border-navy-100/60 bg-white/80 px-4 backdrop-blur-xl backdrop-saturate-150 lg:px-6">
      <Button
        variant="ghost"
        size="icon"
        onClick={onMobileMenuToggle}
        className="mr-auto shrink-0 text-navy-950/70 hover:bg-[#FB5535]/5 hover:text-[#FB5535] lg:hidden"
      >
        <Menu size={20} />
      </Button>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <Link
          href="/dashboard/notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-navy-950/60 outline-none transition-colors hover:bg-navy-50/80 hover:text-navy-950 focus-visible:ring-2 focus-visible:ring-orange-500/30"
          aria-label={`Notifications${notificationCount > 0 ? `, ${notificationCount} unread` : ""}`}
        >
          <Bell size={20} strokeWidth={1.75} />
          {notificationCount > 0 && (
            <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#FB5535] px-1 text-[10px] font-bold text-white">
              {notificationCount}
            </span>
          )}
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-navy-100/60 bg-white py-1 pl-1 pr-3 outline-none transition-colors hover:bg-navy-50/50 focus-visible:ring-2 focus-visible:ring-orange-500/30"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FB5535]/10 text-xs font-bold text-[#FB5535]">
                {user.avatar}
              </div>
              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold leading-tight text-navy-950">{user.name}</p>
                <p className="text-[11px] leading-tight text-navy-950/50">{user.organization}</p>
              </div>
              <ChevronDown size={14} className="hidden text-navy-950/40 sm:block" />
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
      </div>
    </header>
  );
}
