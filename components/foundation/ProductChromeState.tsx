import type { ReactNode } from "react";
import { PLATFORM_NAME } from "@/lib/brandLinks";
import DqBrandMark from "@/components/foundation/DqBrandMark";

interface ProductChromeStateProps {
  children?: ReactNode;
  className?: string;
}

/** Product-led system state: TMaaS wordmark + DQ monogram (not the nav lockup or two-logo row). */
export function ProductChromeState({ children, className = "" }: ProductChromeStateProps) {
  return (
    <div
      className={`flex min-h-[50vh] flex-col items-center justify-center gap-8 px-6 text-center ${className}`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <span className="text-4xl font-bold tracking-tight text-dq-navy">{PLATFORM_NAME}</span>
          <span className="h-0.5 w-14 rounded-full bg-dq-orange" aria-hidden />
        </div>
        <DqBrandMark size="md" className="text-gray-500" />
      </div>
      {children}
    </div>
  );
}

export default ProductChromeState;
