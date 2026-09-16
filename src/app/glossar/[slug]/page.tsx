import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GLOSSAR, getTerm } from "@/data/glossar";
import { getService } from "@/data/services";
import { routes } from "@/data/site";
import { pageMetadata, clampDescription } from "@/lib/seo";
import { definedTermSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Sheet } from "@/components/ui/Sheet";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export function generateStaticParams() {
  return GLOSSAR.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) return {};

  return pageMetadata({
    title: `${term.term} — einfach erklärt`,
    description: clampDescription(term.definition),
    path: routes.glossarTerm(slug),
  });
}

// One term, one page (SEO_CONTENT_SYSTEM.md §9): definition, why it matters
// for the business, one example, and the links onward — to the service the
// term belongs to and to the neighbouring terms. Both directions of §10 are
// covered: service pages link here through ServiceGlossary, and every term
// links back to its service.
export default async function GlossarTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = getTerm(slug);

  if (!term) {
    notFound();
  }

  const services = term.relatedServices
    .map((s) => getService(s))
    .filter((s) => s !== undefined);
  const relatedTerms = term.relatedTerms
    .map((t) => getTerm(t))
    .filter((t) => t !== undefined);

  return (
    <>
      <Header />
      <main>
        {/* Term name on the page background, the explanation on a light sheet. */}
        <article>
          <header className="w-full px-6 pb-16 pt-36 sm:px-10 lg:px-16 lg:pb-20 lg:pt-44">
            <div className="mx-auto w-full max-w-3xl">
              <Breadcrumbs
                className="mb-8"
                items={[
                  { name: "Glossar", href: routes.glossar },
                  { name: term.term },
                ]}
              />

              <h1 className="text-balance text-[11vw] font-heading font-semibold leading-[1.08] tracking-tighter text-ink sm:text-[7vw] lg:text-[4vw] xl:text-[64px]">
                {term.term}
              </h1>
              {term.aka && (
                <p className="mt-3 text-[15px] text-ink-faint">Auch: {term.aka}</p>
              )}
            </div>
          </header>

          <Sheet>
            <div className="w-full px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
              <div className="mx-auto w-full max-w-3xl">
                <section>
                  <h2 className="font-heading text-[22px] font-semibold leading-[1.25] tracking-tight text-ink sm:text-[26px]">
                    Definition
                  </h2>
                  <p className="mt-4 text-[18px] leading-[1.6] text-ink sm:text-[21px]">
                    {term.definition}
                  </p>
                </section>

                <section className="mt-12">
                  <h2 className="font-heading text-[22px] font-semibold leading-[1.25] tracking-tight text-ink sm:text-[26px]">
                    Warum das wichtig ist
                  </h2>
                  <ul className="mt-4 flex flex-col gap-3">
                    {term.importance.map((line) => (
                      <li key={line.slice(0, 40)} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[11px] h-[6px] w-[6px] shrink-0 rounded-full bg-accent-hover"
                        />
                        <span className="text-[16px] leading-[1.6] text-ink-soft sm:text-[18px]">
                          {line}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>

                {term.example && (
                  <section className="mt-12">
                    <h2 className="font-heading text-[22px] font-semibold leading-[1.25] tracking-tight text-ink sm:text-[26px]">
                      Beispiel
                    </h2>
                    <p className="mt-4 rounded-[18px] border border-border bg-card p-6 text-[16px] leading-[1.6] text-ink-soft sm:text-[18px]">
                      {term.example}
                    </p>
                  </section>
                )}

                <section className="mt-12">
                  <h2 className="font-heading text-[22px] font-semibold leading-[1.25] tracking-tight text-ink sm:text-[26px]">
                    Verwandte Inhalte
                  </h2>

                  {services.length > 0 && (
                    <div className="mt-5">
                      <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
                        Passende Leistung
                      </span>
                      <ul className="mt-3 flex flex-col gap-3">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={routes.leistung(service.slug)}
                              className="group block rounded-[18px] border border-border bg-card p-5 transition-colors hover:border-accent-line"
                            >
                              <span className="font-heading text-[18px] font-semibold tracking-tight text-ink transition-colors group-hover:text-link">
                                {service.label}
                              </span>
                              <span className="mt-1.5 block text-[15px] leading-[1.55] text-ink-soft">
                                {service.heroSubtitle}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {relatedTerms.length > 0 && (
                    <div className="mt-8">
                      <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
                        Verwandte Begriffe
                      </span>
                      <ul className="mt-3 flex flex-wrap gap-2.5">
                        {relatedTerms.map((related) => (
                          <li key={related.slug}>
                            <Link
                              href={routes.glossarTerm(related.slug)}
                              className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-[15px] text-ink-soft transition-colors hover:border-accent-line hover:text-ink"
                            >
                              {related.term}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    href={routes.glossar}
                    className="mt-8 inline-flex text-[15px] text-ink-faint transition-colors hover:text-ink"
                  >
                    ← Alle Begriffe im Glossar
                  </Link>
                </section>
              </div>
            </div>
          </Sheet>
        </article>

        <ServiceCTA label={term.term} />
      </main>
      <Footer />

      <JsonLd
        data={definedTermSchema({
          term: term.term,
          definition: term.definition,
          path: routes.glossarTerm(term.slug),
        })}
      />
    </>
  );
}
