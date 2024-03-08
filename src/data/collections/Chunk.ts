import { lexicalHTML } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload/types";
import { Carousel } from "../blocks/Carousel";
import { CodeSnippet } from "../blocks/CodeSnippet";
import { Hero } from "../blocks/Hero";
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
          // TODO: use kebab-case
          // https://payloadcms.com/docs/rest-api/overview#collections
          slug: "richText",
        },
        Carousel,
        CodeSnippet,
        Hero,
      ],
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
