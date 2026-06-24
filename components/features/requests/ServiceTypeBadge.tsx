import type { ServiceType } from "@/lib/types/requests";
import { getServiceTypeDotClass, getServiceTypeLabel } from "@/lib/requests/format";
import { cn } from "@/lib/utils";

interface ServiceTypeBadgeProps {
  type: ServiceType;
  className?: string;
}

export function ServiceTypeBadge({ type, className }: ServiceTypeBadgeProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-sm text-navy-950", className)}>
      <span
        className={cn("h-2 w-2 shrink-0 rounded-full", getServiceTypeDotClass(type))}
        aria-hidden
      />
      {getServiceTypeLabel(type)}
    </span>
  );
}
