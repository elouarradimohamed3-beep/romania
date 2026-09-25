"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { Icon } from "./Icons";
import CountUp from "./CountUp";

export default function Hero() {
  const t = useT();

  return (
    <section className="hero-glow relative overflow-hidden">
      {/* animated aurora blobs */}
      <div className="aurora left-[-8%] top-[-10%] h-72 w-72 bg-accent/40" />
      <div className="aurora right-[-6%] top-[5%] h-80 w-80 bg-brand/30" style={{ animationDelay: "-5s" }} />
      <div className="aurora bottom-[-15%] left-1/3 h-72 w-72 bg-accent-2/30" style={{ animationDelay: "-9s" }} />

      <div className="container-page relative grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            {t("hero.badge")}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {t("hero.title")}
            <span className="block text-brand">{t("hero.tagline")}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{t("hero.subtitle")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#preturi"
              className="shine rounded-full bg-accent px-7 py-3 font-semibold text-white transition-colors hover:bg-red-600"
            >
              {t("hero.ctaPrimary")}
            </Link>
            <Link
              href="#test-gratuit"
              className="rounded-full border border-border bg-surface px-7 py-3 font-semibold transition-colors hover:bg-surface-2"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>

        <div className="relative animate-floaty">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src="/hero.jpg"
              alt="Romanian IPTV – Live Sport 4K, Cinema UHD, Breaking News și Kids"
              width={1355}
              height={768}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="container-page pb-16">
        <div className="grid gap-3 sm:grid-cols-3">
          <StatPill value={site.channels} label={t("stats.channels")} icon="server" />
          <StatPill value="4K" label={t("stats.uhd")} icon="bolt" />
          <StatPill value="24/7" label={t("stats.support")} icon="check" />
        </div>
      </div>
    </section>
  );
}

function StatPill({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <div className="card-hover flex items-center gap-4 rounded-2xl border border-brand/20 bg-gradient-to-br from-[#0e1730] to-[#0a1020] px-6 py-5">
      {/* glowing gold ring badge */}
      <span className="relative inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-strong p-[3px] shadow-[0_0_28px_-4px_rgba(242,201,76,0.7)]">
        <span className="flex h-full w-full items-center justify-center rounded-full bg-[#0a0f1c]">
          <Icon name={icon} className="h-7 w-7 text-brand" />
        </span>
      </span>
      <div>
        <div className="text-3xl font-extrabold leading-none text-foreground">
          <CountUp value={value} />
        </div>
        <div className="mt-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">{label}</div>
      </div>
    </div>
  );
}
