"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockEngagement, mockKRIs as initialKRIs, mockMilestones as initialMilestones, mockDeliverables as initialDeliverables } from "@/data/mockEngagementDetails" // TODO: Task 9 — wire up data;
import { Target, Flag, ExternalLink, CheckCircle2, Package, Plus, Trash2, Link2, Edit3 } from "lucide-react";

const milestoneStatusBadgeClass = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-50 text-green-700 border-green-200";
    case "In Progress":
      return "bg-slate-50 text-slate-700 border-slate-200";
    default:
      return "bg-slate-100 text-slate-500 border-slate-200";
  }
};

const deliverableStatusBadgeClass = (status: string) => {
  switch (status) {
    case "Closed":
      return "bg-green-50 text-green-700 border-green-200";
    case "In Progress":
      return "bg-slate-50 text-slate-700 border-slate-200";
    case "New":
      return "bg-amber-50 text-amber-700 border-amber-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
};

export const DeliveryTab = () => {
  const [vision, setVision] = useState(mockEngagement.visionStatement);
  const [kris, setKris] = useState(initialKRIs);
  const [milestones, setMilestones] = useState(initialMilestones);
  const [deliverables, setDeliverables] = useState(initialDeliverables);
  
  // Calculate milestone progress dynamically based on deliverables
  const calculatedMilestones = useMemo(() => {
    return milestones.map(m => {
      const mDels = deliverables.filter(d => d.milestone === m.id);
      
      // First, calculate each deliverable's progress based on its tasks
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

      // Determine actual completion date if all deliverables are closed
      const allClosed = processedDels.length > 0 && processedDels.every(d => d.status === "Closed" || d.calculatedProgress === 100);

      return {
        ...m,
        calculatedProgress: Math.round(mProgress),
        processedDels,
        status: allClosed ? "Completed" : mProgress > 0 ? "In Progress" : "Not Started"
      };
    });
  }, [milestones, deliverables]);

  // --- CRUD: Vision & KRIs ---
  const handleEditVision = () => {
    const newVision = window.prompt("Update Delivery Vision:", vision);
    if (newVision) setVision(newVision);
  };

  const handleAddKRI = () => {
    setKris(prev => [...prev, {
      id: `KRI-0${prev.length + 1}`,
      title: "New Key Result Indicator",
      current: "0%",
      target: "100%",
      status: "On Track",
      outcomeEvidence: "Pending definition"
    }]);
  };

  const handleDeleteKRI = (id: string) => {
    setKris(prev => prev.filter(k => k.id !== id));
  };

  // --- CRUD: Milestones ---
  const handleAddMilestone = () => {
    setMilestones(prev => [...prev, {
      id: prev.length > 0 ? (prev[prev.length - 1]?.id ?? 0) + 1 : 1,
      name: "New Milestone Phase",
      status: "Not Started",
      progress: 0,
      description: "Description pending for new milestone phase.",
      startDate: "2026-06-01",
      endDate: "2026-09-01",
      originalContractDate: "2026-09-01",
      adjustedContractDate: "2026-09-01",
      forecastDate: "2026-09-01",
      contractualStatus: "Pending",
      health: "On Track",
      outcomeMapping: ["KRI-01"]
    }]);
  };

  const handleDeleteMilestone = (id: number) => {
    setMilestones(prev => prev.filter(m => m.id !== id));
    // Also delete associated deliverables
    setDeliverables(prev => prev.filter(d => d.milestone !== id));
  };

  // --- CRUD: Deliverables & Tasks ---
  const handleAddDeliverable = () => {
    const targetMilestone = (milestones.length > 0 ? milestones[0] : undefined) ?? { id: 0, name: "Unassigned" };
    setDeliverables(prev => [...prev, {
      id: `D${prev.length + 1}`,
      name: "New Deliverable",
      milestone: targetMilestone.id,
      milestoneName: targetMilestone.name,
      status: "New",
      dueDate: "2026-06-30",
      owner: "Unassigned",
      description: "Description pending.",
      completionProgress: 0,
      tasks: []
    }]);
  };

  const handleDeleteDeliverable = (deliverableId: string) => {
    setDeliverables(prev => prev.filter(d => d.id !== deliverableId));
  };

  const handleAddTask = (deliverableId: string) => {
    setDeliverables(prev => prev.map(d => {
      if (d.id === deliverableId) {
        return {
          ...d,
          tasks: [...d.tasks, {
            id: `T-${Math.floor(Math.random() * 1000)}`,
            name: "New Task",
            status: "To Do",
            progress: 0,
            owner: "Unassigned",
            externalLink: "#"
          }]
        };
      }
      return d;
    }));
  };

  const handleDeleteTask = (deliverableId: string, taskId: string) => {
    setDeliverables(prev => prev.map(d => {
      if (d.id === deliverableId) {
        return {
          ...d,
          tasks: d.tasks.filter(t => t.id !== taskId)
        };
      }
      return d;
    }));
  };

  return (
    <div className="space-y-8">
      {/* 1. Project Vision & KRIs */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <Target size={20} className="text-orange-500" />
              Project Vision & KRIs
            </h3>
            <p className="text-sm text-gray-500">The strategic outcomes defining successful delivery.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleEditVision} className="gap-2 rounded-xl shadow-sm">
              <Edit3 size={14} /> Edit Vision
            </Button>
            <Button size="sm" onClick={handleAddKRI} className="gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-sm">
              <Plus size={14} /> Add KRI
            </Button>
          </div>
        </div>
        
        <Card className="border-navy-100 bg-white shadow-sm">
          <CardHeader className="bg-slate-50/50 border-b border-navy-50">
            <CardTitle className="text-sm font-bold text-navy-900">Delivery Vision</CardTitle>
            <CardDescription className="text-sm text-navy-950 font-medium italic mt-1">"{vision}"</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 grid gap-4 md:grid-cols-3">
            {kris.length === 0 ? (
              <div className="col-span-3 text-center py-6 text-sm text-gray-400">No KRIs defined.</div>
            ) : kris.map(kri => (
              <div key={kri.id} className="group/kri p-4 rounded-xl border border-border flex flex-col justify-between hover:border-orange-200 transition-colors relative">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleDeleteKRI(kri.id)} 
                  className="absolute top-2 right-2 h-6 w-6 text-gray-400 hover:text-red-500 opacity-0 group-hover/kri:opacity-100 transition-opacity bg-white"
                >
                  <Trash2 size={12} />
                </Button>
                <div>
                  <div className="flex justify-between items-start mb-2 pr-6">
                    <Badge variant="outline" className="text-[10px] uppercase font-bold text-navy-700 border-navy-200 bg-white">{kri.id}</Badge>
                    <Badge variant="outline" className={
                      kri.status === "On Track"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : "bg-amber-50 text-amber-700 border-amber-200"
                    }>{kri.status}</Badge>
                  </div>
                  <h4 className="text-sm font-semibold text-navy-950 mb-3 pr-6">{kri.title}</h4>
                </div>
                <div className="mt-2 pt-4 border-t border-border">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 block">Contributing Milestones</span>
                  <div className="flex flex-wrap gap-1.5">
                    {calculatedMilestones
                      .filter(m => (m.outcomeMapping || []).includes(kri.id))
                      .map((m, idx) => (
                        <Badge key={idx} variant="outline" className="text-[10px] font-medium bg-slate-50 text-slate-700 border-slate-200">
                          MS0{m.id}: {m.name}
                        </Badge>
                      ))}
                    {calculatedMilestones.filter(m => (m.outcomeMapping || []).includes(kri.id)).length === 0 && (
                      <span className="text-xs text-gray-400 italic">No linked milestones</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* 2. Milestones */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <Flag size={20} className="text-navy-950" />
              Milestones
            </h3>
            <p className="text-sm text-gray-500">High-level operational schedule mapped to strategic outcomes.</p>
          </div>
          <Button size="sm" onClick={handleAddMilestone} className="gap-2 bg-navy-950 hover:bg-navy-900 text-white rounded-xl shadow-sm">
            <Plus size={14} /> Add Milestone
          </Button>
        </div>

        <Card className="border-navy-100 shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="w-[25%]">Milestone</TableHead>
                <TableHead>Linked KRIs</TableHead>
                <TableHead>Contractual Status</TableHead>
                <TableHead>Health</TableHead>
                <TableHead>Delivery Progress</TableHead>
                <TableHead>Timeline</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {calculatedMilestones.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10 text-gray-400">No milestones created.</TableCell>
                </TableRow>
              ) : calculatedMilestones.map((milestone, index) => {
                const colors = [
                  { border: "border-teal-500", bg: "bg-teal-50", text: "text-teal-700" },
                  { border: "border-blue-500", bg: "bg-blue-50", text: "text-blue-700" },
                  { border: "border-purple-500", bg: "bg-purple-50", text: "text-purple-700" },
                  { border: "border-amber-500", bg: "bg-amber-50", text: "text-amber-700" },
                ];
                const c = colors[index % colors.length]!;
                
                return (
                  <TableRow key={milestone.id} className="hover:bg-slate-50/50 group/milestone">
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
                      <div className="flex flex-wrap gap-1">
                        {(milestone.outcomeMapping ?? []).length === 0 ? (
                          <span className="text-xs text-gray-400">-</span>
                        ) : (
                          milestone.outcomeMapping.map((kriId: string) => (
                            <Badge
                              key={kriId}
                              variant="outline"
                              className="text-[10px] font-semibold border-orange-200 text-orange-700 bg-orange-50"
                            >
                              {kriId}
                            </Badge>
                          ))
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-200">
                        {milestone.contractualStatus || 'Pending'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={
                        milestone.health === "On Track" ? "bg-green-50 text-green-700 border-green-200" :
                        milestone.health === "At Risk" ? "bg-amber-50 text-amber-700 border-amber-200" :
                        milestone.health === "Delayed" ? "bg-red-50 text-red-700 border-red-200" :
                        "bg-slate-50 text-slate-700 border-slate-200"
                      }>
                        {milestone.health || 'On Track'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1.5 w-full max-w-[140px]">
                        <div className="flex justify-between items-center text-[10px] font-semibold text-gray-500">
                          <span className={milestone.status === 'Completed' ? 'text-green-600' : 'text-navy-950'}>{milestone.status}</span>
                          <span>{milestone.calculatedProgress}%</span>
                        </div>
                        <Progress value={milestone.calculatedProgress} className="h-1.5 bg-gray-100" indicatorClassName={milestone.status === 'Completed' ? 'bg-green-500' : 'bg-navy-950'} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1 text-[11px]">
                        <div className="flex justify-between gap-4">
                          <span className="text-gray-400">Start:</span>
                          <span className="font-medium text-navy-950">{milestone.startDate}</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-gray-400">Contracted:</span>
                          <span className="font-medium text-navy-950">{milestone.originalContractDate}</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-gray-400">Forecast:</span>
                          <span className="font-medium text-navy-950">{milestone.forecastDate}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteMilestone(milestone.id)} className="h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover/milestone:opacity-100 transition-opacity">
                        <Trash2 size={14} />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* 3. Deliverables & Tasks */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <Package size={20} className="text-navy-950" />
              Deliverables & External Tasks
            </h3>
            <p className="text-sm text-gray-500">Execution artifacts and their associated external task dependencies.</p>
          </div>
          <Button size="sm" onClick={handleAddDeliverable} className="gap-2 bg-navy-950 hover:bg-navy-900 text-white rounded-xl shadow-sm">
            <Plus size={14} /> Add Deliverable
          </Button>
        </div>

        <div className="space-y-6">
          {calculatedMilestones.length === 0 || calculatedMilestones.every(m => m.processedDels.length === 0) ? (
            <div className="text-center py-10 bg-slate-50 border border-dashed border-gray-200 rounded-xl text-sm text-gray-400">
              No deliverables created yet.
            </div>
          ) : calculatedMilestones.map(milestone => {
            if (milestone.processedDels.length === 0) return null;
            return (
              <div key={`del-group-${milestone.id}`} className="space-y-4">
                {milestone.processedDels.map(del => (
                  <Card key={del.id} className="border-navy-100 shadow-sm overflow-hidden group/del">
                    <div className="bg-white p-6">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-4 gap-4">
                        <div>
                          <Badge variant="outline" className="mb-3 bg-slate-50 text-slate-700 border-slate-200">
                            Milestone: {del.milestoneName}
                          </Badge>
                          <h5 className="text-base font-semibold text-navy-950 flex items-center gap-2 mb-1">
                            {del.name}
                            {del.status === "Closed" && <CheckCircle2 size={16} className="text-green-500" />}
                          </h5>
                          <p className="text-sm text-gray-500 mb-2">{del.description}</p>
                          <div className="flex items-center gap-4 text-xs">
                            <span className="text-gray-500">Owner: <span className="font-medium text-navy-950">{del.owner}</span></span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-500">Progress: <span className="font-medium text-navy-950">{del.calculatedProgress}%</span></span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={`whitespace-nowrap ${deliverableStatusBadgeClass(del.status)}`}>{del.status}</Badge>
                          <Button variant="ghost" size="icon" onClick={() => handleDeleteDeliverable(del.id)} className="h-8 w-8 text-gray-400 hover:text-red-500 opacity-0 group-hover/del:opacity-100 transition-opacity">
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </div>

                      {/* Task Execution Layer */}
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 relative">
                        <div className="flex justify-between items-center mb-3">
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Mapped External Tasks</p>
                          <Button variant="ghost" size="sm" onClick={() => handleAddTask(del.id)} className="h-6 text-[10px] px-2 text-navy-600 hover:text-navy-950 hover:bg-navy-50">
                            <Plus size={12} className="mr-1" /> Add Task
                          </Button>
                        </div>
                        <div className="grid gap-2">
                          {del.tasks.length === 0 ? (
                            <div className="text-center p-4 text-xs text-gray-400 border border-dashed border-gray-200 rounded-lg bg-white">No tasks mapped yet.</div>
                          ) : del.tasks.map(task => (
                            <div key={task.id} className="group/task flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-border rounded-lg p-3 text-sm hover:border-slate-300 transition-colors gap-3">
                              <div className="flex items-center gap-3">
                                <Badge variant="outline" className="bg-slate-100 text-slate-700 font-mono text-[10px] border-slate-200 shadow-sm">{task.id}</Badge>
                                <span className="font-medium text-navy-950">{task.name}</span>
                              </div>
                              
                              <div className="flex items-center gap-4 sm:w-1/2 justify-end">
                                <div className="hidden md:flex items-center gap-2 text-gray-500 w-24">
                                  <span className="truncate text-xs">{task.owner}</span>
                                </div>
                                <div className="flex items-center gap-2 w-24">
                                  <Progress value={task.progress} className="h-2 w-16 bg-gray-200" indicatorClassName={task.status === 'Done' ? 'bg-green-500' : 'bg-navy-950'} />
                                  <span className="text-[10px] font-semibold text-gray-600">{task.progress}%</span>
                                </div>
                                <div className="w-20 text-right">
                                  <span className={`text-[10px] font-bold ${
                                    task.status === 'Blocked' ? 'text-red-500' :
                                    task.status === 'Done' ? 'text-green-600' : 'text-navy-950'
                                  }`}>{task.status}</span>
                                </div>
                                <div className="flex items-center gap-1 shrink-0">
                                  <a href={task.externalLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-navy-950 h-6 w-6 flex items-center justify-center rounded hover:bg-navy-50">
                                    <ExternalLink size={14} />
                                  </a>
                                  <button onClick={() => handleDeleteTask(del.id, task.id)} className="text-gray-400 hover:text-red-500 h-6 w-6 flex items-center justify-center rounded hover:bg-red-50 opacity-0 group-hover/task:opacity-100 transition-opacity">
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
