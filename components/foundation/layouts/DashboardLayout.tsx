"use client";

import { useState, useEffect } from "react";
import type { UserRole } from "@/contexts/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  MessageSquare,
  BarChart3,
  CreditCard,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Building2,
  Bell,
  BellRing,
  Menu,
  Calendar,
  FileText,
  Headphones,
  Users,
  BookOpen,
  Brain,
  X,
  ShoppingCart,
  Search,
  ShoppingBag,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
// TODO: wire up AuthContext in Task 9
// import { useAuth } from "@/contexts/AuthContext";

// TODO: wire up TransactAIMode01 in Task 9
// import TransactAIMode01 from "@/components/features/dashboard/TransactAIMode01";

// TODO: wire up ContextSwitcher in Task 9
// import ContextSwitcher from "@/components/features/dashboard/ContextSwitcher";

const getClientNavigationItems = (organization: string) => [
  {
    group: "",
    items: [
      { name: "Overview", icon: LayoutDashboard, path: "/dashboard/overview", badge: null },
      { name: "Marketplace", icon: ShoppingBag, path: "/marketplace", badge: null, external: true },
    ],
  },
  {
    group: "WORKSPACE",
    items: [
      { name: "Projects", icon: Package, path: "/dashboard/services", badge: 3 },
      { name: "Orders", icon: Package, path: "/dashboard/customer/orders", badge: 6 },
      { name: "Notifications", icon: BellRing, path: "/dashboard/notifications", badge: 2 },
      { name: "Inbox", icon: MessageSquare, path: "/dashboard/inbox", badge: 5 },
    ],
  },
  {
    group: "ORGANIZATION",
    items: [
      { name: "Team", icon: Users, path: "/dashboard/org-admin", badge: null },
    ],
  },
  {
    group: "SETTINGS & SUPPORT",
    items: [
      { name: "Settings", icon: Settings, path: "/dashboard/settings", badge: null },
      { name: "Support", icon: Headphones, path: "/dashboard/support", badge: null },
    ],
  },
];

const dqNavigationItems = [
  {
    group: "",
    items: [
      { name: "Delivery", icon: Package, path: "/dashboard/services", badge: 3 },
      { name: "Notifications", icon: BellRing, path: "/dashboard/notifications", badge: 2 },
      { name: "Inbox", icon: MessageSquare, path: "/dashboard/inbox", badge: 2 },
    ],
  },
  {
    group: "",
    items: [
      { name: "Organisations", icon: Building2, path: "/dashboard/organisations", badge: null },
      { name: "Settings", icon: Settings, path: "/dashboard/settings", badge: null },
      { name: "Support", icon: Headphones, path: "/dashboard/support", badge: null },
    ],
  },
];

const dqPortfolioNavigationItems = [
  {
    group: "",
    items: [{ name: "Portfolio", icon: BarChart3, path: "/dashboard/dq/portfolio", badge: null }],
  },
  {
    group: "OVERSIGHT",
    items: [
      { name: "Projects", icon: Package, path: "/dashboard/services", badge: 3 },
      { name: "Workflow Queue", icon: Bell, path: "/dashboard/dq/queue", badge: 8 },
      { name: "Notifications", icon: BellRing, path: "/dashboard/notifications", badge: 2 },
      { name: "Inbox", icon: MessageSquare, path: "/dashboard/inbox", badge: 2 },
    ],
  },
  {
    group: "PLATFORM",
    items: [
      { name: "Organisations", icon: Building2, path: "/dashboard/organisations", badge: null },
      { name: "Settings", icon: Settings, path: "/dashboard/settings", badge: null },
    ],
  },
];

const dqFinanceNavigationItems = [
  {
    group: "",
    items: [{ name: "Finance", icon: CreditCard, path: "/dashboard/dq/finance", badge: null }],
  },
  {
    group: "COMMERCIAL",
    items: [
      { name: "Service Orders", icon: ShoppingCart, path: "/dashboard/orders", badge: 6 },
      { name: "Invoices", icon: FileText, path: "/dashboard/dq/invoices", badge: 4 },
      { name: "Notifications", icon: BellRing, path: "/dashboard/notifications", badge: 1 },
      { name: "Inbox", icon: MessageSquare, path: "/dashboard/inbox", badge: 1 },
    ],
  },
  {
    group: "PLATFORM",
    items: [
      { name: "Settings", icon: Settings, path: "/dashboard/settings", badge: null },
      { name: "Support", icon: Headphones, path: "/dashboard/support", badge: null },
    ],
  },
];

const dqSupportNavigationItems = [
  {
    group: "",
    items: [{ name: "Support Ops", icon: Headphones, path: "/dashboard/dq/support", badge: null }],
  },
  {
    group: "OPERATIONS",
    items: [
      { name: "Workflow Queue", icon: Bell, path: "/dashboard/dq/queue", badge: 12 },
      { name: "Onboarding", icon: Users, path: "/dashboard/dq/onboarding", badge: 3 },
      { name: "Notifications", icon: BellRing, path: "/dashboard/notifications", badge: 2 },
      { name: "Inbox", icon: MessageSquare, path: "/dashboard/inbox", badge: 4 },
    ],
  },
  {
    group: "PLATFORM",
    items: [
      { name: "Service Catalogue", icon: BookOpen, path: "/dashboard/catalogue", badge: null },
      { name: "Settings", icon: Settings, path: "/dashboard/settings", badge: null },
    ],
  },
];

const mockOrganizations = [
  { id: "stc-bank", name: "STC Bank" },
  { id: "dewa", name: "Dubai Electricity & Water Authority" },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

// TODO: Task 9 — replace stub user with useAuth() hook
const stubUser = {
  role: "client" as UserRole,
  organization: "STC Bank",
  name: "Demo User",
  email: "demo@example.com",
  avatar: "D",
  roleTitle: "Client",
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const user = stubUser; // TODO: Task 9 replace with useAuth()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(
    user.organization === "Dubai Electricity & Water Authority" ? "dewa" : "stc-bank"
  );
  const [transactAIOpen, setTransactAIOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const navigationItems =
    user.role === "dq_delivery_lead"
      ? dqNavigationItems
      : user.role === "dq_portfolio_oversight"
        ? dqPortfolioNavigationItems
        : user.role === "dq_finance"
          ? dqFinanceNavigationItems
          : user.role === "dq_support"
            ? dqSupportNavigationItems
            : getClientNavigationItems(user.organization);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/dashboard/services") {
      return (
        pathname === path ||
        pathname.startsWith("/dashboard/engagement") ||
        pathname.startsWith("/dashboard/services/")
      );
    }
    return pathname === path;
  };

  const handleOrgChange = (orgId: string) => {
    setSelectedOrg(orgId);
    // TODO: Task 9 — wire up setUserOrganization from AuthContext
  };

  useEffect(() => {
    const handleOpenTransactAI = () => {
      setTransactAIOpen(true);
      setShowTooltip(false);
    };
    window.addEventListener("openTransactAI", handleOpenTransactAI);
    return () => {
      window.removeEventListener("openTransactAI", handleOpenTransactAI);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-full border-r border-navy-100/60 bg-white/75 backdrop-blur-xl saturate-150 transition-all duration-300 shadow-[2px_0_12px_rgba(3,15,53,0.01)] ${
          sidebarCollapsed ? "w-20" : "w-72"
        } ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Floating border collapse button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="absolute -right-3 top-5 z-50 h-6 w-6 rounded-full border border-navy-100/80 bg-white p-0 text-navy-950/70 shadow-[0_2px_8px_-1px_rgba(3,15,53,0.08)] hover:bg-[#FB5535]/5 hover:text-[#FB5535] hidden lg:flex items-center justify-center transition-all duration-200"
        >
          {sidebarCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </Button>

        <div className="flex h-full flex-col">
          {/* Logo Container */}
          <div className={`flex h-16 items-center border-b border-navy-100/60 px-6 ${
            sidebarCollapsed ? "justify-center" : "justify-between"
          }`}>
            {sidebarCollapsed ? (
              <Link
                href="/"
                className="flex items-center justify-center transition-opacity hover:opacity-80"
              >
                <span className="grid h-7 w-7 place-items-center rounded-md bg-orange-500 text-white shadow-[var(--glow-orange-sm)]">
                  <span className="font-mono text-[11px] font-bold">DQ</span>
                </span>
              </Link>
            ) : (
              <Link
                href="/"
                className="flex items-center gap-2 font-semibold tracking-tight transition-opacity hover:opacity-80"
              >
                <span className="grid h-7 w-7 place-items-center rounded-md bg-orange-500 text-white shadow-[var(--glow-orange-sm)]">
                  <span className="font-mono text-[11px] font-bold">DQ</span>
                </span>
                <span className="text-orange-500 font-heading text-lg">
                  TMaaS
                </span>
              </Link>
            )}
          </div>

          {/* Organization Selector - Only for Client Role */}
          {user.role === 'client' && (
            <div className="border-b border-navy-100/60 p-4">
              {sidebarCollapsed ? (
                <div className="flex justify-center py-1">
                  <Select value={selectedOrg} onValueChange={handleOrgChange}>
                    <SelectTrigger className="border border-navy-100/50 bg-white/40 hover:bg-white text-navy-950 focus:ring-[#FB5535] rounded-xl hover:border-navy-200/50 transition-all shadow-sm h-9 w-9 p-0 flex items-center justify-center">
                      <Building2 size={16} className="text-[#030F35]/50 hover:text-[#FB5535] transition-colors" />
                    </SelectTrigger>
                    <SelectContent side="right" sideOffset={12} className="border-navy-100 bg-white/95 backdrop-blur-xl">
                      {mockOrganizations.map((org) => (
                        <SelectItem key={org.id} value={org.id} className="focus:bg-[#FB5535]/5 focus:text-[#FB5535]">
                          {org.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-[#030F35]/40">
                    Organization
                  </label>
                  <Select value={selectedOrg} onValueChange={handleOrgChange}>
                    <SelectTrigger className="border-navy-100/80 bg-white/50 hover:bg-white text-navy-950 focus:ring-[#FB5535] rounded-xl hover:border-navy-200 transition-all shadow-sm h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-navy-100 bg-white/95 backdrop-blur-xl">
                      {mockOrganizations.map((org) => (
                        <SelectItem key={org.id} value={org.id} className="focus:bg-[#FB5535]/5 focus:text-[#FB5535]">
                          {org.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-6">
              {navigationItems.map((group, index) => (
                <div key={group.group || index}>
                  {!sidebarCollapsed && group.group && (
                    <h3 className="mb-2 px-3 text-[10px] font-bold uppercase tracking-widest text-[#030F35]/40">
                      {group.group}
                    </h3>
                  )}
                  <div className="space-y-1">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      const active = isActive(item.path);
                      const isExternal = (item as any).external;

                      return (
                        <Link
                          key={item.path}
                          href={item.path}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="group block"
                        >
                          <motion.div
                            whileHover={{ scale: sidebarCollapsed ? 1.05 : 1, x: sidebarCollapsed ? 0 : 2 }}
                            className={`flex items-center transition-all duration-200 ${
                              sidebarCollapsed
                                ? `mx-auto flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 ${
                                    active
                                      ? "bg-[#FB5535]/10 text-[#FB5535]"
                                      : "text-navy-950/70 hover:bg-[#FB5535]/5 hover:text-[#FB5535]"
                                  }`
                                : `gap-3 px-3 py-2.5 rounded-xl ${
                                    active
                                      ? "bg-[#FB5535]/10 text-[#FB5535] font-semibold"
                                      : "text-navy-950/70 hover:bg-[#FB5535]/5 hover:text-[#FB5535]"
                                  }`
                            }`}
                          >
                            <Icon size={18} className={`transition-colors duration-200 ${
                              active ? "text-[#FB5535]" : "text-navy-950/60 group-hover:text-[#FB5535]"
                            }`} />
                            {!sidebarCollapsed && (
                              <>
                                <span className="flex-1 text-sm">{item.name}</span>
                                {isExternal && (
                                  <ExternalLink size={12} className="text-navy-950/40" />
                                )}
                                {item.badge && (
                                  <span className="ml-auto mr-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#FB5535]/12 px-1.5 text-[10px] font-semibold text-[#FB5535]">
                                    {item.badge}
                                  </span>
                                )}
                              </>
                            )}
                          </motion.div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? "lg:ml-20" : "lg:ml-72"}`}>
        {/* Top Bar */}
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-navy-100/60 bg-white/80 px-4 backdrop-blur-xl backdrop-saturate-150 lg:gap-4 lg:px-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="shrink-0 text-navy-950/70 hover:bg-[#FB5535]/5 hover:text-[#FB5535] lg:hidden"
          >
            <Menu size={20} />
          </Button>

          <div className="relative min-w-0 flex-1">
            <Search
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-950/40"
            />
            <input
              type="search"
              placeholder="Search anything..."
              className="h-10 w-full rounded-full border border-navy-100/80 bg-navy-50/30 pl-11 pr-16 text-sm text-navy-950 placeholder:text-navy-950/40 outline-none transition-colors focus:border-orange-500/40 focus:bg-white focus:ring-2 focus:ring-orange-500/20"
            />
            <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 items-center rounded-md border border-navy-100/80 bg-white px-1.5 py-0.5 font-mono text-[10px] font-medium text-navy-950/50 sm:inline-flex">
              ⌘K
            </kbd>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href="/dashboard/notifications"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-navy-950/60 outline-none transition-colors hover:bg-navy-50/80 hover:text-navy-950 focus-visible:ring-2 focus-visible:ring-orange-500/30"
              aria-label="Notifications"
            >
              <Bell size={20} strokeWidth={1.75} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#FB5535]" />
            </Link>
            {/* TODO: Task 9 — wire ContextSwitcher */}
            {/* <ContextSwitcher stage="dashboard" variant="pill" /> */}
          </div>
        </header>

        {/* Page Content */}
        <main className="h-[calc(100vh-4rem)] overflow-y-auto p-6">
          {children}
        </main>

        {/* Transact.AI Mode 01 Floating Button with Tooltip */}
        <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2">
          <AnimatePresence>
            {showTooltip && !transactAIOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="relative mr-2 max-w-xs rounded-2xl border border-border bg-card p-4 shadow-elevated"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute right-2 top-2 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <X size={14} />
                </button>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-brand">
                    <Brain size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Need help with your projects?</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Chat with Transact.AI for personalized guidance on your transformation journey
                    </p>
                    <button
                      onClick={() => {
                        setTransactAIOpen(true);
                        setShowTooltip(false);
                      }}
                      className="mt-2 text-xs font-medium text-primary hover:underline"
                    >
                      Get Started →
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 border-b border-r border-border bg-card"></div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!transactAIOpen && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setTransactAIOpen(true);
                  setShowTooltip(false);
                }}
                className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-brand hover:shadow-xl transition-shadow"
                title="Transact.AI Mode 01"
              >
                <Brain size={24} />
                <span className="absolute inset-0 rounded-full bg-gradient-brand opacity-75 animate-pulse"></span>
                <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  01
                </div>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* TODO: Task 9 — wire up TransactAIMode01 dialog */}
      </div>
    </div>
  );
};

export { DashboardLayout };
export default DashboardLayout;
