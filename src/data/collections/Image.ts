import { CollectionConfig } from "payload/types";

export const Image: CollectionConfig = {
  slug: "image",
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "caption",
      type: "text",
    },
  ],
  upload: {
    mimeTypes: ["image/*"],
  },
  admin: { useAsTitle: "name" },
  access: {
    read: () => true,
  },
};
