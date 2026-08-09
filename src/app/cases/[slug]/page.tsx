import Link from "next/link";
import { notFound } from "next/navigation";
import { CASES } from "@/data/cases";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

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

  return (
    <>
      <header className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <Link href="/" className="text-[21px] font-semibold tracking-tight text-ink">
          VP&nbsp;Digital
        </Link>
        <Link
          href="/#contact"
          className="text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
        >
          Обсудить проект
        </Link>
      </header>

      <main className="px-6 pb-32 pt-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#portfolio"
            className="mb-10 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink-faint transition-colors hover:text-ink"
          >
            ← Все проекты
          </Link>

          <h1 className="text-balance text-[12vw] font-medium leading-[1.05] tracking-tighter text-ink sm:text-[7vw] lg:text-[4.5vw] xl:text-[76px]">
            {item.name}
          </h1>

          <div
            className="mt-10 aspect-[16/9] w-full rounded-[20px] bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          />

          <div className="mt-16 flex flex-col gap-14">
            <section>
              <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
                Проблема
              </span>
              <p className="mt-4 text-[19px] leading-[1.6] text-ink sm:text-[22px]">
                {item.problem}
              </p>
            </section>

            <section>
              <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
                Решение
              </span>
              <p className="mt-4 text-[19px] leading-[1.6] text-ink sm:text-[22px]">
                {item.solution}
              </p>
            </section>

            <section>
              <span className="text-[13px] font-medium uppercase tracking-wide text-accent-hover">
                Результат
              </span>
              <p className="mt-4 text-[19px] leading-[1.6] text-ink sm:text-[22px]">
                {item.result}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
