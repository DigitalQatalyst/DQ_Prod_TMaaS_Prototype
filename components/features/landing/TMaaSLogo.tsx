import Link from "next/link";
import { cn } from "@/lib/utils";

interface TMaaSLogoProps {
  className?: string;
  /** `light` = navy lockup on white surfaces; `dark` = white lockup on dark surfaces */
  variant?: "light" | "dark";
  /** Nav contexts use `nav`; footer and compact surfaces use `md` or `sm`. */
  size?: "nav" | "sm" | "md" | "lg";
}

const sizeClasses = {
  /** Top nav — proportional to `text-sm` menu labels. */
  nav: "h-8",
  sm: "h-8",
  md: "h-9",
  lg: "h-10",
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
        className={cn("block w-auto shrink-0", sizeClasses[size])}
        width={180}
        height={84}
      />
    </Link>
  );
}

export default TMaaSLogo;
