"use client";

import { useState } from "react";
import { IconButton } from "../IconButton";
import { SunIcon } from "@radix-ui/react-icons";
import { MoonIcon } from "$app/utils/MoonIcon";
import { SiteThemeKeyword, setThemePreference } from "$app/utils/siteTheme";

interface HeaderControlProps {
  filledButtons?: boolean;
  initialTheme: SiteThemeKeyword;
}

export function HeaderControls(props: HeaderControlProps) {
  const [theme, setTheme] = useState(props.initialTheme);

  const toggle = () => {
    const next = toggleSiteTheme();
    setTheme(next);
  };

  return (
    <>
      <li className="button" style={{ display: "flex" }}>
        <IconButton
          ariaLabel="Toggle theme"
          filled={props.filledButtons ?? false}
          icon={theme === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggle}
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
 * @returns the new theme keyword.
 */
function toggleSiteTheme(): SiteThemeKeyword {
  const html = document.querySelector("html");
  const current = html.getAttribute("data-theme");
  const isLight = current === "light";
  const newKeyword = isLight ? "dark" : "light";
  html.setAttribute("data-theme", newKeyword);
  setThemePreference(newKeyword);
  return newKeyword;
}
