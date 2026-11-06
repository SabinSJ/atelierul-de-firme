import { notFound } from "next/navigation";

import { products } from "@/constants/products";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductDetails from "@/components/products/details/ProductDetails";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const recommendedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <div className="bg-[#080d12] pt-8">
        <Breadcrumbs
          items={[
            { label: "Acasă", href: "/" },
            { label: "Produse", href: "/produse" },
            { label: product.title },
          ]}
        />
      </div>

      <ProductDetails
        key={product.slug}
        product={product}
        recommendedProducts={recommendedProducts}
      />
    </>
  );
}
