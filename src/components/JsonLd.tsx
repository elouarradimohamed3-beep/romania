import { site, plans, faqs, steps, testimonials } from "@/lib/site";

export default function JsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${site.domain}`;

  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${base}/#organization`,
      name: site.name,
      url: base,
      logo: `${base}/icon.svg`,
      image: `${base}/hero.jpg`,
      email: site.email,
      slogan: site.tagline,
      areaServed: ["RO", "EU", "Worldwide"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.whatsapp,
        contactType: "customer support",
        availableLanguage: ["ro", "en"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${base}/#website`,
      url: base,
      name: site.name,
      inLanguage: "ro-RO",
      publisher: { "@id": `${base}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${base}/canale?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Abonament Romanian IPTV",
      serviceType: "IPTV streaming",
      provider: { "@id": `${base}/#organization` },
      areaServed: ["RO", "EU", "Worldwide"],
      description: `Serviciu IPTV cu ${site.channels} canale live și ${site.vod} filme la cerere, în calitate până la 4K.`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Abonament Romanian IPTV",
      description: `IPTV România cu ${site.channels} canale live și ${site.vod} filme la cerere, calitate până la 4K, uptime ${site.uptime}.`,
      brand: { "@type": "Brand", name: site.name },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "3200",
        bestRating: "5",
      },
      review: testimonials.map((t) => ({
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: t.name },
        reviewBody: t.body,
      })),
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: Math.min(...plans.map((p) => p.price)),
        highPrice: Math.max(...plans.map((p) => p.price)),
        offerCount: plans.length,
        availability: "https://schema.org/InStock",
        offers: plans.map((p) => ({
          "@type": "Offer",
          name: `Abonament VIP ${p.duration}`,
          price: p.price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${base}/#preturi`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Cum să cumperi un abonament IPTV România",
      totalTime: "PT15M",
      step: steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title,
        text: s.body,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: base },
        { "@type": "ListItem", position: 2, name: "Prețuri", item: `${base}/#preturi` },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
