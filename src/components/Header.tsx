"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { HoverLink } from "./ui/hover-button";
import { Logo } from "./ui/Logo";
import { SERVICES } from "@/data/services";
import { routes } from "@/data/site";
import { LEGAL_LINKS } from "@/data/legal";

// Every entry carries its own href instead of being derived from a slug:
// the five service pages now live under /leistungen/, while Projekte and
// Glossar are top-level sections. Deriving `/${slug}` silently kept the old
// root URLs alive here after the pages had already moved.
const NAV_ITEMS: { href: string; label: string }[] = [
  ...SERVICES.map((s) => ({ href: routes.leistung(s.slug), label: s.label })),
  { href: routes.projekte, label: "Projekte" },
  { href: routes.glossar, label: "Glossar" },
];

// Below lg the pill nav and the header CTA are hidden — everything the
// desktop header offers lives in a full-screen panel that slides in from
// the right: the five service pages, Projekte, and the "Projekt
// besprechen" button pinned to the bottom of the panel.
export function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // The legal pages are the only ones that render no #contact section, so
  // there the CTA has to carry the visitor home to the form instead of
  // pointing at an anchor that does not exist on the page.
  const hasContactSection = !LEGAL_LINKS.some((l) => l.href === pathname);
  const contactHref = hasContactSection ? routes.kontakt : routes.kontaktHome;

  // Route changes close the panel — Next keeps the Header mounted across
  // navigations, so without this the menu would stay open on the new page.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // While the panel covers the screen the page behind it must not scroll,
  // and Escape has to close it like any other dialog.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 sm:px-10"
      >
        <Link
          href="/"
          aria-label="VP Digital — Startseite"
          className="inline-flex h-[54px] items-center transition-opacity hover:opacity-80"
        >
          <Logo size={26} />
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <nav
            onMouseLeave={() => setHovered(null)}
            className="hidden items-center gap-1 rounded-full border border-border bg-card/80 p-1.5 backdrop-blur-sm lg:flex"
          >
            {NAV_ITEMS.map((s) => {
              const isActive = pathname === s.href;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  onMouseEnter={() => setHovered(s.href)}
                  className={`relative isolate rounded-full px-4 py-2 text-[16px] font-medium transition-colors ${
                    isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-full bg-[rgba(143,175,212,0.32)]"
                    />
                  ) : (
                    hovered === s.href && (
                      <motion.span
                        layoutId="header-nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-accent-tint"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )
                  )}
                  {s.label}
                </Link>
              );
            })}
          </nav>

          <HoverLink
            href={contactHref}
            variant="secondary"
            className=" px-5 py-2.5 h-[54px] text-sm !hidden lg:!inline-flex"
          >
            Projekt besprechen
          </HoverLink>

          {/* Burger — replaces the pill nav below lg */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-border bg-card/80 text-ink backdrop-blur-sm transition-colors hover:border-accent-line lg:hidden"
          >
            <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
              <span className="h-[2px] w-full rounded-full bg-current" />
              <span className="h-[2px] w-full rounded-full bg-current" />
              <span className="h-[2px] w-3.5 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Hauptmenü"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] flex h-dvh w-full flex-col overflow-y-auto bg-bg px-6 pb-10 pt-6 sm:px-10 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                aria-label="VP Digital — Startseite"
                className="inline-flex h-[54px] items-center"
              >
                <Logo size={26} />
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Menü schließen"
                className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-border bg-card text-ink transition-colors hover:border-accent-line"
              >
                <span className="relative block h-5 w-5" aria-hidden="true">
                  <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rotate-45 rounded-full bg-current" />
                  <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 -rotate-45 rounded-full bg-current" />
                </span>
              </button>
            </div>

            <nav aria-label="Hauptnavigation" className="mt-12 flex flex-col">
              {NAV_ITEMS.map((s, i) => {
                const isActive = pathname === s.href;
                return (
                  <motion.div
                    key={s.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.12 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={s.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between border-b border-border py-5 font-heading text-[28px] font-semibold leading-[1.15] tracking-tight transition-colors xs:text-[32px] ${
                        isActive ? "text-accent-deep" : "text-ink hover:text-accent-deep"
                      }`}
                    >
                      {s.label}
                      <span aria-hidden="true" className="text-[20px] text-ink-faint">
                        ↗
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 + NAV_ITEMS.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-auto flex flex-col gap-6 pt-12"
            >
              <HoverLink
                href={contactHref}
                onClick={() => setMenuOpen(false)}
                variant="outline"
                className="w-full px-6 py-4 text-[15px]"
              >
                Projekt besprechen
              </HoverLink>

              <nav aria-label="Rechtliches" className="flex flex-wrap gap-x-5 gap-y-2">
                {LEGAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[14px] text-ink-faint transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
