import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/constants/products";

type Props = {
  products: Product[];
};

export default function RecommendedProducts({ products }: Props) {
  if (products.length === 0) return null;

  return (
    <section className="space-y-6 pt-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-[#f4f8fb]">
          Te-ar putea interesa și
        </h2>

        <Link
          href="/produse"
          className="text-sm font-semibold text-[#00c6ff] hover:underline"
        >
          Vezi catalogul
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <Link
            key={item.slug}
            href={`/produse/${item.slug}`}
            className="group overflow-hidden rounded-lg border border-white/10 bg-[#101b23] transition hover:border-[#00c6ff]/50"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#17232b]">
              {/* <Image
                src={item.images[0]}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              /> */}

              <Image
                src={item.images[0]}
                alt=""
                aria-hidden
                fill
                sizes="310px"
                className="scale-125 object-cover opacity-40 blur-2xl"
              />
              {/* imaginea reala, intreaga */}
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                sizes="310px"
                className="object-contain p-3"
              />
            </div>

            <div className="space-y-2 p-5">
              <span className="text-xs text-[#71808b]">{item.category}</span>

              <h3 className="font-semibold text-[#f4f8fb] transition-colors group-hover:text-[#00c6ff]">
                {item.title}
              </h3>

              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-xs font-semibold text-[#a9bac5]">
                  De la {item.price.toFixed(2)} Lei
                </span>

                <span className="text-xs font-semibold text-[#00c6ff]">
                  Detalii →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
