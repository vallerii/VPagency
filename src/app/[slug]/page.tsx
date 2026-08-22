import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/data/services";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TechMarquee } from "@/components/TechMarquee";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SymptomList } from "@/components/services/SymptomList";
import { RationaleStrip } from "@/components/services/RationaleStrip";
import { ScopeTiers } from "@/components/services/ScopeTiers";
import { ServiceBeforeAfter } from "@/components/services/ServiceBeforeAfter";
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

  // Websites, Automation, Custom Solutions and E-Commerce each get their
  // own hero/visual language (see components/services/<slug>/) so the
  // four pages read as distinct directions rather than one template with
  // swapped text. Support isn't part of that redesign and keeps the
  // original shared template below. All four still share the same
  // marquee, related-cases grid, contact form and header/footer.
  let sections;
  switch (service.slug) {
    case "websites":
      sections = (
        <>
          <WebsiteHero title={service.heroTitle} subtitle={service.heroSubtitle} />
          <TechMarquee />
          <WebsiteJourney title="Kommt Ihnen bekannt vor?" items={service.symptoms} />
          <WebsiteStructure title={service.rationaleTitle} lines={service.rationaleLines} />
          <WebsiteStages
            included={service.included}
            addon={service.addon}
            outOfScope={service.outOfScope}
          />
          <WebsiteResult rows={service.beforeAfter} />
        </>
      );
      break;
    case "automation":
      sections = (
        <>
          <AutomationHero title={service.heroTitle} subtitle={service.heroSubtitle} />
          <TechMarquee />
          <AutomationChaos title="Kommt Ihnen bekannt vor?" items={service.symptoms} />
          <AutomationTransform title={service.rationaleTitle} lines={service.rationaleLines} />
          <AutomationFlow
            included={service.included}
            addon={service.addon}
            outOfScope={service.outOfScope}
          />
          <AutomationResult rows={service.beforeAfter} />
        </>
      );
      break;
    case "custom-software":
      sections = (
        <>
          <SystemHero title={service.heroTitle} subtitle={service.heroSubtitle} />
          <TechMarquee />
          <SystemChaos title="Kommt Ihnen bekannt vor?" items={service.symptoms} />
          <SystemBuild title={service.rationaleTitle} lines={service.rationaleLines} />
          <SystemModules
            included={service.included}
            addon={service.addon}
            outOfScope={service.outOfScope}
          />
          <SystemResult rows={service.beforeAfter} />
        </>
      );
      break;
    case "ecommerce":
      sections = (
        <>
          <ShopHero title={service.heroTitle} subtitle={service.heroSubtitle} />
          <TechMarquee />
          <ShopFunnel title="Kommt Ihnen bekannt vor?" items={service.symptoms} />
          <ShopCost title={service.rationaleTitle} lines={service.rationaleLines} />
          <ShopScheme
            included={service.included}
            addon={service.addon}
            outOfScope={service.outOfScope}
          />
          <ShopResult rows={service.beforeAfter} />
        </>
      );
      break;
    default:
      sections = (
        <>
          <ServiceHero title={service.heroTitle} subtitle={service.heroSubtitle} />
          <TechMarquee />
          <SymptomList title="Kommt Ihnen bekannt vor?" items={service.symptoms} />
          <RationaleStrip
            slug={service.slug}
            title={service.rationaleTitle}
            lines={service.rationaleLines}
          />
          <ScopeTiers
            included={service.included}
            addon={service.addon}
            outOfScope={service.outOfScope}
          />
          <ServiceBeforeAfter rows={service.beforeAfter} />
        </>
      );
  }

  return (
    <>
      <Header />
      <main>
        {sections}
        <RelatedCases category={service.slug} />
        {SERVICE_FAQ[service.slug] && <FAQ items={SERVICE_FAQ[service.slug]} />}
        <ServiceCTA label={service.label} />
      </main>
      <Footer />
    </>
  );
}
