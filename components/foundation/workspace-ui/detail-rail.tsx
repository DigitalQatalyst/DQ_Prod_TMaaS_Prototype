import * as React from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export interface RailSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/** DWS.01 @dbp/ui RailSection — titled right-rail card. */
export function RailSection({ title, children, className }: RailSectionProps) {
  return (
    <section className={cn("rounded-lg border border-gray-200 bg-white px-5 py-5", className)}>
      <h3 className="mb-4 text-sm font-semibold leading-snug text-[var(--color-primary)]">
        {title}
      </h3>
      {children}
    </section>
  );
}

export type RailActionTone = "outline" | "navy" | "ghost";

const toneClasses: Record<RailActionTone, string> = {
  outline:
    "border border-gray-200 bg-gray-50 text-[var(--color-primary)] hover:border-gray-300 hover:bg-white",
  navy: "bg-[var(--color-primary)] text-white hover:bg-[color-mix(in_srgb,var(--color-primary)_85%,black)]",
  ghost: "text-gray-700 hover:bg-gray-50",
};

function resolveIcon(
  name?: string
): React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }> {
  if (!name) return LucideIcons.ChevronRight;
  const candidate = (LucideIcons as unknown as Record<string, unknown>)[name];
  return (
    (candidate as React.ComponentType<{
      size?: number;
      strokeWidth?: number;
      className?: string;
    }>) ?? LucideIcons.ChevronRight
  );
}

const railActionBase =
  "flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-xs font-medium transition focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring-orange)]";

export interface RailActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  tone?: RailActionTone;
  children: React.ReactNode;
}

/** DWS.01 @dbp/ui RailActionButton — full-width stacked rail action. */
export const RailActionButton = React.forwardRef<HTMLButtonElement, RailActionButtonProps>(
  ({ icon, tone = "outline", className, children, ...props }, ref) => {
    const Icon = resolveIcon(icon);

    return (
      <button
        ref={ref}
        type="button"
        className={cn(railActionBase, toneClasses[tone], className)}
        {...props}
      >
        <Icon
          size={tone === "ghost" ? 13 : 14}
          strokeWidth={1.5}
          className="shrink-0 text-gray-400"
          aria-hidden="true"
        />
        {children}
      </button>
    );
  }
);
RailActionButton.displayName = "RailActionButton";

export interface RailActionLinkProps {
  href: string;
  icon?: string;
  tone?: RailActionTone;
  children: React.ReactNode;
  className?: string;
}

/** Link variant of RailActionButton for navigation actions in the rail. */
export function RailActionLink({
  href,
  icon,
  tone = "outline",
  children,
  className,
}: RailActionLinkProps) {
  const Icon = resolveIcon(icon);

  return (
    <Link href={href} className={cn(railActionBase, toneClasses[tone], className)}>
      <Icon
        size={tone === "ghost" ? 13 : 14}
        strokeWidth={1.5}
        className="shrink-0 text-gray-400"
        aria-hidden="true"
      />
      {children}
    </Link>
  );
}
