import Link from "next/link";
import Image from "next/image";
import dqLogoOrange from "@/assets/dq-logo-orange.png";
import { PLATFORM_NAME } from "@/lib/brandLinks";

interface TMaaSLogoProps {
  className?: string;
}

export function TMaaSLogo({ className }: TMaaSLogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 transition-opacity hover:opacity-90 ${className ?? ""}`}
    >
      <Image
        src={dqLogoOrange}
        alt="Digital Qatalyst"
        className="h-7 w-auto shrink-0"
        height={28}
      />
      <span aria-hidden className="h-6 w-px shrink-0 bg-gray-200" />
      <span className="max-w-[10.5rem] text-sm font-bold leading-tight text-dq-orange sm:max-w-none sm:text-base sm:leading-none">
        {PLATFORM_NAME}
      </span>
    </Link>
  );
}

export default TMaaSLogo;
