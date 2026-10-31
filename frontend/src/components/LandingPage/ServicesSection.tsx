import { services } from "@/constants/services";

export default function Services() {
  return (
    <section
      id="servicii"
      className="border-t border-[#24343e] bg-[#080d12] py-[103px] text-[#f4f8fb] max-[650px]:py-[70px]"
    >
      <div className="mx-auto w-[calc(100%-72px)] max-w-[1060px] max-[650px]:w-[calc(100%-38px)]">
        {/* Section heading */}
        <div className="mb-10">
          <div className="mb-[19px] h-[3px] w-[70px] bg-[linear-gradient(90deg,#00c6ff,#285064,transparent)]" />

          <span className="mb-[22px] inline-flex items-center gap-[10px] text-[11px] leading-[1.4] font-bold tracking-[0.2em] text-[#38c8f7] uppercase before:h-px before:w-8 before:bg-[#00c6ff] before:content-['']">
            07 / Serviciile noastre
          </span>

          <h2 className="my-[14px] font-primary text-[clamp(32px,3.8vw,54px)] font-bold leading-[1.14] tracking-[-0.05em]">
            De la idee la
            <br />
            <span className="font-normal text-[#00c6ff]">
              identitate aplicată.
            </span>
          </h2>

          <p className="mb-0 max-w-[680px] text-sm leading-[1.82] text-[#b8c5ce]">
            Începem cu nevoile afacerii și construim un sistem de brand
            aplicabil, nu doar un logo. Fiecare proiect își definește
            livrabilele și etapele în funcție de obiective.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 gap-[14px] max-[650px]:grid-cols-1">
          {services.map((service) => (
            <article
              key={service.number}
              className="
                group flex min-h-[205px] flex-col
                border border-[#34444e]
                bg-[linear-gradient(145deg,#192832,#111b22)]
                p-[29px]
                transition-[border-color,transform,box-shadow]
                duration-[220ms] ease-in-out
                motion-safe:hover:-translate-y-[2px]
                motion-safe:hover:border-[rgba(0,198,255,0.36)]
                motion-safe:hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)]
              "
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#00c6ff]">
                  {service.number} / {service.category}
                </span>

                <span className="text-lg text-white/20 transition-colors group-hover:text-[#00c6ff]">
                  ↗
                </span>
              </div>

              <h3 className="mt-[19px] mb-2 font-primary text-[21px] font-bold leading-normal tracking-[-0.04em]">
                {service.title}
              </h3>

              <p className="m-0 text-sm leading-[1.82] text-[#b8c5ce]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
