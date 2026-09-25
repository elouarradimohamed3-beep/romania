import Link from "next/link";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="riptv-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e23744" />
          <stop offset="1" stopColor="#f2c94c" />
        </linearGradient>
      </defs>
      {/* badge */}
      <rect x="3" y="6" width="42" height="36" rx="9" fill="url(#riptv-grad)" />
      {/* screen inset */}
      <rect x="9" y="12" width="30" height="24" rx="5" fill="#0b0f19" fillOpacity="0.9" />
      {/* play triangle */}
      <path d="M21 19.5v9l8-4.5-8-4.5z" fill="#ffffff" />
      {/* streaming signal arcs */}
      <path d="M32.5 16.5a5 5 0 0 1 4 4" stroke="#f2c94c" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M31.5 14a8 8 0 0 1 6.5 6.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.7" />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 font-bold text-lg ${className}`}>
      <LogoMark />
      <span className="tracking-tight">
        Romanian<span className="text-brand">IPTV</span>
      </span>
    </Link>
  );
}
