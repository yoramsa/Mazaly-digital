export default function Logo() {
  return (
    <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
      <defs>
        <linearGradient id="mz-logo-g" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0" stopColor="#A48BFA" />
          <stop offset="1" stopColor="#2457E7" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#mz-logo-g)" />
      <path d="M9 28V13l11 11 11-11v15" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="31" cy="10" r="3.4" fill="#FF9F5A" />
    </svg>
  );
}
