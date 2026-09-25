"use client";

import { useEffect, useState } from "react";
import { plans, planIncludes } from "@/lib/site";
import BuyButton from "./BuyButton";
import { Icon } from "./Icons";

const KEY = "riptv_exit_shown";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const plan = plans.find((p) => p.slug === "12-luni") ?? plans[plans.length - 1];

  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY)) return;
    } catch {}

    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        try {
          sessionStorage.setItem(KEY, "1");
        } catch {}
        document.removeEventListener("mouseout", onLeave);
      }
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" onClick={() => setShow(false)}>
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-brand/50 bg-surface p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => setShow(false)} className="absolute right-4 top-4 text-muted hover:text-foreground" aria-label="Închide">
          ✕
        </button>

        <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
          OFERTĂ 1 AN · {plan.discount}
        </span>
        <h2 className="mt-4 text-2xl font-bold">Stai puțin! 🎁</h2>
        <p className="mt-2 text-muted">
          Ia abonamentul pe <span className="font-semibold text-foreground">12 luni</span> la cel mai
          bun preț al anului.
        </p>

        <div className="mt-5 flex items-end justify-center gap-2">
          <span className="text-5xl font-extrabold">{plan.price}€</span>
          <span className="mb-2 text-sm text-muted">/ 12 luni</span>
        </div>

        <ul className="mx-auto mt-5 max-w-xs space-y-2 text-left text-sm">
          {planIncludes.slice(0, 4).map((item) => (
            <li key={item} className="flex gap-2 text-muted">
              <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              {item}
            </li>
          ))}
        </ul>

        <BuyButton
          slug={plan.slug}
          devices={1}
          label={`Cumpără acum – ${plan.price}€`}
          waText={`Salut! Vreau oferta pe 12 luni (1 dispozitiv) - ${plan.price}€.`}
          className="mt-6 block w-full rounded-full bg-accent px-7 py-3 font-semibold text-white transition-colors hover:bg-red-600"
        />
        <button onClick={() => setShow(false)} className="mt-3 text-xs text-muted hover:text-foreground">
          Nu, mulțumesc
        </button>
      </div>
    </div>
  );
}
