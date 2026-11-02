// Case studies for /projekte and /projekte/[slug].
//
// The site is German only, so these are plain strings rather than the
// de/ru pairs used in catalog.ts.
//
// Copy rules (owner, 30.10.2026): no full stop at the end of a text, no
// long dash. Inside a paragraph normal sentence punctuation applies; only
// the closing sentence stays open.

export type Case = {
  slug: string;
  name: string;
  /** Industry, shown above the project name */
  tag: string;
  /** The client's live site */
  url: string;
  /** Year the project went live, or the design year for the older ones */
  year: string;
  image: string;
  /** One line under the name on the overview page */
  lead: string;
  /** The long description on the overview page: two paragraphs */
  story: [string, string];
  /** Platforms and parts of the work, shown as small tags */
  stack: string[];
  /** The three blocks of the case page */
  problem: string;
  solution: string;
  result: string;
  /** Service this project belongs to, for the link to /leistungen/... */
  service: string;
  badge?: string;
};

export const cases: Case[] = [
  {
    slug: "wecubexx",
    name: "WECUBEX",
    tag: "Metallverarbeitung",
    url: "https://www.wecubex.com/",
    year: "2026",
    image: "/projects/wecubexx.webp",
    badge: "Launch in Kürze",
    lead: "Ein Auftritt für sechs Werke in vier Ländern, den das Marketing selbst pflegt",
    story: [
      "Eine Metallverarbeitungsgruppe mit sechs Werken in vier Ländern arbeitete jahrelang mit einer Website der vorigen Generation. Branchen und Fertigungsverfahren waren über eine verschachtelte Struktur verteilt, und jede Textänderung lief über die IT, weil das alte Redaktionssystem für niemanden sonst bedienbar war.",
      "Wir haben den Auftritt vollständig neu aufgebaut: eine Struktur nach Branchen und Technologien, eine Navigation, die auch ein Einkäufer ohne Vorwissen versteht, und einen Redaktionsbereich, in dem das Marketing Seiten, Referenzen und Stellenanzeigen ohne Entwickler anlegt. Die Seitenvorlagen bestehen aus wiederverwendbaren Modulen, sodass neue Werke und Verfahren später ohne Programmierung dazukommen",
    ],
    stack: ["WordPress", "Relaunch", "Mehrsprachig"],
    problem:
      "Sechs Produktionsstandorte in vier Ländern, aber ein Auftritt, der weder die Fertigungstiefe noch die Branchenerfahrung zeigte. Besucher fanden das passende Verfahren nur über Umwege, und Inhalte konnte ausschließlich die IT über ein veraltetes Redaktionssystem ändern",
    solution:
      "Neuaufbau auf WordPress mit einer Struktur nach Branchen und Technologien. Alle Seiten entstehen aus einem Satz wiederverwendbarer Module, die Redaktion arbeitet in einem aufgeräumten Admin-Bereich, und die Sprachversionen laufen über eine gemeinsame Verwaltung",
    result:
      "Die neue Website ist fertig und durchläuft die letzte Prüfung vor dem Launch. WECUBEX bekommt einen modernen Auftritt für alle sechs Werke, ohne den vertrauten Markenauftritt zu verlieren",
    service: "websites",
  },
  {
    slug: "proctec",
    name: "proCtec",
    tag: "Produktionsautomatisierung",
    url: "https://www.proctec.de/",
    year: "2026",
    image: "/projects/proctec.webp",
    lead: "25 Jahre Automatisierungserfahrung, sortiert nach Lösungen und Branchen",
    story: [
      "proCtec automatisiert Produktionslinien in rund einem Dutzend Branchen. Die alte Website zeigte davon wenig: weder den Umfang der Expertise noch konkrete Anlagen, die das Team gebaut hat. Wer aus der Lebensmittelproduktion kam, musste selbst herausfinden, ob proCtec für ihn der richtige Partner ist.",
      "Wir haben die Struktur um Lösungen und Branchen herum neu aufgesetzt, einen Bereich für Referenzen und Kundenstimmen ergänzt und Blog und News so gebaut, dass das Team sie selbst pflegt. Dazu kam eine Überarbeitung der Ladezeiten, weil ein Teil der Besucher vom Smartphone aus der Halle kommt",
    ],
    stack: ["WordPress", "Relaunch", "Pagespeed"],
    problem:
      "Umfassende Lösungen für die Produktionsautomatisierung in vielen Branchen, aber eine Website, die weder das Ausmaß der Expertise noch reale Projekte sichtbar machte. Besucher konnten kaum erkennen, welche Lösung zu ihrer Produktion passt",
    solution:
      "Eine neue Struktur nach Produktlinien und Branchen, ein eigener Bereich für Referenzen und Kundenstimmen und eine Redaktionsoberfläche, über die das Team Blog und News selbst aktuell hält. Die Seiten wurden auf schnelles Laden auch bei schlechter Mobilverbindung optimiert",
    result:
      "proCtec hat eine Website, die 25 Jahre Erfahrung in der industriellen Automatisierung klar vermittelt und Kunden aus verschiedenen Branchen schneller zur passenden Lösung führt",
    service: "websites",
  },
  {
    slug: "erfi",
    name: "erfi",
    tag: "Labormöbel und Messsysteme",
    url: "https://erfi.de/",
    year: "2025",
    image: "/projects/erfi.webp",
    lead: "Ein Katalog, der Labor, Ausbildung und Montage auseinanderhält",
    story: [
      "erfi baut seit siebzig Jahren Labormöbel und Messsysteme. Auf der alten Website lagen drei sehr unterschiedliche Zielgruppen übereinander: Industrielabore, Bildungseinrichtungen und die eigene Fertigung. Wer eine Laborzeile für eine Berufsschule suchte, landete zwischen Messtechnik für die Serienprüfung.",
      "Wir haben den Katalog nach Einsatzbereichen neu geordnet, zu jedem Bereich Anwendungsübersichten ergänzt und den Weg zu Katalogen und technischen Unterlagen verkürzt. Produktdaten und Neuigkeiten pflegt das Team seitdem selbst, ohne dass jede Änderung ein Ticket auslöst",
    ],
    stack: ["WordPress", "Produktkatalog", "Relaunch"],
    problem:
      "Ein Hersteller mit siebzigjähriger Geschichte verkaufte über eine Website, auf der Bildungseinrichtungen, Industrielabore und Fertigung vermischt waren. Das passende Produkt war dadurch schwer zu finden",
    solution:
      "Der Katalog wurde nach Einsatzbereichen neu strukturiert, also Labore, Ausbildung und Montage. Dazu kamen Anwendungsübersichten je Bereich und ein direkter Zugang zu Katalogen und technischen Unterlagen",
    result:
      "erfi hat einen modernen Katalog-Auftritt, auf dem Kunden aus verschiedenen Segmenten schneller ihre Produktlinie finden, während das Team Produkte und News selbst aktuell hält",
    service: "websites",
  },
  {
    slug: "gbs",
    name: "GBS metrology",
    tag: "Optische Messtechnik",
    url: "https://gbs-metrology.com/",
    year: "2025",
    image: "/projects/gbs.webp",
    lead: "Vom Anwendungsfall zum passenden Sensor, in der Sprache von Ingenieuren",
    story: [
      "GBS baut hochpräzise optische Messsysteme für Kunden von der Halbleiterfertigung bis zur Medizintechnik. Technische Datenblätter allein helfen dort wenig: Ein Entwickler sucht nicht nach einem Sensortyp, sondern nach einer Antwort auf seine Messaufgabe.",
      "Wir haben die Website um Anwendungsszenarien herum aufgebaut, nach Branche und Messaufgabe sortiert, und erst danach zum passenden Sensor geführt. Ein eigener Bereich zeigt messbare Ergebnisse aus Projekten, und technische Unterlagen lassen sich direkt über ein kurzes Formular anfordern",
    ],
    stack: ["WordPress", "Relaunch", "Technische Unterlagen"],
    problem:
      "Ein Hersteller hochpräziser optischer Messsysteme brauchte eine Website, die die Sprache von Ingenieuren aus sehr verschiedenen Branchen spricht, statt in reinen technischen Beschreibungen unterzugehen",
    solution:
      "Die Website ist um Anwendungsszenarien nach Branchen und Sensortypen herum konzipiert, ergänzt um einen Bereich mit messbaren Projektergebnissen und Formulare für technische Unterlagen",
    result:
      "GBS metrology hat eine Website, die Besucher von ihrer Branche zum passenden Produkt führt und den Nutzen der Messsysteme anschaulich zeigt",
    service: "websites",
  },
  {
    slug: "wetropa",
    name: "Wetropa",
    tag: "Verpackungen aus Schaumstoff und Wabenplatten",
    url: "https://www.wetropa.de/",
    year: "2025",
    image: "/projects/wetropa.webp",
    lead: "Mehr als Verpackung: Material, Entwicklung und eigenes Prüflabor",
    story: [
      "Wetropa ist Systemanbieter für Verpackungslösungen mit Produktion in Deutschland und der Schweiz. Das Unternehmen verkauft nicht nur Material, sondern den gesamten Weg von der Entwicklung bis zur Prüfung. Auf der alten Website war davon vor allem das Material sichtbar.",
      "Wir haben den Auftritt in klare Produktlinien und Einsatzbranchen gegliedert und der Entwicklungsleistung und dem hauseigenen Prüflabor je einen eigenen Bereich gegeben. Nachhaltigkeit, die für Wetropa ein echtes Argument und kein Beiwerk ist, bekam einen eigenen Schwerpunkt, dazu Blog und mehrere Sprachen für internationale Kunden",
    ],
    stack: ["WordPress", "Relaunch", "Mehrsprachig"],
    problem:
      "Ein Systemanbieter mit Produktion in zwei Ländern brauchte eine Website, die Material und Full-Service-Leistung gleichermaßen gut verkauft und den Nachhaltigkeitsfokus des Unternehmens trägt",
    solution:
      "Eine Gliederung nach Produktlinien und Einsatzbranchen, eigene Bereiche für Nachhaltigkeit und das hauseigene Prüflabor sowie Blog und Mehrsprachigkeit für internationale Kunden",
    result:
      "Wetropa hat einen Auftritt, der die Positionierung „mehr als Verpackung“ vermittelt und Kunden aus verschiedenen Branchen schneller zur passenden Lösung führt",
    service: "websites",
  },
  {
    slug: "lemming",
    name: "LEMMING",
    tag: "Spezialtiefbau",
    url: "https://lemming-rammtechnik.de/",
    year: "2024",
    image: "/projects/lemming.webp",
    lead: "Komplexe Bauleistungen einfach erklärt, mit schneller Anfrage zum Bauvorhaben",
    story: [
      "LEMMING ist auf Ramm- und Spundwandarbeiten spezialisiert und konkurriert um Aufträge, bei denen die Anfrage oft kurzfristig kommt. Die alte Website erklärte die Leistungen in Fachbegriffen, die ein Bauherr nicht unbedingt kennt, und bot keinen schnellen Weg, ein konkretes Vorhaben zu schildern.",
      "Wir haben die Leistungen klar sortiert, von Spundwänden über Rammarbeiten bis zur Kampfmittelsondierung, und jede in verständlicher Sprache beschrieben. Das Anfrageformular fragt genau die Angaben ab, die für eine erste Einschätzung nötig sind, und die Zusage einer Antwort innerhalb von 48 Stunden steht sichtbar daneben",
    ],
    stack: ["WordPress", "Relaunch", "Anfrageformular"],
    problem:
      "Ein Bauunternehmen für Ramm- und Spundwandarbeiten konkurrierte um Aufträge mit einer Website, die komplexe Bauleistungen nicht verständlich erklärte und keine schnelle Anfrage zu einem konkreten Bauvorhaben ermöglichte",
    solution:
      "Eine klare Leistungsstruktur, verständlich beschrieben, dazu ein Anfrageformular mit genau den nötigen Angaben, die Zusage einer Antwort innerhalb von 48 Stunden und die Unternehmenszahlen direkt auf der Startseite",
    result:
      "LEMMING hat eine Website, die Baufachbegriffe in eine für Auftraggeber verständliche Sprache übersetzt und die Bearbeitung von Anfragen deutlich beschleunigt",
    service: "websites",
  },
  {
    slug: "cnag",
    name: "connecT Systemhaus",
    tag: "IT-Beratung und Cybersicherheit",
    url: "https://cnag.de/",
    year: "2021",
    image: "/projects/cnag.webp",
    lead: "Dreizehn Fachteams, positioniert als strategischer IT-Partner",
    story: [
      "connecT berät seit dreißig Jahren zu IT-Strategie und Cybersicherheit und beschäftigt dreizehn hochspezialisierte Teams. Nach außen sah das aus wie bei jedem anderen Systemhaus auch: eine Leistungsliste, aus der niemand ablesen konnte, worin die eigentliche Stärke liegt.",
      "Wir haben die Struktur um die drei Säulen der Kundenstrategie herum aufgebaut, also IT-Vision, IT-Strategie und IT-Sicherheit, und ein Kompetenzzentrum mit Fachartikeln für IT-Leiter und Spezialisten ergänzt. Eine Themensuche führt Leser direkt zu den Inhalten für ihre Rolle",
    ],
    stack: ["Design 2021", "WordPress", "Fachredaktion"],
    problem:
      "Ein IT-Partner mit dreißig Jahren Erfahrung in strategischer Beratung und Cybersicherheit wirkte nach außen wie ein austauschbarer Dienstleister, obwohl dreizehn hochspezialisierte Teams dahinterstehen",
    solution:
      "Eine Struktur entlang der drei Säulen IT-Vision, IT-Strategie und IT-Sicherheit, ein Kompetenzzentrum mit Fachartikeln für IT-Leiter und Spezialisten und eine Themensuche über alle Inhalte",
    result:
      "connecT Systemhaus ist als strategischer IT-Partner positioniert statt als gewöhnlicher Dienstleister, und Leser finden Fachinhalte für ihre Rolle schnell",
    service: "websites",
  },
  {
    slug: "teupen",
    name: "TEUPEN",
    tag: "Raupenarbeitsbühnen",
    url: "https://teupen.com/en/",
    year: "2021",
    image: "/projects/teupen.webp",
    lead: "Die passende Arbeitshöhe finden, ohne jedes Datenblatt zu öffnen",
    story: [
      "TEUPEN baut kompakte Raupenarbeitsbühnen in einer breiten Modellpalette. Wer eine Bühne sucht, hat meistens eine konkrete Aufgabe vor Augen: eine Arbeitshöhe, eine Durchfahrtsbreite, einen Untergrund. Die alte Website half dabei nicht, sondern listete Modelle.",
      "Wir haben alle Modelle in eine Übersicht mit Filterung nach Arbeitshöhe zusammengeführt und die entscheidenden Kennwerte direkt auf die Produktseite gestellt, statt sie in Datenblättern zu verstecken. Die Angebotsanfrage sitzt an jeder Stelle, an der ein Besucher sich entscheidet",
    ],
    stack: ["Design 2021", "Produktfilter", "Relaunch"],
    problem:
      "Ein Hersteller kompakter Raupenarbeitsbühnen verkaufte eine breite Modellpalette über eine Website, die nicht half, schnell die passende Arbeitshöhe und Ausführung für eine konkrete Aufgabe zu finden",
    solution:
      "Alle Modelle in einer Übersicht mit Filterung nach Arbeitshöhe, die wichtigsten Kennwerte direkt auf der Produktseite und eine vereinfachte Angebotsanfrage",
    result:
      "TEUPEN hat eine Website, die die Auswahl der passenden Arbeitsbühne beschleunigt und die Kontaktaufnahme mit dem Vertrieb vereinfacht",
    service: "websites",
  },
  {
    slug: "vob",
    name: "VOB",
    tag: "Fachmedium für die Baubranche",
    url: "https://www.vob.de/",
    year: "2024",
    image: "/projects/vob.webp",
    lead: "Ein Online-Magazin, das sich lange lesen lässt",
    story: [
      "Der Verlag eines Fachmediums rund um VOB, Bau- und Vergaberecht brauchte eine Publishing-Plattform für Nachrichten, Fachartikel und Expertenbeiträge. Die Texte sind lang und juristisch dicht, also entscheidet das Layout darüber, ob sie gelesen oder überflogen werden.",
      "Wir haben ein eigenes Design für das Online-Magazin entwickelt, das zur Positionierung des Mediums passt und auf ruhiges Lesen ausgelegt ist. Struktur und Navigation führen Leser schnell zu den Kategorien, die sie betreffen, und die Vorlagen sind so angelegt, dass die Redaktion neue Formate ohne Umbau ergänzt",
    ],
    stack: ["UX/UI", "Design", "Online-Magazin"],
    problem:
      "Ein Fachverlag für Bau- und Vergaberecht brauchte eine moderne Publishing-Plattform: gut lesbar bei langen Fachtexten und von der Redaktion selbst zu verwalten",
    solution:
      "Ein individuelles Design für das Online-Magazin, das Stil und Positionierung des Mediums aufnimmt, mit durchdachter Struktur und Navigation für den schnellen Zugriff auf Artikel nach Kategorien",
    result:
      "Der Verlag hat ein fertiges, modernes Design für das Online-Magazin mit einer skalierbaren Struktur, die die Redaktion selbstständig weiterentwickelt",
    service: "websites",
  },
];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);

export const casesCopy = {
  title: "Projekte",
  lead: "Relaunches für Industrie- und B2B-Unternehmen aus Produktion, Messtechnik, Verpackung und Bau. Jedes Projekt zeigt die Ausgangslage, was wir umgesetzt haben und was sich für den Kunden verändert hat",
  open: "Projekt ansehen",
  visit: "Website ansehen",
  back: "Alle Projekte",
  problem: "Ausgangslage",
  solution: "Lösung",
  result: "Ergebnis",
  related: "Weitere Projekte",
  service: "Passende Leistung",
};
