import type { Metadata } from "next";
import { InnerShell, langOf } from "@/components/home/InnerShell";
import { TechHub } from "@/components/home/Inner";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const { lang } = await searchParams;
  return { title: "Technologien", alternates: { canonical: "/technologien" }, ...(lang === "ru" ? { robots: { index: false, follow: false } } : {}) };
}

export default async function Page({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = langOf((await searchParams).lang);
  return <InnerShell lang={lang}><TechHub lang={lang} /></InnerShell>;
}
