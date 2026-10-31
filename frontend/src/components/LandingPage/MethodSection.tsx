const steps = [
  {
    number: "01",
    title: "Analizăm",
    description: "Clarificăm afacerea, publicul, obiectivele și poziționarea.",
  },
  {
    number: "02",
    title: "Construim",
    description:
      "Definim logo-ul, paleta, tipografia și regulile sistemului vizual.",
  },
  {
    number: "03",
    title: "Aplicăm",
    description: "Transpunem identitatea în materialele și canalele relevante.",
  },
  {
    number: "04",
    title: "Dezvoltăm",
    description: "Pregătim reguli și resurse pentru o comunicare consecventă.",
  },
];

export default function Method() {
  return (
    <section
      id="metoda"
      className="bg-[#0c1319] px-6 py-24 text-[#f4f8fb] lg:px-16"
    >
      {/* Container principal care centrează tot conținutul */}
      <div className="mx-auto flex w-full max-w-[1060px] flex-col items-center">
        {/* Heading centrat perfect deasupra containerului de scară */}
        <div className="mb-12 w-full text-left">
          <span className="mb-[22px] inline-flex items-center gap-[10px] text-[11px] leading-[1.4] font-bold tracking-[0.2em] text-[#38c8f7] uppercase before:h-px before:w-8 before:bg-[#00c6ff] before:content-['']">
            09 / Procesul de lucru
          </span>

          <h2 className="mt-6 font-primary text-4xl font-bold leading-[1.15] md:text-5xl">
            Un proces clar.
            <br />
            <span className="font-extrabold text-[#00c6ff]">
              Un rezultat coerent.
            </span>
          </h2>
        </div>

        {/* Architectural visual cu POZA TA pe fundal */}
        <figure
          className="relative mb-8 h-[370px] w-full overflow-hidden border border-white/10 bg-[#080d12] bg-cover bg-center bg-no-repeat p-5 md:p-10"
          aria-label="Ilustrație arhitecturală: trepte ascendente care simbolizează construirea unui brand, pas cu pas"
          style={{
            backgroundImage: "url('/images/method-stairs.jpg')",
          }}
        >
          <div className="relative z-[1] flex flex-col gap-[21px] py-[40px] pl-[35px]">
            <span className="text-[10px] tracking-[0.12em] text-[#81d9f2]">
              CONSTRUCȚIE DE BRAND / PAS CU PAS
            </span>

            <strong className="font-primary text-[clamp(23px,2.7vw,38px)] font-bold leading-[1.24] tracking-[-0.045em] text-[#f4f8fb]">
              Fiecare etapă
              <br />
              construiește următoarea.
            </strong>

            <small className="text-[10px] tracking-[0.12em] text-[#acc1ce]">
              CLARITATE — STRATEGIE — COERENȚĂ
            </small>
          </div>

          {/* SVG-ul original rămâne aici, nemodificat */}
        </figure>

        {/* Grid-ul cu cei 4 pași (aliniat perfect la aceeași lățime ca imaginea) */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="
            border-t-2 border-[#00c6ff]
            bg-[#131f27]
            px-[15px] py-[22px]
            transition-all duration-300
            hover:border-t-[rgba(0,198,255,0.36)]
            hover:-translate-y-[2px]
            hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)]
          "
            >
              <span className="font-primary text-sm font-semibold text-[#00c6ff]">
                {step.number}
              </span>

              <h3 className="mt-4 font-primary text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/55">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
