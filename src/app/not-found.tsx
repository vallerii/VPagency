import type { Metadata } from "next";
import Link from "next/link";
import { InnerShell } from "@/components/home/InnerShell";
import { services, techs, href, t } from "@/content/catalog";
import s from "@/components/home/home.module.css";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

// 404 in the site's own language: no dead end, but the three or four
// places a visitor who mistyped an address actually wanted to reach.
const copy = {
  code: "404",
  title: "Diese Seite gibt es nicht",
  lead: "Vielleicht hat sich die Adresse geändert oder ein Zeichen ist verrutscht. Von hier kommen Sie weiter",
  cta: "Projekt besprechen",
  home: "Zur Startseite",
  where: "Wohin Sie wahrscheinlich wollten",
};

export default function NotFound() {
  const links = [
    { href: "/leistungen", title: "Leistungen", text: `Websites, Online-Shops, Systeme, Automatisierung und ${services.length - 4} weitere Bereiche` },
    { href: "/technologien", title: "Technik", text: `Die ${techs.length} Plattformen, auf denen wir bauen, und was wir damit umsetzen` },
    { href: "/projekte", title: "Projekte", text: "Relaunches für Industrie und B2B, mit Ausgangslage und Ergebnis" },
    { href: "/glossar", title: "Glossar", text: "Die Begriffe aus Agenturangeboten, in zwei Sätzen erklärt" },
  ];
  return (
    <InnerShell lang="de">
      <section className={`${s.ipHero} ${s.ipHeroSolo} ${s.nf}`}>
        <div className={s.ipHeroCopy}>
          <span className={s.nfCode} aria-hidden>{copy.code}</span>
          <h1 className={s.ipH1}>{copy.title}</h1>
          <p className={s.lead}>{copy.lead}</p>
          <div className={s.btns}>
            <Link href="/" className={`${s.pill} ${s.pillDark}`}>
              {copy.home}
              <span className={s.arr} aria-hidden>→</span>
            </Link>
            <a href="#anfrage" className={`${s.pill} ${s.pillLine}`}>{copy.cta}</a>
          </div>
        </div>
      </section>

      <section className={s.ipSection} aria-labelledby="nf-title">
        <h2 id="nf-title" className={s.h2} data-reveal>{copy.where}</h2>
        <ul className={s.linkCards}>
          {links.map((l, n) => (
            <li key={l.href} data-reveal style={{ "--i": n % 3 } as React.CSSProperties}>
              <Link href={href("de", l.href)} className={s.linkCard}>
                <b>{l.title}</b>
                <span>{l.text}</span>
                <span className={s.doorMore}>
                  {t({ de: "Mehr erfahren", ru: "Подробнее" }, "de")}
                  <span className={s.doorArrow} aria-hidden>→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </InnerShell>
  );
}
