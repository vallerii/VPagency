"use client";

import { useState } from "react";
import s from "./home.module.css";

// The hero widget of the WordPress page: a small block editor on the left,
// the page it produces on the right. Typing in a field changes the page at
// once, which is the whole argument of the page: your team edits content
// itself, and the design holds. Nothing is saved anywhere.
export function WpEditorDemo({ caption, title, text, button }: { caption: string; title: string; text: string; button: string }) {
  const [h, setH] = useState(title);
  const [p, setP] = useState(text);
  const [b, setB] = useState(button);
  const [dark, setDark] = useState(false);
  return (
    <figure className={s.wpDemo} data-ui>
      <div className={s.wpEditor}>
        <div className={s.wpEditorBar}><span>Block-Editor</span><small>Startseite</small></div>
        <label>
          <span>Überschrift</span>
          <input value={h} maxLength={60} onChange={(e) => setH(e.target.value)} />
        </label>
        <label>
          <span>Text</span>
          <textarea value={p} rows={2} maxLength={140} onChange={(e) => setP(e.target.value)} />
        </label>
        <label>
          <span>Button</span>
          <input value={b} maxLength={28} onChange={(e) => setB(e.target.value)} />
        </label>
        <div className={s.wpSwitch} role="group" aria-label="Hintergrund">
          <button type="button" aria-pressed={!dark} onClick={() => setDark(false)}>Hell</button>
          <button type="button" aria-pressed={dark} onClick={() => setDark(true)}>Dunkel</button>
        </div>
      </div>
      <div className={s.wpPreview} data-dark={dark ? "" : undefined} aria-live="polite">
        <div className={s.wpPreviewBar} aria-hidden><i /><i /><i /><span>ihre-firma.de</span></div>
        <div className={s.wpPreviewBody}>
          <strong>{h || "Ihre Überschrift"}</strong>
          <p>{p || "Ihr Text"}</p>
          <span className={s.wpPreviewBtn}>{b || "Button"}</span>
        </div>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
