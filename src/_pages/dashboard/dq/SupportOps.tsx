import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SupportOps = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Support Operations</h1>
            <p className="text-muted-foreground">
              Onboarding issues, workflow interruptions, and routing (Stage 3 shell).
            </p>
          </div>
          <Button>New case</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Open cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">12</div>
              <div className="text-sm text-muted-foreground">Across onboarding &amp; ops</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Workflow interruptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">4</div>
              <div className="text-sm text-muted-foreground">Needs routing</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">SLA breaches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">1</div>
              <div className="text-sm text-muted-foreground">Escalate to Delivery Lead</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Priority queue</CardTitle>
            <CardDescription>Mock interruptions and onboarding blockers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-start justify-between gap-4 rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">User cannot access engagement workspace</div>
                <div className="text-muted-foreground">STC Bank • Role mapping missing</div>
              </div>
              <Badge className="bg-[var(--dq-orange-500)] text-white hover:bg-[var(--dq-orange-500)]">
                High
              </Badge>
            </div>
            <div className="flex items-start justify-between gap-4 rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">Milestone approval stuck</div>
                <div className="text-muted-foreground">DEWA • Approver not assigned</div>
              </div>
              <Badge variant="secondary">Medium</Badge>
            </div>
            <div className="flex items-start justify-between gap-4 rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">Invoice dispute requires triage</div>
                <div className="text-muted-foreground">Route to Finance</div>
              </div>
              <Badge variant="secondary">Medium</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SupportOps;

