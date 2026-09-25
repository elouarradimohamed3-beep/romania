import { site } from "@/lib/site";

const facts: { label: string; value: string }[] = [
  { label: "Canale live", value: `${site.channels}` },
  { label: "Filme & seriale (VOD)", value: `${site.vod}` },
  { label: "Calitate video", value: "SD, HD, FHD și 4K" },
  { label: "Disponibilitate (uptime)", value: site.uptime },
  { label: "Dispozitive", value: "Smart TV, Fire Stick, Android, iOS, PC, Android Box" },
  { label: "Metode de plată", value: "PayPal și card de credit/debit" },
  { label: "Suport", value: "24/7 prin WhatsApp și email" },
  { label: "Garanție", value: "Returnarea banilor și test gratuit" },
];

export default function AboutSeo() {
  return (
    <section id="despre" className="container-page py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold sm:text-4xl">Ce este Romanian IPTV?</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          <strong className="text-foreground">Romanian IPTV</strong> este un serviciu de televiziune
          prin internet (IPTV) care oferă acces la peste {site.channels} de canale live și{" "}
          {site.vod} de filme și seriale la cerere, în calitate până la 4K. Este destinat
          utilizatorilor din România și din diaspora care vor să urmărească toate canalele
          românești, sport premium și platforme internaționale pe orice dispozitiv, fără cablu și
          fără contract pe termen lung.
        </p>

        <dl className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {facts.map((f) => (
            <div key={f.label} className="flex justify-between gap-4 border-b border-border pb-3">
              <dt className="text-sm text-muted">{f.label}</dt>
              <dd className="text-right text-sm font-semibold text-foreground">{f.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-sm leading-relaxed text-muted">
          Pe scurt: alegi un abonament, primești datele de acces pe email în câteva minute și începi
          să vizionezi în maxim 15 minute. Poți testa serviciul gratuit înainte de a plăti, iar dacă
          un canal lipsește oferim schimbare gratuită a serverului.
        </p>
      </div>
    </section>
  );
}
