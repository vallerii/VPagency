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

  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title={service.heroTitle}
          subtitle={service.heroSubtitle}
        />
        <TechMarquee />
        <SymptomList title="Узнаёте?" items={service.symptoms} />
        <RationaleStrip title={service.rationaleTitle} lines={service.rationaleLines} />
        <ScopeTiers
          included={service.included}
          addon={service.addon}
          outOfScope={service.outOfScope}
        />
        <ServiceBeforeAfter rows={service.beforeAfter} />
        <RelatedCases category={service.slug} />
        <ServiceCTA label={service.label} />
      </main>
      <Footer />
    </>
  );
}
