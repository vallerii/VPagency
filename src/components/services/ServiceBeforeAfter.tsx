"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { BeforeAfterRow } from "@/data/services";

interface ServiceBeforeAfterProps {
  rows: BeforeAfterRow[];
}

export function ServiceBeforeAfter({ rows }: ServiceBeforeAfterProps) {
  return (
    <section className="w-full bg-card px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-[1440px] text-balance text-center text-[10vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[6vw] lg:text-[4vw] xl:text-[76px]"
      >
        Das Ergebnis für Sie
      </motion.h2>

      <div className="mx-auto mt-16 mx-auto w-full max-w-[1440px] ">
        <div className="mb-8 grid grid-cols-2 gap-6 sm:gap-12">
          <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint sm:text-right sm:text-[14px]">
            Vorher
          </span>
          <span className="text-[13px] font-medium uppercase tracking-wide text-accent-hover sm:text-[14px]">
            Nachher
          </span>
        </div>

        <div className="relative">
          <span
            className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-border sm:block"
            aria-hidden="true"
          />

          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="grid grid-cols-2 gap-6 border-t border-border py-6 sm:gap-12 sm:py-7"
            >
              <p className="text-[16px] leading-[1.4] text-ink-faint line-through sm:text-right sm:text-[19px]">
                {row.before}
              </p>
              <p className="flex items-center gap-3 text-[16px] font-medium leading-[1.4] text-ink sm:text-[19px]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                </span>
                {row.after}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
