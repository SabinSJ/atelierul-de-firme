export default function VisionDesign() {
  return (
    <section
      id="viziune-design"
      className="overflow-hidden border-t border-[rgba(65,175,218,0.13)] bg-[#07111b] py-[clamp(56px,7vw,110px)] text-[#eef8fd]"
    >
      <div className="mx-auto grid w-[calc(100%-72px)] max-w-[1060px] grid-cols-1 items-center gap-[clamp(26px,5.4vw,80px)] min-[901px]:grid-cols-[1.01fr_0.99fr] max-[650px]:w-[calc(100%-38px)]">
        <figure className="m-0 mx-auto w-full max-w-[480px] overflow-hidden border border-[rgba(99,181,215,0.2)] bg-[#0a1018] shadow-[0_26px_70px_rgba(0,0,0,0.28)]">
          <img
            src="images/branduri-cu-viziune.jpg"
            alt="Construim branduri cu viziune pentru viitor: strategie clară, design premium și rezultate durabile"
            loading="lazy"
            decoding="async"
            className="block h-auto w-full transition-transform duration-500 motion-safe:hover:scale-[1.018]"
          />
        </figure>

        <div>
          <span className="mb-[22px] inline-flex items-center gap-[10px] text-[11px] leading-[1.4] font-bold tracking-[0.2em] text-[#38c8f7] uppercase before:h-px before:w-8 before:bg-[#00c6ff] before:content-['']">
            04 / Viziune &amp; design
          </span>

          <h2 className="mb-[23px] text-[clamp(35px,5.1vw,73px)] leading-[1.06] font-bold tracking-[-0.045em] text-white">
            Identități construite{" "}
            <em className="not-italic text-[#00c6ff]">pentru viitor.</em>
          </h2>

          <p className="mb-[29px] max-w-[580px] text-[clamp(15px,1.5vw,18px)] leading-[1.78] text-[#b5cbd6]">
            Designul nu este doar aspect. Transformăm valorile și obiectivele
            afacerii într-un limbaj vizual distinct, aplicabil și pregătit să
            evolueze împreună cu brandul.
          </p>

          <div className="mb-[23px] mt-[5px] flex flex-wrap gap-[14px] max-[600px]:gap-[7px]">
            {["STRATEGIE CLARĂ", "DESIGN PREMIUM", "CONSECVENȚĂ"].map(
              (point) => (
                <span
                  key={point}
                  className="border border-[rgba(0,198,255,0.28)] px-[13px] py-[9px] text-[11px] tracking-[0.08em] text-[#c8e4f0]"
                >
                  {point}
                </span>
              ),
            )}
          </div>

          <a
            href="#portofoliu"
            className="inline-flex items-center gap-5 border-b border-[#00c6ff] py-3 text-[13px] font-bold tracking-[0.08em] text-[#effcff] uppercase no-underline transition-colors hover:text-[#00c6ff]"
          >
            Descoperă portofoliul
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
