import { Code } from "bright";
import { Chunk } from "$types/payload-types";
import { CodeControls } from "./controls";

type PayloadCode = Chunk["content"][number] & { blockType: "code-snippet" };

export interface CodeSnippetProps {
  src: PayloadCode;
  theme: String;
}

export function CodeSnippet({ src, theme }: CodeSnippetProps) {
  return (
    <CodeControls>
      <Code
        lang={src.lang}
        lineNumbers={src.lineNumbers}
        title={src.filename}
        style={{ fontSize: "0.8rem", margin: "inherit" }}
        theme={theme}
      >
        {src.snippet}
      </Code>
    </CodeControls>
  );
}
