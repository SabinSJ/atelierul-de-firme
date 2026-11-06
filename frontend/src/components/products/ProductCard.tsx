"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Product } from "@/constants/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/produse/${product.slug}`);
  };

  return (
    <div className="group flex w-full flex-col overflow-hidden border rounded-md border-white/10 bg-[#101b23] hover:border-[#00c6ff]/50">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#17232b]">
        {/* fundal: aceeasi imagine, blurata */}
        <Image
          src={product.images[0]}
          alt=""
          aria-hidden
          fill
          sizes="310px"
          className="scale-125 object-cover opacity-40 blur-2xl"
        />
        {/* imaginea reala, intreaga */}
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          sizes="310px"
          className="object-contain p-3"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 gap-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#00c6ff]">
          {product.category}
        </span>

        <h2 className="font-primary text-xl font-bold text-[#f4f8fb]">
          {product.title}
        </h2>

        <p className="flex-1 text-sm leading-7 text-[#a9bac5]">
          {product.description}
        </p>

        <div className="flex items-baseline gap-2">
          {/* <span className="text-xs font-medium tracking-wide text-[#a9bac5]">
            de la
          </span> */}

          <span className="text-xl font-bold text-[#00c6ff]">
            {product.price.toFixed(2)} Lei
          </span>
        </div>

        <div className="flex flex-wrap gap-3 justify-between">
          <button
            onClick={handleNavigation}
            className="inline-flex w-fit items-center gap-2 p-3 border rounded-sm border-indigo text-xs font-semibold tracking-[0.08em] text-[#00c6ff] transition-colors hover:text-white hover:cursor-pointer"
          >
            Vezi detalii
          </button>

          <button className="inline-flex w-fit items-center gap-2 p-3 border border-transparent rounded-sm bg-black text-xs font-semibold tracking-[0.08em] text-white transition-colors hover:text-[#00c6ff] hover:cursor-pointer">
            Personalizeaza
          </button>
        </div>
      </div>
    </div>
  );
}
