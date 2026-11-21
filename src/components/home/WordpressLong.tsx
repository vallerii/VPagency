import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
import type { Lang } from "@/content/home";
import { pageCopy as pc, href, t, type Tech } from "@/content/catalog";
import type { WordpressPage } from "@/content/tech-wordpress";
import { Groups, Crumbs, FormatsBand } from "./Inner";
import { StepsBand } from "./StepsBand";
import { HeaderOverHero } from "./HeaderOverHero";
import s from "./home.module.css";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

/* The WordPress page. Its own story and its own layouts, so it never reads
   as the Shopify page with other words: a full-bleed hero with a solid blue
   column of promises, a list of situations with a verdict each, a dark band for sites
   in trouble, editorial columns, a timeline. */
export function WordpressPageLong({ lang, x, page }: { lang: Lang; x: Tech; page: WordpressPage }) {
  return (
    <>
      {/* The two colour fields start at the top of the window, under the
          header and the breadcrumbs, so the first screen is one picture */}
      <div className={s.wpTop}>
      <HeaderOverHero />
      <Crumbs lang={lang} trail={[{ label: t(pc.techHub.title, lang), path: "/technologien" }, { label: t(x.nav, lang) }]} />

      {/* 1 · Hero: headline on the pale field, the four promises in a
          column of solid WordPress blue that runs to the right edge */}
      <section className={s.wpHero}>
        <div className={s.wpHeroCopy}>
          <h1 className={s.ipH1}>{page.h1}</h1>
          <p className={s.lead}>{page.lead}</p>
          <div className={s.btns}>
            <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>{page.cta}</a>
            <a href="#anfrage" className={`${s.pill} ${s.pillLine}`}>{t(pc.specCta, lang)}</a>
          </div>
        </div>
        <ul className={s.wpPoints}>
          {page.points.map((p) => (
            <li key={p.title}>
              <b>{p.title}</b>
              <span>{p.text}</span>
            </li>
          ))}
        </ul>
      </section>
      </div>

      {/* 2 · Intro */}
      <section className={`${s.ipSection} ${s.introSection} ${s.wpIntro}`}>
        <p className={s.intro} data-reveal>
          {page.intro.split(" ").map((w, n) => (
            <Fragment key={`${n}-${w}`}>
              <span style={{ "--w": n } as CSSProperties}>{w}</span>{" "}
            </Fragment>
          ))}
        </p>
        <ul className={`${s.exits} ${s.exitsPlain}`}>
          {page.exits.map((e) => (
            <li key={e.href}>
              <span>{e.question}</span>
              <Link href={href(lang, e.href)}>{e.label}<span className={s.doorArrow} aria-hidden>→</span></Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 3 · Situations with a verdict each */}
      <section className={s.ipSection} aria-labelledby="fit-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="fit-title" className={s.h2}>{page.fit.title}</h2>
          <p className={s.lead}>{page.fit.intro}</p>
        </div>
        <ul className={s.fitRows}>
          {page.fit.rows.map((r, n) => (
            <li key={r.situation} data-kind={r.kind} data-reveal style={i(n % 3)}>
              <span>{r.situation}</span>
              {r.href
                ? <Link href={href(lang, r.href)} className={s.fitVerdict}>{r.verdict}<span aria-hidden> →</span></Link>
                : <b className={s.fitVerdict}>{r.verdict}</b>}
            </li>
          ))}
        </ul>
      </section>

      {/* 4 · Sites in trouble: a dark band */}
      <section className={`${s.ipSection} ${s.rescue}`} aria-labelledby="rescue-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="rescue-title" className={s.h2}>{page.rescue.title}</h2>
          <p className={s.lead}>{page.rescue.intro}</p>
        </div>
        <div className={s.rescueList}>
          {page.rescue.cases.map((c, n) => (
            <article key={c.symptom} data-reveal style={i(n % 2)}>
              <h3>{c.symptom}</h3>
              <p className={s.rescueCause}>{c.cause}</p>
              <p>{c.action}</p>
            </article>
          ))}
        </div>
        <p className={s.rescueNote} data-reveal>{page.rescue.note}</p>
      </section>

      {/* 5 · What we build: the heading holds on the left while the six
          items pass by on the right, one large title each. Deliberately
          not a grid, so it never echoes the dark 2 x 2 band above */}
      <section className={`${s.ipSection} ${s.wpBuild}`} aria-labelledby="build-title">
        <div className={s.wpBuildHead}>
          <h2 id="build-title" className={s.h2}>{page.build.title}</h2>
          <p className={s.lead}>{page.build.intro}</p>
        </div>
        <div className={s.wpBuildList}>
          {page.build.columns.map((c, n) => (
            <article key={c.heading} data-reveal style={i(n % 2)}>
              <h3>{c.heading}</h3>
              <p>{c.text}</p>
              {c.termSlug && <Link href={`/glossar/${c.termSlug}`} className={s.deepTerm}>{c.termLabel}<span aria-hidden>→</span></Link>}
            </article>
          ))}
        </div>
      </section>

      {/* 6 · Process as a timeline */}
      <section className={s.ipSection} aria-labelledby="proc-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="proc-title" className={s.h2}>{page.process.title}</h2>
          <p className={s.lead}>{page.process.lead}</p>
        </div>
        <ol className={`${s.timeline} ${s.timelineFour}`}>
          {page.process.phases.map((p, n) => (
            <li key={p.title} data-reveal style={i(n * 2)}>
              <span className={s.phaseNum} aria-hidden>{n + 1}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {p.note && <small>{p.note}</small>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 7 · Full catalogue */}
      <section className={`${s.ipSection} ${s.wpCatalog}`} aria-labelledby="what-title">
        <h2 id="what-title" className={s.h2} data-reveal>{page.catalogTitle}</h2>
        <Groups lang={lang} groups={x.groups} id={x.id} />
      </section>

      {/* 8 · How to work with us */}
      <FormatsBand lang={lang} />

      {/* 9 · First step, lit 1 · 2 · 3 on scroll */}
      <StepsBand title={page.start.title} steps={page.start.steps} cta={page.start.cta} />

      {/* 10 · FAQ, the last doubts before the request form */}
      <section className={s.ipSection} aria-labelledby="faq-title">
        <h2 id="faq-title" className={s.h2} data-reveal>{page.faq.title}</h2>
        <div className={s.faqList}>
          {page.faq.items.map((f, n) => (
            <details key={f.q} className={s.faqItem} data-reveal style={i(n % 3)}>
              <summary>{f.q}<span className={s.faqPlus} aria-hidden /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
