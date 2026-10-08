import { BrandLogo } from "@/components/BrandLogo";

const links = [
  { href: "/#projects", label: "Projeler" },
  { href: "/#portfolio", label: "Portfolyo (PDF)" },
  { href: "/#about", label: "Hakkımda" },
  { href: "/#contact", label: "İletişim" },
];

export function Header() {
  return (
    <header className="z-20 flex flex-col justify-between border-b border-arch-200 bg-arch-50 p-8 lg:fixed lg:h-screen lg:w-1/3 lg:border-b-0 lg:border-r lg:p-16 xl:w-1/4">
      <div>
        <a href="/" className="block">
          <BrandLogo size={96} priority className="mb-4 h-24 w-24 object-contain" />
          <h1 className="font-display text-2xl font-bold uppercase tracking-tight text-arch-900">
            İklim Güvenç
          </h1>
          <p className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
            {"İç Mimarlık & Mekan Tasarımı"}
          </p>
        </a>
        <nav className="mt-12 lg:mt-20">
          <ul className="space-y-4 text-sm font-medium tracking-wide">
            {links.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`group flex items-center transition-colors ${
                    index === 0
                      ? "text-arch-900"
                      : "text-zinc-500 hover:text-arch-900"
                  }`}
                >
                  <span
                    className={`mr-3 inline-block h-2 w-2 rounded-full transition-transform group-hover:scale-125 ${
                      index === 0
                        ? "bg-arch-900"
                        : "bg-transparent group-hover:bg-arch-400"
                    }`}
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-12 border-t border-arch-200 pt-8 lg:mt-0">
        <div className="flex flex-wrap gap-x-4 text-xs uppercase tracking-wider text-zinc-500">
          <span>Instagram</span>
          <span>/</span>
          <span>LinkedIn</span>
          <span>/</span>
          <span>Behance</span>
        </div>
        <p className="mt-4 text-[11px] text-zinc-400">
          © 2026 İklim Güvenç. Tüm hakları saklıdır.
        </p>
      </div>
    </header>
  );
}
