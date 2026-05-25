import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockContractData, mockPaymentMilestones, mockContractChanges } from "@/data/mockEngagementDetails";
import { DollarSign, FileSignature } from "lucide-react";

const paymentStatusBadgeClass = (status: string) => {
  switch (status) {
    case "Paid":
      return "bg-green-50 text-green-700 border-green-200";
    case "Invoiced":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "Partially Paid":
      return "bg-amber-50 text-amber-700 border-amber-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
};

const milestoneLabelColors = [
  { border: "border-teal-500", bg: "bg-teal-50", text: "text-teal-700" },
  { border: "border-blue-500", bg: "bg-blue-50", text: "text-blue-700" },
  { border: "border-purple-500", bg: "bg-purple-50", text: "text-purple-700" },
  { border: "border-amber-500", bg: "bg-amber-50", text: "text-amber-700" },
];

export const CommercialsTab = () => {
  return (
    <div className="space-y-8">
      {/* 1. Contract Status */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
            <DollarSign size={20} className="text-green-500" />
            Contract & Payments
          </h3>
          <p className="text-sm text-gray-500">Manage financial health and milestone payments.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-slate-50/50">
            <CardContent className="pt-6">
              <p className="text-sm text-gray-500 mb-1">Total Contract Value</p>
              <p className="text-3xl font-bold text-navy-950">
                {mockContractData.currency} {mockContractData.contractValue.toLocaleString()}
              </p>
              <Badge variant="outline" className="mt-2 bg-white">{mockContractData.contractType}</Badge>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead>Payment Milestone</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Contract Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockPaymentMilestones.map((pm, index) => {
                  const c = milestoneLabelColors[index % milestoneLabelColors.length];
                  return (
                  <TableRow key={pm.id}>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-0.5 rounded-full ${c.border} border-l-4`} />
                        <Badge variant="outline" className={`${c.bg} ${c.text} border-current/20 font-mono px-2 py-0.5 rounded-md`}>
                          MS0{index + 1}
                        </Badge>
                        <span className="font-semibold text-navy-950 text-sm">{pm.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{mockContractData.currency} {pm.value.toLocaleString()}</TableCell>
                    <TableCell className="text-sm font-medium text-navy-950">{pm.contractDate}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={paymentStatusBadgeClass(pm.status)}>
                        {pm.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
                })}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* 2. Contract Changes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
            <FileSignature size={20} className="text-blue-500" />
            Contract Changes
          </h3>
          <p className="text-sm text-gray-500">Track changes impacting scope and timelines.</p>
        </div>

        <Card>
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead>Change Request</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Impact</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockContractChanges.map(cc => (
                <TableRow key={cc.id}>
                  <TableCell className="font-medium text-navy-950">
                    <span className="text-xs text-gray-500 mr-2">{cc.id}</span>
                    {cc.title}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200">{cc.status}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{cc.impact}</TableCell>
                  <TableCell className="text-sm font-semibold">{mockContractData.currency} {cc.value.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
};
