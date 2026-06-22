import type { ReactNode } from "react";
import TMaaSLogo from "@/components/features/landing/TMaaSLogo";

interface ProductChromeStateProps {
  children?: ReactNode;
  className?: string;
}

/** TMaaS wordmark + DQ favicon mark for loading, 404, and empty states. */
export function ProductChromeState({ children, className = "" }: ProductChromeStateProps) {
  return (
    <div
      className={`flex min-h-[50vh] flex-col items-center justify-center gap-5 px-6 text-center ${className}`}
    >
      <TMaaSLogo size="lg" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/favicon-32.png"
        alt=""
        aria-hidden
        className="h-8 w-8 shrink-0 rounded-md"
        width={32}
        height={32}
      />
      {children}
    </div>
  );
}

export default ProductChromeState;
