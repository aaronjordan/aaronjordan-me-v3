"use client";

import { useState } from "react";
import { IconButton } from "../IconButton";
import { SunIcon } from "@radix-ui/react-icons";
import { MoonIcon } from "$app/utils/MoonIcon";
import { setThemePreference } from "$app/utils/siteTheme";

export function HeaderControls(props) {
  // TODO: read the init state from da cookie
  const [isLightMode, setLightMode] = useState(true);

  const toggleSiteTheme = () => {
    const next = updateSiteTheme();
    setLightMode(next);
  };

  return (
    <>
      <li style={{ display: "flex" }}>
        <IconButton
          ariaLabel="Toggle theme"
          icon={isLightMode ? <MoonIcon /> : <SunIcon />}
          onClick={toggleSiteTheme}
        />
      </li>
    </>
  );
}

/**
 * Queries the document to flip the site theme between light and dark.
 * With the theme managed by PicoCSS, React doesn't really need to know much
 * about the active theme.
 *
 * @returns {boolean} true if the site has switched into light mode.
 */
function updateSiteTheme(): boolean {
  const html = document.querySelector("html");
  const current = html.getAttribute("data-theme");
  const isLight = current == "light";
  html.setAttribute("data-theme", isLight ? "dark" : "light");
  setThemePreference(!isLight);
  return !isLight;
}
