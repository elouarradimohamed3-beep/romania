"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { plans } from "@/lib/site";

export default function MobileCta() {
  const [show, setShow] = useState(false);
  const plan = plans.find((p) => p.slug === "12-luni") ?? plans[plans.length - 1];

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <div className="truncate text-sm font-bold leading-tight">
            {plan.discount} pe timp limitat
          </div>
          <div className="text-xs text-muted">De la {plan.price}€ / 12 luni</div>
        </div>
        <Link
          href="/#preturi"
          className="shrink-0 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-background transition-colors hover:bg-brand-strong"
        >
          Vezi planuri
        </Link>
      </div>
    </div>
  );
}
