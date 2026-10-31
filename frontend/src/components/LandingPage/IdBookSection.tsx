export default function IdBookSection() {
  return (
    <section
      id="id-book"
      className="border-t border-[#24343e] bg-[#080d12] py-[103px] text-[#f4f8fb] max-[650px]:py-[70px]"
    >
      <div className="mx-auto w-[calc(100%-72px)] max-w-[1060px] max-[650px]:w-[calc(100%-38px)]">
        <div>
          <span className="mb-[22px] inline-flex items-center gap-[10px] text-[11px] leading-[1.4] font-bold tracking-[0.2em] text-[#38c8f7] uppercase before:h-px before:w-8 before:bg-[#00c6ff] before:content-['']">
            09 / Identitate documentată
          </span>

          <h2 className="my-[14px] font-primary text-[clamp(32px,3.8vw,54px)] font-bold leading-[1.14] tracking-[-0.05em]">
            Totul pornește
            <br />
            de la <span className="text-[#00c6ff]">ID Book.</span>
          </h2>

          <p className="mb-10 max-w-[680px] text-base leading-[1.82] text-[#b8c5ce]">
            ID Book-ul este manualul de utilizare al identității vizuale.
            Definește variantele corecte de logo, paleta cromatică, tipografia
            Sora și Inter, iconografia geometrică, tonul de comunicare și
            exemplele de aplicare. Acesta oferă echipei și colaboratorilor un
            reper comun pentru website, social media, prezentări, documente și
            materiale tipărite.
          </p>
        </div>

        <div className="mt-8 border-l-[3px] border-[#00c6ff] bg-[linear-gradient(120deg,#102b38,#080e14)] p-9 max-[650px]:p-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00c6ff]">
              Un produs specializat
            </span>

            <h3 className="my-[7px] font-primary text-[29px] font-semibold tracking-[-0.05em]">
              IDBook.ro
            </h3>

            <p className="text-sm leading-[1.82] text-[#b8c5ce] md:text-base">
              Dezvoltăm separat IDBook.ro pentru identități vizuale
              standardizate, accesibile firmelor noi și celor care au nevoie să
              își clarifice sau să își actualizeze imaginea.
            </p>

            <a
              href="https://www.idbook.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border border-[#47717f] px-[23px] py-[17px] text-[11px] uppercase tracking-[0.08em] transition-colors hover:border-[#00c6ff] hover:bg-[#00c6ff] hover:text-[#080d12]"
            >
              Descoperă IDBook.ro
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
