"use server";

import { cookies } from "next/headers";
import { THEME_COOKIE_NAME } from "./constants";

export async function setThemePreference(isLightMode: boolean) {
  cookies().set(THEME_COOKIE_NAME, isLightMode ? "light" : "dark");
}
