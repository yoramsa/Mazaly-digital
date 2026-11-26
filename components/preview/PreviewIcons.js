const stroke = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" };

export function ArrowRight({ className = "" }) {
  return (
    <svg className={`pr-flip ${className}`} viewBox="0 0 24 24" {...stroke} strokeWidth="2.2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeft({ className = "" }) {
  return (
    <svg className={`pr-flip ${className}`} viewBox="0 0 24 24" {...stroke} strokeWidth="2.2" aria-hidden="true">
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function ArrowUpRight({ className = "" }) {
  return (
    <svg className={`pr-flip ${className}`} viewBox="0 0 24 24" {...stroke} strokeWidth="2.2" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export function Play({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 7.2v9.6a.8.8 0 0 0 1.2.7l7.6-4.8a.8.8 0 0 0 0-1.4l-7.6-4.8A.8.8 0 0 0 9 7.2Z" fill="currentColor" />
    </svg>
  );
}

export function Chevron({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} strokeWidth="2.6" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Burger({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 28 20" {...stroke} strokeWidth="2.4" aria-hidden="true">
      <path d="M2 2h24M2 10h24M2 18h24" />
    </svg>
  );
}

export function Close({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} strokeWidth="2.4" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function Monitor({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" {...stroke} strokeWidth="2" aria-hidden="true">
      <rect x="4" y="5" width="24" height="16" rx="2.5" />
      <path d="M12 27h8M16 21v6" />
    </svg>
  );
}

export function Layers({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" {...stroke} strokeWidth="2" aria-hidden="true">
      <path d="M16 4l12 6-12 6-12-6 12-6Z" />
      <path d="M4 16l12 6 12-6M4 22l12 6 12-6" />
    </svg>
  );
}

export function Gamepad({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" {...stroke} strokeWidth="2" aria-hidden="true">
      <path d="M10 9h12a7 7 0 0 1 6.8 8.6l-1.2 5.2a3.4 3.4 0 0 1-5.9 1.4L19 21h-6l-2.7 3.2a3.4 3.4 0 0 1-5.9-1.4l-1.2-5.2A7 7 0 0 1 10 9Z" />
      <path d="M10 13v5M7.5 15.5h5" />
      <circle cx="21.5" cy="14" r="0.9" fill="currentColor" />
      <circle cx="24" cy="16.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function Bulb({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" {...stroke} strokeWidth="2" aria-hidden="true">
      <path d="M11 20.5a8.5 8.5 0 1 1 10 0c-1 .8-1.5 2-1.5 3.2V25h-7v-1.3c0-1.2-.5-2.4-1.5-3.2Z" />
      <path d="M13 29h6M16 12v5" />
    </svg>
  );
}

export function Bars({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" {...stroke} strokeWidth="2" aria-hidden="true">
      <rect x="4" y="17" width="6" height="11" rx="1.6" />
      <rect x="13" y="11" width="6" height="17" rx="1.6" />
      <rect x="22" y="4" width="6" height="24" rx="1.6" />
    </svg>
  );
}

export function WhatsApp({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.5.7 4.8 1.9 6.8L3 29l6.7-2.1c1.9 1 4 1.6 6.3 1.6 7 0 12.7-5.7 12.7-12.7S23 3 16 3Zm0 23c-2 0-3.9-.5-5.5-1.5l-.4-.2-4 1.2 1.2-3.9-.3-.4c-1.1-1.7-1.7-3.7-1.7-5.8C5.3 9.8 10.1 5 16 5s10.7 4.8 10.7 10.7S21.9 26 16 26Zm5.9-8c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.3-.7.1-1-.5-2-1.1-2.9-2-.7-.7-1.3-1.5-1.8-2.4-.2-.3 0-.5.1-.7.2-.2.4-.4.6-.6.2-.2.2-.4.1-.7-.1-.3-.7-1.8-1-2.4-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5 0 1.5 1.1 2.9 1.2 3.1.1.2 1.9 3 4.6 4.3 2.7 1.3 2.7.9 3.2.8.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4Z" />
    </svg>
  );
}
