import { Icon } from "./Icons";
import PaymentLogos from "./PaymentLogos";

const badges = [
  { label: "Garanție 100% returnare bani", icon: "check" },
  { label: "Activare în câteva minute", icon: "clock" },
  { label: "Fără contract, anulezi oricând", icon: "refresh" },
  { label: "Suport 24/7 dedicat", icon: "server" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-surface/60">
      <div className="container-page py-8">
        {/* rating */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="text-brand text-lg">★★★★★</div>
          <p className="text-sm text-muted">
            <span className="font-semibold text-foreground">4.9/5</span> din peste{" "}
            <span className="font-semibold text-foreground">3.200</span> de recenzii ale clienților
          </p>
        </div>

        {/* trust badges */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 text-brand">
                <Icon name={b.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm">{b.label}</span>
            </div>
          ))}
        </div>

        {/* payment methods */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <span className="text-xs text-muted">Plată securizată:</span>
          <PaymentLogos />
        </div>
      </div>
    </section>
  );
}
