import { lexicalHTML } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload/types";

/**
 * Expressing a TextSnippet as a collection allows the `lexicalHTML` field
 * to be introduced when this is a relationship on a block.
 *
 * Blocks cannot use change hooks in the same way as collections, making this
 * distinction necessary. This might be changed in future versions of Payload.
 */
export const TextSnippet: CollectionConfig = {
  slug: "text-snippet",
  fields: [
    { type: "richText", name: "text" },
    lexicalHTML("text", { name: "html" }),
  ],
};
