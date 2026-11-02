import type { ReactNode } from "react";
import Link from "next/link";
import { LEGAL_LINKS } from "@/data/legal";
import { InnerShell } from "@/components/home/InnerShell";
import s from "@/components/home/home.module.css";

// One shell for all three legal pages so /impressum, /datenschutz and /agb
// read as one document family: same measure, same rhythm, same cross-links
// at the top. It sits inside the site's shared frame (header, request form,
// footer) like every other inner page, and stays a server component, since
// these pages are static text and need no client JS.

interface LegalLayoutProps {
  title: string;
  intro?: string;
  /** Shown under the headline, e.g. "Stand: September 2026". */
  meta?: string;
  currentPath: string;
  children: ReactNode;
}

export function LegalLayout({ title, intro, meta, currentPath, children }: LegalLayoutProps) {
  return (
    <InnerShell lang="de">
      <nav aria-label="Rechtliches" className={`${s.crumbsBar} ${s.legalTabs}`}>
        {LEGAL_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={link.href === currentPath ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <section className={`${s.ipHero} ${s.ipHeroSolo}`}>
        <div className={s.ipHeroCopy}>
          <h1 className={s.ipH1}>{title}</h1>
          {intro && <p className={s.lead}>{intro}</p>}
          {meta && <p className={s.caseMeta}>{meta}</p>}
        </div>
      </section>

      <div className={s.legal}>
        <div className={s.legalBody}>{children}</div>
      </div>
    </InnerShell>
  );
}

/** A numbered or named top-level section of a legal document. */
export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function LegalHeading({ children }: { children: ReactNode }) {
  return <h3>{children}</h3>;
}

export function LegalText({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

/** Bulleted list — used for the enumerated clauses of the AGB. */
export function LegalList({ items, ordered = false }: { items: ReactNode[]; ordered?: boolean }) {
  const content = items.map((item, i) => <li key={i}>{item}</li>);
  return ordered ? <ol>{content}</ol> : <ul>{content}</ul>;
}

/** Address / contact block. */
export function LegalAddress({ lines }: { lines: ReactNode[] }) {
  return (
    <address>
      {lines.map((line, i) => (
        <span key={i}>{line}</span>
      ))}
    </address>
  );
}

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}
