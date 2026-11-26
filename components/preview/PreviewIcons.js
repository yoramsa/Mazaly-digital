const stroke = { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" };

export function RibbonLogo({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 64 44" aria-hidden="true">
      <defs>
        <linearGradient id="pr-ribbon-g" x1="0" y1="0" x2="64" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5b12c9" />
          <stop offset="0.45" stopColor="#a21caf" />
          <stop offset="0.7" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#67b7f7" />
        </linearGradient>
      </defs>
      <path d="M6 38C10 20 13 6 19 6s8 25 13 25 7-25 13-25 9 14 13 32" fill="none" stroke="url(#pr-ribbon-g)" strokeWidth="8.5" strokeLinecap="round" />
      <path d="M8.5 31C11 19 14 9.5 18.5 9.5" fill="none" stroke="#fff" strokeOpacity="0.45" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M41 13c1.5-3 3-4.5 4.5-4.5" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

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
