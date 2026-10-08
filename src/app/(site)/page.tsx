import { Suspense } from "react";
import { AboutContact } from "@/components/AboutContact";
import { PortfolioCard } from "@/components/PortfolioCard";
import { ProjectGrid } from "@/components/ProjectGrid";
import {
  getCategories,
  getPortfolio,
  getProjects,
  getSettings,
} from "@/lib/sanity/fetch";

async function HomeContent() {
  const [projects, categories, portfolio, settings] = await Promise.all([
    getProjects(),
    getCategories(),
    getPortfolio(),
    getSettings(),
  ]);

  return (
    <>
      <ProjectGrid projects={projects} categories={categories} />
      <PortfolioCard portfolio={portfolio} />
      <AboutContact settings={settings} />
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<p className="text-sm text-zinc-500">Yükleniyor…</p>}>
      <HomeContent />
    </Suspense>
  );
}
