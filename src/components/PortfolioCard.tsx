import type { Portfolio } from "@/lib/sanity/types";

type Props = {
  portfolio: Portfolio | null;
};

export function PortfolioCard({ portfolio }: Props) {
  const href = portfolio?.pdfUrl
    ? `${portfolio.pdfUrl}?dl=${encodeURIComponent(portfolio.pdfName || "portfolyo.pdf")}`
    : undefined;

  return (
    <section
      id="portfolio"
      className="flex flex-col justify-between gap-8 border-t border-arch-200 pt-12 md:flex-row md:items-end"
    >
      <div className="space-y-2">
        <span className="text-xs uppercase tracking-widest text-zinc-400">
          Portfolyo (PDF)
        </span>
        <h2 className="font-display text-2xl font-medium md:text-3xl">
          Tam Portfolyo Dosyasını İnceleyin
        </h2>
        <p className="max-w-md text-sm text-zinc-500">
          Çizimler, malzeme paftaları ve detaylı görseller içeren güncel katalog.
        </p>
      </div>
      {href ? (
        <a
          href={href}
          download
          className="border border-arch-900 px-5 py-3 text-xs uppercase tracking-widest transition-colors hover:bg-arch-900 hover:text-white"
        >
          PDF İndir
        </a>
      ) : (
        <p className="text-sm text-zinc-400">PDF henüz yüklenmedi.</p>
      )}
    </section>
  );
}
