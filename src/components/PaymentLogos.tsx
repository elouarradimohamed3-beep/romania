// Recognizable payment-brand logos as inline SVG, on white chips for legibility on dark.
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-9 items-center justify-center rounded-lg bg-white px-3 shadow-sm">
      {children}
    </span>
  );
}

function Visa() {
  return (
    <svg height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Visa">
      <text x="0" y="13" fontFamily="Arial, sans-serif" fontSize="15" fontStyle="italic" fontWeight="700" fill="#1434CB" letterSpacing="1">VISA</text>
    </svg>
  );
}

function Mastercard() {
  return (
    <svg height="22" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard">
      <circle cx="15" cy="12" r="10" fill="#EB001B" />
      <circle cx="25" cy="12" r="10" fill="#F79E1B" />
      <path d="M20 4.2a10 10 0 0 1 0 15.6 10 10 0 0 1 0-15.6z" fill="#FF5F00" />
    </svg>
  );
}

function PayPal() {
  return (
    <svg height="16" viewBox="0 0 62 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PayPal">
      <text x="0" y="13" fontFamily="Arial, sans-serif" fontSize="15" fontStyle="italic" fontWeight="700" fill="#003087">Pay</text>
      <text x="27" y="13" fontFamily="Arial, sans-serif" fontSize="15" fontStyle="italic" fontWeight="700" fill="#009CDE">Pal</text>
    </svg>
  );
}

function ApplePay() {
  return (
    <svg height="18" viewBox="0 0 56 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Apple Pay">
      <path d="M9.6 4.1c.5-.6.8-1.4.7-2.2-.7 0-1.6.5-2.1 1.1-.5.5-.9 1.4-.7 2.2.8 0 1.6-.4 2.1-1.1zM10.3 5.4c-1.2-.1-2.2.7-2.7.7-.6 0-1.4-.6-2.3-.6-1.2 0-2.3.7-2.9 1.8-1.2 2.2-.3 5.4.9 7.2.6.9 1.3 1.8 2.2 1.8.9 0 1.2-.6 2.3-.6 1.1 0 1.3.6 2.3.6 1 0 1.6-.9 2.2-1.7.7-1 1-1.9 1-2-.1 0-1.9-.8-1.9-2.9 0-1.8 1.4-2.6 1.5-2.7-.8-1.2-2.1-1.4-2.6-1.4z" fill="#000" />
      <text x="18" y="15" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" fill="#000">Pay</text>
    </svg>
  );
}

function GooglePay() {
  return (
    <svg height="18" viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google Pay">
      <path d="M9.2 10.2v2.3h3.3c-.1.8-.6 1.5-1.2 1.9v1.6h2c1.2-1.1 1.9-2.7 1.9-4.6 0-.5 0-.9-.1-1.2H9.2z" fill="#4285F4" />
      <path d="M9.2 16.6c1.6 0 3-.5 4-1.5l-2-1.6c-.5.4-1.2.6-2 .6-1.5 0-2.9-1-3.3-2.4H3.8v1.6c1 2 3 3.3 5.4 3.3z" fill="#34A853" />
      <path d="M5.9 11.7c-.2-.6-.2-1.3 0-1.9V8.2H3.8c-.7 1.3-.7 2.9 0 4.3l2.1-.8z" fill="#FBBC04" />
      <path d="M9.2 6.6c.9 0 1.6.3 2.2.9l1.7-1.7C12 4.8 10.7 4.3 9.2 4.3c-2.4 0-4.4 1.3-5.4 3.3l2.1 1.6c.4-1.4 1.8-2.6 3.3-2.6z" fill="#EA4335" />
      <text x="18" y="15" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" fill="#5F6368">Pay</text>
    </svg>
  );
}

export default function PaymentLogos({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      <Chip><Visa /></Chip>
      <Chip><Mastercard /></Chip>
      <Chip><PayPal /></Chip>
      <Chip><ApplePay /></Chip>
      <Chip><GooglePay /></Chip>
    </div>
  );
}
