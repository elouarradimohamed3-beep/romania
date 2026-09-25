"use client";

import { useMemo, useState } from "react";
import { channelGroups } from "@/lib/site";

export default function ChannelSearch() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Toate");

  const categories = ["Toate", ...channelGroups.map((g) => g.category)];

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    return channelGroups
      .filter((g) => cat === "Toate" || g.category === cat)
      .map((g) => ({
        ...g,
        channels: g.channels.filter((c) => c.toLowerCase().includes(query)),
      }))
      .filter((g) => g.channels.length > 0);
  }, [q, cat]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Caută un canal…"
          className="w-full rounded-full border border-border bg-surface px-5 py-3 text-sm outline-none focus:border-brand"
        />
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="rounded-full border border-border bg-surface px-5 py-3 text-sm outline-none focus:border-brand"
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="mt-8 space-y-8">
        {results.map((g) => (
          <div key={g.category}>
            <h2 className="mb-3 text-lg font-semibold text-brand">{g.category}</h2>
            <div className="flex flex-wrap gap-2">
              {g.channels.map((c) => (
                <span key={c} className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-muted">
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
        {results.length === 0 && (
          <p className="text-center text-sm text-muted">Niciun canal găsit. Încearcă alt termen.</p>
        )}
      </div>
    </div>
  );
}
