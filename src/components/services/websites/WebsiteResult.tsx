"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { BeforeAfterRow } from "@/data/services";

interface WebsiteResultProps {
  rows: BeforeAfterRow[];
}

// Each before/after pair lives inside its own small "browser frame" —
// the before line fades out as the after line fades in, on scroll.
function ResultFrame({ row, index }: { row: BeforeAfterRow; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
      className="overflow-hidden rounded-[16px] border border-border bg-bg"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
        <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
        <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <motion.p
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[16px] leading-[1.4] text-ink-faint line-through sm:text-[18px]"
        >
          {row.before}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-start gap-3 text-[17px] font-medium leading-[1.4] text-ink sm:text-[19px]"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-hover">
            <Check className="h-3.5 w-3.5 text-bg" strokeWidth={3} />
          </span>
          {row.after}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function WebsiteResult({ rows }: WebsiteResultProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#8FAFD4]/80 px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-[1440px] text-balance text-center text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]"
      >
        Das Ergebnis für Sie
      </motion.h2>

      <div className="mx-auto mt-16 grid w-full max-w-[1440px] grid-cols-1 gap-5 sm:grid-cols-2">
        {rows.map((row, i) => (
          <ResultFrame key={i} row={row} index={i} />
        ))}
      </div>
    </section>
  );
}
