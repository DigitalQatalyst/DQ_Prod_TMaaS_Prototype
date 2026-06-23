import type { ReactNode } from "react";
import TMaaSLogo from "@/components/features/landing/TMaaSLogo";
import DqBrandMark from "@/components/foundation/DqBrandMark";

interface ProductChromeStateProps {
  children?: ReactNode;
  className?: string;
}

/** Product-led system state per brand kit: official TMaaS lockup + DQ monogram below. */
export function ProductChromeState({ children, className = "" }: ProductChromeStateProps) {
  return (
    <div
      className={`flex min-h-[50vh] flex-col items-center justify-center gap-8 px-6 text-center ${className}`}
    >
      <div className="flex flex-col items-center gap-5">
        <TMaaSLogo size="xl" linked={false} />
        <DqBrandMark size="md" className="text-gray-500" />
      </div>
      {children}
    </div>
  );
}

export default ProductChromeState;
