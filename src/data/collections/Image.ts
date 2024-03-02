import { CollectionConfig } from "payload/types";
// import { renameUpload } from "../../utils/RenameUpload";
// import convertToWebp from "../../utils/ConvertToWebp";

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
};
