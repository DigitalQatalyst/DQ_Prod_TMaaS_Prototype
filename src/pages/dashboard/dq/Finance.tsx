import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Finance = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Finance</h1>
            <p className="text-muted-foreground">
              Commercial &amp; invoice lifecycle visibility (Stage 3 shell).
            </p>
          </div>
          <Button>Generate invoice</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Invoices due</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">4</div>
              <div className="text-sm text-muted-foreground">Next 14 days</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">At risk billing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">1</div>
              <div className="text-sm text-muted-foreground">Milestone misalignment</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Collected (MTD)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">$128k</div>
              <div className="text-sm text-muted-foreground">Mock totals</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Invoice pipeline</CardTitle>
            <CardDescription>Mock invoice states mapped to milestones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">INV-1021 • CRM &amp; Service Platform</div>
                <div className="text-muted-foreground">Milestone: Discovery complete • $42,000</div>
              </div>
              <Badge variant="secondary">Awaiting approval</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">INV-1018 • Digital Workspace Strategy</div>
                <div className="text-muted-foreground">Milestone: Artefacts delivered • $18,000</div>
              </div>
              <Badge className="bg-[var(--dq-orange-500)] text-white hover:bg-[var(--dq-orange-500)]">
                Disputed
              </Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">INV-1012 • Data Foundation Sprint</div>
                <div className="text-muted-foreground">Milestone: Sprint 1 complete • $28,000</div>
              </div>
              <Badge variant="secondary">Paid</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Finance;

