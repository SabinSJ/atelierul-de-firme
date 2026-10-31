const deliverables = [
  {
    number: "01",
    category: "FUNDAMENT",
    title: "Direcție și limbaj vizual",
    description:
      "Poziționare, direcție creativă, reguli pentru logo, culori, tipografie și elemente grafice.",
  },
  {
    number: "02",
    category: "DOCUMENTARE",
    title: "ID Book aplicabil",
    description:
      "Ghid de utilizare, exemple de compoziție și reguli care susțin coerența identității.",
  },
  {
    number: "03",
    category: "IMPLEMENTARE",
    title: "Aplicații și materiale",
    description:
      "Adaptări pentru website, social media, prezentări, documente sau print, în funcție de proiect.",
  },
  {
    number: "04",
    category: "COLABORARE",
    title: "Fișiere pregătite pentru utilizare",
    description:
      "Formatele și variantele necesare sunt stabilite împreună, astfel încât identitatea să poată fi folosită consecvent.",
  },
];

export default function Deliverables() {
  return (
    <section
      id="livrabile"
      className="border-t border-[#24343e] bg-[#080d12] py-[103px] text-[#f4f8fb] max-[650px]:py-[70px]"
    >
      <div className="mx-auto w-[calc(100%-72px)] max-w-[1060px] max-[650px]:w-[calc(100%-38px)]">
        {/* Mini steps decorative */}
        <div
          className="adf-mini-steps adf-mini-steps-section"
          aria-hidden="true"
        >
          <i />
          <i />
          <i />
          <i />
        </div>

        <span className="mb-[22px] inline-flex items-center gap-[10px] text-[11px] leading-[1.4] font-bold tracking-[0.2em] text-[#38c8f7] uppercase before:h-px before:w-8 before:bg-[#00c6ff] before:content-['']">
          09 / Ce primești / Sistem de brand
        </span>

        <h2 className="mt-[14px] mb-[25px] font-primary text-[clamp(32px,3.8vw,54px)] leading-[1.14] font-bold tracking-[-0.05em]">
          O identitate gândită
          <br />
          <em className="not-italic text-[#00c6ff]">pentru utilizare reală.</em>
        </h2>

        <p className="mb-0 max-w-[680px] text-[16px] leading-[1.82] text-[#b8c5ce]">
          Un proiect de identitate vizuală nu se încheie cu un simbol grafic.
          Livrabilele sunt definite în brief și pot include un set coerent de
          resurse pentru echipă, colaboratori și comunicare.
        </p>

        <div className="mt-[40px] grid grid-cols-1 gap-[14px] min-[651px]:grid-cols-2">
          {deliverables.map((item) => (
            <article
              key={item.number}
              className="flex min-h-[205px] flex-col border border-[#34444e] bg-[linear-gradient(145deg,#192832,#111b22)] p-[29px] transition-all duration-300 hover:-translate-y-[2px] hover:border-[rgba(0,198,255,0.36)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)]"
            >
              <span className="text-[11px] text-[#00c6ff]">
                {item.number} / {item.category}
              </span>

              <h3 className="mt-[19px] mb-[8px] font-primary text-[21px] leading-[1.2] font-bold tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="m-0 text-[14px] leading-[1.82] text-[#b8c5ce]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-[32px] flex flex-wrap items-center gap-[14px]">
          <a
            href="#contact"
            className="inline-flex items-center gap-[18px] bg-[#00c6ff] px-[24px] py-[18px] text-[11px] font-extrabold tracking-[0.08em] text-[#061016] uppercase transition-colors hover:bg-white"
          >
            Solicită o discuție ↗
          </a>

          <a
            href="#portofoliu"
            className="inline-flex items-center border border-[#47717f] px-[23px] py-[17px] text-[11px] tracking-[0.08em] text-[#f4f8fb] uppercase transition-colors hover:border-[#00c6ff] hover:text-[#00c6ff]"
          >
            Vezi exemple reale ↓
          </a>
        </div>
      </div>
    </section>
  );
}
