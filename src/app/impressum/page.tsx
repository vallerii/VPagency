import type { Metadata } from "next";
import {
  LegalAddress,
  LegalHeading,
  LegalLayout,
  LegalLink,
  LegalSection,
  LegalText,
} from "@/components/legal/LegalLayout";
import { COMPANY } from "@/data/legal";

export const metadata: Metadata = {
  title: `Impressum — ${COMPANY.brand}`,
  description: `Anbieterkennzeichnung nach § 5 TMG für ${COMPANY.domain}.`,
};

export default function ImpressumPage() {
  return (
    <LegalLayout
      title="Impressum"
      intro={`Angaben gemäß § 5 TMG für die Website ${COMPANY.domain}.`}
      currentPath="/impressum"
    >
      <LegalSection title="Anbieter">
        <LegalAddress
          lines={[
            COMPANY.name,
            COMPANY.street,
            `${COMPANY.zip} ${COMPANY.city}`,
            COMPANY.country,
          ]}
        />
      </LegalSection>

      <LegalSection title="Kontakt">
        <LegalAddress
          lines={[
            <>
              Telefon: <LegalLink href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</LegalLink>
            </>,
            <>
              E-Mail: <LegalLink href={`mailto:${COMPANY.email}`}>{COMPANY.email}</LegalLink>
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="Registereintrag">
        <LegalText>
          Eintragung im Handelsregister.
          <br />
          Registergericht: {COMPANY.register.court}
          <br />
          Registernummer: {COMPANY.register.number}
        </LegalText>
      </LegalSection>

      <LegalSection title="Umsatzsteuer-ID">
        <LegalText>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          {COMPANY.vatId}
        </LegalText>
      </LegalSection>

      <LegalSection title="Vertretungsberechtigte Geschäftsführung">
        <LegalText>{COMPANY.managingDirector}</LegalText>

        <LegalHeading>Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV</LegalHeading>
        <LegalText>{COMPANY.contentResponsible}, Anschrift wie oben</LegalText>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <LegalText>
          Alle Texte, Bilder und weiteren hier veröffentlichten Informationen unterliegen
          dem Urheberrecht des Anbieters, soweit nicht Urheberrechte Dritter bestehen. Eine
          Vervielfältigung, Verbreitung oder öffentliche Wiedergabe ist in jedem Fall
          ausschließlich mit widerruflicher und nicht übertragbarer Zustimmung des Anbieters
          gestattet.
        </LegalText>
      </LegalSection>

      <LegalSection title="Haftung für Links">
        <LegalText>
          Für alle mittels Querverweis (Link) verbundenen Webinhalte übernimmt der Anbieter
          keine Verantwortung, da es sich hierbei nicht um eigene Inhalte handelt. Die
          verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf rechtswidrige Inhalte
          überprüft; solche waren zu diesem Zeitpunkt nicht erkennbar. Verantwortlich für den
          Inhalt der verlinkten Seiten ist deren Betreiber. Eine permanente inhaltliche
          Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer
          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden einer Rechtsverletzung wird der
          entsprechende Link umgehend entfernt.
        </LegalText>
      </LegalSection>

      <LegalSection title="Hinweis zur Streitbeilegung">
        <LegalText>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
          bereit:{" "}
          <LegalLink href="https://ec.europa.eu/consumers/odr/">
            https://ec.europa.eu/consumers/odr/
          </LegalLink>
          . Unsere E-Mail-Adresse finden Sie oben in diesem Impressum. Wir sind nicht bereit
          und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </LegalText>
      </LegalSection>

      <LegalSection title="Datenschutz">
        <LegalText>
          Wie wir mit Ihren personenbezogenen Daten umgehen, welche Daten beim Besuch dieser
          Website erhoben werden und welche Rechte Ihnen zustehen, erläutern wir ausführlich
          in unserer <LegalLink href="/datenschutz">Datenschutzerklärung</LegalLink>.
        </LegalText>
      </LegalSection>
    </LegalLayout>
  );
}
