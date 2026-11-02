export function ServiceIcon({ name }) {
  switch (name) {
    case "site":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect x="6" y="9" width="36" height="30" rx="4" pathLength="1" />
          <path d="M6 17h36" pathLength="1" />
          <path d="M14 25h12" pathLength="1" />
          <path d="M14 31h20" pathLength="1" />
          <path d="M11 13h.01M16 13h.01M21 13h.01" pathLength="1" />
        </svg>
      );
    case "crm":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M8 11h32L28 26v10l-8 4V26z" pathLength="1" />
        </svg>
      );
    case "app":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect x="14" y="5" width="20" height="38" rx="4" pathLength="1" />
          <path d="M21 37h6" pathLength="1" />
          <path d="M20 10h8" pathLength="1" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M18 14 6 24l12 10" pathLength="1" />
          <path d="M30 14l12 10-12 10" pathLength="1" />
          <path d="M26 10l-4 28" pathLength="1" />
        </svg>
      );
    case "automation":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="10" cy="12" r="4" pathLength="1" />
          <circle cx="10" cy="36" r="4" pathLength="1" />
          <circle cx="38" cy="24" r="4" pathLength="1" />
          <path d="M14 12C26 12 26 24 34 24" pathLength="1" />
          <path d="M14 36C26 36 26 24 34 24" pathLength="1" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M8 10h32a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H22l-8 7v-7H8a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" pathLength="1" />
          <path d="M24 15l1.8 4.2L30 21l-4.2 1.8L24 27l-1.8-4.2L18 21l4.2-1.8z" pathLength="1" />
        </svg>
      );
    default:
      return null;
  }
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}
