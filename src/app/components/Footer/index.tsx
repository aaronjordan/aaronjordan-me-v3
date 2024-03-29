import Image from "next/image";
import { ExternalLinkIcon, HeartIcon } from "@radix-ui/react-icons";

import { getPayloadClient } from "$app/payload.server";
import style from "./style.module.scss";

export async function Footer() {
  const payload = await getPayloadClient();
  const links = await payload.findGlobal({ slug: "footerLinks" });

  return (
    <footer className={style.foot}>
      <div className="container">
        <span>
          <ul>
            {links.items.map((e) => (
              // TODO: make open_in_new optional.
              <li key={e.id}>
                <a href={e.link} target="_blank" rel="noopener noreferer">
                  <span>{e.label}</span>
                  <ExternalLinkIcon className="baseline" />
                </a>
              </li>
            ))}
          </ul>
        </span>
        <span>
          <p style={{ marginBottom: "0.25rem" }}>
            Made with <HeartIcon className="baseline" /> and{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferer"
            >
              NextJS.
            </a>
          </p>
          <small>
            Check it out on{" "}
            <a
              href="https://github.com/aaronjordan/aaronjordan-me-v3"
              target="_blank"
              rel="noopener noreferer"
            >
              GitHub!
            </a>
          </small>
        </span>
        <span>
          <Image src="/aj.svg" alt="AJ initials" width={100} height={100} />
        </span>
      </div>
    </footer>
  );
}
