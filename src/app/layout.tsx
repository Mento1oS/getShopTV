import type { Metadata } from "next";
import "./globals.scss";
import {Onest} from 'next/font/google';

const onest_init = Onest({
    subsets: ['cyrillic-ext', 'latin-ext'],
    variable: '--font-onest'
})

export const metadata: Metadata = {
  title: "GetshopTV",
  description: "GetshopTV test task by Pityov Artyom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest_init.variable}`}>
        {children}
      </body>
    </html>
  );
}
