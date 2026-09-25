import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Ghiduri, noutăți și sfaturi despre IPTV România: configurare, sport, filme și seriale.",
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold">Blog</h1>
        <p className="mt-3 text-muted">
          Ghiduri și sfaturi despre televiziunea online și serviciile IPTV.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
        {sorted.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-brand"
          >
            <div className="text-xs text-muted">
              {new Date(p.date).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
              {" · "}
              {p.readMinutes} min
            </div>
            <h2 className="mt-2 text-lg font-semibold group-hover:text-brand">{p.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.excerpt}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-brand">Citește mai mult →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
