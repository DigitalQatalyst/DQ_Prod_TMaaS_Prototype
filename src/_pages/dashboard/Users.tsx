import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Users = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Customer Users</h1>
          <p className="text-muted-foreground">Client-side users across organisations (mock).</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>User list</CardTitle>
            <CardDescription>Prototype view</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">Elfan Ahmed</div>
                <div className="text-muted-foreground">STC Bank • Delivery Lead</div>
              </div>
              <Badge variant="secondary">Active</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3">
              <div>
                <div className="font-medium">Sarah Ibrahim</div>
                <div className="text-muted-foreground">DEWA • Finance</div>
              </div>
              <Badge variant="secondary">Invited</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Users;

