import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/** DWS.01 @dbp/ui Breadcrumb — quiet ancestor trail above page title. */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex", className)}>
      <ol className="flex flex-wrap items-center gap-0.5 text-[12px] font-medium">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span
                  aria-hidden
                  className="mx-1.5 select-none text-[var(--color-text-disabled)]"
                >
                  /
                </span>
              )}
              {isLast ? (
                <span className="text-[var(--color-text-secondary)]" aria-current="page">
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]",
                    "focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring-navy)]"
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[var(--color-text-muted)]">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
