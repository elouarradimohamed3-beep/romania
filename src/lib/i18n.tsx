"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ro" | "en";

type Dict = Record<string, { ro: string; en: string }>;

// Central dictionary. Add keys here and use t("key") anywhere in a client component.
export const dict: Dict = {
  "nav.pricing": { ro: "Prețuri", en: "Pricing" },
  "nav.channels": { ro: "Canale", en: "Channels" },
  "nav.vod": { ro: "Filme", en: "Movies" },
  "nav.setup": { ro: "Configurare", en: "Setup" },
  "nav.reseller": { ro: "Reseller", en: "Reseller" },
  "nav.blog": { ro: "Blog", en: "Blog" },
  "nav.contact": { ro: "Contact", en: "Contact" },
  "nav.cta": { ro: "Abonează-te acum", en: "Subscribe now" },

  "hero.badge": { ro: "🇷🇴 IPTV România · Premium", en: "🇷🇴 Romanian IPTV · Premium" },
  "hero.title": { ro: "IPTV România", en: "Romanian IPTV" },
  "hero.tagline": {
    ro: "Poarta Ta către Divertisment Nelimitat",
    en: "Your Gateway to Unlimited Entertainment",
  },
  "hero.subtitle": {
    ro: "Bucură-te de acces la peste 55.000 de canale și 90.000 de filme la cerere, cu o garanție solidă de disponibilitate 100%.",
    en: "Enjoy access to 55,000+ live channels and 90,000+ movies on demand, with a solid 100% availability guarantee.",
  },
  "hero.ctaPrimary": { ro: "Comandă acum", en: "Order now" },
  "hero.ctaSecondary": { ro: "Încearcă gratuit", en: "Try for free" },

  "stats.channels": { ro: "Canale", en: "Channels" },
  "stats.uhd": { ro: "Streamuri UHD", en: "UHD streams" },
  "stats.support": { ro: "Suport", en: "Support" },

  "trial.title": { ro: "Testează gratuit înainte să cumperi", en: "Try it free before you buy" },
  "trial.subtitle": {
    ro: "Fără riscuri. Îți trimitem acces de test și te ajutăm la configurare.",
    en: "No risk. We send you trial access and help you set it up.",
  },

  "footer.links": { ro: "Linkuri rapide", en: "Quick links" },
  "footer.contact": { ro: "Contact", en: "Contact" },
};

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "ro",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ro");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("riptv_lang") as Lang | null;
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restore saved pref after hydration
      if (saved === "ro" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("riptv_lang", l);
    } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export function useT() {
  const { lang } = useLang();
  return (key: string) => dict[key]?.[lang] ?? key;
}
