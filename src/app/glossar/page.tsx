import Link from "next/link";
import { GLOSSAR, glossarByCluster } from "@/data/glossar";
import { routes } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { itemListSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata = pageMetadata({
  title: "Glossar — Digitalbegriffe in verständlichem Deutsch",
  description:
    "Conversion, Checkout, Schnittstelle, SLA: die Begriffe aus Angeboten und Agenturgesprächen — jeweils in zwei Sätzen erklärt und mit dem, was sie für Ihr Geschäft bedeuten.",
  path: routes.glossar,
});

// The glossary hub (SEO_CONTENT_SYSTEM.md §9): one entry per term, grouped
// by the situation the term comes up in rather than alphabetically — an
// A-Z list helps only someone who already knows the word they are looking
// for, which is exactly not our audience.
export default function GlossarPage() {
  const clusters = glossarByCluster();

  return (
    <>
      <Header />
      <main>
        <section className="w-full px-6 pb-16 pt-36 sm:px-10 lg:px-16 lg:pb-20 lg:pt-44">
          <div className="mx-auto w-full max-w-[1440px]">
            <Breadcrumbs className="mb-8" items={[{ name: "Glossar" }]} />

            <span className="mb-5 block text-[13px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
              Glossar
            </span>

            <h1 className="text-balance text-[11vw] font-heading font-semibold leading-[1.08] tracking-tighter text-ink sm:text-[7vw] lg:text-[4.4vw] xl:text-[76px]">
              Sie sollten nicht raten müssen,{" "}
              <span className="text-[#0E68FF]">was gemeint ist</span>
            </h1>

            <p className="mt-8 max-w-3xl text-[16px] leading-[1.55] text-ink-soft sm:text-[19px] lg:text-[22px]">
              In Angeboten von Digitalagenturen stehen Wörter, die niemand
              erklärt. Hier stehen sie in zwei Sätzen — und daneben, was sie in
              Ihrem Unternehmen konkret kosten oder einbringen.
            </p>
          </div>
        </section>

        <section className="w-full px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16">
            {clusters.map((cluster) => (
              <div key={cluster.id}>
                <div className="max-w-2xl">
                  <h2 className="font-heading text-[26px] font-semibold leading-[1.2] tracking-tight text-ink sm:text-[34px]">
                    {cluster.title}
                  </h2>
                  <p className="mt-3 text-[16px] leading-[1.55] text-ink-soft">
                    {cluster.description}
                  </p>
                </div>

                <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cluster.terms.map((term) => (
                    <li key={term.slug} className="flex">
                      <Link
                        href={routes.glossarTerm(term.slug)}
                        className="group flex w-full flex-col rounded-[18px] border border-border bg-card p-6 transition-colors hover:border-accent-line"
                      >
                        <h3 className="font-heading text-[19px] font-semibold leading-[1.25] tracking-tight text-ink">
                          {term.term}
                        </h3>
                        {term.aka && (
                          <span className="mt-1 text-[13px] text-ink-faint">
                            {term.aka}
                          </span>
                        )}
                        <p className="mt-3 text-[15px] leading-[1.55] text-ink-soft">
                          {term.short}
                        </p>
                        <span className="mt-auto pt-5 text-[14px] font-medium text-[#0E68FF] transition-colors group-hover:text-ink">
                          {term.term} erklärt →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
          <div className="mx-auto w-full max-w-[1440px] rounded-[28px] border border-border bg-card p-8 sm:p-12">
            <h2 className="max-w-2xl text-balance font-heading text-[24px] font-semibold leading-[1.2] tracking-tight text-ink sm:text-[32px]">
              Ihr Begriff fehlt hier?
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-ink-soft">
              Dann fragen Sie ihn einfach. Wir erklären, was dahintersteckt —
              und sagen auch, wenn Sie das entsprechende Angebot gar nicht
              brauchen.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              <Link
                href={routes.leistungen}
                className="text-[15px] font-medium text-[#0E68FF] underline decoration-[#0E68FF]/30 underline-offset-4 transition-colors hover:text-ink"
              >
                Alle Leistungen ansehen →
              </Link>
              <Link
                href={routes.projekte}
                className="text-[15px] font-medium text-[#0E68FF] underline decoration-[#0E68FF]/30 underline-offset-4 transition-colors hover:text-ink"
              >
                Projekte ansehen →
              </Link>
            </div>
          </div>
        </section>

        <ServiceCTA label="Ihre Frage" />
      </main>
      <Footer />

      <JsonLd
        data={itemListSchema(
          GLOSSAR.map((t) => ({
            name: t.term,
            path: routes.glossarTerm(t.slug),
          })),
          "Glossar von VP Digital",
        )}
      />
    </>
  );
}
