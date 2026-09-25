import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="container-page py-16">
      <div className="mx-auto max-w-2xl">
        <Link href="/blog" className="text-sm text-brand">← Înapoi la blog</Link>
        <div className="mt-4 text-xs text-muted">
          {new Date(post.date).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
          {" · "}
          {post.readMinutes} min de citit
        </div>
        <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">{post.title}</h1>

        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 text-center">
          <p className="font-semibold text-foreground">Gata să încerci Romanian IPTV?</p>
          <Link
            href="/#preturi"
            className="mt-4 inline-block rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-background hover:bg-brand-strong"
          >
            Vezi abonamentele
          </Link>
        </div>
      </div>
    </article>
  );
}
