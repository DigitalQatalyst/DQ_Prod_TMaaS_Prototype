import {
  RailActionLink,
  RailSection,
} from "@/components/foundation/workspace-ui/detail-rail";

/** DWS.01 RailSection + RailActionButton pattern for page aside actions. */
export function QuickActionsPanel() {
  return (
    <RailSection title="Actions">
      <div className="space-y-2">
        <RailActionLink href="/marketplace" icon="Search" tone="navy">
          Browse services
        </RailActionLink>
        <RailActionLink href="/contact" icon="Mail" tone="outline">
          Contact DQ team
        </RailActionLink>
      </div>
    </RailSection>
  );
}
