import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Configurare IPTV",
  description:
    "Ghid pas cu pas pentru configurarea IPTV pe Smart TV, telefon, Android Box, Fire Stick și PC. Durează doar 15 minute.",
};

const devices = [
  {
    name: "Smart TV (Samsung / LG / Android)",
    steps: [
      "Deschide magazinul de aplicații al televizorului.",
      "Instalează o aplicație compatibilă de player IPTV.",
      "Introdu datele de acces primite de la noi.",
      "Așteaptă încărcarea canalelor și a ghidului TV.",
    ],
  },
  {
    name: "Telefon & Tabletă (Android / iOS)",
    steps: [
      "Descarcă o aplicație IPTV din Google Play sau App Store.",
      "Adaugă lista de canale cu datele tale de conectare.",
      "Salvează și pornește vizionarea de oriunde.",
    ],
  },
  {
    name: "Fire Stick / Android Box",
    steps: [
      "Instalează aplicația de player din magazin sau prin sideload.",
      "Introdu linkul de abonament sau datele de conectare.",
      "Reîncarcă lista și bucură-te de conținut în 4K.",
    ],
  },
  {
    name: "PC / Laptop",
    steps: [
      "Folosește o aplicație de player media care suportă liste IPTV.",
      "Adaugă lista primită de la noi.",
      "Redă canalele direct din browser sau aplicație.",
    ],
  },
];

export default function ConfigurarePage() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold">Configurare IPTV</h1>
        <p className="mt-3 text-muted">
          Conectarea este floare la ureche – durează doar 15 minute pe orice dispozitiv. După
          activare îți trimitem datele de acces și te ghidăm pas cu pas.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
        {devices.map((d) => (
          <div key={d.name} className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-lg font-semibold">{d.name}</h2>
            <ol className="mt-4 space-y-2.5">
              {d.steps.map((s, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 text-xs font-bold text-brand">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-surface p-8 text-center">
        <h2 className="text-xl font-semibold">Ai nevoie de ajutor la configurare?</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
          Activarea aplicației este gratuită. Scrie-ne pe WhatsApp și te ajutăm în timp real.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={site.whatsappLink}
            className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-background hover:bg-brand-strong"
          >
            Cere ajutor pe WhatsApp
          </a>
          <Link
            href="/#preturi"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold hover:bg-surface-2"
          >
            Vezi abonamentele
          </Link>
        </div>
      </div>
    </div>
  );
}
