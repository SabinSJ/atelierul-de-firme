import type { Product } from "@/constants/products";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductSpecs from "./ProductSpecs";
import RecommendedProducts from "./RecommendedProducts";

type Props = {
  product: Product;
  recommendedProducts: Product[];
};

export default function ProductDetails({
  product,
  recommendedProducts,
}: Props) {
  return (
    <main className="min-h-screen bg-[#080d12] font-sans text-[#f4f8fb] selection:bg-[#00c6ff] selection:text-[#080d12]">
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Galerie + informații produs */}
        <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} title={product.title} />
          </div>

          <div className="lg:col-span-5">
            <ProductInfo
              title={product.title}
              category={product.category}
              subtitle={product.subtitle}
              description={product.longDescription}
              price={product.price}
            />
          </div>
        </section>

        {/* Specificații */}
        <ProductSpecs features={product.features} />

        {/* Produse recomandate */}
        <RecommendedProducts products={recommendedProducts} />
      </div>
    </main>
  );
}
