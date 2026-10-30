import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/data/site";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  // Without metadataBase every canonical and OpenGraph URL below would be
  // emitted as a relative path, which crawlers and social previews ignore.
  metadataBase: new URL(SITE.url),
  title: {
    default: "VP agency — vom Chaos zum System",
    // Page titles set their own wording; the brand is appended here so no
    // page has to repeat it.
    template: "%s | VP agency",
  },
  description:
    "VP agency hilft Unternehmen zu verstehen, welche digitale Lösung sie wirklich brauchen, und baut ein System, das messbare Ergebnisse liefert.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE.url,
    title: "VP agency — vom Chaos zum System",
    description:
      "VP agency hilft Unternehmen zu verstehen, welche digitale Lösung sie wirklich brauchen, und baut ein System, das messbare Ergebnisse liefert.",
    images: [{ url: SITE.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VP agency — vom Chaos zum System",
    description:
      "VP agency hilft Unternehmen zu verstehen, welche digitale Lösung sie wirklich brauchen, und baut ein System, das messbare Ergebnisse liefert.",
    images: [SITE.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className="bg-bg text-ink font-sans antialiased">
        {children}
        {/* Site-wide identity, emitted once instead of on every page. */}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </body>
    </html>
  );
}
