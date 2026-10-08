import type { Project } from "@/lib/sanity/types";

export const DEMO_PROJECTS: Project[] = [
  {
    _id: "demo-villa-modena",
    title: "Villa Modena",
    slug: "villa-modena",
    category: "Konut",
    location: "Milano",
    year: 2025,
    area: "320 m²",
    coverUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Doğal taş, geniş cam yüzeyler ve avlu etrafında kurgulanmış çağdaş bir konut.",
  },
  {
    _id: "demo-atelier-brasserie",
    title: "Atelier Brasserie",
    slug: "atelier-brasserie",
    category: "Restoran / Kafe",
    location: "Amsterdam",
    year: 2026,
    area: "180 m²",
    coverUrl:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Mutfak, bar ve oturma ritmini tek mekânda toplayan sıcak bir restoran içi.",
  },
  {
    _id: "demo-nordic-studio",
    title: "Nordic Studio Workspace",
    slug: "nordic-studio-workspace",
    category: "Ticari / Ofis",
    location: "Rotterdam",
    year: 2024,
    area: "420 m²",
    coverUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Açık ofis, toplantı ve odak odalarını ışık ve ahşap doku ile dengeleyen çalışma alanı.",
  },
  {
    _id: "demo-aether-pavilion",
    title: "Aether Pavilion",
    slug: "aether-pavilion",
    category: "Konsept",
    location: "İstanbul",
    year: 2025,
    area: "90 m²",
    coverUrl:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Geçici sergi ve toplanma için tasarlanmış, geçirgen bir konsept pavilyon.",
  },
  {
    _id: "demo-loft-karakoy",
    title: "Loft Karaköy",
    slug: "loft-karakoy",
    category: "Konut",
    location: "İstanbul",
    year: 2023,
    area: "145 m²",
    coverUrl:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Endüstriyel strüktürü koruyan, malzeme ve ışık üzerinden sadeleştirilmiş bir loft.",
  },
];
