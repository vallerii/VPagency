export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 text-sm text-ink-faint sm:flex-row">
        <span className="font-semibold text-ink-soft">VP Digital</span>
        <span>© {new Date().getFullYear()} VP Digital. Все права защищены.</span>
        <a
          href="mailto:hello@vpdigital.agency"
          className="transition-colors hover:text-ink"
        >
          hello@vpdigital.agency
        </a>
      </div>
    </footer>
  );
}
