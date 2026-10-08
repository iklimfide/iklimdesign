import { createClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "../../../sanity/env";

export const client = createClient({
  projectId: projectId || "s6a85d3h",
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
  stega: { enabled: false },
});

export { isSanityConfigured };
