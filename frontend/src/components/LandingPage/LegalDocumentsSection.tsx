import Image from "next/image";
import { legalDocuments } from "@/constants/legalDocuments";

export default function LegalDocuments() {
  return (
    <section
      id="documente-juridice"
      aria-labelledby="adf-legal-docs-title"
      className="adf-legal-docs relative isolate overflow-hidden bg-[linear-gradient(145deg,#0b141c,#101d26)] py-[65px] pb-[75px] text-[#f4f8fb]"
    >
      {/* Architectural metal facade */}
      <div
        className="pointer-events-none absolute left-[-115px] top-[105px] z-0 w-[310px] max-w-[28vw] opacity-[0.33] [filter:drop-shadow(0_0_22px_rgba(0,198,255,0.13))] animate-[adf-facade-drift_11s_ease-in-out_infinite_alternate] max-[1100px]:left-[-145px] max-[1100px]:opacity-20 max-[650px]:left-[-145px] max-[650px]:top-[90px] max-[650px]:w-[230px] max-[650px]:max-w-none max-[650px]:opacity-[0.12] motion-reduce:animate-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 360 470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-auto w-full"
        >
          <g stroke="#77aabb" strokeWidth="2" opacity=".67">
            <path d="M24 423V130L169 48V344L24 423Z" />
            <path d="M169 48L319 128V423L169 344V48Z" />
            <path d="M24 423L169 344L319 423" />
            <path d="M24 363L169 282L319 362M24 304L169 223L319 304M24 245L169 163L319 245" />
            <path d="M70 103V397M120 75V368M218 75V370M269 102V396" />
          </g>

          <g stroke="#00c6ff" strokeWidth="2.5" opacity=".8">
            <path d="M24 423L72 395V338L121 310V253L169 225" />
            <path d="M169 225L217 253V310L267 339V395L319 423" />
            <path d="M24 130L169 48L319 128" />
          </g>

          <g stroke="#9edfed" strokeDasharray="4 12" opacity=".35">
            <path d="M169 48V448M10 436H332" />
          </g>
        </svg>
      </div>

      <div className="relative z-[2] mx-auto w-[min(1060px,calc(100%-72px))] max-[650px]:w-[calc(100%-38px)] after:pointer-events-none after:absolute after:right-0 after:bottom-[-25px] after:h-[72px] after:w-[146px] after:opacity-[0.28] after:content-[''] after:bg-[linear-gradient(90deg,transparent_0_17%,#00c6ff_17%_18%,transparent_18%_38%,#00c6ff_38%_39%,transparent_39%_59%,#00c6ff_59%_60%,transparent_60%_80%,#00c6ff_80%_81%,transparent_81%),linear-gradient(0deg,#00c6ff_0_1px,transparent_1px)] after:[clip-path:polygon(0_80%,25%_80%,25%_60%,50%_60%,50%_40%,75%_40%,75%_20%,100%_20%,100%_100%,0_100%)]">
        {/* Heading and logo */}
        <div className="mb-[18px] flex max-w-full items-center justify-between gap-[30px]">
          <div>
            <span className="mb-[22px] inline-flex items-center gap-[10px] text-[11px] leading-[1.4] font-bold tracking-[0.2em] text-[#38c8f7] uppercase before:h-px before:w-8 before:bg-[#00c6ff] before:content-['']">
              14 / Informații și transparență
            </span>

            <h2
              id="adf-legal-docs-title"
              className="my-[14px] mb-0 font-primary text-[clamp(32px,3.8vw,54px)] font-bold leading-[1.14] tracking-[-0.05em]"
            >
              Documente juridice
              <br />
              <span className="font-normal text-[#00c6ff]">și informări.</span>
            </h2>
          </div>

          <Image
            src="/images/logo-atelierul-de-firme.svg"
            alt="Simbol Atelierul de Firme"
            width={65}
            height={105}
            loading="lazy"
            className="h-[105px] w-[65px] shrink-0 object-contain opacity-90 drop-shadow-[0_0_14px_rgba(0,198,255,0.16)] max-[650px]:h-[67px] max-[650px]:w-[41px]"
          />
        </div>

        <p className="mt-0 mb-8 max-w-[760px] text-[14px] leading-[1.82] text-[#b8c5ce]">
          Această secțiune este în pregătire. Documentele de mai jos urmează să
          fie redactate, verificate și completate înainte de publicarea
          definitivă.
        </p>

        {/* Legal documents */}
        <div className="grid grid-cols-2 items-stretch gap-[14px] max-[650px]:grid-cols-1">
          {legalDocuments.map((document) => (
            <article
              key={document.title}
              className="flex min-h-[185px] flex-col border border-[rgba(101,156,177,0.3)] bg-[#13232c] p-[23px] max-[650px]:min-h-0 max-[650px]:p-[19px]"
            >
              <h3 className="mb-[10px] mt-0 font-primary text-[17px] font-bold leading-normal tracking-[-0.05em]">
                {document.title}
              </h3>

              <p className="mb-4 mt-0 text-[13px] leading-[1.7] text-[#b8c5ce]">
                {document.description}
              </p>

              <small className="mt-auto inline-block text-[11px] tracking-[0.04em] text-[#91d8ed]">
                {document.status}
              </small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
