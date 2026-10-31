const legalDetails = [
  { label: "Denumire juridică", value: "ATELIERUL DE FIRME SRL" },
  { label: "CIF / CUI", value: "49759020" },
  { label: "Registrul Comerțului", value: "J2024000695293" },
  {
    label: "Sediul social",
    value: "Bd. Carol I, nr. 60, bl. 14G, et. 6, ap. 18, Câmpina, jud. Prahova",
  },
  {
    label: "Punct de lucru — Câmpina",
    value: "B-dul Carol I, nr. 43, bl. 23J, parter, Câmpina, jud. Prahova",
  },
  {
    label: "Punct de lucru — București",
    value:
      "Aleea Priporului, nr. 15–19, scara B, ap. 01, sector 1, municipiul București",
  },
  { label: "Capital social", value: "5.000 lei" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/atelierul.firme/",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/14yD3VwHTWB/",
    icon: (
      <path
        d="M14.3 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.2a22 22 0 0 0-2.5-.2c-2.5 0-4.2 1.5-4.2 4.3v2.3H8v3.2h2.9V21z"
        fill="currentColor"
        stroke="none"
      />
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/40762678464",
    icon: (
      <path
        d="M12 2a9.9 9.9 0 0 0-8.5 15.1 9.8 9.8 0 0 0-1 8.6L2 22l5.7-1.5A10 10 0 1 0 12 2zm0 18.2a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3.3.9.9-3.2-.2-.3a8.2 8.2 0 1 1 7 3.9zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.2-.2.3-.7.8-.8 1-.2.1-.3.2-.6.1-.3-.2-1.1-.4-2-1.3-.7-.6-1.2-1.4-1.4-1.7-.1-.3 0-.4.2-.5l.4-.5.2-.4c.1-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4s-.9.9-.9 2.2.9 2.5 1 2.7c.2.2 1.8 2.7 4.3 3.8.6.2 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1-.2-.3-.2-.5-.3z"
        fill="currentColor"
        stroke="none"
      />
    ),
  },
];

const maps = [
  {
    name: "Câmpina · Bd. Carol I, nr. 43",
    title: "Hartă interactivă — punct de lucru Câmpina",
    src: "https://maps.google.com/maps?q=Bulevardul%20Carol%20I%2043%2C%20Campina%2C%20Prahova%2C%20Romania&z=16&output=embed",
    open: true,
  },
  {
    name: "București · Aleea Priporului, nr. 15–19",
    title: "Hartă interactivă — punct de lucru București",
    src: "https://maps.google.com/maps?q=Aleea%20Priporului%2015-19%2C%20Sector%201%2C%20Bucuresti%2C%20Romania&z=16&output=embed",
    open: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="last border-t border-[#24343e] bg-[#0c1319] py-[103px] text-[#f4f8fb] max-[650px]:py-[70px]"
    >
      <div className="mx-auto w-[min(1060px,calc(100%-72px))] max-[650px]:w-[calc(100%-38px)]">
        {/* Intro */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {/* Mini steps */}
          <div
            className="mx-auto mb-[23px] flex h-[45px] w-max origin-bottom scale-[0.8] items-end gap-[5px] opacity-[0.88]"
            aria-hidden="true"
          >
            {[12, 21, 30, 40].map((height, index) => (
              <i
                key={index}
                className={[
                  "block w-[21px] skew-y-[-20deg] border shadow-[3px_3px_0_rgba(0,198,255,0.09)]",
                  index === 3
                    ? "border-[#00c6ff] bg-[linear-gradient(120deg,#087fa3,#004b70)] shadow-[0_0_18px_rgba(0,198,255,0.16)]"
                    : "border-[rgba(121,195,220,0.56)] bg-[linear-gradient(125deg,#355666,#1c303b)]",
                ].join(" ")}
                style={{ height }}
              />
            ))}
          </div>

          <span className="mb-[22px] inline-flex items-center gap-[10px] text-[11px] leading-[1.4] font-bold tracking-[0.2em] text-[#38c8f7] uppercase before:h-px before:w-8 before:bg-[#00c6ff] before:content-['']">
            13 / Contact
          </span>

          <h2 className="my-[14px] mb-[25px] font-primary text-[clamp(32px,3.8vw,54px)] font-bold leading-[1.14] tracking-[-0.05em]">
            Hai să construim
            <br />
            <span className="font-normal text-[#00c6ff]">
              identitatea brandului tău.
            </span>
          </h2>

          <p className="mx-auto mt-3 mb-[18px] max-w-[650px] break-words text-center text-[16px] leading-[1.65] [hyphens:auto] max-[650px]:text-left max-[650px]:text-[15px]">
            Ai o firmă nouă, pregătești un brand sau vrei să-ți actualizezi
            identitatea? Spune-ne ce proiect ai în minte.
          </p>

          <a
            href="mailto:design@atelierul-de-firme.ro"
            className="mx-auto mt-8 flex w-fit items-center gap-[18px] bg-[#00c6ff] px-6 py-[18px] text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#061016] transition-colors hover:bg-white"
          >
            Discută proiectul tău
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Contact and legal information */}
        <div
          id="date-legale"
          className="my-[45px] mb-2 grid grid-cols-2 items-start gap-[18px] text-left max-[750px]:grid-cols-1"
        >
          {/* Direct contact */}
          <div className="relative min-w-0 overflow-hidden border border-[rgba(105,164,185,0.35)] bg-[linear-gradient(135deg,#142630,#0c171f)] p-[29px] before:absolute before:top-[22px] before:right-[21px] before:h-[45px] before:w-[46px] before:content-[''] before:opacity-[0.7] before:bg-[linear-gradient(to_top,#17617c_0_22%,transparent_22%_27%,#17617c_27%_49%,transparent_49%_54%,#17617c_54%_76%,transparent_76%_81%,#00c6ff_81%_100%)] before:[clip-path:polygon(0_78%,25%_78%,25%_54%,50%_54%,50%_30%,75%_30%,75%_0,100%_0,100%_100%,0_100%)] max-[750px]:p-[22px]">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00c6ff]">
              Contact direct
            </span>

            <h3 className="mt-[15px] mb-3 font-primary text-[21px] font-semibold tracking-[-0.05em]">
              Începem cu o conversație.
            </h3>

            <p className="mt-3 mb-[18px] text-justify text-[13px] leading-[1.75] [hyphens:auto] [text-align-last:left] max-[650px]:text-left max-[650px]:text-[15px]">
              Pentru un proiect nou, un rebranding sau o colaborare, ne poți
              transmite câteva detalii despre afacere și obiective.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <a
                href="mailto:design@atelierul-de-firme.ro"
                className="flex max-w-full items-center gap-[10px] break-words text-sm text-[#a6eaff] transition-colors hover:text-[#00c6ff]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-[#00c6ff]"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                  <path d="m3.5 6 8.5 7 8.5-7" />
                </svg>
                <span className="min-w-0 break-all">
                  design@atelierul-de-firme.ro ↗
                </span>
              </a>

              <a
                href="tel:+40762678464"
                className="flex max-w-full items-center gap-[10px] text-sm text-[#a6eaff] transition-colors hover:text-[#00c6ff]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-[#00c6ff]"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6 19.7 19.7 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7.1 10a16 16 0 0 0 6.9 6.9l1.6-1.9a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.7 2z" />
                </svg>
                <span className="min-w-0">0762 678 464 ↗</span>
              </a>

              <a
                href="https://wa.me/40762678464"
                target="_blank"
                rel="noopener noreferrer"
                className="my-[9px] mr-[13px] inline-flex w-fit items-center border border-[rgba(0,198,255,0.4)] px-5 py-3 text-sm font-semibold text-[#00c6ff] transition-colors hover:bg-[#00c6ff] hover:text-[#080d12]"
              >
                Scrie-ne pe WhatsApp ↗
              </a>
            </div>

            {/* Maps */}
            <div
              id="hartile-noastre"
              className="mt-[25px] min-w-0 border-t border-[rgba(110,166,190,0.35)] pt-[19px] text-left"
            >
              <div className="mb-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00c6ff]">
                  Punctele noastre de lucru
                </span>
                <p className="mt-[7px] mb-[13px] text-left text-xs leading-[1.5]">
                  Explorează locațiile direct pe hartă.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {maps.map((map) => (
                  <details
                    key={map.title}
                    open={map.open}
                    className="mb-[10px] min-w-0 border border-[rgba(103,153,171,0.45)] bg-[#0c1922]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-[10px] px-3 py-[13px] text-left text-xs leading-[1.45] text-[#d8edf5] marker:content-none [&::-webkit-details-marker]:hidden open:text-[#8ce7ff]">
                      {map.name}
                      <span className="text-[#00c6ff]">⌄</span>
                    </summary>

                    <div className="h-[230px] overflow-hidden border-t border-[rgba(103,153,171,0.35)] bg-[#152933]">
                      <iframe
                        title={map.title}
                        src={map.src}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        className="block h-full w-full border-0"
                      />
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Legal information */}
          <div className="relative min-w-0 overflow-hidden border border-[rgba(105,164,185,0.35)] bg-[linear-gradient(135deg,#142630,#0c171f)] p-[29px] before:absolute before:top-[22px] before:right-[21px] before:h-[45px] before:w-[46px] before:content-[''] before:opacity-[0.7] before:bg-[linear-gradient(to_top,#17617c_0_22%,transparent_22%_27%,#17617c_27%_49%,transparent_49%_54%,#17617c_54%_76%,transparent_76%_81%,#00c6ff_81%_100%)] before:[clip-path:polygon(0_78%,25%_78%,25%_54%,50%_54%,50%_30%,75%_30%,75%_0,100%_0,100%_100%,0_100%)] max-[750px]:p-[22px]">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00c6ff]">
              Identificarea operatorului
            </span>

            <h3 className="mt-[15px] mb-3 font-primary text-[21px] font-semibold tracking-[-0.05em]">
              Date legale și transparență
            </h3>

            <dl className="my-[17px] grid gap-0">
              {legalDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="border-b border-[rgba(116,162,180,0.18)] py-[10px]"
                >
                  <dt className="text-[11px] uppercase tracking-[0.06em] text-[#84c6dd]">
                    {detail.label}
                  </dt>
                  <dd className="mt-[5px] text-xs text-[#dde7ec]">
                    {detail.value}
                  </dd>
                </div>
              ))}

              <div className="grid grid-cols-1 gap-2 border-b border-[rgba(116,162,180,0.18)] py-[10px] sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-5">
                <dt className="text-[11px] uppercase tracking-[0.06em] text-[#84c6dd]">
                  Telefon de contact / WhatsApp
                </dt>
                <dd>
                  <a
                    href="tel:+40762678464"
                    className="text-sm text-[#8bdeff] transition-colors hover:text-[#00c6ff]"
                  >
                    0762 678 464
                  </a>
                </dd>
              </div>
            </dl>

            <a
              href="#hartile-noastre"
              className="mt-6 inline-flex text-sm font-medium leading-6 text-[#00c6ff] transition-colors hover:text-white"
            >
              Explorează hărțile interactive ale punctelor de lucru ↗
            </a>

            <p className="mt-8 border-t border-white/10 pt-6 text-xs leading-6 text-[#aabec9]">
              Înainte de lansare trebuie verificate și publicate politica de
              confidențialitate, informarea despre cookie-uri și celelalte
              informații aplicabile serviciilor oferite.
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.name} Atelierul de Firme`}
              className="inline-flex items-center gap-[9px] rounded-[5px] border border-[#395766] px-[15px] py-[11px] text-xs leading-[1.3] text-[#e2edf2] transition-colors hover:border-[#00c6ff] max-[600px]:p-[10px]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 text-[#00c6ff]"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                {social.icon}
              </svg>
              {social.name}
            </a>
          ))}

          <span className="inline-flex cursor-default items-center gap-2 rounded-[5px] border border-dashed border-[#395766] px-[15px] py-[11px] text-xs text-[#afbec8] opacity-[0.85] max-[600px]:p-[10px]">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 text-[#69a7bc]"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9h3.7v12H3.4V9Zm5.8 0h3.5v1.6h.1A3.9 3.9 0 0 1 16.3 8c3.8 0 4.5 2.5 4.5 5.7V21h-3.7v-6.4c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.2V9Z" />
            </svg>
            LinkedIn
            <span className="text-[10px] text-[#8da2b2]">în pregătire</span>
          </span>
        </div>
      </div>
    </section>
  );
}
