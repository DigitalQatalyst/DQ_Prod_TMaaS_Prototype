import Link from "next/link";
import {
  LAUNCH_ADVISORY_TERMS_FOOTNOTE,
  LAUNCH_ADVISORY_TERMS_LINK_LABEL,
  LAUNCH_ADVISORY_TERMS_PATH,
} from "@/lib/launchOffering";

const LaunchOfferTermsFootnote = () => (
  <p className="mx-auto mt-5 max-w-lg text-left text-[10px] leading-relaxed text-white/40 sm:text-center">
    <span aria-hidden className="text-white/50">
      *
    </span>
    {LAUNCH_ADVISORY_TERMS_FOOTNOTE}
    <Link
      href={LAUNCH_ADVISORY_TERMS_PATH}
      className="underline decoration-white/20 underline-offset-2 transition-colors hover:text-white/60 hover:decoration-white/40"
    >
      {LAUNCH_ADVISORY_TERMS_LINK_LABEL}
    </Link>
    .
  </p>
);

export default LaunchOfferTermsFootnote;
