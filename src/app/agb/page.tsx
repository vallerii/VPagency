import type { Metadata } from "next";
import {
  LegalLayout,
  LegalList,
  LegalSection,
  LegalText,
} from "@/components/legal/LegalLayout";
import { COMPANY, LEGAL_VERSION } from "@/data/legal";

export const metadata: Metadata = {
  title: `AGB — ${COMPANY.brand}`,
  description: `Allgemeine Geschäftsbedingungen von ${COMPANY.name} für Leistungen im Bereich Webentwicklung, Online-Shops, Kundenportale, Individualsoftware und Automatisierung.`,
};

export default function AgbPage() {
  return (
    <LegalLayout
      title="Allgemeine Geschäftsbedingungen"
      intro={`Diese Bedingungen gelten für alle Leistungen, die ${COMPANY.name} unter der Marke ${COMPANY.brand} für ihre Kunden erbringt.`}
      meta={`Stand: ${LEGAL_VERSION}`}
      currentPath="/agb"
    >
      <LegalSection title="1. Geltungsbereich und Begriffsbestimmungen">
        <LegalList
          ordered
          items={[
            `Für die Geschäftsbeziehung zwischen ${COMPANY.name}, ${COMPANY.street}, ${COMPANY.zip} ${COMPANY.city} (im Folgenden kurz „ANBIETER“ genannt) und dem Empfänger der Leistungen (im Folgenden kurz „KUNDE“ genannt, zusammen hier auch als die „PARTEIEN“ bezeichnet), insbesondere im Hinblick auf Verträge über Leistungen in den Bereichen Konzeption, Design, Entwicklung, Betrieb und Weiterentwicklung von Websites, Online-Shops, Kundenportalen, individueller Software sowie Prozessautomatisierung (nachfolgend kurz „Leistungen“ genannt) gelten ausschließlich diese Allgemeinen Geschäftsbedingungen.`,
            "Das Angebot des ANBIETERS richtet sich ausschließlich an Unternehmer (§ 14 BGB) bzw. an Gewerbetreibende.",
            "Widersprechende, abweichende oder ergänzende Allgemeine Geschäftsbedingungen des KUNDEN werden nicht Vertragsbestandteil, es sei denn, der ANBIETER stimmt deren Geltung ausdrücklich zu. Diese Allgemeinen Geschäftsbedingungen gelten auch dann, wenn der ANBIETER in Kenntnis entgegenstehender oder von diesen Allgemeinen Geschäftsbedingungen abweichender Bedingungen des KUNDEN Leistungen vorbehaltlos ausführt.",
            "Die vertragliche Grundlage ergibt sich aus der individuellen Absprache zwischen dem ANBIETER und dem KUNDEN (z. B. in Form eines Angebots) sowie den vorliegenden Bedingungen.",
            "Maßgeblich ist die jeweils vor Inanspruchnahme der Leistungen gültige Fassung der Allgemeinen Geschäftsbedingungen des ANBIETERS.",
            "Die Allgemeinen Geschäftsbedingungen gelten auch für alle zukünftigen Leistungsbeziehungen zwischen dem ANBIETER und dem KUNDEN, ohne dass es einer ausdrücklichen Einbeziehung bedarf.",
            "Sofern in den nachfolgenden Bestimmungen das generische Maskulinum verwendet wird, gilt dies einzig und allein aus Gründen der Einfachheit, ohne dass damit irgendeine Wertung verbunden ist.",
          ]}
        />
      </LegalSection>

      <LegalSection title="2. Vertragsschluss">
        <LegalList
          ordered
          items={[
            "Die Präsentation der Leistungen auf der Webseite, in sozialen Netzwerken, in Broschüren oder in Werbeanzeigen stellt kein verbindliches Angebot des ANBIETERS auf Abschluss eines Vertrags dar.",
            "Der Vertragsschluss zwischen dem ANBIETER und dem KUNDEN erfolgt in Textform per E-Mail.",
            "Der KUNDE erklärt sich ausdrücklich damit einverstanden, keine Login-Benutzernamen, Passwörter, Materialien und Links, auf die der KUNDE im Rahmen dieses Vertrags Zugriff erhält, an Dritte weiterzugeben.",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Leistungen">
        <LegalList
          ordered
          items={[
            "Der ANBIETER erbringt Leistungen insbesondere in den Bereichen Analyse und Konzeption, UX/UI-Design, Entwicklung von Websites, Online-Shops, Kundenportalen und individueller Software, Integration von Drittsystemen und Schnittstellen, Prozessautomatisierung sowie Betrieb, Wartung und Weiterentwicklung der erstellten Lösungen.",
            "Der konkrete Leistungsumfang ergibt sich stets aus der individuellen Absprache zwischen ANBIETER und KUNDE.",
            "In Bezug auf die Inhalte eines mit dem ANBIETER eingegangenen Dienstleistungsvertrags steht diesem ein Leistungsbestimmungsrecht nach § 315 BGB zu.",
            "Der ANBIETER ist berechtigt, sich zur Erfüllung einzelner oder aller vertraglichen Pflichten der Hilfe Dritter, insbesondere Subunternehmer, zu bedienen.",
            "Die PARTEIEN sind sich darüber einig, dass der ANBIETER bei der Erbringung der vereinbarten Leistungen dem KUNDEN gegenüber ausdrücklich keinen konkreten quantitativen und/oder wirtschaftlichen Erfolg schuldet (wie beispielsweise, aber nicht abschließend, eine bestimmte Anzahl an Anfragen oder Bestellungen, eine bestimmte Conversion-Rate oder eine bestimmte Positionierung in Suchmaschinen).",
            "Die inhaltliche und gestalterische Abstimmung erfolgt in der Regel einvernehmlich vorab (schriftlich, fernmündlich und/oder per elektronischer Kommunikation). Unabhängig davon liegt das Letztentscheidungsrecht bezüglich der konzeptionellen und gestalterischen Umsetzung beim ANBIETER.",
            "Für jedes gelieferte Arbeitsergebnis (z. B. Designentwurf, Text, Ausbaustufe) sind maximal zwei Korrekturschleifen im vereinbarten Leistungsumfang enthalten. Änderungswünsche sind vom KUNDEN schriftlich und konkretisiert mitzuteilen.",
            "Nach Abschluss der zweiten Korrekturschleife ist der KUNDE verpflichtet, das Arbeitsergebnis innerhalb von 7 Kalendertagen schriftlich abzunehmen oder konkretisierte Mängel zu benennen, die auf objektiv nachvollziehbare Abweichungen von den vertraglich vereinbarten Anforderungen hinweisen. Erfolgt innerhalb dieser Frist keine Rückmeldung, gilt das Arbeitsergebnis als abgenommen.",
            "Wünscht der KUNDE nach den zwei enthaltenen Korrekturschleifen weitere Änderungen, bedarf dies einer gesonderten Vereinbarung. Der ANBIETER wird dem KUNDEN hierfür ein verbindliches Angebot unterbreiten. Erst nach schriftlicher Bestätigung des Angebots durch den KUNDEN wird der ANBIETER den zusätzlichen Aufwand gemäß der aktuellen Preisliste abrechnen.",
            "Soweit der KUNDE den ANBIETER mit Tätigkeiten über die Accounts und im Namen des KUNDEN beauftragt (z. B. Zugriff auf Hosting, Domainverwaltung, Analyse- oder Werbekonten), erteilt er insoweit dem ANBIETER eine entsprechende Vollmacht.",
            "Sofern Arbeitsergebnisse durch Nachbearbeitungen und/oder eine erfolgte Korrekturschleife verändert werden, findet die Rechteübertragung erst mit der endgültigen Werkfassung und deren Zurverfügungstellung statt. Unbearbeitetes Material ist von der Rechteübertragung nicht umfasst.",
            "Der KUNDE erhält ein einfaches, zeitlich und örtlich unbegrenztes Nutzungsrecht zur Nutzung der erstellten Inhalte, Designs und Software im Rahmen seines eigenen Geschäftsbetriebs. Die gewerbliche Weitergabe bzw. der Verkauf durch den KUNDEN ist unzulässig. Jeder Verstoß wird verfolgt und führt zu möglichen Schadensersatzansprüchen.",
            "An Lizenzen Dritter (z. B. Schriftarten, Bildmaterial, Software-Bibliotheken, SaaS-Dienste) erwirbt der KUNDE nur die Rechte, die ihm vom jeweiligen Rechteinhaber eingeräumt werden. Laufende Lizenz- und Betriebskosten trägt der KUNDE, sofern nicht ausdrücklich etwas anderes vereinbart ist.",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Teilnahme an Workshops, Terminen und Veranstaltungen">
        <LegalText>
          Sofern die Leistungserbringung im Rahmen von Workshops, Strategieterminen oder
          Veranstaltungen erfolgt, gelten ergänzend die nachfolgenden Regelungen:
        </LegalText>
        <LegalList
          ordered
          items={[
            "Die Buchung von Workshops, Terminen, Veranstaltungen und dergleichen (nachfolgend „Termin“) ist verbindlich.",
            "Sofern im Zusammenhang mit einem vereinbarten Termin durch eine vom KUNDEN verschuldete Verspätung beim ANBIETER Mehrkosten anfallen (z. B. aufgrund von Verzögerungen im Arbeitsablauf des ANBIETERS), hat diese der KUNDE zu tragen.",
            "Der KUNDE ist verpflichtet, im Fall einer Absage innerhalb von vier Wochen vor dem vereinbarten Termin die entstandenen Kosten, mindestens jedoch 30 % der vereinbarten Vergütung, an den ANBIETER zu erstatten. Im Falle einer Absage innerhalb von 7 Tagen vor dem vereinbarten Termin ist der KUNDE verpflichtet, die vereinbarte Vergütung voll zu erbringen. Der ANBIETER muss sich jedoch dasjenige anrechnen lassen, was er an Aufwendungen erspart oder zu erwerben unterlässt.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Vergütung">
        <LegalList
          ordered
          items={[
            "Für die Leistungen gilt die jeweilige zum Zeitpunkt des Vertragsschlusses gemäß Angebot geltende Vergütung. Sofern keine Vergütung individuell vereinbart wurde, gilt die Vergütung gemäß geltender Preisliste. Soweit eine Ratenzahlung vereinbart ist, fällt die erste Rate unmittelbar mit Vertragsschluss an; die weiteren Raten fallen – sofern nicht anders vereinbart – jeweils monatlich im Voraus an. Alle Preise verstehen sich zuzüglich Umsatzsteuer.",
            "Sofern eine Einrichtungsgebühr vereinbart ist, fällt diese – sofern nicht abweichend geregelt – nur einmalig an. Im Rahmen einer etwaigen Vertragsverlängerung fällt keine erneute Einrichtungsgebühr an.",
            "Die Pflicht zur Erbringung der vertraglich vereinbarten Vergütung in voller Höhe besteht auch, wenn der KUNDE den ANBIETER anweist, die Leistungen vorübergehend zu unterbrechen, oder eine Unterbrechung aus anderen Gründen notwendig ist, soweit die Gründe nicht auf einem Verschulden des ANBIETERS beruhen.",
            "Der KUNDE ist, soweit nicht anders vereinbart, zur Vorleistung verpflichtet. Die vereinbarte Vergütung ist mit Rechnungsstellung sofort fällig und zahlbar innerhalb von 7 Tagen.",
            "Unterlässt der KUNDE eine notwendige Mitwirkungshandlung und verhindert hierdurch die Leistungserbringung durch den ANBIETER, bleibt der Vergütungsanspruch des ANBIETERS grundsätzlich unberührt.",
            "Der KUNDE kann nur mit rechtskräftig festgestellten oder unbestrittenen Forderungen sein Aufrechnungsrecht oder ein Zurückbehaltungsrecht ausüben bzw. geltend machen.",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Verzug">
        <LegalList
          ordered
          items={[
            "Etwaige Fristen zur Leistungserbringung durch den ANBIETER beginnen in jedem Fall nicht, bevor die vereinbarte Vergütung vollständig durch den KUNDEN beglichen wurde und sämtliche notwendigen Mitwirkungshandlungen des KUNDEN umfassend erbracht wurden.",
            "Ist der KUNDE mit fälligen Zahlungen im Verzug, behält sich der ANBIETER das Recht vor, weitere Leistungen bis zum Ausgleich der fälligen Zahlungen nicht auszuführen.",
            "Der ANBIETER ist berechtigt, den Vertrag bei Vorliegen eines wichtigen Grundes gemäß § 626 Abs. 1 BGB zu kündigen und sämtliche Leistungen einzustellen. Ein wichtiger Grund liegt insbesondere vor, wenn der KUNDE bei einer vereinbarten Ratenzahlung mit mindestens zwei fälligen Raten gegenüber dem ANBIETER in Verzug ist. Der ANBIETER ist berechtigt, die gesamte Vergütung, welche bis zum nächsten ordentlichen Beendigungstermin fällig würde, als Schadensersatz geltend zu machen. In diesem Fall muss sich der ANBIETER aber dasjenige anrechnen lassen, was er an Aufwendungen erspart oder zu erwerben unterlässt.",
          ]}
        />
      </LegalSection>

      <LegalSection title="7. Sonstige Pflichten der Parteien">
        <LegalList
          ordered
          items={[
            "Alle vertraglich zugesagten Leistungen erbringt der ANBIETER grundsätzlich erst ab dem Zeitpunkt des Vertragsschlusses bzw. dem individuell vereinbarten Beginn der Vertragslaufzeit.",
            "Der KUNDE stellt sicher, dass der ANBIETER zu jedem Zeitpunkt über alle erforderlichen Informationen, Inhalte und Zugänge verfügt, die zum Erreichen eines bestmöglichen Leistungsergebnisses erforderlich sind. Ist der ANBIETER daran gehindert, die vereinbarten Dienstleistungen zu erbringen, und resultieren die Hinderungsgründe aus der Sphäre des KUNDEN, bleibt der Vergütungsanspruch des ANBIETERS unberührt.",
            "Der KUNDE ist für sämtliche, insbesondere von ihm bereitgestellte Inhalte verantwortlich und hat zu gewährleisten, dass die Inhalte nicht durch Rechte Dritter belastet sind und nicht gegen geltendes Recht (insbesondere Urheber-, Wettbewerbs-, Marken-, Straf-, Jugendschutz- oder Datenschutzrecht) verstoßen. Der ANBIETER ist nicht zur Prüfung der Inhalte verpflichtet.",
            "Der ANBIETER ist berechtigt, alle Termine, sofern die jeweilige Art der Leistungserbringung nicht zwingend eine Anwesenheit vor Ort erfordert, dem KUNDEN gegenüber digital (z. B. via Zoom, Teams, Google Meet oder dergleichen) durchzuführen.",
            "Der KUNDE ist selbstständig dafür verantwortlich, die technischen Voraussetzungen bereitzuhalten, um das Angebot vollständig nutzen zu können. Bei Vorliegen von technischen Problemen des bereitgestellten Angebots ist der KUNDE zudem verpflichtet, an der Problemlösung bestmöglich mitzuwirken.",
          ]}
        />
      </LegalSection>

      <LegalSection title="8. Vertragslaufzeit">
        <LegalList
          ordered
          items={[
            "Die Vertragslaufzeit richtet sich nach der im individuellen Vertrag vereinbarten Dauer (Erstlaufzeit). Eine vorzeitige ordentliche Kündigung ist ausgeschlossen.",
            "Die Vertragslaufzeit beginnt, sofern nicht explizit abweichend geregelt, mit Abschluss der Einrichtungsphase, spätestens jedoch einen Monat nach Vertragsschluss.",
            "Sofern keine individuelle Erstlaufzeit vereinbart wurde, gelten laufende Leistungen (z. B. Wartung, Support, Weiterentwicklung) als unbefristeter Vertrag mit einer Kündigungsfrist von zwei Monaten zum Monatsende.",
            "Die Vertragslaufzeit verlängert sich, sofern nicht explizit abweichend geregelt, jeweils um sechs Monate, wenn sie nicht mindestens zwei Monate vor Ablauf der Erstlaufzeit oder einer Vertragsverlängerung von einer Partei schriftlich (E-Mail ausreichend) gekündigt wird.",
            "Als Startdatum der Vertragslaufzeit gilt das Datum der ersten Rechnung für die vereinbarte Dienstleistung.",
            "Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.",
          ]}
        />
      </LegalSection>

      <LegalSection title="9. Zahlungsbedingungen">
        <LegalList
          ordered
          items={[
            "Die Zahlung ist per Lastschrifteinzug, Rechnung, Vorkasse, Kreditkarte und PayPal möglich.",
            "Bei Zahlung per Lastschrifteinzug verpflichtet sich der KUNDE, dem ANBIETER unmittelbar nach Vertragsabschluss, spätestens jedoch innerhalb von 7 Tagen nach Vertragsschluss, eine (SEPA-)Einzugsermächtigung zu erteilen. Der ANBIETER ist nicht verantwortlich für Überziehungsgebühren, Überziehungskosten oder ähnliche Gebühren, die die Bank oder Kreditkartenfirma geltend macht.",
            "Sämtliche Abrechnungsmodalitäten, insbesondere die Rechnungsstellung, erfolgen auf elektronischem Weg über die vom KUNDEN mitgeteilte E-Mail-Adresse. Der KUNDE erklärt sich hiermit ausdrücklich einverstanden.",
          ]}
        />
      </LegalSection>

      <LegalSection title="10. Haftung auf Schadensersatz">
        <LegalList
          ordered
          items={[
            "Der ANBIETER haftet, gleich aus welchem Rechtsgrund, im Rahmen der gesetzlichen Bestimmungen nur nach Maßgabe der folgenden Regelungen.",
            "Der ANBIETER haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf Vorsatz oder Fahrlässigkeit des ANBIETERS oder eines seiner gesetzlichen Vertreter oder Erfüllungsgehilfen beruhen. Daneben haftet der ANBIETER für Schäden, die auf Vorsatz oder grober Fahrlässigkeit des ANBIETERS oder eines seiner gesetzlichen Vertreter oder Erfüllungsgehilfen beruhen, sowie für Schäden wegen der Nichteinhaltung einer vom ANBIETER gegebenen Garantie oder zugesicherten Eigenschaft oder wegen arglistig verschwiegener Mängel.",
            "Der ANBIETER haftet unter Begrenzung auf Ersatz des vertragstypischen vorhersehbaren Schadens für solche Schäden, die auf einer leicht fahrlässigen Verletzung wesentlicher Vertragspflichten durch ihn oder einen seiner gesetzlichen Vertreter oder Erfüllungsgehilfen beruhen. Vertragswesentliche Pflichten sind Pflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglichen und auf deren Einhaltung der Vertragspartner regelmäßig vertrauen darf.",
            "Innerhalb der Grenzen aus den vorstehenden Absätzen 2 und 3 haftet der ANBIETER nicht für Daten- und Programmverluste. Die Haftung für Datenverlust wird der Höhe nach auf den typischen Wiederherstellungsaufwand beschränkt, der bei regelmäßiger und gefahrenentsprechender Anfertigung von Sicherungskopien eingetreten wäre. Dem ANBIETER bleibt der Einwand des Mitverschuldens vorbehalten. Der KUNDE ist insbesondere für die Datensicherung und die Abwehr von Schadsoftware nach dem jeweils aktuellen Stand der Technik verantwortlich.",
          ]}
        />
      </LegalSection>

      <LegalSection title="11. Datenschutz, Geheimhaltung">
        <LegalList
          ordered
          items={[
            "Der KUNDE wird darauf hingewiesen, dass der ANBIETER personenbezogene Bestands- und Nutzungsdaten in maschinenlesbarer Form im Rahmen der Zweckbestimmung des Vertragsverhältnisses erhebt, verarbeitet und nutzt. Alle personenbezogenen Daten werden vertraulich behandelt.",
            "Die PARTEIEN verpflichten sich, die ihnen im Rahmen der Vertragsdurchführung bekannt gewordenen und nicht offenkundigen oder allgemein zugänglichen Informationen oder Unterlagen aus dem Bereich der anderen Partei vertraulich zu behandeln. Diese Geheimhaltungspflicht besteht auch nach Beendigung des Vertragsverhältnisses fort.",
          ]}
        />
      </LegalSection>

      <LegalSection title="12. Abnahme">
        <LegalText>
          Sofern die individuell vereinbarten Leistungen dem Werkvertragsrecht unterfallen,
          gelten diesbezüglich die nachfolgenden Regelungen:
        </LegalText>
        <LegalList
          ordered
          items={[
            "Der ANBIETER kann vom KUNDEN nach Abschluss einer Teilleistung diesbezüglich die Abnahme verlangen.",
            "Die seitens des KUNDEN abzunehmenden (Teil-)Leistungen des ANBIETERS gelten auch dann als abgenommen, wenn der KUNDE sich auf Aufforderung des ANBIETERS hin zur Abnahme der entsprechenden (Teil-)Leistung nicht innerhalb von 7 Werktagen schriftlich erklärt.",
          ]}
        />
      </LegalSection>

      <LegalSection title="13. Urheberrecht, Markennutzung">
        <LegalList
          ordered
          items={[
            "Sämtliche im Rahmen der Vertragserfüllung zur Verfügung gestellten Inhalte sind urheberrechtlich geschützt.",
            "Die Rechteübertragung steht insgesamt unter der aufschiebenden Bedingung, dass der KUNDE gegenüber dem ANBIETER sämtliche Vergütungspflichten erfüllt hat.",
            "Der KUNDE räumt dem ANBIETER das Recht ein, sämtliche Marken, Logos, Namen oder sonstige geschäftliche Kennzeichen des KUNDEN im Rahmen der zu erbringenden Leistungen uneingeschränkt zu nutzen. Abweichungen hiervon bedürfen einer gesonderten Vereinbarung.",
            "Der KUNDE gestattet dem ANBIETER unentgeltlich das einfache, zeitlich, räumlich und inhaltlich uneingeschränkte Nutzungsrecht zur öffentlichen Wiedergabe, Vervielfältigung und Verbreitung sämtlicher erstellter Designs und Inhalte zum Zwecke der (Eigen-)Werbung, insbesondere, aber nicht abschließend, auf der Website des ANBIETERS („Testimonial-Nutzung“).",
            "Der KUNDE stellt den ANBIETER von etwaigen Ansprüchen Dritter wegen Verletzung geistigen Eigentums und/oder der Verwendung von Begriffen, Seiten oder Inhalten, die unzulässig und/oder mit Rechten Dritter belastet sind, vollumfänglich frei.",
          ]}
        />
      </LegalSection>

      <LegalSection title="14. Widerrufsrecht">
        <LegalText>
          Der ANBIETER schließt ausschließlich mit Unternehmern im Sinne von § 14 BGB
          Verträge, so dass ein gesetzliches Widerrufsrecht nicht besteht.
        </LegalText>
      </LegalSection>

      <LegalSection title="15. Referenznennung">
        <LegalText>
          Der ANBIETER darf den KUNDEN in jedem Medium als Referenz nennen. Dies umfasst auch
          die Nennung und Benutzung evtl. geschützter Marken, Bezeichnungen oder Logos. Der
          ANBIETER ist zur Nennung nicht verpflichtet.
        </LegalText>
      </LegalSection>

      <LegalSection title="16. Allgemeine Bestimmungen">
        <LegalList
          ordered
          items={[
            "Erfüllungsort und ausschließlicher Gerichtsstand für Streitigkeiten mit Kaufleuten, juristischen Personen des öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen aus Verträgen ist der Sitz des ANBIETERS.",
            "Auf alle Streitigkeiten findet, unabhängig vom rechtlichen Grund, ausschließlich das Recht der Bundesrepublik Deutschland unter Ausschluss aller Bestimmungen des Kollisionsrechts, die in eine andere Rechtsordnung verweisen, Anwendung.",
            "Bei Bedarf werden von den PARTEIEN schriftlich vereinbarte zusätzliche oder alternative Bestimmungen zu der Vereinbarung ab dem Zeitpunkt ihrer Unterzeichnung als Teil der Vereinbarung betrachtet.",
            "Durch eine etwaige Unwirksamkeit einer oder mehrerer Bestimmungen dieser Allgemeinen Geschäftsbedingungen wird die Wirksamkeit der übrigen Bestimmungen nicht berührt. Anstelle der unwirksamen Klauseln gilt dasjenige vereinbart, was dem wirtschaftlich Gewollten in rechtlich zulässiger Weise am nächsten steht. Dies gilt auch für die ergänzende Vertragsauslegung.",
            "Der ANBIETER behält sich das Recht vor, diese Allgemeinen Geschäftsbedingungen jederzeit zu ändern, es sei denn, die Änderung ist für den KUNDEN nicht zumutbar. Dafür wird der ANBIETER den KUNDEN rechtzeitig benachrichtigen. Widerspricht der KUNDE den neuen Allgemeinen Geschäftsbedingungen nicht innerhalb einer Frist von zwei Wochen nach Benachrichtigung, gelten die geänderten Allgemeinen Geschäftsbedingungen als vom KUNDEN angenommen.",
          ]}
        />
      </LegalSection>
    </LegalLayout>
  );
}
