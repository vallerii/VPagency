import Link from "next/link";
import type { CSSProperties } from "react";
import type { Lang } from "@/content/home";
import { more } from "@/content/home-more";
import { AnfrageForm } from "./AnfrageForm";
import { AnfrageModal } from "./AnfrageModal";
import { BrandLogo } from "./BrandLogo";
import { href, pageCopy, t } from "@/content/catalog";
import { tone } from "./tone";
import s from "./home.module.css";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

// Cards of the stack block sit on an uneven grid (like the projects block):
// two wide/narrow pairs, then one card across the full width.
const stackPlace: Record<string, string> = { wp: s.bWide, shopify: s.bNarrow, laravel: s.bNarrow, auto: s.bWide, ki: s.bFull };
// Wordmark logos are wide and thin: they get a wider tile and a bigger size.
const WIDE: Record<string, number> = { WooCommerce: 104, SAP: 64 };
const liPlace: Record<string, string> = { wp: s.liWide, shopify: s.liNarrow, laravel: s.liNarrow, auto: s.liWide, ki: s.liFull };
const stackTech: Record<string, string> = { wp: "wordpress", shopify: "shopify", laravel: "laravel", auto: "schnittstellen", ki: "ki" };

/* 3 · The stack: why it matters and what we do with each part */
export function Stack({ lang }: { lang: Lang }) {
  const c = more[lang].stack;
  return (
    <section id="technik" className={s.stack2} aria-labelledby="stack-title">
      <div className={s.stackHead}>
        <h2 id="stack-title" className={s.h2} data-reveal style={i(0)}>{c.title}</h2>
        <p className={s.body} data-reveal style={i(1)}>{c.lead}</p>
      </div>
      <ul className={s.bento}>
        {c.cards.map((card, n) => (
          <li key={card.id} className={liPlace[card.id]} data-reveal style={i(n)}>
            <Link href={href(lang, `/technologien/${stackTech[card.id]}`)} className={`${s.bCard} ${stackPlace[card.id]} ${s.techTint} ${tone(stackTech[card.id])}`}>
            <div className={s.bMarks}>
              {card.brands.map((b) => {
                const wide = WIDE[b];
                return <span key={b} className={wide ? s.bMarkWide : undefined} title={b === "auto" ? undefined : b}><BrandLogo name={b} size={wide ?? 30} /></span>;
              })}
            </div>
            <div className={s.bBody}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              {card.note && <p className={s.bNote}>{card.note}</p>}
            </div>
            <div className={s.bServices}>
              <small>{c.servicesLabel}</small>
              <ul>{card.services.map((sv) => <li key={sv}>{sv}</li>)}</ul>
            </div>
            <span className={`${s.doorMore} ${s.bMore}`}>{t(pageCopy.more, lang)}<span className={s.doorArrow} aria-hidden>→</span></span>
            </Link>
          </li>
        ))}
      </ul>
      <p className={s.germany} data-reveal style={i(2)}>{c.germany}</p>
    </section>
  );
}

/* 4 · Where AI helps: the one dark band on the page */
export function Ki({ lang }: { lang: Lang }) {
  const c = more[lang].ki;
  return (
    <section id="ki" className={s.ki} aria-labelledby="ki-title">
      <div className={s.kiCopy}>
        <h2 id="ki-title" className={s.h2} data-reveal style={i(0)}>{c.title}</h2>
        <p className={s.body} data-reveal style={i(1)}>{c.lead}</p>
        <a href="#anfrage" className={`${s.pill} ${s.pillLight}`} data-reveal style={i(2)}>{c.cta}<span className={s.arr} aria-hidden>↗</span></a>
      </div>
      <ul className={s.kiPoints}>
        {c.points.map((p, n) => (
          <li key={p.title} data-reveal style={i(n)}>
            <span className={s.kiCheck} aria-hidden>✓</span>
            <div><b>{p.title}</b><span>{p.text}</span></div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* 5 · Projects: big screenshots of the live sites as backgrounds, on an uneven grid */
const projectPlace = [s.pWide, s.pNarrow, s.pNarrow, s.pWide, s.pWide, s.pNarrow];

export function Projects({ lang }: { lang: Lang }) {
  const c = more[lang].projects;
  return (
    <section className={s.projects} aria-labelledby="projects-title">
      <div className={s.projectsHead}>
        <div className={s.projectsIntro}>
          <h2 id="projects-title" className={s.h2} data-reveal style={i(0)}>{c.title}</h2>
          <p className={s.body} data-reveal style={i(1)}>{c.lead}</p>
        </div>
        <Link href="/projekte" className={`${s.pill} ${s.pillLine}`}>{c.all}<span className={s.arr} aria-hidden>↗</span></Link>
      </div>
      <ul className={s.projectGrid}>
        {c.items.map((p, n) => (
          <li key={p.slug} className={projectPlace[n]} data-reveal style={i(n % 2)}>
            <Link href={`/projekte/${p.slug}`} className={s.project}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={s.projectShot} src={p.image} alt="" loading="lazy" />
              <span className={s.projectTop}>
                <span className={s.projectTag}>{p.tag}</span>
                {p.badge && <span className={`${s.projectTag} ${s.projectBadge}`}>{p.badge}</span>}
              </span>
              <span className={s.projectInfo}>
                <span className={s.projectName}>{p.name}</span>
                <span className={s.projectText}>{p.text}</span>
                <span className={s.projectFoot}>
                  <span className={s.projectTags}>{c.tags.map((t) => <span key={t}>{t}</span>)}</span>
                  <span className={s.projectOpen}>{c.open}<span className={s.doorArrow} aria-hidden>→</span></span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* 6 · One team, closing and the request form */
export function Final({ lang }: { lang: Lang }) {
  const c = more[lang].final;
  return (
    <section id="anfrage" className={s.final} aria-labelledby="final-title">
      <div className={s.finalCopy}>
        <h2 className={s.h2} data-reveal style={i(0)}>{c.title}</h2>
        <p className={s.body} data-reveal style={i(1)}>{c.text}</p>
        <div className={s.finalClose} data-reveal style={i(2)}>
          <h2 id="final-title" className={s.h2}>{c.closing}</h2>
          <p className={s.body}>{c.closingSub}</p>
        </div>
        <div className={s.contact} data-reveal style={i(3)}>
          <small>{c.contactLabel}</small>
          <span className={s.contactMail}>{c.phone}</span>
          <span>{c.email}</span>
          <span>{c.city}</span>
        </div>
      </div>
      <div className={s.formCard} data-reveal style={i(2)}>
        <AnfrageForm t={c.form} />
      </div>
      <AnfrageModal t={c.form} title={c.closing} sub={c.closingSub} close={lang === "ru" ? "Закрыть" : "Schließen"} />
    </section>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const c = more[lang].footer;
  return (
    <footer className={s.footer}>
      <svg className={s.footName} viewBox="0 0 1000 170" role="img" aria-label="VP agency">
        <text x="0" y="138" textLength="1000" lengthAdjust="spacingAndGlyphs">VP agency</text>
      </svg>
      <div className={s.footRow}>
        <span>{c.rights}</span>
        <nav aria-label="Rechtliches">{c.links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}</nav>
      </div>
    </footer>
  );
}
