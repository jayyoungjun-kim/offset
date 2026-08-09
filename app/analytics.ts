type AnalyticsValue = string | number | boolean;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, AnalyticsValue>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, parameters: Record<string, AnalyticsValue> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...parameters });
  window.gtag?.("event", event, parameters);
}
