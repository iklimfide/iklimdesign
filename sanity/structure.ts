import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("İçerik")
    .items([
      S.listItem()
        .title("Projeler")
        .schemaType("project")
        .child(S.documentTypeList("project").title("Projeler")),
      S.listItem()
        .title("Portfolyo")
        .schemaType("portfolio")
        .child(
          S.document()
            .schemaType("portfolio")
            .documentId("portfolio")
            .title("Portfolyo"),
        ),
      S.listItem()
        .title("Hakkımda & İletişim")
        .schemaType("settings")
        .child(
          S.document()
            .schemaType("settings")
            .documentId("settings")
            .title("Hakkımda & İletişim"),
        ),
    ]);
