const categories = [
  "Digi Sport", "Pro TV", "Antena 1", "Netflix VOD", "HBO Max", "Prima TV",
  "Eurosport", "Sky Sports", "beIN Sports", "Disney+", "National Geographic", "Discovery",
  "Kanal D", "TVR 1", "Cartoon Network", "Film Now", "AXN", "Sport Extra",
];

export default function ChannelWall() {
  return (
    <section className="container-page py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-brand">Conținut</span>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Mii de canale și platforme populare</h2>
        <p className="mt-3 text-muted">
          Toate canalele românești, sport premium și cele mai mari platforme internaționale, într-un
          singur abonament.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <span
            key={c}
            className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-brand hover:text-foreground"
          >
            {c}
          </span>
        ))}
        <span className="rounded-full border border-brand bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
          + 55.000 altele
        </span>
      </div>
    </section>
  );
}
