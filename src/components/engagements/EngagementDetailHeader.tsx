import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  engagementHealthIndicators,
  computeOverallHealth,
  getHealthStatusBadgeClass,
} from "@/data/engagementHealthIndicators";
import { ChevronRight } from "lucide-react";

interface EngagementDetailHeaderProps {
  name: string;
  organization: string;
  engagementId: string;
  deliveryLead: string;
  clientLogo?: string;
  type: string;
  status: string;
  startDate: string;
  forecastEndDate: string;
  onNavigateToSevenKeys: () => void;
}

export const EngagementDetailHeader = ({
  name,
  organization,
  engagementId,
  deliveryLead,
  clientLogo,
  type,
  status,
  startDate,
  forecastEndDate,
  onNavigateToSevenKeys,
}: EngagementDetailHeaderProps) => {
  const overall = computeOverallHealth(engagementHealthIndicators);

  return (
    <header className="bg-white p-6 rounded-2xl border border-navy-100 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="flex gap-4 min-w-0">
          <div
            className="h-14 w-14 shrink-0 rounded-xl bg-navy-950 text-white flex items-center justify-center font-bold text-sm tracking-wide"
            aria-hidden
          >
            {clientLogo ?? organization.slice(0, 2).toUpperCase()}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold tracking-tight text-navy-950">{name}</h1>
              <Badge variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">{type}</Badge>
              <Badge variant="outline" className="text-navy-950 border-navy-200">{status}</Badge>
            </div>
            <p className="text-sm text-gray-500 mb-4">{organization}</p>
            
            {/* Summary Tags (editable in future) */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="bg-slate-50 text-slate-600 hover:bg-slate-100 px-3 py-1 font-medium border border-slate-200">
                <span className="text-gray-400 mr-1.5">Start:</span> {startDate}
              </Badge>
              <Badge variant="secondary" className="bg-slate-50 text-slate-600 hover:bg-slate-100 px-3 py-1 font-medium border border-slate-200">
                <span className="text-gray-400 mr-1.5">Forecast:</span> {forecastEndDate}
              </Badge>
              <Badge variant="secondary" className="bg-slate-50 text-slate-600 hover:bg-slate-100 px-3 py-1 font-medium border border-slate-200">
                <span className="text-gray-400 mr-1.5">Lead:</span> {deliveryLead}
              </Badge>
              
              <div 
                onClick={onNavigateToSevenKeys}
                className={`cursor-pointer inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:opacity-80 ${getHealthStatusBadgeClass(overall.status)}`}
              >
                <span className="opacity-70 mr-1.5">Health:</span> {overall.label}
                <ChevronRight size={14} className="ml-1 opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
