import React from "react";

import { cookies } from "next/headers";
import { Chunk, Image } from "$types/payload-types";
import { THEME_COOKIE_NAME } from "$app/utils/constants";
import { Card } from "../Card";
import { Carousel } from "../Carousel";
import { CodeSnippet } from "../CodeSnippet";
import { Hero } from "../Hero";
import { PortalRuntime } from "../PortalRuntime";

type ContentBlock = Chunk["content"][number];

export interface WidgetCollectionProps {
  as?: React.ElementType;
  src: ContentBlock[];
}

export function WidgetCollection(props) {
  const Container = props.as ?? React.Fragment;
  const widgets = props.src ?? [];
  if (!Array.isArray(widgets)) throw Error("Widget src must be array");

  return (
    <Container>
      {widgets.map((block) => (
        <Widget key={block.id} src={block} />
      ))}
    </Container>
  );
}

function Widget({ src }: { src: ContentBlock }) {
  const type = src.blockType;
  switch (type) {
    case "richText":
      const Container = src.container;
      return (
        <>
          <Container
            data-link-id={src.id}
            dangerouslySetInnerHTML={{ __html: src.html }}
          />
          {/* <PortalRuntime target={src.id} /> */}
        </>
      );
    case "hero":
      return (
        <Hero
          heading={src.heading}
          subhead={src.subheading}
          image={src.image as Image}
        />
      );
    case "carousel":
      return <Carousel src={src} />;
    case "code-snippet":
      const keyword = cookies().get(THEME_COOKIE_NAME)?.value;
      const theme = keyword === "light" ? "github-light" : "github-dark-dimmed";
      return <CodeSnippet src={src} theme={theme} />;
    case "card":
      return <Card src={src} />;
  }
}
