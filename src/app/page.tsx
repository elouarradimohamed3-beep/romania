import Link from "next/link";
import { site, features, steps, testimonials } from "@/lib/site";
import { Icon } from "@/components/Icons";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import TrustBar from "@/components/TrustBar";
import ChannelWall from "@/components/ChannelWall";
import DeviceMockups from "@/components/DeviceMockups";
import TrialForm from "@/components/TrialForm";
import Reveal from "@/components/Reveal";
import AboutSeo from "@/components/AboutSeo";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* Pricing */}
      <Pricing />

      {/* Features */}
      <section className="container-page py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">De ce noi</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Alege cel mai bun furnizor de IPTV din România
          </h2>
          <p className="mt-3 text-muted">
            Experimentează calitate, fiabilitate și suport de neegalat cu Romanian IPTV.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="card-hover h-full rounded-2xl border border-border bg-surface p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <Icon name={f.icon} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ChannelWall />

      {/* Free trial */}
      <section id="test-gratuit" className="container-page py-10">
        <Reveal>
          <div className="rounded-2xl border border-accent/40 bg-gradient-to-r from-surface to-surface-2 p-8 md:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">Testează gratuit înainte să cumperi</h2>
              <p className="mt-3 text-muted">
                Fără riscuri. Îți trimitem acces de test și te ajutăm la configurare pas cu pas.
              </p>
              <div className="mx-auto mt-6 max-w-xl">
                <TrialForm />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <DeviceMockups />

      {/* Steps */}
      <section className="container-page py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">Simplu</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Cum să cumperi un abonament <span className="text-accent">🇷🇴</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="card-hover relative h-full rounded-2xl border border-border bg-surface p-6">
                <div className="text-5xl font-extrabold text-brand/25">{s.n}</div>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="#preturi"
            className="inline-block rounded-full bg-brand px-7 py-3 font-semibold text-background transition-colors hover:bg-brand-strong"
          >
            Comandă IPTV România acum
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">Recenzii</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Ce spun clienții noștri</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((tst, i) => (
            <Reveal key={tst.name} delay={i * 0.05}>
              <div className="card-hover h-full rounded-2xl border border-border bg-surface p-6">
                <div className="text-brand">★★★★★</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">“{tst.body}”</p>
                <div className="mt-4 text-sm font-semibold">{tst.name}</div>
                <div className="text-xs text-muted">{tst.location}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About / GEO answer-first */}
      <AboutSeo />

      {/* FAQ */}
      <Faq />

      {/* Reseller CTA */}
      <section className="container-page pb-10">
        <Reveal>
          <div className="rounded-2xl border border-brand/40 bg-surface p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Devino reseller</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted">
              Romanian IPTV oferă una dintre cele mai calitative platforme IPTV pentru reselleri.
              Contactează-ne pentru regulament și prețuri.
            </p>
            <a
              href={site.whatsappLink}
              className="mt-6 inline-block rounded-full border border-brand px-7 py-3 font-semibold text-brand transition-colors hover:bg-brand hover:text-background"
            >
              Vreau să fiu reseller
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
