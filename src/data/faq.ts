import type { FaqItem } from "@/components/FAQ";

// Per-page FAQ content. Each set answers the objections that actually stop
// a business owner from picking up the phone on THAT page — not a generic
// "how it works" list repeated everywhere. Written fresh in the same
// "consultant, not just a contractor" voice as services.ts, but never
// copied from it verbatim.

export const HOMEPAGE_FAQ: FaqItem[] = [
  {
    question: "Wir wissen noch nicht genau, was wir brauchen — können wir trotzdem anfangen?",
    answer:
      "Ja, genau damit beginnen die meisten Projekte bei uns. Sie schildern uns, was in Ihrem Geschäft nicht rundläuft, und wir finden gemeinsam heraus, welche Lösung wirklich passt — eine neue Website, Automatisierung oder etwas ganz anderes.",
  },
  {
    question: "Wie viel kostet ein Projekt bei Ihnen?",
    answer:
      "Das hängt vom Umfang ab, deshalb nennen wir vorab keine pauschale Zahl. Nach dem ersten Gespräch bekommen Sie ein klares Angebot — ohne versteckte Positionen und ohne Kleingedrucktes.",
  },
  {
    question: "Muss ich technische Begriffe verstehen, um mit Ihnen zu arbeiten?",
    answer:
      "Nein. Wir sprechen über Ihr Geschäft, nicht über Technologie. Sie müssen nicht wissen, was Backend oder API bedeutet — das ist unsere Aufgabe, nicht Ihre.",
  },
  {
    question: "Wir hatten schon schlechte Erfahrungen mit Dienstleistern. Was machen Sie anders?",
    answer:
      "Ein festes Team begleitet Ihr Projekt von Anfang bis Ende — Sie erklären die Aufgabe einmal, nicht bei jedem neuen Ansprechpartner erneut. Und wenn das Projekt live ist, sind wir nicht weg, sondern entwickeln es mit Ihnen weiter.",
  },
  {
    question: "Wie lange dauert ein typisches Projekt?",
    answer:
      "Das besprechen wir konkret beim ersten Gespräch, je nach Umfang. Was wir garantieren: klare Etappen mit sichtbaren Ergebnissen unterwegs, statt eines langen Prozesses ohne Einblick bis zum Schluss.",
  },
  {
    question: "Müssen wir Design, Entwicklung und Business selbst zusammenhalten?",
    answer:
      "Nein — bei uns arbeiten Entwicklung, Design und Geschäftsverständnis in einem Team zusammen. Sie haben eine Ansprechperson für das ganze Projekt, nicht drei Dienstleister, die Sie selbst koordinieren müssen.",
  },
];

export const PRODUCTS_FAQ: FaqItem[] = [
  {
    question: "Sind das fertige Vorlagen oder individuelle Projekte?",
    answer:
      "Jedes Projekt hier wurde für ein konkretes Unternehmen und ein konkretes Problem gebaut, nicht aus einer Vorlage angepasst. Ihr Projekt würde genauso entstehen: aus Ihrer Aufgabe heraus, nicht aus einem Baukasten.",
  },
  {
    question: "Kann ich sehen, wie ein Projekt zu meiner Branche aussehen könnte?",
    answer:
      "Sprechen Sie uns einfach auf Ihre Branche an — wir zeigen Ihnen gerne ähnliche Projekte oder erklären, wie ein vergleichbarer Fall bei Ihnen aussehen würde.",
  },
  {
    question: "Enden diese Projekte mit dem Launch oder geht es danach weiter?",
    answer:
      "Die meisten laufenden Projekte in dieser Übersicht sind über Monate und Jahre gewachsen. Wir bleiben nach dem Launch dabei und entwickeln das System mit dem Geschäft weiter, statt nach der Übergabe zu verschwinden.",
  },
  {
    question: "Woraus bestand am Anfang jedes dieser Projekte — aus einer fertigen Idee?",
    answer:
      "Selten. Meistens aus einer vagen Beobachtung wie „irgendwas läuft bei uns zu langsam\". Die eigentliche Lösung — Website, Portal oder Automatisierung — haben wir gemeinsam mit dem Kunden erst im Gespräch gefunden.",
  },
];

export const SERVICE_FAQ: Record<string, FaqItem[]> = {
  websites: [
    {
      question: "Reicht es nicht, das bestehende Design einfach aufzufrischen?",
      answer:
        "Manchmal schon — das klären wir ehrlich im ersten Gespräch. Oft liegt das eigentliche Problem aber nicht am Look, sondern daran, dass die Website nicht erklärt, was Sie anbieten, oder Anfragen unterwegs verliert. Das lässt sich nicht mit neuen Farben lösen.",
    },
    {
      question: "Woher wissen Sie, ob wir eine Website oder ein Portal brauchen?",
      answer:
        "Das finden wir gemeinsam heraus. Wenn Ihre Kunden nur Informationen brauchen und Kontakt aufnehmen sollen, reicht eine Website. Wenn sie sich einloggen, Daten einsehen oder etwas kaufen sollen, ist es meist mehr als das — das sagen wir Ihnen ehrlich, statt Ihnen etwas zu verkaufen, das Sie nicht brauchen.",
    },
    {
      question: "Können wir Inhalte später selbst ändern, ohne Sie jedes Mal zu fragen?",
      answer:
        "Ja, genau das ist das Ziel. Texte, Bilder und Angebote sollen Sie selbst pflegen können, ohne auf uns zu warten. Wir übernehmen die technische Seite und die größeren Weiterentwicklungen.",
    },
    {
      question: "Wie stellen Sie sicher, dass die neue Website tatsächlich mehr Anfragen bringt?",
      answer:
        "Eine Website, die niemand versteht, bringt keine Anfragen, egal wie schön sie aussieht. Deshalb arbeiten wir von der Kundenfrage rückwärts: Was muss jemand sehen, um Vertrauen zu fassen und den nächsten Schritt zu gehen. Struktur und Texte sind Teil der Arbeit, nicht nur das Design.",
    },
  ],
  ecommerce: [
    {
      question: "Wir haben schon einen Shop — lohnt sich ein neuer wirklich?",
      answer:
        "Nicht immer muss alles neu gebaut werden. Oft reicht es, den bestehenden Checkout und die Prozesse dahinter zu überarbeiten. Wir schauen uns zuerst an, wo tatsächlich Käufer verloren gehen, bevor wir über einen Neubau sprechen.",
    },
    {
      question: "Auf welchen Plattformen arbeiten Sie — sind wir an ein System gebunden?",
      answer:
        "Wir arbeiten mit Shopify, WooCommerce und individuellen Lösungen, je nachdem, was zu Ihrem Sortiment und Ihren Prozessen passt. Sie sind nicht an eine bestimmte Plattform gebunden, nur weil wir sie gut können.",
    },
    {
      question: "Können Sie unseren Shop mit Lager und Buchhaltung verbinden?",
      answer:
        "Ja, das ist einer der häufigsten Gründe, warum Kunden zu uns kommen. Getrennte Systeme bedeuten doppelte manuelle Arbeit und Fehler — wir verbinden Shop, Warenwirtschaft und Lager, sodass Daten automatisch fließen.",
    },
    {
      question: "Was passiert, wenn nach dem Launch der Umsatz nicht sofort steigt?",
      answer:
        "Wir lassen Sie danach nicht allein. Nach dem Launch schauen wir gemeinsam auf reale Daten — wo Käufer abspringen, was sich verkauft — und passen den Shop entsprechend an, statt das Projekt einfach abzuschließen.",
    },
  ],
  "custom-software": [
    {
      question: "Warum nicht einfach ein fertiges Tool von der Stange nutzen?",
      answer:
        "Fertige Tools sind oft der richtige erste Schritt, und das sagen wir Ihnen auch so, wenn es zutrifft. Individuelle Lösungen lohnen sich dort, wo Standardsoftware Ihre realen Prozesse nicht abbildet und Ihr Team sich ständig behelfen muss.",
    },
    {
      question: "Wie fangen Sie an, wenn unsere Prozesse aktuell nur in Excel und in Köpfen existieren?",
      answer:
        "Genau damit beginnen die meisten unserer Projekte. Wir schauen uns an, wie Ihr Team heute tatsächlich arbeitet, und bauen daraus ein System, statt Ihnen einen fertigen Prozess überzustülpen, den niemand nutzt.",
    },
    {
      question: "Was ist, wenn sich unsere Anforderungen während des Projekts ändern?",
      answer:
        "Das ist normal, besonders bei individuellen Systemen. Wir arbeiten in klaren Etappen mit sichtbaren Zwischenergebnissen, damit Änderungen früh auffallen und eingeplant werden können, statt das Projekt am Ende zu sprengen.",
    },
    {
      question: "Wer betreut das System, wenn es einmal läuft?",
      answer:
        "Wir bleiben der Partner, der sowohl Ihr Geschäft als auch den Code von innen kennt. Weiterentwicklung und Support laufen bei uns weiter, statt dass Sie nach dem Launch ohne Ansprechpartner dastehen.",
    },
  ],
  automation: [
    {
      question: "Woher wissen wir, welcher Prozess sich zuerst lohnt zu automatisieren?",
      answer:
        "Das finden wir gemeinsam heraus, indem wir uns anschauen, wo Ihr Team am meisten Zeit mit Handarbeit verliert. Meist gibt es ein oder zwei Prozesse, die spürbar mehr Aufwand kosten als alle anderen — dort setzen wir zuerst an.",
    },
    {
      question: "Ersetzt Automatisierung unsere Mitarbeiter?",
      answer:
        "Nein, sie nimmt ihnen die Routine ab, die niemand gerne macht — Daten kopieren, Anfragen sortieren, immer gleiche Schritte wiederholen. Die freiwerdende Zeit fließt in Arbeit, die tatsächlich Ergebnisse bringt.",
    },
    {
      question: "Funktioniert Automatisierung auch mit unseren bestehenden Tools?",
      answer:
        "In den meisten Fällen ja. Wir verknüpfen die Systeme, die Sie bereits nutzen, statt Sie zu einem Wechsel zu zwingen. Nur wenn ein Tool die Aufgabe grundsätzlich nicht abbilden kann, sprechen wir über eine Alternative.",
    },
    {
      question: "Wie schnell sieht man ein Ergebnis?",
      answer:
        "Einzelne Prozesse lassen sich oft schon in wenigen Wochen automatisieren, und der Effekt ist sofort spürbar — weniger manuelle Arbeit, weniger Fehler. Größere Vorhaben mit mehreren Prozessen planen wir in klaren Etappen.",
    },
  ],
  support: [
    {
      question: "Unser bisheriger Dienstleister hat das System gebaut — können Sie trotzdem übernehmen?",
      answer:
        "Ja, das ist einer der häufigsten Gründe, warum Kunden zu uns kommen. Wir verschaffen uns zuerst einen ehrlichen Überblick über das bestehende System, bevor wir etwas ändern, statt blind draufloszuarbeiten.",
    },
    {
      question: "Was ist, wenn niemand mehr weiß, wie das System aufgebaut ist?",
      answer:
        "Das ist normal bei Systemen ohne laufende Betreuung. Ein Audit am Anfang zeigt uns, wie das System tatsächlich funktioniert, wo Risiken stecken und was zuerst angegangen werden sollte.",
    },
    {
      question: "Bekommen wir feste Reaktionszeiten oder wird das nach Aufwand abgerechnet?",
      answer:
        "Beides ist möglich. Wenn feste Reaktionszeiten für Sie wichtig sind, vereinbaren wir ein SLA. Genauso gut arbeiten wir laufend an der Weiterentwicklung, ohne dass jede Kleinigkeit einzeln abgestimmt werden muss.",
    },
    {
      question: "Wie entscheiden Sie, was als Nächstes weiterentwickelt wird?",
      answer:
        "Nicht nach Bauchgefühl, sondern anhand echter Nutzungsdaten — was Nutzer tatsächlich tun, wo sie hängen bleiben, was am meisten gebraucht wird. So fließt die Zeit dorthin, wo sie wirklich etwas bewirkt.",
    },
  ],
};
