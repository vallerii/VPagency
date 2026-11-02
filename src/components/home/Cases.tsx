import Link from "next/link";
import type { CSSProperties } from "react";
import { cases, casesCopy, getCase, type Case } from "@/content/cases";
import { getService, t, href, pageCopy as pc } from "@/content/catalog";
import type { Lang } from "@/content/home";
import s from "./home.module.css";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

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

/* One row of the overview: screenshot and text side by side, sides swapping
   every second row. The screenshot is a window onto a fixed image, the same
   effect the home page uses for its project panels, so the picture holds
   still while the row scrolls past it. On phones the grid collapses to one
   column and the picture always comes first, which is the DOM order. */
function CaseRow({ c, n }: { c: Case; n: number }) {
  const to = `/projekte/${c.slug}`;
  return (
    <li className={`${s.caseRow} ${n % 2 === 1 ? s.caseRowFlip : ""}`}>
      <Link href={to} className={s.caseShot} aria-label={c.name}>
        <img src={c.image} alt={`${c.name}: ${c.tag}`} loading={n < 2 ? "eager" : "lazy"} />
        {c.badge && <span className={s.caseBadge}>{c.badge}</span>}
      </Link>
      <div className={s.caseBody} data-reveal style={i(0)}>
        <span className={s.caseMeta}>
          <span>{c.tag}</span>
          <span aria-hidden>·</span>
          <span>{c.year}</span>
        </span>
        <h2 className={s.caseName}>{c.name}</h2>
        <p className={s.caseLead}>{c.lead}</p>
        {c.story.map((p) => (
          <p key={p.slice(0, 24)} className={s.caseText}>{p}</p>
        ))}
        <span className={s.caseTags}>
          {c.stack.map((x) => <span key={x}>{x}</span>)}
        </span>
        <Link href={to} className={s.doorMore}>
          {casesCopy.open}
          <span className={s.doorArrow} aria-hidden>→</span>
        </Link>
      </div>
    </li>
  );
}

export function CasesHub({ lang }: { lang: Lang }) {
  return (
    <>
      <Crumbs lang={lang} trail={[{ label: casesCopy.title }]} />
      <section className={`${s.ipHero} ${s.ipHeroSolo}`}>
        <div className={s.ipHeroCopy}>
          <h1 className={s.ipH1}>{casesCopy.title}</h1>
          <p className={s.lead}>{casesCopy.lead}</p>
        </div>
      </section>
      <ul className={s.caseList}>
        {cases.map((c, n) => <CaseRow key={c.slug} c={c} n={n} />)}
      </ul>
    </>
  );
}

export function CaseDetail({ lang, c }: { lang: Lang; c: Case }) {
  const sv = getService(c.service);
  const others = cases.filter((x) => x.slug !== c.slug).slice(0, 3);
  const blocks: [string, string][] = [
    [casesCopy.problem, c.problem],
    [casesCopy.solution, c.solution],
    [casesCopy.result, c.result],
  ];
  return (
    <article>
      <Crumbs lang={lang} trail={[{ label: casesCopy.title, path: "/projekte" }, { label: c.name }]} />
      <section className={`${s.ipHero} ${s.ipHeroSolo}`}>
        <div className={s.ipHeroCopy}>
          <span className={s.caseMeta}>
            <span>{c.tag}</span>
            <span aria-hidden>·</span>
            <span>{c.year}</span>
          </span>
          <h1 className={s.ipH1}>{c.name}</h1>
          <p className={s.lead}>{c.lead}</p>
          <span className={s.caseTags}>
            {c.stack.map((x) => <span key={x}>{x}</span>)}
          </span>
        </div>
      </section>

      <div className={s.caseHeroShot}>
        <img src={c.image} alt={`${c.name}: ${c.tag}`} />
      </div>

      <section className={s.ipSection}>
        <div className={s.caseCols}>
          {blocks.map(([title, text], n) => (
            <div key={title} className={s.caseBlock} data-reveal style={i(n)}>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className={s.caseStory} data-reveal>
          {c.story.map((p) => <p key={p.slice(0, 24)} className={s.body}>{p}</p>)}
          <a href={c.url} target="_blank" rel="noopener noreferrer" className={`${s.pill} ${s.pillDark}`}>
            {casesCopy.visit}
            <span className={s.arr} aria-hidden>↗</span>
          </a>
        </div>
      </section>

      <section className={s.ipSection} aria-label={casesCopy.related}>
        <h2 className={s.h2} data-reveal>{casesCopy.related}</h2>
        <ul className={s.linkCards}>
          {others.map((x, n) => (
            <li key={x.slug} data-reveal style={i(n)}>
              <Link href={`/projekte/${x.slug}`} className={s.linkCard}>
                <b>{x.name}</b>
                <span>{x.lead}</span>
                <span className={s.doorMore}>
                  {casesCopy.open}
                  <span className={s.doorArrow} aria-hidden>→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {sv && (
          <p className={s.caseService}>
            {casesCopy.service}:{" "}
            <Link href={href(lang, `/leistungen/${sv.id}`)}>{t(sv.nav, lang)}</Link>
          </p>
        )}
      </section>
    </article>
  );
}

export { getCase };
