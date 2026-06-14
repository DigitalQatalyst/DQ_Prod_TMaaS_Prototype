import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  Bell,
  Calendar,
  CheckCircle2,
  FileText,
  Search,
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NotificationItem = {
  id: number;
  type: string;
  title: string;
  project: string;
  time: string;
  icon: typeof FileText;
  color: string;
  unread: boolean;
  link: string;
};

const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 1,
    type: "document",
    title: "Your delivery lead has requested additional documents",
    project: "Digital Workspace Strategy",
    time: "2 hours ago",
    icon: FileText,
    color: "text-orange-500",
    unread: true,
    link: "/dashboard/services/1",
  },
  {
    id: 2,
    type: "session",
    title: "Working session scheduled for Thursday at 10:00 AM",
    project: "CRM & Service Platform",
    time: "5 hours ago",
    icon: Calendar,
    color: "text-purple-500",
    unread: true,
    link: "/dashboard/calendar",
  },
  {
    id: 3,
    type: "approval",
    title: "Your submitted inputs have been approved",
    project: "Digital Workspace Strategy",
    time: "1 day ago",
    icon: CheckCircle2,
    color: "text-green-500",
    unread: false,
    link: "/dashboard/services/1",
  },
  {
    id: 4,
    type: "milestone",
    title: "Project milestone completed",
    project: "Data Governance Platform",
    time: "2 days ago",
    icon: CheckCircle2,
    color: "text-green-500",
    unread: false,
    link: "/dashboard/services/3",
  },
  {
    id: 5,
    type: "action",
    title: "Governance approval required for stage gate review",
    project: "Customer Experience Strategy",
    time: "3 days ago",
    icon: AlertCircle,
    color: "text-orange-500",
    unread: false,
    link: "/dashboard/overview",
  },
];

export default function Notifications() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const items = useMemo(() => {
    let list = MOCK_NOTIFICATIONS;
    if (filter === "unread") list = list.filter((n) => n.unread);
    if (!query.trim()) return list;
    const q = query.toLowerCase();
    return list.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.project.toLowerCase().includes(q) ||
        n.type.toLowerCase().includes(q)
    );
  }, [query, filter]);

  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => n.unread).length;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">Notifications</h1>
            <p className="mt-1 text-muted-foreground">
              Alerts, approvals, and updates across your projects.
            </p>
          </div>
          {unreadCount > 0 && (
            <Badge className="w-fit bg-orange-500/10 text-orange-600 hover:bg-orange-500/10">
              {unreadCount} unread
            </Badge>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search notifications..."
              className="pl-9"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-orange-500 hover:bg-orange-400" : ""}
            >
              All
            </Button>
            <Button
              variant={filter === "unread" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("unread")}
              className={filter === "unread" ? "bg-orange-500 hover:bg-orange-400" : ""}
            >
              Unread
            </Button>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card shadow-card">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 p-12 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                <Bell size={20} className="text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">No notifications match your filters.</p>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {items.map((notification) => {
                const Icon = notification.icon;
                return (
                  <li key={notification.id}>
                    <Link
                      to={notification.link}
                      className={cn(
                        "flex gap-4 p-4 transition-colors hover:bg-accent/30",
                        notification.unread && "bg-orange-500/[0.03]"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted",
                          notification.color
                        )}
                      >
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <p
                            className={cn(
                              "text-sm leading-snug text-foreground",
                              notification.unread && "font-semibold"
                            )}
                          >
                            {notification.title}
                          </p>
                          {notification.unread && (
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                          )}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">{notification.project}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
