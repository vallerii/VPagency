"use client";

import { useState } from "react";
import type { TechPageContent } from "@/content/tech-pages";
import { BrandLogo, hasLogo } from "./BrandLogo";
import s from "./home.module.css";

// One platform at a time instead of a table: the visitor picks where the
// shop runs today and reads only what applies to them. All panels stay in
// the markup (hidden, not removed), so search engines and AI assistants
// read every platform.
export function MigrationTabs({ m }: { m: NonNullable<TechPageContent["migration"]> }) {
  const [on, setOn] = useState(0);
  return (
    <div className={s.mtabs}>
      <div className={s.mtabList} role="tablist" aria-label="Von welcher Plattform">
        {m.platforms.map((p, n) => (
          <button
            key={p.from} type="button" role="tab" id={`mt-${n}`} aria-controls={`mp-${n}`}
            aria-selected={on === n} tabIndex={on === n ? 0 : -1}
            onClick={() => setOn(n)}
            onKeyDown={(e) => {
              if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
              const next = (on + (e.key === "ArrowRight" ? 1 : -1) + m.platforms.length) % m.platforms.length;
              setOn(next);
              document.getElementById(`mt-${next}`)?.focus();
            }}
          >
            {hasLogo(p.from) && <BrandLogo name={p.from} size={18} />}
            {p.from}
            <span className={s.mtabTo} aria-hidden>→ Shopify</span>
          </button>
        ))}
      </div>
      {m.platforms.map((p, n) => (
        <div key={p.from} role="tabpanel" id={`mp-${n}`} aria-labelledby={`mt-${n}`} hidden={on !== n} className={s.mpanel}>
          <div className={s.mpanelMain}>
            <h3>Von {p.from} zu Shopify</h3>
            <p className={s.lead}>{p.lead}</p>
            <ol className={s.mwatch}>
              {p.watch.map((w, k) => (
                <li key={w} style={{ ["--i" as string]: k }}>
                  <span aria-hidden>{String(k + 1).padStart(2, "0")}</span>
                  {w}
                </li>
              ))}
            </ol>
          </div>
          <aside className={s.malways}>
            <b>{m.always.title}</b>
            <ul>{m.always.items.map((it) => <li key={it}>{it}</li>)}</ul>
          </aside>
        </div>
      ))}
    </div>
  );
}
