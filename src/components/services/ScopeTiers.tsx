"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { ScopeItem, OutOfScopeItem } from "@/data/services";

interface ScopeTiersProps {
  included: ScopeItem[];
  addon: ScopeItem[];
  outOfScope: OutOfScopeItem[];
}

export function ScopeTiers({ included, addon, outOfScope }: ScopeTiersProps) {
  return (
    <section className="w-full px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-3xl text-balance text-center text-[7.2vw] font-medium leading-[1.1] tracking-tighter text-ink sm:text-[4.7vw] lg:text-[3.4vw] xl:text-[76px]"
      >
        Что входит
      </motion.h2>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[13px] font-medium uppercase tracking-wide text-accent-hover">
            Входит
          </span>
          <ul className="mt-5 flex flex-col gap-4">
            {included.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[16px] leading-[1.4] text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
            Дополнительно по запросу
          </span>
          <ul className="mt-5 flex flex-col gap-4">
            {addon.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[16px] leading-[1.4] text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                {item.text}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
            Не входит
          </span>
          <ul className="mt-5 flex flex-col gap-4">
            {outOfScope.map((item, i) => (
              <li key={i} className="text-[16px] leading-[1.4] text-ink-faint">
                {item.text}
                <br />
                <Link
                  href={`/${item.linkSlug}`}
                  className="font-medium text-accent-hover transition-colors hover:text-ink"
                >
                  {item.linkLabel} →
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
