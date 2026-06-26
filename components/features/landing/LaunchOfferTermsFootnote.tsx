import Link from "next/link";
import {
  LAUNCH_ADVISORY_TERMS_FOOTNOTE,
  LAUNCH_ADVISORY_TERMS_LINK_LABEL,
  LAUNCH_ADVISORY_TERMS_PATH,
} from "@/lib/launchOffering";

const LaunchOfferTermsFootnote = () => (
  <p className="mx-auto mt-6 max-w-lg text-left text-[13px] leading-relaxed text-white/90 [text-shadow:0_1px_3px_rgba(3,15,53,0.35)] sm:text-center sm:text-sm">
    <span aria-hidden className="text-white">
      *
    </span>
    {LAUNCH_ADVISORY_TERMS_FOOTNOTE}{" "}
    <Link
      href={LAUNCH_ADVISORY_TERMS_PATH}
      className="font-semibold text-white underline decoration-white/70 underline-offset-2 transition-colors hover:decoration-white"
    >
      {LAUNCH_ADVISORY_TERMS_LINK_LABEL}
    </Link>
  </p>
);

export default LaunchOfferTermsFootnote;
