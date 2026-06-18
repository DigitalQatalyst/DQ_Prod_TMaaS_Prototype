import Link from "next/link";
import {
  LAUNCH_ADVISORY_TERMS,
  LAUNCH_ADVISORY_TERMS_LINK_LABEL,
  LAUNCH_ADVISORY_TERMS_PATH,
} from "@/lib/launchOffering";
import { cn } from "@/lib/utils";

interface LaunchOfferTermsListProps {
  className?: string;
  showFullTermsLink?: boolean;
}

const LaunchOfferTermsList = ({
  className,
  showFullTermsLink = true,
}: LaunchOfferTermsListProps) => (
  <div className={cn("space-y-3", className)}>
    <ul className="space-y-1.5 text-[13px] leading-relaxed text-gray-600">
      {LAUNCH_ADVISORY_TERMS.map((term) => (
        <li key={term} className="flex gap-2">
          <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-dq-orange/70" />
          <span>{term}</span>
        </li>
      ))}
    </ul>
    {showFullTermsLink && (
      <Link
        href={LAUNCH_ADVISORY_TERMS_PATH}
        className="inline-block text-[13px] font-medium text-dq-orange transition-colors hover:text-dq-navy"
      >
        {LAUNCH_ADVISORY_TERMS_LINK_LABEL} →
      </Link>
    )}
  </div>
);

export default LaunchOfferTermsList;
