import { lexicalHTML } from "@payloadcms/richtext-lexical";
import { Carousel } from "../blocks/Carousel";
import { CollectionConfig } from "payload/types";
import { semanticDivElement } from "../utils/GenericFields";

export const Chunk: CollectionConfig = {
  slug: "chunk",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "route",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "hidden",
      type: "checkbox",
    },
    {
      name: "content",
      type: "blocks",
      blocks: [
        {
          fields: [
            semanticDivElement({
              name: "container",
              label: "Container Element",
            }),
            { type: "richText", name: "text" },
            lexicalHTML("text", { name: "html" }),
          ],
          slug: "richText",
        },
        Carousel,
      ],
    },
    {
      name: "body",
      type: "richText",
      required: true,
    },
    {
      name: "meta",
      type: "array",
      fields: [
        {
          name: "type",
          type: "text",
        },
        {
          name: "contents",
          type: "textarea",
        },
      ],
    },
  ],
  admin: { useAsTitle: "title" },
  versions: { drafts: true, maxPerDoc: 10 },
};
