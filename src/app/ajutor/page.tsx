import type { Metadata } from "next";
import { helpCenter, site } from "@/lib/site";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Centru de ajutor",
  description: "Ghiduri și răspunsuri pentru configurare, plăți și depanare IPTV România.",
};

export default function HelpPage() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold">Centru de ajutor</h1>
        <p className="mt-3 text-muted">
          Găsește rapid răspunsuri. Dacă ai nevoie de mai mult, scrie-ne pe WhatsApp la {site.whatsapp}.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
        {helpCenter.map((cat) => (
          <div key={cat.title} className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <Icon name={cat.icon} className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-semibold">{cat.title}</h2>
            </div>
            <div className="mt-4 space-y-4">
              {cat.articles.map((a) => (
                <div key={a.q}>
                  <div className="text-sm font-medium">{a.q}</div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{a.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border bg-surface p-8 text-center">
        <h2 className="text-xl font-semibold">Nu ai găsit răspunsul?</h2>
        <a
          href={site.whatsappLink}
          className="mt-4 inline-block rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-background hover:bg-brand-strong"
        >
          Contactează suportul
        </a>
      </div>
    </div>
  );
}
