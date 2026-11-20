import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerShell, langOf } from "@/components/home/InnerShell";
import { TechPage } from "@/components/home/Inner";
import { TechPageLong } from "@/components/home/TechLong";
import { getTechPage } from "@/content/tech-pages";
import { WordpressPageLong } from "@/components/home/WordpressLong";
import { wordpressPage } from "@/content/tech-wordpress";
import { techs, getTech, items } from "@/content/catalog";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return techs.map((x) => ({ slug: x.id }));
}

type P = { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string }> };

export async function generateMetadata({ params, searchParams }: P): Promise<Metadata> {
  const x = getTech((await params).slug);
  if (!x) return { title: "Technologie" };
  const { lang } = await searchParams;
  return {
    title: x.seo.title,
    description: x.seo.description,
    alternates: { canonical: `/technologien/${x.id}` },
    ...(lang === "ru" ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function Page({ params, searchParams }: P) {
  const x = getTech((await params).slug);
  if (!x) notFound();
  const lang = langOf((await searchParams).lang);
  // Technologies whose long-form content exists get the full page
  const page = getTechPage(x.id);
  const wp = x.id === "wordpress" ? wordpressPage : undefined;
  const faq = page?.faq ?? wp?.faq;
  const ld = lang === "de" && [
    { ...serviceSchema({ name: x.title.de, description: x.lead.de, path: `/technologien/${x.id}` }),
      serviceType: x.name,
      hasOfferCatalog: { "@type": "OfferCatalog", name: x.title.de, itemListElement: x.groups.map((g) => ({
        "@type": "OfferCatalog", name: g.title.de,
        itemListElement: g.ids.filter((id) => items[id]).map((id) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: items[id].de, description: items[id].dde } })),
      })) } },
    breadcrumbSchema([{ name: "Startseite", href: "/" }, { name: "Technologien", href: "/technologien" }, { name: x.nav.de }]),
    ...(faq ? [faqSchema(faq.items.map((f) => ({ question: f.q, answer: f.a })))] : []),
  ];
  return (
    <InnerShell lang={lang}>
      {wp ? <WordpressPageLong lang={lang} x={x} page={wp} /> : page ? <TechPageLong lang={lang} x={x} page={page} /> : <TechPage lang={lang} x={x} />}
      {ld && ld.map((d, n) => <JsonLd key={n} data={d} />)}
    </InnerShell>
  );
}
