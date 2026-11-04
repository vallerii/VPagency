import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
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
  const steps = page.promise.steps;
  return (
    <div className={s.svcPin} data-svc-pin data-step="1" data-hero={page.heroLayout}>
      <div className={s.pinScreen}>
        <div className={s.heroLayer}>
          <div className={s.svcHeroCopy}>
            {/* Inside the hero, not above it: anything stacked above the
                pinned screen pushes the moving track down the page until
                the screen sticks. */}
            <nav className={s.crumbs} aria-label="Breadcrumb">
              <Link href={href(lang, "")}>{t(pc.home, lang)}</Link>
              <span aria-hidden> / </span>
              <Link href={href(lang, "/leistungen")}>{t(pc.servicesHub.title, lang)}</Link>
              <span aria-hidden> / </span>
              <span aria-current="page">{t(sv.nav, lang)}</span>
            </nav>
            <h1 className={s.ipH1}>{t(sv.title, lang)}</h1>
            <p className={s.lead}>{t(sv.lead, lang)}</p>
            <div className={s.btns}>
              <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>{t(pc.cta, lang)}</a>
            </div>
          </div>
          <SymptomWall items={page.symptoms.items} label={page.symptoms.title} />
        </div>

        <div className={s.stepsLayer}>
          {/* The name of the step here, the sentence that explains it in
              the tinted card below. On a phone the card row is hidden and
              the sentence shows under the name instead. */}
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
          <ol className={s.promiseSteps} aria-hidden>
            {steps.map((p, n) => (
              <li key={p.title} style={i(n)}>{p.text}</li>
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
      <HeroStagePinned lang={lang} sv={sv} page={page} />

      <section className={`${s.ipSection} ${s.introSection}`}>
        {/* Word by word, so the opening paragraph reads as it appears */}
        <p className={s.intro} data-reveal>
          {page.intro.split(" ").map((w, n) => (
            <Fragment key={`${n}-${w}`}>
              <span style={{ "--w": n } as CSSProperties}>{w}</span>{" "}
            </Fragment>
          ))}
        </p>
        {/* A reader who already knows the platform, or who has an idea
            rather than a website, leaves here instead of reading on */}
        <ul className={`${s.exits} ${page.blockStyle === "plain" ? s.exitsPlain : ""}`}>
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

      {page.decision && (
        <section className={`${s.ipSection} ${s.splitSection}`} aria-labelledby="dec-title">
          <div className={s.deepHead} data-reveal>
            <h2 id="dec-title" className={s.h2}>{page.decision.title}</h2>
            <p className={s.lead}>{page.decision.intro}</p>
          </div>
          {/* Two columns against each other: the page's core question is a
              yes or no, and the layout should show that, not hide it in prose */}
          <div className={s.split}>
            {([page.decision.standard, page.decision.custom] as const).map((c, n) => (
              <article key={c.title} className={s.splitCol} data-kind={n === 1 ? "on" : "off"} data-reveal style={i(n)}>
                <h3>{c.title}</h3>
                <p className={s.splitLead}>{c.lead}</p>
                <ul>
                  {c.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className={s.splitNote} data-reveal>{page.decision.note}</p>
        </section>
      )}

      {page.deepDive && (
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
      )}

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

      <TechCards lang={lang} ids={sv.tech} title={t(pc.onTech, lang)} />

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

      <section className={s.ipSection} aria-labelledby="scope-title">
        <div className={s.scopeStage} data-scope-stage>
        <div className={s.scopeHead} data-scope-head>
          <h2 id="scope-title" className={s.h2}>{page.scope.title}</h2>
          <p className={s.lead}>{page.scope.lead}</p>
        </div>
        <ul className={`${s.scopeDeck} ${page.blockStyle === "plain" ? s.scopePlain : ""}`} data-scope-deck>
          <li className={`${s.scopeCol} ${s.scopeIn}`} style={i(0)}>
            <h3>{page.scope.included.title}</h3>
            <p className={s.scopeNote}>{page.scope.included.text}</p>
            <ul className={s.scopeItems}>{page.scope.included.items.map((x) => <li key={x}>{x}</li>)}</ul>
          </li>
          <li className={`${s.scopeCol} ${s.scopeOut}`} style={i(1)}>
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
        </div>
      </section>

      <section className={s.ipSection} aria-labelledby="proc-title">
        <div className={s.deepHead} data-reveal>
          <h2 id="proc-title" className={s.h2}>{page.process.title}</h2>
          <p className={s.lead}>{page.process.lead}</p>
        </div>
        {/* Two layouts: the zigzag, and a single line with a visible point
            at which the client decides whether the build starts at all */}
        <ol className={page.process.layout === "timeline" ? s.timeline : s.phases}>
          {page.process.phases.map((p, n) => (
            <li key={p.title} data-reveal style={i(n)}>
              <span className={s.phaseNum} aria-hidden>{n + 1}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {p.note && <small>{p.note}</small>}
                {/* The point at which the client decides whether the build
                    starts, marked on the phase it follows */}
                {page.process.decideAfter === n + 1 && (
                  <span className={s.decideInline}>
                    <span className={s.decideMark} aria-hidden>◆</span>
                    {page.process.decideLabel}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {page.trust && (
        <section className={s.trustStrip} aria-labelledby="trust-title" data-reveal>
          <h2 id="trust-title">{page.trust.title}</h2>
          <p>{page.trust.text}</p>
        </section>
      )}

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
