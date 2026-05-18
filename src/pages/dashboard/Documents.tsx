import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Documents = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Documents</h1>
            <p className="text-muted-foreground">
              Shared artefacts, deliverables, and engagement files.
            </p>
          </div>
          <Button>Upload</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent files</CardTitle>
            <CardDescription>Prototype view (mock documents)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
                <div>
                  <div className="font-medium">Project Charter v1.pdf</div>
                  <div className="text-muted-foreground">Digital Workspace Strategy • 2 days ago</div>
                </div>
                <Badge variant="secondary">PDF</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
                <div>
                  <div className="font-medium">Milestone Plan.xlsx</div>
                  <div className="text-muted-foreground">CRM &amp; Service Platform • 1 week ago</div>
                </div>
                <Badge variant="secondary">Sheet</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Documents;

