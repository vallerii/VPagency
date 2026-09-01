import type { Metadata } from "next";
import {
  LegalAddress,
  LegalHeading,
  LegalLayout,
  LegalLink,
  LegalList,
  LegalSection,
  LegalText,
} from "@/components/legal/LegalLayout";
import { COMPANY, HOSTING, LEGAL_VERSION } from "@/data/legal";

export const metadata: Metadata = {
  title: `Datenschutzerklärung — ${COMPANY.brand}`,
  description: `Informationen zur Verarbeitung personenbezogener Daten auf ${COMPANY.domain} nach Art. 13 DSGVO.`,
};

export default function DatenschutzPage() {
  return (
    <LegalLayout
      title="Datenschutzerklärung"
      intro="Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung."
      meta={`Stand: ${LEGAL_VERSION}`}
      currentPath="/datenschutz"
    >
      {/* 1 */}
      <LegalSection title="1. Datenschutz auf einen Blick">
        <LegalHeading>Allgemeine Hinweise</LegalHeading>
        <LegalText>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
          Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          Ausführliche Informationen entnehmen Sie der unter diesem Text aufgeführten
          Datenschutzerklärung.
        </LegalText>

        <LegalHeading>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</LegalHeading>
        <LegalText>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
          Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in
          dieser Datenschutzerklärung entnehmen.
        </LegalText>

        <LegalHeading>Wie erfassen wir Ihre Daten?</LegalHeading>
        <LegalText>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen — etwa
          durch Angaben, die Sie in unser Anfrageformular eintragen. Andere Daten werden beim
          Besuch der Website automatisch durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
          Seitenaufrufs).
        </LegalText>

        <LegalHeading>Wofür nutzen wir Ihre Daten?</LegalHeading>
        <LegalText>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
          gewährleisten. Andere Daten nutzen wir, um Ihre Anfrage zu bearbeiten und mit Ihnen
          in Kontakt zu treten.
        </LegalText>

        <LegalHeading>Welche Rechte haben Sie bezüglich Ihrer Daten?</LegalHeading>
        <LegalText>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
          Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
          ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
          Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese jederzeit für die
          Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
          Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an
          uns wenden.
        </LegalText>
      </LegalSection>

      {/* 2 */}
      <LegalSection title="2. Hosting">
        <LegalText>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</LegalText>
        <LegalHeading>{HOSTING.name}</LegalHeading>
        <LegalText>
          Anbieter ist {HOSTING.name}, {HOSTING.address} (nachfolgend „Hoster“). Details
          entnehmen Sie der Datenschutzerklärung des Hosters:{" "}
          <LegalLink href={HOSTING.privacyUrl}>{HOSTING.privacyUrl}</LegalLink>.
        </LegalText>
        <LegalText>
          Die Verwendung des Hosters erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir
          haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung
          unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
          Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25
          Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff
          auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) umfasst. Die
          Einwilligung ist jederzeit widerrufbar.
        </LegalText>

        <LegalHeading>Auftragsverarbeitung</LegalHeading>
        <LegalText>
          Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben
          genannten Dienstes geschlossen. Hierbei handelt es sich um einen
          datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die
          personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter
          Einhaltung der DSGVO verarbeitet.
        </LegalText>
      </LegalSection>

      {/* 3 */}
      <LegalSection title="3. Allgemeine Hinweise und Pflichtinformationen">
        <LegalHeading>Datenschutz</LegalHeading>
        <LegalText>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
          Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
          gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wir weisen
          darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per
          E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
          Zugriff durch Dritte ist nicht möglich.
        </LegalText>

        <LegalHeading>Hinweis zur verantwortlichen Stelle</LegalHeading>
        <LegalText>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
        </LegalText>
        <LegalAddress
          lines={[
            COMPANY.name,
            COMPANY.street,
            `${COMPANY.zip} ${COMPANY.city}`,
            <>
              Telefon: <LegalLink href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</LegalLink>
            </>,
            <>
              E-Mail: <LegalLink href={`mailto:${COMPANY.email}`}>{COMPANY.email}</LegalLink>
            </>,
          ]}
        />
        <LegalText>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
          gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
          personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
        </LegalText>

        <LegalHeading>Speicherdauer</LegalHeading>
        <LegalText>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
          wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
          Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen
          oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
          sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
          personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche
          Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall
          dieser Gründe.
        </LegalText>

        <LegalHeading>
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
        </LegalHeading>
        <LegalText>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
          personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9
          Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
          verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
          personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf
          Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies
          oder in den Zugriff auf Informationen in Ihr Endgerät eingewilligt haben, erfolgt die
          Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung
          ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur
          Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf
          Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten,
          sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf
          Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf
          Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
        </LegalText>

        <LegalHeading>Widerruf Ihrer Einwilligung zur Datenverarbeitung</LegalHeading>
        <LegalText>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
          möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die
          Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
          unberührt.
        </LegalText>

        <LegalHeading>
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
          Direktwerbung (Art. 21 DSGVO)
        </LegalHeading>
        <LegalText>
          Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO
          erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen
          Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch
          einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die
          jeweilige Rechtsgrundlage, auf der eine Verarbeitung beruht, entnehmen Sie dieser
          Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen
          personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende
          schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte
          und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung
          oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
        </LegalText>
        <LegalText>
          Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so
          haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender
          personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für
          das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
          widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum
          Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
        </LegalText>

        <LegalHeading>Beschwerderecht bei der zuständigen Aufsichtsbehörde</LegalHeading>
        <LegalText>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
          einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
          Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Das
          Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </LegalText>

        <LegalHeading>Recht auf Datenübertragbarkeit</LegalHeading>
        <LegalText>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
          Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
          einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
          direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt
          dies nur, soweit es technisch machbar ist.
        </LegalText>

        <LegalHeading>Auskunft, Berichtigung und Löschung</LegalHeading>
        <LegalText>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
          unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
          Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
          Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </LegalText>

        <LegalHeading>Recht auf Einschränkung der Verarbeitung</LegalHeading>
        <LegalText>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
          Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf
          Einschränkung der Verarbeitung besteht in folgenden Fällen:
        </LegalText>
        <LegalList
          items={[
            "Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung zu verlangen.",
            "Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah oder geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.",
            "Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung zu verlangen.",
            "Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung zu verlangen.",
          ]}
        />
        <LegalText>
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen
          diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
          Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
          Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines
          wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
          verarbeitet werden.
        </LegalText>

        <LegalHeading>SSL- bzw. TLS-Verschlüsselung</LegalHeading>
        <LegalText>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
          vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber
          senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
          Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt
          und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw.
          TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln,
          nicht von Dritten mitgelesen werden.
        </LegalText>
      </LegalSection>

      {/* 4 */}
      <LegalSection title="4. Datenerfassung auf dieser Website">
        <LegalHeading>Cookies</LegalHeading>
        <LegalText>
          Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine
          Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder
          vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft
          (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach
          Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem
          Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung
          durch Ihren Webbrowser erfolgt.
        </LegalText>
        <LegalText>
          Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur
          Bereitstellung bestimmter, von Ihnen erwünschter Funktionen oder zur Optimierung der
          Website erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs.
          1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird.
          Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren
          Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich
          auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
          TDDDG); die Einwilligung ist jederzeit widerrufbar.
        </LegalText>
        <LegalText>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
          informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für
          bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies
          beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die
          Funktionalität dieser Website eingeschränkt sein.
        </LegalText>

        <LegalHeading>Server-Log-Dateien</LegalHeading>
        <LegalText>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so
          genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies
          sind:
        </LegalText>
        <LegalList
          items={[
            "Browsertyp und Browserversion",
            "verwendetes Betriebssystem",
            "Referrer URL",
            "Hostname des zugreifenden Rechners",
            "Uhrzeit der Serveranfrage",
            "IP-Adresse",
          ]}
        />
        <LegalText>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
          Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
          Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Dateien
          erfasst werden.
        </LegalText>

        <LegalHeading>Anfrageformular auf dieser Website</LegalHeading>
        <LegalText>
          Über das Anfrageformular auf dieser Website können Sie uns in wenigen Schritten
          mitteilen, welches Projekt Sie umsetzen möchten, in welcher Branche Sie tätig sind
          und wie wir Sie erreichen können. Ihre Angaben aus dem Anfrageformular inklusive der
          von Ihnen dort angegebenen Kontaktdaten werden zwecks Bearbeitung der Anfrage und für
          den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
          Ihre Einwilligung weiter.
        </LegalText>
        <LegalText>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
          sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
          Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
          beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
          Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
          Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde; die
          Einwilligung ist jederzeit widerrufbar.
        </LegalText>
        <LegalText>
          Die von Ihnen im Anfrageformular eingegebenen Daten verbleiben bei uns, bis Sie uns
          zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
          für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer
          Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen –
          bleiben unberührt.
        </LegalText>

        <LegalHeading>Anfrage per E-Mail oder Telefon</LegalHeading>
        <LegalText>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
          daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
          Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben
          wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf
          Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
          Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich
          ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten
          Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs.
          1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
        </LegalText>

        <LegalHeading>Lokal gehostete Schriftarten</LegalHeading>
        <LegalText>
          Diese Website verwendet Schriftarten, die ausschließlich von unserem eigenen Server
          ausgeliefert werden. Es findet dabei keine Verbindung zu Servern Dritter (etwa zu
          Google Fonts) und keine Übermittlung Ihrer IP-Adresse an Dritte statt.
        </LegalText>
      </LegalSection>

      {/* 5 */}
      <LegalSection title="5. Soziale Netzwerke">
        <LegalHeading>Verlinkung unserer Social-Media-Profile</LegalHeading>
        <LegalText>
          Auf dieser Website sind keine Social-Media-Plugins eingebunden, die beim bloßen
          Aufruf der Seite Daten an die jeweiligen Netzwerke übertragen. Die Symbole in der
          Fußzeile sind reine Verlinkungen auf unsere Profile bei den jeweiligen Anbietern.
          Eine Verbindung zu deren Servern und damit eine Übermittlung Ihrer IP-Adresse
          entsteht erst, wenn Sie einen dieser Links aktiv anklicken.
        </LegalText>
        <LegalText>
          Nach dem Wechsel auf die Plattform gelten ausschließlich die Datenschutzbestimmungen
          des jeweiligen Anbieters. Wir haben keinen Einfluss auf Art und Umfang der dort
          erhobenen Daten. Wenn Sie mit uns über eines dieser Netzwerke Kontakt aufnehmen,
          verarbeiten wir Ihre Nachricht zur Beantwortung Ihres Anliegens auf Grundlage von
          Art. 6 Abs. 1 lit. f DSGVO.
        </LegalText>
      </LegalSection>
    </LegalLayout>
  );
}
