import Link from "next/link";
import { WorkspaceButton } from "@/components/foundation/workspace-ui/WorkspaceButton";

/**
 * DWS.01 `_my-requests-shell.tsx` aside — single primary Button linking to marketplace.
 * @see DQ_PROD_DWS01-main/app/(authenticated)/transactions/requests/_my-requests-shell.tsx
 */
export function QuickActionsPanel() {
  return (
    <WorkspaceButton asChild className="w-full">
      <Link href="/marketplace">Browse services</Link>
    </WorkspaceButton>
  );
}
