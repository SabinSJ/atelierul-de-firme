import ProductCatalog from "@/components/products/ProductCatalog";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#080d12] text-[#f4f8fb]">
      <section className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(145deg,#0b141c,#101d26)] px-6 py-24 lg:px-16">
        <div className="mx-auto max-w-[1500px]">
          <span className="mb-6 inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-[#38c8f7] uppercase before:h-px before:w-8 before:bg-[#00c6ff] before:content-['']">
            Produse și servicii
          </span>

          <h1 className="max-w-4xl font-primary text-[clamp(38px,5vw,68px)] font-bold leading-[1.1] tracking-[-0.05em]">
            Soluții construite
            <br />
            <span className="font-normal text-[#00c6ff]">
              în jurul brandului tău.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-8 text-[#b8c5ce]">
            De la identitate vizuală și prezență digitală până la materiale de
            prezentare și promovare, descoperă soluțiile prin care îți poți
            dezvolta afacerea.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-16 lg:px-16">
        <ProductCatalog />
      </section>
    </main>
  );
}
