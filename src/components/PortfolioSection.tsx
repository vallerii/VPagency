"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CASES, type CaseStudy } from "@/data/cases";

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

const ROWS = chunk(CASES, 3);

function PortfolioRow({ row, rowIndex }: { row: CaseStudy[]; rowIndex: number }) {
  const [hovered, setHovered] = useState<number | null>(null);

  const flexFor = (i: number) => {
    if (hovered === null) return 1;
    return hovered === i ? 1.8 : 0.7;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: rowIndex * 0.08 }}
      className="flex flex-col gap-4 lg:h-80 lg:flex-row"
    >
      {row.map((c, i) => (
        <motion.div
          key={c.slug}
          animate={{ flex: flexFor(i) }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          className="min-w-0"
        >
          <Link
            href={`/cases/${c.slug}`}
            className="group flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-[20px] border border-border bg-card p-8 shadow-[0_1px_2px_rgba(23,23,23,0.03)] transition-colors hover:border-accent-hover/60 hover:bg-accent-tint"
          >
            <span className="text-[22px] font-medium tracking-tight text-ink">{c.name}</span>
            <p className="mt-4 text-[15px] leading-[1.5] text-ink-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-3">
              {c.problem}
            </p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

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

      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-4">
        {ROWS.map((row, i) => (
          <PortfolioRow key={i} row={row} rowIndex={i} />
        ))}
      </div>
    </section>
  );
}
