"use server";

import { cookies } from "next/headers";
import { THEME_COOKIE_NAME } from "./constants";

export type SiteThemeKeyword = "light" | "dark";

export async function setThemePreference(themeKeyword: SiteThemeKeyword) {
  cookies().set(THEME_COOKIE_NAME, themeKeyword);
}
