import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockTeamMembers } from "@/data/mockEngagementDetails";
import { Users, Mail, Plus, Package, CheckSquare, AlertTriangle } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const TeamTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
            <Users size={20} className="text-navy-950" />
            Delivery Team
          </h3>
          <p className="text-sm text-gray-500">Manage the professionals assigned to this engagement.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockTeamMembers.map(member => (
          <Card key={member.id} className="hover:shadow-md transition-shadow border-navy-100">
            <CardContent className="p-5 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="h-12 w-12 border-2 border-slate-100">
                  <AvatarFallback className="bg-navy-50 text-navy-700 font-bold">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-bold text-navy-950">{member.name}</h4>
                  <p className="text-xs text-gray-500 mb-2">{member.role}</p>
                  <div className="flex justify-between items-center text-xs">
                    <Badge variant="secondary" className="bg-slate-100 font-normal text-slate-700">
                      {member.allocation}% Allocation
                    </Badge>
                    <Mail size={14} className="text-gray-400 hover:text-navy-950 cursor-pointer" />
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Active Assignments</p>
                </div>
                <div className="flex gap-3 text-xs font-semibold text-navy-950 mb-4">
                  <span title="Deliverables" className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded">
                    <Package size={12} className="text-gray-400" /> {(member as any).assignments?.deliverables || 0}
                  </span>
                  <span title="Tasks" className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded">
                    <CheckSquare size={12} className="text-gray-400" /> {(member as any).assignments?.tasks || 0}
                  </span>
                  <span title="RAID Items" className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded">
                    <AlertTriangle size={12} className="text-gray-400" /> {(member as any).assignments?.raid || 0}
                  </span>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full h-8 text-xs text-navy-700 bg-slate-50 hover:bg-slate-100 hover:text-navy-950 gap-1.5 border-slate-200">
                      <Plus size={12} /> Assign Ownership
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Assign Ownership</DialogTitle>
                      <DialogDescription>
                        Assign an active Deliverable, Task, or RAID item to {member.name}.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-navy-950">Item Type</label>
                        <Select defaultValue="task">
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="deliverable">Deliverable</SelectItem>
                            <SelectItem value="task">Task</SelectItem>
                            <SelectItem value="raid">RAID Item</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-navy-950">Specific Item</label>
                        <Select defaultValue="t1">
                          <SelectTrigger>
                            <SelectValue placeholder="Select item" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="t1">Task: Finalize BRD</SelectItem>
                            <SelectItem value="t2">Task: Review Security Architecture</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="button" variant="outline">Cancel</Button>
                      <Button type="submit" className="bg-navy-950 hover:bg-navy-900 text-white">Assign Item</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
