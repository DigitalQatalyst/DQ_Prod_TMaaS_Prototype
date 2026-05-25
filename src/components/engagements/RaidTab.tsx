import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockRisks, mockIssues, mockDependencies, mockAssumptions } from "@/data/mockEngagementDetails";
import { AlertCircle, Shield } from "lucide-react";

export const RaidTab = () => {
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "Critical": return <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50">{severity}</Badge>;
      case "High": return <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50">{severity}</Badge>;
      case "Medium": return <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">{severity}</Badge>;
      case "Low": return <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">{severity}</Badge>;
      default: return <Badge variant="outline">{severity}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Open": 
      case "Blocked": return <Badge variant="secondary" className="bg-slate-100 text-slate-700">{status}</Badge>;
      case "In Progress": return <Badge variant="secondary" className="bg-blue-50 text-blue-700">{status}</Badge>;
      case "Resolved":
      case "Valid": return <Badge variant="secondary" className="bg-green-50 text-green-700">{status}</Badge>;
      default: return <Badge variant="secondary" className="bg-slate-100">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* 1. RAID Register */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
            <Shield size={20} className="text-purple-500" />
            RAID Register
          </h3>
          <p className="text-sm text-gray-500">Track and manage Risks, Issues, Dependencies, and Assumptions.</p>
        </div>

        <Card className="border-navy-100 shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <Tabs defaultValue="risks" className="w-full">
              <div className="px-6 pt-4 border-b border-border bg-slate-50/50">
                <TabsList className="bg-transparent h-auto p-0 flex justify-start gap-8 overflow-x-auto">
                  <TabsTrigger value="risks" className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:bg-transparent px-0 pb-3 text-sm font-semibold">
                    Risks <Badge variant="secondary" className="ml-2 bg-white shadow-sm text-gray-600">{mockRisks.length}</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="issues" className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:bg-transparent px-0 pb-3 text-sm font-semibold">
                    Issues <Badge variant="secondary" className="ml-2 bg-white shadow-sm text-gray-600">{mockIssues.length}</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="dependencies" className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:bg-transparent px-0 pb-3 text-sm font-semibold">
                    Dependencies <Badge variant="secondary" className="ml-2 bg-white shadow-sm text-gray-600">{mockDependencies.length}</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="assumptions" className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:bg-transparent px-0 pb-3 text-sm font-semibold">
                    Assumptions <Badge variant="secondary" className="ml-2 bg-white shadow-sm text-gray-600">{mockAssumptions.length}</Badge>
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="bg-white">
                <TabsContent value="risks" className="m-0 p-0 overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-slate-50/50">
                      <TableRow>
                        <TableHead className="w-[50%]">Risk Detail</TableHead>
                        <TableHead>Severity</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Due Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockRisks.map(risk => (
                        <TableRow key={risk.id} className="hover:bg-slate-50/50">
                          <TableCell className="py-4">
                            <span className="font-semibold text-navy-950 block mb-1">{risk.title}</span>
                            <span className="text-xs text-gray-500 line-clamp-2">{risk.description}</span>
                          </TableCell>
                          <TableCell>{getSeverityBadge(risk.severity)}</TableCell>
                          <TableCell>{getStatusBadge(risk.status)}</TableCell>
                          <TableCell className="text-xs font-medium">{risk.owner}</TableCell>
                          <TableCell className="text-xs text-gray-500">{risk.dueDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="issues" className="m-0 p-0 overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-slate-50/50">
                      <TableRow>
                        <TableHead className="w-[50%]">Issue Detail</TableHead>
                        <TableHead>Severity</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Due Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockIssues.map(issue => (
                        <TableRow key={issue.id} className="hover:bg-slate-50/50">
                          <TableCell className="py-4">
                            <span className="font-semibold text-navy-950 block mb-1">{issue.title}</span>
                            <span className="text-xs text-gray-500 line-clamp-2">{issue.description}</span>
                          </TableCell>
                          <TableCell>{getSeverityBadge(issue.severity)}</TableCell>
                          <TableCell>{getStatusBadge(issue.status)}</TableCell>
                          <TableCell className="text-xs font-medium">{issue.owner}</TableCell>
                          <TableCell className="text-xs text-gray-500">{issue.dueDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="dependencies" className="m-0 p-0 overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-slate-50/50">
                      <TableRow>
                        <TableHead className="w-[50%]">Dependency Detail</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Target Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockDependencies.map(dep => (
                        <TableRow key={dep.id} className="hover:bg-slate-50/50">
                          <TableCell className="py-4">
                            <span className="font-semibold text-navy-950 block mb-1">{dep.title}</span>
                            <span className="text-xs text-gray-500 line-clamp-2">{dep.description}</span>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="bg-slate-50">{dep.type}</Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(dep.status)}</TableCell>
                          <TableCell className="text-xs font-medium">{dep.owner}</TableCell>
                          <TableCell className="text-xs text-gray-500">{dep.dueDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="assumptions" className="m-0 p-0 overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-slate-50/50">
                      <TableRow>
                        <TableHead className="w-[50%]">Assumption Detail</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Review Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockAssumptions.map(assumption => (
                        <TableRow key={assumption.id} className="hover:bg-slate-50/50">
                          <TableCell className="py-4">
                            <span className="font-semibold text-navy-950 block mb-1">{assumption.title}</span>
                            <span className="text-xs text-gray-500 line-clamp-2">{assumption.description}</span>
                          </TableCell>
                          <TableCell>{getStatusBadge(assumption.status)}</TableCell>
                          <TableCell className="text-xs font-medium">{assumption.owner}</TableCell>
                          <TableCell className="text-xs text-gray-500">{assumption.dueDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
