import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASES } from "@/data/cases";
import { getService } from "@/data/services";
import { routes } from "@/data/site";
import { pageMetadata, clampDescription } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Sheet } from "@/components/ui/Sheet";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = CASES.find((c) => c.slug === slug);
  if (!item) return {};

  return pageMetadata({
    title: `${item.name} — Kundenprojekt`,
    description: clampDescription(item.result),
    path: routes.projekt(slug),
  });
}

// A project page used to render its own stripped-down header with no
// navigation, which cut every case study out of the site's link graph
// (SEO_CONTENT_SYSTEM.md §10). It now carries the shared header and footer,
// breadcrumbs back to /projekte, and a link to the service the project
// belongs to — so a visitor who lands here from search has somewhere to go.
export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = CASES.find((c) => c.slug === slug);

  if (!item) {
    notFound();
  }

  const service = getService(item.category);
  const siblings = CASES.filter(
    (c) => c.category === item.category && c.slug !== item.slug,
  ).slice(0, 3);

  return (
    <>
      <Header />

      <main>
        {/* Title block on the page background, the case itself on a light sheet — the same split as the glossary and legal pages. */}
        <article>
          <header className="px-6 pb-16 pt-36 sm:px-10 lg:px-16 lg:pb-20 lg:pt-44">
            <div className="mx-auto max-w-3xl">
              <Breadcrumbs
                className="mb-8"
                items={[
                  { name: "Projekte", href: routes.projekte },
                  { name: item.name },
                ]}
              />

              <h1 className="text-balance text-[12vw] font-heading font-semibold leading-[1.05] tracking-tighter text-ink sm:text-[7vw] lg:text-[4.5vw] xl:text-[76px]">
                {item.name}
              </h1>

              {service && (
                <p className="mt-5 text-[16px] text-ink-soft">
                  Bereich:{" "}
                  <Link
                    href={routes.leistung(service.slug)}
                    className="font-medium text-[#0E68FF] underline decoration-[#0E68FF]/30 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/40"
                  >
                    {service.label}
                  </Link>
                </p>
              )}

              <div
                className="mt-10 aspect-[16/9] w-full rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
            </div>
          </header>

          <Sheet>
            <div className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
              <div className="mx-auto max-w-3xl">
                <div className="flex flex-col gap-14">
                  <section>
                    <h2 className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
                      Herausforderung
                    </h2>
                    <p className="mt-4 text-[19px] leading-[1.6] text-ink sm:text-[22px]">
                      {item.problem}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
                      Lösung
                    </h2>
                    <p className="mt-4 text-[19px] leading-[1.6] text-ink sm:text-[22px]">
                      {item.solution}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-[13px] font-medium uppercase tracking-wide text-[#0E68FF]">
                      Ergebnis
                    </h2>
                    <p className="mt-4 text-[19px] leading-[1.6] text-ink sm:text-[22px]">
                      {item.result}
                    </p>
                  </section>
                </div>

                {/* Onward links, in both directions (§10): back up to the hub,
                across to the service, and sideways to comparable projects. */}
                <div className="mt-16 flex flex-col gap-8 border-t border-border pt-10">
                  {service && (
                    <div>
                      <h2 className="font-heading text-[20px] font-semibold leading-[1.25] tracking-tight text-ink sm:text-[24px]">
                        Sie haben eine ähnliche Aufgabe?
                      </h2>
                      <p className="mt-3 text-[16px] leading-[1.55] text-ink-soft">
                        {service.heroSubtitle}
                      </p>
                      <Link
                        href={routes.leistung(service.slug)}
                        className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#0E68FF] underline decoration-[#0E68FF]/30 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/40"
                      >
                        {service.label} im Detail
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  )}

                  {siblings.length > 0 && (
                    <div>
                      <h2 className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
                        Weitere Projekte in diesem Bereich
                      </h2>
                      <ul className="mt-3 flex flex-wrap gap-2.5">
                        {siblings.map((sibling) => (
                          <li key={sibling.slug}>
                            <Link
                              href={routes.projekt(sibling.slug)}
                              className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-[15px] text-ink-soft transition-colors hover:border-accent-line hover:text-ink"
                            >
                              {sibling.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    href={routes.projekte}
                    className="inline-flex w-fit items-center gap-1.5 text-[15px] text-ink-faint transition-colors hover:text-ink"
                  >
                    ← Alle Projekte
                  </Link>
                </div>
              </div>
            </div>
          </Sheet>
        </article>

        <ServiceCTA label={item.name} />
      </main>

      <Footer />
    </>
  );
}
