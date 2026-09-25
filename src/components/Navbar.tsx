"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { useT } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useT();

  const links = [
    { href: "/#preturi", label: t("nav.pricing") },
    { href: "/canale", label: t("nav.channels") },
    { href: "/filme", label: t("nav.vod") },
    { href: "/configurare", label: t("nav.setup") },
    { href: "/reseller", label: t("nav.reseller") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            href="/#preturi"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-background transition-colors hover:bg-brand-strong"
          >
            {t("nav.cta")}
          </Link>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border"
          aria-label="Meniu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/70 bg-surface md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface-2 hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="px-3 py-2"><LanguageSwitcher /></div>
            <a
              href={site.whatsappLink}
              className="mt-1 rounded-lg bg-brand px-3 py-2 text-center text-sm font-semibold text-background"
              onClick={() => setOpen(false)}
            >
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
