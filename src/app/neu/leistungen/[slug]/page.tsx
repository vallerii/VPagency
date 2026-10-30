import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerShell, langOf } from "@/components/home/InnerShell";
import { ServicePage } from "@/components/home/Inner";
import { services, getService } from "@/content/catalog";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const sv = getService((await params).slug);
  return { title: sv ? `${sv.nav.de} (Entwurf)` : "Leistung", robots: { index: false, follow: false } };
}

export default async function Page({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string }> }) {
  const sv = getService((await params).slug);
  if (!sv) notFound();
  const lang = langOf((await searchParams).lang);
  return <InnerShell lang={lang}><ServicePage lang={lang} sv={sv} /></InnerShell>;
}
