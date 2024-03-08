import Image from "next/image";
import styles from "./style.module.scss";

interface HeroProps {
  heading: { content: string; id?: string }[];
  subhead: { content: string; id?: string }[];
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
          src="http://localhost:3000/image/yosemite-15-high.jpg"
          alt="TODO"
          width={1920}
          height={1080}
          priority
        />
      </div>
    </section>
  );
}
