import type { DoorArt as Art, Lang } from "@/content/home";
import s from "./home.module.css";

// Small drawn objects that stand in for photographs: each one is the thing a
// visitor recognises from their own working day (a table, a form, a chat).
const t = {
  de: { anfrage: "Anfrage", schritt: "Schritt 1 von 6", korb: "Warenkorb", kasse: "Kasse", ab: "abgebrochen", frage: "Wann ist es fertig?", seen: "ungelesen · 3 Wochen", alt: "alter Shop", neu: "neu", lager: "Lager", buch: "Buchhaltung", zeit: "spart Zeit?", idee: "Idee", v1: "Version 1", start: "Start" },
  ru: { anfrage: "Запрос", schritt: "Шаг 1 из 6", korb: "Корзина", kasse: "Оплата", ab: "ушёл", frage: "Когда будет готово?", seen: "не прочитано · 3 недели", alt: "старый магазин", neu: "новый", lager: "склад", buch: "учёт", zeit: "экономит время?", idee: "Идея", v1: "Версия 1", start: "Запуск" },
};

export function DoorArt({ art, lang }: { art: Art; lang: Lang }) {
  const l = t[lang];
  switch (art) {
    case "form":
      return (
        <div className={s.mini}>
          <div className={s.miniRow}><span>{l.anfrage}</span><span>✕</span></div>
          <div className={s.field} />
          <div className={s.field} />
          <div className={`${s.field} ${s.fieldShort}`} />
          <div className={s.miniRow}><span>{l.schritt}</span><span>…</span></div>
        </div>
      );
    case "cart":
      return (
        <div className={s.mini}>
          <div className={s.miniRow}><span>{l.korb}</span><span>3</span></div>
          <div className={s.bar}><i style={{ width: "72%" }} /></div>
          <div className={s.miniRow}><span>{l.kasse}</span><span className={s.warn}>{l.ab}</span></div>
        </div>
      );
    case "sheet":
      return (
        <div className={s.sheet}>
          {["Auftrag", "Kunde", "Status", "Wer?"].map((h) => <span key={h} className={s.sheetHead}>{h}</span>)}
          <span>4711</span><span>Müller</span><span>offen</span><span>Chef</span>
          <span>4712</span><span>Kraus</span><span className={s.sheetBad}>??</span><span>Chef</span>
          <span>4713</span><span>Ebert</span><span>offen</span><span>Chef</span>
        </div>
      );
    case "chat":
      return (
        <div className={s.stack}>
          <div className={s.bubble}>{l.frage}</div>
          <div className={s.seen}>{l.seen}</div>
        </div>
      );
    case "move":
      return (
        <div className={s.stack}>
          <div className={s.tagRow}><span className={s.tag}>{l.alt}</span><span>→</span><span className={`${s.tag} ${s.tagOn}`}>{l.neu}</span></div>
          <div className={s.tagRow}><span className={s.tag}>{l.lager}</span><span>⇄</span><span className={s.tag}>{l.buch}</span></div>
        </div>
      );
    case "idea":
      return (
        <div className={s.stack}>
          <div className={s.tagRow}><span className={s.tag}>{l.idee}</span><span>→</span><span className={s.tag}>{l.v1}</span><span>→</span><span className={`${s.tag} ${s.tagOn}`}>{l.start}</span></div>
          <div className={s.bar}><i style={{ width: "34%" }} /></div>
        </div>
      );
    case "ai":
      return (
        <div className={s.stack}>
          <div className={s.miniRow}><span>{l.zeit}</span><span>?</span></div>
          <div className={s.bar}><i style={{ width: "40%" }} /></div>
          <div className={s.bar}><i style={{ width: "78%" }} /></div>
          <div className={s.bar}><i style={{ width: "18%" }} /></div>
        </div>
      );
  }
}
