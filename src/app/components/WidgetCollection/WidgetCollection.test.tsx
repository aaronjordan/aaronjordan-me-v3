import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { WidgetCollection, WidgetCollectionProps } from ".";

afterEach(cleanup);

test("Renders rich text blocks with Payload HTML", () => {
  const props: WidgetCollectionProps = {
    src: [
      { container: "div", html: "<h1>Heading</h1>", blockType: "richText" },
      {
        container: "div",
        html: "<p>This is rich HTML content provided directly by PayloadCMS.</p>",
        blockType: "richText",
      },
    ],
  };

  render(<WidgetCollection src={props.src} />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Heading" })
  ).toBeDefined();
  expect(screen.getByText("PayloadCMS", { exact: false })).toBeDefined();
});

test("Container can be customized per entry", () => {
  const props = {
    src: [
      {
        container: "section",
        html: "<h1>Heading</h1><p>More text</p>",
        blockType: "richText",
      },
      {
        container: "aside",
        html: "<p>This is supplementary, inline content.</p>",
        blockType: "richText",
      },
    ],
  };

  render(<WidgetCollection src={props.src} />);

  const aside = screen.getByRole("complementary");
  expect(aside).toBeDefined();
  console.log(aside.textContent);
  expect(aside).toHaveTextContent("supplementary");
});
