import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Calendar = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">
            Working sessions and key engagement milestones.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming sessions</CardTitle>
            <CardDescription>Prototype view (mock schedule)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
                <div>
                  <div className="font-medium">Discovery workshop</div>
                  <div className="text-muted-foreground">CRM &amp; Service Platform • Thu 10:00</div>
                </div>
                <Badge variant="secondary">Scheduled</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
                <div>
                  <div className="font-medium">Milestone review</div>
                  <div className="text-muted-foreground">Digital Workspace Strategy • Mon 14:00</div>
                </div>
                <Badge variant="secondary">Tentative</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Calendar;

