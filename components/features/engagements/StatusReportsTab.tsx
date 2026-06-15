import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye } from "lucide-react";

export const StatusReportsTab = () => {
  const reports = [
    { id: 1, title: "Weekly Status Report - Week 12", date: "May 28, 2026", status: "Published" },
    { id: 2, title: "Weekly Status Report - Week 11", date: "May 21, 2026", status: "Published" },
    { id: 3, title: "Weekly Status Report - Week 10", date: "May 14, 2026", status: "Published" },
    { id: 4, title: "Monthly Executive Summary - April", date: "May 01, 2026", status: "Published" },
    { id: 5, title: "Weekly Status Report - Week 09", date: "May 07, 2026", status: "Published" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
          <FileText size={20} className="text-navy-950" />
          Status Reports
        </h3>
        <p className="text-sm text-gray-500">Access and download your weekly delivery status reports.</p>
      </div>

      <div className="grid gap-4">
        {reports.map((report) => (
          <Card key={report.id} className="shadow-sm hover:border-primary/30 transition-colors">
            <CardContent className="p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-950">{report.title}</h4>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                    <span>{report.date}</span>
                    <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                    <span className="text-green-600 font-medium">{report.status}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-2">
                  <Eye size={14} />
                  <span className="hidden sm:inline">View</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8 gap-2 text-navy-950 border-navy-200 hover:bg-navy-50">
                  <Download size={14} />
                  <span className="hidden sm:inline">Download</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
