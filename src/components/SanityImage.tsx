import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { SanityImage as SanityImageType } from "@/lib/sanity/types";

type Props = {
  image: SanityImageType;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
  width?: number;
  fill?: boolean;
};

export function SanityImage({
  image,
  alt,
  className,
  sizes,
  priority = false,
  width = 1600,
  fill = false,
}: Props) {
  const dimensions = image.asset?.metadata?.dimensions;
  const aspectRatio = dimensions?.aspectRatio || 4 / 5;
  const src = urlFor(image).width(width).quality(80).url();

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
        placeholder={image.asset?.metadata?.lqip ? "blur" : "empty"}
        blurDataURL={image.asset?.metadata?.lqip}
      />
    );
  }

  const w = dimensions?.width ?? width;
  const h = dimensions?.height ?? Math.round(width / aspectRatio);

  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      sizes={sizes}
      className={className}
      priority={priority}
      placeholder={image.asset?.metadata?.lqip ? "blur" : "empty"}
      blurDataURL={image.asset?.metadata?.lqip}
    />
  );
}
