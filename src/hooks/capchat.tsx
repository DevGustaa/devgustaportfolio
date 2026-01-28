import { useEffect } from "react";

export function TurnstileCaptcha({
  onVerify,
}: {
  onVerify: (token: string) => void;
}) {
  useEffect(() => {
    // registra callback global
    (window as any).onTurnstileSuccess = (token: string) => {
      onVerify(token);
    };

    // carrega o script apenas uma vez
    if (!document.getElementById("cf-turnstile-script")) {
      const script = document.createElement("script");
      script.id = "cf-turnstile-script";
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, [onVerify]);

  return (
    <div
      className="cf-turnstile"
      data-sitekey="0x4AAAAAACJ-AZ7wbMIxjGuR"
      data-callback="onTurnstileSuccess"
    />
  );
}
