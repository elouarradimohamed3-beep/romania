import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import ResellerForm from "./ResellerForm";

export const metadata: Metadata = {
  title: "Program reseller",
  description: "Devino reseller Romanian IPTV. Prețuri en-gros, panou dedicat și suport prioritar.",
};

const perks = [
  { title: "Prețuri en-gros", body: "Cu cât cumperi mai multe credite, cu atât prețul per abonament scade.", icon: "gift" },
  { title: "Panou dedicat", body: "Gestionează-ți clienții și creditele dintr-un singur loc.", icon: "server" },
  { title: "Suport prioritar", body: "Linie de suport separată pentru parteneri, disponibilă 24/7.", icon: "check" },
  { title: "Activare rapidă", body: "Creezi abonamente pentru clienții tăi în câteva secunde.", icon: "bolt" },
];

const tiers = [
  { name: "Starter", credits: "10 credite", price: "de la 8€/credit" },
  { name: "Pro", credits: "50 credite", price: "de la 6€/credit", featured: true },
  { name: "Business", credits: "100+ credite", price: "de la 4€/credit" },
];

export default function ResellerPage() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold">Program reseller</h1>
        <p className="mt-3 text-muted">
          Construiește-ți propriul business IPTV cu una dintre cele mai stabile platforme din piață.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border bg-surface p-6">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
              <Icon name={p.icon} />
            </span>
            <h3 className="mt-4 font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className={`rounded-2xl border p-6 text-center ${t.featured ? "border-brand bg-surface" : "border-border bg-surface"}`}>
            <div className="text-sm uppercase tracking-wide text-muted">{t.name}</div>
            <div className="mt-2 text-2xl font-bold">{t.credits}</div>
            <div className="mt-1 text-brand">{t.price}</div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Aplică pentru parteneriat</h2>
        <p className="mt-1 text-sm text-muted">Completează formularul și îți trimitem regulamentul și prețurile complete.</p>
        <div className="mt-6">
          <ResellerForm />
        </div>
      </div>
    </div>
  );
}
