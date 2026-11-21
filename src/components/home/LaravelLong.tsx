import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
import type { Lang } from "@/content/home";
import { pageCopy as pc, href, t, type Tech } from "@/content/catalog";
import type { LaravelPage } from "@/content/tech-laravel";
import { Groups, Crumbs, FormatsBand } from "./Inner";
import { StepsBand } from "./StepsBand";
import s from "./home.module.css";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

/* The Laravel page. Its own layouts again: a dark full-width hero with the
   scattered tools folding into one red system, a three-step ladder from
   buy to build, large editorial rows of system types, a warm band for
   applications that already exist, one plain promise, vertical steps. */
export function LaravelPageLong({ lang, x, page }: { lang: Lang; x: Tech; page: LaravelPage }) {
  return (
    <>
      <Crumbs lang={lang} trail={[{ label: t(pc.techHub.title, lang), path: "/technologien" }, { label: t(x.nav, lang) }]} />

      {/* 1 · Hero: dark field; on the right the tools of today become one system */}
      <section className={s.lvHero}>
        <div className={s.lvHeroCopy}>
          <h1 className={s.ipH1}>{page.h1}</h1>
          <p className={s.lead}>{page.lead}</p>
          <div className={s.btns}>
            <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>{page.cta}</a>
            <a href="#anfrage" className={`${s.pill} ${s.lvPillLine}`}>{t(pc.specCta, lang)}</a>
          </div>
        </div>
        <figure className={s.lvFlow} aria-label={`${page.before.join(", ")} werden zu: ${page.after.title}`}>
          <ul className={s.lvBefore} aria-hidden>
            {page.before.map((b, n) => <li key={b} style={i(n)}>{b}</li>)}
          </ul>
          <span className={s.lvArrow} aria-hidden>↓</span>
          <div className={s.lvAfter}>
            <b>{page.after.title}</b>
            <span>{page.after.text}</span>
          </div>
        </figure>
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

      {/* 3 · Buy, connect or build: a ladder that rises toward own development */}
      <section className={s.ipSection} aria-labelledby="ladder-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="ladder-title" className={s.h2}>{page.ladder.title}</h2>
          <p className={s.lead}>{page.ladder.intro}</p>
        </div>
        <ol className={s.lvLadder}>
          {page.ladder.steps.map((st, n) => (
            <li key={st.label} data-reveal style={i(n * 2)}>
              <h3>{st.label}</h3>
              <p>{st.when}</p>
              <b>{st.what}</b>
            </li>
          ))}
        </ol>
        <p className={s.splitNote} data-reveal>{page.ladder.note}</p>
      </section>

      {/* 4 · What we build: large editorial rows */}
      <section className={s.ipSection} aria-labelledby="sys-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="sys-title" className={s.h2}>{page.systems.title}</h2>
          <p className={s.lead}>{page.systems.intro}</p>
        </div>
        <ul className={s.lvRows}>
          {page.systems.rows.map((r, n) => (
            <li key={r.name} data-reveal style={i(n % 2)}>
              <h3>{r.name}</h3>
              <p>{r.text}</p>
              <small>{r.who}</small>
            </li>
          ))}
        </ul>
      </section>

      {/* 5 · An application you already have: warm band */}
      <section className={`${s.ipSection} ${s.lvExisting}`} aria-labelledby="ex-title">
        <div className={s.lvExistingHead} data-reveal>
          <h2 id="ex-title" className={s.h2}>{page.existing.title}</h2>
          <p className={s.lead}>{page.existing.intro}</p>
        </div>
        <div className={s.lvExistingList}>
          {page.existing.items.map((it, n) => (
            <article key={it.title} data-reveal style={i(n)}>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 6 · One promise, set apart */}
      <section className={s.lvTrust} aria-labelledby="trust-title" data-reveal>
        <h2 id="trust-title">{page.trust.title}</h2>
        <p>{page.trust.text}</p>
      </section>

      {/* 7 · Process: vertical steps with the point where you decide */}
      <section className={`${s.ipSection} ${s.wpCatalog}`} aria-labelledby="proc-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="proc-title" className={s.h2}>{page.process.title}</h2>
          <p className={s.lead}>{page.process.lead}</p>
        </div>
        <ol className={s.steps}>
          {page.process.phases.map((p, n) => (
            <li key={p.title} data-reveal style={i(n)}>
              <span className={s.phaseNum} aria-hidden>{n + 1}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {p.note && <small>{p.note}</small>}
                {page.process.decideAfter === n + 1 && (
                  <span className={s.decideInline}><span className={s.decideMark} aria-hidden>◆</span>{page.process.decideLabel}</span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 8 · Full catalogue */}
      <section className={s.ipSection} aria-labelledby="what-title">
        <h2 id="what-title" className={s.h2} data-reveal>{page.catalogTitle}</h2>
        <Groups lang={lang} groups={x.groups} id={x.id} />
      </section>

      {/* 9 · How to work with us */}
      <FormatsBand lang={lang} />

      {/* 10 · First step, lit 1 · 2 · 3 on scroll */}
      <StepsBand title={page.start.title} steps={page.start.steps} cta={page.start.cta} />

      {/* 11 · FAQ, the last doubts before the request form */}
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
