"use client";

import { useEffect, useState } from "react";

// Rolling 24h urgency window that resets each day (keeps the offer "live").
function nextMidnight() {
  const d = new Date();
  d.setHours(24, 0, 0, 0);
  return d.getTime();
}

export default function Countdown() {
  const [ms, setMs] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setMs(nextMidnight() - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (ms === null) return null;

  const total = Math.max(0, Math.floor(ms / 1000));
  const h = String(Math.floor(total / 3600)).padStart(2, "0");
  const m = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-4 py-2">
      <span className="text-sm font-semibold text-accent">Ofertă limitată se termină în</span>
      <div className="flex items-center gap-1 font-mono text-sm font-bold text-foreground">
        <Box v={h} /><span>:</span><Box v={m} /><span>:</span><Box v={s} />
      </div>
    </div>
  );
}

function Box({ v }: { v: string }) {
  return <span className="rounded bg-background/60 px-1.5 py-0.5">{v}</span>;
}
