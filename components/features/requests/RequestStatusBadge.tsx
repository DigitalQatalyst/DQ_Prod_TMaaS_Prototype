import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { RequestStatus } from "@/lib/types/requests";
import { getStatusBadgeClass, getStatusLabel } from "@/lib/requests/format";

interface RequestStatusBadgeProps {
  status: RequestStatus;
  className?: string;
}

export function RequestStatusBadge({ status, className }: RequestStatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "border text-[11px] font-semibold",
        getStatusBadgeClass(status),
        className
      )}
    >
      {getStatusLabel(status)}
    </Badge>
  );
}
