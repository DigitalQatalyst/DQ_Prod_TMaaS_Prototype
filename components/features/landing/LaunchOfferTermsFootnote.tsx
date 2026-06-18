import Link from "next/link";
import {
  LAUNCH_ADVISORY_TERMS_FOOTNOTE_HINT,
  LAUNCH_ADVISORY_TERMS_LINK_LABEL,
  LAUNCH_ADVISORY_TERMS_PATH,
} from "@/lib/launchOffering";

const LaunchOfferTermsFootnote = () => (
  <p className="mt-5 text-[11px] leading-relaxed text-white/45">
    <Link
      href={LAUNCH_ADVISORY_TERMS_PATH}
      className="underline decoration-white/25 underline-offset-2 transition-colors hover:text-white/70 hover:decoration-white/50"
    >
      {LAUNCH_ADVISORY_TERMS_LINK_LABEL}
    </Link>
    <span aria-hidden className="mx-1.5 text-white/25">
      ·
    </span>
    {LAUNCH_ADVISORY_TERMS_FOOTNOTE_HINT}
  </p>
);

export default LaunchOfferTermsFootnote;
