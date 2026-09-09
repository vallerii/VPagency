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
        <ProductsHero />

        {/* Same placement as on the service pages: the hero carries the
        spacing that clears the fixed header, so the trail goes right
        below it. */}
        <div className="border-b border-border px-6 py-4 sm:px-10 lg:px-16">
          <Breadcrumbs
            className="mx-auto w-full max-w-[1440px]"
            items={[{ name: "Projekte" }]}
          />
        </div>

        <TechMarquee />
        <ProductsApproach />
        <ProductsGrid />
        <ProductsContinuity />
        <FAQ items={PRODUCTS_FAQ} />
        <ProductsCTA />
      </main>
      <Footer />

      <JsonLd
        data={itemListSchema(
          CASES.map((c) => ({ name: c.name, path: routes.projekt(c.slug) })),
          "Projekte von VP Digital",
        )}
      />
      <JsonLd data={faqSchema(PRODUCTS_FAQ)} />
    </>
  );
}
