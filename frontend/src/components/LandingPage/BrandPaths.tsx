import { paths } from "@/constants/paths";

export default function BrandPaths() {
  return (
    <section
      id="lansare-rebranding"
      className="adf-paths border-t border-[#24343e] bg-[#080d12] py-[103px] text-[#f4f8fb] max-[650px]:py-[70px]"
    >
      <div className="mx-auto w-[calc(100%-72px)] max-w-[1060px] max-[650px]:w-[calc(100%-38px)]">
        <div className="mb-14">
          <span className="mb-[22px] inline-flex items-center gap-[10px] text-[11px] leading-[1.4] font-bold tracking-[0.2em] text-[#38c8f7] uppercase before:h-px before:w-8 before:bg-[#00c6ff] before:content-['']">
            08 / Lansare și rebranding
          </span>

          <h2 className="mt-6 font-primary text-[clamp(35px,4.1vw,58px)] font-bold leading-[1.2] tracking-[-0.06em]">
            De la primul pas la
            <br />
            <span className="font-normal text-[#00c6ff]">
              următoarea transformare.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-[14px] max-[650px]:grid-cols-1">
          {paths.map((path) => (
            <article
              key={path.category}
              className="
                flex min-h-[205px] flex-col
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
              <span className="text-[11px] text-[#00c6ff]">
                {path.category}
              </span>

              <h3 className="mt-[19px] mb-2 font-primary text-[21px] font-bold leading-normal tracking-[-0.04em]">
                {path.title}
              </h3>

              <p className="m-0 text-sm leading-[1.82] text-[#b8c5ce]">
                {path.description}
              </p>

              <a
                href={path.link}
                className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-[#00c6ff] transition-colors hover:text-white"
              >
                {path.linkLabel}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
