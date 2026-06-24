"use client";

import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  engagementHealthIndicators,
  getHealthStatusBadgeClass,
  type EngagementHealthIndicator,
  type IndicatorNavigationTarget,
} from "@/data/engagementHealthIndicators"; // TODO: Task 9 — wire up data;

const getStatusIcon = (status: string) => {
  if (status === "green") return <CheckCircle2 size={16} className="text-green-600" />;
  if (status === "amber") return <AlertCircle size={16} className="text-amber-600" />;
  return <XCircle size={16} className="text-red-600" />;
};

interface HealthIndicatorsListProps {
  variant?: "overview" | "modal";
  onNavigate?: (target: IndicatorNavigationTarget) => void;
}

const IndicatorRow = ({
  ind,
  variant,
  onNavigate,
}: {
  ind: EngagementHealthIndicator;
  variant: "overview" | "modal";
  onNavigate?: (target: IndicatorNavigationTarget) => void;
}) => (
  <div
    className={
      variant === "modal"
        ? "p-4 rounded-xl border border-border bg-slate-50/50"
        : "p-4 flex items-start justify-between gap-3 bg-white"
    }
  >
    <div className="flex items-start justify-between gap-3 w-full">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          {variant === "modal" && getStatusIcon(ind.status)}
          <p
            className={`font-semibold text-navy-950 ${variant === "overview" ? "text-sm" : "text-base"}`}
          >
            {ind.name}
          </p>
          {variant === "modal" && (
            <Badge
              variant="outline"
              className={`capitalize ${getHealthStatusBadgeClass(ind.status)}`}
            >
              {ind.status}
            </Badge>
          )}
        </div>
        <p
          className={`text-gray-500 mt-1 ${
            variant === "overview" ? "text-xs" : "text-xs font-semibold text-gray-700"
          }`}
        >
          {ind.currentReason}
        </p>
        {variant === "modal" && (
          <p className="text-[10px] text-gray-500 italic border-l-2 pl-2 border-gray-200 mt-2">
            {ind.logic}
          </p>
        )}
      </div>

      <div className="flex flex-col items-end gap-2 shrink-0">
        {variant === "overview" && (
          <Badge
            variant="outline"
            className={`capitalize ${getHealthStatusBadgeClass(ind.status)} flex items-center gap-1`}
          >
            {getStatusIcon(ind.status)}
            {ind.status}
          </Badge>
        )}
        {onNavigate && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onNavigate(ind.navigation)}
            className="h-8 px-3 text-xs font-semibold text-navy-950 border-navy-100 hover:bg-slate-50"
          >
            View
          </Button>
        )}
      </div>
    </div>
  </div>
);

export const HealthIndicatorsList = ({
  variant = "overview",
  onNavigate,
}: HealthIndicatorsListProps) => {
  if (variant === "modal") {
    return (
      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
        {engagementHealthIndicators.map((ind) => (
          <IndicatorRow
            key={ind.id}
            ind={ind}
            variant="modal"
            {...(onNavigate ? { onNavigate } : {})}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="divide-y divide-border">
      {engagementHealthIndicators.map((ind) => (
        <IndicatorRow
          key={ind.id}
          ind={ind}
          variant="overview"
          {...(onNavigate ? { onNavigate } : {})}
        />
      ))}
    </div>
  );
};
