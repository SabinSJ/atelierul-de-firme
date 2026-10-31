export default function Partners() {
  return (
    <section
      id="parteneri"
      className="border-t border-[#24343e] bg-[#111a22] px-0 py-[103px] text-[#f4f8fb] max-[650px]:py-[70px]"
    >
      <div className="mx-auto w-[min(1060px,calc(100%-72px))] max-[650px]:w-[calc(100%-38px)]">
        <span className="mb-[22px] inline-flex items-center gap-[10px] text-[11px] leading-[1.4] font-bold tracking-[0.2em] text-[#38c8f7] uppercase before:h-px before:w-8 before:bg-[#00c6ff] before:content-['']">
          11 / Parteneriate
        </span>

        <h2 className="my-[14px] mb-[25px] font-primary text-[clamp(32px,3.8vw,54px)] font-bold leading-[1.14] tracking-[-0.05em]">
          Identitatea prinde viață{" "}
          <em className="not-italic text-[#00c6ff]">împreună.</em>
        </h2>

        <p className="mb-[40px] max-w-[680px] text-[#b8c5ce] leading-[1.82]">
          Colaborăm cu specialiști și furnizori de producție pentru
          implementarea identităților vizuale în print, materiale promoționale,
          semnalistică și alte aplicații de brand. Construim o rețea de
          parteneri pe baza calității și a respectării specificațiilor fiecărui
          proiect.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center border border-[#47717f] px-[23px] py-[17px] text-[11px] uppercase tracking-[0.08em]"
        >
          Discută un parteneriat ↗
        </a>
      </div>
    </section>
  );
}
