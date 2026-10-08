import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { SanityImage } from "@/components/SanityImage";
import { getProject, getProjectSlugs } from "@/lib/sanity/fetch";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  if (slugs.length === 0) {
    return [{ slug: "_" }];
  }
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({
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
    <article className="mx-auto max-w-5xl px-5 py-16 md:px-8">
      <a href="/#projeler" className="text-sm text-neutral-500 hover:text-neutral-900">
        ← Projeler
      </a>
      <p className="mt-8 text-xs uppercase tracking-[0.18em] text-neutral-500">
        {[project.category, project.location, project.year, project.area]
          .filter(Boolean)
          .join(" · ")}
      </p>
      <h1 className="mt-3 text-4xl tracking-tight text-neutral-900 md:text-5xl">
        {project.title}
      </h1>
      {project.mainImage?.asset ? (
        <div className="relative mt-10 aspect-[16/10] overflow-hidden bg-neutral-200">
          <SanityImage
            image={project.mainImage}
            alt={project.mainImage.alt || project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
            width={1600}
          />
        </div>
      ) : null}
      {project.description?.length ? (
        <div className="mt-10 max-w-2xl space-y-4 text-sm leading-7 text-neutral-700">
          <PortableText value={project.description} />
        </div>
      ) : null}
      {project.gallery?.length ? (
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {project.gallery.map((image, index) =>
            image.asset ? (
              <li key={image.asset._id || index} className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
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
