import { useEffect, useRef } from "react";

const TURNSTILE_SCRIPT_ID = "cf-turnstile-script";
const TURNSTILE_SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad";
/** Cloudflare always-pass test key — safe for local dev only (see .env.example). */
const TURNSTILE_DEV_SITE_KEY = "1x00000000000000000000AA";

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
      theme?: "light" | "dark" | "auto";
    }
  ) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
    onTurnstileLoad?: () => void;
  }
}

type ContactTurnstileProps = {
  onVerify: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
};

export default function ContactTurnstile({ onVerify, onExpire, onError }: ContactTurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const configuredSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;
  const siteKey =
    configuredSiteKey || (import.meta.env.DEV ? TURNSTILE_DEV_SITE_KEY : undefined);

  useEffect(() => {
    if (import.meta.env.MODE === "test") {
      onVerify("test-turnstile-token");
      return;
    }

    if (!siteKey) {
      onError();
      return;
    }

    const renderWidget = () => {
      if (!containerRef.current || !window.turnstile || widgetIdRef.current) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme: "light",
        callback: onVerify,
        "expired-callback": onExpire,
        "error-callback": onError,
      });
    };

    if (window.turnstile) {
      renderWidget();
      return () => {
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
      };
    }

    window.onTurnstileLoad = renderWidget;

    let script = document.getElementById(TURNSTILE_SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = TURNSTILE_SCRIPT_ID;
      script.src = TURNSTILE_SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [onError, onExpire, onVerify, siteKey]);

  if (import.meta.env.MODE === "test") {
    return null;
  }

  if (!siteKey) {
    return (
      <p className="text-sm text-red-600" role="alert">
        Security verification is not configured. Please email us at info@digitalqatalyst.com.
      </p>
    );
  }

  return <div ref={containerRef} className="min-h-[65px]" aria-label="Security verification" />;
}
