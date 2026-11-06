export type ProductSpec = {
  id: string;
  title: string;
  items: string[];
};

export type RecommendedProduct = {
  id: string;
  title: string;
  category: string;
  image: string;
  price: string;
};

export type ProductDetailsData = {
  id: string;
  title: string;
  category: string;
  priceFrom: number;
  currency: string;
  description: string;
  images: string[];
  specs: ProductSpec[];
  recommended: RecommendedProduct[];
};

export const SAMPLE_PRODUCT: ProductDetailsData = {
  id: "minimal-business",
  title: "Carte de vizită — Minimal Business",
  category: "Cărți de vizită",
  priceFrom: 150,
  currency: "lei",
  description:
    "Un design modern și atemporal, creat pentru a transmite profesionalism și încredere. Potrivit pentru orice domeniu de activitate, acest model combină simplitatea cu eleganța premium a finisajelor haptice.",

  images: [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56c0a?auto=format&fit=crop&w=1200&q=80",
  ],

  specs: [
    {
      id: "formats",
      title: "Formate disponibile",
      items: ["85 × 55 mm", "90 × 50 mm", "Format personalizat"],
    },
    {
      id: "materials",
      title: "Materiale",
      items: [
        "Hârtie mată 350g",
        "Hârtie lucioasă 350g",
        "Carton Premium Soft-Touch",
        "Carton Reciclat Eco",
      ],
    },
    {
      id: "finishes",
      title: "Finisaje",
      items: [
        "Laminare mată / lucioasă",
        "Folie selectivă UV 3D",
        "Timbru sec & Folio aur/argint",
        "Colțuri rotunjite",
      ],
    },
    {
      id: "quantities",
      title: "Tiraj recomandat",
      items: ["100 buc.", "250 buc.", "500 buc.", "1.000+ buc."],
    },
  ],

  recommended: [
    {
      id: "elegant-dark",
      title: "Carte de vizită Elegant Dark",
      category: "Cărți de vizită",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      price: "de la 180 lei",
    },
    {
      id: "creative-studio",
      title: "Carte de vizită Creative Studio",
      category: "Cărți de vizită",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
      price: "de la 160 lei",
    },
    {
      id: "natural-feel",
      title: "Carte de vizită Natural Feel",
      category: "Cărți de vizită",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
      price: "de la 140 lei",
    },
  ],
};
