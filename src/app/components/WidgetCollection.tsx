import React from "react";

import { Chunk } from "$types/payload-types";

type ContentBlock = Chunk["content"][number];

export interface WidgetCollectionProps {
  as: React.ElementType;
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
      return <Container dangerouslySetInnerHTML={{ __html: src.html }} />;
    case "carousel":
      break;
  }

  return (
    <p>
      <strong>{src.blockType}</strong>: {JSON.stringify(src)}
    </p>
  );
}
