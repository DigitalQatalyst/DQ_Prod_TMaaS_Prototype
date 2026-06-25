"use client";

import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import type { CustomerRequestTabKey } from "@/lib/requests/customerRequestTabs";

interface RequestsTabsProps {
  activeTab: CustomerRequestTabKey;
  onTabChange: (tab: CustomerRequestTabKey) => void;
  tabCounts: Partial<Record<CustomerRequestTabKey, number>>;
  tabs: { key: CustomerRequestTabKey; label: string }[];
}

/** DWS.01 @dbp/ui Tabs styling for the requests list. */
export function RequestsTabs({ activeTab, onTabChange, tabCounts, tabs }: RequestsTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={(v) => onTabChange(v as CustomerRequestTabKey)}>
      <TabsList className="flex flex-wrap gap-1 border-b border-[var(--color-border-subtle)] bg-white">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.key}
            value={tab.key}
            className={cn(
              "relative inline-flex min-h-12 items-center justify-center whitespace-nowrap px-4 text-sm font-semibold select-none",
              "text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]",
              "data-[state=active]:text-[var(--color-primary)]",
              "data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-3 data-[state=active]:after:right-3",
              "data-[state=active]:after:h-0.5 data-[state=active]:after:rounded-full data-[state=active]:after:bg-[var(--color-secondary)]",
              "focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring-navy)]"
            )}
          >
            {tab.label}
            {tabCounts[tab.key] !== undefined && (
              <span className="ml-1.5 rounded-full bg-[var(--color-surface)] px-1.5 py-0.5 text-[10px] font-medium">
                {tabCounts[tab.key]}
              </span>
            )}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
