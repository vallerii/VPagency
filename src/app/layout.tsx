import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VP Digital — vom Chaos zum System",
  description:
    "VP Digital hilft Unternehmen zu verstehen, welche digitale Lösung sie wirklich brauchen, und baut ein System, das messbare Ergebnisse liefert.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
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
