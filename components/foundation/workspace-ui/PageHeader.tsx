import { cn } from "@/lib/utils";
import { Breadcrumb, type BreadcrumbItem } from "./Breadcrumb";

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
  className?: string;
}

/** DWS.01 @dbp/ui PageHeader — breadcrumb + compact workspace title. */
export function PageHeader({ title, subtitle, breadcrumb, className }: PageHeaderProps) {
  return (
    <div data-page-title className={cn("py-3", className)}>
      {breadcrumb && breadcrumb.length > 0 && (
        <Breadcrumb items={breadcrumb} className="mb-2 hidden md:flex" />
      )}
      <h1 className="truncate text-[1.625rem] font-semibold leading-tight text-[var(--color-text-primary)]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-0.5 max-w-2xl text-[11px] leading-snug text-[var(--color-text-muted)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
