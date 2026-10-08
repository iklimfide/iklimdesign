import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from "../../../sanity/env";

const builder = createImageUrlBuilder({
  projectId: projectId || "s6a85d3h",
  dataset,
});

export function urlFor(source: SanityImageSource) {
  return builder.image(source).format("webp").auto("format");
}
