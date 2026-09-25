"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function BuyButton({
  slug,
  devices,
  label,
  waText,
  className,
}: {
  slug: string;
  devices: number;
  label: string;
  waText: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);

  async function onClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, devices }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Stripe Checkout (external)
        return;
      }
      window.location.href = `${site.whatsappLink}?text=${encodeURIComponent(waText)}`;
    } catch {
      window.location.href = `${site.whatsappLink}?text=${encodeURIComponent(waText)}`;
    } finally {
      setLoading(false);
    }
  }

  return (
    <button onClick={onClick} disabled={loading} className={`shine ${className ?? ""}`}>
      {loading ? "Se procesează…" : label}
    </button>
  );
}
