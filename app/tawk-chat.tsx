"use client";

import { useEffect } from "react";

const TAWK_SCRIPT_ID = "tawk-to-widget";
const TAWK_SCRIPT_URL = "https://embed.tawk.to/6a7728357e01e61d477734a2/1jvgna52b";
const RAISED_WIDGET_PATH = /^\/(workshop|apply)(?:\/|$)/;

type TawkWindow = Window & {
  Tawk_API?: {
    customStyle?: {
      visibility: {
        desktop: { position: string; xOffset: number; yOffset: number };
        mobile: { position: string; xOffset: number; yOffset: number };
      };
    };
  };
};

export default function TawkChat() {
  useEffect(() => {
    if (document.getElementById(TAWK_SCRIPT_ID)) return;

    const tawkWindow = window as TawkWindow;
    tawkWindow.Tawk_API = tawkWindow.Tawk_API || {};
    if (RAISED_WIDGET_PATH.test(window.location.pathname)) {
      tawkWindow.Tawk_API.customStyle = {
        visibility: {
          desktop: { position: "br", xOffset: 20, yOffset: 80 },
          mobile: { position: "br", xOffset: 20, yOffset: 80 },
        },
      };
    }

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
