"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CASES } from "@/data/cases";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full px-6 py-32 sm:px-10 lg:px-16 lg:py-40">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-3xl text-balance text-center text-[7.2vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[4.7vw] lg:text-[3.4vw] xl:text-[88px]"
      >
        Наши продукты
      </motion.h2>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CASES.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
          >
            <Link
              href={`/cases/${c.slug}`}
              className="group block h-full rounded-[20px] border border-border bg-card p-8 shadow-[0_1px_2px_rgba(23,23,23,0.03)] transition-colors hover:border-accent-hover/60 hover:bg-accent-tint"
            >
              <span className="text-[22px] font-medium tracking-tight text-ink">{c.name}</span>
              <p className="mt-4 text-[15px] leading-[1.5] text-ink-soft line-clamp-2">
                {c.problem}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent-hover opacity-0 transition-opacity group-hover:opacity-100">
                Смотреть кейс →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
