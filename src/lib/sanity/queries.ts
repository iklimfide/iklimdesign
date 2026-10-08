import { groq } from "next-sanity";

const imageProjection = `{
  ...,
  asset->{
    _id,
    url,
    metadata {
      lqip,
      dimensions
    }
  }
}`;

export const PROJECTS_QUERY = groq`*[_type == "project"] | order(year desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  location,
  year,
  area,
  featured,
  mainImage ${imageProjection}
}`;

export const FEATURED_PROJECTS_QUERY = groq`*[_type == "project" && featured == true] | order(year desc)[0...4] {
  _id,
  title,
  "slug": slug.current,
  category,
  location,
  year,
  area,
  featured,
  mainImage ${imageProjection}
}`;

export const PROJECT_SLUGS_QUERY = groq`*[_type == "project" && defined(slug.current)].slug.current`;

export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  location,
  year,
  area,
  description,
  mainImage ${imageProjection},
  gallery[] ${imageProjection}
}`;

export const CATEGORIES_QUERY = groq`array::unique(*[_type == "project" && defined(category)].category)`;

export const PORTFOLIO_QUERY = groq`*[_type == "portfolio" && _id == "portfolio"][0] {
  title,
  "pdfUrl": pdfFile.asset->url,
  "pdfName": pdfFile.asset->originalFilename
}`;

export const SETTINGS_QUERY = groq`*[_type == "settings" && _id == "settings"][0] {
  aboutHeadline,
  bio,
  education,
  expertise,
  email,
  portrait ${imageProjection},
  socialLinks[] {
    platform,
    url
  }
}`;
