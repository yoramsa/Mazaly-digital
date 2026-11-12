export function CrossIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ChatIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5h16v11H8l-4 4V5Z" />
      <path d="M8 9h8M8 12.5h5" />
    </svg>
  );
}

export function SendIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12l16-7-6 16-3-6-7-3Z" />
    </svg>
  );
}

export function SiteIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="9" width="36" height="30" rx="4" />
      <path d="M6 17h36" />
      <path d="M14 25h12M14 31h20" />
      <path d="M11 13h.01M16 13h.01M21 13h.01" />
    </svg>
  );
}

export function AiIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 10h32a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H22l-8 7v-7H8a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" />
      <path d="M24 15l1.8 4.2L30 21l-4.2 1.8L24 27l-1.8-4.2L18 21l4.2-1.8z" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.5.7 4.8 1.9 6.8L3 29l6.7-2.1c1.9 1 4 1.6 6.3 1.6 7 0 12.7-5.7 12.7-12.7S23 3 16 3Zm0 23c-2 0-3.9-.5-5.5-1.5l-.4-.2-4 1.2 1.2-3.9-.3-.4c-1.1-1.7-1.7-3.7-1.7-5.8C5.3 9.8 10.1 5 16 5s10.7 4.8 10.7 10.7S21.9 26 16 26Zm5.9-8c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.3-.7.1-1-.5-2-1.1-2.9-2-.7-.7-1.3-1.5-1.8-2.4-.2-.3 0-.5.1-.7.2-.2.4-.4.6-.6.2-.2.2-.4.1-.7-.1-.3-.7-1.8-1-2.4-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5 0 1.5 1.1 2.9 1.2 3.1.1.2 1.9 3 4.6 4.3 2.7 1.3 2.7.9 3.2.8.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4Z" />
    </svg>
  );
}
