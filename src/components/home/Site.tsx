import Link from "next/link";
import type { Lang } from "@/content/home";
import { home } from "@/content/home";
import { more } from "@/content/home-more";
import { services, techs, pageCopy, href, t } from "@/content/catalog";
import { BrandLogo } from "./BrandLogo";
import { tone } from "./tone";
import s from "./home.module.css";

const navCopy = {
  de: { services: "Leistungen", tech: "Technik", projects: "Projekte", contact: "Kontakt", company: "Unternehmen", glossary: "Glossar", contactCol: "Kontakt" },
  ru: { services: "Услуги", tech: "Технологии", projects: "Проекты", contact: "Контакты", company: "Компания", glossary: "Глоссарий", contactCol: "Контакты" },
};

/* Site header: logo, pill navigation with two dropdowns, language, one action */
export function SiteHeader({ lang, floating }: { lang: Lang; floating?: boolean }) {
  const c = home[lang];
  const n = navCopy[lang];
  return (
    <header className={`${s.header} ${floating ? "" : s.headerStatic}`}>
      <Link href={href(lang, "")} className={s.logo} aria-label="VP agency, Startseite">VP<span> agency</span></Link>
      <nav className={s.pillnav} aria-label="Hauptnavigation">
        <div className={s.dd}>
          <Link href={href(lang, "/leistungen")} className={s.ddTrigger}>{n.services}<span aria-hidden>⌄</span></Link>
          <div className={s.ddPanel}>
            {services.map((sv) => (
              <Link key={sv.id} href={href(lang, `/leistungen/${sv.id}`)} className={s.ddLink}>
                <b>{t(sv.nav, lang)}</b><small>{t(sv.title, lang)}</small>
              </Link>
            ))}
            <Link href={href(lang, "/leistungen")} className={s.ddAll}>{t(pageCopy.allServices, lang)} →</Link>
          </div>
        </div>
        <div className={s.dd}>
          <Link href={href(lang, "/technologien")} className={s.ddTrigger}>{n.tech}<span aria-hidden>⌄</span></Link>
          <div className={`${s.ddPanel} ${s.ddPanelNarrow}`}>
            {techs.map((x) => (
              <Link key={x.id} href={href(lang, `/technologien/${x.id}`)} className={`${s.ddLink} ${s.ddTech}`}>
                <span className={`${s.ddMark} ${s.techTint} ${tone(x.id)}`}><BrandLogo name={x.id === "schnittstellen" ? "auto" : x.brands[0]} size={18} /></span>
                <b>{t(x.nav, lang)}</b>
              </Link>
            ))}
            <Link href={href(lang, "/technologien")} className={s.ddAll}>{t(pageCopy.allTech, lang)} →</Link>
          </div>
        </div>
        <Link href="/projekte">{n.projects}</Link>
        <a href="#anfrage">{n.contact}</a>
      </nav>
      <div className={s.headRight}>
        <span className={s.langSwitch}>
          <a href="?lang=de" aria-current={lang === "de" || undefined}>DE</a>
          <a href="?lang=ru" aria-current={lang === "ru" || undefined}>RU</a>
        </span>
        <a href="#anfrage" className={`${s.pill} ${s.pillDark} ${s.pillSm} ${s.hideSm}`}>{c.navCta}</a>
        <details className={s.mobileMenu}>
          <summary>{c.menu}</summary>
          <div className={s.mobilePanel}>
            <small className={s.mobileGroup}>{n.services}</small>
            {services.map((sv) => <Link key={sv.id} href={href(lang, `/leistungen/${sv.id}`)}>{t(sv.nav, lang)}</Link>)}
            <small className={s.mobileGroup}>{n.tech}</small>
            {techs.map((x) => <Link key={x.id} href={href(lang, `/technologien/${x.id}`)}>{t(x.nav, lang)}</Link>)}
            <small className={s.mobileGroup}>{n.company}</small>
            <Link href="/projekte">{n.projects}</Link>
            <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>{c.navCta}</a>
          </div>
        </details>
      </div>
    </header>
  );
}

/* Footer: columns for services, technology and company, then the name full width */
export function SiteFooter({ lang }: { lang: Lang }) {
  const f = more[lang].footer;
  const fin = more[lang].final;
  const n = navCopy[lang];
  return (
    <footer className={s.footer}>
      <div className={s.footCols}>
        <div>
          <b>{n.services}</b>
          {services.map((sv) => <Link key={sv.id} href={href(lang, `/leistungen/${sv.id}`)}>{t(sv.nav, lang)}</Link>)}
        </div>
        <div>
          <b>{n.tech}</b>
          {techs.map((x) => <Link key={x.id} href={href(lang, `/technologien/${x.id}`)}>{t(x.nav, lang)}</Link>)}
        </div>
        <div>
          <b>{n.company}</b>
          <Link href="/projekte">{n.projects}</Link>
          <Link href="/glossar">{n.glossary}</Link>
          <a href="#anfrage">{n.contact}</a>
        </div>
        <div>
          <b>{n.contactCol}</b>
          <span className={s.footStrong}>{fin.phone}</span>
          <span>{fin.email}</span>
          <span>{fin.city}</span>
        </div>
      </div>
      <svg className={s.footName} viewBox="0 0 1000 170" role="img" aria-label="VP agency">
        <text x="0" y="138" textLength="1000" lengthAdjust="spacingAndGlyphs">VP agency</text>
      </svg>
      <div className={s.footRow}>
        <span>{f.rights}</span>
        <nav aria-label="Rechtliches">{f.links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}</nav>
      </div>
    </footer>
  );
}

/* Endless row of client logos, under "What we do" */
const CLIENTS = [
  { slug: "wecubexx", src: "/logos/wecubexx.png", name: "Wecubexx" },
  { slug: "proctec", src: "/logos/proctec.svg", name: "proCtec" },
  { slug: "erfi", src: "/logos/erfi.svg", name: "erfi" },
  { slug: "gbs", src: "/logos/gbs.svg", name: "GBS metrology" },
  { slug: "wetropa", src: "/logos/wetropa.png", name: "Wetropa" },
  { slug: "lemming", src: "/logos/lemming.png", name: "Lemming" },
  { slug: "cnag", src: "/logos/cnag.svg", name: "CNAG" },
];

export function Clients({ lang }: { lang: Lang }) {
  const list = [...CLIENTS, ...CLIENTS];
  return (
    <section className={s.clientsBand} aria-label={home[lang].clientsLabel}>
      <div className={s.clients}>
        <div className={s.clientsTrack}>
          {list.map((c, i) => (
            <Link key={`${c.slug}-${i}`} href={`/projekte/${c.slug}`} className={s.clientLogo} aria-hidden={i >= CLIENTS.length || undefined} tabIndex={i >= CLIENTS.length ? -1 : undefined}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.name} loading="lazy" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
