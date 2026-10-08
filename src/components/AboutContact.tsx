import type { Settings } from "@/lib/sanity/types";

type Props = {
  settings: Settings | null;
};

export function AboutContact({ settings }: Props) {
  const email = settings?.email || "info@iklimguvenc.com";

  return (
    <div className="grid grid-cols-1 gap-16 border-t border-arch-200 pt-12 md:grid-cols-2">
      <section id="about" className="space-y-4">
        <h2 className="text-xs uppercase tracking-widest text-zinc-400">Hakkımda</h2>
        <p className="whitespace-pre-line font-display text-xl font-medium leading-relaxed">
          {settings?.bio ||
            "İklim Güvenç — NABA İtalya mezunu iç mimar. Minimalist çizgiler ve sürdürülebilir malzemelerle mekan tasarlıyor."}
        </p>
      </section>
      <section id="contact" className="space-y-4">
        <h2 className="text-xs uppercase tracking-widest text-zinc-400">İletişim</h2>
        <a href={`mailto:${email}`} className="block font-display text-2xl font-medium">
          {email}
        </a>
      </section>
    </div>
  );
}
