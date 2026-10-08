import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "İklim Güvenç — İç Mimar & Tasarımcı",
  description: "İç Mimarlık & Mekan Tasarımı",
  metadataBase: new URL("https://iklimguvenc.com"),
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
    shortcut: "/logo.jpg",
  },
  openGraph: {
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${plusJakarta.variable} ${syne.variable} h-full scroll-smooth antialiased`}
    >
      <body
        className={`${plusJakarta.className} min-h-full bg-arch-50 text-arch-900 selection:bg-arch-900 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
