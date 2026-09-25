import Image from "next/image";

export default function DeviceMockups() {
  return (
    <section className="container-page py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-brand">Compatibilitate</span>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Compatibil cu toate dispozitivele</h2>
        <p className="mt-3 text-muted">
          Smart TV, telefon, tabletă, Fire Stick, Android Box sau computer – funcționează peste tot.
        </p>
      </div>

      <div className="mt-14 flex flex-col items-center justify-center gap-6 md:flex-row md:items-end">
        {/* TV */}
        <div className="w-full max-w-lg">
          <div className="rounded-xl border-4 border-[#2a2a2a] bg-black p-1 shadow-2xl">
            <div className="relative aspect-video overflow-hidden rounded-md">
              <Image src="/hero.jpg" alt="IPTV pe Smart TV" fill className="object-cover" sizes="(max-width:768px) 90vw, 512px" />
            </div>
          </div>
          <div className="mx-auto mt-2 h-3 w-24 rounded-b-lg bg-[#2a2a2a]" />
          <div className="mx-auto h-1 w-40 rounded bg-[#2a2a2a]" />
          <p className="mt-3 text-center text-sm text-muted">Smart TV</p>
        </div>

        {/* Phone */}
        <div className="w-32 sm:w-40">
          <div className="rounded-[2rem] border-4 border-[#2a2a2a] bg-black p-1 shadow-2xl">
            <div className="relative aspect-[9/19] overflow-hidden rounded-[1.6rem]">
              <Image src="/hero.jpg" alt="IPTV pe telefon" fill className="object-cover" sizes="160px" />
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-muted">Telefon</p>
        </div>
      </div>

      {/* Supported platforms */}
      <div className="mt-14">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted">
          Funcționează pe toate platformele
        </p>
        <div className="relative mx-auto mt-6 max-w-4xl overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-[#0e1730] to-[#0a1020] p-6 shadow-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(242,201,76,0.10),transparent_60%)]" />
          <Image
            src="/platforms.png"
            alt="Compatibil cu Fire TV, Android TV, Apple TV, Samsung Smart TV, LG webOS, Roku, Google, NVIDIA, Windows, Hisense VIDAA, Formuler și BuzzTV"
            width={2204}
            height={480}
            className="relative h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
