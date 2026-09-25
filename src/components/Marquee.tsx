const items = [
  "Digi Sport", "Pro TV", "Antena 1", "HBO Max", "Netflix", "Eurosport",
  "Sky Sports", "Disney+", "National Geographic", "Discovery", "Cartoon Network",
  "beIN Sports", "AXN", "Kanal D", "TVR 1", "Prima Sport", "Film Now", "History",
];

export default function Marquee() {
  return (
    <div className="marquee-mask relative overflow-hidden py-6">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="marquee-track gap-4">
        {[...items, ...items].map((label, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-border bg-surface px-5 py-2 text-sm font-medium text-muted"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
