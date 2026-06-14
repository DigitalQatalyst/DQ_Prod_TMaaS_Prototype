import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Onboarding = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Onboarding</h1>
            <p className="text-muted-foreground">
              Organisation access, invites, and role mapping (Stage 3 shell).
            </p>
          </div>
          <Button>Invite user</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Pending onboarding items</CardTitle>
            <CardDescription>Support-focused queue (mock)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">STC Bank • Access request awaiting approval</div>
                <div className="text-muted-foreground">2 users pending</div>
              </div>
              <Badge variant="secondary">Review</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">DEWA • Role mapping incomplete</div>
                <div className="text-muted-foreground">Finance user invited, permissions missing</div>
              </div>
              <Badge className="bg-[var(--dq-orange-500)] text-white hover:bg-[var(--dq-orange-500)]">
                Blocked
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Onboarding;

