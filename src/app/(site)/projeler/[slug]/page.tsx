import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { ProjectCover } from "@/components/ProjectCover";
import { SanityImage } from "@/components/SanityImage";
import { getProject, getProjectSlugs } from "@/lib/sanity/fetch";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  if (slugs.length === 0) {
    return [{ slug: "_" }];
  }
  return slugs.map((slug) => ({ slug }));
}

async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "_") {
    notFound();
  }

  const project = await getProject(slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-dvh bg-[#FBFBFB] text-[#1C1C1C]">
      <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-[#FBFBFB]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="/iklim" className="flex items-center gap-3">
            <BrandLogo size={48} className="h-12 w-12 object-contain" />
            <span className="text-xl font-bold uppercase tracking-tight text-stone-900">
              İklim Güvenç{" "}
              <span className="-mt-1 block text-xs font-normal lowercase tracking-widest text-stone-500">
                interior architecture
              </span>
            </span>
          </a>
          <a
            href="/iklim#projeler"
            className="text-xs uppercase tracking-widest text-stone-400 hover:text-stone-900"
          >
            ← Projeler
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-6xl space-y-8 px-6 py-12 md:py-16">
        <div className="flex flex-col justify-between gap-4 border-t border-stone-200 pt-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-widest text-stone-400">
              {project.category}
            </span>
            <h1 className="mt-1 text-3xl font-light text-stone-900 md:text-5xl">
              {project.title}
            </h1>
          </div>
          <div className="space-y-1 text-xs text-stone-500 md:text-right">
            {project.location ? <p>{project.location}</p> : null}
            <p>{[project.year, project.area].filter(Boolean).join(" — ")}</p>
          </div>
        </div>

        {project.mainImage?.asset || project.coverUrl ? (
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-stone-100">
            <ProjectCover
              project={project}
              sizes="(max-width: 1024px) 100vw, 75vw"
              className="object-cover"
              priority
              width={1600}
            />
          </div>
        ) : null}

        {project.description?.length ? (
          <div className="max-w-2xl space-y-4 text-base font-light leading-relaxed text-stone-600">
            <PortableText value={project.description} />
          </div>
        ) : null}

        {project.gallery?.length ? (
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {project.gallery.map((image, index) =>
              image.asset ? (
                <li
                  key={image.asset._id || index}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100"
                >
                  <SanityImage
                    image={image}
                    alt={image.alt || `${project.title} görsel ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    width={1200}
                  />
                </li>
              ) : null,
            )}
          </ul>
        ) : null}
      </article>
    </div>
  );
}

export default function ProjectRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={<p className="px-6 py-24 text-sm text-stone-500">Yükleniyor…</p>}
    >
      <ProjectPage params={params} />
    </Suspense>
  );
}
