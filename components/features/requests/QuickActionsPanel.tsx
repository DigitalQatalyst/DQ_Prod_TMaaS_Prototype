import { Mail, Search } from "lucide-react";
import {
  RailActionCard,
  RailSection,
} from "@/components/foundation/workspace-ui/detail-rail";
import { cn } from "@/lib/utils";

interface QuickActionsPanelProps {
  className?: string;
}

/** DWS.01 RailSection with compact action cards for page asides. */
export function QuickActionsPanel({ className }: QuickActionsPanelProps) {
  return (
    <RailSection title="Quick actions" className={cn("h-full", className)}>
      <div className="space-y-3">
        <RailActionCard
          href="/marketplace"
          icon={Search}
          tone="orange"
          title="Browse services"
          description="View the catalogue"
        />
        <RailActionCard
          href="/contact"
          icon={Mail}
          tone="blue"
          title="Contact DQ team"
          description="Get team support"
        />
      </div>
    </RailSection>
  );
}
