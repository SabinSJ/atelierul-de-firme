import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="hero adf-hero-book relative isolate overflow-hidden bg-[radial-gradient(ellipse_56%_62%_at_80%_30%,rgba(0,198,255,0.105),transparent_72%),radial-gradient(ellipse_52%_72%_at_5%_89%,rgba(23,68,93,0.20),transparent_72%),#080d12]"
      aria-labelledby="hero-title"
    >
      {/* Decorative background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.17] [background-image:linear-gradient(rgba(137,190,209,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(137,190,209,0.11)_1px,transparent_1px)] [background-size:68px_68px] [mask-image:linear-gradient(90deg,transparent_5%,#000_76%,transparent_100%)] max-[650px]:bg-[length:52px_52px] max-[650px]:opacity-[0.09]"
      />

      <div className="wrap relative z-10 mx-auto grid min-h-screen w-full max-w-[1500px] items-center gap-16 px-8 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
        {/* Hero content */}
        <div className="flex flex-col items-start">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00c6ff]">
            Atelierul de Firme / Branding integrat
          </span>

          <div
            aria-hidden="true"
            className="mt-[28px] h-[2px] w-[64px] bg-[#00c6ff]"
          />

          <div
            className="pointer-events-none mt-[17px] mb-[3px] flex h-[31px] w-max origin-left scale-[0.65] items-end gap-[5px] opacity-[0.82] max-[650px]:mt-[12px]"
            aria-hidden="true"
          >
            <i className="block h-[12px] w-[21px] skew-y-[-20deg] border border-[rgba(121,195,220,0.56)] bg-[linear-gradient(125deg,#355666,#1c303b)] shadow-[3px_3px_0_rgba(0,198,255,0.09)]" />

            <i className="block h-[21px] w-[21px] skew-y-[-20deg] border border-[rgba(121,195,220,0.56)] bg-[linear-gradient(125deg,#355666,#1c303b)] shadow-[3px_3px_0_rgba(0,198,255,0.09)]" />

            <i className="block h-[30px] w-[21px] skew-y-[-20deg] border border-[rgba(121,195,220,0.56)] bg-[linear-gradient(125deg,#355666,#1c303b)] shadow-[3px_3px_0_rgba(0,198,255,0.09)]" />

            <i className="block h-[40px] w-[21px] skew-y-[-20deg] border border-[#00c6ff] bg-[linear-gradient(120deg,#087fa3,#004b70)] shadow-[0_0_18px_rgba(0,198,255,0.16)]" />
          </div>

          <h1
            id="hero-title"
            className="mt-8 font-primary text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl xl:text-6xl"
          >
            Identitate vizuală
            <br />
            <span className="font-normal text-[#00c6ff]">
              pentru brandul tău.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/65">
            O identitate puternică se construiește în detalii. Descoperă
            proiectul Real Estate AVN Elite Properties într-un ID Book
            interactiv, realizat pentru un brand cu personalitate.
          </p>

          {/* Project stages */}
          <div className="mt-[26px] flex flex-wrap gap-[9px]">
            <span className="border border-[#345766] px-[9px] py-[8px] text-[9px] tracking-[0.08em] text-[#9bc3cf]">
              01 / CONCEPT
            </span>
            <span className="border border-[#345766] px-[9px] py-[8px] text-[9px] tracking-[0.08em] text-[#9bc3cf]">
              02 / SISTEM VIZUAL
            </span>
            <span className="border border-[#345766] px-[9px] py-[8px] text-[9px] tracking-[0.08em] text-[#9bc3cf]">
              03 / APLICAȚII
            </span>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#portofoliu"
              className="border border-[#376278] px-5 py-3 text-xs font-semibold text-[#9fd9e9] transition-colors hover:border-[#00c6ff] hover:bg-[#173544] hover:text-white"
            >
              Explorează portofoliul ↓
            </Link>

            <a
              href="https://www.idbook.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-[#47717f] px-[13px] py-[12px] text-[10px] uppercase tracking-[0.08em] text-white/70 transition-colors hover:border-[#00c6ff] hover:text-white"
            >
              Descoperă IDBook.ro ↗
            </a>
          </div>
        </div>

        {/* AVN Elite Properties ID Book */}
        <div id="idbook-highlight" className="flex min-w-0 flex-col">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="text-[10px] font-semibold tracking-[0.15em] text-[#00c6ff]">
              REAL ESTATE / AVN ELITE PROPERTIES
            </span>

            <span className="text-[11px] tracking-wider text-white/40">
              PROIECT SELECTAT — 01
            </span>
          </div>

          {/* FlipHTML5 iframe */}
          <div className="mt-auto w-full pt-5">
            <div className="h-[480px] min-h-0 w-full overflow-hidden bg-[#080d12] max-[650px]:h-[430px]">
              <iframe
                title="AVN Elite Properties — ID Book Real Estate interactiv"
                src="https://online.fliphtml5.com/kbsms/AVN-ELITE-PROPERTIES---ID-BOOK---PREMIUM/"
                className="block h-full w-full border-0"
                loading="eager"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
          <a
            href="https://online.fliphtml5.com/kbsms/AVN-ELITE-PROPERTIES---ID-BOOK---PREMIUM/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-right text-xs text-[#9de9ff] underline transition-colors hover:text-white"
          >
            Răsfoiește pe tot ecranul ↗
          </a>
        </div>
      </div>
    </section>
  );
}
