export type Product = {
  slug: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  subtitle: string;
  longDescription: string;
  features: string[];
  price: number;
};

export const products: Product[] = [
  {
    slug: "carti-de-vizita",
    title: "Cărți de vizită",
    category: "Materiale de prezentare",
    description:
      "Prima impresie contează. Prezintă-ți afacerea într-un mod profesionist.",
    images: ["/images/products/carte-vizita.png"],
    subtitle: "Identitatea afacerii tale, într-un format memorabil.",
    longDescription:
      "Cărțile de vizită reprezintă un instrument esențial de networking și comunicare. Realizăm concepte personalizate care reflectă identitatea vizuală și valorile brandului tău.",
    features: [
      "Design personalizat în acord cu identitatea brandului",
      "Formate și dimensiuni adaptate nevoilor tale",
      "Selecție de materiale și finisaje",
      "Pregătire pentru tipar",
    ],
    price: 150,
  },
  {
    slug: "mape-de-prezentare",
    title: "Mape de prezentare",
    category: "Materiale de prezentare",
    description:
      "Organizează și prezintă documentele companiei într-un mod profesionist.",
    images: ["/images/products/banner-flag.png"],
    subtitle: "Toate informațiile importante, într-o prezentare coerentă.",
    longDescription:
      "Mapele de prezentare contribuie la imaginea profesională a companiei tale. Pot fi personalizate pentru întâlniri, oferte comerciale și prezentări de business.",
    features: [
      "Design adaptat identității vizuale",
      "Personalizare grafică",
      "Diferite formate și configurații",
      "Pregătire pentru tipar",
    ],
    price: 159,
  },
  {
    slug: "brosuri",
    title: "Broșuri",
    category: "Materiale de prezentare",
    description:
      "Prezintă serviciile și produsele companiei într-un format atractiv.",
    images: ["/images/products/website.png"],
    subtitle: "Comunică mai bine ceea ce oferă afacerea ta.",
    longDescription:
      "Broșurile sunt o modalitate eficientă de a prezenta produsele, serviciile și povestea companiei. Construim materiale vizuale clare, adaptate publicului tău.",
    features: [
      "Structură și organizare a informației",
      "Design grafic personalizat",
      "Formate și dimensiuni variate",
      "Variantă pentru tipar sau distribuție digitală",
    ],
    price: 99,
  },
  {
    slug: "brosuri",
    title: "Broșuri",
    category: "Materiale de prezentare",
    description:
      "Prezintă serviciile și produsele companiei într-un format atractiv.",
    images: ["/images/products/website.png"],
    subtitle: "Comunică mai bine ceea ce oferă afacerea ta.",
    longDescription:
      "Broșurile sunt o modalitate eficientă de a prezenta produsele, serviciile și povestea companiei. Construim materiale vizuale clare, adaptate publicului tău.",
    features: [
      "Structură și organizare a informației",
      "Design grafic personalizat",
      "Formate și dimensiuni variate",
      "Variantă pentru tipar sau distribuție digitală",
    ],
    price: 99,
  },
];
