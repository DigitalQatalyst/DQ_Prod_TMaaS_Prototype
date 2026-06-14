import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const HelpCentre = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Help Centre</h1>
          <p className="text-muted-foreground">Articles and quick guides (prototype).</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Search</CardTitle>
            <CardDescription>Mock help content directory</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Search help articles…" />
            <div className="space-y-2 text-sm">
              <div className="rounded-lg border border-border bg-card/50 p-3">
                Getting started with TMaaS workspaces
              </div>
              <div className="rounded-lg border border-border bg-card/50 p-3">
                Uploading documents and sharing artefacts
              </div>
              <div className="rounded-lg border border-border bg-card/50 p-3">
                Understanding milestones and approvals
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default HelpCentre;

