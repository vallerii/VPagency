import Link from "next/link";
import { home, type Door, type Lang, type ToolCard } from "@/content/home";
import { DoorArt } from "./DoorArt";
import { BrandLogo } from "./BrandLogo";
import { tone } from "./tone";
import { SiteHeader } from "./Site";
import { href } from "@/content/catalog";
import s from "./home.module.css";

const tint: Record<string, string> = {
  anfragen: s.mist, shop: s.clay, excel: s.sand, idee: s.warm, dienstleister: s.warm, systeme: s.sage, ki: s.mist,
};
// Tile heights vary so the two columns never line up (in units of tile width).
const ratio: Record<string, number> = {
  excel: 1.15, anfragen: 1.32, idee: 1.15, shop: 1.2, dienstleister: 1.25, systeme: 1.45, ki: 1.5,
  wp: 1.1, shopify: 1.25, laravel: 1.1, auto: 1.2,
};

function Tile({ door, lang }: { door: Door; lang: Lang }) {
  return (
    <Link href={href(lang, door.href)} className={`${s.tile} ${tint[door.id]}`} style={{ aspectRatio: `1 / ${ratio[door.id]}` }} tabIndex={-1}>
      <div className={s.tileArt}><DoorArt art={door.art} lang={lang} /></div>
      <span className={s.tileCap}>{door.title}</span>
    </Link>
  );
}

function ToolTile({ tool, lang }: { tool: ToolCard; lang: Lang }) {
  const many = tool.brands.length > 1;
  return (
    <Link href={href(lang, `/technologien/${tool.tech}`)} tabIndex={-1} className={`${s.tile} ${s.toolTile} ${s.techTint} ${tone(tool.tech)}`} style={{ aspectRatio: `1 / ${ratio[tool.id] ?? 1.35}` }}>
      <div className={many ? s.toolMarks : s.toolMark}>
        {tool.brands.map((b) => (
          <span key={b} title={b}><BrandLogo name={b} size={many ? 26 : 44} /></span>
        ))}
      </div>
      <span className={s.tileCap}>{tool.title}<small className={s.toolSub}>{tool.text}</small></span>
    </Link>
  );
}

function Track({ children, count, reverse }: { children: React.ReactNode[]; count: number; reverse?: boolean }) {
  // Items are rendered twice so the slow loop has no visible seam.
  return (
    <div className={`${s.col} ${reverse ? s.colReverse : ""}`}>
      <div className={s.colTrack}>
        {[...children, ...children].map((c, i) => (
          <div key={i} aria-hidden={i >= count || undefined}>{c}</div>
        ))}
      </div>
    </div>
  );
}

export function Hero({ lang }: { lang: Lang }) {
  const c = home[lang];
  return (
    <section className={s.hero}>
      <SiteHeader lang={lang} floating />
      <div className={s.heroCopy}>
        <h1 className={s.h1}>{c.hero.title}</h1>
        <p className={s.lead}>{c.hero.lead}</p>
        <div className={s.btns}>
          <a href="#anfrage" className={`${s.pill} ${s.pillDark}`}>{c.hero.cta}<span className={s.arr} aria-hidden>↗</span></a>
        </div>
        <ol className={s.progress}>
          {c.hero.progress.map((p, n) => (
            <li key={p.title}>
              <span className={s.progressDot}>{n + 1}</span>
              <b>{p.title}</b>
              <small>{p.text}</small>
            </li>
          ))}
        </ol>
      </div>
      <div className={s.wall} role="region" aria-label={c.hero.wallLabel}>
        <Track count={c.wall.length}>{c.wall.map((d) => <Tile key={d.id} door={d} lang={lang} />)}</Track>
        <div role="group" aria-label={c.hero.toolsLabel} className={s.toolCol}>
          <Track count={c.tools.length} reverse>{c.tools.map((t) => <ToolTile key={t.id} tool={t} lang={lang} />)}</Track>
        </div>
        <div className={`${s.chip} ${s.chip1}`}>
          <b>{c.hero.team.value}</b><small>{c.hero.team.label}</small>
        </div>
        <span className={`${s.fade} ${s.fadeTop}`} aria-hidden />
        <span className={`${s.fade} ${s.fadeBottom}`} aria-hidden />
      </div>
    </section>
  );
}
