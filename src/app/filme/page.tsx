import type { Metadata } from "next";
import Link from "next/link";
import { vodShowcase, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Filme & Seriale",
  description: "Peste 90.000 de filme și seriale la cerere în calitate până la 4K, cu Romanian IPTV.",
};

const gradients = [
  "from-indigo-600/40 to-purple-900/40",
  "from-rose-600/40 to-orange-900/40",
  "from-emerald-600/40 to-teal-900/40",
  "from-sky-600/40 to-blue-900/40",
  "from-amber-600/40 to-red-900/40",
  "from-fuchsia-600/40 to-pink-900/40",
];

export default function VodPage() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold">Filme & Seriale</h1>
        <p className="mt-3 text-muted">
          Peste {site.vod} de titluri la cerere, actualizate zilnic, în calitate până la 4K.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {vodShowcase.map((v, i) => (
          <div
            key={v.title}
            className={`group relative flex aspect-[2/3] flex-col justify-end overflow-hidden rounded-xl border border-border bg-gradient-to-br ${gradients[i % gradients.length]} p-4`}
          >
            {v.badge && (
              <span className="absolute left-2 top-2 rounded-md bg-accent px-2 py-0.5 text-[10px] font-bold text-white">
                {v.badge}
              </span>
            )}
            <div className="text-sm font-bold text-white">{v.title}</div>
            <div className="text-xs text-white/70">{v.genre} · {v.year}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/#preturi" className="inline-block rounded-full bg-brand px-7 py-3 font-semibold text-background hover:bg-brand-strong">
          Vezi abonamentele
        </Link>
      </div>
    </div>
  );
}
