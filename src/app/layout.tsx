import type { Metadata } from "next";
import { Figtree, Vollkorn } from "next/font/google";
import { cookies } from "next/headers";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { THEME_COOKIE_NAME } from "./utils/constants";
import "./globals.scss";
import "./sr-only.css";

const fig = Figtree({ subsets: ["latin"], variable: "--body-font-family" });
const vol = Vollkorn({ subsets: ["latin"], variable: "--heading-font-family" });
const vars = `${fig.variable} ${vol.variable}`;

export const metadata: Metadata = {
  title: "Aaron Jordan",
  description:
    "Hey there! I'm Aaron Jordan. I make software that users " +
    "and developers love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jar = cookies();
  const themeOrNull = jar.get(THEME_COOKIE_NAME) ?? null;

  return (
    <html className={vars} data-theme={themeOrNull?.value ?? "light"} lang="en">
      <body>
        <Header />
        <div className="canvas">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
