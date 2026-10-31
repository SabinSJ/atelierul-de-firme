import { projects } from "@/constants/projects";

export default function Portfolio() {
  return (
    <section
      id="portofoliu"
      className="border-t border-[#24343e] bg-[#111a22] py-[103px] text-[#f4f8fb] max-[650px]:py-[70px]"
    >
      <div className="mx-auto w-[calc(100%-72px)] max-w-[1060px] max-[650px]:w-[calc(100%-38px)]">
        {/* Section heading */}
        <div className="mb-[50px] max-w-2xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00c6ff]">
            Proiecte selectate
          </span>

          <h2 className="my-[14px] font-primary text-[clamp(32px,3.8vw,54px)] font-bold leading-[1.14] tracking-[-0.05em]">
            Identități care
            <br />
            <span className="font-normal text-[#00c6ff]">prind formă.</span>
          </h2>

          <p className="max-w-[680px] text-base leading-[1.82] text-[#b8c5ce]">
            Șase publicații selectate din portofoliu: identități vizuale și
            prezentări de brand. Explorează materialele prin publicațiile
            digitale găzduite pe FlipHTML5.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-2 items-stretch gap-[15px] max-[650px]:grid-cols-1">
          {projects.map((project) => (
            <article
              key={project.name}
              className="
                group flex h-full min-w-0 flex-col
                border border-dashed border-[#46616f]
                bg-[linear-gradient(150deg,#1a2b35,#10171e)]
                p-6
                transition-[border-color,transform,box-shadow]
                duration-[220ms] ease-in-out
                motion-safe:hover:-translate-y-[2px]
                hover:border-[rgba(0,198,255,0.36)]
                motion-safe:hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)]
              "
            >
              <span className="text-[11px] tracking-[0.1em] text-[#00c6ff]">
                {project.category}
              </span>

              {/* Project title */}
              {project.special ? (
                <div className="adf-rebeauto-heading mt-3 flex items-center justify-between gap-3">
                  <h3 className="min-h-[2.8em] font-primary text-lg font-semibold">
                    {project.name}
                  </h3>

                  <a
                    href={`${project.url}#p=1`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Deschide ID Book Rebeauto"
                    className="shrink-0 text-[10px] font-semibold text-[#00c6ff] transition-colors hover:text-white"
                  >
                    Vezi ID Book ↗
                  </a>
                </div>
              ) : (
                <h3 className="mt-3 min-h-[2.8em] font-primary text-lg font-semibold">
                  {project.name}
                </h3>
              )}

              {/* Description */}
              <p className="mt-[6px] min-h-[5.6em] text-xs leading-[1.65] text-white/70 max-[650px]:min-h-0">
                {project.description}
              </p>

              {/* FlipHTML5 publication */}
              <div className="mt-auto w-full pt-5">
                <div className="h-[480px] min-h-0 w-full overflow-hidden bg-[#080d12] max-[650px]:h-[430px]">
                  <iframe
                    title={project.iframeTitle}
                    src={project.url}
                    className="block h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>

                <a
                  href={project.special ? `${project.url}#p=1` : project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs text-[#9de9ff] underline transition-colors hover:text-white"
                >
                  Deschide pe tot ecranul ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* IDBook CTA */}
        <div className="mt-8 border-l-[3px] border-[#00c6ff] bg-[linear-gradient(120deg,#102b38,#080e14)] p-9 max-[650px]:p-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00c6ff]">
            Din portofoliu către produs
          </span>

          <h3 className="mt-[7px] max-w-2xl font-primary text-[29px] font-semibold leading-snug max-[650px]:text-2xl">
            Vrei o identitate coerentă pentru afacerea ta?
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-[1.82] text-[#b8c5ce]">
            Descoperă IDBook.ro, brandul nostru dedicat identităților vizuale
            standardizate, cu un proces clar și livrabile concrete.
          </p>

          <a
            href="https://www.idbook.ro/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex border border-[#47717f] px-[23px] py-[17px] text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9fd9e9] transition-colors hover:border-[#00c6ff] hover:bg-[#173544] hover:text-white"
          >
            Descoperă IDBook.ro ↗
          </a>
        </div>
      </div>
    </section>
  );
}
