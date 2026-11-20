// Long-form content for the WordPress technology page.
//
// Its own shape, not the Shopify one: the WordPress reader is either about
// to build a company website or already has one that misbehaves. So the
// story runs: try the editor yourself, is WordPress right at all, what to
// do when the site you have is in trouble, what we build, how it runs.
// Copy rules as everywhere: no full stop at the very end of a text, no long dash.

import type { Faq, Phase } from "./service-pages";

export type WordpressPage = {
  h1: string;
  lead: string;
  cta: string;
  demo: { caption: string; title: string; text: string; button: string };
  intro: string;
  exits: { question: string; label: string; href: string }[];
  fit: {
    title: string;
    intro: string;
    rows: { situation: string; verdict: string; kind: "yes" | "other"; href?: string }[];
  };
  rescue: {
    title: string;
    intro: string;
    cases: { symptom: string; cause: string; action: string }[];
    note: string;
  };
  build: { title: string; intro: string; columns: { heading: string; text: string; termSlug?: string; termLabel?: string }[] };
  process: { title: string; lead: string; phases: Phase[] };
  catalogTitle: string;
  faq: { title: string; items: Faq[] };
  start: { title: string; steps: { title: string; text: string }[]; cta: string };
};

export const wordpressPage: WordpressPage = {
  h1: "WordPress-Websites, die Ihr Team selbst pflegt",
  lead:
    "Unternehmenswebsites, Produktkataloge und WooCommerce-Shops auf WordPress. Mit eigenem Theme statt Baukasten, wenigen gepflegten Plugins und Anbindung an CRM und ERP",
  cta: "Website besprechen",

  demo: {
    caption: "Probieren Sie es aus: So ändert Ihr Team Inhalte, ohne Code und ohne uns",
    title: "Präzision für Ihre Fertigung",
    text: "Messsysteme für Produktion und Labor, geprüft und kalibriert in Siegen",
    button: "Katalog ansehen",
  },

  intro:
    "Eine WordPress-Website ist so gut wie das, was unter der Oberfläche steckt. Viele Seiten bestehen aus einem gekauften Theme, einem Page-Builder und dreißig Plugins, von denen niemand mehr weiß, wofür sie da sind. Das läuft, bis ein Update kommt. Wir bauen WordPress anders: ein eigenes Theme aus Blöcken, die genau zu Ihren Inhalten passen, so wenige Plugins wie möglich und eine Pflege, die Ihr Team ohne Entwickler schafft. Und wir übernehmen bestehende Seiten, die aus dem Ruder gelaufen sind",

  exits: [
    { question: "Sie verkaufen vor allem online?", label: "Shopify", href: "/technologien/shopify" },
    { question: "Kunden sollen sich einloggen und mehr tun als lesen?", label: "Laravel", href: "/technologien/laravel" },
  ],

  fit: {
    title: "WordPress oder etwas anderes?",
    intro: "Die ehrliche Antwort hängt davon ab, was die Website tun soll. Hier die häufigsten Fälle",
    rows: [
      { situation: "Unternehmenswebsite mit Leistungen, Referenzen und Karriereseite", verdict: "WordPress", kind: "yes" },
      { situation: "Produktkatalog mit technischen Daten und PDFs zum Herunterladen", verdict: "WordPress", kind: "yes" },
      { situation: "Website in mehreren Sprachen für mehrere Länder", verdict: "WordPress", kind: "yes" },
      { situation: "Ein kleiner Shop neben der Website, wenige Produkte", verdict: "WordPress mit WooCommerce", kind: "yes" },
      { situation: "Der Online-Verkauf ist das Hauptgeschäft", verdict: "Eher Shopify", kind: "other", href: "/technologien/shopify" },
      { situation: "Kunden loggen sich ein, sehen Aufträge und Dokumente", verdict: "Eher Laravel", kind: "other", href: "/technologien/laravel" },
    ],
  },

  rescue: {
    title: "Wenn die bestehende Seite Ärger macht",
    intro: "Die meisten Anfragen zu WordPress beginnen nicht mit einer neuen Website, sondern mit einer, die plötzlich nicht mehr tut, was sie soll",
    cases: [
      {
        symptom: "Die Seite wurde gehackt",
        cause: "Meist ein veraltetes Plugin oder ein Theme ohne Updates",
        action: "Schadcode entfernen, Zugänge neu vergeben, Lücke schließen und die Seite aus einem sauberen Stand wiederherstellen",
      },
      {
        symptom: "Nach einem Update ist alles kaputt",
        cause: "Zwei Plugins vertragen sich nicht, oder das Theme passt nicht zur neuen Version",
        action: "Den Konflikt eingrenzen, die Seite zurückholen und das Update auf einer Testkopie sauber nachziehen",
      },
      {
        symptom: "Die Seite lädt quälend langsam",
        cause: "Ein schwerer Page-Builder, ungeprüfte Bilder und Plugins, die auf jeder Seite laden",
        action: "Messen, wo die Zeit verloren geht, und genau dort ansetzen, statt noch ein Cache-Plugin daraufzusetzen",
      },
      {
        symptom: "Der alte Dienstleister ist nicht mehr erreichbar",
        cause: "Niemand hat die Zugänge, und niemand weiß, was installiert ist",
        action: "Zugänge sichern, Bestand aufnehmen, die Seite stabilisieren und dann gemeinsam entscheiden, wie es weitergeht",
      },
    ],
    note: "Bei einem Notfall sehen wir uns die Seite zuerst an und sagen Ihnen, was passiert ist, bevor irgendetwas berechnet wird",
  },

  build: {
    title: "Was wir auf WordPress bauen",
    intro: "Sechs Dinge, an denen sich eine gute WordPress-Website von einer gewachsenen unterscheidet",
    columns: [
      {
        heading: "Ein eigenes Theme statt Page-Builder",
        text: "Wir entwickeln das Theme für Ihre Inhalte, nicht für alle denkbaren. Das macht die Seite schneller, sicherer bei Updates und einheitlich im Erscheinungsbild, egal wer gerade eine Seite anlegt",
      },
      {
        heading: "Blöcke, mit denen Ihr Team arbeitet",
        text: "Im Block-Editor stehen genau die Bausteine bereit, die Ihre Seiten brauchen: Leistung, Referenz, Produkt, Ansprechpartner. Ihr Team setzt Seiten daraus zusammen und kann das Design dabei nicht versehentlich zerlegen",
        termSlug: "cms",
        termLabel: "Was ein CMS ist",
      },
      {
        heading: "Wenige Plugins, und jedes mit Grund",
        text: "Jedes Plugin ist Code, den jemand anderes pflegt oder eben nicht. Wir nutzen bewährte Plugins für Formulare, Übersetzung und Sicherheit und schreiben den Rest selbst, wenn es sich lohnt",
      },
      {
        heading: "Mehrere Sprachen und Standorte",
        text: "Eine Website für mehrere Länder, mit übersetzten Seiten, eigenen Ansprechpartnern je Standort und Adressen, die Suchmaschinen der richtigen Sprache zuordnen",
      },
      {
        heading: "Anfragen, die im CRM ankommen",
        text: "Formulare schicken Anfragen nicht nur per E-Mail, sondern direkt ins CRM an den richtigen Ansprechpartner. Auf Wunsch gehen Produktdaten aus dem ERP auf die Website",
        termSlug: "schnittstelle",
        termLabel: "Was eine Schnittstelle ist",
      },
      {
        heading: "Barrierefreiheit und Datenschutz",
        text: "Cookie-Einwilligung, die wirklich vor dem Laden fragt, und eine Prüfung nach dem Barrierefreiheitsstärkungsgesetz, wenn Sie an Privatkunden verkaufen. Die rechtliche Bewertung bleibt bei Ihrem Datenschutzbeauftragten",
      },
    ],
  },

  process: {
    title: "So entsteht Ihre WordPress-Website",
    lead: "Vom ersten Gespräch bis zur Einweisung Ihres Teams. Jeder Schritt endet mit etwas, das Sie sehen und freigeben",
    phases: [
      { title: "Inhalte und Struktur", text: "Welche Seiten es gibt, was auf ihnen steht und wonach Ihre Kunden suchen", note: "Ergebnis: Seitenstruktur" },
      { title: "Design", text: "Gestaltung der wichtigsten Seiten und der Bausteine, aus denen alle anderen entstehen", note: "Ergebnis: freigegebenes Design" },
      { title: "Theme und Blöcke", text: "Umsetzung als eigenes Theme auf einer Testumgebung, Übernahme der Inhalte, Anbindungen", note: "Ergebnis: fertige Seite zur Abnahme" },
      { title: "Start und Einweisung", text: "Umzug auf den Live-Server mit Weiterleitungen, dann zeigen wir Ihrem Team, wie es Seiten selbst pflegt", note: "Ergebnis: Seite live, Team eingewiesen" },
    ],
  },

  catalogTitle: "Alle Leistungen rund um WordPress",

  faq: {
    title: "Häufige Fragen zu WordPress",
    items: [
      {
        q: "Ist WordPress sicher genug für ein Unternehmen?",
        a: "Ja, wenn es gepflegt wird. Fast alle Angriffe laufen über veraltete Plugins und Themes, nicht über WordPress selbst. Deshalb halten wir die Zahl der Plugins klein, spielen Updates regelmäßig ein und überwachen die Seite",
      },
      {
        q: "Warum kein Page-Builder wie Elementor oder Divi?",
        a: "Page-Builder sind schnell am Anfang und teuer auf Dauer: Sie machen Seiten langsamer, binden Sie an ein Plugin und lassen jede Seite ein wenig anders aussehen. Ein eigenes Theme mit festen Blöcken ist einmal mehr Arbeit und danach einfacher für alle",
      },
      {
        q: "Können Sie unsere bestehende WordPress-Seite übernehmen?",
        a: "Ja. Wir sehen uns zuerst an, was installiert ist und in welchem Zustand, und sagen Ihnen dann, ob sich Pflege lohnt oder ein Neuaufbau günstiger ist",
      },
      {
        q: "Was kostet der laufende Betrieb?",
        a: "Hosting, gegebenenfalls Lizenzen für einzelne Plugins und die Pflege mit Updates, Backups und Überwachung. Wir listen das vor dem Start auf, damit Sie die monatlichen Kosten kennen",
      },
      {
        q: "Wem gehören Theme und Inhalte?",
        a: "Ihnen. Das Theme übergeben wir vollständig, Hosting und Domain laufen auf Ihren Namen. Jemand anderes kann jederzeit daran weiterarbeiten",
      },
      {
        q: "Lohnt sich WooCommerce oder lieber gleich Shopify?",
        a: "Bei wenigen Produkten neben einer bestehenden WordPress-Seite ist WooCommerce oft die einfachere Lösung. Wird der Verkauf zum Hauptgeschäft, ist Shopify meist günstiger im Betrieb. Das klären wir im ersten Gespräch",
      },
    ],
  },

  start: {
    title: "Der erste Schritt",
    steps: [
      { title: "Seite oder Idee schicken", text: "Die Adresse der heutigen Website oder ein paar Sätze dazu, was entstehen soll" },
      { title: "Durchsicht", text: "Wir sehen uns Inhalte, Technik und Plugins an und sagen, was bleiben kann" },
      { title: "Vorschlag", text: "Sie bekommen Umfang, Rahmen und Termin, getrennt nach Website, Pflege und Anbindungen" },
    ],
    cta: "Website besprechen",
  },
};
