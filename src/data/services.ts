export interface ScopeItem {
  text: string;
}

export interface OutOfScopeItem {
  text: string;
  linkSlug: string;
  linkLabel: string;
}

export interface BeforeAfterRow {
  before: string;
  after: string;
}

export interface ServiceDef {
  slug: string;
  label: string; // matches the TechMarquee wording
  heroTitle: string[]; // lines
  heroSubtitle: string;
  symptoms: string[];
  rationaleTitle: string[]; // lines
  rationaleLines: string[]; // three short supporting lines
  included: ScopeItem[];
  addon: ScopeItem[];
  outOfScope: OutOfScopeItem[];
  beforeAfter: BeforeAfterRow[];
}

export const SERVICES: ServiceDef[] = [
  {
    slug: "websites",
    label: "Websites",
    heroTitle: ["Websites, die", "erklären und verkaufen"],
    heroSubtitle:
      "Keine Visitenkarte, die nur schön aussieht, sondern ein Werkzeug, das Kundenfragen beantwortet und Anfragen bringt.",
    symptoms: [
      "Die Website wirkt neben dem Wettbewerb veraltet",
      "Anfragen kommen rein, aber die Conversion ist schwach",
      "Vieles muss man am Telefon erklären, was die Website eigentlich zeigen sollte",
      "Unklar, wo man zuerst ansetzen soll — Design, Texte oder Struktur",
    ],
    rationaleTitle: ["Die Website ist", "der erste Kontaktpunkt"],
    rationaleLines: [
      "Von ihr hängt das Vertrauen in den ersten Sekunden ab.",
      "Eine schwache Website verlagert die Arbeit auf den Vertrieb.",
      "Eine gute Website verkauft und filtert Anfragen von selbst, rund um die Uhr.",
    ],
    included: [
      { text: "Unternehmenswebsites und Portale" },
      { text: "Landingpages für konkrete Kampagnen und Aufgaben" },
      { text: "Responsives Design für alle Geräte" },
      { text: "Anfrageformulare und grundlegende Analytics" },
    ],
    addon: [
      { text: "Mehrsprachigkeit" },
      { text: "Integration mit CRM und externen Diensten" },
      { text: "Personalisierte Inhalte" },
    ],
    outOfScope: [
      {
        text: "Ein Shop mit Zahlung und Produktkatalog",
        linkSlug: "ecommerce",
        linkLabel: "E-Commerce",
      },
      {
        text: "Ein internes System oder Kundenportal",
        linkSlug: "custom-software",
        linkLabel: "Custom Solutions",
      },
    ],
    beforeAfter: [
      { before: "Die Website wirkt wie eine Visitenkarte", after: "Die Website erklärt den Nutzen und verkauft" },
      { before: "Anfragen verlaufen im Nichts", after: "Ein klarer Weg vom Interesse zur Anfrage" },
      { before: "Die mobile Version ist unpraktisch", after: "Funktioniert auf jedem Gerät gleich gut" },
      { before: "Änderungen dauern Wochen", after: "Das Team kann Inhalte selbst aktualisieren" },
    ],
  },
  {
    slug: "ecommerce",
    label: "E-Commerce",
    heroTitle: ["Shops, die", "Käufer nicht verlieren"],
    heroSubtitle:
      "Jeder unnötige Schritt im Checkout ist entgangener Umsatz. Wir entfernen diese Schritte.",
    symptoms: [
      "Online-Verkäufe wachsen langsamer, als sie könnten",
      "Viele abgebrochene Warenkörbe, unklar an welcher Stelle",
      "Der Katalog wird manuell aktualisiert",
      "Der Shop ist nicht mit Lager und Buchhaltung verbunden",
    ],
    rationaleTitle: ["Jeder Schritt", "kostet Käufer"],
    rationaleLines: [
      "Ein Klick zu viel im Checkout — entgangener Umsatz.",
      "Ein Shop, der schwer zu pflegen ist, bremst das Sortimentswachstum.",
      "Getrennte Systeme vervielfachen manuelle Arbeit und Fehler.",
    ],
    included: [
      { text: "Shops auf Shopify, WooCommerce und individuelle Lösungen" },
      { text: "Checkout, Zahlung, Versand" },
      { text: "Synchronisation mit Warenwirtschaft und Lager" },
      { text: "Katalog- und Sortimentsverwaltung" },
    ],
    addon: [
      { text: "Marktplatz-Logik" },
      { text: "Abo-Modelle" },
      { text: "Multiwährung und Mehrsprachigkeit" },
    ],
    outOfScope: [
      {
        text: "Eine Unternehmenswebsite ohne Verkauf",
        linkSlug: "websites",
        linkLabel: "Websites",
      },
      {
        text: "Vollständig individuelle Lager- und Buchhaltungslogik",
        linkSlug: "custom-software",
        linkLabel: "Custom Solutions",
      },
    ],
    beforeAfter: [
      { before: "Käufer verlassen den Shop ohne Bestellung", after: "Ein kurzer, klarer Weg zur Zahlung" },
      { before: "Der Katalog wird manuell gepflegt", after: "Sortimentspflege dauert Minuten" },
      { before: "Shop und Lager laufen getrennt", after: "Daten werden automatisch synchronisiert" },
      { before: "Unklar, was sich am besten verkauft", after: "Der reale Verkaufsüberblick ist sichtbar" },
    ],
  },
  {
    slug: "custom-software",
    label: "Custom Solutions",
    heroTitle: ["Systeme, die", "wie Ihr Geschäft funktionieren"],
    heroSubtitle:
      "Wenn fertige Tools nicht abdecken, wie Ihre Prozesse wirklich funktionieren.",
    symptoms: [
      "Mitarbeiter und Kunden nutzen selbstgebaute Tabellen statt eines Systems",
      "Prozesse hängen an der manuellen Arbeit einzelner Personen",
      "Es gibt keinen zentralen Ort, an dem sichtbar ist, was im Unternehmen passiert",
      "Fertige Tools decken die realen Aufgaben nicht ab",
    ],
    rationaleTitle: ["Je schneller das Wachstum,", "desto teurer wird „provisorisch“"],
    rationaleLines: [
      "Jeder Prozess ohne System wird mit der Zeit teurer.",
      "Eine individuelle Lösung zahlt sich dort aus, wo Standardtools nicht mehr ausreichen.",
      "Ein Portal gibt dem Team Zeit für die eigentliche Arbeit zurück.",
    ],
    included: [
      { text: "Kunden- und Partnerportale" },
      { text: "Interne Tools für das Team" },
      { text: "Automatisierung konkreter Prozesse" },
      { text: "KI-Assistenten für konkrete Aufgaben" },
    ],
    addon: [
      { text: "Integrationen mit externen Systemen" },
      { text: "Mobile Apps" },
      { text: "Erweiterte Analysen und Reporting" },
    ],
    outOfScope: [
      {
        text: "Eine Standardwebsite, für die eine fertige Lösung reicht",
        linkSlug: "websites",
        linkLabel: "Websites",
      },
      {
        text: "Ein Standard-Shop ohne besondere Logik",
        linkSlug: "ecommerce",
        linkLabel: "E-Commerce",
      },
    ],
    beforeAfter: [
      { before: "Der Prozess hängt an einer Person", after: "Der Prozess funktioniert unabhängig davon, wer gerade da ist" },
      { before: "Daten sind über Dateien und Nachrichten verstreut", after: "Alles an einem übersichtlichen Ort" },
      { before: "Kunden warten auf eine manuelle Antwort", after: "Es gibt selbstständigen Zugriff auf die nötigen Informationen" },
      { before: "Routine frisst Stunden", after: "Ein Teil der Routine ist automatisiert, auch mit KI" },
    ],
  },
  {
    slug: "automation",
    label: "Automation",
    heroTitle: ["Weniger Routine,", "mehr Ergebnis"],
    heroSubtitle:
      "Manuelle Routine ist eine versteckte Kostenposition, die in keinem Bericht direkt sichtbar ist.",
    symptoms: [
      "Mitarbeiter wiederholen dieselben Handgriffe jeden Tag manuell",
      "Daten werden manuell zwischen Systemen kopiert",
      "Die Tools des Teams sind nicht miteinander verbunden",
      "Anfragen werden der Reihe nach bearbeitet, ohne Qualifizierung",
    ],
    rationaleTitle: ["Routine ist", "eine versteckte Kostenposition"],
    rationaleLines: [
      "Manuelle Arbeit kostet Zeit, die sich freisetzen lässt.",
      "Die Automatisierung eines Prozesses schafft Ressourcen für das, was das Geschäft voranbringt.",
      "KI übernimmt heute Aufgaben, für die es vor kurzem noch eine eigene Stelle brauchte.",
    ],
    included: [
      { text: "Automatisierung wiederkehrender Prozesse" },
      { text: "Verknüpfung von Systemen (Integrationen)" },
      { text: "KI-Tools für konkrete Aufgaben" },
      { text: "Automatische Qualifizierung von Anfragen" },
    ],
    addon: [
      { text: "Umfassende Neugestaltung mehrerer Prozesse zugleich" },
      { text: "Schulung des Teams für neue Tools" },
      { text: "Monitoring und Reporting für Prozesse" },
    ],
    outOfScope: [
      {
        text: "Neuentwicklung einer Website oder eines Shops",
        linkSlug: "websites",
        linkLabel: "Websites",
      },
      {
        text: "Ein neues internes System als eigenständiges Projekt",
        linkSlug: "custom-software",
        linkLabel: "Custom Solutions",
      },
    ],
    beforeAfter: [
      { before: "Stunden für wiederkehrende Aufgaben", after: "Die Aufgabe läuft automatisch" },
      { before: "Daten werden manuell kopiert", after: "Systeme tauschen Daten von selbst aus" },
      { before: "Anfragen werden der Reihe nach bearbeitet", after: "Anfragen werden automatisch qualifiziert" },
      { before: "Wachstum bedeutet mehr manuelle Last", after: "Prozesse verkraften Wachstum ohne zusätzliche Hände" },
    ],
  },
  {
    slug: "support",
    label: "Support",
    heroTitle: ["Der Launch ist der Anfang,", "nicht das Ende"],
    heroSubtitle:
      "Erst nach dem Launch zeigt sich, was Nutzer wirklich brauchen. Wir bleiben dabei und entwickeln das System weiter.",
    symptoms: [
      "Das Projekt ist live, aber der Dienstleister ist verschwunden oder entwickelt nicht weiter",
      "Unklar, was zuerst optimiert werden sollte",
      "Kleine Änderungen und Bugs stapeln sich — niemand kümmert sich darum",
      "Änderungen sind riskant, weil niemand das System wirklich versteht",
    ],
    rationaleTitle: ["Ein System,", "das stillsteht"],
    rationaleLines: [
      "Mit der Zeit steht es dem Geschäft eher im Weg, als zu helfen.",
      "Laufende Weiterentwicklung ist günstiger als seltene große Umbauten.",
      "Wir bleiben der Partner, der sowohl das Geschäft als auch das System von innen kennt.",
    ],
    included: [
      { text: "Technischer Support und Monitoring" },
      { text: "Optimierung bestehender Lösungen" },
      { text: "Weiterentwicklung mit dem Wachstum des Unternehmens" },
      { text: "Analyse der tatsächlichen Nutzung" },
    ],
    addon: [
      { text: "Vollständiges Audit und Entwicklungs-Roadmap" },
      { text: "SLA für Reaktionszeiten" },
      { text: "Regelmäßiges Reporting zur Weiterentwicklung" },
    ],
    outOfScope: [
      {
        text: "Neuentwicklung eines Produkts von Grund auf",
        linkSlug: "custom-software",
        linkLabel: "Custom Solutions",
      },
    ],
    beforeAfter: [
      { before: "Nach dem Launch ist niemand mehr da", after: "Das Team entwickelt das System weiter" },
      { before: "Änderungen warten wochenlang", after: "Ein klarer Prozess für Support und Prioritäten" },
      { before: "Niemand weiß, was im System steckt", after: "Es gibt einen Partner, der Geschäft und Code kennt" },
      { before: "Weiterentwicklung passiert zufällig", after: "Weiterentwicklung basiert auf echten Daten" },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
