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

export const metadata = {
  title: "Projekte — VP Digital",
  description:
    "Echte Projekte für echte Geschäftsprobleme: Websites, Portale und automatisierte Prozesse, die wir gemeinsam mit unseren Kunden gebaut haben.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductsHero />
        <TechMarquee />
        <ProductsApproach />
        <ProductsGrid />
        <ProductsContinuity />
        <FAQ items={PRODUCTS_FAQ} />
        <ProductsCTA />
      </main>
      <Footer />
    </>
  );
}
