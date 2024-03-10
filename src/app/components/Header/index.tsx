import { cookies } from "next/headers";
import { getPayloadClient } from "$app/payload.server";
import { THEME_COOKIE_NAME } from "$app/utils/constants";
import { Navigation } from "../Navigation";
import styles from "./style.module.scss";

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
        <Navigation links={links.items} theme={initialSiteTheme()} />
      </nav>
    </header>
  );
}

/**
 * Reads the current theme applied to the document, returning the default theme
 * if the user tampered with the page.
 *
 * Uses different stategies for SSR and CSR.
 *
 * @returns {SiteThemeKeyword} the current theme
 */
function initialSiteTheme() {
  const current = cookies().get(THEME_COOKIE_NAME)?.value;
  return current === "dark" ? "dark" : "light";
}
