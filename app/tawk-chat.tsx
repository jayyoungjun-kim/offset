"use client";

import { useEffect, useState } from "react";

const TAWK_SCRIPT_ID = "tawk-to-widget";
const TAWK_SCRIPT_URL = "https://embed.tawk.to/6a7728357e01e61d477734a2/1jvgna52b";

type TawkApi = {
  onLoad?: () => void;
  onChatMaximized?: () => void;
  onChatMinimized?: () => void;
  hideWidget?: () => void;
  showWidget?: () => void;
  maximize?: () => void;
};

type TawkWindow = Window & { Tawk_API?: TawkApi };

export default function TawkChat() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const tawkWindow = window as TawkWindow;
    const api = (tawkWindow.Tawk_API = tawkWindow.Tawk_API || {});

    api.onLoad = () => api.hideWidget?.();
    api.onChatMaximized = () => setIsOpen(true);
    api.onChatMinimized = () => {
      api.hideWidget?.();
      setIsOpen(false);
    };

    if (!document.getElementById(TAWK_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = TAWK_SCRIPT_ID;
      script.async = true;
      script.src = TAWK_SCRIPT_URL;
      script.charset = "UTF-8";
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
  }, []);

  const openChat = () => {
    const api = (window as TawkWindow).Tawk_API;
    api?.showWidget?.();
    api?.maximize?.();
    setIsOpen(true);
  };

  return (
    <button
      type="button"
      className="tawk-launcher"
      aria-label="라이브 채팅 열기"
      hidden={isOpen}
      onClick={openChat}
    >
      <span aria-hidden="true" />
    </button>
  );
}
