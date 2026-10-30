import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerShell, langOf } from "@/components/home/InnerShell";
import { TechPage } from "@/components/home/Inner";
import { techs, getTech } from "@/content/catalog";

export function generateStaticParams() {
  return techs.map((x) => ({ slug: x.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const x = getTech((await params).slug);
  return { title: x ? `${x.title.de} (Entwurf)` : "Technik", robots: { index: false, follow: false } };
}

export default async function Page({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string }> }) {
  const x = getTech((await params).slug);
  if (!x) notFound();
  const lang = langOf((await searchParams).lang);
  return <InnerShell lang={lang}><TechPage lang={lang} x={x} /></InnerShell>;
}
