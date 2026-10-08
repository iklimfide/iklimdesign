import Image from "next/image";
import { SanityImage } from "@/components/SanityImage";
import type { ProjectListItem } from "@/lib/sanity/types";

type Props = {
  project: ProjectListItem;
  sizes: string;
  priority?: boolean;
  className?: string;
  width?: number;
};

export function ProjectCover({
  project,
  sizes,
  priority = false,
  className,
  width = 1200,
}: Props) {
  if (project.mainImage?.asset) {
    return (
      <SanityImage
        image={project.mainImage}
        alt={project.mainImage.alt || project.title}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
        width={width}
      />
    );
  }

  if (project.coverUrl) {
    return (
      <Image
        src={project.coverUrl}
        alt={project.title}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
      />
    );
  }

  return null;
}
