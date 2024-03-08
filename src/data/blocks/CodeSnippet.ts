import { Block } from "payload/types";

export const CodeSnippet: Block = {
  slug: "code-snippet",
  fields: [
    {
      name: "filename",
      type: "text",
    },
    {
      name: "lang",
      type: "text",
      required: true,
    },
    {
      name: "lineNumbers",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "snippet",
      type: "code",
    },
  ],
};
