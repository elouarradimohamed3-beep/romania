import type { Metadata } from "next";

export const metadata: Metadata = { title: "Politica de returnare" };

export default function Page() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-extrabold">Politica de returnare</h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Oferim o garanție de returnare a banilor pentru clienții noi. Dacă serviciul nu
            funcționează conform așteptărilor, ne poți contacta pentru rezolvare sau rambursare.
          </p>
          <p>
            Înainte de o rambursare, echipa noastră va încerca să rezolve problema, inclusiv printr-o
            schimbare gratuită a serverului.
          </p>
          <p>Înlocuiește acest text cu politica ta oficială de returnare înainte de lansare.</p>
        </div>
      </div>
    </div>
  );
}
