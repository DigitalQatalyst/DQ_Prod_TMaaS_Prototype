import Link from "next/link";
import { Package } from "lucide-react";
import type { ServiceBundle } from "@/data/bundles" // TODO: Task 9 — wire up data;

type BundleProductCardProps = {
  bundle: ServiceBundle;
};

const BundleProductCard = ({ bundle }: BundleProductCardProps) => {
  const detailUrl = `/bundle/${bundle.id}`;

  return (
    <article className="group/card relative flex h-full flex-col rounded-xl border border-navy-100 bg-white p-4 text-left shadow-sm transition hover:border-navy-200 hover:shadow-md">
      <Link href={detailUrl} className="flex min-h-0 flex-1 flex-col pr-9">
        <div className="mb-2 flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
            {(bundle as unknown as { category?: string }).category || "Bundle"}
          </span>
          <span className="rounded border border-orange-100 bg-orange-50 px-1.5 py-0.5 text-[9px] font-semibold text-orange-700 inline-flex items-center gap-1">
            <Package size={10} />
            {bundle.servicesIncludedCount} Services Included
          </span>
        </div>
        <h3 className="text-sm font-semibold leading-snug text-dq-navy">
          {bundle.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-gray-500">
          {bundle.outcomeStatement}
        </p>
        <p className="mt-auto pt-3 text-sm text-navy-950">
          <span className="font-bold">{bundle.price}</span>
          <span className="text-gray-400"> · {bundle.timeline}</span>
        </p>
      </Link>
    </article>
  );
};

export default BundleProductCard;
