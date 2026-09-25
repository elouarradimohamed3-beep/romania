import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Plată reușită", robots: { index: false } };

export default function SuccessPage() {
  return (
    <div className="container-page py-24">
      <div className="mx-auto max-w-lg rounded-2xl border border-border bg-surface p-10 text-center">
        <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 text-3xl text-green-400">
          ✓
        </div>
        <h1 className="text-2xl font-extrabold">Mulțumim pentru comandă!</h1>
        <p className="mt-3 text-muted">
          Plata a fost procesată. Îți vom trimite datele de acces în cel mai scurt timp. Dacă vrei
          activare instantanee, scrie-ne pe WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={site.whatsappLink} className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-background hover:bg-brand-strong">
            Activare pe WhatsApp
          </a>
          <Link href="/" className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold hover:bg-surface-2">
            Înapoi acasă
          </Link>
        </div>
      </div>
    </div>
  );
}
