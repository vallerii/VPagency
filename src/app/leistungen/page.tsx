import Link from "next/link";
import { SERVICES } from "@/data/services";
import { getServiceSeo } from "@/data/service-details";
import { GLOSSAR } from "@/data/glossar";
import { CASES } from "@/data/cases";
import { routes } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { itemListSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TechMarquee } from "@/components/TechMarquee";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata = pageMetadata({
  title: "Leistungen — Websites, Shops, Systeme und Automatisierung",
  description:
    "Ein Überblick über alles, was wir bauen: Websites, Online-Shops, individuelle Systeme, Automatisierung und laufende Betreuung. Mit Hinweis, wann welche Richtung passt.",
  path: routes.leistungen,
});

// The parent page of every service (SEO_CONTENT_SYSTEM.md §4, §5): it says
// what each direction solves, which situation it fits, and links to all of
// them. Until now the service pages had no parent at all — they were only
// reachable through the navigation.
export default function LeistungenPage() {
  return (
    <>
      <Header />
      <main>
        <section className="w-full px-6 pb-16 pt-36 sm:px-10 lg:px-16 lg:pb-20 lg:pt-44">
          <div className="mx-auto w-full max-w-[1440px]">
            <Breadcrumbs className="mb-8" items={[{ name: "Leistungen" }]} />

            <span className="mb-5 block text-[13px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
              Leistungen
            </span>

            <h1 className="text-balance text-[11vw] font-heading font-semibold leading-[1.08] tracking-tighter text-ink sm:text-[7vw] lg:text-[4.4vw] xl:text-[76px]">
              Sie müssen nicht wissen,
              <br className="hidden sm:block" />{" "}
              <span className="text-[#0E68FF]">welche Lösung Sie brauchen</span>
            </h1>

            <p className="mt-8 max-w-3xl text-[16px] leading-[1.55] text-ink-soft sm:text-[19px] lg:text-[22px]">
              Die meisten Anfragen bei uns beginnen nicht mit „wir brauchen eine
              neue Website“, sondern mit „irgendetwas läuft zu langsam“. Deshalb
              klären wir zuerst, woran es tatsächlich liegt — und schlagen erst
              dann eine der folgenden Richtungen vor.
            </p>
          </div>
        </section>

        <TechMarquee />

        <section className="w-full px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col">
            {SERVICES.map((service, i) => {
              const seo = getServiceSeo(service.slug);
              const projectCount = CASES.filter(
                (c) => c.category === service.slug,
              ).length;

              return (
                <article
                  key={service.slug}
                  className={`grid grid-cols-1 gap-6 border-border py-10 lg:grid-cols-[0.7fr_1.6fr] lg:gap-16 lg:py-14 ${
                    i > 0 ? "border-t" : "pt-0"
                  }`}
                >
                  <div>
                    <span
                      aria-hidden="true"
                      className="mb-3 block text-[13px] font-medium tracking-wide text-ink-faint"
                    >
                      0{i + 1}
                    </span>
                    <h2 className="text-balance font-heading text-[30px] font-semibold leading-[1.15] tracking-tight text-ink sm:text-[38px]">
                      <Link
                        href={routes.leistung(service.slug)}
                        className="transition-colors hover:text-[#0E68FF]"
                      >
                        {service.label}
                      </Link>
                    </h2>
                  </div>

                  <div>
                    <p className="text-[17px] leading-[1.55] text-ink sm:text-[20px]">
                      {service.heroSubtitle}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {service.included.slice(0, 4).map((item) => (
                        <li
                          key={item.text}
                          className="rounded-full border border-border bg-card px-3.5 py-1.5 text-[14px] text-ink-soft"
                        >
                          {item.text}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <Link
                        href={routes.leistung(service.slug)}
                        className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#0E68FF] underline decoration-[#0E68FF]/30 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/40"
                      >
                        {seo?.title ?? `${service.label} im Detail`}
                        <span aria-hidden="true">→</span>
                      </Link>

                      {projectCount > 0 && (
                        <Link
                          href={routes.projekte}
                          className="text-[15px] text-ink-faint transition-colors hover:text-ink"
                        >
                          {projectCount === 1
                            ? "1 Projekt in diesem Bereich"
                            : `${projectCount} Projekte in diesem Bereich`}
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Hub → hub: the two other entry points of the site, so no section
        is a dead end (§10). */}
        <section className="w-full px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
          <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-5 sm:grid-cols-2">
            <Link
              href={routes.projekte}
              className="group flex flex-col rounded-[20px] border border-border bg-card p-8 transition-colors hover:border-accent-line"
            >
              <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
                Projekte
              </span>
              <h2 className="mt-3 font-heading text-[24px] font-semibold leading-[1.2] tracking-tight text-ink">
                Was wir für andere Unternehmen gebaut haben
              </h2>
              <p className="mt-3 text-[16px] leading-[1.55] text-ink-soft">
                {CASES.length} Projekte mit Ausgangslage, Lösung und Ergebnis —
                damit Sie sehen, wie wir arbeiten, bevor Sie anfragen.
              </p>
              <span className="mt-5 text-[15px] font-medium text-[#0E68FF] transition-colors group-hover:text-ink">
                Projekte ansehen →
              </span>
            </Link>

            <Link
              href={routes.glossar}
              className="group flex flex-col rounded-[20px] border border-border bg-card p-8 transition-colors hover:border-accent-line"
            >
              <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
                Glossar
              </span>
              <h2 className="mt-3 font-heading text-[24px] font-semibold leading-[1.2] tracking-tight text-ink">
                Begriffe, die Ihnen Agenturen um die Ohren hauen
              </h2>
              <p className="mt-3 text-[16px] leading-[1.55] text-ink-soft">
                {GLOSSAR.length} Wörter aus Angeboten und Gesprächen — jeweils in
                zwei Sätzen erklärt und mit dem, was sie für Ihr Geschäft
                bedeuten.
              </p>
              <span className="mt-5 text-[15px] font-medium text-[#0E68FF] transition-colors group-hover:text-ink">
                Zum Glossar →
              </span>
            </Link>
          </div>
        </section>

        <ServiceCTA label="Ihr Projekt" />
      </main>
      <Footer />

      <JsonLd
        data={itemListSchema(
          SERVICES.map((s) => ({
            name: s.label,
            path: routes.leistung(s.slug),
          })),
          "Leistungen von VP Digital",
        )}
      />
    </>
  );
}
