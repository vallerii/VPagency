"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { BeforeAfterRow } from "@/data/services";

interface AutomationResultProps {
  rows: BeforeAfterRow[];
}

// Same before/after copy, given more visual weight per row — a split
// card with a big arrow, rather than a checklist — so the effect reads
// at a glance rather than being read line by line.
export function AutomationResult({ rows }: AutomationResultProps) {
  return (
    <section className="w-full bg-card px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-[1440px] text-balance text-center text-[10vw] font-heading font-semibold leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]"
      >
        Das Ergebnis für Sie
      </motion.h2>

      <div className="mx-auto mt-16 flex w-full max-w-[1000px] flex-col gap-5">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="grid grid-cols-1 items-stretch overflow-hidden rounded-[18px] border border-border sm:grid-cols-[1fr_auto_1fr]"
          >
            <div className="flex items-center bg-bg px-6 py-6 sm:py-8">
              <p className="text-[16px] leading-[1.4] text-ink-faint sm:text-[18px]">{row.before}</p>
            </div>
            <div className="flex items-center justify-center bg-bg px-4 py-2 sm:bg-transparent sm:py-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-hover">
                <ArrowRight className="h-4 w-4 rotate-90 text-bg sm:rotate-0" strokeWidth={2.5} />
              </span>
            </div>
            <div className="flex items-center bg-accent-tint px-6 py-6 sm:py-8">
              <p className="text-[17px] font-medium leading-[1.4] text-ink sm:text-[19px]">{row.after}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
