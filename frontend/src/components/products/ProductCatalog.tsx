"use client";

import { useMemo, useState } from "react";
import { products } from "@/constants/products";
import ProductCard from "./ProductCard";

const categories = [
  "Toate",
  "Branding",
  "Digital",
  "Materiale de prezentare",
  "Publicitate",
];

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("Toate");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Toate") return products;

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`border px-5 py-3 text-[11px] font-semibold tracking-[0.08em] transition-colors ${
              activeCategory === category
                ? "border-[#00c6ff] bg-[#00c6ff]/10 text-[#00c6ff]"
                : "border-white/15 text-[#b9cbd4] hover:border-[#00c6ff]/50 hover:text-white"
            }`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="mx-auto grid w-fit grid-cols-[310px] gap-6 sm:grid-cols-[repeat(2,310px)] lg:grid-cols-[repeat(3,310px)]">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
