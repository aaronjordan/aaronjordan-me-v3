import Image from "next/image";
import { Chunk, Image as I, TextSnippet } from "$types/payload-types";
import style from "./style.module.scss";

type PayloadCard = Chunk["content"][number] & { blockType: "card" };

export function Card({ src }: { src: PayloadCard }) {
  const Container = src.container;

  return (
    <Container className={style.card}>
      <header className={style.header}>
        {src.icon && (
          <div className={style.image}>
            <Image
              alt={(src.icon as I).alt}
              src={(src.icon as I).url}
              width={200}
              height={200}
            />
          </div>
        )}
        <div className={style.text}>
          <h1>
            <span>{src.title}</span>
            <span>{src.subtitle}</span>
          </h1>
          {src.extras.map((e, i) => (
            <p key={e.id ?? i}>{e.content}</p>
          ))}
        </div>
      </header>
      <section
        dangerouslySetInnerHTML={{ __html: (src.body as TextSnippet).html }}
      />
    </Container>
  );
}
