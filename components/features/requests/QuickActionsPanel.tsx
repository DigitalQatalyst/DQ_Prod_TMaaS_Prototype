import {
  RailActionLink,
  RailSection,
} from "@/components/foundation/workspace-ui/detail-rail";

/** DWS.01 RailSection + stacked rail action buttons for the requests aside. */
export function QuickActionsPanel() {
  return (
    <RailSection title="Quick actions">
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
