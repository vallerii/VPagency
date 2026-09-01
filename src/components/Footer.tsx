import Link from "next/link";
import type React from "react";
import { SERVICES } from "@/data/services";
import { LEGAL_LINKS } from "@/data/legal";

// TODO: swap these for VP Digital's real contact details before launch —
// placeholders only so the footer UI can be reviewed end to end.
const EMAIL = "hello@vpdigital.agency";
const PHONE = "+49 (0) 271 313 93 517";
const PHONE_HREF = "+493012345670";

const SOCIAL_LINKS: { name: string; href: string; Icon: (props: { className?: string }) => React.JSX.Element }[] = [
  { name: "Instagram", href: "https://instagram.com/vpdigital", Icon: InstagramIcon },
  { name: "LinkedIn", href: "https://linkedin.com/company/vpdigital", Icon: LinkedinIcon },
  { name: "WhatsApp", href: "https://wa.me/493012345670", Icon: WhatsappIcon },
];

// lucide-react ships no brand/social marks (dropped years ago), so these
// three are small hand-drawn outlines kept in the same stroke-based style
// as the rest of the site's iconography (see e.g. WhatWeBuild's lucide
// icons: strokeWidth ~1.6-1.8, rounded caps/joins).
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <line x1="7.6" y1="10.2" x2="7.6" y2="16.4" />
      <circle cx="7.6" cy="7.2" r="0.6" fill="currentColor" stroke="none" />
      <line x1="11.6" y1="10.2" x2="11.6" y2="16.4" />
      <path d="M11.6 13c0-1.7 1.1-2.8 2.5-2.8s2.3 1 2.3 2.8v3.4" />
    </svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.2A8.5 8.5 0 1 0 12 3.5Z" />
      <path
        d="M8.7 8.9c.2-.4.4-.4.6-.4h.4c.2 0 .3 0 .5.4.2.4.6 1.4.6 1.5.1.1.1.3 0 .4-.1.2-.2.3-.3.4-.2.2-.3.3-.1.6.2.3.8 1.2 1.7 1.8.6.4.9.3 1.1.1.2-.2.6-.7.7-.9.2-.2.3-.1.5-.1.3.1 1.5.7 1.7.8.3.1.4.2.5.3.1.2.1.7-.1 1.1-.3.5-1.2.9-1.7.9-.5 0-1.1-.1-3-1-2.3-1.1-3.7-3.4-3.8-3.6-.1-.2-.7-1.1-.7-2.1s.5-1.5.7-1.7Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 sm:flex-row sm:justify-between">
        <div>
          <img src="/logo-mini.png" alt="VP Digital" className="h-auto w-[340px]" />
          <p className="mt-2 max-w-[340px] text-sm text-ink-faint">
            Wir verstehen Ihr Geschäftsproblem und entwickeln eine Lösung,
            die wirklich funktioniert
          </p>
        </div>

        <nav aria-label="Leistungen" className="flex flex-col gap-2.5">
          <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
            Leistungen
          </span>
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {s.label}
            </Link>
          ))}
          <Link
            href="/produkte"
            className="text-sm text-ink-soft transition-colors hover:text-ink"
          >
            Projekte
          </Link>
        </nav>

        <div className="flex flex-col gap-2.5">
          <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
            Kontakt
          </span>
          <a href={`mailto:${EMAIL}`} className="text-sm text-ink-soft transition-colors hover:text-ink">
            {EMAIL}
          </a>
          <a href={`tel:${PHONE_HREF}`} className="text-sm text-ink-soft transition-colors hover:text-ink">
            {PHONE}
          </a>

          <div className="mt-1 flex items-center gap-2.5">
            {SOCIAL_LINKS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-accent-line hover:text-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-ink-faint sm:flex-row">
        <span>© {new Date().getFullYear()} VP Digital. Alle Rechte vorbehalten.</span>

        <nav aria-label="Rechtliches" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
