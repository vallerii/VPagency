import Link from "next/link";
import type { CSSProperties } from "react";
import { GLOSSAR, glossarByCluster, type GlossarTerm } from "@/data/glossar";
import { getService, t, href, pageCopy as pc } from "@/content/catalog";
import type { Lang } from "@/content/home";
import s from "./home.module.css";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

// The glossary was written against the first service list, whose slugs did
// not survive the move to the catalog (ecommerce → online-shops and so on).
// Mapping here keeps every "Passende Leistung" link pointing at a page that
// exists instead of a 404.
const SERVICE_SLUG: Record<string, string> = {
  websites: "websites",
  ecommerce: "online-shops",
  "custom-software": "systeme-und-portale",
  automation: "automatisierung",
  support: "betreuung",
};

const copy = {
  title: "Glossar",
  lead: "In Angeboten von Digitalagenturen stehen Wörter, die niemand erklärt. Hier stehen sie in zwei Sätzen, und daneben, was sie in Ihrem Unternehmen konkret kosten oder einbringen",
  also: "Auch",
  definition: "Was es ist",
  importance: "Warum das zählt",
  example: "Beispiel",
  services: "Passende Leistung",
  related: "Verwandte Begriffe",
  back: "Alle Begriffe",
  missing: "Ihr Begriff fehlt hier?",
  missingText: "Dann fragen Sie ihn einfach. Wir erklären, was dahintersteckt, und sagen auch, wenn Sie das entsprechende Angebot gar nicht brauchen",
};

function Crumbs({ lang, trail }: { lang: Lang; trail: { label: string; path?: string }[] }) {
  return (
    <nav className={`${s.crumbs} ${s.crumbsBar}`} aria-label="Breadcrumb">
      <Link href={href(lang, "")}>{t(pc.home, lang)}</Link>
      {trail.map((c) => (
        <span key={c.label}>
          <span aria-hidden> / </span>
          {c.path ? <Link href={c.path}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
        </span>
      ))}
    </nav>
  );
}

function ServiceLinks({ lang, slugs }: { lang: Lang; slugs: string[] }) {
  const list = slugs
    .map((x) => getService(SERVICE_SLUG[x] ?? x))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  if (!list.length) return null;
  return (
    <p className={s.caseService}>
      {copy.services}:{" "}
      {list.map((sv, n) => (
        <span key={sv.id}>
          {n > 0 && ", "}
          <Link href={href(lang, `/leistungen/${sv.id}`)}>{t(sv.nav, lang)}</Link>
        </span>
      ))}
    </p>
  );
}

export function GlossarHub({ lang }: { lang: Lang }) {
  const clusters = glossarByCluster();
  return (
    <>
      <Crumbs lang={lang} trail={[{ label: copy.title }]} />
      <section className={`${s.ipHero} ${s.ipHeroSolo}`}>
        <div className={s.ipHeroCopy}>
          <h1 className={s.ipH1}>{copy.title}</h1>
          <p className={s.lead}>{copy.lead}</p>
        </div>
      </section>
      {clusters.map((cl) => (
        <section key={cl.id} className={s.ipSection} aria-label={cl.title}>
          <div className={s.glossHead} data-reveal>
            <h2 className={s.h2}>{cl.title}</h2>
            <p className={s.lead}>{cl.description}</p>
          </div>
          <ul className={s.linkCards}>
            {cl.terms.map((term, n) => (
              <li key={term.slug} data-reveal style={i(n % 3)}>
                <Link href={`/glossar/${term.slug}`} className={s.linkCard}>
                  <b>{term.term}</b>
                  {term.aka && <small className={s.glossAka}>{term.aka}</small>}
                  <span>{term.short}</span>
                  <span className={s.doorMore}>
                    {pc.more.de}
                    <span className={s.doorArrow} aria-hidden>→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <section className={s.ipSection}>
        <div className={s.glossAsk} data-reveal>
          <div>
            <h2 className={s.h2}>{copy.missing}</h2>
            <p className={s.lead}>{copy.missingText}</p>
          </div>
          <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>
            Begriff anfragen
            <span className={s.arr} aria-hidden>→</span>
          </a>
        </div>
      </section>
    </>
  );
}

export function GlossarTermPage({ lang, term }: { lang: Lang; term: GlossarTerm }) {
  const related = term.relatedTerms
    .map((slug) => GLOSSAR.find((x) => x.slug === slug))
    .filter((x): x is GlossarTerm => Boolean(x));
  return (
    <article>
      <Crumbs lang={lang} trail={[{ label: copy.title, path: "/glossar" }, { label: term.term }]} />
      <section className={`${s.ipHero} ${s.ipHeroSolo}`}>
        <div className={s.ipHeroCopy}>
          <h1 className={s.ipH1}>{term.term}</h1>
          {term.aka && <p className={s.caseMeta}>{copy.also}: {term.aka}</p>}
          <p className={s.lead}>{term.short}</p>
        </div>
      </section>

      <section className={s.ipSection}>
        <div className={s.glossBody}>
          <div className={s.caseBlock} data-reveal style={i(0)}>
            <h2>{copy.definition}</h2>
            <p>{term.definition}</p>
          </div>

          <div className={s.caseBlock} data-reveal style={i(1)}>
            <h2>{copy.importance}</h2>
            <ul className={s.glossList}>
              {term.importance.map((line) => (
                <li key={line.slice(0, 24)}>{line}</li>
              ))}
            </ul>
          </div>

          {term.example && (
            <div className={s.caseBlock} data-reveal style={i(2)}>
              <h2>{copy.example}</h2>
              <p>{term.example}</p>
            </div>
          )}
        </div>

        <ServiceLinks lang={lang} slugs={term.relatedServices} />
      </section>

      {related.length > 0 && (
        <section className={s.ipSection} aria-label={copy.related}>
          <h2 className={s.h2} data-reveal>{copy.related}</h2>
          <ul className={s.linkCards}>
            {related.map((x, n) => (
              <li key={x.slug} data-reveal style={i(n % 3)}>
                <Link href={`/glossar/${x.slug}`} className={s.linkCard}>
                  <b>{x.term}</b>
                  <span>{x.short}</span>
                  <span className={s.doorMore}>
                    {pc.more.de}
                    <span className={s.doorArrow} aria-hidden>→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
