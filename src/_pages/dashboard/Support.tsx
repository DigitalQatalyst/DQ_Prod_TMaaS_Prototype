import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Support = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Support</h1>
          <p className="text-muted-foreground">Raise an issue or request help.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create a ticket</CardTitle>
            <CardDescription>Prototype form (no submission backend)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Subject</Label>
              <Input placeholder="e.g. Unable to upload document" />
            </div>
            <div className="space-y-2">
              <Label>Details</Label>
              <Textarea placeholder="Describe the issue and what you tried…" className="min-h-[120px]" />
            </div>
            <div className="flex justify-end">
              <Button>Submit</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Support;

