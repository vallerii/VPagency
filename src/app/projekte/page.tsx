import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductsApproach } from "@/components/products/ProductsApproach";
import { ProductsGrid } from "@/components/products/ProductsGrid";
import { ProductsContinuity } from "@/components/products/ProductsContinuity";
import { ProductsCTA } from "@/components/products/ProductsCTA";
import { FAQ } from "@/components/FAQ";
import { PRODUCTS_FAQ } from "@/data/faq";
import { TechMarquee } from "@/components/TechMarquee";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Sheet } from "@/components/ui/Sheet";
import { JsonLd } from "@/components/JsonLd";
import { itemListSchema, faqSchema } from "@/lib/schema";
import { CASES } from "@/data/cases";
import { routes } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projekte — Websites, Portale und automatisierte Prozesse",
  description:
    "Echte Projekte für echte Geschäftsprobleme: Websites, Portale und automatisierte Prozesse, die wir gemeinsam mit unseren Kunden gebaut haben.",
  path: routes.projekte,
});

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductsHero breadcrumbs={<Breadcrumbs items={[{ name: "Projekte" }]} />} />

        <TechMarquee />
        {/* Light sheets for the two reading blocks; the project grid stays on
        the page background because its cards are dark photo tiles. */}
        <Sheet className="pb-20 lg:pb-28">
          <ProductsApproach />
        </Sheet>
        <ProductsGrid />
        <Sheet className="mt-20 lg:mt-28">
          <ProductsContinuity />
        </Sheet>
        <div className="pt-20 lg:pt-28">
          <FAQ items={PRODUCTS_FAQ} />
        </div>
        <ProductsCTA />
      </main>
      <Footer />

      <JsonLd
        data={itemListSchema(
          CASES.map((c) => ({ name: c.name, path: routes.projekt(c.slug) })),
          "Projekte von VP agency",
        )}
      />
      <JsonLd data={faqSchema(PRODUCTS_FAQ)} />
    </>
  );
}
