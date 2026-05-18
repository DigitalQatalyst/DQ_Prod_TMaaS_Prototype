import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Portfolio = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Portfolio Oversight</h1>
          <p className="text-muted-foreground">
            Cross-engagement governance visibility (Stage 3 shell).
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active engagements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">5</div>
              <div className="text-sm text-muted-foreground">Across 2 organisations</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">At-risk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">2</div>
              <div className="text-sm text-muted-foreground">SLA / dependency risks</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Open escalations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">3</div>
              <div className="text-sm text-muted-foreground">Needs oversight review</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Portfolio health</CardTitle>
            <CardDescription>Mock distribution by delivery health</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">On track</span>
                <span className="text-muted-foreground">60%</span>
              </div>
              <Progress value={60} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Watchlist</span>
                <span className="text-muted-foreground">25%</span>
              </div>
              <Progress value={25} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">At risk</span>
                <span className="text-muted-foreground">15%</span>
              </div>
              <Progress value={15} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk &amp; escalations</CardTitle>
            <CardDescription>Mock top items for governance follow-up</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-start justify-between gap-4 rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">CRM milestone dependency blocked</div>
                <div className="text-muted-foreground">
                  External vendor access pending • 4 days
                </div>
              </div>
              <Badge className="bg-[var(--dq-orange-500)] text-white hover:bg-[var(--dq-orange-500)]">
                Escalated
              </Badge>
            </div>
            <div className="flex items-start justify-between gap-4 rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">Artefacts approval overdue</div>
                <div className="text-muted-foreground">Governance action awaiting client sign-off</div>
              </div>
              <Badge variant="secondary">Watchlist</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Portfolio;

