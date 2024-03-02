import { GlobalConfig } from "payload/types";

export const Navigation: GlobalConfig = {
  slug: "navigation",
  fields: [
    {
      name: "items",
      type: "array",
      required: true,
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
        },
        {
          name: "icon",
          type: "text",
        },
        {
          name: "hidden",
          type: "checkbox",
        },
      ],
    },
  ],
  versions: { drafts: true, max: 10 },
};
