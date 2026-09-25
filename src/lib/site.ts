export const site = {
  name: "Romanian IPTV",
  domain: "romanianiptv.ro",
  tagline: "Poarta Ta către Divertisment Nelimitat",
  whatsapp: "+212707711512",
  whatsappLink: "https://wa.me/212707711512",
  email: "goldengateiptv@gmail.com",
  channels: "55.000+",
  vod: "90.000+",
  uptime: "99,9%",
} as const;

export type Plan = {
  slug: string;
  duration: string;
  devices: string;
  price: number;
  discount: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    slug: "3-luni",
    duration: "3 Luni",
    devices: "1 Dispozitiv",
    price: 32,
    discount: "65% OFF",
  },
  {
    slug: "6-luni",
    duration: "6 Luni",
    devices: "1 Dispozitiv",
    price: 42,
    discount: "65% OFF",
    featured: true,
  },
  {
    slug: "12-luni",
    duration: "12 Luni",
    devices: "1 Dispozitiv",
    price: 62,
    discount: "65% OFF",
  },
];

export type DeviceOption = {
  id: string;
  devices: number;
  label: string;
  multiplier: number;
};

// Multi-device packages (from the old site's 1/2/3 device packs).
export const deviceOptions: DeviceOption[] = [
  { id: "1", devices: 1, label: "1 Dispozitiv", multiplier: 1 },
  { id: "2", devices: 2, label: "2 Dispozitive", multiplier: 1.5 },
  { id: "3", devices: 3, label: "3 Dispozitive", multiplier: 1.8 },
];

export function priceFor(base: number, multiplier: number) {
  return Math.round(base * multiplier);
}

export const planIncludes: string[] = [
  "Peste 55.000 de canale live globale",
  "+90.000 filme și seriale la cerere",
  "Toate canalele românești",
  "Toate canalele sportive premium",
  "Toate platformele locale și globale",
  "Funcție Time-Shift & Ghid TV (EPG)",
  "Calitate SD, HD, FHD și 4K",
  "Actualizări zilnice",
  "Fără nevoie de VPN (VPN inclus)",
  "Garanție de returnare a banilor în 7 zile",
  "Suport 24/7 prin WhatsApp & Email",
];

export const features = [
  {
    title: "Servere rapide și stabile",
    body: "Experimentează 99,9% uptime, fără buffering și fără întreruperi.",
    icon: "bolt",
  },
  {
    title: "Schimbare gratuită a serverului",
    body: "Dacă lipsește un canal sau conținut, solicită o schimbare gratuită a serverului și rezolvăm rapid.",
    icon: "refresh",
  },
  {
    title: "Tehnologie Multi-Server",
    body: "În cazul problemelor de acces, sistemul nostru Multi-Server îți actualizează rapid conexiunea.",
    icon: "server",
  },
  {
    title: "Activare gratuită a aplicației",
    body: "Configurarea este simplă – abonează-te și activăm aplicația ta fără costuri suplimentare.",
    icon: "check",
  },
  {
    title: "Ușor de configurat",
    body: "Conectarea la IPTV este floare la ureche – durează doar 15 minute.",
    icon: "clock",
  },
  {
    title: "Încearcă înainte să cumperi",
    body: "Testează soluția noastră IPTV cu multiple servere, complet fără riscuri și gratuit.",
    icon: "gift",
  },
] as const;

export const steps = [
  {
    n: 1,
    title: "Plasează comanda",
    body: "Alege planul IPTV România potrivit stilului tău de vizionare.",
  },
  {
    n: 2,
    title: "Creează-ți contul",
    body: "Activează serviciul în câteva minute – fără echipamente și fără instalare.",
  },
  {
    n: 3,
    title: "Bucură-te de serviciul IPTV!",
    body: "Bucură-te de televiziunea românească online în calitate Full HD / 4K.",
  },
] as const;

export const testimonials = [
  {
    name: "Andrei M.",
    location: "București",
    body: "Cel mai stabil serviciu pe care l-am folosit. Fără buffering la meciuri, exact ce aveam nevoie.",
  },
  {
    name: "Elena D.",
    location: "Cluj-Napoca",
    body: "Configurare rapidă și suport prompt pe WhatsApp. Toate canalele românești sunt acolo.",
  },
  {
    name: "Ionuț P.",
    location: "Diaspora, Spania",
    body: "În sfârșit pot urmări TV românesc din străinătate în calitate 4K. Recomand cu încredere.",
  },
  {
    name: "Maria V.",
    location: "Timișoara",
    body: "Raport calitate-preț excelent. Am testat gratuit înainte și am rămas abonată.",
  },
] as const;

export const faqs = [
  {
    q: "Cum pot plăti?",
    a: "Poți plăti în siguranță prin PayPal sau card de credit / debit. Accesul se activează imediat după confirmarea plății.",
  },
  {
    q: "De ce am nevoie pentru a începe să folosesc IPTV în România?",
    a: "Ai nevoie doar de o conexiune la internet stabilă (minim 15 Mbps) și un dispozitiv compatibil: Smart TV, telefon, tabletă, Android Box, Fire Stick sau computer.",
  },
  {
    q: "În ce se diferențiază IPTV România de televiziunea prin cablu?",
    a: "Oferim mai mult conținut la un preț mult mai mic, fără contract pe termen lung, cu filme și seriale la cerere și acces de oriunde din lume.",
  },
  {
    q: "Cât de repede voi primi accesul după plată?",
    a: "În mod normal accesul este activat în câteva minute după plată. În cazuri rare poate dura până la 60 de minute.",
  },
  {
    q: "Am nevoie de VPN pentru a folosi serviciul IPTV?",
    a: "Nu este necesar un VPN separat – oferim o soluție optimizată. Dacă dorești, poți folosi și un VPN fără probleme.",
  },
  {
    q: "Oferiți servicii de reseller?",
    a: "Da. Oferim una dintre cele mai calitative platforme IPTV pentru reselleri. Contactează-ne pe WhatsApp pentru regulament și prețuri.",
  },
] as const;

export type ChannelGroup = { category: string; channels: string[] };

// Sample channel line-up. Replace with your real list before launch.
export const channelGroups: ChannelGroup[] = [
  {
    category: "Sport",
    channels: ["Digi Sport 1-4", "Prima Sport 1-4", "Eurosport 1/2", "Sky Sports", "beIN Sports", "DAZN"],
  },
  {
    category: "Filme & Seriale",
    channels: ["HBO Max", "Netflix VOD", "AXN", "Film Now", "Pro Cinema", "Cinemax"],
  },
  {
    category: "Generaliste RO",
    channels: ["Pro TV", "Antena 1", "Kanal D", "Prima TV", "TVR 1", "TVR 2"],
  },
  {
    category: "Știri",
    channels: ["Digi24", "Antena 3 CNN", "Realitatea", "România TV", "Euronews", "CNN"],
  },
  {
    category: "Copii",
    channels: ["Cartoon Network", "Disney Channel", "Nickelodeon", "Minimax", "Boomerang"],
  },
  {
    category: "Documentare",
    channels: ["National Geographic", "Discovery", "Animal Planet", "History", "Viasat"],
  },
];

export type VodItem = { title: string; genre: string; year: number; badge?: string };

export const vodShowcase: VodItem[] = [
  { title: "Acțiune Extremă", genre: "Acțiune", year: 2026, badge: "NOU" },
  { title: "Mister în Oraș", genre: "Thriller", year: 2025 },
  { title: "Comedie de Familie", genre: "Comedie", year: 2026, badge: "4K" },
  { title: "Drama Anului", genre: "Dramă", year: 2025 },
  { title: "Aventuri SF", genre: "SF", year: 2026, badge: "NOU" },
  { title: "Poveste de Iubire", genre: "Romantic", year: 2024 },
  { title: "Serial Polițist", genre: "Crimă", year: 2026, badge: "SERIAL" },
  { title: "Documentar Natură", genre: "Documentar", year: 2025, badge: "4K" },
];

export type HelpCategory = {
  title: string;
  icon: string;
  articles: { q: string; a: string }[];
};

export const helpCenter: HelpCategory[] = [
  {
    title: "Primii pași",
    icon: "gift",
    articles: [
      { q: "Cum îmi activez abonamentul?", a: "După plată primești datele de acces pe email. Le introduci în aplicația de player și ești gata." },
      { q: "Cât durează activarea?", a: "De obicei câteva minute, maxim 60 de minute în cazuri rare." },
    ],
  },
  {
    title: "Configurare dispozitive",
    icon: "server",
    articles: [
      { q: "Configurare pe Smart TV", a: "Instalează aplicația de player din magazin, introdu datele de acces și reîncarcă lista de canale." },
      { q: "Configurare pe Fire Stick", a: "Instalează aplicația, adaugă linkul de abonament și pornește vizionarea în 4K." },
    ],
  },
  {
    title: "Plăți & abonament",
    icon: "check",
    articles: [
      { q: "Ce metode de plată acceptați?", a: "Card de credit/debit și PayPal, securizat prin Stripe." },
      { q: "Cum reînnoiesc abonamentul?", a: "Poți comanda din nou de pe pagina de prețuri sau ne scrii pe WhatsApp." },
    ],
  },
  {
    title: "Depanare",
    icon: "refresh",
    articles: [
      { q: "Un canal nu funcționează", a: "Cere o schimbare gratuită a serverului pe WhatsApp și rezolvăm rapid." },
      { q: "Am buffering", a: "Verifică viteza internetului (minim 15 Mbps) și repornește aplicația." },
    ],
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "ce-este-iptv",
    title: "Ce este IPTV și cum funcționează în 2026",
    excerpt:
      "Un ghid simplu despre televiziunea prin internet: cum funcționează, ce avantaje are și de ce înlocuiește cablul clasic.",
    date: "2026-09-01",
    readMinutes: 5,
    body: [
      "IPTV (Internet Protocol Television) înseamnă transmiterea canalelor TV și a filmelor prin internet, în locul cablului tradițional sau al antenei de satelit.",
      "În loc de o parabolă sau un abonament de cablu, ai nevoie doar de o conexiune la internet stabilă și de un dispozitiv compatibil, cum ar fi un Smart TV, telefon, tabletă sau Android Box.",
      "Avantajul principal este flexibilitatea: poți urmări canalele tale preferate de oriunde, cu funcții precum Time-Shift și ghid TV (EPG), plus zeci de mii de filme și seriale la cerere.",
      "Cu Romanian IPTV ai acces la peste 55.000 de canale și 90.000 de titluri VOD, în calitate până la 4K, cu suport 24/7.",
    ],
  },
  {
    slug: "cum-configurezi-iptv-smart-tv",
    title: "Cum configurezi IPTV pe Smart TV în 15 minute",
    excerpt:
      "Pași simpli pentru a instala și activa serviciul IPTV pe televizorul tău Smart, Fire Stick sau Android Box.",
    date: "2026-09-10",
    readMinutes: 4,
    body: [
      "Configurarea IPTV este mult mai simplă decât pare. În majoritatea cazurilor durează sub 15 minute.",
      "Pasul 1: Instalează o aplicație compatibilă (de exemplu o aplicație de player IPTV) din magazinul de aplicații al televizorului.",
      "Pasul 2: Introdu datele de acces primite de la noi după activare (linkul de abonament sau datele de conectare).",
      "Pasul 3: Așteaptă încărcarea listei de canale și a ghidului TV. Gata – poți începe să vizionezi.",
      "Dacă întâmpini probleme, echipa noastră te ajută pas cu pas pe WhatsApp.",
    ],
  },
  {
    slug: "iptv-pentru-sport",
    title: "IPTV pentru sport: urmărește toate ligile live",
    excerpt:
      "De la fotbal la Formula 1 – cum să prinzi toate competițiile importante în calitate HD și 4K, fără buffering.",
    date: "2026-09-18",
    readMinutes: 3,
    body: [
      "Pasionații de sport aleg IPTV pentru accesul la un număr uriaș de canale sportive premium din întreaga lume.",
      "Poți urmări fotbal din ligile mari, tenis, baschet, Formula 1 și multe altele, în calitate HD și 4K.",
      "Datorită tehnologiei Multi-Server, transmisiunile rămân stabile chiar și în timpul meciurilor cu trafic ridicat.",
      "Dacă un canal lipsește, poți cere o schimbare gratuită a serverului și îl adăugăm rapid.",
    ],
  },
  {
    slug: "iptv-vs-cablu",
    title: "IPTV vs. cablu TV: care este mai bun în 2026?",
    excerpt:
      "Comparație clară între IPTV și televiziunea prin cablu la capitolul preț, conținut, flexibilitate și calitate.",
    date: "2026-09-05",
    readMinutes: 5,
    body: [
      "Televiziunea prin cablu a dominat ani de zile, dar IPTV a schimbat regulile jocului. Iată principalele diferențe.",
      "Preț: IPTV costă de obicei mult mai puțin decât un abonament de cablu, fără taxe ascunse și fără contract pe termen lung.",
      "Conținut: cu IPTV ai acces la zeci de mii de canale internaționale și la o bibliotecă uriașă de filme și seriale la cerere.",
      "Flexibilitate: urmărești de pe orice dispozitiv, oriunde ai internet, spre deosebire de cablu care e legat de o singură locație.",
      "Concluzie: pentru majoritatea utilizatorilor, IPTV oferă mai mult conținut și mai multă libertate la un preț mai mic.",
    ],
  },
  {
    slug: "iptv-diaspora-romani",
    title: "IPTV pentru românii din diaspora: TV de acasă, oriunde",
    excerpt:
      "Cum urmăresc românii din străinătate canalele preferate în limba română, în timp real și la calitate 4K.",
    date: "2026-09-22",
    readMinutes: 4,
    body: [
      "Pentru românii care trăiesc în străinătate, dorul de acasă include și televiziunea în limba română.",
      "Cu IPTV ai acces la toate canalele românești importante, plus filme și seriale, indiferent de țara în care te afli.",
      "Nu ai nevoie de antenă sau de abonament local scump. E suficientă o conexiune la internet stabilă.",
      "Fusul orar nu mai e o problemă datorită funcției Time-Shift și a conținutului la cerere.",
      "Este soluția ideală pentru a rămâne conectat la cultura și evenimentele din România.",
    ],
  },
  {
    slug: "iptv-pe-fire-stick",
    title: "Cum instalezi IPTV pe Amazon Fire Stick",
    excerpt:
      "Ghid rapid pentru a transforma orice televizor într-un Smart TV cu IPTV, folosind un Fire Stick.",
    date: "2026-08-28",
    readMinutes: 4,
    body: [
      "Amazon Fire Stick este unul dintre cele mai populare dispozitive pentru IPTV, datorită prețului mic și ușurinței de utilizare.",
      "Pasul 1: Conectează Fire Stick-ul la televizor și la internet.",
      "Pasul 2: Instalează o aplicație de player IPTV din magazin sau prin sideload.",
      "Pasul 3: Introdu datele de acces primite de la noi și reîncarcă lista de canale.",
      "În câteva minute ai acces la mii de canale în calitate HD și 4K, direct pe televizorul tău.",
    ],
  },
  {
    slug: "cum-alegi-abonament-iptv-ieftin",
    title: "Cum alegi un abonament IPTV ieftin și de calitate",
    excerpt:
      "La ce să te uiți când cauți un abonament IPTV bun: stabilitate, suport, calitate și preț corect.",
    date: "2026-08-20",
    readMinutes: 5,
    body: [
      "Prețul mic nu înseamnă întotdeauna o afacere bună. Iată la ce să fii atent când alegi un serviciu IPTV.",
      "Stabilitate: caută servicii cu uptime ridicat și tehnologie multi-server pentru a evita bufferingul.",
      "Suport: un suport rapid, disponibil 24/7 pe WhatsApp, face diferența când ai o problemă.",
      "Calitate: verifică dacă serviciul oferă SD, HD, FHD și 4K, plus filme la cerere actualizate.",
      "Garanție: alege un furnizor care oferă test gratuit și garanție de returnare a banilor.",
      "Romanian IPTV bifează toate aceste criterii la un preț corect.",
    ],
  },
];
