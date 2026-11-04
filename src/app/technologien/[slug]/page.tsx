import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerShell, langOf } from "@/components/home/InnerShell";
import { TechPage } from "@/components/home/Inner";
import { techs, getTech, items } from "@/content/catalog";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

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
  const ld = lang === "de" && [
    { ...serviceSchema({ name: x.title.de, description: x.lead.de, path: `/technologien/${x.id}` }),
      serviceType: x.name,
      hasOfferCatalog: { "@type": "OfferCatalog", name: x.title.de, itemListElement: x.groups.map((g) => ({
        "@type": "OfferCatalog", name: g.title.de,
        itemListElement: g.ids.filter((id) => items[id]).map((id) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: items[id].de, description: items[id].dde } })),
      })) } },
    breadcrumbSchema([{ name: "Startseite", href: "/" }, { name: "Technologien", href: "/technologien" }, { name: x.nav.de }]),
  ];
  return (
    <InnerShell lang={lang}>
      <TechPage lang={lang} x={x} />
      {ld && ld.map((d, n) => <JsonLd key={n} data={d} />)}
    </InnerShell>
  );
}
