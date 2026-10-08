import { defineArrayMember, defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Proje",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Konut", value: "Konut" },
          { title: "Ticari / Ofis", value: "Ticari / Ofis" },
          { title: "Restoran / Kafe", value: "Restoran / Kafe" },
          { title: "Konsept", value: "Konsept" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Konum",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Yıl",
      type: "number",
      validation: (rule) => rule.min(1900).max(2100),
    }),
    defineField({
      name: "area",
      title: "Alan",
      type: "string",
      description: 'Örn: "180 m²"',
    }),
    defineField({
      name: "featured",
      title: "Öne çıkan ( /iklim portfolyo )",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "mainImage",
      title: "Ana görsel",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt metin",
          type: "string",
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Galeri",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt metin",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "description",
      title: "Açıklama",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "mainImage",
    },
  },
});
