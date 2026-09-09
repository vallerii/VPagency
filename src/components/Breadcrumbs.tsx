import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";

interface BreadcrumbsProps {
  /** Without the home entry — it is prepended here. */
  items: Crumb[];
  /** Lighter colours for placement on a dark/tinted hero. */
  tone?: "default" | "onDark";
  className?: string;
}

/**
 * Shows where the page sits in the hierarchy and gives every child page a
 * link back to its parent (SEO_CONTENT_SYSTEM.md §5, §10). The matching
 * BreadcrumbList markup is emitted from the same array, so the visible
 * trail and the structured data can never drift apart.
 */
export function Breadcrumbs({ items, tone = "default", className = "" }: BreadcrumbsProps) {
  const crumbs: Crumb[] = [{ name: "Start", href: "/" }, ...items];

  const linkTone =
    tone === "onDark"
      ? "text-white/60 hover:text-white"
      : "text-ink-faint hover:text-ink";
  const currentTone = tone === "onDark" ? "text-white/90" : "text-ink-soft";

  return (
    <>
      <nav aria-label="Brotkrümelnavigation" className={className}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px]">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li key={`${crumb.name}-${i}`} className="flex items-center gap-2">
                {crumb.href && !isLast ? (
                  <Link href={crumb.href} className={`transition-colors ${linkTone}`}>
                    {crumb.name}
                  </Link>
                ) : (
                  <span className={currentTone} aria-current={isLast ? "page" : undefined}>
                    {crumb.name}
                  </span>
                )}
                {!isLast && (
                  <span aria-hidden="true" className={tone === "onDark" ? "text-white/30" : "text-ink-faint/60"}>
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
