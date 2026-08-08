"use client";

import { useEffect } from "react";

const TAWK_SCRIPT_ID = "tawk-to-widget";
const TAWK_SCRIPT_URL = "https://embed.tawk.to/6a7728357e01e61d477734a2/1jvgna52b";

export default function TawkChat() {
  useEffect(() => {
    if (document.getElementById(TAWK_SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = TAWK_SCRIPT_ID;
    script.async = true;
    script.src = TAWK_SCRIPT_URL;
    script.charset = "UTF-8";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => script.remove();
  }, []);

  return null;
}
