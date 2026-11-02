import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerShell, langOf } from "@/components/home/InnerShell";
import { CaseDetail } from "@/components/home/Cases";
import { cases, getCase } from "@/content/cases";
import { pageMetadata, clampDescription } from "@/lib/seo";

type P = { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string }> };

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return pageMetadata({
    title: `${c.name} — ${c.tag}`,
    description: clampDescription(c.result),
    path: `/projekte/${slug}`,
  });
}

export default async function Page({ params, searchParams }: P) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();
  const lang = langOf((await searchParams).lang);
  return (
    <InnerShell lang={lang}>
      <CaseDetail lang={lang} c={c} />
    </InnerShell>
  );
}
