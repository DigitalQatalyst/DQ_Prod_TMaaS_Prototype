import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Invoices = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Invoices</h1>
            <p className="text-muted-foreground">Invoice lifecycle tracking (Stage 3 shell).</p>
          </div>
          <Button>Export</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Invoice list</CardTitle>
            <CardDescription>Stage 3 shell for F-S3-04</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">INV-1021</div>
                <div className="text-muted-foreground">CRM &amp; Service Platform • $42,000</div>
              </div>
              <Badge variant="secondary">Awaiting approval</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">INV-1018</div>
                <div className="text-muted-foreground">Digital Workspace Strategy • $18,000</div>
              </div>
              <Badge className="bg-[var(--dq-orange-500)] text-white hover:bg-[var(--dq-orange-500)]">
                Disputed
              </Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">INV-1012</div>
                <div className="text-muted-foreground">Data Foundation Sprint • $28,000</div>
              </div>
              <Badge variant="secondary">Paid</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Invoices;

