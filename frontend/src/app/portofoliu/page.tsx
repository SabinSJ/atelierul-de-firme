import Link from "next/link";
import Image from "next/image";
import { projects } from "@/constants/projects";

export default function PortfolioPage() {
  const featuredProject = projects.find((project) => project.featured);

  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="min-h-screen bg-[#080d12] text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00c6ff]">
            Portofoliu
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Idei transformate în
            <span className="text-[#00c6ff]"> identități.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#a9bac5] sm:text-lg">
            Fiecare proiect spune o poveste despre strategie, identitate și
            soluții construite în jurul unui business. Descoperă o selecție din
            proiectele noastre.
          </p>
        </div>
      </section>

      {/* Featured project */}
      {featuredProject && (
        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 bg-[#00c6ff]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a9bac5]">
              Proiect reprezentativ
            </span>
          </div>

          <Link
            href={`/portofoliu/${featuredProject.slug}`}
            className="group grid grid-cols-1 overflow-hidden rounded-xl border border-white/10 bg-[#101820] transition-colors hover:border-[#00c6ff]/40 lg:grid-cols-12 items-center"
          >
            {/* Imaginea - 7 coloane pe desktop, înălțime maximă de 380px */}
            <div className="relative aspect-[16/9] w-full max-h-[380px] overflow-hidden bg-[#0a1017] lg:col-span-7 lg:h-full">
              <Image
                src={featuredProject.coverImage}
                alt={featuredProject.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-contain"
              />
            </div>

            {/* Zona de conținut - 5 coloane pe desktop, spațiere mai compactă */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-5 lg:p-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#00c6ff]">
                {featuredProject.category}
              </span>

              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl text-white transition-colors group-hover:text-[#00c6ff]">
                {featuredProject.name}
              </h2>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#a9bac5]">
                {featuredProject.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors group-hover:text-[#00c6ff]">
                <span>Descoperă proiectul</span>
                <span className="transition-transform group-hover:translate-x-1.5">
                  →
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* All projects */}
      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c6ff]">
              Selecție de proiecte
            </span>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Proiectele noastre
            </h2>
          </div>

          <p className="text-sm text-[#71808b]">
            {projects.length} proiecte prezentate
          </p>
        </div>

        <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/portofoliu/${project.slug}`}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#101820]">
                <Image
                  src={project.coverImage}
                  alt={project.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#00c6ff]">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold transition-colors group-hover:text-[#00c6ff]">
                  {project.name}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#a9bac5]">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-white">
                  Vezi proiectul
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
