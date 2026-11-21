import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
import type { Lang } from "@/content/home";
import { pageCopy as pc, href, t, type Tech } from "@/content/catalog";
import type { KiPage } from "@/content/tech-ki";
import { Groups, Crumbs, FormatsBand } from "./Inner";
import { StepsBand } from "./StepsBand";
import { HeaderOverHero } from "./HeaderOverHero";
import { BrandLogo, hasLogo } from "./BrandLogo";
import s from "./home.module.css";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

/* The KI-Tools page. Like WordPress, the first screen is two colour
   fields from the top of the window; unlike it, the coloured column shows
   one worked example of an agent with a human at the end. Then: the tools
   and what each is for, where the data stays, who does what, a rail. */
export function KiPageLong({ lang, x, page }: { lang: Lang; x: Tech; page: KiPage }) {
  return (
    <>
      <div className={s.kiTop}>
        <HeaderOverHero />
        <Crumbs lang={lang} trail={[{ label: t(pc.techHub.title, lang), path: "/technologien" }, { label: t(x.nav, lang) }]} />

        {/* 1 · Hero */}
        <section className={s.kiHero}>
          <div className={s.kiHeroCopy}>
            <h1 className={s.ipH1}>{page.h1}</h1>
            <p className={s.lead}>{page.lead}</p>
            <div className={s.btns}>
              <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>{page.cta}</a>
              <a href="#anfrage" className={`${s.pill} ${s.pillLine}`}>{t(pc.specCta, lang)}</a>
            </div>
          </div>
          <figure className={s.kiExample}>
            <figcaption>{page.example.title}</figcaption>
            <ol>
              {page.example.steps.map((st) => (
                <li key={st.who} data-human={st.human ? "" : undefined}>
                  <small>{st.who}</small>
                  <span>{st.text}</span>
                </li>
              ))}
            </ol>
          </figure>
        </section>
      </div>

      {/* 2 · The tools, as a strip right under the hero: no heading (the
          hero already names them), one compact row of mark, name and one line */}
      <section className={s.kiToolsStrip} aria-label={page.tools.title}>
        <ul>
          {page.tools.items.map((it, n) => (
            <li key={it.name} style={i(n)}>
              <span className={s.kiToolMark}>{hasLogo(it.name) && <BrandLogo name={it.name} size={24} />}</span>
              <b>{it.name}</b>
              <span>{it.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 3 · Intro */}
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

      {/* 4 · Where the data stays: violet band */}
      <section className={`${s.ipSection} ${s.kiData}`} aria-labelledby="data-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="data-title" className={s.h2}>{page.data.title}</h2>
          <p className={s.lead}>{page.data.intro}</p>
        </div>
        <div className={s.kiDataList}>
          {page.data.points.map((p, n) => (
            <article key={p.title} data-reveal style={i(n)}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
        <p className={s.kiDataNote} data-reveal>{page.data.note}</p>
      </section>

      {/* 5 · Who does what */}
      <section className={s.ipSection} aria-labelledby="tasks-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="tasks-title" className={s.h2}>{page.tasks.title}</h2>
          <p className={s.lead}>{page.tasks.intro}</p>
        </div>
        <table className={s.kiTable}>
          <thead>
            <tr><th scope="col">Aufgabe</th><th scope="col">Die KI</th><th scope="col">Der Mensch</th></tr>
          </thead>
          <tbody>
            {page.tasks.rows.map((r) => (
              <tr key={r.task}>
                <th scope="row">{r.task}</th>
                <td>{r.ai}</td>
                <td><span className={s.kiHuman}>{r.human}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
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
      <section className={`${s.ipSection} ${s.wpCatalog}`} aria-labelledby="what-title">
        <h2 id="what-title" className={s.h2} data-reveal>{page.catalogTitle}</h2>
        <Groups lang={lang} groups={x.groups} id={x.id} />
      </section>

      {/* 8 · How to work with us */}
      <FormatsBand lang={lang} />

      {/* 9 · First step */}
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
