"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { BeforeAfterRow } from "@/data/services";

interface SystemResultProps {
  rows: BeforeAfterRow[];
}

// One dashboard frame stands in for "your system" — the same before/after
// copy runs down it as a list, so the result reads as one consolidated
// screen rather than five separate tools.
export function SystemResult({ rows }: SystemResultProps) {
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-16 grid w-full max-w-[1000px] grid-cols-1 overflow-hidden rounded-[24px] border border-border bg-bg sm:grid-cols-[220px_1fr]"
      >
        <div className="hidden flex-col gap-3 border-r border-border p-5 sm:flex">
          {["h-2.5 w-8", "h-2.5 w-12", "h-2.5 w-9", "h-2.5 w-10", "h-2.5 w-7"].map((c, i) => (
            <span key={i} className={`rounded-full ${i === 0 ? "bg-accent-hover" : "bg-border"} ${c}`} />
          ))}
        </div>

        <div className="flex flex-col divide-y divide-border">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-1.5 px-6 py-5 sm:flex-row sm:items-center sm:gap-6 sm:py-6"
            >
              <p className="text-[14px] leading-[1.3] text-ink-faint line-through sm:w-2/5 sm:text-[15px]">
                {row.before}
              </p>
              <p className="flex items-center gap-2.5 text-[15px] font-medium leading-[1.3] text-ink sm:text-[16px]">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-hover">
                  <Check className="h-3 w-3 text-bg" strokeWidth={3} />
                </span>
                {row.after}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
