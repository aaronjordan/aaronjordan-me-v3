import { Block } from "payload/types";

export const Hero: Block = {
  slug: "hero",
  fields: [
    {
      name: "heading",
      type: "array",
      fields: [
        {
          name: "content",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "subheading",
      type: "array",
      fields: [
        {
          name: "content",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "image",
      type: "relationship",
      relationTo: "image",
      required: true,
    },
  ],
};
