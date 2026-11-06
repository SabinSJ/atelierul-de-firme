type Props = {
  features: string[];
};

export default function ProductSpecs({ features }: Props) {
  if (features.length === 0) return null;

  return (
    <section className="rounded-lg border border-white/10 bg-[#101b23] p-6 sm:p-8">
      <div className="mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#00c6ff]">
          Detalii tehnice
        </p>

        <h2 className="text-2xl font-bold text-[#f4f8fb]">
          Specificații și opțiuni de configurare
        </h2>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm text-[#a9bac5]"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00c6ff]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
