import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerShell, langOf } from "@/components/home/InnerShell";
import { ServicePage } from "@/components/home/Inner";
import { services, getService, items } from "@/content/catalog";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

type P = { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string }> };

export async function generateMetadata({ params, searchParams }: P): Promise<Metadata> {
  const sv = getService((await params).slug);
  if (!sv) return { title: "Leistung" };
  const { lang } = await searchParams;
  return {
    title: sv.nav.de,
    description: sv.lead.de,
    alternates: { canonical: `/leistungen/${sv.id}` },
    ...(lang === "ru" ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function Page({ params, searchParams }: P) {
  const sv = getService((await params).slug);
  if (!sv) notFound();
  const lang = langOf((await searchParams).lang);
  // Structured data for search engines and AI assistants (German page only).
  const ld = lang === "de" && [
    { ...serviceSchema({ name: sv.nav.de, description: `${sv.title.de}. ${sv.lead.de}`, path: `/leistungen/${sv.id}` }),
      hasOfferCatalog: { "@type": "OfferCatalog", name: sv.nav.de, itemListElement: sv.groups.map((g) => ({
        "@type": "OfferCatalog", name: g.title.de,
        itemListElement: g.ids.filter((id) => items[id]).map((id) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: items[id].de, description: items[id].dde } })),
      })) } },
    breadcrumbSchema([{ name: "Startseite", href: "/" }, { name: "Leistungen", href: "/leistungen" }, { name: sv.nav.de }]),
  ];
  return (
    <InnerShell lang={lang}>
      <ServicePage lang={lang} sv={sv} />
      {ld && ld.map((d, n) => <JsonLd key={n} data={d} />)}
    </InnerShell>
  );
}
