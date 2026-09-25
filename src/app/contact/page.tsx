import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icons";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactează echipa Romanian IPTV prin WhatsApp, email sau formular. Suport 24/7.",
};

export default function ContactPage() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold">Contactează-ne</h1>
        <p className="mt-3 text-muted">
          Suntem aici pentru tine 24/7. Scrie-ne și îți răspundem cât mai rapid.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          <a
            href={site.whatsappLink}
            className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-brand"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
              <Icon name="whatsapp" className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-sm text-muted">WhatsApp</span>
              <span className="font-semibold">{site.whatsapp}</span>
            </span>
          </a>

          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-brand"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
              <Icon name="check" className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-sm text-muted">Email</span>
              <span className="font-semibold">{site.email}</span>
            </span>
          </a>

          <div className="rounded-2xl border border-border bg-surface p-5 text-sm text-muted">
            Suport disponibil non-stop. Timp mediu de răspuns pe WhatsApp: sub 30 de minute.
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
