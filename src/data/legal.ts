// Single source of truth for every legal page (/impressum, /datenschutz,
// /agb). All three render from these constants, so the company data only
// ever has to be corrected in one place.
//
// ⚠️ BEFORE LAUNCH — please have these verified:
//   • `name` / `register` / `vatId` / `managingDirector` must match the
//     legal entity that actually operates vpdigital.agency. They are the
//     entity behind the Sandstraße 31 address; if the site is operated by
//     a different company, every one of these fields has to change, not
//     just the brand name (§ 5 TMG / § 18 MStV).
//   • `hosting` must name the provider this site is really hosted with.
//   • The legal texts themselves are drafted from the standard German
//     boilerplate and adapted to what this site does — they are not a
//     substitute for a lawyer's review.

export const COMPANY = {
  /** The brand the website is published under. */
  brand: "VP Digital",
  /** The domain the legal texts refer to. */
  domain: "vpdigital.agency",
  /** The legal entity operating the website (§ 5 TMG). */
  name: "Poosch Consulting GmbH",
  street: "Sandstraße 31",
  zip: "57072",
  city: "Siegen",
  country: "Deutschland",
  phone: "+49 (0) 271 313 93 517",
  phoneHref: "+4927131393517",
  email: "hello@vpdigital.agency",
  register: {
    court: "Amtsgericht Siegen",
    number: "HRB 12741",
  },
  vatId: "DE344826498",
  managingDirector: "Phil Poosch",
  /** Responsible for editorial content under § 18 Abs. 2 MStV. */
  contentResponsible: "Phil Poosch",
} as const;

export const HOSTING = {
  name: "ALL-INKL.COM – Neue Medien Münnich, Inh. René Münnich",
  address: "Hauptstraße 68, 02742 Friedersdorf",
  privacyUrl: "https://all-inkl.com/datenschutzinformationen/",
} as const;

/** Last editorial revision of the AGB / Datenschutzerklärung. */
export const LEGAL_VERSION = "September 2026";

export const LEGAL_LINKS = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
] as const;

export const ADDRESS_LINES = [
  COMPANY.name,
  COMPANY.street,
  `${COMPANY.zip} ${COMPANY.city}`,
] as const;
