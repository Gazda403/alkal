export const COMPANY_INFO = {
  name: "ALKAL",
  legalName: 'ALKAL" Dario Kalezić s.p. Banja Luka',
  tagline: "ALU I PVC STOLARIJA BANJA LUKA",
  owner: "Dario Kalezić",
  phone: "066 530 113",
  phoneRaw: "+38766530113",
  phoneDisplay: "066 530 113",
  viberUrl: "https://viber.click/38766530113",
  whatsappUrl: "https://wa.me/38766530113?text=Poštovani,%20zainteresovan%20sam%20za%20ponudu%20ALKAL%20stolarije",
  address: "Bistrica bb, 78000 Banja Luka, Bosna i Hercegovina",
  coverage: "Banja Luka, Laktaši, Čelinac, Gradiška, Prijedor i cijela regija",
  foundedYear: "2017",
  foundedDate: "20.10.2017.",
  workingHours: "Ponedjeljak – Subota: 08:00 – 18:00",
  coordinates: "44.7722° N, 17.1910° E",
  email: "alkal.stolarija@gmail.com"
};

export const VALUE_PROPS = [
  {
    step: "01.",
    title: "PRECIZNO MJERENJE",
    subtitle: "BEZ GREŠKE I BEZ NAKNADE",
    desc: "Vlasnik Dario Kalezić lično ili ovlašteni inženjer dolazi na vašu lokaciju u Banjoj Luci i regiji. Lasersko uzimanje mjera u milimetar i besplatno stručno savjetovanje."
  },
  {
    step: "02.",
    title: "A+++ IZOLACIJA",
    subtitle: "UŠTEDA DO 40% ENERGIJE",
    desc: "Njemački 6 i 7-komorni profili sa dubinom do 88mm. Troslojno niskoemisiono staklo punjeno argonom zadržava toplotu zimi, a svježinu ljeti."
  },
  {
    step: "03.",
    title: "GARANCIJA & MONTAŽA",
    subtitle: "ČISTO I DUGOTRAJNO",
    desc: "Ugradnja po propisanim standardima bez nepotrebnog oštećenja zidova. Pažljivo demontiramo staru stolariju uz pismenu garanciju na profil i okove."
  }
];

export const PRODUCTS = [
  {
    id: "pvc",
    category: "PVC STOLARIJA",
    name: "ALKAL Premium PVC Prozori i Balkonska Vrata",
    badge: "NAJTRAŽENIJE ZA DOMOVE",
    image: "/images/real/pvc-prozori-isporuka.jpg",
    specs: [
      { label: "Toplotna izolacija", value: "Uw ≤ 0.76 W/m²K" },
      { label: "Broj komora", value: "6 & 7 komora" },
      { label: "Zvučna izolacija", value: "Do 46 dB redukcije" },
      { label: "Staklo paket", value: "Troslojno 44mm Low-E + Argon" },
      { label: "Dubina profila", value: "76 mm – 88 mm" },
      { label: "Sigurnost", value: "Siegenia / Maco protivprovalni okov" }
    ],
    desc: "Vrhunski višekomorni profili koji spajaju maksimalnu energetsku efikasnost, tišinu u domu i elegantne ravne linije u antracit sivoj, bijeloj ili teksturi drveta.",
    idealFor: "Porodične kuće, novogradnju, zamjenu dotrajale stolarije na stanovima."
  },
  {
    id: "alu",
    category: "ZATVORENE TERASE",
    name: "Zatvorena Terasa (Zastakljivanje Terasa & Balkona)",
    badge: "PRODUŽEN ŽIVOTNI PROSTOR",
    image: "/images/zatvorena-terasa.jpg",
    specs: [
      { label: "Konstrukcija", value: "ALU i PVC profili sa termo prekidom" },
      { label: "Klizni sistemi", value: "Klizna i harmonika staklena krila" },
      { label: "Zaštita", value: "Ugrađene vanjske roletne" },
      { label: "Iskoristivost", value: "Ugodan prostor tokom svih 4 godišnja doba" },
      { label: "Zaptivanje", value: "EPDM brtve protiv kiše i vjetra" },
      { label: "Prilagođavanje", value: "100% po mjeri vaše terase" }
    ],
    desc: "Kompletno zatvaranje i zastakljivanje terasa i balkona. Pretvorite vašu terasu u funkcionalan, topao i zaštićen prostor za uživanje tokom cijele godine, sa kliznim stijenama i ugrađenim roletnama.",
    idealFor: "Porodične kuće, vikendice, balkone stanova i ugostiteljske prostore."
  },
  {
    id: "vrata",
    category: "ULAZNA VRATA",
    name: "ALKAL Sigurnosna ALU & PVC Ulazna Vrata",
    badge: "RADIONIČKA IZRADA PO MJERI",
    image: "/images/real/vrata-antracit.jpg",
    specs: [
      { label: "Debljina panela", value: "Termoizolacioni panel sa čeličnim ojačanjem" },
      { label: "Zaključavanje", value: "Višetačkasto sigurnosno zaključavanje" },
      { label: "Dizajn", value: "Inox aplikacije & Saten stakla" },
      { label: "Bojanja", value: "Antracit, Tamni Hrast, Bijela" },
      { label: "Šarke", value: "3D podesive ojačane šarke" },
      { label: "Brtvljenje", value: "Dvostruke i trostruke EPDM gume" }
    ],
    desc: "Sigurna, stabilna i toplotno izolovana ulazna vrata izrađena u našoj radionici u Banjoj Luci po tačnim dimenzijama vašeg ulaza.",
    idealFor: "Kuće, ulaze u stambene objekte i poslovne prostore."
  },
  {
    id: "roletne",
    category: "PRATEĆI PROGRAM",
    name: "Aluminijske Roletne, Žaluzine i Komarnici",
    badge: "ZAŠTITA OD SUNCA & INSEKATA",
    image: "/images/real/pvc-prozor-komarnik.jpg",
    specs: [
      { label: "Ispuna lamela", value: "Poliuretanska termo pjena" },
      { label: "Pogon", value: "Automatski elektromotor ili ručno" },
      { label: "Komarnici", value: "Rolo, plise i fiksni sa fiberglas mrežom" },
      { label: "Usklađenost", value: "Boja kućišta i vodilica identična prozorima" },
      { label: "Ušteda", value: "Dodatna termo izolacija zimi i ljeti" },
      { label: "Održavanje", value: "Otporno na sve vremenske nepogode" }
    ],
    desc: "Kompletna zaštita od prekomjernog sunca, insekata i pogleda. Montiramo integrisane aluminijske roletne i komarnike sa dugim vijekom trajanja.",
    idealFor: "Sve prozore i balkonska vrata, spavaće i dnevne sobe."
  }
];

export const PROFILE_LAYERS = [
  {
    id: "profil",
    name: "VIŠEKOMORNI PROFIL (76-88mm)",
    subtitle: "Optimalna geometrija komora",
    desc: "Struktura sa 6 ili 7 komora sprečava stvaranje hladnih mostova. Materijal je otporan na UV zračenje, a postojanost boje je garantovana decenijama.",
    stat: "Uw 0.76 W/m²K"
  },
  {
    id: "staklo",
    name: "TROSLOJNO 4-SEZONSKO STAKLO",
    subtitle: "Dvostruki Low-E nanos + Argon 90%",
    desc: "Kombinacija termo nanosa zadržava unutrašnju toplotu tokom zime, a ljeti blokira solarno toplotno zračenje bez gubitka prirodne svjetlosti.",
    stat: "Ug do 0.5 W/m²K"
  },
  {
    id: "brtva",
    name: "SISTEM EPDM BRTVI",
    subtitle: "Apsolutna zaptivenost na udare vjetra i kiše",
    desc: "Visoko elastične gume koje ne gube elastičnost na temperaturama od -40°C do +80°C. Sprečavaju bilo kakvo propuštanje zraka i vode.",
    stat: "Klasa 9A vodonepropusnost"
  },
  {
    id: "okov",
    name: "PROTIVPROVALNI OKOV",
    subtitle: "Njemački mehanizmi sa mikroluftovanjem",
    desc: "Gljivičasti čelični zupci i kaljene prihvatne pločice na svim stranama krila. Omogućava višestepeno otvaranje na kip i kontrolisanu ventilaciju.",
    stat: "RC2 nivo zaštite"
  },
  {
    id: "ojacanje",
    name: "ČELIČNO OJAČANJE",
    subtitle: "Pocinčana stabilnost 1.5mm - 2.0mm",
    desc: "Unutrašnje ojačanje garantuje statičku stabilnost čak i kod velikih dimenzija krila, sprečavajući uvijanje profila tokom promjene temperatura.",
    stat: "100% statička stabilnost"
  }
];

export const REAL_PROJECTS = [
  {
    id: 1,
    title: "Priprema kompleta stolarije za ugradnju",
    category: "PVC PROZORI",
    tag: "RADIONICA & MONTAŽA",
    image: "/images/real/pvc-prozori-isporuka.jpg",
    desc: "Kompletna garnitura prozora izrađena po mjeri u našoj radionici u Banjoj Luci: kosi tavanski prozori, balkonska vrata i dvokrilni prozori sa zaštitnim folijama spremni za transport.",
    details: "6-komorni profil, termoizolaciono staklo, Siegenia okovi"
  },
  {
    id: 2,
    title: "Montaža antracit ulaznih vrata sa saten staklom",
    category: "ULAZNA VRATA",
    tag: "ULAZNA VRATA",
    image: "/images/real/vrata-antracit.jpg",
    desc: "Završena ugradnja modernih ulaznih vrata u antracit nijansi sa vertikalnim saten staklom i horizontalnim inox lajsnama na kući.",
    details: "Antracit profil, višetačkasto zaključavanje, inox detalji"
  },
  {
    id: 3,
    title: "Ulazni portal većih dimenzija sa svjetlosnikom",
    category: "ULAZNA VRATA",
    tag: "PORTALI",
    image: "/images/real/portal-vrata-svetlosnik.jpg",
    desc: "Izrada i ugradnja ulaznog sistema sa fiksnim staklenim bočnim sekcijama i gornjim svjetlosnikom za osvjetljenje unutrašnjeg stepeništa.",
    details: "Bijeli ojačani profil, satinirano staklo, robusne šarke"
  },
  {
    id: 4,
    title: "Izrada vrata u teksturi Tamni Hrast na radioničkom stolu",
    category: "RADIONICA",
    tag: "RADIONICA",
    image: "/images/real/vrata-tamni-hrast-radionica.jpg",
    desc: "Prikaz detaljne ručne i mašinske dorade dekorativnog panela u radionici ALKAL (Bistrica bb) prije finalne provjere mehanizama.",
    details: "Dezen drveta, stakleni umetci, precizno sklapanje"
  },
  {
    id: 5,
    title: "Dvokrilni PVC prozor sa montiranim komarnikom",
    category: "PVC PROZORI",
    tag: "PROZORI & KOMARNICI",
    image: "/images/real/pvc-prozor-komarnik.jpg",
    desc: "Funkcionalan dvokrilni prozor sa otvaranjem na kip i integrisanim aluminijskim ramom sa gustom mrežom protiv komaraca i insekata.",
    details: "Aluminijski ram komarnika, UV postojana fiberglas mrežica"
  },
  {
    id: 6,
    title: "Ugradnja bijelih ulaznih vrata sa lučnim staklom",
    category: "ULAZNA VRATA",
    tag: "ULAZNA VRATA",
    image: "/images/real/vrata-bijela-ugradjena.jpg",
    desc: "Precizna ugradnja ulaznih vrata na porodičnom objektu, uz pažljivo postavljanje i zaštitu špaleta bez oštećenja okolne fasade.",
    details: "Toplotno izolovan panel, višestepeni cilindar"
  },
  {
    id: 7,
    title: "Ulazna vrata sa modernim ravnim linijama",
    category: "ULAZNA VRATA",
    tag: "ULAZNA VRATA",
    image: "/images/real/vrata-inox-linije.jpg",
    desc: "Minimalistički dizajn vrata sa 4 ravne inox lajsne, trostrukim zaptivanjem i visokom zvučnom izolacijom od buke.",
    details: "Ravni termo panel, čvrsta konstrukcija, pouzdan okov"
  },
  {
    id: 8,
    title: "Zatvorena terasa sa kliznim stijenama i vanjskim roletnama",
    category: "ZATVORENE TERASE",
    tag: "ZATVORENE TERASE",
    image: "/images/zatvorena-terasa.jpg",
    desc: "Kompletno zatvaranje i zastakljivanje terase kliznim staklenim sistemima i integrisanim vanjskim roletnama za ugodan boravak tokom cijele godine.",
    details: "Klizni portali, integrisane termo roletne, zaštita od vjetra i padavina"
  }
];

export const PROJECTS_GALLERY = REAL_PROJECTS;

export const TESTIMONIALS = [
  {
    author: "Bojan M.",
    location: "Banja Luka",
    project: "Stolarija i ulazna vrata",
    rating: 5,
    text: "Dario i ekipa su posao odradili maksimalno korektno. Mjere su uzete tačno u milimetar, prozori dihtuju savršeno, a u kući je osjetno toplije. Sve preporuke za saradnju."
  },
  {
    author: "Mirko T.",
    location: "Banja Luka",
    project: "Zamjena dotrajale stolarije",
    rating: 5,
    text: "Demontaža stare drvene stolarije je urađena izuzetno pažljivo bez lomljenja zidova. Zvučna izolacija novih PVC prozora je odlična, ulica se više uopšte ne čuje."
  },
  {
    author: "Jelena S.",
    location: "Laktaši i okolina",
    project: "PVC prozori sa komarnicima",
    rating: 5,
    text: "Poštena cijena, dogovor ispoštovan u dan, a komarnici i roletne funkcionišu besprijekorno. Dario je lično bio na mjerenju i objasnio sve opcije."
  }
];

export const FAQ_ITEMS = [
  {
    q: "Da li je dolazak na mjerenje u Banjoj Luci i regiji besplatan?",
    a: "Da, dolazak na vašu lokaciju radi uzimanja tačnih mjera je besplatan i bez obaveze. Vlasnik Dario Kalezić ili naš stručni saradnik vrši precizno mjerenje otvora i predlaže najbolje rješenje za vaš objekat."
  },
  {
    q: "Kada odabrati ALU, a kada PVC stolariju?",
    a: "PVC stolarija nudi najbolji odnos termoizolacije i cijene za standardne prozore na kućama i stanovima. ALU stolarija se preporučuje za otvore velikih raspona (klizne stijene, stakleni portali) jer ima veću čvrstoću i statičku stabilnost."
  },
  {
    q: "Koliko traje izrada i ugradnja?",
    a: "Za standardne dimenzije rok izrade i montaže je uglavnom između 7 i 14 radnih dana od potvrde mjera, uz tačno poštovanje dogovorenog termina."
  },
  {
    q: "Da li radite demontažu stare stolarije?",
    a: "Da. Prilikom ugradnje vršimo pažljivo skidanje starih prozora i vrata kako bi se zidovi i unutrašnji prostor što manje oštetili."
  },
  {
    q: "Kakva je garancija na stolariju?",
    a: "Dajemo pismenu garanciju na profile, postojanost materijala, ispravnost okova i hermetičku zaptivenost staklo paketa."
  },
  {
    q: "Kako mogu najbrže dobiti ponudu?",
    a: "Pozovite 066 530 113 ili nam pošaljite okvirne dimenzije na Viber. Takođe možete popuniti naš online kalkulator i dobićete povratnu informaciju u najkraćem roku."
  }
];
