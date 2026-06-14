import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HelpContent = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Help Centre Content</h1>
            <p className="text-muted-foreground">Internal content management (prototype).</p>
          </div>
          <Button>Create article</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Articles</CardTitle>
            <CardDescription>Mock library</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Search articles…" />
            <div className="space-y-2 text-sm">
              <div className="rounded-lg border border-border bg-card/50 p-3">
                How to manage service orders
              </div>
              <div className="rounded-lg border border-border bg-card/50 p-3">
                Understanding approvals and governance actions
              </div>
              <div className="rounded-lg border border-border bg-card/50 p-3">
                Troubleshooting onboarding and access
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default HelpContent;

