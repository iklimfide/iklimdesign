import { createClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "../../../sanity/env";

export const client = createClient({
  projectId: projectId || "missingprojectid",
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
  stega: { enabled: false },
});

export { isSanityConfigured };
