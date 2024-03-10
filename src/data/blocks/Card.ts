import { Block } from "payload/types";

export const Card: Block = {
  slug: "card",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "subtitle",
      type: "text",
    },
    {
      name: "extras",
      type: "array",
      fields: [{
        name: "content",
        type: "text",
      }],
    },
    {
      name: "icon",
      type: "relationship",
      relationTo: "image",
    },
    {
      name: "body",
      type: "relationship",
      relationTo: "text-snippet",
    },
    {
      name: "container",
      type: "select",
      defaultValue: "section",
      options: [
        "article",
        "section",
      ],
      hasMany: false,
      required: true,
    },
  ],
};
