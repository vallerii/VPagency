"use client";

import { useState } from "react";
import s from "./home.module.css";

// The hero widget of the Shopify page: three quick questions, then a short
// answer about what moves, what to watch and what the first step is. It
// promises no prices and no durations, only what can be said without
// having seen the shop. "Send the result" drops a summary into the request
// form, so nobody has to type it again.

const FROM = ["Shopware", "Magento", "WooCommerce", "OXID", "Anderes System", "Noch kein Shop"] as const;
const SIZE = ["Bis 500 Artikel", "500 bis 5.000", "Über 5.000"] as const;
const LINKS = ["Warenwirtschaft / ERP", "Buchhaltung", "Geschäftskunden", "Mehrere Länder"] as const;

const WATCH: Record<string, string> = {
  Shopware: "Eigenschaften, Varianten und Einkaufswelten bildet Shopify anders ab",
  Magento: "Konfigurierbare Produkte und mehrere Store Views brauchen eine klare Zuordnung",
  WooCommerce: "Eigene Felder aus Plugins werden zu Metafeldern, laufende Abos brauchen einen Plan",
  OXID: "Tiefe Variantenbäume und individuelle Module prüfen wir einzeln",
  "Anderes System": "Wir prüfen zuerst, in welcher Form sich Ihre Daten exportieren lassen",
};

export function MigrationCheck() {
  const [step, setStep] = useState(0);
  const [from, setFrom] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [links, setLinks] = useState<string[]>([]);

  const isNew = from === "Noch kein Shop";
  const plus = size === "Über 5.000" || links.includes("Geschäftskunden") || links.includes("Mehrere Länder");

  const result = {
    moves: isNew
      ? ["Katalogstruktur und Produktdaten aus Ihren Listen", "Zahlarten, Versand und Steuersätze", "Rechtliche Pflichtteile für den Verkauf"]
      : ["Produkte mit Varianten und Bildern", "Kundenkonten und Bestellhistorie", "Alte Seitenadressen mit Weiterleitung"],
    watch: [
      ...(isNew ? [] : [WATCH[from]]),
      ...(links.includes("Warenwirtschaft / ERP") ? ["Bestellungen, Bestände und Preise laufen automatisch zwischen Shop und Warenwirtschaft"] : []),
      ...(links.includes("Buchhaltung") ? ["Zahlungen gehen ohne Abtippen in die Buchhaltung, zum Beispiel an DATEV"] : []),
      ...(plus ? ["Vorab prüfen, ob sich Shopify Plus für Sie rechnet"] : []),
    ].filter(Boolean),
    first: isNew ? "Konzeption: Sortiment, Zahlarten und Anbindungen klären" : "Migrations-Audit: Daten, Erweiterungen und Schnittstellen prüfen",
  };

  function send() {
    const text = [
      "Umzugs-Check Shopify",
      `Heute: ${from}`,
      `Sortiment: ${size}`,
      `Anbindungen: ${links.length ? links.join(", ") : "keine"}`,
    ].join("\n");
    const area = document.querySelector<HTMLTextAreaElement>("#anfrage textarea[name=what]");
    if (area && !area.value.trim()) area.value = text;
    document.getElementById("anfrage")?.scrollIntoView({ behavior: "smooth" });
    area?.focus({ preventScroll: true });
  }

  const toggle = (v: string) => setLinks((l) => (l.includes(v) ? l.filter((x) => x !== v) : [...l, v]));

  return (
    <div className={s.mcheck} aria-live="polite">
      <div className={s.mcheckHead}>
        <span>Umzugs-Check</span>
        <span className={s.mcheckBar} aria-hidden>
          {[0, 1, 2, 3].map((n) => <i key={n} data-on={n <= step ? "" : undefined} />)}
        </span>
        <small>{step < 3 ? `${step + 1} / 3` : "Ergebnis"}</small>
      </div>

      {step === 0 && (
        <fieldset className={s.mcheckQ}>
          <legend>Wo läuft Ihr Shop heute?</legend>
          <div className={s.mcheckOpts}>
            {FROM.map((v) => (
              <button key={v} type="button" data-on={from === v ? "" : undefined} onClick={() => { setFrom(v); setStep(1); }}>{v}</button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className={s.mcheckQ}>
          <legend>Wie viele Artikel, Varianten mitgezählt?</legend>
          <div className={s.mcheckOpts}>
            {SIZE.map((v) => (
              <button key={v} type="button" data-on={size === v ? "" : undefined} onClick={() => { setSize(v); setStep(2); }}>{v}</button>
            ))}
          </div>
          <button type="button" className={s.mcheckBack} onClick={() => setStep(0)}>← Zurück</button>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className={s.mcheckQ}>
          <legend>Was muss mit dem Shop verbunden sein?</legend>
          <div className={s.mcheckOpts}>
            {LINKS.map((v) => (
              <button key={v} type="button" aria-pressed={links.includes(v)} data-on={links.includes(v) ? "" : undefined} onClick={() => toggle(v)}>{v}</button>
            ))}
          </div>
          <div className={s.mcheckNav}>
            <button type="button" className={s.mcheckBack} onClick={() => setStep(1)}>← Zurück</button>
            <button type="button" className={`${s.pill} ${s.pillDark} ${s.pillSm}`} onClick={() => setStep(3)}>
              {links.length ? "Ergebnis zeigen" : "Nichts davon, weiter"}
            </button>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <div className={s.mcheckRes}>
          <div>
            <b>{isNew ? "Was wir einrichten" : "Was mitkommt"}</b>
            <ul>{result.moves.map((m) => <li key={m}>{m}</li>)}</ul>
          </div>
          {result.watch.length > 0 && (
            <div>
              <b>Worauf wir achten</b>
              <ul>{result.watch.map((m) => <li key={m}>{m}</li>)}</ul>
            </div>
          )}
          <p className={s.mcheckFirst}><span>Erster Schritt</span>{result.first}</p>
          <div className={s.mcheckNav}>
            <button type="button" className={s.mcheckBack} onClick={() => { setStep(0); setFrom(""); setSize(""); setLinks([]); }}>Neu starten</button>
            <button type="button" className={`${s.pill} ${s.pillDark} ${s.pillSm}`} onClick={send}>
              Ergebnis mitschicken<span className={s.arr} aria-hidden>→</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
