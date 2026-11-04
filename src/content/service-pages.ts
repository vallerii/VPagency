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
  heroLayout?: "band";
  /** "plain" drops the card look from the two routing links and from the
      scope columns: hairlines and type instead of tinted boxes */
  blockStyle?: "plain";
  /** The three steps in the hero. Service pages carry their own set: the
      generic one on the home page ("you describe, we clarify, we solve")
      says the same thing in weaker words, and its third step promises an
      implementation that only begins after a quote. */
  promise: { steps: { title: string; text: string }[]; cta: string };
  symptoms: { title: string; items: string[] };
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
    /** "timeline" draws one vertical line with a visible decision point,
        instead of the zigzag. Set decideAfter to the phase it follows */
    layout?: "timeline";
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
    blockStyle: "plain",
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
};

export const getServicePage = (slug: string) => servicePages[slug];
