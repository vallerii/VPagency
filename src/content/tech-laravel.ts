// Long-form content for the Laravel technology page.
//
// The Laravel reader either runs the business on spreadsheets, inboxes and
// phone calls and wants one system, or already has a Laravel application
// that needs an update, a new team or a second opinion. The story: what
// moves into one system, buy or build, what we build, what we do with an
// application you already have, who owns the code, how it runs.
// Copy rules as everywhere: no full stop at the very end of a text, no long dash.

import type { Faq, Phase } from "./service-pages";

export type LaravelPage = {
  h1: string;
  lead: string;
  cta: string;
  before: string[];
  after: { title: string; text: string };
  intro: string;
  exits: { question: string; label: string; href: string }[];
  ladder: { title: string; intro: string; steps: { label: string; when: string; what: string }[]; note: string };
  systems: { title: string; intro: string; rows: { name: string; text: string; who: string }[] };
  existing: { title: string; intro: string; items: { title: string; text: string }[] };
  trust: { title: string; text: string };
  catalogTitle: string;
  process: { title: string; lead: string; phases: Phase[]; decideAfter: number; decideLabel: string };
  start: { title: string; steps: { title: string; text: string }[]; cta: string };
  faq: { title: string; items: Faq[] };
};

export const laravelPage: LaravelPage = {
  h1: "Software nach Ihren Abläufen, gebaut mit Laravel",
  lead:
    "Interne Systeme, Kunden- und Partnerportale, Apps und Schnittstellen. Dazu Weiterentwicklung und Upgrades von Laravel-Anwendungen, die schon laufen",
  cta: "Vorhaben besprechen",

  before: ["Excel-Tabellen", "E-Mail-Postfach", "WhatsApp-Gruppen", "Papierformulare", "Telefonnotizen"],
  after: { title: "Ein System", text: "Aufträge, Kunden und Termine an einem Ort, für jeden im Team mit den richtigen Rechten" },

  intro:
    "Irgendwann trägt die Tabelle nicht mehr. Fünf Leute pflegen dieselben Daten an drei Stellen, Anfragen gehen im Postfach unter, und nur eine Person weiß, wie alles zusammenhängt. Fertige Software passt dann oft nur zur Hälfte. Wir bauen mit Laravel Systeme, die so arbeiten wie Ihr Unternehmen: interne Werkzeuge, Portale für Kunden und Partner, mobile Apps für den Außendienst. Und wir übernehmen Laravel-Anwendungen, die ein anderes Team gebaut hat",

  exits: [
    { question: "Es soll vor allem eine Website werden?", label: "WordPress", href: "/technologien/wordpress" },
    { question: "Es geht nur darum, vorhandene Programme zu verbinden?", label: "Schnittstellen", href: "/technologien/schnittstellen" },
  ],

  ladder: {
    title: "Kaufen, verbinden oder bauen?",
    intro: "Eigene Software ist nicht immer die richtige Antwort. Wir prüfen zuerst, ob es einfacher geht",
    steps: [
      { label: "Fertige Software", when: "Ihr Ablauf ist branchenüblich, und ein Standardprodukt deckt ihn fast vollständig ab", what: "Wir sagen Ihnen das und helfen bei der Auswahl" },
      { label: "Fertig plus Anbindung", when: "Das Standardprodukt passt, aber Daten müssen zwischen ihm und Ihren anderen Programmen fließen", what: "Wir bauen die Schnittstelle, nicht das ganze System" },
      { label: "Eigene Entwicklung", when: "Ihr Ablauf ist das, was Sie vom Wettbewerb unterscheidet, und keine fertige Lösung bildet ihn ab", what: "Wir entwickeln das System mit Laravel, Schritt für Schritt" },
    ],
    note: "Welche Stufe passt, steht nach dem ersten Gespräch fest, bevor ein Angebot geschrieben wird",
  },

  systems: {
    title: "Was wir mit Laravel bauen",
    intro: "Sechs Arten von Systemen, die wir regelmäßig umsetzen. Die meisten Projekte beginnen mit einer davon und wachsen später",
    rows: [
      { name: "Interne Werkzeuge", text: "Aufträge, Aufgaben und Daten an einem Ort statt in Tabellen und Postfächern, mit Rechten je Rolle", who: "Für Teams, die heute mit Excel und E-Mail arbeiten" },
      { name: "Kundenportal", text: "Kunden sehen Bestellungen, Dokumente und den Stand ihres Auftrags selbst, ohne anzurufen", who: "Für Unternehmen mit vielen Rückfragen zum Status" },
      { name: "Partner- und Händlerportal", text: "Preise, Bestellungen, Unterlagen und Schulungsmaterial für Partner, ohne E-Mail-Ketten", who: "Für Hersteller mit Händlernetz" },
      { name: "Management-Dashboard", text: "Umsatz, Auslastung und offene Anfragen auf einem Bildschirm, aus den Daten, die es schon gibt", who: "Für Geschäftsführung und Teamleitung" },
      { name: "Mitarbeiter-App", text: "Aufträge, Fotos, Unterschriften und Zeiten direkt vom Handy, auf der Baustelle oder beim Kunden", who: "Für Außendienst, Montage und Service" },
      { name: "Plattform oder SaaS", text: "Ein eigenes Produkt mit Kundenkonten und Bezahlung, zuerst als kleine erste Version", who: "Für Gründer und neue Geschäftsbereiche" },
    ],
  },

  existing: {
    title: "Sie haben schon eine Laravel-Anwendung?",
    intro: "Ein großer Teil unserer Laravel-Arbeit beginnt nicht bei null, sondern mit einem System, das läuft und weiterwachsen soll",
    items: [
      { title: "Upgrade auf eine aktuelle Version", text: "Alte Laravel- und PHP-Versionen bekommen keine Sicherheitsupdates mehr. Wir heben die Anwendung schrittweise an, ohne dass der Betrieb stillsteht" },
      { title: "Übernahme von einem anderen Team", text: "Der frühere Dienstleister ist weg oder überlastet. Wir arbeiten uns ein, dokumentieren den Stand und entwickeln weiter" },
      { title: "Code-Audit", text: "Eine unabhängige Prüfung von Sicherheit, Aufbau und Wartbarkeit, zum Beispiel bevor Sie weiter investieren oder den Dienstleister wechseln" },
    ],
  },

  trust: {
    title: "Der Code gehört Ihnen",
    text: "Quellcode, Datenbank und Zugänge liegen bei Ihnen, dokumentiert und so aufgebaut, dass jedes andere Laravel-Team daran weiterarbeiten kann. Laravel ist verbreitet genug, dass Sie nie von uns allein abhängen",
  },

  catalogTitle: "Alle Leistungen rund um Laravel",

  process: {
    title: "So entsteht Ihr System",
    lead: "Erst ein kleiner, klickbarer Teil, dann der Rest. So sehen Sie früh, ob es passt, und zahlen nicht für Funktionen, die niemand nutzt",
    phases: [
      { title: "Abläufe verstehen", text: "Wir sprechen mit den Leuten, die später damit arbeiten, und schreiben auf, wie die Arbeit heute wirklich läuft", note: "Ergebnis: Ablaufbeschreibung und Umfang der ersten Version" },
      { title: "Klickbarer Prototyp", text: "Die wichtigsten Bildschirme zum Durchklicken, bevor programmiert wird. Änderungen kosten hier fast nichts", note: "Ergebnis: freigegebener Prototyp" },
      { title: "Erste Version", text: "Der Kern des Systems, mit echten Daten und den ersten Nutzern. Übernahme der Daten aus Tabellen und Altsystemen", note: "Ergebnis: System im Einsatz" },
      { title: "Ausbau und Betrieb", text: "Weitere Funktionen in kurzen Abständen, nach dem, was im Alltag tatsächlich fehlt. Dazu Updates, Backups und Überwachung", note: "Ergebnis: laufende Weiterentwicklung" },
    ],
    decideAfter: 2,
    decideLabel: "Hier entscheiden Sie, ob gebaut wird",
  },

  start: {
    title: "Der erste Schritt",
    steps: [
      { title: "Ablauf beschreiben", text: "Ein paar Sätze dazu, wie die Arbeit heute läuft und wo es hakt, gern mit Beispieltabellen" },
      { title: "Gespräch", text: "Wir stellen die Fragen, die zählen, und sagen ehrlich, ob kaufen, verbinden oder bauen passt" },
      { title: "Vorschlag", text: "Sie bekommen Umfang der ersten Version, Rahmen und Termin" },
    ],
    cta: "Vorhaben besprechen",
  },

  faq: {
    title: "Häufige Fragen zu Laravel",
    items: [
      { q: "Warum Laravel und nicht eine fertige Plattform?", a: "Laravel ist ein verbreitetes Gerüst für Webanwendungen in PHP. Es nimmt uns Standardarbeit wie Anmeldung, Rechte und Datenbank ab, sodass die Zeit in Ihre Abläufe geht und nicht in Grundlagen. Und es gibt genug Entwickler, dass Sie nicht von einem Anbieter abhängen" },
      { q: "Was kostet eine eigene Anwendung?", a: "Das hängt vom Umfang der ersten Version ab, nicht vom Endausbau. Deshalb beginnen wir mit dem kleinsten Teil, der im Alltag schon hilft. Nach dem Prototyp kennen Sie Rahmen und Termin, bevor programmiert wird" },
      { q: "Was passiert mit unseren Excel-Tabellen und alten Daten?", a: "Wir übernehmen sie. Vorher bereinigen wir doppelte und widersprüchliche Einträge gemeinsam mit Ihnen, damit das neue System mit sauberen Daten startet" },
      { q: "Wo läuft die Anwendung, und wer betreut den Server?", a: "Auf einem Server in Deutschland oder der EU, auf Wunsch in Ihrem Namen. Updates, Backups und Überwachung übernehmen wir im Rahmen der Betreuung" },
      { q: "Unsere Anwendung läuft auf einer alten Laravel-Version. Neu bauen oder aktualisieren?", a: "Meistens aktualisieren. Wir prüfen zuerst den Code und sagen Ihnen, wie viel Arbeit ein Upgrade ist. Ein Neubau lohnt sich nur, wenn der Aufbau selbst das Problem ist" },
      { q: "Kann die Anwendung mit unserer Buchhaltung und dem ERP reden?", a: "Ja. Laravel-Anwendungen verbinden wir mit DATEV, ERP- und Warenwirtschaftssystemen und anderen Programmen über deren Schnittstellen" },
    ],
  },
};
