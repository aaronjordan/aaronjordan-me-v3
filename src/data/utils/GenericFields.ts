import { SelectField } from "payload/types";

/**
 * A field configuration to pick a div variant.
 * @param name The name to create this field with.
 * @returns A field configuration for a select box that contains semantic div
 * types.
 */
export const semanticDivElement = (
  { name, label }: { name: string; label?: string },
): SelectField => ({
  name: name,
  label: label,
  type: "select",
  defaultValue: "section",
  options: [
    "article",
    "aside",
    "div",
    "footer",
    "header",
    "section",
    "summary",
  ],
  hasMany: false,
  required: true,
});
