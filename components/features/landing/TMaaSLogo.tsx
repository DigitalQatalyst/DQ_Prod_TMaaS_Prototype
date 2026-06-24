import Link from "next/link";
import { cn } from "@/lib/utils";

interface TMaaSLogoProps {
  className?: string;
  /** `light` = navy lockup on white surfaces; `dark` = white lockup on dark surfaces */
  variant?: "light" | "dark";
  /** Nav contexts use `nav`; footer and compact surfaces use `md` or `sm`. */
  size?: "nav" | "sm" | "md" | "lg" | "xl";
  /** System states (loading/404) render the lockup without a home link. */
  linked?: boolean;
}

const sizeClasses = {
  /** Top nav — proportional to `text-sm` menu labels. */
  nav: "h-8",
  sm: "h-8",
  md: "h-9",
  lg: "h-10",
  /** Loading / 404 — larger centred lockup. */
  xl: "h-14",
} as const;

export function TMaaSLogo({
  className,
  variant = "light",
  size = "md",
  linked = true,
}: TMaaSLogoProps) {
  const src = variant === "dark" ? "/brand/tmaas-logo-dark.svg" : "/brand/tmaas-logo.svg";

  const image = (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt="TMaaS by DigitalQatalyst"
      className={cn("block w-auto shrink-0", sizeClasses[size])}
      width={180}
      height={84}
    />
  );

  if (!linked) {
    return <span className={cn("inline-flex shrink-0", className)}>{image}</span>;
  }

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 transition-opacity hover:opacity-90", className)}
    >
      {image}
    </Link>
  );
}

export default TMaaSLogo;
