// "Thema im Detail" — the H2/H3 deep-dive section every service page needs
// (SEO_CONTENT_SYSTEM.md §7, point 7).
//
// This is the part of a service page that has to be useful on its own,
// without a click further: it answers what the client actually wonders
// about the topic, in their language, and links the words that need an
// explanation to the glossary instead of explaining them twice.
//
// Kept out of services.ts on purpose — that file describes the offer,
// this one carries the editorial content of the page.

export interface DeepDiveBlock {
  /** Rendered as H3 under the section's H2. */
  heading: string;
  paragraphs: string[];
  /** Optional glossary term this block explains — rendered as a contextual link. */
  termSlug?: string;
  /** Anchor text for that link. Descriptive, never "hier klicken" (§10). */
  termLinkLabel?: string;
}

export interface ServiceDeepDive {
  /** H2 of the section. */
  title: string;
  intro: string;
  blocks: DeepDiveBlock[];
}

export const SERVICE_DEEP_DIVE: Record<string, ServiceDeepDive> = {
  websites: {
    title: "Was eine Website leisten muss",
    intro:
      "Eine Website ist selten „zu alt“. Sie ist meist an einer konkreten Stelle unklar — und genau dort entscheiden Besucher, ob sie anfragen oder weitersuchen.",
    blocks: [
      {
        heading: "Struktur: wonach Besucher wirklich suchen",
        paragraphs: [
          "Die meisten Websites sind so aufgebaut, wie das Unternehmen organisiert ist — nach Abteilungen, Produktlinien oder Firmengeschichte. Besucher suchen aber nach ihrem eigenen Problem: nach der Branche, in der sie arbeiten, oder nach der Aufgabe, die sie gerade lösen müssen.",
          "Deshalb beginnt jedes Projekt bei uns nicht mit dem Design, sondern mit der Frage, welche Fragen Ihre Kunden mitbringen und in welcher Reihenfolge sie beantwortet werden müssen. Die Struktur folgt dieser Reihenfolge, nicht dem Organigramm.",
        ],
      },
      {
        heading: "Der Weg von der Seite zur Anfrage",
        paragraphs: [
          "Zwischen „interessant“ und „ich melde mich“ liegen auf vielen Websites zu viele Schritte: ein Formular mit zwölf Pflichtfeldern, eine Telefonnummer im Impressum, ein Ansprechpartner, der nirgends genannt wird.",
          "Wir machen diesen Weg kurz und an jeder Stelle sichtbar — und messen anschließend, wie viele Besucher ihn tatsächlich gehen. Erst diese Zahl macht aus Meinungen über die Website Entscheidungen.",
        ],
        termSlug: "conversion-rate",
        termLinkLabel: "Was die Conversion-Rate aussagt",
      },
      {
        heading: "Mobil ist der Normalfall",
        paragraphs: [
          "Der erste Kontakt passiert heute meistens auf dem Handy — abends, unterwegs, zwischen zwei Terminen. Wenn dort die Navigation hakt oder das Formular nicht auf den Bildschirm passt, ist die Anfrage weg, bevor sie entsteht.",
          "Wir bauen jede Seite von der kleinsten Bildschirmgröße aufwärts, nicht umgekehrt.",
        ],
        termSlug: "responsive-design",
        termLinkLabel: "Responsive Design kurz erklärt",
      },
      {
        heading: "Inhalte, die Ihr Team selbst pflegt",
        paragraphs: [
          "Eine Website veraltet nicht durch ihr Design, sondern durch Inhalte, die niemand aktualisiert — weil jede Änderung beim Dienstleister beauftragt werden muss.",
          "Wir übergeben deshalb einen Redaktionsbereich, der genau die Dinge abdeckt, die sich bei Ihnen wirklich ändern: News, Referenzen, Stellen, Ansprechpartner. Nicht mehr, damit ihn auch jemand benutzt.",
        ],
        termSlug: "cms",
        termLinkLabel: "Was ein CMS für Ihr Team bedeutet",
      },
    ],
  },

  ecommerce: {
    title: "Wo im Shop Umsatz verloren geht",
    intro:
      "In fast jedem Shop entsteht der größte Verlust nicht beim Besucher, der nie kommt, sondern beim Kunden, der schon kaufen wollte.",
    blocks: [
      {
        heading: "Die letzten Meter bis zur Bestellung",
        paragraphs: [
          "Der Abschnitt zwischen vollem Warenkorb und bezahlter Bestellung ist die teuerste Strecke im Shop. Hier sind alle Kunden bereits entschieden — jeder zusätzliche Schritt kostet unmittelbar Umsatz.",
          "Pflichtregistrierung, fehlende Zahlarten und Versandkosten, die erst spät auftauchen, sind die üblichen Verdächtigen. Wir kürzen diese Strecke und nehmen heraus, was den Kunden zum Nachdenken bringt.",
        ],
        termSlug: "checkout",
        termLinkLabel: "Was im Checkout passiert",
      },
      {
        heading: "Warum Warenkörbe liegen bleiben",
        paragraphs: [
          "Wenn Umsätze hinter den Besucherzahlen zurückbleiben, liegt die Ursache selten am Sortiment. Sie liegt an einer bestimmten Stelle im Bestellprozess — und die lässt sich benennen, sobald gemessen wird, wo Kunden aussteigen.",
          "Wir schauen zuerst auf diese Stelle, bevor über zusätzliche Werbung gesprochen wird. Verbesserungen dort wirken sofort und ohne zusätzliches Budget.",
        ],
        termSlug: "warenkorbabbruch",
        termLinkLabel: "Warenkorbabbruch verstehen",
      },
      {
        heading: "Shop und Lager als ein System",
        paragraphs: [
          "Läuft der Shop getrennt von Warenwirtschaft und Buchhaltung, pflegt jemand jeden Artikel zweimal. Zwischen den beiden Ständen entstehen die Stornos: verkauft ist, was im Lager längst nicht mehr liegt.",
          "Mit einer Verbindung fließen Bestände, Preise und Bestellungen automatisch — und das Sortiment kann wachsen, ohne dass die Zahl der Personen wächst, die es pflegt.",
        ],
        termSlug: "warenwirtschaft",
        termLinkLabel: "Warenwirtschaft und Shop verbinden",
      },
      {
        heading: "Ein Shop, der sich pflegen lässt",
        paragraphs: [
          "Ein Shop ist kein Projekt mit Enddatum, sondern ein Werkzeug im Tagesgeschäft. Entscheidend ist deshalb nicht nur, wie er am Launch-Tag aussieht, sondern wie viel Aufwand eine neue Kategorie, eine Aktion oder eine zusätzliche Sprache in einem Jahr kostet.",
          "Wir wählen die Plattform danach aus, wie Ihr Sortiment tatsächlich arbeitet — nicht danach, was gerade am häufigsten empfohlen wird.",
        ],
      },
    ],
  },

  "custom-software": {
    title: "Wann sich ein eigenes System rechnet",
    intro:
      "Individuelle Software ist nicht automatisch die bessere Lösung. Sie ist die richtige Lösung an genau den Stellen, an denen Standardtools die eigentliche Arbeit nicht abbilden.",
    blocks: [
      {
        heading: "Der Punkt, an dem Tabellen aufhören zu funktionieren",
        paragraphs: [
          "Fast jedes gewachsene Unternehmen führt zentrale Prozesse in Tabellen, die über Jahre entstanden sind. Das funktioniert erstaunlich lange — bis die Datei nur noch von einer Person verstanden wird, zwei Versionen parallel kursieren und niemand mehr sagen kann, welche die richtige ist.",
          "Das ist der Moment, in dem ein System günstiger wird als die Tabelle: nicht wegen der Technik, sondern weil das Risiko und die Nacharbeit teurer geworden sind als die Entwicklung.",
        ],
      },
      {
        heading: "Standard oder individuell",
        paragraphs: [
          "Fertige Programme decken die üblichen Abläufe gut ab. Der Teil, mit dem ein Unternehmen sein Geld verdient, ist aber selten üblich — er ist der Grund, warum Kunden dort kaufen und nicht beim Wettbewerb.",
          "Deshalb prüfen wir am Anfang ehrlich, welcher Teil sich mit einer Standardlösung erledigen lässt. Individuell bauen wir nur das, was wirklich Ihr Prozess ist.",
        ],
        termSlug: "individualsoftware",
        termLinkLabel: "Individualsoftware im Vergleich zum Standard",
      },
      {
        heading: "Selbstbedienung statt Rückfragen",
        paragraphs: [
          "Ein erheblicher Teil der eingehenden Anrufe sind Statusfragen: Wie weit ist mein Auftrag, wo ist mein Dokument, was wurde vereinbart. Jede dieser Fragen kostet einen Mitarbeiter Zeit und den Kunden Geduld.",
          "Ein Bereich, in dem Kunden oder Partner diese Antworten selbst finden, entlastet genau die Person, an der sonst alles hängt — und ist rund um die Uhr erreichbar.",
        ],
        termSlug: "kundenportal",
        termLinkLabel: "Was ein Kundenportal übernimmt",
      },
      {
        heading: "Verbinden statt ersetzen",
        paragraphs: [
          "Ein neues System muss selten alles ablösen, was schon da ist. Meistens reicht es, die vorhandenen Programme miteinander reden zu lassen und die Lücke dazwischen zu schließen.",
          "Was sich verbinden lässt und was nicht, klären wir vor dem Projekt — nicht während der Umsetzung.",
        ],
        termSlug: "schnittstelle",
        termLinkLabel: "Wie Schnittstellen Systeme verbinden",
      },
    ],
  },

  automation: {
    title: "Wo Routine Ihr Geld kostet",
    intro:
      "Manuelle Arbeit taucht in keiner Rechnung auf. Sie verteilt sich auf viele kleine Handgriffe — und summiert sich am Monatsende zu Arbeitstagen.",
    blocks: [
      {
        heading: "Die versteckte Kostenposition",
        paragraphs: [
          "Zehn Minuten für eine Aufgabe klingen nach nichts. Fünfmal am Tag, an fünf Tagen in der Woche, ist das mehr als ein Arbeitstag im Monat — für eine einzige Aufgabe und eine einzige Person.",
          "Wir suchen deshalb zuerst die Handgriffe, die sich am häufigsten wiederholen, und nicht die, die technisch am interessantesten sind.",
        ],
        termSlug: "prozessautomatisierung",
        termLinkLabel: "Prozessautomatisierung kurz erklärt",
      },
      {
        heading: "Daten, die niemand abtippen muss",
        paragraphs: [
          "Wo Informationen von einem System ins nächste kopiert werden, geht nicht nur Zeit verloren — dort entstehen auch die Fehler, die später aufwendig gesucht werden müssen.",
          "Sind die Systeme verbunden, steht dieselbe Information überall gleich. Das ist die Voraussetzung dafür, dass Auswertungen überhaupt verlässlich sind.",
        ],
        termSlug: "schnittstelle",
        termLinkLabel: "Was eine Schnittstelle leistet",
      },
      {
        heading: "Anfragen in der richtigen Reihenfolge",
        paragraphs: [
          "Nicht jede Anfrage ist ein Auftrag. Wird die Liste von oben nach unten abgearbeitet, verbringt der Vertrieb einen erheblichen Teil seiner Zeit mit Gesprächen, die nie zu einem Projekt führen — und meldet sich bei den aussichtsreichen zu spät.",
          "Die Kriterien für die Vorsortierung kommen dabei aus Ihrem Geschäft. Die Software setzt sie nur konsequent um.",
        ],
        termSlug: "lead-qualifizierung",
        termLinkLabel: "Wie Anfragen qualifiziert werden",
      },
      {
        heading: "Was KI heute übernimmt — und was nicht",
        paragraphs: [
          "Der Nutzen entsteht bei einer klar umrissenen, häufig wiederkehrenden Aufgabe: Anfragen vorsortieren, Dokumente auslesen, Standardantworten vorbereiten. Nicht bei „KI im Unternehmen“ als Projektüberschrift.",
          "Fachentscheidungen bleiben beim Menschen. Automatisiert wird die Vorarbeit, die vor der Entscheidung liegt — und dort, wo ein Fehler teuer wäre, bleibt die Freigabe bei Ihrem Team.",
        ],
        termSlug: "ki-assistent",
        termLinkLabel: "Wofür sich ein KI-Assistent eignet",
      },
    ],
  },

  support: {
    title: "Was nach dem Launch passiert",
    intro:
      "Der Launch ist der Moment, in dem die ersten echten Daten entstehen. Erst danach lässt sich sagen, was ein System wirklich braucht.",
    blocks: [
      {
        heading: "Die ersten Wochen nach dem Start",
        paragraphs: [
          "Kein Konzept überlebt den Kontakt mit echten Nutzern vollständig. In den ersten Wochen zeigt sich, welche Seiten wirklich gelesen werden, wo Nutzer stehen bleiben und welche Funktion niemand benutzt.",
          "Diese Phase gehört für uns zum Projekt und nicht zur Nachbetreuung: beobachten, nachschärfen, entfernen, was nicht gebraucht wird.",
        ],
      },
      {
        heading: "Probleme sehen, bevor Kunden sie melden",
        paragraphs: [
          "Der schlechteste Weg, von einer Störung zu erfahren, ist der Anruf eines Kunden. Die meisten Ausfälle kündigen sich vorher an — durch Fehlermeldungen, längere Ladezeiten oder Formulare, die plötzlich nicht mehr ankommen.",
          "Mit laufender Überwachung liegt die Meldung bei uns, bevor sie bei Ihnen liegt.",
        ],
        termSlug: "monitoring",
        termLinkLabel: "Was Monitoring überwacht",
      },
      {
        heading: "Verbindliche Reaktionszeiten",
        paragraphs: [
          "„Wir kümmern uns“ ist eine Absichtserklärung. Wenn eine Bestellstrecke am Freitagnachmittag ausfällt, entscheidet allein die vereinbarte Reaktionszeit darüber, ob das Wochenende Umsatz bringt.",
          "Was zugesichert wird, richtet sich danach, was ein Ausfall Ihr Unternehmen tatsächlich kostet — nicht nach einem Standardpaket.",
        ],
        termSlug: "sla",
        termLinkLabel: "Was ein SLA festlegt",
      },
      {
        heading: "Weiterentwicklung nach Daten statt nach Gefühl",
        paragraphs: [
          "Nach dem Launch gibt es immer mehr Ideen als Budget. Die Frage ist nicht, was möglich wäre, sondern was als Nächstes den größten Unterschied macht.",
          "Wir entscheiden das anhand der tatsächlichen Nutzung: Wo brechen Menschen ab, was wird gesucht und nicht gefunden, welcher Schritt dauert zu lange. Laufende kleine Verbesserungen sind am Ende günstiger als der nächste große Umbau.",
        ],
      },
    ],
  },
};

export function getDeepDive(slug: string) {
  return SERVICE_DEEP_DIVE[slug];
}

// --- Search-result wording -------------------------------------------------
// Title and description as they should appear in Google, written in the
// client's language rather than as a service label. Kept next to the page
// content so both are edited in one place.

export interface ServiceSeo {
  title: string;
  description: string;
}

export const SERVICE_SEO: Record<string, ServiceSeo> = {
  websites: {
    title: "Websites für Unternehmen, die Anfragen bringen",
    description:
      "Wir bauen Unternehmenswebsites, die Ihr Angebot verständlich erklären und zur Anfrage führen — mit Struktur, Texten und Formularen, die zu Ihren Kunden passen.",
  },
  ecommerce: {
    title: "Online-Shops, die Käufer bis zur Bestellung führen",
    description:
      "Shops mit kurzem Checkout, gepflegtem Katalog und Anbindung an Lager und Warenwirtschaft — damit weniger Warenkörbe liegen bleiben und die Pflege Minuten dauert.",
    },
  "custom-software": {
    title: "Individuelle Software und Kundenportale für Unternehmen",
    description:
      "Wenn fertige Tools Ihre Abläufe nicht abbilden: Portale, interne Systeme und Automatisierung, die entlang Ihres Prozesses gebaut werden statt umgekehrt.",
  },
  automation: {
    title: "Prozesse automatisieren statt Routine abarbeiten",
    description:
      "Wiederkehrende Handgriffe übernimmt das System: verbundene Programme, automatisch qualifizierte Anfragen und KI für klar umrissene Aufgaben.",
  },
  support: {
    title: "Betreuung und Weiterentwicklung nach dem Launch",
    description:
      "Support, Monitoring und laufende Weiterentwicklung für bestehende Websites, Shops und Systeme — mit verbindlichen Reaktionszeiten statt „wir kümmern uns“.",
  },
};

export function getServiceSeo(slug: string) {
  return SERVICE_SEO[slug];
}
