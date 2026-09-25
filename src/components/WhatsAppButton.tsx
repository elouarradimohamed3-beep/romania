"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Icon } from "./Icons";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-72 overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
          <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
              <Icon name="whatsapp" className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-semibold">Romanian IPTV</div>
              <div className="text-xs text-white/80">De obicei răspunde în câteva minute</div>
            </div>
          </div>
          <div className="p-4">
            <div className="rounded-xl rounded-tl-none bg-surface-2 px-3 py-2 text-sm text-muted">
              Salut! 👋 Cu ce te putem ajuta? Scrie-ne pentru o ofertă sau un test gratuit.
            </div>
            <a
              href={`${site.whatsappLink}?text=${encodeURIComponent("Salut! Aș vrea mai multe detalii despre IPTV România.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-full bg-[#25D366] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Începe conversația
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Scrie-ne pe WhatsApp"
        aria-expanded={open}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        {open ? <span className="text-xl">✕</span> : <Icon name="whatsapp" className="h-7 w-7" />}
      </button>
    </div>
  );
}
