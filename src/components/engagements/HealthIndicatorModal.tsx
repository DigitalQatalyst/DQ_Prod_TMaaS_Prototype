import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { HealthIndicatorsList } from "@/components/engagements/HealthIndicatorsList";
import type { IndicatorNavigationTarget } from "@/data/engagementHealthIndicators";

interface HealthIndicatorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigateToIndicator?: (target: IndicatorNavigationTarget) => void;
}

export const HealthIndicatorModal = ({
  open,
  onOpenChange,
  onNavigateToIndicator,
}: HealthIndicatorModalProps) => {
  const handleNavigate = (target: IndicatorNavigationTarget) => {
    onNavigateToIndicator?.(target);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Automated Project Status</DialogTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Status is never set manually. Use View on any indicator to open the relevant workspace tab.
          </p>
        </DialogHeader>

        <div className="mt-4">
          <HealthIndicatorsList variant="modal" onNavigate={handleNavigate} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
