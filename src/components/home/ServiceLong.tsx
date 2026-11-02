import Link from "next/link";
import type { CSSProperties } from "react";
import { home, type Lang } from "@/content/home";
import { pageCopy as pc, formats, href, t, type Service } from "@/content/catalog";
import { cases } from "@/content/cases";
import type { ServicePageContent } from "@/content/service-pages";
import { Groups, TechCards } from "./Inner";
import { ServiceStage } from "./ServiceStage";
import s from "./home.module.css";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

/* The symptoms ride a slow track beside the hero, the same way the home
   page moves its wall of situations. The tints are the home pastels, not
   the technology colours: these tiles are about the visitor's situation,
   and a technology colour here would promise a platform we have not
   discussed yet. */
const PASTEL = [s.mist, s.sage, s.sand, s.clay, s.warm];

function SymptomWall({ items, label }: { items: string[]; label: string }) {
  const tiles = items.map((text, n) => (
    <span key={text.slice(0, 20)} className={`${s.symTile} ${PASTEL[n % PASTEL.length]}`}>{text}</span>
  ));
  return (
    <div className={s.symWall} role="region" aria-label={label}>
      <div className={s.col}>
        <div className={s.colTrack}>
          {[...tiles, ...tiles].map((tile, n) => (
            <div key={n} aria-hidden={n >= items.length || undefined}>{tile}</div>
          ))}
        </div>
      </div>
      <span className={`${s.fade} ${s.fadeTop}`} aria-hidden />
      <span className={`${s.fade} ${s.fadeBottom}`} aria-hidden />
    </div>
  );
}

/* The hero is pinned for a screen and a half. It starts the way it stood
   before: headline, lead, button, the small row of steps underneath, and
   the situations riding their track on the right.
   
   As the visitor scrolls, the headline layer fades away, the steps row
   slides to the middle of the screen and grows, and the block about what
   happens after a message slides in beside it. Both are then on screen
   together, and the three steps light up one after the other.
   
   Only opacity, transform, top and right are animated, so the whole thing
   is cheap. ServiceStage sets data-settled and data-step; the motion
   itself is CSS, exactly like the pinned hero on the home page. */
function HeroStagePinned({
  lang, sv, page,
}: { lang: Lang; sv: Service; page: ServicePageContent }) {
  const steps = home[lang].hero.progress;
  return (
    <div className={s.svcPin} data-svc-pin data-step="1">
      <div className={s.pinScreen}>
        <div className={s.heroLayer}>
          <div className={s.svcHeroCopy}>
            <h1 className={s.ipH1}>{t(sv.title, lang)}</h1>
            <p className={s.lead}>{t(sv.lead, lang)}</p>
            <div className={s.btns}>
              <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>{t(pc.cta, lang)}</a>
            </div>
          </div>
          <SymptomWall items={page.symptoms.items} label={page.symptoms.title} />
        </div>

        <div className={s.stepsLayer}>
          <ol className={s.progress} aria-label="So arbeiten wir">
            {steps.map((p, n) => (
              <li key={p.title} style={i(n)}>
                <span className={s.progressDot}>{n + 1}</span>
                <b>{p.title}</b>
                <small>{p.text}</small>
              </li>
            ))}
          </ol>
        </div>

        <div className={s.promiseLayer}>
          <h2 className={s.h3}>{page.promise.title}</h2>
          <ol className={s.promiseSteps}>
            {page.promise.steps.map((txt, n) => (
              <li key={txt.slice(0, 20)}>
                <span className={s.promiseNum}>{n + 1}</span>
                <span>{txt}</span>
              </li>
            ))}
          </ol>
          <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>
            {page.promise.cta}
            <span className={s.arr} aria-hidden>→</span>
          </a>
        </div>

        <ServiceStage />
      </div>
    </div>
  );
}

/* The long service page. The short one (ServicePage in Inner.tsx) answers
   "what do you do"; this one answers the questions a visitor actually
   arrives with, in the order they ask them: is this my problem, what does
   it take, what is included, how does it run, what changes, what drives
   the price, and the six things they would otherwise have to ask. */
export function ServicePageLong({ lang, sv, page }: { lang: Lang; sv: Service; page: ServicePageContent }) {
  const projects = cases.filter((c) => c.service === sv.id).slice(0, 3);
  return (
    <>
      <nav className={`${s.crumbs} ${s.crumbsBar}`} aria-label="Breadcrumb">
        <Link href={href(lang, "")}>{t(pc.home, lang)}</Link>
        <span aria-hidden> / </span>
        <Link href={href(lang, "/leistungen")}>{t(pc.servicesHub.title, lang)}</Link>
        <span aria-hidden> / </span>
        <span aria-current="page">{t(sv.nav, lang)}</span>
      </nav>

      <HeroStagePinned lang={lang} sv={sv} page={page} />

      <section className={s.ipSection}>
        <p className={s.intro} data-reveal>{page.intro}</p>
      </section>

      <section className={`${s.ipSection} ${s.deep}`} aria-labelledby="deep-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="deep-title" className={s.h2}>{page.deepDive.title}</h2>
          <p className={s.lead}>{page.deepDive.intro}</p>
        </div>
        <div className={s.deepBlocks}>
          {page.deepDive.blocks.map((b, n) => (
            <article key={b.heading} className={s.deepBlock} data-reveal style={i(n % 3)}>
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

      <section className={s.ipSection} aria-labelledby="what-title">
        <h2 id="what-title" className={s.h2} data-reveal>{t(pc.whatWeDo, lang)}</h2>
        <Groups lang={lang} groups={sv.groups} id={sv.id} />
        <div className={s.notListed} data-reveal>
          <span>{t(pc.notListed, lang)}</span>
          <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>
            {t(pc.cta, lang)}
            <span className={s.arr} aria-hidden>→</span>
          </a>
        </div>
      </section>

      <section className={s.ipSection} aria-labelledby="scope-title">
        {/* Sticky, so the section heading and its line stay readable while
            the cards below stack up under them. */}
        <div className={s.scopeHead}>
          <h2 id="scope-title" className={s.h2}>{page.scope.title}</h2>
          <p className={s.lead}>{page.scope.lead}</p>
        </div>
        <ul className={s.scopeDeck}>
          <li className={`${s.scopeCol} ${s.scopeIn}`} style={i(0)}>
            <h3>{page.scope.included.title}</h3>
            <p className={s.scopeNote}>{page.scope.included.text}</p>
            <ul className={s.scopeItems}>{page.scope.included.items.map((x) => <li key={x}>{x}</li>)}</ul>
          </li>
          <li className={s.scopeCol} style={i(1)}>
            <h3>{page.scope.addon.title}</h3>
            <p className={s.scopeNote}>{page.scope.addon.text}</p>
            <ul className={s.scopeItems}>{page.scope.addon.items.map((x) => <li key={x}>{x}</li>)}</ul>
          </li>
          <li className={`${s.scopeCol} ${s.scopeOut}`} style={i(2)}>
            <h3>{page.scope.outOfScope.title}</h3>
            <p className={s.scopeNote}>{page.scope.outOfScope.text}</p>
            <ul className={s.scopeItems}>
              {page.scope.outOfScope.items.map((x) => (
                <li key={x.text}>
                  {x.text}
                  <Link href={href(lang, x.href)}>{x.label} →</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </section>

      <section className={s.ipSection} aria-labelledby="proc-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="proc-title" className={s.h2}>{page.process.title}</h2>
          <p className={s.lead}>{page.process.lead}</p>
        </div>
        <ol className={s.phases}>
          {page.process.phases.map((p, n) => (
            <li key={p.title} data-reveal style={i(n % 3)}>
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

      <section className={s.ipSection} aria-labelledby="chg-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="chg-title" className={s.h2}>{page.change.title}</h2>
          <p className={s.lead}>{page.change.lead}</p>
        </div>
        <ul className={s.baList}>
          {page.change.rows.map((r, n) => (
            <li key={r.before} data-reveal style={i(n % 3)}>
              <span className={s.baBefore}>{r.before}</span>
              <span className={s.baArrow} aria-hidden>→</span>
              <span className={s.baAfter}>{r.after}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={s.ipSection} aria-labelledby="fmt-title">
        <h2 id="fmt-title" className={s.h2} data-reveal>{t(formats.title, lang)}</h2>
        <ul className={s.linkCards}>
          {formats.items.map((f, n) => (
            <li key={f.title.de} data-reveal style={i(n)}>
              <div className={s.linkCard}>
                <b>{t(f.title, lang)}</b>
                <span>{t(f.text, lang)}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className={s.ipSection} aria-labelledby="price-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="price-title" className={s.h2}>{page.price.title}</h2>
          <p className={s.lead}>{page.price.lead}</p>
        </div>
        <div className={s.priceGrid}>
          {page.price.drivers.map((d, n) => (
            <div key={d.title} className={s.priceCard} data-reveal style={i(n % 3)}>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
        <p className={s.priceNote} data-reveal>{page.price.note}</p>
      </section>

      {projects.length > 0 && (
        <section className={s.ipSection} aria-labelledby="proj-title">
          <h2 id="proj-title" className={s.h2} data-reveal>Passende Projekte</h2>
          {/* The same chessboard rows as on the projects page, one per
              line and with the same parallax window, only in a smaller
              format. A three-up card grid is not a pattern this site uses
              for projects. */}
          <ul className={`${s.caseList} ${s.caseListSm}`}>
            {projects.map((c, n) => (
              <li key={c.slug} className={`${s.caseRow} ${n % 2 === 1 ? s.caseRowFlip : ""}`}>
                <Link href={`/projekte/${c.slug}`} className={s.caseShot} aria-label={c.name}>
                  <img src={c.image} alt={`${c.name}: ${c.tag}`} loading="lazy" />
                </Link>
                <div className={s.caseBody} data-reveal style={i(0)}>
                  <span className={s.caseMeta}>
                    <span>{c.tag}</span>
                    <span aria-hidden>·</span>
                    <span>{c.year}</span>
                  </span>
                  <h3 className={s.caseName}>{c.name}</h3>
                  <p className={s.caseLead}>{c.lead}</p>
                  <Link href={`/projekte/${c.slug}`} className={s.doorMore}>
                    Projekt ansehen
                    <span className={s.doorArrow} aria-hidden>→</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      <TechCards lang={lang} ids={sv.tech} title={t(pc.onTech, lang)} />

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

    </>
  );
}
