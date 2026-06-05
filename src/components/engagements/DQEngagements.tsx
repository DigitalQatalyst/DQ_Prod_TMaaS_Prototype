import DashboardLayout from "@/components/DashboardLayout";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioHealthMetrics, mockPortfolioEngagements, PortfolioHealth } from "@/data/mockPortfolioEngagements";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Search, Globe, Activity, Building2, User, MoreHorizontal, Plus, Clock, ShieldAlert, CheckCircle2, AlertTriangle 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const healthBadgeClass = (health: PortfolioHealth) => {
  if (health === "green") return "bg-green-50 text-green-700 border-green-200";
  if (health === "amber") return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-red-50 text-red-700 border-red-200";
};

const DQEngagements = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [orgFilter, setOrgFilter] = useState("All");
  const [leadFilter, setLeadFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const handleRowClick = (id: string) => {
    navigate(`/dashboard/engagement/${id}`);
  };

  const filteredProjects = mockPortfolioEngagements.filter(project => {
    const searchMatch = 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.lead.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.id.toLowerCase().includes(searchQuery.toLowerCase());

    const orgMatch = orgFilter === "All" || project.organization === orgFilter;
    const leadMatch = leadFilter === "All" || project.lead === leadFilter;
    const statusMatch = statusFilter === "All" || project.status === statusFilter;

    return searchMatch && orgMatch && leadMatch && statusMatch;
  });

  // Extract unique filter options
  const allOrgs = Array.from(new Set(mockPortfolioEngagements.map(item => item.organization)));
  const allLeads = Array.from(new Set(mockPortfolioEngagements.map(item => item.lead)));
  const allStatuses = Array.from(new Set(mockPortfolioEngagements.map(i => i.status)));

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Delivery</h1>
            <p className="mt-1 text-muted-foreground">
              Manage active engagements and delivery governance across TMaaS
            </p>
          </div>
          <Button className="shrink-0 gap-2">
            <Plus size={16} />
            Add Project
          </Button>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { key: "total", label: "Total", value: portfolioHealthMetrics.total, accent: "text-navy-950" },
            { key: "onTrack", label: "(Green)", value: portfolioHealthMetrics.onTrack, accent: "text-green-600" },
            { key: "atRisk", label: "(Amber)", value: portfolioHealthMetrics.atRisk, accent: "text-amber-600" },
            { key: "critical", label: "(Red)", value: portfolioHealthMetrics.critical, accent: "text-red-600" },
            { key: "completed", label: "Completed", value: portfolioHealthMetrics.completed, accent: "text-slate-600" },
          ].map((metric) => (
            <Card key={metric.key} className="rounded-2xl border-navy-100 shadow-sm">
              <CardContent className="p-5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  {metric.label}
                </p>
                <p className={`text-3xl font-bold ${metric.accent}`}>{metric.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="w-full space-y-4">
          {/* Search bar and section header */}
          <div className="flex flex-col gap-4 border-b border-border pb-4 md:flex-row md:items-center md:justify-between">
            <div className="text-lg font-semibold text-foreground">Delivery</div>
            
            {/* Global Search */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2 pb-2">
            <div className="flex items-center gap-2 rounded-md border border-input bg-background/50 px-3 py-1 shadow-sm">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <select 
                value={orgFilter} 
                onChange={(e) => setOrgFilter(e.target.value)}
                className="bg-transparent text-sm font-medium outline-none text-foreground font-sans cursor-pointer"
              >
                <option value="All">All Organizations</option>
                {allOrgs.map(org => <option key={org} value={org}>{org}</option>)}
              </select>
            </div>

            <div className="flex items-center gap-2 rounded-md border border-input bg-background/50 px-3 py-1 shadow-sm">
              <User className="h-4 w-4 text-muted-foreground" />
              <select 
                value={leadFilter} 
                onChange={(e) => setLeadFilter(e.target.value)}
                className="bg-transparent text-sm font-medium outline-none text-foreground font-sans cursor-pointer"
              >
                <option value="All">All Leads</option>
                {allLeads.map(lead => <option key={lead} value={lead}>{lead}</option>)}
              </select>
            </div>

            <div className="flex items-center gap-2 rounded-md border border-input bg-background/50 px-3 py-1 shadow-sm">
              <Activity className="h-4 w-4 text-muted-foreground" />
              <select 
                value={statusFilter} 
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-transparent text-sm font-medium outline-none text-foreground font-sans cursor-pointer"
              >
                <option value="All">All Statuses</option>
                {allStatuses.map(status => <option key={status} value={status}>{status}</option>)}
              </select>
            </div>
            
            {(orgFilter !== "All" || leadFilter !== "All" || statusFilter !== "All") && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  setOrgFilter("All");
                  setLeadFilter("All");
                  setStatusFilter("All");
                }}
                className="text-xs h-8 text-muted-foreground hover:text-foreground"
              >
                Clear Filters
              </Button>
            )}
          </div>

          {/* Table Container */}
          <div className="rounded-md border border-border bg-card mt-4">
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Health</TableHead>
                  <TableHead>Upcoming Milestone</TableHead>
                  <TableHead>Key Risk</TableHead>
                  <TableHead>Lead</TableHead>
                  <TableHead>Last Update</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProjects.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="h-32 text-center text-muted-foreground">
                      No projects found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredProjects.map((project) => (
                  <TableRow 
                    key={project.id} 
                    className="hover:bg-slate-50/50 cursor-pointer transition-colors"
                    onClick={() => handleRowClick(project.id)}
                  >
                    <TableCell>
                      <span className="font-semibold text-sm text-navy-950">
                        {project.name}
                      </span>
                      <p className="text-[10px] text-gray-500 mt-0.5">{project.organization}</p>
                    </TableCell>
                    <TableCell>
                      <Badge variant={project.type === "Contracted" ? "outline" : "secondary"} className="text-[10px]">
                        {project.type || "Contracted"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {project.health === "red" && <ShieldAlert className="h-4 w-4 text-[var(--dq-red-500)]" />}
                        {project.health === "amber" && <AlertTriangle className="h-4 w-4 text-[var(--dq-orange-500)]" />}
                        {project.health === "green" && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                        <span className="font-medium text-xs capitalize">{project.health}</span>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[150px] truncate text-xs" title={project.upcomingMilestone}>
                      {project.upcomingMilestone || "Not set"}
                    </TableCell>
                    <TableCell className="max-w-[150px] truncate text-xs" title={project.keyRisk}>
                      {project.keyRisk || "None"}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-[10px]">
                            {project.lead.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-xs font-medium text-navy-950">
                          {(() => {
                            const parts = project.lead.split(" ");
                            return parts.length > 1 ? `${parts[0]} ${parts[parts.length - 1][0]}.` : project.lead;
                          })()}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {project.lastUpdate || "Recently"}
                      </div>
                    </TableCell>
                  </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {filteredProjects.length > 0 && (
            <div className="mt-4 flex items-center justify-between px-2">
              <div className="text-sm text-muted-foreground">
                Showing 1 to {filteredProjects.length} of {filteredProjects.length} entries
              </div>
              <Pagination className="w-auto mx-0">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" className="pointer-events-none opacity-50" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" className="pointer-events-none opacity-50" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DQEngagements;
