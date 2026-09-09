// Glossar — one page per term (see SEO_CONTENT_SYSTEM.md §9).
//
// A term only belongs here if it (a) actually appears in the wording used
// elsewhere on this site, (b) is tied to one of our services, and (c) is a
// question a business owner could realistically ask. No filler entries —
// the glossary exists to translate the words a client hears from agencies
// into what they mean for their own business.
//
// Every entry is written in plain business language: what it is, why it
// costs or earns money, and one short illustrative situation. The examples
// are deliberately generic scenarios, never claims about real clients.

export interface GlossarTerm {
  slug: string;
  /** H1 and card title. */
  term: string;
  /** Optional wording variants shown under the H1 (abbreviation, German/English pair). */
  aka?: string;
  /** One-line summary — used on the hub cards and as the meta description base. */
  short: string;
  /** §9: "Точное определение в 1–2 предложениях". */
  definition: string;
  /** §9: "Почему это важно" — in the client's business context. */
  importance: string[];
  /** §9: "Пример" — one short illustrative situation. */
  example?: string;
  /** Slugs from SERVICES — rendered as "Passende Leistung". */
  relatedServices: string[];
  /** Slugs from this file — rendered as "Verwandte Begriffe". */
  relatedTerms: string[];
  /** Grouping on the /glossar hub. */
  cluster: GlossarClusterId;
}

export type GlossarClusterId =
  | "website"
  | "shop"
  | "systeme"
  | "betrieb";

export const GLOSSAR_CLUSTERS: {
  id: GlossarClusterId;
  title: string;
  description: string;
}[] = [
  {
    id: "website",
    title: "Website und Anfragen",
    description:
      "Begriffe rund um den ersten Kontaktpunkt: wie aus Besuchern Anfragen werden.",
  },
  {
    id: "shop",
    title: "Online-Shop",
    description:
      "Was im Verkaufsprozess passiert — vom Warenkorb bis zur bezahlten Bestellung.",
  },
  {
    id: "systeme",
    title: "Systeme und Portale",
    description:
      "Begriffe, die auftauchen, sobald Prozesse nicht mehr in Tabellen passen.",
  },
  {
    id: "betrieb",
    title: "Automatisierung und Betrieb",
    description:
      "Was nach dem Launch zählt: Routine abgeben, Systeme verbinden, Betrieb absichern.",
  },
];

export const GLOSSAR: GlossarTerm[] = [
  {
    slug: "conversion-rate",
    term: "Conversion-Rate",
    aka: "Konversionsrate",
    short:
      "Der Anteil der Besucher, die tatsächlich das tun, wofür die Seite gebaut wurde.",
    definition:
      "Die Conversion-Rate ist der Anteil der Besucher, die eine gewünschte Handlung ausführen — eine Anfrage senden, anrufen oder bestellen. Bei 100 Besuchern und 3 Anfragen liegt sie bei 3 %.",
    importance: [
      "Sie beantwortet die Frage, die hinter fast jedem Website-Projekt steckt: Bringt der Auftritt Anfragen oder nur Besuche?",
      "Mehr Besucher einzukaufen ist teuer. Aus denselben Besuchern mehr Anfragen zu machen, ist in der Regel deutlich günstiger.",
      "Ohne diese Zahl bleibt jede Diskussion über Design und Texte Geschmackssache statt einer Entscheidung auf Basis von Daten.",
    ],
    example:
      "Zwei Unternehmen bekommen gleich viele Besucher. Beim einen findet der Interessent Leistung, Ansprechpartner und Formular in wenigen Sekunden, beim anderen sucht er sich durch fünf Seiten. Der Unterschied im Umsatz entsteht nicht durch mehr Werbung, sondern durch die zweite Zahl.",
    relatedServices: ["websites", "ecommerce"],
    relatedTerms: ["landingpage", "lead-qualifizierung", "warenkorbabbruch"],
    cluster: "website",
  },
  {
    slug: "landingpage",
    term: "Landingpage",
    aka: "Zielseite",
    short:
      "Eine einzelne Seite mit genau einem Ziel — statt der ganzen Website als Umweg.",
    definition:
      "Eine Landingpage ist eine eigenständige Seite, die auf ein einziges Angebot und eine einzige Handlung zugeschnitten ist. Sie hat bewusst weniger Auswege als eine normale Website-Seite.",
    importance: [
      "Wer über eine Anzeige oder Kampagne kommt, hat eine konkrete Frage. Die Startseite beantwortet sie selten, eine Landingpage genau dafür schon.",
      "Ein einzelnes Thema lässt sich in Tagen testen, ohne die gesamte Website umzubauen.",
      "Sie macht Werbebudget messbar: eine Kampagne, eine Seite, eine Zahl.",
    ],
    example:
      "Für eine Messe oder ein einzelnes Produkt lohnt sich eine eigene Seite mit genau diesem Angebot und einem Formular — statt Interessenten auf eine Startseite zu schicken, auf der sie erst wieder suchen müssen.",
    relatedServices: ["websites"],
    relatedTerms: ["conversion-rate", "responsive-design"],
    cluster: "website",
  },
  {
    slug: "responsive-design",
    term: "Responsive Design",
    short:
      "Eine Website, die sich an jedes Gerät anpasst, statt auf dem Handy zu zerfallen.",
    definition:
      "Responsive Design bedeutet, dass sich Layout und Inhalte automatisch an die Bildschirmgröße anpassen — Smartphone, Tablet, Notebook oder großer Monitor.",
    importance: [
      "Ein großer Teil der ersten Kontakte passiert heute unterwegs auf dem Handy. Was dort unbedienbar ist, ist verlorene Anfrage.",
      "Suchmaschinen bewerten die mobile Fassung einer Seite als die maßgebliche — nicht die Desktop-Ansicht.",
      "Eine separate mobile Website zu pflegen kostet doppelt. Eine responsive Seite bleibt eine Seite.",
    ],
    example:
      "Ein Interessent sieht Ihr Unternehmen abends auf dem Sofa auf dem Handy. Passt das Formular dort nicht auf den Bildschirm, ruft er am nächsten Morgen nicht an — er schreibt dem Wettbewerber.",
    relatedServices: ["websites", "ecommerce"],
    relatedTerms: ["landingpage", "conversion-rate"],
    cluster: "website",
  },
  {
    slug: "cms",
    term: "CMS",
    aka: "Content-Management-System, Redaktionssystem",
    short:
      "Der Bereich, in dem Ihr Team Inhalte selbst ändert — ohne Entwickler.",
    definition:
      "Ein CMS ist der Verwaltungsbereich einer Website, in dem Texte, Bilder, News und Seiten ohne Programmierkenntnisse gepflegt werden können.",
    importance: [
      "Ohne CMS wird jede Preisänderung und jede neue Stellenanzeige zu einem Ticket beim Dienstleister — mit Wartezeit und Rechnung.",
      "Mit CMS entscheidet Ihr Marketing selbst, wann etwas online geht.",
      "Ein überladenes System ist allerdings genauso teuer: Wenn niemand im Team es bedienen mag, bleibt die Website trotzdem stehen.",
    ],
    example:
      "Eine neue Referenz soll online. Mit einem passenden Redaktionsbereich sind das zehn Minuten im Team. Ohne ihn ist es eine Anfrage, ein Angebot und eine Woche Wartezeit.",
    relatedServices: ["websites", "support"],
    relatedTerms: ["individualsoftware", "kundenportal"],
    cluster: "website",
  },
  {
    slug: "checkout",
    term: "Checkout",
    aka: "Kassenprozess, Bestellabschluss",
    short:
      "Der Weg vom vollen Warenkorb bis zur bezahlten Bestellung — die teuerste Strecke im Shop.",
    definition:
      "Der Checkout ist der Abschnitt eines Online-Shops, in dem aus einem Warenkorb eine bezahlte Bestellung wird: Adresse, Versandart, Zahlung, Bestätigung.",
    importance: [
      "Hier sind die Kunden bereits kaufbereit. Jeder zusätzliche Schritt an dieser Stelle kostet unmittelbar Umsatz.",
      "Pflichtregistrierung, fehlende Zahlarten oder überraschende Versandkosten sind die häufigsten Gründe für einen Abbruch kurz vor dem Ziel.",
      "Verbesserungen im Checkout wirken sofort auf den Umsatz, ohne dass ein einziger Besucher zusätzlich eingekauft werden muss.",
    ],
    example:
      "Ein Kunde hat den Warenkorb gefüllt und soll dann erst ein Kundenkonto anlegen. Ein Teil dieser Kunden bricht genau an dieser Stelle ab — das Produkt war nie das Problem.",
    relatedServices: ["ecommerce"],
    relatedTerms: ["warenkorbabbruch", "conversion-rate", "warenwirtschaft"],
    cluster: "shop",
  },
  {
    slug: "warenkorbabbruch",
    term: "Warenkorbabbruch",
    aka: "Kaufabbruch",
    short:
      "Der Kunde legt Produkte in den Warenkorb und bestellt trotzdem nicht.",
    definition:
      "Von einem Warenkorbabbruch spricht man, wenn ein Kunde Produkte in den Warenkorb legt, den Bestellvorgang aber nicht abschließt.",
    importance: [
      "Diese Kunden waren bereits entschieden. Sie zurückzugewinnen ist günstiger, als neue Interessenten zu suchen.",
      "Die Abbruchstelle verrät, woran es liegt: Versandkosten, Zahlart, Pflichtkonto oder ein Formular, das auf dem Handy nicht funktioniert.",
      "Ohne Messung bleibt der Verlust unsichtbar — er taucht in keiner Rechnung auf.",
    ],
    example:
      "Der Shop verkauft gut, aber die Umsätze bleiben hinter den Besucherzahlen zurück. Erst die Auswertung zeigt, in welchem Schritt die Kunden aussteigen — und dass ein einzelnes Pflichtfeld die Ursache war.",
    relatedServices: ["ecommerce"],
    relatedTerms: ["checkout", "conversion-rate"],
    cluster: "shop",
  },
  {
    slug: "warenwirtschaft",
    term: "Warenwirtschaftssystem",
    aka: "ERP, Warenwirtschaft",
    short:
      "Das System, in dem Bestand, Einkauf und Bestellungen geführt werden — und das mit dem Shop reden sollte.",
    definition:
      "Ein Warenwirtschaftssystem verwaltet Artikel, Bestände, Einkauf und Aufträge. Ist es mit dem Shop verbunden, fließen Bestände und Bestellungen automatisch in beide Richtungen.",
    importance: [
      "Ohne Verbindung pflegt jemand denselben Artikel zweimal — und irgendwann verkauft der Shop etwas, das im Lager nicht mehr liegt.",
      "Manuelle Übertragung ist nicht nur Zeitaufwand, sondern die häufigste Fehlerquelle im Tagesgeschäft.",
      "Mit Anbindung wächst das Sortiment, ohne dass die Zahl der Personen wächst, die es pflegen.",
    ],
    example:
      "Bestände werden morgens aus dem Lager in eine Tabelle und abends in den Shop übertragen. Zwischen diesen beiden Zeitpunkten verkauft der Shop weiter — und genau dort entstehen die Stornos.",
    relatedServices: ["ecommerce", "automation"],
    relatedTerms: ["schnittstelle", "prozessautomatisierung", "checkout"],
    cluster: "shop",
  },
  {
    slug: "kundenportal",
    term: "Kundenportal",
    aka: "Kundenbereich, Partnerportal",
    short:
      "Ein geschützter Bereich, in dem Kunden selbst nachsehen, statt bei Ihnen anzurufen.",
    definition:
      "Ein Kundenportal ist ein passwortgeschützter Bereich, in dem Kunden oder Partner ihre eigenen Daten einsehen und Vorgänge selbst erledigen — Status, Dokumente, Bestellungen, Anfragen.",
    importance: [
      "Ein großer Teil der eingehenden Anrufe sind Statusfragen. Jede davon kostet einen Mitarbeiter Zeit und den Kunden Geduld.",
      "Selbstbedienung ist rund um die Uhr verfügbar — Ihr Team nicht.",
      "Das Portal entlastet genau die Person, an der sonst alles hängt.",
    ],
    example:
      "Statt „Wie weit ist mein Auftrag?“ per Telefon sieht der Kunde den Status selbst — und Ihr Team bearbeitet in derselben Zeit neue Aufträge statt Rückfragen.",
    relatedServices: ["custom-software", "support"],
    relatedTerms: ["individualsoftware", "schnittstelle", "cms"],
    cluster: "systeme",
  },
  {
    slug: "individualsoftware",
    term: "Individualsoftware",
    aka: "Custom Software, Individuallösung",
    short:
      "Software, die entlang Ihres Prozesses gebaut wird — statt den Prozess an das Tool anzupassen.",
    definition:
      "Individualsoftware wird für die konkreten Abläufe eines Unternehmens entwickelt, statt eine fertige Standardlösung einzukaufen und den Betrieb daran anzupassen.",
    importance: [
      "Standardtools decken die üblichen 80 % ab. Die restlichen 20 % sind oft genau das, womit ein Unternehmen sein Geld verdient.",
      "Sie ist teurer in der Anschaffung und günstiger im Betrieb — sobald sie Arbeitszeit ersetzt, die sonst jeden Monat anfällt.",
      "Nicht jede Aufgabe rechtfertigt sie. Wo eine fertige Lösung passt, ist die fertige Lösung die richtige Antwort.",
    ],
    example:
      "Ein Betrieb bildet seine Kalkulation seit Jahren in einer gewachsenen Tabelle ab, die nur eine Person versteht. Genau an dieser Stelle zahlt sich ein eigenes System aus — nicht in der Buchhaltung, für die es fertige Programme gibt.",
    relatedServices: ["custom-software"],
    relatedTerms: ["kundenportal", "schnittstelle", "prozessautomatisierung"],
    cluster: "systeme",
  },
  {
    slug: "schnittstelle",
    term: "Schnittstelle",
    aka: "API, Integration",
    short:
      "Die Verbindung, über die zwei Programme Daten austauschen — ohne dass jemand sie abtippt.",
    definition:
      "Eine Schnittstelle ist eine technische Verbindung, über die zwei Systeme automatisch Daten austauschen — zum Beispiel Shop und Warenwirtschaft oder Website und CRM.",
    importance: [
      "Jede Stelle, an der Daten von Hand kopiert werden, ist eine Stelle, an der Zeit verloren geht und Fehler entstehen.",
      "Verbundene Systeme zeigen dieselbe Information überall gleich — das ist die Voraussetzung dafür, dass Auswertungen überhaupt stimmen.",
      "Nicht jedes System lässt sich verbinden. Was möglich ist, entscheidet sich vor dem Projekt, nicht während der Umsetzung.",
    ],
    example:
      "Eine Anfrage über das Formular landet automatisch im Vertriebssystem, mit Ansprechpartner und Thema. Ohne Schnittstelle wandert dieselbe Anfrage per E-Mail weiter und wird ein zweites Mal eingetippt.",
    relatedServices: ["automation", "custom-software", "ecommerce"],
    relatedTerms: ["prozessautomatisierung", "warenwirtschaft", "kundenportal"],
    cluster: "systeme",
  },
  {
    slug: "prozessautomatisierung",
    term: "Prozessautomatisierung",
    short:
      "Wiederkehrende Handgriffe übernimmt das System — Ihr Team entscheidet nur noch.",
    definition:
      "Prozessautomatisierung bedeutet, dass wiederkehrende Arbeitsschritte von Software ausgeführt werden: Daten übertragen, Dokumente erzeugen, Benachrichtigungen auslösen, Anfragen zuordnen.",
    importance: [
      "Routine ist eine versteckte Kostenposition. Sie steht in keinem Bericht, verbraucht aber jeden Monat Arbeitstage.",
      "Automatisierte Abläufe sind unabhängig davon, wer gerade im Urlaub oder krank ist.",
      "Sie ist kein Selbstzweck: Ein schlecht definierter Prozess wird durch Automatisierung nur schneller falsch.",
    ],
    example:
      "Eine eingehende Anfrage wird bisher gelesen, bewertet, weitergeleitet und in zwei Systeme eingetragen. Automatisiert bleibt davon eine Entscheidung übrig — der Rest passiert im Hintergrund.",
    relatedServices: ["automation", "custom-software"],
    relatedTerms: ["schnittstelle", "lead-qualifizierung", "ki-assistent"],
    cluster: "betrieb",
  },
  {
    slug: "lead-qualifizierung",
    term: "Lead-Qualifizierung",
    aka: "Anfragen-Qualifizierung",
    short:
      "Anfragen werden vorsortiert, bevor Ihr Vertrieb Zeit investiert.",
    definition:
      "Bei der Lead-Qualifizierung werden eingehende Anfragen anhand festgelegter Kriterien bewertet und eingeordnet, bevor sie in den Vertrieb gehen.",
    importance: [
      "Nicht jede Anfrage ist ein Auftrag. Ohne Vorsortierung verbringt der Vertrieb einen erheblichen Teil seiner Zeit mit Gesprächen, die nie zu einem Projekt führen.",
      "Die Reihenfolge der Bearbeitung entscheidet mit über den Abschluss — wer zuerst antwortet, gewinnt häufiger.",
      "Die Kriterien kommen aus Ihrem Geschäft, nicht aus einem Tool. Software setzt sie nur um.",
    ],
    example:
      "Ein paar gezielte Fragen im Formular klären Umfang, Zeitrahmen und Ansprechpartner. Der Vertrieb ruft dann in der richtigen Reihenfolge an, statt die Liste von oben nach unten abzuarbeiten.",
    relatedServices: ["automation", "websites"],
    relatedTerms: ["prozessautomatisierung", "conversion-rate", "ki-assistent"],
    cluster: "betrieb",
  },
  {
    slug: "ki-assistent",
    term: "KI-Assistent",
    aka: "KI-Tool",
    short:
      "Software, die klar umrissene Aufgaben übernimmt — für eine Aufgabe, nicht für alles.",
    definition:
      "Ein KI-Assistent ist ein Werkzeug, das eine klar abgegrenzte Aufgabe selbstständig erledigt: Anfragen vorsortieren, Texte entwerfen, Dokumente auslesen, Standardfragen beantworten.",
    importance: [
      "Der Nutzen entsteht bei einer konkreten, häufig wiederkehrenden Aufgabe — nicht bei „KI im Unternehmen“ als Projektüberschrift.",
      "Er ersetzt keine Fachentscheidung. Er nimmt die Vorarbeit ab, die vor der Entscheidung liegt.",
      "Ergebnisse müssen überprüfbar sein. Wo ein Fehler teuer ist, bleibt die Freigabe beim Menschen.",
    ],
    example:
      "Eingehende Anfragen werden automatisch gelesen, dem richtigen Thema zugeordnet und mit einem Vorschlag für die Antwort weitergereicht. Absenden tut weiterhin ein Mitarbeiter.",
    relatedServices: ["automation", "custom-software"],
    relatedTerms: ["prozessautomatisierung", "lead-qualifizierung"],
    cluster: "betrieb",
  },
  {
    slug: "sla",
    term: "SLA",
    aka: "Service Level Agreement",
    short:
      "Die schriftliche Zusage, wie schnell im Störungsfall reagiert wird.",
    definition:
      "Ein SLA ist eine Vereinbarung, die festlegt, in welcher Zeit auf Störungen reagiert wird und welche Verfügbarkeit zugesichert ist.",
    importance: [
      "Ohne SLA ist „wir kümmern uns“ eine Absichtserklärung. Mit SLA ist es eine überprüfbare Zusage.",
      "Wenn ein Shop oder ein Portal stillsteht, ist die Reaktionszeit der Unterschied zwischen einer Störung und einem Umsatzausfall.",
      "Die zugesagte Zeit sollte sich daran orientieren, was ein Ausfall Ihr Unternehmen tatsächlich kostet — nicht am Standardpaket.",
    ],
    example:
      "Fällt die Bestellstrecke an einem Freitagnachmittag aus, entscheidet allein die vereinbarte Reaktionszeit darüber, ob das Wochenende Umsatz bringt oder nicht.",
    relatedServices: ["support"],
    relatedTerms: ["monitoring"],
    cluster: "betrieb",
  },
  {
    slug: "monitoring",
    term: "Monitoring",
    aka: "Überwachung",
    short:
      "Das System meldet Probleme selbst — statt dass ein Kunde sie meldet.",
    definition:
      "Monitoring ist die laufende automatische Überwachung einer Website oder eines Systems: Erreichbarkeit, Fehler, Geschwindigkeit und Auslastung.",
    importance: [
      "Der schlechteste Weg, von einem Ausfall zu erfahren, ist der Anruf eines Kunden.",
      "Viele Störungen kündigen sich an. Wer sie früh sieht, repariert sie vor dem Ausfall statt danach.",
      "Es liefert außerdem die Daten, um zu entscheiden, was als Nächstes verbessert werden sollte.",
    ],
    example:
      "Das Bestellformular meldet seit Nacht Fehler. Mit Überwachung liegt die Meldung morgens im Postfach des Teams — ohne sie fällt es erst auf, wenn Anfragen ausbleiben.",
    relatedServices: ["support"],
    relatedTerms: ["sla", "conversion-rate"],
    cluster: "betrieb",
  },
];

export function getTerm(slug: string) {
  return GLOSSAR.find((t) => t.slug === slug);
}

/** Terms grouped in the order defined by GLOSSAR_CLUSTERS, empty groups dropped. */
export function glossarByCluster() {
  return GLOSSAR_CLUSTERS.map((cluster) => ({
    ...cluster,
    terms: GLOSSAR.filter((t) => t.cluster === cluster.id),
  })).filter((c) => c.terms.length > 0);
}

/** Terms that name a given service as relevant — used for the service → glossary links. */
export function termsForService(serviceSlug: string) {
  return GLOSSAR.filter((t) => t.relatedServices.includes(serviceSlug));
}
