export interface CaseStudy {
  slug: string;
  name: string;
  category: string; // matches a ServiceDef.slug — used to surface related cases on service pages
  image: string; // representative photo from the client's live site, used as the portfolio card background
  problem: string;
  solution: string;
  result: string;
}

export const CASES: CaseStudy[] = [
  {
    slug: "wecubexx",
    name: "Wecubexx",
    category: "websites",
    image:
      "https://wecubex-staging.seiten.co/wp-content/webp-express/webp-images/uploads/2026/06/Frame-384.jpg.webp",
    problem:
      "Eine Metallverarbeitungsgruppe mit sechs Werken in vier Ländern hielt sich jahrelang mit einer Website alter Generation über Wasser: komplexe Struktur, schwer auffindbare Branchen und Technologien, und Seiten konnte nur das IT-Team über ein veraltetes CMS aktualisieren.",
    solution:
      "Wir haben die Website auf einer modernen Plattform komplett neu aufgebaut: neue Struktur nach Branchen und Technologien, klare Navigation und ein Admin-Bereich, den das Marketing-Team selbst nutzt — ohne Entwickler.",
    result:
      "Die neue Website ist fertig und durchläuft die finale Prüfung vor dem Launch — WECUBEX erhält einen modernen digitalen Auftritt für alle sechs Produktionsstandorte, ohne den bestehenden Markenauftritt zu verlieren.",
  },
  {
    slug: "proctec",
    name: "Proctec",
    category: "websites",
    image:
      "https://www.proctec.de/wp-content/uploads/2026/03/93d5bfa37581bec8120b9d9295b3525ba099b058-scaled.jpg",
    problem:
      "proCtec liefert umfassende Lösungen für die Produktionsautomatisierung in einem Dutzend Branchen, doch die alte Website zeigte weder das Ausmaß der Expertise noch reale Projekte — Besucher konnten kaum erkennen, welche Lösung zu ihrer Produktion passt.",
    solution:
      "Wir haben die neue Struktur um Produktlinien und Branchen herum aufgebaut, einen Bereich für Referenzen und Kundenstimmen ergänzt und die Website schnell sowie einfach für die eigenständige Pflege von Blog und News gemacht.",
    result:
      "proCtec hat eine Website, die über 25 Jahre Erfahrung in der industriellen Automatisierung klar vermittelt und Kunden aus verschiedenen Branchen hilft, schneller die passende Lösung zu finden.",
  },
  {
    slug: "erfi",
    name: "Erfi",
    category: "websites",
    image: "https://www.erfi.de/wp-content/uploads/2025/05/og-image.png",
    problem:
      "Ein Hersteller von Labormöbeln und Messsystemen mit 70-jähriger Geschichte verkaufte über eine Website, auf der ganz unterschiedliche Zielgruppen vermischt waren — Bildungseinrichtungen, Industrielabore und Produktion —, sodass das passende Produkt schwer zu finden war.",
    solution:
      "Wir haben den Katalog nach Einsatzbereichen neu strukturiert (Labore, Ausbildung, Montage), Anwendungsübersichten ergänzt und den Zugriff auf Kataloge und technische Unterlagen vereinfacht.",
    result:
      "erfi hat einen modernen Katalog-Auftritt, auf dem Kunden aus verschiedenen Segmenten schneller die passende Produktlinie finden, während das Team Produkte und News selbst aktuell hält.",
  },
  {
    slug: "gbs",
    name: "GBS",
    category: "websites",
    image: "https://gbs-metrology.com/wp-content/uploads/2025/08/bwF5UIu1x8.png",
    problem:
      "Ein Hersteller hochpräziser optischer Messsysteme brauchte eine Website, die die Sprache von Ingenieuren aus verschiedenen Branchen spricht — von Halbleitern bis Medizintechnik — statt in reinen technischen Beschreibungen unterzugehen.",
    solution:
      "Wir haben die Website um Anwendungsszenarien nach Branchen und Sensortypen herum konzipiert, einen Bereich mit messbaren Ergebnissen aus Projekten ergänzt und Formulare für technische Unterlagen eingebunden.",
    result:
      "GBS metrology hat eine Website, die Besucher von ihrer Branche zum passenden Produkt führt und den Effekt der Messsysteme anschaulich zeigt.",
  },
  {
    slug: "wetropa",
    name: "Wetropa",
    category: "websites",
    image:
      "https://www.wetropa.de/wp-content/uploads/2024/03/wetropa-schaumstoff-scaled-v1.png",
    problem:
      "Ein Systemanbieter für Verpackungslösungen mit Produktion in Deutschland und der Schweiz brauchte eine Website, die sowohl Material als auch die Full-Service-Leistung — von Entwicklung bis Prüfung — gleichermaßen gut verkauft und den Nachhaltigkeitsfokus des Unternehmens betont.",
    solution:
      "Wir haben die Website in klare Produktlinien und Einsatzbranchen gegliedert, einen eigenen Bereich für Nachhaltigkeit und das hauseigene Prüflabor geschaffen und Blog sowie Mehrsprachigkeit für internationale Kunden ergänzt.",
    result:
      "Wetropa hat einen Website-Auftritt, der die Positionierung „mehr als Verpackung“ vermittelt und Kunden aus verschiedenen Branchen hilft, schneller die passende Lösung zu finden.",
  },
  {
    slug: "lemming",
    name: "Lemming",
    category: "websites",
    image:
      "https://lemming-rammtechnik.de/wp-content/uploads/2023/07/Traegerbohlwand-11_web-jpg.webp",
    problem:
      "Ein auf Ramm- und Spundwandarbeiten spezialisiertes Bauunternehmen konkurrierte um Aufträge mit einer alten Website, die komplexe Bauleistungen nicht einfach erklärte und keine schnelle Anfrage zu einem konkreten Bauvorhaben ermöglichte.",
    solution:
      "Wir haben eine Website mit klarer Leistungsstruktur gebaut — Spundwände, Rammarbeiten, Kampfmittelsondierung und mehr —, mit Anfrageformular und der Zusage einer Antwort innerhalb von 48 Stunden, und die Unternehmenszahlen direkt auf die Startseite gestellt.",
    result:
      "LEMMING hat eine Website, die komplexe Baufachbegriffe in eine für Auftraggeber verständliche Sprache übersetzt und die Bearbeitung von Anfragen zu Bauvorhaben beschleunigt.",
  },
  {
    slug: "cnag",
    name: "CNAG",
    category: "websites",
    image: "https://cnag.de/wp-content/uploads/2025/06/20250426_110306_0377-1140x760.jpg",
    problem:
      "Ein IT-Partner mit 30 Jahren Erfahrung in strategischer IT-Beratung und Cybersicherheit brauchte eine Website, die die Expertise von dreizehn hochspezialisierten Teams zeigt — statt wie ein austauschbarer IT-Dienstleister zu wirken.",
    solution:
      "Wir haben die Struktur um die drei Säulen der Kundenstrategie herum aufgebaut — IT-Vision, IT-Strategie, IT-Sicherheit —, ein Kompetenzzentrum mit Fachartikeln für IT-Leiter und Spezialisten ergänzt und eine komfortable Themensuche eingebaut.",
    result:
      "connecT Systemhaus hat eine Website, die das Unternehmen als strategischen IT-Partner positioniert statt als gewöhnlichen Dienstleister, und Lesern hilft, passende Fachinhalte für ihre Rolle schnell zu finden.",
  },
  {
    slug: "teupen",
    name: "Teupen",
    category: "websites",
    image:
      "https://teupen.com/wp-content/uploads/2022/12/LEO30Tplus_23_06_23-3-e1688024258988.png",
    problem:
      "Ein Hersteller kompakter Raupenarbeitsbühnen verkaufte eine breite Modellpalette über eine Website, die nicht dabei half, schnell die passende Arbeitshöhe und Ausführung für eine konkrete Aufgabe zu finden.",
    solution:
      "Wir haben alle Modelle in eine klare Übersicht mit Filterung nach Arbeitshöhe zusammengeführt, Arbeitshöhe und Kennwerte direkt auf die Produktseite gestellt und die Anfrage eines Angebots vereinfacht.",
    result:
      "TEUPEN hat eine Website, die die Auswahl der passenden Arbeitsbühne beschleunigt und die Kontaktaufnahme mit dem Vertrieb vereinfacht.",
  },
  {
    slug: "vob",
    name: "VOB",
    category: "websites",
    image: "https://www.vob.de/wp-content/uploads/2024/07/vob.jpeg",
    problem:
      "Der Verlag eines Fachmediums für die Baubranche — rund um VOB, Bau- und Vergaberecht — brauchte eine moderne Publishing-Plattform: gut lesbar und mit der Möglichkeit für die Redaktion, Inhalte selbst zu verwalten.",
    solution:
      "Wir haben ein individuelles Design für das Online-Magazin entwickelt, das Stil und Positionierung des Mediums widerspiegelt, und Struktur sowie Navigation für den schnellen Zugriff auf Artikel nach Kategorien durchdacht.",
    result:
      "Der Kunde erhielt ein fertiges, modernes Design für das Online-Magazin mit einer skalierbaren Struktur, die die Redaktion selbstständig weiterentwickelt.",
  },
];
