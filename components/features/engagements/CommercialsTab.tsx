"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  mockContractData,
  mockPaymentMilestones,
  mockContractChanges,
  mockCommercialDocuments,
} from "@/data/mockEngagementDetails"; // TODO: Task 9 — wire up data;
import {
  DollarSign,
  FileSignature,
  Edit3,
  Download,
  FileText,
  Paperclip,
  Calendar,
  Layers,
  Archive,
  Plus,
  Eye,
} from "lucide-react";

const paymentStatusBadgeClass = (status: string) => {
  switch (status) {
    case "Paid":
      return "bg-green-50 text-green-700 border-green-200";
    case "Invoiced":
      return "bg-slate-50 text-slate-700 border-slate-200";
    case "Partially Paid":
      return "bg-amber-50 text-amber-700 border-amber-200";
    default:
      return "bg-slate-100 text-slate-500 border-slate-200";
  }
};

const changeStatusBadgeClass = (status: string) => {
  switch (status) {
    case "Signed":
    case "Agreed":
      return "bg-green-50 text-green-700 border-green-200";
    case "In Negotiation":
    case "In Specification":
      return "bg-amber-50 text-amber-700 border-amber-200";
    default:
      return "bg-slate-50 text-slate-700 border-slate-200";
  }
};

const documentTypeBadgeClass = (type: string) => {
  switch (type) {
    case "Contract":
      return "bg-navy-50 text-navy-700 border-navy-200";
    case "Invoice":
      return "bg-green-50 text-green-700 border-green-200";
    case "Change":
      return "bg-amber-50 text-amber-700 border-amber-200";
    default:
      return "bg-slate-50 text-slate-700 border-slate-200";
  }
};

const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const CommercialsTab = () => {
  const [contractData, setContractData] = useState(mockContractData);

  const handleEditStatus = () => {
    // Mocking an edit interaction for the prototype
    const newValue = window.prompt(
      "Update Total Contract Value:",
      contractData.contractValue.toString()
    );
    if (newValue && !isNaN(Number(newValue))) {
      setContractData({ ...contractData, contractValue: Number(newValue) });
    }
  };

  const receivedPercentage =
    Math.round((contractData.receivedAmount / contractData.contractValue) * 100) || 0;

  return (
    <div className="space-y-10">
      {/* SECTION 1: Contract Status Card */}
      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <DollarSign size={20} className="text-navy-950" />
              Contract Status
            </h3>
            <p className="text-sm text-gray-500">High-level financial summary of the engagement.</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleEditStatus}
            className="gap-2 text-navy-700"
          >
            <Edit3 size={14} /> Edit Summary
          </Button>
        </div>

        <Card className="border-navy-100 shadow-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-wrap lg:flex-nowrap divide-y lg:divide-y-0 lg:divide-x divide-navy-100/60">
              <div className="p-6 flex-1 min-w-[200px]">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Total Value
                </p>
                <p className="text-3xl font-bold text-navy-950 mb-3 tracking-tight">
                  {formatCurrency(contractData.contractValue, contractData.currency)}
                </p>
                <Badge
                  variant="outline"
                  className="bg-slate-50 text-slate-700 border-slate-200 font-mono text-xs"
                >
                  {contractData.contractNumber}
                </Badge>
              </div>

              <div className="p-6 flex-1 min-w-[150px]">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Signed Date
                </p>
                <p className="font-semibold text-navy-950 flex items-center gap-2 text-base">
                  <Calendar size={16} className="text-gray-400" />
                  {contractData.signedDate}
                </p>
              </div>

              <div className="p-6 flex-1 min-w-[150px]">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Active Changes
                </p>
                <p className="font-semibold text-navy-950 flex items-center gap-2 text-base">
                  <Layers size={16} className="text-gray-400" />
                  {contractData.numberOfChanges}
                </p>
              </div>

              <div className="p-6 flex-1 min-w-[150px]">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Invoiced
                </p>
                <p className="font-semibold text-navy-950 text-base">
                  {formatCurrency(contractData.invoicedAmount, contractData.currency)}
                </p>
              </div>

              <div className="p-6 flex-1 min-w-[200px]">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Received
                </p>
                <div className="flex items-end justify-between mb-2">
                  <p className="font-semibold text-green-600 text-base">
                    {formatCurrency(contractData.receivedAmount, contractData.currency)}
                  </p>
                  <span className="text-xs font-bold text-gray-500">{receivedPercentage}%</span>
                </div>
                <Progress
                  value={receivedPercentage}
                  className="h-1.5 bg-gray-100"
                  indicatorClassName="bg-green-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* SECTION 2: Payment Milestones */}
      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <DollarSign size={20} className="text-navy-950" />
              Payment Milestones
            </h3>
            <p className="text-sm text-gray-500">
              Tracking financial delivery against the contract.
            </p>
          </div>
          <Button
            size="sm"
            className="gap-2 bg-navy-950 hover:bg-navy-900 text-white rounded-xl shadow-sm"
          >
            <Plus size={14} /> Add Milestone
          </Button>
        </div>

        <Card className="border-navy-100 shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="w-[25%]">Payment Milestone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Paid Amount</TableHead>
                <TableHead>Outstanding</TableHead>
                <TableHead>Contracted Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPaymentMilestones.map((pm) => (
                <TableRow key={pm.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-navy-950">
                    <span className="text-xs text-gray-400 mr-2 font-mono">{pm.id}</span>
                    {pm.name}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={paymentStatusBadgeClass(pm.status ?? "")}>
                      {pm.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold text-navy-950">
                    {formatCurrency(pm.value ?? 0, contractData.currency)}
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">
                    {formatCurrency(pm.paidAmount ?? 0, contractData.currency)}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-amber-600">
                    {(pm.outstandingAmount ?? 0) > 0
                      ? formatCurrency(pm.outstandingAmount ?? 0, contractData.currency)
                      : "-"}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-navy-950">
                    {pm.contractDate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* SECTION 3: Contract Changes */}
      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <FileSignature size={20} className="text-navy-950" />
              Contract Changes
            </h3>
            <p className="text-sm text-gray-500">
              Track changes impacting scope, timelines, or budget.
            </p>
          </div>
          <Button
            size="sm"
            className="gap-2 bg-navy-950 hover:bg-navy-900 text-white rounded-xl shadow-sm"
          >
            <Plus size={14} /> Add Change
          </Button>
        </div>

        <Card className="border-navy-100 shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="w-[30%]">Change Request</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Affected Milestones</TableHead>
                <TableHead>Requested By</TableHead>
                <TableHead>Value Impact</TableHead>
                <TableHead className="text-right">Attachments</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockContractChanges.map((cc) => (
                <TableRow key={cc.id} className="hover:bg-slate-50/50 group">
                  <TableCell>
                    <div className="font-semibold text-navy-950 mb-1">
                      <span className="text-xs text-gray-400 mr-2 font-mono">{cc.id}</span>
                      {cc.subject}
                    </div>
                    <div className="text-xs text-gray-500 leading-snug">{cc.description}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={changeStatusBadgeClass(cc.status)}>
                      {cc.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1 flex-wrap">
                      {cc.milestonesAffected.map((m) => (
                        <Badge
                          key={m}
                          variant="outline"
                          className="text-[10px] bg-slate-50 text-slate-600 border-slate-200"
                        >
                          {m}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-slate-50 text-slate-700 border-slate-200"
                    >
                      {cc.requestedBy}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold text-navy-950">
                    {cc.value === 0 ? "-" : formatCurrency(cc.value, contractData.currency)}
                  </TableCell>
                  <TableCell className="text-right">
                    {cc.attachments > 0 ? (
                      <Button variant="ghost" size="sm" className="text-navy-600 h-8 px-2">
                        <Paperclip size={14} className="mr-1.5" />
                        {cc.attachments} File{cc.attachments > 1 ? "s" : ""}
                      </Button>
                    ) : (
                      <span className="text-xs text-gray-400 mr-3">-</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* SECTION 4: Commercial Documents */}
      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
              <Archive size={20} className="text-navy-950" />
              Commercial Documents
            </h3>
            <p className="text-sm text-gray-500">
              Repository for executed commercial agreements and invoices.
            </p>
          </div>
          <Button
            size="sm"
            className="gap-2 bg-navy-950 hover:bg-navy-900 text-white rounded-xl shadow-sm"
          >
            <Plus size={14} /> Upload Document
          </Button>
        </div>

        <Card className="border-navy-100 shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="w-[40%]">Document</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCommercialDocuments.map((doc) => (
                <TableRow key={doc.id} className="hover:bg-slate-50/50">
                  <TableCell>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <FileText size={16} className="text-navy-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy-950 mb-0.5">{doc.title}</p>
                        <p className="text-xs text-gray-500">{doc.description}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={documentTypeBadgeClass(doc.documentType)}>
                      {doc.documentType}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-navy-600 hover:text-navy-950 hover:bg-navy-50 h-8"
                    >
                      <Eye size={14} className="mr-2" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {mockCommercialDocuments.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-8 text-sm text-gray-400">
                    No commercial documents uploaded.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
};
