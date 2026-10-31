export default function SpecialProjects() {
  return (
    <section
      id="proiecte-speciale"
      className="border-t border-[#24343e] bg-[#080d12] py-[103px] text-[#f4f8fb] max-[650px]:py-[70px]"
    >
      <div className="mx-auto w-[calc(100%-72px)] max-w-[1060px] max-[650px]:w-[calc(100%-38px)]">
        <span className="mb-[22px] inline-flex items-center gap-[10px] text-[11px] leading-[1.4] font-bold tracking-[0.2em] text-[#38c8f7] uppercase before:h-px before:w-8 before:bg-[#00c6ff] before:content-['']">
          10 / Proiecte speciale
        </span>

        <h2 className="mt-[14px] mb-[25px] font-primary text-[clamp(32px,3.8vw,54px)] leading-[1.14] font-bold tracking-[-0.05em]">
          Idei care ies din{" "}
          <em className="not-italic text-[#00c6ff]">tipare.</em>
        </h2>

        <p className="mb-0 max-w-[760px] text-[16px] leading-[1.82] text-[#b8c5ce]">
          Un spațiu pentru proiecte de prezentare, concepte vizuale și lucrări
          speciale din portofoliul nostru. Vom completa această secțiune cu
          materiale selectate și aprobate pentru publicare.
        </p>
      </div>
    </section>
  );
}
