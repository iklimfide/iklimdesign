import type { Portfolio } from "@/lib/sanity/types";

type Props = {
  portfolio: Portfolio | null;
};

export function PortfolioCard({ portfolio }: Props) {
  const href = portfolio?.pdfUrl
    ? `${portfolio.pdfUrl}?dl=${encodeURIComponent(portfolio.pdfName || "portfolyo.pdf")}`
    : undefined;

  return (
    <section id="portfolyo" className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <div className="flex flex-col gap-6 border border-neutral-200 bg-white px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <h2 className="text-2xl tracking-tight text-neutral-900">Portfolyo</h2>
          <p className="mt-2 max-w-lg text-sm leading-6 text-neutral-600">
            Seçilmiş projelerin yer aldığı PDF portfolyoyu indirebilirsiniz.
          </p>
        </div>
        {href ? (
          <a
            href={href}
            download
            className="inline-flex rounded-full bg-neutral-900 px-5 py-3 text-sm text-white transition-colors hover:bg-neutral-700"
          >
            {portfolio?.title || "Portfolyo"} indir
          </a>
        ) : (
          <p className="text-sm text-neutral-500">PDF henüz yüklenmedi.</p>
        )}
      </div>
    </section>
  );
}
