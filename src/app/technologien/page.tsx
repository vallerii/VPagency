import type { Metadata } from "next";
import { InnerShell, langOf } from "@/components/home/InnerShell";
import { TechHub } from "@/components/home/Inner";
import { techs } from "@/content/catalog";
import { JsonLd } from "@/components/JsonLd";
import { itemListSchema } from "@/lib/schema";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
  const { lang } = await searchParams;
  return { title: "Technologien", alternates: { canonical: "/technologien" }, ...(lang === "ru" ? { robots: { index: false, follow: false } } : {}) };
}

export default async function Page({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = langOf((await searchParams).lang);
  return (
    <InnerShell lang={lang}>
      <TechHub lang={lang} />
      {lang === "de" && <JsonLd data={itemListSchema(techs.map((x) => ({ name: x.title.de, path: `/technologien/${x.id}` })), "Technologien")} />}
    </InnerShell>
  );
}
