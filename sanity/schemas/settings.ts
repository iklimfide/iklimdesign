import { defineArrayMember, defineField, defineType } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "Hakkımda & İletişim",
  type: "document",
  fields: [
    defineField({
      name: "portrait",
      title: "Portre ( /iklim )",
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
    defineField({
      name: "aboutHeadline",
      title: "Hakkımda başlığı",
      type: "string",
    }),
    defineField({
      name: "bio",
      title: "Biyografi",
      type: "text",
      rows: 8,
    }),
    defineField({
      name: "education",
      title: "Eğitim",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "expertise",
      title: "Uzmanlık",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "email",
      title: "E-posta",
      type: "string",
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: "socialLinks",
      title: "Sosyal medya",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "socialLink",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Instagram", value: "instagram" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Behance", value: "behance" },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (rule) =>
                rule.uri({ scheme: ["https"] }).required(),
            }),
          ],
          preview: {
            select: { title: "platform", subtitle: "url" },
          },
        }),
      ],
    }),
  ],
});
