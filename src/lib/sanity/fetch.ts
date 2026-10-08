import { isSanityConfigured } from "../../../sanity/env";
import { client } from "./client";
import {
  CATEGORIES_QUERY,
  FEATURED_PROJECTS_QUERY,
  PORTFOLIO_QUERY,
  PROJECT_QUERY,
  PROJECT_SLUGS_QUERY,
  PROJECTS_QUERY,
  SETTINGS_QUERY,
} from "./queries";
import type { Portfolio, Project, ProjectListItem, Settings } from "./types";

const DEFAULT_CATEGORIES = [
  "Konut",
  "Ticari / Ofis",
  "Restoran / Kafe",
  "Konsept",
] as const;

export { DEFAULT_CATEGORIES };

async function fetchSafe<T>(
  query: string,
  params: Record<string, string> = {},
): Promise<T | null> {
  if (!isSanityConfigured) return null;
  return client.fetch<T>(query, params, {
    cache: "no-store",
  });
}

export async function getProjects(): Promise<ProjectListItem[]> {
  return (await fetchSafe<ProjectListItem[]>(PROJECTS_QUERY)) ?? [];
}

export async function getFeaturedProjects(): Promise<ProjectListItem[]> {
  const featured =
    (await fetchSafe<ProjectListItem[]>(FEATURED_PROJECTS_QUERY)) ?? [];
  if (featured.length > 0) return featured;
  return (await getProjects()).slice(0, 2);
}

export async function getProject(slug: string): Promise<Project | null> {
  return fetchSafe<Project>(PROJECT_QUERY, { slug });
}

export async function getProjectSlugs(): Promise<string[]> {
  return (await fetchSafe<string[]>(PROJECT_SLUGS_QUERY)) ?? [];
}

export async function getCategories(): Promise<string[]> {
  const fromCms = (await fetchSafe<string[]>(CATEGORIES_QUERY)) ?? [];
  return Array.from(new Set([...DEFAULT_CATEGORIES, ...fromCms]));
}

export async function getPortfolio(): Promise<Portfolio | null> {
  return fetchSafe<Portfolio>(PORTFOLIO_QUERY);
}

export async function getSettings(): Promise<Settings | null> {
  return fetchSafe<Settings>(SETTINGS_QUERY);
}
