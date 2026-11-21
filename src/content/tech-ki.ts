// Long-form content for the KI-Tools technology page.
//
// The reader of this page already knows the tools by name and wants to
// know whether we can put them to work in their company, safely. The
// service page /leistungen/ki is for those who do not know yet where AI
// pays off. The story here: how an agent works with a human in the loop,
// which tools we use for what, where the data stays, what we build.
// Copy rules as everywhere: no full stop at the very end of a text, no long dash.

import type { Faq, Phase } from "./service-pages";

export type KiPage = {
  h1: string;
  lead: string;
  cta: string;
  example: { title: string; steps: { who: string; text: string; human?: boolean }[] };
  intro: string;
  exits: { question: string; label: string; href: string }[];
  tools: { title: string; intro: string; items: { name: string; text: string }[] };
  data: { title: string; intro: string; points: { title: string; text: string }[]; note: string };
  tasks: { title: string; intro: string; rows: { task: string; ai: string; human: string }[] };
  catalogTitle: string;
  process: { title: string; lead: string; phases: Phase[] };
  start: { title: string; steps: { title: string; text: string }[]; cta: string };
  faq: { title: string; items: Faq[] };
};

export const kiPage: KiPage = {
  h1: "KI-Agenten und Assistenten für Ihren Arbeitsalltag",
  lead: "Mit Claude, ChatGPT, Make und n8n, eingebaut in die Programme, die Ihr Team schon nutzt. Datenschutzkonform und mit einem Menschen, der das Ergebnis prüft",
  cta: "KI-Einsatz besprechen",

  example: {
    title: "So arbeitet ein Agent",
    steps: [
      { who: "Eingang", text: "Eine Anfrage kommt per E-Mail" },
      { who: "KI-Agent", text: "Legt sie im CRM an, sucht passende Produkte und schreibt einen Antwortentwurf" },
      { who: "Ihr Team", text: "Prüft den Entwurf, ändert bei Bedarf und schickt ihn ab", human: true },
    ],
  },

  intro:
    "Fast jedes Team hat ChatGPT schon ausprobiert. Meistens bleibt es dabei: jemand kopiert Text hinein und wieder heraus. Der eigentliche Nutzen entsteht, wenn die KI dort arbeitet, wo die Arbeit liegt: im Postfach, im CRM, in den Dokumenten. Wir bauen Agenten und Assistenten, die an Ihre Programme angebunden sind, nur auf die Daten zugreifen, die sie brauchen, und ihre Ergebnisse einem Menschen zur Freigabe vorlegen, wo es darauf ankommt",

  exits: [
    { question: "Noch unklar, wo sich KI bei Ihnen überhaupt lohnt?", label: "KI-Lösungen", href: "/leistungen/ki" },
    { question: "Es geht vor allem darum, Programme zu verbinden?", label: "Schnittstellen", href: "/technologien/schnittstellen" },
  ],

  tools: {
    title: "Womit wir arbeiten",
    intro: "Wir nutzen diese Werkzeuge täglich selbst. Welches davon in Ihr Projekt gehört, hängt von der Aufgabe ab, nicht von einer Vorliebe",
    items: [
      { name: "Claude", text: "Für lange Dokumente, sorgfältige Texte und Agenten, die mehrere Schritte nacheinander erledigen" },
      { name: "ChatGPT", text: "Für Assistenten im Kundenkontakt, Sprache und Bilder und alles, was Ihr Team schon kennt" },
      { name: "Make", text: "Für Abläufe zwischen Cloud-Programmen, schnell aufgebaut und von Ihrem Team nachvollziehbar" },
      { name: "n8n", text: "Für Abläufe, die auf eigenen Servern laufen sollen, mit voller Kontrolle über die Daten" },
      { name: "Cursor", text: "Unser Werkzeug in der Entwicklung, damit Projekte schneller und sorgfältiger fertig werden" },
      { name: "GitHub Copilot", text: "Ebenfalls in der Entwicklung, für Prüfung und Pflege von Code" },
    ],
  },

  data: {
    title: "Wo Ihre Daten bleiben",
    intro: "Die häufigste Frage zu KI im Unternehmen, und zu Recht. So gehen wir damit um",
    points: [
      { title: "Schnittstelle statt Chatfenster", text: "Wir binden die Modelle über ihre Geschäftsangebote an. Bei OpenAI und Anthropic werden Eingaben dort standardmäßig nicht zum Training verwendet" },
      { title: "Nur die nötigen Daten", text: "Ein Agent sieht nur das, was er für seine Aufgabe braucht, nicht das ganze CRM oder Laufwerk" },
      { title: "Verträge und Standort", text: "Auftragsverarbeitung ist vertraglich geregelt, und wo möglich laufen Daten über Server in der EU" },
      { title: "Alles nachvollziehbar", text: "Jede Aktion des Agenten wird protokolliert. Sie sehen jederzeit, was er wann mit welchen Daten getan hat" },
    ],
    note: "Die rechtliche Bewertung bleibt bei Ihrem Datenschutzbeauftragten. Wir liefern ihm alle Angaben, die er dafür braucht",
  },

  tasks: {
    title: "Was die KI übernimmt und was der Mensch",
    intro: "Beispiele aus Projekten dieser Art. Die Aufteilung legen wir für jede Aufgabe einzeln fest",
    rows: [
      { task: "Rechnungen erfassen", ai: "Liest Betrag, Lieferant und Datum aus und legt den Beleg ab", human: "Prüft Abweichungen" },
      { task: "Anfragen sortieren", ai: "Bewertet jede Anfrage und leitet sie an die richtige Person", human: "Sieht nur, was zu ihm gehört" },
      { task: "Wissen finden", ai: "Findet die Antwort in Handbüchern und internen Dokumenten, mit Quelle", human: "Fragt in eigenen Worten" },
      { task: "Telefon annehmen", ai: "Nimmt den Anruf an, beantwortet Standardfragen, notiert das Anliegen", human: "Ruft bei allem anderen zurück" },
      { task: "Anfragen beantworten", ai: "Erkennt das Anliegen, sucht die Antwort, schreibt den Entwurf", human: "Prüft und schickt ab" },
    ],
  },

  catalogTitle: "Alle Leistungen rund um KI-Tools",

  process: {
    title: "So kommt KI in Ihren Ablauf",
    lead: "Klein anfangen, an echten Fällen messen, dann ausbauen. Kein Projekt beginnt mit einer großen Plattform",
    phases: [
      { title: "Eine Aufgabe wählen", text: "Die Arbeit, die heute am meisten Zeit kostet und klar genug beschrieben ist", note: "Ergebnis: eine Aufgabe mit Ziel" },
      { title: "Prototyp an echten Fällen", text: "Die KI bearbeitet echte Beispiele aus Ihrem Alltag, Ihr Team bewertet die Ergebnisse", note: "Ergebnis: gemessene Qualität" },
      { title: "Einbau in Ihre Programme", text: "Anbindung an Postfach, CRM oder Dokumente, mit Freigabe durch einen Menschen", note: "Ergebnis: Agent im Einsatz" },
      { title: "Beobachten und ausbauen", text: "Wir sehen uns an, wo die KI danebenliegt, verbessern das und nehmen die nächste Aufgabe dazu", note: "Ergebnis: laufende Verbesserung" },
    ],
  },

  start: {
    title: "Der erste Schritt",
    steps: [
      { title: "Aufgabe beschreiben", text: "Welche Arbeit Ihr Team heute Zeit kostet, gern mit ein paar echten Beispielen" },
      { title: "Einschätzung", text: "Wir sagen ehrlich, ob KI hier hilft und wie gut, bevor etwas gebaut wird" },
      { title: "Prototyp", text: "Sie sehen die KI an Ihren Fällen arbeiten und entscheiden dann" },
    ],
    cta: "KI-Einsatz besprechen",
  },

  faq: {
    title: "Häufige Fragen zu KI-Tools",
    items: [
      { q: "Werden unsere Daten zum Training der Modelle verwendet?", a: "Bei den Geschäfts- und API-Angeboten von OpenAI und Anthropic standardmäßig nicht. Genau diese nutzen wir, nicht die kostenlosen Chat-Versionen" },
      { q: "Welches Modell ist das beste?", a: "Das hängt von der Aufgabe ab, und die Modelle ändern sich schnell. Wir bauen so, dass sich das Modell später austauschen lässt, ohne die Anwendung neu zu schreiben" },
      { q: "Was ist, wenn die KI einen Fehler macht?", a: "Deshalb prüft bei allem, was nach außen geht, ein Mensch. Wir messen die Fehlerquote am Prototyp, bevor die KI in den echten Ablauf kommt" },
      { q: "Make oder n8n, was ist besser?", a: "Make ist schneller eingerichtet und läuft in der Cloud. n8n lässt sich auf eigenen Servern betreiben, wenn Daten das Haus nicht verlassen sollen. Wir empfehlen das passende Werkzeug für Ihren Fall" },
      { q: "Was kostet der laufende Betrieb?", a: "Die Nutzung der Modelle wird nach Menge abgerechnet, dazu kommen gegebenenfalls Lizenzen für Make oder Hosting für n8n. Wir rechnen das am Prototyp mit Ihren echten Mengen hoch" },
      { q: "Brauchen wir dafür eigene Server?", a: "Nein, in den meisten Fällen nicht. Wenn Daten das Haus nicht verlassen dürfen, richten wir n8n und die Anbindungen auf Ihren Servern oder in einem Rechenzentrum in Deutschland ein" },
    ],
  },
};
