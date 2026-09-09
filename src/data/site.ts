// Single source of truth for everything that depends on the public origin:
// metadataBase, canonical URLs, sitemap entries and JSON-LD. Change the
// domain here and every generated URL follows.

export const SITE = {
  url: "https://vpagency.de",
  name: "VP Digital",
  locale: "de_DE",
  /** Used as the default OpenGraph/Twitter image. */
  ogImage: "/logo.png",
} as const;

/** Absolute URL for a site-relative path ("/leistungen" -> "https://…/leistungen"). */
export function absoluteUrl(path: string) {
  return new URL(path, SITE.url).toString();
}

// --- Route builders -------------------------------------------------------
// Every internal link goes through these, so a future URL change is a
// one-line edit instead of a search across the codebase.

export const routes = {
  home: "/",
  leistungen: "/leistungen",
  leistung: (slug: string) => `/leistungen/${slug}`,
  projekte: "/projekte",
  projekt: (slug: string) => `/projekte/${slug}`,
  glossar: "/glossar",
  glossarTerm: (slug: string) => `/glossar/${slug}`,
  /** In-page anchor: every page with the shared Header renders a #contact section. */
  kontakt: "#contact",
  /** Absolute variant, for links from a page that has no contact section. */
  kontaktHome: "/#contact",
} as const;
