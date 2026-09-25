# Romanian IPTV — Next.js

Website nou pentru romanianiptv.ro, construit cu Next.js 16 (App Router), TypeScript și Tailwind CSS v4.

## Rulare locală

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producție
npm start        # rulează build-ul
```

## Structură

- `src/lib/site.ts` — **datele site-ului** (planuri, prețuri, features, FAQ, testimoniale, articole blog, WhatsApp, email). Editează aici.
- `src/app/page.tsx` — pagina principală (hero, features, prețuri, pași, testimoniale, FAQ, reseller).
- `src/app/configurare/` — ghid de configurare pe dispozitive.
- `src/app/blog/` — listă articole + pagini individuale (`/blog/[slug]`).
- `src/app/contact/` — pagină contact cu formular funcțional.
- `src/app/api/contact/route.ts` — primește formularul (momentan doar loghează; conectează Resend/Nodemailer).
- `src/components/` — Navbar, Footer, Pricing, Faq, WhatsAppButton, Icons.
- `src/app/globals.css` — tema (culori: gold, roșu, albastru pe fundal întunecat).

## Funcții „pro" adăugate

Toate funcțiile de mai jos funcționează fără chei (au fallback), dar devin complete când
completezi `.env.local` (copiază din `.env.example`).

- **Checkout real (Stripe)** — `STRIPE_SECRET_KEY`. Fără cheie, butonul „Comandă" trimite pe WhatsApp.
- **Email formulare (Resend)** — `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. Fără cheie, mesajele se loghează în server.
- **Test gratuit** — secțiunea „Testează gratuit" (`#test-gratuit`) trimite la `/api/trial`.
- **Analytics** — `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` sau `NEXT_PUBLIC_GA_ID`.
- **Multi-language RO/EN** — comutator în meniu. Textele sunt în `src/lib/i18n.tsx` (adaugă chei acolo).
- **Animații la scroll** — `src/components/Reveal.tsx` (Framer Motion).
- **Trust signals** — `src/components/TrustBar.tsx` (rating, garanții, metode de plată).
- **Countdown ofertă** — `src/components/Countdown.tsx`.
- **Cookie consent** — `src/components/CookieConsent.tsx`.
- **SEO structurat (JSON-LD)** — `src/components/JsonLd.tsx` (Organization, Product, FAQ).
- **Showcase canale & dispozitive** — `ChannelWall.tsx`, `DeviceMockups.tsx`.
- **Widget WhatsApp** — popup de chat în `src/components/WhatsAppButton.tsx`.

## Funcții avansate (lotul 2)

- **Planuri multi-dispozitiv** — selector 1/2/3 dispozitive pe pagina de prețuri (`src/lib/site.ts` → `deviceOptions`).
- **Coduri de reducere** — activate automat la Stripe Checkout (`allow_promotion_codes`).
- **Livrare automată a datelor de acces** — webhook Stripe (`/api/webhooks/stripe`) generează credențiale și le trimite pe email. Setează `STRIPE_WEBHOOK_SECRET`. Înlocuiește `src/lib/credentials.ts` cu apelul către panoul tău IPTV real.
- **Pagină listă canale** — căutare + filtrare (`/canale`).
- **Showcase filme & seriale** — `/filme`.
- **Centru de ajutor** — `/ajutor` (conținut în `helpCenter`).
- **Program reseller** — pagină + formular + taxe (`/reseller`).
- **Status servere** — `/status` (conectează UptimeRobot/BetterStack pentru date live).
- **Popup exit-intent** — oferă testul gratuit când vizitatorul dă să plece.
- **Protecție anti-spam (honeypot)** — pe toate formularele.
- **PWA** — `manifest.webmanifest`, instalabil pe telefon.
- **Trustpilot** — widget opțional (`NEXT_PUBLIC_TRUSTPILOT_ID`).
- **Reminder reînnoire** — schelet cron la `/api/cron/renewals` (necesită bază de date).

## Necesită bază de date + autentificare (neincluse)

Aceste funcții au nevoie de o bază de date și un sistem de conturi pe care le configurezi tu
(recomandat: Supabase, Neon sau PlanetScale + NextAuth/Clerk):

- **Conturi clienți + dashboard** (abonament, expirare, reînnoire cu un click).
- **Panou de administrare** (editare planuri/prețuri/articole fără cod).
- **Remindere de reînnoire automate** (ruta cron există, dar are nevoie de lista de clienți).
- **A/B testing** pe prețuri și hero.

Spune-mi ce bază de date preferi și le construiesc.

## De personalizat înainte de lansare

1. **Contact**: WhatsApp și email în `src/lib/site.ts`.
2. **Prețuri**: array-ul `plans` în `src/lib/site.ts`.
3. **Plată**: butoanele de comandă trimit acum spre WhatsApp. Pentru PayPal/Stripe, înlocuiește linkurile din `src/components/Pricing.tsx`.
4. **Formular contact**: adaugă un provider de email în `src/app/api/contact/route.ts`.
5. **Pagini legale**: textele din `politica-de-*` și `termeni-si-conditii` sunt provizorii.
6. **Domeniu**: `site.domain` în `src/lib/site.ts` (folosit pentru sitemap și metadata).

## Deploy

Recomandat pe Vercel: conectează repo-ul și se deployează automat. Alternativ, orice host care rulează `npm run build && npm start`.
