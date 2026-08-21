import Link from "next/link";
import { SERVICES } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 sm:flex-row sm:justify-between">
        <div>
          <img src="/logo.png" alt="VP Digital" className="h-auto w-[340px]" />
          <p className="mt-2 max-w-[340px] text-sm text-ink-faint">
            Wir verstehen Ihr Geschäftsproblem und entwickeln eine Lösung,
            die wirklich funktioniert
          </p>
        </div>

        <nav aria-label="Leistungen" className="flex flex-col gap-2.5">
          <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
            Leistungen
          </span>
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {s.label}
            </Link>
          ))}
          <Link
            href="/produkte"
            className="text-sm text-ink-soft transition-colors hover:text-ink"
          >
            Projekte
          </Link>
        </nav>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-ink-faint sm:flex-row">
        <span>© {new Date().getFullYear()} VP Digital. Alle Rechte vorbehalten.</span>
        <a href="mailto:hello@vpdigital.agency" className="transition-colors hover:text-ink">
          hello@vpdigital.agency
        </a>
      </div>
    </footer>
  );
}
