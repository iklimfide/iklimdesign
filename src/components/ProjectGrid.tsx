"use client";

import { useMemo, useState } from "react";
import { ProjectCover } from "@/components/ProjectCover";
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
    <section id="projects" className="space-y-10">
      <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-zinc-400">
        {filters.map((category) => {
          const isActive = active === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(category)}
              className={
                isActive
                  ? "text-arch-900"
                  : "hover:text-arch-900"
              }
            >
              {category}
            </button>
          );
        })}
      </div>
      {visible.length === 0 ? (
        <p className="text-sm text-zinc-500">Bu kategoride henüz proje yok.</p>
      ) : (
        <div className="space-y-24">
          {visible.map((project, index) => (
            <a
              key={project._id}
              href={`/projeler/${project.slug}`}
              className="group block cursor-pointer"
            >
              <div className="relative mb-6 aspect-[16/10] overflow-hidden bg-arch-100">
                <ProjectCover
                  project={project}
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={index < 2}
                  width={1600}
                />
              </div>
              <div className="flex flex-col justify-between border-t border-arch-200 pt-2 md:flex-row md:items-end">
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-400">
                    {String(index + 1).padStart(2, "0")} / {project.category}
                  </span>
                  <h2 className="font-display mt-1 text-2xl font-medium underline-offset-4 group-hover:underline md:text-3xl">
                    {project.title}
                  </h2>
                </div>
                <div className="mt-4 space-y-1 font-mono text-xs text-zinc-500 md:mt-0 md:text-right">
                  {project.location ? <p>{project.location}</p> : null}
                  <p>
                    {[project.year, project.area].filter(Boolean).join(" — ")}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
