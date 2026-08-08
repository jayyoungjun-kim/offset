"use client";

import { useEffect } from "react";

const CHANNEL_SCRIPT_ID = "channel-talk-widget";
const CHANNEL_SCRIPT_URL = "https://cdn.channel.io/plugin/ch-plugin-web.js";
const CHANNEL_LAUNCHER_ID = "channel-talk-raised-launcher";
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
    const useRaisedLauncher =
      RAISED_LAUNCHER_PATH.test(window.location.pathname) &&
      window.matchMedia("(max-width: 720px)").matches;

    if (useRaisedLauncher && !document.getElementById(CHANNEL_LAUNCHER_ID)) {
      const launcher = document.createElement("button");
      launcher.id = CHANNEL_LAUNCHER_ID;
      launcher.className = "channel-talk-raised-launcher";
      launcher.type = "button";
      launcher.setAttribute("aria-label", "OFFSET 상담 열기");
      document.body.appendChild(launcher);
    }

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

    channelWindow.ChannelIO?.("boot", {
      pluginKey: CHANNEL_PLUGIN_KEY,
      ...(useRaisedLauncher
        ? { customLauncherSelector: `#${CHANNEL_LAUNCHER_ID}` }
        : {}),
    });

    return () => {
      channelWindow.ChannelIO?.("shutdown");
      document.getElementById(CHANNEL_SCRIPT_ID)?.remove();
      document.getElementById(CHANNEL_LAUNCHER_ID)?.remove();
      channelWindow.ChannelIOInitialized = false;
    };
  }, []);

  return null;
}
