import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Catalogue = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Service Catalogue</h1>
          <p className="text-muted-foreground">Blueprint catalogue management (prototype).</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Blueprints</CardTitle>
            <CardDescription>Mock catalogue items</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">DXP Growth Engine</div>
                <div className="text-muted-foreground">Strategy • 4–6 weeks</div>
              </div>
              <Badge variant="secondary">Published</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">Customer Experience Audit</div>
                <div className="text-muted-foreground">Assessment • 2–3 weeks</div>
              </div>
              <Badge variant="secondary">Draft</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Catalogue;

