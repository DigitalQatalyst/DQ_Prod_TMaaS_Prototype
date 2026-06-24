"use client";

import Link from "next/link";
import { ExternalLink, Pencil } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { CustomerRequest } from "@/lib/types/requests";
import { formatRequestDate } from "@/lib/requests/format";
import { RequestStatusBadge } from "./RequestStatusBadge";
import { ServiceTypeBadge } from "./ServiceTypeBadge";
import { RequestStatusStepper } from "./RequestStatusStepper";
import { RequestActivityTimeline } from "./RequestActivityTimeline";

interface RequestDetailSheetProps {
  request: CustomerRequest | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RequestDetailSheet({ request, open, onOpenChange }: RequestDetailSheetProps) {
  if (!request) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full overflow-y-auto border-navy-100/60 p-0 sm:max-w-[480px]"
      >
        <div className="border-b border-navy-100/60 px-6 py-5">
          <SheetHeader className="space-y-4 text-left">
            <SheetTitle className="sr-only">Request Details</SheetTitle>
            <p className="text-lg font-semibold text-navy-950">Request Details</p>
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <Pencil size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-navy-950">{request.title}</h3>
                <p className="font-mono text-xs text-navy-950/50">{request.referenceNo}</p>
              </div>
              <RequestStatusBadge status={request.status} />
            </div>
          </SheetHeader>
        </div>

        <div className="space-y-6 px-6 py-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-950/40">
                Service Type
              </p>
              <div className="mt-1">
                <ServiceTypeBadge type={request.serviceType} />
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-950/40">
                Submission Date
              </p>
              <p className="mt-1 text-sm text-navy-950">
                {formatRequestDate(request.submittedAt)}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-950/40">
                Last Updated
              </p>
              <p className="mt-1 text-sm text-navy-950">
                {formatRequestDate(request.updatedAt)}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-950/40">
                Delivery Lead
              </p>
              <p className="mt-1 text-sm text-navy-950">
                {request.deliveryLead ?? "—"}
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-950/40">
              Description
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy-950/80">{request.description}</p>
            {request.marketplaceSlug && (
              <Link
                href={`/marketplace/${request.variantId}`}
                className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                View on marketplace
                <ExternalLink size={14} />
              </Link>
            )}
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-navy-950/40">
              Status
            </p>
            <RequestStatusStepper request={request} />
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-navy-950/40">
              Activity Timeline
            </p>
            <RequestActivityTimeline entries={request.timeline} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
