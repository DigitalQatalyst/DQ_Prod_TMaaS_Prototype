import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  engagementHealthIndicators,
  computeOverallHealth,
  getHealthStatusColor,
  getHealthStatusBadgeClass,
} from "@/data/engagementHealthIndicators";
import { ChevronRight } from "lucide-react";

interface EngagementDetailHeaderProps {
  name: string;
  organization: string;
  engagementId: string;
  deliveryLead: string;
  clientLogo?: string;
  onViewStatusDetails: () => void;
}

const segmentTitles = engagementHealthIndicators.map((i) => `${i.name}: ${i.status}`);

export const EngagementDetailHeader = ({
  name,
  organization,
  engagementId,
  deliveryLead,
  clientLogo,
  onViewStatusDetails,
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
            <h1 className="text-3xl font-bold tracking-tight text-navy-950">{name}</h1>
            <dl className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <dt className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                  Organization
                </dt>
                <dd className="font-semibold text-navy-950">{organization}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                  Engagement ID
                </dt>
                <dd className="font-semibold text-navy-950 font-mono">{engagementId}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                  Delivery Lead
                </dt>
                <dd className="font-semibold text-navy-950">{deliveryLead}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="lg:min-w-[280px] lg:text-right shrink-0">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
            Overall Status
          </p>
          <Badge variant="outline" className={`text-sm font-semibold ${getHealthStatusBadgeClass(overall.status)}`}>
            {overall.label}
          </Badge>

          <button
            type="button"
            onClick={onViewStatusDetails}
            className="mt-4 w-full lg:max-w-[240px] lg:ml-auto group cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2"
            aria-label="View automated project status details for 7 key indicators"
          >
            <div className="flex gap-1">
              {engagementHealthIndicators.map((ind, index) => (
                <div
                  key={ind.id}
                  title={segmentTitles[index]}
                  className={`h-2 flex-1 rounded-full transition-opacity group-hover:opacity-80 ${getHealthStatusColor(ind.status)}`}
                />
              ))}
            </div>
            <p className="text-[10px] text-gray-400 mt-1.5 text-left lg:text-right">
              7 key indicators
            </p>
          </button>

          <Button
            variant="ghost"
            size="sm"
            onClick={onViewStatusDetails}
            className="mt-2 gap-1 text-navy-950 hover:text-navy-950 lg:ml-auto h-8 px-2"
          >
            View details
            <ChevronRight size={14} />
          </Button>
        </div>
      </div>
    </header>
  );
};
