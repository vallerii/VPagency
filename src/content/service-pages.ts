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
export type Faq = { q: string; a: string };

export type ServicePageContent = {
  /** 60 to 90 words of prose, right under the hero, no heading */
  intro: string;
  /** "band" lays the hero out in one column with the situations running
      horizontally across the bottom, instead of the column on the right.
      The three steps and their scroll animation stay the same everywhere */
  heroLayout?: "band" | "pairs" | "quiet" | "grid" | "ask" | "chat";
  /** "plain" drops the card look: hairlines and type instead of tinted
      boxes. Set per block, because a page may want one and not the other */
  exitsStyle?: "plain";
  scopeStyle?: "plain";
  /** The three steps in the hero. Service pages carry their own set: the
      generic one on the home page ("you describe, we clarify, we solve")
      says the same thing in weaker words, and its third step promises an
      implementation that only begins after a quote. */
  promise: { steps: { title: string; text: string }[]; cta: string };
  /** items ride the track in the hero. pairs is the "pairs" hero: two
      tracks drifting against each other, by hand on one side and done by
      itself on the other */
  symptoms: { title: string; items: string[]; pairs?: { from: string; to: string }[] };
  /** For the two readers this page is not written for: the one who already
      knows the platform, and the one who has an idea rather than a site */
  exits: { question: string; label: string; href: string }[];
  /** The stacking deck. Pages that use the split layout below leave it out */
  deepDive?: { title: string; intro: string; blocks: Block[] };
  /** Alternative to deepDive: two columns against each other, for a page
      whose core question is a yes or no rather than four aspects */
  decision?: {
    title: string;
    intro: string;
    standard: { title: string; lead: string; items: string[] };
    custom: { title: string; lead: string; items: string[] };
    note: string;
  };
  /** A single statement, set apart, where one promise carries the page */
  trust?: { title: string; text: string };
  /** Levels of autonomy, as bands. For a page whose central question is
      how far something may act on its own */
  tiers?: {
    title: string;
    intro: string;
    levels: { label: string; rule: string; items: string[] }[];
    note: string;
  };
  /** What is deliberately left out, and when it comes back. For a page
      whose central advice is to build less at first */
  omit?: {
    title: string;
    intro: string;
    items: { label: string; text: string }[];
    note: string;
  };
  /** The places where a visitor is lost, drawn as a narrowing shape. For
      a page whose subject is a path with steps that leak */
  funnel?: {
    title: string;
    intro: string;
    steps: { label: string; text: string }[];
    note: string;
  };
  /** A worked example, shown as rows that add up. For a page whose whole
      argument is arithmetic */
  ledger?: {
    title: string;
    lead: string;
    head: [string, string, string, string];
    rows: [string, string, string, string][];
    total: string;
    totalNote: string;
    note: string;
  };
  scope: {
    title: string;
    lead: string;
    included: { title: string; text: string; items: string[] };
    outOfScope: { title: string; text: string; items: { text: string; href: string; label: string }[] };
  };
  process: {
    title: string;
    lead: string;
    phases: Phase[];
    /** "timeline" lays the phases out as cards, three across. "rail" runs
        them along one horizontal line, which suits a short sequence.
        Both replace the zigzag. decideAfter marks the phase after which
        the client decides whether the build starts */
    layout?: "timeline" | "rail" | "steps";
    decideAfter?: number;
    decideLabel?: string;
  };
  price: { title: string; lead: string; drivers: { title: string; text: string }[]; note: string };
  faq: { title: string; items: Faq[] };
};

export const servicePages: Record<string, ServicePageContent> = {
  websites: {
    intro:
      "Eine Website ist selten zu alt. Sie ist meist an einer konkreten Stelle unklar, und genau dort entscheiden Besucher, ob sie anfragen oder weitersuchen. Wir bauen Unternehmenswebsites für Industrie und B2B: vom Relaunch eines gewachsenen Auftritts bis zur neuen Seite mit Produktkatalog, Referenzen und mehreren Sprachen. Am Anfang steht nicht das Design, sondern die Frage, welche Fragen Ihre Kunden mitbringen. Wir sitzen in Siegen und arbeiten überwiegend für Industrie und B2B: Produktion, Messtechnik, Verpackung und Bau",

    promise: {
      steps: [
        { title: "Anfrage", text: "Sie beschreiben in ein paar Sätzen, was gerade nicht rundläuft" },
        { title: "Beratung", text: "Wir melden uns innerhalb eines Werktags und stellen die Fragen, die wirklich zählen" },
        { title: "Vorschlag", text: "Sie bekommen eine Einschätzung, einen groben Rahmen und einen Vorschlag für den ersten Schritt" },
      ],
      cta: "Projekt besprechen",
    },

    exits: [
      { question: "Sie wissen schon, welche Plattform es werden soll?", label: "Zur Technik", href: "/technologien" },
      { question: "Es gibt noch keine Website, sondern eine Idee?", label: "Neue Produkte", href: "/leistungen/neue-produkte" },
    ],

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
      outOfScope: {
        title: "Dafür gibt es eigene Leistungen",
        text: "Gehört nicht in dieses Projekt, sondern in eine Leistung mit eigener Seite",
        items: [
          { text: "Ein Shop mit Zahlung, Versand und Produktkatalog", href: "/leistungen/online-shops", label: "Online-Shops" },
          { text: "Ein Kundenportal oder ein internes System", href: "/leistungen/systeme-und-portale", label: "Systeme und Portale" },
          { text: "Abläufe automatisieren und Programme verbinden", href: "/leistungen/automatisierung", label: "Automatisierung" },
          { text: "Updates, Sicherung und Weiterentwicklung nach dem Start", href: "/leistungen/betreuung", label: "Betreuung" },
        ],
      },
    },

    process: {
      title: "So läuft ein Website-Projekt",
      lead: "Fünf Phasen, jede mit einem Ergebnis, das Sie sehen und freigeben. Sie wissen jederzeit, woran gerade gearbeitet wird und was als Nächstes kommt",
      phases: [
        {
          title: "Aufnahme und Plan",
          text: "Wir sichten die bestehende Website, Ihre Anfragen und das, was der Vertrieb am Telefon immer wieder erklären muss. Daraus entsteht die Liste der Fragen, die die neue Website beantworten soll, und die Reihenfolge, in der wir sie beantworten",
          note: "Ergebnis: Fragenliste und Projektplan",
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

    price: {
      title: "Wovon der Preis abhängt",
      lead: "Eine Unternehmenswebsite ist kein Produkt mit Preisschild. Was sie kostet, hängt an wenigen Faktoren, und die lassen sich im ersten Gespräch klären",
      drivers: [
        {
          title: "Wie viele Seitentypen",
          text: "Nicht die Zahl der Seiten entscheidet, sondern wie viele unterschiedlich aufgebaute es gibt. Zwanzig Seiten aus drei Vorlagen sind schneller gebaut als sechs Seiten, die alle anders aussehen",
        },
        {
          title: "Wie viele Sprachen",
          text: "Eine zweite Sprache ist eine Übersetzung. Mehrere Märkte mit eigenen Inhalten, Preisen und Ansprechpartnern sind ein zweites Projekt neben dem ersten",
        },
        {
          title: "Wie gut die Zielsysteme beschrieben sind",
          text: "Eine Anbindung an CRM oder ERP ist überschaubar, wenn die Schnittstelle dokumentiert ist. Fehlt die Dokumentation, geht die Zeit für das Nachbauen drauf, nicht für die Website",
        },
        {
          title: "Ob die Inhalte fertig sind",
          text: "Liegen Texte, Bilder und technische Unterlagen vor, läuft die Umsetzung durch. Müssen sie erst entstehen, planen wir das als eigenen Teil ein, statt es nebenbei laufen zu lassen",
        },
        {
          title: "Was vom alten Auftritt mitkommt",
          text: "Eine Website ohne Vorgeschichte ist in diesem Punkt einfach. Bei einem Relaunch kommen Inhalte, Seitenadressen und Suchmaschinenrankings mit, und dafür braucht es eine geprüfte Migration",
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

  "systeme-und-portale": {
    heroLayout: "band",
    exitsStyle: "plain",
    scopeStyle: "plain",
    intro:
      "Die meisten Unternehmen brauchen keine neue Software, sondern einen Ablauf, den jemand einmal vollständig aufgeschrieben hat. Erst dann zeigt sich, ob eine fertige Lösung passt oder ob sie Ihr Team zwingen würde, anders zu arbeiten als es muss. Wir bauen interne Werkzeuge, Kunden- und Partnerportale für Unternehmen, die schneller gewachsen sind als ihre Abläufe. Angefangen wird nie mit der ganzen Firma, sondern mit einem Prozess, der sich rechnen muss, bevor der nächste folgt",

    promise: {
      steps: [
        { title: "Anfrage", text: "Sie beschreiben, welcher Ablauf bei Ihnen gerade die meiste Zeit kostet" },
        { title: "Prozesstermin", text: "Wir gehen den Ablauf mit den Menschen durch, die ihn täglich machen" },
        { title: "Vorschlag", text: "Sie bekommen einen Vorschlag für den ersten Ausschnitt, mit Rahmen und Termin" },
      ],
      cta: "Projekt besprechen",
    },

    exits: [
      { question: "Die vorhandenen Programme passen, sie reden nur nicht miteinander?", label: "Automatisierung", href: "/leistungen/automatisierung" },
      { question: "Es soll ein eigenes Produkt für den Markt werden, kein internes Werkzeug?", label: "Neue Produkte", href: "/leistungen/neue-produkte" },
    ],

    symptoms: {
      title: "Kennen Sie das?",
      items: [
        "Die wichtigste Tabelle kann immer nur eine Person gleichzeitig bearbeiten",
        "Jeder Bericht wird von Hand aus mehreren Programmen zusammengesucht",
        "Niemand weiß sicher, welche Datei gerade die aktuelle ist",
        "Alles Wichtige läuft über eine Person, und im Urlaub steht es still",
        "Eine gekaufte Software wurde eingeführt und wird seitdem umgangen",
        "Neue Mitarbeitende brauchen Monate, bis sie den Ablauf kennen",
      ],
    },

    decision: {
      title: "Wann sich eigene Software lohnt und wann nicht",
      intro:
        "Die ehrliche Antwort lautet oft: gar nicht. Bevor wir ein Angebot schreiben, klären wir, auf welcher Seite Ihre Aufgabe steht",
      standard: {
        title: "Nehmen Sie Standardsoftware, wenn",
        lead: "Für Buchhaltung, Lohn und klassische Warenwirtschaft gibt es ausgereifte Programme, die über Jahrzehnte verbessert wurden. Diese nachzubauen ist teuer und bringt niemandem etwas, und wir raten davon ab, auch wenn wir daran verdienen würden",
        items: [
          "Ihr Ablauf im Kern derselbe ist wie in anderen Unternehmen Ihrer Größe",
          "es für die Aufgabe einen etablierten Markt mit mehreren Anbietern gibt",
          "gesetzliche Vorgaben dahinterstehen, die jemand dauerhaft nachpflegen muss",
          "die Zeit, die heute verloren geht, sich in wenigen Stunden pro Woche misst",
        ],
      },
      custom: {
        title: "Eigene Software lohnt sich, wenn",
        lead: "Sobald Ihr Ablauf anders ist als der aller anderen, beginnt gekaufte Software Sie zu formen statt umgekehrt. Und oft ist genau dieser Unterschied der Grund, warum Kunden bei Ihnen kaufen und nicht beim Wettbewerb",
        items: [
          "fertige Programme Ihr Team zwingen würden, anders zu arbeiten als es muss",
          "die Arbeit heute über mehrere Programme und Tabellen verteilt ist",
          "Zahlen für Entscheidungen von Hand zusammengesucht werden müssen",
          "Lizenzen für viele Arbeitsplätze teurer werden als eine eigene Lösung",
        ],
      },
      note:
        "Die ehrlichste Zahl ist dabei nicht der Preis einer Lizenz, sondern die Zeit, die heute pro Woche in Abtippen, Nachfragen und Zusammensuchen geht, mal der Zahl der Menschen, die das tun. Trägt diese Zahl eine Entwicklung nicht, sagen wir Ihnen das im ersten Gespräch",
    },

    scope: {
      title: "Was im Projekt enthalten ist",
      lead: "Der Umfang wird vor dem Start schriftlich festgehalten, zusammen mit dem, was ausdrücklich nicht dazugehört",
      included: {
        title: "Immer dabei",
        text: "In jedem Systemprojekt enthalten, ohne Aufpreis",
        items: [
          "Aufnahme des Ablaufs mit den Menschen, die ihn täglich machen",
          "Festlegung des ersten Ausschnitts und was er messbar verbessern soll",
          "Rollen und Rechte: wer was sehen und ändern darf",
          "Eine Oberfläche, die auch ohne Schulung verständlich ist",
          "Umsetzung auf Laravel, mit Ihrem Ablauf als Vorgabe",
          "Übernahme der bestehenden Daten aus Tabellen oder Altsystemen",
          "Testumgebung, auf der Ihr Team schon während der Umsetzung mitarbeitet",
          "Einweisung des Teams und eine kurze schriftliche Anleitung",
          "Quellcode, Zugänge und Dokumentation zur Übergabe",
          "Begleitung der ersten Wochen im echten Betrieb",
        ],
      },
      outOfScope: {
        title: "Dafür gibt es eigene Leistungen",
        text: "Gehört nicht in dieses Projekt, sondern in eine Leistung mit eigener Seite",
        items: [
          { text: "Eine Website, die Ihr Unternehmen nach außen erklärt", href: "/leistungen/websites", label: "Websites" },
          { text: "Ein Shop mit Katalog, Zahlung und Versand", href: "/leistungen/online-shops", label: "Online-Shops" },
          { text: "Vorhandene Programme verbinden, ohne eigene Entwicklung", href: "/leistungen/automatisierung", label: "Automatisierung" },
          { text: "Betrieb, Updates und Weiterentwicklung nach dem Start", href: "/leistungen/betreuung", label: "Betreuung" },
        ],
      },
    },

    process: {
      title: "So läuft ein Systemprojekt",
      lead: "Solche Projekte scheitern selten an der Technik. Sie scheitern daran, dass zwölf Abteilungen gleichzeitig ein System bekommen sollen, das noch niemand benutzt hat. Deshalb bauen wir in Ausschnitten, und nach der zweiten Phase entscheiden Sie, ob es weitergeht",
      layout: "timeline",
      decideAfter: 2,
      decideLabel: "Hier entscheiden Sie, ob gebaut wird",
      phases: [
        {
          title: "Prozessaufnahme",
          text: "Wir setzen uns zu den Menschen, die den Ablauf täglich machen, und schreiben auf, wie er wirklich läuft, nicht wie er laufen sollte. Dabei kommt fast immer heraus, dass es zwei oder drei Varianten gibt, von denen die Leitung eine kennt. Genau hier entscheidet sich später, ob ein System benutzt oder nebenher weiter die eigene Tabelle geführt wird",
          note: "Ergebnis: der Ablauf schriftlich, mit den Stellen, an denen Zeit verloren geht",
        },
        {
          title: "Ausschnitt und Plan",
          text: "Aus dem Ablauf wählen wir den Teil, der am meisten kostet und sich am schnellsten lösen lässt. Dazu gehört eine Einschätzung, was er kostet und was er einspart, damit Sie entscheiden können, bevor gebaut wird",
          note: "Ergebnis: Vorschlag mit Rahmen, Termin und erwartetem Effekt",
        },
        {
          title: "Erste Version",
          text: "Wir bauen diesen Ausschnitt und geben ihn früh auf eine Testumgebung, auf der Ihr Team mitarbeitet, statt am Ende ein fertiges Produkt vorgesetzt zu bekommen. Was dabei auffällt, fließt noch in dieselbe Phase ein",
          note: "Ergebnis: lauffähige Version auf einer Testumgebung",
        },
        {
          title: "Echter Betrieb",
          text: "Die bestehenden Daten ziehen um, das Team wird eingewiesen, und der Ausschnitt geht bei einer Abteilung in den echten Betrieb. Die ersten Wochen begleiten wir eng, denn dann kommen die Fragen, die vorher niemand hatte",
          note: "Ergebnis: eine Abteilung arbeitet damit",
        },
        {
          title: "Ausbau",
          text: "Erst wenn der erste Ausschnitt trägt, kommt der nächste dazu. So wächst das System entlang Ihres Betriebs, und jede Erweiterung wird an dem beurteilt, was vorher tatsächlich passiert ist",
          note: "Ergebnis: nächster Ausschnitt geplant und freigegeben",
        },
      ],
    },

    trust: {
      title: "Der Code und die Daten gehören Ihnen",
      text: "Eine Website kann man zur Not neu bauen. Ein System, in dem Ihr Betrieb läuft, nicht. Deshalb bekommen Sie den vollständigen Quellcode und alle Zugänge in der Form, die Sie brauchen, dazu eine Dokumentation, mit der auch ein anderes Team weiterarbeiten kann. Was übergeben wird und wann, steht im Vertrag und nicht in einer Zusage am Telefon",
    },

    price: {
      title: "Wovon der Preis abhängt",
      lead: "Eigene Software hat keinen Listenpreis. Was sie kostet, hängt an wenigen Dingen, und die meisten davon lassen sich im ersten Gespräch klären",
      drivers: [
        {
          title: "Wie viele Rollen beteiligt sind",
          text: "Ein Werkzeug für eine Abteilung ist überschaubar. Sobald Vertrieb, Produktion, Buchhaltung und Leitung unterschiedliche Sichten und Rechte brauchen, wächst nicht die Oberfläche, sondern die Zahl der Regeln dahinter",
        },
        {
          title: "Wie viele Programme angebunden werden",
          text: "Jedes weitere System ist ein eigener kleiner Teil des Projekts. Ist die Schnittstelle dokumentiert, ist es Routine. Fehlt die Dokumentation, geht die Zeit dafür drauf und nicht für Ihre Abläufe",
        },
        {
          title: "Ob Menschen von außen Zugriff bekommen",
          text: "Ein internes Werkzeug ist etwas anderes als ein Portal, in das Kunden oder Partner sich einloggen. Sobald Fremde hineinschauen, kommen Zugänge, Rechte und Nachvollziehbarkeit dazu",
        },
        {
          title: "In welchem Zustand die Daten sind",
          text: "Liegen die Daten sauber in einer Tabelle oder einem Altsystem, ist der Umzug Routine. Sind sie über mehrere Dateien, Formate und Jahre verteilt, ist die Bereinigung ein eigener Posten, den wir getrennt ausweisen",
        },
        {
          title: "Ob offline gearbeitet werden muss",
          text: "Im Büro ist Netz selbstverständlich. Auf der Baustelle, im Lager oder beim Kunden nicht. Soll die Arbeit auch ohne Verbindung weitergehen, ist das eine eigene Entscheidung mit eigenem Aufwand",
        },
      ],
      note: "Nach der Prozessaufnahme erhalten Sie einen Rahmen für den ersten Ausschnitt, bevor Sie sich für die Umsetzung entscheiden",
    },

    faq: {
      title: "Häufige Fragen",
      items: [
        {
          q: "Warum nicht einfach ein fertiges CRM oder ERP kaufen?",
          a: "Oft ist genau das der richtige Weg, und dann sagen wir es Ihnen. Eigene Software lohnt sich dort, wo Ihr Ablauf anders ist als der Standard, und wo eine gekaufte Lösung Ihr Team zwingen würde, anders zu arbeiten als es muss. Das klärt sich in einem Gespräch, nicht in einem Angebot",
        },
        {
          q: "Wem gehört der Code, und was passiert, wenn wir uns trennen?",
          a: "Der Code und die Daten gehören Ihnen. Wir übergeben beides in der Form, die Sie brauchen, zusammen mit allen Zugängen und einer Dokumentation, mit der ein anderes Team weiterarbeiten kann. Was übergeben wird und wann, halten wir im Vertrag fest",
        },
        {
          q: "Wie stellen Sie sicher, dass unsere Leute das System auch nutzen?",
          a: "Indem wir vor dem ersten Entwurf mit ihnen sprechen und nicht nur mit der Leitung. Ein System wird umgangen, wenn es mehr Eingaben verlangt als die Tabelle, die es ersetzen soll. Deshalb bauen wir eher zu wenige Felder und ergänzen später, statt am Anfang alles abzufragen",
        },
        {
          q: "Was passiert mit unseren bisherigen Tabellen und der Historie?",
          a: "Die ziehen mit um. Vorher sehen wir uns an, was wirklich gebraucht wird und wo Daten doppelt oder widersprüchlich sind. Was sich nicht sauber übernehmen lässt, benennen wir vorher, statt es stillschweigend wegzulassen",
        },
        {
          q: "Brauchen wir dafür einen eigenen Server und jemanden, der ihn betreut?",
          a: "Nein. Das System kann bei einem Anbieter laufen, um den wir uns kümmern, oder auf Ihrer eigenen Infrastruktur, wenn das für Sie wichtig ist. Was sinnvoll ist, hängt von Ihren Daten und Ihren internen Vorgaben ab, und wir klären es vor dem Start",
        },
        {
          q: "Wie lange dauert so ein Projekt?",
          a: "Das hängt am Ausschnitt, mit dem wir anfangen. Deshalb nennen wir keine Pauschale, sondern einen Termin für den ersten Ausschnitt, nachdem wir den Ablauf gesehen haben. Alles danach planen wir mit dem, was im echten Betrieb gelernt wurde",
        },
      ],
    },
  },

  automatisierung: {
    heroLayout: "pairs",
    intro:
      "Automatisierung ist der billigste Schritt, den ein Unternehmen gehen kann, und meistens der erste. Sie braucht keine neue Software und kein Projekt über Monate: Die Programme, mit denen Ihr Team heute arbeitet, bekommen eine Verbindung, und die Handgriffe dazwischen fallen weg. Wir fangen dort an, wo sich die Zeit am schnellsten zurückholen lässt, und rechnen vorher aus, ob sich der Aufwand überhaupt trägt",

    promise: {
      steps: [
        { title: "Anfrage", text: "Sie beschreiben, welche Handgriffe sich bei Ihnen jeden Tag wiederholen" },
        { title: "Zeitrechnung", text: "Wir rechnen durch, wie viele Stunden im Jahr daran hängen" },
        { title: "Vorschlag", text: "Sie bekommen eine Liste, sortiert danach, was sich zuerst rechnet" },
      ],
      cta: "Projekt besprechen",
    },

    exits: [
      { question: "Die Abläufe sollen in ein eigenes System, nicht nur verbunden werden?", label: "Systeme und Portale", href: "/leistungen/systeme-und-portale" },
      { question: "Es geht um Texte, Dokumente und Antworten statt um Datenübergabe?", label: "KI-Lösungen", href: "/leistungen/ki" },
    ],

    symptoms: {
      title: "Was sich ändert",
      items: [
        "Bestellungen von Hand ins ERP tippen",
        "Angebote jedes Mal neu zusammenbauen",
        "Montags den Bericht zusammensuchen",
        "Hinterhertelefonieren, ob etwas erledigt ist",
        "Rechnungen zweimal erfassen",
        "Anfragen aus vier Postfächern sammeln",
      ],
      pairs: [
        { from: "Bestellungen von Hand ins ERP tippen", to: "kommen automatisch an" },
        { from: "Angebote jedes Mal neu zusammenbauen", to: "entstehen aus einer Vorlage" },
        { from: "Montags den Bericht zusammensuchen", to: "liegt montags im Postfach" },
        { from: "Hinterhertelefonieren, ob etwas erledigt ist", to: "meldet sich von selbst" },
        { from: "Rechnungen zweimal erfassen", to: "laufen einmal durch" },
        { from: "Anfragen aus vier Postfächern sammeln", to: "landen an einer Stelle" },
      ],
    },

    ledger: {
      title: "So rechnen wir, bevor wir etwas bauen",
      lead:
        "Ob sich eine Automatisierung lohnt, entscheidet eine einzige Rechnung: wie oft ein Handgriff vorkommt, wie lange er dauert und wie viele Menschen ihn machen. Ein Beispiel, wie das aussieht",
      head: ["Handgriff", "Wie oft", "Dauer", "Im Jahr"],
      rows: [
        ["Bestellung aus der Mail ins ERP übertragen", "40 mal pro Woche", "4 Minuten", "138 Stunden"],
        ["Angebot aus Textbausteinen zusammenstellen", "15 mal pro Woche", "12 Minuten", "156 Stunden"],
        ["Wochenbericht aus drei Programmen zusammensuchen", "1 mal pro Woche", "90 Minuten", "78 Stunden"],
      ],
      total: "372 Stunden",
      totalNote: "gut neun Arbeitswochen, jedes Jahr",
      note:
        "Die Zahlen sind ein Beispiel und kein Versprechen. Im ersten Gespräch setzen wir Ihre eigenen ein. Steht am Ende eine Zahl, die den Aufwand nicht trägt, sagen wir Ihnen das, statt die Automatisierung trotzdem zu verkaufen",
    },

    scope: {
      title: "Was im Projekt enthalten ist",
      lead: "Der Umfang wird vor dem Start schriftlich festgehalten, zusammen mit dem, was ausdrücklich nicht dazugehört",
      included: {
        title: "Immer dabei",
        text: "In jeder Automatisierung enthalten, ohne Aufpreis",
        items: [
          "Aufnahme des Ablaufs und die Rechnung, ob er sich lohnt",
          "Festlegung, was der Normalfall ist und welche Ausnahmen es gibt",
          "Verbindung der beteiligten Programme",
          "Eine Phase, in der die Automatisierung neben der Handarbeit mitläuft",
          "Meldung an einen benannten Zuständigen, wenn etwas nicht durchgeht",
          "Protokoll, in dem nachvollziehbar steht, was wann gelaufen ist",
          "Kurze schriftliche Beschreibung des Ablaufs für Ihr Team",
          "Übergabe der Zugänge und der Automatisierung selbst",
        ],
      },
      outOfScope: {
        title: "Dafür gibt es eigene Leistungen",
        text: "Gehört nicht in dieses Projekt, sondern in eine Leistung mit eigener Seite",
        items: [
          { text: "Ein eigenes System, in dem der Ablauf stattfindet", href: "/leistungen/systeme-und-portale", label: "Systeme und Portale" },
          { text: "Texte schreiben, Dokumente lesen, Fragen beantworten", href: "/leistungen/ki", label: "KI-Lösungen" },
          { text: "Formulare und Anfragen auf Ihrer Website", href: "/leistungen/websites", label: "Websites" },
          { text: "Betrieb und Weiterentwicklung über das Projekt hinaus", href: "/leistungen/betreuung", label: "Betreuung" },
        ],
      },
    },

    process: {
      title: "So läuft eine Automatisierung",
      lead: "Drei Phasen statt fünf. Eine Automatisierung ist kein Projekt über Monate, und sie soll es auch nicht werden",
      layout: "rail",
      phases: [
        {
          title: "Aufnehmen und rechnen",
          text: "Wir sehen uns an, welche Handgriffe sich wiederholen, wie oft und wie lange sie dauern. Dabei kommt regelmäßig heraus, dass ein Ablauf nicht automatisiert, sondern abgeschafft gehört, weil ihn niemand mehr braucht",
          note: "Ergebnis: Liste der Handgriffe mit Stunden im Jahr",
        },
        {
          title: "Bauen und mitlaufen lassen",
          text: "Die Automatisierung läuft zuerst eine Zeit lang neben der Handarbeit, damit Sie vergleichen können, ob sie dasselbe tut. Erst wenn die Ergebnisse übereinstimmen, hört die Handarbeit auf",
          note: "Ergebnis: Ablauf läuft, Ergebnisse stimmen überein",
        },
        {
          title: "Überwachen",
          text: "Jede Automatisierung kann ausfallen, weil sich ein anderes Programm ändert. Gefährlich ist nicht der Ausfall, sondern dass ihn wochenlang niemand merkt. Deshalb meldet sie sich, wenn etwas nicht durchgeht, und zwar bei einer benannten Person",
          note: "Ergebnis: Meldung bei Fehlern, Zuständigkeit geklärt",
        },
      ],
    },

    price: {
      title: "Wovon der Preis abhängt",
      lead: "Automatisierung ist der günstigste Posten in diesem Katalog. Was sie kostet, hängt an wenigen Dingen, und die sind nach einem Gespräch klar",
      drivers: [
        {
          title: "Wie viele Abläufe",
          text: "Jeder Ablauf ist ein eigener kleiner Posten. Deshalb fangen wir mit dem an, der die meisten Stunden bindet, statt alles auf einmal anzufassen",
        },
        {
          title: "Ob die Programme eine Schnittstelle haben",
          text: "Moderne Programme bringen eine mit, und dann ist die Verbindung Routine. Bei älteren muss der Weg anders gebaut werden, und das ist der größte Unterschied im Aufwand",
        },
        {
          title: "Wie viele Ausnahmen es gibt",
          text: "Der Normalfall ist schnell gebaut. Die Zeit geht in die Fälle, die Ihr Team heute aus dem Kopf löst, ohne dass sie irgendwo aufgeschrieben wären",
        },
        {
          title: "Ob fertige Bausteine reichen",
          text: "Vieles lässt sich mit fertigen Werkzeugen verbinden, und das ist der schnelle Weg. Erst wenn die an ihre Grenze kommen, lohnt sich eigene Entwicklung",
        },
        {
          title: "Wie genau überwacht werden muss",
          text: "Eine Erinnerung darf einmal ausfallen. Eine Bestellung, die nicht im ERP ankommt, nicht. Je kritischer der Ablauf, desto mehr Prüfung gehört dazu",
        },
      ],
      note: "Nach dem ersten Gespräch erhalten Sie eine Liste der Abläufe, sortiert danach, was sich zuerst rechnet",
    },

    faq: {
      title: "Häufige Fragen",
      items: [
        {
          q: "Was passiert, wenn die Automatisierung ausfällt?",
          a: "Sie meldet sich. Das ist der wichtigste Teil der Arbeit und nicht der Zusatz: Gefährlich ist nicht der Ausfall, sondern dass ihn wochenlang niemand bemerkt und am Ende Bestellungen fehlen. Deshalb gehört zu jedem Ablauf eine Meldung an eine benannte Person und ein Protokoll, in dem steht, was wann gelaufen ist",
        },
        {
          q: "Unsere Programme sind ziemlich alt, geht das überhaupt?",
          a: "Meistens ja, nur anders. Moderne Programme bringen eine Schnittstelle mit. Bei älteren arbeiten wir mit Exporten, Dateien oder der Datenbank, und das ist aufwendiger, aber selten unmöglich. Ob es geht, sehen wir, sobald wir wissen, um welche Programme es sich handelt",
        },
        {
          q: "Lohnt sich das bei uns überhaupt, wir sind ein kleines Team?",
          a: "Das entscheidet die Rechnung, nicht die Größe. Vier Minuten, die vierzig mal pro Woche anfallen, sind im Jahr über drei Arbeitswochen, egal wie groß das Unternehmen ist. Wenn die Zahl den Aufwand nicht trägt, sagen wir das",
        },
        {
          q: "Automatisieren wir damit nicht einfach ein schlechtes Verfahren?",
          a: "Diese Gefahr ist real, und deshalb steht die Aufnahme vor dem Bauen. Regelmäßig stellt sich heraus, dass ein Schritt nur noch existiert, weil ihn früher jemand gebraucht hat. Dann schaffen wir ihn ab, statt ihn schneller zu machen",
        },
        {
          q: "Was passiert, wenn sich unser Ablauf später ändert?",
          a: "Dann wird die Automatisierung angepasst. Deshalb bauen wir sie so einfach wie möglich und schreiben auf, was sie tut. Je weniger Sonderfälle eingebaut sind, desto günstiger ist jede spätere Änderung",
        },
        {
          q: "Können wir das später selbst anpassen oder jemand anderes übernehmen?",
          a: "Ja. Sie bekommen die Zugänge, die Automatisierung selbst und eine Beschreibung des Ablaufs. Wo es möglich ist, arbeiten wir mit Werkzeugen, die auch ohne uns bedienbar sind, statt alles in Code zu verstecken",
        },
      ],
    },
  },

  betreuung: {
    heroLayout: "quiet",
    scopeStyle: "plain",
    intro:
      "Die meisten Projekte scheitern nicht beim Start, sondern danach. Die Website läuft, das System läuft, und dann kümmert sich niemand mehr: Updates werden aufgeschoben, der frühere Dienstleister antwortet nicht, und beim nächsten Problem sucht jemand im Haus nach Zugängen, die keiner mehr hat. Wir übernehmen solche Projekte, auch wenn wir sie nicht gebaut haben, und bringen sie zuerst in einen Zustand, in dem sich wieder etwas planen lässt",

    promise: {
      steps: [
        { title: "Anfrage", text: "Sie beschreiben, was läuft, was hakt und wer es bisher betreut hat" },
        { title: "Bestandsaufnahme", text: "Wir sehen uns den Stand an: Zugänge, Updates, Sicherungen, offene Risiken" },
        { title: "Vorschlag", text: "Sie bekommen einen Befund und einen Vorschlag für die Betreuung, nicht einen Vertrag ins Blaue" },
      ],
      cta: "Projekt besprechen",
    },

    exits: [
      { question: "Es gibt noch kein Projekt, sondern eine Aufgabe?", label: "Alle Leistungen", href: "/leistungen" },
      { question: "Einzelne Abläufe sollen automatisiert statt betreut werden?", label: "Automatisierung", href: "/leistungen/automatisierung" },
    ],

    symptoms: {
      title: "Kennen Sie das?",
      items: [
        "Der frühere Dienstleister antwortet nicht mehr",
        "Updates liegen seit Monaten",
        "Niemand weiß, wo die Zugänge liegen",
        "Bei jedem Problem sucht jemand im Haus nach einer Lösung",
        "Es gibt keine Sicherung, von der sich etwas zurückholen ließe",
      ],
    },

    deepDive: {
      title: "Was Betreuung bei uns heißt",
      intro:
        "Betreuung ist keine Rechnung dafür, dass nichts passiert. Vier Dinge machen den Unterschied zwischen einem Vertrag und einem Partner",
      blocks: [
        {
          heading: "Wir schreiben nicht neu, nur weil der Code fremd ist",
          paragraphs: [
            "Der übliche Satz beim Dienstleisterwechsel lautet: Das ist so schlecht gebaut, das müssen wir von vorn machen. Manchmal stimmt er. Meistens ist er der bequemere Weg für den neuen Dienstleister und der teure für Sie.",
            "Wir arbeiten uns in den bestehenden Stand ein und sagen danach, was sich reparieren lässt und was wirklich ersetzt gehört. Mit Begründung und mit Zahlen, damit Sie entscheiden und nicht wir",
          ],
        },
        {
          heading: "Zuerst wieder planbar machen",
          paragraphs: [
            "Bevor irgendeine neue Funktion entsteht, kommt das Unspektakuläre: Zugänge vollständig in Ihrer Hand, eine Sicherung, aus der sich das Projekt tatsächlich zurückholen lässt, ausstehende Updates, und eine Überwachung, die einen Ausfall meldet, bevor ein Kunde anruft.",
            "Das ist die Arbeit, die niemand sieht, und genau die, deren Fehlen Sie irgendwann sehr deutlich merken",
          ],
        },
        {
          heading: "Feste Reaktionszeit statt Zuruf",
          paragraphs: [
            "Ein Partner, der sich meldet, wenn er gerade Zeit hat, ist kein Partner. Deshalb steht im Vertrag, wie schnell wir auf eine Störung reagieren, und wer auf Ihrer und auf unserer Seite dafür namentlich zuständig ist.",
            "Dringend ist dabei nicht alles gleich dringend: Ein Ausfall im Bestellweg ist etwas anderes als ein Tippfehler auf einer Unterseite, und das unterscheiden wir vorher und nicht im Einzelfall",
          ],
        },
        {
          heading: "Sie sehen, wofür die Stunden draufgehen",
          paragraphs: [
            "Der häufigste Grund, eine Betreuung zu kündigen, ist nicht schlechte Arbeit, sondern das Gefühl, für nichts zu zahlen. Deshalb bekommen Sie regelmäßig eine Übersicht: was gemacht wurde, wie lange es gedauert hat und was als Nächstes ansteht.",
            "Stunden, die in einem Monat nicht gebraucht werden, gehen in die Weiterentwicklung statt verloren. Was davon zuerst drankommt, entscheiden Sie",
          ],
        },
      ],
    },

    scope: {
      title: "Was in der Betreuung enthalten ist",
      lead: "Was dazugehört, steht im Vertrag, zusammen mit der Reaktionszeit und den Stunden pro Monat",
      included: {
        title: "Immer dabei",
        text: "In jeder Betreuung enthalten, ohne Aufpreis",
        items: [
          "Vollständige Übergabe der Zugänge in Ihre Hand",
          "Regelmäßige Sicherung und ein geprüfter Weg, sie zurückzuspielen",
          "Updates von System, Erweiterungen und Abhängigkeiten",
          "Überwachung der Erreichbarkeit mit Meldung bei Ausfall",
          "Behebung von Störungen innerhalb der vereinbarten Reaktionszeit",
          "Kleine Änderungen an Inhalten und Funktionen",
          "Regelmäßige Übersicht über geleistete Stunden und offene Punkte",
          "Ein benannter Ansprechpartner, der Ihr Projekt kennt",
        ],
      },
      outOfScope: {
        title: "Dafür gibt es eigene Leistungen",
        text: "Gehört nicht in die laufende Betreuung, sondern in ein eigenes Projekt",
        items: [
          { text: "Ein Relaunch oder eine neue Website", href: "/leistungen/websites", label: "Websites" },
          { text: "Ein neues System oder ein Portal", href: "/leistungen/systeme-und-portale", label: "Systeme und Portale" },
          { text: "Neue Abläufe automatisieren", href: "/leistungen/automatisierung", label: "Automatisierung" },
          { text: "Eine Prüfung des Stands, ohne laufende Betreuung", href: "/leistungen/analyse-und-beratung", label: "Analyse und Beratung" },
        ],
      },
    },

    process: {
      title: "So läuft eine Übernahme",
      lead: "Vier Schritte, bevor wir überhaupt über neue Funktionen sprechen. Am Ende des zweiten wissen Sie, in welchem Zustand Ihr Projekt wirklich ist",
      phases: [
        {
          title: "Bestandsaufnahme",
          text: "Wir sehen uns an, was läuft, wo es läuft und wer worauf Zugriff hat. Dabei kommt oft heraus, dass Zugänge bei ehemaligen Mitarbeitern oder beim früheren Dienstleister liegen und niemand im Haus sie hat",
          note: "Ergebnis: Übersicht über Systeme, Zugänge und Risiken",
        },
        {
          title: "Befund",
          text: "Sie bekommen schriftlich, was in Ordnung ist, was repariert gehört und was wirklich ersetzt werden sollte, jeweils mit Begründung. Ohne diesen Schritt ist jeder Betreuungsvertrag eine Wette",
          note: "Ergebnis: Befund mit Empfehlung und Dringlichkeit",
        },
        {
          title: "Stabilisieren",
          text: "Zugänge kommen in Ihre Hand, eine Sicherung wird eingerichtet und einmal zurückgespielt, offene Updates werden nachgeholt und die Überwachung aufgesetzt. Erst danach ist das Projekt planbar",
          note: "Ergebnis: Sicherung geprüft, Updates nachgeholt, Überwachung aktiv",
        },
        {
          title: "Laufende Betreuung",
          text: "Ab hier arbeiten wir im vereinbarten Rhythmus: Störungen innerhalb der Reaktionszeit, Updates im festen Takt, und die übrigen Stunden in die Weiterentwicklung, deren Reihenfolge Sie bestimmen",
          note: "Ergebnis: fester Takt, benannter Ansprechpartner, regelmäßige Übersicht",
        },
      ],
    },

    price: {
      title: "Wovon der Preis abhängt",
      lead: "Eine Betreuung wird im Monat abgerechnet. Was sie kostet, hängt an wenigen Dingen, und die stehen nach der Bestandsaufnahme fest",
      drivers: [
        {
          title: "Wie viele Systeme",
          text: "Eine Website ist überschaubar. Eine Website, ein Shop und ein internes System sind drei Dinge, die unabhängig voneinander ausfallen und aktualisiert werden müssen",
        },
        {
          title: "In welchem Zustand sie sind",
          text: "Ein gepflegtes Projekt kostet in der Betreuung wenig. Eines, bei dem zwei Jahre Updates fehlen, braucht am Anfang einen eigenen Posten, bevor der normale Takt greift",
        },
        {
          title: "Wie schnell reagiert werden muss",
          text: "Eine Unternehmenswebsite darf eine Nacht warten. Ein Bestellweg, an dem Ihr Umsatz hängt, nicht. Die Reaktionszeit ist der Punkt, an dem sich die Preise am stärksten unterscheiden",
        },
        {
          title: "Wie viel weiterentwickelt wird",
          text: "Betreuung kann reiner Betrieb sein oder feste Stunden im Monat für neue Dinge enthalten. Die zweite Variante ist meistens die, die sich rechnet",
        },
        {
          title: "Wie gut dokumentiert ist",
          text: "Gibt es eine Dokumentation, ist die Einarbeitung kurz. Fehlt sie, erstellen wir sie bei der Übernahme, und das ist einmalig Aufwand, der sich danach jeden Monat auszahlt",
        },
      ],
      note: "Nach der Bestandsaufnahme erhalten Sie einen Vorschlag mit Stunden, Reaktionszeit und Preis, bevor Sie sich binden",
    },

    faq: {
      title: "Häufige Fragen",
      items: [
        {
          q: "Übernehmen Sie auch Projekte, die jemand anderes gebaut hat?",
          a: "Ja, das ist einer der häufigsten Gründe, warum Unternehmen zu uns kommen. Wir arbeiten uns in den bestehenden Stand ein und sagen danach ehrlich, was sich reparieren lässt und was ersetzt gehört. Ein Neubau ist dabei eine eigene Entscheidung mit eigenen Zahlen und keine Voraussetzung dafür, dass wir anfangen",
        },
        {
          q: "Was, wenn der frühere Dienstleister die Zugänge nicht herausgibt?",
          a: "Das kommt vor. In den meisten Fällen lassen sich Zugänge über den Hosting-Anbieter, den Domain-Inhaber oder die Konten Ihres Unternehmens zurückholen, denn vieles läuft rechtlich auf Sie und nicht auf den Dienstleister. Was sich nicht zurückholen lässt, bauen wir neu auf, und das sagen wir vorher und nicht in der Rechnung danach",
        },
        {
          q: "Wie schnell reagieren Sie, wenn etwas ausfällt?",
          a: "Das steht im Vertrag und nicht in einer Zusage am Telefon. Dabei unterscheiden wir vorher, was ein Ausfall ist und was eine Kleinigkeit, damit im Ernstfall niemand erst diskutieren muss, wie dringend etwas ist",
        },
        {
          q: "Zahlen wir auch in Monaten, in denen nichts passiert?",
          a: "In jedem Monat passiert etwas, es sieht nur niemand: Updates, Sicherungen, Überwachung. Was darüber hinaus an Stunden übrig bleibt, geht in die Weiterentwicklung statt zu verfallen, und Sie bestimmen, was damit zuerst gemacht wird",
        },
        {
          q: "Können wir die Betreuung wieder beenden?",
          a: "Ja. Die Zugänge liegen ohnehin bei Ihnen, und zur Übergabe gehört die Dokumentation, mit der ein anderes Team weiterarbeiten kann. Eine Betreuung, die nur durch fehlende Zugänge zusammenhält, ist keine, die wir führen wollen",
        },
        {
          q: "Betreuen Sie auch, ohne vorher etwas umzubauen?",
          a: "Ja, sofern das Projekt in einem Zustand ist, in dem sich Verantwortung übernehmen lässt. Fehlen Sicherung, Zugänge oder Jahre an Updates, holen wir das zuerst nach. Alles andere wäre eine Zusage, die wir im Ernstfall nicht halten könnten",
        },
      ],
    },
  },

  "online-shops": {
    heroLayout: "grid",
    exitsStyle: "plain",
    scopeStyle: "plain",
    intro:
      "Ein Shop verkauft nicht weniger, weil er hässlich ist, sondern weil der Weg zur Bestellung an einer bestimmten Stelle abreißt. Meistens lässt sich diese Stelle benennen. Wir bauen Shops auf Shopify und holen Händler von Plattformen ab, die ausgelaufen sind: Shopware, Magento, OXID, WooCommerce. Dabei ist der Umzug selbst die kleinere Aufgabe. Die größere ist, dass Bestellungen danach ohne Abtippen in Ihrer Warenwirtschaft landen",

    promise: {
      steps: [
        { title: "Anfrage", text: "Sie beschreiben, was Sie verkaufen und woran es gerade hakt" },
        { title: "Durchsicht", text: "Wir sehen uns den Kaufweg an und wo Bestellungen heute verloren gehen" },
        { title: "Vorschlag", text: "Sie bekommen einen Vorschlag mit Rahmen und Termin, getrennt nach Shop und Anbindung" },
      ],
      cta: "Projekt besprechen",
    },

    exits: [
      { question: "Es geht um eine Website mit Produkten, nicht um einen Kauf im Netz?", label: "Websites", href: "/leistungen/websites" },
      { question: "Der Shop läuft, nur die Übergabe an die Warenwirtschaft fehlt?", label: "Automatisierung", href: "/leistungen/automatisierung" },
    ],

    symptoms: {
      title: "Kennen Sie das?",
      items: [
        "Besucher kommen, legen etwas in den Warenkorb und verschwinden",
        "Die alte Shop-Plattform bekommt keine Sicherheitsupdates mehr",
        "Bestellungen werden von Hand in die Warenwirtschaft übertragen",
        "Preise und Bestände stimmen im Shop nicht mit dem Lager überein",
        "Geschäftskunden brauchen andere Preise als Privatkunden",
        "Jede Änderung am Shop geht nur über einen Entwickler",
      ],
    },

    funnel: {
      title: "Wo Käufer abspringen",
      intro:
        "Zwischen dem ersten Klick und der Bestellung liegen fünf Stellen. An jeder geht ein Teil der Besucher verloren, und an jeder aus einem anderen Grund. Wer das nicht trennt, baut am falschen Ende um",
      steps: [
        {
          label: "Die Produktseite",
          text: "Es fehlt die eine Angabe, die über den Kauf entscheidet: Maß, Material, Lieferzeit, Verfügbarkeit. Wer sie nicht findet, sucht weiter, und zwar woanders",
        },
        {
          label: "Der Warenkorb",
          text: "Hier entscheidet sich, ob der Preis der ist, mit dem der Besucher gerechnet hat. Versandkosten, die erst jetzt auftauchen, sind der häufigste Grund für einen Abbruch",
        },
        {
          label: "Der Weg zur Kasse",
          text: "Jedes Pflichtfeld, jeder zusätzliche Schritt und jede Aufforderung, erst ein Konto anzulegen, kostet einen Teil der Bestellungen",
        },
        {
          label: "Die Zahlart",
          text: "Fehlt die Zahlart, die Ihre Kunden gewohnt sind, hilft der beste Shop nichts. Im Geschäftskundenverkehr ist das meistens der Kauf auf Rechnung",
        },
        {
          label: "Nach dem Kauf",
          text: "Keine Bestätigung, kein Status, keine Sendungsnummer. Das kostet keine einzelne Bestellung, sondern die zweite",
        },
      ],
      note:
        "Welche dieser Stellen bei Ihnen die teuerste ist, lässt sich messen, statt sie zu erraten. Genau damit fangen wir an, bevor irgendetwas umgebaut wird",
    },

    scope: {
      title: "Was im Projekt enthalten ist",
      lead: "Der Umfang wird vor dem Start schriftlich festgehalten, damit später niemand raten muss, was dazugehört und was nicht",
      included: {
        title: "Immer dabei",
        text: "In jedem Shop-Projekt enthalten, ohne Aufpreis",
        items: [
          "Durchsicht des heutigen Kaufwegs und der verlorenen Stellen",
          "Struktur des Katalogs nach dem, wonach Ihre Kunden suchen",
          "Individuelles Design für die Seiten, die über den Kauf entscheiden",
          "Umsetzung auf Shopify mit wiederverwendbaren Bausteinen",
          "Einrichtung von Zahlarten, Versandregeln und Steuersätzen",
          "Übernahme von Produkten, Kunden und Bestellhistorie",
          "Erhalt der bisherigen Seitenadressen beim Umzug",
          "Rechtliche Pflichtteile für den Verkauf an Privatkunden",
          "Auswertung, die zeigt, woher Käufer kommen und wo sie abspringen",
          "Einweisung Ihres Teams in Katalog, Bestellungen und Inhalte",
        ],
      },
      outOfScope: {
        title: "Dafür gibt es eigene Leistungen",
        text: "Gehört nicht in dieses Projekt, sondern in eine Leistung mit eigener Seite",
        items: [
          { text: "Eine Unternehmenswebsite ohne Verkauf im Netz", href: "/leistungen/websites", label: "Websites" },
          { text: "Ein Portal, in dem Kunden mehr tun als bestellen", href: "/leistungen/systeme-und-portale", label: "Systeme und Portale" },
          { text: "Weitere Abläufe rund um den Shop automatisieren", href: "/leistungen/automatisierung", label: "Automatisierung" },
          { text: "Betrieb, Updates und Weiterentwicklung nach dem Start", href: "/leistungen/betreuung", label: "Betreuung" },
        ],
      },
    },

    process: {
      title: "So läuft ein Shop-Projekt",
      lead: "Fünf Phasen, jede mit einem Ergebnis, das Sie sehen und freigeben. Bei einem Umzug kommt die Prüfung der Daten vor allem anderen",
      phases: [
        {
          title: "Durchsicht und Plan",
          text: "Wir sehen uns den heutigen Kaufweg an, dazu Sortiment, Kundengruppen und die Systeme, in denen Bestände und Preise stehen. Bei einem Umzug prüfen wir zuerst, was an Daten überhaupt sauber mitkommt",
          note: "Ergebnis: Befund, Datenprüfung und Projektplan",
        },
        {
          title: "Katalog und Struktur",
          text: "Produkte werden danach geordnet, wonach Ihre Kunden suchen, und nicht danach, wie das Sortiment intern heißt. Dazu gehört, welche Angaben auf einer Produktseite stehen müssen, damit jemand sich entscheiden kann",
          note: "Ergebnis: Katalogstruktur und Aufbau der Produktseite",
        },
        {
          title: "Design und Umsetzung",
          text: "Wir gestalten die Seiten, die über den Kauf entscheiden, und setzen sie auf Shopify um: Startseite, Kategorie, Produkt, Warenkorb und Kasse. Daraus entsteht ein Satz Bausteine für alles Weitere",
          note: "Ergebnis: Shop auf einer Testumgebung",
        },
        {
          title: "Daten und Anbindung",
          text: "Produkte, Kunden und Bestellhistorie ziehen um, Zahlarten und Versandregeln werden eingerichtet, und die Verbindung zu Warenwirtschaft und Buchhaltung wird gebaut und mit echten Bestellungen geprüft",
          note: "Ergebnis: Daten übernommen, Bestellweg durchgetestet",
        },
        {
          title: "Start und danach",
          text: "Umzug auf die Live-Umgebung mit erhaltenen Seitenadressen, dann der Blick auf die ersten echten Bestellungen: Kommen sie an, stimmen Preise und Bestände, laufen Bestätigungen raus. Danach wird gemessen und nachgebessert",
          note: "Ergebnis: Shop live, erste Bestellungen geprüft",
        },
      ],
    },

    price: {
      title: "Wovon der Preis abhängt",
      lead: "Ein Shop ist kein Produkt mit Preisschild. Was er kostet, hängt an wenigen Dingen, und die lassen sich im ersten Gespräch klären",
      drivers: [
        {
          title: "Wie groß und wie kompliziert das Sortiment ist",
          text: "Dreihundert Artikel mit zwei Varianten sind einfacher als dreißig, die sich konfigurieren lassen. Nicht die Zahl der Produkte entscheidet, sondern wie viele Regeln hinter einem Produkt stecken",
        },
        {
          title: "Ob Geschäftskunden dazukommen",
          text: "Eigene Preise, Kauf auf Rechnung, Mindestmengen und Freigaben machen aus einem Shop zwei. Das ist gut investiertes Geld, aber es ist ein eigener Teil des Projekts",
        },
        {
          title: "Was an Daten mitkommt",
          text: "Ein Shop ohne Vorgeschichte ist hier einfach. Bei einem Umzug kommen Produkte, Kunden, Bestellungen und Seitenadressen mit, und je unordentlicher sie heute liegen, desto mehr Zeit geht in die Bereinigung",
        },
        {
          title: "Wie viele Systeme angebunden werden",
          text: "Warenwirtschaft, Buchhaltung, Produktdaten, Versanddienstleister: Jede Verbindung ist ein eigener Posten. Ist die Schnittstelle dokumentiert, ist sie überschaubar",
        },
        {
          title: "Wie viele Länder und Sprachen",
          text: "Eine zweite Sprache ist eine Übersetzung. Ein zweites Land bringt Währung, Steuersätze, Versandregeln und oft eigene Preise mit, und das ist etwas anderes",
        },
      ],
      note: "Nach dem ersten Gespräch erhalten Sie eine Einschätzung mit Rahmen und Termin, getrennt nach Shop und Anbindungen",
    },

    faq: {
      title: "Häufige Fragen",
      items: [
        {
          q: "Verlieren wir beim Umzug unsere Sichtbarkeit in Suchmaschinen?",
          a: "Nicht, wenn der Umzug vorbereitet ist. Vor dem Wechsel nehmen wir alle bestehenden Adressen auf und ordnen jeder eine Zieladresse im neuen Shop zu. Seiten, über die heute Käufer kommen, bleiben erreichbar, auch wenn sich die Struktur ändert. Ungeprüft umzuziehen ist der Fehler, nicht der Umzug selbst",
        },
        {
          q: "Was passiert mit unseren Kunden und der Bestellhistorie?",
          a: "Die ziehen mit um. Passwörter lassen sich technisch nicht übernehmen, das kann keine Plattform, deshalb setzen Ihre Kunden beim ersten Einkauf einmal ein neues. Alles andere, von der Adresse bis zur Bestellhistorie, kommt mit, und was sich nicht sauber übernehmen lässt, benennen wir vorher",
        },
        {
          q: "Warum Shopify und nicht unsere eigene Lösung?",
          a: "Weil bei einem Shop der Betrieb teurer ist als der Bau: Sicherheitsupdates, Zahlungsanbieter, Erreichbarkeit an einem Aktionstag. Das übernimmt die Plattform, statt dass Sie dafür zahlen. Wenn Ihre Anforderungen wirklich darüber hinausgehen, sagen wir das und schlagen den passenden Weg vor, auch wenn er nicht Shopify heißt",
        },
        {
          q: "Müssen Bestellungen danach noch von Hand ins ERP?",
          a: "Nein, und das ist meistens der Teil, der am meisten Zeit spart. Bestellungen, Kunden, Bestände und Preise laufen zwischen Shop und Warenwirtschaft, in der Richtung, die zu Ihrem Ablauf passt. Welche Systeme wir anbinden, steht im Angebot als eigener Posten",
        },
        {
          q: "Können wir Produkte und Inhalte selbst pflegen?",
          a: "Ja, das ist der Normalfall. Katalog, Texte, Bilder und Aktionen pflegt Ihr Team, ohne auf uns zu warten. Wir übernehmen die technische Seite und die größeren Erweiterungen",
        },
        {
          q: "Wir verkaufen an Geschäftskunden, lohnt sich ein Shop überhaupt?",
          a: "Oft gerade dann. Wiederkehrende Bestellungen, Nachbestellungen aus der Historie und eigene Preise pro Kunde sind genau die Fälle, in denen ein Shop Ihrem Vertrieb Arbeit abnimmt, statt ihm welche zu machen. Entscheidend ist, dass Kauf auf Rechnung und Konditionen abgebildet sind",
        },
      ],
    },
  },

  "neue-produkte": {
    heroLayout: "ask",
    intro:
      "Die meisten neuen Produkte scheitern nicht an der Technik, sondern daran, dass sie fertig gebaut werden, bevor jemand sie gebraucht hat. Wir bauen Plattformen, Online-Services und Apps für Unternehmen, die eine Idee haben und wissen wollen, ob sie trägt. Dafür entsteht zuerst die kleinste Version, die sich echten Nutzern zeigen lässt, und nicht das vollständige Produkt aus der ersten Skizze",

    promise: {
      steps: [
        { title: "Anfrage", text: "Sie beschreiben die Idee und für wen sie gedacht ist" },
        { title: "Gespräch", text: "Wir suchen gemeinsam die Annahme, an der die ganze Idee hängt" },
        { title: "Vorschlag", text: "Sie bekommen einen Vorschlag für die erste Version, mit Rahmen und Termin" },
      ],
      cta: "Idee besprechen",
    },

    exits: [
      { question: "Es geht um ein Werkzeug für Ihr eigenes Team, nicht um ein Produkt für den Markt?", label: "Systeme und Portale", href: "/leistungen/systeme-und-portale" },
      { question: "Die Idee steht fest und soll nur noch umgesetzt werden?", label: "Zur Technik", href: "/technologien" },
    ],

    symptoms: {
      title: "Die Fragen, mit denen Sie kommen",
      items: [
        "Lohnt sich die Idee überhaupt?",
        "Was muss die erste Version können?",
        "Was kostet so etwas ungefähr?",
        "Wie lange dauert es bis zum Start?",
        "Wer sagt mir, ob der Weg technisch richtig ist?",
      ],
    },

    omit: {
      title: "Was die erste Version nicht bekommt",
      intro:
        "Fast jede Idee kommt mit einer Liste von Funktionen. Die meisten davon kosten Zeit, bevor irgendjemand sie gebraucht hat. Das sind die fünf, die wir am häufigsten herausnehmen, und der Zeitpunkt, an dem sie zurückkommen",
      items: [
        {
          label: "Ein eigenes Konto- und Rechtesystem",
          text: "Die Anmeldung über einen bestehenden Dienst reicht am Anfang. Ein eigenes System mit Rollen, Rechten und Passwortregeln kommt, sobald es wirklich mehrere Arten von Nutzern gibt, die Unterschiedliches sehen dürfen",
        },
        {
          label: "Eine App für das Handy",
          text: "Eine Seite, die auf dem Handy funktioniert, erreicht dieselben Menschen, ohne zwei Plattformen und ohne App-Store. Eine echte App lohnt sich, wenn Kamera, Standort, Benachrichtigungen oder Betrieb ohne Netz gebraucht werden",
        },
        {
          label: "Ein Verwaltungsbereich für alles",
          text: "Am Anfang verwalten wir vieles direkt, statt Oberflächen zu bauen, die vielleicht niemand benutzt. Der Verwaltungsbereich entsteht entlang dessen, was Sie nach ein paar Wochen tatsächlich jeden Tag ändern",
        },
        {
          label: "Zahlung ab dem ersten Tag",
          text: "Ob jemand zahlen würde, lässt sich auch ohne eingebaute Zahlung herausfinden, zum Beispiel per Rechnung an die ersten Kunden. Die Abwicklung im Produkt kommt dazu, sobald es regelmäßig Kunden gibt",
        },
        {
          label: "Alles, was mit großen Nutzerzahlen zu tun hat",
          text: "Technik für zehntausend Nutzer zu bauen, bevor es zehn gibt, ist der teuerste Fehler in diesem Geschäft. Wichtig ist, dass der Weg dorthin nicht verbaut wird, nicht dass er schon gebaut ist",
        },
      ],
      note:
        "Was davon bei Ihnen trotzdem in die erste Version gehört, entscheidet nicht diese Liste, sondern die Frage, was Sie nach dem Start wissen wollen und wofür Sie die Antwort brauchen",
    },

    scope: {
      title: "Was im Projekt enthalten ist",
      lead: "Der Umfang wird vor dem Start schriftlich festgehalten, zusammen mit dem, was die erste Version ausdrücklich nicht kann",
      included: {
        title: "Immer dabei",
        text: "In jedem Projekt für ein neues Produkt enthalten, ohne Aufpreis",
        items: [
          "Gespräch über die Idee und die Annahme, an der sie hängt",
          "Festlegung, was die erste Version beantworten soll",
          "Entwurf der Abläufe aus Sicht der künftigen Nutzer",
          "Klickbarer Prototyp, bevor Entwicklung beginnt",
          "Umsetzung der ersten Version auf Laravel",
          "Eine Auswertung, die zeigt, ob und wie das Produkt benutzt wird",
          "Rechtliche Pflichtteile für den Betrieb mit echten Nutzern",
          "Quellcode, Zugänge und Dokumentation zur Übergabe",
          "Begleitung der ersten Wochen mit echten Nutzern",
        ],
      },
      outOfScope: {
        title: "Dafür gibt es eigene Leistungen",
        text: "Gehört nicht in dieses Projekt, sondern in eine Leistung mit eigener Seite",
        items: [
          { text: "Ein internes System für Ihr eigenes Team", href: "/leistungen/systeme-und-portale", label: "Systeme und Portale" },
          { text: "Ein Shop mit Katalog, Zahlung und Versand", href: "/leistungen/online-shops", label: "Online-Shops" },
          { text: "Die Website, die das Produkt nach außen erklärt", href: "/leistungen/websites", label: "Websites" },
          { text: "Betrieb und Weiterentwicklung nach dem Start", href: "/leistungen/betreuung", label: "Betreuung" },
        ],
      },
    },

    process: {
      title: "So entsteht ein neues Produkt",
      lead: "Vier Schritte, und nach dem zweiten wissen Sie mehr über Ihre Idee als nach einem halben Jahr Entwicklung ohne Nutzer",
      layout: "steps",
      phases: [
        {
          title: "Die Annahme finden",
          text: "Jede Idee steht auf einem Satz, der stimmen muss, damit alles andere funktioniert. Meistens ist das nicht die Technik, sondern eine Annahme über Menschen: dass sie ein Problem haben, es lösen wollen und dafür zahlen. Diesen Satz schreiben wir auf",
          note: "Ergebnis: die Annahme, an der die Idee hängt",
        },
        {
          title: "Klickbarer Prototyp",
          text: "Bevor eine Zeile Code entsteht, bauen wir die Abläufe als klickbares Modell und zeigen es Menschen, die zur Zielgruppe gehören. Was dabei nicht verstanden wird, ändert sich jetzt für wenig Geld und nicht später für viel",
          note: "Ergebnis: geprüfter Prototyp und eine entschiedene erste Version",
        },
        {
          title: "Erste Version",
          text: "Wir bauen genau das, was nötig ist, damit echte Nutzer die Sache wirklich tun können, und lassen alles andere weg. Dazu gehört von Anfang an eine Auswertung, denn eine erste Version ohne Messung beantwortet keine Frage",
          note: "Ergebnis: Produkt live, mit echten Nutzern",
        },
        {
          title: "Nach dem Start",
          text: "Jetzt entscheidet nicht mehr die Meinung, sondern das Verhalten. Was benutzt wird, bauen wir aus. Was liegen bleibt, fliegt raus oder wird anders gelöst, statt es aus Treue zur ersten Skizze zu behalten",
          note: "Ergebnis: Entscheidung über den nächsten Ausbau, mit Zahlen",
        },
      ],
    },

    price: {
      title: "Wovon der Preis abhängt",
      lead: "Für dieselbe Idee bekommen Sie Angebote, die sich um das Zehnfache unterscheiden. Der Grund ist fast nie der Stundensatz, sondern dass jedes Angebot etwas anderes unter der ersten Version versteht",
      drivers: [
        {
          title: "Wie groß die erste Version ist",
          text: "Das ist der größte Hebel und der einzige, den Sie selbst in der Hand haben. Zwei Funktionen weniger sind nicht zwei Wochen weniger, sondern oft ein ganzer Abschnitt weniger",
        },
        {
          title: "Wie viele Arten von Nutzern es gibt",
          text: "Ein Produkt für eine Gruppe ist überschaubar. Sobald Anbieter, Käufer und Verwaltung unterschiedliche Sichten brauchen, wächst nicht die Oberfläche, sondern die Zahl der Regeln dahinter",
        },
        {
          title: "Ob im Produkt Geld fließt",
          text: "Zahlung, Abrechnung, Rückerstattung und Rechnungen sind ein eigener Teil des Projekts. Deshalb lohnt sich die Frage, ob die ersten Kunden nicht zuerst per Rechnung zahlen können",
        },
        {
          title: "Welche Regeln gelten",
          text: "Für ein Produkt mit Gesundheits-, Finanz- oder Personaldaten gelten Anforderungen, die man nicht nachträglich einbaut. Wo sie gelten, planen wir sie von Anfang an ein",
        },
        {
          title: "Was schon vorliegt",
          text: "Gibt es Entwürfe, Texte oder eine klare Beschreibung der Abläufe, geht es schneller. Fehlt beides, ist das kein Problem, aber es ist Arbeit, die eingeplant gehört statt nebenbei zu laufen",
        },
      ],
      note: "Nach dem ersten Gespräch erhalten Sie einen Rahmen für die erste Version, bevor Sie sich für die Umsetzung entscheiden",
    },

    faq: {
      title: "Häufige Fragen",
      items: [
        {
          q: "Was ist, wenn die Idee nicht trägt?",
          a: "Dann wissen Sie es nach ein paar Wochen und nicht nach einem Jahr, und genau dafür ist dieser Weg gebaut. Das ist kein schlechtes Ergebnis, sondern das günstigste, das es in diesem Geschäft gibt. Wenn sich im Gespräch abzeichnet, dass die Idee in dieser Form nicht funktioniert, sagen wir das, bevor Sie Geld ausgeben",
        },
        {
          q: "Wird meine Idee vertraulich behandelt?",
          a: "Ja, und auf Wunsch unterschreiben wir das vorher. In der Praxis liegt der Wert einer Idee ohnehin selten in ihr selbst, sondern darin, wer sie umsetzt und wie schnell. Trotzdem ist es Ihre Idee, und wir behandeln sie so",
        },
        {
          q: "Ich habe niemanden mit technischem Hintergrund, wie kann ich das beurteilen?",
          a: "Indem Sie an jedem Punkt etwas zu sehen bekommen, statt etwas erklärt zu bekommen. Der Prototyp ist klickbar, die erste Version benutzbar, und jede Phase endet mit einem Ergebnis, das sich ohne technisches Wissen beurteilen lässt. Fachbegriffe sind unser Problem, nicht Ihres",
        },
        {
          q: "Wem gehört das Produkt am Ende?",
          a: "Ihnen. Quellcode, Daten und Zugänge gehen in der Form an Sie über, die Sie brauchen, dazu eine Dokumentation, mit der auch ein anderes Team weiterarbeiten kann. Was übergeben wird und wann, halten wir im Vertrag fest",
        },
        {
          q: "Und wenn es funktioniert, hält die Technik das aus?",
          a: "Die erste Version wird nicht für zehntausend Nutzer gebaut, aber sie wird so gebaut, dass der Weg dorthin offen bleibt. Wächst das Produkt, wachsen einzelne Teile mit, und das planen wir dann anhand echter Zahlen statt anhand von Hoffnungen",
        },
        {
          q: "Können wir die erste Version später selbst weiterentwickeln?",
          a: "Ja. Manche Unternehmen bauen nach dem Start ein eigenes Team auf, und dafür ist dieser Weg gut geeignet: Sie haben ein Produkt, das benutzt wird, dokumentierten Code und Zahlen darüber, was als Nächstes dran ist. Wir können begleiten oder übergeben",
        },
      ],
    },
  },

  ki: {
    heroLayout: "chat",
    exitsStyle: "plain",
    intro:
      "KI ist keine Strategie, sondern ein Mitarbeiter für eine bestimmte Aufgabe. Die Frage ist deshalb nie, ob ein Unternehmen KI einsetzen sollte, sondern welche konkrete Arbeit sie übernimmt und wo die Grenze liegt, hinter der ein Mensch draufschaut. Wir suchen diese Aufgaben in Ihren Abläufen, rechnen nach, ob sie sich lohnen, und bauen sie dort ein, wo Ihr Team ohnehin arbeitet",

    promise: {
      steps: [
        { title: "Anfrage", text: "Sie beschreiben, welche Arbeit bei Ihnen am meisten Zeit frisst" },
        { title: "Potenzialtermin", text: "Wir suchen die Aufgaben, bei denen KI wirklich Stunden spart" },
        { title: "Vorschlag", text: "Sie bekommen eine Liste mit Aufwand, Nutzen und den Regeln für den Datenschutz" },
      ],
      cta: "Projekt besprechen",
    },

    exits: [
      { question: "Es geht um Daten, die zwischen Programmen wandern, nicht um Texte und Antworten?", label: "Automatisierung", href: "/leistungen/automatisierung" },
      { question: "Die KI soll in Ihre eigene Software eingebaut werden?", label: "Systeme und Portale", href: "/leistungen/systeme-und-portale" },
    ],

    symptoms: {
      title: "Kennen Sie das?",
      items: [
        "Alle reden über KI, aber wo lohnt sie sich bei uns?",
        "Wir beantworten täglich dieselben fünf Fragen",
        "Angaben aus Rechnungen und Lieferscheinen werden abgetippt",
        "Niemand findet die Antwort in unseren eigenen Unterlagen",
        "Wir haben etwas ausprobiert, geändert hat sich nichts",
        "Dürfen unsere Daten da überhaupt hinein?",
      ],
    },

    tiers: {
      title: "Was die KI allein entscheidet und was ein Mensch prüft",
      intro:
        "Der Unterschied zwischen einer nützlichen und einer gefährlichen KI ist nicht das Modell, sondern wie weit sie ohne Rückfrage handeln darf. Diese Grenze ziehen wir vor dem Bau und halten sie schriftlich fest",
      levels: [
        {
          label: "Läuft ohne Rückfrage",
          rule: "Aufgaben, bei denen ein Fehler nichts kostet und sich sofort korrigieren lässt",
          items: [
            "Anfragen sortieren und an die richtige Abteilung weiterleiten",
            "Dokumente erkennen, benennen und ablegen",
            "Lange Mailverläufe für Ihr Team zusammenfassen",
            "Entwürfe vorbereiten, die ohnehin noch bearbeitet werden",
          ],
        },
        {
          label: "Ein Mensch sieht drüber",
          rule: "Alles, was das Haus verlässt oder in ein System geschrieben wird",
          items: [
            "Antworten an Kunden auf der Website und im Messenger",
            "Angebots- und Produkttexte, die veröffentlicht werden",
            "Daten aus Rechnungen, bevor sie in die Buchhaltung gehen",
            "Übersetzungen, die so auf Ihrer Website stehen",
          ],
        },
        {
          label: "Nie ohne ausdrückliche Freigabe",
          rule: "Alles, was Geld bewegt, Verträge betrifft oder sich nicht zurückholen lässt",
          items: [
            "Preise, Rabatte und verbindliche Zusagen",
            "Buchungen, Zahlungen und Stornierungen",
            "Entscheidungen über Personen, von der Bewerbung bis zur Mahnung",
            "Alles, was gegenüber Behörden oder Prüfern verbindlich ist",
          ],
        },
      ],
      note:
        "Diese Grenze wird vor dem Bau gezogen und nicht, nachdem etwas schiefgegangen ist. Sie steht im Projekt, und sie lässt sich jederzeit enger ziehen, wenn Sie das wollen",
    },

    scope: {
      title: "Was im Projekt enthalten ist",
      lead: "Der Umfang wird vor dem Start schriftlich festgehalten, zusammen mit den Regeln für Daten und Freigaben",
      included: {
        title: "Immer dabei",
        text: "In jedem KI-Projekt enthalten, ohne Aufpreis",
        items: [
          "Suche nach den Aufgaben, bei denen KI wirklich Stunden spart",
          "Die Rechnung, ob sich die gefundene Aufgabe überhaupt trägt",
          "Festlegung, was ohne Rückfrage läuft und was ein Mensch prüft",
          "Klärung, welche Daten verarbeitet werden und wo sie liegen",
          "Test an echten Fällen aus Ihrem Haus, bevor etwas eingebaut wird",
          "Einbau dort, wo Ihr Team ohnehin arbeitet, nicht in einem weiteren Fenster",
          "Protokoll darüber, was die KI entschieden hat und auf welcher Grundlage",
          "Einweisung des Teams, einschließlich der Fälle, in denen es eingreifen muss",
        ],
      },
      outOfScope: {
        title: "Dafür gibt es eigene Leistungen",
        text: "Gehört nicht in dieses Projekt, sondern in eine Leistung mit eigener Seite",
        items: [
          { text: "Daten zwischen Programmen übergeben, ohne KI", href: "/leistungen/automatisierung", label: "Automatisierung" },
          { text: "Die Software, in der die Arbeit stattfindet", href: "/leistungen/systeme-und-portale", label: "Systeme und Portale" },
          { text: "Ein Assistent für Besucher Ihrer Website", href: "/leistungen/websites", label: "Websites" },
          { text: "Betrieb und Weiterentwicklung nach dem Start", href: "/leistungen/betreuung", label: "Betreuung" },
        ],
      },
    },

    process: {
      title: "So läuft ein KI-Projekt",
      lead: "Fünf Phasen. Die erste entscheidet darüber, ob die anderen vier überhaupt stattfinden",
      layout: "timeline",
      phases: [
        {
          title: "Aufgaben finden",
          text: "Wir sehen uns an, womit Ihr Team Zeit verbringt, und suchen die Stellen, an denen es um Sprache geht: lesen, sortieren, zusammenfassen, beantworten. Dazu kommt die Rechnung, wie viele Stunden im Jahr daran hängen",
          note: "Ergebnis: Liste möglicher Aufgaben mit Aufwand und Nutzen",
        },
        {
          title: "Grenze festlegen",
          text: "Für die ausgewählte Aufgabe halten wir fest, was ohne Rückfrage laufen darf, was ein Mensch prüft und was nie ohne Freigabe passiert. Dazu gehört, welche Daten überhaupt verarbeitet werden",
          note: "Ergebnis: schriftliche Regeln für Entscheidung und Daten",
        },
        {
          title: "An echten Fällen testen",
          text: "Bevor etwas eingebaut wird, läuft die KI über Fälle aus Ihrem Haus, die Sie kennen. So sehen Sie an Ihren eigenen Beispielen, wie oft das Ergebnis stimmt, statt es glauben zu müssen",
          note: "Ergebnis: geprüfte Trefferquote an Ihren eigenen Fällen",
        },
        {
          title: "Einbauen",
          text: "Die Lösung kommt dorthin, wo Ihr Team ohnehin arbeitet: ins Postfach, ins System, auf die Website. Ein weiteres Fenster, das man extra öffnen muss, wird nach zwei Wochen nicht mehr benutzt",
          note: "Ergebnis: KI läuft im echten Ablauf",
        },
        {
          title: "Messen und nachziehen",
          text: "Wir sehen uns an, wie oft ein Mensch korrigieren musste und an welchen Stellen. Daraus wird die Lösung besser, und wo sie es nicht wird, ziehen wir die Grenze enger statt es laufen zu lassen",
          note: "Ergebnis: Auswertung und angepasste Regeln",
        },
      ],
    },

    price: {
      title: "Wovon der Preis abhängt",
      lead: "Der Preis eines KI-Projekts steckt selten im Modell. Er steckt darin, wie die Aufgabe eingebettet ist und wie sicher das Ergebnis sein muss",
      drivers: [
        {
          title: "Wie genau das Ergebnis stimmen muss",
          text: "Ein Entwurf, den ohnehin jemand überarbeitet, darf daneben liegen. Eine Angabe, die in die Buchhaltung läuft, nicht. Je sicherer das Ergebnis sein muss, desto mehr Prüfung und Test gehört dazu",
        },
        {
          title: "Wo die Daten liegen dürfen",
          text: "Dürfen die Daten einen europäischen Dienst erreichen, ist der Weg kurz. Müssen sie das Haus gar nicht verlassen, ist das möglich, aber es ist ein eigener Aufwand",
        },
        {
          title: "Wie viele Quellen die KI kennen muss",
          text: "Ein Assistent, der eine Preisliste kennt, ist schnell gebaut. Einer, der Handbücher, Datenblätter und Mailverläufe aus Jahren durchsuchen soll, braucht vorher Ordnung in diesen Unterlagen",
        },
        {
          title: "Wo sie eingebaut wird",
          text: "Auf einer Website ist der Einbau Routine. In einer gewachsenen Software oder einem alten System ist die Anbindung der größere Teil der Arbeit, nicht die KI selbst",
        },
        {
          title: "Wie viel laufende Prüfung nötig ist",
          text: "Modelle ändern sich, Ihre Unterlagen auch. Eine Lösung, die über Jahre verlässlich bleiben soll, braucht regelmäßige Kontrolle, und die planen wir lieber ein als sie zu verschweigen",
        },
      ],
      note: "Nach dem ersten Gespräch erhalten Sie eine Liste möglicher Aufgaben, sortiert danach, was sich zuerst rechnet",
    },

    faq: {
      title: "Häufige Fragen",
      items: [
        {
          q: "Landen unsere Daten in einem Modell und werden damit trainiert?",
          a: "Nein, und das ist eine Frage der Verträge und nicht des guten Willens. Wir arbeiten mit Anbietern und Einstellungen, bei denen Ihre Daten nicht zum Training verwendet werden, und halten schriftlich fest, welche Daten überhaupt verarbeitet werden und wo sie liegen. Wo das nicht reicht, lässt sich eine Lösung bauen, die Ihr Haus nicht verlässt, und wir sagen Ihnen vorher, was das zusätzlich bedeutet",
        },
        {
          q: "Was ist, wenn die KI einem Kunden etwas Falsches sagt?",
          a: "Deshalb entscheidet nicht die KI, wie weit sie gehen darf, sondern die Grenze, die vorher gezogen wird. Alles, was nach außen geht oder verbindlich ist, läuft über einen Menschen oder gar nicht. Und für die Fälle, die der Assistent nicht sicher beantwortet, ist der Weg zum Team der Normalfall und nicht die Ausnahme",
        },
        {
          q: "Wir haben schon etwas ausprobiert, und es hat nichts gebracht. Warum jetzt?",
          a: "Weil ein Werkzeug allein keinen Ablauf ändert. Wer ein Fenster extra öffnen muss, benutzt es nach zwei Wochen nicht mehr. Der Unterschied liegt darin, dass die Lösung dort sitzt, wo ohnehin gearbeitet wird, und dass sie eine benannte Aufgabe hat statt allgemein zu helfen",
        },
        {
          q: "Ersetzt das Mitarbeiter?",
          a: "In den Projekten, die wir machen, übernimmt KI die Arbeit, die niemand gern macht: sortieren, abtippen, nachschlagen, dieselbe Frage zum fünften Mal beantworten. Das schafft Zeit für die Arbeit, für die Ihre Leute eingestellt wurden. Ein Unternehmen, das Stellen streichen will, braucht dafür keinen Partner wie uns",
        },
        {
          q: "Woher wissen wir, ob das Ergebnis gut genug ist?",
          a: "Aus Ihren eigenen Fällen. Vor dem Einbau läuft die Lösung über Beispiele, deren richtige Antwort Sie kennen, und Sie sehen, wie oft sie trifft. Danach wird gemessen, wie oft ein Mensch korrigieren musste. Das ist eine Zahl und keine Einschätzung",
        },
        {
          q: "Die Technik ändert sich ständig, ist so ein Projekt nicht in einem Jahr veraltet?",
          a: "Die Modelle ändern sich, Ihre Aufgabe nicht. Deshalb bauen wir so, dass das Modell austauschbar bleibt und die Regeln, die Daten und der Einbau bestehen. Das Teure an einem KI-Projekt ist ohnehin nicht das Modell, sondern alles drumherum",
        },
      ],
    },
  },

  "analyse-und-beratung": {
    heroLayout: "band",
    scopeStyle: "plain",
    intro:
      "Die schwierigste Frage im Digitalen ist nicht, wie etwas gebaut wird, sondern was überhaupt gebaut werden soll. Die meisten Anbieter beantworten sie nebenbei und immer zugunsten dessen, was sie selbst anbieten. Wir machen daraus eine eigene Leistung mit einem eigenen Ergebnis: einem Befund, einer Reihenfolge und einem Rahmen, den Sie mitnehmen können, auch zu jemand anderem",

    promise: {
      steps: [
        { title: "Anfrage", text: "Sie beschreiben, woran es hakt, auch wenn Sie es noch nicht benennen können" },
        { title: "Gespräch", text: "Wir stellen die Fragen, die der Reihe nach zur eigentlichen Ursache führen" },
        { title: "Vorschlag", text: "Sie bekommen einen Vorschlag für die Analyse, mit Umfang, Dauer und Preis" },
      ],
      cta: "Lage besprechen",
    },

    exits: [
      { question: "Sie wissen schon, was gebaut werden soll?", label: "Alle Leistungen", href: "/leistungen" },
      { question: "Es geht um eine neue Idee, die erst geprüft werden soll?", label: "Neue Produkte", href: "/leistungen/neue-produkte" },
    ],

    symptoms: {
      title: "Kennen Sie das?",
      items: [
        "Irgendetwas bremst, aber niemand kann sagen, was",
        "Drei Angebote, drei völlig verschiedene Lösungen",
        "Jeder Anbieter empfiehlt genau das, was er selbst verkauft",
        "Eine Liste mit zwanzig Vorhaben und keine Reihenfolge",
        "Sie sollen entscheiden, ohne die Grundlagen zu kennen",
        "Das Bauchgefühl sagt, dass etwas nicht stimmt",
      ],
    },

    deepDive: {
      title: "Warum das eine eigene Leistung ist",
      intro:
        "Beratung wird fast überall verschenkt, und deshalb ist sie meistens nichts wert. Vier Gründe, warum wir daraus eine eigene Arbeit mit eigenem Ergebnis machen",
      blocks: [
        {
          heading: "Die unangenehme Frage zuerst",
          paragraphs: [
            "Natürlich könnten wir am Ende uns selbst empfehlen. Genau deshalb ist die Analyse getrennt beauftragt und getrennt bezahlt: Das Ergebnis gehört Ihnen und ist so geschrieben, dass Sie damit zu jedem anderen Dienstleister gehen können.",
            "Dazu gehört auch, Dinge zu benennen, die Sie nicht beauftragen sollten, und Fälle, in denen die richtige Antwort lautet, dass alles bleibt, wie es ist",
          ],
        },
        {
          heading: "Oft ist die Antwort kleiner als erwartet",
          paragraphs: [
            "Viele Unternehmen kommen mit der Annahme, dass ein großes Projekt nötig ist, und gehen mit drei kleinen Schritten heraus, die zusammen einen Bruchteil kosten. Umgekehrt kommt es vor, dass hinter einer harmlosen Anfrage ein Problem steckt, das eine neue Website nicht löst.",
            "Beides lässt sich erst sagen, wenn jemand nachgesehen hat, statt ein Angebot für das zu schreiben, wonach gefragt wurde",
          ],
        },
        {
          heading: "Die Reihenfolge ist wichtiger als die Liste",
          paragraphs: [
            "Was zu tun wäre, wissen die meisten Unternehmen ungefähr selbst. Woran es scheitert, ist die Reihenfolge: Was muss zuerst stehen, damit das Nächste überhaupt wirkt, und was kann getrost ein Jahr warten.",
            "Eine Reihenfolge ist keine Wunschliste, sondern eine Entscheidung darüber, worauf das Geld dieses Jahr geht und worauf nicht",
          ],
        },
        {
          heading: "Eine zweite Meinung kostet weniger als ein falsches Projekt",
          paragraphs: [
            "Ein großer Teil dieser Arbeit sind Angebote anderer Anbieter, Systeme vor einem Wechsel und Projekte, bei denen das Bauchgefühl nicht stimmt. Dafür muss niemand den Dienstleister wechseln.",
            "Wir sehen uns an, ob das Angebotene zur eigentlichen Aufgabe passt, ob der Preis nachvollziehbar ist und welche Fragen vor der Unterschrift gestellt gehören",
          ],
        },
      ],
    },

    scope: {
      title: "Was Sie am Ende in der Hand halten",
      lead: "Eine Analyse endet mit Unterlagen und nicht mit einem Gespräch, an das sich in zwei Monaten niemand mehr erinnert",
      included: {
        title: "Immer dabei",
        text: "In jeder Analyse enthalten, ohne Aufpreis",
        items: [
          "Gespräche mit den Menschen, die die Abläufe täglich machen",
          "Durchsicht der Systeme, die heute im Einsatz sind",
          "Befund: wo Zeit, Geld und Kunden tatsächlich verloren gehen",
          "Eine Reihenfolge mit Begründung, warum was zuerst kommt",
          "Grober Rahmen für Aufwand und Kosten je Schritt",
          "Benennung dessen, was Sie nicht tun sollten und warum",
          "Unterlagen, mit denen Sie Angebote anderer vergleichen können",
          "Ein Gespräch, in dem wir das Ergebnis gemeinsam durchgehen",
        ],
      },
      outOfScope: {
        title: "Dafür gibt es eigene Leistungen",
        text: "Gehört nicht in die Analyse, sondern in ein Projekt danach",
        items: [
          { text: "Die Umsetzung dessen, was die Analyse empfiehlt", href: "/leistungen", label: "Alle Leistungen" },
          { text: "Ein klickbarer Prototyp für eine neue Idee", href: "/leistungen/neue-produkte", label: "Neue Produkte" },
          { text: "Laufende Betreuung eines bestehenden Projekts", href: "/leistungen/betreuung", label: "Betreuung" },
          { text: "Einzelne Abläufe automatisieren", href: "/leistungen/automatisierung", label: "Automatisierung" },
        ],
      },
    },

    process: {
      title: "So läuft eine Analyse",
      lead: "Drei Schritte, ein festes Ergebnis und ein Preis, der vorher feststeht",
      layout: "steps",
      phases: [
        {
          title: "Zuhören",
          text: "Wir sprechen mit Ihnen und mit den Menschen, bei denen die Arbeit tatsächlich anfällt. Die Leitung kennt das Ziel, die Abteilung kennt den Umweg, und erst beides zusammen ergibt ein Bild",
          note: "Ergebnis: die Abläufe, wie sie wirklich laufen",
        },
        {
          title: "Nachsehen",
          text: "Wir sehen uns an, was heute im Einsatz ist: Website, Systeme, Daten, Verbindungen dazwischen. Dabei geht es nicht um eine technische Note, sondern um die Frage, wo diese Dinge Ihrem Geschäft im Weg stehen",
          note: "Ergebnis: Befund mit den Stellen, an denen es klemmt",
        },
        {
          title: "Entscheiden",
          text: "Sie bekommen eine Reihenfolge mit Begründung, einen groben Rahmen je Schritt und eine klare Aussage dazu, was Sie lassen sollten. Danach entscheiden Sie, ob und mit wem Sie das umsetzen",
          note: "Ergebnis: Reihenfolge, Rahmen und Unterlagen, die Ihnen gehören",
        },
      ],
    },

    price: {
      title: "Wovon der Preis abhängt",
      lead: "Eine Analyse hat einen festen Preis, der vor dem Start feststeht. Wie hoch er ist, hängt daran, wie weit wir sehen sollen",
      drivers: [
        {
          title: "Wie viel vom Unternehmen angesehen wird",
          text: "Ein einzelner Ablauf ist schnell durchdacht. Ein Unternehmen mit Vertrieb, Produktion und Verwaltung braucht mehrere Gespräche, und die sind der größte Teil der Arbeit",
        },
        {
          title: "Wie viele Systeme im Einsatz sind",
          text: "Eine Website und ein Warenwirtschaftssystem sind überschaubar. Sieben gewachsene Programme, die sich teilweise überschneiden, sind eine eigene Aufgabe",
        },
        {
          title: "Wie tief technisch geprüft wird",
          text: "Der Blick von außen reicht oft. Eine Prüfung des Codes vor einem Dienstleisterwechsel oder einer Übernahme ist deutlich gründlicher und wird getrennt ausgewiesen",
        },
        {
          title: "Ob ein Prototyp dazugehört",
          text: "Bei einer neuen Idee ist ein klickbares Modell oft der einzige Weg, sie wirklich zu prüfen. Das ist ein eigener Teil, den Sie dazunehmen können oder nicht",
        },
        {
          title: "Was danach daraus wird",
          text: "Entscheiden Sie sich danach für eine Umsetzung bei uns, rechnen wir die Analyse auf das Projekt an. Entscheiden Sie sich dagegen, behalten Sie trotzdem alles, was dabei entstanden ist",
        },
      ],
      note: "Vor dem Start erhalten Sie Umfang, Dauer und Preis schriftlich, damit Sie wissen, worauf Sie sich einlassen",
    },

    faq: {
      title: "Häufige Fragen",
      items: [
        {
          q: "Warum soll ich für eine Beratung zahlen, wenn andere sie kostenlos anbieten?",
          a: "Weil eine kostenlose Beratung ein Verkaufsgespräch ist und am Ende das empfiehlt, was der Anbieter ohnehin baut. Eine bezahlte Analyse ist eine eigene Arbeit mit eigenem Ergebnis, und zu diesem Ergebnis gehört auch der Satz, dass etwas nicht gemacht werden sollte. Entscheiden Sie sich danach für eine Umsetzung bei uns, rechnen wir die Analyse an",
        },
        {
          q: "Empfehlen Sie am Ende nicht einfach sich selbst?",
          a: "Das Ergebnis ist so geschrieben, dass Sie damit zu jedem anderen Dienstleister gehen können: Befund, Reihenfolge und Rahmen, ohne dass irgendwo steht, dass nur wir das können. Ein Teil unserer Analysen endet damit, dass wir für den nächsten Schritt nicht die richtigen sind, und dann sagen wir das",
        },
        {
          q: "Wir haben ein Angebot von jemand anderem. Sehen Sie sich das an?",
          a: "Ja, das ist einer der häufigsten Aufträge. Wir prüfen, ob das Angebotene zu Ihrer eigentlichen Aufgabe passt, ob der Preis nachvollziehbar ist und was darin fehlt, was später teuer wird. Dazu bekommen Sie die Fragen, die Sie vor der Unterschrift stellen sollten",
        },
        {
          q: "Was, wenn am Ende herauskommt, dass wir nichts machen müssen?",
          a: "Dann ist das ein gutes Ergebnis und kein verlorenes Geld. Ein Unternehmen, das weiß, dass es dieses Jahr nicht investieren muss, hat genauso viel gewonnen wie eines mit einem Projektplan. Dieser Fall kommt seltener vor als der andere, aber er kommt vor",
        },
        {
          q: "Wie lange dauert das?",
          a: "Deutlich kürzer als ein Projekt. Umfang und Dauer stehen vor dem Start schriftlich fest, zusammen mit dem Preis, damit die Analyse nicht selbst zu dem wird, wovor Sie Angst haben: einem Vorhaben ohne Ende",
        },
        {
          q: "Müssen wir dafür technisch etwas verstehen?",
          a: "Nein. Die Gespräche drehen sich um Ihre Abläufe und nicht um Technik, und die Unterlagen am Ende sind so geschrieben, dass Sie sie Ihrer Geschäftsführung vorlegen können. Fachbegriffe sind unser Problem, nicht Ihres",
        },
      ],
    },
  },
};

export const getServicePage = (slug: string) => servicePages[slug];
