import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const PALETTE: string[] = [
  "bg-[var(--color-primary)] text-white",
  "bg-[var(--color-secondary)] text-white",
  "bg-[#2563eb] text-white",
  "bg-[#16a34a] text-white",
  "bg-[#e2e4ef] text-[var(--color-primary)]",
  "bg-[#fde8e4] text-[var(--color-secondary)]",
];

function pickColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
  }
  return PALETTE[Math.abs(hash) % PALETTE.length] ?? PALETTE[0]!;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "?";
  const first = parts[0];
  if (!first) return "?";
  if (parts.length === 1) return first.slice(0, 2).toUpperCase();
  const last = parts[parts.length - 1];
  return ((first[0] ?? "") + (last ? (last[0] ?? "") : "")).toUpperCase();
}

const avatarVariants = cva(
  "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full select-none",
  {
    variants: {
      size: {
        sm: "h-7 w-7 text-[10px] font-bold",
        md: "h-9 w-9 text-xs font-bold",
        lg: "h-12 w-12 text-sm font-bold",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  name: string;
  src?: string;
  alt?: string;
}

/** DWS.01 @dbp/ui Avatar — deterministic initials + palette. */
export function Avatar({ name, src, alt, size, className, ...props }: AvatarProps) {
  const [imgError, setImgError] = React.useState(false);
  const colorClass = pickColor(name);
  const initials = getInitials(name);

  return (
    <div
      className={cn(avatarVariants({ size }), colorClass, className)}
      aria-label={alt ?? name}
      role="img"
      {...props}
    >
      {src && !imgError ? (
        <img
          src={src}
          alt={alt ?? name}
          className="h-full w-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span aria-hidden="true">{initials}</span>
      )}
    </div>
  );
}

export interface AvatarLockupProps extends AvatarProps {
  role?: string;
}

/** DWS.01 @dbp/ui AvatarLockup — top-bar identity block (no dropdown). */
export function AvatarLockup({
  name,
  role,
  size = "md",
  src,
  alt,
  className,
  ...props
}: AvatarLockupProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)} {...props}>
      <Avatar
        name={name}
        size={size}
        {...(src !== undefined && { src })}
        {...(alt !== undefined && { alt })}
      />
      <div className="hidden min-w-0 lg:block">
        <p className="max-w-36 truncate text-xs font-bold leading-snug text-[var(--color-primary)]">
          {name}
        </p>
        {role && (
          <p className="max-w-36 truncate text-[11px] leading-snug text-[var(--color-text-muted)]">
            {role}
          </p>
        )}
      </div>
    </div>
  );
}
