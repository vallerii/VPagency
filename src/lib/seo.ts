import type { Metadata } from "next";
import { SITE, absoluteUrl } from "@/data/site";

interface PageMetaInput {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/leistungen/websites". */
  path: string;
  /** Set on pages that must not be indexed. */
  noIndex?: boolean;
}

/**
 * One place that builds title, description, canonical and OpenGraph for a
 * page. Every route uses it, so no page can silently inherit the site-wide
 * title again.
 */
export function pageMetadata({
  title,
  description,
  path,
  noIndex,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: SITE.locale,
      title,
      description,
      url,
      images: [{ url: SITE.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE.ogImage],
    },
  };
}

/** Trims a text to a length that survives the search-result snippet. */
export function clampDescription(text: string, max = 165) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).trimEnd()}…`;
}
