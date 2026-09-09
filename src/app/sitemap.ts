import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { CASES } from "@/data/cases";
import { GLOSSAR } from "@/data/glossar";
import { LEGAL_LINKS } from "@/data/legal";
import { absoluteUrl, routes } from "@/data/site";

// Built from the same data the pages render from, so a new service, project
// or glossary term appears in the sitemap automatically — nothing to keep
// in sync by hand.
//
// Priorities follow the hierarchy of SEO_CONTENT_SYSTEM.md §3-§4: the
// commercial pages first, then the hubs, then the informational pages, then
// the legal pages that exist for compliance rather than for search.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl(routes.home),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl(routes.leistungen),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...SERVICES.map((service) => ({
      url: absoluteUrl(routes.leistung(service.slug)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: absoluteUrl(routes.projekte),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...CASES.map((item) => ({
      url: absoluteUrl(routes.projekt(item.slug)),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    {
      url: absoluteUrl(routes.glossar),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...GLOSSAR.map((term) => ({
      url: absoluteUrl(routes.glossarTerm(term.slug)),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...LEGAL_LINKS.map((link) => ({
      url: absoluteUrl(link.href),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];

  return entries;
}
