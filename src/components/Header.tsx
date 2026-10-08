"use client";

import { useState } from "react";

const links = [
  { href: "/#projeler", label: "Projeler" },
  { href: "/#portfolyo", label: "Portfolyo" },
  { href: "/#hakkimda", label: "Hakkımda" },
  { href: "/#iletisim", label: "İletişim" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#f7f6f3]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="/" className="text-sm font-medium tracking-[0.18em] text-neutral-900">
          İKLİM GÜVENÇ
        </a>
        <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-neutral-950">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="/#iletisim"
          className="hidden rounded-full bg-neutral-900 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-700 md:inline-flex"
        >
          İletişime Geç
        </a>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 md:hidden"
          aria-expanded={open}
          aria-label="Menü"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menü</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-4 bg-neutral-900" />
            <span className="block h-px w-4 bg-neutral-900" />
          </span>
        </button>
      </div>
      {open ? (
        <nav className="flex flex-col gap-3 border-t border-neutral-200 px-5 py-4 text-sm md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#iletisim"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-fit rounded-full bg-neutral-900 px-4 py-2 text-white"
          >
            İletişime Geç
          </a>
        </nav>
      ) : null}
    </header>
  );
}
