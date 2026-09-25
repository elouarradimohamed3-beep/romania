import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Plată anulată", robots: { index: false } };

export default function CancelPage() {
  return (
    <div className="container-page py-24">
      <div className="mx-auto max-w-lg rounded-2xl border border-border bg-surface p-10 text-center">
        <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-3xl text-accent">
          ✕
        </div>
        <h1 className="text-2xl font-extrabold">Plată anulată</h1>
        <p className="mt-3 text-muted">
          Nu s-a efectuat nicio plată. Poți încerca din nou oricând sau ne poți scrie pentru ajutor.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/#preturi" className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-background hover:bg-brand-strong">
            Vezi din nou planurile
          </Link>
          <Link href="/contact" className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold hover:bg-surface-2">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
