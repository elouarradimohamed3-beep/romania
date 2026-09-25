"use client";

import { useState } from "react";

export default function TrialForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/trial", {
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
        Mulțumim! Ți-am înregistrat cererea de test. Te contactăm în scurt timp cu accesul.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <input
        type="email"
        name="email"
        required
        placeholder="Adresa ta de email"
        className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-brand"
      />
      <select
        name="device"
        className="rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-brand"
        defaultValue=""
      >
        <option value="" disabled>Dispozitiv</option>
        <option>Smart TV</option>
        <option>Telefon / Tabletă</option>
        <option>Fire Stick / Android Box</option>
        <option>PC / Laptop</option>
      </select>
      <button
        type="submit"
        disabled={status === "sending"}
        className="whitespace-nowrap rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600 disabled:opacity-60"
      >
        {status === "sending" ? "Se trimite…" : "Vreau test gratuit"}
      </button>
    </form>
  );
}
