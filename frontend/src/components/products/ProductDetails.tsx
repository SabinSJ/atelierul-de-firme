"use client";

import React, { useState } from "react";

// Date mock pentru produsul curent
const SAMPLE_PRODUCT = {
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
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  ],
  specs: [
    {
      id: "formats",
      title: "Formate disponibile",
      // icon: FileText,
      items: ["85 × 55 mm", "90 × 50 mm", "Format personalizat"],
    },
    {
      id: "materials",
      title: "Materiale",
      // icon: Layers,
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
      // icon: Paintbrush,
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
      // icon: Package,
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

export default function ProductDetails() {
  // Stare pentru simularea modului: Cu poze multiple vs O singură poză
  const [hasMultipleImages, setHasMultipleImages] = useState(true);

  // Imaginea selectată activă în galerie
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Stare pentru afișare modal zoom imagine full screen
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Imagini efectiv afișate în funcție de modul selectat
  const currentImages = hasMultipleImages
    ? SAMPLE_PRODUCT.images
    : [SAMPLE_PRODUCT.images[0]];

  const activeImage = currentImages[selectedImageIndex] || currentImages[0];

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#1A2621] font-sans selection:bg-[#1B3B2B] selection:text-white">
      {/* Dynamic Demo Control Header (Top Bar pentru Testare) */}
      <div className="sticky top-0 z-50 bg-[#1B3B2B] text-white px-4 py-3 shadow-md border-b border-[#2C523E]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium">
            {/* <Sliders className="w-4 h-4 text-[#D4AF37]" /> */}
            <span>Simulare Layout Hero Section:</span>
          </div>

          <div className="flex items-center bg-[#132A1F] p-1 rounded-lg border border-[#2A4D3B]">
            <button
              onClick={() => {
                setHasMultipleImages(true);
                setSelectedImageIndex(0);
              }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs md:text-sm font-medium transition-all ${
                hasMultipleImages
                  ? "bg-[#2C523E] text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {/* <Images className="w-4 h-4" /> */}
              Imagini Multiple (4 Poze)
            </button>
            <button
              onClick={() => {
                setHasMultipleImages(false);
                setSelectedImageIndex(0);
              }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs md:text-sm font-medium transition-all ${
                !hasMultipleImages
                  ? "bg-[#2C523E] text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {/* <ImageIcon className="w-4 h-4" /> */}O Singură Poză
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="bg-[#F7F6F2] border-b border-[#E3DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-9 h-9 bg-[#1B3B2B] rounded-md flex items-center justify-between p-1.5 transform group-hover:rotate-6 transition-transform">
              <div className="w-1.5 h-full bg-[#E3DFD7] rounded-full"></div>
              <div className="w-1.5 h-3/4 bg-[#D4AF37] rounded-full self-end"></div>
              <div className="w-1.5 h-1/2 bg-[#E3DFD7] rounded-full self-end"></div>
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-[#1B3B2B]">
              Atelierul de Firme
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
            <a href="#acasa" className="hover:text-[#1B3B2B] transition-colors">
              Acasă
            </a>
            <a
              href="#servicii"
              className="hover:text-[#1B3B2B] transition-colors"
            >
              Servicii
            </a>
            <a href="#catalog" className="text-[#1B3B2B] font-semibold">
              Catalog
            </a>
            <a
              href="#proiecte"
              className="hover:text-[#1B3B2B] transition-colors"
            >
              Proiecte
            </a>
            <a
              href="#despre"
              className="hover:text-[#1B3B2B] transition-colors"
            >
              Despre noi
            </a>
          </nav>

          {/* CTA Button */}
          <div>
            <button className="bg-[#1B3B2B] hover:bg-[#2C523E] text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors shadow-sm hover:shadow">
              Solicită o ofertă
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-xs md:text-sm text-gray-500 space-x-2">
          <a href="#catalog" className="hover:text-[#1B3B2B] transition-colors">
            Catalog
          </a>
          {/* <ChevronRight className="w-3.5 h-3.5 text-gray-400" /> */}
          <a
            href="#carti-vizita"
            className="hover:text-[#1B3B2B] transition-colors"
          >
            {SAMPLE_PRODUCT.category}
          </a>
          {/* <ChevronRight className="w-3.5 h-3.5 text-gray-400" /> */}
          <span className="text-gray-900 font-medium">
            {SAMPLE_PRODUCT.title}
          </span>
        </nav>

        {/* ========================================== */}
        {/* HERO SECTION: IMAGES GALLERY & MAIN IMAGE  */}
        {/* ========================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* GALERIE IMAGINI (Adaptează automat aspectul dacă sunt 1 sau mai multe imagini) */}
          <div className="lg:col-span-7">
            <div
              className={`flex flex-col-reverse md:flex-row gap-4 ${!hasMultipleImages ? "w-full" : ""}`}
            >
              {/* Thumbnail-uri laterale - Afișate DOAR dacă sunt mai multe imagini */}
              {hasMultipleImages && currentImages.length > 1 && (
                <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto max-h-[520px] scrollbar-thin scrollbar-thumb-gray-300 pb-2 md:pb-0">
                  {currentImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none ${
                        selectedImageIndex === idx
                          ? "border-[#1B3B2B] ring-2 ring-[#1B3B2B]/20 scale-95 shadow-md"
                          : "border-transparent opacity-70 hover:opacity-100 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Imaginea Principală */}
              <div className="relative flex-1 rounded-xl overflow-hidden bg-stone-200 shadow-sm border border-[#E3DFD7] group">
                <div className="w-full aspect-[4/3] md:aspect-[16/11] relative overflow-hidden">
                  <img
                    src={activeImage}
                    alt={SAMPLE_PRODUCT.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Badges de calitate pe imagine */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-[#1B3B2B] shadow-sm flex items-center gap-1.5 border border-white/40">
                    {/* <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> */}
                    Design Recomandat
                  </div>

                  {/* Button Zoom */}
                  <button
                    onClick={() => setIsZoomOpen(true)}
                    className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2.5 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-all transform hover:scale-110"
                    title="Mărește imaginea"
                  >
                    {/* <Maximize2 className="w-4 h-4 text-[#1B3B2B]" /> */}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* COLOANA DREAPTĂ: Titlu, Descriere și Caseta de Preț */}
          <div className="lg:col-span-5 space-y-6">
            {/* Titlu & Categorie */}
            <div className="space-y-3">
              <span className="inline-block bg-[#E8E4DC] text-[#1B3B2B] text-xs px-3 py-1 rounded-full font-medium tracking-wide">
                {SAMPLE_PRODUCT.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3B2B] leading-tight">
                {SAMPLE_PRODUCT.title}
              </h1>
            </div>

            {/* Descriere produs */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {SAMPLE_PRODUCT.description}
            </p>

            {/* Preț & CTA Card */}
            <div className="bg-white p-6 rounded-xl border border-[#E3DFD7] shadow-sm space-y-5">
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold block mb-1">
                  Preț orientativ
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-600 font-medium">
                    de la
                  </span>
                  <span className="text-3xl font-extrabold text-[#1B3B2B]">
                    {SAMPLE_PRODUCT.priceFrom} {SAMPLE_PRODUCT.currency}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Prețul final variază în funcție de cantitate, materiale și
                  finisaje alese.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-gray-100">
                <button className="w-full bg-[#1B3B2B] hover:bg-[#2C523E] text-white py-3.5 px-4 rounded-lg font-medium text-sm transition-all shadow hover:shadow-md flex items-center justify-center gap-2">
                  <span>Solicită o ofertă</span>
                  {/* <ArrowRight className="w-4 h-4" /> */}
                </button>

                <button className="w-full bg-transparent hover:bg-[#F7F6F2] text-[#1B3B2B] border border-[#1B3B2B] py-3.5 px-4 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2">
                  <span>Personalizează acest design</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
                {/* <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> */}
                <span>
                  Consultanță gratuită pentru alegerea celor mai bune opțiuni.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* SPECIFICAȚII TEHNICE GRID                  */}
        {/* ========================================== */}
        <section className="bg-white rounded-xl border border-[#E3DFD7] p-6 sm:p-8 shadow-sm">
          <h2 className="font-serif text-xl font-bold text-[#1B3B2B] mb-6 flex items-center gap-2">
            <span>Specificații Tehnice & Opțiuni Configurare</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {SAMPLE_PRODUCT.specs.map((spec, index) => {
              // const IconComponent = spec.icon;
              return (
                <div
                  key={spec.id}
                  className={`space-y-3 ${index !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}
                >
                  <div className="flex items-center gap-2 text-[#1B3B2B]">
                    <div className="p-2 bg-[#F7F6F2] rounded-lg">
                      {/* <IconComponent className="w-5 h-5 text-[#1B3B2B]" /> */}
                    </div>
                    <h3 className="font-semibold text-sm">{spec.title}</h3>
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-gray-600">
                    {spec.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================== */}
        {/* PRODUSE RECOMANDATE (Te-ar putea interesa)  */}
        {/* ========================================== */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-[#1B3B2B]">
              Te-ar putea interesa și
            </h2>
            <a
              href="#catalog"
              className="text-sm font-semibold text-[#1B3B2B] hover:underline flex items-center gap-1"
            >
              Vezi tot catalogul
              {/* <ChevronRight className="w-4 h-4" /> */}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_PRODUCT.recommended.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#E3DFD7] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-stone-100 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-xs text-gray-500 font-medium">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1B3B2B] group-hover:text-[#2C523E] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-gray-50">
                  <span className="text-xs text-gray-500 font-semibold">
                    {item.price}
                  </span>
                  <button className="text-xs font-semibold text-[#1B3B2B] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Vezi detalii
                    {/* <ArrowRight className="w-3.5 h-3.5" /> */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox / Zoom Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
            <img
              src={activeImage}
              alt="Zoomed View"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 font-bold text-sm bg-black/50 px-3 py-1 rounded-full"
            >
              Închide ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#1B3B2B] text-white mt-20 border-t border-[#2C523E] py-8 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Atelierul de Firme. Toate drepturile
            rezervate.
          </p>
        </div>
      </footer>
    </div>
  );
}
