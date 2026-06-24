import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/** DWS.01 @dbp/ui Button variants — workspace pages only (not marketing rounded-full buttons). */
const workspaceButtonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "text-sm font-semibold whitespace-nowrap select-none",
    "transition-colors motion-safe:transition-all",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline-none",
    "active:translate-y-px",
  ].join(" "),
  {
    variants: {
      variant: {
        orange:
          "bg-[var(--color-secondary)] text-white hover:bg-[color-mix(in_srgb,var(--color-secondary)_85%,black)] focus-visible:[box-shadow:var(--focus-ring-orange)] rounded-[var(--radius-button)]",
        navy:
          "bg-[var(--color-primary)] text-white hover:bg-[color-mix(in_srgb,var(--color-primary)_85%,black)] focus-visible:[box-shadow:var(--focus-ring-navy)] rounded-[var(--radius-button)]",
        outline:
          "border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-surface)] focus-visible:[box-shadow:var(--focus-ring-navy)] rounded-[var(--radius-button)]",
        ghost:
          "bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] focus-visible:[box-shadow:var(--focus-ring-navy)] rounded-[var(--radius-button)]",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "orange",
      size: "default",
    },
  }
);

export interface WorkspaceButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof workspaceButtonVariants> {
  asChild?: boolean;
}

export const WorkspaceButton = React.forwardRef<HTMLButtonElement, WorkspaceButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(workspaceButtonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
WorkspaceButton.displayName = "WorkspaceButton";
