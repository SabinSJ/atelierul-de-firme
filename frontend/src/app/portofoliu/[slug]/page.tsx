import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Breadcrumbs from "@/components/Breadcrumbs";
import { projects } from "@/constants/projects";
import ProjectCarousel from "@/components/projects/ProjectCarousel";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Proiect negăsit | Atelierul de Firme" };
  }

  return {
    title: `${project.name} | Portofoliu Atelierul de Firme`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#080d12] text-white">
      {/* Breadcrumb */}
      <div className="pt-28 sm:pt-32">
        <Breadcrumbs
          items={[
            { label: "Acasă", href: "/" },
            { label: "Portofoliu", href: "/portofoliu" },
            { label: project.name },
          ]}
        />
      </div>

      {/* Project hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Project information */}
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c6ff]">
              {project.category}
            </span>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {project.name}
            </h1>

            <p className="mt-6 text-base leading-8 text-[#a9bac5]">
              {project.description}
            </p>

            {project.year && (
              <p className="mt-6 text-sm text-[#71808b]">
                Anul proiectului: {project.year}
              </p>
            )}

            <div className="mt-8 h-px w-20 bg-[#00c6ff]/60" />
          </div>

          {/* Project image */}
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/10 bg-[#101820]">
            <Image
              src={project.coverImage}
              alt={`${project.name} — imagine reprezentativă`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Project overview */}
      <section className="border-y border-white/10 bg-[#0c131a]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_0.7fr] lg:px-8 lg:py-24">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c6ff]">
              Despre proiect
            </span>

            <h2 className="mt-4 text-3xl font-semibold">
              O identitate construită în jurul brandului.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#a9bac5]">
              {project.overview || project.description}
            </p>
          </div>

          {project.services && project.services.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
                Servicii realizate
              </h3>

              <ul className="mt-6 divide-y divide-white/10">
                {project.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-4 py-4 text-sm text-[#a9bac5]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00c6ff]" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Additional gallery */}
      {/* {project.gallery && project.gallery.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c6ff]">
              Galerie
            </span>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Detalii vizuale
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {project.gallery.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#101820]"
              >
                <Image
                  src={image}
                  alt={`${project.name} — imagine ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )} */}

      {/* Exhibition design gallery */}
      {/* {project.gallery && project.gallery.length > 0 && (
        <section className="border-y border-white/10 bg-[#0c131a]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c6ff]">
                Exhibition design
              </span>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Design expozițional & randări 3D
              </h2>

              <p className="mt-6 text-base leading-8 text-[#a9bac5]">
                Explorarea conceptelor de design prin randări tridimensionale,
                perspective arhitecturale și detalii vizuale ale spațiilor
                expoziționale.
              </p>
            </div>


            <div className="mt-14 grid gap-10 sm:grid-cols-2">
              {project.gallery.map((item, index) => (
                <article key={`${item.image}-${index}`} className="group">
    
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#101820]">
                    <Image
                      src={item.image}
                      alt={`${project.name} — ${item.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mt-6">
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#00c6ff]">
                      Render 3D / {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#a9bac5]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* 3D Renderings */}
      {project.showcaseImages && project.showcaseImages.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c6ff]">
              Exhibition design
            </span>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Concepte expoziționale 3D
            </h2>

            <p className="mt-5 text-base leading-8 text-[#a9bac5]">
              Explorează conceptele de standuri expoziționale dezvoltate pentru
              ORMCO, prezentate prin randări tridimensionale.
            </p>
          </div>

          <ProjectCarousel
            images={project.showcaseImages}
            projectName={project.name}
          />
        </section>
      )}

      {/* ID Book */}
      {project.url && (
        <section className="border-y border-white/10 bg-[#0c131a]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c6ff]">
                  Brand identity
                </span>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Explorează ID Book-ul
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#a9bac5]">
                  Descoperă prezentarea identității vizuale și elementele
                  sistemului de brand.
                </p>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[#00c6ff] transition-colors hover:text-white"
              >
                Deschide în fereastră nouă
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#101820] sm:aspect-[16/9]">
              <iframe
                src={project.url}
                title={project.iframeTitle || `${project.name} — ID Book`}
                className="h-full w-full"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c6ff]">
                Portofoliu
              </span>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Alte proiecte
              </h2>
            </div>

            <Link
              href="/proiecte"
              className="hidden text-sm font-medium text-[#a9bac5] transition-colors hover:text-[#00c6ff] sm:block"
            >
              Vezi toate proiectele →
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/portofoliu/${item.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#101820]">
                  <Image
                    src={item.coverImage}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#00c6ff]">
                  {item.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold transition-colors group-hover:text-[#00c6ff]">
                  {item.name}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-7 text-[#a9bac5]">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

          <Link
            href="/proiecte"
            className="mt-10 inline-flex text-sm font-medium text-[#00c6ff] hover:text-white sm:hidden"
          >
            Vezi toate proiectele →
          </Link>
        </section>
      )}
    </main>
  );
}
