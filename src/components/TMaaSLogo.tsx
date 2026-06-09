import { Link } from "react-router-dom";
import dqLogoOrange from "@/assets/dq-logo-orange.png";

interface TMaaSLogoProps {
  className?: string;
}

export function TMaaSLogo({ className }: TMaaSLogoProps) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-3 transition-opacity hover:opacity-90 ${className ?? ""}`}
    >
      <img src={dqLogoOrange} alt="TMaaS mark" className="h-7 w-auto" />
      <span className="text-lg font-bold leading-none text-dq-orange">TMaaS</span>
    </Link>
  );
}

export default TMaaSLogo;
