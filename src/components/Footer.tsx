import Link from "next/link";
import { site } from "@/lib/site";
import { LogoMark } from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 text-lg font-bold">
            <LogoMark />
            <span className="tracking-tight">Romanian<span className="text-brand">IPTV</span></span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Misiunea noastră este să oferim cele mai bune canale TV românilor din țară și din
            străinătate. Combinăm tehnologia HD/4K cu conținut local, astfel încât fiecare să se
            bucure de televiziunea românească fără restricții.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Linkuri rapide</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li><Link href="/canale" className="hover:text-foreground">Listă canale</Link></li>
            <li><Link href="/filme" className="hover:text-foreground">Filme & Seriale</Link></li>
            <li><Link href="/configurare" className="hover:text-foreground">Configurare IPTV</Link></li>
            <li><Link href="/ajutor" className="hover:text-foreground">Centru de ajutor</Link></li>
            <li><Link href="/reseller" className="hover:text-foreground">Program reseller</Link></li>
            <li><Link href="/status" className="hover:text-foreground">Status servere</Link></li>
            <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li><a href={site.whatsappLink} className="hover:text-foreground">{site.whatsapp}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-foreground">{site.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Toate drepturile rezervate. Romanian IPTV</span>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/politica-de-confidentialitate" className="hover:text-foreground">Confidențialitate</Link>
            <Link href="/politica-de-returnare" className="hover:text-foreground">Returnare</Link>
            <Link href="/termeni-si-conditii" className="hover:text-foreground">Termeni</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
