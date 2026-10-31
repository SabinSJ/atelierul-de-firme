const brandValues = [
  "CLARITATE",
  "STRATEGIE",
  "PROFESIONALISM",
  "CREATIVITATE APLICATĂ",
  "COERENȚĂ",
  "CREȘTERE",
];

export default function About() {
  return (
    <section
      id="despre"
      className="bg-[#ecf1f3] py-[120px] text-[#f4f8fb] max-[650px]:py-[70px]"
    >
      <div className="relative mx-auto w-[calc(100%-72px)] max-w-[1060px] max-[650px]:w-[calc(100%-38px)]">
        {/* Decorative geometric element */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute right-0 top-[10px]
            h-[68px] w-[68px] opacity-[0.23]
            [background:repeating-linear-gradient(135deg,transparent_0_12px,#007eae_12px_15px,transparent_15px_23px)]
            [clip-path:polygon(0_75%,24%_75%,24%_50%,49%_50%,49%_25%,74%_25%,74%_0,100%_0,100%_100%,0_100%)]
            max-[750px]:h-[44px] max-[750px]:w-[44px] max-[750px]:opacity-[0.12]
          "
        />

        <div className="max-w-4xl">
          {/* Section label */}

          <span className="mb-[22px] inline-flex items-center gap-[10px] text-[11px] leading-[1.4] font-bold tracking-[0.2em] text-[#38c8f7] uppercase before:h-px before:w-8 before:bg-[#00c6ff] before:content-['']">
            06 / Despre studio
          </span>

          {/* Heading */}
          <h2 className="my-0 mt-[14px] mb-[28px] font-primary text-[clamp(35px,4.1vw,58px)] font-bold leading-[1.2] tracking-[-0.05em] text-[#101c24]">
            Un brand coerent
            <br />
            începe cu o{" "}
            <span className="font-normal text-[#00c6ff]">direcție clară.</span>
          </h2>

          {/* Brand promise */}
          <p className="my-[22px] max-w-[780px] border-l-[3px] border-[#00aee5] pl-5 font-primary text-[clamp(18px,2.2vw,25px)] font-semibold leading-[1.45] text-[#152a35]">
            Transformăm ideile de afaceri în branduri clare, profesioniste și
            memorabile.
          </p>

          {/* Description */}
          <p className="max-w-[700px] text-[17px] leading-[1.9] text-[#4b545e]">
            Atelierul de Firme este un studio de branding și identitate vizuală
            pentru antreprenorii care lansează afaceri și companiile care își
            regândesc imaginea. Construim identități clare, profesionale și
            coerente, de la direcția strategică până la regulile și aplicațiile
            care le fac ușor de folosit în fiecare punct de contact cu publicul.
          </p>
        </div>

        {/* Brand values */}
        <div
          aria-label="Valorile brandului"
          className="mt-[23px] flex flex-wrap gap-2"
        >
          {brandValues.map((value) => (
            <span
              key={value}
              className="
                border border-[#bed8e0] bg-[#f8fbfc]
                px-3 py-[10px] text-[10px] font-semibold
                tracking-[0.05em] text-[#19516a]
                max-[650px]:p-2 max-[650px]:text-[9px]
              "
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
