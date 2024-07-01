import "@radix-ui/themes/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";

import { Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tiny Url",
  description: "Simple tiny url generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col items-center justify-center p-24`}
      >
        <Theme
          appearance="dark"
          accentColor="bronze"
          grayColor="olive"
          scaling="95%"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
