import Link from "next/link";

interface TMaaSLogoProps {
  className?: string;
  /** `light` = navy lockup on white surfaces; `dark` = white lockup on dark surfaces */
  variant?: "light" | "dark";
}

export function TMaaSLogo({ className, variant = "light" }: TMaaSLogoProps) {
  const src =
    variant === "dark" ? "/brand/tmaas-logo-dark.svg" : "/brand/tmaas-logo.svg";

  return (
    <Link
      href="/"
      className={`inline-flex transition-opacity hover:opacity-90 ${className ?? ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="TMaaS by DigitalQatalyst"
        className="h-8 w-auto max-w-[min(100%,14rem)] shrink-0 sm:max-w-none"
        width={213}
        height={40}
      />
    </Link>
  );
}

export default TMaaSLogo;
