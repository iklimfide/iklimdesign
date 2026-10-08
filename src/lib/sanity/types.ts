export type SanityImage = {
  alt?: string;
  asset?: {
    _id?: string;
    url?: string;
    metadata?: {
      lqip?: string;
      dimensions?: {
        width: number;
        height: number;
        aspectRatio: number;
      };
    };
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
};

export type ProjectListItem = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  location?: string;
  year?: number;
  area?: string;
  mainImage?: SanityImage;
};

export type PortableTextBlock = {
  _key: string;
  _type: string;
  [key: string]: unknown;
};

export type Project = ProjectListItem & {
  description?: PortableTextBlock[];
  gallery?: SanityImage[];
};

export type Portfolio = {
  title: string;
  pdfUrl?: string;
  pdfName?: string;
};

export type SocialPlatform = "instagram" | "linkedin" | "behance";

export type SocialLink = {
  platform: SocialPlatform;
  url: string;
};

export type Settings = {
  bio?: string;
  email?: string;
  socialLinks?: SocialLink[];
};
