"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CASES } from "@/data/cases";

interface RelatedCasesProps {
  category: string;
}

export function RelatedCases({ category }: RelatedCasesProps) {
  const matching = CASES.filter((c) => c.category === category);
  const hasMatching = matching.length > 0;
  const related = (hasMatching ? matching : CASES).slice(0, 3);
  const title = hasMatching ? "Похожие проекты" : "Наши проекты";
  const [hovered, setHovered] = useState<number | null>(null);

  if (related.length === 0) return null;

  const flexFor = (i: number) => {
    if (hovered === null) return 1;
    return hovered === i ? 1.8 : 0.7;
  };

  return (
    <section className="w-full px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-[1440px] text-balance text-center text-[10vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-16 flex mx-auto w-full max-w-[1440px]  flex-col gap-4 lg:h-80 lg:flex-row"
      >
        {related.map((c, i) => (
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
    </section>
  );
}
