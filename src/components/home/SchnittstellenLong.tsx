import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
import type { Lang } from "@/content/home";
import { pageCopy as pc, href, t, type Tech } from "@/content/catalog";
import type { SchnittstellenPage } from "@/content/tech-schnittstellen";
import { Groups, Crumbs, FormatsBand } from "./Inner";
import { StepsBand } from "./StepsBand";
import s from "./home.module.css";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

/* The Schnittstellen page. Its own layouts: a rounded amber panel with the
   headline above a log of data flowing between systems, a wall of system
   names by kind, ready connector against own interface, the four steps of
   a failure as one chain, a process rail. */
export function SchnittstellenPageLong({ lang, x, page }: { lang: Lang; x: Tech; page: SchnittstellenPage }) {
  return (
    <>
      <Crumbs lang={lang} trail={[{ label: t(pc.techHub.title, lang), path: "/technologien" }, { label: t(x.nav, lang) }]} />

      {/* 1 · Hero: copy left; right, three connections, each two systems
          joined by an amber bridge with one line on what crosses it */}
      <section className={s.scHero}>
        <div className={s.scHeroCopy}>
          <h1 className={s.ipH1}>{page.h1}</h1>
          <p className={s.lead}>{page.lead}</p>
          <div className={s.btns}>
            <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>{page.cta}</a>
            <a href="#anfrage" className={`${s.pill} ${s.pillLine}`}>{t(pc.specCta, lang)}</a>
          </div>
        </div>
        <ul className={s.scLinks}>
          {page.links.map((l) => (
            <li key={l.a + l.b}>
              <div className={s.scPair}>
                <b>{l.a}</b>
                <span className={s.scBridge} aria-label="verbunden mit" />
                <b>{l.b}</b>
              </div>
              <span>{l.what}</span>
            </li>
          ))}
        </ul>
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

      {/* 3 · Systems, by kind: a wall of names */}
      {x.systems && (
        <section className={`${s.ipSection} ${s.scSystems}`} aria-labelledby="sys-title">
          <div className={s.deepHead} data-reveal>
            <h2 id="sys-title" className={s.h2}>{page.systemsTitle}</h2>
            <p className={s.lead}>{page.systemsIntro}</p>
          </div>
          <div className={s.scWall}>
            {x.systems.map((g, n) => (
              <div key={g.title.de} data-reveal style={i(n)}>
                <h3>{t(g.title, lang)}</h3>
                <ul>
                  {g.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className={s.splitNote} data-reveal>{page.systemsNote}</p>
        </section>
      )}

      {/* 4 · Ready connector or own interface */}
      <section className={`${s.ipSection} ${s.splitSection}`} aria-labelledby="dec-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="dec-title" className={s.h2}>{page.choice.title}</h2>
          <p className={s.lead}>{page.choice.intro}</p>
        </div>
        <div className={s.split}>
          {([page.choice.ready, page.choice.own] as const).map((c, n) => (
            <article key={c.title} className={s.splitCol} data-kind={n === 1 ? "on" : "off"} data-reveal style={i(n)}>
              <h3>{c.title}</h3>
              <p className={s.splitLead}>{c.lead}</p>
              <ul>{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className={s.splitNote} data-reveal>{page.choice.note}</p>
      </section>

      {/* 5 · When a connection fails: one chain on an amber band */}
      <section className={`${s.ipSection} ${s.scFail}`} aria-labelledby="fail-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="fail-title" className={s.h2}>{page.failure.title}</h2>
          <p className={s.lead}>{page.failure.intro}</p>
        </div>
        <ol className={s.scChain}>
          {page.failure.steps.map((st, n) => (
            <li key={st.title} data-reveal style={i(n * 2)}>
              <b>{st.title}</b>
              <span>{st.text}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* 6 · Process on one line */}
      <section className={s.ipSection} aria-labelledby="proc-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="proc-title" className={s.h2}>{page.process.title}</h2>
          <p className={s.lead}>{page.process.lead}</p>
        </div>
        <ol className={`${s.rail} ${s.railFour}`}>
          {page.process.phases.map((p, n) => (
            <li key={p.title} data-reveal style={i(n * 3)}>
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
      <section className={s.ipSection} aria-labelledby="what-title">
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
