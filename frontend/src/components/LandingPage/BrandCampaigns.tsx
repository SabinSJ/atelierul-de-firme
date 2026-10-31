const campaigns = [
  {
    category: "START / BRANDING",
    title: "Pornește profesionist.",
    description:
      "Un brand nou are nevoie de claritate și credibilitate încă din prima zi.",
    image: "images/rocket-image.jpg",
    alt: "Lansează-te cu un brand profesionist: variantă pentru campanii și comunicare",
    link: "#contact",
    linkLabel: "Solicită o discuție ↗",
  },
  {
    category: "START / DIGITAL",
    title: "Pregătit pentru fiecare ecran.",
    description:
      "Mesajul și identitatea se adaptează consecvent formatelor digitale.",
    image: "images/rocket-image.jpg",
    alt: "Lansează-te cu un brand profesionist: variantă verticală pentru comunicare mobilă",
    link: "#servicii",
    linkLabel: "Explorează serviciile ↗",
  },
  {
    category: "EVOLUȚIE / REBRANDING",
    title: "O nouă etapă de brand.",
    description:
      "Reîmprospătăm identitatea pentru o afacere în creștere, fără să pierdem ceea ce o face recognoscibilă.",
    image: "images/rebranding-strategic1.jpg",
    alt: "Un nou brand pentru o nouă etapă: rebranding strategic reprezentat prin doi cameleoni",
    link: "#contact",
    linkLabel: "Discută despre rebranding ↗",
  },
];

export default function BrandCampaigns() {
  return (
    <section
      id="campanii-branding"
      className="overflow-hidden border-t border-[rgba(65,175,218,0.13)] bg-[#07111b] py-[clamp(56px,7vw,110px)] text-[#eef8fd]"
    >
      <div className="mx-auto w-[calc(100%-72px)] max-w-[1060px] max-[650px]:w-[calc(100%-38px)]">
        <span className="mb-[22px] inline-flex items-center gap-[10px] text-[11px] leading-[1.4] font-bold tracking-[0.2em] text-[#38c8f7] uppercase before:h-px before:w-8 before:bg-[#00c6ff] before:content-['']">
          05 / Lansare &amp; transformare
        </span>

        <h2 className="mb-[23px] text-[clamp(35px,5.1vw,73px)] leading-[1.06] font-bold tracking-[-0.045em] text-white">
          Brandul potrivit{" "}
          <em className="not-italic text-[#00c6ff]">pentru etapa ta.</em>
        </h2>

        <p className="mb-[29px] max-w-[580px] text-[clamp(15px,1.5vw,18px)] leading-[1.78] text-[#b5cbd6]">
          Fie că pornești o afacere sau îi pregătești următoarea etapă,
          strategia și identitatea trebuie să spună aceeași poveste. Trei
          expresii vizuale, două obiective distincte: lansarea și rebrandingul.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 min-[601px]:grid-cols-2 min-[901px]:grid-cols-3">
          {campaigns.map((campaign) => (
            <article
              key={campaign.category}
              className="flex flex-col overflow-hidden border border-[rgba(112,180,208,0.22)] bg-[#101d28]"
            >
              {/* Containerul imaginii cu înălțime fixă, asigură că toate cardurile sunt egale */}
              <div className="h-[300px] w-full bg-[#070e16] sm:h-[340px]">
                <img
                  src={campaign.image}
                  alt={campaign.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col gap-[9px] p-6">
                <small className="text-[10px] font-extrabold tracking-[0.15em] text-[#00c6ff]">
                  {campaign.category}
                </small>

                <h3 className="m-0 text-[24px] leading-[1.16] text-white">
                  {campaign.title}
                </h3>

                <p className="mb-2 text-[14px] leading-[1.65] text-[#a9c1cd]">
                  {campaign.description}
                </p>

                <a
                  href={campaign.link}
                  className="mt-auto text-[13px] text-[#89e2ff] underline underline-offset-4 transition-colors hover:text-[#00c6ff]"
                >
                  {campaign.linkLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
