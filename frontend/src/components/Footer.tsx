import Image from "next/image";

export default function Footer() {
  return (
    <footer className="adf-footer border-t border-white/10 bg-[#080d12] px-8 py-7 text-[#f4f8fb] lg:px-16">
      <div className="adf-shell mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-x-8 gap-y-5">
        {/* Company identity */}
        <span className="flex min-w-[210px] flex-col gap-[6px] text-[12px] leading-[1.5]">
          <span className="flex items-center gap-3">
            <Image
              src="/images/logo-atelierul-de-firme.svg"
              alt=""
              width={25}
              height={40}
              loading="lazy"
              className="h-[37px] w-[23px] shrink-0 self-start object-contain"
            />
            <span>
              © 2026{" "}
              <strong className="font-bold text-[#e8f4f8]">
                ATELIERUL DE FIRME SRL
              </strong>
            </span>
          </span>

          <small className="block max-w-[320px] text-[10px] font-normal leading-[1.65] tracking-normal text-[#9ab6c6]">
            CUI 49759020 · Reg. Com. J2024000695293 · Capital social 5.000 lei
          </small>
        </span>

        <a
          href="#date-legale"
          className="text-[10px] font-medium tracking-[0.08em] text-[#b9cbd4] transition-colors hover:text-[#00c6ff]"
        >
          DATELE FIRMEI ↗
        </a>

        <a
          href="#documente-juridice"
          className="text-[10px] font-medium tracking-[0.08em] text-[#b9cbd4] transition-colors hover:text-[#00c6ff]"
        >
          DOCUMENTE JURIDICE ↗
        </a>

        <span className="text-[10px] font-medium tracking-[0.12em] text-[#9ab6c6]">
          STRATEGIE. STRUCTURĂ. PERFORMANȚĂ.
        </span>

        <a
          href="#main"
          className="text-[10px] font-medium tracking-[0.08em] text-[#b9cbd4] transition-colors hover:text-[#00c6ff]"
        >
          ÎNAPOI SUS ↑
        </a>
      </div>
    </footer>
  );
}
