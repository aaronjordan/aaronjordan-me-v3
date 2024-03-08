import { Block } from "payload/types";
import {
  BlockNode,
  HTMLConverter,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

export const Popover: Block = {
  slug: "popover",
  fields: [
    {
      name: "heading",
      type: "text",
    },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({}),
    },
  ],
};

export const PopoverConverter: HTMLConverter = {
  converter: async ({ parent, node, childIndex }) => {
    console.log(parent);
    console.log(node);
    console.log(childIndex);
    if (node.type !== "block") return;
    return `<template data-node-index="${childIndex}"></template>`;
  },
  nodeTypes: [BlockNode.getType()],
};
