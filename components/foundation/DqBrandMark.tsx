import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "h-7 w-7",
  md: "h-9 w-9",
  lg: "h-11 w-11",
} as const;

interface DqBrandMarkProps {
  className?: string;
  size?: keyof typeof sizeClasses;
}

/** Shared DQ monogram tile — use favicon-180 for crisp scaling in chrome surfaces. */
export function DqBrandMark({ className, size = "md" }: DqBrandMarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/favicon-180.png"
      alt=""
      aria-hidden
      className={cn("shrink-0 rounded-md", sizeClasses[size], className)}
      width={44}
      height={44}
    />
  );
}

export default DqBrandMark;
