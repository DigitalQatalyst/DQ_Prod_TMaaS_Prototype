import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  engagementHealthIndicators,
  getHealthStatusBadgeClass,
} from "@/data/engagementHealthIndicators";

interface HealthIndicatorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getStatusIcon = (status: string) => {
  if (status === "green") return <CheckCircle2 size={18} className="text-green-600" />;
  if (status === "amber") return <AlertCircle size={18} className="text-amber-600" />;
  return <XCircle size={18} className="text-red-600" />;
};

export const HealthIndicatorModal = ({ open, onOpenChange }: HealthIndicatorModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Automated Project Status</DialogTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Status is never set manually. The platform calculates each indicator using objective criteria.
          </p>
        </DialogHeader>

        <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {engagementHealthIndicators.map((ind) => (
            <div key={ind.id} className="p-4 rounded-xl border border-border bg-slate-50/50">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {getStatusIcon(ind.status)}
                  <h4 className="font-bold text-navy-950">{ind.name}</h4>
                  <Badge variant="outline" className={`ml-2 capitalize ${getHealthStatusBadgeClass(ind.status)}`}>
                    {ind.status}
                  </Badge>
                </div>
              </div>
              <p className="text-xs font-semibold text-gray-700 mb-1">{ind.currentReason}</p>
              <p className="text-[10px] text-gray-500 italic border-l-2 pl-2 border-gray-200 mt-2">{ind.logic}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
