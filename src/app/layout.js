import "@radix-ui/themes/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";

import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tiny Url",
  description: "Simple tiny url generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen px-10 `}>
        <Theme accentColor="crimson">{children}</Theme>
      </body>
    </html>
  );
}
