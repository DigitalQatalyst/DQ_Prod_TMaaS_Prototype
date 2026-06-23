import { cn } from "@/lib/utils";

/** Monogram aspect ratio from brand kit mark.svg (250×195). */
const sizeClasses = {
  sm: "h-4",
  md: "h-[17px]",
  lg: "h-7",
} as const;

interface DqBrandMarkProps {
  className?: string;
  size?: keyof typeof sizeClasses;
  /** Plain navy monogram for light surfaces; white monogram for dark surfaces. */
  variant?: "light" | "dark";
}

/** DQ monogram only — use in footer endorsement and loading chrome (not the favicon tile). */
export function DqBrandMark({
  className,
  size = "md",
  variant = "light",
}: DqBrandMarkProps) {
  const src = variant === "dark" ? "/brand/dq-mark-white.svg" : "/brand/dq-mark.svg";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden
      className={cn("w-auto shrink-0", sizeClasses[size], className)}
      width={22}
      height={17}
    />
  );
}

export default DqBrandMark;
