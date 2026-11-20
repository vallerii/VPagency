import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
import type { Lang } from "@/content/home";
import { pageCopy as pc, formats, href, t, type Tech } from "@/content/catalog";
import type { WordpressPage } from "@/content/tech-wordpress";
import { Groups, Crumbs } from "./Inner";
import { StepsBand } from "./StepsBand";
import { WpEditorDemo } from "./WpEditorDemo";
import s from "./home.module.css";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

/* The WordPress page. Its own story and its own layouts, so it never reads
   as the Shopify page with other words: a full-bleed blue hero with a live
   editor, a list of situations with a verdict each, a dark band for sites
   in trouble, editorial columns, a timeline. */
export function WordpressPageLong({ lang, x, page }: { lang: Lang; x: Tech; page: WordpressPage }) {
  return (
    <>
      <Crumbs lang={lang} trail={[{ label: t(pc.techHub.title, lang), path: "/technologien" }, { label: t(x.nav, lang) }]} />

      {/* 1 · Hero: full-bleed field, headline over the live editor */}
      <section className={s.wpHero}>
        <div className={s.wpHeroHead}>
          <h1 className={s.ipH1}>{page.h1}</h1>
          <div className={s.wpHeroSide}>
            <p className={s.lead}>{page.lead}</p>
            <div className={s.btns}>
              <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>{page.cta}</a>
              <a href="#anfrage" className={`${s.pill} ${s.pillLine}`}>{t(pc.specCta, lang)}</a>
            </div>
          </div>
        </div>
        <WpEditorDemo {...page.demo} />
      </section>

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

      {/* 5 · What we build: editorial columns */}
      <section className={s.ipSection} aria-labelledby="build-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="build-title" className={s.h2}>{page.build.title}</h2>
          <p className={s.lead}>{page.build.intro}</p>
        </div>
        <div className={s.wpCols}>
          {page.build.columns.map((c, n) => (
            <article key={c.heading} data-reveal style={i(n % 3)}>
              <h3>{c.heading}</h3>
              <p>{c.text}</p>
              {c.termSlug && <Link href={`/glossar/${c.termSlug}`} className={s.deepTerm}>{c.termLabel}<span aria-hidden>→</span></Link>}
            </article>
          ))}
        </div>
      </section>

      {/* 6 · Full catalogue */}
      <section className={`${s.ipSection} ${s.wpCatalog}`} aria-labelledby="what-title">
        <h2 id="what-title" className={s.h2} data-reveal>{page.catalogTitle}</h2>
        <Groups lang={lang} groups={x.groups} id={x.id} />
      </section>

      {/* 7 · Process as a timeline */}
      <section className={s.ipSection} aria-labelledby="proc-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="proc-title" className={s.h2}>{page.process.title}</h2>
          <p className={s.lead}>{page.process.lead}</p>
        </div>
        <ol className={s.timeline}>
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

      {/* 8 · How to work with us */}
      <section className={s.fmtBand} aria-labelledby="fmt-title">
        <h2 id="fmt-title" className={s.h2} data-reveal>{t(formats.title, lang)}</h2>
        <ul className={s.fmtList}>
          {formats.items.map((f, n) => (
            <li key={f.title.de} data-reveal style={i(n)}>
              <span className={s.fmtNum} aria-hidden>{String(n + 1).padStart(2, "0")}</span>
              <b>{t(f.title, lang)}</b>
              <span>{t(f.text, lang)}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 9 · FAQ */}
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

      {/* 10 · First step, lit 1 · 2 · 3 on scroll, right above the form */}
      <StepsBand title={page.start.title} steps={page.start.steps} cta={page.start.cta} />
    </>
  );
}
