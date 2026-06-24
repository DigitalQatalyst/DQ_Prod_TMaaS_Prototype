import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { RequestStatus } from "@/lib/types/requests";
import { getStatusBadgeClass, getStatusLabel } from "@/lib/requests/format";

interface RequestStatusBadgeProps {
  status: RequestStatus;
  className?: string;
  dot?: boolean;
}

/** DWS.01 RequestStatusBadge pattern — tone pill with optional status dot. */
export function RequestStatusBadge({ status, className, dot = true }: RequestStatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "border text-[11px] font-semibold capitalize",
        getStatusBadgeClass(status),
        className
      )}
    >
      {dot && (
        <span
          className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current opacity-80"
          aria-hidden
        />
      )}
      {getStatusLabel(status)}
    </Badge>
  );
}
