"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockStakeholders } from "@/data/mockEngagementDetails" // TODO: Task 9 — wire up data;
import { Users, Plus, Trash2, Pencil, X } from "lucide-react";

type StakeholderType =
  | "Project Sponsor"
  | "Project Owner"
  | "Project Manager"
  | "Project Team"
  | "External";

interface Stakeholder {
  id: string;
  name: string;
  position: string;
  organisation: string;
  type: string;
  influence: string;
  commitment: string;
  lastInteraction: string;
  email: string;
  engagementStatus: string;
}

const STAKEHOLDER_TYPES: { value: StakeholderType; label: string; description: string; minEngagement: string }[] = [
  { value: "Project Sponsor",  label: "Project Sponsor",  description: "Executive accountable for project.", minEngagement: "Quarterly" },
  { value: "Project Owner",    label: "Project Owner",    description: "Business owner.",                  minEngagement: "Monthly"  },
  { value: "Project Manager",  label: "Project Manager",  description: "Day-to-day counterpart.",           minEngagement: "Weekly"   },
  { value: "Project Team",     label: "Project Team",     description: "Operational contributors.",         minEngagement: "-"        },
  { value: "External",         label: "External",         description: "Other departments outside primary delivery scope.", minEngagement: "-" },
];

const INFLUENCE_LEVELS = ["High", "Medium", "Low"];
const COMMITMENT_LEVELS = ["High", "Medium", "Low"];
const ENGAGEMENT_STATUSES = ["Confirmed", "Pending", "Not Engaged", "Resistant"];

const getTypeBadgeClass = (type: string) => {
  switch (type) {
    case "Project Sponsor":  return "bg-purple-50 text-purple-700 border-purple-200";
    case "Project Owner":    return "bg-blue-50 text-blue-700 border-blue-200";
    case "Project Manager":  return "bg-teal-50 text-teal-700 border-teal-200";
    case "Project Team":     return "bg-slate-100 text-slate-700 border-slate-200";
    case "External":         return "bg-orange-50 text-orange-700 border-orange-200";
    default:                 return "bg-slate-100 text-slate-600 border-slate-200";
  }
};

const getEngagementStatusColor = (status: string) => {
  switch (status) {
    case "Confirmed":   return "text-green-700 bg-green-50 border-green-200";
    case "Pending":     return "text-blue-700 bg-blue-50 border-blue-200";
    case "Not Engaged": return "text-gray-600 bg-gray-50 border-gray-200";
    case "Resistant":   return "text-red-600 bg-red-50 border-red-200";
    default:            return "text-gray-600 bg-gray-50 border-gray-200";
  }
};

const getInfluenceBadgeClass = (level: string) => {
  switch (level) {
    case "High":   return "bg-navy-950 text-white border-navy-950";
    case "Medium": return "bg-navy-200 text-navy-900 border-navy-300";
    case "Low":    return "bg-slate-100 text-slate-600 border-slate-200";
    default:       return "bg-slate-100 text-slate-600 border-slate-200";
  }
};

const getCommitmentBadgeClass = (level: string) => {
  switch (level) {
    case "High":   return "text-green-700 bg-green-50 border-green-200";
    case "Medium": return "text-amber-700 bg-amber-50 border-amber-200";
    case "Low":    return "text-red-700 bg-red-50 border-red-200";
    default:       return "text-slate-600 bg-slate-50 border-slate-200";
  }
};

// ── Edit Modal ────────────────────────────────────────────────────────────────
const EditStakeholderModal = ({
  stakeholder,
  onSave,
  onClose,
}: {
  stakeholder: Stakeholder;
  onSave: (updated: Stakeholder) => void;
  onClose: () => void;
}) => {
  const [form, setForm] = useState<Stakeholder>({ ...stakeholder });
  const set = (field: keyof Stakeholder, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg border border-navy-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-navy-50">
          <h2 className="text-base font-bold text-navy-950">Edit Stakeholder</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Name */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
            <input
              value={form.name}
              onChange={e => set("name", e.target.value)}
              className="w-full rounded-xl border border-navy-100 px-3 py-2 text-sm text-navy-950 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Position / Role</label>
            <input
              value={form.position}
              onChange={e => set("position", e.target.value)}
              className="w-full rounded-xl border border-navy-100 px-3 py-2 text-sm text-navy-950 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
            />
          </div>

          {/* Organisation */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Organisation</label>
            <input
              value={form.organisation}
              onChange={e => set("organisation", e.target.value)}
              className="w-full rounded-xl border border-navy-100 px-3 py-2 text-sm text-navy-950 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={e => set("email", e.target.value)}
              className="w-full rounded-xl border border-navy-100 px-3 py-2 text-sm text-navy-950 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
            />
          </div>

          {/* Stakeholder Type */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Stakeholder Type</label>
            <div className="grid grid-cols-1 gap-2">
              {STAKEHOLDER_TYPES.map(t => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => set("type", t.value)}
                  className={`flex items-start gap-3 rounded-xl border px-3 py-2.5 text-left transition-all ${
                    form.type === t.value
                      ? "border-orange-400 bg-orange-50 ring-2 ring-orange-200"
                      : "border-navy-100 hover:border-navy-200 bg-white"
                  }`}
                >
                  <span className={`mt-0.5 inline-block h-2.5 w-2.5 rounded-full shrink-0 ${form.type === t.value ? "bg-orange-500" : "bg-slate-300"}`} />
                  <span>
                    <span className="block text-xs font-semibold text-navy-950">{t.label}</span>
                    <span className="block text-[10px] text-gray-500 leading-snug">
                      {t.description}
                      {t.minEngagement !== "-" && (
                        <> · <span className="font-medium">Min. {t.minEngagement}</span></>
                      )}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Influence & Commitment (side by side) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Influence</label>
              <div className="flex flex-col gap-1.5">
                {INFLUENCE_LEVELS.map(l => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => set("influence", l)}
                    className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all ${
                      form.influence === l
                        ? "border-orange-400 bg-orange-50 text-orange-700 ring-2 ring-orange-200"
                        : "border-navy-100 text-navy-700 hover:border-navy-200 bg-white"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Commitment</label>
              <div className="flex flex-col gap-1.5">
                {COMMITMENT_LEVELS.map(l => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => set("commitment", l)}
                    className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all ${
                      form.commitment === l
                        ? "border-orange-400 bg-orange-50 text-orange-700 ring-2 ring-orange-200"
                        : "border-navy-100 text-navy-700 hover:border-navy-200 bg-white"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Engagement Status */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Engagement Status</label>
            <div className="flex flex-wrap gap-2">
              {ENGAGEMENT_STATUSES.map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => set("engagementStatus", s)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition-all ${
                    form.engagementStatus === s
                      ? "border-orange-400 bg-orange-50 text-orange-700 ring-2 ring-orange-200"
                      : "border-navy-100 text-navy-700 hover:border-navy-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Last Interaction */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Last Interaction</label>
            <input
              type="date"
              value={form.lastInteraction}
              onChange={e => set("lastInteraction", e.target.value)}
              className="w-full rounded-xl border border-navy-100 px-3 py-2 text-sm text-navy-950 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-6 py-4 border-t border-navy-50 bg-slate-50/50">
          <Button variant="outline" size="sm" onClick={onClose} className="rounded-xl">
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={() => { onSave(form); onClose(); }}
            className="rounded-xl bg-navy-950 hover:bg-navy-900 text-white"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

// ── Main Tab ──────────────────────────────────────────────────────────────────
export const StakeholdersTab = () => {
  const [stakeholders, setStakeholders] = useState<Stakeholder[]>(
    (mockStakeholders as Stakeholder[])
  );
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSave = (updated: Stakeholder) => {
    setStakeholders(prev => prev.map(sh => sh.id === updated.id ? updated : sh));
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    setStakeholders(prev => prev.map(sh => sh.id === id ? { ...sh, engagementStatus: newStatus } : sh));
  };

  const handleAddStakeholder = () => {
    const newId = `SH${String(stakeholders.length + 1).padStart(3, "0")}`;
    setStakeholders(prev => [...prev, {
      id: newId,
      name: "New Stakeholder",
      position: "Role / Position",
      organisation: "Client",
      type: "Project Team" as StakeholderType,
      influence: "Medium",
      commitment: "Medium",
      lastInteraction: new Date().toISOString().split("T")[0] ?? "",
      email: "new.stakeholder@example.com",
      engagementStatus: "Pending",
    }]);
    setEditingId(newId);
  };

  const handleDeleteStakeholder = (id: string) => {
    setStakeholders(prev => prev.filter(sh => sh.id !== id));
  };

  const editingStakeholder = stakeholders.find(sh => sh.id === editingId) ?? null;

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
                <TableHead>Type</TableHead>
                <TableHead>Influence</TableHead>
                <TableHead>Commitment</TableHead>
                <TableHead>Engagement Status</TableHead>
                <TableHead>Last Interaction</TableHead>
                <TableHead className="w-20" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {stakeholders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10 text-gray-400">No stakeholders mapped.</TableCell>
                </TableRow>
              ) : stakeholders.map(sh => (
                <TableRow key={sh.id} className="hover:bg-slate-50/50 group/sh">
                  <TableCell>
                    <p className="font-semibold text-sm text-navy-950">{sh.name}</p>
                    <p className="text-[11px] text-gray-500">{sh.position}</p>
                    <p className="text-[10px] text-gray-400">{sh.organisation}</p>
                  </TableCell>

                  <TableCell>
                    <Badge variant="outline" className={`text-[10px] font-semibold whitespace-nowrap ${getTypeBadgeClass(sh.type)}`}>
                      {sh.type || "-"}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    <Badge variant="outline" className={`text-[10px] font-semibold ${getInfluenceBadgeClass(sh.influence)}`}>
                      {sh.influence}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    <Badge variant="outline" className={`text-[10px] font-semibold ${getCommitmentBadgeClass(sh.commitment)}`}>
                      {sh.commitment}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    <select
                      value={sh.engagementStatus}
                      onChange={(e) => handleStatusChange(sh.id, e.target.value)}
                      className={`text-xs font-semibold rounded-full px-2.5 py-0.5 border outline-none cursor-pointer ${getEngagementStatusColor(sh.engagementStatus)}`}
                    >
                      {ENGAGEMENT_STATUSES.map(s => (
                        <option key={s} value={s} className="bg-white text-navy-950">{s}</option>
                      ))}
                    </select>
                  </TableCell>

                  <TableCell className="text-xs text-gray-600">{sh.lastInteraction}</TableCell>

                  <TableCell>
                    <div className="flex items-center gap-1 opacity-0 group-hover/sh:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setEditingId(sh.id)}
                        className="h-8 w-8 text-gray-400 hover:text-navy-700 hover:bg-navy-50"
                      >
                        <Pencil size={13} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteStakeholder(sh.id)}
                        className="h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-red-50"
                      >
                        <Trash2 size={13} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Stakeholder Type Legend */}
      <section>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Stakeholder Type Guide</p>
        <div className="flex flex-wrap gap-3">
          {STAKEHOLDER_TYPES.map(t => (
            <div key={t.value} className={`flex items-start gap-2 rounded-xl border px-3 py-2.5 bg-white ${getTypeBadgeClass(t.value).replace("text-", "border-").split(" ")[0]}`}>
              <Badge variant="outline" className={`text-[10px] font-semibold shrink-0 mt-0.5 ${getTypeBadgeClass(t.value)}`}>
                {t.label}
              </Badge>
              <span className="text-[10px] text-gray-500 leading-snug">
                {t.description}
                {t.minEngagement !== "-" && (
                  <> · <span className="font-medium text-gray-700">Min. {t.minEngagement}</span></>
                )}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Edit Modal */}
      {editingStakeholder && (
        <EditStakeholderModal
          stakeholder={editingStakeholder}
          onSave={handleSave}
          onClose={() => setEditingId(null)}
        />
      )}
    </div>
  );
};
