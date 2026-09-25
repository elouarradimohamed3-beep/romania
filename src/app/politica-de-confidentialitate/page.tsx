import type { Metadata } from "next";

export const metadata: Metadata = { title: "Politica de confidențialitate" };

export default function Page() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-extrabold">Politica de confidențialitate</h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Această pagină descrie modul în care Romanian IPTV colectează, folosește și protejează
            datele tale personale. Înlocuiește acest text cu politica ta oficială înainte de lansare.
          </p>
          <p>
            Colectăm doar datele necesare pentru procesarea comenzii și oferirea suportului: nume,
            email și detaliile abonamentului. Nu vindem datele tale către terți.
          </p>
          <p>
            Pentru orice solicitare privind datele tale, ne poți contacta la adresa de email din
            secțiunea Contact.
          </p>
        </div>
      </div>
    </div>
  );
}
