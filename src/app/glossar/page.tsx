import type { Metadata } from "next";
import { InnerShell, langOf } from "@/components/home/InnerShell";
import { GlossarHub } from "@/components/home/Glossar";
import { GLOSSAR } from "@/data/glossar";
import { JsonLd } from "@/components/JsonLd";
import { itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Glossar — Digitalbegriffe in verständlichem Deutsch",
  description:
    "Conversion, Checkout, Schnittstelle, SLA: die Begriffe aus Angeboten und Agenturgesprächen, jeweils in zwei Sätzen erklärt und mit dem, was sie für Ihr Geschäft bedeuten.",
  path: "/glossar",
});

export default async function Page({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const lang = langOf((await searchParams).lang);
  return (
    <InnerShell lang={lang}>
      <GlossarHub lang={lang} />
      <JsonLd
        data={itemListSchema(
          GLOSSAR.map((x) => ({ name: x.term, path: `/glossar/${x.slug}` })),
          "Glossar von VP agency",
        )}
      />
    </InnerShell>
  );
}
