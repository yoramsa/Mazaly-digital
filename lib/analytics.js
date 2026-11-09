export function track(name, params) {
  if (typeof window === "undefined") return;
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...params });
  }
  if (typeof window.va === "function") {
    window.va("event", { name, ...params });
  }
}
