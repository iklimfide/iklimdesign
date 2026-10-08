import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "İklim Güvenç — İç Mimarlık",
  description:
    "İç mimarlık ve mekânsal deneyim tasarımı. Konut, ticari ve konsept projeler.",
  metadataBase: new URL("https://iklimguvenc.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className={`${spaceGrotesk.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
