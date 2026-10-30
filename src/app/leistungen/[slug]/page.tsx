import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerShell, langOf } from "@/components/home/InnerShell";
import { ServicePage } from "@/components/home/Inner";
import { services, getService } from "@/content/catalog";

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
  return <InnerShell lang={lang}><ServicePage lang={lang} sv={sv} /></InnerShell>;
}
