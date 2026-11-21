// Long-form content for the Schnittstellen (integrations) technology page.
//
// The reader knows which systems they run and is tired of typing data from
// one into the other. The story: what flows where, which systems we
// connect, ready connector or own interface, what happens when something
// breaks, how a project runs.
// Copy rules as everywhere: no full stop at the very end of a text, no long dash.

import type { Faq, Phase } from "./service-pages";

export type SchnittstellenPage = {
  h1: string;
  lead: string;
  cta: string;
  links: { a: string; b: string; what: string }[];
  intro: string;
  exits: { question: string; label: string; href: string }[];
  systemsTitle: string;
  systemsIntro: string;
  systemsNote: string;
  choice: {
    title: string;
    intro: string;
    ready: { title: string; lead: string; items: string[] };
    own: { title: string; lead: string; items: string[] };
    note: string;
  };
  failure: { title: string; intro: string; steps: { title: string; text: string }[] };
  catalogTitle: string;
  process: { title: string; lead: string; phases: Phase[] };
  start: { title: string; steps: { title: string; text: string }[]; cta: string };
  faq: { title: string; items: Faq[] };
};

export const schnittstellenPage: SchnittstellenPage = {
  h1: "Schnittstellen, damit niemand mehr abtippt",
  lead:
    "Wir verbinden Shop, Website und Ihre Programme mit ERP, Buchhaltung und CRM. Die Daten fließen von selbst",
  cta: "Systeme verbinden",

  links: [
    { a: "Shop", b: "Warenwirtschaft", what: "Bestellungen, Bestände und Preise, automatisch in beide Richtungen" },
    { a: "ERP", b: "DATEV", what: "Rechnungen und Zahlungen für die Buchhaltung, ohne Abtippen" },
    { a: "Website", b: "CRM", what: "Jede Anfrage sofort beim richtigen Ansprechpartner" },
  ],

  intro:
    "Die meisten Unternehmen haben nicht zu wenig Software, sondern zu viele Programme, die nicht miteinander reden. Also überträgt jemand Bestellungen von Hand ins ERP, gleicht Bestände per Tabelle ab und tippt Rechnungen für die Buchhaltung ab. Das kostet jeden Tag Zeit und produziert Fehler, die erst auffallen, wenn ein Kunde anruft. Wir bauen die Verbindungen dazwischen, mit fertigen Connectoren, wo sie zuverlässig sind, und mit eigenen Schnittstellen, wo nicht",

  exits: [
    { question: "Es geht um ganze Abläufe, nicht nur um Daten?", label: "Automatisierung", href: "/leistungen/automatisierung" },
    { question: "Das Programm, das alles verbindet, gibt es noch gar nicht?", label: "Laravel", href: "/technologien/laravel" },
  ],

  systemsTitle: "Mit diesen Systemen verbinden wir",
  systemsIntro: "Eine Auswahl der Systeme, mit denen wir regelmäßig arbeiten. Hat Ihr Programm eine dokumentierte Schnittstelle, kommen wir auch mit ihm zurecht",
  systemsNote: "Ihr System ist nicht dabei? Fragen Sie uns, meistens geht es trotzdem",

  choice: {
    title: "Fertiger Connector oder eigene Schnittstelle?",
    intro: "Für viele Verbindungen gibt es fertige Lösungen. Sie sind günstig im Start, passen aber nicht immer",
    ready: {
      title: "Fertiger Connector",
      lead: "Gut, wenn Ihre Daten dem Standard folgen",
      items: [
        "Ein verbreitetes Paar wie Shopify und JTL-Wawi",
        "Die Felder passen ohne Umbau aufeinander",
        "Monatliche Lizenz statt Entwicklungskosten",
        "Schnell eingerichtet, Grenzen sind von Anfang an klar",
      ],
    },
    own: {
      title: "Eigene Schnittstelle",
      lead: "Nötig, wenn Ihre Abläufe vom Standard abweichen",
      items: [
        "Eigene Preislogik, Kundengruppen oder Varianten",
        "Ein älteres oder seltenes System ohne fertigen Connector",
        "Mehr als zwei Systeme sollen zusammenspielen",
        "Sie brauchen volle Kontrolle über Takt, Fehler und Protokoll",
      ],
    },
    note: "Welche Variante passt, prüfen wir an Ihren echten Daten, bevor Sie eine Lizenz kaufen oder eine Entwicklung beauftragen",
  },

  failure: {
    title: "Wenn eine Verbindung ausfällt",
    intro: "Jede Schnittstelle fällt irgendwann einmal aus: ein Update beim Anbieter, ein Passwort, ein volles Postfach. Entscheidend ist, wer es zuerst merkt",
    steps: [
      { title: "Fehler tritt auf", text: "Eine Bestellung kommt im ERP nicht an" },
      { title: "Wir merken es", text: "Die Überwachung schlägt Alarm, bevor jemand bei Ihnen sucht" },
      { title: "Daten werden nachgeholt", text: "Nichts geht verloren, alles Liegengebliebene wird übertragen" },
      { title: "Sie bekommen Bescheid", text: "Was passiert ist, was nachgeholt wurde und wie es nicht wieder passiert" },
    ],
  },

  catalogTitle: "Alle Leistungen rund um Schnittstellen",

  process: {
    title: "So entsteht eine Schnittstelle",
    lead: "Vier Schritte. Am Anfang steht nicht der Code, sondern die Frage, welche Daten wohin müssen und wer sie heute pflegt",
    phases: [
      { title: "Datenfluss aufnehmen", text: "Welche Daten, aus welchem System, in welches, wie oft und wer heute wo nachpflegt", note: "Ergebnis: Plan des Datenflusses" },
      { title: "Zugänge und Test", text: "Zugang zu den Schnittstellen beider Systeme und ein Test mit echten Daten auf einer Testumgebung", note: "Ergebnis: geprüfte Verbindung" },
      { title: "Umsetzung", text: "Connector einrichten oder Schnittstelle entwickeln, mit Protokoll und Überwachung", note: "Ergebnis: Verbindung bereit zum Start" },
      { title: "Start und Betrieb", text: "Umstellung im laufenden Betrieb, dann Überwachung und Anpassung, wenn sich ein System ändert", note: "Ergebnis: Daten fließen automatisch" },
    ],
  },

  start: {
    title: "Der erste Schritt",
    steps: [
      { title: "Systeme nennen", text: "Welche Programme Sie nutzen und wo heute von Hand übertragen wird" },
      { title: "Prüfung", text: "Wir sehen uns die Schnittstellen beider Seiten an und sagen, was geht" },
      { title: "Vorschlag", text: "Connector oder eigene Schnittstelle, mit Rahmen und Termin" },
    ],
    cta: "Systeme verbinden",
  },

  faq: {
    title: "Häufige Fragen zu Schnittstellen",
    items: [
      { q: "Unser ERP ist alt. Geht das überhaupt?", a: "Meistens ja. Viele ältere Systeme haben eine Schnittstelle, die nur niemand nutzt, oder sie können Dateien exportieren und einlesen. Wir prüfen das, bevor Sie etwas beauftragen" },
      { q: "Was passiert, wenn sich eines der Systeme ändert?", a: "Anbieter ändern ihre Schnittstellen von Zeit zu Zeit. Mit einer Betreuung passen wir die Verbindung an, bevor es knirscht. Ohne Betreuung melden wir uns, wenn die Überwachung einen Fehler zeigt" },
      { q: "Sind unsere Daten dabei sicher?", a: "Die Verbindung läuft verschlüsselt, Zugänge bekommen nur die Rechte, die sie brauchen, und die Daten liegen auf Servern in Deutschland oder der EU" },
      { q: "Warum nicht einfach Make oder n8n?", a: "Für einfache Abläufe nutzen wir genau diese Werkzeuge. Bei großen Datenmengen, eigener Logik oder strengen Anforderungen an das Protokoll ist eine eigene Schnittstelle zuverlässiger" },
      { q: "Was kostet eine Schnittstelle im laufenden Betrieb?", a: "Bei einem fertigen Connector die monatliche Lizenz des Anbieters. Bei einer eigenen Schnittstelle nur Hosting und, wenn Sie möchten, unsere Betreuung mit Überwachung. Beides steht vor dem Start fest" },
      { q: "Wie lange dauert so ein Projekt?", a: "Ein fertiger Connector ist oft in wenigen Tagen eingerichtet. Eine eigene Schnittstelle dauert länger und hängt davon ab, wie gut die Systeme dokumentiert sind. Den Termin bekommen Sie nach der Prüfung" },
    ],
  },
};
