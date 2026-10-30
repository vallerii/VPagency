// Structured data (schema.org / JSON-LD).
//
// Only types that describe something actually on the page are emitted:
// Organization for the company, Service for a service page, FAQPage where a
// FAQ block is rendered, BreadcrumbList where breadcrumbs are shown, and
// ItemList for the hub pages. No claims, ratings or review markup — there
// is no verified data behind those (SEO_CONTENT_SYSTEM.md §12).

import { SITE, absoluteUrl, routes } from "@/data/site";
import { COMPANY } from "@/data/legal";
import type { FaqItem } from "@/components/FAQ";

export interface Crumb {
  name: string;
  /** Site-relative path. The last crumb may omit it (current page). */
  href?: string;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: COMPANY.name,
    url: SITE.url,
    logo: absoluteUrl("/logo.png"),
    email: COMPANY.email,
    telephone: COMPANY.phone,
    vatID: COMPANY.vatId,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.street,
      postalCode: COMPANY.zip,
      addressLocality: COMPANY.city,
      addressCountry: "DE",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "de-DE",
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: absoluteUrl(c.href) } : {}),
    })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: { "@type": "Country", name: "Deutschland" },
  };
}

export function itemListSchema(
  items: { name: string; path: string }[],
  listName: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function definedTermSchema(input: {
  term: string;
  definition: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: input.term,
    description: input.definition,
    url: absoluteUrl(input.path),
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "VP agency Glossar",
      url: absoluteUrl(routes.glossar),
    },
  };
}
