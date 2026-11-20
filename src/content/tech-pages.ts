// Long-form content for the technology pages.
//
// A technology page is read by someone who already knows the platform they
// want. The service page asks "what is wrong"; this one answers "can you do
// it on this platform, what moves, what does it depend on". Same copy rules
// as the service pages: no full stop at the very end of a text, no long dash.
//
// Every technology page gets its own hero widget, so the pages share a
// rhythm but never look like copies of each other.

import type { Block, Faq, Phase } from "./service-pages";

export type Migration = {
  from: string;
  lead: string;
  watch: string[];
};

export type TechPageContent = {
  h1: string;
  lead: string;
  cta: string;
  /** The three steps under the hero, lit one by one while it is pinned */
  promise: { title: string; steps: { title: string; text: string }[]; cta: string };
  intro: string;
  exits: { question: string; label: string; href: string }[];
  decision: {
    title: string;
    intro: string;
    standard: { title: string; lead: string; items: string[] };
    custom: { title: string; lead: string; items: string[] };
    note: string;
  };
  migration?: {
    title: string;
    intro: string;
    always: { title: string; items: string[] };
    platforms: Migration[];
    note: string;
  };
  deepDive: { title: string; intro: string; blocks: Block[] };
  process: { title: string; lead: string; phases: Phase[]; decideAfter?: number; decideLabel?: string };
  catalogTitle: string;
  faq: { title: string; items: Faq[] };
};

export const techPages: Record<string, TechPageContent> = {
  shopify: {
    h1: "Shopify-Entwicklung und Umzüge",
    lead:
      "Shops, Themes und Apps auf Shopify und Shopify Plus. Wir holen Ihre Daten von Shopware, Magento, WooCommerce oder OXID und verbinden den Shop mit Warenwirtschaft und Buchhaltung",
    cta: "Umzug prüfen lassen",

    promise: {
      title: "Der erste Schritt",
      steps: [
        { title: "Stand senden", text: "Shop-Adresse, Pflichtenheft oder ein paar Sätze dazu, was umziehen oder neu entstehen soll" },
        { title: "Technische Prüfung", text: "Wir sehen uns Daten, Erweiterungen und Schnittstellen an und sagen, was mitkommt und was nicht" },
        { title: "Einschätzung", text: "Sie bekommen Umfang, Rahmen und Termin, getrennt nach Shop, Umzug und Anbindungen" },
      ],
      cta: "Umzug prüfen lassen",
    },

    intro:
      "Shopify nimmt Ihnen Server, Updates und Sicherheit ab. Was bleibt, entscheidet über den Shop: ein Theme, das zu Ihrem Sortiment passt, ein Checkout mit den Zahlarten Ihrer Kunden und eine saubere Verbindung zu Warenwirtschaft und Buchhaltung. Genau daran arbeiten wir. Wir setzen neue Shops auf, entwickeln eigene Themes und Apps, ziehen bestehende Shops mit Produkten, Kunden, Bestellungen und Seitenadressen um und bleiben nach dem Start erreichbar, auf Shopify und auf Shopify Plus",

    exits: [
      { question: "Noch nicht sicher, ob es überhaupt Shopify sein soll?", label: "Online-Shops", href: "/leistungen/online-shops" },
      { question: "Der Shop läuft, nur die Verbindung zum ERP fehlt?", label: "Schnittstellen", href: "/technologien/schnittstellen" },
    ],

    decision: {
      title: "Wann Shopify passt und wann nicht",
      intro:
        "Wir empfehlen Shopify nicht jedem. Die Plattform ist stark, wo es um Verkauf geht, und eng, wo ein Shop eigentlich ein Portal sein soll",
      standard: {
        title: "Eher etwas anderes",
        lead: "Hier stößt Shopify an Grenzen oder kostet mehr, als es bringt",
        items: [
          "Der Kauf ist nur ein kleiner Teil, Kunden sollen vor allem Aufträge, Dokumente und Status sehen",
          "Preise entstehen erst nach einer individuellen Kalkulation oder im Gespräch",
          "Sie verkaufen kaum im Netz und brauchen vor allem einen Produktkatalog",
          "Daten dürfen aus internen Gründen nur auf eigenen Servern liegen",
        ],
      },
      custom: {
        title: "Shopify passt",
        lead: "Hier spart die Plattform Zeit und Betriebskosten",
        items: [
          "Sie verkaufen an Privat- oder Geschäftskunden mit festen Preisen und Staffeln",
          "Die alte Plattform bekommt keine Updates mehr, oder jedes Update ist ein eigenes Projekt",
          "Sie wollen in mehrere Länder verkaufen, ohne für jedes einen eigenen Shop zu betreiben",
          "Ihr Team soll Produkte, Inhalte und Aktionen selbst pflegen",
          "Server, Sicherheitsupdates und Lastspitzen sollen nicht mehr Ihr Thema sein",
        ],
      },
      note:
        "Passt Shopify nicht, sagen wir das vor dem Angebot. Portale bauen wir auf Laravel, Kataloge ohne Verkauf auf WordPress",
    },

    migration: {
      title: "Umzug auf Shopify",
      intro:
        "Läuft Ihr Shop heute woanders, beginnt alles mit dem Umzug. Jede Plattform hat ihre eigenen Stolperstellen. Vor dem Umzug prüfen wir im Migrations-Audit, was sauber mitkommt, was bereinigt werden muss und was Sie auf Shopify gar nicht mehr brauchen",
      always: {
        title: "Kommt immer mit",
        items: [
          "Produkte mit Varianten, Bildern und Eigenschaften",
          "Kundenkonten und Adressen",
          "Die vollständige Bestellhistorie",
          "Alte Seitenadressen, jede mit Weiterleitung",
          "Gutscheine und Kundengruppen, nach Prüfung",
        ],
      },
      platforms: [
        {
          from: "Shopware",
          lead: "Häufig der Umzug nach dem Ende von Shopware 5 oder wenn ein Update auf Shopware 6 wie ein Neubau aussieht",
          watch: [
            "Eigenschaften und Varianten bildet Shopify anders ab, die Zuordnung legen wir vor dem Umzug fest",
            "Einkaufswelten und Erlebniswelten werden als Theme-Abschnitte neu aufgebaut, nicht eins zu eins kopiert",
            "Plugins aus dem Shopware Store ersetzen wir durch Apps oder eigene Funktionen",
            "Kundengruppen mit eigenen Preisen werden zu Preislisten oder B2B-Katalogen",
          ],
        },
        {
          from: "Magento",
          lead: "Meist der Wechsel weg von hohen Betriebskosten, eigenen Servern und aufwendigen Versionsupdates",
          watch: [
            "Konfigurierbare und gebündelte Produkte brauchen eine klare Abbildung auf Varianten und Metafelder",
            "Mehrere Store Views werden zu Märkten und Sprachen in Shopify Markets",
            "Eigene Module prüfen wir einzeln: Viele ersetzt eine App, manche werden zu einer eigenen App",
            "Bestehende Anbindungen an ERP und Versand werden für Shopify neu gebaut und mit echten Bestellungen getestet",
          ],
        },
        {
          from: "WooCommerce",
          lead: "Oft dann, wenn der Shop gewachsen ist und Plugins, Hosting und Updates mehr Zeit kosten als das Verkaufen",
          watch: [
            "Produktdaten aus eigenen Feldern und Plugins werden zu Metafeldern",
            "Blog und Inhaltsseiten ziehen mit oder bleiben bewusst auf WordPress",
            "Laufende Abos brauchen eine Abo-App und einen Plan für die nächsten Abbuchungen",
            "Viele Plugins entfallen, weil Shopify die Funktion schon mitbringt",
          ],
        },
        {
          from: "OXID",
          lead: "Typisch für Shops, die über viele Jahre mit individuellen Modulen gewachsen sind",
          watch: [
            "Shopify kennt bis zu drei Optionen je Produkt, tiefere Variantenbäume planen wir vorher um",
            "Die Seitenadressen folgen einem anderen Muster, jede alte Adresse bekommt eine Weiterleitung",
            "Anbindungen an die Warenwirtschaft werden für Shopify neu aufgesetzt",
            "Module aus vielen Jahren prüfen wir darauf, ob sie überhaupt noch gebraucht werden",
          ],
        },
      ],
      note:
        "Passwörter lassen sich von keiner Plattform übertragen. Kunden vergeben beim ersten Login ein neues, die Einladung dazu planen wir mit ein",
    },

    deepDive: {
      title: "Was wir auf Shopify bauen",
      intro: "Ob neuer Shop oder Umzug: An diesen fünf Stellen entscheidet sich, ob ein Shopify-Shop verkauft. Jede lässt sich auch einzeln beauftragen",
      blocks: [
        {
          heading: "Theme: eigene Vorlagen statt Baukasten",
          paragraphs: [
            "Ein gekauftes Theme ist ein guter Start, solange Ihr Sortiment in seine Vorlagen passt. Sobald Produktseiten technische Daten, Konfiguratoren oder Dokumente zeigen sollen, wird es eng. Dann entwickeln wir ein eigenes Theme oder bauen ein bestehendes so um, dass es zu Ihren Produkten passt",
            "Wir arbeiten mit den Abschnitten und Blöcken von Online Store 2.0. Ihr Team stellt Seiten im Theme-Editor selbst zusammen, ohne Code anzufassen, und neue Seiten entstehen aus vorhandenen Bausteinen statt jedes Mal neu",
          ],
        },
        {
          heading: "Checkout und Zahlarten",
          paragraphs: [
            "Im deutschsprachigen Raum entscheidet die Zahlart oft über den Kauf: PayPal, Klarna, Kauf auf Rechnung, SEPA-Lastschrift. Wir richten sie ein, dazu Versandregeln, Steuersätze und die rechtlichen Pflichtangaben für den Verkauf an Privatkunden",
            "Wo der Standard nicht reicht, erweitern wir den Checkout mit Checkout-Erweiterungen und Shopify Functions: eigene Rabattregeln, Versandarten je nach Warenkorb oder Pflichtfelder für Geschäftskunden. Einige davon setzen Shopify Plus voraus, das klären wir vorher",
          ],
          termSlug: "checkout",
          termLabel: "Was ein Checkout ist",
        },
        {
          heading: "Apps: fertig, angepasst oder eigene",
          paragraphs: [
            "Jede App kostet monatlich und kann den Shop langsamer machen. Bevor wir eine App vorschlagen, prüfen wir, ob Shopify die Funktion schon mitbringt. In bestehenden Shops finden wir dabei fast immer Apps, die niemand mehr braucht",
            "Gibt es für eine Aufgabe keine passende App, entwickeln wir eine eigene: für eine Preislogik, eine Anbindung oder einen Ablauf, der nur bei Ihnen so läuft. Und wenn zwei Apps sich gegenseitig stören, finden wir heraus, welche es ist",
          ],
        },
        {
          heading: "Mehrere Länder, B2B und Shopify Plus",
          paragraphs: [
            "Mit Shopify Markets verkaufen Sie aus einem Shop in mehrere Länder, mit eigenen Sprachen, Währungen, Preisen und Versandregeln. Ein zweiter Shop lohnt sich erst, wenn ein Land ein eigenes Sortiment, ein eigenes Lager oder ein eigenes Team hat",
            "Für Geschäftskunden richten wir Firmenkonten, eigene Preislisten, Mindestmengen und Zahlungsziele ein. Welche dieser Funktionen Ihr Tarif enthält, prüfen wir vorab, den vollen Umfang gibt es mit Shopify Plus. Ob Plus sich für Sie rechnet, steht vor dem Angebot fest, nicht danach",
          ],
        },
        {
          heading: "Anbindung an Warenwirtschaft, Buchhaltung und PIM",
          paragraphs: [
            "Bestellungen gehen automatisch in die Warenwirtschaft, Bestände und Preise kommen zurück in den Shop. Wir verbinden Shopify mit Systemen wie JTL-Wawi, Xentral, weclapp, SAP oder Dynamics 365 Business Central und übergeben Zahlungen an DATEV",
            "Wo es einen zuverlässigen fertigen Connector gibt, nutzen wir ihn. Wo nicht, bauen wir die Schnittstelle selbst und überwachen sie, damit ein Fehler auffällt, bevor eine Bestellung fehlt",
          ],
          termSlug: "warenwirtschaft",
          termLabel: "Was eine Warenwirtschaft ist",
        },
      ],
    },

    process: {
      title: "So läuft ein Shopify-Projekt",
      lead: "Was wir bauen, steht fest. So kommt es in Ihren Shop: vier Schritte, jeder mit einem Ergebnis, das Sie sehen und freigeben. Bei einem Umzug steht die Datenprüfung vor allem anderen",
      phases: [
        {
          title: "Audit und Plan",
          text: "Wir prüfen den heutigen Shop, die Daten, die Erweiterungen und die angebundenen Systeme. Bei einem neuen Shop klären wir Sortiment, Zahlarten und Anbindungen",
          note: "Ergebnis: Befund und Projektplan",
        },
        {
          title: "Theme und Testshop",
          text: "Theme und Funktionen entstehen in einem Entwicklungsshop. Sie sehen den Stand jederzeit, nichts davon berührt Ihren laufenden Verkauf",
          note: "Ergebnis: Shop auf der Testumgebung",
        },
        {
          title: "Daten und Anbindungen",
          text: "Produkte, Kunden und Bestellungen ziehen um, Warenwirtschaft und Buchhaltung werden verbunden und mit echten Testbestellungen geprüft",
          note: "Ergebnis: durchgetesteter Bestellweg",
        },
        {
          title: "Start und danach",
          text: "Umstellung der Domain mit allen Weiterleitungen, dann der Blick auf die ersten echten Bestellungen. Danach betreuen wir den Shop weiter, wenn Sie das möchten",
          note: "Ergebnis: Shop live, Bestellungen geprüft",
        },
      ],
      decideAfter: 1,
      decideLabel: "Hier entscheiden Sie, ob es weitergeht",
    },

    catalogTitle: "Alle Leistungen rund um Shopify",

    faq: {
      title: "Häufige Fragen zu Shopify",
      items: [
        {
          q: "Brauchen wir Shopify Plus?",
          a: "Am Anfang meistens nicht. Plus lohnt sich, wenn Sie den Checkout stark anpassen müssen, an Geschäftskunden mit eigenen Konditionen verkaufen, in viele Länder liefern oder sehr hohe Bestellmengen haben. Wir rechnen das vor dem Angebot mit Ihren Zahlen durch. Ein späterer Wechsel auf Plus ist ohne neuen Shop möglich",
        },
        {
          q: "Ein Shop für mehrere Länder oder mehrere Shops?",
          a: "Teilen sich die Länder Sortiment, Lager und Team, reicht ein Shop mit Shopify Markets. Hat ein Land ein eigenes Sortiment, ein eigenes Lager oder ein eigenes Team, ist ein eigener Shop meist einfacher zu führen. Dazwischen gibt es Mischformen, die wir im Audit klären",
        },
        {
          q: "Fertiges Theme kaufen oder eigenes entwickeln lassen?",
          a: "Für einen klaren Katalog mit wenigen Besonderheiten reicht ein gekauftes Theme, das wir anpassen. Ein eigenes Theme lohnt sich, wenn Produktseiten viel erklären müssen, wenn Sie Konfiguratoren oder technische Unterlagen brauchen oder wenn der Shop sich deutlich vom Wettbewerb abheben soll",
        },
        {
          q: "Welche laufenden Kosten kommen zu Shopify dazu?",
          a: "Der monatliche Shopify-Tarif, Gebühren je nach Zahlungsanbieter, die Apps, die Sie nutzen, und auf Wunsch unsere Betreuung. Wir listen diese Posten vor dem Start auf, damit Sie die Kosten pro Monat kennen und nicht erst mit der ersten Abrechnung",
        },
        {
          q: "Lässt sich Shopify datenschutzkonform betreiben?",
          a: "Ja, mit der richtigen Einrichtung. Für Händler in Europa ist Shopify International in Irland Vertragspartner, und es gibt einen Vertrag zur Auftragsverarbeitung. Wir richten Cookie-Einwilligung und Tracking so ein, dass erst nach Zustimmung erfasst wird. Die rechtliche Bewertung bleibt bei Ihrem Datenschutzbeauftragten, wir sind keine Rechtsberatung",
        },
        {
          q: "Wem gehören Theme, Apps und Daten?",
          a: "Ihnen. Der Shop läuft auf Ihren Namen, wir arbeiten mit einem Mitarbeiter- oder Partnerzugang, den Sie jederzeit entziehen können. Theme-Code und eigene Apps übergeben wir vollständig, damit auch jemand anderes daran weiterarbeiten kann",
        },
        {
          q: "Übernehmen Sie einen Shopify-Shop von einer anderen Agentur?",
          a: "Ja. Zuerst sehen wir uns Theme, Apps und Anbindungen an und sagen Ihnen, was in Ordnung ist und wo es hakt. Danach entscheiden Sie, ob wir nur betreuen, gezielt nachbessern oder Teile neu aufbauen",
        },
      ],
    },
  },
};

export const getTechPage = (id: string) => techPages[id];
