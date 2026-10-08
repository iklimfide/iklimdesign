import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İklim Güvenç | İç Mimar",
  description:
    "Kavramsal araştırmalardan detaylı uygulama çizimlerine kadar, insan odaklı ve sürdürülebilir yaşam alanları.",
};

export default function IklimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full bg-[#FBFBFB] text-[#1C1C1C] selection:bg-stone-200 selection:text-stone-900">
      {children}
    </div>
  );
}
