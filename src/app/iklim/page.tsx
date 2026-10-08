import { Suspense } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { ProjectCover } from "@/components/ProjectCover";
import { SanityImage } from "@/components/SanityImage";
import {
  getFeaturedProjects,
  getProjects,
  getSettings,
} from "@/lib/sanity/fetch";
import type { ProjectListItem, Settings, SocialLink } from "@/lib/sanity/types";

function socialHref(links: SocialLink[] | undefined, platform: string) {
  return links?.find((link) => link.platform === platform)?.url;
}

async function IklimContent() {
  const [featured, projects, settings] = await Promise.all([
    getFeaturedProjects(),
    getProjects(),
    getSettings(),
  ]);

  return (
    <>
      <IklimHeader />
      <Hero />
      <Featured featured={featured} />
      <ProjectList projects={projects} />
      <About settings={settings} />
      <Contact settings={settings} />
      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-stone-400 md:flex-row">
        <div className="flex items-center gap-3">
          <BrandLogo size={32} className="h-8 w-8 object-contain" />
          <p>© 2026 İklim Güvenç. Tüm hakları saklıdır.</p>
        </div>
        <p className="uppercase tracking-wide">iklimguvenc.com</p>
      </footer>
    </>
  );
}

function IklimHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-[#FBFBFB]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="/iklim" className="flex items-center gap-3">
          <BrandLogo size={48} priority className="h-12 w-12 object-contain" />
          <span className="text-xl font-bold uppercase tracking-tight text-stone-900">
            İklim Güvenç{" "}
            <span className="-mt-1 block text-xs font-normal lowercase tracking-widest text-stone-500">
              interior architecture
            </span>
          </span>
        </a>
        <nav className="hidden items-center space-x-8 text-sm font-medium tracking-wide md:flex">
          <a href="#portfolyo" className="transition-colors hover:text-stone-500">
            PORTFOLYO
          </a>
          <a href="#projeler" className="transition-colors hover:text-stone-500">
            PROJELER
          </a>
          <a href="#hakkimda" className="transition-colors hover:text-stone-500">
            HAKKIMDA
          </a>
          <a
            href="#iletisim"
            className="rounded-full bg-stone-900 px-5 py-2.5 text-xs text-white transition-all hover:bg-stone-800"
          >
            İLETİŞİM
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-3xl">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-stone-400">
          {"Mekân Tasarımı & İç Mimarlık"}
        </span>
        <h1 className="mb-6 text-4xl font-light leading-tight text-stone-900 md:text-6xl">
          Estetik, fonksiyon ve mekânsal hissiyatın harmoniyle buluştuğu çizgiler.
        </h1>
        <p className="text-lg font-light leading-relaxed text-stone-600">
          Kavramsal araştırmalardan detaylı uygulama çizimlerine kadar, insan
          odaklı ve sürdürülebilir yaşam alanları tasarlıyorum.
        </p>
      </div>
    </section>
  );
}

function Featured({ featured }: { featured: ProjectListItem[] }) {
  return (
    <section id="portfolyo" className="mx-auto max-w-6xl border-t border-stone-200 px-6 py-12">
      <div className="mb-10">
        <h2 className="text-2xl font-light tracking-tight text-stone-900">
          Öne Çıkan Portfolyo
        </h2>
        <p className="mt-1 text-sm text-stone-500">
          Konsept, konut ve ticari mekan çalışmaları
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {featured.map((project, index) => (
          <a
            key={project._id}
            href={`/projeler/${project.slug}`}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-stone-100"
          >
            <ProjectCover
              project={project}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority={index < 2}
              width={1200}
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent p-8 text-white opacity-80 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
              <span className="text-xs uppercase tracking-widest text-stone-300">
                {project.category}
              </span>
              <h3 className="mt-1 text-xl font-medium">{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ProjectList({ projects }: { projects: ProjectListItem[] }) {
  return (
    <section id="projeler" className="mx-auto max-w-6xl border-t border-stone-200 px-6 py-16">
      <h2 className="mb-8 text-2xl font-light tracking-tight text-stone-900">
        Tüm Projeler
      </h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="flex flex-col justify-between rounded-xl border border-stone-200/80 bg-white p-6 transition-all hover:border-stone-400 md:flex-row md:items-center"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-stone-400">
                {[project.year, project.category].filter(Boolean).join(" • ")}
              </span>
              <h3 className="text-lg font-medium text-stone-900">{project.title}</h3>
            </div>
            <div className="mt-4 flex items-center space-x-4 md:mt-0">
              {project.location ? (
                <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">
                  {project.location}
                </span>
              ) : null}
              <a
                href={`/projeler/${project.slug}`}
                className="text-xs font-semibold text-stone-900 hover:underline"
              >
                Detayları İncele →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About({ settings }: { settings: Settings | null }) {
  const education =
    settings?.education ||
    "NABA - İç Mimarlık (Lisans)\nHollanda (Yüksek Lisans)";
  const expertise =
    settings?.expertise ||
    "Konsept Tasarımı, 3D Görselleştirme, Detay Çizimleri";

  return (
    <section id="hakkimda" className="mx-auto max-w-6xl border-t border-stone-200 px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-200">
            {settings?.portrait?.asset ? (
              <SanityImage
                image={settings.portrait}
                alt={settings.portrait.alt || "İklim Güvenç"}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                width={800}
              />
            ) : null}
          </div>
        </div>
        <div className="space-y-6 md:col-span-7">
          <h2 className="text-3xl font-light text-stone-900">
            {settings?.aboutHeadline || "Merhaba, Ben İklim Güvenç"}
          </h2>
          <p className="whitespace-pre-line font-light leading-relaxed text-stone-600">
            {settings?.bio ||
              "İç mimarlık lisans eğitimimi İtalya'da NABA (Nuova Accademia di Belle Arti)'da tamamladıktan sonra, yüksek lisans eğitimime Hollanda'da devam etmekteyim. Tasarım felsefem; mekânın estetiği kadar kullanıcı psikolojisi, ışık dengesi ve malzeme dokularının uyumunu ön planda tutmaya dayanır."}
          </p>
          <div className="grid grid-cols-2 gap-4 border-t border-stone-100 pt-4 text-sm">
            <div>
              <p className="font-medium text-stone-900">Eğitim</p>
              <p className="mt-1 whitespace-pre-line text-xs text-stone-500">
                {education}
              </p>
            </div>
            <div>
              <p className="font-medium text-stone-900">Uzmanlık</p>
              <p className="mt-1 whitespace-pre-line text-xs text-stone-500">
                {expertise}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ settings }: { settings: Settings | null }) {
  const email = settings?.email || "info@iklimguvenc.com";
  const linkedin = socialHref(settings?.socialLinks, "linkedin");
  const instagram = socialHref(settings?.socialLinks, "instagram");
  const socialUrl = linkedin || instagram;

  return (
    <section id="iletisim" className="mx-auto max-w-6xl border-t border-stone-200 px-6 py-16">
      <div className="flex flex-col items-start justify-between rounded-3xl bg-stone-900 p-8 text-white md:flex-row md:items-center md:p-14">
        <div>
          <span className="text-xs uppercase tracking-widest text-stone-400">
            İletişime Geçin
          </span>
          <h2 className="mt-2 mb-4 text-3xl font-light">Bir proje fikriniz mi var?</h2>
          <p className="max-w-md text-sm font-light text-stone-400">
            Proje iş birlikleri, portfolyo detayları veya detaylı bilgi almak için
            dilediğiniz zaman ulaşabilirsiniz.
          </p>
        </div>
        <div className="mt-8 flex flex-col space-y-3 md:mt-0">
          <a
            href={`mailto:${email}`}
            className="rounded-full bg-white px-6 py-3 text-center text-xs font-semibold text-stone-900 transition-all hover:bg-stone-100"
          >
            {email}
          </a>
          {socialUrl ? (
            <a
              href={socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-stone-700 px-6 py-3 text-center text-xs font-medium text-stone-300 transition-all hover:border-stone-500"
            >
              LinkedIn / Instagram
            </a>
          ) : (
            <span className="rounded-full border border-stone-700 px-6 py-3 text-center text-xs font-medium text-stone-300">
              LinkedIn / Instagram
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default function IklimPage() {
  return (
    <Suspense fallback={<p className="px-6 py-24 text-sm text-stone-500">Yükleniyor…</p>}>
      <IklimContent />
    </Suspense>
  );
}
