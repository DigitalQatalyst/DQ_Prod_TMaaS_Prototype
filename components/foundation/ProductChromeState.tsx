import type { ReactNode } from "react";
import TMaaSLogo from "@/components/features/landing/TMaaSLogo";

interface ProductChromeStateProps {
  children?: ReactNode;
  className?: string;
}

/** Product-led system state: official TMaaS lockup from brand kit `logo.svg`. */
export function ProductChromeState({ children, className = "" }: ProductChromeStateProps) {
  return (
    <div
      className={`flex min-h-[50vh] flex-col items-center justify-center gap-8 px-6 text-center ${className}`}
    >
      <TMaaSLogo size="xl" linked={false} />
      {children}
    </div>
  );
}

export default ProductChromeState;
