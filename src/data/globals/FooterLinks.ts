import { GlobalConfig } from "payload/types";

export const FooterLinks: GlobalConfig = {
  slug: "footerLinks",
  fields: [
    {
      name: "items",
      type: "array",
      required: true,
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "link",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
