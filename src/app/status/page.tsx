import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Status servere",
  description: "Starea în timp real a serverelor Romanian IPTV: uptime și servicii operaționale.",
};

const services = [
  { name: "Servere Live TV", status: "Operațional", uptime: "99,98%" },
  { name: "Filme & Seriale (VOD)", status: "Operațional", uptime: "99,95%" },
  { name: "Ghid TV (EPG)", status: "Operațional", uptime: "99,90%" },
  { name: "Activare & Cont", status: "Operațional", uptime: "100%" },
  { name: "Suport", status: "Operațional", uptime: "100%" },
];

export default function StatusPage() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold">Status servere</h1>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />
          Toate sistemele funcționează
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-2xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
        {services.map((s) => (
          <div key={s.name} className="flex items-center justify-between px-5 py-4">
            <div>
              <div className="font-medium">{s.name}</div>
              <div className="text-xs text-muted">Uptime 30 zile: {s.uptime}</div>
            </div>
            <span className="inline-flex items-center gap-2 text-sm text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              {s.status}
            </span>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted">
        Datele sunt orientative. Pentru monitorizare live, conectează un serviciu precum UptimeRobot
        sau BetterStack.
      </p>
    </div>
  );
}
