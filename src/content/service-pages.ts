// Long-form content for the service pages.
//
// The short version of a service page (hero, the catalogue groups, the
// technology cards) answers "what do you do". It does not answer the
// questions someone actually arrives with: is this even my problem, how
// does it run, what is included, what does it depend on, what will it
// cost. Those answers are what both a reader and a language model quote.
//
// A service only gets a long page once this content exists for it;
// everything else keeps the short layout (see ServicePage in Inner.tsx).
//
// Copy rules (owner, 30.10.2026): no full stop at the very end of a text,
// no long dash. Inside a paragraph normal punctuation applies.

export type Phase = { title: string; text: string; note?: string };
export type Block = { heading: string; paragraphs: string[]; termSlug?: string; termLabel?: string };
export type BeforeAfter = { before: string; after: string };
export type Faq = { q: string; a: string };

export type ServicePageContent = {
  /** 60 to 90 words of prose, right under the hero, no heading */
  intro: string;
  /** The strip under the hero: what happens after someone writes */
  promise: { title: string; steps: string[]; cta: string };
  symptoms: { title: string; items: string[] };
  deepDive: { title: string; intro: string; blocks: Block[] };
  scope: {
    title: string;
    lead: string;
    included: { title: string; text: string; items: string[] };
    addon: { title: string; text: string; items: string[] };
    outOfScope: { title: string; text: string; items: { text: string; href: string; label: string }[] };
  };
  process: { title: string; lead: string; phases: Phase[] };
  change: { title: string; lead: string; rows: BeforeAfter[] };
  price: { title: string; lead: string; drivers: { title: string; text: string }[]; note: string };
  faq: { title: string; items: Faq[] };
};

export const servicePages: Record<string, ServicePageContent> = {
  websites: {
    intro:
      "Eine Website ist selten zu alt. Sie ist meist an einer konkreten Stelle unklar, und genau dort entscheiden Besucher, ob sie anfragen oder weitersuchen. Wir bauen Unternehmenswebsites für Industrie und B2B: vom Relaunch eines gewachsenen Auftritts bis zur neuen Seite mit Produktkatalog, Referenzen und mehreren Sprachen. Am Anfang steht nicht das Design, sondern die Frage, welche Fragen Ihre Kunden mitbringen",

    promise: {
      title: "Was nach Ihrer Nachricht passiert",
      steps: [
        "Sie beschreiben in ein paar Sätzen, was gerade nicht rundläuft",
        "Wir melden uns innerhalb eines Werktags und stellen die Fragen, die wirklich zählen",
        "Sie bekommen eine Einschätzung, einen groben Rahmen und einen Vorschlag für den ersten Schritt",
      ],
      cta: "Projekt besprechen",
    },

    symptoms: {
      title: "Kennen Sie das?",
      items: [
        "Die Website wirkt neben dem Wettbewerb veraltet",
        "Besucher kommen, aber es entstehen kaum Anfragen daraus",
        "Vieles muss am Telefon erklärt werden, was die Website zeigen sollte",
        "Jede Änderung geht nur über den Entwickler und dauert Wochen",
        "Unklar, wo man zuerst ansetzen soll: Design, Texte oder Struktur",
      ],
    },

    deepDive: {
      title: "Was eine Website leisten muss",
      intro:
        "Vier Stellen entscheiden darüber, ob aus einem Besuch eine Anfrage wird. An jeder davon geht auf den meisten Unternehmenswebsites etwas verloren",
      blocks: [
        {
          heading: "Struktur: wonach Besucher wirklich suchen",
          paragraphs: [
            "Die meisten Websites sind so aufgebaut, wie das Unternehmen organisiert ist, also nach Abteilungen, Produktlinien oder Firmengeschichte. Besucher suchen aber nach ihrem eigenen Problem: nach der Branche, in der sie arbeiten, oder nach der Aufgabe, die sie gerade lösen müssen.",
            "Deshalb beginnt jedes Projekt bei uns nicht mit dem Design, sondern mit der Frage, welche Fragen Ihre Kunden mitbringen und in welcher Reihenfolge sie beantwortet werden müssen. Die Struktur folgt dieser Reihenfolge, nicht dem Organigramm",
          ],
        },
        {
          heading: "Der Weg von der Seite zur Anfrage",
          paragraphs: [
            "Zwischen „interessant“ und „ich melde mich“ liegen auf vielen Websites zu viele Schritte: ein Formular mit zwölf Pflichtfeldern, eine Telefonnummer, die nur im Impressum steht, ein Ansprechpartner, der nirgends genannt wird.",
            "Wir machen diesen Weg kurz und an jeder Stelle sichtbar, und messen anschließend, wie viele Besucher ihn tatsächlich gehen. Erst diese Zahl macht aus Meinungen über die Website Entscheidungen",
          ],
          termSlug: "conversion-rate",
          termLabel: "Was die Conversion-Rate aussagt",
        },
        {
          heading: "Mobil ist der Normalfall",
          paragraphs: [
            "Der erste Kontakt passiert heute meistens auf dem Handy, abends, unterwegs, zwischen zwei Terminen. Wenn dort die Navigation hakt oder das Formular nicht auf den Bildschirm passt, ist die Anfrage weg, bevor sie entsteht.",
            "Wir bauen jede Seite von der kleinsten Bildschirmgröße aufwärts, nicht umgekehrt",
          ],
          termSlug: "responsive-design",
          termLabel: "Responsive Design kurz erklärt",
        },
        {
          heading: "Inhalte, die Ihr Team selbst pflegt",
          paragraphs: [
            "Eine Website veraltet nicht durch ihr Design, sondern durch Inhalte, die niemand aktualisiert, weil jede Änderung beim Dienstleister beauftragt werden muss.",
            "Wir übergeben deshalb einen Redaktionsbereich, der genau die Dinge abdeckt, die sich bei Ihnen wirklich ändern: News, Referenzen, Stellen, Ansprechpartner. Nicht mehr, damit ihn auch jemand benutzt",
          ],
          termSlug: "cms",
          termLabel: "Was ein CMS für Ihr Team bedeutet",
        },
      ],
    },

    scope: {
      title: "Was im Projekt enthalten ist",
      lead: "Der Umfang wird vor dem Start schriftlich festgehalten, damit später niemand raten muss, was dazugehört und was nicht",
      included: {
        title: "Immer dabei",
        text: "In jedem Website-Projekt enthalten, ohne Aufpreis",
        items: [
          "Analyse der bestehenden Website und der Kundenfragen",
          "Struktur, Seitenarchitektur und Navigationskonzept",
          "Individuelles Design, abgestimmt auf Ihren Markenauftritt",
          "Umsetzung auf WordPress mit wiederverwendbaren Modulen",
          "Redaktionsbereich für Ihr Team, mit kurzer Einweisung",
          "Responsive Umsetzung ab der kleinsten Bildschirmgröße",
          "Anfrageformulare und eine Auswertung, die Anfragen sichtbar macht",
          "Rechtliche Pflichtteile: Cookie-Einwilligung und Datenschutz",
          "Funktions- und Browsertest vor dem Launch",
          "Umzug auf die Live-Umgebung mit erhaltenen Seitenadressen",
        ],
      },
      addon: {
        title: "Auf Wunsch",
        text: "Kommt dazu, wenn Ihre Aufgabe es braucht, und wird vorher getrennt ausgewiesen",
        items: [
          "Mehrsprachigkeit für mehrere Länder und Märkte",
          "Produktkatalog mit technischen Unterlagen zum Herunterladen",
          "Anbindung an CRM, ERP oder Warenwirtschaft",
          "Barrierefreiheit nach BFSG",
          "Texterstellung und Content-Einpflege",
          "Landingpages für einzelne Kampagnen",
          "KI-Suche über Website und Dokumentation",
          "Betreuung nach dem Start: Updates, Sicherung, Weiterentwicklung",
        ],
      },
      outOfScope: {
        title: "Dafür gibt es eigene Leistungen",
        text: "Gehört nicht in dieses Projekt, sondern in eine Leistung mit eigener Seite",
        items: [
          { text: "Ein Shop mit Zahlung, Versand und Produktkatalog", href: "/leistungen/online-shops", label: "Online-Shops" },
          { text: "Ein Kundenportal oder ein internes System", href: "/leistungen/systeme-und-portale", label: "Systeme und Portale" },
          { text: "Abläufe automatisieren und Programme verbinden", href: "/leistungen/automatisierung", label: "Automatisierung" },
        ],
      },
    },

    process: {
      title: "So läuft ein Website-Projekt",
      lead: "Fünf Phasen, jede mit einem Ergebnis, das Sie sehen und freigeben. Sie wissen jederzeit, woran gerade gearbeitet wird und was als Nächstes kommt",
      phases: [
        {
          title: "Gespräch und Analyse",
          text: "Wir sehen uns die bestehende Website an, sprechen mit Ihnen über Kunden, Anfragen und Vertrieb und sammeln, welche Fragen am Telefon immer wieder gestellt werden. Daraus entsteht die Liste der Dinge, die die Website beantworten muss",
          note: "Ergebnis: Aufgabenstellung und grober Rahmen",
        },
        {
          title: "Struktur und Inhalte",
          text: "Wir entwerfen die Seitenstruktur und legen fest, welche Seite welche Frage beantwortet und wohin sie führt. Erst wenn diese Reihenfolge stimmt, entsteht Design, denn ein schönes Layout über einer falschen Struktur hilft niemandem",
          note: "Ergebnis: Seitenarchitektur zur Freigabe",
        },
        {
          title: "Design",
          text: "Wir gestalten die zentralen Seitentypen, nicht jede einzelne Seite: Startseite, Leistungs- und Produktseite, Referenz, Kontakt. Daraus entsteht ein Satz Module, aus dem sich später jede weitere Seite zusammensetzen lässt",
          note: "Ergebnis: Design der Schlüsselseiten zur Freigabe",
        },
        {
          title: "Umsetzung",
          text: "Wir bauen die Website auf WordPress, modular und mit einem Redaktionsbereich, der nur das enthält, was Ihr Team wirklich braucht. Inhalte werden eingepflegt, Formulare angebunden und die Ladezeiten optimiert",
          note: "Ergebnis: Website auf einer Testumgebung",
        },
        {
          title: "Test, Launch und danach",
          text: "Funktions- und Browsertest, Prüfung auf Mobilgeräten, dann der Umzug auf die Live-Umgebung mit erhaltenen Seitenadressen. Nach dem Start prüfen wir, ob Formulare und Benachrichtigungen ankommen, und bleiben erreichbar",
          note: "Ergebnis: Website live, Team eingewiesen",
        },
      ],
    },

    change: {
      title: "Was sich danach ändert",
      lead: "Nicht das Design ist der Unterschied, sondern was die Website an Arbeit abnimmt",
      rows: [
        { before: "Die Website wirkt wie eine Visitenkarte", after: "Die Website erklärt den Nutzen und bringt Anfragen" },
        { before: "Anfragen verlaufen im Nichts", after: "Ein kurzer, sichtbarer Weg vom Interesse zur Anfrage" },
        { before: "Die mobile Ansicht ist unpraktisch", after: "Funktioniert auf jedem Gerät gleich gut" },
        { before: "Änderungen dauern Wochen", after: "Ihr Team aktualisiert Inhalte selbst" },
        { before: "Der Vertrieb erklärt am Telefon die Grundlagen", after: "Die Website beantwortet die Standardfragen vorab" },
      ],
    },

    price: {
      title: "Wovon der Preis abhängt",
      lead: "Eine Unternehmenswebsite ist kein Produkt mit Preisschild. Was sie kostet, hängt an wenigen Faktoren, und die lassen sich im ersten Gespräch klären",
      drivers: [
        {
          title: "Umfang der Struktur",
          text: "Eine Website mit acht Seiten ist etwas anderes als ein Auftritt mit Produktkatalog, Referenzen, Blog und Karrierebereich. Entscheidend ist nicht die Seitenzahl, sondern die Zahl unterschiedlicher Seitentypen",
        },
        {
          title: "Sprachen und Länder",
          text: "Jede weitere Sprache bedeutet Übersetzung, Pflege und eine saubere Zuordnung für Suchmaschinen. Zwei Sprachen sind überschaubar, acht Märkte mit eigenen Inhalten sind ein eigenes Projekt",
        },
        {
          title: "Anbindungen",
          text: "Eine Website, die Anfragen ins CRM schreibt oder Produktdaten aus dem ERP zieht, braucht eine Schnittstelle. Der Aufwand hängt daran, wie gut das Zielsystem dokumentiert ist",
        },
        {
          title: "Inhalte",
          text: "Wenn Texte, Bilder und technische Unterlagen vorliegen, geht es schnell. Wenn sie erst entstehen müssen, planen wir das als eigenen Teil ein, statt es nebenbei laufen zu lassen",
        },
        {
          title: "Ausgangslage",
          text: "Ein Relaunch mit bestehenden Inhalten und Seitenadressen braucht eine Migration, damit Suchmaschinenrankings nicht verloren gehen. Eine neue Website ohne Altlasten ist in diesem Punkt einfacher",
        },
      ],
      note: "Nach dem ersten Gespräch erhalten Sie eine Einschätzung mit Rahmen und Termin, bevor Sie sich entscheiden",
    },

    faq: {
      title: "Häufige Fragen",
      items: [
        {
          q: "Reicht es nicht, das bestehende Design einfach aufzufrischen?",
          a: "Manchmal schon, und das sagen wir Ihnen ehrlich im ersten Gespräch. Oft liegt das eigentliche Problem aber nicht am Look, sondern daran, dass die Website nicht erklärt, was Sie anbieten, oder Anfragen unterwegs verliert. Das lässt sich nicht mit neuen Farben lösen",
        },
        {
          q: "Woher wissen Sie, ob wir eine Website oder ein Portal brauchen?",
          a: "Das finden wir gemeinsam heraus. Wenn Ihre Kunden Informationen brauchen und Kontakt aufnehmen sollen, reicht eine Website. Wenn sie sich einloggen, Daten einsehen oder etwas kaufen sollen, ist es meist mehr als das. Das sagen wir Ihnen ehrlich, statt Ihnen etwas zu verkaufen, das Sie nicht brauchen",
        },
        {
          q: "Können wir Inhalte später selbst ändern, ohne Sie jedes Mal zu fragen?",
          a: "Ja, genau das ist das Ziel. Texte, Bilder und Angebote sollen Sie selbst pflegen können, ohne auf uns zu warten. Wir übernehmen die technische Seite und die größeren Weiterentwicklungen",
        },
        {
          q: "Wie stellen Sie sicher, dass die neue Website tatsächlich mehr Anfragen bringt?",
          a: "Eine Website, die niemand versteht, bringt keine Anfragen, egal wie schön sie aussieht. Deshalb arbeiten wir von der Kundenfrage rückwärts: Was muss jemand sehen, um Vertrauen zu fassen und den nächsten Schritt zu gehen. Struktur und Texte sind Teil der Arbeit, nicht nur das Design",
        },
        {
          q: "Was passiert mit unseren bestehenden Seitenadressen und Rankings?",
          a: "Vor dem Umzug nehmen wir alle bestehenden Adressen auf und ordnen jeder davon eine Zieladresse auf der neuen Website zu. Seiten, die Besucher über Suchmaschinen erreichen, bleiben erreichbar, auch wenn sich die Struktur ändert",
        },
        {
          q: "Arbeiten Sie nur mit WordPress?",
          a: "Für Unternehmenswebsites meistens ja, weil Ihr Team damit selbst arbeiten kann und es sich gut erweitern lässt. Wenn eine Aufgabe besser zu einer anderen Lösung passt, etwa einem eigenen System oder einem Shop, sagen wir das und schlagen den passenden Weg vor",
        },
      ],
    },
  },
};

export const getServicePage = (slug: string) => servicePages[slug];
