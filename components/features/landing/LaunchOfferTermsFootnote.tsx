import Link from "next/link";
import {
  LAUNCH_ADVISORY_TERMS_FOOTNOTE,
  LAUNCH_ADVISORY_TERMS_LINK_LABEL,
  LAUNCH_ADVISORY_TERMS_PATH,
} from "@/lib/launchOffering";

const LaunchOfferTermsFootnote = () => (
  <p className="mx-auto mt-5 max-w-md text-left text-[11px] leading-relaxed text-white/65 sm:text-center">
    <span aria-hidden className="text-white/80">
      *
    </span>
    {LAUNCH_ADVISORY_TERMS_FOOTNOTE}{" "}
    <Link
      href={LAUNCH_ADVISORY_TERMS_PATH}
      className="font-medium text-white/80 underline decoration-white/40 underline-offset-2 transition-colors hover:text-white hover:decoration-white/70"
    >
      {LAUNCH_ADVISORY_TERMS_LINK_LABEL}
    </Link>
  </p>
);

export default LaunchOfferTermsFootnote;
