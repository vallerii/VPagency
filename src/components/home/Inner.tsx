import Link from "next/link";
import type { CSSProperties } from "react";
import type { Lang } from "@/content/home";
import {
  services, techs, formats, pageCopy as pc, href, t, itemName, itemText,
  getTech, getService, type Service, type Tech,
} from "@/content/catalog";
import { BrandLogo, hasLogo } from "./BrandLogo";
import s from "./home.module.css";

const i = (n: number) => ({ "--i": n }) as CSSProperties;
const WIDE: Record<string, number> = { WooCommerce: 104, SAP: 64 };

function Marks({ brands, size = 30 }: { brands: string[]; size?: number }) {
  return (
    <div className={s.bMarks}>
      {brands.map((b) => (
        <span key={b} className={WIDE[b] ? s.bMarkWide : undefined} title={b === "auto" ? undefined : b}>
          <BrandLogo name={b} size={WIDE[b] ?? size} />
        </span>
      ))}
    </div>
  );
}

function Crumbs({ lang, trail }: { lang: Lang; trail: { label: string; path?: string }[] }) {
  return (
    <nav className={s.crumbs} aria-label="Breadcrumb">
      <Link href={href(lang, "")}>{t(pc.home, lang)}</Link>
      {trail.map((c) => (
        <span key={c.label}>
          <span aria-hidden> / </span>
          {c.path ? <Link href={href(lang, c.path)}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
        </span>
      ))}
    </nav>
  );
}

/* Groups of catalog items: title on the left, items on the right */
function Groups({ lang, groups, id }: { lang: Lang; groups: Service["groups"]; id: string }) {
  return (
    <div className={s.grpList}>
      {groups.map((g, n) => (
        <div key={`${id}-${n}`} className={s.grpRow} data-reveal style={i(n % 3)}>
          <h3 className={s.grpTitle}>{t(g.title, lang)}</h3>
          <ul className={s.itemGrid}>
            {g.ids.map((it) => (
              <li key={it} className={s.itemBox}>
                <b>{itemName(it, lang)}</b>
                <span>{itemText(it, lang)}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Formats({ lang }: { lang: Lang }) {
  return (
    <section className={s.ipSection} aria-labelledby="formats-title">
      <h2 id="formats-title" className={s.h2} data-reveal>{t(formats.title, lang)}</h2>
      <ol className={s.formatGrid}>
        {formats.items.map((f, n) => (
          <li key={f.title.de} data-reveal style={i(n)}>
            <span className={s.wegNo}>{n + 1}</span>
            <b>{t(f.title, lang)}</b>
            <span>{t(f.text, lang)}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function TechCards({ lang, ids, title }: { lang: Lang; ids: string[]; title: string }) {
  const list = ids.map(getTech).filter(Boolean) as Tech[];
  if (!list.length) return null;
  return (
    <section className={s.ipSection} aria-label={title}>
      <h2 className={s.h2} data-reveal>{title}</h2>
      <ul className={s.linkCards}>
        {list.map((x, n) => (
          <li key={x.id} data-reveal style={i(n)}>
            <Link href={href(lang, `/technologien/${x.id}`)} className={s.linkCard}>
              <Marks brands={x.brands.slice(0, 2)} size={26} />
              <b>{t(x.title, lang)}</b>
              <span>{t(x.lead, lang)}</span>
              <span className={s.doorMore}>{t(pc.more, lang)}<span className={s.doorArrow} aria-hidden>→</span></span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ServiceCards({ lang, ids, title }: { lang: Lang; ids: string[]; title: string }) {
  const list = ids.map(getService).filter(Boolean) as Service[];
  return (
    <section className={s.ipSection} aria-label={title}>
      <h2 className={s.h2} data-reveal>{title}</h2>
      <ul className={s.linkCards}>
        {list.map((sv, n) => (
          <li key={sv.id} data-reveal style={i(n)}>
            <Link href={href(lang, `/leistungen/${sv.id}`)} className={s.linkCard}>
              <b>{t(sv.nav, lang)}</b>
              <span>{t(sv.title, lang)}</span>
              <span className={s.doorMore}>{t(pc.more, lang)}<span className={s.doorArrow} aria-hidden>→</span></span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* Service page: business language, for people who come with a problem or an idea */
export function ServicePage({ lang, sv }: { lang: Lang; sv: Service }) {
  return (
    <>
      <section className={s.ipHero}>
        <div className={s.ipHeroCopy}>
          <Crumbs lang={lang} trail={[{ label: t(pc.servicesHub.title, lang), path: "/leistungen" }, { label: t(sv.nav, lang) }]} />
          <h1 className={s.ipH1}>{t(sv.title, lang)}</h1>
          <p className={s.lead}>{t(sv.lead, lang)}</p>
          <div className={s.btns}>
            <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>{t(pc.cta, lang)}<span className={s.arr} aria-hidden>↗</span></a>
          </div>
        </div>
        <div className={s.sitCard}>
          <small>{t(pc.recognize, lang)}</small>
          <ul>
            {sv.situations.map((x) => <li key={x.de}><span className={s.kiCheck} aria-hidden>✓</span>{t(x, lang)}</li>)}
          </ul>
          <p>{t(sv.result, lang)}</p>
        </div>
      </section>
      <section className={s.ipSection} aria-labelledby="what-title">
        <h2 id="what-title" className={s.h2} data-reveal>{t(pc.whatWeDo, lang)}</h2>
        <Groups lang={lang} groups={sv.groups} id={sv.id} />
        <p className={s.notListedLine} data-reveal>{t(pc.notListed, lang)}</p>
      </section>
      <TechCards lang={lang} ids={sv.tech} title={t(pc.onTech, lang)} />
      <Formats lang={lang} />
    </>
  );
}

/* Technology page: technical language, for people who come with a specification */
export function TechPage({ lang, x }: { lang: Lang; x: Tech }) {
  return (
    <>
      <section className={s.ipHero}>
        <div className={s.ipHeroCopy}>
          <Crumbs lang={lang} trail={[{ label: t(pc.techHub.title, lang), path: "/technologien" }, { label: t(x.nav, lang) }]} />
          <Marks brands={x.brands} size={34} />
          <h1 className={s.ipH1}>{t(x.title, lang)}</h1>
          <p className={s.lead}>{t(x.lead, lang)}</p>
          <div className={s.btns}>
            <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>{t(pc.specCta, lang)}<span className={s.arr} aria-hidden>↗</span></a>
            <a href="#anfrage" className={`${s.pill} ${s.pillLine}`}>{t(pc.cta, lang)}<span className={s.arr} aria-hidden>↗</span></a>
          </div>
        </div>
        <div className={s.sitCard}>
          <small>{t(pc.specTitle, lang)}</small>
          <ol className={s.specSteps}>
            {pc.specSteps.map((st, n) => (
              <li key={st.title.de}><span className={s.wegNo}>{n + 1}</span><div><b>{t(st.title, lang)}</b><span>{t(st.text, lang)}</span></div></li>
            ))}
          </ol>
        </div>
      </section>

      {x.migrations && (
        <section className={`${s.ipSection} ${s.migr}`} aria-labelledby="migr-title">
          <div>
            <h2 id="migr-title" className={s.h2} data-reveal>{t(pc.migrationsTitle, lang)}</h2>
            <p className={s.body}>{t(pc.migrationsLead, lang)}</p>
          </div>
          <div className={s.migrRow} data-reveal>
            {x.migrations.map((m) => (
              <span key={m} className={s.migrFrom}>{hasLogo(m) && !WIDE[m] && <BrandLogo name={m} size={20} />}{m}</span>
            ))}
            <span className={s.migrArrow} aria-hidden>→</span>
            <span className={`${s.migrFrom} ${s.migrTo}`}><BrandLogo name="Shopify" size={20} />Shopify</span>
          </div>
        </section>
      )}

      <section className={s.ipSection} aria-labelledby="tasks-title">
        <h2 id="tasks-title" className={s.h2} data-reveal>{t(pc.whatWeDo, lang)}</h2>
        <Groups lang={lang} groups={x.groups} id={x.id} />
      </section>

      {x.systems && (
        <section className={s.ipSection} aria-labelledby="sys-title">
          <h2 id="sys-title" className={s.h2} data-reveal>{t(pc.systemsTitle, lang)}</h2>
          <div className={s.sysGroups}>
            {x.systems.map((g) => (
              <div key={g.title.de} data-reveal>
                <small>{t(g.title, lang)}</small>
                <ul>{g.items.map((it) => <li key={it}>{hasLogo(it) && <BrandLogo name={it} size={16} />}{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {x.tools && (
        <section className={s.ipSection} aria-labelledby="tools-title">
          <h2 id="tools-title" className={s.h2} data-reveal>{t(pc.toolsTitle, lang)}</h2>
          <ul className={s.toolChips}>
            {x.tools.map((it) => <li key={it}>{hasLogo(it) && <BrandLogo name={it} size={22} />}{it}</li>)}
          </ul>
        </section>
      )}

      <ServiceCards lang={lang} ids={x.services} title={t(pc.servicesOnTech, lang)} />
    </>
  );
}

/* Hubs */
export function ServicesHub({ lang }: { lang: Lang }) {
  return (
    <>
      <section className={`${s.ipHero} ${s.ipHeroSolo}`}>
        <div className={s.ipHeroCopy}>
          <Crumbs lang={lang} trail={[{ label: t(pc.servicesHub.title, lang) }]} />
          <h1 className={s.ipH1}>{t(pc.servicesHub.title, lang)}</h1>
          <p className={s.lead}>{t(pc.servicesHub.lead, lang)}</p>
        </div>
      </section>
      <section className={s.ipSection} aria-label={t(pc.servicesHub.title, lang)}>
        <ul className={s.serviceList}>
          {services.map((sv, n) => (
            <li key={sv.id} data-reveal style={i(n % 3)}>
              <Link href={href(lang, `/leistungen/${sv.id}`)} className={s.serviceRow}>
                <span className={s.serviceTitle}>{t(sv.nav, lang)}</span>
                <span className={s.serviceText}>{t(sv.title, lang)}</span>
                <span className={s.serviceTags}>{sv.tech.map((x) => <span key={x}>{t(getTech(x)!.nav, lang)}</span>)}</span>
                <span className={s.doorArrow} aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export function TechHub({ lang }: { lang: Lang }) {
  return (
    <>
      <section className={`${s.ipHero} ${s.ipHeroSolo}`}>
        <div className={s.ipHeroCopy}>
          <Crumbs lang={lang} trail={[{ label: t(pc.techHub.title, lang) }]} />
          <h1 className={s.ipH1}>{t(pc.techHub.title, lang)}</h1>
          <p className={s.lead}>{t(pc.techHub.lead, lang)}</p>
        </div>
      </section>
      <section className={s.ipSection} aria-label={t(pc.techHub.title, lang)}>
        <ul className={s.linkCards}>
          {techs.map((x, n) => (
            <li key={x.id} data-reveal style={i(n % 3)}>
              <Link href={href(lang, `/technologien/${x.id}`)} className={s.linkCard}>
                <Marks brands={x.id === "schnittstellen" ? ["SAP", "DATEV"] : x.brands} size={26} />
                <b>{t(x.title, lang)}</b>
                <span>{t(x.lead, lang)}</span>
                <span className={s.doorMore}>{t(pc.more, lang)}<span className={s.doorArrow} aria-hidden>→</span></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

