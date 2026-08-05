import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VP Digital — от хаоса к понятной системе",
  description:
    "VP Digital помогает бизнесу разобраться, какое цифровое решение ему на самом деле нужно, и строит систему, которая работает на результат.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
        />
      </head>
      <body className="bg-bg text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
