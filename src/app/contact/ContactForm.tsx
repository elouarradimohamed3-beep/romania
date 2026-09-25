"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nume" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Subiect" name="subject" />
      <div>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="message">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-brand"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-background transition-colors hover:bg-brand-strong disabled:opacity-60"
      >
        {status === "sending" ? "Se trimite…" : "Trimite mesajul"}
      </button>

      {status === "ok" && (
        <p className="text-sm text-green-400">Mulțumim! Mesajul a fost trimis. Revenim în curând.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-accent">
          A apărut o eroare. Scrie-ne direct pe WhatsApp sau email.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-brand"
      />
    </div>
  );
}
