import Link from "next/link";
import { routes } from "@/data/site";
import type { ServiceDeepDive as DeepDive } from "@/data/service-details";

/**
 * "Thema im Detail" — the section that makes a service page useful on its
 * own, without a click further (SEO_CONTENT_SYSTEM.md §7, point 7).
 *
 * One H2 for the topic, one H3 per sub-question, and a contextual link to
 * the glossary wherever a block explains a term that has its own page. The
 * anchor text always names the target (§10) — never "hier klicken".
 *
 * Server component on purpose: it is the text that has to be in the HTML.
 */
export function ServiceDeepDive({ content }: { content: DeepDive }) {
  return (
    <section className="w-full px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="mb-4 block text-[13px] font-medium uppercase tracking-wide text-ink-faint">
              Im Detail
            </span>
            <h2 className="text-balance text-[8vw] font-heading font-semibold leading-[1.15] tracking-tighter text-ink sm:text-[4vw] lg:text-[2.6vw] xl:text-[50px]">
              {content.title}
            </h2>
            <span className="mt-6 block h-[2px] w-10 bg-accent-hover" aria-hidden="true" />
            <p className="mt-6 text-[16px] leading-[1.55] text-ink-soft sm:text-[19px]">
              {content.intro}
            </p>
          </div>

          <div className="flex flex-col">
            {content.blocks.map((block, i) => (
              <article
                key={block.heading}
                className={`flex flex-col border-border py-10 ${i > 0 ? "border-t" : "lg:pt-0"}`}
              >
                <h3 className="text-[21px] font-heading font-semibold leading-[1.25] tracking-tight text-ink sm:text-[26px]">
                  {block.heading}
                </h3>
                {block.paragraphs.map((text) => (
                  <p key={text.slice(0, 40)} className="mt-4 text-[16px] leading-[1.6] text-ink-soft sm:text-[18px]">
                    {text}
                  </p>
                ))}

                {block.termSlug && block.termLinkLabel && (
                  <Link
                    href={routes.glossarTerm(block.termSlug)}
                    className="mt-5 inline-flex w-fit items-center gap-1.5 text-[15px] font-medium text-link underline decoration-link/30 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/40"
                  >
                    {block.termLinkLabel}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
