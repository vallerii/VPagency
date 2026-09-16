import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/data/services";
import { getDeepDive, getServiceSeo } from "@/data/service-details";
import { routes } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Sheet } from "@/components/ui/Sheet";
import { TechMarquee } from "@/components/TechMarquee";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SymptomList } from "@/components/services/SymptomList";
import { RationaleStrip } from "@/components/services/RationaleStrip";
import { ScopeTiers } from "@/components/services/ScopeTiers";
import { ServiceBeforeAfter } from "@/components/services/ServiceBeforeAfter";
import { ServiceDeepDive } from "@/components/services/ServiceDeepDive";
import { ServiceGlossary } from "@/components/services/ServiceGlossary";
import { RelatedCases } from "@/components/services/RelatedCases";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { FAQ } from "@/components/FAQ";
import { SERVICE_FAQ } from "@/data/faq";

import { WebsiteHero } from "@/components/services/websites/WebsiteHero";
import { WebsiteJourney } from "@/components/services/websites/WebsiteJourney";
import { WebsiteStructure } from "@/components/services/websites/WebsiteStructure";
import { WebsiteStages } from "@/components/services/websites/WebsiteStages";
import { WebsiteResult } from "@/components/services/websites/WebsiteResult";

import { AutomationHero } from "@/components/services/automation/AutomationHero";
import { AutomationChaos } from "@/components/services/automation/AutomationChaos";
import { AutomationTransform } from "@/components/services/automation/AutomationTransform";
import { AutomationFlow } from "@/components/services/automation/AutomationFlow";
import { AutomationResult } from "@/components/services/automation/AutomationResult";

import { SystemHero } from "@/components/services/custom-software/SystemHero";
import { SystemChaos } from "@/components/services/custom-software/SystemChaos";
import { SystemBuild } from "@/components/services/custom-software/SystemBuild";
import { SystemModules } from "@/components/services/custom-software/SystemModules";
import { SystemResult } from "@/components/services/custom-software/SystemResult";

import { ShopHero } from "@/components/services/ecommerce/ShopHero";
import { ShopFunnel } from "@/components/services/ecommerce/ShopFunnel";
import { ShopCost } from "@/components/services/ecommerce/ShopCost";
import { ShopScheme } from "@/components/services/ecommerce/ShopScheme";
import { ShopResult } from "@/components/services/ecommerce/ShopResult";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const seo = getServiceSeo(slug);

  return pageMetadata({
    title: seo?.title ?? `${service.label} — VP Digital`,
    description: seo?.description ?? service.heroSubtitle,
    path: routes.leistung(slug),
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const deepDive = getDeepDive(service.slug);
  const seo = getServiceSeo(service.slug);
  const faqItems = SERVICE_FAQ[service.slug];

  // Websites, Automation, Custom Solutions and E-Commerce each get their
  // own hero/visual language (see components/services/<slug>/) so the
  // four pages read as distinct directions rather than one template with
  // swapped text. Support isn't part of that redesign and keeps the
  // original shared template below. All four still share the same
  // breadcrumbs, marquee, deep dive, glossary strip, related-cases grid,
  // contact form and header/footer.
  // Page rhythm (same frame as the home page, see ui/Sheet.tsx):
  //   symptoms        — light sheet ("Kommt Ihnen bekannt vor?")
  //   rationale       — graphite card sheet (its illustration is drawn dark)
  //   what's included — on the page background
  //   result          — graphite card sheet (Websites: with light cards)
  //   deep dive       — light sheet
  // then related projects, glossary and FAQ on the page background and the
  // blue contact sheet at the end.

  // Shared by every hero variant below — rendered at the top of the hero.
  const breadcrumbs = (
    <Breadcrumbs
      items={[
        { name: "Leistungen", href: routes.leistungen },
        { name: service.label },
      ]}
    />
  );

  let hero;
  let body;

  switch (service.slug) {
    case "websites":
      hero = <WebsiteHero title={service.heroTitle} subtitle={service.heroSubtitle} breadcrumbs={breadcrumbs} />;
      body = (
        <>
          <Sheet>
            <WebsiteJourney title="Kommt Ihnen bekannt vor?" items={service.symptoms} />
          </Sheet>
          <Sheet tone="card">
            <WebsiteStructure title={service.rationaleTitle} lines={service.rationaleLines} />
          </Sheet>
          <WebsiteStages
            included={service.included}
            addon={service.addon}
            outOfScope={service.outOfScope}
          />
          <Sheet tone="card">
            <WebsiteResult rows={service.beforeAfter} />
          </Sheet>
        </>
      );
      break;
    case "automation":
      hero = <AutomationHero title={service.heroTitle} subtitle={service.heroSubtitle} breadcrumbs={breadcrumbs} />;
      body = (
        <>
          <Sheet>
            <AutomationChaos title="Kommt Ihnen bekannt vor?" items={service.symptoms} />
          </Sheet>
          <Sheet tone="card">
            <AutomationTransform title={service.rationaleTitle} lines={service.rationaleLines} />
          </Sheet>
          <AutomationFlow
            included={service.included}
            addon={service.addon}
            outOfScope={service.outOfScope}
          />
          <Sheet tone="card">
            <AutomationResult rows={service.beforeAfter} />
          </Sheet>
        </>
      );
      break;
    case "custom-software":
      hero = <SystemHero title={service.heroTitle} subtitle={service.heroSubtitle} breadcrumbs={breadcrumbs} />;
      body = (
        <>
          <Sheet>
            <SystemChaos title="Kommt Ihnen bekannt vor?" items={service.symptoms} />
          </Sheet>
          <Sheet tone="card">
            <SystemBuild title={service.rationaleTitle} lines={service.rationaleLines} />
          </Sheet>
          <SystemModules
            included={service.included}
            addon={service.addon}
            outOfScope={service.outOfScope}
          />
          <Sheet tone="card">
            <SystemResult rows={service.beforeAfter} />
          </Sheet>
        </>
      );
      break;
    case "ecommerce":
      hero = <ShopHero title={service.heroTitle} subtitle={service.heroSubtitle} breadcrumbs={breadcrumbs} />;
      body = (
        <>
          <Sheet>
            <ShopFunnel title="Kommt Ihnen bekannt vor?" items={service.symptoms} />
          </Sheet>
          <Sheet tone="card">
            <ShopCost title={service.rationaleTitle} lines={service.rationaleLines} />
          </Sheet>
          <ShopScheme
            included={service.included}
            addon={service.addon}
            outOfScope={service.outOfScope}
          />
          <Sheet tone="card">
            <ShopResult rows={service.beforeAfter} />
          </Sheet>
        </>
      );
      break;
    default:
      hero = <ServiceHero title={service.heroTitle} subtitle={service.heroSubtitle} breadcrumbs={breadcrumbs} />;
      body = (
        <>
          <Sheet>
            <SymptomList title="Kommt Ihnen bekannt vor?" items={service.symptoms} />
          </Sheet>
          <Sheet tone="card">
            <RationaleStrip
              slug={service.slug}
              title={service.rationaleTitle}
              lines={service.rationaleLines}
            />
          </Sheet>
          <ScopeTiers
            included={service.included}
            addon={service.addon}
            outOfScope={service.outOfScope}
          />
          <Sheet tone="card">
            <ServiceBeforeAfter rows={service.beforeAfter} />
          </Sheet>
        </>
      );
  }

  return (
    <>
      <Header />
      <main>
        {hero}


        <TechMarquee />
        {body}

        {deepDive && (
          <Sheet>
            <ServiceDeepDive content={deepDive} />
          </Sheet>
        )}

        <RelatedCases category={service.slug} />
        <ServiceGlossary serviceSlug={service.slug} />

        {faqItems && <FAQ items={faqItems} />}
        <ServiceCTA label={service.label} />
      </main>
      <Footer />

      <JsonLd
        data={serviceSchema({
          name: seo?.title ?? service.label,
          description: seo?.description ?? service.heroSubtitle,
          path: routes.leistung(service.slug),
        })}
      />
      {faqItems && <JsonLd data={faqSchema(faqItems)} />}
    </>
  );
}
