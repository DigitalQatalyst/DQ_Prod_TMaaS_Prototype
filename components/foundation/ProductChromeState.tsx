import type { ReactNode } from "react";
import { PLATFORM_NAME } from "@/lib/brandLinks";
import DqBrandMark from "@/components/foundation/DqBrandMark";

interface ProductChromeStateProps {
  children?: ReactNode;
  className?: string;
}

/** Product-led system state: TMaaS name + DQ monogram (not the full nav lockup). */
export function ProductChromeState({ children, className = "" }: ProductChromeStateProps) {
  return (
    <div
      className={`flex min-h-[50vh] flex-col items-center justify-center gap-8 px-6 text-center ${className}`}
    >
      <div className="flex items-center gap-3">
        <DqBrandMark size="lg" />
        <span className="text-3xl font-semibold tracking-tight text-dq-navy">{PLATFORM_NAME}</span>
      </div>
      {children}
    </div>
  );
}

export default ProductChromeState;
