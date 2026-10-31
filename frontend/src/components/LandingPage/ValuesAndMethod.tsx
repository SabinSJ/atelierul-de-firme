export default function ValuesAndMethod() {
  return (
    <section
      id="valori-si-metoda"
      className="overflow-hidden border-t border-[rgba(65,175,218,0.13)] bg-[#eaf0f4] py-[clamp(56px,7vw,110px)] text-[#08121c]"
    >
      <div className="mx-auto grid w-[calc(100%-72px)] max-w-[1060px] grid-cols-1 items-center gap-[clamp(26px,5.4vw,80px)] min-[901px]:grid-cols-[1.01fr_0.99fr] max-[650px]:w-[calc(100%-38px)]">
        <div>
          <span className="mb-[22px] inline-flex items-center gap-[10px] text-[11px] leading-[1.4] font-bold tracking-[0.2em] text-[#38c8f7] uppercase before:h-px before:w-8 before:bg-[#00c6ff] before:content-['']">
            03 / Claritate, strategie, coerență
          </span>

          <h2 className="mb-[23px] text-[clamp(35px,5.1vw,73px)] leading-[1.06] font-bold tracking-[-0.045em] text-[#0a1620]">
            Construim afaceri{" "}
            <em className="not-italic text-[#00c6ff]">inteligente.</em>
          </h2>

          <p className="mb-[29px] max-w-[580px] text-[clamp(15px,1.5vw,18px)] leading-[1.78] text-[#4b5f6e]">
            Procesul nostru unește analiza, direcția creativă și aplicarea
            consecventă. Claritatea definește mesajul, strategia organizează
            alegerile, iar coerența face identitatea durabilă.
          </p>

          <div className="mb-[23px] mt-[5px] flex flex-wrap gap-[14px] max-[600px]:gap-[7px]">
            {["CLARITATE", "STRATEGIE", "COERENȚĂ"].map((point) => (
              <span
                key={point}
                className="border border-[rgba(0,198,255,0.28)] px-[13px] py-[9px] text-[11px] tracking-[0.08em] text-[#19516a]"
              >
                {point}
              </span>
            ))}
          </div>

          <a
            href="#metoda"
            className="inline-flex items-center gap-5 border-b border-[#00c6ff] py-3 text-[13px] font-bold tracking-[0.08em] text-[#061e2b] uppercase no-underline transition-colors hover:text-[#00c6ff]"
          >
            Vezi cum lucrăm
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <figure className="m-0 mx-auto w-full max-w-[480px] overflow-hidden border border-[rgba(99,181,215,0.2)] bg-[#f5f7f8] shadow-[0_26px_70px_rgba(0,0,0,0.28)]">
          <img
            src="images/Afaceri-inteligente-scara.jpg"
            alt="Construim afaceri inteligente: claritate, strategie, coerență și profesionalism"
            loading="lazy"
            decoding="async"
            className="block h-auto w-full transition-transform duration-500 motion-safe:hover:scale-[1.018]"
          />
        </figure>
      </div>
    </section>
  );
}
