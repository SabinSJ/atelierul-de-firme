const socialLinks = [
  {
    label: "Instagram @atelierul.firme",
    href: "https://www.instagram.com/atelierul.firme/",
  },
  {
    label: "Facebook Atelierul de Firme",
    href: "https://www.facebook.com/share/14yD3VwHTWB/",
  },
];

export default function Social() {
  return (
    <section
      id="social"
      className="border-t border-[#24343e] bg-[#080d12] py-[103px] text-[#f4f8fb] max-[650px]:py-[70px]"
    >
      <div className="mx-auto w-[min(1060px,calc(100%-72px))] max-[650px]:w-[calc(100%-38px)]">
        <div className="max-w-3xl">
          <span className="mb-[22px] inline-flex items-center gap-[10px] text-[11px] leading-[1.4] font-bold tracking-[0.2em] text-[#38c8f7] uppercase before:h-px before:w-8 before:bg-[#00c6ff] before:content-['']">
            12 / În comunitate
          </span>

          <h2 className="my-[14px] mb-[25px] font-primary text-[clamp(32px,3.8vw,54px)] font-bold leading-[1.14] tracking-[-0.05em]">
            Urmărește ce
            <br />
            <span className="font-normal text-[#00c6ff]">construim.</span>
          </h2>

          <p className="mb-[40px] leading-[1.82] text-[#b8c5ce]">
            Descoperă actualizări, idei de branding și materialele publicate de
            Atelierul de Firme pe canalele oficiale.
          </p>

          <div className="flex flex-wrap gap-[14px]">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-[#47717f] px-[23px] py-[17px] text-[11px] uppercase tracking-[0.08em] transition-colors hover:border-[#00c6ff] hover:text-[#00c6ff]"
              >
                {link.label}
                <span aria-hidden="true" className="ml-[18px]">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
