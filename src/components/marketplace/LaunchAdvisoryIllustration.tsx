/**
 * Abstract ribbon illustration for the launch advisory band.
 * CSS/SVG only — dq-orange → navy gradient, aligned with corp web tokens.
 */
const LaunchAdvisoryIllustration = ({ className }: { className?: string }) => {
  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 480 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="launch-ribbon-a" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FB5535" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#FF8A65" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#030F35" stopOpacity="0.92" />
          </linearGradient>
          <linearGradient id="launch-ribbon-b" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#030F35" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FB5535" stopOpacity="0.55" />
          </linearGradient>
          <radialGradient id="launch-glow" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#FB5535" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FB5535" stopOpacity="0" />
          </radialGradient>
          <filter id="launch-soft-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        <ellipse cx="240" cy="130" rx="160" ry="100" fill="url(#launch-glow)" filter="url(#launch-soft-blur)" />

        <path
          d="M-40 210 C 80 150, 160 250, 280 190 S 440 120, 520 170 L 520 250 C 420 280, 300 220, 180 260 S 40 290, -40 250 Z"
          fill="url(#launch-ribbon-a)"
          opacity="0.92"
        />
        <path
          d="M-20 235 C 100 195, 200 265, 310 215 S 460 175, 500 205 L 500 265 C 390 295, 260 250, 150 275 S 20 300, -20 270 Z"
          fill="url(#launch-ribbon-b)"
          opacity="0.45"
        />

        <ellipse cx="118" cy="98" rx="36" ry="36" fill="#FB5535" fillOpacity="0.18" />
        <ellipse cx="352" cy="88" rx="28" ry="28" fill="#030F35" fillOpacity="0.12" />
      </svg>
    </div>
  );
};

export default LaunchAdvisoryIllustration;
