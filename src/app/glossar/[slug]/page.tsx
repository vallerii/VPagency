import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GLOSSAR, getTerm } from "@/data/glossar";
import { InnerShell, langOf } from "@/components/home/InnerShell";
import { GlossarTermPage } from "@/components/home/Glossar";
import { JsonLd } from "@/components/JsonLd";
import { definedTermSchema } from "@/lib/schema";
import { pageMetadata, clampDescription } from "@/lib/seo";

type P = { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string }> };

export function generateStaticParams() {
  return GLOSSAR.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) return {};
  return pageMetadata({
    title: `${term.term} — einfach erklärt`,
    description: clampDescription(term.definition),
    path: `/glossar/${slug}`,
  });
}

export default async function Page({ params, searchParams }: P) {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) notFound();
  const lang = langOf((await searchParams).lang);
  return (
    <InnerShell lang={lang}>
      <GlossarTermPage lang={lang} term={term} />
      <JsonLd
        data={definedTermSchema({
          term: term.term,
          definition: term.definition,
          path: `/glossar/${term.slug}`,
        })}
      />
    </InnerShell>
  );
}
