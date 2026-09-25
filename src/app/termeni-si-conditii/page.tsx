import type { Metadata } from "next";

export const metadata: Metadata = { title: "Termeni și condiții" };

export default function Page() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-extrabold">Termeni și condiții</h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Prin utilizarea serviciilor Romanian IPTV ești de acord cu termenii de mai jos.
            Înlocuiește acest text cu termenii tăi oficiali înainte de lansare.
          </p>
          <p>
            Abonamentele sunt personale și nu pot fi partajate în afara numărului de dispozitive
            achiziționat. Serviciul este oferit „ca atare”, cu suport 24/7.
          </p>
          <p>
            Ne rezervăm dreptul de a actualiza acești termeni. Modificările vor fi publicate pe
            această pagină.
          </p>
        </div>
      </div>
    </div>
  );
}
