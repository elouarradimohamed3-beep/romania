"use client";

import { useEffect, useState } from "react";

const KEY = "riptv_cookie_consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- show banner after hydration
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      // storage blocked — don't show, don't crash
    }
  }, []);

  function decide(value: "accepted" | "rejected") {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-2xl border border-border bg-surface/95 p-4 shadow-2xl backdrop-blur sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Folosim cookie-uri pentru a îmbunătăți experiența ta și pentru statistici. Vezi{" "}
          <a href="/politica-de-confidentialitate" className="text-brand underline">politica de confidențialitate</a>.
        </p>
        <div className="flex shrink-0 gap-2">
          <button onClick={() => decide("rejected")} className="rounded-full border border-border px-4 py-2 text-sm hover:bg-surface-2">
            Refuz
          </button>
          <button onClick={() => decide("accepted")} className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-background hover:bg-brand-strong">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
