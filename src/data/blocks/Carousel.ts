import { Block } from "payload/types";

export const Carousel: Block = {
  slug: "carousel",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "relationship",
          relationTo: "image",
          required: true,
        },
        {
          name: "caption",
          type: "text",
        },
        {
          name: "initial",
          type: "checkbox",
          label: "Show this image first",
        },
      ],
    },
  ],
};
