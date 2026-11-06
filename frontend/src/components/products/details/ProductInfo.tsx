import type { ProductDetailsData } from "@/constants/productDetails";

type Props = {
  title: string;
  category: string;
  subtitle: string;
  description: string;
  price: number;
};

export default function ProductInfo({
  title,
  category,
  subtitle,
  description,
  price,
}: Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {/* <span className="inline-block rounded-full border border-[#00c6ff]/20 bg-[#00c6ff]/10 px-3 py-1 text-xs font-medium tracking-wide text-[#00c6ff]">
          {product.category}
        </span> */}

        <h1 className="text-3xl font-bold leading-tight text-[#f4f8fb] sm:text-4xl">
          {title}
        </h1>
      </div>

      <p className="text-sm leading-relaxed text-[#a9bac5] sm:text-base">
        {description}
      </p>

      <div className="space-y-5 rounded-lg border border-white/10 bg-[#101b23] p-6">
        <div>
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#71808b]">
            Preț orientativ
          </span>

          <div className="flex items-baseline gap-2">
            <span className="text-sm font-medium text-[#a9bac5]">de la</span>

            <span className="text-3xl font-extrabold text-[#00c6ff]">
              {price}
            </span>
          </div>

          <p className="mt-2 text-xs leading-relaxed text-[#71808b]">
            Prețul final variază în funcție de cantitate, materiale și
            finisajele alese.
          </p>
        </div>

        <div className="space-y-3 border-t border-white/10 pt-5">
          <button
            type="button"
            className="w-full rounded-md bg-[#00c6ff] px-4 py-3.5 text-sm font-semibold text-[#080d12] transition hover:bg-[#43d5ff]"
          >
            Solicită o ofertă
          </button>

          <button
            type="button"
            className="w-full rounded-md border border-[#00c6ff]/50 px-4 py-3.5 text-sm font-semibold text-[#00c6ff] transition hover:bg-[#00c6ff]/10"
          >
            Personalizează
          </button>
        </div>

        <p className="text-xs leading-relaxed text-[#71808b]">
          Consultanță pentru alegerea celor mai potrivite opțiuni.
        </p>
      </div>
    </div>
  );
}
