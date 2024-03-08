import { getPayloadClient } from "$app/payload.server";
import { HeaderControls } from "../HeaderControls";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";

export async function Header() {
  const payload = await getPayloadClient();
  const links = await payload.findGlobal({ slug: "navigation" });

  return (
    <header className={styles.head}>
      <nav className="container">
        <ul>
          <li>
            <a className={styles.logo} href="/">
              <span className={styles.first}>aaron</span>
              <span className={styles.last}>jordan</span>
              <span className={styles.tld}>.me</span>
            </a>
          </li>
        </ul>
        <ul className={styles.controls}>
          {links.items.map((link) => (
            <li key={link.id}>
              <a
                href={link.route}
                // TODO: Is it worth adding this? Need to resolve path somehow.
                // aria-current={path.startsWith(link.route) ? "page" : null}
              >
                {link.title}
              </a>
            </li>
          ))}
          <li className={styles.separator} />
          <HeaderControls />
        </ul>
      </nav>
    </header>
  );
}
