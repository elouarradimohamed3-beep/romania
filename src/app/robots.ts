import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${site.domain}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search engines
      { userAgent: "*", allow: "/", disallow: ["/succes", "/anulat", "/api/"] },
      // AI / generative engines (GEO) — explicitly allowed so the site can be cited
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
