"use client";

import { useMemo, useState } from "react";
import { SanityImage } from "@/components/SanityImage";
import type { ProjectListItem } from "@/lib/sanity/types";

type Props = {
  projects: ProjectListItem[];
  categories: string[];
};

export function ProjectGrid({ projects, categories }: Props) {
  const [active, setActive] = useState("Tümü");

  const filters = useMemo(() => ["Tümü", ...categories], [categories]);

  const visible = useMemo(() => {
    if (active === "Tümü") return projects;
    return projects.filter((project) => project.category === active);
  }, [active, projects]);

  return (
    <section id="projeler" className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="text-2xl tracking-tight text-neutral-900">Projeler</h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((category) => {
            const isActive = active === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(category)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-300 bg-transparent text-neutral-700 hover:border-neutral-900"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
      {visible.length === 0 ? (
        <p className="mt-10 text-sm text-neutral-500">
          Bu kategoride henüz proje yok.
        </p>
      ) : (
        <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <li key={project._id}>
              <a href={`/projeler/${project.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                  {project.mainImage?.asset ? (
                    <SanityImage
                      image={project.mainImage}
                      alt={project.mainImage.alt || project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      priority={index < 3}
                      width={900}
                    />
                  ) : null}
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <h3 className="text-base text-neutral-900">{project.title}</h3>
                  {project.year ? (
                    <span className="text-xs text-neutral-500">{project.year}</span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-neutral-500">
                  {[project.category, project.location].filter(Boolean).join(" · ")}
                </p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
