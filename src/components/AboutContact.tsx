import { ContactForm } from "@/components/ContactForm";
import type { Settings } from "@/lib/sanity/types";

const platformLabels: Record<string, string> = {
  instagram: "Instagram",
  linkedin: "LinkedIn",
  behance: "Behance",
};

type Props = {
  settings: Settings | null;
};

export function AboutContact({ settings }: Props) {
  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
      <div id="hakkimda">
        <h2 className="text-2xl tracking-tight text-neutral-900">Hakkımda</h2>
        <p className="mt-5 whitespace-pre-line text-sm leading-7 text-neutral-600 md:text-base">
          {settings?.bio ||
            "İç mimarlık ve mekânsal deneyim tasarımı üzerine çalışan stüdyo pratiği."}
        </p>
      </div>
      <div id="iletisim">
        <h2 className="text-2xl tracking-tight text-neutral-900">İletişim</h2>
        {settings?.email ? (
          <a
            href={`mailto:${settings.email}`}
            className="mt-5 inline-block text-sm text-neutral-800 underline-offset-4 hover:underline"
          >
            {settings.email}
          </a>
        ) : (
          <p className="mt-5 text-sm text-neutral-500">E-posta henüz eklenmedi.</p>
        )}
        {settings?.socialLinks?.length ? (
          <ul className="mt-5 flex flex-wrap gap-4 text-sm">
            {settings.socialLinks.map((link) => (
              <li key={`${link.platform}-${link.url}`}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  {platformLabels[link.platform] || link.platform}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
        <ContactForm email={settings?.email} />
      </div>
    </section>
  );
}
