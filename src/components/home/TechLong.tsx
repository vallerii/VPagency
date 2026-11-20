import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
import type { Lang } from "@/content/home";
import { pageCopy as pc, formats, href, t, type Tech } from "@/content/catalog";
import type { TechPageContent } from "@/content/tech-pages";
import { Groups, Crumbs } from "./Inner";
import { StepsBand } from "./StepsBand";
import { MigrationCheck } from "./MigrationCheck";
import { MigrationTabs } from "./MigrationTabs";
import { BrandLogo } from "./BrandLogo";
import { tone } from "./tone";
import s from "./home.module.css";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

/* The long technology page. Same rhythm as the long service pages (pinned
   hero, three steps that light up on scroll, prose, FAQ), but written for
   someone who already knows the platform, and with its own hero widget so
   the technology pages never look like copies of the service pages or of
   each other. Block order alternates dense and light layouts: no two card
   grids in a row. */
export function TechPageLong({ lang, x, page }: { lang: Lang; x: Tech; page: TechPageContent }) {
  return (
    <>
      <Crumbs lang={lang} trail={[{ label: t(pc.techHub.title, lang), path: "/technologien" }, { label: t(x.nav, lang) }]} />

      {/* 1 · Hero: a plain section. The right column is the platform's own widget */}
      <section className={`${s.techHero} ${tone(x.id)}`}>
        <div className={s.svcHeroCopy}>
          <h1 className={s.ipH1}>{page.h1}</h1>
          <p className={s.lead}>{page.lead}</p>
          <div className={s.btns}>
            <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>{page.cta}</a>
            <a href="#anfrage" className={`${s.pill} ${s.pillLine}`}>{t(pc.specCta, lang)}</a>
          </div>
        </div>
        <MigrationCheck />
        {page.migration && (
          <ol className={s.techRoute} aria-label="Umzüge, die wir begleiten">
            {page.migration.platforms.map((m) => (
              <li key={m.from}><BrandLogo name={m.from} size={22} />{m.from}</li>
            ))}
            <li className={s.techRouteTo}><BrandLogo name="Shopify" size={24} />Shopify</li>
          </ol>
        )}
      </section>

      {/* 2 · Intro, read word by word, with the two ways out */}
      <section className={`${s.ipSection} ${s.introSection}`}>
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
              <Link href={href(lang, e.href)}>
                {e.label}
                <span className={s.doorArrow} aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 3 · Fits or not: two columns against each other */}
      <section className={`${s.ipSection} ${s.splitSection}`} aria-labelledby="dec-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="dec-title" className={s.h2}>{page.decision.title}</h2>
          <p className={s.lead}>{page.decision.intro}</p>
        </div>
        <div className={s.split}>
          {([page.decision.standard, page.decision.custom] as const).map((c, n) => (
            <article key={c.title} className={s.splitCol} data-kind={n === 1 ? "on" : "off"} data-reveal style={i(n)}>
              <h3>{c.title}</h3>
              <p className={s.splitLead}>{c.lead}</p>
              <ul>{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className={s.splitNote} data-reveal>{page.decision.note}</p>
      </section>

      {/* 4 · Migration, one platform at a time on a tinted band */}
      {page.migration && (
        <section className={`${s.ipSection} ${s.migrBand} ${tone(x.id)}`} aria-labelledby="migr-title">
          <div className={s.deepHead} data-reveal>
            <h2 id="migr-title" className={s.h2}>{page.migration.title}</h2>
            <p className={s.lead}>{page.migration.intro}</p>
          </div>
          <div data-reveal><MigrationTabs m={page.migration} /></div>
          <p className={s.splitNote} data-reveal>{page.migration.note}</p>
        </section>
      )}

      {/* 5 · The areas in detail: the stacking deck of the service pages */}
      <section className={`${s.ipSection} ${s.deepSection}`} aria-labelledby="deep-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="deep-title" className={s.h2}>{page.deepDive.title}</h2>
          <p className={s.lead}>{page.deepDive.intro}</p>
        </div>
        <div className={s.deepBlocks}>
          {page.deepDive.blocks.map((b, n) => (
            <article key={b.heading} className={s.deepBlock} style={i(n)}>
              <span className={s.deepNum} aria-hidden>{String(n + 1).padStart(2, "0")}</span>
              <h3>{b.heading}</h3>
              <div>
                {b.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
                {b.termSlug && (
                  <Link href={`/glossar/${b.termSlug}`} className={s.deepTerm}>
                    {b.termLabel}
                    <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6 · The full catalogue, for whoever looks for one specific item */}
      <section className={s.ipSection} aria-labelledby="what-title">
        <h2 id="what-title" className={s.h2} data-reveal>{page.catalogTitle}</h2>
        <Groups lang={lang} groups={x.groups} id={x.id} />
        <div className={s.notListed} data-reveal>
          <span>{t(pc.notListed, lang)}</span>
          <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>
            {t(pc.cta, lang)}
            <span className={s.arr} aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* 7 · Process on one line; the numbers light up in turn as it scrolls in */}
      <section className={s.ipSection} aria-labelledby="proc-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="proc-title" className={s.h2}>{page.process.title}</h2>
          <p className={s.lead}>{page.process.lead}</p>
        </div>
        <ol className={`${s.rail} ${page.process.phases.length === 4 ? s.railFour : ""}`}>
          {page.process.phases.map((p, n) => (
            <li key={p.title} data-reveal style={i(n * 3)}>
              <span className={s.phaseNum} aria-hidden>{n + 1}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {page.process.decideAfter === n + 1 && (
                  <span className={s.decideInline}>
                    <span className={s.decideMark} aria-hidden>◆</span>
                    {page.process.decideLabel}
                  </span>
                )}
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
              <summary>
                {f.q}
                <span className={s.faqPlus} aria-hidden />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 10 · The first step, right above the request form: the three steps light up one by one on scroll */}
      <StepsBand title={page.promise.title} steps={page.promise.steps} cta={page.promise.cta} />
    </>
  );
}
