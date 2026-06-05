import { useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockMilestones as initialMilestones, mockDeliverables as initialDeliverables } from "@/data/mockEngagementDetails";
import { Flag } from "lucide-react";

export const ClientMilestonesTab = () => {
  // Use the same logic as DeliveryTab to calculate progress
  const calculatedMilestones = useMemo(() => {
    return initialMilestones.map(m => {
      const mDels = initialDeliverables.filter(d => d.milestone === m.id);
      
      const processedDels = mDels.map(d => {
        const taskTotal = d.tasks.length > 0 
          ? d.tasks.reduce((acc, t) => acc + t.progress, 0) / d.tasks.length 
          : d.completionProgress || 0; 
        
        return {
          ...d,
          calculatedProgress: Math.round(taskTotal)
        };
      });

      const mProgress = processedDels.length > 0
        ? processedDels.reduce((acc, d) => acc + d.calculatedProgress, 0) / processedDels.length
        : m.progress; // fallback

      const allClosed = processedDels.length > 0 && processedDels.every(d => d.status === "Closed" || d.calculatedProgress === 100);

      return {
        ...m,
        calculatedProgress: Math.round(mProgress),
        processedDels,
        status: allClosed ? "Completed" : mProgress > 0 ? "In Progress" : "Not Started"
      };
    });
  }, []);

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
            <Flag size={20} className="text-navy-950" />
            Milestones
          </h3>
          <p className="text-sm text-gray-500">High-level operational schedule and delivery progress.</p>
        </div>

        <Card className="border-navy-100 shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="w-[30%]">Milestone</TableHead>
                <TableHead>Delivery Progress</TableHead>
                <TableHead>Timeline</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {calculatedMilestones.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-10 text-gray-400">No milestones available.</TableCell>
                </TableRow>
              ) : calculatedMilestones.map((milestone, index) => {
                const colors = [
                  { border: "border-teal-500", bg: "bg-teal-50", text: "text-teal-700" },
                  { border: "border-blue-500", bg: "bg-blue-50", text: "text-blue-700" },
                  { border: "border-purple-500", bg: "bg-purple-50", text: "text-purple-700" },
                  { border: "border-amber-500", bg: "bg-amber-50", text: "text-amber-700" },
                ];
                const c = colors[index % colors.length];
                
                return (
                  <TableRow key={milestone.id} className="hover:bg-slate-50/50">
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-0.5 rounded-full ${c.border} border-l-4`}></div>
                        <Badge variant="outline" className={`${c.bg} ${c.text} border-current/20 font-mono px-2 py-0.5 rounded-md`}>
                          MS0{index + 1}
                        </Badge>
                        <span className="font-semibold text-navy-950 text-sm">{milestone.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1.5 w-full max-w-[200px]">
                        <div className="flex justify-between items-center text-[10px] font-semibold text-gray-500">
                          <span className={milestone.status === 'Completed' ? 'text-green-600' : 'text-navy-950'}>{milestone.status}</span>
                          <span>{milestone.calculatedProgress}%</span>
                        </div>
                        <Progress value={milestone.calculatedProgress} className="h-1.5 bg-gray-100" indicatorClassName={milestone.status === 'Completed' ? 'bg-green-500' : 'bg-navy-950'} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1 text-[11px] max-w-[200px]">
                        <div className="flex justify-between gap-4">
                          <span className="text-gray-400">Start:</span>
                          <span className="font-medium text-navy-950">{milestone.startDate}</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-gray-400">Forecast:</span>
                          <span className="font-medium text-navy-950">{milestone.forecastDate}</span>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
};
