import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockStakeholders } from "@/data/mockEngagementDetails";
import { Users, Plus, Trash2 } from "lucide-react";

export const StakeholdersTab = () => {
  const [stakeholders, setStakeholders] = useState(mockStakeholders);

  const handleStatusChange = (id: string, newStatus: string) => {
    setStakeholders(prev => prev.map(sh => sh.id === id ? { ...sh, engagementStatus: newStatus } : sh));
  };

  const handleAddStakeholder = () => {
    setStakeholders(prev => [...prev, {
      id: `SH00${prev.length + 1}`,
      name: "New Stakeholder",
      position: "Role / Position",
      organisation: "Client",
      influence: "Medium",
      commitment: "Medium",
      lastInteraction: new Date().toISOString().split('T')[0],
      email: "new.stakeholder@example.com",
      engagementStatus: "Pending"
    }]);
  };

  const handleDeleteStakeholder = (id: string) => {
    setStakeholders(prev => prev.filter(sh => sh.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed": return "text-green-700 bg-green-50 border-green-200";
      case "Pending": return "text-blue-700 bg-blue-50 border-blue-200";
      case "Not Engaged": return "text-gray-600 bg-gray-50 border-gray-200";
      case "Resistant": return "text-red-600 bg-red-50 border-red-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="space-y-8">
      {/* 1. Stakeholder Catalogue */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <Users size={20} className="text-green-500" />
              Stakeholder Catalogue
            </h3>
            <p className="text-sm text-gray-500">Registry of key client and internal stakeholders to drive commitment metrics.</p>
          </div>
          <Button size="sm" onClick={handleAddStakeholder} className="gap-2 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-sm">
            <Plus size={14} /> Add Stakeholder
          </Button>
        </div>

        <Card className="overflow-hidden shadow-sm border-navy-100">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead>Stakeholder</TableHead>
                <TableHead>Influence</TableHead>
                <TableHead>Commitment</TableHead>
                <TableHead>Engagement Status</TableHead>
                <TableHead>Last Interaction</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stakeholders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10 text-gray-400">No stakeholders mapped.</TableCell>
                </TableRow>
              ) : stakeholders.map(sh => (
                <TableRow key={sh.id} className="hover:bg-slate-50/50 group/sh">
                  <TableCell>
                    <p className="font-semibold text-navy-950">{sh.name}</p>
                    <p className="text-xs text-gray-500">{sh.position}</p>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-slate-100">{sh.influence}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={sh.commitment === 'High' ? 'text-green-600 bg-green-50 border-green-200' : 'text-amber-600 bg-amber-50 border-amber-200'}>
                      {sh.commitment}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <select 
                      value={sh.engagementStatus} 
                      onChange={(e) => handleStatusChange(sh.id, e.target.value)}
                      className={`text-xs font-semibold rounded-full px-2.5 py-0.5 border outline-none cursor-pointer ${getStatusColor(sh.engagementStatus)}`}
                    >
                      <option value="Confirmed" className="bg-white text-navy-950">Confirmed</option>
                      <option value="Pending" className="bg-white text-navy-950">Pending</option>
                      <option value="Not Engaged" className="bg-white text-navy-950">Not Engaged</option>
                      <option value="Resistant" className="bg-white text-navy-950">Resistant</option>
                    </select>
                  </TableCell>
                  <TableCell className="text-sm">{sh.lastInteraction}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteStakeholder(sh.id)} className="h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover/sh:opacity-100 transition-opacity">
                      <Trash2 size={14} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
};
