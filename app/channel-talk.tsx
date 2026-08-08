"use client";

import { useEffect } from "react";

const CHANNEL_SCRIPT_ID = "channel-talk-widget";
const CHANNEL_SCRIPT_URL = "https://cdn.channel.io/plugin/ch-plugin-web.js";
const RAISED_LAUNCHER_PATH = /^\/(workshop|apply)(?:\/|$)/;
const CHANNEL_PLUGIN_KEY =
  process.env.NEXT_PUBLIC_CHANNEL_PLUGIN_KEY ||
  "a55a2e4a-90f1-463f-b9ca-317c14fe1f8e";

type ChannelCommand = (command: string, ...args: unknown[]) => void;
type ChannelWindow = Window & {
  ChannelIO?: ChannelCommand & {
    c?: (args: unknown[]) => void;
    q?: unknown[][];
  };
  ChannelIOInitialized?: boolean;
};

export default function ChannelTalk() {
  useEffect(() => {
    const channelWindow = window as ChannelWindow;
    const shouldRaiseLauncher =
      RAISED_LAUNCHER_PATH.test(window.location.pathname) &&
      window.matchMedia("(max-width: 720px)").matches;

    if (!channelWindow.ChannelIO) {
      const channel = function (...args: unknown[]) {
        channel.c?.(args);
      } as ChannelWindow["ChannelIO"];
      channel.q = [];
      channel.c = (args) => channel.q?.push(args);
      channelWindow.ChannelIO = channel;
    }

    if (!channelWindow.ChannelIOInitialized) {
      channelWindow.ChannelIOInitialized = true;
      const script = document.createElement("script");
      script.id = CHANNEL_SCRIPT_ID;
      script.async = true;
      script.src = CHANNEL_SCRIPT_URL;
      document.head.appendChild(script);
    }

    channelWindow.ChannelIO?.("boot", { pluginKey: CHANNEL_PLUGIN_KEY });

    let launcherObserver: MutationObserver | undefined;
    let launcherAttempts = 0;
    const raiseLauncher = () => {
      const host = document.querySelector<HTMLDivElement>("#ch-plugin-entry > div");
      const shadowRoot = host?.shadowRoot;
      const launcherWrapper = shadowRoot?.querySelector("button")?.parentElement;
      if (!launcherWrapper) return;
      launcherWrapper.style.setProperty("bottom", "80px", "important");
      if (!launcherObserver && shadowRoot) {
        launcherObserver = new MutationObserver(raiseLauncher);
        launcherObserver.observe(shadowRoot, { childList: true, subtree: true });
      }
    };
    const launcherInterval = shouldRaiseLauncher
      ? window.setInterval(() => {
          raiseLauncher();
          launcherAttempts += 1;
          if (launcherAttempts >= 50) window.clearInterval(launcherInterval);
        }, 200)
      : undefined;

    return () => {
      channelWindow.ChannelIO?.("shutdown");
      document.getElementById(CHANNEL_SCRIPT_ID)?.remove();
      if (launcherInterval !== undefined) window.clearInterval(launcherInterval);
      launcherObserver?.disconnect();
      channelWindow.ChannelIOInitialized = false;
    };
  }, []);

  return null;
}
