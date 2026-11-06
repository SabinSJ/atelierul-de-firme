export type Project = {
  slug: string;
  category: string;
  name: string;
  description: string;
  url?: string;
  iframeTitle?: string;
  coverImage: string;
  featured?: boolean;
  year?: string;
  overview?: string;
  services?: string[];
  gallery?: string[];
  showcaseImages?: string[];
  special?: boolean;
};

export const projects: Project[] = [
  {
    slug: "avn-elite-properties",
    category: "ID BOOK / REAL ESTATE",
    name: "AVN Elite Properties",
    description:
      "O identitate vizuală premium, concepută pentru a transmite profesionalism, siguranță și rafinament în domeniul imobiliar.",
    coverImage: "/images/projects/avn/main.png",
    url: "https://online.fliphtml5.com/kbsms/AVN-ELITE-PROPERTIES---ID-BOOK---PREMIUM/",
    iframeTitle: "AVN Elite Properties — flipbook interactiv",
    overview:
      "Proiectul AVN Elite Properties urmărește construirea unei imagini de brand elegante și coerente, capabile să reflecte standardele unui business imobiliar orientat spre calitate și încredere. Identitatea vizuală pune accent pe echilibru, claritate și o prezentare unitară a brandului în toate materialele sale de comunicare.",
    services: [
      "Strategie și poziționare de brand",
      "Identitate vizuală",
      "Sistem grafic și direcție vizuală",
      "Brand guidelines / ID Book",
      "Design materiale de prezentare",
    ],
  },
  {
    slug: "binbox",
    category: "BRAND IDENTITY",
    name: "Binbox",
    description:
      "Un proiect de identitate vizuală dezvoltat pentru a construi o imagine de brand distinctă, coerentă și ușor de recunoscut.",
    coverImage: "/images/projects/binbox/main.png",
    overview:
      "Identitatea Binbox urmărește definirea unui limbaj vizual unitar, prin care brandul să poată comunica într-un mod clar și consecvent. Elementele grafice sunt gândite să funcționeze împreună și să ofere o bază solidă pentru materialele de comunicare și promovare.",
    services: [
      "Concept de identitate vizuală",
      "Direcție grafică",
      "Sistem vizual de brand",
      "Materiale de comunicare",
    ],
  },
  {
    slug: "glamour",
    category: "BRAND IDENTITY",
    name: "Glamour",
    description:
      "O direcție vizuală construită în jurul personalității brandului, cu accent pe coerență, expresivitate și impact vizual.",
    coverImage: "/images/projects/glamour/main.png",
    overview:
      "Proiectul Glamour explorează o identitate vizuală recognoscibilă, adaptată personalității brandului. Printr-o direcție grafică unitară, elementele de identitate contribuie la construirea unei imagini coerente și la diferențierea brandului în comunicarea sa vizuală.",
    services: [
      "Concept creativ",
      "Identitate vizuală",
      "Direcție artistică",
      "Sistem grafic de brand",
      "Design materiale de prezentare",
    ],
  },
  {
    slug: "mobila-germania",
    category: "ID BOOK / BRAND IDENTITY",
    name: "Mobilă Germania SH",
    description:
      "O identitate autentică și accesibilă pentru un business de mobilier second-hand din Germania, construită în jurul încrederii și al unei comunicări vizuale coerente.",
    coverImage: "/images/projects/mobilaGermania/main.png",
    url: "https://online.fliphtml5.com/kbsms/hmxc/",
    iframeTitle: "Mobilă Germania SH — flipbook interactiv",
    overview:
      "Identitatea Mobilă Germania SH urmărește să ofere brandului o imagine clară și ușor de recunoscut, potrivită unui business care activează în domeniul mobilierului second-hand. Direcția vizuală pune accent pe accesibilitate, autenticitate și prezentarea coerentă a brandului în relația cu publicul său.",
    services: [
      "Concept de brand",
      "Identitate vizuală",
      "Direcție grafică",
      "Materiale de comunicare",
      "Brand guidelines / ID Book",
    ],
  },
  {
    slug: "ormco",
    category: "BRAND IDENTITY / EXHIBITION DESIGN",
    name: "ORMCO",
    description:
      "Concepte de design expozițional și standuri personalizate, dezvoltate pentru a crea o prezență vizuală distinctă și o experiență memorabilă în cadrul evenimentelor.",
    coverImage: "/images/projects/ormco/main.png",
    featured: true,

    overview:
      "Proiectul ORMCO explorează dezvoltarea unor concepte de design pentru standuri expoziționale, cu accent pe organizarea spațiului, prezentarea brandului și integrarea elementelor vizuale într-un ansamblu coerent. Randările tridimensionale oferă o perspectivă asupra volumelor, proporțiilor și modului în care fiecare concept poate prinde formă în spațiul expozițional.",

    services: [
      "Concept și design expozițional",
      "Design standuri personalizate",
      "Modelare și randare 3D",
      "Dezvoltare concepte vizuale",
      "Organizare și configurare spațiu expozițional",
    ],

    showcaseImages: [
      "/images/projects/ormco/randari/randare1.jpeg",
      "/images/projects/ormco/randari/randare2.jpeg",
      "/images/projects/ormco/randari/randare3.jpeg",
      "/images/projects/ormco/randari/randare4.jpeg",
      "/images/projects/ormco/randari/randare5.jpeg",
      "/images/projects/ormco/randari/randare6.jpeg",
      "/images/projects/ormco/randari/randare7.jpeg",
      "/images/projects/ormco/randari/randare8.jpeg",
    ],
    special: true,
  },
  {
    slug: "royal-n",
    category: "ID BOOK / IDENTITATE VIZUALĂ",
    name: "Royal N",
    description:
      "O identitate construită pentru claritate, eleganță și profesionalism, cu un limbaj vizual coerent și ușor de recunoscut.",
    coverImage: "/images/projects/royalN/main.png",
    url: "https://online.fliphtml5.com/kbsms/ajqy/",
    iframeTitle: "Royal N — flipbook interactiv",
    overview:
      "Royal N beneficiază de o direcție vizuală concepută pentru a transmite o imagine profesionistă și bine definită. Sistemul de identitate urmărește să păstreze consecvența elementelor grafice și să ofere brandului o prezență vizuală unitară în materialele sale de comunicare.",
    services: [
      "Concept de identitate",
      "Identitate vizuală",
      "Sistem grafic de brand",
      "Materiale de comunicare",
      "Brand guidelines / ID Book",
    ],
  },
  {
    slug: "unipalex",
    category: "BRAND IDENTITY",
    name: "Unipalex",
    description:
      "Un proiect de branding orientat spre construirea unei imagini unitare și a unui sistem vizual adaptabil nevoilor de comunicare ale brandului.",
    coverImage: "/images/projects/unipalex/main.png",
    overview:
      "Proiectul Unipalex are în centru dezvoltarea unei identități vizuale coerente, care să ofere brandului o imagine clară și recognoscibilă. Elementele grafice sunt reunite într-un sistem unitar, menit să susțină comunicarea și prezentarea brandului.",
    services: [
      "Concept de identitate vizuală",
      "Direcție grafică",
      "Sistem vizual de brand",
      "Materiale de comunicare",
    ],
  },
];
