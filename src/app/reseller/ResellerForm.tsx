"use client";

import { useState } from "react";

export default function ResellerForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/reseller", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <p className="rounded-xl bg-green-500/10 px-4 py-3 text-sm text-green-400">
        Mulțumim! Cererea ta de parteneriat a fost trimisă. Te contactăm în curând.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Nume complet" className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-brand" />
        <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-brand" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="phone" placeholder="Telefon / WhatsApp" className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-brand" />
        <select name="volume" defaultValue="" className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-brand">
          <option value="" disabled>Volum estimat / lună</option>
          <option>1 - 10 credite</option>
          <option>10 - 50 credite</option>
          <option>50 - 100 credite</option>
          <option>100+ credite</option>
        </select>
      </div>

      <button type="submit" disabled={status === "sending"} className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-background hover:bg-brand-strong disabled:opacity-60">
        {status === "sending" ? "Se trimite…" : "Trimite cererea"}
      </button>
      {status === "error" && <p className="text-sm text-accent">Eroare. Scrie-ne pe WhatsApp.</p>}
    </form>
  );
}
