import type { MetadataRoute } from "next";
import { posts, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const routes = [
    "",
    "/canale",
    "/filme",
    "/configurare",
    "/ajutor",
    "/reseller",
    "/status",
    "/blog",
    "/contact",
    "/politica-de-confidentialitate",
    "/politica-de-returnare",
    "/termeni-si-conditii",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
  const blog = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));
  return [...routes, ...blog];
}
