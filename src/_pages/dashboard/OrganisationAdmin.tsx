import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Shield, Trash2, UserCog } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";

type OrgMemberRole = "Admin" | "Delivery Lead" | "Approver" | "Viewer";

type OrgMember = {
  id: string;
  name: string;
  email: string;
  role: OrgMemberRole;
  status: "Active" | "Invited" | "Suspended";
};

const SEED_MEMBERS: OrgMember[] = [
  {
    id: "m-1",
    name: "Ahmed Al Tayer",
    email: "ahmed.altayer@dewa.gov.ae",
    role: "Admin",
    status: "Active",
  },
  {
    id: "m-2",
    name: "Sarah Mitchell",
    email: "sarah.mitchell@stcbank.com",
    role: "Approver",
    status: "Active",
  },
  {
    id: "m-3",
    name: "Fatima Noor",
    email: "fatima.noor@dewa.gov.ae",
    role: "Viewer",
    status: "Invited",
  },
];

export default function OrganisationAdmin() {
  const { user } = useAuth();
  const [members, setMembers] = useState<OrgMember[]>(SEED_MEMBERS);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<OrgMemberRole>("Viewer");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return members;
    const q = query.toLowerCase();
    return members.filter(
      (m) => m.name.toLowerCase().includes(q) || m.email.toLowerCase().includes(q)
    );
  }, [members, query]);

  const roleBadge = (role: OrgMemberRole) => {
    switch (role) {
      case "Admin":
        return "bg-orange-500/10 text-orange-700 border-orange-200";
      case "Delivery Lead":
        return "bg-blue-500/10 text-blue-700 border-blue-200";
      case "Approver":
        return "bg-purple-500/10 text-purple-700 border-purple-200";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  const statusBadge = (status: OrgMember["status"]) => {
    switch (status) {
      case "Active":
        return "bg-green-500/10 text-green-700 border-green-200";
      case "Invited":
        return "bg-yellow-500/10 text-yellow-800 border-yellow-200";
      default:
        return "bg-red-500/10 text-red-700 border-red-200";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Organisation Admin</h1>
          <p className="mt-1 text-muted-foreground">
            Mock org admin (members + roles) for the prototype.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield size={18} />
                Organisation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Name</span>
                <span className="font-medium text-foreground">{user.organization}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Workspace</span>
                <span className="font-medium text-foreground">TMaaS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Members</span>
                <span className="font-medium text-foreground">{members.length}</span>
              </div>
              <div className="pt-3">
                <Button className="w-full rounded-full" onClick={() => setInviteOpen(true)}>
                  <Plus size={16} className="mr-2" />
                  Invite Member
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCog size={18} />
                Members & Roles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search members…"
                  className="sm:max-w-sm"
                />
                <div className="text-xs text-muted-foreground">
                  Roles are mock-only and not enforced.
                </div>
              </div>

              <div className="space-y-3">
                {filtered.map((m, idx) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="rounded-2xl border border-border bg-background/50 p-4"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="font-semibold text-foreground">{m.name}</div>
                        <div className="text-sm text-muted-foreground">{m.email}</div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className={roleBadge(m.role)}>
                          {m.role}
                        </Badge>
                        <Badge variant="outline" className={statusBadge(m.status)}>
                          {m.status}
                        </Badge>

                        <Select
                          value={m.role}
                          onValueChange={(next) =>
                            setMembers((prev) =>
                              prev.map((x) => (x.id === m.id ? { ...x, role: next as OrgMemberRole } : x))
                            )
                          }
                        >
                          <SelectTrigger className="h-9 w-[160px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="Delivery Lead">Delivery Lead</SelectItem>
                            <SelectItem value="Approver">Approver</SelectItem>
                            <SelectItem value="Viewer">Viewer</SelectItem>
                          </SelectContent>
                        </Select>

                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setMembers((prev) => prev.filter((x) => x.id !== m.id))}
                          title="Remove (mock)"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {filtered.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                    No members found.
                  </div>
                ) : null}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Invite Member</DialogTitle>
            <DialogDescription>
              Prototype-only: this creates a local mock member entry.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <div className="mb-2 text-sm font-medium text-foreground">Email</div>
              <Input value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} placeholder="name@org.com" />
            </div>
            <div>
              <div className="mb-2 text-sm font-medium text-foreground">Role</div>
              <Select value={inviteRole} onValueChange={(v) => setInviteRole(v as OrgMemberRole)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Delivery Lead">Delivery Lead</SelectItem>
                  <SelectItem value="Approver">Approver</SelectItem>
                  <SelectItem value="Viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setInviteOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (!inviteEmail.trim()) return;
                setMembers((prev) => [
                  ...prev,
                  {
                    id: `m-${Date.now()}`,
                    name: inviteEmail.split("@")[0].replaceAll(".", " "),
                    email: inviteEmail.trim(),
                    role: inviteRole,
                    status: "Invited",
                  },
                ]);
                setInviteEmail("");
                setInviteRole("Viewer");
                setInviteOpen(false);
              }}
            >
              Invite
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}

