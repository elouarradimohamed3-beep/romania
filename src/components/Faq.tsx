"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container-page py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-brand">FAQ</span>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Întrebări frecvente</h2>
        <p className="mt-3 text-muted">Tot ce trebuie să știi despre televiziunea online.</p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="overflow-hidden rounded-xl border border-border bg-surface">
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-medium">{f.q}</span>
                <span className={`text-brand transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
              </button>
              {isOpen && (
                <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
