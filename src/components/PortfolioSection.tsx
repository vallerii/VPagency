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
            className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-[20px] border border-border shadow-[0_1px_2px_rgba(23,23,23,0.03)] transition-colors hover:border-accent-hover/60"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${c.image})` }}
            />
            <div aria-hidden className="absolute inset-0 bg-black/40" />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/35 transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/40"
            />
            <span className="relative z-10 p-8 text-[22px] font-medium tracking-tight text-white">
              {c.name}
            </span>
            <p className="relative z-10 px-8 pb-8 text-[15px] leading-[1.5] text-white/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-3">
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
    <section id="portfolio" className="w-full px-6 sm:px-10 lg:px-16 ">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-[1440px] text-balance text-center text-[7.2vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[4.7vw] lg:text-[3.4vw] xl:text-[88px]"
      >
        Unsere Projekte
      </motion.h2>

      <div className="mx-auto mt-16 flex w-full max-w-[1440px] flex-col gap-4">
        {ROWS.map((row, i) => (
          <PortfolioRow key={i} row={row} rowIndex={i} />
        ))}
      </div>
    </section>
  );
}
