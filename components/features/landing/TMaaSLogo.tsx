import Link from "next/link";
import { cn } from "@/lib/utils";

interface TMaaSLogoProps {
  className?: string;
  /** `light` = navy lockup on white surfaces; `dark` = white lockup on dark surfaces */
  variant?: "light" | "dark";
  /** Nav contexts use `lg`; footer and compact surfaces use `md` or `sm`. */
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-9",
  md: "h-10",
  lg: "h-11",
} as const;

export function TMaaSLogo({
  className,
  variant = "light",
  size = "md",
}: TMaaSLogoProps) {
  const src =
    variant === "dark" ? "/brand/tmaas-logo-dark.svg" : "/brand/tmaas-logo.svg";

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 transition-opacity hover:opacity-90", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="TMaaS by DigitalQatalyst"
        className={cn("w-auto max-w-[min(100%,16rem)] shrink-0 sm:max-w-none", sizeClasses[size])}
        width={234}
        height={44}
      />
    </Link>
  );
}

export default TMaaSLogo;
