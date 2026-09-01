import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LEGAL_LINKS } from "@/data/legal";

// One shell for all three legal pages so /impressum, /datenschutz and
// /agb read as one document family: same measure, same rhythm, same
// cross-links at the top. Kept as a server component — these pages are
// static text and need no client JS.

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
    <>
      <Header />
      <main className="px-6 pt-36 pb-24 sm:px-10 sm:pt-44 lg:px-16">
        <div className="mx-auto w-full max-w-[820px]">
          <nav aria-label="Rechtliches" className="mb-10 flex flex-wrap gap-2">
            {LEGAL_LINKS.map((link) => {
              const isActive = link.href === currentPath;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "rounded-full border border-accent-line bg-accent-tint px-4 py-1.5 text-[14px] font-medium text-ink"
                      : "rounded-full border border-border px-4 py-1.5 text-[14px] font-medium text-ink-soft transition-colors hover:border-accent-line hover:text-ink"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <h1 className="text-balance font-heading text-[9vw] font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[5vw] lg:text-[3.2vw] xl:text-[58px]">
            {title}
          </h1>

          {intro && (
            <p className="mt-6 max-w-[65ch] text-[16px] leading-[1.6] text-ink-soft sm:text-[18px]">
              {intro}
            </p>
          )}

          {meta && <p className="mt-4 text-[14px] text-ink-faint">{meta}</p>}

          <div className="mt-14 flex flex-col gap-10">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/** A numbered or named top-level section of a legal document. */
export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4 border-t border-border pt-8 first:border-none first:pt-0">
      <h2 className="font-heading text-[22px] font-semibold leading-[1.25] text-ink sm:text-[26px]">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function LegalHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-4 text-[17px] font-semibold leading-[1.35] text-ink sm:text-[18px]">
      {children}
    </h3>
  );
}

export function LegalText({ children }: { children: ReactNode }) {
  return (
    <p className="text-[15px] leading-[1.7] text-ink-soft sm:text-[16px]">{children}</p>
  );
}

/** Bulleted list — used for the enumerated clauses of the AGB. */
export function LegalList({ items, ordered = false }: { items: ReactNode[]; ordered?: boolean }) {
  const className =
    "flex list-outside flex-col gap-2.5 pl-5 text-[15px] leading-[1.7] text-ink-soft marker:text-ink-faint sm:text-[16px]";
  return ordered ? (
    <ol className={`${className} list-decimal`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  ) : (
    <ul className={`${className} list-disc`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

/** Address / contact block — monospace-free, just tighter line height. */
export function LegalAddress({ lines }: { lines: ReactNode[] }) {
  return (
    <address className="not-italic text-[15px] leading-[1.7] text-ink-soft sm:text-[16px]">
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </address>
  );
}

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  return (
    <a
      href={href}
      {...(external && href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="text-accent-deep underline decoration-accent-deep/40 underline-offset-4 transition-colors hover:decoration-accent-deep"
    >
      {children}
    </a>
  );
}
