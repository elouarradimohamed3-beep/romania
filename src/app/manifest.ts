import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Romanian IPTV",
    short_name: "RO IPTV",
    description: "IPTV România – 55.000+ canale live și 90.000+ filme la cerere în 4K.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f19",
    theme_color: "#0b0f19",
    icons: [
      { src: "/hero.jpg", sizes: "512x512", type: "image/jpeg", purpose: "any" },
    ],
  };
}
