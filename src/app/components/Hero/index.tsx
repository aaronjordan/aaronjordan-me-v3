import Image from "next/image";
import styles from "./style.module.scss";
import { Image as PayloadImage } from "$types/payload-types";

interface HeroProps {
  heading: { content: string; id?: string }[];
  subhead: { content: string; id?: string }[];
  image: PayloadImage;
}

export async function Hero(props: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.card}>
        <h1>
          {props.heading.map((e) => (
            <span key={e.id}>{e.content} </span>
          ))}
        </h1>
        <p>
          {props.subhead.map((e) => (
            <span key={e.id}>{e.content}</span>
          ))}
        </p>
      </div>
      <div className={styles.background}>
        <Image
          src={props.image.url}
          alt={props.image.alt}
          width={1920}
          height={1080}
          priority
        />
      </div>
    </section>
  );
}
