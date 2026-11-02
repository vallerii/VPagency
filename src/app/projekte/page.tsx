import type { Metadata } from "next";
import { InnerShell, langOf } from "@/components/home/InnerShell";
import { CasesHub } from "@/components/home/Cases";
import { cases } from "@/content/cases";
import { JsonLd } from "@/components/JsonLd";
import { itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projekte — Websites und Portale für Industrie und B2B",
  description:
    "Relaunches für Industrie- und B2B-Unternehmen aus Produktion, Messtechnik, Verpackung und Bau: Ausgangslage, Umsetzung und was sich für den Kunden verändert hat.",
  path: "/projekte",
});

export default async function Page({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = langOf((await searchParams).lang);
  return (
    <InnerShell lang={lang}>
      <CasesHub lang={lang} />
      <JsonLd
        data={itemListSchema(
          cases.map((c) => ({ name: c.name, path: `/projekte/${c.slug}` })),
          "Projekte von VP agency",
        )}
      />
    </InnerShell>
  );
}
