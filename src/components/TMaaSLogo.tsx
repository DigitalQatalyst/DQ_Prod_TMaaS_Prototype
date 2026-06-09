import { Link } from "react-router-dom";
import dqLogoOrange from "@/assets/dq-logo-orange.png";
import { PLATFORM_NAME } from "@/lib/brandLinks";

interface TMaaSLogoProps {
  className?: string;
}

export function TMaaSLogo({ className }: TMaaSLogoProps) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-3 transition-opacity hover:opacity-90 ${className ?? ""}`}
    >
      <img src={dqLogoOrange} alt={`${PLATFORM_NAME} mark`} className="h-7 w-auto shrink-0" />
      <span className="max-w-[10.5rem] text-sm font-bold leading-tight text-dq-orange sm:max-w-none sm:text-base sm:leading-none">
        {PLATFORM_NAME}
      </span>
    </Link>
  );
}

export default TMaaSLogo;
