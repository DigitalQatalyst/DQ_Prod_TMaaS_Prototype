import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Queue = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Workflow Queue</h1>
            <p className="text-muted-foreground">
              Unified operational items for Delivery / Oversight / Support (mock).
            </p>
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Work items</CardTitle>
            <CardDescription>Stage 3 shell for F-S3-02</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-start justify-between gap-4 rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">Assign delivery lead for new service order</div>
                <div className="text-muted-foreground">SO-8842 • Growth Engine activation</div>
              </div>
              <Badge className="bg-[var(--dq-orange-500)] text-white hover:bg-[var(--dq-orange-500)]">
                Needs action
              </Badge>
            </div>
            <div className="flex items-start justify-between gap-4 rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">Escalation: dependency blocked</div>
                <div className="text-muted-foreground">ENG-239 • Vendor access pending</div>
              </div>
              <Badge variant="secondary">Escalation</Badge>
            </div>
            <div className="flex items-start justify-between gap-4 rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">Onboarding: role mapping required</div>
                <div className="text-muted-foreground">DEWA • Invite accepted, permissions missing</div>
              </div>
              <Badge variant="secondary">Support</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Queue;

