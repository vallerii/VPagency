import Link from "next/link";
import { routes } from "@/data/site";
import { termsForService } from "@/data/glossar";

/**
 * The glossary strip at the bottom of a service page: the terms a client
 * hears in conversations about this service, each linking to its own
 * explanation (SEO_CONTENT_SYSTEM.md §10, "Leistung → Glossar").
 *
 * Renders nothing when no term names this service, so the block can never
 * appear empty just because the template has it.
 */
export function ServiceGlossary({ serviceSlug }: { serviceSlug: string }) {
  const terms = termsForService(serviceSlug);
  if (terms.length === 0) return null;

  return (
    <section className="w-full px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
      <div className="mx-auto w-full max-w-[1440px] rounded-[28px] border border-border bg-card p-8 sm:p-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 block text-[13px] font-medium uppercase tracking-wide text-ink-faint">
              Begriffe
            </span>
            <h2 className="text-balance font-heading text-[24px] font-semibold leading-[1.2] tracking-tight text-ink sm:text-[32px]">
              Wörter, die in diesen Projekten fallen
            </h2>
          </div>
          <Link
            href={routes.glossar}
            className="shrink-0 text-[15px] font-medium text-[#0E68FF] underline decoration-[#0E68FF]/30 underline-offset-4 transition-colors hover:text-ink"
          >
            Zum ganzen Glossar →
          </Link>
        </div>

        <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-ink-soft">
          Sie müssen keinen dieser Begriffe kennen, um mit uns zu arbeiten.
          Falls Sie einen davon trotzdem einmal nachschlagen wollen, steht er
          hier in zwei Sätzen erklärt.
        </p>

        <ul className="mt-8 flex flex-wrap gap-2.5">
          {terms.map((term) => (
            <li key={term.slug}>
              <Link
                href={routes.glossarTerm(term.slug)}
                className="inline-flex rounded-full border border-border bg-bg px-4 py-2 text-[15px] text-ink-soft transition-colors hover:border-accent-line hover:text-ink"
              >
                {term.term}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
