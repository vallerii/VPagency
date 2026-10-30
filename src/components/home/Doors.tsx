import Link from "next/link";
import type { CSSProperties } from "react";
import type { Lang } from "@/content/home";
import { more } from "@/content/home-more";
import { href } from "@/content/catalog";
import { toneOf } from "./tone";
import s from "./home.module.css";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

/* 2 · What we do: a compact list, one row per direction, with its tools */
export function Services({ lang }: { lang: Lang }) {
  const c = more[lang].services;
  return (
    <section id="leistungen" className={s.services} aria-labelledby="services-title">
      <div className={s.servicesHead}>
        <h2 id="services-title" className={s.h2} data-reveal style={i(1)}>{c.title}</h2>
      </div>
      <ul className={s.serviceList}>
        {c.items.map((it, n) => (
          <li key={it.title} data-reveal style={i(n)}>
            <Link href={href(lang, it.href)} className={s.serviceRow}>
              <span className={s.serviceTitle}>{it.title}</span>
              <span className={s.serviceText}>{it.text}</span>
              <span className={s.serviceTags}>{it.tags.map((t) => <span key={t} className={toneOf(t) ? `${s.tagDot} ${toneOf(t)}` : undefined}>{t}</span>)}</span>
              <span className={s.doorArrow} aria-hidden>→</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
