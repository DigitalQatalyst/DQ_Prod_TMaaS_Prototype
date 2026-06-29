"use client";

import type { ReactNode } from "react";
import type { BreadcrumbItem } from "@/components/foundation/workspace-ui/Breadcrumb";
import { PageHeader } from "@/components/foundation/workspace-ui/PageHeader";

export interface WorkingLayoutProps {
  pageTitle: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
  headerClassName?: string;
  children: ReactNode;
}

/** DWS.01 WorkingLayout — sticky header on surface, no title divider. */
export function WorkingLayout({
  pageTitle,
  subtitle,
  breadcrumb,
  headerClassName,
  children,
}: WorkingLayoutProps) {
  return (
    <div className="flex min-h-full w-full flex-col bg-[var(--color-surface)]">
      <div className="sticky top-0 z-10 bg-[var(--color-surface)] px-[var(--shell-gutter)]">
        <PageHeader
          title={pageTitle}
          {...(subtitle ? { subtitle } : {})}
          {...(breadcrumb ? { breadcrumb } : {})}
          {...(headerClassName ? { className: headerClassName } : {})}
        />
      </div>
      <div className="w-full flex-1 px-[var(--shell-gutter)] pb-8 pt-4">{children}</div>
    </div>
  );
}
