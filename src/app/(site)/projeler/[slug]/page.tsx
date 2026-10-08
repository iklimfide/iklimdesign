import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { Suspense } from "react";
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
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <a
        href="/#projects"
        className="text-xs uppercase tracking-widest text-zinc-400 hover:text-arch-900"
      >
        ← Projeler
      </a>
      <div className="flex flex-col justify-between border-t border-arch-200 pt-2 md:flex-row md:items-end">
        <div>
          <span className="text-xs uppercase tracking-widest text-zinc-400">
            {project.category}
          </span>
          <h1 className="font-display mt-1 text-3xl font-medium md:text-5xl">
            {project.title}
          </h1>
        </div>
        <div className="mt-4 space-y-1 font-mono text-xs text-zinc-500 md:mt-0 md:text-right">
          {project.location ? <p>{project.location}</p> : null}
          <p>{[project.year, project.area].filter(Boolean).join(" — ")}</p>
        </div>
      </div>
      {project.mainImage?.asset || project.coverUrl ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-arch-100">
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
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-zinc-600">
          <PortableText value={project.description} />
        </div>
      ) : project.excerpt ? (
        <p className="max-w-2xl text-base leading-relaxed text-zinc-600">
          {project.excerpt}
        </p>
      ) : null}
      {project.gallery?.length ? (
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {project.gallery.map((image, index) =>
            image.asset ? (
              <li
                key={image.asset._id || index}
                className="relative aspect-[4/5] overflow-hidden bg-arch-100"
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
  );
}

export default function ProjectRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<p className="text-sm text-zinc-500">Yükleniyor…</p>}>
      <ProjectPage params={params} />
    </Suspense>
  );
}
