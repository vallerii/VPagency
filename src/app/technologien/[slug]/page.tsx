import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerShell, langOf } from "@/components/home/InnerShell";
import { TechPage } from "@/components/home/Inner";
import { techs, getTech } from "@/content/catalog";

export function generateStaticParams() {
  return techs.map((x) => ({ slug: x.id }));
}

type P = { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string }> };

export async function generateMetadata({ params, searchParams }: P): Promise<Metadata> {
  const x = getTech((await params).slug);
  if (!x) return { title: "Technologie" };
  const { lang } = await searchParams;
  return {
    title: x.title.de,
    alternates: { canonical: `/technologien/${x.id}` },
    ...(lang === "ru" ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function Page({ params, searchParams }: P) {
  const x = getTech((await params).slug);
  if (!x) notFound();
  const lang = langOf((await searchParams).lang);
  return <InnerShell lang={lang}><TechPage lang={lang} x={x} /></InnerShell>;
}
