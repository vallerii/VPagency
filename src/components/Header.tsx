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

// The nav points at the hubs, not at every single page: listing all
// five services here made the visitor choose a service before the site had
// explained anything, and a visitor who does not yet know which digital
// solution he needs cannot make that choice. /leistungen does that work —
// it sorts the services by the business problem they solve. The five
// detail pages stay reachable from there and from the footer.
const NAV_ITEMS: { href: string; label: string }[] = [
  { href: routes.leistungen, label: "Leistungen" },
  { href: routes.projekte, label: "Projekte" },
  // Glossar is deliberately not here: it is a reference for search
  // visitors and is linked from the service pages and the footer. In the
  // header it competed with the two sections a business owner actually
  // came for.
];

// A service detail page (/leistungen/websites) has to keep "Leistungen"
// marked as current — matching on equality alone would leave the whole nav
// unhighlighted on five of the site's pages.
function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

// Below lg the pill nav and the header CTA are hidden — everything the
// desktop header offers lives in a full-screen panel that slides in from
// the right: the five service pages, Projekte, and the "Projekt
// besprechen" button pinned to the bottom of the panel.
export function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // The header floats transparently over the hero, but further down the
  // page it passes over light sections, where the cream logo would vanish.
  // Once the page is scrolled the bar gets its own graphite, blurred
  // backdrop, so it reads the same over dark and light blocks.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    // A reload can restore the page mid-scroll, so check once on mount too —
    // in a frame, not synchronously inside the effect.
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // The legal pages are the only ones that render no #contact section, so
  // there the CTA has to carry the visitor home to the form instead of
  // pointing at an anchor that does not exist on the page.
  const hasContactSection = !LEGAL_LINKS.some((l) => l.href === pathname);
  const contactHref = hasContactSection ? routes.kontakt : routes.kontaktHome;

  // Route changes close both menus — Next keeps the Header mounted across
  // navigations, so without this they would stay open on the new page. The
  // dropdown matters most here: clicking one of its services navigates
  // without the pointer ever leaving it, so nothing else would close it.
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Escape closes the dropdown, the same way it closes the mobile panel.
  useEffect(() => {
    if (!servicesOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [servicesOpen]);

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
        // Three columns, not justify-between: with space-between the nav only
        // lands in the middle if the logo and the CTA happen to be the same
        // width, which they are not — it drifted left. The 1fr side columns
        // absorb that difference, so the nav sits on the page's centre line
        // whatever the logo or the button do.
        className={`fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center px-6 transition-[background-color,padding,box-shadow] duration-300 ease-out sm:px-10 ${
          scrolled
            ? "bg-bg/90 py-3 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
            : "py-6"
        }`}
      >
        <Link
          href="/"
          aria-label="VP Digital — Startseite"
          className="inline-flex h-[54px] items-center justify-self-start transition-opacity hover:opacity-80"
        >
          <Logo size={28} />
        </Link>
        <nav
          onMouseLeave={() => {
            setHovered(null);
            setServicesOpen(false);
          }}
          className="hidden items-center gap-2 rounded-full border border-border bg-card/80 p-2 backdrop-blur-sm lg:flex"
        >
          {NAV_ITEMS.map((s) => {
            const isActive = isCurrent(pathname, s.href);
            // Only Leistungen carries a submenu — Projekte is a single page.
            const hasMenu = s.href === routes.leistungen;

            return (
              <div
                key={s.href}
                className="relative"
                onMouseEnter={() => {
                  setHovered(s.href);
                  setServicesOpen(hasMenu);
                }}
                // A keyboard never fires mouseenter, so focus has to open the
                // dropdown as well — otherwise the five service pages are
                // unreachable from the header without a mouse.
                onFocus={() => setServicesOpen(hasMenu)}
                onBlur={(e) => {
                  if (
                    hasMenu &&
                    !e.currentTarget.contains(e.relatedTarget as Node | null)
                  ) {
                    setServicesOpen(false);
                  }
                }}
              >
                <Link
                  href={s.href}
                  aria-current={isActive ? "page" : undefined}
                  aria-haspopup={hasMenu ? "true" : undefined}
                  aria-expanded={hasMenu ? servicesOpen : undefined}
                  className={`relative isolate flex items-center gap-2 rounded-full px-6 py-2.5 text-[15px] font-medium uppercase tracking-[0.06em] transition-colors ${
                    // Dark text on the solid accent pill: cream on #8FAFD4
                    // would be ~1.9:1, graphite is ~8:1.
                    isActive || hovered === s.href ? "text-bg" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-full bg-[#f4f4f0]"
                    />
                  ) : (
                    hovered === s.href && (
                      <motion.span
                        layoutId="header-nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-[#f4f4f0]/60"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )
                  )}
                  {s.label}
                  {hasMenu && (
                    <motion.svg
                      viewBox="0 0 10 6"
                      aria-hidden="true"
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="h-[6px] w-[10px] shrink-0"
                    >
                      <path
                        d="M1 1 L5 5 L9 1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  )}
                </Link>

                {hasMenu && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        // pt-3 is the bridge: the visible gap between the pill
                        // and the panel is padding *inside* the hover target,
                        // so the pointer never crosses dead space on its way
                        // down and the menu does not flicker shut.
                        className="absolute left-1/2 top-full w-[380px] -translate-x-1/2 pt-3"
                      >
                        <div className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-black/50">
                          {SERVICES.map((service) => (
                            <Link
                              key={service.slug}
                              href={routes.leistung(service.slug)}
                              aria-current={
                                pathname === routes.leistung(service.slug)
                                  ? "page"
                                  : undefined
                              }
                              // Same solid accent as the nav pill, for hover and for the
                              // page the visitor is on; the text flips to graphite.
                              className="group flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors hover:bg-[#f4f4f0]/60 aria-[current=page]:bg-[#f4f4f0]"
                            >
                              <span className="text-[15px] font-medium text-ink transition-colors group-hover:text-bg group-aria-[current=page]:text-bg">
                                {service.label}
                              </span>
                              {/* The hint, not the label, is what a visitor who
                              does not yet know which solution he needs can
                              actually choose from. */}
                              <span className="text-[13px] leading-snug text-ink-faint transition-colors group-hover:text-bg/80 group-aria-[current=page]:text-bg/80">
                                {service.navHint}
                              </span>
                            </Link>
                          ))}

                          <Link
                            href={routes.leistungen}
                            className="mt-2 flex items-center justify-between gap-4 border-t border-border px-4 pb-1 pt-3 text-[14px] text-ink-soft transition-colors hover:text-ink"
                          >
                            Alle Leistungen im Überblick
                            <span aria-hidden="true">↗</span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>
        {/* col-start-3: below lg the nav is display:none and drops out of the
        grid, which used to pull this block into the middle column — the
        burger sat in the centre of the bar instead of on the right. */}
        <div className="col-start-3 flex items-center justify-self-end gap-3 sm:gap-6">

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
                <Logo size={28} />
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
                const isActive = isCurrent(pathname, s.href);
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

                    {/* Touch devices have no hover, so the dropdown the desktop
                    header shows has to be spelled out here — otherwise the
                    service pages would sit one tap deeper on the very devices
                    where extra taps cost the most. */}
                    {s.href === routes.leistungen && (
                      <ul className="flex flex-col border-b border-border py-2">
                        {SERVICES.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={routes.leistung(service.slug)}
                              onClick={() => setMenuOpen(false)}
                              aria-current={
                                pathname === routes.leistung(service.slug)
                                  ? "page"
                                  : undefined
                              }
                              className="block py-2.5 text-[17px] text-ink-soft transition-colors hover:text-ink"
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
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
